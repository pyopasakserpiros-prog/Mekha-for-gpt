/* sim.js — ลำดับการจำลองรายวัน: สภาพแวดล้อม > การผลิต > ก่อสร้าง > ปรุง/หลอม > บริโภค > บำเพ็ญ > สำรวจ > ศรัทธา > สุขภาพ > สังคม > โลก > ภัยคุกคาม > เหตุการณ์ */
(function (G) {
const clamp = G.clamp;
G.ctx = {};
G.fl = (r, src, a) => { const f = G.S.flowDay; (f[r] = f[r] || {}); f[r][src] = (f[r][src] || 0) + a; };
G.add = (r, a, src) => { G.S.res[r] = Math.max(0, G.S.res[r] + a); G.fl(r, src, a); };
G.can = cost => Object.keys(cost).every(k => G.S.res[k] >= cost[k]);
G.pay = (cost, src) => { for (const k in cost) G.add(k, -cost[k], src); };
G.season = () => Math.floor((G.S.day % G.YEAR) / 90);
G.fac = k => G.S.fac[k] || 0;
const workEff = c => (G.S.patch?.management.living ? (c.mx?.life?.mainShare ?? 1) : 1) * clamp((.35 + .65 * c.hp / 100) * (1 - .4 * Math.max(0, c.fat - 40) / 60) * (1 + G.trait(c, 'work')), .15, 1.6) * (c.sat < 25 ? .7 : 1);
G.workEff = workEff;
G.home = () => G.alive().filter(c => c.state === 'home');

G.stepDay = function () {
  const S = G.S; if (S.over) return;
  S.day++; S.flowDay = {}; G.ctx = { chUsed: 0, tq: {}, healers: 0, fed: 1, unpaid: 0 };
  env(); teachMap(); production(); construction(); crafting(); consumption();
  cultivation(); G.expeditionsDay(); faithDay(); health(); social();
  G.worldDay(); G.threatsDay(); events();
  if (S.day % 30 === 0) monthly();
  if (S.day % 5 === 0 && S.sect.policies.autoAssign) G.autoAssign();
  G.pendingDeadlines();
  for (const r in S.flowDay) { const a = S.flowAvg[r] = S.flowAvg[r] || {}; for (const s in S.flowDay[r]) a[s] = (a[s] || 0) * .9 + S.flowDay[r][s] * .1; for (const s in a) if (!(s in S.flowDay[r])) a[s] *= .9; }
  if (S.day % 30 === 0) { S.hist.push({ d: S.day, n: S.order.length, food: Math.round(S.res.food), silver: Math.round(S.res.silver) }); if (S.hist.length > 60) S.hist.shift(); }
};

function env() {
  const S = G.S, w = S.weather;
  if (S.day >= w.until) {
    const s = G.season(); let k = 'ปกติ', f = 1;
    const r = G.R();
    if (s === 1 && r < .14) { k = 'ภัยแล้ง'; f = .6; } else if (s === 0 && r < .09) { k = 'น้ำท่วม'; f = .75; } else if (s === 2 && r < .14) { k = 'ผลผลิตงอกงามพิเศษ'; f = 1.3; } else if (s === 3 && r < .15) { k = 'หนาวจัด'; f = .75; }
    S.weather = { k, f, until: S.day + 30 }; S.harvest = f;
    if (k !== 'ปกติ') G.log(1, 'world', 'สภาพอากาศ: ' + k + ' ผลผลิตเสบียงจะ' + (f > 1 ? 'เพิ่ม' : 'ลด') + ' ราคาเสบียงในตลาดจะเปลี่ยนตาม', { why: ['ฤดูกาลและความแปรปรวนของอากาศ'] });
  }
  for (const k in S.market) { const t = k === 'food' ? 1 / clamp(S.harvest, .6, 1.4) : 1; S.market[k] = clamp(S.market[k] + (t - S.market[k]) * .04 + (G.R() - .5) * .03, .6, 1.9); }
}

function teachMap() {
  if(G.N?.mentorBenefit){G.ctx.cap=3+G.fac('library');for(const c of G.alive())G.ctx.tq[c.id]=1;return}
  const S = G.S, T = G.alive().filter(c => c.job === 'teach' && c.state === 'home' && c.rank >= 2);
  const cap = 3 + G.fac('library'), load = {};
  G.alive().forEach(c => { if (c.master) load[c.master] = (load[c.master] || 0) + 1; });
  G.ctx.cap = cap;
  G.alive().forEach(c => {
    const m = c.master && S.chars[c.master]; if (!m || !T.includes(m)) { G.ctx.tq[c.id] = 1; return; }
    let q = 1 + .06 * clamp(m.realm - c.realm + 1, 0, 4) + m.at.int / 700 + G.trait(m, 'teach') * .5;
    if (m.path !== c.path) q = 1 + (q - 1) * .35;
    if (load[m.id] > cap) q = 1 + (q - 1) * cap / load[m.id];
    G.ctx.tq[c.id] = q;
  });
}

function production() {
  const S = G.S, F = S.fac, B = G.CFG, seas = [1, 1.1, 1.5, .4][G.season()];
  const PR = { farm: ['food', B.farmBase], herb: ['herb', B.herbBase], mine: ['ore', B.oreBase], wood: ['wood', B.woodBase], hunt: ['beast', B.huntBase], service: ['silver', B.serviceBase] };
  G.alive().forEach(c => {
    if (c.state !== 'home') return; const j = c.job;
    if (c.job === 'heal') G.ctx.healers += G.skill(c, 'heal') * workEff(c);
    if (!PR[j]) return;
    const [r, b] = PR[j]; let m = b * G.skill(c, j) * workEff(c);
    if (j === 'farm') m *= (1 + .25 * F.farm) * seas * S.weather.f;
    if (j === 'herb') { m *= (1 + .3 * F.garden); const mm = G.MANUALS[c.manual]; if (mm && mm.herb) m *= 1 + mm.herb; }
    if (j === 'hunt') { m *= clamp(.4 + (c.realm + 1) * .3, .5, 2.2); S.beastP -= .55 * G.skill(c, 'hunt'); if (G.ch(.018 / clamp(.5 + c.realm * .4, .5, 3))) G.inj(c, 1, 'ล่าอสูร'); }
    if (j === 'mine') { if (G.ch(.55 * G.skill(c, 'mine'))) G.add('stone', 1, 'ขุดแร่'); if (G.ch(.008)) G.inj(c, 1, 'เหมืองถล่ม'); }
    if (j === 'service') { m *= 1 + S.sect.rep / 200; }
    G.add(r, m, G.JOBS[j].n); c.fat += j === 'hunt' ? 4 : 3; c.sk[j] = Math.min(25, (c.sk[j] || 0) + .03);
  });
  if (G.ctx.healers === 0) { /* none */ }
}

function construction() {
  const S = G.S; const q = S.buildQ[0]; if (!q) return;
  let w = 0; G.alive().forEach(c => { if (c.state === 'home' && c.job === 'build') { w += G.skill(c, 'build') * workEff(c) * 3; c.fat += 3; c.sk.build = Math.min(25, (c.sk.build || 0) + .03); } });
  if (w <= 0) return; q.done += w;
  if (q.done >= q.work) {
    S.buildQ.shift(); S.fac[q.f] = q.lv; for (const k in q.cost) S.reserved[k] = Math.max(0, (S.reserved[k] || 0) - q.cost[k]);
    G.log(1, 'build', 'สร้างเสร็จ: ' + G.FAC[q.f].n + ' ระดับ ' + q.lv, { why: ['แรงงานช่างก่อสร้างสะสมครบ'] });
  }
}

function crafting() {
  const S = G.S; let W = 0;
  G.alive().forEach(c => { if (c.state === 'home' && c.job === 'craft') { W += G.skill(c, 'craft') * workEff(c) * 1.1; c.fat += 2.5; c.sk.craft = Math.min(25, (c.sk.craft || 0) + .03); } });
  if (W <= 0) return;
  if (G.S.patch?.orders.length) { const share=W*.5; G.N.workOrders(share); W-=share; }
  for (const id in G.CRAFT) {
    const r = G.CRAFT[id], cfg = S.craft[id]; if (!cfg.on || S.fac[r.fac] < 1) continue;
    const need = r.work / (1 + .25 * (S.fac[r.fac] - 1) + (S.fac[r.fac] ? .15 : 0)); let g = 0;
    while (W > .01 && g++ < 30) {
      let p = S.craftWork[id] || 0;
      if (p === 0) { if (S.res[id] >= cfg.t || !G.can(r.in)) break; G.pay(r.in, 'วัตถุดิบ' + r.n); S.reserved[id + '_in'] = 1; }
      const st = Math.min(W, need - p); p += st; W -= st;
      if (p >= need - 1e-9) { G.add(id, 1, 'ผลิต'); p = 0; delete S.reserved[id + '_in']; }
      S.craftWork[id] = p;
    }
  }
}

function consumption() {
  const S = G.S, P = S.sect.policies, F = S.fac, ration = [.75, 1, 1.3][P.ration];
  const cs = G.home(); let need = 0; const e = new Map();
  cs.forEach(c => { const x = ration * (c.path === 'body' ? 1.3 : 1) * G.CFG.eat; e.set(c, x); need += x; });
  const have = S.res.food; const ratio = need > 0 ? Math.min(1, have / need) : 1;
  G.add('food', -Math.min(have, need), 'อาหารศิษย์'); G.ctx.fed = ratio;
  if (ratio < 1) { cs.forEach(c => { c.hp = Math.max(1, c.hp - 3 * (1 - ratio) * 2); c.hungry = 1; }); if (S.day % 3 === 0) G.log(2, 'eco', 'เสบียงขาดแคลน! ศิษย์อดอาหาร สุขภาพและความพอใจกำลังลดลง', { key: 'starve', why: ['เสบียงในคลังไม่พอต่อการบริโภครายวัน'], pause: 'critical' }); }
  else cs.forEach(c => c.hungry = 0);
  if(G.N){const surplus=Math.max(0,S.res.food-cs.length*30);if(surplus)G.add('food',-surplus*.003,'เสบียงส่วนเกินเสื่อมสภาพ');}
  let up = 0; for (const k in F) up += F[k] * .35;
  G.alive().forEach(c => up += [0, 2, 4, 8, 12][c.rank] * [0, 1, 2][P.stipend] / 30);
  if (S.res.silver >= up) { G.add('silver', -up, 'ค่าบำรุงและเบี้ยเลี้ยง'); } else { G.add('silver', -S.res.silver, 'ค่าบำรุงและเบี้ยเลี้ยง'); G.ctx.unpaid = 1; G.log(2, 'eco', 'เงินหมด ไม่สามารถจ่ายเบี้ยเลี้ยง ศิษย์ไม่พอใจ', { key: 'nopay', pause: 'critical' }); }
}

/* ---------- ความก้าวหน้าบำเพ็ญ ---------- */
G.techBonus = function (c) {
  const o = { atk: 0, def: 0, heal: 0 }, m = G.MANUALS[c.manual]; if (!m) return o;
  m.tech.forEach(t => { if (c.realm >= t.r) { o.atk += t.atk || 0; o.def += t.def || 0; o.heal += t.heal || 0; } }); return o;
};
function cultivation() {
  const S = G.S, P = S.sect.policies;
  G.alive().forEach(c => {
    if (c.state !== 'home') return;
    if (c.pillCd > 0) c.pillCd--; c.tox = Math.max(0, c.tox - 1);
    const doCult = c.job === 'cultivate' || (c.path === 'faith' && c.job === 'preach' && c.realm >= 0);
    if (!doCult) return;
    const m = G.MANUALS[c.manual], PT = G.PATHS[c.path], N = PT.realms[c.realm]; if (!m || !N) return;
    if (c.prog >= N.need) { c.ready = 1; c.stuck++; if (c.state === 'home') tryBT(c); return; } c.ready = 0;
    let g = 1.4 * (c.apt[c.path] / 50) * m.sp * (1 + G.trait(c, 'cult')); c.lack = null;
    if (c.job === 'preach') g *= .45;
    let hm = 1; if (c.hp < 50) hm *= .6; if (c.inj.length) hm *= .8; if (c.mind < 30) hm *= .6; if (c.fat > 70) hm *= .8;
    g *= hm * (G.ctx.tq[c.id] || 1);
    if (c.path === 'qi') {
      G.ctx.chUsed++; const slots = 3 * S.fac.chamber;
      g *= G.ctx.chUsed <= slots ? 1 + .3 * S.fac.chamber : .65;
      if (m.cost.stone) { if (S.res.stone >= m.cost.stone) G.add('stone', -m.cost.stone, 'บำเพ็ญปราณ'); else { g *= .5; c.lack = 'หินวิญญาณไม่พอ'; } }
      if (m.cost.herb) { if (S.res.herb >= m.cost.herb) G.add('herb', -m.cost.herb, 'บำเพ็ญปราณ'); else g *= .7; }
      c.fat += 1.2;
    } else if (c.path === 'body') {
      const cap = 70 + c.at.con / 5 + (m.cap || 0) + c.realm * 2, rec = 3.4 + .5 * S.fac.yard + (P.ration === 2 ? 1.5 : 0) + (S.fac.clinic ? .4 : 0);
      if (c.restUntil > S.day || c.stress >= cap) {
        if (c.restUntil <= S.day) c.restUntil = S.day + Math.ceil((c.stress - (cap - 25)) / rec);
        c.stress = Math.max(0, c.stress - rec); c.fat = Math.max(0, c.fat - 6); c.hp = Math.min(100, c.hp + 1); c.lack = 'พักฟื้นหลังฝึกหนัก'; return;
      }
      g *= (.7 + c.stress / 150) * (1 + .2 * S.fac.yard) * [.8, 1, 1.1][P.ration];
      for (const k in m.cost) { if (S.res[k] >= m.cost[k]) G.add(k, -m.cost[k], 'บำเพ็ญกาย'); else { g *= .65; c.lack = 'ขาด' + G.RES[k].n; } }
      c.stress += 3.2 * m.stress; c.fat += 3.5; if (m.found) c.found = Math.min(100, c.found + .02);
      if (c.stress > 92 && G.ch(.08)) G.inj(c, 1, 'ฝึกหนักเกินกำลัง');
    } else if (c.path === 'faith') {
      const rv = P.reserve, cv = Math.min(Math.max(0, c.faith - rv), 1.4 + c.realm * .45);
      c.faith -= cv; g = g * .35 + cv * 1.15 * m.sp * (c.apt.faith / 50) * hm; if (cv <= 0 && c.faith < 5) c.lack = 'ศรัทธาไม่พอ';
    }
    const pk = c.path === 'qi' ? 'pillQi' : c.path === 'body' ? 'pillBody' : null;
    if (pk && P.autoPill && c.pillCd <= 0 && S.res[pk] >= 1 && c.prog < N.need - 5) { G.add(pk, -1, 'ยาบำรุงบำเพ็ญ'); c.pillCd = 6; c.tox += 8; if (pk === 'pillBody') c.stress = Math.max(0, c.stress - 12); }
    if (c.pillCd > 0 && pk) g *= 1.4 * (c.tox > 40 ? .75 : 1);
    c.prog = Math.min(N.need, c.prog + g * (G.N ? G.N.training(c) : 1));
    if (c.prog >= N.need) { c.ready = 1; G.log(1, 'cult', c.name + ' สะสมพลังครบ พร้อมเตรียมทะลวงขั้น "' + N.n + '"', { ids: [c.id], key: 'ready' + c.id }); }
  });
}

G.btInfo = function (c, mode) {
  const S = G.S, PT = G.PATHS[c.path], R = PT.realms[c.realm], m = G.MANUALS[c.manual]; mode = mode || 'normal';
  const o = { ready: false, blk: [], fac: [], req: {}, p: 0, mode };
  if (!R) { o.blk.push('ถึงขีดสูงสุดของเส้นทางแล้ว'); return o; }
  if (c.prog < R.need) o.blk.push('ความก้าวหน้ายังไม่ครบ (' + G.f0(c.prog) + '/' + R.need + ')');
  if (c.state !== 'home') o.blk.push('ไม่ได้อยู่ในสำนัก');
  if (c.hp < 40) o.blk.push('ร่างกายอ่อนแอเกินไป (สุขภาพต่ำกว่า 40)');
  if (c.path === 'qi') o.req.stone = 3 * (c.realm + 1);
  if (c.path === 'body') { o.req.herb = 5 * (c.realm + 1); if (c.stress > 60) o.blk.push('ร่างกายยังเครียดจากการฝึก (ควรพักก่อน)'); }
  if (c.path === 'faith') {
    o.req.faith = 25 + 15 * c.realm; if (c.faith < o.req.faith) o.blk.push('ศรัทธาสะสมไม่พอ (ต้องใช้ ' + o.req.faith + ' มี ' + G.f0(c.faith) + ')');
    if (c.realm >= 2 && S.fac.shrine < 1) o.blk.push('ต้องมีศาลเทพ');
    const v = S.villages.find(x => x.id === c.patron); if (c.realm >= 1 && (!v || v.trust < 45)) o.blk.push('ชุมชนที่ดูแลยังไม่ไว้วางใจพอ (ความเชื่อมั่นต่ำกว่า 45)');
  }
  for (const k in o.req) if (k !== 'faith' && S.res[k] < o.req[k]) o.blk.push('ขาด' + G.RES[k].n + ' ' + o.req[k]);
  if (mode === 'safe' && S.res.pillFound < 1) o.blk.push('ไม่มียาฐานมั่นสำหรับโหมดปลอดภัย');
  if (mode === 'rush' && S.res[c.path === 'body' ? 'pillBody' : 'pillQi'] < 1 && c.path !== 'faith') o.blk.push('ไม่มียาเร่งสำหรับโหมดเร่ง');
  let p = .55; const add = (l, v) => { if (Math.abs(v) >= .004) { o.fac.push([l, v]); p += v; } };
  add('ฐานรากของผู้บำเพ็ญ', (c.found - 50) / 200); add('ความเข้าใจ', (c.at.int - 50) / 400);
  add('ครูผู้สอน', ((G.ctx.tq && G.ctx.tq[c.id]) || 1) - 1 > 0 ? (((G.ctx.tq[c.id]) - 1) * .5) : 0); add('สภาพจิต', (c.mind - 60) / 300);
  add('คัมภีร์ "' + (m ? m.n : '-') + '"', m ? m.bt : 0); add('อุปนิสัย', G.trait(c, 'bt')); add('ความยากของระดับ', -.045 * c.realm);
  if (c.inj.length) add('บาดเจ็บค้าง', -.12); if (c.fat > 60) add('เหนื่อยล้า', -.05);
  if (c.path === 'qi') add('ห้องบำเพ็ญปราณ', .03 * S.fac.chamber);
  if (c.path === 'body') { add('ลานหลอมกาย', .03 * S.fac.yard); }
  if (c.path === 'faith') { add('ศาลเทพ', .03 * S.fac.shrine); const v = S.villages.find(x => x.id === c.patron); if (v) add('ความเชื่อมั่นของชุมชน', (v.trust - 50) / 400); }
  if (mode === 'safe') add('ยาฐานมั่น (โหมดปลอดภัย)', .15); if (mode === 'rush') add('ยาเร่ง (โหมดเร่ง)', .08);
  o.p = clamp(p, .08, .95); o.ready = o.blk.length === 0; return o;
};
function tryBT(c) {
  const P = G.S.sect.policies; if (P.autoBT === 'off' || c.mode === 'hold' || c.waitBT > G.S.day) return;
  const mode = G.S.res.pillFound >= 1 ? 'safe' : 'normal';
  const i = G.btInfo(c, mode); if (!i.ready) return;
  if (i.p >= (P.autoBT === 'bold' ? .42 : .62)) G.attemptBT(c, mode);
}
G.attemptBT = function (c, mode) {
  const S = G.S, i = G.btInfo(c, mode); if (!i.ready) return { ok: false, msg: i.blk[0] };
  const R = G.PATHS[c.path].realms[c.realm], old = R.n;
  for (const k in i.req) { if (k === 'faith') c.faith -= i.req[k]; else G.add(k, -i.req[k], 'ทะลวงขั้น'); }
  if (mode === 'safe') G.add('pillFound', -1, 'ทะลวงขั้น'); if (mode === 'rush') G.add(c.path === 'body' ? 'pillBody' : 'pillQi', -1, 'ทะลวงขั้น');
  const r = G.R(), p = i.p; c.waitBT = S.day + 10;
  if (r < p) {
    c.realm++; c.prog = 0; c.stuck = 0; c.ready = 0; c.found = clamp(c.found + (mode === 'safe' ? 4 : mode === 'rush' ? -3 : 1), 0, 100);
    c.life = G.calcLife(c); c.hp = 100; c.mind = Math.min(100, c.mind + 6); c.fat = Math.max(0, c.fat - 20); c.stress = 0; S.stats.breakthroughs++;
    const nn = G.PATHS[c.path].realms[c.realm] ? G.PATHS[c.path].realms[c.realm].n : 'ขีดสูงสุด';
    if (c.path === 'faith' && c.realm >= 1 && !c.vow) { c.vow = 'ปกป้องชุมชนที่ดูแลจนลมหายใจสุดท้าย'; G.bio(c, 'ให้คำสาบานต่อชุมชน: ' + c.vow); }
    G.bio(c, 'ทะลวงจาก "' + old + '" สู่ "' + nn + '"' + (mode === 'safe' ? ' (อย่างปลอดภัย)' : mode === 'rush' ? ' (แบบเร่ง)' : ''));
    G.log(c.realm >= 2 || c.follow ? 2 : 1, 'cult', c.name + ' ทะลวงสำเร็จสู่ขั้น "' + nn + '"!', { ids: [c.id], why: i.fac.map(f => f[0] + ' ' + (f[1] > 0 ? '+' : '') + Math.round(f[1] * 100) + '%'), pause: (c.realm >= 2 || c.follow) ? 'breakthrough' : null });
    return { ok: true, msg: 'ทะลวงสำเร็จ' };
  }
  const gap = r - p; S.stats.fails++; let t = '';
  if (gap < .15) { c.prog *= .8; t = 'เสียเวลาและความก้าวหน้าบางส่วน'; }
  else if (gap < .35) { c.prog *= .6; c.mind = Math.max(0, c.mind - 8); t = 'ถอยกลับชั่วคราว จิตใจสั่นคลอน'; }
  else if (gap < .55) { c.prog *= .5; G.inj(c, 1, 'ทะลวงขั้นล้มเหลว'); c.found = Math.max(0, c.found - 5); t = 'บาดเจ็บและฐานรากร้าว'; }
  else { c.prog *= .35; G.inj(c, 2, 'ทะลวงขั้นล้มเหลวรุนแรง'); c.found = Math.max(0, c.found - (mode === 'rush' ? 18 : 12)); c.mind = Math.max(0, c.mind - 15); t = 'บาดเจ็บสาหัส ฐานรากเสียหายหนัก'; if (gap > .7 && mode === 'rush' && G.ch(.2)) { G.die(c, 'ปราณตีกลับขณะทะลวงขั้นแบบเร่ง'); return { ok: false, msg: 'เสียชีวิต' }; } }
  G.bio(c, 'ทะลวง "' + old + '" ล้มเหลว: ' + t);
  G.log(gap >= .35 || c.follow ? 2 : 1, 'cult', c.name + ' ทะลวงขั้น "' + old + '" ล้มเหลว: ' + t, { ids: [c.id], why: ['โอกาสสำเร็จประมาณ ' + Math.round(p * 100) + '%'].concat(i.fac.filter(f => f[1] < 0).map(f => f[0] + ' ' + Math.round(f[1] * 100) + '%')), pause: gap >= .35 ? 'breakthrough' : null });
  return { ok: false, msg: t };
};

/* ---------- ศรัทธาและชุมชน ---------- */
G.needInfo = {
  protect: { n: 'สัตว์ร้ายคุกคามหมู่บ้าน', dom: 'protect' }, heal: { n: 'โรคระบาดในหมู่บ้าน', dom: 'heal' },
  nature: { n: 'ภัยพิบัติธรรมชาติกระทบพืชผล', dom: 'nature' }, war: { n: 'ทหารและโจรรุกรานชายแดน', dom: 'war' }
};
function faithDay() {
  const S = G.S, cs = G.alive().filter(c => c.state === 'home' && c.job === 'preach');
  S.villages.forEach(v => {
    const pr = cs.filter(c => c.patron === v.id); let tot = 0;
    pr.forEach(c => {
      const m = G.MANUALS[c.manual]; const match = c.path === 'faith' ? (m.dom === v.dom ? 1 : .6) : 0;
      const g = (v.pop / 120) * (v.trust / 100) * (.4 + v.devo / 100) * (v.att / 100) * match * G.skill(c, 'preach') * (1 + .2 * S.fac.shrine) * (1 - v.rival) * workEff(c) * (m ? m.sp : 1) * 3;
      c.faith = Math.min(300*(1+(G.N?G.N.bonus(c,'faith'):0)), c.faith + g); tot += g; c.fat += 1.5; c.sk.preach = Math.min(25, (c.sk.preach || 0) + .03);
      if (m && m.dom === 'nature' && G.season() === 2) c.faith += g * .5;
      if (c.path !== 'faith') { v.trust = Math.min(100, v.trust + .03); }
    });
    v.att = clamp(v.att + (100 - v.att) * .02 - pr.length * 1.6 * v.att / 100, 0, 100);
    if (pr.length && tot > 0) { v.devo = Math.min(100, v.devo + .12); v.trust = Math.min(100, v.trust + .04 * (pr.length ? pr.reduce((n,c)=>n+(G.N?G.N.trait(c,'trust'):1),0)/pr.length : 1)); }
    else { v.devo = Math.max(10, v.devo - .03); }
    v.rival = clamp(v.rival + (.25 - .06 * S.fac.shrine - v.rival) * .01 + (S.factions[3].dead ? -.001 : 0), 0, .8);
    v.stab = clamp(v.stab + (v.trust - 50) * .002, 10, 100);
    v.pop += v.pop * .00004 * (v.stab > 40 ? 1 : -1);
    if (!v.need) {
      let p = .003; const k = v.dom;
      if (k === 'protect') p += S.beastP > 50 ? .02 : 0; if (k === 'heal') p += G.season() === 3 ? .01 : .003;
      if (k === 'nature') p += S.weather.f < 1 ? .03 : 0; if (k === 'war') p += (S.factions[5].dead ? 0 : .006) + (S.factions[0].rel < -20 ? .004 : 0);
      if (G.R() < p) { const type = G.R() < .75 ? k : G.pick(['protect', 'heal', 'nature', 'war']); v.need = { type, sev: G.ri(1, 3), day: S.day, due: S.day + 10 }; needArrive(v); }
    } else if (S.day >= v.need.due) needExpire(v);
  });
  G.alive().forEach(c => { if (c.path === 'faith' && c.faith > 0 && c.state === 'home' && c.job !== 'preach' && c.job !== 'cultivate') { c.faith = Math.max(0, c.faith - .15); } });
}
const needCost = n => 6 + 7 * n.sev;
function needArrive(v) {
  const S = G.S, n = v.need, info = G.needInfo[n.type];
  const pt = G.alive().filter(c => c.patron === v.id && c.state === 'home' && c.path === 'faith');
  G.log(1, 'faith', v.n + ': ' + info.n + ' (ความรุนแรง ' + n.sev + ') เหลือเวลา 10 วัน', { key: 'need' + v.id });
  const best = pt.sort((a, b) => b.faith - a.faith)[0];
  if (best && S.sect.policies.protect && best.faith >= needCost(n) + 5) { G.faithSpend(v.id, true); return; }
  const anyF = G.alive().filter(c => c.path === 'faith' && c.faith >= needCost(n));
  if (anyF.length) G.pend({ type: 'faith', cat: 'faith', title: v.n + ' ขอความช่วยเหลือ', text: info.n + ' (ความรุนแรง ' + n.sev + ') ใช้ศรัทธา ' + needCost(n) + ' เพื่อปกป้องทันที หรือเก็บไว้ทะลวงขั้น? ถ้าไม่ช่วย ชุมชนจะสูญเสียและความเชื่อมั่นลดลง', due: n.due, opts: [{ t: 'ใช้ศรัทธา ' + needCost(n) + ' ช่วยชุมชน', a: 'faithSpend', arg: v.id }, { t: 'เก็บศรัทธาไว้', a: 'nop' }], def: 1 });
}
G.faithSpend = function (vid, auto) {
  const S = G.S, v = S.villages.find(x => x.id === vid); if (!v || !v.need) return false;
  const n = v.need, cost = needCost(n);
  const pool = G.alive().filter(c => c.path === 'faith' && c.state === 'home' && c.faith >= cost).sort((a, b) => (b.patron === vid) - (a.patron === vid) || b.faith - a.faith);
  const c = pool[0]; if (!c) return false;
  c.faith -= cost; const m = G.MANUALS[c.manual], match = m.dom === n.type;
  c.faith += cost * (match ? .6 : .25); v.trust = Math.min(100, v.trust + 8 + 2 * n.sev); v.devo = Math.min(100, v.devo + 6); v.att = Math.min(100, v.att + 15);
  G.bio(c, 'ใช้ศรัทธา ' + cost + ' ปกป้อง' + v.n);
  G.log(1, 'faith', c.name + ' ใช้ศรัทธา ' + cost + ' แก้ไข' + G.needInfo[n.type].n + 'ที่' + v.n + (match ? ' (ตรงสายธรรม ได้ศรัทธาคืนมาก)' : ''), { ids: [c.id], why: ['ศรัทธาที่ใช้ไปทำให้ความเชื่อมั่นของชุมชนเพิ่มขึ้น'] });
  v.need = null; return true;
};
function needExpire(v) {
  const S = G.S, n = v.need, cost = needCost(n);
  const guards = G.alive().filter(c => c.job === 'guard' && c.state === 'home').length, healers = G.ctx.healers;
  let mit = (n.type === 'protect' || n.type === 'war') ? Math.min(.6, guards * .2) : n.type === 'heal' ? Math.min(.6, healers * .25 + S.fac.clinic * .1) : 0;
  const loss = v.pop * .03 * n.sev * (1 - mit); v.pop -= loss; v.trust = Math.max(0, v.trust - 8 * n.sev * (1 - mit)); v.stab = Math.max(10, v.stab - 5 * n.sev);
  const pt = G.alive().find(c => c.patron === v.id && c.path === 'faith' && c.vow);
  let t = v.n + ' ไม่ได้รับการช่วยเหลือทันเวลา สูญเสียประชากร ' + Math.round(loss) + ' คน ความเชื่อมั่นลดลง';
  const why = ['ไม่มีผู้ใช้ศรัทธาแก้ไขภายในเวลาที่กำหนด'];
  if (pt && pt.faith >= cost) { pt.faith *= .5; pt.mind = Math.max(0, pt.mind - 15); G.bio(pt, 'ละเมิดคำสาบานที่มีต่อ' + v.n + ' (ไม่ช่วยทั้งที่มีพลัง)'); t += ' และ ' + pt.name + ' ผิดคำสาบาน ศรัทธาลดครึ่งหนึ่ง'; why.push('ผู้ดูแลมีศรัทธาพอแต่ไม่ใช้ จึงผิดคำสาบาน'); v.devo = Math.max(0, v.devo - 10); }
  G.log(2, 'faith', t, { why, pause: 'faith' }); v.need = null;
}

/* ---------- สุขภาพ อายุ ---------- */
G.inj = function (c, sev, why) {
  const S = G.S; c.inj.push({ n: why, days: 6 * sev + G.ri(0, 5), sev }); c.hp = Math.max(0, c.hp - 12 * sev); c.sat -= 2 * sev;
  if (c.hp <= 0) { if (G.ch(Math.max(.02,.4 - .1 * S.fac.clinic-(G.N?.hasTrait(c,'destiny')?.15:0)))) { G.die(c, why + 'จนสาหัส'); return; } c.hp = 4; }
  if (sev >= 2 || c.follow) G.log(sev >= 2 ? 2 : 1, 'inj', c.name + ' บาดเจ็บ (' + why + ')', { ids: [c.id], key: 'inj' + c.id });
};
function health() {
  const S = G.S;
  G.alive().forEach(c => {
    const hr = 1 + .5 * S.fac.clinic + G.trait(c, 'heal') + G.ctx.healers * .12 + (c.job === 'rest' ? 1 : 0);
    for (let i = c.inj.length - 1; i >= 0; i--) {
      const j = c.inj[i];
      if (j.sev >= 1 && S.res.pillHeal >= 1 && G.ch(.3)) { G.add('pillHeal', -1, 'รักษาบาดเจ็บ'); j.days -= 4; c.hp = Math.min(100, c.hp + 8); }
      j.days -= hr*(G.N?G.N.trait(c,'recover'):1); if (j.days <= 0) c.inj.splice(i, 1);
    }
    c.hp = Math.min(100, c.hp + (c.inj.length ? .6 : 2) * (c.job === 'rest' ? 2.2 : 1) * (1 + G.trait(c, 'heal'))*(G.N?G.N.trait(c,'recover'):1));
    c.fat = clamp(c.fat - 2 - (c.job === 'rest' ? 12 : 0), 0, 100);
    c.mind = clamp(c.mind + (c.mind < 65 ? .3 : -.1) + G.trait(c, 'mind') * .05 + (c.manual === 'qi_ice' ? .1 : 0), 0, 100);
    c.tox = Math.max(0, c.tox);
    if ((S.day - c.born) % G.YEAR === 0 && S.day > c.born) { const a = G.age(c); if (a % 10 === 0) G.bio(c, 'มีอายุครบ ' + a + ' ปี'); }
    const a = G.age(c);
    if (a >= c.life && G.ch(.004 * (1 + a - c.life))) G.die(c, 'ชราภาพสิ้นอายุขัย');
    else if (c.state === 'home' && G.ch(.00003 * (c.hungry ? 20 : 1) * (a > c.life - 5 ? 4 : 1))) G.die(c, 'โรคภัยฉับพลัน');
  });
  const L = S.chars[S.sect.leader]; if (!S.sect.leader && !S.pending.some(p => p.type === 'succ') && !S.over) G.startSuccession();
}
G.die = function (c, why) {
  const S = G.S; if (!S.chars[c.id]) return;
  delete S.chars[c.id]; S.order = S.order.filter(i => i !== c.id); c.state = 'dead';
  S.dead[c.id] = { id: c.id, name: c.name, path: c.path, realm: c.realm, rank: c.rank, died: S.day, why, bio: c.bio.slice(-6), born: c.born }; S.deadOrder.push(c.id);
  if (S.deadOrder.length > G.CFG.deadMax) { delete S.dead[S.deadOrder.shift()]; }
  S.stats.deaths++;
  G.alive().forEach(o => { delete o.rel[c.id]; if (o.master === c.id) o.master = null; if (G.ch(.3) && c.rel[o.id] > 40) { o.mind = Math.max(0, o.mind - 8); } });
  G.alive().forEach(o => { if (!o.master && o.rank < 3) o.master = G.pickMaster(o); });
  S.exps.forEach(e => { e.mem = e.mem.filter(i => i !== c.id); });
  G.log(2, 'death', c.name + ' (' + G.RANKS[c.rank] + ') เสียชีวิต: ' + why, { ids: [c.id], pause: 'death', why: ['อายุ ' + G.age(c) + ' ปี', 'ขั้น ' + G.PATHS[c.path].realms[Math.min(c.realm, G.PATHS[c.path].realms.length - 1)].n] });
  if (S.sect.leader === c.id) { S.sect.leader = null; G.startSuccession(); }
  if (!S.order.length) { S.over = true; G.log(2, 'sys', 'สำนักล่มสลาย ไม่เหลือศิษย์ใดอีก', { pause: 'critical' }); }
};
G.startSuccession = function () {
  const S = G.S; if (S.pending.some(p => p.type === 'succ')) return;
  let cand = G.alive().filter(c => c.rank >= 2 && c.state !== 'gone'); if (!cand.length) cand = G.alive();
  if (!cand.length) return;
  const sc = c => c.realm * 10 + c.loy / 5 + c.at.admin / 8 + c.at.int / 10 + c.rank * 4 + (c.state === 'home' ? 3 : 0);
  cand.sort((a, b) => sc(b) - sc(a)); cand = cand.slice(0, 4);
  G.pend({ type: 'succ', cat: 'critical', title: 'เลือกเจ้าสำนักคนใหม่', text: 'เจ้าสำนักสิ้นชีพ สำนักต้องเลือกผู้สืบทอด ผู้ที่ไม่ได้รับเลือกแต่ทะเยอทะยานอาจไม่พอใจ ถ้าไม่เลือก ระบบจะตั้งผู้มีคุณสมบัติสูงสุด', due: S.day + 12, opts: cand.map(c => ({ t: c.name + ' (' + G.RANKS[c.rank] + ' ' + G.PATHS[c.path].realms[Math.min(c.realm, G.PATHS[c.path].realms.length - 1)].n + ' ภักดี ' + Math.round(c.loy) + ')', a: 'succeed', arg: c.id })), def: 0 });
};
G.succeed = function (id) {
  const S = G.S, c = S.chars[id]; if (!c) return;
  const ranked = G.alive().filter(x => x.rank >= 2 && x.id !== id);
  const top = ranked.slice().sort((a, b) => b.realm - a.realm)[0];
  S.sect.leader = id; c.rank = 4; c.job = 'teach'; c.jobFix = 1; c.loy = Math.min(100, c.loy + 10); S.sect.gen++;
  ranked.forEach(o => { if (o.at.amb > 55 || G.trait(o, 'amb') > 0) { o.loy -= 10; o.sat -= 6; o.grudge++; G.relAdd(o, c, -8); } else if (o.rel[id] > 40) o.loy += 2; });
  if (top && top.id !== id && top.realm > c.realm) { S.sect.rep -= 3; G.log(1, 'sect', 'มีผู้เห็นว่า ' + top.name + ' แข็งแกร่งกว่าและควรได้เป็นเจ้าสำนัก ความชอบธรรมสั่นคลอน', { ids: [top.id] }); top.loy -= 8; }
  G.bio(c, 'ขึ้นเป็นเจ้าสำนักรุ่นที่ ' + S.sect.gen);
  G.log(2, 'sect', c.name + ' ขึ้นเป็นเจ้าสำนักรุ่นที่ ' + S.sect.gen, { ids: [id] });
};

/* ---------- ความสัมพันธ์ ความพอใจ ---------- */
G.satWhy = function (c) {
  const S = G.S, P = S.sect.policies, it = []; let t = 55;
  const a = (l, v) => { if (v) { it.push([l, Math.round(v)]); t += v; } };
  a('อาหาร', [-8, 0, 6][P.ration]); if (c.hungry) a('อดอยาก', -15);
  const idx = S.order.indexOf(c.id); if (idx >= 6 * S.fac.dorm) a('ที่พักแออัด', -8);
  a('เบี้ยเลี้ยง', [-6, 0, 3][P.stipend]); if (G.ctx.unpaid) a('ไม่ได้รับเบี้ยเลี้ยง', -6);
  if (G.trait(c, 'amb') > 0 && c.rank < 2 && S.day - c.joined > 180) a('ทะเยอทะยานแต่ยังไม่ถูกเลื่อนขั้น', -10);
  if (c.realm >= 2 && c.rank < 2) a('ฝีมือสูงกว่ายศ', -8);
  if (c.job === 'lazy') { }
  if (G.trait(c, 'work') < 0 && ['mine', 'hunt', 'build', 'farm'].includes(c.job)) a('ไม่ชอบงานหนัก', -5);
  if (c.job === 'cultivate') a('ได้บำเพ็ญ', 3); if (c.fair > 1) a('ถูกปฏิบัติไม่เป็นธรรม', -Math.min(25, c.fair)); if (c.reward > 1) a('ได้รับรางวัล/การยอมรับ', Math.min(15, c.reward));
  if (c.inj.some(j => j.sev >= 2)) a('บาดเจ็บหนัก', -6); if (c.stuck > 30) a('ติดคอขวดนาน', -6);
  let fr = 0, en = 0; for (const k in c.rel) { if (c.rel[k] >= 50) fr++; if (c.rel[k] <= -50) en++; }
  if (fr) a('มีมิตรสหาย', Math.min(6, fr * 2)); if (en) a('มีศัตรูในสำนัก', -Math.min(8, en * 3));
  if (c.master) a('มีอาจารย์', 3); if (S.sect.leader == null) a('สำนักไร้เจ้าสำนัก', -4);
  return { total: clamp(t, 0, 100), it };
};
function social() {
  const S = G.S, cs = G.home(); if (cs.length < 2) return;
  for (let i = 0; i < 6; i++) {
    const a = G.pick(cs), b = G.pick(cs); if (a === b) continue;
    let v = (G.trait(a, 'soc') + G.trait(b, 'soc')) * .8 + (a.job === b.job ? .3 : 0) + G.R() * .6 - .3;
    if (G.trait(a, 'pride') && G.trait(b, 'pride')) v -= 1.2; if (G.trait(a, 'amb') > 0 && G.trait(b, 'amb') > 0 && a.rank === b.rank) v -= .6;
    const before = a.rel[b.id] || 0; G.relAdd(a, b, v);
    const after = a.rel[b.id]; if (before < 60 && after >= 60) { G.bio(a, 'กลายเป็นสหายสนิทของ ' + b.name); G.bio(b, 'กลายเป็นสหายสนิทของ ' + a.name); G.log(0, 'social', a.name + ' และ ' + b.name + ' เป็นสหายสนิทกัน', { ids: [a.id, b.id], key: 'fr' }); }
    if (before > -60 && after <= -60) { G.bio(a, 'เป็นปฏิปักษ์กับ ' + b.name); G.log(1, 'social', a.name + ' และ ' + b.name + ' เป็นปฏิปักษ์กัน', { ids: [a.id, b.id] }); }
  }
  G.alive().forEach(c => {
    const m = c.master && S.chars[c.master]; if (m && m.state === 'home') G.relAdd(c, m, .12);
    c.fair = Math.max(0, c.fair * .985 - .05); c.reward = Math.max(0, c.reward * .985 - .05);
    const w = G.satWhy(c); c.sat += (w.total - c.sat) * .08;
    c.loy = clamp(c.loy + (c.sat - 50) * .003 + G.trait(c, 'loy') + (c.master ? .004 : 0) - (c.grudge > 0 ? .01 : 0), 0, 100);
    if (c.loy < 14 && c.state === 'home' && c.rank < 4 && G.ch(.02)) G.depart(c);
  });
}
G.depart = function (c) {
  const S = G.S; const where = S.factions.filter(f => !f.dead && f.id !== 'f6').sort((a, b) => b.rel < a.rel ? 1 : -1)[0];
  const f = c.at.amb > 60 && where ? S.factions.find(x => !x.dead && x.rel < 0 && x.id !== 'f6') || where : null;
  delete S.chars[c.id]; S.order = S.order.filter(i => i !== c.id); c.state = 'gone';
  S.dead[c.id] = { id: c.id, name: c.name, path: c.path, realm: c.realm, rank: c.rank, died: S.day, why: f ? 'ทรยศไปอยู่กับ' + f.n : 'ลาออกจากสำนัก', bio: c.bio.slice(-4), born: c.born, gone: 1 }; S.deadOrder.push(c.id);
  G.alive().forEach(o => { delete o.rel[c.id]; if (o.master === c.id) o.master = null; });
  if (f) { f.roster.push({ n: c.name, r: Math.min(4, c.realm) }); f.rel -= 3; }
  G.log(2, 'sect', c.name + ' ' + (f ? 'ทรยศและหนีไปอยู่กับ' + f.n : 'ลาออกจากสำนัก') + ' เพราะความภักดีต่ำ', { ids: [c.id], why: G.satWhy(c).it.filter(x => x[1] < 0).map(x => x[0] + ' ' + x[1]), pause: 'critical' });
};

/* ---------- เหตุการณ์สุ่มที่มีเงื่อนไข ---------- */
function events() {
  const S = G.S, cs = G.home(); if (!cs.length) return;
  cs.forEach(c => {
    if (c.hid && S.day - c.joined > 60 && G.ch(.01)) { c.apt[c.hid] = Math.min(98, c.apt[c.hid] + 18); G.bio(c, 'พรสวรรค์ซ่อนเร้นด้านสาย' + G.PATHS[c.hid].n + 'เผยตัว'); G.log(2, 'cult', c.name + ' พรสวรรค์ซ่อนเร้นเผยตัว! พรสวรรค์สาย' + G.PATHS[c.hid].n + 'พุ่งสูงขึ้น', { ids: [c.id] }); c.hid = null; }
    if (c.job === 'cultivate' && c.prog > 0 && G.ch(.0015 * c.at.int / 50 * c.mind / 60)) { const N = G.PATHS[c.path].realms[c.realm]; if (N) { c.prog = Math.min(N.need, c.prog + N.need * .06); G.bio(c, 'ตกผลึกความเข้าใจอย่างฉับพลัน'); G.log(1, 'cult', c.name + ' ตกผลึกความเข้าใจ ความก้าวหน้าเพิ่มขึ้นฉับพลัน', { ids: [c.id] }); } }
  });
  const over = S.order.length > 6 * S.fac.dorm;
  if ((over || S.sect.policies.ration === 0) && !S.fac.clinic && G.ch(.003)) {
    let n = 0; cs.forEach(c => { if (G.ch(.25)) { c.hp = Math.max(1, c.hp - 12); G.inj(c, 0, 'โรคระบาด'); n++; } });
    if (n) G.log(2, 'inj', 'โรคระบาดแพร่ในสำนัก ศิษย์ป่วย ' + n + ' คน', { why: [over ? 'ที่พักแออัด' : 'อาหารประหยัดเกินไป', 'ไม่มีเรือนพยาบาล'], pause: 'critical' });
  }
  const sad = cs.find(c => c.loy < 30 && !c.follow); if (sad && S.res.silver > 200 && G.ch(.01)) { const l = Math.round(S.res.silver * .05); G.add('silver', -l, 'ถูกขโมย'); sad.fair += 0; sad.mis = 1; G.log(2, 'sect', 'เงินในคลังหาย ' + l + ' เหรียญ สงสัยว่า ' + sad.name + ' เป็นผู้ขโมย', { ids: [sad.id], why: ['ความภักดีต่ำ ' + Math.round(sad.loy)] }); }
  const pr = cs.filter(c => G.ch(.004) && c.at.dis < 40 && c.job !== 'rest');
  if (pr.length && cs.length > 3) { const a = pr[0], b = cs.find(x => x !== a && (a.rel[x.id] || 0) < -30); if (b) { G.inj(a, 0, 'ทะเลาะวิวาท'); G.inj(b, 0, 'ทะเลาะวิวาท'); G.relAdd(a, b, -10); a.mis = 1; G.log(1, 'social', a.name + ' กับ ' + b.name + ' ทะเลาะวิวาทกัน', { ids: [a.id, b.id], why: ['ความสัมพันธ์ที่ตึงเครียดและวินัยต่ำ'] }); } }
  if (S.sect.rep > 35 && G.ch(.0015) && !S.pending.some(p => p.type === 'wander')) {
    G.pend({ type: 'wander', cat: 'critical', title: 'ผู้อาวุโสพเนจรขอพำนัก', text: 'ผู้บำเพ็ญพเนจรผู้หนึ่งได้ยินกิตติศัพท์ของสำนัก ขอเป็นผู้อาวุโส ต้องจัดเลี้ยงรับรอง 60 เหรียญ', due: S.day + 10, opts: [{ t: 'ต้อนรับ (60 เหรียญ)', a: 'wander' }, { t: 'ปฏิเสธ', a: 'nop' }], def: 1 });
  }
}

/* ---------- รายเดือน ---------- */
function monthly() {
  const S = G.S;
  S.villages.forEach(v => { if (v.trust >= 30) { const s = v.pop * v.trust / 100 * .12, f = v.pop * v.trust / 100 * .06; G.add('silver', s, 'ส่วยและของถวายจากหมู่บ้าน'); G.add('food', f, 'ส่วยและของถวายจากหมู่บ้าน'); } });
  S.applicants = S.applicants.filter(a => S.day - a.day < 60);
  const avgT = S.villages.reduce((s, v) => s + v.trust, 0) / S.villages.length;
  let n = G.ri(1, 2) + (S.sect.rep > 40 ? 1 : 0) + (avgT > 50 ? 1 : 0) + (S.sect.rep > 70 ? 1 : 0);
  for (let i = 0; i < n && S.applicants.length < 8; i++) {
    const c = G.mkChar({ age: G.ri(14, 24), rank: 0, bio: 'ผู้สมัครเข้าสำนัก' }); delete S.chars[c.id]; S.order = S.order.filter(x => x !== c.id);
    const noise = Math.max(4, 16 - 3 * S.fac.library); c.est = {}; for (const k in c.apt) c.est[k] = Math.round(clamp(c.apt[k] + G.rn(0, noise), 5, 99));
    c.day = S.day; c.fee = 12 + Math.round(Math.max(...Object.values(c.apt)) / 10); S.applicants.push(c);
  }
  if (S.sect.policies.autoRecruit) G.autoRecruit();
  if (S.sect.policies.autoProm) G.autoPromote();
  G.refreshFactionDetail(); G.monthlyWorld();
  S.sect.rep = clamp(S.sect.rep + (S.stats.battlesWon > S.stats.battlesLost ? .3 : -.1) + (S.res.food > 100 ? .1 : -.4), 0, 100);
  S.battles = S.battles.slice(-G.CFG.battleMax);
}
G.autoRecruit = function () {
  const S = G.S; const eat = S.order.length; if (S.res.food < 40 * eat || S.order.length >= 6 * S.fac.dorm + 2) return;
  const best = S.applicants.slice().sort((a, b) => Math.max(...Object.values(b.est)) - Math.max(...Object.values(a.est)))[0];
  if (best && Math.max(...Object.values(best.est)) >= 50) G.admit(best.id);
};
G.autoPromote = function () {
  const S = G.S, el = G.alive().filter(c => c.rank === 3).length, cap = 1 + Math.floor(S.order.length / 6) + 1;
  G.alive().forEach(c => {
    if(c.mx?.managementLock)return;
    if (c.rank === 0 && c.realm >= 1 && c.loy >= 45 && S.day - c.joined > 90) { c.rank = 1; G.bio(c, 'เลื่อนเป็นศิษย์ใน'); G.log(1, 'sect', c.name + ' ได้เลื่อนเป็นศิษย์ใน', { ids: [c.id], key: 'prom' }); c.reward += 5; }
    else if (c.rank === 1 && c.realm >= 2 && c.loy >= 55) { c.rank = 2; G.bio(c, 'เลื่อนเป็นศิษย์สายตรง'); G.log(1, 'sect', c.name + ' ได้เลื่อนเป็นศิษย์สายตรง', { ids: [c.id], key: 'prom' }); c.reward += 6; }
    else if (c.rank === 2 && c.realm >= (c.path === 'body' ? 3 : 2) && c.loy >= 60 && el < cap) { c.rank = 3; G.bio(c, 'ได้เป็นผู้อาวุโส'); G.log(2, 'sect', c.name + ' ได้เป็นผู้อาวุโสของสำนัก', { ids: [c.id] }); c.reward += 8; c.job = 'teach'; }
  });
};

/* ---------- มอบหมายงานอัตโนมัติ ---------- */
G.autoAssign = function () {
  const S = G.S, P = S.sect.policies, F = S.fac;
  const pool = G.alive().filter(c => c.state === 'home' && !c.jobFix);
  const home = G.home(); const eat = home.length * [.75, 1, 1.3][P.ration] * 1.1;
  const farmY = G.CFG.farmBase * (1 + .25 * F.farm) * 1.0 * S.harvest;
  const fdays = S.res.food / Math.max(1, eat);
  let need = [];
  const add = (j, n) => { for (let i = 0; i < n; i++) need.push(j); };
  add('farm', Math.max(1, Math.ceil(eat / farmY * (fdays < 30 ? 1.7 : fdays < 70 ? 1.3 : fdays > 150 ? .5 : fdays > 90 ? .8 : 1))));
  if (S.beastP > 60) add('guard', 1); add('guard', 1 + (S.res.silver > 800 ? 1 : 0));
  if (S.buildQ.length) add('build', 2);
  const wantCraft = Object.keys(G.CRAFT).some(k => S.craft[k].on && S.fac[G.CRAFT[k].fac] > 0 && S.res[k] < S.craft[k].t); if (wantCraft) add('craft', 2);
  if (S.res.herb < 60) add('herb', 2); else add('herb', 1);
  if (S.res.stone < 8) need.splice(1, 0, 'mine'); else if (S.res.ore < 60) add('mine', 1); if (S.res.wood < 60) add('wood', 1);
  if (S.res.silver < 200) { need.splice(1, 0, 'service', 'service'); } else add('service', 1);
  if (S.beastP > 40 || S.res.beast < 5) add('hunt', 1);
  if (home.filter(c => c.inj.length > 1).length >= 3) add('heal', 1);
  const rest = pool.filter(c => c.hp < 40 || c.inj.some(j => j.sev >= 2)); rest.forEach(c => c.job = 'rest');
  let free = pool.filter(c => !rest.includes(c));
  const elders = free.filter(c => c.rank >= 3);
  const leaderTeach = G.alive().some(c => c.rank === 4 && c.job === 'teach' && c.state === 'home') ? 1 : 0;
  const students = G.alive().filter(c => c.rank < 3).length;
  const teachN = Math.max(0, Math.ceil(students / (3 + F.library)) - leaderTeach);
  elders.forEach((c, i) => { if (i < teachN) c.job = 'teach'; });
  const others = free.filter(c => c.rank < 3).concat(elders.slice(teachN));
  const potential = c => Math.max(c.apt.qi, c.apt.body, c.apt.faith) + (c.rank >= 1 ? 3 : 0);
  others.sort((a, b) => potential(b) - potential(a));
  const faithers = others.filter(c => c.path === 'faith' && S.villages.some(v => v.att > 25));
  faithers.forEach(c => { c.job = 'preach'; });
  const rem = others.filter(c => !faithers.includes(c));
  const lowRes = j => ({ herb: S.res.herb < 60, mine: S.res.ore < 60 || S.res.stone < 8, wood: S.res.wood < 60, craft: 1, build: 1, farm: 1, heal: 1, hunt: S.res.beast < 5 }[j]);
  const essN = Math.min(need.length, need.filter(lowRes).length + (S.res.silver < 200 ? 2 : 0));
  const cultN = clamp(Math.round(rem.length * P.cultShare), 0, Math.max(0, rem.length - essN)), cult = rem.slice(0, cultN), work = rem.slice(cultN);
  cult.forEach(c => c.job = 'cultivate');
  need.forEach(j => { if (!work.length) return; let bi = 0, bs = -1; work.forEach((c, i) => { const s = G.skill(c, j); if (s > bs) { bs = s; bi = i; } }); work.splice(bi, 1)[0].job = j; });
  work.forEach(c => c.job = 'cultivate');
  // ผู้ดูแลชุมชน
  const pre = G.alive().filter(c => c.job === 'preach' && c.state === 'home' && !c.jobFix);
  const cnt = {}; pre.forEach(c => { if (c.patron && S.villages.find(v => v.id === c.patron)) cnt[c.patron] = (cnt[c.patron] || 0) + 1; });
  pre.forEach(c => {
    const m = G.MANUALS[c.manual];
    if (c.patron && (cnt[c.patron] || 0) <= 2) return;
    const best = S.villages.slice().sort((a, b) => (((m && m.dom === b.dom) ? 20 : 0) + b.att - (cnt[b.id] || 0) * 25 + b.trust / 2) - (((m && m.dom === a.dom) ? 20 : 0) + a.att - (cnt[a.id] || 0) * 25 + a.trust / 2))[0];
    if (c.patron) cnt[c.patron]--; c.patron = best.id; cnt[best.id] = (cnt[best.id] || 0) + 1;
  });
  G.alive().forEach(c => { if (c.job === 'preach' && !c.patron) c.patron = S.villages[0].id; });
};
})(window.G);
