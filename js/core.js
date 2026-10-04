/* core.js — เครื่องมือพื้นฐาน, RNG แบบกำหนดผลได้, สร้างตัวละคร, สร้างเกมใหม่, บันทึกรายงาน */
(function (G) {
const clamp = (x, a, b) => x < a ? a : x > b ? b : x; G.clamp = clamp;
G.R = () => { const S = G.S; S.rng = (S.rng + 0x6D2B79F5) | 0; let t = Math.imul(S.rng ^ (S.rng >>> 15), 1 | S.rng); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
G.ri = (a, b) => a + Math.floor(G.R() * (b - a + 1));
G.pick = a => a[Math.floor(G.R() * a.length)];
G.ch = p => G.R() < p;
G.rn = (m, s) => m + (G.R() + G.R() + G.R() + G.R() - 2) * s * 1.2;
G.f0 = x => Math.round(x).toLocaleString('th-TH');
G.f1 = x => (Math.round(x * 10) / 10).toLocaleString('th-TH');
G.age = c => Math.floor((G.S.day - c.born) / G.YEAR);
G.C = id => G.S.chars[id] || G.S.dead[id] || null;
G.alive = () => G.S.order.map(id => G.S.chars[id]);
G.trait = (c, k) => c.traits.reduce((s, t) => s + ((G.TRAITS[t] && G.TRAITS[t].m[k]) || 0), 0);

G.genName = function (fem) {
  const S = G.S;
  for (let k = 0; k < 40; k++) {
    const n = G.pick(G.SUR) + ' ' + G.pick(fem ? G.GF : G.GM) + (G.ch(.3) ? G.pick(G.GN) : '');
    if (!S.names[n]) { S.names[n] = 1; return n; }
  }
  const n = G.pick(G.SUR) + ' ' + G.pick(G.GM) + ' รุ่นที่ ' + G.ri(2, 9); S.names[n] = 1; return n;
};

/* ความชำนาญงาน 0.5-1.6 มาจากคุณสมบัติ + ประสบการณ์ */
G.skill = function (c, job) {
  const a = c.at, m = {
    farm: (a.con + a.str) / 2, herb: (a.int + a.craft) / 2, mine: a.str, wood: a.str, hunt: (a.str + a.cou) / 2 + 5 * c.realm,
    build: a.craft, craft: (a.craft * 2 + a.int) / 3, teach: (a.int + a.soc) / 2, guard: (a.cou + a.str) / 2 + 5 * c.realm,
    preach: (a.soc + a.int) / 2, heal: (a.int + a.craft) / 2, service: (a.soc + a.admin) / 2
  }[job] || 50;
  return clamp(.5 + (m + (c.sk[job] || 0)) / 100, .5, 1.7);
};

G.mkChar = function (o) {
  const S = G.S, fem = G.ch(.45), at = {};
  ['int', 'con', 'str', 'craft', 'admin', 'cou', 'cau', 'amb', 'loy', 'soc', 'dis'].forEach(k => at[k] = Math.round(clamp(G.rn(50, 15), 8, 97)));
  const apt = { qi: clamp(G.rn(38, 16), 5, 90), body: clamp(G.rn(38, 16), 5, 90), faith: clamp(G.rn(36, 16), 5, 90) };
  const main = G.pick(['qi', 'body', 'faith', 'qi', 'body']); apt[main] = Math.min(95, apt[main] + 18);
  for (const k in apt) apt[k] = Math.round(apt[k]);
  const ids = Object.keys(G.TRAITS), tr = [];
  const n = G.ch(.5) ? 2 : 1;
  while (tr.length < n) { const t = G.pick(ids); if (t !== 'genius' && !tr.includes(t)) tr.push(t); }
  const genius = G.ch(.07); if (genius) tr.push('genius');
  const c = {
    id: 'c' + (S.nextId++), name: G.genName(fem), g: fem ? 'f' : 'm', born: S.day - Math.floor(o.age * G.YEAR + G.ri(0, G.YEAR - 1)),
    joined: S.day, rank: o.rank || 0, apt, elem: G.ri(0, 4), at, traits: tr, hid: genius ? main : null,
    path: null, manual: null, realm: 0, prog: 0, found: Math.round(clamp(G.rn(50, 12), 20, 80)), life: 0,
    hp: 100, inj: [], fat: 10, mind: Math.round(clamp(G.rn(65, 12), 30, 90)), sat: 60, loy: Math.round(clamp(G.rn(55, 14), 20, 90)),
    job: 'cultivate', jobFix: 0, state: 'home', exp: null, master: null, rel: {}, bio: [], goal: null, faith: 0, vow: null, patron: null,
    stress: 0, tox: 0, pillCd: 0, sk: {}, fair: 0, stuck: 0, mode: 'auto', follow: 0, grudge: 0, reward: 0, ready: 0, waitBT: 0, restUntil: 0
  };
  if (o.path) c.apt[o.path] = Math.max(c.apt[o.path], 55);
  G.setPath(c, G.bestPath(c), true);
  c.life = G.calcLife(c, true);
  for (let r = 0; r < (o.realm || 0); r++) c.realm++;
  c.life = G.calcLife(c);
  c.goal = G.pick(['ทะลวงขั้นให้ได้ภายในสามปี', 'เป็นผู้อาวุโสของสำนัก', 'ปกป้องสหายร่วมสำนัก', 'หาคัมภีร์ล้ำค่าให้ตนเอง', 'ล้างแค้นให้ครอบครัว', 'มีชีวิตสงบในสำนัก']);
  c.bio.push([S.day, o.bio || 'เข้าสู่สำนัก']);
  return c;
};
G.bestPath = c => ['qi', 'body', 'faith'].sort((a, b) => c.apt[b] - c.apt[a])[0];
G.calcLife = function (c, base) {
  const P = G.PATHS[c.path]; let l = P.life + (c.id.length + c.born % 7) % 9;
  for (let r = 0; r < c.realm; r++) l += P.realms[r].life;
  if (base) return l; return l + Math.round(c.at.con / 20);
};
G.bestManual = function (c, rank) {
  const r = rank == null ? c.rank : rank, S = G.S;
  const list = Object.keys(G.MANUALS).filter(id => G.MANUALS[id].p === c.path && S.known[id] && (S.access[id] ?? G.MANUALS[id].rank) <= r);
  if (!list.length) return null;
  const sc = id => { const m = G.MANUALS[id]; let s = m.sp + m.bt * 3 + (m.el && m.el.includes(c.elem) ? .3 : 0); if (G.trait(c, 'bt') < 0 || c.at.cau > 60) s += m.bt * 2; if (G.trait(c, 'cult') > .05) s += (m.sp - 1) * .5; return s; };
  return list.sort((a, b) => sc(b) - sc(a))[0];
};
G.setPath = function (c, p, init) { c.path = p; c.manual = G.bestManual(c, 4) || null; if (init) { const m = G.bestManual(c, 0); c.manual = m || Object.keys(G.MANUALS).find(id => G.MANUALS[id].p === p && G.MANUALS[id].start); } };
G.bio = (c, t) => { c.bio.push([G.S.day, t]); if (c.bio.length > 40) c.bio.splice(1, 1); };

G.log = function (prio, cat, text, o) {
  const S = G.S; o = o || {};
  const last = S.log[S.log.length - 1];
  if (o.key && last && last.key === o.key && last.day === S.day) { last.n = (last.n || 1) + 1; return last; }
  const e = { day: S.day, p: prio, cat, t: text, ids: o.ids || [], why: o.why || [], det: o.det || null, key: o.key || null, n: 1 };
  S.log.push(e); if (S.log.length > G.CFG.logMax) S.log.splice(0, S.log.length - G.CFG.logMax);
  if (o.pause && S.pauseCfg[o.pause]) S.alerts.push(text);
  return e;
};

G.relAdd = function (a, b, v) {
  if (!a || !b || a.id === b.id) return;
  a.rel[b.id] = clamp((a.rel[b.id] || 0) + v, -100, 100); b.rel[a.id] = clamp((b.rel[a.id] || 0) + v, -100, 100);
};

G.newGame = function (seed, name) {
  seed = seed | 0 || ((Date.now() % 2147483647) | 0);
  const S = G.S = {
    v: G.VERSION, schema: G.SCHEMA, seed, rng: seed, day: 0, nextId: 1, names: {}, chars: {}, order: [], dead: {}, deadOrder: [],
    sect: { name: name || 'สำนักเมฆาสงบ', rep: 20, leader: null, gen: 1, policies: { ration: 1, stipend: 1, autoPill: 1, autoAssign: 1, cultShare: .55, autoBT: 'smart', autoProm: 1, autoRecruit: 0, defense: 'guards', tactic: 1, retreat: .35, protect: 1, reserve: 15 } },
    res: Object.assign({}, G.CFG.startRes), fac: { dorm: 2, farm: 1, garden: 0, chamber: 1, yard: 1, shrine: 1, library: 1, alchemy: 1, forge: 0, clinic: 0, wall: 0 },
    buildQ: [], craft: { pillQi: { on: 1, t: 8 }, pillBody: { on: 1, t: 8 }, pillHeal: { on: 1, t: 10 }, pillFound: { on: 1, t: 3 }, gear: { on: 1, t: 6 } }, craftWork: {},
    known: {}, access: {}, lore: {}, discovered: { herbwood: 1, oldmine: 1, beastvale: 1, silkroad: 1 }, villages: [], factions: [], exps: [], applicants: [], log: [], pending: [], offers: [],
    battles: [], market: {}, weather: { k: 'ปกติ', f: 1, until: 30 }, harvest: 1, beastP: 30, pauseCfg: Object.assign({}, G.CFG.pauseDefault), alerts: [], flowDay: {}, flowAvg: {}, reserved: {}, stats: { births: 0, deaths: 0, battlesWon: 0, battlesLost: 0, breakthroughs: 0, fails: 0 },
    hist: [], tutorial: 0, succ: null, over: false, giftLog: {}
  };
  for (const id in G.MANUALS) if (G.MANUALS[id].start) S.known[id] = 1;
  for (const k in G.RES) if (k !== 'silver') S.market[k] = 1;
  G.VILLAGES.forEach(v => S.villages.push(Object.assign({}, v, { trust: v.trust, devo: 40, stab: 60, att: 100, rival: v.dom === 'war' ? .35 : .2, need: null, patron: null, tribute: 0 })));
  G.FACTIONS.forEach((f, i) => {
    const F = Object.assign({}, f, { stance: 'none', trust: 20, detail: 0, lock: 0, dead: false, idx: i, roster: [], stock: Math.round(f.wealth * .2), mem: [], war: {}, grudge: 0, pact: 0, pactDay: 0,
      intel: { day: -99, pow: 0, wealth: 0 }, helped: 0, asked: 0 });
    for (let k = 0; k < 4; k++) F.roster.push({ n: G.genName(G.ch(.4)), r: G.ri(1, 3) });
    F.troops -= 4; S.factions.push(F);
  });
  // ผู้ก่อตั้งและศิษย์เริ่มต้น
  const L = G.mkChar({ age: 58, rank: 4, realm: 2, path: 'qi', bio: 'ก่อตั้งสำนักและเป็นเจ้าสำนักรุ่นแรก' });
  S.chars[L.id] = L; S.order.push(L.id); S.sect.leader = L.id; L.job = 'teach'; L.jobFix = 1; L.loy = 90; L.apt.qi = 70; G.setPath(L, 'qi', true);
  const spec = [[3, 'qi', 1], [3, 'body', 1], [3, 'faith', 1], [1, 'qi', 0], [1, 'body', 0], [1, 'faith', 0]];
  spec.forEach(([n, p, r], i) => {
    const c = G.mkChar({ age: G.ri(17, 38), rank: i < 3 ? 3 : r, realm: i < 3 ? 1 : 0, path: p, bio: i < 3 ? 'ผู้อาวุโสรุ่นแรกที่ร่วมก่อตั้งสำนัก' : 'ศิษย์รุ่นก่อตั้ง' });
    c.apt[p] = Math.max(c.apt[p], 58); G.setPath(c, p, true); c.life = G.calcLife(c);
    if (i < 3) { c.rank = 3; c.job = 'teach'; } c.loy = Math.max(c.loy, 60);
    S.chars[c.id] = c; S.order.push(c.id);
  });
  for (let i = 0; i < 4; i++) { const c = G.mkChar({ age: G.ri(15, 26), rank: 0, bio: 'ศิษย์รุ่นก่อตั้ง' }); S.chars[c.id] = c; S.order.push(c.id); }
  G.alive().forEach(c => { c.manual = G.bestManual(c, 4) || c.manual; c.prog = c.realm ? 0 : G.ri(0, 30); });
  G.alive().forEach(c => { if (c.rank < 3 && c.id !== L.id) c.master = G.pickMaster(c); });
  G.autoAssign(true);
  G.log(1, 'sys', 'ก่อตั้ง "' + S.sect.name + '" ศิษย์ ' + S.order.length + ' คน เริ่มต้นการบริหารสำนัก', {});
  G.updateIntel(true);
  return S;
};
G.pickMaster = function (c) {
  const els = G.alive().filter(e => e.rank >= 3 && e.id !== c.id && e.state === 'home');
  const cnt = {}; G.alive().forEach(x => { if (x.master) cnt[x.master] = (cnt[x.master] || 0) + 1; });
  els.sort((a, b) => ((b.path === c.path ? 3 : 0) - (cnt[b.id] || 0) + b.realm) - ((a.path === c.path ? 3 : 0) - (cnt[a.id] || 0) + a.realm));
  return els.length ? els[0].id : null;
};
})(window.G);
