/* actions.js — การกระทำของผู้เล่น (ใช้ร่วมกันระหว่าง UI และการทดสอบ) */
(function (G) {
const clamp = G.clamp;
const R = (ok, msg) => ({ ok, msg });
G.setJob = function (ids, job) {
  const S = G.S; let n = 0;
  ids.forEach(id => { const c = S.chars[id]; if (!c || c.state !== 'home') return; if (job === 'auto') { c.jobFix = 0; } else { c.job = job; c.jobFix = 1; if (job === 'preach' && !c.patron) c.patron = S.villages[0].id; } n++; });
  if (job === 'auto') G.autoAssign(); return R(true, 'ปรับงานให้ ' + n + ' คน');
};
G.setPatron = (c, vid) => { c.patron = vid; c.job = 'preach'; c.jobFix = 1; };
G.setManual = function (c, id) {
  const S = G.S, m = G.MANUALS[id]; if (!m || !S.known[id]) return R(false, 'สำนักยังไม่รู้จักคัมภีร์นี้');
  if ((S.access[id] ?? m.rank) > c.rank) return R(false, 'ยศไม่พอเข้าถึงคัมภีร์นี้ (ต้องเป็น' + G.RANKS[S.access[id] ?? m.rank] + 'ขึ้นไป)');
  if (m.p !== c.path) return R(false, 'คัมภีร์นี้อยู่คนละเส้นทาง ต้องเปลี่ยนเส้นทางบำเพ็ญ');
  if (id === c.manual) return R(false, 'ใช้คัมภีร์นี้อยู่แล้ว');
  if (S.res.silver < 20) return R(false, 'ต้องใช้ค่าธรรมเนียม 20 เหรียญ'); G.add('silver', -20, 'ค่าเปลี่ยนคัมภีร์');
  const lost = Math.round(c.prog * .35); c.prog -= lost; c.found = Math.max(0, c.found - 4); c.mind = Math.max(0, c.mind - 3);
  G.bio(c, 'เปลี่ยนคัมภีร์เป็น "' + m.n + '" (เสียความก้าวหน้า ' + lost + ')'); c.manual = id; return R(true, 'เปลี่ยนคัมภีร์แล้ว สูญความก้าวหน้า ' + lost + ' และฐานรากลดลงเล็กน้อย');
};
G.switchPath = function (c, p) {
  const S = G.S; if (p === c.path) return R(false, 'อยู่เส้นทางนี้แล้ว');
  const ms = Object.keys(G.MANUALS).filter(id => G.MANUALS[id].p === p && S.known[id] && (G.N?.allowedManual ? G.N.allowedManual(c,id) : (S.access[id] ?? G.MANUALS[id].rank) <= c.rank));
  if (!ms.length) return R(false, 'ไม่มีคัมภีร์ของเส้นทางนี้ที่ยศเข้าถึงได้'); if (S.res.silver < 50) return R(false, 'ต้องใช้ 50 เหรียญ'); G.add('silver', -50, 'ค่าเปลี่ยนเส้นทาง');
  const from = G.PATHS[c.path], tot = c.prog + from.realms.slice(0, c.realm).reduce((s, r) => s + r.need, 0);
  if (c.path === 'faith' && c.vow) { c.mind = Math.max(0, c.mind - 15); G.bio(c, 'ละทิ้งคำสาบานเพื่อเปลี่ยนเส้นทาง'); }
  G.bio(c, 'เปลี่ยนเส้นทางจาก ' + from.n + ' ไป ' + G.PATHS[p].n + ' (ขั้นเดิมเริ่มใหม่)');
  const oldLife = c.life; c.path = p; c.realm = 0; c.prog = Math.round(tot * .12); c.found = Math.max(0, c.found - 12); c.mind = Math.max(0, c.mind - 10); c.stress = 0; c.faith = 0; c.vow = null; c.patron = null; c.pillCd = 0;
  c.manual = ms.sort((a, b) => G.MANUALS[b].sp - G.MANUALS[a].sp)[0]; c.life = Math.max(oldLife, G.calcLife(c)); c.ready = 0;
  return R(true, 'เปลี่ยนเส้นทางแล้ว: เริ่มขั้นแรกใหม่ ยกความก้าวหน้าเดิมไว้เพียง 12% ฐานรากและจิตใจเสียหาย');
};
G.promote = function (c, d) {
  const S = G.S; const n = clamp(c.rank + d, 0, 3);
  if (c.rank === 4) return R(false, 'เจ้าสำนักเปลี่ยนยศไม่ได้'); if (n === c.rank) return R(false, 'ไม่สามารถเปลี่ยนยศได้');
  if (n === 3 && G.alive().filter(x => x.rank === 3).length >= 2 + Math.floor(S.order.length / 6)) return R(false, 'จำนวนผู้อาวุโสเต็มแล้ว');
  c.rank = n; if (d > 0) { c.reward += 8; c.loy += 2; G.log(1, 'sect', c.name + ' ได้เลื่อนเป็น' + G.RANKS[n], { ids: [c.id] }); } else { c.fair += 12; c.loy -= 8; c.grudge++; G.log(1, 'sect', c.name + ' ถูกลดเป็น' + G.RANKS[n], { ids: [c.id] }); }
  G.bio(c, (d > 0 ? 'เลื่อนเป็น' : 'ถูกลดเป็น') + G.RANKS[n]); if (n < 3 && c.job === 'teach') c.job = 'cultivate'; return R(true, 'เปลี่ยนยศเป็น' + G.RANKS[n]);
};
G.reward = function (c, kind) {
  const S = G.S;
  if (kind === 'silver') { if (S.res.silver < 30) return R(false, 'เงินไม่พอ'); G.add('silver', -30, 'รางวัลศิษย์'); } else { const k = { qi: 'pillQi', body: 'pillBody', faith: 'pillHeal' }[c.path]; if (S.res[k] < 1) return R(false, 'ไม่มี' + G.RES[k].n); G.add(k, -1, 'รางวัลศิษย์'); const N = G.PATHS[c.path].realms[c.realm]; if (N && c.prog < N.need) c.prog = Math.min(N.need, c.prog + N.need * .03); }
  c.reward += 12; c.loy = Math.min(100, c.loy + 3); c.sat = Math.min(100, c.sat + 5);
  G.alive().forEach(o => { if (o !== c && o.rank === c.rank && o.realm > c.realm) { o.fair += 1.5; } }); G.bio(c, 'ได้รับรางวัลจากสำนัก'); return R(true, 'มอบรางวัลแล้ว');
};
G.punish = function (c) {
  if (c.rank === 4) return R(false, 'ลงโทษเจ้าสำนักไม่ได้');
  if (c.mis) { c.mis = 0; c.loy -= 2; c.sat -= 4; G.alive().forEach(o => { if (o !== c && o.at.dis > 50) o.reward += 1; }); G.bio(c, 'ถูกลงโทษจากความผิด'); return R(true, 'ลงโทษตามความผิด ศิษย์อื่นเห็นว่ายุติธรรม'); }
  c.fair += 15 * (G.trait(c, 'pride') ? 1.8 : 1); c.loy -= 6; c.grudge++; G.alive().forEach(o => { if (o !== c) o.fair += 2; }); G.bio(c, 'ถูกลงโทษโดยไม่มีความผิดชัดเจน');
  return R(true, 'ลงโทษโดยไม่มีความผิดชัดเจน ศิษย์รู้สึกไม่เป็นธรรมและความภักดีลดลง');
};
G.setMaster = function (c, mid) { c.master = mid || null; if (mid) G.relAdd(c, G.S.chars[mid], 3); return R(true, 'ตั้งอาจารย์แล้ว'); };
G.build = function (f) {
  const S = G.S, D = G.FAC[f]; const queued = S.buildQ.filter(q => q.f === f).length; const lv = S.fac[f] + queued + 1;
  if (lv > D.max) return R(false, 'ถึงระดับสูงสุดแล้ว'); if (queued) return R(false, 'กำลังก่อสร้างสิ่งนี้อยู่');
  const cost = {}; for (const k in D.cost) cost[k] = D.cost[k] * lv; if (!G.can(cost)) return R(false, 'ทรัพยากรไม่พอ');
  G.pay(cost, 'ก่อสร้าง ' + D.n); for (const k in cost) S.reserved[k] = (S.reserved[k] || 0) + cost[k];
  S.buildQ.push({ f, lv, work: D.work * lv, done: 0, cost }); return R(true, 'เริ่มก่อสร้าง ' + D.n + ' ระดับ ' + lv + ' (ต้องมีช่างก่อสร้าง)');
};
G.cancelBuild = function (i) { const S = G.S, q = S.buildQ[i]; if (!q) return; for (const k in q.cost) { G.add(k, Math.floor(q.cost[k] * .8), 'คืนจากยกเลิกก่อสร้าง'); S.reserved[k] = Math.max(0, (S.reserved[k] || 0) - q.cost[k]); } S.buildQ.splice(i, 1); };
G.trade = function (r, qty, dir) {
  const S = G.S, p = G.RES[r].p * S.market[r]; if (!G.RES[r] || r === 'silver') return R(false, 'ซื้อขายไม่ได้');
  if (dir === 'buy') { const c = Math.ceil(p * 1.15 * qty); if (S.res.silver < c) return R(false, 'เงินไม่พอ (ต้องใช้ ' + c + ')'); G.add('silver', -c, 'ซื้อจากตลาด'); G.add(r, qty, 'ซื้อจากตลาด'); S.market[r] = Math.min(1.9, S.market[r] + qty * .004); return R(true, 'ซื้อ ' + qty + ' ' + G.RES[r].n + ' ราคา ' + c); }
  if (S.res[r] < qty) return R(false, 'ของไม่พอ'); const g = Math.floor(p * .7 * qty); G.add(r, -qty, 'ขายให้ตลาด'); G.add('silver', g, 'ขายให้ตลาด'); S.market[r] = Math.max(.6, S.market[r] - qty * .004); return R(true, 'ขาย ' + qty + ' ' + G.RES[r].n + ' ได้ ' + g);
};
G.admit = function (id) {
  const S = G.S, i = S.applicants.findIndex(a => a.id === id); if (i < 0) return R(false, 'ไม่พบผู้สมัคร'); const a = S.applicants[i];
  if (S.res.silver < a.fee) return R(false, 'ต้องใช้ค่ารับเข้า ' + a.fee + ' เหรียญ'); G.add('silver', -a.fee, 'รับศิษย์ใหม่');
  S.applicants.splice(i, 1); delete a.est; delete a.fee; delete a.day; a.joined = S.day; a.rank = 0; S.chars[a.id] = a; S.order.push(a.id);
  G.setPath(a, G.bestPath(a), true); a.manual = G.bestManual(a, 0) || a.manual; a.life = G.calcLife(a); a.master = G.pickMaster(a); a.job = 'cultivate'; G.bio(a, 'เข้าร่วมสำนัก');
  G.log(1, 'sect', 'รับ ' + a.name + ' เข้าเป็นศิษย์นอก', { ids: [a.id], key: 'admit' }); if (S.sect.policies.autoAssign) G.autoAssign(); return R(true, 'รับ ' + a.name + ' แล้ว');
};
G.reject = function (id) { const S = G.S; S.applicants = S.applicants.filter(a => a.id !== id); const n = S.names; };
G.advance = function (days, opt) {
  /* ก้าวเวลาแบบแบ่งก้อน opt: {onProgress(done,total), untilEvent, chunk} คืน Promise */
  opt = opt || {}; const S0 = () => G.S;
  return new Promise(res => {
    let done = 0; G.stopFlag = false; S0().alerts = [];
    const logStart = S0().log.length;
    (function tick() {
      const t0 = performance.now(); const S = S0();
      while (done < days && performance.now() - t0 < (opt.budget || 8)) {
        G.stepDay(); done++;
        if (S.over || S.alerts.length || (S.pending.length)) { break; }
        if (opt.untilEvent && S.log.slice(-6).some(l => l.day === S.day && l.p >= 2)) break;
        if (G.stopFlag) break;
      }
      if (opt.onProgress) opt.onProgress(done, days);
      if (done >= days || S.over || S.alerts.length || S.pending.length || G.stopFlag || (opt.untilEvent && S.log.slice(-6).some(l => l.day === S.day && l.p >= 2))) { const al = S.alerts.slice(); res({ done, alerts: al, stopped: G.stopFlag }); return; }
      setTimeout(tick, 0);
    })();
  });
};
/* ---------- บันทึก ---------- */
G.MIGRATE = {}; // ตัวอย่าง: G.MIGRATE[1] = S => { ...ปรับโครงสร้าง...; S.schema = 2; return S; }
const sum = s => { let h = 5381; for (let i = 0; i < s.length; i++) h = ((h << 5) + h + s.charCodeAt(i)) | 0; return h; };
G.serialize = () => { const body = JSON.stringify(G.S); return JSON.stringify({ game: 'sect', ver: G.VERSION, schema: G.S.schema, sum: sum(body), S: JSON.parse(body) }); };
G.validate = function (txt) {
  let o; try { o = JSON.parse(txt); } catch (e) { return { ok: false, msg: 'ไฟล์เสียหาย: อ่านรูปแบบ JSON ไม่ได้' }; }
  if (!o || o.game !== 'sect' || !o.S) return { ok: false, msg: 'ไม่ใช่ไฟล์เซฟของเกมนี้' };
  if (o.sum !== undefined && o.sum !== sum(JSON.stringify(o.S))) return { ok: false, msg: 'ไฟล์เซฟถูกแก้ไขหรือเสียหาย (ค่าตรวจสอบไม่ตรง)' };
  let S = o.S; if (typeof S.schema !== 'number') return { ok: false, msg: 'ไม่พบเวอร์ชันของเซฟ' };
  if (S.schema > G.SCHEMA) return { ok: false, msg: 'เซฟนี้มาจากเกมเวอร์ชันใหม่กว่า (' + o.ver + ') กรุณาอัปเดตเกม' };
  while (S.schema < G.SCHEMA) { const m = G.MIGRATE[S.schema]; if (!m) return { ok: false, msg: 'ไม่มีตัวแปลงเซฟจากเวอร์ชัน ' + S.schema }; S = m(S); }
  for (const k of ['chars', 'order', 'res', 'villages', 'factions', 'sect', 'fac']) if (!S[k]) return { ok: false, msg: 'เซฟไม่สมบูรณ์: ขาดข้อมูล ' + k };
  if (!S.order.length && !S.over) return { ok: false, msg: 'เซฟไม่สมบูรณ์: ไม่มีศิษย์' };
  const bad = S.order.filter(id => !S.chars[id]); if (bad.length) S.order = S.order.filter(id => S.chars[id]);
  const prev = G.S; G.S = S; const fixed = [];
  try {
    const dflt = { names: {}, dead: {}, deadOrder: [], known: {}, access: {}, lore: {}, discovered: {}, exps: [], applicants: [], log: [], pending: [], offers: [], battles: [], market: {}, reserved: {}, flowDay: {}, flowAvg: {}, craftWork: {}, alerts: [], hist: [], giftLog: {}, stats: {}, buildQ: [], weather: { k: 'ปกติ', f: 1, until: S.day + 10 }, harvest: 1, beastP: 30, pauseCfg: Object.assign({}, G.CFG.pauseDefault), craft: {}, rng: S.seed | 0 };
    for (const k in dflt) if (S[k] === undefined) { S[k] = dflt[k]; fixed.push(k); }
    for (const k in G.RES) { if (k !== 'silver' && S.market[k] === undefined) S.market[k] = 1; if (S.res[k] === undefined) S.res[k] = 0; }
    for (const k in G.CRAFT) if (!S.craft[k]) S.craft[k] = { on: 1, t: 6 };
    for (const k in G.FAC) if (S.fac[k] === undefined) S.fac[k] = 0;
    for (const id in G.MANUALS) if (G.MANUALS[id].start) S.known[id] = 1;
    for (const id in S.known) if (!G.MANUALS[id]) { delete S.known[id]; fixed.push('คัมภีร์ที่ไม่รู้จัก ' + id); }
    for (const c of Object.values(S.chars)) {
      if (!G.PATHS[c.path]) { c.path = 'qi'; fixed.push('เส้นทางของ ' + c.name); }
      if (!G.MANUALS[c.manual] || G.MANUALS[c.manual].p !== c.path) { c.manual = Object.keys(G.MANUALS).find(i => G.MANUALS[i].p === c.path && S.known[i]); fixed.push('คัมภีร์ของ ' + c.name); }
      c.realm = Math.min(c.realm, G.PATHS[c.path].realms.length); c.traits = (c.traits || []).filter(t => G.TRAITS[t]); if (!G.JOBS[c.job]) c.job = 'cultivate';
      c.rel = c.rel || {}; c.inj = c.inj || []; c.sk = c.sk || {}; c.bio = c.bio || [];
      if (c.master && !S.chars[c.master]) c.master = null;
    }
    if (S.sect.leader && !S.chars[S.sect.leader]) S.sect.leader = null;
    S.sect.policies = Object.assign({ ration: 1, stipend: 1, autoPill: 1, autoAssign: 1, cultShare: .55, autoBT: 'smart', autoProm: 1, autoRecruit: 0, defense: 'guards', tactic: 1, retreat: .35, protect: 1, reserve: 15 }, S.sect.policies);
    S.factions.forEach(f => { f.roster = f.roster || []; f.war = f.war || {}; f.intel = f.intel || { day: S.day, pow: G.fPow(f), wealth: f.wealth }; });
    S.exps = S.exps.filter(e => { e.mem = e.mem.filter(i => S.chars[i]); return G.LOCS[e.loc] && e.mem.length; });
    const ids = new Set(S.exps.map(e => e.id)); Object.values(S.chars).forEach(c => { if (c.state === 'exp' && !ids.has(c.exp)) { c.state = 'home'; c.exp = null; } });
  } finally { G.S = prev; }
  return { ok: true, S, fixed, msg: 'ตรวจสอบเซฟผ่าน' + (fixed.length ? ' (ซ่อมแซม ' + fixed.length + ' รายการ)' : '') };
};
G.store = {
  put(k, v) { try { localStorage.setItem(k, v); return true; } catch (e) { return false; } },
  get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } }
};
G.save = function (slot) {
  const key = 'mekha_patch_' + slot, txt = G.serialize();
  if (slot === 'auto') { const old = G.store.get(key); if (old) G.store.put('mekha_patch_auto_bak', old); }
  const ok = G.store.put(key, txt); return ok ? { ok: true, msg: 'บันทึกสำเร็จ (วันที่ ' + G.S.day + ', ' + Math.round(txt.length / 1024) + ' KB)' } : { ok: false, msg: 'บันทึกในเบราว์เซอร์ไม่สำเร็จ (พื้นที่เต็มหรือถูกบล็อก) กรุณาส่งออกไฟล์เซฟแทน' };
};
G.load = function (slot) {
  const txt = G.store.get('mekha_patch_' + slot); if (!txt) return { ok: false, msg: 'ไม่พบเซฟ' };
  const v = G.validate(txt); if (!v.ok) return v; G.S = v.S; return { ok: true, msg: 'โหลดเซฟสำเร็จ: วันที่ ' + G.S.day, fixed: v.fixed };
};
G.loadText = function (txt) { const v = G.validate(txt); if (!v.ok) return v; G.S = v.S; return { ok: true, msg: 'นำเข้าเซฟสำเร็จ: วันที่ ' + G.S.day, fixed: v.fixed }; };
})(window.G);
