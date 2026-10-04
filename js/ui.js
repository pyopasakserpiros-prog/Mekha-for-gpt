/* ui.js — โครงหน้าจอ, ภาพรวม, ศิษย์ (ฟังก์ชัน view คืนค่า HTML เพื่อให้ทดสอบใน Node ได้) */
(function (G) {
const U = G.UI = { tab: 'home', sub: {}, f: { rank: -1, path: '', job: '', state: '', q: '', sort: 'realm' }, sel: {}, selMode: 0, page: 0, busy: false, lastAuto: 0, modalStack: [], V: {}, A: {}, M: {} };
const S = () => G.S, $ = id => document.getElementById(id);
const esc = s => String(s == null ? '' : s).replace(/[&<>"']/g, m => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
U.esc = esc;
const bar = (p, cls) => '<div class="bar ' + (cls || '') + '"><i style="width:' + Math.max(0, Math.min(100, p)) + '%"></i></div>';
U.bar = bar;
const PT = { qi: ['q', 'ปราณ'], body: ['b', 'กายา'], faith: ['f', 'ศรัทธา'] };
const ptag = p => '<span class="tag ' + PT[p][0] + '">' + PT[p][1] + '</span>';
U.ptag = ptag;
const realmN = c => { const r = G.PATHS[c.path].realms; return c.realm >= r.length ? 'สูงสุด' : r[c.realm].n; };
U.realmN = realmN;
const dateStr = () => { const d = S().day, y = Math.floor(d / G.YEAR) + 1, m = Math.floor((d % G.YEAR) / 30) + 1; return 'ปีที่ ' + y + ' เดือน ' + m + ' วันที่ ' + (d % 30 + 1) + ' · ' + G.SEASONS[Math.floor((d % G.YEAR) / 90)]; };
U.dateStr = dateStr;
U.toast = function (msg) { const t = $('toast'); t.textContent = msg; t.className = ''; clearTimeout(U._tt); U._tt = setTimeout(() => t.className = 'hide', 2600); };
const flowNet = r => { const f = S().flowAvg[r]; return f ? Object.values(f).reduce((a, b) => a + b, 0) : 0; };
const sgn = n => (n >= 0 ? '+' : '') + G.f1(n);

/* ---------- เปลือก ---------- */
U.renderTop = function () {
  const s = S(), R = s.res;
  $('top').innerHTML = '<div class="t1"><b>' + esc(s.sect.name) + '</b><span class="dim">' + dateStr() + '</span></div><div class="res">' +
    ['food', 'silver', 'stone', 'herb', 'ore', 'wood'].map(k => '<span>' + G.RES[k].i + G.f0(R[k]) + '</span>').join('') + '<span>👥' + s.order.length + '</span></div>';
};
U.renderTabs = function () {
  const s = S(), np = s.pending.length, na = s.applicants.length;
  const T = [['home', 'ภาพรวม', np], ['disc', 'ศิษย์', 0], ['sect', 'สำนัก', na], ['world', 'โลก', s.offers.length], ['rep', 'รายงาน', 0], ['menu', 'เมนู', 0]];
  $('tabs').innerHTML = T.map(t => '<button data-a="tab" data-t="' + t[0] + '" class="' + (U.tab === t[0] ? 'on' : '') + '">' + t[1] + (t[2] ? '<span class="dot">' + t[2] + '</span>' : '') + '</button>').join('');
};
U.renderAdv = function () {
  const s = S();
  if (U.busy) { $('advbar').innerHTML = '<div style="flex:1"><div class="dim" id="advtxt">กำลังจำลอง…</div>' + bar(U.prog || 0) + '</div><button class="warn" data-a="stop">หยุด</button>'; return; }
  if (s.over) { $('advbar').innerHTML = '<span class="r">สำนักล่มสลายแล้ว</span> <button data-a="tab" data-t="menu">เมนู</button>'; return; }
  $('advbar').innerHTML = [[1, '+1 วัน'], [7, '+7 วัน'], [30, '+30 วัน'], [90, '+90 วัน']].map(a => '<button class="sm" data-a="adv" data-n="' + a[0] + '">' + a[1] + '</button>').join('') + '<button class="sm pri" data-a="advev">▶ ถึงเหตุสำคัญ</button>';
};
U.render = function () {
  U.renderTop(); U.renderTabs(); U.renderAdv();
  const v = $('view'), st = v.scrollTop; v.innerHTML = (U.V[U.tab] || (() => ''))(); if (U._keep) { v.scrollTop = st; }
  if (U.modalStack.length) U.renderModal();
};
U.go = function (tab) { U.tab = tab; U._keep = 0; U.render(); $('view').scrollTop = 0; };

/* ---------- การเดินเวลา ---------- */
U.adv = function (n, untilEvent) {
  const s = S(); if (U.busy || s.over) return;
  if (s.pending.length) { U.toast('มีเรื่องรอการตัดสินใจ — ดูที่หน้าภาพรวม'); U.go('home'); return; }
  U.busy = true; U.prog = 0; U.renderAdv();
  G.advance(n, { untilEvent, onProgress: (d, t) => { U.prog = d / t * 100; const e = $('advtxt'); if (e) e.textContent = 'จำลองแล้ว ' + d + '/' + t + ' วัน'; const b = document.querySelector('#advbar .bar i'); if (b) b.style.width = U.prog + '%'; } }).then(r => {
    U.busy = false; U._keep = 1;
    if (S().day - U.lastAuto >= 7) { G.save('auto'); U.lastAuto = S().day; }
    if (r.alerts && r.alerts.length) U.toast('หยุดเพราะ: ' + r.alerts[0]); else if (r.stopped) U.toast('หยุดตามคำสั่ง (ผ่านไป ' + r.done + ' วัน)'); else U.toast('ผ่านไป ' + r.done + ' วัน');
    U.render();
  });
};

/* ---------- ภาพรวม ---------- */
U.V.home = function () {
  const s = S(); let h = '';
  if (s.over) h += '<div class="card"><h3 class="r">สำนักล่มสลาย</h3><p>ไม่เหลือศิษย์ในสำนักอีกแล้ว เรื่องราวของ ' + esc(s.sect.name) + ' ดำรงอยู่ ' + s.day + ' วัน กดเมนูเพื่อเริ่มใหม่หรือโหลดเซฟ</p></div>';
  s.pending.forEach(p => {
    h += '<div class="card" style="border-color:var(--gold)"><h3>⚖️ ' + esc(p.title) + '</h3><div class="dim">' + esc(p.text || '') + '</div><div class="dim">ตัดสินใจก่อนวันที่ ' + (p.due + 1) + ' (เหลือ ' + Math.max(0, p.due - s.day) + ' วัน)</div>' +
      p.opts.map((o, i) => '<button class="' + (i === p.def ? 'pri' : '') + '" style="width:100%;margin-top:6px;text-align:left" data-a="decide" data-p="' + p.id + '" data-i="' + i + '">' + esc(o.t) + (i === p.def ? ' (ค่าเริ่มต้น)' : '') + '</button>').join('') + '</div>';
  });
  if (!s.tutorial) h += '<div class="card"><h3>เริ่มต้นอย่างไร</h3><div class="dim">1) ดูหน้า "สำนัก" ว่าขาดอะไร 2) กด "+7 วัน" ดูผลและอ่าน "รายงาน" 3) ระบบมอบหมายงานอัตโนมัติให้อยู่แล้ว แต่ปรับเองได้ในหน้า "ศิษย์" 4) อ่านคู่มือเต็มได้ที่ เมนู → คู่มือ</div><button class="sm" data-a="tut">เข้าใจแล้ว ซ่อนข้อความนี้</button></div>';
  const al = G.alive(), away = al.filter(c => c.state !== 'home').length, hurt = al.filter(c => c.inj.length).length, rk = [0, 1, 2, 3, 4].map(r => al.filter(c => c.rank === r).length);
  h += '<div class="card"><h3>สถานะสำนัก</h3><div>ศิษย์ ' + al.length + ' คน (ออกนอกสำนัก ' + away + ', บาดเจ็บ ' + hurt + ')</div><div class="dim">' + G.RANKS.map((n, i) => n + ' ' + rk[i]).join(' · ') + '</div><div class="dim">ชื่อเสียง ' + G.f0(s.sect.rep) + ' · อากาศ: ' + s.weather.k + ' · ภัยอสูร ' + G.f0(s.beastP) + '/100 · เจ้าสำนัก: ' + (s.chars[s.sect.leader] ? esc(s.chars[s.sect.leader].name) : 'ว่าง') + '</div></div>';
  h += '<div class="card"><h3>คลังและรายได้ต่อวัน (เฉลี่ย)</h3>';
  ['food', 'silver', 'herb', 'ore', 'wood', 'stone', 'beast', 'pillQi', 'pillBody', 'pillHeal', 'pillFound', 'gear'].forEach(k => {
    const f = s.flowAvg[k] || {}, n = flowNet(k), rows = Object.entries(f).filter(e => Math.abs(e[1]) >= .05).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1]));
    h += '<details><summary>' + G.RES[k].i + ' ' + G.RES[k].n + ' ' + G.f0(s.res[k]) + ' <span class="' + (n < -.05 ? 'r' : 'g') + '">(' + sgn(n) + '/วัน)</span></summary><div class="det">' + (rows.length ? rows.map(e => e[0] + ': ' + sgn(e[1])).join('\n') : 'ยังไม่มีการเคลื่อนไหว') + '</div></details>';
  });
  h += '</div>';
  const imp = s.log.filter(l => l.p >= 2).slice(-6).reverse();
  h += '<div class="card"><h3>เหตุการณ์สำคัญล่าสุด</h3>' + (imp.map(l => '<div class="item"><span class="dim">วัน ' + (l.day + 1) + '</span> ' + esc(l.t) + '</div>').join('') || '<div class="dim">ยังเงียบสงบ</div>') + '<button class="sm" data-a="tab" data-t="rep">ดูรายงานทั้งหมด</button></div>';
  return h;
};

/* ---------- ศิษย์ ---------- */
U.filtered = function () {
  const f = U.f, q = f.q.trim();
  let l = G.alive().filter(c => (f.rank < 0 || c.rank === f.rank) && (!f.path || c.path === f.path) && (!f.job || c.job === f.job) && (!f.state || (f.state === 'hurt' ? c.inj.length : f.state === 'away' ? c.state !== 'home' : f.state === 'ready' ? G.btInfo(c).ready : 1)) && (!q || c.name.includes(q)));
  const key = { realm: c => -(c.realm * 1000 + c.prog / 10), name: c => c.name, age: c => -G.age(c), sat: c => c.sat, hp: c => c.hp, rank: c => -c.rank }[f.sort];
  l.sort((a, b) => { const x = key(a), y = key(b); return x < y ? -1 : x > y ? 1 : 0; });
  return l;
};
U.V.disc = function () {
  const f = U.f, l = U.filtered(), PG = 20, pages = Math.max(1, Math.ceil(l.length / PG)); U.page = Math.min(U.page, pages - 1);
  const chip = (lab, on, a, k, v) => '<button class="chip ' + (on ? 'on' : '') + '" data-a="' + a + '" data-k="' + k + '" data-v="' + v + '">' + lab + '</button>';
  let h = '<div class="chips">' + chip('ทุกยศ', f.rank < 0, 'flt', 'rank', -1) + G.RANKS.map((n, i) => chip(n, f.rank === i, 'flt', 'rank', i)).join('') + '</div>';
  h += '<div class="chips">' + chip('ทุกสาย', !f.path, 'flt', 'path', '') + ['qi', 'body', 'faith'].map(p => chip(PT[p][1], f.path === p, 'flt', 'path', p)).join('') + chip('บาดเจ็บ', f.state === 'hurt', 'flt', 'state', f.state === 'hurt' ? '' : 'hurt') + chip('นอกสำนัก', f.state === 'away', 'flt', 'state', f.state === 'away' ? '' : 'away') + chip('พร้อมทะลวง', f.state === 'ready', 'flt', 'state', f.state === 'ready' ? '' : 'ready') + '</div>';
  h += '<div class="row" style="margin-bottom:8px"><input id="q" placeholder="ค้นหาชื่อ" value="' + esc(f.q) + '" style="flex:2"><select data-a="flts" data-k="job" style="flex:1"><option value="">ทุกงาน</option>' + Object.keys(G.JOBS).map(j => '<option value="' + j + '"' + (f.job === j ? ' selected' : '') + '>' + G.JOBS[j].n + '</option>').join('') + '</select><select data-a="flts" data-k="sort" style="flex:1">' + [['realm', 'เรียงตามขั้น'], ['rank', 'ยศ'], ['name', 'ชื่อ'], ['age', 'อายุ'], ['sat', 'ความพอใจ'], ['hp', 'สุขภาพ']].map(o => '<option value="' + o[0] + '"' + (f.sort === o[0] ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select></div>';
  const nsel = Object.keys(U.sel).length;
  h += '<div class="row sp" style="margin-bottom:8px"><span class="dim">พบ ' + l.length + ' คน</span><button class="sm ' + (U.selMode ? 'pri' : '') + '" data-a="selmode">' + (U.selMode ? 'เสร็จสิ้นการเลือก' : 'เลือกหลายคน') + '</button></div>';
  if (U.selMode) h += '<div class="card"><div class="row"><button class="sm" data-a="selall">เลือกทั้งหมดที่กรอง (' + l.length + ')</button><button class="sm" data-a="selnone">ล้าง</button><span class="dim">เลือกแล้ว ' + nsel + '</span></div><div class="row" style="margin-top:6px"><select id="bulkjob" style="flex:1"><option value="auto">อัตโนมัติ</option>' + Object.keys(G.JOBS).map(j => '<option value="' + j + '">' + G.JOBS[j].i + ' ' + G.JOBS[j].n + '</option>').join('') + '</select><button class="pri" data-a="bulkjob">ตั้งงาน</button></div></div>';
  h += '<div class="card">' + l.slice(U.page * PG, U.page * PG + PG).map(c => {
    const st = c.state !== 'home' ? ' <span class="y">[นอกสำนัก]</span>' : '', inj = c.inj.length ? ' <span class="r">🩹</span>' : '', rd = G.btInfo(c).ready ? ' <span class="g">✨</span>' : '';
    return '<div class="item row sp" data-a="' + (U.selMode ? 'selone' : 'char') + '" data-id="' + c.id + '" style="' + (U.sel[c.id] ? 'background:#2d5b4b44' : '') + '"><div style="flex:1">' + (U.selMode ? (U.sel[c.id] ? '☑ ' : '☐ ') : '') + '<b>' + esc(c.name) + '</b> ' + ptag(c.path) + '<span class="dim">' + G.RANKS[c.rank] + ' · ' + realmN(c) + '</span>' + st + inj + rd + '<div class="dim">' + G.JOBS[c.job].i + G.JOBS[c.job].n + ' · อายุ ' + G.age(c) + '</div></div><div style="width:70px"><div class="dim" style="text-align:right">สุขภาพ</div>' + bar(c.hp, c.hp < 40 ? 'r' : '') + '</div></div>';
  }).join('') + (l.length ? '' : '<div class="dim">ไม่พบศิษย์ตามเงื่อนไข</div>') + '</div>';
  h += '<div class="pg"><button class="sm" data-a="pg" data-d="-1"' + (U.page ? '' : ' disabled') + '>ก่อนหน้า</button><span class="dim">หน้า ' + (U.page + 1) + '/' + pages + '</span><button class="sm" data-a="pg" data-d="1"' + (U.page < pages - 1 ? '' : ' disabled') + '>ถัดไป</button></div>';
  return h;
};

/* ---------- รายละเอียดศิษย์ (modal) ---------- */
U.M.char = function (id) {
  const s = S(), c = s.chars[id]; if (!c) return '<div class="card">ไม่พบศิษย์ (อาจเสียชีวิตหรือออกจากสำนักแล้ว)</div><button data-a="close">ปิด</button>';
  const R = G.PATHS[c.path].realms[c.realm], m = G.MANUALS[c.manual], sw = G.satWhy(c), bt = [['normal', 'ปกติ'], ['safe', 'ปลอดภัย (ใช้ยาฐานมั่น)'], ['rush', 'เร่ง (ใช้ยาเร่ง)']].map(x => [x[1], G.btInfo(c, x[0]), x[0]]);
  let h = '<div class="row sp"><h3 style="margin:0;color:var(--gold)">' + esc(c.name) + '</h3><button class="sm" data-a="close">ปิด</button></div>';
  h += '<div>' + ptag(c.path) + G.RANKS[c.rank] + ' · ' + realmN(c) + ' · อายุ ' + G.age(c) + '/' + c.life + ' · ' + (c.g === 'f' ? 'หญิง' : 'ชาย') + ' · ธาตุ' + G.ELEM[c.elem] + '</div>';
  h += '<div class="dim">เป้าหมาย: ' + esc(c.goal) + '</div>';
  h += '<div class="card" style="margin-top:8px"><h4>สถานะ</h4>สุขภาพ ' + G.f0(c.hp) + bar(c.hp, c.hp < 40 ? 'r' : '') + 'ความพอใจ ' + G.f0(c.sat) + ' · ภักดี ' + G.f0(c.loy) + bar(c.sat, 'y') + '<div class="dim">เหนื่อยล้า ' + G.f0(c.fat) + ' · สภาพจิต ' + G.f0(c.mind) + ' · ฐานราก ' + G.f0(c.found) + (c.stress ? ' · เครียดกาย ' + G.f0(c.stress) : '') + (c.tox ? ' · พิษยา ' + G.f0(c.tox) : '') + '</div>' + (c.inj.length ? '<div class="r">บาดเจ็บ: ' + c.inj.map(j => esc(j.n || j.why || 'แผล') + ' (ระดับ ' + j.sev + ')').join(', ') + '</div>' : '') +
    '<details><summary>เหตุที่ทำให้พอใจ/ไม่พอใจ</summary><div class="det">' + sw.it.map(x => x[0] + ': ' + (x[1] > 0 ? '+' : '') + x[1]).join('\n') + '</div></details></div>';
  h += '<div class="card"><h4>บำเพ็ญ: ' + G.PATHS[c.path].n + '</h4>' + (m ? 'คัมภีร์ "' + esc(m.n) + '" — ' + esc(m.d) : '') + '<br>' + (R ? 'ความก้าวหน้า ' + G.f0(c.prog) + '/' + R.need + bar(c.prog / R.need * 100) : 'ถึงขีดสูงสุด');
  if (R) {
    h += '<div class="dim">ทะลวงสู่ขั้นถัดไป ผลสำเร็จขึ้นกับฐานราก ความเข้าใจ จิต ครู คัมภีร์ และอาคาร</div>';
    bt.forEach(b => { h += '<div class="item"><div class="row sp"><span>โหมด' + b[0] + ' · สำเร็จประมาณ <b class="' + (b[1].p >= .6 ? 'g' : b[1].p >= .4 ? 'y' : 'r') + '">' + Math.round(b[1].p * 100) + '%</b></span><button class="sm pri" data-a="bt" data-id="' + c.id + '" data-m="' + b[2] + '"' + (b[1].ready ? '' : ' disabled') + '>ทะลวง</button></div>' + (b[1].blk.length ? '<div class="dim r">ติด: ' + b[1].blk.map(esc).join(' / ') + '</div>' : '') + '<div class="dim">ต้องใช้: ' + (Object.entries(b[1].req).map(e => (G.RES[e[0]] ? G.RES[e[0]].n : 'ศรัทธา') + ' ' + e[1]).join(', ') || '-') + '</div></div>'; });
    h += '<details><summary>ปัจจัยที่มีผลต่อโอกาส (โหมดปกติ)</summary><div class="det">' + bt[0][1].fac.map(x => x[0] + ': ' + (x[1] > 0 ? '+' : '') + Math.round(x[1] * 100) + '%').join('\n') + '</div></details>';
    h += '<div class="row"><span class="dim">การทะลวงอัตโนมัติ:</span><button class="sm ' + (c.mode === 'hold' ? 'warn' : 'pri') + '" data-a="holdbt" data-id="' + c.id + '">' + (c.mode === 'hold' ? 'ระงับอยู่ (กดเพื่อปล่อยอัตโนมัติ)' : 'ตามนโยบายสำนัก (กดเพื่อระงับ)') + '</button></div>';
  }
  if (c.path === 'faith') h += '<div class="dim">ศรัทธาสะสม ' + G.f0(c.faith) + (c.vow ? ' · คำสาบาน: ' + esc(c.vow) : '') + ' · ชุมชนที่ดูแล: ' + (c.patron ? esc((s.villages.find(v => v.id === c.patron) || {}).n || '-') : 'ยังไม่มี') + '</div>';
  h += '</div>';
  const mans = Object.keys(G.MANUALS).filter(i => s.known[i] && G.MANUALS[i].p === c.path);
  h += '<div class="card"><h4>คัมภีร์ (เปลี่ยนมีค่าธรรมเนียม 20 เหรียญ และเสียความก้าวหน้า 35%)</h4>' + mans.map(i => { const M = G.MANUALS[i], ok = G.N.allowedManual ? G.N.allowedManual(c,i) : (s.access[i] ?? M.rank) <= c.rank; return '<div class="item row sp"><div style="flex:1"><b>' + esc(M.n) + '</b>' + (i === c.manual ? ' <span class="g">(ใช้อยู่)</span>' : '') + '<div class="dim">' + esc(M.d) + (ok ? '' : ' · ไม่มีสิทธิ์ใช้คัมภีร์นี้') + '</div></div>' + (i !== c.manual ? '<button class="sm" data-a="manual" data-id="' + c.id + '" data-m="' + i + '"' + (ok ? '' : ' disabled') + '>ใช้</button>' : '') + '</div>'; }).join('') +
    '<div class="row" style="margin-top:6px">' + ['qi', 'body', 'faith'].filter(p => p !== c.path).map(p => '<button class="sm warn" data-a="swpath" data-id="' + c.id + '" data-p="' + p + '">เปลี่ยนไปสาย' + PT[p][1] + ' (50 เหรียญ, เริ่มขั้นแรกใหม่)</button>').join('') + '</div><div class="dim">หมายเหตุ: เวอร์ชันนี้ยังไม่รองรับการฝึกสองสายพร้อมกัน</div></div>';
  h += '<div class="card"><h4>งานและตำแหน่ง</h4><div class="row"><select id="jobsel" style="flex:1"><option value="auto">อัตโนมัติ</option>' + Object.keys(G.JOBS).map(j => '<option value="' + j + '"' + (c.job === j && c.jobFix ? ' selected' : '') + '>' + G.JOBS[j].i + ' ' + G.JOBS[j].n + '</option>').join('') + '</select><button class="sm pri" data-a="job" data-id="' + c.id + '"' + (c.state === 'home' ? '' : ' disabled') + '>ตั้งงาน</button></div>' +
    (c.job === 'preach' && c.state === 'home' ? '<div class="row" style="margin-top:6px"><select id="patsel" style="flex:1">' + s.villages.map(v => '<option value="' + v.id + '"' + (c.patron === v.id ? ' selected' : '') + '>' + esc(v.n) + '</option>').join('') + '</select><button class="sm" data-a="patron" data-id="' + c.id + '">ดูแลชุมชนนี้</button></div>' : '') +
    '<div class="dim">งานปัจจุบัน: ' + G.JOBS[c.job].n + (c.jobFix ? ' (กำหนดเอง)' : ' (อัตโนมัติ)') + '</div><div class="row" style="margin-top:6px">' + (c.rank < 4 ? '<button class="sm" data-a="prom" data-id="' + c.id + '" data-d="1"' + (c.rank >= 3 ? ' disabled' : '') + '>เลื่อนยศ</button><button class="sm" data-a="prom" data-id="' + c.id + '" data-d="-1"' + (c.rank <= 0 ? ' disabled' : '') + '>ลดยศ</button><button class="sm" data-a="rew" data-id="' + c.id + '" data-k="silver">รางวัลเงิน 30</button><button class="sm" data-a="rew" data-id="' + c.id + '" data-k="pill">รางวัลยา</button><button class="sm warn" data-a="pun" data-id="' + c.id + '">ลงโทษ</button>' : '') + '</div>' +
    (c.rank < 3 ? '<div class="row" style="margin-top:6px"><span class="dim">อาจารย์:</span><select id="mastersel" style="flex:1"><option value="">ไม่มี</option>' + G.alive().filter(e => e.rank >= 3 && e.id !== c.id).map(e => '<option value="' + e.id + '"' + (c.master === e.id ? ' selected' : '') + '>' + esc(e.name) + ' (' + PT[e.path][1] + ')</option>').join('') + '</select><button class="sm" data-a="master" data-id="' + c.id + '">เสนอฝากตัว</button></div>' : '') + '</div>';
  h += '<div class="card"><h4>คุณลักษณะ</h4>' + c.traits.filter(t => !G.TRAITS[t].hidden || c.hid === null).map(t => '<span class="tag">' + esc(G.TRAITS[t].n) + '</span> <span class="dim">' + esc(G.TRAITS[t].d) + '</span><br>').join('') +
    '<div class="dim">พรสวรรค์: ปราณ ' + c.apt.qi + ' · กายา ' + c.apt.body + ' · ศรัทธา ' + c.apt.faith + '</div></div>';
  const rel = Object.entries(c.rel).filter(e => s.chars[e[0]] && Math.abs(e[1]) >= 25).sort((a, b) => Math.abs(b[1]) - Math.abs(a[1])).slice(0, 6);
  h += '<div class="card"><h4>ความสัมพันธ์เด่น</h4>' + (rel.map(e => esc(s.chars[e[0]].name) + ' <span class="' + (e[1] > 0 ? 'g' : 'r') + '">' + (e[1] > 0 ? 'สนิท' : 'ไม่ลงรอย') + ' (' + Math.round(e[1]) + ')</span>').join('<br>') || '<span class="dim">ยังไม่มี</span>') + '</div>';
  h += '<div class="card"><h4>ประวัติ</h4><div class="det">' + c.bio.slice(-12).reverse().map(b => 'วัน ' + (b[0] + 1) + ': ' + b[1]).join('\n') + '</div></div>';
  return h;
};

/* ---------- Modal + ย้อนกลับ ---------- */
U.open = function (name, arg) { U.modalStack.push([name, arg]); history.pushState({ m: U.modalStack.length }, ''); U.renderModal(); };
U.renderModal = function () {
  const top = U.modalStack[U.modalStack.length - 1], m = $('modal');
  if (!top) { m.className = 'hide'; m.innerHTML = ''; return; }
  const old = m.firstChild ? m.firstChild.scrollTop : 0;
  m.innerHTML = '<div class="box">' + U.M[top[0]](top[1]) + '</div>'; m.className = ''; if (m.firstChild) m.firstChild.scrollTop = old;
};
U.close = function () { if (U.modalStack.length) { U.modalStack.pop(); U.renderModal(); } };
U.res = function (r) { if (r && r.msg) U.toast(r.msg); U.render(); };
})(window.G);
