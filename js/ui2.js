/* ui2.js — สำนัก, โลก, รายงาน, เมนู, ตัวจัดการเหตุการณ์, boot */
(function (G) {
const U = G.UI, S = () => G.S, $ = id => document.getElementById(id), esc = U.esc, bar = U.bar, ptag = U.ptag;
const chips = (key, list) => '<div class="chips">' + list.map(o => '<button class="chip ' + (U.sub[key] === o[0] || (!U.sub[key] && o === list[0]) ? 'on' : '') + '" data-a="sub" data-k="' + key + '" data-v="' + o[0] + '">' + o[1] + '</button>').join('') + '</div>';
const sub = (key, list) => U.sub[key] || list[0][0];
const costTxt = c => Object.entries(c).map(e => G.RES[e[0]].i + e[1]).join(' ');

/* ---------- สำนัก ---------- */
const SECT = [['stock', 'คลัง/ตลาด'], ['build', 'อาคาร'], ['craft', 'ปรุง/หลอม'], ['pol', 'นโยบาย'], ['man', 'คัมภีร์'], ['app', 'ผู้สมัคร'], ['inventory','ช่องเก็บของ'], ['workshop','สูตร/ผลิต'], ['arts','วิชา'], ['stories','เรื่องราว'], ['steward','วางทิศทาง'], ['allocation','แจกของอัตโนมัติ'], ['lives','ชีวิตสมาชิก'], ['council','ตำแหน่ง/สืบทอด'], ['legends','ตำนาน']];
U.V.sect = function () {
  const s = S(), P = s.sect.policies, k = sub('sect', SECT); let h = chips('sect', SECT);
  if (G.N?.views?.[k]) return h+G.N.views[k]();
  if (k === 'stock') {
    h += '<div class="card"><h3>ตลาด</h3><div class="dim">ซื้อแพงกว่าราคากลาง 15% ขายได้ 70% และราคาขยับตามปริมาณที่ซื้อขาย</div>' + Object.keys(G.RES).filter(r => r !== 'silver').map(r => {
      const p = G.RES[r].p * s.market[r];
      return '<div class="item row sp"><div style="flex:1">' + G.RES[r].i + ' ' + G.RES[r].n + ' <b>' + G.f0(s.res[r]) + '</b><div class="dim">ราคา ' + G.f1(p) + '</div></div><button class="sm" data-a="buy" data-r="' + r + '">ซื้อ 10</button><button class="sm" data-a="sell" data-r="' + r + '">ขาย 10</button></div>';
    }).join('') + '</div>';
  } else if (k === 'build') {
    h += '<div class="card"><h3>อาคาร</h3><div class="dim">ต้องมีศิษย์ทำงาน "ก่อสร้าง" จึงจะคืบหน้า (ระบบมอบหมายให้อัตโนมัติ)</div>' + Object.keys(G.FAC).map(f => {
      const D = G.FAC[f], lv = s.fac[f], q = s.buildQ.find(x => x.f === f), nl = lv + (q ? 1 : 0) + 1, cost = {}; for (const r in D.cost) cost[r] = D.cost[r] * nl;
      return '<div class="item"><div class="row sp"><b>' + esc(D.n) + ' ระดับ ' + lv + '/' + D.max + '</b>' + (q ? '<span class="y">กำลังสร้าง ' + Math.round(q.done / q.work * 100) + '%</span>' : (nl <= D.max ? '<button class="sm pri" data-a="build" data-f="' + f + '">สร้างระดับ ' + nl + ' (' + costTxt(cost) + ')</button>' : '<span class="dim">สูงสุด</span>')) + '</div><div class="dim">' + esc(D.d) + '</div></div>';
    }).join('') + '</div>';
    if (s.buildQ.length) h += '<div class="card"><h4>คิวก่อสร้าง</h4>' + s.buildQ.map((q, i) => '<div class="row sp"><span>' + esc(G.FAC[q.f].n) + ' → ' + q.lv + ' (' + Math.round(q.done / q.work * 100) + '%)</span><button class="sm warn" data-a="cbuild" data-i="' + i + '">ยกเลิก (คืน 80%)</button></div>').join('') + '</div>';
  } else if (k === 'craft') {
    h += '<div class="card"><h3>การปรุงและหลอม</h3><div class="dim">ผลิตเมื่อคลังต่ำกว่าเป้าหมาย ต้องมีอาคารที่เกี่ยวข้องและศิษย์ทำงาน "ปรุงยา/หลอมอาวุธ"</div>' + Object.keys(G.CRAFT).map(r => {
      const C = G.CRAFT[r], st = s.craft[r];
      return '<div class="item"><div class="row sp"><b>' + G.RES[r].i + ' ' + G.RES[r].n + '</b><button class="sm ' + (st.on ? 'pri' : '') + '" data-a="craftOn" data-r="' + r + '">' + (st.on ? 'เปิด' : 'ปิด') + '</button></div><div class="dim">วัตถุดิบ: ' + costTxt(C.in) + ' · ต้องการ ' + esc(G.FAC[C.fac].n) + (s.fac[C.fac] > 0 ? '' : ' <span class="r">(ยังไม่มี)</span>') + '</div><div class="row"><span class="dim">เป้าหมายคลัง ' + st.t + ' (ตอนนี้ ' + G.f0(s.res[r]) + ')</span><button class="sm" data-a="craftT" data-r="' + r + '" data-d="-2">-2</button><button class="sm" data-a="craftT" data-r="' + r + '" data-d="2">+2</button></div></div>';
    }).join('') + '</div>';
  } else if (k === 'pol') {
    const sel = (key, opts, v) => '<select data-a="pol" data-k="' + key + '">' + opts.map(o => '<option value="' + o[0] + '"' + (String(v) === String(o[0]) ? ' selected' : '') + '>' + o[1] + '</option>').join('') + '</select>';
    const row = (lab, d, ctl) => '<div class="item"><div class="row sp"><span>' + lab + '</span><div style="width:55%">' + ctl + '</div></div><div class="dim">' + d + '</div></div>';
    h += '<div class="card"><h3>นโยบายสำนัก</h3>' +
      row('ปันส่วนอาหาร', 'ลดแล้วประหยัดแต่ศิษย์ไม่พอใจและอ่อนแอ', sel('ration', [[0, 'ประหยัด'], [1, 'ปกติ'], [2, 'อุดมสมบูรณ์']], P.ration)) +
      row('เบี้ยเลี้ยง', 'ส่งผลต่อรายจ่ายเงินรายเดือนและความพอใจ', sel('stipend', [[0, 'ต่ำ'], [1, 'ปกติ'], [2, 'สูง']], P.stipend)) +
      row('มอบหมายงานอัตโนมัติ', 'ทุก 5 วัน (งานที่ตั้งเองจะไม่ถูกแตะ)', sel('autoAssign', [[1, 'เปิด'], [0, 'ปิด']], P.autoAssign)) +
      row('สัดส่วนบำเพ็ญเพียร', 'ส่วนของศิษย์ว่างที่ให้บำเพ็ญ ที่เหลือทำงาน', sel('cultShare', [[.3, '30%'], [.45, '45%'], [.55, '55%'], [.7, '70%'], [.85, '85%']], P.cultShare)) +
      row('ใช้ยาบำรุงบำเพ็ญอัตโนมัติ', 'ใช้ยาปราณ/กายา แต่สะสมพิษยา', sel('autoPill', [[1, 'เปิด'], [0, 'ปิด']], P.autoPill)) +
      row('ทะลวงขั้นอัตโนมัติ', 'ระมัดระวัง = ทำเมื่อโอกาสสูง กล้า = ยอมเสี่ยงมากขึ้น', sel('autoBT', [['off', 'ปิด'], ['smart', 'ระมัดระวัง'], ['bold', 'กล้าเสี่ยง']], P.autoBT)) +
      row('เลื่อนยศอัตโนมัติ', 'ตามขั้นบำเพ็ญและความภักดี', sel('autoProm', [[1, 'เปิด'], [0, 'ปิด']], P.autoProm)) +
      row('รับศิษย์อัตโนมัติ', 'รับผู้สมัครที่คะแนนดีเมื่อมีเสบียงพอ', sel('autoRecruit', [[0, 'ปิด'], [1, 'เปิด']], P.autoRecruit)) +
      row('ผู้ป้องกัน', 'เลือกเฉพาะผู้เฝ้ายาม หรือทุกคนที่พร้อมรบ', sel('defense', [['guards', 'ผู้เฝ้ายาม (ระดมเพิ่มถ้าไม่พอ)'], ['all', 'ศิษย์ทุกคนที่สู้ได้']], P.defense)) +
      row('ยุทธวิธี', 'ผลต่อการสูญเสียและโอกาสชนะ', sel('tactic', [[0, 'รุก'], [1, 'สมดุล'], [2, 'ตั้งรับ']], P.tactic)) +
      row('ถอยเมื่อกำลังเหลือ', 'ถอยเร็วลดความตายแต่ยอมเสียทรัพย์', sel('retreat', [[.2, '20%'], [.35, '35%'], [.5, '50%']], P.retreat)) +
      row('ศรัทธาสำรอง', 'ผู้ศรัทธาจะไม่ใช้ศรัทธาต่ำกว่านี้ในการบำเพ็ญ (เก็บไว้ช่วยชุมชน)', sel('reserve', [[0, '0'], [15, '15'], [30, '30'], [50, '50']], P.reserve)) + '</div>';
  } else if (k === 'man') {
    h += '<div class="card"><h3>คัมภีร์ของสำนัก</h3>' + Object.keys(G.MANUALS).filter(i=>s.known[i]).map(i => {
      const M = G.MANUALS[i], kn = s.known[i], lore = s.lore[i] || 0;
      return '<div class="item">' + ptag(M.p) + '<b>' + (kn ? esc(M.n) : '??? (ยังไม่พบ)') + '</b>' + (kn ? '<div class="dim">' + esc(M.d) + ' · จัดสิทธิ์เรียนรายยศหรือรายคนได้ในหอวิชา' + '</div><div class="dim">ผู้ใช้: ' + (G.alive().filter(c => c.manual === i).map(c => esc(c.name)).join(', ') || '-') + '</div>' : '<div class="dim">' + (lore ? 'พบเบาะแส ' + Math.round(lore) + '% — สำรวจซากโบราณ/ดินแดนลับเพื่อค้นหาต่อ' : 'สำรวจสถานที่ต่าง ๆ เพื่อค้นหา') + '</div>') + '</div>';
    }).join('') + '</div>';
  } else if (k === 'app') {
    h += '<div class="card"><h3>ผู้สมัครเข้าสำนัก (' + s.applicants.length + ')</h3><div class="dim">ค่ารับเข้าเป็นเงิน ผู้สมัครแต่ละคนมีพรสวรรค์ "ประเมิน" จากการทดสอบ ซึ่งอาจคลาดเคลื่อนจากความจริง สำนักมีที่พัก ' + 6 * s.fac.dorm + ' ที่</div>' + s.applicants.map(a => '<div class="item"><div class="row sp"><b>' + esc(a.name) + '</b><span class="dim">อายุ ' + G.age(a) + ' · ค่ารับ ' + a.fee + '</span></div><div class="dim">ประเมิน: ปราณ ' + a.est.qi + ' · กายา ' + a.est.body + ' · ศรัทธา ' + a.est.faith + ' · ภักดีเริ่มต้นประเมิน ~' + a.loy + '</div><div class="dim">' + esc(a.mx?.legend?G.PATCH.legends[a.mx.legend].background:a.goal)+'<br>'+a.traits.filter(t=>!G.TRAITS[t]?.hidden).map(t=>esc(G.TRAITS[t]?.n)).join(' · ') + '</div><div class="row" style="margin-top:4px"><button class="sm pri" data-a="admit" data-id="' + a.id + '">รับเข้า</button><button class="sm" data-a="reject" data-id="' + a.id + '">ปฏิเสธ</button></div></div>').join('') + (s.applicants.length ? '' : '<div class="dim">ยังไม่มีผู้สมัคร (ชื่อเสียงสูงขึ้นจะมีผู้สมัครมากขึ้น)</div>') + '</div>';
  }
  return h;
};

/* ---------- โลก ---------- */
const WORLD = [['fac', 'ฝ่ายต่าง ๆ'], ['vil', 'ชุมชนศรัทธา'], ['exp', 'สำรวจ'], ['bat', 'การสู้รบ'], ['people','ชีวิตต่างสำนัก']];
const stanceN = { none: 'ไม่มีสัมพันธ์พิเศษ', trade: 'คู่ค้า', ally: 'พันธมิตร', war: 'สงคราม' };
U.V.world = function () {
  const s = S(), k = sub('world', WORLD); let h = chips('world', WORLD);
  if (G.N?.views?.[k]) return h+G.N.views[k]();
  if (k === 'fac') {
    const sp = G.sectPow();
    h += '<div class="card"><div class="dim">กำลังรบของสำนักเรา ' + G.f0(sp) + ' (เราเห็นของตัวเองชัดเจน) · ข้อมูลของฝ่ายอื่นเป็นเพียง "การประเมิน" ที่อาจเก่าและคลาดเคลื่อน สายสืบช่วยปรับให้ใหม่ขึ้น</div></div>';
    s.factions.forEach(f => {
      const est = G.estPow(f), age = est.age;
      h += '<div class="card"' + (f.dead ? ' style="opacity:.5"' : '') + '><div class="row sp"><h3 style="margin:0">' + esc(f.n) + '</h3>' + ptag(f.path) + '</div><div class="dim">' + esc(f.d) + ' · ผู้นำ ' + esc(f.leader) + '</div>' + (f.dead ? '<div class="r">ล่มสลายแล้ว</div>' :
        '<div>สถานะ: <b>' + stanceN[f.stance] + '</b>' + (f.pact ? ' (มีข้อตกลงการค้า)' : '') + ' · ความสัมพันธ์ <span class="' + (f.rel < 0 ? 'r' : 'g') + '">' + Math.round(f.rel) + '</span> · ไว้วางใจ ' + Math.round(f.trust) + '</div><div class="dim">ประเมินกำลัง ' + G.f0(est.lo) + '–' + G.f0(est.hi) + ' (ข้อมูลอายุ ' + age + ' วัน)' + (f.detail ? ' · กำลังติดตามรายละเอียด' : '') + '</div>' +
        '<div class="row" style="margin-top:6px"><button class="sm" data-a="dip" data-f="' + f.id + '" data-d="scout">สายสืบ (25)</button><button class="sm" data-a="dip" data-f="' + f.id + '" data-d="gift">ของกำนัล (60)</button>' +
        (f.stance === 'war' ? '<button class="sm pri" data-a="dip" data-f="' + f.id + '" data-d="peace">ขอสงบศึก</button>' : (f.pact ? '<button class="sm" data-a="dip" data-f="' + f.id + '" data-d="cancel">ยกเลิกการค้า</button>' : '<button class="sm" data-a="dip" data-f="' + f.id + '" data-d="trade">ขอค้าขาย</button>') + (f.stance !== 'ally' ? '<button class="sm" data-a="dip" data-f="' + f.id + '" data-d="ally">ขอเป็นพันธมิตร</button>' : '<button class="sm" data-a="dip" data-f="' + f.id + '" data-d="aid">ขอความช่วยเหลือ</button>') + '<button class="sm warn" data-a="dipwar" data-f="' + f.id + '">ประกาศสงคราม</button>') + '</div>' +
        (f.detail ? '<details><summary>บุคคลสำคัญที่ติดตาม</summary><div class="det">' + f.roster.map(x => esc(x.n) + ' (ระดับ ' + x.r + ')').join('\n') + '</div></details>' : '')) + '</div>';
    });
  } else if (k === 'vil') {
    h += '<div class="card"><div class="dim">ศิษย์สายศรัทธาที่ "ดูแลชุมชน" สะสมศรัทธาจากความไว้วางใจ แต่ความสนใจมีจำกัด ดูแลหลายที่พร้อมกันทำให้แต่ละที่ได้น้อยลง ชุมชนที่มี "ความต้องการเร่งด่วน" ต้องใช้ศรัทธาของศิษย์แก้ไขทันเวลา มิฉะนั้นความเชื่อมั่นจะลดลง</div></div>';
    s.villages.forEach(v => {
      const ps = G.alive().filter(c => c.patron === v.id && c.job === 'preach'), nd = v.need && G.needInfo[v.need.type] || null;
      h += '<div class="card"><div class="row sp"><h3 style="margin:0">' + esc(v.n) + '</h3><span class="tag">' + G.DOM[v.dom] + '</span></div><div class="dim">' + esc(v.d) + ' · ประชากร ' + G.f0(v.pop) + '</div>ความเชื่อมั่น ' + Math.round(v.trust) + bar(v.trust) + 'ความศรัทธา ' + Math.round(v.devo) + bar(v.devo, 'y') + '<div class="dim">เสถียรภาพ ' + Math.round(v.stab) + ' · ผู้ดูแล: ' + (ps.map(c => esc(c.name)).join(', ') || 'ไม่มี') + (v.rival > .3 ? ' · ' + (v.rival > .5 ? '<span class="r">มีกลุ่มศรัทธาคู่แข่งแข็งแกร่ง</span>' : 'มีคู่แข่งทางศรัทธา') : '') + '</div>' +
        (v.need ? '<div class="y">⚠ ' + esc((nd && nd.n) || 'ความต้องการเร่งด่วน') + ' (ความรุนแรง ' + (v.need.sev || '-') + ', เหลือเวลา ' + Math.max(0, (v.need.due || 0) - s.day) + ' วัน)</div><button class="sm pri" data-a="fspend" data-v="' + v.id + '">ใช้ศรัทธาของศิษย์แก้ไข</button>' : '<div class="dim">ไม่มีความต้องการเร่งด่วน</div>') + '</div>';
    });
  } else if (k === 'exp') {
    h += '<div class="card"><h3>คณะสำรวจที่กำลังเดินทาง</h3>' + (s.exps.map(e => '<div class="item"><b>' + esc(G.LOCS[e.loc].n) + '</b> · ' + (e.phase === 'go' ? 'ขาไป' : 'ขากลับ') + ' วันที่ ' + e.t + ' / '+(e.travel||G.LOCS[e.loc].dist) + '<div class="dim">' + e.mem.map(i => esc((s.chars[i] || {}).name || '?')).join(', ') + '</div></div>').join('') || '<div class="dim">ไม่มี</div>') + '</div>';
    const free = G.alive().filter(c => c.state === 'home' && c.hp >= 60 && c.rank >= 0 && !c.mx.study && !(c.mx.busyUntil>s.day));
    h += '<div class="card"><h3>ส่งคณะสำรวจ</h3><select id="eloc">' + Object.keys(G.LOCS).filter(l => s.discovered[l]).map(l => { const L = G.LOCS[l]; return '<option value="' + l + '">' + esc(L.n) + ' (ไกล ' + L.dist + ' วัน อันตราย ' + L.danger + ')</option>'; }).join('') + '</select>' +
      '<select id="erisk" style="margin-top:6px"><option value="0">ระมัดระวัง (ถอยง่าย ได้ของน้อย)</option><option value="1" selected>สมดุล</option><option value="2">บุกเบิก (ได้เยอะ เสี่ยงตาย)</option></select><div class="dim" style="margin-top:6px">เลือกสมาชิก (ที่อยู่ในสำนักและสุขภาพ ≥ 60):</div>' +
      free.map(c => '<label class="item" style="display:block"><input type="checkbox" class="emem" value="' + c.id + '"> ' + esc(c.name) + ' ' + ptag(c.path) + '<span class="dim">' + G.RANKS[c.rank] + ' · ' + U.realmN(c) + '</span></label>').join('') + '<button class="pri" style="margin-top:8px" data-a="exp">ออกเดินทาง</button><div class="dim">ใช้เสบียงเดินทาง ผู้ที่ไปจะไม่ทำงานในสำนักระหว่างนั้น</div></div>';
  } else if (k === 'bat') {
    h += '<div class="card"><h3>บันทึกการสู้รบ</h3>' + (s.battles.slice().reverse().map(b => '<div class="item"><div><span class="dim">วัน ' + (b.day + 1) + '</span> <b class="' + (b.win ? 'g' : 'r') + '">' + esc(b.t) + '</b></div><details><summary>เหตุผลและรายละเอียด</summary><div class="det">' + (b.cause || []).map(esc).join('\n') + '\n— — —\n' + (b.det || []).map(esc).join('\n') + '</div></details>' + (b.deaths && b.deaths.length ? '<div class="r">เสียชีวิต: ' + b.deaths.map(esc).join(', ') + '</div>' : '') + '</div>').join('') || '<div class="dim">ยังไม่มีการสู้รบ</div>') + '</div>';
  }
  return h;
};

/* ---------- รายงาน ---------- */
const CATS = [['', 'ทั้งหมด'], ['sect', 'สำนัก'], ['cult', 'บำเพ็ญ'], ['faith', 'ศรัทธา'], ['war', 'สงคราม'], ['dip', 'ทูต'], ['exp', 'สำรวจ'], ['death', 'ความตาย'], ['eco', 'เศรษฐกิจ'], ['world', 'โลก'], ['social', 'สังคม'], ['inj', 'บาดเจ็บ'], ['story','เรื่องราว']];
U.V.rep = function () {
  const s = S(), cf = U.sub.logc || '', imp = U.sub.logi || 0; let h = '<div class="chips">' + CATS.map(c => '<button class="chip ' + (cf === c[0] ? 'on' : '') + '" data-a="sub" data-k="logc" data-v="' + c[0] + '">' + c[1] + '</button>').join('') + '</div>';
  h += '<div class="row" style="margin-bottom:8px"><button class="chip ' + (imp ? '' : 'on') + '" data-a="sub" data-k="logi" data-v="0">ทุกระดับ</button><button class="chip ' + (imp ? 'on' : '') + '" data-a="sub" data-k="logi" data-v="1">เฉพาะสำคัญ</button></div>';
  const l = s.log.filter(x => (!cf || x.cat === cf) && (!imp || x.p >= 1)).slice(-80).reverse();
  h += '<div class="card">' + l.map(x => {
    const body = esc(x.t) + (x.n > 1 ? ' <span class="tag">×' + x.n + '</span>' : ''), more = (x.why && x.why.length) || (x.det && x.det.length);
    return '<div class="item"><span class="dim">วัน ' + (x.day + 1) + '</span> <span class="' + (x.p >= 2 ? 'y' : '') + '">' + body + '</span>' + (more ? '<details><summary>เหตุผล/รายละเอียด</summary><div class="det">' + (x.why || []).map(w => 'เพราะ: ' + esc(w)).join('\n') + ((x.why && x.why.length && x.det && x.det.length) ? '\n' : '') + (x.det || []).map(esc).join('\n') + '</div></details>' : '') + '</div>';
  }).join('') + (l.length ? '' : '<div class="dim">ไม่มีรายการ</div>') + '</div>';
  const hs = s.hist.slice(-12);
  if (hs.length) h += '<div class="card"><h4>ประวัติรายเดือน (ล่าสุด)</h4><table><tr><th>วัน</th><th>คน</th><th>เสบียง</th><th>เงิน</th></tr>' + hs.map(x => '<tr><td>' + x.d + '</td><td>' + x.n + '</td><td>' + G.f0(x.food) + '</td><td>' + G.f0(x.silver) + '</td></tr>').join('') + '</table></div>';
  const dd = s.deadOrder.slice(-15).reverse().map(id => s.dead[id]).filter(Boolean);
  h += '<div class="card"><h4>ทำเนียบผู้จากไป</h4>' + (dd.map(c => '<div class="item">' + esc(c.name) + ' <span class="dim">' + (c.rank != null ? G.RANKS[c.rank] : '') + ' · ' + esc(c.why || '') + ' · วัน ' + ((c.died || 0) + 1) + '</span></div>').join('') || '<div class="dim">ยังไม่มี</div>') + '</div>';
  return h;
};

/* ---------- เมนู ---------- */
const MENU = [['save', 'บันทึก'], ['help', 'คู่มือ'], ['pause', 'การหยุดอัตโนมัติ'], ['about', 'เกี่ยวกับ/ข้อจำกัด'], ['editor','แก้ไขเกม']];
const HELP = [
  ['เวลาและการเดินหน้า', 'หนึ่งปี = 360 วัน (4 ฤดูกาล ฤดูละ 90 วัน เดือนละ 30 วัน) กด +1/+7/+30/+90 วัน หรือ "ถึงเหตุสำคัญ" ระบบจำลองทีละวัน การเดิน N วันให้ผลเท่ากับเดิน 1 วัน N ครั้ง ถ้ามีเหตุที่ตั้งให้หยุดหรือมีเรื่องรอตัดสินใจ การเดินจะหยุดเอง กด "หยุด" ได้ทุกเมื่อ'],
  ['สามเส้นทางบำเพ็ญ', 'ปราณ: ใช้หินวิญญาณและคัมภีร์ ก้าวหน้าเร็วแต่ต้องมีทรัพยากร · กายา: หล่อร่างด้วยสมุนไพร/ยา ทนทานแต่กินเสบียงมากและต้องพักไม่ให้ร่างเครียด · ศรัทธา: ดูแลชุมชน สะสมศรัทธา ใช้ศรัทธาช่วยชาวบ้านหรือทะลวงขั้น ต้องรักษาคำสาบาน'],
  ['การทะลวงขั้น', 'ต้องสะสมความก้าวหน้าครบ มีทรัพยากรและสุขภาพพอ โอกาสสำเร็จขึ้นกับฐานราก ความเข้าใจ สภาพจิต ครู คัมภีร์ อาคาร โหมด "ปลอดภัย" ใช้ยาฐานมั่นเพิ่มโอกาส โหมด "เร่ง" ใช้ยาเร่ง ถ้าล้มเหลว ผลมีหลายระดับ ตั้งแต่เสียความก้าวหน้า บาดเจ็บ ไปจนถึงเสียชีวิต'],
  ['การเปลี่ยนคัมภีร์/สาย', 'เปลี่ยนคัมภีร์เสียเงิน 20 และเสียความก้าวหน้า 35% เปลี่ยนสายเสียเงิน 50 เริ่มขั้นแรกใหม่เหลือความก้าวหน้าเดิม 12% และฐานรากเสียหาย ควรคิดให้ดี'],
  ['เศรษฐกิจ', 'อาหารจากการทำไร่ เงินจากรับจ้าง ส่วย ตลาด การค้า ศิษย์ทุกคนกินเสบียงทุกวัน ถ้าเสบียงหมดจะอดอยากและป่วย ดูที่มาของรายรับ/รายจ่ายได้ในหน้าภาพรวม (แตะแต่ละทรัพยากร)'],
  ['ศัตรูและป้องกัน', 'โจรประเมินกำลังป้องกันและทรัพย์สินที่มองเห็นจากข้อมูลที่เก่าได้ จึงอาจบุกเมื่อเราอ่อนแอจริงหรือเข้าใจผิดก็ได้ อสูรบุกตามระดับภัยอสูร ตั้งนโยบายป้องกันและยุทธวิธีในหน้า สำนัก → นโยบาย'],
  ['ฝ่ายอื่นและทูต', 'ฝ่ายอื่นมีความสัมพันธ์ ความไว้วางใจ และนิสัยต่างกัน การขอค้า/พันธมิตรมีเงื่อนไขและบอกเหตุผลเมื่อถูกปฏิเสธ ของกำนัลส่งบ่อยแล้วผลลดลง ฝ่ายที่เกี่ยวข้องกับเราใกล้ชิดจะถูกจำลองละเอียดขึ้น โดยจำนวนคนและทรัพย์สินคงเดิม'],
  ['ผู้สืบทอด', 'เมื่อเจ้าสำนักสิ้นชีพ จะมีเรื่องให้เลือกผู้สืบทอด ผู้ทะเยอทะยานที่ไม่ได้รับเลือกอาจไม่พอใจ'],
  ['การบันทึก', 'เกมบันทึกอัตโนมัติทุกประมาณ 7 วันที่เดินเวลา มีสำรองอัตโนมัติ 1 ชุด ใช้ "ส่งออก" เพื่อเก็บเป็นไฟล์สำรองนอกเบราว์เซอร์ เพราะถ้าล้างข้อมูลเบราว์เซอร์ เซฟในเครื่องจะหาย']
];
U.V.menu = function () {
  const s = S(), k = sub('menu', MENU); let h = chips('menu', MENU);
  if (G.N?.views?.[k]) return h+G.N.views[k]();
  if (k === 'save') {
    const slot = n => { const t = G.store.get('mekha_patch_' + n); if (!t) return '<span class="dim">ว่าง</span>'; try { const o = JSON.parse(t); return '<span class="dim">วันที่ ' + o.S.day + ' · ศิษย์ ' + o.S.order.length + ' · ' + Math.round(t.length / 1024) + ' KB</span>'; } catch (e) { return '<span class="r">เสียหาย</span>'; } };
    h += '<div class="card"><h3>เซฟในเบราว์เซอร์</h3>' + ['1', '2', '3'].map(n => '<div class="item row sp"><div>ช่อง ' + n + '<br>' + slot(n) + '</div><div class="row"><button class="sm pri" data-a="save" data-n="' + n + '">บันทึก</button><button class="sm" data-a="load" data-n="' + n + '">โหลด</button></div></div>').join('') +
      '<div class="item row sp"><div>อัตโนมัติ<br>' + slot('auto') + '</div><button class="sm" data-a="load" data-n="auto">โหลด</button></div><div class="item row sp"><div>สำรองอัตโนมัติก่อนหน้า<br>' + slot('auto_bak') + '</div><button class="sm" data-a="load" data-n="auto_bak">โหลด</button></div></div>';
    h += '<div class="card"><h3>ส่งออก / นำเข้า</h3><div class="row"><button class="pri" data-a="export">ส่งออกเป็นไฟล์ .json</button><button data-a="copyexp">คัดลอกข้อความเซฟ</button></div><div class="dim" style="margin:6px 0">ไฟล์จะอยู่ในโฟลเดอร์ ดาวน์โหลด ของโทรศัพท์</div><input type="file" id="impfile" accept=".json,application/json,text/plain"><div class="dim" style="margin:6px 0">หรือวางข้อความเซฟที่นี่:</div><textarea id="imptxt" placeholder="วางข้อความเซฟ"></textarea><button class="warn" style="margin-top:6px" data-a="import">นำเข้า (แทนที่เกมปัจจุบัน)</button></div>';
    h += '<div class="card"><h3>เริ่มเกมใหม่</h3><input id="newname" placeholder="ชื่อสำนัก (เว้นว่าง = ค่าเริ่มต้น)"><input id="newseed" placeholder="เลขสุ่ม seed (เว้นว่าง = สุ่ม)" inputmode="numeric" style="margin-top:6px"><button class="warn" style="margin-top:6px" data-a="newgame">เริ่มใหม่ (เกมปัจจุบันจะหายถ้าไม่ได้บันทึก)</button><div class="dim">seed ที่ใช้อยู่: ' + s.seed + '</div></div>';
  } else if (k === 'help') {
    h += '<div class="card"><h3>คู่มือ</h3>' + HELP.map(x => '<details><summary>' + x[0] + '</summary><div class="dim">' + x[1] + '</div></details>').join('') + '</div>';
    h += '<div class="card"><h3>ข้อมูลอ้างอิง</h3><details><summary>ขั้นบำเพ็ญทั้งสามสาย</summary><div class="det">' + ['qi', 'body', 'faith'].map(p => G.PATHS[p].n + ':\n' + G.PATHS[p].realms.map((r, i) => '  ' + (i + 1) + '. ' + r.n + ' (ต้องสะสม ' + r.need + ')').join('\n')).join('\n') + '</div></details>' +
      '<details><summary>คุณลักษณะ</summary><div class="det">' + Object.keys(G.TRAITS).filter(t => !G.TRAITS[t].hidden).map(t => G.TRAITS[t].n + ': ' + G.TRAITS[t].d).join('\n') + '</div></details>' +
      '<details><summary>งานทั้งหมด</summary><div class="det">' + Object.keys(G.JOBS).map(j => G.JOBS[j].i + ' ' + G.JOBS[j].n).join('\n') + '</div></details>' +
      '<details><summary>อาคาร</summary><div class="det">' + Object.keys(G.FAC).map(f => G.FAC[f].n + ': ' + G.FAC[f].d).join('\n') + '</div></details></div>';
    h += '<button data-a="tutreset">แสดงข้อความแนะนำเริ่มต้นอีกครั้ง</button>';
  } else if (k === 'pause') {
    const names = { critical: 'เหตุวิกฤต/ล่มสลาย', breakthrough: 'ทะลวงขั้น (สำเร็จ/ล้มเหลว)', death: 'ศิษย์เสียชีวิต', threat: 'ศัตรู/สัตว์ร้ายบุก', expedition: 'คณะสำรวจกลับ/เจอเหตุ', diplomacy: 'ทูต/ข้อเสนอ', faith: 'ความต้องการของชุมชนศรัทธา', story:'เรื่องราวและคำตอบต่อเนื่อง' };
    h += '<div class="card"><h3>หยุดเดินเวลาอัตโนมัติเมื่อ…</h3>' + Object.keys(names).map(c => '<label class="item" style="display:block"><input type="checkbox" data-a="pause" data-c="' + c + '"' + (s.pauseCfg[c] ? ' checked' : '') + '> ' + names[c] + '</label>').join('') + '<div class="dim">เรื่องที่ต้องตัดสินใจจะหยุดเสมอ</div></div>';
  } else if (k === 'about') {
    h += '<div class="card"><h3>' + G.TITLE + ' v' + G.VERSION + '</h3><div class="dim">เกมบริหารสำนักบำเพ็ญเพียรแบบเล่นคนเดียว ออฟไลน์ทั้งหมด ไม่ใช้อินเทอร์เน็ต</div></div><div class="card"><h4>ข้อจำกัดที่ทราบ</h4><div class="dim">• ยังไม่รองรับการฝึกสองสาย (ปราณ+กายา) พร้อมกัน<br>• การจำลองหลายวันทำบนเธรดหลักแบบแบ่งก้อน (ไม่มี Web Worker) ถ้าจำลองช่วงยาวมากหน้าจออาจกระตุกชั่วคราว ใช้ปุ่มหยุดได้<br>• เนื้อหาเป็นชุดเริ่มต้น: 24 คัมภีร์ 114 วิชา 662 สิ่งของ 60 เรื่องราว 24 ตำนาน 6 ฝ่าย 4 ชุมชน 8 สถานที่<br>• ยังไม่ได้ทดสอบบนเครื่องจริงของผู้พัฒนา ดูรายงานการทดสอบในไฟล์เอกสาร</div></div>';
  }
  return h;
};

/* ---------- ตัวจัดการเหตุการณ์ ---------- */
const A = U.A, val = id => { const e = $(id); return e ? e.value : ''; };
A.tab = d => U.go(d.t); A.stop = () => { G.stopFlag = true; }; A.adv = d => U.adv(+d.n, false); A.advev = () => U.adv(90, true);
A.tut = () => { S().tutorial = 1; U.render(); }; A.tutreset = () => { S().tutorial = 0; U.go('home'); };
A.decide = d => { G.decide(d.p, +d.i); U.render(); };
A.flt = d => { const v = d.k === 'rank' ? +d.v : d.v; U.f[d.k] = v; U.page = 0; U.render(); };
A.flts = (d, el) => { U.f[d.k] = el.value; U.page = 0; U.render(); };
A.char = d => U.open('char', d.id); A.close = () => history.back();
A.selmode = () => { U.selMode = U.selMode ? 0 : 1; U.sel = {}; U.render(); };
A.selone = d => { if (U.sel[d.id]) delete U.sel[d.id]; else U.sel[d.id] = 1; U.render(); };
A.selall = () => { U.filtered().forEach(c => U.sel[c.id] = 1); U.render(); }; A.selnone = () => { U.sel = {}; U.render(); };
A.bulkjob = () => { const ids = Object.keys(U.sel); if (!ids.length) return U.toast('ยังไม่ได้เลือกศิษย์'); U.res(G.setJob(ids, val('bulkjob'))); };
A.pg = d => { U.page = Math.max(0, U.page + +d.d); U.render(); };
A.bt = d => { const c = S().chars[d.id], r = G.attemptBT(c, d.m); U.res(r.ok === false ? r : { msg: r.msg || 'ทะลวงเสร็จสิ้น ดูผลในรายงาน' }); };
A.holdbt = d => { const c = S().chars[d.id]; c.mode = c.mode === 'hold' ? 'auto' : 'hold'; U.render(); };
A.manual = d => U.res(G.setManual(S().chars[d.id], d.m));
A.swpath = d => { if (confirm('เปลี่ยนสายบำเพ็ญจะเริ่มขั้นแรกใหม่ ยืนยัน?')) U.res(G.switchPath(S().chars[d.id], d.p)); };
A.job = d => U.res(G.setJob([d.id], val('jobsel')));
A.patron = d => { G.setPatron(S().chars[d.id], val('patsel')); U.res({ msg: 'ตั้งชุมชนที่ดูแลแล้ว' }); };
A.prom = d => U.res(G.promote(S().chars[d.id], +d.d)); A.rew = d => U.res(G.reward(S().chars[d.id], d.k));
A.pun = d => { if (confirm('ลงโทษศิษย์คนนี้?')) U.res(G.punish(S().chars[d.id])); }; A.master = d => U.res(G.setMaster(S().chars[d.id], val('mastersel')));
A.sub = d => { U.sub[d.k] = d.v === '0' ? 0 : d.v === '1' ? 1 : d.v; U.render(); };
A.buy = d => U.res(G.trade(d.r, 10, 'buy')); A.sell = d => U.res(G.trade(d.r, 10, 'sell'));
A.build = d => U.res(G.build(d.f)); A.cbuild = d => { G.cancelBuild(+d.i); U.render(); };
A.craftOn = d => { const c = S().craft[d.r]; c.on = c.on ? 0 : 1; U.render(); };
A.craftT = d => { const c = S().craft[d.r]; c.t = Math.max(0, c.t + +d.d); U.render(); };
A.pol = (d, el) => { const v = el.value, k = d.k; S().sect.policies[k] = (v === 'off' || v === 'smart' || v === 'bold' || v === 'guards' || v === 'all') ? v : +v; U.toast('บันทึกนโยบายแล้ว'); };
A.admit = d => U.res(G.admit(d.id)); A.reject = d => { G.reject(d.id); U.render(); };
A.dip = d => U.res(G.dip(d.f, d.d)); A.dipwar = d => { if (confirm('ประกาศสงครามจะทำให้ความสัมพันธ์พังและอาจถูกบุก ยืนยัน?')) U.res(G.dip(d.f, 'war')); };
A.fspend = d => { U.res({ msg: G.faithSpend(d.v) ? 'ใช้ศรัทธาแก้ไขปัญหาแล้ว' : 'ไม่มีผู้ใดมีศรัทธาเพียงพอ' }); };
A.exp = () => { const ids = [...document.querySelectorAll('.emem:checked')].map(e => e.value); U.res(G.launchExp(val('eloc'), ids, +val('erisk'))); };
A.pause = (d, el) => { S().pauseCfg[d.c] = el.checked ? 1 : 0; };
A.save = d => U.res(G.save(d.n)); 
A.load = d => { if (!confirm('โหลดเซฟนี้แทนเกมปัจจุบัน?')) return; const r = G.load(d.n); U.lastAuto = r.ok ? S().day : U.lastAuto; U.res(r); };
const dl = () => { const txt = G.serialize(), b = new Blob([txt], { type: 'application/json' }), a = document.createElement('a'); a.href = URL.createObjectURL(b); a.download = 'เมฆาสงบ-เซฟ-วัน' + S().day + '.json'; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000); };
A.export = () => { dl(); U.toast('ส่งออกแล้ว ดูในโฟลเดอร์ดาวน์โหลด'); };
A.copyexp = () => { const txt = G.serialize(); (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => U.toast('คัดลอกแล้ว'), () => { const t = $('imptxt'); if (t) { t.value = txt; t.select(); } U.toast('คัดลอกอัตโนมัติไม่ได้ ใส่ข้อความในช่องแล้ว กดคัดลอกเอง'); }); };
A.import = () => { const f = $('impfile').files[0], done = txt => { const r = G.loadText(txt); if (r.ok) U.lastAuto = S().day; U.res(r); }; if (f) { const fr = new FileReader(); fr.onload = () => done(String(fr.result)); fr.readAsText(f); } else if (val('imptxt').trim()) done(val('imptxt')); else U.toast('เลือกไฟล์หรือวางข้อความก่อน'); };
A.newgame = () => { if (!confirm('เริ่มเกมใหม่? เกมปัจจุบันจะหายถ้าไม่ได้บันทึก')) return; G.newGame(parseInt(val('newseed')) || 0, val('newname').trim() || undefined); U.lastAuto = 0; U.sub = {}; U.sel = {}; U.go('home'); U.toast('เริ่มเกมใหม่แล้ว'); };

U.boot = function () {
  document.addEventListener('click', e => {
    const el = e.target.closest('[data-a]'); if (!el || el.tagName === 'SELECT' || el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') return;
    const f = A[el.dataset.a]; if (f) { try { f(el.dataset, el); } catch (err) { U.toast('เกิดข้อผิดพลาด: ' + err.message); console.error(err); } }
  });
  document.addEventListener('change', e => { const el = e.target.closest('[data-a]'); if (!el) return; const f = A[el.dataset.a]; if (f && (el.tagName === 'SELECT' || el.type === 'checkbox')) { try { f(el.dataset, el); } catch (err) { U.toast('เกิดข้อผิดพลาด: ' + err.message); console.error(err); } } });
  document.addEventListener('input', e => { if (e.target.id === 'q') { U.f.q = e.target.value; U.page = 0; clearTimeout(U._qt); U._qt = setTimeout(() => { U.render(); const q = $('q'); if (q) { q.focus(); q.setSelectionRange(q.value.length, q.value.length); } }, 350); } });
  window.addEventListener('popstate', () => { if (U.modalStack.length) { U.modalStack.pop(); U.renderModal(); } });
  let r = G.load('auto'); if (r.ok) { U.lastAuto = S().day; } else { G.newGame(0); }
  U.render(); if (r.ok) U.toast('โหลดเซฟอัตโนมัติ (วันที่ ' + S().day + ')');
};
})(window.G);
