/* world.js — โลกภายนอก: ฝ่ายต่างๆ, ข่าวกรอง, การทูต, การต่อสู้อัตโนมัติ, ภัยคุกคาม, การสำรวจ, การตัดสินใจที่รอ */
(function (G) {
const clamp = G.clamp;
G.tierPow = r => Math.pow(2.56, r);
G.fPow = f => f.troops + f.roster.reduce((s, x) => s + G.tierPow(x.r), 0);
G.fCount = f => f.troops + f.roster.length;
G.fLoss = function (f, n) {
  for (let i = 0; i < n; i++) {
    const r0 = f.roster.filter(x => x.r === 0);
    if (r0.length && G.R() < r0.length / Math.max(1, f.troops + r0.length)) f.roster.splice(f.roster.indexOf(r0[0]), 1); else if (f.troops > 0) f.troops--;
    else if (f.roster.length) f.roster.pop();
  }
  if (G.fCount(f) <= 3 && f.wealth < 30) { f.dead = true; f.stance = 'none'; G.log(1, 'world', f.n + ' ล่มสลาย', { key: 'fdead' + f.id }); }
};

/* ---------- ข่าวกรอง ---------- */
G.updateIntel = function (init, fid) {
  G.S.factions.forEach(f => {
    if (fid && f.id !== fid) return; if (f.dead) return;
    const e = init ? .22 : .1; f.intel = { day: G.S.day, pow: G.fPow(f) * (1 + G.rn(0, e)), wealth: f.wealth * (1 + G.rn(0, e)) };
  });
};
G.estPow = function (f) {
  const age = G.S.day - f.intel.day, err = clamp(.12 + .004 * Math.max(0, age), .12, .6);
  return { lo: Math.round(f.intel.pow * (1 - err)), hi: Math.round(f.intel.pow * (1 + err)), age };
};

/* ---------- พลังรบ ---------- */
G.unit = function (name, t, kind, o) {
  o = o || {};
  const hp = 40 * Math.pow(1.55, t), atk = 9 * Math.pow(1.65, t), def = 3 * Math.pow(1.5, t);
  return { name, hp, max: hp, atk, def, qi: kind === 'qi' ? 7 : 0, heal: 0, ward: 0, kind: kind || 'mob', c: null, cau: .5, cou: .5, ...o };
};
G.fighter = function (c, gear) {
  const PT = G.PATHS[c.path], N = PT.realms[c.realm]; const t = c.realm + .4 + (N ? .5 * c.prog / N.need : .5);
  const u = G.unit(c.name, t, c.path === 'qi' ? 'qi' : c.path, { c });
  u.hp *= (1 + (c.at.con - 50) / 200); u.atk *= (1 + (c.at.str - 50) / 250);
  if (c.path === 'qi') { u.atk *= 1.3; u.hp *= .8; u.def *= .8; } else if (c.path === 'body') { u.hp *= 1.4; u.def *= 1.4; u.atk *= 1.0; }
  const tb = G.techBonus(c); u.atk *= 1 + tb.atk; u.def *= 1 + tb.def; u.heal = tb.heal * 6 * Math.pow(1.4, c.realm);
  if (c.path === 'faith') { const w = Math.min(c.faith, 40); u.ward = w * .6; u.wardCost = Math.min(c.faith, 6); }
  if (gear) { u.atk *= 1.15; u.def *= 1.15; u.gear = 1; }
  u.hp *= clamp(c.hp / 100, .2, 1) * (c.inj.length ? .85 : 1); u.max = u.hp;
  u.cau = clamp(c.at.cau / 100, 0, 1); u.cou = clamp(c.at.cou / 100, 0, 1); return u;
};
G.sectPow = function () {
  const S = G.S; let p = 0; G.home().forEach(c => { const u = G.fighter(c); p += u.hp * u.atk / 360; }); return p;
};

/* ---------- การต่อสู้อัตโนมัติ ---------- */
G.battle = function (A, B, o) {
  o = o || {}; const det = [], tac = o.tactic == null ? 1 : o.tactic;
  const am = [1.15, 1, .9][tac], dm = [.9, 1, 1.2][tac]; let rounds = 0, retreat = false;
  A.forEach(u => { u.atk *= am; u.def *= dm * (o.defBonus || 1); u.side = 'A'; }); B.forEach(u => u.side = 'B');
  const ratio = L => { const m = L.reduce((s, u) => s + u.max, 0); return m ? L.reduce((s, u) => s + Math.max(0, u.hp), 0) / m : 0; };
  const alive = L => L.filter(u => u.hp > 0);
  for (let r = 1; r <= 14; r++) {
    rounds = r; const a = alive(A), b = alive(B); if (!a.length || !b.length) break;
    const order = a.concat(b).sort(() => G.R() - .5);
    for (const u of order) {
      if (u.hp <= 0) continue; if(G.N)G.N.roundStart(u,r); const foes = alive(u.side === 'A' ? B : A), mates = alive(u.side === 'A' ? A : B); if (!foes.length) break;
      if (u.heal > 0) { const w = mates.slice().sort((x, y) => x.hp / x.max - y.hp / y.max)[0]; if (w && w.hp < w.max * .85) { w.hp = Math.min(w.max, w.hp + u.heal); continue; } }
      const t = u.cau > .6 && G.R() < .6 ? foes.slice().sort((x, y) => x.hp - y.hp)[0] : G.pick(foes);
      let atk = u.atk * (.8 + .4 * G.R()); if (u.qi > 0) { atk *= 1.4; u.qi--; if (u.qi === 0 && u.c && o.log) det.push('รอบ ' + r + ': ' + u.name + ' ปราณหมด พลังโจมตีลดลง'); }
      let dmg = Math.max(1, atk - t.def * .5 * (1-Math.min(.85,u.effects?.pierce||0))) * (1-Math.min(.6,t.effects?.guard||0));
      if (t.ward > 0) { const ab = Math.min(t.ward, dmg * .5); t.ward -= ab; dmg -= ab; if (t.c && t.wardCost) { t.c.faith = Math.max(0, t.c.faith - t.wardCost * .15); } }
      t.hp -= dmg; if(G.N)G.N.hit(u,t,dmg,foes);
      if (t.hp <= 0 && det.length < 14) det.push('รอบ ' + r + ': ' + u.name + ' ' + (u.side === 'A' ? 'ล้ม' : 'ปราบ') + ' ' + t.name);
    }
    if (o.retreat && ratio(A) < o.retreat && alive(B).length) { retreat = true; det.push('รอบ ' + r + ': ฝ่ายเราสั่งถอยเมื่อกำลังเหลือ ' + Math.round(ratio(A) * 100) + '%'); break; }
  }
  const aA = alive(A).length, aB = alive(B).length;
  return { win: !retreat && aB === 0 && aA > 0 || (!retreat && aA > 0 && ratio(B) < .15), retreat, rounds, det, aRatio: ratio(A), bRatio: ratio(B), aA, aB };
};
/* ผลหลังรบกับตัวละคร: บาดเจ็บ ตาย ใช้ศรัทธา ของเสียหาย */
G.aftermath = function (A, res, summary) {
  const S = G.S; const deaths = [], hurt = [];
  A.forEach(u => {
    const c = u.c; if (!c || !S.chars[c.id]) return;
    c.fat = Math.min(100, c.fat + 25); if (u.gear && G.ch(.08) && S.res.gear >= 1) { G.add('gear', -1, 'อาวุธชำรุด'); }
    if (u.wardCost !== undefined) c.faith = Math.max(0, c.faith - (u.ward0 || 0));
    const lost = 1 - Math.max(0, u.hp) / u.max;
    if (u.hp <= 0) { if (G.ch(Math.max(.02,.32 - .08 * S.fac.clinic - (G.trait(c, 'heal') > 0 ? .06 : 0)-(G.N?.hasTrait(c,'destiny')?.15:0)))) { deaths.push(c); } else { G.inj(c, 2, 'บาดเจ็บสาหัสจากการรบ'); hurt.push(c); } }
    else if (lost > .5) { G.inj(c, 1, 'บาดเจ็บจากการรบ'); hurt.push(c); } else c.hp = Math.max(5, c.hp * (1 - lost * .6));
    if (!c.follow) { } G.bio(c, 'ร่วมรบ: ' + summary);
  });
  deaths.forEach(c => G.die(c, 'เสียชีวิตในสนามรบ (' + summary + ')'));
  return { deaths: deaths.map(c => c.name), hurt: hurt.map(c => c.name) };
};
G.pickDefenders = function (epow) {
  const S = G.S, P = S.sect.policies; let L = G.home().filter(c => c.hp > 30);
  const guards = L.filter(c => c.job === 'guard' || c.rank >= 3);
  let sel = P.defense === 'all' ? L.filter(c => c.rank >= 1 || c.realm >= 1 || c.job === 'guard') : guards;
  if (sel.length < 2) sel = L.sort((a, b) => b.realm - a.realm).slice(0, 4);
  sel.sort((a, b) => b.realm - a.realm); let gear = S.res.gear;
  let out = sel.slice(0, 14).map(c => { const g = gear > 0 && c.realm >= 0; if (g) gear--; return G.fighter(c, g); });
  const pw = L2 => L2.reduce((a, u) => a + u.hp * u.atk / 360, 0);
  if (epow && pw(out) < epow * .7) { /* ระดมพลฉุกเฉิน: ทุกคนที่ยังสู้ไหวช่วยป้องกัน */
    const ids = new Set(out.map(u => u.c && u.c.id)); L.filter(c => !ids.has(c.id)).sort((a, b) => b.realm - a.realm).slice(0, 10).forEach(c => { out.push(G.fighter(c, false)); }); out.mobilized = true; }
  return out;
};
G.record = function (b) { const S = G.S; S.battles.push(b); if (S.battles.length > G.CFG.battleMax) S.battles.shift(); };

/* ---------- ภัยคุกคาม ---------- */
G.threatsDay = function () {
  const S = G.S, s = G.season(); S.beastP = clamp(S.beastP + .35 + (s === 2 ? .45 : 0) - G.home().filter(c => c.job === 'guard').length * .25, 0, 130);
  if (S.beastP >= 100) { S.beastP = 18; const n = Math.min(8,G.ri(3, 5) + Math.floor(S.day / 480)), t = .5 + Math.min(2,S.day / 1000); const E = []; for (let i = 0; i < n; i++) E.push(G.unit('อสูรป่า', t + (i === 0 ? .8 : 0), 'beast')); G.defend('ฝูงอสูรบุกสำนัก', E, { cause: ['แรงกดดันจากอสูรในป่าสะสมจนล้นเพราะล่าไม่พอ'], loot: 'beast' }); }
  const f6 = S.factions[5];
  if (!f6.dead && S.day > 60 && S.day >= (f6.mx?.raidAfter||0) && S.day % 4 === 0) {
    const sees = f6.est ? f6.est : (f6.est = { day: -99, pow: S.sectPow || 80 });
    if (S.day - sees.day > 20 && G.ch(.2)) { f6.est = { day: S.day, pow: G.sectPow() * (1 + G.rn(0, .3)) }; }
    const myP = G.fPow(f6), vis = S.res.silver + S.res.herb * 5 + S.res.stone * 15, ratio = myP / Math.max(30, f6.est.pow);
    const p = ratio > 1.1 && vis > 250 ? .06 : (vis > 600 ? .015 : .004);
    if (f6.troops >= 22 && G.R() < p) {
      const k = Math.min(f6.troops - 4, Math.round(clamp(Math.min(f6.troops * .28, f6.est.pow * 1.1), 6, 40))), E = [];
      for (let i = 0; i < k; i++) E.push(G.unit('โจรภูผา', 0 + (i < 2 ? 1 : 0), 'mob')); E.push(G.unit(f6.leader + ' (หัวหน้าโจร)', 1.6, 'body'));
      if(G.N){G.N.foreignInit(S,f6);f6.mx.raidAfter=S.day+60}G.defend('โจรภูผามืดบุกปล้นสำนัก', E, { f: f6, cause: ['โจรประเมินกำลังป้องกันของสำนักไว้ ' + Math.round(f6.est.pow) + ' (ข้อมูลอายุ ' + (S.day - f6.est.day) + ' วัน) เทียบกำลังตน ' + Math.round(myP), 'ทรัพย์ที่มองเห็นในสำนักมีมูลค่าราว ' + Math.round(vis)], sent: k });
    }
  }
  S.factions.forEach(f => {
    if (f.dead || f.id === 'f6' || f.stance !== 'war' || S.day % 20 !== (f.idx * 3) % 20 || f.troops < 12) return;
    const k = Math.round(clamp(f.troops * .22, 6, 35)), E = []; for (let i = 0; i < k; i++) E.push(G.unit('ทหารของ' + f.n, 0, 'mob'));
    f.roster.slice(0, 2).forEach(x => E.push(G.unit('ผู้บัญชาการ ' + x.n, x.r + .6, 'qi')));
    G.defend(f.n + ' ส่งกำลังโจมตีสำนัก', E, { f, cause: ['สถานะสงครามระหว่างเรากับ' + f.n], sent: k });
  });
};
G.defend = function (title, E, o) {
  const S = G.S, f = o.f; E.forEach(u => u.def *= 1);
  const A = G.pickDefenders(E.reduce((a, u) => a + u.hp * u.atk / 360, 0));
  A.forEach(u => { if (u.c && u.c.path === 'faith') u.ward0 = Math.min(u.c.faith, 40) * .25; });
  let ally = null; if (f) { ally = S.factions.find(x => !x.dead && x.stance === 'ally' && x.rel > 55 && x.troops > 20 && x.id !== f.id); }
  if (ally) { const k = Math.min(6, Math.floor(ally.troops * .06)); for (let i = 0; i < k; i++) { const u = G.unit('พันธมิตรจาก' + ally.n, 0, 'mob'); A.push(u); } ally.helped = k; o.allyK = k; }
  const P = S.sect.policies, wallB = 1 + .15 * S.fac.wall;
  const res = G.battle(A, E, { tactic: P.tactic, retreat: P.retreat, defBonus: wallB, log: 1 });
  const out = G.aftermath(A, res, title);
  if (ally && o.allyK) { const lost = Math.round(o.allyK * (1 - res.aRatio) * .5); G.fLoss(ally, lost); ally.rel += 3; ally.trust += 2; }
  const eLost = E.filter(u => u.hp <= 0).length; if (f) { G.fLoss(f, eLost); f.rel -= 2; }
  const det = [(A.mobilized ? 'ระดมศิษย์ทุกคนที่ยังสู้ไหวเข้าป้องกันเพราะกำลังเฝ้ายามไม่พอ. ' : '') + 'ฝ่ายเรา ' + A.length + ' คน (ค่ายป้องกันเพิ่มพลังป้องกัน ' + Math.round((wallB - 1) * 100) + '%) ปะทะ ' + E.length + ' ศัตรู'].concat(res.det).concat(['สรุป: ใช้ยุทธวิธี' + ['รุก', 'สมดุล', 'ตั้งรับ'][P.tactic] + ' ถอยเมื่อกำลังเหลือต่ำกว่า ' + Math.round(P.retreat * 100) + '%']);
  let t, pr = 1;
  if (res.win) {
    S.stats.battlesWon++; S.sect.rep = Math.min(100, S.sect.rep + 1.5); t = 'ชนะ: ' + title; const bonus = G.ri(10, 30);
    if (o.loot === 'beast') { G.add('beast', G.ri(6, 14), 'ปราบอสูร'); } else if (f) { const actual=Math.min(f.wealth,bonus*2);f.wealth-=actual;G.add('silver', actual, 'ยึดของจากศัตรู'); }
    A.forEach(u => { if (u.c && u.c.path === 'faith' && u.c.hp > 0) { const m = G.MANUALS[u.c.manual]; u.c.faith += m.dom === 'war' ? 14 : m.dom === 'protect' ? 10 : 3; } });
    S.villages.forEach(v => v.trust = Math.min(100, v.trust + 1));
  } else {
    S.stats.battlesLost++; pr = 2; S.sect.rep = Math.max(0, S.sect.rep - 3); t = (res.retreat ? 'ถอย: ' : 'พ่ายแพ้: ') + title;
    const pf = res.retreat ? .06 : .15; const lostS = Math.round(S.res.silver * pf), lostF = Math.round(S.res.food * pf * .7);
    G.add('silver', -lostS, 'ถูกปล้น'); G.add('food', -lostF, 'ถูกปล้น');if(f){f.wealth+=lostS;f.stock+=lostF} det.push('ผลที่ตามมา: สูญเสียเงิน ' + lostS + ' และเสบียง ' + lostF);
    A.forEach(u => { if (u.c && u.c.path === 'faith') { const m = G.MANUALS[u.c.manual]; u.c.faith = Math.max(0, u.c.faith - (m.dom === 'war' ? 20 : 8)); } });
    S.villages.forEach(v => v.trust = Math.max(0, v.trust - 3));
  }
  if (out.deaths.length) det.push('เสียชีวิต: ' + out.deaths.join(', ')); if (out.hurt.length) det.push('บาดเจ็บ: ' + out.hurt.join(', '));
  const b = { day: S.day, t, win: res.win, cause: o.cause || [], det, deaths: out.deaths, hurt: out.hurt };
  G.record(b);
  G.log(pr, 'war', t + (out.deaths.length ? ' (ตาย ' + out.deaths.length + ')' : ''), { det, why: o.cause, pause: 'threat' });
  return res;
};

/* ---------- โลกรายวัน ---------- */
G.worldDay = function () {
  const S = G.S;
  S.factions.forEach(f => {
    if (f.dead) return;
    f.wealth += f.pop * .011 * (1 + f.greed * .25) - G.fCount(f) * .028; f.wealth = Math.max(0, f.wealth);
    f.pop = Math.min(f.pop * 1.7, f.pop * (1 + .00004));
    const tick = f.detail ? 3 : 7; if ((S.day + f.idx) % tick === 0) { if(G.WORLD && S.patch?.management.deepLife) G.WORLD.factionDecision(f); else decide(f); }
    if (f.pact && S.day % 7 === (f.idx % 7)) pactTick(f);
    if (f.stance === 'ally' && S.day - (f.askDay || 0) > 50 && G.ch(.03) && !S.pending.some(p => p.type === 'req' && p.fid === f.id)) allyRequest(f);
  });
};
function decide(f) {
  const S = G.S;
  if (f.wealth > 200 && G.fCount(f) < f.pop * .22 && G.ch(.5)) { const n = Math.min(4, Math.floor((f.wealth - 100) / 28)); f.troops += n; f.wealth -= n * 28; }
  if (f.wealth > 300 && G.ch(.35)) { const m = f.roster.filter(x => x.r < 4).sort((a, b) => a.r - b.r)[0]; const cost = 90 * Math.pow(2, m ? m.r : 9); if (m && f.wealth > cost) { f.wealth -= cost; m.r++; } }
  for (const gid in f.war) { const g = S.factions.find(x => x.id === gid); if (!g || g.dead || !f.war[gid]) { delete f.war[gid]; continue; } if (f.idx < g.idx) skirmish(f, g); }
  if (f.aggr > .55 && !Object.keys(f.war).length && f.id !== 'f6' && S.day > 120 && G.ch(.01 * f.aggr)) {
    const t = S.factions.filter(g => g !== f && !g.dead && g.id !== 'f6' && G.fPow(f) > G.fPow(g) * 1.4 && !g.war[f.id]).sort((a, b) => G.fPow(a) - G.fPow(b))[0];
    if (t) { f.war[t.id] = S.day; t.war[f.id] = S.day; G.log(0, 'world', f.n + ' ประกาศสงครามกับ' + t.n, { why: [f.n + ' เป็นฝ่ายแข็งแกร่งกว่าและทะนงตน'], key: 'wd' }); }
  }
  if (f.id !== 'f6' && f.stance !== 'war' && f.rel < -50 && f.aggr > .6 && S.day > 150 && G.fPow(f) > G.sectPow() * 1.3 && G.ch(.02)) {
    f.stance = 'war'; f.pact = 0; G.log(2, 'war', f.n + ' ประกาศสงครามกับสำนัก!', { why: ['ความสัมพันธ์ต่ำ (' + Math.round(f.rel) + ')', 'ฝ่ายนั้นก้าวร้าวและมั่นใจในกำลังเหนือกว่า'], pause: 'threat' });
  }
  if (f.stance === 'war' && f.rel > -30 && G.ch(.05)) { f.stance = 'none'; G.log(1, 'dip', f.n + ' ยุติการสู้รบกับสำนักเงียบๆ', {}); }
  f.rel += (f.stance === 'none' ? (0 - f.rel) * .004 : 0);
}
function skirmish(a, b) {
  const pa = G.fPow(a) * (.8 + .4 * G.R()), pb = G.fPow(b) * (.8 + .4 * G.R()), w = pa > pb ? a : b, l = w === a ? b : a;
  const la = Math.round(G.fCount(w) * .03 * (G.fPow(l) / Math.max(1, G.fPow(w)) + .3)), ll = Math.round(G.fCount(l) * .06);
  G.fLoss(w, la); G.fLoss(l, ll); const loot = Math.min(l.wealth, l.wealth * .1); l.wealth -= loot; w.wealth += loot;
  if (G.fPow(l) < G.fPow(w) * .45 || G.R() < .03) { delete a.war[b.id]; delete b.war[a.id]; G.log(0, 'world', a.n + ' กับ ' + b.n + ' หยุดรบ (' + l.n + ' อ่อนแรง)', { key: 'wp' }); }
}
G.resolveFactionSkirmish=skirmish;
function pactTick(f) {
  const S = G.S; let val = 0; const lim = { herb: 80, ore: 100, wood: 150, beast: 20, pillQi: 14, pillBody: 14, pillHeal: 16, gear: 12 };
  for (const k in lim) { const ex = S.res[k] - lim[k]; if (ex >= 3) { const n = Math.floor(ex * .4), v = n * G.RES[k].p * 1.15 * S.market[k]; if (f.wealth >= v && n > 0) { f.wealth -= v; G.add(k, -n, 'ขายให้' + f.n); G.add('silver', v, 'ขายให้' + f.n); f.stock += n; val += v; } } }
  if (S.res.stone < 8 && f.path === 'qi' && S.res.silver > 120 && f.stock > 5) { G.add('stone', 3, 'ซื้อจาก' + f.n); G.add('silver', -3 * 20 * 1.3, 'ซื้อจาก' + f.n); }
  if (val > 0) G.log(0, 'dip', 'ค้าขายกับ' + f.n + ' ได้เงิน ' + Math.round(val), { key: 'trade' + f.id });
  f.rel = Math.min(100, f.rel + .5); f.trust = Math.min(100, f.trust + .4); G.updateIntel(false, f.id);
}
function allyRequest(f) {
  const S = G.S; f.askDay = S.day; const amt = 100 + G.ri(0, 80);
  G.pend({ type: 'req', fid: f.id, cat: 'diplomacy', title: f.n + ' ขอความช่วยเหลือ', text: 'พันธมิตรขอเงิน ' + amt + ' เหรียญเพื่อเผชิญภัยจากศัตรู หากปฏิเสธ ความไว้วางใจจะลดลง', due: S.day + 12, opts: [{ t: 'ช่วยเหลือ ' + amt + ' เหรียญ', a: 'giveAlly', arg: { fid: f.id, amt } }, { t: 'ปฏิเสธ', a: 'refuseAlly', arg: f.id }], def: 1 });
}
G.refreshFactionDetail = function () {
  const S = G.S;
  S.factions.forEach(f => {
    if (f.dead) return; const want = f.stance === 'ally' || f.stance === 'war' || f.pact || S.exps.some(e => e.partner === f.id);
    if (want && !f.detail) { f.detail = 1; f.lock = S.day + 60; expandRoster(f); G.log(0, 'world', 'เริ่มติดตามความเคลื่อนไหวของ' + f.n + 'อย่างละเอียด', { key: 'det' + f.id }); }
    else if (!want && f.detail && S.day >= f.lock) { f.detail = 0; }
  });
};
/* ขยายรายละเอียด: แปลงทหารสามัญบางส่วนให้มีชื่อ โดยรักษาจำนวนคนและกำลังรบเท่าเดิม */
function expandRoster(f) {
  const n = Math.min(8, Math.floor(f.troops * .08), 8 - f.roster.filter(x => x.r === 0).length,40-f.roster.length); for (let i = 0; i < n; i++) { f.roster.push({ n: G.genName(G.ch(.4)), r: 0 }); f.troops--; }
}
G.monthlyWorld = function () {
  const S = G.S;
  S.factions.forEach(f => {
    if (f.dead) return;
    if (f.stance === 'none' && !f.pact && f.rel >= 25 && f.aggr < .6 && !S.pending.some(p => p.type === 'offer' && p.fid === f.id) && G.ch(.25)) {
      G.pend({ type: 'offer', fid: f.id, cat: 'diplomacy', title: f.n + ' เสนอข้อตกลงการค้า', text: 'ฝ่ายนั้นพอใจในสำนักและเสนอข้อตกลงการค้า จะซื้อของส่วนเกินในราคาดีและแลกเปลี่ยนข่าวสาร', due: S.day + 20, opts: [{ t: 'ตกลง', a: 'acceptOffer', arg: f.id }, { t: 'ปฏิเสธ', a: 'nop' }], def: 1 });
    }
    if (f.stance !== 'war') f.rel = clamp(f.rel + (f.pact ? .5 : 0), -100, 100);
  });
  if (!S.factions[5].dead) S.factions[5].wealth += 60; // โจรปล้นชาวบ้านทั่วไป
};

/* ---------- การทูต ---------- */
G.dip = function (fid, act, arg) {
  const S = G.S, f = S.factions.find(x => x.id === fid); if (!f || f.dead) return { ok: false, msg: 'ฝ่ายนี้ไม่มีอยู่แล้ว' };
  const why = [];
  if (act === 'scout') { if (S.res.silver < 25) return { ok: false, msg: 'ต้องใช้เงิน 25 เหรียญ' }; G.add('silver', -25, 'ส่งสายสืบ'); G.updateIntel(false, fid); return { ok: true, msg: 'ได้ข้อมูลล่าสุดของ' + f.n }; }
  if (act === 'gift') {
    const amt = arg || 60; if (S.res.silver < amt) return { ok: false, msg: 'เงินไม่พอ' };
    const log = (S.giftLog[fid] = (S.giftLog[fid] || []).filter(d => S.day - d < 60)); const fat = log.length; log.push(S.day);
    G.add('silver', -amt, 'ของกำนัล'); const g = 3 * amt / 60 * Math.pow(.55, fat) * (1 + f.greed * .3); f.rel = Math.min(100, f.rel + g); f.trust = Math.min(100, f.trust + g * .4); f.wealth += amt;
    return { ok: true, msg: 'ส่งของกำนัลให้' + f.n + ' ความสัมพันธ์ +' + G.f1(g) + (fat ? ' (ผลลดลงเพราะส่งบ่อย)' : '') };
  }
  if (f.stance === 'war' && act !== 'peace') return { ok: false, msg: 'อยู่ในภาวะสงคราม ต้องเจรจาสงบศึกก่อน' };
  if (act === 'trade') {
    if (f.pact) return { ok: false, msg: 'มีข้อตกลงการค้าอยู่แล้ว' };
    const sc = f.rel + f.trust * .3 + f.greed * 12 - (f.rel < 25 ? f.aggr * 18 : 0);
    if (f.rel < 10) why.push('ความสัมพันธ์ยังต่ำ (' + Math.round(f.rel) + ' ต้องอย่างน้อย 10)'); if (sc < 22) why.push('ความน่าเชื่อถือไม่พอ');
    if (why.length) { f.trust = Math.max(0, f.trust - 1); return { ok: false, msg: f.n + ' ปฏิเสธการค้า: ' + why.join(', ') }; }
    f.pact = 1; f.pactDay = S.day; f.stance = f.stance === 'ally' ? 'ally' : 'trade'; f.rel += 3; G.refreshFactionDetail(); return { ok: true, msg: 'ทำข้อตกลงการค้ากับ' + f.n + ' สำเร็จ' };
  }
  if (act === 'cancel') { f.pact = 0; if (f.stance === 'trade') f.stance = 'none'; f.rel -= 8; f.trust -= 8; return { ok: true, msg: 'ยกเลิกข้อตกลงแล้ว ความสัมพันธ์ลดลง' }; }
  if (act === 'ally') {
    if (f.stance === 'ally') return { ok: false, msg: 'เป็นพันธมิตรกันอยู่แล้ว' };
    if (!f.pact) why.push('ต้องมีข้อตกลงการค้าก่อน'); else if (S.day - f.pactDay < 30) why.push('ข้อตกลงการค้ายังใหม่เกินไป (ต้องผ่าน 30 วัน)');
    if (f.rel < 55) why.push('ความสัมพันธ์ต่ำกว่า 55 (' + Math.round(f.rel) + ')'); if (f.trust < 40) why.push('ความไว้วางใจต่ำกว่า 40 (' + Math.round(f.trust) + ')'); if (f.honor > .8 && S.sect.rep < 40) why.push('ฝ่ายนี้ถือเกียรติสูงและเห็นว่าสำนักยังไร้ชื่อเสียง');
    if (why.length) return { ok: false, msg: f.n + ' ปฏิเสธพันธมิตร: ' + why.join(', ') };
    f.stance = 'ally'; f.rel += 5; G.refreshFactionDetail(); return { ok: true, msg: 'เป็นพันธมิตรกับ' + f.n + ' พันธมิตรจะช่วยรบและขอความช่วยเหลือเป็นครั้งคราว' };
  }
  if (act === 'aid') {
    if (f.stance !== 'ally') return { ok: false, msg: 'ขอความช่วยเหลือได้เฉพาะพันธมิตร' };
    if (f.rel < 45) return { ok: false, msg: 'ความสัมพันธ์ไม่พอ' }; if (f.wealth < 250) return { ok: false, msg: f.n + ' คลังร่อยหรอ ไม่สามารถช่วยได้' };
    if (S.day - (f.aidDay || -99) < 40) return { ok: false, msg: 'เพิ่งขอไปไม่นาน (ต้องรออีก ' + (40 - (S.day - f.aidDay)) + ' วัน)' };
    f.aidDay = S.day; f.wealth -= 120; G.add('silver', 120, 'ความช่วยเหลือจาก' + f.n); f.trust -= 3; return { ok: true, msg: 'ได้รับเงินช่วยเหลือ 120 เหรียญ' };
  }
  if (act === 'war') { f.stance = 'war'; f.pact = 0; f.rel = Math.max(-100, f.rel - 40); f.trust = 0; return { ok: true, msg: 'ประกาศสงครามกับ' + f.n }; }
  if (act === 'peace') {
    if (f.stance !== 'war') return { ok: false, msg: 'ไม่ได้อยู่ในสงคราม' };
    const sc = (f.rel + 60) + (G.fPow(f) < G.sectPow() ? 30 : 0) - f.aggr * 30 + (S.day - (f.warDay || 0) > 40 ? 10 : 0);
    if (sc > 35) { f.stance = 'none'; f.rel += 20; return { ok: true, msg: f.n + ' ยอมสงบศึก' }; }
    return { ok: false, msg: f.n + ' ปฏิเสธสงบศึก: ยังมั่นใจในกำลังของตนและโกรธแค้น (ลองส่งของกำนัลหรือรอให้ศึกยืดเยื้อ)' };
  }
  return { ok: false, msg: 'ไม่รู้จักคำสั่ง' };
};

/* ---------- การสำรวจ ---------- */
G.launchExp = function (loc, ids, risk) {
  const S = G.S, L = G.LOCS[loc]; if (!L || !S.discovered[loc]) return { ok: false, msg: 'ยังไม่รู้จักสถานที่นี้' };
  const mem = ids.map(i => S.chars[i]).filter(c => c && c.state === 'home');
  if (!mem.length) return { ok: false, msg: 'ต้องเลือกสมาชิกที่อยู่ในสำนัก' };
  const travel = G.N ? G.N.travelDays(loc,mem) : L.dist; const days = travel * 2 + 2, food = Math.ceil(mem.length * 1.3 * days);
  if (S.res.food < food) return { ok: false, msg: 'เสบียงไม่พอสำหรับเดินทาง (ต้องใช้ ' + food + ')' };
  G.add('food', -food, 'เสบียงสำรวจ');
  const e = { travel, extra:2, id: 'e' + (S.nextId++), loc, mem: mem.map(c => c.id), t: 0, phase: 'go', risk, loot: {}, log: ['ออกเดินทางจากสำนักสู่' + L.n], hurt: 0, res: null };
  mem.forEach(c => { c.state = 'exp'; c.exp = e.id; c.job = 'cultivate'; });
  S.exps.push(e); G.log(1, 'exp', 'ออกสำรวจ ' + L.n + ' (' + mem.length + ' คน)', { ids: e.mem }); return { ok: true, msg: 'ออกเดินทางแล้ว' };
};
G.expeditionsDay = function () {
  const S = G.S;
  S.exps.slice().forEach(e => {
    const L = G.LOCS[e.loc]; e.mem = e.mem.filter(i => S.chars[i]); if (!e.mem.length) { S.exps = S.exps.filter(x => x !== e); G.log(2, 'exp', 'คณะสำรวจ ' + L.n + ' สูญสิ้นทั้งหมด', { pause: 'expedition' }); return; }
    e.t++;
    if (e.phase === 'go' && e.t >= (e.travel || L.dist)) { e.phase = 'back'; e.t = 0; siteEvent(e, L); }
    else if (e.phase === 'back' && e.t >= (e.travel || L.dist) + (e.extra || 0)) finishExp(e, L);
  });
};
function siteEvent(e, L) {
  const S = G.S, mem = e.mem.map(i => S.chars[i]).filter(Boolean), d = L.danger;
  const n = 1 + Math.floor(d * 1.1) + G.ri(0, 1), t = d * .5 + .2; const E = []; for (let i = 0; i < n; i++) E.push(G.unit(L.k === 'ruin' ? 'ผีสุสานเฝ้าวัด' : L.k === 'realm' ? 'อสูรผู้พิทักษ์' : L.k === 'trade' ? 'โจรข้างทาง' : 'อสูรป่า', t + (i === 0 ? .4 : 0), 'beast'));
  let gear = S.res.gear; const A = mem.map(c => { const g = gear > 0; if (g) gear--; const u = G.fighter(c, g); if (c.path === 'faith') u.ward = Math.min(c.faith, 20) * .4; return u; });
  const ret = [.55, .38, .2][e.risk]; const res = G.battle(A, E, { tactic: e.risk === 2 ? 0 : 1, retreat: ret, log: 1 });
  const out = G.aftermath(A, res, 'สำรวจ ' + L.n); e.hurt = out.hurt.length; e.log = e.log.concat(res.det);
  const mult = res.retreat ? .25 : res.win ? [.75, 1, 1.3][e.risk] : .1; e.res = res.win ? 'ชนะ' : res.retreat ? 'ถอย' : 'พ่ายแพ้'; e.mult = mult;
  e.det = res.det.slice(); e.dead = out.deaths; e.hurtN = out.hurt;
  const loot = e.loot; const rr = (a, b) => Math.round(G.ri(a, b) * mult);
  if (L.k === 'herb') loot.herb = rr(25, 45) * (1 + .1 * d); if (L.k === 'ore') { loot.ore = rr(25, 45); loot.stone = rr(0, 4); }
  if (L.k === 'beast') loot.beast = rr(10, 18); if (L.k === 'trade') loot.silver = rr(60, 120);
  if (L.k === 'ruin') { loot.pillFound = rr(0, 2); loot.herb = rr(5, 15); }
  if (L.k === 'realm') { loot.stone = rr(10, 25); loot.pillFound = rr(1, 3); loot.herb = rr(15, 30); }
  if (res.win || (res.retreat && G.ch(.3))) {
    if (L.k === 'ruin' || L.k === 'realm') { const cand = Object.keys(G.MANUALS).filter(id => G.MANUALS[id].lore && !S.known[id]); if (cand.length) { const id = G.pick(cand), add = Math.round(G.ri(25, 45) * (1 + .15 * S.fac.library) * (L.k === 'realm' ? 1.4 : 1)); S.lore[id] = (S.lore[id] || 0) + add; e.log.push('พบเบาะแสเกี่ยวกับคัมภีร์ที่สาบสูญ (+' + add + '%)'); e.lore = id; if (S.lore[id] >= 100) { if(G.N?.manualScrollId){e.cargo??=[];e.cargo.push({def:G.N.manualScrollId(id),qty:1,quality:0,affix:'none'});S.lore[id]=0;}else S.known[id] = 1; G.log(2, 'exp', 'ค้นพบม้วนคัมภีร์ "' + G.MANUALS[id].n + '" (' + G.PATHS[G.MANUALS[id].p].n + ')!', { pause: 'expedition', why: ['สะสมเบาะแสจากการสำรวจจนครบ'] }); } } }
    if (L.k === 'trade') { const fs = S.factions.filter(f => !f.dead); for (let i = 0; i < 2; i++) { const f = G.pick(fs); G.updateIntel(false, f.id); e.log.push('ได้ข่าวสารล่าสุดของ' + f.n); } }
    const hid = Object.keys(G.LOCS).filter(k => G.LOCS[k].rumor && !S.discovered[k]);
    if (hid.length && (L.k === 'trade' || L.k === 'ruin') && G.ch(.5)) { const k = hid[0]; S.discovered[k] = 1; e.log.push('ได้ข่าวลือเกี่ยวกับ ' + G.LOCS[k].n); G.log(1, 'exp', 'ค้นพบสถานที่ใหม่: ' + G.LOCS[k].n, {}); }
  }
  G.log(res.win ? 1 : 2, 'exp', 'คณะสำรวจ ' + L.n + ' ' + e.res + ' ปะทะอสูร/ศัตรู' + (out.deaths.length ? ' เสียชีวิต ' + out.deaths.length + ' คน' : ''), { det: res.det, why: ['ความอันตราย ' + d + ' เทียบกับคณะ ' + mem.length + ' คน (เสี่ยง: ' + ['ระมัดระวัง', 'ปกติ', 'บุกเบิก'][e.risk] + ')'], pause: !res.win ? 'expedition' : null });
  G.record({ day: S.day, t: 'สำรวจ ' + L.n + ': ' + e.res, win: res.win, cause: ['ความอันตราย ' + d], det: res.det.slice(), deaths: out.deaths, hurt: out.hurt });
  if (res.retreat || !e.mem.filter(i => S.chars[i]).length) e.extra = 0;
}
function finishExp(e, L) {
  const S = G.S; const mem = e.mem.map(i => S.chars[i]).filter(Boolean);
  mem.forEach(c => { c.state = 'home'; c.exp = null; }); const t = [];
  for (const k in e.loot) if (e.loot[k] > 0) { G.add(k, e.loot[k], 'สำรวจ ' + L.n); t.push(G.RES[k].i + e.loot[k]); }
  S.exps = S.exps.filter(x => x !== e);
  G.log(1, 'exp', 'คณะสำรวจกลับจาก ' + L.n + ' ได้: ' + (t.join(' ') || 'ไม่ได้อะไร'), { ids: e.mem, pause: 'expedition', det: e.log });
}

/* ---------- การตัดสินใจที่รอ ---------- */
G.pend = function (p) {
  const S = G.S; p.id = 'p' + (S.nextId++); p.day = S.day; S.pending.push(p);
  if (S.pauseCfg[p.cat] || p.type === 'succ') S.alerts.push(p.title);
  G.log(2, p.cat, 'รอการตัดสินใจ: ' + p.title, {});
};
G.decide = function (pid, idx) {
  const S = G.S, p = S.pending.find(x => x.id === pid); if (!p) return;
  S.pending = S.pending.filter(x => x !== p); const o = p.opts[idx]; if (o) G.runAct(o.a, o.arg);
};
G.pendingDeadlines = function () { const S = G.S; S.pending.slice().forEach(p => { if (S.day >= p.due) { G.log(1, p.cat, 'หมดเวลาตัดสินใจ: ' + p.title + ' (ใช้ตัวเลือกเริ่มต้น)', {}); G.decide(p.id, p.def); } }); };
G.runAct = function (a, arg) {
  const S = G.S;
  if (a === 'succeed') G.succeed(arg);
  else if (a === 'faithSpend') G.faithSpend(arg);
  else if (a === 'acceptOffer') { const f = S.factions.find(x => x.id === arg); if (f && !f.dead) { f.pact = 1; f.pactDay = S.day; if (f.stance === 'none') f.stance = 'trade'; f.rel += 5; G.refreshFactionDetail(); G.log(1, 'dip', 'ทำข้อตกลงการค้ากับ' + f.n, {}); } }
  else if (a === 'giveAlly') { const f = S.factions.find(x => x.id === arg.fid); if (S.res.silver >= arg.amt) { G.add('silver', -arg.amt, 'ช่วยพันธมิตร'); f.wealth += arg.amt; f.rel += 8; f.trust += 6; G.log(1, 'dip', 'ช่วยเหลือ' + f.n + ' ' + arg.amt + ' เหรียญ ความไว้วางใจเพิ่มขึ้น', {}); } else { f.trust -= 8; f.rel -= 6; G.log(1, 'dip', 'ไม่มีเงินพอช่วย' + f.n + ' ความไว้วางใจลดลง', {}); } }
  else if (a === 'refuseAlly') { const f = S.factions.find(x => x.id === arg); f.trust = Math.max(0, f.trust - 8); f.rel -= 6; G.log(1, 'dip', 'ปฏิเสธคำขอของ' + f.n + ' ความไว้วางใจลดลง', { why: ['คำขอของพันธมิตรที่ไม่ได้รับการตอบสนองทำให้ความไว้วางใจเสื่อม'] }); }
  else if (a === 'wander') {
    if (S.res.silver >= 60) { G.add('silver', -60, 'เลี้ยงรับรอง'); const c = G.mkChar({ age: G.ri(45, 62), rank: 3, realm: 2, bio: 'ผู้บำเพ็ญพเนจรที่ขอพำนักในสำนัก' }); c.loy = 55; G.setPath(c, G.bestPath(c), true); c.life = G.calcLife(c); c.apt[c.path] = Math.max(c.apt[c.path], 60); S.chars[c.id] = c; S.order.push(c.id); c.job = 'teach'; G.log(2, 'sect', c.name + ' ผู้อาวุโสพเนจรเข้าร่วมสำนัก (' + G.PATHS[c.path].n + ')', { ids: [c.id] }); }
  }
};
})(window.G);
