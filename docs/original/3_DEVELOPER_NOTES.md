# บันทึกสำหรับผู้พัฒนา

## สถาปัตยกรรม
- JavaScript ธรรมดา (ไม่มี ES module/fetch/CDN) โหลดผ่าน `<script>` ตามลำดับใน `index.html` เพื่อให้เปิดได้จาก `file://`
- ทุกอย่างอยู่ใน namespace ส่วนกลาง `G` (`window.G`) และสถานะเกมทั้งหมดอยู่ใน `G.S` (JSON ล้วน เซฟได้ตรง ๆ)

| ไฟล์ | หน้าที่ |
|---|---|
| `js/data.js` | เนื้อหา/คำนิยามทั้งหมด: ทรัพยากร งาน ยศ คุณลักษณะ เส้นทาง คัมภีร์ อาคาร สูตรปรุง สถานที่ หมู่บ้าน ฝ่าย ค่าสมดุล `G.CFG` |
| `js/core.js` | RNG (mulberry32 เก็บใน `S.rng`), สร้างตัวละคร, `G.log`, `G.newGame` |
| `js/sim.js` | `G.stepDay` และระบบรายวัน: ผลผลิต บำเพ็ญ ทะลวง ศรัทธา สุขภาพ สังคม ผู้สืบทอด จัดงานอัตโนมัติ |
| `js/world.js` | ฝ่ายอื่น ข้อมูลข่าวกรอง การรบ ภัยคุกคาม การทูต คณะสำรวจ การตัดสินใจที่รอ |
| `js/actions.js` | การกระทำของผู้เล่น (ใช้ร่วมกับเทสต์) `G.advance` แบบแบ่งก้อน เซฟ/ตรวจ/ย้ายเวอร์ชัน |
| `js/ui.js`, `js/ui2.js` | หน้าจอ: ฟังก์ชัน `G.UI.V.<tab>` และ `G.UI.M.<modal>` คืนสตริง HTML, ตัวจัดการ `G.UI.A.<action>` ผูกด้วย `data-a` (event delegation) |
| `tests/` | `harness.js` โหลดเกมใน Node, `suite.js`, `ui_test.js`, `longrun.js`, `smoke.js`, `diag.js` |

## ลำดับการจำลองรายวัน (`G.stepDay`)
สภาพแวดล้อม → teachMap → ผลผลิต → ก่อสร้าง → ปรุง/หลอม → บริโภค → บำเพ็ญ (รวมทะลวงอัตโนมัติ) → คณะสำรวจ → ศรัทธา → สุขภาพ → สังคม → โลก → ภัยคุกคาม → เหตุสุ่ม → รายเดือน (ทุก 30 วัน) → จัดงานอัตโนมัติ (ทุก 5 วัน) → เส้นตายเรื่องรอตัดสินใจ → เฉลี่ยกระแสทรัพยากร
ทุกสิ่งสุ่มต้องใช้ `G.R/ri/pick/ch/rn` เท่านั้น (ห้าม `Math.random`) เพื่อให้ผลซ้ำได้ และห้ามให้ผลขึ้นกับเวลาจริงหรือขนาด chunk

## โครงสร้างเซฟ (schema 1)
ซองนอก: `{game:'sect', ver, schema, sum, S}` โดย `sum` เป็น checksum (djb2) ของ `JSON.stringify(S)`
`S` ฟิลด์หลัก: `v, schema, seed, rng, day, nextId, names, chars{id→ตัวละคร}, order[id], dead{}, deadOrder[], sect{name,rep,leader,gen,policies}, res{}, fac{อาคาร→ระดับ}, buildQ[], craft{}, craftWork{}, known{}, access{}, lore{}, discovered{}, villages[], factions[], exps[], applicants[], log[], pending[], offers[], battles[], market{}, weather, harvest, beastP, pauseCfg, alerts, flowDay, flowAvg, reserved, stats, hist[], tutorial, succ, over, giftLog`
ตัวละคร: `id,name,g,born,joined,rank,apt{qi,body,faith},elem,at{},traits[],path,manual,realm,prog,found,life,hp,inj[],fat,mind,sat,loy,job,jobFix,state(home|exp|dead),exp,master,rel{},bio[],goal,faith,vow,patron,stress,tox,pillCd,sk{},fair,reward,mode(auto|hold),...`
- ใช้ id เป็นสตริงอ้างอิงเท่านั้น (ไม่เก็บออบเจ็กต์ซ้อนอ้างกัน) จึงเซฟ/โหลดได้ตรงและตรวจอ้างอิงเสียได้

### การตรวจและย้ายเวอร์ชัน (`G.validate`)
1. parse JSON, ตรวจ `game`, checksum, `schema` (ใหม่กว่าเกม = ปฏิเสธ)
2. วน `G.MIGRATE[schema](S)` จนถึง `G.SCHEMA` (ตอนนี้ว่าง เพราะเป็น schema 1)
3. เติมค่าเริ่มต้นที่ขาด ซ่อมการอ้างอิง (เส้นทาง/คัมภีร์/งานที่ไม่มี อาจารย์ที่ตายแล้ว คณะสำรวจที่สมาชิกหาย) และรายงานจำนวนที่ซ่อมใน `fixed`
**เมื่อเปลี่ยนโครงสร้างเซฟ:** เพิ่ม `G.SCHEMA` และเขียน `G.MIGRATE[เลขเก่า] = S => { ...; S.schema = เลขใหม่; return S; }`

## ส่วนขยายเนื้อหา (แก้ที่ `data.js`)
- **คัมภีร์:** เพิ่มใน `G.MANUALS` (`p` สาย, `sp` ความเร็ว, `bt` โบนัสทะลวง, `cost`, `rank` ยศที่เข้าถึง, `tech[]`, ตั้ง `start:1` ถ้ารู้ตั้งแต่เริ่ม, `lore:1` ถ้าต้องค้นพบ)
- **ขั้นบำเพ็ญ:** เพิ่มใน `G.PATHS[p].realms` (`n, need, life, d`) ค่า `btInfo` จะคำนวณเงื่อนไขให้ ถ้าต้องการเงื่อนไขพิเศษให้แก้ `G.btInfo` ใน `sim.js`
- **อาคาร / สูตร / สถานที่ / หมู่บ้าน / ฝ่าย:** `G.FAC`, `G.CRAFT`, `G.LOCS`, `G.VILLAGES`, `G.FACTIONS` (การเพิ่มฝ่ายหรือหมู่บ้านใหม่หลังเกมเริ่ม ให้เขียน migration ที่ push เข้า `S.factions/S.villages`; ฝ่ายโจรอ้างด้วย index `S.factions[5]`)
- **งานใหม่:** เพิ่มใน `G.JOBS` และเพิ่มผลผลิตในตาราง `PR` ของ `production` ใน `sim.js` และพิจารณา `G.autoAssign`
- **เหตุการณ์สุ่ม:** ดูส่วน random events ใน `sim.js` ใช้ `G.log(prio, cat, text, {ids, why, det, key, pause})` เพื่อให้มีเหตุผลในรายงาน
- **เรื่องรอตัดสินใจ:** `G.pend({type,cat,title,text,due,def,opts:[{t,a,arg}]})` และเพิ่มคำสั่งใน `G.runAct`

## ข้อควรระวัง
- โค้ดการจำลองต้องไม่แตะ DOM ทดสอบได้ใน Node ผ่าน `tests/harness.js`
- `G.advance` หยุดเมื่อมี `S.alerts` หรือ `S.pending` ผู้เรียกต้องจัดการต่อ
- log ถูกตัดที่ `G.CFG.logMax` (400) และบันทึกคนตายที่ `deadMax` (120) เพื่อคุมขนาดเซฟ (ราว 40–170 KB ในการทดสอบ)
