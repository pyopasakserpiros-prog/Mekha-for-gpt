/* Content imported from SanMakra 1.1.3; engine remains Sonnet G. */
window.G.PATCH={
 "manuals": {
  "mist": {
   "name": "คัมภีร์เมฆสงบ",
   "path": "qi",
   "affinity": "water",
   "speed": 1,
   "cost": 0.65,
   "risk": -0.08,
   "role": "heal",
   "desc": "หมุนเวียนปราณประหยัด มั่นคง รักษาบาดเจ็บได้ดี",
   "start": true
  },
  "flame": {
   "name": "คัมภีร์อาทิตย์เก้าดวง",
   "path": "qi",
   "affinity": "fire",
   "speed": 1.55,
   "cost": 1.6,
   "risk": 0.12,
   "role": "burst",
   "desc": "ก้าวหน้าเร็วและโจมตีรุนแรง แต่กินหินปราณและเสี่ยงธาตุไฟ",
   "start": true
  },
  "jade": {
   "name": "คัมภีร์รากพฤกษาหยก",
   "path": "qi",
   "affinity": "wood",
   "speed": 0.85,
   "cost": 0.8,
   "risk": -0.1,
   "role": "grow",
   "desc": "ฐานรากแข็งแรง ส่งเสริมสมุนไพรและอายุขัย",
   "start": false
  },
  "thunder": {
   "name": "คัมภีร์กระบี่อสนี",
   "path": "qi",
   "affinity": "metal",
   "speed": 1.2,
   "cost": 1.3,
   "risk": 0.05,
   "role": "pierce",
   "desc": "ทะลวงเกราะด้วยกระบี่จิต ต้องใช้แร่ในการทะลวง",
   "start": false
  },
  "mountain": {
   "name": "กายาภูผาค้ำฟ้า",
   "path": "body",
   "affinity": "earth",
   "speed": 1,
   "cost": 1,
   "risk": -0.05,
   "role": "guard",
   "desc": "กระดูกหนาแน่น รับการโจมตีแทนสหาย ใช้แร่เสริมกาย",
   "start": true
  },
  "asura": {
   "name": "กายาอสุราโลหิต",
   "path": "body",
   "affinity": "fire",
   "speed": 1.4,
   "cost": 1.5,
   "risk": 0.1,
   "role": "burst",
   "desc": "โจมตีหนัก ฝึกเครียดกว่าวิชาอื่น ต้องพักฟื้นให้พอ",
   "start": true
  },
  "river": {
   "name": "กายาธารานิรันดร์",
   "path": "body",
   "affinity": "water",
   "speed": 0.95,
   "cost": 0.8,
   "risk": -0.08,
   "role": "heal",
   "desc": "ฟื้นฟูรวดเร็ว เหมาะกับผู้รักษาและการเดินทางไกล",
   "start": false
  },
  "beast": {
   "name": "กายามังกรบรรพกาล",
   "path": "body",
   "affinity": "wood",
   "speed": 1.25,
   "cost": 1.2,
   "risk": 0.04,
   "role": "hunt",
   "desc": "ปรับตัวจากการล่า เหมาะกับป่าและอสูร",
   "start": false
  },
  "shelter": {
   "name": "ปณิธานร่มโพธิ์",
   "path": "faith",
   "affinity": "earth",
   "speed": 1,
   "cost": 1,
   "risk": -0.05,
   "role": "guard",
   "domain": "safety",
   "desc": "รับศรัทธาจากความปลอดภัย คุ้มครองหมู่บ้านและสหาย",
   "start": true
  },
  "mercy": {
   "name": "ปณิธานธาราเมตตา",
   "path": "faith",
   "affinity": "water",
   "speed": 1,
   "cost": 0.9,
   "risk": -0.04,
   "role": "heal",
   "domain": "health",
   "desc": "รับศรัทธาจากการรักษา ใช้สมุนไพรช่วยชุมชน",
   "start": true
  },
  "harvest": {
   "name": "ปณิธานรวงทอง",
   "path": "faith",
   "affinity": "wood",
   "speed": 1.1,
   "cost": 1,
   "risk": 0,
   "role": "grow",
   "domain": "food",
   "desc": "ผูกคำมั่นเรื่องปากท้อง สร้างศรัทธาด้วยอาหาร",
   "start": false
  },
  "ancestor": {
   "name": "ปณิธานบรรพชน",
   "path": "faith",
   "affinity": "metal",
   "speed": 0.9,
   "cost": 0.75,
   "risk": -0.1,
   "role": "control",
   "domain": "harmony",
   "desc": "สร้างความสมัครสมาน ศรัทธามั่นคงแต่เติบโตช้า",
   "start": false
  }
 },
 "items": {
  "iron_sword": {
   "id": "iron_sword",
   "name": "กระบี่เหล็กประสานใจ",
   "type": "weapon",
   "icon": "sword",
   "stats": {
    "atk": 0.2
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 3
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "subtype": "sword",
   "desc": "กระบี่พื้นฐาน สมดุลและใช้ได้ทุกมรรคา",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "moon_sword": {
   "id": "moon_sword",
   "name": "กระบี่น้ำค้างจันทร์",
   "type": "weapon",
   "icon": "sword",
   "stats": {
    "atk": 0.17,
    "mana": 0.1
   },
   "cost": {
    "ore": 16,
    "stone": 9,
    "coin": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [
    "qi"
   ],
   "subtype": "sword",
   "desc": "ประคองพลังวิชา เหมาะกับกระบี่ลมปราณ",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "sun_saber": {
   "id": "sun_saber",
   "name": "ดาบตะวันสังหาร",
   "type": "weapon",
   "icon": "saber",
   "stats": {
    "atk": 0.27
   },
   "cost": {
    "ore": 18,
    "wood": 7,
    "coin": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "subtype": "saber",
   "desc": "เน้นพลังปะทะ เหมาะกับกระบวนท่าบุก",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "jade_fan": {
   "id": "jade_fan",
   "name": "พัดเมตตาหยก",
   "type": "weapon",
   "icon": "fan",
   "stats": {
    "atk": 0.12,
    "heal": 0.3
   },
   "cost": {
    "wood": 15,
    "herb": 10,
    "stone": 5
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [
    "qi",
    "faith"
   ],
   "subtype": "fan",
   "desc": "ช่วยผู้รักษาประคองชีพสหาย",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "dragon_spear": {
   "id": "dragon_spear",
   "name": "ทวนเกล็ดอสูร",
   "type": "weapon",
   "icon": "spear",
   "stats": {
    "atk": 0.21,
    "armor": 0.1
   },
   "cost": {
    "ore": 20,
    "wood": 12,
    "beast": 1
   },
   "work": 18,
   "price": 35,
   "minRealm": 1,
   "paths": [],
   "subtype": "spear",
   "desc": "โจมตีและรับแรงปะทะ",
   "grade": 2,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "cloud_bow": {
   "id": "cloud_bow",
   "name": "ธนูเมฆาตามรอย",
   "type": "weapon",
   "icon": "bow",
   "stats": {
    "atk": 0.16,
    "loot": 0.15
   },
   "cost": {
    "wood": 20,
    "ore": 7,
    "beast": 1
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "subtype": "bow",
   "desc": "เหมาะกับการล่าและเก็บทรัพยากร",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "asura_fist": {
   "id": "asura_fist",
   "name": "สนับหมัดอสุรา",
   "type": "weapon",
   "icon": "fist",
   "stats": {
    "atk": 0.23,
    "hp": 0.08
   },
   "cost": {
    "ore": 18,
    "beast": 1,
    "herb": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [
    "body"
   ],
   "subtype": "fist",
   "desc": "หลอมรวมกับกำลังกาย",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "prayer_staff": {
   "id": "prayer_staff",
   "name": "คทาประทีปศรัทธา",
   "type": "weapon",
   "icon": "staff",
   "stats": {
    "atk": 0.12,
    "faith": 0.3
   },
   "cost": {
    "wood": 18,
    "stone": 12,
    "coin": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [
    "faith"
   ],
   "subtype": "staff",
   "desc": "ขยายขอบเขตการเก็บศรัทธา",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "iron_armor": {
   "id": "iron_armor",
   "name": "เกราะเหล็กพิทักษ์",
   "type": "armor",
   "icon": "armor",
   "stats": {
    "armor": 0.4,
    "hp": 0.1
   },
   "cost": {
    "ore": 22,
    "wood": 8,
    "coin": 6
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "desc": "ทนทาน เหมาะกับแนวหน้า",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "mist_robe": {
   "id": "mist_robe",
   "name": "อาภรณ์เมฆสงบ",
   "type": "armor",
   "icon": "robe",
   "stats": {
    "armor": 0.2,
    "mana": 0.18
   },
   "cost": {
    "herb": 15,
    "wood": 12,
    "stone": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "desc": "รักษาความคล่องตัวและพลังวิชา",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "dragon_vest": {
   "id": "dragon_vest",
   "name": "เสื้อเกล็ดอสูร",
   "type": "armor",
   "icon": "armor",
   "stats": {
    "hp": 0.25,
    "armor": 0.22
   },
   "cost": {
    "beast": 2,
    "ore": 12,
    "herb": 10
   },
   "work": 18,
   "price": 35,
   "minRealm": 1,
   "paths": [
    "body"
   ],
   "desc": "เสริมความอึดของกายา",
   "grade": 2,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "learning_jade": {
   "id": "learning_jade",
   "name": "หยกหยั่งรู้",
   "type": "charm",
   "icon": "charm",
   "stats": {
    "train": 0.15
   },
   "cost": {
    "stone": 16,
    "ore": 8,
    "coin": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "desc": "ช่วยการฝึกทุกมรรคาเมื่อมีทรัพยากรเพียงพอ",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "healing_bell": {
   "id": "healing_bell",
   "name": "กระดิ่งประสานชีพ",
   "type": "charm",
   "icon": "bell",
   "stats": {
    "heal": 0.25,
    "hp": 0.1
   },
   "cost": {
    "ore": 14,
    "herb": 14,
    "stone": 8
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "desc": "เสริมการรักษาในสนามรบ",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "craft_seal": {
   "id": "craft_seal",
   "name": "ตราช่างหมื่นกล",
   "type": "charm",
   "icon": "seal",
   "stats": {
    "craft": 0.25,
    "work": 0.1
   },
   "cost": {
    "ore": 15,
    "wood": 10,
    "stone": 12
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "desc": "ส่งเสริมงานผลิตและแรงงาน",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "faith_seal": {
   "id": "faith_seal",
   "name": "ตราศาลอรุณ",
   "type": "charm",
   "icon": "seal",
   "stats": {
    "faith": 0.35,
    "mana": 0.1
   },
   "cost": {
    "stone": 18,
    "wood": 10,
    "coin": 12
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [
    "faith"
   ],
   "desc": "เก็บศรัทธาได้มากขึ้น ไม่สร้างศรัทธาจากอากาศ",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "spirit_deer": {
   "id": "spirit_deer",
   "name": "กวางเมฆา",
   "type": "mount",
   "icon": "deer",
   "stats": {
    "travel": 0.5
   },
   "cost": {
    "food": 45,
    "herb": 15,
    "beast": 1
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "desc": "สัตว์วิเศษเดินทางรวดเร็ว ต้องเลี้ยงด้วยเสบียง",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "crane": {
   "id": "crane",
   "name": "กระเรียนขาว",
   "type": "mount",
   "icon": "bird",
   "stats": {
    "travel": 0.8
   },
   "cost": {
    "food": 55,
    "herb": 20,
    "beast": 2
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "seats": 1,
   "upkeep": {
    "food": 0.35
   },
   "desc": "บินข้ามภูผา ไม่มีโบนัสผลสำรวจโดยตรง",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "tortoise": {
   "id": "tortoise",
   "name": "เต่าภูผา",
   "type": "mount",
   "icon": "turtle",
   "stats": {
    "travel": 0.3
   },
   "cost": {
    "food": 70,
    "herb": 25,
    "beast": 3
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "seats": 3,
   "upkeep": {
    "food": 0.6
   },
   "desc": "พาหนะหมู่ รับผู้ขี่และผู้โดยสารรวมสามคน",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "flying_sword": {
   "id": "flying_sword",
   "name": "กระบี่ท่องนภา",
   "type": "mount",
   "icon": "flying",
   "stats": {
    "travel": 1
   },
   "cost": {
    "ore": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "seats": 1,
   "upkeep": {
    "stone": 0.25
   },
   "desc": "กระบี่สำหรับเดินทาง แยกช่องจากอาวุธต่อสู้",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "flying_fan": {
   "id": "flying_fan",
   "name": "พัดข้ามวายุ",
   "type": "mount",
   "icon": "fan",
   "stats": {
    "travel": 0.6
   },
   "cost": {
    "wood": 25,
    "stone": 35,
    "coin": 20
   },
   "work": 18,
   "price": 35,
   "minRealm": 0,
   "paths": [],
   "seats": 2,
   "upkeep": {
    "stone": 0.4
   },
   "desc": "อาวุธบินรองรับสองคน",
   "grade": 1,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "root_pill": {
   "id": "root_pill",
   "name": "โอสถประสานราก",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้",
   "yield": 3,
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "rest_pill": {
   "id": "rest_pill",
   "name": "โอสถคืนแรง",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "qi_pill": {
   "id": "qi_pill",
   "name": "โอสถดูดซับปราณ",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [
    "qi"
   ],
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "body_pill": {
   "id": "body_pill",
   "name": "โอสถหลอมโลหิต",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [
    "body"
   ],
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "divine_pill": {
   "id": "divine_pill",
   "name": "โอสถจิตเทวะ",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [
    "faith"
   ],
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "break_pill": {
   "id": "break_pill",
   "name": "โอสถเปิดประตูมรรคา",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "power_pill": {
   "id": "power_pill",
   "name": "โอสถพลังอสุรา",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "guard_pill": {
   "id": "guard_pill",
   "name": "โอสถกายาเหล็ก",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "mana_pill": {
   "id": "mana_pill",
   "name": "โอสถคืนพลังวิชา",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "life_pill": {
   "id": "life_pill",
   "name": "โอสถขยายชีพจร",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50%",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "ocean_pill": {
   "id": "ocean_pill",
   "name": "โอสถมหาสมุทรจิต",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50%",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "clarity_pill": {
   "id": "clarity_pill",
   "name": "โอสถกระจ่างใจ",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "foundation_pill": {
   "id": "foundation_pill",
   "name": "โอสถบ่มฐานหยก",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "detox_pill": {
   "id": "detox_pill",
   "name": "โอสถชำระพิษ",
   "type": "pill",
   "icon": "pill",
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 18,
   "minRealm": 0,
   "paths": [],
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม",
   "grade": 0,
   "theme": "common",
   "craftable": true,
   "shop": true,
   "sourceText": "สูตรพื้นฐานและพ่อค้า"
  },
  "mat_bamboo_0": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 8,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_bamboo_0",
   "name": "แก่นไผ่ไผ่สงบ",
   "type": "material",
   "icon": "material",
   "grade": 0,
   "theme": "bamboo",
   "desc": "วัตถุดิบประจำไผ่หมอก ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "wood": 2
   },
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก"
  },
  "bamboo_sword_0": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_sword_0",
   "name": "กระบี่ไผ่สงบ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "กระบี่แห่งไผ่หมอก • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_saber_0": {
   "stats": {
    "atk": 0.26,
    "work": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_saber_0",
   "name": "ดาบไผ่สงบ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ดาบแห่งไผ่หมอก • โจมตีหนัก • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_spear_0": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "work": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_spear_0",
   "name": "ทวนไผ่สงบ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ทวนแห่งไผ่หมอก • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_bow_0": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "work": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_bow_0",
   "name": "ธนูไผ่สงบ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ธนูแห่งไผ่หมอก • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fan_0": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_fan_0",
   "name": "พัดไผ่สงบ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "พัดแห่งไผ่หมอก • สนับสนุนผู้รักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fist_0": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_fist_0",
   "name": "สนับหมัดไผ่สงบ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "สนับหมัดแห่งไผ่หมอก • เสริมกำลังกาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_staff_0": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_staff_0",
   "name": "คทาไผ่สงบ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "คทาแห่งไผ่หมอก • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_dagger_0": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_dagger_0",
   "name": "มีดสั้นไผ่สงบ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "มีดสั้นแห่งไผ่หมอก • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_armor_0": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "work": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_armor_0",
   "name": "เกราะไผ่สงบ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "เกราะแห่งไผ่หมอก • ทนแรงปะทะ • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_robe_0": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "work": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_robe_0",
   "name": "อาภรณ์ไผ่สงบ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "อาภรณ์แห่งไผ่หมอก • สำรองพลังวิชา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_ring_0": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_ring_0",
   "name": "แหวนไผ่สงบ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "แหวนแห่งไผ่หมอก • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_charm_0": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "work": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_charm_0",
   "name": "จี้หยกไผ่สงบ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "จี้หยกแห่งไผ่หมอก • เสริมชีพและการรักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_seal_0": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "work": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_seal_0",
   "name": "ตราประทีปไผ่สงบ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ตราประทีปแห่งไผ่หมอก • ขยายความจุศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_boots_0": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.18
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_boots_0",
   "name": "รองเท้าไผ่สงบ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "รองเท้าแห่งไผ่หมอก • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_tool_0": {
   "stats": {
    "craft": 0.22,
    "work": 0.2
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_tool_0",
   "name": "ชุดเครื่องมือไผ่สงบ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 0,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งไผ่หมอก • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "mat_bamboo_1": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 12,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_bamboo_1",
   "name": "แก่นไผ่ใบไผ่วายุ",
   "type": "material",
   "icon": "material",
   "grade": 1,
   "theme": "bamboo",
   "desc": "วัตถุดิบประจำไผ่หมอก ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "wood": 3
   },
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก"
  },
  "bamboo_sword_1": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_sword_1",
   "name": "กระบี่ใบไผ่วายุ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "กระบี่แห่งไผ่หมอก • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_saber_1": {
   "stats": {
    "atk": 0.26,
    "work": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_saber_1",
   "name": "ดาบใบไผ่วายุ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ดาบแห่งไผ่หมอก • โจมตีหนัก • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_spear_1": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "work": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_spear_1",
   "name": "ทวนใบไผ่วายุ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ทวนแห่งไผ่หมอก • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_bow_1": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "work": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_bow_1",
   "name": "ธนูใบไผ่วายุ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ธนูแห่งไผ่หมอก • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fan_1": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_fan_1",
   "name": "พัดใบไผ่วายุ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "พัดแห่งไผ่หมอก • สนับสนุนผู้รักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fist_1": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_fist_1",
   "name": "สนับหมัดใบไผ่วายุ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "สนับหมัดแห่งไผ่หมอก • เสริมกำลังกาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_staff_1": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_staff_1",
   "name": "คทาใบไผ่วายุ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "คทาแห่งไผ่หมอก • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_dagger_1": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_dagger_1",
   "name": "มีดสั้นใบไผ่วายุ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "มีดสั้นแห่งไผ่หมอก • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_armor_1": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "work": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_armor_1",
   "name": "เกราะใบไผ่วายุ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "เกราะแห่งไผ่หมอก • ทนแรงปะทะ • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_robe_1": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "work": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_robe_1",
   "name": "อาภรณ์ใบไผ่วายุ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "อาภรณ์แห่งไผ่หมอก • สำรองพลังวิชา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_ring_1": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_ring_1",
   "name": "แหวนใบไผ่วายุ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "แหวนแห่งไผ่หมอก • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_charm_1": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "work": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_charm_1",
   "name": "จี้หยกใบไผ่วายุ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "จี้หยกแห่งไผ่หมอก • เสริมชีพและการรักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_seal_1": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "work": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_seal_1",
   "name": "ตราประทีปใบไผ่วายุ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ตราประทีปแห่งไผ่หมอก • ขยายความจุศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_boots_1": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.18
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_boots_1",
   "name": "รองเท้าใบไผ่วายุ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "รองเท้าแห่งไผ่หมอก • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_tool_1": {
   "stats": {
    "craft": 0.22,
    "work": 0.2
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "bamboo_tool_1",
   "name": "ชุดเครื่องมือใบไผ่วายุ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 1,
   "theme": "bamboo",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งไผ่หมอก • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "mat_bamboo_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_bamboo_2",
   "name": "แก่นไผ่ไผ่หยกวิญญาณ",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "bamboo",
   "desc": "วัตถุดิบประจำไผ่หมอก ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "wood": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก"
  },
  "bamboo_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_sword_2",
   "name": "กระบี่ไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "กระบี่แห่งไผ่หมอก • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_saber_2": {
   "stats": {
    "atk": 0.26,
    "work": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_saber_2",
   "name": "ดาบไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "ดาบแห่งไผ่หมอก • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "work": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_spear_2",
   "name": "ทวนไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "ทวนแห่งไผ่หมอก • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "work": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_bow_2",
   "name": "ธนูไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "ธนูแห่งไผ่หมอก • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_fan_2",
   "name": "พัดไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "พัดแห่งไผ่หมอก • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_fist_2",
   "name": "สนับหมัดไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "สนับหมัดแห่งไผ่หมอก • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "work": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_staff_2",
   "name": "คทาไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "คทาแห่งไผ่หมอก • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_dagger_2",
   "name": "มีดสั้นไผ่หยกวิญญาณ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "มีดสั้นแห่งไผ่หมอก • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "work": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_armor_2",
   "name": "เกราะไผ่หยกวิญญาณ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "เกราะแห่งไผ่หมอก • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "work": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_robe_2",
   "name": "อาภรณ์ไผ่หยกวิญญาณ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "อาภรณ์แห่งไผ่หมอก • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "work": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_ring_2",
   "name": "แหวนไผ่หยกวิญญาณ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "แหวนแห่งไผ่หมอก • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "work": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_charm_2",
   "name": "จี้หยกไผ่หยกวิญญาณ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "จี้หยกแห่งไผ่หมอก • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "work": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_seal_2",
   "name": "ตราประทีปไผ่หยกวิญญาณ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "ตราประทีปแห่งไผ่หมอก • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.18
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_boots_2",
   "name": "รองเท้าไผ่หยกวิญญาณ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "รองเท้าแห่งไผ่หมอก • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "bamboo_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.2
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "bamboo_tool_2",
   "name": "ชุดเครื่องมือไผ่หยกวิญญาณ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "bamboo",
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งไผ่หมอก • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมไผ่หมอก หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_0": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 8,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_moon_0",
   "name": "ผลึกแสงจันทร์",
   "type": "material",
   "icon": "material",
   "grade": 0,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 2
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_0": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_sword_0",
   "name": "กระบี่แสงจันทร์",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_0": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_saber_0",
   "name": "ดาบแสงจันทร์",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_0": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_spear_0",
   "name": "ทวนแสงจันทร์",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_0": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_bow_0",
   "name": "ธนูแสงจันทร์",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_0": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_fan_0",
   "name": "พัดแสงจันทร์",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_0": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_fist_0",
   "name": "สนับหมัดแสงจันทร์",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_0": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_staff_0",
   "name": "คทาแสงจันทร์",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_0": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_dagger_0",
   "name": "มีดสั้นแสงจันทร์",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_0": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_armor_0",
   "name": "เกราะแสงจันทร์",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_0": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_robe_0",
   "name": "อาภรณ์แสงจันทร์",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_0": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_ring_0",
   "name": "แหวนแสงจันทร์",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_0": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_charm_0",
   "name": "จี้หยกแสงจันทร์",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_0": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_seal_0",
   "name": "ตราประทีปแสงจันทร์",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_0": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_boots_0",
   "name": "รองเท้าแสงจันทร์",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_0": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_tool_0",
   "name": "ชุดเครื่องมือแสงจันทร์",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 0,
   "theme": "moon",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_1": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 12,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_moon_1",
   "name": "ผลึกเงาจันทร์",
   "type": "material",
   "icon": "material",
   "grade": 1,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 3
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_1": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_sword_1",
   "name": "กระบี่เงาจันทร์",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_1": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_saber_1",
   "name": "ดาบเงาจันทร์",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_1": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_spear_1",
   "name": "ทวนเงาจันทร์",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_1": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_bow_1",
   "name": "ธนูเงาจันทร์",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_1": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_fan_1",
   "name": "พัดเงาจันทร์",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_1": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_fist_1",
   "name": "สนับหมัดเงาจันทร์",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_1": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_staff_1",
   "name": "คทาเงาจันทร์",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_1": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_dagger_1",
   "name": "มีดสั้นเงาจันทร์",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_1": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_armor_1",
   "name": "เกราะเงาจันทร์",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_1": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_robe_1",
   "name": "อาภรณ์เงาจันทร์",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_1": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_ring_1",
   "name": "แหวนเงาจันทร์",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_1": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_charm_1",
   "name": "จี้หยกเงาจันทร์",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_1": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_seal_1",
   "name": "ตราประทีปเงาจันทร์",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_1": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_boots_1",
   "name": "รองเท้าเงาจันทร์",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_1": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "moon_tool_1",
   "name": "ชุดเครื่องมือเงาจันทร์",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 1,
   "theme": "moon",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_moon_2",
   "name": "ผลึกจันทร์เย็น",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_sword_2",
   "name": "กระบี่จันทร์เย็น",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_2": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_saber_2",
   "name": "ดาบจันทร์เย็น",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_spear_2",
   "name": "ทวนจันทร์เย็น",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_bow_2",
   "name": "ธนูจันทร์เย็น",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_fan_2",
   "name": "พัดจันทร์เย็น",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_fist_2",
   "name": "สนับหมัดจันทร์เย็น",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_staff_2",
   "name": "คทาจันทร์เย็น",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_dagger_2",
   "name": "มีดสั้นจันทร์เย็น",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_armor_2",
   "name": "เกราะจันทร์เย็น",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_robe_2",
   "name": "อาภรณ์จันทร์เย็น",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_2": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_ring_2",
   "name": "แหวนจันทร์เย็น",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_charm_2",
   "name": "จี้หยกจันทร์เย็น",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_seal_2",
   "name": "ตราประทีปจันทร์เย็น",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_boots_2",
   "name": "รองเท้าจันทร์เย็น",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "moon_tool_2",
   "name": "ชุดเครื่องมือจันทร์เย็น",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "moon",
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_moon_3",
   "name": "ผลึกเหมันต์จันทรา",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_sword_3",
   "name": "กระบี่เหมันต์จันทรา",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_3": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_saber_3",
   "name": "ดาบเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_spear_3",
   "name": "ทวนเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_bow_3",
   "name": "ธนูเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_fan_3",
   "name": "พัดเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_fist_3",
   "name": "สนับหมัดเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_staff_3",
   "name": "คทาเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_dagger_3",
   "name": "มีดสั้นเหมันต์จันทรา",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_armor_3",
   "name": "เกราะเหมันต์จันทรา",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_robe_3",
   "name": "อาภรณ์เหมันต์จันทรา",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_3": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_ring_3",
   "name": "แหวนเหมันต์จันทรา",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_charm_3",
   "name": "จี้หยกเหมันต์จันทรา",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_seal_3",
   "name": "ตราประทีปเหมันต์จันทรา",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_boots_3",
   "name": "รองเท้าเหมันต์จันทรา",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "moon_tool_3",
   "name": "ชุดเครื่องมือเหมันต์จันทรา",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "moon",
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_moon_4",
   "name": "ผลึกจันทราดับดารา",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_sword_4",
   "name": "กระบี่จันทราดับดารา",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_4": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_saber_4",
   "name": "ดาบจันทราดับดารา",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_spear_4",
   "name": "ทวนจันทราดับดารา",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_bow_4",
   "name": "ธนูจันทราดับดารา",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_fan_4",
   "name": "พัดจันทราดับดารา",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_fist_4",
   "name": "สนับหมัดจันทราดับดารา",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_staff_4",
   "name": "คทาจันทราดับดารา",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_dagger_4",
   "name": "มีดสั้นจันทราดับดารา",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_armor_4",
   "name": "เกราะจันทราดับดารา",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_robe_4",
   "name": "อาภรณ์จันทราดับดารา",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_4": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_ring_4",
   "name": "แหวนจันทราดับดารา",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_4": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_charm_4",
   "name": "จี้หยกจันทราดับดารา",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_4": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_seal_4",
   "name": "ตราประทีปจันทราดับดารา",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_boots_4",
   "name": "รองเท้าจันทราดับดารา",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "moon_tool_4",
   "name": "ชุดเครื่องมือจันทราดับดารา",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "moon",
   "ingredients": {
    "mat_moon_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_moon_5": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 28,
   "paths": [],
   "craftable": false,
   "minRealm": 4,
   "shop": false,
   "id": "mat_moon_5",
   "name": "ผลึกจันทราเทวะ",
   "type": "material",
   "icon": "material",
   "grade": 5,
   "theme": "moon",
   "desc": "วัตถุดิบประจำจันทรา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 7
   },
   "sourceText": "สำรวจพื้นที่ธีมจันทรา"
  },
  "moon_sword_5": {
   "stats": {
    "atk": 0.19,
    "mana": 0.1
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_sword_5",
   "name": "กระบี่จันทราเทวะ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "กระบี่แห่งจันทรา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_saber_5": {
   "stats": {
    "atk": 0.26,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_saber_5",
   "name": "ดาบจันทราเทวะ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "ดาบแห่งจันทรา • โจมตีหนัก • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_spear_5": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "mana": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_spear_5",
   "name": "ทวนจันทราเทวะ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "ทวนแห่งจันทรา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_bow_5": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "mana": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_bow_5",
   "name": "ธนูจันทราเทวะ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "ธนูแห่งจันทรา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fan_5": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_fan_5",
   "name": "พัดจันทราเทวะ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "พัดแห่งจันทรา • สนับสนุนผู้รักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_fist_5": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "mana": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_fist_5",
   "name": "สนับหมัดจันทราเทวะ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "สนับหมัดแห่งจันทรา • เสริมกำลังกาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_staff_5": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "mana": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_staff_5",
   "name": "คทาจันทราเทวะ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "คทาแห่งจันทรา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_dagger_5": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "mana": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_dagger_5",
   "name": "มีดสั้นจันทราเทวะ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "มีดสั้นแห่งจันทรา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_armor_5": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "mana": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_armor_5",
   "name": "เกราะจันทราเทวะ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "เกราะแห่งจันทรา • ทนแรงปะทะ • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_robe_5": {
   "stats": {
    "armor": 0.18,
    "mana": 0.26
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_robe_5",
   "name": "อาภรณ์จันทราเทวะ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "อาภรณ์แห่งจันทรา • สำรองพลังวิชา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_ring_5": {
   "stats": {
    "mana": 0.22,
    "train": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_ring_5",
   "name": "แหวนจันทราเทวะ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "แหวนแห่งจันทรา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_charm_5": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "mana": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_charm_5",
   "name": "จี้หยกจันทราเทวะ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "จี้หยกแห่งจันทรา • เสริมชีพและการรักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_seal_5": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "mana": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_seal_5",
   "name": "ตราประทีปจันทราเทวะ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "ตราประทีปแห่งจันทรา • ขยายความจุศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_boots_5": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "mana": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_boots_5",
   "name": "รองเท้าจันทราเทวะ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "รองเท้าแห่งจันทรา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "moon_tool_5": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "mana": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "moon_tool_5",
   "name": "ชุดเครื่องมือจันทราเทวะ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 5,
   "theme": "moon",
   "ingredients": {
    "mat_moon_5": 3
   },
   "desc": "ชุดเครื่องมือแห่งจันทรา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมจันทรา หรือค้นสูตรแล้วผลิต"
  },
  "mat_mountain_0": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 8,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_mountain_0",
   "name": "แร่ศิลาดำ",
   "type": "material",
   "icon": "material",
   "grade": 0,
   "theme": "mountain",
   "desc": "วัตถุดิบประจำภูผา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "ore": 2
   },
   "sourceText": "สำรวจพื้นที่ธีมภูผา"
  },
  "mountain_sword_0": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_sword_0",
   "name": "กระบี่ศิลาดำ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "กระบี่แห่งภูผา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_saber_0": {
   "stats": {
    "atk": 0.26,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_saber_0",
   "name": "ดาบศิลาดำ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ดาบแห่งภูผา • โจมตีหนัก • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_spear_0": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "armor": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_spear_0",
   "name": "ทวนศิลาดำ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ทวนแห่งภูผา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_bow_0": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "armor": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_bow_0",
   "name": "ธนูศิลาดำ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ธนูแห่งภูผา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fan_0": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_fan_0",
   "name": "พัดศิลาดำ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "พัดแห่งภูผา • สนับสนุนผู้รักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fist_0": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_fist_0",
   "name": "สนับหมัดศิลาดำ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "สนับหมัดแห่งภูผา • เสริมกำลังกาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_staff_0": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_staff_0",
   "name": "คทาศิลาดำ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "คทาแห่งภูผา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_dagger_0": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_dagger_0",
   "name": "มีดสั้นศิลาดำ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "มีดสั้นแห่งภูผา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_armor_0": {
   "stats": {
    "armor": 0.45,
    "hp": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_armor_0",
   "name": "เกราะศิลาดำ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "เกราะแห่งภูผา • ทนแรงปะทะ • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_robe_0": {
   "stats": {
    "armor": 0.25,
    "mana": 0.2
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_robe_0",
   "name": "อาภรณ์ศิลาดำ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "อาภรณ์แห่งภูผา • สำรองพลังวิชา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_ring_0": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_ring_0",
   "name": "แหวนศิลาดำ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "แหวนแห่งภูผา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_charm_0": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "armor": 0.07
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_charm_0",
   "name": "จี้หยกศิลาดำ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "จี้หยกแห่งภูผา • เสริมชีพและการรักษา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_seal_0": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "armor": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_seal_0",
   "name": "ตราประทีปศิลาดำ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ตราประทีปแห่งภูผา • ขยายความจุศรัทธา • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_boots_0": {
   "stats": {
    "armor": 0.13,
    "guard": 0.06,
    "work": 0.12
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_boots_0",
   "name": "รองเท้าศิลาดำ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "รองเท้าแห่งภูผา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_tool_0": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 18,
   "price": 35,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_tool_0",
   "name": "ชุดเครื่องมือศิลาดำ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 0,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งภูผา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ สามัญ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mat_mountain_1": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 12,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_mountain_1",
   "name": "แร่ผาหนัก",
   "type": "material",
   "icon": "material",
   "grade": 1,
   "theme": "mountain",
   "desc": "วัตถุดิบประจำภูผา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "ore": 3
   },
   "sourceText": "สำรวจพื้นที่ธีมภูผา"
  },
  "mountain_sword_1": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_sword_1",
   "name": "กระบี่ผาหนัก",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "กระบี่แห่งภูผา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_saber_1": {
   "stats": {
    "atk": 0.26,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_saber_1",
   "name": "ดาบผาหนัก",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ดาบแห่งภูผา • โจมตีหนัก • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_spear_1": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "armor": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_spear_1",
   "name": "ทวนผาหนัก",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ทวนแห่งภูผา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_bow_1": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "armor": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_bow_1",
   "name": "ธนูผาหนัก",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ธนูแห่งภูผา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fan_1": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_fan_1",
   "name": "พัดผาหนัก",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "พัดแห่งภูผา • สนับสนุนผู้รักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fist_1": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_fist_1",
   "name": "สนับหมัดผาหนัก",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "สนับหมัดแห่งภูผา • เสริมกำลังกาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_staff_1": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_staff_1",
   "name": "คทาผาหนัก",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "คทาแห่งภูผา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_dagger_1": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_dagger_1",
   "name": "มีดสั้นผาหนัก",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "มีดสั้นแห่งภูผา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_armor_1": {
   "stats": {
    "armor": 0.45,
    "hp": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_armor_1",
   "name": "เกราะผาหนัก",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "เกราะแห่งภูผา • ทนแรงปะทะ • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_robe_1": {
   "stats": {
    "armor": 0.25,
    "mana": 0.2
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_robe_1",
   "name": "อาภรณ์ผาหนัก",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "อาภรณ์แห่งภูผา • สำรองพลังวิชา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_ring_1": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_ring_1",
   "name": "แหวนผาหนัก",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "แหวนแห่งภูผา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_charm_1": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "armor": 0.07
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_charm_1",
   "name": "จี้หยกผาหนัก",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "จี้หยกแห่งภูผา • เสริมชีพและการรักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_seal_1": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "armor": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_seal_1",
   "name": "ตราประทีปผาหนัก",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ตราประทีปแห่งภูผา • ขยายความจุศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_boots_1": {
   "stats": {
    "armor": 0.13,
    "guard": 0.06,
    "work": 0.12
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_boots_1",
   "name": "รองเท้าผาหนัก",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "รองเท้าแห่งภูผา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_tool_1": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mountain_tool_1",
   "name": "ชุดเครื่องมือผาหนัก",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 1,
   "theme": "mountain",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งภูผา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mat_mountain_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_mountain_2",
   "name": "แร่ศิลาปราณ",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "mountain",
   "desc": "วัตถุดิบประจำภูผา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "ore": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมภูผา"
  },
  "mountain_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_sword_2",
   "name": "กระบี่ศิลาปราณ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "กระบี่แห่งภูผา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_saber_2": {
   "stats": {
    "atk": 0.26,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_saber_2",
   "name": "ดาบศิลาปราณ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "ดาบแห่งภูผา • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "armor": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_spear_2",
   "name": "ทวนศิลาปราณ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "ทวนแห่งภูผา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "armor": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_bow_2",
   "name": "ธนูศิลาปราณ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "ธนูแห่งภูผา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_fan_2",
   "name": "พัดศิลาปราณ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "พัดแห่งภูผา • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_fist_2",
   "name": "สนับหมัดศิลาปราณ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "สนับหมัดแห่งภูผา • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_staff_2",
   "name": "คทาศิลาปราณ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "คทาแห่งภูผา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_dagger_2",
   "name": "มีดสั้นศิลาปราณ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "มีดสั้นแห่งภูผา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_armor_2": {
   "stats": {
    "armor": 0.45,
    "hp": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_armor_2",
   "name": "เกราะศิลาปราณ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "เกราะแห่งภูผา • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_robe_2": {
   "stats": {
    "armor": 0.25,
    "mana": 0.2
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_robe_2",
   "name": "อาภรณ์ศิลาปราณ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "อาภรณ์แห่งภูผา • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_ring_2",
   "name": "แหวนศิลาปราณ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "แหวนแห่งภูผา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "armor": 0.07
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_charm_2",
   "name": "จี้หยกศิลาปราณ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "จี้หยกแห่งภูผา • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "armor": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_seal_2",
   "name": "ตราประทีปศิลาปราณ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "ตราประทีปแห่งภูผา • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_boots_2": {
   "stats": {
    "armor": 0.13,
    "guard": 0.06,
    "work": 0.12
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_boots_2",
   "name": "รองเท้าศิลาปราณ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "รองเท้าแห่งภูผา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mountain_tool_2",
   "name": "ชุดเครื่องมือศิลาปราณ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งภูผา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mat_mountain_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_mountain_3",
   "name": "แร่ภูผาวัชระ",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "mountain",
   "desc": "วัตถุดิบประจำภูผา ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "ore": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมภูผา"
  },
  "mountain_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_sword_3",
   "name": "กระบี่ภูผาวัชระ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "กระบี่แห่งภูผา • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_saber_3": {
   "stats": {
    "atk": 0.26,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_saber_3",
   "name": "ดาบภูผาวัชระ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "ดาบแห่งภูผา • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "armor": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_spear_3",
   "name": "ทวนภูผาวัชระ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "ทวนแห่งภูผา • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "armor": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_bow_3",
   "name": "ธนูภูผาวัชระ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "ธนูแห่งภูผา • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_fan_3",
   "name": "พัดภูผาวัชระ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "พัดแห่งภูผา • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_fist_3",
   "name": "สนับหมัดภูผาวัชระ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "สนับหมัดแห่งภูผา • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "armor": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_staff_3",
   "name": "คทาภูผาวัชระ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "คทาแห่งภูผา • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_dagger_3",
   "name": "มีดสั้นภูผาวัชระ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "มีดสั้นแห่งภูผา • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_armor_3": {
   "stats": {
    "armor": 0.45,
    "hp": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_armor_3",
   "name": "เกราะภูผาวัชระ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "เกราะแห่งภูผา • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_robe_3": {
   "stats": {
    "armor": 0.25,
    "mana": 0.2
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_robe_3",
   "name": "อาภรณ์ภูผาวัชระ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "อาภรณ์แห่งภูผา • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "armor": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_ring_3",
   "name": "แหวนภูผาวัชระ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "แหวนแห่งภูผา • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "armor": 0.07
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_charm_3",
   "name": "จี้หยกภูผาวัชระ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "จี้หยกแห่งภูผา • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "armor": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_seal_3",
   "name": "ตราประทีปภูผาวัชระ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "ตราประทีปแห่งภูผา • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_boots_3": {
   "stats": {
    "armor": 0.13,
    "guard": 0.06,
    "work": 0.12
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_boots_3",
   "name": "รองเท้าภูผาวัชระ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "รองเท้าแห่งภูผา • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mountain_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "armor": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mountain_tool_3",
   "name": "ชุดเครื่องมือภูผาวัชระ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "mountain",
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งภูผา • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมภูผา หรือค้นสูตรแล้วผลิต"
  },
  "mat_rain_1": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 12,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_rain_1",
   "name": "หยาดทิพย์หยาดฝน",
   "type": "material",
   "icon": "material",
   "grade": 1,
   "theme": "rain",
   "desc": "วัตถุดิบประจำธาราฝน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "herb": 3
   },
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน"
  },
  "rain_sword_1": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_sword_1",
   "name": "กระบี่หยาดฝน",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "กระบี่แห่งธาราฝน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_saber_1": {
   "stats": {
    "atk": 0.26,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_saber_1",
   "name": "ดาบหยาดฝน",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "ดาบแห่งธาราฝน • โจมตีหนัก • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_spear_1": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "heal": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_spear_1",
   "name": "ทวนหยาดฝน",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "ทวนแห่งธาราฝน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_bow_1": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "heal": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_bow_1",
   "name": "ธนูหยาดฝน",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "ธนูแห่งธาราฝน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fan_1": {
   "stats": {
    "atk": 0.1,
    "heal": 0.28
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_fan_1",
   "name": "พัดหยาดฝน",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "พัดแห่งธาราฝน • สนับสนุนผู้รักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fist_1": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_fist_1",
   "name": "สนับหมัดหยาดฝน",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "สนับหมัดแห่งธาราฝน • เสริมกำลังกาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_staff_1": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "heal": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_staff_1",
   "name": "คทาหยาดฝน",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "คทาแห่งธาราฝน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_dagger_1": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_dagger_1",
   "name": "มีดสั้นหยาดฝน",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "มีดสั้นแห่งธาราฝน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_armor_1": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "heal": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_armor_1",
   "name": "เกราะหยาดฝน",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "เกราะแห่งธาราฝน • ทนแรงปะทะ • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_robe_1": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "heal": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_robe_1",
   "name": "อาภรณ์หยาดฝน",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "อาภรณ์แห่งธาราฝน • สำรองพลังวิชา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_ring_1": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_ring_1",
   "name": "แหวนหยาดฝน",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "แหวนแห่งธาราฝน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_charm_1": {
   "stats": {
    "hp": 0.12,
    "heal": 0.18
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_charm_1",
   "name": "จี้หยกหยาดฝน",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "จี้หยกแห่งธาราฝน • เสริมชีพและการรักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_seal_1": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "heal": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_seal_1",
   "name": "ตราประทีปหยาดฝน",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "ตราประทีปแห่งธาราฝน • ขยายความจุศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_boots_1": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "heal": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_boots_1",
   "name": "รองเท้าหยาดฝน",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "รองเท้าแห่งธาราฝน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_tool_1": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "rain_tool_1",
   "name": "ชุดเครื่องมือหยาดฝน",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 1,
   "theme": "rain",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งธาราฝน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "mat_rain_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_rain_2",
   "name": "หยาดทิพย์ธาราหยก",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "rain",
   "desc": "วัตถุดิบประจำธาราฝน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "herb": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน"
  },
  "rain_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_sword_2",
   "name": "กระบี่ธาราหยก",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "กระบี่แห่งธาราฝน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_saber_2": {
   "stats": {
    "atk": 0.26,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_saber_2",
   "name": "ดาบธาราหยก",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "ดาบแห่งธาราฝน • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "heal": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_spear_2",
   "name": "ทวนธาราหยก",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "ทวนแห่งธาราฝน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "heal": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_bow_2",
   "name": "ธนูธาราหยก",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "ธนูแห่งธาราฝน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.28
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_fan_2",
   "name": "พัดธาราหยก",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "พัดแห่งธาราฝน • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_fist_2",
   "name": "สนับหมัดธาราหยก",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "สนับหมัดแห่งธาราฝน • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "heal": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_staff_2",
   "name": "คทาธาราหยก",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "คทาแห่งธาราฝน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_dagger_2",
   "name": "มีดสั้นธาราหยก",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "มีดสั้นแห่งธาราฝน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "heal": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_armor_2",
   "name": "เกราะธาราหยก",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "เกราะแห่งธาราฝน • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "heal": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_robe_2",
   "name": "อาภรณ์ธาราหยก",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "อาภรณ์แห่งธาราฝน • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_ring_2",
   "name": "แหวนธาราหยก",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "แหวนแห่งธาราฝน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.18
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_charm_2",
   "name": "จี้หยกธาราหยก",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "จี้หยกแห่งธาราฝน • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "heal": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_seal_2",
   "name": "ตราประทีปธาราหยก",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "ตราประทีปแห่งธาราฝน • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "heal": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_boots_2",
   "name": "รองเท้าธาราหยก",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "รองเท้าแห่งธาราฝน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "rain_tool_2",
   "name": "ชุดเครื่องมือธาราหยก",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "rain",
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งธาราฝน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "mat_rain_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_rain_3",
   "name": "หยาดทิพย์พิรุณคืนชีพ",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "rain",
   "desc": "วัตถุดิบประจำธาราฝน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "herb": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน"
  },
  "rain_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_sword_3",
   "name": "กระบี่พิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "กระบี่แห่งธาราฝน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_saber_3": {
   "stats": {
    "atk": 0.26,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_saber_3",
   "name": "ดาบพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "ดาบแห่งธาราฝน • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "heal": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_spear_3",
   "name": "ทวนพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "ทวนแห่งธาราฝน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "heal": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_bow_3",
   "name": "ธนูพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "ธนูแห่งธาราฝน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.28
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_fan_3",
   "name": "พัดพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "พัดแห่งธาราฝน • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_fist_3",
   "name": "สนับหมัดพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "สนับหมัดแห่งธาราฝน • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "heal": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_staff_3",
   "name": "คทาพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "คทาแห่งธาราฝน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_dagger_3",
   "name": "มีดสั้นพิรุณคืนชีพ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "มีดสั้นแห่งธาราฝน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "heal": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_armor_3",
   "name": "เกราะพิรุณคืนชีพ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "เกราะแห่งธาราฝน • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "heal": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_robe_3",
   "name": "อาภรณ์พิรุณคืนชีพ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "อาภรณ์แห่งธาราฝน • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_ring_3",
   "name": "แหวนพิรุณคืนชีพ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "แหวนแห่งธาราฝน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.18
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_charm_3",
   "name": "จี้หยกพิรุณคืนชีพ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "จี้หยกแห่งธาราฝน • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "heal": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_seal_3",
   "name": "ตราประทีปพิรุณคืนชีพ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "ตราประทีปแห่งธาราฝน • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "heal": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_boots_3",
   "name": "รองเท้าพิรุณคืนชีพ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "รองเท้าแห่งธาราฝน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "rain_tool_3",
   "name": "ชุดเครื่องมือพิรุณคืนชีพ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "rain",
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งธาราฝน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "mat_rain_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_rain_4",
   "name": "หยาดทิพย์สมุทรเมตตา",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "rain",
   "desc": "วัตถุดิบประจำธาราฝน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "herb": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน"
  },
  "rain_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_sword_4",
   "name": "กระบี่สมุทรเมตตา",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "กระบี่แห่งธาราฝน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_saber_4": {
   "stats": {
    "atk": 0.26,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_saber_4",
   "name": "ดาบสมุทรเมตตา",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "ดาบแห่งธาราฝน • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "heal": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_spear_4",
   "name": "ทวนสมุทรเมตตา",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "ทวนแห่งธาราฝน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "heal": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_bow_4",
   "name": "ธนูสมุทรเมตตา",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "ธนูแห่งธาราฝน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.28
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_fan_4",
   "name": "พัดสมุทรเมตตา",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "พัดแห่งธาราฝน • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_fist_4",
   "name": "สนับหมัดสมุทรเมตตา",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "สนับหมัดแห่งธาราฝน • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "heal": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_staff_4",
   "name": "คทาสมุทรเมตตา",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "คทาแห่งธาราฝน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_dagger_4",
   "name": "มีดสั้นสมุทรเมตตา",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "มีดสั้นแห่งธาราฝน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "heal": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_armor_4",
   "name": "เกราะสมุทรเมตตา",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "เกราะแห่งธาราฝน • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "heal": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_robe_4",
   "name": "อาภรณ์สมุทรเมตตา",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "อาภรณ์แห่งธาราฝน • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_ring_4": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "heal": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_ring_4",
   "name": "แหวนสมุทรเมตตา",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "แหวนแห่งธาราฝน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_charm_4": {
   "stats": {
    "hp": 0.12,
    "heal": 0.18
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_charm_4",
   "name": "จี้หยกสมุทรเมตตา",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "จี้หยกแห่งธาราฝน • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_seal_4": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "heal": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_seal_4",
   "name": "ตราประทีปสมุทรเมตตา",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "ตราประทีปแห่งธาราฝน • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "heal": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_boots_4",
   "name": "รองเท้าสมุทรเมตตา",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "รองเท้าแห่งธาราฝน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "rain_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "heal": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "rain_tool_4",
   "name": "ชุดเครื่องมือสมุทรเมตตา",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "rain",
   "ingredients": {
    "mat_rain_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งธาราฝน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมธาราฝน หรือค้นสูตรแล้วผลิต"
  },
  "mat_thunder_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_thunder_2",
   "name": "ศิลาประกายอัสนี",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "thunder",
   "desc": "วัตถุดิบประจำอัสนี ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมอัสนี"
  },
  "thunder_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_sword_2",
   "name": "กระบี่ประกายอัสนี",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "กระบี่แห่งอัสนี • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_saber_2": {
   "stats": {
    "atk": 0.26,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_saber_2",
   "name": "ดาบประกายอัสนี",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "ดาบแห่งอัสนี • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "pierce": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_spear_2",
   "name": "ทวนประกายอัสนี",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "ทวนแห่งอัสนี • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "pierce": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_bow_2",
   "name": "ธนูประกายอัสนี",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "ธนูแห่งอัสนี • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_fan_2",
   "name": "พัดประกายอัสนี",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "พัดแห่งอัสนี • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_fist_2",
   "name": "สนับหมัดประกายอัสนี",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "สนับหมัดแห่งอัสนี • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_staff_2",
   "name": "คทาประกายอัสนี",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "คทาแห่งอัสนี • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.22
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_dagger_2",
   "name": "มีดสั้นประกายอัสนี",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "มีดสั้นแห่งอัสนี • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "pierce": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_armor_2",
   "name": "เกราะประกายอัสนี",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "เกราะแห่งอัสนี • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "pierce": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_robe_2",
   "name": "อาภรณ์ประกายอัสนี",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "อาภรณ์แห่งอัสนี • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_ring_2",
   "name": "แหวนประกายอัสนี",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "แหวนแห่งอัสนี • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_charm_2",
   "name": "จี้หยกประกายอัสนี",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "จี้หยกแห่งอัสนี • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_seal_2",
   "name": "ตราประทีปประกายอัสนี",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "ตราประทีปแห่งอัสนี • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_boots_2",
   "name": "รองเท้าประกายอัสนี",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "รองเท้าแห่งอัสนี • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "thunder_tool_2",
   "name": "ชุดเครื่องมือประกายอัสนี",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งอัสนี • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "mat_thunder_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_thunder_3",
   "name": "ศิลาอัสนีพิโรธ",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "thunder",
   "desc": "วัตถุดิบประจำอัสนี ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมอัสนี"
  },
  "thunder_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_sword_3",
   "name": "กระบี่อัสนีพิโรธ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "กระบี่แห่งอัสนี • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_saber_3": {
   "stats": {
    "atk": 0.26,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_saber_3",
   "name": "ดาบอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "ดาบแห่งอัสนี • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "pierce": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_spear_3",
   "name": "ทวนอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "ทวนแห่งอัสนี • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "pierce": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_bow_3",
   "name": "ธนูอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "ธนูแห่งอัสนี • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_fan_3",
   "name": "พัดอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "พัดแห่งอัสนี • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_fist_3",
   "name": "สนับหมัดอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "สนับหมัดแห่งอัสนี • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_staff_3",
   "name": "คทาอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "คทาแห่งอัสนี • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.22
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_dagger_3",
   "name": "มีดสั้นอัสนีพิโรธ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "มีดสั้นแห่งอัสนี • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "pierce": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_armor_3",
   "name": "เกราะอัสนีพิโรธ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "เกราะแห่งอัสนี • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "pierce": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_robe_3",
   "name": "อาภรณ์อัสนีพิโรธ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "อาภรณ์แห่งอัสนี • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_ring_3",
   "name": "แหวนอัสนีพิโรธ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "แหวนแห่งอัสนี • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_charm_3",
   "name": "จี้หยกอัสนีพิโรธ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "จี้หยกแห่งอัสนี • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_seal_3",
   "name": "ตราประทีปอัสนีพิโรธ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "ตราประทีปแห่งอัสนี • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_boots_3",
   "name": "รองเท้าอัสนีพิโรธ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "รองเท้าแห่งอัสนี • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "thunder_tool_3",
   "name": "ชุดเครื่องมืออัสนีพิโรธ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งอัสนี • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "mat_thunder_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_thunder_4",
   "name": "ศิลาอัสนีทลายฟ้า",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "thunder",
   "desc": "วัตถุดิบประจำอัสนี ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมอัสนี"
  },
  "thunder_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_sword_4",
   "name": "กระบี่อัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "กระบี่แห่งอัสนี • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_saber_4": {
   "stats": {
    "atk": 0.26,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_saber_4",
   "name": "ดาบอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "ดาบแห่งอัสนี • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "pierce": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_spear_4",
   "name": "ทวนอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "ทวนแห่งอัสนี • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "pierce": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_bow_4",
   "name": "ธนูอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "ธนูแห่งอัสนี • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_fan_4",
   "name": "พัดอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "พัดแห่งอัสนี • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_fist_4",
   "name": "สนับหมัดอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "สนับหมัดแห่งอัสนี • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_staff_4",
   "name": "คทาอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "คทาแห่งอัสนี • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.22
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_dagger_4",
   "name": "มีดสั้นอัสนีทลายฟ้า",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "มีดสั้นแห่งอัสนี • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "pierce": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_armor_4",
   "name": "เกราะอัสนีทลายฟ้า",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "เกราะแห่งอัสนี • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "pierce": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_robe_4",
   "name": "อาภรณ์อัสนีทลายฟ้า",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "อาภรณ์แห่งอัสนี • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_ring_4": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_ring_4",
   "name": "แหวนอัสนีทลายฟ้า",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "แหวนแห่งอัสนี • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_charm_4": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_charm_4",
   "name": "จี้หยกอัสนีทลายฟ้า",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "จี้หยกแห่งอัสนี • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_seal_4": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_seal_4",
   "name": "ตราประทีปอัสนีทลายฟ้า",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "ตราประทีปแห่งอัสนี • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_boots_4",
   "name": "รองเท้าอัสนีทลายฟ้า",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "รองเท้าแห่งอัสนี • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "thunder_tool_4",
   "name": "ชุดเครื่องมืออัสนีทลายฟ้า",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งอัสนี • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "mat_thunder_5": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 28,
   "paths": [],
   "craftable": false,
   "minRealm": 4,
   "shop": false,
   "id": "mat_thunder_5",
   "name": "ศิลาทัณฑ์เทวะ",
   "type": "material",
   "icon": "material",
   "grade": 5,
   "theme": "thunder",
   "desc": "วัตถุดิบประจำอัสนี ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 7
   },
   "sourceText": "สำรวจพื้นที่ธีมอัสนี"
  },
  "thunder_sword_5": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_sword_5",
   "name": "กระบี่ทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "กระบี่แห่งอัสนี • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_saber_5": {
   "stats": {
    "atk": 0.26,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_saber_5",
   "name": "ดาบทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "ดาบแห่งอัสนี • โจมตีหนัก • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_spear_5": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "pierce": 0.06
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_spear_5",
   "name": "ทวนทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "ทวนแห่งอัสนี • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_bow_5": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "pierce": 0.06
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_bow_5",
   "name": "ธนูทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "ธนูแห่งอัสนี • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fan_5": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_fan_5",
   "name": "พัดทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "พัดแห่งอัสนี • สนับสนุนผู้รักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_fist_5": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_fist_5",
   "name": "สนับหมัดทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "สนับหมัดแห่งอัสนี • เสริมกำลังกาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_staff_5": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "pierce": 0.06
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_staff_5",
   "name": "คทาทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "คทาแห่งอัสนี • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_dagger_5": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.22
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_dagger_5",
   "name": "มีดสั้นทัณฑ์เทวะ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "มีดสั้นแห่งอัสนี • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_armor_5": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "pierce": 0.06
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_armor_5",
   "name": "เกราะทัณฑ์เทวะ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "เกราะแห่งอัสนี • ทนแรงปะทะ • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_robe_5": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "pierce": 0.06
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_robe_5",
   "name": "อาภรณ์ทัณฑ์เทวะ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "อาภรณ์แห่งอัสนี • สำรองพลังวิชา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_ring_5": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_ring_5",
   "name": "แหวนทัณฑ์เทวะ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "แหวนแห่งอัสนี • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_charm_5": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_charm_5",
   "name": "จี้หยกทัณฑ์เทวะ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "จี้หยกแห่งอัสนี • เสริมชีพและการรักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_seal_5": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "pierce": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_seal_5",
   "name": "ตราประทีปทัณฑ์เทวะ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "ตราประทีปแห่งอัสนี • ขยายความจุศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_boots_5": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "pierce": 0.06
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_boots_5",
   "name": "รองเท้าทัณฑ์เทวะ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "รองเท้าแห่งอัสนี • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "thunder_tool_5": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "pierce": 0.06
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "thunder_tool_5",
   "name": "ชุดเครื่องมือทัณฑ์เทวะ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 5,
   "theme": "thunder",
   "ingredients": {
    "mat_thunder_5": 3
   },
   "desc": "ชุดเครื่องมือแห่งอัสนี • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมอัสนี หรือค้นสูตรแล้วผลิต"
  },
  "mat_ancestor_1": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 12,
   "paths": [],
   "craftable": false,
   "minRealm": 0,
   "shop": true,
   "id": "mat_ancestor_1",
   "name": "เศษหยกประทีปเก่า",
   "type": "material",
   "icon": "material",
   "grade": 1,
   "theme": "ancestor",
   "desc": "วัตถุดิบประจำบรรพชน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 3
   },
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน"
  },
  "ancestor_sword_1": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_sword_1",
   "name": "กระบี่ประทีปเก่า",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "กระบี่แห่งบรรพชน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_saber_1": {
   "stats": {
    "atk": 0.26,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_saber_1",
   "name": "ดาบประทีปเก่า",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "ดาบแห่งบรรพชน • โจมตีหนัก • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_spear_1": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "faith": 0.08
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_spear_1",
   "name": "ทวนประทีปเก่า",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "ทวนแห่งบรรพชน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_bow_1": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "faith": 0.08
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_bow_1",
   "name": "ธนูประทีปเก่า",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "ธนูแห่งบรรพชน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fan_1": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "faith": 0.08
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_fan_1",
   "name": "พัดประทีปเก่า",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "พัดแห่งบรรพชน • สนับสนุนผู้รักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fist_1": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_fist_1",
   "name": "สนับหมัดประทีปเก่า",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "สนับหมัดแห่งบรรพชน • เสริมกำลังกาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_staff_1": {
   "stats": {
    "atk": 0.12,
    "faith": 0.3
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_staff_1",
   "name": "คทาประทีปเก่า",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "คทาแห่งบรรพชน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_dagger_1": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_dagger_1",
   "name": "มีดสั้นประทีปเก่า",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "มีดสั้นแห่งบรรพชน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_armor_1": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "faith": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_armor_1",
   "name": "เกราะประทีปเก่า",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "เกราะแห่งบรรพชน • ทนแรงปะทะ • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_robe_1": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "faith": 0.08
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_robe_1",
   "name": "อาภรณ์ประทีปเก่า",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "อาภรณ์แห่งบรรพชน • สำรองพลังวิชา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_ring_1": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_ring_1",
   "name": "แหวนประทีปเก่า",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "แหวนแห่งบรรพชน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_charm_1": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "faith": 0.08
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_charm_1",
   "name": "จี้หยกประทีปเก่า",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "จี้หยกแห่งบรรพชน • เสริมชีพและการรักษา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_seal_1": {
   "stats": {
    "faith": 0.36000000000000004,
    "guard": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_seal_1",
   "name": "ตราประทีปประทีปเก่า",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "ตราประทีปแห่งบรรพชน • ขยายความจุศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_boots_1": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "faith": 0.08
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_boots_1",
   "name": "รองเท้าประทีปเก่า",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "รองเท้าแห่งบรรพชน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_tool_1": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 21,
   "price": 43,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "ancestor_tool_1",
   "name": "ชุดเครื่องมือประทีปเก่า",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 1,
   "theme": "ancestor",
   "ingredients": {},
   "desc": "ชุดเครื่องมือแห่งบรรพชน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ชั้นดี",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "mat_ancestor_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_ancestor_2",
   "name": "เศษหยกวิญญาณบรรพชน",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "ancestor",
   "desc": "วัตถุดิบประจำบรรพชน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน"
  },
  "ancestor_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_sword_2",
   "name": "กระบี่วิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "กระบี่แห่งบรรพชน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_saber_2": {
   "stats": {
    "atk": 0.26,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_saber_2",
   "name": "ดาบวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "ดาบแห่งบรรพชน • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "faith": 0.08
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_spear_2",
   "name": "ทวนวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "ทวนแห่งบรรพชน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "faith": 0.08
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_bow_2",
   "name": "ธนูวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "ธนูแห่งบรรพชน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "faith": 0.08
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_fan_2",
   "name": "พัดวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "พัดแห่งบรรพชน • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_fist_2",
   "name": "สนับหมัดวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "สนับหมัดแห่งบรรพชน • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.3
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_staff_2",
   "name": "คทาวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "คทาแห่งบรรพชน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_dagger_2",
   "name": "มีดสั้นวิญญาณบรรพชน",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "มีดสั้นแห่งบรรพชน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "faith": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_armor_2",
   "name": "เกราะวิญญาณบรรพชน",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "เกราะแห่งบรรพชน • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "faith": 0.08
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_robe_2",
   "name": "อาภรณ์วิญญาณบรรพชน",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "อาภรณ์แห่งบรรพชน • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_ring_2",
   "name": "แหวนวิญญาณบรรพชน",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "แหวนแห่งบรรพชน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_charm_2": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "faith": 0.08
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_charm_2",
   "name": "จี้หยกวิญญาณบรรพชน",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "จี้หยกแห่งบรรพชน • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_seal_2": {
   "stats": {
    "faith": 0.36000000000000004,
    "guard": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_seal_2",
   "name": "ตราประทีปวิญญาณบรรพชน",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "ตราประทีปแห่งบรรพชน • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "faith": 0.08
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_boots_2",
   "name": "รองเท้าวิญญาณบรรพชน",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "รองเท้าแห่งบรรพชน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "ancestor_tool_2",
   "name": "ชุดเครื่องมือวิญญาณบรรพชน",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งบรรพชน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "mat_ancestor_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_ancestor_3",
   "name": "เศษหยกบรรพชนพิทักษ์",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "ancestor",
   "desc": "วัตถุดิบประจำบรรพชน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน"
  },
  "ancestor_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_sword_3",
   "name": "กระบี่บรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "กระบี่แห่งบรรพชน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_saber_3": {
   "stats": {
    "atk": 0.26,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_saber_3",
   "name": "ดาบบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "ดาบแห่งบรรพชน • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "faith": 0.08
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_spear_3",
   "name": "ทวนบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "ทวนแห่งบรรพชน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "faith": 0.08
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_bow_3",
   "name": "ธนูบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "ธนูแห่งบรรพชน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "faith": 0.08
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_fan_3",
   "name": "พัดบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "พัดแห่งบรรพชน • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_fist_3",
   "name": "สนับหมัดบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "สนับหมัดแห่งบรรพชน • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.3
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_staff_3",
   "name": "คทาบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "คทาแห่งบรรพชน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_dagger_3",
   "name": "มีดสั้นบรรพชนพิทักษ์",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "มีดสั้นแห่งบรรพชน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "faith": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_armor_3",
   "name": "เกราะบรรพชนพิทักษ์",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "เกราะแห่งบรรพชน • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "faith": 0.08
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_robe_3",
   "name": "อาภรณ์บรรพชนพิทักษ์",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "อาภรณ์แห่งบรรพชน • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_ring_3",
   "name": "แหวนบรรพชนพิทักษ์",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "แหวนแห่งบรรพชน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "faith": 0.08
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_charm_3",
   "name": "จี้หยกบรรพชนพิทักษ์",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "จี้หยกแห่งบรรพชน • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_seal_3": {
   "stats": {
    "faith": 0.36000000000000004,
    "guard": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_seal_3",
   "name": "ตราประทีปบรรพชนพิทักษ์",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "ตราประทีปแห่งบรรพชน • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "faith": 0.08
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_boots_3",
   "name": "รองเท้าบรรพชนพิทักษ์",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "รองเท้าแห่งบรรพชน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "ancestor_tool_3",
   "name": "ชุดเครื่องมือบรรพชนพิทักษ์",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งบรรพชน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "mat_ancestor_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_ancestor_4",
   "name": "เศษหยกบรรพชนหมื่นปี",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "ancestor",
   "desc": "วัตถุดิบประจำบรรพชน ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน"
  },
  "ancestor_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_sword_4",
   "name": "กระบี่บรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "กระบี่แห่งบรรพชน • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_saber_4": {
   "stats": {
    "atk": 0.26,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_saber_4",
   "name": "ดาบบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "ดาบแห่งบรรพชน • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "faith": 0.08
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_spear_4",
   "name": "ทวนบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "ทวนแห่งบรรพชน • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "faith": 0.08
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_bow_4",
   "name": "ธนูบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "ธนูแห่งบรรพชน • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "faith": 0.08
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_fan_4",
   "name": "พัดบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "พัดแห่งบรรพชน • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_fist_4",
   "name": "สนับหมัดบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "สนับหมัดแห่งบรรพชน • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.3
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_staff_4",
   "name": "คทาบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "คทาแห่งบรรพชน • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_dagger_4",
   "name": "มีดสั้นบรรพชนหมื่นปี",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "มีดสั้นแห่งบรรพชน • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "faith": 0.08
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_armor_4",
   "name": "เกราะบรรพชนหมื่นปี",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "เกราะแห่งบรรพชน • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "faith": 0.08
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_robe_4",
   "name": "อาภรณ์บรรพชนหมื่นปี",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "อาภรณ์แห่งบรรพชน • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_ring_4": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "faith": 0.08
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_ring_4",
   "name": "แหวนบรรพชนหมื่นปี",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "แหวนแห่งบรรพชน • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_charm_4": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "faith": 0.08
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_charm_4",
   "name": "จี้หยกบรรพชนหมื่นปี",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "จี้หยกแห่งบรรพชน • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_seal_4": {
   "stats": {
    "faith": 0.36000000000000004,
    "guard": 0.06
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_seal_4",
   "name": "ตราประทีปบรรพชนหมื่นปี",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "ตราประทีปแห่งบรรพชน • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "faith": 0.08
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_boots_4",
   "name": "รองเท้าบรรพชนหมื่นปี",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "รองเท้าแห่งบรรพชน • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "ancestor_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "faith": 0.08
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "ancestor_tool_4",
   "name": "ชุดเครื่องมือบรรพชนหมื่นปี",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "ancestor",
   "ingredients": {
    "mat_ancestor_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งบรรพชน • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมบรรพชน หรือค้นสูตรแล้วผลิต"
  },
  "mat_dragon_2": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 16,
   "paths": [],
   "craftable": false,
   "minRealm": 1,
   "shop": true,
   "id": "mat_dragon_2",
   "name": "โลหิตเขี้ยวมังกร",
   "type": "material",
   "icon": "material",
   "grade": 2,
   "theme": "dragon",
   "desc": "วัตถุดิบประจำมังกร ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "beast": 4
   },
   "sourceText": "สำรวจพื้นที่ธีมมังกร"
  },
  "dragon_sword_2": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "hp": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_sword_2",
   "name": "กระบี่เขี้ยวมังกร",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "กระบี่แห่งมังกร • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_saber_2": {
   "stats": {
    "atk": 0.26,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_saber_2",
   "name": "ดาบเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "ดาบแห่งมังกร • โจมตีหนัก • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_spear_2": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "hp": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_spear_2",
   "name": "ทวนเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "ทวนแห่งมังกร • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_bow_2": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "hp": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_bow_2",
   "name": "ธนูเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "ธนูแห่งมังกร • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fan_2": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_fan_2",
   "name": "พัดเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "พัดแห่งมังกร • สนับสนุนผู้รักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fist_2": {
   "stats": {
    "atk": 0.21,
    "hp": 0.13
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_fist_2",
   "name": "สนับหมัดเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "สนับหมัดแห่งมังกร • เสริมกำลังกาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_staff_2": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_staff_2",
   "name": "คทาเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "คทาแห่งมังกร • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_dagger_2": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_dagger_2",
   "name": "มีดสั้นเขี้ยวมังกร",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "มีดสั้นแห่งมังกร • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_armor_2": {
   "stats": {
    "armor": 0.38,
    "hp": 0.15000000000000002
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_armor_2",
   "name": "เกราะเขี้ยวมังกร",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "เกราะแห่งมังกร • ทนแรงปะทะ • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_robe_2": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "hp": 0.07
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_robe_2",
   "name": "อาภรณ์เขี้ยวมังกร",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "อาภรณ์แห่งมังกร • สำรองพลังวิชา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_ring_2": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_ring_2",
   "name": "แหวนเขี้ยวมังกร",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "แหวนแห่งมังกร • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_charm_2": {
   "stats": {
    "hp": 0.19,
    "heal": 0.12
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_charm_2",
   "name": "จี้หยกเขี้ยวมังกร",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "จี้หยกแห่งมังกร • เสริมชีพและการรักษา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_seal_2": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "hp": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_seal_2",
   "name": "ตราประทีปเขี้ยวมังกร",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "ตราประทีปแห่งมังกร • ขยายความจุศรัทธา • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_boots_2": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "hp": 0.07
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_boots_2",
   "name": "รองเท้าเขี้ยวมังกร",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "รองเท้าแห่งมังกร • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_tool_2": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 24,
   "price": 51,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "dragon_tool_2",
   "name": "ชุดเครื่องมือเขี้ยวมังกร",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 2,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "ชุดเครื่องมือแห่งมังกร • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ ปราณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "mat_dragon_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_dragon_3",
   "name": "โลหิตเกล็ดมังกร",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "dragon",
   "desc": "วัตถุดิบประจำมังกร ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "beast": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมมังกร"
  },
  "dragon_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "hp": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_sword_3",
   "name": "กระบี่เกล็ดมังกร",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "กระบี่แห่งมังกร • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_saber_3": {
   "stats": {
    "atk": 0.26,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_saber_3",
   "name": "ดาบเกล็ดมังกร",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "ดาบแห่งมังกร • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "hp": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_spear_3",
   "name": "ทวนเกล็ดมังกร",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "ทวนแห่งมังกร • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "hp": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_bow_3",
   "name": "ธนูเกล็ดมังกร",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "ธนูแห่งมังกร • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_fan_3",
   "name": "พัดเกล็ดมังกร",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "พัดแห่งมังกร • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.13
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_fist_3",
   "name": "สนับหมัดเกล็ดมังกร",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "สนับหมัดแห่งมังกร • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_staff_3",
   "name": "คทาเกล็ดมังกร",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "คทาแห่งมังกร • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_dagger_3",
   "name": "มีดสั้นเกล็ดมังกร",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "มีดสั้นแห่งมังกร • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.15000000000000002
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_armor_3",
   "name": "เกราะเกล็ดมังกร",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "เกราะแห่งมังกร • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "hp": 0.07
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_robe_3",
   "name": "อาภรณ์เกล็ดมังกร",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "อาภรณ์แห่งมังกร • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_ring_3",
   "name": "แหวนเกล็ดมังกร",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "แหวนแห่งมังกร • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_charm_3": {
   "stats": {
    "hp": 0.19,
    "heal": 0.12
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_charm_3",
   "name": "จี้หยกเกล็ดมังกร",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "จี้หยกแห่งมังกร • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "hp": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_seal_3",
   "name": "ตราประทีปเกล็ดมังกร",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "ตราประทีปแห่งมังกร • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "hp": 0.07
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_boots_3",
   "name": "รองเท้าเกล็ดมังกร",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "รองเท้าแห่งมังกร • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "dragon_tool_3",
   "name": "ชุดเครื่องมือเกล็ดมังกร",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งมังกร • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "mat_dragon_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_dragon_4",
   "name": "โลหิตมังกรผงาด",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "dragon",
   "desc": "วัตถุดิบประจำมังกร ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "beast": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมมังกร"
  },
  "dragon_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "hp": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_sword_4",
   "name": "กระบี่มังกรผงาด",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "กระบี่แห่งมังกร • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_saber_4": {
   "stats": {
    "atk": 0.26,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_saber_4",
   "name": "ดาบมังกรผงาด",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "ดาบแห่งมังกร • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "hp": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_spear_4",
   "name": "ทวนมังกรผงาด",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "ทวนแห่งมังกร • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "hp": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_bow_4",
   "name": "ธนูมังกรผงาด",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "ธนูแห่งมังกร • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_fan_4",
   "name": "พัดมังกรผงาด",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "พัดแห่งมังกร • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.13
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_fist_4",
   "name": "สนับหมัดมังกรผงาด",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "สนับหมัดแห่งมังกร • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_staff_4",
   "name": "คทามังกรผงาด",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "คทาแห่งมังกร • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_dagger_4",
   "name": "มีดสั้นมังกรผงาด",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "มีดสั้นแห่งมังกร • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.15000000000000002
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_armor_4",
   "name": "เกราะมังกรผงาด",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "เกราะแห่งมังกร • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "hp": 0.07
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_robe_4",
   "name": "อาภรณ์มังกรผงาด",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "อาภรณ์แห่งมังกร • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_ring_4": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_ring_4",
   "name": "แหวนมังกรผงาด",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "แหวนแห่งมังกร • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_charm_4": {
   "stats": {
    "hp": 0.19,
    "heal": 0.12
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_charm_4",
   "name": "จี้หยกมังกรผงาด",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "จี้หยกแห่งมังกร • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_seal_4": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "hp": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_seal_4",
   "name": "ตราประทีปมังกรผงาด",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "ตราประทีปแห่งมังกร • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "hp": 0.07
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_boots_4",
   "name": "รองเท้ามังกรผงาด",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "รองเท้าแห่งมังกร • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "dragon_tool_4",
   "name": "ชุดเครื่องมือมังกรผงาด",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งมังกร • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "mat_dragon_5": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 28,
   "paths": [],
   "craftable": false,
   "minRealm": 4,
   "shop": false,
   "id": "mat_dragon_5",
   "name": "โลหิตมังกรต้นกำเนิด",
   "type": "material",
   "icon": "material",
   "grade": 5,
   "theme": "dragon",
   "desc": "วัตถุดิบประจำมังกร ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "beast": 7
   },
   "sourceText": "สำรวจพื้นที่ธีมมังกร"
  },
  "dragon_sword_5": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "hp": 0.07
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_sword_5",
   "name": "กระบี่มังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "กระบี่แห่งมังกร • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_saber_5": {
   "stats": {
    "atk": 0.26,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_saber_5",
   "name": "ดาบมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "ดาบแห่งมังกร • โจมตีหนัก • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_spear_5": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "hp": 0.07
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_spear_5",
   "name": "ทวนมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "ทวนแห่งมังกร • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_bow_5": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "hp": 0.07
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_bow_5",
   "name": "ธนูมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "ธนูแห่งมังกร • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fan_5": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_fan_5",
   "name": "พัดมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "พัดแห่งมังกร • สนับสนุนผู้รักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_fist_5": {
   "stats": {
    "atk": 0.21,
    "hp": 0.13
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_fist_5",
   "name": "สนับหมัดมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "สนับหมัดแห่งมังกร • เสริมกำลังกาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_staff_5": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "hp": 0.07
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_staff_5",
   "name": "คทามังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "คทาแห่งมังกร • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_dagger_5": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_dagger_5",
   "name": "มีดสั้นมังกรต้นกำเนิด",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "มีดสั้นแห่งมังกร • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_armor_5": {
   "stats": {
    "armor": 0.38,
    "hp": 0.15000000000000002
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_armor_5",
   "name": "เกราะมังกรต้นกำเนิด",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "เกราะแห่งมังกร • ทนแรงปะทะ • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_robe_5": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "hp": 0.07
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_robe_5",
   "name": "อาภรณ์มังกรต้นกำเนิด",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "อาภรณ์แห่งมังกร • สำรองพลังวิชา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_ring_5": {
   "stats": {
    "mana": 0.16,
    "train": 0.06,
    "hp": 0.07
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_ring_5",
   "name": "แหวนมังกรต้นกำเนิด",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "แหวนแห่งมังกร • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_charm_5": {
   "stats": {
    "hp": 0.19,
    "heal": 0.12
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_charm_5",
   "name": "จี้หยกมังกรต้นกำเนิด",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "จี้หยกแห่งมังกร • เสริมชีพและการรักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_seal_5": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "hp": 0.07
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_seal_5",
   "name": "ตราประทีปมังกรต้นกำเนิด",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "ตราประทีปแห่งมังกร • ขยายความจุศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_boots_5": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "hp": 0.07
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_boots_5",
   "name": "รองเท้ามังกรต้นกำเนิด",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "รองเท้าแห่งมังกร • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "dragon_tool_5": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "hp": 0.07
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "dragon_tool_5",
   "name": "ชุดเครื่องมือมังกรต้นกำเนิด",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 5,
   "theme": "dragon",
   "ingredients": {
    "mat_dragon_5": 3
   },
   "desc": "ชุดเครื่องมือแห่งมังกร • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมมังกร หรือค้นสูตรแล้วผลิต"
  },
  "mat_void_3": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 20,
   "paths": [],
   "craftable": false,
   "minRealm": 2,
   "shop": false,
   "id": "mat_void_3",
   "name": "ผงดาราดาราเร้นเงา",
   "type": "material",
   "icon": "material",
   "grade": 3,
   "theme": "void",
   "desc": "วัตถุดิบประจำดาราเร้น ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 5
   },
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น"
  },
  "void_sword_3": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_sword_3",
   "name": "กระบี่ดาราเร้นเงา",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "กระบี่แห่งดาราเร้น • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_saber_3": {
   "stats": {
    "atk": 0.26,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_saber_3",
   "name": "ดาบดาราเร้นเงา",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "ดาบแห่งดาราเร้น • โจมตีหนัก • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_spear_3": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "train": 0.035
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_spear_3",
   "name": "ทวนดาราเร้นเงา",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "ทวนแห่งดาราเร้น • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_bow_3": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "train": 0.035
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_bow_3",
   "name": "ธนูดาราเร้นเงา",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "ธนูแห่งดาราเร้น • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fan_3": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_fan_3",
   "name": "พัดดาราเร้นเงา",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "พัดแห่งดาราเร้น • สนับสนุนผู้รักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fist_3": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_fist_3",
   "name": "สนับหมัดดาราเร้นเงา",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "สนับหมัดแห่งดาราเร้น • เสริมกำลังกาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_staff_3": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_staff_3",
   "name": "คทาดาราเร้นเงา",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "คทาแห่งดาราเร้น • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_dagger_3": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "train": 0.035
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_dagger_3",
   "name": "มีดสั้นดาราเร้นเงา",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "มีดสั้นแห่งดาราเร้น • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_armor_3": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "train": 0.035
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_armor_3",
   "name": "เกราะดาราเร้นเงา",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "เกราะแห่งดาราเร้น • ทนแรงปะทะ • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_robe_3": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "train": 0.035
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_robe_3",
   "name": "อาภรณ์ดาราเร้นเงา",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "อาภรณ์แห่งดาราเร้น • สำรองพลังวิชา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_ring_3": {
   "stats": {
    "mana": 0.16,
    "train": 0.095
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_ring_3",
   "name": "แหวนดาราเร้นเงา",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "แหวนแห่งดาราเร้น • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_charm_3": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "train": 0.035
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_charm_3",
   "name": "จี้หยกดาราเร้นเงา",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "จี้หยกแห่งดาราเร้น • เสริมชีพและการรักษา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_seal_3": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "train": 0.035
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_seal_3",
   "name": "ตราประทีปดาราเร้นเงา",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "ตราประทีปแห่งดาราเร้น • ขยายความจุศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_boots_3": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "train": 0.035
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_boots_3",
   "name": "รองเท้าดาราเร้นเงา",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "รองเท้าแห่งดาราเร้น • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_tool_3": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 27,
   "price": 59,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "void_tool_3",
   "name": "ชุดเครื่องมือดาราเร้นเงา",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 3,
   "theme": "void",
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "ชุดเครื่องมือแห่งดาราเร้น • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ วิญญาณ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "mat_void_4": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 24,
   "paths": [],
   "craftable": false,
   "minRealm": 3,
   "shop": false,
   "id": "mat_void_4",
   "name": "ผงดาราดาราผ่านภพ",
   "type": "material",
   "icon": "material",
   "grade": 4,
   "theme": "void",
   "desc": "วัตถุดิบประจำดาราเร้น ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 6
   },
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น"
  },
  "void_sword_4": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_sword_4",
   "name": "กระบี่ดาราผ่านภพ",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "กระบี่แห่งดาราเร้น • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_saber_4": {
   "stats": {
    "atk": 0.26,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_saber_4",
   "name": "ดาบดาราผ่านภพ",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "ดาบแห่งดาราเร้น • โจมตีหนัก • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_spear_4": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "train": 0.035
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_spear_4",
   "name": "ทวนดาราผ่านภพ",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "ทวนแห่งดาราเร้น • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_bow_4": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "train": 0.035
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_bow_4",
   "name": "ธนูดาราผ่านภพ",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "ธนูแห่งดาราเร้น • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fan_4": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_fan_4",
   "name": "พัดดาราผ่านภพ",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "พัดแห่งดาราเร้น • สนับสนุนผู้รักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fist_4": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_fist_4",
   "name": "สนับหมัดดาราผ่านภพ",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "สนับหมัดแห่งดาราเร้น • เสริมกำลังกาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_staff_4": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_staff_4",
   "name": "คทาดาราผ่านภพ",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "คทาแห่งดาราเร้น • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_dagger_4": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "train": 0.035
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_dagger_4",
   "name": "มีดสั้นดาราผ่านภพ",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "มีดสั้นแห่งดาราเร้น • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_armor_4": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "train": 0.035
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_armor_4",
   "name": "เกราะดาราผ่านภพ",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "เกราะแห่งดาราเร้น • ทนแรงปะทะ • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_robe_4": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "train": 0.035
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_robe_4",
   "name": "อาภรณ์ดาราผ่านภพ",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "อาภรณ์แห่งดาราเร้น • สำรองพลังวิชา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_ring_4": {
   "stats": {
    "mana": 0.16,
    "train": 0.095
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_ring_4",
   "name": "แหวนดาราผ่านภพ",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "แหวนแห่งดาราเร้น • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_charm_4": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "train": 0.035
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_charm_4",
   "name": "จี้หยกดาราผ่านภพ",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "จี้หยกแห่งดาราเร้น • เสริมชีพและการรักษา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_seal_4": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "train": 0.035
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_seal_4",
   "name": "ตราประทีปดาราผ่านภพ",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "ตราประทีปแห่งดาราเร้น • ขยายความจุศรัทธา • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_boots_4": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "train": 0.035
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_boots_4",
   "name": "รองเท้าดาราผ่านภพ",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "รองเท้าแห่งดาราเร้น • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_tool_4": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 30,
   "price": 67,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "void_tool_4",
   "name": "ชุดเครื่องมือดาราผ่านภพ",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 4,
   "theme": "void",
   "ingredients": {
    "mat_void_4": 3
   },
   "desc": "ชุดเครื่องมือแห่งดาราเร้น • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เซียน",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "mat_void_5": {
   "stats": {},
   "cost": {},
   "work": 18,
   "price": 28,
   "paths": [],
   "craftable": false,
   "minRealm": 4,
   "shop": false,
   "id": "mat_void_5",
   "name": "ผงดาราดาราต้นกำเนิด",
   "type": "material",
   "icon": "material",
   "grade": 5,
   "theme": "void",
   "desc": "วัตถุดิบประจำดาราเร้น ใช้เป็นส่วนผสมยุทธภัณฑ์และโอสถ หรือแปรกลับเป็นทรัพยากรพื้นฐาน",
   "refine": {
    "stone": 7
   },
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น"
  },
  "void_sword_5": {
   "stats": {
    "atk": 0.19,
    "mana": 0.04,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "wood": 5,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_sword_5",
   "name": "กระบี่ดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "sword",
   "icon": "sword",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "กระบี่แห่งดาราเร้น • ประคองปราณและโจมตีสมดุล • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_saber_5": {
   "stats": {
    "atk": 0.26,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 4,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_saber_5",
   "name": "ดาบดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "saber",
   "icon": "saber",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "ดาบแห่งดาราเร้น • โจมตีหนัก • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_spear_5": {
   "stats": {
    "atk": 0.18,
    "guard": 0.07,
    "train": 0.035
   },
   "cost": {
    "ore": 13,
    "wood": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_spear_5",
   "name": "ทวนดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "spear",
   "icon": "spear",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "ทวนแห่งดาราเร้น • ตั้งรับคุ้มกันแนวหน้า • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_bow_5": {
   "stats": {
    "atk": 0.14,
    "loot": 0.16,
    "train": 0.035
   },
   "cost": {
    "wood": 16,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_bow_5",
   "name": "ธนูดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "bow",
   "icon": "bow",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "ธนูแห่งดาราเร้น • ล่าและเก็บทรัพยากร • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fan_5": {
   "stats": {
    "atk": 0.1,
    "heal": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_fan_5",
   "name": "พัดดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "fan",
   "icon": "fan",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "พัดแห่งดาราเร้น • สนับสนุนผู้รักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_fist_5": {
   "stats": {
    "atk": 0.21,
    "hp": 0.06,
    "train": 0.035
   },
   "cost": {
    "ore": 12,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_fist_5",
   "name": "สนับหมัดดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "fist",
   "icon": "fist",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "สนับหมัดแห่งดาราเร้น • เสริมกำลังกาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_staff_5": {
   "stats": {
    "atk": 0.12,
    "faith": 0.22,
    "train": 0.035
   },
   "cost": {
    "wood": 12,
    "stone": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_staff_5",
   "name": "คทาดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "staff",
   "icon": "staff",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "คทาแห่งดาราเร้น • รองรับผู้บ่มเพาะศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_dagger_5": {
   "stats": {
    "atk": 0.15,
    "pierce": 0.16,
    "train": 0.035
   },
   "cost": {
    "ore": 10,
    "wood": 3,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_dagger_5",
   "name": "มีดสั้นดาราต้นกำเนิด",
   "type": "weapon",
   "subtype": "dagger",
   "icon": "dagger",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "มีดสั้นแห่งดาราเร้น • เจาะเกราะเป้าหมาย • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_armor_5": {
   "stats": {
    "armor": 0.38,
    "hp": 0.08,
    "train": 0.035
   },
   "cost": {
    "ore": 22,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_armor_5",
   "name": "เกราะดาราต้นกำเนิด",
   "type": "armor",
   "subtype": "armor",
   "icon": "armor",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "เกราะแห่งดาราเร้น • ทนแรงปะทะ • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_robe_5": {
   "stats": {
    "armor": 0.18,
    "mana": 0.2,
    "train": 0.035
   },
   "cost": {
    "herb": 14,
    "wood": 10,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_robe_5",
   "name": "อาภรณ์ดาราต้นกำเนิด",
   "type": "armor",
   "subtype": "robe",
   "icon": "robe",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "อาภรณ์แห่งดาราเร้น • สำรองพลังวิชา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_ring_5": {
   "stats": {
    "mana": 0.16,
    "train": 0.095
   },
   "cost": {
    "ore": 10,
    "stone": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_ring_5",
   "name": "แหวนดาราต้นกำเนิด",
   "type": "charm",
   "subtype": "ring",
   "icon": "ring",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "แหวนแห่งดาราเร้น • ช่วยฝึกและเก็บพลัง • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_charm_5": {
   "stats": {
    "hp": 0.12,
    "heal": 0.12,
    "train": 0.035
   },
   "cost": {
    "stone": 16,
    "herb": 8,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_charm_5",
   "name": "จี้หยกดาราต้นกำเนิด",
   "type": "charm",
   "subtype": "charm",
   "icon": "charm",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "จี้หยกแห่งดาราเร้น • เสริมชีพและการรักษา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_seal_5": {
   "stats": {
    "faith": 0.28,
    "guard": 0.06,
    "train": 0.035
   },
   "cost": {
    "stone": 18,
    "wood": 6,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_seal_5",
   "name": "ตราประทีปดาราต้นกำเนิด",
   "type": "charm",
   "subtype": "seal",
   "icon": "seal",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "ตราประทีปแห่งดาราเร้น • ขยายความจุศรัทธา • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_boots_5": {
   "stats": {
    "armor": 0.06,
    "guard": 0.06,
    "work": 0.12,
    "train": 0.035
   },
   "cost": {
    "wood": 8,
    "beast": 1,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_boots_5",
   "name": "รองเท้าดาราต้นกำเนิด",
   "type": "boots",
   "subtype": "boots",
   "icon": "boots",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "รองเท้าแห่งดาราเร้น • คุ้มกันกายและช่วยแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "void_tool_5": {
   "stats": {
    "craft": 0.22,
    "work": 0.14,
    "train": 0.035
   },
   "cost": {
    "ore": 15,
    "wood": 12,
    "coin": 4
   },
   "work": 33,
   "price": 75,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "void_tool_5",
   "name": "ชุดเครื่องมือดาราต้นกำเนิด",
   "type": "tool",
   "subtype": "tool",
   "icon": "tool",
   "grade": 5,
   "theme": "void",
   "ingredients": {
    "mat_void_5": 3
   },
   "desc": "ชุดเครื่องมือแห่งดาราเร้น • เร่งผลิตและเพิ่มผลแรงงาน • เกรดประจำชื่อ เทวะ",
   "sourceText": "สำรวจพื้นที่ธีมดาราเร้น หรือค้นสูตรแล้วผลิต"
  },
  "pill_heal_0": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_heal_0",
   "name": "ยาลูกกลอนต่อกระดูก",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ สามัญ",
   "yield": 3,
   "grade": 0,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_heal_1": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_heal_1",
   "name": "ยาสมานเก้าแฉก",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ ชั้นดี",
   "yield": 3,
   "grade": 1,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_heal_2": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_heal_2",
   "name": "โอสถใจพฤกษา",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ ปราณ",
   "yield": 3,
   "grade": 2,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_2": 1
   }
  },
  "pill_heal_3": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_heal_3",
   "name": "โอสถโลหิตมังกร",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ วิญญาณ",
   "yield": 3,
   "grade": 3,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_3": 1
   }
  },
  "pill_heal_4": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_heal_4",
   "name": "หยาดทิพย์โลหิตอมตะ",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ เซียน",
   "yield": 3,
   "grade": 4,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_4": 2
   }
  },
  "pill_heal_5": {
   "stats": {},
   "cost": {
    "herb": 8,
    "stone": 2
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_heal_5",
   "name": "โอสถหงสาคืนชีพ",
   "type": "pill",
   "icon": "pill",
   "effect": "heal",
   "amount": 12,
   "duration": 0,
   "toxicity": 3,
   "cooldown": 1,
   "desc": "ลดบาดเจ็บและฟื้นสุขภาพ ใช้เตรียมด่านและช่วยชุมชนได้ • เกรดประจำชื่อ เทวะ",
   "yield": 3,
   "grade": 5,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_4": 2
   }
  },
  "pill_rest_0": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_rest_0",
   "name": "ยาเม็ดคืนแรง",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_rest_1": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_rest_1",
   "name": "โอสถลมหายใจสงบ",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_rest_2": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_rest_2",
   "name": "โอสถธาราคลายล้า",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_bamboo_2": 1
   }
  },
  "pill_rest_3": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_rest_3",
   "name": "โอสถกายาประสาน",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_bamboo_2": 1
   }
  },
  "pill_rest_4": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_rest_4",
   "name": "โอสถคืนกำลังเซียน",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_bamboo_2": 2
   }
  },
  "pill_rest_5": {
   "stats": {},
   "cost": {
    "herb": 8,
    "food": 10
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_rest_5",
   "name": "หยาดทิพย์กายาเทวะ",
   "type": "pill",
   "icon": "pill",
   "effect": "rest",
   "amount": 25,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ลดความล้าและภาระกาย • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "bamboo",
   "sourceText": "สำรวจธีมไผ่หมอก หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_bamboo_2": 2
   }
  },
  "pill_qi_0": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 18,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_qi_0",
   "name": "ยาเม็ดปราณจาง",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_qi_1": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 22,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_qi_1",
   "name": "โอสถปราณหลั่งไหล",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_qi_2": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 26,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_qi_2",
   "name": "โอสถรวมปราณฟ้าดิน",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_2": 1
   }
  },
  "pill_qi_3": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 30,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_qi_3",
   "name": "โอสถสุริยันจันทรา",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_3": 1
   }
  },
  "pill_qi_4": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 34,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_qi_4",
   "name": "โอสถกลืนเมฆา",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_4": 2
   }
  },
  "pill_qi_5": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10
   },
   "work": 12,
   "price": 38,
   "paths": [
    "qi"
   ],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_qi_5",
   "name": "โอสถปราณเอกภพ",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มความเร็วฝึกลมปราณชั่วคราว • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_5": 2
   }
  },
  "pill_body_0": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 18,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_body_0",
   "name": "ยาบำรุงโลหิต",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_body_1": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 22,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_body_1",
   "name": "โอสถเลือดลมพยัคฆ์",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_body_2": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 26,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_body_2",
   "name": "โอสถชำระไขกระดูก",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_2": 1
   }
  },
  "pill_body_3": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 30,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_body_3",
   "name": "โอสถกายามังกร",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_3": 1
   }
  },
  "pill_body_4": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 34,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_body_4",
   "name": "โอสถวัชระคุ้มกาย",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_4": 2
   }
  },
  "pill_body_5": {
   "stats": {},
   "cost": {
    "herb": 15,
    "beast": 1,
    "food": 12
   },
   "work": 12,
   "price": 38,
   "paths": [
    "body"
   ],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_body_5",
   "name": "โอสถกายาอมตะ",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกกายา ยังต้องพักสร้างการปรับตัว • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_5": 2
   }
  },
  "pill_faith_0": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 18,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_faith_0",
   "name": "ยาเม็ดจิตสงบ",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_faith_1": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 22,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_faith_1",
   "name": "โอสถประทีปชุมชน",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_faith_2": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 26,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_faith_2",
   "name": "โอสถจิตบรรพชน",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_2": 1
   }
  },
  "pill_faith_3": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 30,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_faith_3",
   "name": "โอสถศรัทธาประสาน",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_3": 1
   }
  },
  "pill_faith_4": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 34,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_faith_4",
   "name": "โอสถเทวะเบิกเนตร",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_4": 2
   }
  },
  "pill_faith_5": {
   "stats": {},
   "cost": {
    "herb": 12,
    "stone": 10,
    "coin": 8
   },
   "work": 12,
   "price": 38,
   "paths": [
    "faith"
   ],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_faith_5",
   "name": "หยาดทิพย์จุติเทพ",
   "type": "pill",
   "icon": "pill",
   "effect": "train",
   "amount": 0.5,
   "duration": 12,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เร่งฝึกเทพเมื่อมีศรัทธาจากชุมชน • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_4": 2
   }
  },
  "pill_break_0": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_break_0",
   "name": "ยาเม็ดประสานด่าน",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_break_1": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_break_1",
   "name": "โอสถเบิกมรรคา",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_break_2": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_break_2",
   "name": "โอสถมังกรผงาด",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_3": 1
   }
  },
  "pill_break_3": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_break_3",
   "name": "โอสถทลายดารา",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_3": 1
   }
  },
  "pill_break_4": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_break_4",
   "name": "โอสถทะลวงสวรรค์",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_4": 2
   }
  },
  "pill_break_5": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 15,
    "beast": 1
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_break_5",
   "name": "หยาดทิพย์เต๋าต้นกำเนิด",
   "type": "pill",
   "icon": "pill",
   "effect": "break",
   "amount": 0.08,
   "duration": 15,
   "toxicity": 18,
   "cooldown": 10,
   "desc": "เพิ่มโอกาสทะลวง ใช้โบนัสหมดเมื่อพยายามหนึ่งครั้ง • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_5": 2
   }
  },
  "pill_atk_0": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_atk_0",
   "name": "ยาเม็ดหมัดหนัก",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_atk_1": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_atk_1",
   "name": "โอสถพยัคฆ์คำราม",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_atk_2": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_atk_2",
   "name": "โอสถโลหิตอัคคี",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_thunder_2": 1
   }
  },
  "pill_atk_3": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_atk_3",
   "name": "โอสถระเบิดปราณ",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_thunder_3": 1
   }
  },
  "pill_atk_4": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_atk_4",
   "name": "โอสถราชันย์ศัสตรา",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_thunder_4": 2
   }
  },
  "pill_atk_5": {
   "stats": {},
   "cost": {
    "herb": 12,
    "beast": 1
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_atk_5",
   "name": "โอสถเทวะสังหาร",
   "type": "pill",
   "icon": "pill",
   "effect": "atk",
   "amount": 0.25,
   "duration": 10,
   "toxicity": 14,
   "cooldown": 3,
   "desc": "เพิ่มพลังโจมตีชั่วคราว • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "thunder",
   "sourceText": "สำรวจธีมอัสนี หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_thunder_5": 2
   }
  },
  "pill_armor_0": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_armor_0",
   "name": "ยาบำรุงผิวกาย",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_armor_1": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_armor_1",
   "name": "โอสถหนังเหนียว",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_armor_2": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_armor_2",
   "name": "โอสถกระดูกศิลา",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_2": 1
   }
  },
  "pill_armor_3": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_armor_3",
   "name": "โอสถกายาเต่าทมิฬ",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 1
   }
  },
  "pill_armor_4": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_armor_4",
   "name": "โอสถระฆังทองเซียน",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 2
   }
  },
  "pill_armor_5": {
   "stats": {},
   "cost": {
    "herb": 12,
    "ore": 8
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_armor_5",
   "name": "โอสถบรรพตนิรันดร์",
   "type": "pill",
   "icon": "pill",
   "effect": "armor",
   "amount": 0.3,
   "duration": 10,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "เพิ่มเกราะป้องกันชั่วคราว • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 2
   }
  },
  "pill_manaRestore_0": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_manaRestore_0",
   "name": "ยาเม็ดปราณวารี",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_manaRestore_1": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_manaRestore_1",
   "name": "โอสถคืนปราณหยก",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_manaRestore_2": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_manaRestore_2",
   "name": "โอสถปราณบริสุทธิ์",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_2": 1
   }
  },
  "pill_manaRestore_3": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_manaRestore_3",
   "name": "โอสถจิตวิญญาณดารา",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_3": 1
   }
  },
  "pill_manaRestore_4": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_manaRestore_4",
   "name": "โอสถมหาปราณสมุทร",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_4": 2
   }
  },
  "pill_manaRestore_5": {
   "stats": {},
   "cost": {
    "herb": 10,
    "stone": 5
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_manaRestore_5",
   "name": "หยาดทิพย์พลังเทวะ",
   "type": "pill",
   "icon": "pill",
   "effect": "manaRestore",
   "amount": 12,
   "duration": 0,
   "toxicity": 10,
   "cooldown": 3,
   "desc": "ฟื้นพลังใช้วิชา ไม่สร้างศรัทธา • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "moon",
   "sourceText": "สำรวจธีมจันทรา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_moon_5": 2
   }
  },
  "pill_permanentHp_0": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_permanentHp_0",
   "name": "ยาบำรุงชีพจร",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_permanentHp_1": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_permanentHp_1",
   "name": "โอสถชีพจรหยก",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_permanentHp_2": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_permanentHp_2",
   "name": "โอสถโลหิตทับทิม",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_2": 1
   }
  },
  "pill_permanentHp_3": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_permanentHp_3",
   "name": "โอสถชีพมังกร",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_3": 1
   }
  },
  "pill_permanentHp_4": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_permanentHp_4",
   "name": "โอสถกายาเซียนยั่งยืน",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_4": 2
   }
  },
  "pill_permanentHp_5": {
   "stats": {},
   "cost": {
    "herb": 25,
    "beast": 2,
    "stone": 12
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_permanentHp_5",
   "name": "หยาดทิพย์ชีวิตต้นกำเนิด",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentHp",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มเลือดสูงสุดถาวร รวมจากยาชนิดนี้ไม่เกิน 50% • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "dragon",
   "sourceText": "สำรวจธีมมังกร หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_dragon_5": 2
   }
  },
  "pill_permanentMana_0": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_permanentMana_0",
   "name": "ยาบำรุงจิต",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_permanentMana_1": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_permanentMana_1",
   "name": "โอสถจิตวารี",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_permanentMana_2": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_permanentMana_2",
   "name": "โอสถจิตดารา",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_3": 1
   }
  },
  "pill_permanentMana_3": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_permanentMana_3",
   "name": "โอสถสมุทรวิญญาณ",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_3": 1
   }
  },
  "pill_permanentMana_4": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_permanentMana_4",
   "name": "โอสถจิตเซียนไร้ขอบเขต",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_4": 2
   }
  },
  "pill_permanentMana_5": {
   "stats": {},
   "cost": {
    "herb": 25,
    "stone": 25,
    "coin": 15
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_permanentMana_5",
   "name": "โอสถจิตเทวะนิรันดร์",
   "type": "pill",
   "icon": "pill",
   "effect": "permanentMana",
   "amount": 0.04,
   "duration": 0,
   "toxicity": 20,
   "cooldown": 20,
   "desc": "เพิ่มพลังวิชาสูงสุดถาวร รวมไม่เกิน 50% • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "void",
   "sourceText": "สำรวจธีมดาราเร้น หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_void_5": 2
   }
  },
  "pill_understanding_0": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_understanding_0",
   "name": "ยาเม็ดสมาธิ",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_understanding_1": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_understanding_1",
   "name": "โอสถกระจ่างเนตร",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_understanding_2": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_understanding_2",
   "name": "โอสถหยั่งรู้หยก",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_2": 1
   }
  },
  "pill_understanding_3": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_understanding_3",
   "name": "หยาดน้ำค้างตรัสรู้",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_3": 1
   }
  },
  "pill_understanding_4": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_understanding_4",
   "name": "โอสถเบิกปัญญาเซียน",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_4": 2
   }
  },
  "pill_understanding_5": {
   "stats": {},
   "cost": {
    "herb": 18,
    "stone": 12
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_understanding_5",
   "name": "โอสถเต๋าไร้อักษร",
   "type": "pill",
   "icon": "pill",
   "effect": "understanding",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เพิ่มความเข้าใจถาวร โดยไม่ข้ามเพดาน 100 • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "ancestor",
   "sourceText": "สำรวจธีมบรรพชน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_ancestor_4": 2
   }
  },
  "pill_foundation_0": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_foundation_0",
   "name": "ยาเม็ดบ่มราก",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_foundation_1": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_foundation_1",
   "name": "โอสถฐานศิลา",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_foundation_2": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_foundation_2",
   "name": "โอสถฐานหยกบริสุทธิ์",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_2": 1
   }
  },
  "pill_foundation_3": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_foundation_3",
   "name": "โอสถรากวิญญาณ",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 1
   }
  },
  "pill_foundation_4": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_foundation_4",
   "name": "โอสถฐานเซียนเก้าชั้น",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 2
   }
  },
  "pill_foundation_5": {
   "stats": {},
   "cost": {
    "herb": 18,
    "ore": 8,
    "stone": 8
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_foundation_5",
   "name": "โอสถรากเต๋าบรรพกาล",
   "type": "pill",
   "icon": "pill",
   "effect": "foundation",
   "amount": 4,
   "duration": 0,
   "toxicity": 15,
   "cooldown": 12,
   "desc": "เสริมฐานราก สูงสุด 100 • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "mountain",
   "sourceText": "สำรวจธีมภูผา หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_mountain_3": 2
   }
  },
  "pill_detox_0": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 18,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_detox_0",
   "name": "ยาขับพิษ",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ สามัญ",
   "grade": 0,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_detox_1": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 22,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "pill_detox_1",
   "name": "โอสถชำระเลือด",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ ชั้นดี",
   "grade": 1,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {}
  },
  "pill_detox_2": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 26,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "pill_detox_2",
   "name": "โอสถบัวหยกขจัดพิษ",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ ปราณ",
   "grade": 2,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_2": 1
   }
  },
  "pill_detox_3": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 30,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "pill_detox_3",
   "name": "โอสถบงกชเก้าสี",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ วิญญาณ",
   "grade": 3,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_3": 1
   }
  },
  "pill_detox_4": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 34,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "pill_detox_4",
   "name": "โอสถเซียนชำระมลทิน",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ เซียน",
   "grade": 4,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_4": 2
   }
  },
  "pill_detox_5": {
   "stats": {},
   "cost": {
    "herb": 20,
    "stone": 4
   },
   "work": 12,
   "price": 38,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "pill_detox_5",
   "name": "หยาดทิพย์บริสุทธิ์เทวะ",
   "type": "pill",
   "icon": "pill",
   "effect": "detox",
   "amount": 25,
   "duration": 0,
   "toxicity": 0,
   "cooldown": 5,
   "desc": "ลดพิษโอสถสะสม • เกรดประจำชื่อ เทวะ",
   "grade": 5,
   "theme": "rain",
   "sourceText": "สำรวจธีมธาราฝน หรือค้นสูตรปรุง",
   "ingredients": {
    "mat_rain_4": 2
   }
  },
  "mount_bamboo_0": {
   "stats": {
    "travel": 0.4
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_bamboo_0",
   "name": "กวางไผ่สงบ",
   "type": "mount",
   "icon": "deer",
   "grade": 0,
   "theme": "bamboo",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {},
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมไผ่หมอก และผลิตจากสูตร"
  },
  "mount_bamboo_1": {
   "stats": {
    "travel": 0.4
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_bamboo_1",
   "name": "กวางใบไผ่วายุ",
   "type": "mount",
   "icon": "deer",
   "grade": 1,
   "theme": "bamboo",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {},
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมไผ่หมอก และผลิตจากสูตร"
  },
  "mount_bamboo_2": {
   "stats": {
    "travel": 0.4
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_bamboo_2",
   "name": "กวางไผ่หยกวิญญาณ",
   "type": "mount",
   "icon": "deer",
   "grade": 2,
   "theme": "bamboo",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {
    "mat_bamboo_2": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมไผ่หมอก และผลิตจากสูตร"
  },
  "mount_moon_0": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_moon_0",
   "name": "กระเรียนแสงจันทร์",
   "type": "mount",
   "icon": "bird",
   "grade": 0,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {},
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_moon_1": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_moon_1",
   "name": "กระเรียนเงาจันทร์",
   "type": "mount",
   "icon": "bird",
   "grade": 1,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {},
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_moon_2": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_moon_2",
   "name": "กระเรียนจันทร์เย็น",
   "type": "mount",
   "icon": "bird",
   "grade": 2,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {
    "mat_moon_2": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_moon_3": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_moon_3",
   "name": "กระเรียนเหมันต์จันทรา",
   "type": "mount",
   "icon": "bird",
   "grade": 3,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {
    "mat_moon_3": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_moon_4": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_moon_4",
   "name": "กระเรียนจันทราดับดารา",
   "type": "mount",
   "icon": "bird",
   "grade": 4,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {
    "mat_moon_4": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_moon_5": {
   "stats": {
    "travel": 0.65
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "mount_moon_5",
   "name": "กระเรียนจันทราเทวะ",
   "type": "mount",
   "icon": "bird",
   "grade": 5,
   "theme": "moon",
   "seats": 1,
   "upkeep": {
    "food": 0.25
   },
   "ingredients": {
    "mat_moon_5": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมจันทรา และผลิตจากสูตร"
  },
  "mount_mountain_0": {
   "stats": {
    "travel": 0.25
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_mountain_0",
   "name": "เต่าศิลาดำ",
   "type": "mount",
   "icon": "turtle",
   "grade": 0,
   "theme": "mountain",
   "seats": 3,
   "upkeep": {
    "food": 0.75
   },
   "ingredients": {},
   "desc": "รองรับ 3 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมภูผา และผลิตจากสูตร"
  },
  "mount_mountain_1": {
   "stats": {
    "travel": 0.25
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_mountain_1",
   "name": "เต่าผาหนัก",
   "type": "mount",
   "icon": "turtle",
   "grade": 1,
   "theme": "mountain",
   "seats": 3,
   "upkeep": {
    "food": 0.75
   },
   "ingredients": {},
   "desc": "รองรับ 3 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมภูผา และผลิตจากสูตร"
  },
  "mount_mountain_2": {
   "stats": {
    "travel": 0.25
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_mountain_2",
   "name": "เต่าศิลาปราณ",
   "type": "mount",
   "icon": "turtle",
   "grade": 2,
   "theme": "mountain",
   "seats": 3,
   "upkeep": {
    "food": 0.75
   },
   "ingredients": {
    "mat_mountain_2": 2
   },
   "desc": "รองรับ 3 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมภูผา และผลิตจากสูตร"
  },
  "mount_mountain_3": {
   "stats": {
    "travel": 0.25
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_mountain_3",
   "name": "เต่าภูผาวัชระ",
   "type": "mount",
   "icon": "turtle",
   "grade": 3,
   "theme": "mountain",
   "seats": 3,
   "upkeep": {
    "food": 0.75
   },
   "ingredients": {
    "mat_mountain_3": 2
   },
   "desc": "รองรับ 3 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมภูผา และผลิตจากสูตร"
  },
  "mount_dragon_2": {
   "stats": {
    "travel": 0.55
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_dragon_2",
   "name": "อสรพิษเขี้ยวมังกร",
   "type": "mount",
   "icon": "dragon",
   "grade": 2,
   "theme": "dragon",
   "seats": 2,
   "upkeep": {
    "food": 0.5
   },
   "ingredients": {
    "mat_dragon_2": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมมังกร และผลิตจากสูตร"
  },
  "mount_dragon_3": {
   "stats": {
    "travel": 0.55
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_dragon_3",
   "name": "อสรพิษเกล็ดมังกร",
   "type": "mount",
   "icon": "dragon",
   "grade": 3,
   "theme": "dragon",
   "seats": 2,
   "upkeep": {
    "food": 0.5
   },
   "ingredients": {
    "mat_dragon_3": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมมังกร และผลิตจากสูตร"
  },
  "mount_dragon_4": {
   "stats": {
    "travel": 0.55
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_dragon_4",
   "name": "อสรพิษมังกรผงาด",
   "type": "mount",
   "icon": "dragon",
   "grade": 4,
   "theme": "dragon",
   "seats": 2,
   "upkeep": {
    "food": 0.5
   },
   "ingredients": {
    "mat_dragon_4": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมมังกร และผลิตจากสูตร"
  },
  "mount_dragon_5": {
   "stats": {
    "travel": 0.55
   },
   "cost": {
    "food": 35,
    "herb": 12,
    "beast": 1
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "mount_dragon_5",
   "name": "อสรพิษมังกรต้นกำเนิด",
   "type": "mount",
   "icon": "dragon",
   "grade": 5,
   "theme": "dragon",
   "seats": 2,
   "upkeep": {
    "food": 0.5
   },
   "ingredients": {
    "mat_dragon_5": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยเสบียง",
   "sourceText": "สำรวจธีมมังกร และผลิตจากสูตร"
  },
  "mount_thunder_2": {
   "stats": {
    "travel": 0.8
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_thunder_2",
   "name": "กระบี่บินประกายอัสนี",
   "type": "mount",
   "icon": "flying",
   "grade": 2,
   "theme": "thunder",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_thunder_2": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมอัสนี และผลิตจากสูตร"
  },
  "mount_thunder_3": {
   "stats": {
    "travel": 0.8
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_thunder_3",
   "name": "กระบี่บินอัสนีพิโรธ",
   "type": "mount",
   "icon": "flying",
   "grade": 3,
   "theme": "thunder",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_thunder_3": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมอัสนี และผลิตจากสูตร"
  },
  "mount_thunder_4": {
   "stats": {
    "travel": 0.8
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_thunder_4",
   "name": "กระบี่บินอัสนีทลายฟ้า",
   "type": "mount",
   "icon": "flying",
   "grade": 4,
   "theme": "thunder",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_thunder_4": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมอัสนี และผลิตจากสูตร"
  },
  "mount_thunder_5": {
   "stats": {
    "travel": 0.8
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "mount_thunder_5",
   "name": "กระบี่บินทัณฑ์เทวะ",
   "type": "mount",
   "icon": "flying",
   "grade": 5,
   "theme": "thunder",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_thunder_5": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมอัสนี และผลิตจากสูตร"
  },
  "mount_rain_1": {
   "stats": {
    "travel": 0.5
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_rain_1",
   "name": "พัดบินหยาดฝน",
   "type": "mount",
   "icon": "fan",
   "grade": 1,
   "theme": "rain",
   "seats": 2,
   "upkeep": {
    "stone": 0.3
   },
   "ingredients": {},
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมธาราฝน และผลิตจากสูตร"
  },
  "mount_rain_2": {
   "stats": {
    "travel": 0.5
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_rain_2",
   "name": "พัดบินธาราหยก",
   "type": "mount",
   "icon": "fan",
   "grade": 2,
   "theme": "rain",
   "seats": 2,
   "upkeep": {
    "stone": 0.3
   },
   "ingredients": {
    "mat_rain_2": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมธาราฝน และผลิตจากสูตร"
  },
  "mount_rain_3": {
   "stats": {
    "travel": 0.5
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_rain_3",
   "name": "พัดบินพิรุณคืนชีพ",
   "type": "mount",
   "icon": "fan",
   "grade": 3,
   "theme": "rain",
   "seats": 2,
   "upkeep": {
    "stone": 0.3
   },
   "ingredients": {
    "mat_rain_3": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมธาราฝน และผลิตจากสูตร"
  },
  "mount_rain_4": {
   "stats": {
    "travel": 0.5
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_rain_4",
   "name": "พัดบินสมุทรเมตตา",
   "type": "mount",
   "icon": "fan",
   "grade": 4,
   "theme": "rain",
   "seats": 2,
   "upkeep": {
    "stone": 0.3
   },
   "ingredients": {
    "mat_rain_4": 2
   },
   "desc": "รองรับ 2 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมธาราฝน และผลิตจากสูตร"
  },
  "mount_ancestor_1": {
   "stats": {
    "travel": 0.3
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 0,
   "shop": true,
   "id": "mount_ancestor_1",
   "name": "เรือเมฆประทีปเก่า",
   "type": "mount",
   "icon": "boat",
   "grade": 1,
   "theme": "ancestor",
   "seats": 4,
   "upkeep": {
    "stone": 0.6
   },
   "ingredients": {},
   "desc": "รองรับ 4 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมบรรพชน และผลิตจากสูตร"
  },
  "mount_ancestor_2": {
   "stats": {
    "travel": 0.3
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 1,
   "shop": true,
   "id": "mount_ancestor_2",
   "name": "เรือเมฆวิญญาณบรรพชน",
   "type": "mount",
   "icon": "boat",
   "grade": 2,
   "theme": "ancestor",
   "seats": 4,
   "upkeep": {
    "stone": 0.6
   },
   "ingredients": {
    "mat_ancestor_2": 2
   },
   "desc": "รองรับ 4 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมบรรพชน และผลิตจากสูตร"
  },
  "mount_ancestor_3": {
   "stats": {
    "travel": 0.3
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_ancestor_3",
   "name": "เรือเมฆบรรพชนพิทักษ์",
   "type": "mount",
   "icon": "boat",
   "grade": 3,
   "theme": "ancestor",
   "seats": 4,
   "upkeep": {
    "stone": 0.6
   },
   "ingredients": {
    "mat_ancestor_3": 2
   },
   "desc": "รองรับ 4 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมบรรพชน และผลิตจากสูตร"
  },
  "mount_ancestor_4": {
   "stats": {
    "travel": 0.3
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_ancestor_4",
   "name": "เรือเมฆบรรพชนหมื่นปี",
   "type": "mount",
   "icon": "boat",
   "grade": 4,
   "theme": "ancestor",
   "seats": 4,
   "upkeep": {
    "stone": 0.6
   },
   "ingredients": {
    "mat_ancestor_4": 2
   },
   "desc": "รองรับ 4 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมบรรพชน และผลิตจากสูตร"
  },
  "mount_void_3": {
   "stats": {
    "travel": 0.9
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 2,
   "shop": false,
   "id": "mount_void_3",
   "name": "วงจักรบินดาราเร้นเงา",
   "type": "mount",
   "icon": "flying",
   "grade": 3,
   "theme": "void",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_void_3": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมดาราเร้น และผลิตจากสูตร"
  },
  "mount_void_4": {
   "stats": {
    "travel": 0.9
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 3,
   "shop": false,
   "id": "mount_void_4",
   "name": "วงจักรบินดาราผ่านภพ",
   "type": "mount",
   "icon": "flying",
   "grade": 4,
   "theme": "void",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_void_4": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมดาราเร้น และผลิตจากสูตร"
  },
  "mount_void_5": {
   "stats": {
    "travel": 0.9
   },
   "cost": {
    "ore": 16,
    "stone": 18,
    "coin": 8
   },
   "work": 25,
   "price": 55,
   "paths": [],
   "craftable": true,
   "minRealm": 4,
   "shop": false,
   "id": "mount_void_5",
   "name": "วงจักรบินดาราต้นกำเนิด",
   "type": "mount",
   "icon": "flying",
   "grade": 5,
   "theme": "void",
   "seats": 1,
   "upkeep": {
    "stone": 0.15
   },
   "ingredients": {
    "mat_void_5": 2
   },
   "desc": "รองรับ 1 คน • ลดเฉพาะเวลาเดินทาง ไม่เพิ่มของรางวัลหรือโอกาสชนะ • บำรุงด้วยหินปราณ",
   "sourceText": "สำรวจธีมดาราเร้น และผลิตจากสูตร"
  }
 },
 "arts": {
  "sword_pierce": {
   "id": "sword_pierce",
   "name": "กระบี่เจาะเมฆ",
   "paths": [
    "qi"
   ],
   "realm": 0,
   "effect": "pierce",
   "amount": 0.45,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "sword",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "saber_wave": {
   "id": "saber_wave",
   "name": "ดาบคลื่นโลหิต",
   "paths": [
    "qi",
    "body"
   ],
   "realm": 0,
   "effect": "atk",
   "amount": 0.2,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "saber",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "fan_heal": {
   "id": "fan_heal",
   "name": "พัดคืนชีพจร",
   "paths": [
    "qi",
    "faith"
   ],
   "realm": 0,
   "effect": "heal",
   "amount": 0.25,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "fan",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "spear_wall": {
   "id": "spear_wall",
   "name": "ทวนกำแพงเหล็ก",
   "paths": [
    "body",
    "qi"
   ],
   "realm": 0,
   "effect": "guard",
   "amount": 0.2,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "spear",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "bow_hunt": {
   "id": "bow_hunt",
   "name": "ศรตามรอยอสูร",
   "paths": [
    "qi",
    "body"
   ],
   "realm": 0,
   "effect": "loot",
   "amount": 0.2,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "bow",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "fist_break": {
   "id": "fist_break",
   "name": "หมัดสะเทือนภูผา",
   "paths": [
    "body"
   ],
   "realm": 0,
   "effect": "atk",
   "amount": 0.22,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "fist",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "staff_prayer": {
   "id": "staff_prayer",
   "name": "คทาประทีปคุ้มภัย",
   "paths": [
    "faith"
   ],
   "realm": 0,
   "effect": "guard",
   "amount": 0.2,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "weapon": "staff",
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "breath_heal": {
   "id": "breath_heal",
   "name": "ปราณประสานบาดแผล",
   "paths": [
    "qi"
   ],
   "realm": 1,
   "effect": "heal",
   "amount": 0.2,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "manuals": [
    "mist",
    "jade"
   ],
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "mercy_light": {
   "id": "mercy_light",
   "name": "แสงธาราเมตตา",
   "paths": [
    "faith"
   ],
   "realm": 1,
   "effect": "heal",
   "amount": 0.3,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "manuals": [
    "mercy",
    "harvest"
   ],
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "iron_stance": {
   "id": "iron_stance",
   "name": "ยืนหยัดดุจภูผา",
   "paths": [
    "body"
   ],
   "realm": 1,
   "effect": "guard",
   "amount": 0.25,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "manuals": [
    "mountain",
    "river"
   ],
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "sun_burst": {
   "id": "sun_burst",
   "name": "เปลวอาทิตย์ระเบิด",
   "paths": [
    "qi"
   ],
   "realm": 1,
   "effect": "burst",
   "amount": 0.35,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "manuals": [
    "flame",
    "thunder"
   ],
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "divine_bind": {
   "id": "divine_bind",
   "name": "ตรึงเงาเทวะ",
   "paths": [
    "faith"
   ],
   "realm": 1,
   "effect": "control",
   "amount": 1,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "manuals": [
    "shelter",
    "ancestor"
   ],
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "flight_control": {
   "id": "flight_control",
   "name": "เคล็ดควบคุมอาวุธบิน",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 0,
   "effect": "flight",
   "amount": 0.25,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "beast_control": {
   "id": "beast_control",
   "name": "สื่อจิตสัตว์วิเศษ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 0,
   "effect": "beastTravel",
   "amount": 0.25,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "refine_iron": {
   "id": "refine_iron",
   "name": "เคล็ดหลอมร้อยชั้น",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 0,
   "effect": "smith",
   "amount": 15,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "refine_pill": {
   "id": "refine_pill",
   "name": "เคล็ดแยกสรรโอสถ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 0,
   "effect": "alchemy",
   "amount": 15,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "gather": {
   "id": "gather",
   "name": "สัมผัสขุมทรัพย์",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 0,
   "effect": "loot",
   "amount": 0.15,
   "cost": {
    "stone": 6,
    "coin": 5
   },
   "days": 4,
   "tier": 0,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "quiet_mind": {
   "id": "quiet_mind",
   "name": "สงบจิตสู่มรรคา",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "realm": 1,
   "effect": "train",
   "amount": 0.12,
   "cost": {
    "stone": 11,
    "coin": 8
   },
   "days": 6,
   "tier": 1,
   "source": "public",
   "origin": "ตำรับพื้นฐานที่ผู้ก่อตั้งสำนักรวบรวมไว้ ใช้ร่วมกับการบ่มเพาะและงานประจำ",
   "description": "วิชาใช้งานพื้นฐาน เรียนแล้วต้องจัดเข้าชุดจึงออกผล",
   "requirements": {},
   "foundation": 0,
   "family": "รากฐาน"
  },
  "lore_sword_0": {
   "id": "lore_sword_0",
   "name": "กระบี่ปลายฝน",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 0,
   "tier": 0,
   "effect": "pierce",
   "amount": 0.2,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "manuals": [
    "thunder"
   ],
   "source": "manual",
   "family": "กระบี่",
   "origin": "กำเนิดจากรอยกระบี่บนหน้าผา ผู้ศึกษาค้นช่องว่างระหว่างการเคลื่อนไหวก่อนรวมจิตกับคมอาวุธ ไม่ใช่แค่เพิ่มแรงฟัน แต่เลือกว่าจะเจาะ รับ หรือสลายแนวศัตรู",
   "description": "ระดับพื้นฐาน · กระบี่ปลายฝน แปลงหลักของกระบี่ให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_1": {
   "id": "lore_sword_1",
   "name": "กระบี่เงาไผ่",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 0,
   "tier": 1,
   "effect": "counter",
   "amount": 0.1606,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "กระบี่",
   "origin": "กำเนิดจากรอยกระบี่บนหน้าผา ผู้ศึกษาค้นช่องว่างระหว่างการเคลื่อนไหวก่อนรวมจิตกับคมอาวุธ ไม่ใช่แค่เพิ่มแรงฟัน แต่เลือกว่าจะเจาะ รับ หรือสลายแนวศัตรู",
   "description": "ระดับชั้นดี · กระบี่เงาไผ่ แปลงหลักของกระบี่ให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_2": {
   "id": "lore_sword_2",
   "name": "กระบี่หกชีพจร",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 3,
   "tier": 4,
   "effect": "pierce",
   "amount": 0.65,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "กระบี่",
   "origin": "กระบี่หกชีพจรไม่จำเป็นต้องมีเหล็กเป็นคม แต่การฝึกขั้นแรกยังอาศัยกระบี่จริงจัดจังหวะนิ้วทั้งหก ในโลกเซียนเส้นปราณส่งคมเจาะช่องเกราะ ไม่ใช่ยิงกระสุนไร้ขอบเขต ผู้สอนเตือนว่าการมีหกเส้นไม่ได้แปลว่าควรปล่อยทั้งหมดพร้อมกัน เมื่อจัดเข้าชุดและถือกระบี่ได้ตรงเงื่อนไข วิชาจะลดเกราะเป้าหมายตามความชำนาญ",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • กระบี่หกชีพจร • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_3": {
   "id": "lore_sword_3",
   "name": "กระบี่ไท้เก๊ก",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 3,
   "tier": 4,
   "effect": "guard",
   "amount": 0.24,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "manuals": [
    "thunder",
    "mist",
    "river"
   ],
   "source": "manual",
   "family": "กระบี่",
   "origin": "กระบี่ไท้เก๊กมองการเคลื่อนไหวเป็นวงที่รับแรงได้หลายด้าน ผู้บ่มเพาะนำหลักนั้นไปสร้างระนาบปราณช่วยแนวหน้า มันลดความเสียหายและเปลี่ยนผู้ใช้เป็นผู้รับแรงแทนสหาย แต่ไม่ได้หยุดเวลา ไม่คืนผู้ตาย และไม่ทำให้เลือดไร้ขีดจำกัด สำนักที่มีผู้รักษาอยู่ข้างหลังจึงใช้ประโยชน์ได้ดีกว่าผู้หวังชนะด้วยกระบี่คนเดียว",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • กระบี่ไท้เก๊ก • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_4": {
   "id": "lore_sword_4",
   "name": "เก้ากระบี่เดียวดาย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 5,
   "tier": 5,
   "effect": "counter",
   "amount": 0.7,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "กระบี่",
   "origin": "ตำนานเก้ากระบี่เดียวดายในโลกนี้เริ่มจากผู้ที่แพ้หลายรูปแบบจนมองเห็นข้อจำกัดของท่าตายตัว หลังเข้าสู่มรรคาเซียน เขาเลิกอ่านเพียงแขนและคม แต่สังเกตการส่งปราณจากแก่นจิตสู่สนามรบ กระบวนท่าจึงขยายเป็นการสวนกลับเมื่อศัตรูเปิดเจตนา วิชานี้ไม่ได้ทำให้ผู้มีขอบเขตต่ำล้มเทพทันที: แรงสวนยังขึ้นกับพลังผู้ใช้ เกราะเป้าหมาย ความชำนาญ และพลังวิชาที่เหลือ",
   "description": "วิชาตำนานที่ยกระดับสู่โลกเซียน • เก้ากระบี่เดียวดาย • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_5": {
   "id": "lore_sword_5",
   "name": "หมื่นกระบี่คืนสู่หนึ่ง",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 4,
   "tier": 4,
   "effect": "cleave",
   "amount": 0.3408,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "กระบี่",
   "origin": "กำเนิดจากรอยกระบี่บนหน้าผา ผู้ศึกษาค้นช่องว่างระหว่างการเคลื่อนไหวก่อนรวมจิตกับคมอาวุธ ไม่ใช่แค่เพิ่มแรงฟัน แต่เลือกว่าจะเจาะ รับ หรือสลายแนวศัตรู",
   "description": "ระดับเซียน · หมื่นกระบี่คืนสู่หนึ่ง แปลงหลักของกระบี่ให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_6": {
   "id": "lore_sword_6",
   "name": "กระบี่ตัดวัฏสงสาร",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 4,
   "tier": 5,
   "effect": "weaken",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "manuals": [
    "thunder"
   ],
   "source": "manual",
   "family": "กระบี่",
   "origin": "กำเนิดจากรอยกระบี่บนหน้าผา ผู้ศึกษาค้นช่องว่างระหว่างการเคลื่อนไหวก่อนรวมจิตกับคมอาวุธ ไม่ใช่แค่เพิ่มแรงฟัน แต่เลือกว่าจะเจาะ รับ หรือสลายแนวศัตรู",
   "description": "ระดับตำนาน · กระบี่ตัดวัฏสงสาร แปลงหลักของกระบี่ให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_sword_7": {
   "id": "lore_sword_7",
   "name": "หนึ่งกระบี่ดับหมื่นสวรรค์",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "sword",
   "realm": 5,
   "tier": 5,
   "effect": "burst",
   "amount": 0.7260000000000001,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "กระบี่",
   "origin": "กำเนิดจากรอยกระบี่บนหน้าผา ผู้ศึกษาค้นช่องว่างระหว่างการเคลื่อนไหวก่อนรวมจิตกับคมอาวุธ ไม่ใช่แค่เพิ่มแรงฟัน แต่เลือกว่าจะเจาะ รับ หรือสลายแนวศัตรู",
   "description": "ระดับตำนาน · หนึ่งกระบี่ดับหมื่นสวรรค์ แปลงหลักของกระบี่ให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_saber_0": {
   "id": "lore_saber_0",
   "name": "ดาบตัดต้นอ้อ",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 0,
   "tier": 0,
   "effect": "atk",
   "amount": 0.16,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "manuals": [
    "asura"
   ],
   "source": "manual",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับพื้นฐาน · ดาบตัดต้นอ้อ แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_1": {
   "id": "lore_saber_1",
   "name": "ดาบสามคลื่น",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 0,
   "tier": 1,
   "effect": "burst",
   "amount": 0.3212,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับชั้นดี · ดาบสามคลื่น แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_2": {
   "id": "lore_saber_2",
   "name": "ดาบห้าเสือทลายค่าย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 1,
   "tier": 1,
   "effect": "cleave",
   "amount": 0.1752,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับชั้นดี · ดาบห้าเสือทลายค่าย แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_3": {
   "id": "lore_saber_3",
   "name": "ดาบจันทราโลหิต",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 2,
   "tier": 2,
   "effect": "drain",
   "amount": 0.13440000000000002,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "spirit": 48
   },
   "foundation": 49,
   "manuals": [
    "asura"
   ],
   "source": "manual",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับล้ำลึก · ดาบจันทราโลหิต แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_4": {
   "id": "lore_saber_4",
   "name": "ดาบแสวงพ่าย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 3,
   "tier": 3,
   "effect": "counter",
   "amount": 0.2618,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับวิญญาณ · ดาบแสวงพ่าย แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_5": {
   "id": "lore_saber_5",
   "name": "ดาบฟ้าผ่าสังหารเทพ",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 4,
   "tier": 4,
   "effect": "burst",
   "amount": 0.6248,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับเซียน · ดาบฟ้าผ่าสังหารเทพ แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_6": {
   "id": "lore_saber_6",
   "name": "ดาบโลหิตบรรพกาล",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 4,
   "tier": 5,
   "effect": "drain",
   "amount": 0.23100000000000004,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "manuals": [
    "asura"
   ],
   "source": "manual",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับตำนาน · ดาบโลหิตบรรพกาล แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_saber_7": {
   "id": "lore_saber_7",
   "name": "ดาบผ่าสวรรค์นิรันดร์",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "saber",
   "realm": 5,
   "tier": 5,
   "effect": "cleave",
   "amount": 0.396,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ดาบ",
   "origin": "ทหารชายแดนเคยใช้ดาบคุ้มกันเกวียน ก่อนผู้บ่มเพาะนำจังหวะเดียวกันไปขยายเป็นคลื่นปราณ จึงมีทั้งดาบที่ปะทะตรง ๆ และดาบที่คืนชีวิตจากแรงศัตรู",
   "description": "ระดับตำนาน · ดาบผ่าสวรรค์นิรันดร์ แปลงหลักของดาบให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_palm_0": {
   "id": "lore_palm_0",
   "name": "ฝ่ามือผลักเมฆ",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "atk",
   "amount": 0.16,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "body": 30
   },
   "foundation": 35,
   "manuals": [
    "mountain"
   ],
   "source": "manual",
   "family": "ฝ่ามือ",
   "origin": "สายนี้อ่านแรงจากเท้าผ่านกระดูกไปสู่ฝ่ามือ เมื่อขยายถึงระดับเซียน แรงสะท้อนกลายเป็นตราประทับบนอากาศ ผู้มีกายาแข็งแรงจึงใช้รับแรงย้อนกลับได้ดี",
   "description": "ระดับพื้นฐาน · ฝ่ามือผลักเมฆ แปลงหลักของฝ่ามือให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_1": {
   "id": "lore_palm_1",
   "name": "หมัดเจ็ดทำร้าย",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "burst",
   "amount": 0.3212,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "body": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ฝ่ามือ",
   "origin": "สายนี้อ่านแรงจากเท้าผ่านกระดูกไปสู่ฝ่ามือ เมื่อขยายถึงระดับเซียน แรงสะท้อนกลายเป็นตราประทับบนอากาศ ผู้มีกายาแข็งแรงจึงใช้รับแรงย้อนกลับได้ดี",
   "description": "ระดับชั้นดี · หมัดเจ็ดทำร้าย แปลงหลักของฝ่ามือให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_2": {
   "id": "lore_palm_2",
   "name": "ฝ่ามือมังกรสิบแปด",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "burst",
   "amount": 0.9,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "body": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ฝ่ามือ",
   "origin": "ฝ่ามือมังกรสิบแปดในระดับเซียนไม่ได้เรียกมังกรจริงทุกครั้งที่ยกมือ แต่สร้างคลื่นกำลังตามจังหวะโลหิตและฐานกาย คลื่นแรกทำลายจังหวะตั้งรับ ส่วนคลื่นต่อมาบังคับให้ศัตรูถอย ผู้ฝึกยังต้องมีมานาเพื่อใช้พลังเปิดฉาก เมื่อพลังหมด วิชาจะไม่สร้างแรงระเบิดเพิ่มเอง กายาที่พักพร้อมกับผู้ใช้ปราณที่ฐานมั่นคงจึงเรียนหลักเดียวกันได้โดยไม่ต้องเปลี่ยนมรรคา",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • ฝ่ามือมังกรสิบแปด • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_3": {
   "id": "lore_palm_3",
   "name": "เคลื่อนย้ายจักรวาล",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 4,
   "effect": "counter",
   "amount": 0.6,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "body": 66
   },
   "foundation": 63,
   "manuals": [
    "mountain",
    "river",
    "flame"
   ],
   "source": "manual",
   "family": "ฝ่ามือ",
   "origin": "เคลื่อนย้ายจักรวาลเริ่มจากการมองว่าแรงศัตรูไม่ควรหยุดทั้งหมดในกายตน ระดับเซียนเปลี่ยนคำว่าจักรวาลเป็นสนามการไหลของปราณ ผู้ใช้รับเพียงส่วนที่ตนควบคุมได้แล้วส่งแรงสวนกลับ วิชาไม่ขโมยขอบเขตฝ่ายตรงข้าม: ผู้ที่ฐานรากไม่พอจะยังถูกแรงหลักทำร้าย การเตรียมเกราะและผู้รักษาจึงมีเหตุผลเสมอ",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • เคลื่อนย้ายจักรวาล • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_4": {
   "id": "lore_palm_4",
   "name": "ฝ่ามือกำสรดวิญญาณสลาย",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 4,
   "effect": "weaken",
   "amount": 0.3,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "body": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ฝ่ามือ",
   "origin": "ฝ่ามือกำสรดวิญญาณสลายเกิดจากคนที่พบว่าความเศร้าทำให้จังหวะของตนไม่เหมือนตำรับเดิม เมื่อผ่านการบ่มเพาะ เขาแปลงประสบการณ์เป็นคลื่นที่รบกวนการรวมแรงของศัตรู แทนบังคับให้ศิษย์ต้องเสียคนรักเพื่อเรียน สำนักใช้บันทึกความเข้าใจแทน ภาวะจิตและความชำนาญยังสำคัญ ผลหลักคือทำให้กำลังโจมตีศัตรูลดลงเมื่อจ่ายพลังได้",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • ฝ่ามือกำสรดวิญญาณสลาย • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_5": {
   "id": "lore_palm_5",
   "name": "หมัดหกวิถีเวียนเกิด",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "cleave",
   "amount": 0.3408,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "body": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ฝ่ามือ",
   "origin": "สายนี้อ่านแรงจากเท้าผ่านกระดูกไปสู่ฝ่ามือ เมื่อขยายถึงระดับเซียน แรงสะท้อนกลายเป็นตราประทับบนอากาศ ผู้มีกายาแข็งแรงจึงใช้รับแรงย้อนกลับได้ดี",
   "description": "ระดับเซียน · หมัดหกวิถีเวียนเกิด แปลงหลักของฝ่ามือให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_6": {
   "id": "lore_palm_6",
   "name": "ตราประทับขุนเขาทะเล",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "shield",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "body": 75
   },
   "foundation": 70,
   "manuals": [
    "mountain"
   ],
   "source": "manual",
   "family": "ฝ่ามือ",
   "origin": "สายนี้อ่านแรงจากเท้าผ่านกระดูกไปสู่ฝ่ามือ เมื่อขยายถึงระดับเซียน แรงสะท้อนกลายเป็นตราประทับบนอากาศ ผู้มีกายาแข็งแรงจึงใช้รับแรงย้อนกลับได้ดี",
   "description": "ระดับตำนาน · ตราประทับขุนเขาทะเล แปลงหลักของฝ่ามือให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_palm_7": {
   "id": "lore_palm_7",
   "name": "หมัดราชันสยบเก้าฟ้า",
   "paths": [
    "body",
    "qi"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "burst",
   "amount": 0.7260000000000001,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "body": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ฝ่ามือ",
   "origin": "สายนี้อ่านแรงจากเท้าผ่านกระดูกไปสู่ฝ่ามือ เมื่อขยายถึงระดับเซียน แรงสะท้อนกลายเป็นตราประทับบนอากาศ ผู้มีกายาแข็งแรงจึงใช้รับแรงย้อนกลับได้ดี",
   "description": "ระดับตำนาน · หมัดราชันสยบเก้าฟ้า แปลงหลักของฝ่ามือให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_water_0": {
   "id": "lore_water_0",
   "name": "ลมหายใจธารใส",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "train",
   "amount": 0.08,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "manuals": [
    "mist"
   ],
   "source": "manual",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับพื้นฐาน · ลมหายใจธารใส แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_1": {
   "id": "lore_water_1",
   "name": "เข็มประสานชีพจร",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "heal",
   "amount": 0.2628,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับชั้นดี · เข็มประสานชีพจร แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_2": {
   "id": "lore_water_2",
   "name": "เย็นจิตเก้าจังหวะ",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "mana",
   "amount": 0.1752,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับชั้นดี · เย็นจิตเก้าจังหวะ แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_3": {
   "id": "lore_water_3",
   "name": "ม่านหมอกจันทร์เย็น",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 2,
   "tier": 2,
   "effect": "shield",
   "amount": 0.1536,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "spirit": 48
   },
   "foundation": 49,
   "manuals": [
    "mist"
   ],
   "source": "manual",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับล้ำลึก · ม่านหมอกจันทร์เย็น แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_4": {
   "id": "lore_water_4",
   "name": "จิตกระบี่หิมะไร้เสียง",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "weaken",
   "amount": 0.19039999999999999,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับวิญญาณ · จิตกระบี่หิมะไร้เสียง แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_5": {
   "id": "lore_water_5",
   "name": "เก้าหยินคืนวิญญาณ",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "regen",
   "amount": 0.0994,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ธารา",
   "origin": "เก้าหยินคืนวิญญาณใช้ความเย็นทำให้ความร้อนที่เสียสมดุลกลับอยู่ในจังหวะ ในระดับเซียนลายปราณไหลรอบกายเพื่อฟื้นเลือดระหว่างต่อสู้ แม้ชื่อกล่าวถึงวิญญาณ วิชานี้ช่วยได้เฉพาะผู้ยังมีชีวิต ไม่มีการชุบชีวิตจากหลุมศพ ผู้ใช้ต้องเก็บมานาพอและไม่ควรพึ่งการฟื้นจนละเลยแผนถอนกำลัง",
   "description": "ระดับเซียน · เก้าหยินคืนวิญญาณ แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_6": {
   "id": "lore_water_6",
   "name": "ธาราสรรพชีวิต",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "heal",
   "amount": 0.594,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "manuals": [
    "mist",
    "jade"
   ],
   "source": "manual",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับตำนาน · ธาราสรรพชีวิต แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_water_7": {
   "id": "lore_water_7",
   "name": "สายน้ำย้อนกาล",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "regen",
   "amount": 0.11550000000000002,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ธารา",
   "origin": "ผู้รักษาที่ธารสามสายจดบันทึกว่าปราณใสช่วยคงจังหวะหัวใจ การรักษาไม่ได้คืนผู้ตาย แต่ช่วยผู้ยังมีลมหายใจผ่านรอบที่อันตรายและประคองพลังไว้ใช้ต่อ",
   "description": "ระดับตำนาน · สายน้ำย้อนกาล แปลงหลักของธาราให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fire_0": {
   "id": "lore_fire_0",
   "name": "ประกายตะวัน",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "atk",
   "amount": 0.16,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "manuals": [
    "flame"
   ],
   "source": "manual",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับพื้นฐาน · ประกายตะวัน แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_1": {
   "id": "lore_fire_1",
   "name": "สามลมหายใจอุ่นจิต",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "train",
   "amount": 0.1168,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับชั้นดี · สามลมหายใจอุ่นจิต แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_2": {
   "id": "lore_fire_2",
   "name": "ฝ่ามือเพลิงเมฆ",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "burst",
   "amount": 0.3212,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับชั้นดี · ฝ่ามือเพลิงเมฆ แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_3": {
   "id": "lore_fire_3",
   "name": "เก้าหยางพิทักษ์กาย",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 4,
   "effect": "regen",
   "amount": 0.13,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "manuals": [
    "flame"
   ],
   "source": "manual",
   "family": "อัคคี",
   "origin": "เก้าหยางพิทักษ์กายเป็นบทใช้งานที่สกัดจากการควบคุมไฟ ไม่ใช่คัมภีร์บ่มเพาะใหม่ทั้งเส้นทาง ความร้อนเก้าจังหวะประคองเลือดผู้ใช้ระหว่างรบ มันใช้พลังทุกครั้งที่ฟื้นและหยุดเมื่อไม่มีพลังเหลือ จึงไม่ทดแทนการพักฟื้นหลังสงคราม ผู้ฝึกคัมภีร์อาทิตย์เก้าดวงที่มีฐานรากพอจะเข้าใจความต่างระหว่างไฟรักษากับไฟทำลายได้ดีที่สุด",
   "description": "วิชาเซียนที่ยกระดับสู่โลกเซียน • เก้าหยางพิทักษ์กาย • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_4": {
   "id": "lore_fire_4",
   "name": "เพลิงบัวเก้าสี",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "cleave",
   "amount": 0.28559999999999997,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับวิญญาณ · เพลิงบัวเก้าสี แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_5": {
   "id": "lore_fire_5",
   "name": "ตราประทับสุริยัน",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "burst",
   "amount": 0.6248,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับเซียน · ตราประทับสุริยัน แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_6": {
   "id": "lore_fire_6",
   "name": "เพลิงชำระชะตา",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "weaken",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "manuals": [
    "flame"
   ],
   "source": "manual",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับตำนาน · เพลิงชำระชะตา แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_fire_7": {
   "id": "lore_fire_7",
   "name": "สุริยันเก้าดวงเผาฟ้า",
   "paths": [
    "qi"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "cleave",
   "amount": 0.396,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "อัคคี",
   "origin": "ตำรับอัคคีแยกไฟหล่อเลี้ยงออกจากไฟทำลาย ความเร็วสูงต้องแลกด้วยความมั่นคง ผู้ฝึกจึงต้องรักษาฐานรากก่อนควบคุมเปลวปราณหลายชั้น",
   "description": "ระดับตำนาน · สุริยันเก้าดวงเผาฟ้า แปลงหลักของอัคคีให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "ruin",
    "peak"
   ]
  },
  "lore_body_0": {
   "id": "lore_body_0",
   "name": "ยืนหลักหิน",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "armor",
   "amount": 0.14,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "body": 30
   },
   "foundation": 35,
   "manuals": [
    "river"
   ],
   "source": "manual",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับพื้นฐาน · ยืนหลักหิน แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_1": {
   "id": "lore_body_1",
   "name": "ลมหายใจไขกระดูก",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "hp",
   "amount": 0.146,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "body": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับชั้นดี · ลมหายใจไขกระดูก แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_2": {
   "id": "lore_body_2",
   "name": "ร้อยเอ็นประสานกาย",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "regen",
   "amount": 0.051100000000000007,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "body": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับชั้นดี · ร้อยเอ็นประสานกาย แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_3": {
   "id": "lore_body_3",
   "name": "กายาเกราะทอง",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 2,
   "tier": 2,
   "effect": "guard",
   "amount": 0.17279999999999998,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "body": 48
   },
   "foundation": 49,
   "manuals": [
    "river"
   ],
   "source": "manual",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับล้ำลึก · กายาเกราะทอง แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_4": {
   "id": "lore_body_4",
   "name": "มหาวัชระค้ำแดน",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "shield",
   "amount": 0.19039999999999999,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "body": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับวิญญาณ · มหาวัชระค้ำแดน แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_5": {
   "id": "lore_body_5",
   "name": "โลหิตมังกรฟื้นชีพ",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "drain",
   "amount": 0.1988,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "body": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับเซียน · โลหิตมังกรฟื้นชีพ แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_6": {
   "id": "lore_body_6",
   "name": "กายาบรรพชนไร้พ่าย",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "counter",
   "amount": 0.36300000000000004,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "body": 75
   },
   "foundation": 70,
   "manuals": [
    "river",
    "mountain",
    "beast"
   ],
   "source": "manual",
   "family": "กายา",
   "origin": "ช่างหินและนักล่าสังเกตว่าร่างกายปรับตัวระหว่างพัก ไม่ใช่ระหว่างรับความเจ็บ วิชาเหล่านี้เปลี่ยนความทนทานเป็นบทบาทแนวหน้า แต่ยังต้องกินและพักตามกฎกายา",
   "description": "ระดับตำนาน · กายาบรรพชนไร้พ่าย แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_body_7": {
   "id": "lore_body_7",
   "name": "กายาไม่ดับหมื่นกัป",
   "paths": [
    "body"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "regen",
   "amount": 0.11550000000000002,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "body": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "กายา",
   "origin": "กายาไม่ดับหมื่นกัปเป็นเป้าหมายของตำรับ ไม่ใช่สถานะอมตะที่ได้รับเมื่อเรียนจบ ผู้ใช้ฟื้นเลือดระหว่างรบได้มากแต่ต้องจ่ายมานา และการบาดเจ็บหลังรบยังคงอยู่ อายุขัยเพิ่มจากการทะลวงกายาตามกฎมรรคาเท่านั้น การรักษารุ่นศิษย์และตั้งผู้สืบทอดจึงยังจำเป็นแม้สำนักได้ม้วนตำนานนี้",
   "description": "ระดับตำนาน · กายาไม่ดับหมื่นกัป แปลงหลักของกายาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "dragon_nest"
   ]
  },
  "lore_faith_0": {
   "id": "lore_faith_0",
   "name": "ประทีปหน้าประตู",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "faith",
   "amount": 0.18,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "heart": 30
   },
   "foundation": 35,
   "manuals": [
    "shelter"
   ],
   "source": "manual",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับพื้นฐาน · ประทีปหน้าประตู แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_1": {
   "id": "lore_faith_1",
   "name": "บทสวดปลอบขวัญ",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "heal",
   "amount": 0.2628,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "heart": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับชั้นดี · บทสวดปลอบขวัญ แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_2": {
   "id": "lore_faith_2",
   "name": "ตราร่มโพธิ์",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "guard",
   "amount": 0.1314,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "heart": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับชั้นดี · ตราร่มโพธิ์ แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_3": {
   "id": "lore_faith_3",
   "name": "คำสัตย์กำแพงเทพ",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 2,
   "tier": 2,
   "effect": "shield",
   "amount": 0.1536,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "heart": 48
   },
   "foundation": 49,
   "manuals": [
    "shelter",
    "mercy",
    "ancestor"
   ],
   "source": "manual",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับล้ำลึก · คำสัตย์กำแพงเทพ แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_4": {
   "id": "lore_faith_4",
   "name": "แสงเมตตาร้อยชุมชน",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "heal",
   "amount": 0.42839999999999995,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "heart": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับวิญญาณ · แสงเมตตาร้อยชุมชน แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_5": {
   "id": "lore_faith_5",
   "name": "คทาเทพสยบมาร",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "control",
   "amount": 1,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "heart": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับเซียน · คทาเทพสยบมาร แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_6": {
   "id": "lore_faith_6",
   "name": "แดนพรบรรพชน",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "regen",
   "amount": 0.11550000000000002,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "heart": 75
   },
   "foundation": 70,
   "manuals": [
    "shelter"
   ],
   "source": "manual",
   "family": "เทวะ",
   "origin": "ชาวบ้านมอบชื่อให้ผู้รักษาคำมั่น ศรัทธาที่เกิดจากการช่วยเหลือจึงหล่อเลี้ยงตราเทพได้ ขณะรบวิชานี้ใช้ทั้งพลังวิชาและศรัทธาจริง ไม่มีคำอธิษฐานจากความว่างเปล่า",
   "description": "ระดับตำนาน · แดนพรบรรพชน แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_faith_7": {
   "id": "lore_faith_7",
   "name": "มหาปณิธานคุ้มหมื่นชีวิต",
   "paths": [
    "faith"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "shield",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "heart": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "เทวะ",
   "origin": "มหาปณิธานคุ้มหมื่นชีวิตเรียกชื่อจากภาระ มิใช่จำนวนผู้ติดตามที่ไม่มีตัวตน ผู้ใช้สร้างม่านเริ่มรบด้วยศรัทธาที่สะสมมาจากชุมชนจริง ถ้าผิดคำมั่นแล้วศรัทธาขาด ม่านย่อมเกิดไม่ได้ ผู้เรียนต้องมีจิตศรัทธาและฐานรากสูง รวมทั้งรักษาความไว้ใจของผู้ให้พลังไว้หลังการประลองด้วย",
   "description": "ระดับตำนาน · มหาปณิธานคุ้มหมื่นชีวิต แปลงหลักของเทวะให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "temple",
    "forest"
   ]
  },
  "lore_hunt_0": {
   "id": "lore_hunt_0",
   "name": "ศรขนนกไผ่",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 0,
   "tier": 0,
   "effect": "loot",
   "amount": 0.12,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "manuals": [
    "beast"
   ],
   "source": "manual",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับพื้นฐาน · ศรขนนกไผ่ แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_1": {
   "id": "lore_hunt_1",
   "name": "ศรตามรอยลม",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 0,
   "tier": 1,
   "effect": "pierce",
   "amount": 0.292,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับชั้นดี · ศรตามรอยลม แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_2": {
   "id": "lore_hunt_2",
   "name": "ศรดาราจับเงา",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 1,
   "tier": 1,
   "effect": "weaken",
   "amount": 0.1168,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับชั้นดี · ศรดาราจับเงา แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_3": {
   "id": "lore_hunt_3",
   "name": "ศรแปดทิศ",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 2,
   "tier": 2,
   "effect": "cleave",
   "amount": 0.2304,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "spirit": 48
   },
   "foundation": 49,
   "manuals": [
    "beast"
   ],
   "source": "manual",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับล้ำลึก · ศรแปดทิศ แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_4": {
   "id": "lore_hunt_4",
   "name": "ศรทะลวงเกล็ดมังกร",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 3,
   "tier": 3,
   "effect": "pierce",
   "amount": 0.476,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับวิญญาณ · ศรทะลวงเกล็ดมังกร แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_5": {
   "id": "lore_hunt_5",
   "name": "ศรตกตะวัน",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 4,
   "tier": 4,
   "effect": "burst",
   "amount": 0.6248,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับเซียน · ศรตกตะวัน แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_6": {
   "id": "lore_hunt_6",
   "name": "ศรปิดชะตาอสูร",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 4,
   "tier": 5,
   "effect": "control",
   "amount": 1,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "manuals": [
    "beast"
   ],
   "source": "manual",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับตำนาน · ศรปิดชะตาอสูร แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_hunt_7": {
   "id": "lore_hunt_7",
   "name": "ศรทลายประตูสวรรค์",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "bow",
   "realm": 5,
   "tier": 5,
   "effect": "burst",
   "amount": 0.7260000000000001,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ล่า",
   "origin": "นายพรานเรียนรู้รอยเท้าก่อนแรงธนู สายนี้ใช้การสังเกตทั้งเก็บวัตถุดิบและเลือกเป้าหมาย ยิ่งรู้ธรรมชาติอสูรยิ่งประหยัดเสบียง แต่ไม่ลดความยากของสถานที่โดยอัตโนมัติ",
   "description": "ระดับตำนาน · ศรทลายประตูสวรรค์ แปลงหลักของล่าให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "forest",
    "dragon_nest"
   ]
  },
  "lore_fan_0": {
   "id": "lore_fan_0",
   "name": "พัดเรียกไอฝน",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 0,
   "tier": 0,
   "effect": "heal",
   "amount": 0.18,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "heart": 30
   },
   "foundation": 35,
   "manuals": [
    "mercy"
   ],
   "source": "manual",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับพื้นฐาน · พัดเรียกไอฝน แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_1": {
   "id": "lore_fan_1",
   "name": "พัดเก็บเสียง",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 0,
   "tier": 1,
   "effect": "weaken",
   "amount": 0.1168,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "heart": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับชั้นดี · พัดเก็บเสียง แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_2": {
   "id": "lore_fan_2",
   "name": "พัดเจ็ดบุปผา",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 1,
   "tier": 1,
   "effect": "heal",
   "amount": 0.2628,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "heart": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับชั้นดี · พัดเจ็ดบุปผา แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_3": {
   "id": "lore_fan_3",
   "name": "พัดหมอกย้ายเงา",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 2,
   "tier": 2,
   "effect": "guard",
   "amount": 0.17279999999999998,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "heart": 48
   },
   "foundation": 49,
   "manuals": [
    "mercy"
   ],
   "source": "manual",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับล้ำลึก · พัดหมอกย้ายเงา แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_4": {
   "id": "lore_fan_4",
   "name": "พัดเบญจธาตุ",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 3,
   "tier": 3,
   "effect": "shield",
   "amount": 0.19039999999999999,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "heart": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับวิญญาณ · พัดเบญจธาตุ แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_5": {
   "id": "lore_fan_5",
   "name": "พัดสรรพชีวิต",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 4,
   "tier": 4,
   "effect": "regen",
   "amount": 0.0994,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "heart": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับเซียน · พัดสรรพชีวิต แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_6": {
   "id": "lore_fan_6",
   "name": "พัดลบคำสาป",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 4,
   "tier": 5,
   "effect": "weaken",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "heart": 75
   },
   "foundation": 70,
   "manuals": [
    "mercy"
   ],
   "source": "manual",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับตำนาน · พัดลบคำสาป แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_fan_7": {
   "id": "lore_fan_7",
   "name": "พัดบัวเทวะไร้ขอบ",
   "paths": [
    "qi",
    "faith"
   ],
   "weapon": "fan",
   "realm": 5,
   "tier": 5,
   "effect": "heal",
   "amount": 0.594,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "heart": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "พัด",
   "origin": "แพทย์พเนจรเขียนแผนชีพจรลงบนซี่พัด เมื่อมีปราณหรือศรัทธา เขาใช้พัดกระจายสนามรักษา จึงเหมาะกับผู้ที่ยอมสละหนึ่งจังหวะโจมตีเพื่อช่วยสหาย",
   "description": "ระดับตำนาน · พัดบัวเทวะไร้ขอบ แปลงหลักของพัดให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "moon_cave",
    "temple"
   ]
  },
  "lore_shadow_0": {
   "id": "lore_shadow_0",
   "name": "มีดตามรอย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 0,
   "tier": 0,
   "effect": "pierce",
   "amount": 0.2,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับพื้นฐาน · มีดตามรอย แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_1": {
   "id": "lore_shadow_1",
   "name": "ก้าวคลื่นหลิงปอ",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "travel",
   "amount": 0.146,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "ก้าวคลื่นหลิงปออ่านรอยคลื่นเป็นช่องว่างสำหรับเท้า เมื่อขยายถึงระดับผู้บ่มเพาะ มันลดเวลาเดินทางรวมกับรองเท้าและพาหนะ แต่คณะเดินทางยังถูกสมาชิกที่ช้าที่สุดจำกัด เวลาทำงานในพื้นที่สำรวจไม่หายไป และกระบวนท่านี้ไม่ได้เพิ่มคุณภาพสมบัติหรือทำให้ผู้ใช้ชนะผู้พิทักษ์โดยไม่มีศักยภาพ",
   "description": "ระดับชั้นดี · ก้าวคลื่นหลิงปอ แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_2": {
   "id": "lore_shadow_2",
   "name": "มีดบินลี้น้อย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 4,
   "tier": 5,
   "effect": "burst",
   "amount": 1.05,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "มีดบินลี้น้อยมีชื่อจากคำมั่นว่าคมหนึ่งควรมีเหตุผลหนึ่ง ในระดับเทพเซียน ความแม่นกลายเป็นการกักปราณไว้จนถึงจังหวะเปิดฉาก ใช้กับมีดสั้นที่สวมจริงแล้วส่งแรงระเบิดตอนต้นรบ ความอันตรายมาจากผู้ใช้ที่รู้เวลาปล่อย ไม่ใช่อาวุธที่ชนะทุกขอบเขต ท่าที่คมมากแต่ขาดพลังวิชาก็ยังมีข้อจำกัด",
   "description": "วิชาตำนานที่ยกระดับสู่โลกเซียน • มีดบินลี้น้อย • พลังขยายตามขอบเขตของผู้ใช้ มิใช่กำลังของจอมยุทธ์สามัญ",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_3": {
   "id": "lore_shadow_3",
   "name": "มีดเงาไร้รอย",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 2,
   "tier": 2,
   "effect": "counter",
   "amount": 0.2112,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "spirit": 48
   },
   "foundation": 49,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับล้ำลึก · มีดเงาไร้รอย แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_4": {
   "id": "lore_shadow_4",
   "name": "นิ้วหนึ่งหยั่งรู้",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 3,
   "tier": 3,
   "effect": "control",
   "amount": 1,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับวิญญาณ · นิ้วหนึ่งหยั่งรู้ แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_5": {
   "id": "lore_shadow_5",
   "name": "ผนึกคืนวิญญาณ",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 4,
   "tier": 4,
   "effect": "drain",
   "amount": 0.1988,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับเซียน · ผนึกคืนวิญญาณ แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_6": {
   "id": "lore_shadow_6",
   "name": "ก้าวดาราข้ามแดน",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "travel",
   "amount": 0.33000000000000007,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับตำนาน · ก้าวดาราข้ามแดน แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_shadow_7": {
   "id": "lore_shadow_7",
   "name": "หนึ่งมีดตัดเหตุผล",
   "paths": [
    "qi",
    "body"
   ],
   "weapon": "dagger",
   "realm": 5,
   "tier": 5,
   "effect": "pierce",
   "amount": 0.6600000000000001,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "เร้นเงา",
   "origin": "วิชาของผู้เดินทางเดียวดายเน้นถึงจุดหมายและจุดอ่อนมากกว่าประลองแรง ก้าวข้ามแดนช่วยลดวันเดินทาง ส่วนผลสำรวจยังขึ้นกับผู้ร่วมทางและการเตรียมตัว",
   "description": "ระดับตำนาน · หนึ่งมีดตัดเหตุผล แปลงหลักของเร้นเงาให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_craft_0": {
   "id": "lore_craft_0",
   "name": "ฟังเสียงเตาหลอม",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "smith",
   "amount": 8,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "craft": 30
   },
   "foundation": 35,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับพื้นฐาน · ฟังเสียงเตาหลอม แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_1": {
   "id": "lore_craft_1",
   "name": "แยกกลิ่นรากยา",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "alchemy",
   "amount": 11.68,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "craft": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับชั้นดี · แยกกลิ่นรากยา แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_2": {
   "id": "lore_craft_2",
   "name": "ตราคุมอุณหภูมิ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "craft",
   "amount": 0.146,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "craft": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับชั้นดี · ตราคุมอุณหภูมิ แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_3": {
   "id": "lore_craft_3",
   "name": "ประสานโลหะสามชั้น",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 2,
   "tier": 2,
   "effect": "smith",
   "amount": 15.36,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "craft": 48
   },
   "foundation": 49,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับล้ำลึก · ประสานโลหะสามชั้น แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_4": {
   "id": "lore_craft_4",
   "name": "โอสถเก้าชีพจร",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "alchemy",
   "amount": 19.04,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "craft": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับวิญญาณ · โอสถเก้าชีพจร แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_5": {
   "id": "lore_craft_5",
   "name": "หัตถ์สร้างสมบัติวิญญาณ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "smith",
   "amount": 22.72,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "craft": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับเซียน · หัตถ์สร้างสมบัติวิญญาณ แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_6": {
   "id": "lore_craft_6",
   "name": "อักษรโอสถฟ้าดิน",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "alchemy",
   "amount": 26.400000000000002,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "craft": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "หอช่างเก็บทั้งสูตรสำเร็จและบันทึกความผิดพลาด นักปรุงยาที่เข้าใจเวลาไม่เผาสมุนไพรเสียเปล่า วิชานี้เพิ่มฝีมือหรือความเร็ว แต่ไม่สร้างวัตถุดิบฟรีและไม่แทนสูตรที่ยังไม่มี",
   "description": "ระดับตำนาน · อักษรโอสถฟ้าดิน แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_craft_7": {
   "id": "lore_craft_7",
   "name": "เตาหลอมหมื่นสรรพสิ่ง",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "craft",
   "amount": 0.33000000000000007,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "craft": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "ช่าง",
   "origin": "เตาหลอมหมื่นสรรพสิ่งรวมบันทึกช่างหลายรุ่น ผู้เรียนเห็นว่าวัตถุที่ดูต่างกันมีจังหวะร้อนและเย็นที่เทียบกันได้ เมื่อจัดเข้าชุดจึงเพิ่มความเร็วงานผลิตอย่างมาก แต่ไม่เสกแก่นอสูร ไม่สร้างสูตรใหม่ฟรี และไม่หลอมของที่สำนักไม่มีวัสดุ วิชาตำนานจะมีความหมายเมื่อเศรษฐกิจรองรับเตาของมัน",
   "description": "ระดับตำนาน · เตาหลอมหมื่นสรรพสิ่ง แปลงหลักของช่างให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "mine",
    "ruin"
   ]
  },
  "lore_spirit_0": {
   "id": "lore_spirit_0",
   "name": "นั่งฟังลมหุบเขา",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 0,
   "effect": "train",
   "amount": 0.08,
   "cost": {
    "stone": 8,
    "coin": 6
   },
   "days": 5,
   "requirements": {
    "spirit": 30
   },
   "foundation": 35,
   "source": "scroll",
   "family": "จิต",
   "origin": "นักบ่มเพาะต่างมรรคาแลกวิธีประคองจิตโดยไม่เปลี่ยนคัมภีร์ หลักนี้เรียนร่วมกันได้ แต่การใช้พร้อมกันมีเพียงสามช่อง จึงต้องเลือกการเติบโต การเดินทาง หรือการรบ",
   "description": "ระดับพื้นฐาน · นั่งฟังลมหุบเขา แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_1": {
   "id": "lore_spirit_1",
   "name": "ควบกระบี่เหนือเมฆ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 0,
   "tier": 1,
   "effect": "flight",
   "amount": 0.2336,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "จิต",
   "origin": "นักบ่มเพาะต่างมรรคาแลกวิธีประคองจิตโดยไม่เปลี่ยนคัมภีร์ หลักนี้เรียนร่วมกันได้ แต่การใช้พร้อมกันมีเพียงสามช่อง จึงต้องเลือกการเติบโต การเดินทาง หรือการรบ",
   "description": "ระดับชั้นดี · ควบกระบี่เหนือเมฆ แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_2": {
   "id": "lore_spirit_2",
   "name": "สัญญาสหายอสูร",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 1,
   "tier": 1,
   "effect": "beastTravel",
   "amount": 0.2336,
   "cost": {
    "stone": 15,
    "coin": 15
   },
   "days": 8,
   "requirements": {
    "spirit": 39
   },
   "foundation": 42,
   "source": "scroll",
   "family": "จิต",
   "origin": "นักบ่มเพาะต่างมรรคาแลกวิธีประคองจิตโดยไม่เปลี่ยนคัมภีร์ หลักนี้เรียนร่วมกันได้ แต่การใช้พร้อมกันมีเพียงสามช่อง จึงต้องเลือกการเติบโต การเดินทาง หรือการรบ",
   "description": "ระดับชั้นดี · สัญญาสหายอสูร แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_3": {
   "id": "lore_spirit_3",
   "name": "ปิดด่านกระจกจิต",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 2,
   "tier": 2,
   "effect": "train",
   "amount": 0.1536,
   "cost": {
    "stone": 36,
    "coin": 42
   },
   "days": 17,
   "requirements": {
    "spirit": 48
   },
   "foundation": 49,
   "source": "scroll",
   "family": "จิต",
   "origin": "นักบ่มเพาะต่างมรรคาแลกวิธีประคองจิตโดยไม่เปลี่ยนคัมภีร์ หลักนี้เรียนร่วมกันได้ แต่การใช้พร้อมกันมีเพียงสามช่อง จึงต้องเลือกการเติบโต การเดินทาง หรือการรบ",
   "description": "ระดับล้ำลึก · ปิดด่านกระจกจิต แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_4": {
   "id": "lore_spirit_4",
   "name": "เนตรอ่านชีพจร",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 3,
   "tier": 3,
   "effect": "pierce",
   "amount": 0.476,
   "cost": {
    "stone": 71,
    "coin": 87
   },
   "days": 32,
   "requirements": {
    "spirit": 57
   },
   "foundation": 56,
   "source": "scroll",
   "family": "จิต",
   "origin": "นักบ่มเพาะต่างมรรคาแลกวิธีประคองจิตโดยไม่เปลี่ยนคัมภีร์ หลักนี้เรียนร่วมกันได้ แต่การใช้พร้อมกันมีเพียงสามช่อง จึงต้องเลือกการเติบโต การเดินทาง หรือการรบ",
   "description": "ระดับวิญญาณ · เนตรอ่านชีพจร แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_5": {
   "id": "lore_spirit_5",
   "name": "หนึ่งความคิดผนึกฟ้า",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 4,
   "effect": "control",
   "amount": 1,
   "cost": {
    "stone": 120,
    "coin": 150
   },
   "days": 53,
   "requirements": {
    "spirit": 66
   },
   "foundation": 63,
   "source": "scroll",
   "family": "จิต",
   "origin": "หนึ่งความคิดผนึกฟ้าเป็นบทแยกเจตนาฝ่ายตรงข้ามออกจากการเคลื่อนไหวชั่วคราว ผู้บ่มเพาะไม่จำเป็นต้องรู้ทุกความคิด เพียงจับจังหวะที่รวมกำลังเข้าตำแหน่งเดียวได้ ในการรบอัตโนมัติผลคือการตรึงเป็นช่วงและใช้มานา ผู้บ่มเพาะเทพต้องใช้ศรัทธาควบคู่ มันจึงเหมาะกับคณะซึ่งมีคนพร้อมโจมตีในจังหวะที่เปิดขึ้น",
   "description": "ระดับเซียน · หนึ่งความคิดผนึกฟ้า แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_6": {
   "id": "lore_spirit_6",
   "name": "เทพสังหารผนึกจิต",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 4,
   "tier": 5,
   "effect": "weaken",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "จิต",
   "origin": "เทพสังหารผนึกจิตเตือนว่าความทรงจำของการสูญเสียเป็นสิ่งที่ควรอ่าน ไม่ใช่อาวุธที่สร้างจากความโหดเหี้ยม ผู้ใช้ส่งความเข้าใจไปทำให้กำลังศัตรูไม่รวมตัวเหมือนเดิม วิชาของโลกนี้ไม่มีเงื่อนไขสังหารชาวบ้านเพื่อเพิ่มพลัง ผลที่ใช้จริงคือลดกำลังโจมตีเป้าหมาย โดยยังต้องจ่ายพลังวิชาและผ่านเงื่อนไขเรียน",
   "description": "ระดับตำนาน · เทพสังหารผนึกจิต แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  },
  "lore_spirit_7": {
   "id": "lore_spirit_7",
   "name": "แสวงมารข้ามวัฏ",
   "paths": [
    "qi",
    "body",
    "faith"
   ],
   "weapon": null,
   "realm": 5,
   "tier": 5,
   "effect": "train",
   "amount": 0.264,
   "cost": {
    "stone": 183,
    "coin": 231
   },
   "days": 80,
   "requirements": {
    "spirit": 75
   },
   "foundation": 70,
   "source": "scroll",
   "family": "จิต",
   "origin": "แสวงมารข้ามวัฏเป็นบทคุมจิตที่ถามว่าผู้ฝึกต้องการสิ่งใดก่อนเริ่มวันใหม่ แทนสร้างมรรคาที่สี่ มันใช้ร่วมกับสามมรรคาปัจจุบันเพื่อเพิ่มประสิทธิภาพฝึก ผู้เล่นยังต้องใช้หนึ่งในสามช่องวิชาและเตรียมทรัพยากรของมรรคาตามเดิม เร็วขึ้นไม่ได้ยกเลิกฐานราก ความเข้าใจ ความเครียด หรือภาระของชุมชน",
   "description": "ระดับตำนาน · แสวงมารข้ามวัฏ แปลงหลักของจิตให้ทำงานในขอบเขตผู้บ่มเพาะ ต้องเตรียมฐานรากและเลือกเข้าชุดก่อนใช้งาน",
   "sites": [
    "peak",
    "star_vault",
    "moon_cave"
   ]
  }
 },
 "artTiers": [
  "พื้นฐาน",
  "ชั้นดี",
  "ล้ำลึก",
  "วิญญาณ",
  "เซียน",
  "ตำนาน"
 ],
 "legends": {
  "wuji": {
   "id": "wuji",
   "name": "เตียบ่อกี้",
   "path": "qi",
   "manual": "flame",
   "affinity": "fire",
   "traits": [
    "yang",
    "heaven",
    "fair"
   ],
   "stats": {
    "spirit": 98,
    "body": 91,
    "heart": 98,
    "craft": 82,
    "admin": 86
   },
   "signatures": [
    "lore_fire_3",
    "lore_palm_3"
   ],
   "background": "ผู้เคยใช้ความร้อนในชีพจรประคองผู้บาดเจ็บบนยอดหิมะ เขาไม่ยอมรับสำนักที่ให้คนอ่อนแอเป็นเพียงเบี้ย และยังต้องฝึกเก้าหยางให้ถึงขอบเขตเซียนด้วยตนเอง",
   "value": "health",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "yangguo": {
   "id": "yangguo",
   "name": "เอี้ยก้วย",
   "path": "body",
   "manual": "river",
   "affinity": "water",
   "traits": [
    "destiny",
    "insightGift",
    "swordGift"
   ],
   "stats": {
    "spirit": 94,
    "body": 98,
    "heart": 89,
    "craft": 65,
    "admin": 72
   },
   "signatures": [
    "lore_sword_4",
    "lore_palm_4"
   ],
   "background": "นักกระบี่ผู้เรียนจากความสูญเสียและความเงียบ เขาเก็บปลอกกระบี่หนักไว้เป็นคำเตือนว่าอาวุธไม่ควรหนักกว่าเหตุผลที่ชักออกมา",
   "value": "freedom",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "chong": {
   "id": "chong",
   "name": "หลิงหูชง",
   "path": "qi",
   "manual": "thunder",
   "affinity": "metal",
   "traits": [
    "swordGift",
    "insightGift"
   ],
   "stats": {
    "spirit": 99,
    "body": 88,
    "heart": 84,
    "craft": 63,
    "admin": 70
   },
   "signatures": [
    "lore_sword_4",
    "lore_shadow_1"
   ],
   "background": "กระบี่ของเขาเปลี่ยนตามคู่ต่อสู้และไม่ยึดรูปแบบ แต่การดื่มเพื่อหนีความทุกข์ทำให้เขาต้องเรียนรู้วินัยใหม่ หากสำนักให้พื้นที่ เขาจะถ่ายทอดสิ่งที่ตนเข้าใจ",
   "value": "freedom",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "xunhuan": {
   "id": "xunhuan",
   "name": "ลี้คิมฮวง",
   "path": "qi",
   "manual": "mist",
   "affinity": "water",
   "traits": [
    "destiny",
    "insightGift"
   ],
   "stats": {
    "spirit": 98,
    "body": 85,
    "heart": 95,
    "craft": 77,
    "admin": 81
   },
   "signatures": [
    "lore_shadow_2",
    "lore_shadow_4"
   ],
   "background": "นักมีดบินที่ให้คำมั่นเพียงครั้งเดียว เขารู้ว่าการชนะคนหนึ่งไม่จำเป็นต้องฆ่าคนนั้น จึงถ่ายทอดศิลปะเลือกจังหวะมากกว่าความโหดเหี้ยม",
   "value": "mercy",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "qiaofeng": {
   "id": "qiaofeng",
   "name": "เฉียวฟง",
   "path": "body",
   "manual": "mountain",
   "affinity": "earth",
   "traits": [
    "dragon",
    "fair"
   ],
   "stats": {
    "spirit": 86,
    "body": 100,
    "heart": 96,
    "craft": 63,
    "admin": 90
   },
   "signatures": [
    "lore_palm_2",
    "lore_body_4"
   ],
   "background": "ผู้แบกชื่อเสียงสองฝั่งภูเขาและเลือกปกป้องคนธรรมดา เขามองตำแหน่งเป็นภาระ ไม่ใช่รางวัล เมื่อสำนักขาดเสบียงเขายอมอยู่แนวหน้าแต่ไม่ยอมให้ศิษย์อดตาย",
   "value": "food",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "duanyu": {
   "id": "duanyu",
   "name": "ต้วนอี้",
   "path": "qi",
   "manual": "mist",
   "affinity": "water",
   "traits": [
    "heaven",
    "insightGift"
   ],
   "stats": {
    "spirit": 100,
    "body": 78,
    "heart": 93,
    "craft": 72,
    "admin": 80
   },
   "signatures": [
    "lore_sword_2",
    "lore_shadow_1"
   ],
   "background": "ผู้เคยหนีการประลองกลับพบเส้นปราณที่เขียนคมกระบี่บนอากาศ เขาต้องเรียนการควบคุมก่อนพลังดิบ มิฉะนั้นวิชาอันสูงส่งก็เป็นเพียงแสงที่ไร้ทิศ",
   "value": "mercy",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "xiaolong": {
   "id": "xiaolong",
   "name": "เซียวเหล่งนึ่ง",
   "path": "qi",
   "manual": "mist",
   "affinity": "water",
   "traits": [
    "yin",
    "swordGift"
   ],
   "stats": {
    "spirit": 99,
    "body": 90,
    "heart": 88,
    "craft": 75,
    "admin": 73
   },
   "signatures": [
    "lore_water_4",
    "lore_sword_3"
   ],
   "background": "ผู้ศึกษากระบี่กลางสุสานอันเงียบสงบ เธอไม่ไว้ใจคำสรรเสริญ แต่จดจำผู้ที่รักษาสัญญาเล็ก ๆ ท่ากระบี่เย็นช่วยคุมสนามมากกว่าส่งเสียงเอาชนะ",
   "value": "quiet",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "zhang": {
   "id": "zhang",
   "name": "เตียซำฮง",
   "path": "body",
   "manual": "river",
   "affinity": "water",
   "traits": [
    "yinyang",
    "mentorGift",
    "fair"
   ],
   "stats": {
    "spirit": 96,
    "body": 96,
    "heart": 100,
    "craft": 86,
    "admin": 98
   },
   "signatures": [
    "lore_sword_3",
    "lore_palm_3"
   ],
   "background": "ผู้อาวุโสที่มองวงกลมในสายน้ำ เขาแสวงหาสำนักที่ยอมให้ผู้สอนมีเวลาสอน เพราะตำรับที่สูญไปพร้อมคนหนึ่งมีค่ากว่าหินปราณทั้งคลัง",
   "value": "teaching",
   "realm": 2,
   "age": 62,
   "weight": 3
  },
  "ximen": {
   "id": "ximen",
   "name": "ไซมึ้งชวยเสาะ",
   "path": "qi",
   "manual": "thunder",
   "affinity": "metal",
   "traits": [
    "swordGift",
    "rootGift"
   ],
   "stats": {
    "spirit": 100,
    "body": 92,
    "heart": 72,
    "craft": 62,
    "admin": 78
   },
   "signatures": [
    "lore_sword_6",
    "lore_sword_7"
   ],
   "background": "ผู้วัดชีวิตด้วยความแม่นของหนึ่งกระบี่ เขาไม่ชอบคำสั่งที่ไร้เหตุผลและต้องมีฐานรากสูงก่อนปล่อยคมกระบี่ที่ตัดเจตนาฝ่ายตรงข้าม",
   "value": "quiet",
   "realm": 1,
   "age": 24,
   "weight": 1
  },
  "luxiao": {
   "id": "luxiao",
   "name": "เล็กเซียวหงส์",
   "path": "qi",
   "manual": "mist",
   "affinity": "water",
   "traits": [
    "destiny",
    "diplomat"
   ],
   "stats": {
    "spirit": 96,
    "body": 87,
    "heart": 94,
    "craft": 83,
    "admin": 95
   },
   "signatures": [
    "lore_shadow_4",
    "lore_shadow_6"
   ],
   "background": "นักเดินทางผู้ชอบแก้ปัญหาที่ไม่มีผู้ใดยอมพูด เขาอ่านร่องรอยคนและข่าวลือ แต่ข้อมูลยังต้องมีแหล่งและอายุ ไม่อาจรู้ความลับทุกสำนักได้ทันที",
   "value": "freedom",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "chuliu": {
   "id": "chuliu",
   "name": "ชอลิ้วเฮียง",
   "path": "qi",
   "manual": "jade",
   "affinity": "wood",
   "traits": [
    "destiny",
    "diplomat"
   ],
   "stats": {
    "spirit": 98,
    "body": 88,
    "heart": 93,
    "craft": 80,
    "admin": 89
   },
   "signatures": [
    "lore_shadow_1",
    "lore_shadow_6"
   ],
   "background": "ผู้เดินทางตามกลิ่นชาและเสียงลม เขาตามหาทรัพย์ที่เจ้าของไม่เข้าใจ แต่ยืนยันว่าการยึดของชุมชนยากจนไม่ใช่การผจญภัยที่น่าภูมิใจ",
   "value": "mercy",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "wanglin": {
   "id": "wanglin",
   "name": "หวังหลิน",
   "path": "qi",
   "manual": "thunder",
   "affinity": "metal",
   "traits": [
    "heaven",
    "insightGift"
   ],
   "stats": {
    "spirit": 100,
    "body": 92,
    "heart": 87,
    "craft": 79,
    "admin": 88
   },
   "signatures": [
    "lore_spirit_6",
    "lore_sword_6"
   ],
   "background": "นักบ่มเพาะที่ถือป้ายไม้เก่าติดตัว เขาจดจำชื่อผู้ตายและไม่เชื่อว่าการลืมคือการหลุดพ้น หากพบหอรำลึกที่มีเรื่องจริง เขาจะยอมวางระยะห่างลง",
   "value": "memory",
   "realm": 1,
   "age": 24,
   "weight": 1
  },
  "baixiao": {
   "id": "baixiao",
   "name": "ไป๋เสี่ยวฉุน",
   "path": "body",
   "manual": "river",
   "affinity": "water",
   "traits": [
    "destiny",
    "alchemist"
   ],
   "stats": {
    "spirit": 94,
    "body": 98,
    "heart": 91,
    "craft": 100,
    "admin": 82
   },
   "signatures": [
    "lore_body_7",
    "lore_craft_6"
   ],
   "background": "ผู้ประกาศว่าอายุยืนสำคัญที่สุด แต่กลับวิ่งกลับไปช่วยสหายในวันที่ควรหนี ความกลัวทำให้เขาเตรียมโอสถละเอียดและถามเรื่องความปลอดภัยทุกครั้ง",
   "value": "health",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "suming": {
   "id": "suming",
   "name": "ซูหมิง",
   "path": "qi",
   "manual": "mist",
   "affinity": "water",
   "traits": [
    "yin",
    "insightGift"
   ],
   "stats": {
    "spirit": 99,
    "body": 90,
    "heart": 92,
    "craft": 78,
    "admin": 81
   },
   "signatures": [
    "lore_spirit_7",
    "lore_water_7"
   ],
   "background": "ชายที่วาดรอยเท้าลงบนกระดาษว่าง เขาตามหาว่าเรื่องใดคือความทรงจำ เรื่องใดคือคำบอกเล่า และจะเชื่อสำนักที่กล้าจารึกความพ่ายแพ้ของตน",
   "value": "memory",
   "realm": 1,
   "age": 24,
   "weight": 1
  },
  "menghao": {
   "id": "menghao",
   "name": "เมิ่งฮ่าว",
   "path": "qi",
   "manual": "jade",
   "affinity": "wood",
   "traits": [
    "destiny",
    "organizer"
   ],
   "stats": {
    "spirit": 99,
    "body": 91,
    "heart": 93,
    "craft": 96,
    "admin": 100
   },
   "signatures": [
    "lore_craft_7",
    "lore_spirit_5"
   ],
   "background": "นักบ่มเพาะผู้เก็บใบสัญญาไว้ในถุงผ้า เขามองหาการแลกเปลี่ยนที่ทั้งสองฝ่ายยืนได้ด้วยตนเอง วิชาสร้างสมบัติของเขายังต้องใช้สูตรและวัสดุจริง",
   "value": "trade",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "hanli": {
   "id": "hanli",
   "name": "หานลี่",
   "path": "qi",
   "manual": "jade",
   "affinity": "wood",
   "traits": [
    "alchemist",
    "insightGift"
   ],
   "stats": {
    "spirit": 94,
    "body": 89,
    "heart": 92,
    "craft": 100,
    "admin": 95
   },
   "signatures": [
    "lore_craft_4",
    "lore_water_6"
   ],
   "background": "ผู้ไม่อ้างว่าตนเป็นยอดอัจฉริยะ แต่เตรียมทางถอยก่อนเข้าถ้ำเสมอ เขาจะรับหน้าที่ปรุงยาหากสำนักไม่ใช้ความประมาทเป็นเครื่องพิสูจน์ความกล้า",
   "value": "health",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "shih": {
   "id": "shih",
   "name": "สือฮ่าว",
   "path": "body",
   "manual": "beast",
   "affinity": "wood",
   "traits": [
    "dragon",
    "heaven"
   ],
   "stats": {
    "spirit": 98,
    "body": 100,
    "heart": 91,
    "craft": 78,
    "admin": 80
   },
   "signatures": [
    "lore_palm_7",
    "lore_body_5"
   ],
   "background": "เด็กหนุ่มที่เติบโตกับควันอาหารและเสียงสัตว์ป่า เขาเชื่อว่าร่างกายที่แข็งแกร่งเริ่มจากชุมชนที่มีกิน จึงไม่รับเกียรติบนความหิวของผู้อื่น",
   "value": "food",
   "realm": 1,
   "age": 24,
   "weight": 1
  },
  "ye": {
   "id": "ye",
   "name": "เย่ฝาน",
   "path": "body",
   "manual": "mountain",
   "affinity": "earth",
   "traits": [
    "dragon",
    "insightGift"
   ],
   "stats": {
    "spirit": 97,
    "body": 100,
    "heart": 92,
    "craft": 86,
    "admin": 94
   },
   "signatures": [
    "lore_palm_5",
    "lore_body_6"
   ],
   "background": "ผู้พเนจรที่ศึกษารอยอักษรบนโลหะเก่า เขามองร่างกายเป็นแผ่นดินที่ต้องฟื้นตัว ไม่ใช่เครื่องมือที่เผาทิ้งได้ และตั้งใจสอนผู้ที่ยอมฝึกพื้นฐาน",
   "value": "teaching",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "guojing": {
   "id": "guojing",
   "name": "ก๊วยเจ๋ง",
   "path": "body",
   "manual": "mountain",
   "affinity": "earth",
   "traits": [
    "fair",
    "dragon"
   ],
   "stats": {
    "spirit": 86,
    "body": 99,
    "heart": 98,
    "craft": 72,
    "admin": 92
   },
   "signatures": [
    "lore_palm_2",
    "lore_body_4"
   ],
   "background": "ชายผู้ฝึกท่าเดิมจนเข้าใจเหตุผลของมัน เขาไม่ยอมให้การดูถูกคนเรียนช้ากลายเป็นวินัยสำนัก และยืนป้องกันผู้คนจนคนอื่นกลับถึงบ้าน",
   "value": "food",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "huangrong": {
   "id": "huangrong",
   "name": "อึ้งย้ง",
   "path": "qi",
   "manual": "jade",
   "affinity": "wood",
   "traits": [
    "organizer",
    "insightGift"
   ],
   "stats": {
    "spirit": 97,
    "body": 84,
    "heart": 95,
    "craft": 96,
    "admin": 100
   },
   "signatures": [
    "lore_craft_3",
    "lore_fan_4"
   ],
   "background": "ผู้เชื่อว่าการรู้ว่าใครหิวมีค่าพอ ๆ กับการอ่านค่ายกล เธอชอบแก้ปัญหาด้วยสิ่งที่มีอยู่จริงและไม่เชื่อยอดคลังที่ไม่มีบัญชีรองรับ",
   "value": "trade",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "huang": {
   "id": "huang",
   "name": "อึ้งเอี๊ยะซือ",
   "path": "qi",
   "manual": "jade",
   "affinity": "wood",
   "traits": [
    "fanGift",
    "alchemist"
   ],
   "stats": {
    "spirit": 99,
    "body": 89,
    "heart": 86,
    "craft": 100,
    "admin": 92
   },
   "signatures": [
    "lore_fan_5",
    "lore_craft_6"
   ],
   "background": "ปราชญ์ผู้ฟังเสียงลมเพื่ออ่านชีพจร เขาชอบศิษย์ที่ถามเหตุผลมากกว่าคัดคำตามตำรับ และยอมรับว่าวิธีที่ดีต้องบอกความผิดพลาดได้",
   "value": "teaching",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "jigong": {
   "id": "jigong",
   "name": "จี้กง",
   "path": "faith",
   "manual": "mercy",
   "affinity": "water",
   "traits": [
    "fair",
    "mentorGift"
   ],
   "stats": {
    "spirit": 90,
    "body": 88,
    "heart": 100,
    "craft": 86,
    "admin": 91
   },
   "signatures": [
    "lore_faith_4",
    "lore_fan_7"
   ],
   "background": "ผู้ถือถ้วยเก่าช่วยคนก่อนรับคำไหว้ ในโลกเซียนเขาวางนามเทพไว้บนการรักษาจริง ศรัทธาจึงเกิดจากคนที่ได้รับความช่วยเหลือ ไม่ใช่จำนวนรูปเคารพ",
   "value": "mercy",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "zhanzhao": {
   "id": "zhanzhao",
   "name": "จั่นเจา",
   "path": "faith",
   "manual": "shelter",
   "affinity": "earth",
   "traits": [
    "fair",
    "organizer"
   ],
   "stats": {
    "spirit": 92,
    "body": 95,
    "heart": 99,
    "craft": 75,
    "admin": 96
   },
   "signatures": [
    "lore_faith_3",
    "lore_faith_7"
   ],
   "background": "ผู้พิทักษ์ที่รับคำสัตย์คุ้มครองชุมชนจนชื่อของเขากลายเป็นประทีป เขามองกฎหมายของสำนักผ่านสิ่งที่ปกป้องคนอ่อนแอ และไม่รับรางวัลบนการกล่าวหาไร้หลักฐาน",
   "value": "mercy",
   "realm": 1,
   "age": 24,
   "weight": 3
  },
  "jining": {
   "id": "jining",
   "name": "จี้หนิง",
   "path": "qi",
   "manual": "thunder",
   "affinity": "metal",
   "traits": [
    "swordGift",
    "heaven"
   ],
   "stats": {
    "spirit": 100,
    "body": 96,
    "heart": 92,
    "craft": 86,
    "admin": 90
   },
   "signatures": [
    "lore_sword_5",
    "lore_sword_7"
   ],
   "background": "ผู้ศึกษาคมกระบี่เป็นเส้นทางผ่านความเปลี่ยนแปลงของโลก เขาไม่ยอมข้ามพื้นฐานเพียงเพราะมีพรสวรรค์ และมองการถ่ายทอดเป็นวิธีรักษาความเข้าใจให้ยืนยาว",
   "value": "teaching",
   "realm": 1,
   "age": 24,
   "weight": 3
  }
 },
 "stories": {
  "story_1": {
   "id": "story_1",
   "title": "คลองที่ไม่มีใครซ่อม",
   "text": "น้ำจากลำธารไหลผ่านรอยแตกก่อนถึงนาของสำนัก ช่างเสนอซ่อมคอคลอง แต่ชาวบ้านปลายน้ำกลัวว่าจะถูกแบ่งน้ำน้อยลง",
   "second": "แผนที่ดินชี้ว่าปัญหาอยู่ที่ประตูน้ำเดิม การซ่อมเพียงฝ่ายเดียวเร็วกว่า แต่การแบ่งงานกับชุมชนจะได้คนเฝ้าประตูระยะยาว",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "farm",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3,
    "wood": 8
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 18,
    "ore": 5
   }
  },
  "story_2": {
   "id": "story_2",
   "title": "กลิ่นดินหลังฝน",
   "text": "คนทำสวนพบว่าสมุนไพรแถวรั้วเติบโตดีผิดปกติ ใต้ดินมีเศษเถ้าจากเตาเก่าที่ไม่มีผู้ใดรู้สูตร",
   "second": "ใบอ่อนตอบสนองต่อเถ้าเพียงเล็กน้อย ถ้าเร่งทั้งแปลงอาจได้ผลเร็วแต่ทำรากเสีย ช่างขอเวลาแยกแปลงทดลอง",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "garden",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8,
    "wood": 12
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 30,
    "ore": 10
   }
  },
  "story_3": {
   "id": "story_3",
   "title": "เตาหลอมที่ร้องเพลง",
   "text": "ช่างได้ยินเสียงแหลมทุกครั้งที่เติมแร่ เขาไม่แน่ใจว่าเป็นรอยร้าวหรือการสั่นที่บอกอุณหภูมิได้",
   "second": "เมื่อชะลอไฟ เสียงแตกเป็นสามจังหวะ ผู้ฝึกจดตำแหน่งลมไว้แล้ว เหลือเลือกระหว่างเก็บวิธีปลอดภัยกับทดสอบความร้อนสูง",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "workshop",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8,
    "wood": 12
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 30,
    "ore": 10
   }
  },
  "story_4": {
   "id": "story_4",
   "title": "ห้องยาปิดหน้าต่าง",
   "text": "กลิ่นยาเข้มทำให้ศิษย์เวียนหัว แต่แพทย์กังวลว่าลมแรงจะพัดผงยาหายไป การทำงานวันนี้ติดขัดจริง",
   "second": "ผ้ากรองหยาบช่วยลดควันได้แล้ว ผู้อาวุโสเสนอสร้างทางลมแยก ขณะที่ช่างหนุ่มอยากกลั่นควันกลับมาเป็นส่วนผสม",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "herb",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8,
    "wood": 12
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 30,
    "ore": 10
   }
  },
  "story_5": {
   "id": "story_5",
   "title": "ฉางเก็บเมล็ดเก่า",
   "text": "กระสอบเมล็ดที่กำลังจะทิ้งมีป้ายชื่อผู้บริจาคคนแรก ชาวบ้านยังจำว่าเมล็ดรุ่นนั้นทนปีแล้งได้",
   "second": "เมล็ดส่วนใหญ่ตาย แต่บางเมล็ดยังมีราก หากแบ่งแปลงคืนหมู่บ้านจะรักษาพันธุ์ไว้ หากปลูกทั้งหมดในสำนักจะได้ผลเร็วกว่า",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "food",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3,
    "wood": 8
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 18,
    "ore": 5
   }
  },
  "story_6": {
   "id": "story_6",
   "title": "หินเสียงกังวาน",
   "text": "คนงานเหมืองพบก้อนแร่ที่สะท้อนเสียงเจาะเป็นจังหวะ เหมืองไม่พัง แต่คานเก่ารับน้ำหนักได้จำกัด",
   "second": "รอยแร่ทอดลงไปใต้คาน ต้องเลือกเก็บชั้นตื้นที่มั่นคง หรือค้ำเพิ่มและเสี่ยงทำงานลึกซึ่งอาจทำให้คนงานบาดเจ็บ",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "mine",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13,
    "wood": 16
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 42,
    "ore": 15
   }
  },
  "story_7": {
   "id": "story_7",
   "title": "ช่างผู้ไม่ยอมลงชื่อ",
   "text": "ช่างคนหนึ่งผลิตงานดีแต่ปล่อยให้คนอื่นรับความชอบ เขาบอกว่ายังชดใช้ความผิดพลาดจากเตาในอดีต",
   "second": "บันทึกพบว่าเขาเคยเตือนเรื่องแร่ชื้นแล้ว ไม่มีผู้ใดฟัง การคืนเครดิตช่วยความไว้วางใจ แต่การท้าสร้างงานยากอาจเปิดฝีมือแท้",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "craft",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13,
    "wood": 16
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 42,
    "ore": 15
   }
  },
  "story_8": {
   "id": "story_8",
   "title": "สวนใต้เงาศาล",
   "text": "รากไม้ชอนไชพื้นศาล คนดูแลสวนกับผู้สวดต่างขอพื้นที่เดียวกัน ไม่มีฝ่ายใดยอมให้รากหรือศรัทธาเสียหาย",
   "second": "รากลึกไม่ควรถูกตัด ช่างเสนอทางเดินยกพื้น อีกทางคือย้ายต้นทั้งก้อนดินเพื่อเปิดพื้นที่ฝึกซึ่งมีความเสี่ยงต่อราก",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "shrine",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13,
    "wood": 16
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "food": 42,
    "ore": 15
   }
  },
  "story_9": {
   "id": "story_9",
   "title": "เตาเก่ากลางสายฟ้า",
   "text": "แผ่นโลหะจากการสำรวจมีรอยอสนีที่ยังตอบสนองต่อปราณ ช่างขอใช้ห้องหลอมก่อนรอยพลังสลาย",
   "second": "รอยอสนีจับกับโลหะบางชนิดเท่านั้น การบันทึกสูตรย่อยทำได้แน่นอน แต่ลองหลอมแกนทั้งชิ้นต้องใช้ฝีมือระดับสูง",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "explore",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23,
    "wood": 24
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "food": 66,
    "ore": 25
   }
  },
  "story_10": {
   "id": "story_10",
   "title": "เมล็ดต้นไม้ก่อนฟ้า",
   "text": "เมล็ดที่ได้จากซากสถานไม่งอกกับน้ำธรรมดา รากอ่อนกลับหันหาเสียงคำสัตย์จากศาลของสำนัก",
   "second": "เมล็ดดูดพลังทีละน้อยและไม่ได้เรียกร้องเลือด ผู้ดูแลเสนอรักษาเป็นแปลงศึกษา หรือเสี่ยงเพาะกลางวงปราณที่เข้มกว่า",
   "group": "livelihood",
   "label": "กิจการ",
   "trigger": "explore",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28,
    "wood": 28
   },
   "terms": [
    "จัดคนและวัสดุแก้ปัญหา",
    "ทดลองวิธีที่ให้ผลสูง",
    "บันทึกวิธีและคืนงานให้คนดูแล"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "food": 78,
    "ore": 30
   }
  },
  "story_11": {
   "id": "story_11",
   "title": "เส้นปราณที่วนกลับ",
   "text": "ศิษย์ {actor} รายงานว่าปราณไหลย้อนในจุดเดิมทุกครั้ง เขาไม่บาดเจ็บแต่เริ่มสงสัยว่าคัมภีร์ไม่เหมาะกับตน",
   "second": "อาจารย์พบว่าศิษย์พยายามเร่งสามจังหวะติดกัน จึงเสนอแก้พื้นฐานก่อน หรือทดลองอ่านช่วงที่ยากกว่าเพื่อหาต้นเหตุ",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "qi",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 8
   }
  },
  "story_12": {
   "id": "story_12",
   "title": "วันพักที่ถูกมองข้าม",
   "text": "{actor} ฝึกกายจนล้าและคิดว่าการพักคือความอ่อนแอ กล้ามเนื้อยังไม่ทันปรับตัวจากเมื่อวาน",
   "second": "คนครัวเตรียมอาหารบำรุงไว้แล้ว การพักแบบมีหลักจะคืนจังหวะ หรือจะใช้การเคลื่อนไหวเบาที่เสี่ยงหากเจ้าตัวยังฝืน",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "fatigue",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 8
   }
  },
  "story_13": {
   "id": "story_13",
   "title": "อาจารย์ใต้ชายคา",
   "text": "ผู้สอน {actor} พบศิษย์นั่งคัดตำรับเก่าอยู่หลังเลิกเรียน ศิษย์คนนั้นถามคำถามที่ไม่มีในบทพื้นฐาน",
   "second": "คำถามเกี่ยวกับเหตุผลของท่า ไม่ใช่ชื่อท่า อาจารย์อยากเปิดห้องเล็กให้ถามต่อ หรือให้ลองแก้ตำรับซึ่งอาจเข้าใจผิด",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "teach",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_14": {
   "id": "story_14",
   "title": "ฝ่ามือที่จดบนหิน",
   "text": "รอยมือของศิษย์กายามีขอบชัดกว่าปกติ ไม่ใช่พลังลึกลับใหม่ แต่เป็นแรงจากสะโพกที่เขาไม่เคยจับจังหวะได้",
   "second": "ผู้สอนแสดงให้เห็นว่าแรงย้อนกลับไปที่ข้อมือ ต้องเรียนรับแรงก่อน หรือทดลองรวมแรงทั้งตัวซึ่งเสี่ยงบาดเจ็บ",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "body",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_15": {
   "id": "story_15",
   "title": "สามทางหน้าด่าน",
   "text": "{actor} เข้าใกล้ขอบเขตใหม่แต่ฐานรากยังไม่นิ่ง เขาขอให้เจ้าสำนักเลือกว่าจะรอหรือช่วยจัดการเตรียม",
   "second": "บันทึกฝึกชี้ว่าความเข้าใจขาดมากกว่าพลัง การบ่มเพาะเพิ่มอย่างเดียวไม่แก้ปัญหา จึงต้องเลือกจัดตำรับหรือทดสอบความเข้าใจ",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "readiness",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_16": {
   "id": "story_16",
   "title": "เสียงจันทร์ในชีพจร",
   "text": "ผู้ใช้ธาราปราณ {actor} สัมผัสจังหวะเย็นจากห้องฝึก เขาอยากเปลี่ยนให้เป็นวิชารักษาแทนเพียงการฝึกตน",
   "second": "จังหวะเดียวกันสงบเมื่อช่วยสหาย ถ้าเรียนช้า ๆ จะคงเส้นปราณไว้ แต่การผลักถึงขอบเขตวิญญาณต้องใช้ความเข้าใจสูง",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "water",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_17": {
   "id": "story_17",
   "title": "เถ้าของอาทิตย์ดวงแรก",
   "text": "ผู้ฝึกอัคคี {actor} พบว่าการปล่อยปราณทั้งหมดทำให้ไฟแรงแต่หมดเร็ว เขาขอทดลองกักไฟไว้ในลมหายใจ",
   "second": "ไฟก้อนเล็กเสถียรกว่าไฟใหญ่ มีทางเก็บเป็นหลักฝึก หรือใช้เตาจำลองพิสูจน์กระบวนท่าที่เสี่ยงต่อสมาธิ",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "fire",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_18": {
   "id": "story_18",
   "title": "ตำรับที่สอนให้แพ้",
   "text": "อาจารย์ {actor} ขอให้ศิษย์แก้โจทย์โดยยอมถอยหนึ่งก้าว ช่างจารึกเก่าเรียกสิ่งนี้ว่ากระบี่ที่ไม่แข่งแรง",
   "second": "การถอยทำให้เห็นรอยต่อในท่าฝ่ายตรงข้าม จะเก็บเป็นบทป้องกัน หรือเสี่ยงทดสอบการสวนกลับกับเงาปราณในวงค่าย",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "teach",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_19": {
   "id": "story_19",
   "title": "คำถามของหมื่นกระบี่",
   "text": "ศิษย์ {actor} อ่านรอยอักษรจากการสำรวจได้บางส่วน ทุกบรรทัดถามว่าเมื่อคมกระบี่มากขึ้น เจตนาควรแบ่งตามหรือไม่",
   "second": "อักษรไม่ได้สร้างกำลังให้เอง มันบังคับให้ผู้ฝึกเลือกศัตรูจริงก่อนส่งปราณ หากลองทั้งหมดในครั้งเดียวพลังอาจกระจายจนหมด",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "highrealm",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "stone": 40
   }
  },
  "story_20": {
   "id": "story_20",
   "title": "หน้าว่างของผู้แสวงมาร",
   "text": "ตำรับสูงมีหน้าว่างที่สะท้อนความทรงจำของ {actor} อาจารย์เตือนว่าไม่ควรเชื่อทุกภาพเป็นความจริง",
   "second": "ภาพนิ่งลงเมื่อยอมรับทั้งชัยชนะและความผิดพลาด ทางปลอดภัยคือจดหลักประคองจิต ทางลึกคือตอบคำถามที่อาจทำลายความมั่นใจ",
   "group": "cultivation",
   "label": "การฝึก",
   "trigger": "highrealm",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28
   },
   "terms": [
    "จัดห้องศึกษาให้ศิษย์",
    "ทดสอบบทที่ลึกขึ้น",
    "เก็บหลักพื้นฐานที่พิสูจน์แล้ว"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "stone": 48
   }
  },
  "story_21": {
   "id": "story_21",
   "title": "ชื่อบนถ้วยข้าว",
   "text": "{actor} เห็นถ้วยศิษย์ใหม่เล็กกว่าของตนและถามว่าเป็นเพราะตำแหน่งหรือเพราะข้าวไม่พอ",
   "second": "คนครัวยืนยันว่าแบ่งตามนโยบายจริง แต่ไม่มีผู้ใดอธิบายเหตุผล การประชุมแบ่งปันช่วยความเข้าใจ ส่วนการทดลองจัดใหม่ต้องยอมรับคำวิจารณ์",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "dissatisfied",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 8
   }
  },
  "story_22": {
   "id": "story_22",
   "title": "ศิษย์ที่ยืนท้ายแถว",
   "text": "{actor} ทำงานหลายวันแต่ไม่เคยขอรางวัล เขาเริ่มคิดว่าการฝึกช้าทำให้ตนไม่มีคุณค่า",
   "second": "เพื่อนจำได้ว่าเขาช่วยงานในวันที่ทุกคนไม่ว่าง การยกย่องต่อหน้าเป็นทางหนึ่ง หรือให้รับผิดชอบงานยากเพื่อสร้างผลงานของตน",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "lowrealm",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 8
   }
  },
  "story_23": {
   "id": "story_23",
   "title": "จดหมายที่ไม่ได้ส่ง",
   "text": "จดหมายของ {actor} ถึงอาจารย์เก่าค้างอยู่ในห้องหนังสือ เขากลัวว่าจะดูเป็นคนไม่ภักดีต่อสำนักใหม่",
   "second": "ในจดหมายไม่มีความลับ มีเพียงเรื่องเล่าวันที่เริ่มฝึก จะอนุญาตให้ส่งและคงสายสัมพันธ์ หรือชวนเขาเขียนตำรับเพื่อส่งพร้อมกัน",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "mentor",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_24": {
   "id": "story_24",
   "title": "การประลองหลังฝน",
   "text": "ศิษย์สองคนถกว่ามรรคาใดช่วยสำนักมากกว่า {actor} ขอพื้นที่พิสูจน์โดยไม่อยากให้เป็นศึกจริง",
   "second": "ผู้สอนเสนอประลองแตะเป้าแทนทำร้าย อีกทางคือโจทย์ร่วมที่ต้องใช้สองมรรคา แต่ความผิดพลาดจะทำให้ทั้งคู่เหนื่อยและเสียหน้า",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "members",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_25": {
   "id": "story_25",
   "title": "ความชอบที่แบ่งครึ่ง",
   "text": "รายงานของ {actor} ระบุว่าชัยชนะครั้งก่อนเกิดจากคนรักษา ไม่ใช่ผู้ลงคมสุดท้าย สมาชิกเริ่มถกเรื่องรางวัล",
   "second": "หลักฐานจากรายงานรบสนับสนุนทั้งสองบทบาท จะประกาศเครดิตร่วม หรือให้เจ้าตัวจัดการแบ่งซึ่งอาจเกิดความไม่พอใจ",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "explore",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_26": {
   "id": "story_26",
   "title": "ที่นั่งของผู้เฒ่า",
   "text": "ผู้อาวุโส {actor} ไม่มีตำแหน่งฝ่ายและรู้สึกว่าไม่มีใครถามความเห็น เขายังจำเส้นทางที่ศิษย์รุ่นใหม่ไม่รู้",
   "second": "การให้บันทึกประสบการณ์ทำได้โดยไม่ตั้งตำแหน่งฟรี หากอยากให้สอนจริง ต้องมีเวลารวมคำถามและยอมรับว่าเขาอาจเหนื่อย",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "elder",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_27": {
   "id": "story_27",
   "title": "เงาของผู้สืบทอด",
   "text": "{actor} มองศิษย์สืบทอดแล้วถามว่าฝีมือหรือความไว้ใจเป็นเหตุให้ถูกเลือก เขาไม่ได้ขอกบฏ แต่ขอเหตุผล",
   "second": "การประชุมเปิดเกณฑ์ช่วยให้เห็นเส้นทางของตน หรือให้ช่วยทดสอบผู้นำรุ่นใหม่ซึ่งต้องแลกความตึงเครียดในสำนัก",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "ambitious",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_28": {
   "id": "story_28",
   "title": "คำขอโทษต่อหอรำลึก",
   "text": "{actor} วางดอกไม้ให้ผู้ล่วงลับและเล่าว่าครั้งหนึ่งเคยโกรธอีกฝ่าย เขาอยากให้เรื่องที่ผิดถูกจารึกด้วย",
   "second": "สำนักเลือกได้ว่าจะเก็บคำรับผิดไว้ในชีวประวัติ หรือจัดพิธีเปิดให้ผู้คนพูดต่อ ซึ่งอาจเยียวยาหรือทำแผลเก่ากลับมา",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "grave",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_29": {
   "id": "story_29",
   "title": "ผู้เดินทางที่ไม่ลงชื่อ",
   "text": "คนแปลกหน้าดูการแจกข้าวอยู่หลายวัน เขาขอคุยกับ {actor} ก่อนบอกว่าตนมีวิชาที่ไม่อยากให้หายไป",
   "second": "เขาไม่ขอหินปราณเพื่อพิสูจน์กำลัง แต่ถามว่าสำนักจะปฏิบัติต่อผู้มีพรสวรรค์ต่ำอย่างไร คำตอบต้องมีการจัดสรรจริงรองรับ",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "reputation",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "stone": 40
   }
  },
  "story_30": {
   "id": "story_30",
   "title": "ชื่อที่กลับมาจากตำนาน",
   "text": "นักเดินทางถือกระดาษเก่าที่มีชื่อผู้คนในตำนาน เขาบอกว่าเจ้าของชื่อยังมีชีวิต แต่เลือกไม่เดินเข้าเมืองที่ไม่ไว้ใจ",
   "second": "มีทางฝากคำเชิญโดยไม่สัญญารางวัล หรือเปิดบททดสอบให้ผู้ส่งสารเห็นว่าสำนักยอมรับคนที่มีประวัติซับซ้อนเพียงใด",
   "group": "relationships",
   "label": "ผู้คน",
   "trigger": "reputation",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28
   },
   "terms": [
    "เปิดพื้นที่รับฟังและลงมือช่วย",
    "ให้เจ้าตัวลองรับความท้าทาย",
    "รับรองสิ่งที่ทำได้ตามจริง"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "stone": 48
   }
  },
  "story_31": {
   "id": "story_31",
   "title": "คำอธิษฐานขอข้าว",
   "text": "{community} ขอข้าว ไม่ได้ขอปาฏิหาริย์ ผู้รับคำอธิษฐาน {actor} จึงถามว่าจะใช้ทรัพย์ของสำนักช่วยหรือปล่อยให้ศรัทธาเป็นเพียงคำพูด",
   "second": "ผู้นำชุมชนเสนอคืนแรงงานเมื่อฟื้นตัว จะช่วยแบบไม่ตั้งหนี้ หรือร่วมเปิดแปลงที่ให้ผลมากกว่าแต่ต้องเสี่ยงกับฤดูกาล",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "villageFood",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3,
    "herb": 8
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 8
   }
  },
  "story_32": {
   "id": "story_32",
   "title": "กระดิ่งที่ไม่ดัง",
   "text": "กระดิ่งของ {community} เงียบลงเพราะคนป่วยไม่มาศาล {actor} พบว่าการสวดดังขึ้นไม่ได้แก้สิ่งที่ชาวบ้านต้องการ",
   "second": "แพทย์เสนอแจกสมุนไพรให้ถึงบ้าน อีกทางคือรวมรักษาที่ศาลซึ่งประหยัดยาแต่ต้องจัดการผู้ป่วยจำนวนมาก",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "villageHealth",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3,
    "herb": 8
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 8
   }
  },
  "story_33": {
   "id": "story_33",
   "title": "เทียนของคนต่างศาล",
   "text": "ครอบครัวหนึ่งใน {community} ไหว้บรรพชนต่างจากศาลของเรา พวกเขาถามว่ายังขอความช่วยเหลือจาก {actor} ได้หรือไม่",
   "second": "การช่วยโดยไม่บังคับเปลี่ยนศาลเพิ่มความไว้วางใจ ส่วนพิธีร่วมต้องฟังความต้องการทั้งสองฝ่าย ไม่อาจเก็บศรัทธาซ้ำจากคนเดียว",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "faith",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8,
    "herb": 11
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 13
   }
  },
  "story_34": {
   "id": "story_34",
   "title": "คำมั่นที่ยังไม่ครบ",
   "text": "{actor} ทบทวนคำมั่นของ {community} แล้วพบว่าชุมชนยังต้องการงานเล็ก ๆ อีกหลายอย่างก่อนเชื่อว่าทำสำเร็จ",
   "second": "ผู้สวดเสนอรายงานสิ่งที่ทำได้ตามจริง หรือเปิดวันรับข้อร้องเรียนซึ่งช่วยได้มากหากรับภาระไหวและทำให้คนผิดหวังหากทำไม่ทัน",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "vow",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8,
    "herb": 11
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 13
   }
  },
  "story_35": {
   "id": "story_35",
   "title": "ผู้เฝ้าสะพานยามค่ำ",
   "text": "{community} กลัวภัยตามทางและขอให้ {actor} ส่งคนเฝ้าสะพาน พวกเขาไม่ได้รู้จำนวนศัตรู เพียงพบรอยเท้าใหม่",
   "second": "ตรวจรอยพบว่าบางส่วนมาจากคนค้าไม้ จะติดไฟและแบ่งเวรอย่างระวัง หรือเฝ้าจับผู้ลักลอบซึ่งอาจปะทะจริง",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "villageSafety",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13,
    "herb": 14
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 18
   }
  },
  "story_36": {
   "id": "story_36",
   "title": "ศรัทธาที่เบากว่าคำชม",
   "text": "งานพิธีใหญ่ของ {community} มีเสียงสรรเสริญมาก แต่ {actor} รู้สึกว่าความไว้วางใจยังไม่ลึกพอ",
   "second": "ผู้เฒ่าบอกว่าคนมาเพราะอาหารฟรี การลงแรงช่วยในวันธรรมดาจะมั่นคงกว่า หรือเปิดคำสัตย์ใหม่ที่ต้องทำให้เห็นก่อนเรียกร้องศรัทธา",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "trust",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13,
    "herb": 14
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 18
   }
  },
  "story_37": {
   "id": "story_37",
   "title": "ต้นไม้ที่จำชื่อคนตาย",
   "text": "{community} ขอปลูกต้นไม้ให้ผู้เสียชีวิตแทนสร้างรูปเคารพ {actor} ต้องเลือกว่าจะรักษาความทรงจำอย่างไร",
   "second": "รายชื่อบางคนหายไป การรวบรวมอย่างสงบช่วยความสามัคคี ส่วนเปิดพิธีเรียกชื่อทั้งหมดต้องยอมเผชิญความเจ็บปวดของหลายครอบครัว",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "grave",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18,
    "herb": 17
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 23
   }
  },
  "story_38": {
   "id": "story_38",
   "title": "แสงที่ต้องเลือกใช้",
   "text": "{actor} มีศรัทธาพอประคองด่านใหม่ ขณะเดียวกัน {community} ขอพลังช่วยคนอ่อนแรง ความต้องการทั้งสองเกิดจริงพร้อมกัน",
   "second": "แพทย์คัดผู้ที่ช่วยด้วยยาได้ก่อน เหลือผู้ที่ต้องพึ่งพลัง การแบ่งช่วยน้อยลงปลอดภัยกว่า แต่ช่วยทั้งหมดอาจใช้ศรัทธาจนเสียจังหวะฝึก",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "faithReserve",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18,
    "herb": 17
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "herb": 23
   }
  },
  "story_39": {
   "id": "story_39",
   "title": "ตราเทพไร้รูปเคารพ",
   "text": "ชาว {community} เริ่มจดจำ {actor} ด้วยคำสัตย์มากกว่ารูปปั้น อักษรศาลตอบสนองต่อความไว้ใจที่ค่อย ๆ สะสม",
   "second": "ตราใหม่ต้องมีผู้รับผิดชอบระยะยาว จะจดเป็นบทดูแลชุมชน หรือทดลองสนามพรซึ่งต้องใช้พลังและความมั่นคงสูง",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "devotion",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23,
    "herb": 20
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "herb": 28
   }
  },
  "story_40": {
   "id": "story_40",
   "title": "เสียงขอพรข้ามขุนเขา",
   "text": "คำขอจาก {community} ไปถึงอีกชุมชน แต่ {actor} รู้ว่าศรัทธาไม่ได้หมายถึงสิทธิ์ครอบครองผู้คนทั้งหมด",
   "second": "ผู้ส่งสารยอมรับพิธีร่วมถ้าไม่บังคับให้ทุกคนมีความเชื่อเดียว จะเริ่มแลกวิธีรักษา หรือใช้แดนพรใหญ่ที่รับแรงกดดันมากกว่า",
   "group": "faith",
   "label": "ศรัทธา",
   "trigger": "devotion",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28,
    "herb": 23
   },
   "terms": [
    "ช่วยตามความต้องการจริง",
    "ทำพิธีร่วมและรับภาระเพิ่ม",
    "ส่งมอบความช่วยเหลือเท่าที่รับไหว"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "herb": 33
   }
  },
  "story_41": {
   "id": "story_41",
   "title": "เกวียนติดร่องหิน",
   "text": "พ่อค้าจาก {faction} ขอไม้ซ่อมล้อ เขามีสินค้าแต่เงินติดไปกับขบวนหน้า ไม่มีเหตุให้ถือว่าเป็นศัตรู",
   "second": "สินค้าในห่อมีป้ายแหล่งชัดเจน จะช่วยคิดค่าซ่อมปกติ หรือร่วมส่งของที่ให้ผลดีแต่มีความเสี่ยงบนเส้นทาง",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "trade",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 12
   }
  },
  "story_42": {
   "id": "story_42",
   "title": "ราคายาจากตลาดห่าง",
   "text": "{faction} ส่งข่าวว่าสมุนไพรบางชนิดขาดตลาด ฝ่ายการค้าต้องเลือกระหว่างขายทันทีหรือเก็บไว้ใช้ในสำนัก",
   "second": "ข่าวมาจากผู้แทน ไม่ใช่ความรู้ทุกตลาด การแบ่งขายเพียงส่วนหนึ่งทำได้ หรือสำรวจรายการสินค้าลึกเพื่อหาข้อตกลงที่ดีกว่า",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "trade",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 12
   }
  },
  "story_43": {
   "id": "story_43",
   "title": "ผู้ส่งสารที่ไม่มีตรา",
   "text": "คนหนุ่มอ้างว่ามาจาก {faction} แต่ตราหายระหว่างทาง เขาขอให้สำนักฟังข้อมูลก่อนตัดสิน",
   "second": "ชื่อในจดหมายตรงกับผู้แทนที่รู้จัก แต่ยังไม่ยืนยัน จะส่งข่าวกลับสอบถาม หรือรับรองคำขอเองเพื่อสร้างความไว้ใจโดยมีความเสี่ยง",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "diplomacy",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 22
   }
  },
  "story_44": {
   "id": "story_44",
   "title": "เขตสมุนไพรทับซ้อน",
   "text": "คนเก็บยาของเราพบรอยคนจาก {faction} ในแปลงเดียวกัน ไม่มีสัญญาเขตแดนเดิมชัดเจน",
   "second": "เจ้าหน้าที่เสนอแบ่งวันเก็บตามกำลังจริง หรือร่วมตรวจว่าต้นยาเติบโตพอทั้งสองฝ่ายหรือไม่ การยืนยันเขตด้วยกำลังไม่ใช่ทางเดียว",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "dispute",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 22
   }
  },
  "story_45": {
   "id": "story_45",
   "title": "แผนที่ที่ขาดมุม",
   "text": "แผนที่จาก {faction} ไม่มีมุมที่ระบุธารน้ำ ผู้แทนยืนยันว่าเอกสารเก่าตั้งแต่ก่อนทางถูกน้ำกัด",
   "second": "จะแลกบันทึกเส้นทางที่เรารู้ หรือร่วมสำรวจลายหมึกที่อาจนำสู่ตำรับหายไป การเดินทางไม่ให้ความแน่นอนล่วงหน้า",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "explore",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 32
   }
  },
  "story_46": {
   "id": "story_46",
   "title": "ข่าวศึกที่เก่ากว่าฝน",
   "text": "รายงานกำลังของ {faction} มีวันที่เก่า ฝ่ายการทูตเตือนว่าอย่าใช้ตัวเลขเดิมวางแผนรบ",
   "second": "ผู้สังเกตการณ์เสนอส่งข่าวสดแบบจำกัด หรือเสี่ยงเข้าใกล้แนวป้องกันเพื่ออ่านกำลังจริง โดยข้อมูลใหม่ยังมีช่วงคลาดเคลื่อน",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "war",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 32
   }
  },
  "story_47": {
   "id": "story_47",
   "title": "รางวัลของพันธมิตร",
   "text": "{faction} ยอมรับว่าสำนักเคยช่วยลดภาระ พวกเขาเสนอแบ่งตำรับหนึ่ง แต่ขอคนตรวจวิธีใช้ร่วมกัน",
   "second": "ตัวอักษรเป็นวิชาที่เข้ามรรคาเดิมได้ จะรับบทย่อยที่อ่านแน่ชัด หรือถอดบทสูงซึ่งกินเวลาฝึกและวัสดุเพิ่ม",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "ally",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 42
   }
  },
  "story_48": {
   "id": "story_48",
   "title": "ผู้แพ้ที่ยังถือธง",
   "text": "หลังการปะทะ ผู้แทน {faction} ส่งชื่อผู้บาดเจ็บและขอแลกยาเป็นเงิน พวกเขาไม่ได้ขอให้ยุติสงครามโดยไม่มีเงื่อนไข",
   "second": "คนในสำนักเห็นต่าง การซื้อขายจำกัดช่วยชีวิตและไม่เปิดคลังทั้งหมด หรือเปิดช่องเจรจาที่มีผลมากกว่าแต่ต้องประเมินความไว้ใจ",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "war",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "coin": 42
   }
  },
  "story_49": {
   "id": "story_49",
   "title": "ประตูซากสถานร่วม",
   "text": "{faction} พบกลไกที่ต้องใช้ผู้บ่มเพาะสองฝ่าย ข้อเสนอนี้อ้างอิงการสำรวจจริงแต่ยังไม่มีใครรู้สิ่งข้างใน",
   "second": "แผนที่ระบุทางถอยไว้ จะศึกษาอักษรรอบประตู หรือเปิดกลไกขั้นลึกที่มีผู้พิทักษ์ปราณตอบสนองต่อผู้บุกรุก",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "ally",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "coin": 52
   }
  },
  "story_50": {
   "id": "story_50",
   "title": "สนธิสัญญาบนป้ายเก่า",
   "text": "ตราบนป้ายจากซากสถานตรงกับเอกสารของ {faction} ผู้แทนอยากกู้หลักวิชาที่สูญไปโดยไม่ยึดของทั้งหมด",
   "second": "ข้อความห้ามฝ่ายใดรับตำรับเพียงคนเดียว จะคัดบทที่แชร์ได้ หรือร่วมทดสอบบทตำนานที่ต้องมีศักยภาพสูงและรับความเสี่ยงจริง",
   "group": "world",
   "label": "โลกภายนอก",
   "trigger": "ally",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28
   },
   "terms": [
    "แลกข้อมูลและช่วยตามข้อตกลง",
    "ทดสอบข้อตกลงขั้นลึก",
    "ปิดเรื่องด้วยสิ่งที่ยืนยันแล้ว"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "coin": 62
   }
  },
  "story_51": {
   "id": "story_51",
   "title": "รอยเท้าข้างคัมภีร์",
   "text": "คณะสำรวจนำกระดาษเปื้อนดินกลับมา รอยเท้าขนาดเล็กเดินวนรอบอักษรเหมือนมีคนฝึกตามก่อนเดินจากไป",
   "second": "อักษรแรกเป็นบทพื้นฐาน ที่เหลือซ่อนอยู่หลังรอยพับ จะคัดสิ่งที่ชัดเจน หรือถอดรอยหมึกทั้งหมดที่อาจอ่านผิด",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "explore",
   "tier": 0,
   "weight": 12,
   "minDay": 12,
   "cooldown": 150,
   "cost": {
    "coin": 6,
    "stone": 3
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 8
   }
  },
  "story_52": {
   "id": "story_52",
   "title": "เสียงพัดจากหีบว่าง",
   "text": "หีบไม้จากเส้นทางเก่ามีเพียงซี่พัดและจังหวะเคาะ กองสำรวจไม่รู้ว่าจังหวะนั้นเป็นรหัสหรือเพลง",
   "second": "เมื่อเปรียบกับชีพจรพบว่าสามจังหวะตรงกัน จะเก็บบทช่วยรักษา หรือประกอบพัดเพื่ออ่านรหัสต่อ",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "explore",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_53": {
   "id": "story_53",
   "title": "แท่งหยกคัดชื่อผิด",
   "text": "ตำรับจากซากเก่ามีชื่อวิชาสองชื่อบนหยกเดียว ไม่ใช่ไอเทมเปลี่ยนสี แต่เป็นคนคัดที่เผลอซ้อนสองบท",
   "second": "บรรณารักษ์แยกหมึกพื้นฐานได้แล้ว ทางหนึ่งรับเพียงวิชาที่ชัด อีกทางใช้ปราณเปิดชั้นบนที่อาจสะท้อนกลับ",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "explore",
   "tier": 1,
   "weight": 8,
   "minDay": 42,
   "cooldown": 210,
   "cost": {
    "coin": 15,
    "stone": 8
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 16
   }
  },
  "story_54": {
   "id": "story_54",
   "title": "ผนังที่อ่านจากเงา",
   "text": "แผ่นหินที่คณะสำรวจนำมาดูธรรมดาเมื่อสว่าง แต่เงาข้างเตาเผยอักษรซึ่งต้องหมุนหินตามลำดับ",
   "second": "อ่านชั้นตื้นได้หลักเจาะเกราะ ชั้นลึกต้องคุมพลังทีละมุม การหมุนเร็วเกินไปทำให้ผู้ถอดเสียสมาธิ",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "explore",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_55": {
   "id": "story_55",
   "title": "กระดิ่งใต้ชื่ออสูร",
   "text": "ของจากถ้ำมีรอยชื่อสัตว์ที่ไม่ปรากฏในบันทึกศิษย์ กระดิ่งไม่เรียกสัตว์ทันที แต่ตอบเสียงผู้ควบคุมพาหนะ",
   "second": "ตำรับสอนสร้างความไว้ใจ ไม่ใช่สั่งให้สัตว์เชื่อฟังฟรี จะเก็บหลักเดินทาง หรือถอดเสียงครบที่ต้องใช้ความเข้าใจสูง",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "mount",
   "tier": 2,
   "weight": 4,
   "minDay": 72,
   "cooldown": 270,
   "cost": {
    "coin": 24,
    "stone": 13
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 24
   }
  },
  "story_56": {
   "id": "story_56",
   "title": "จันทร์ที่หายไปหนึ่งเสี้ยว",
   "text": "กระจกจากถ้ำจันทรามีเสี้ยวหนึ่งทึบ {actor} พบว่ารอยบนผิวตรงกับท่ากระบี่ที่ยังไม่สมบูรณ์",
   "second": "เสี้ยวทึบคือที่พักปราณในท่า จะฝึกการควบคุมแบบปลอดภัย หรือใช้ภาพสะท้อนประลองคมกระบี่ซึ่งสะท้อนบาดแผลได้",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "moon",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_57": {
   "id": "story_57",
   "title": "กระดูกที่ไม่ใช่ถ้วยรางวัล",
   "text": "คณะสำรวจได้กระดูกอสูรเก่าพร้อมรอยยา ผู้ฝึกกาย {actor} เห็นว่าเจ้าของเคยใช้มันรักษา ไม่ใช่โจมตี",
   "second": "ตำรับด้านหนึ่งสอนฟื้นโลหิต อีกด้านคือวิธีรับความเจ็บเข้ากระดูก ต้องเลือกสิ่งที่เหมาะและยอมรับผลเมื่อฝืน",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "dragon",
   "tier": 3,
   "weight": 2,
   "minDay": 102,
   "cooldown": 330,
   "cost": {
    "coin": 33,
    "stone": 18
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 2,
   "danger": 0,
   "reward": {
    "stone": 32
   }
  },
  "story_58": {
   "id": "story_58",
   "title": "ดาวในรอยตะเข็บ",
   "text": "ผ้าห่อของจากคลังดารามีตำแหน่งดาวที่เปลี่ยนเมื่อคุมปราณ {actor} ขอเวลาอ่านก่อนตัดเย็บใหม่",
   "second": "ดาวเรียงเป็นทางเดิน มิใช่สัญญาว่าจะสำเร็จทุกการสำรวจ จะเรียนบทลดเวลาหรือทดสอบก้าวที่ใช้พลังมากกว่า",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "star",
   "tier": 4,
   "weight": 0.6,
   "minDay": 132,
   "cooldown": 390,
   "cost": {
    "coin": 42,
    "stone": 23
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 3,
   "danger": 280,
   "reward": {
    "stone": 40
   }
  },
  "story_59": {
   "id": "story_59",
   "title": "เก้ากระบี่ที่ไม่มีรูป",
   "text": "อักษรจากยอดเขาอ้างว่าแบบกระบี่ควรหายเมื่ออ่านเจตนาศัตรูได้ {actor} ต้องยืนยันฐานรากก่อนเชื่อคำกล่าว",
   "second": "หินจารึกสร้างเงาท่าของผู้ถอดเอง การคัดหลักสวนกลับทำได้ แต่รับบทสูงต้องชนะเงาปราณโดยไม่ลืมทางถอย",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "highrealm",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "stone": 48
   }
  },
  "story_60": {
   "id": "story_60",
   "title": "หนึ่งความคิดที่ประตูฟ้า",
   "text": "ชิ้นหยกจากคลังดาราตอบสนองต่อความเงียบของ {actor} ทุกครั้งที่ลังเลประตูลายอักษรจะปิดลงอีกครั้ง",
   "second": "ผู้อาวุโสอ่านได้ว่าไม่มีผู้ใดได้ทุกอย่างพร้อมกัน จะรักษาบทคุมจิต หรือสละวัสดุเปิดบทตำนานแล้วรับการทดสอบจริง",
   "group": "mystery",
   "label": "สำรวจและตำรับ",
   "trigger": "star",
   "tier": 5,
   "weight": 0.16,
   "minDay": 162,
   "cooldown": 450,
   "cost": {
    "coin": 51,
    "stone": 28
   },
   "terms": [
    "จัดห้องถอดอักษร",
    "ลองเปิดบทที่ซ่อนอยู่",
    "คัดส่วนที่อ่านได้แน่ชัด"
   ],
   "stages": 3,
   "danger": 480,
   "reward": {
    "stone": 48
   }
  }
 },
 "traits": {
  "diligent": {
   "name": "ขยันมั่นคง",
   "desc": "ทำงานและฝึกดีขึ้น 15%",
   "work": 1.15
  },
  "genius": {
   "name": "หยั่งรู้ไว",
   "desc": "เข้าใจวิชาเร็วขึ้น",
   "learn": 1.35
  },
  "sturdy": {
   "name": "เลือดลมกล้า",
   "desc": "ทนการฝึกกายและฟื้นตัวดี",
   "recover": 1.3
  },
  "kind": {
   "name": "ใจเมตตา",
   "desc": "ได้รับความไว้วางใจจากชุมชนเพิ่ม",
   "trust": 1.4
  },
  "ambitious": {
   "name": "ทะเยอทะยาน",
   "desc": "ฝึกเร็วขึ้น แต่ศิษย์อาวุโสที่ไม่เลื่อนขั้นจะไม่พอใจ",
   "train": 1.15
  },
  "cautious": {
   "name": "รอบคอบ",
   "desc": "ทะลวงปลอดภัยขึ้น แต่ฝึกช้าลง",
   "train": 0.9,
   "risk": -0.05
  },
  "proud": {
   "name": "ถือศักดิ์ศรี",
   "desc": "ไม่ชอบงานรับใช้เมื่อเป็นผู้อาวุโส",
   "work": 0.95
  },
  "social": {
   "name": "ผูกมิตรเก่ง",
   "desc": "สร้างสัมพันธ์เร็วขึ้น",
   "social": 1.5
  },
  "hidden": {
   "name": "รากวิญญาณหลับใหล",
   "desc": "เมื่อผ่านด่านแรก ศักยภาพจะตื่นขึ้น",
   "train": 1
  },
  "smith": {
   "name": "มือหลอมประณีต",
   "desc": "เพิ่มฝีมือหลอม 20 และความเร็วผลิต",
   "craft": 1.15,
   "smith": 20
  },
  "alchemist": {
   "name": "สัมผัสโอสถ",
   "desc": "เพิ่มฝีมือปรุงยา 20 และความเร็วผลิต",
   "craft": 1.15,
   "alchemy": 20
  },
  "beastfriend": {
   "name": "สหายสัตว์วิเศษ",
   "desc": "ใช้สัตว์วิเศษเดินทางเร็วขึ้น 25%",
   "beastTravel": 1.25
  },
  "swordflight": {
   "name": "จิตควบคุมอาวุธบิน",
   "desc": "ใช้อาวุธบินเดินทางเร็วขึ้น 25%",
   "flight": 1.25
  },
  "receptive": {
   "name": "ร่างรับโอสถ",
   "desc": "ผลโอสถแรงขึ้น 20%",
   "pill": 1.2
  },
  "sensitive": {
   "name": "ไวต่อพิษโอสถ",
   "desc": "รับพิษโอสถเพิ่ม 50%",
   "toxin": 1.5
  },
  "resistant": {
   "name": "ทนพิษโอสถ",
   "desc": "รับพิษโอสถลด 30%",
   "toxin": 0.7
  },
  "organizer": {
   "name": "บริหารเป็นระบบ",
   "desc": "เพิ่มประสิทธิภาพบริหาร 20 เมื่อรับตำแหน่ง",
   "admin": 20
  },
  "fair": {
   "name": "ยุติธรรม",
   "desc": "ผู้นำช่วยความพึงพอใจของสมาชิก",
   "fair": 1
  },
  "biased": {
   "name": "ลำเอียง",
   "desc": "ผู้นำดูแลผู้สนิทเป็นพิเศษ ทำให้คนอื่นไม่พอใจ",
   "biased": 1
  },
  "diplomat": {
   "name": "วาทศิลป์",
   "desc": "เพิ่มผลของกำนัลเมื่อรับหน้าที่ทูต",
   "diplomacy": 0.15
  },
  "mentorGift": {
   "name": "อาจารย์โดยกำเนิด",
   "desc": "ช่วยถ่ายทอดวิชาเมื่อเป็นผู้นำหรือหัวหน้าฝ่าย",
   "teaching": 0.15
  },
  "swordGift": {
   "name": "กระบี่ในใจ",
   "desc": "ใช้กระบี่โจมตีแรงขึ้น 20%",
   "weapon": "sword"
  },
  "saberGift": {
   "name": "จิตดาบเด็ดเดี่ยว",
   "desc": "ใช้ดาบโจมตีแรงขึ้น 20%",
   "weapon": "saber"
  },
  "fanGift": {
   "name": "พัดประสานจิต",
   "desc": "ใช้พัดรักษาแรงขึ้น 25%",
   "weapon": "fan"
  },
  "slow": {
   "name": "รากปราณอืดช้า",
   "desc": "ฝึกช้าลง 20%",
   "train": 0.8
  },
  "rootGift": {
   "name": "รากปราณชั้นเลิศ",
   "desc": "ฝึกลมปราณเร็วขึ้นสองเท่า",
   "rare": 2
  },
  "insightGift": {
   "name": "ผู้หยั่งรู้โดยกำเนิด",
   "desc": "ฝึกเร็วขึ้น 50% และเรียนรู้ไว",
   "train": 1.5,
   "learn": 1.3
  },
  "heaven": {
   "name": "บุตรแห่งสวรรค์",
   "desc": "ฝึกเร็ว 3 เท่า หรือ 5 เท่าเมื่อรากธาตุตรงคัมภีร์ เพิ่มโอกาสทะลวง",
   "rare": 5
  },
  "destiny": {
   "name": "บุตรแห่งโชคชะตา",
   "desc": "มีโอกาสพบสมบัติเพิ่มและรอดจากการบาดเจ็บถึงตาย",
   "rare": 5
  },
  "yin": {
   "name": "ร่างหยิน",
   "desc": "ธาราฝึก 3 เท่า อัคคีเหลือ 0.8 เท่า",
   "rare": 3,
   "bodyGroup": true
  },
  "yang": {
   "name": "ร่างหยาง",
   "desc": "อัคคีฝึก 3 เท่า ธาราเหลือ 0.8 เท่า",
   "rare": 3,
   "bodyGroup": true
  },
  "yinyang": {
   "name": "ร่างหยินหยาง",
   "desc": "ธาราหรืออัคคีฝึก 4 เท่าเมื่อจิตใจมั่นคงและความล้าต่ำ",
   "rare": 5,
   "bodyGroup": true
  },
  "dragon": {
   "name": "สายเลือดมังกร",
   "desc": "กายาฝึก 4 เท่า เลือดและการฟื้นตัวดี กินอาหารบำรุงเพิ่ม",
   "rare": 4,
   "recover": 1.3
  }
 },
 "grades": [
  {
   "name": "สามัญ",
   "color": "#dce3e0"
  },
  {
   "name": "ชั้นดี",
   "color": "#76d797"
  },
  {
   "name": "ปราณ",
   "color": "#76bafa"
  },
  {
   "name": "วิญญาณ",
   "color": "#c398ff"
  },
  {
   "name": "เซียน",
   "color": "#f6d06d"
  },
  {
   "name": "เทวะ",
   "color": "#ff727b"
  }
 ],
 "quality": [
  "มาตรฐาน",
  "ประณีต",
  "สมบูรณ์"
 ],
 "slots": {
  "weapon": "อาวุธ",
  "armor": "เกราะ",
  "charm": "เครื่องราง",
  "mount": "พาหนะ",
  "boots": "รองเท้า",
  "tool": "เครื่องมือ"
 },
 "categories": {
  "weapon": "อาวุธ",
  "armor": "เกราะ",
  "charm": "เครื่องราง",
  "pill": "โอสถ",
  "mount": "พาหนะ",
  "material": "วัตถุดิบ",
  "boots": "รองเท้า",
  "tool": "เครื่องมือ"
 },
 "effects": {
  "atk": "พลังโจมตี",
  "armor": "เกราะป้องกัน",
  "hp": "เลือดสูงสุด",
  "mana": "พลังวิชาสูงสุด",
  "train": "ความเร็วฝึก",
  "break": "โอกาสทะลวง",
  "heal": "การรักษา",
  "work": "ผลผลิตแรงงาน",
  "craft": "ความเร็วผลิต",
  "travel": "ความเร็วเดินทาง",
  "faith": "ความจุศรัทธา",
  "loot": "เก็บทรัพยากร",
  "pierce": "เจาะเกราะ",
  "guard": "ลดความเสียหาย"
 },
 "affixes": {
  "none": {
   "name": "ไม่มีคุณสมบัติเสริม",
   "stats": {}
  },
  "keen": {
   "name": "คมกล้า",
   "stats": {
    "atk": 0.06
   }
  },
  "ward": {
   "name": "พิทักษ์",
   "stats": {
    "armor": 0.12
   }
  },
  "vital": {
   "name": "เปี่ยมชีวิต",
   "stats": {
    "hp": 0.1
   }
  },
  "clear": {
   "name": "จิตกระจ่าง",
   "stats": {
    "mana": 0.1
   }
  },
  "swift": {
   "name": "ว่องไว",
   "stats": {
    "travel": 0.1
   }
  },
  "insight": {
   "name": "หยั่งรู้",
   "stats": {
    "train": 0.06
   }
  }
 },
 "lootPools": {
  "forest": {
   "id": "forest",
   "theme": "bamboo",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "bamboo_sword_0",
       "weight": 100
      },
      {
       "id": "bamboo_saber_0",
       "weight": 100
      },
      {
       "id": "bamboo_spear_0",
       "weight": 100
      },
      {
       "id": "bamboo_bow_0",
       "weight": 100
      },
      {
       "id": "bamboo_fan_0",
       "weight": 100
      },
      {
       "id": "bamboo_fist_0",
       "weight": 100
      },
      {
       "id": "bamboo_staff_0",
       "weight": 100
      },
      {
       "id": "bamboo_dagger_0",
       "weight": 100
      },
      {
       "id": "bamboo_sword_1",
       "weight": 65
      },
      {
       "id": "bamboo_saber_1",
       "weight": 65
      },
      {
       "id": "bamboo_spear_1",
       "weight": 65
      },
      {
       "id": "bamboo_bow_1",
       "weight": 65
      },
      {
       "id": "bamboo_fan_1",
       "weight": 65
      },
      {
       "id": "bamboo_fist_1",
       "weight": 65
      },
      {
       "id": "bamboo_staff_1",
       "weight": 65
      },
      {
       "id": "bamboo_dagger_1",
       "weight": 65
      },
      {
       "id": "bamboo_sword_2",
       "weight": 32
      },
      {
       "id": "bamboo_saber_2",
       "weight": 32
      },
      {
       "id": "bamboo_spear_2",
       "weight": 32
      },
      {
       "id": "bamboo_bow_2",
       "weight": 32
      },
      {
       "id": "bamboo_fan_2",
       "weight": 32
      },
      {
       "id": "bamboo_fist_2",
       "weight": 32
      },
      {
       "id": "bamboo_staff_2",
       "weight": 32
      },
      {
       "id": "bamboo_dagger_2",
       "weight": 32
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "bamboo_armor_0",
       "weight": 100
      },
      {
       "id": "bamboo_robe_0",
       "weight": 100
      },
      {
       "id": "bamboo_armor_1",
       "weight": 65
      },
      {
       "id": "bamboo_robe_1",
       "weight": 65
      },
      {
       "id": "bamboo_armor_2",
       "weight": 32
      },
      {
       "id": "bamboo_robe_2",
       "weight": 32
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "bamboo_ring_0",
       "weight": 100
      },
      {
       "id": "bamboo_charm_0",
       "weight": 100
      },
      {
       "id": "bamboo_seal_0",
       "weight": 100
      },
      {
       "id": "bamboo_ring_1",
       "weight": 65
      },
      {
       "id": "bamboo_charm_1",
       "weight": 65
      },
      {
       "id": "bamboo_seal_1",
       "weight": 65
      },
      {
       "id": "bamboo_ring_2",
       "weight": 32
      },
      {
       "id": "bamboo_charm_2",
       "weight": 32
      },
      {
       "id": "bamboo_seal_2",
       "weight": 32
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "bamboo_boots_0",
       "weight": 100
      },
      {
       "id": "bamboo_boots_1",
       "weight": 65
      },
      {
       "id": "bamboo_boots_2",
       "weight": 32
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "bamboo_tool_0",
       "weight": 100
      },
      {
       "id": "bamboo_tool_1",
       "weight": 65
      },
      {
       "id": "bamboo_tool_2",
       "weight": 32
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_rest_0",
       "weight": 100
      },
      {
       "id": "pill_rest_1",
       "weight": 65
      },
      {
       "id": "pill_rest_2",
       "weight": 32
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_bamboo_0",
       "weight": 100
      },
      {
       "id": "mount_bamboo_1",
       "weight": 65
      },
      {
       "id": "mount_bamboo_2",
       "weight": 32
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_bamboo_0",
       "weight": 100
      },
      {
       "id": "mat_bamboo_1",
       "weight": 65
      },
      {
       "id": "mat_bamboo_2",
       "weight": 32
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "bamboo_sword_0",
     "weight": 100
    },
    {
     "id": "bamboo_saber_0",
     "weight": 100
    },
    {
     "id": "bamboo_spear_0",
     "weight": 100
    },
    {
     "id": "bamboo_bow_0",
     "weight": 100
    },
    {
     "id": "bamboo_fan_0",
     "weight": 100
    },
    {
     "id": "bamboo_fist_0",
     "weight": 100
    },
    {
     "id": "bamboo_staff_0",
     "weight": 100
    },
    {
     "id": "bamboo_dagger_0",
     "weight": 100
    },
    {
     "id": "bamboo_armor_0",
     "weight": 100
    },
    {
     "id": "bamboo_robe_0",
     "weight": 100
    },
    {
     "id": "bamboo_ring_0",
     "weight": 100
    },
    {
     "id": "bamboo_charm_0",
     "weight": 100
    },
    {
     "id": "bamboo_seal_0",
     "weight": 100
    },
    {
     "id": "bamboo_boots_0",
     "weight": 100
    },
    {
     "id": "bamboo_tool_0",
     "weight": 100
    },
    {
     "id": "bamboo_sword_1",
     "weight": 65
    },
    {
     "id": "bamboo_saber_1",
     "weight": 65
    },
    {
     "id": "bamboo_spear_1",
     "weight": 65
    },
    {
     "id": "bamboo_bow_1",
     "weight": 65
    },
    {
     "id": "bamboo_fan_1",
     "weight": 65
    },
    {
     "id": "bamboo_fist_1",
     "weight": 65
    },
    {
     "id": "bamboo_staff_1",
     "weight": 65
    },
    {
     "id": "bamboo_dagger_1",
     "weight": 65
    },
    {
     "id": "bamboo_armor_1",
     "weight": 65
    },
    {
     "id": "bamboo_robe_1",
     "weight": 65
    },
    {
     "id": "bamboo_ring_1",
     "weight": 65
    },
    {
     "id": "bamboo_charm_1",
     "weight": 65
    },
    {
     "id": "bamboo_seal_1",
     "weight": 65
    },
    {
     "id": "bamboo_boots_1",
     "weight": 65
    },
    {
     "id": "bamboo_tool_1",
     "weight": 65
    },
    {
     "id": "bamboo_sword_2",
     "weight": 32
    },
    {
     "id": "bamboo_saber_2",
     "weight": 32
    },
    {
     "id": "bamboo_spear_2",
     "weight": 32
    },
    {
     "id": "bamboo_bow_2",
     "weight": 32
    },
    {
     "id": "bamboo_fan_2",
     "weight": 32
    },
    {
     "id": "bamboo_fist_2",
     "weight": 32
    },
    {
     "id": "bamboo_staff_2",
     "weight": 32
    },
    {
     "id": "bamboo_dagger_2",
     "weight": 32
    },
    {
     "id": "bamboo_armor_2",
     "weight": 32
    },
    {
     "id": "bamboo_robe_2",
     "weight": 32
    },
    {
     "id": "bamboo_ring_2",
     "weight": 32
    },
    {
     "id": "bamboo_charm_2",
     "weight": 32
    },
    {
     "id": "bamboo_seal_2",
     "weight": 32
    },
    {
     "id": "bamboo_boots_2",
     "weight": 32
    },
    {
     "id": "bamboo_tool_2",
     "weight": 32
    },
    {
     "id": "pill_rest_0",
     "weight": 100
    },
    {
     "id": "pill_rest_1",
     "weight": 65
    },
    {
     "id": "pill_rest_2",
     "weight": 32
    },
    {
     "id": "mount_bamboo_0",
     "weight": 100
    },
    {
     "id": "mount_bamboo_1",
     "weight": 65
    },
    {
     "id": "mount_bamboo_2",
     "weight": 32
    }
   ]
  },
  "mine": {
   "id": "mine",
   "theme": "mountain",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "mountain_sword_0",
       "weight": 100
      },
      {
       "id": "mountain_saber_0",
       "weight": 100
      },
      {
       "id": "mountain_spear_0",
       "weight": 100
      },
      {
       "id": "mountain_bow_0",
       "weight": 100
      },
      {
       "id": "mountain_fan_0",
       "weight": 100
      },
      {
       "id": "mountain_fist_0",
       "weight": 100
      },
      {
       "id": "mountain_staff_0",
       "weight": 100
      },
      {
       "id": "mountain_dagger_0",
       "weight": 100
      },
      {
       "id": "mountain_sword_1",
       "weight": 65
      },
      {
       "id": "mountain_saber_1",
       "weight": 65
      },
      {
       "id": "mountain_spear_1",
       "weight": 65
      },
      {
       "id": "mountain_bow_1",
       "weight": 65
      },
      {
       "id": "mountain_fan_1",
       "weight": 65
      },
      {
       "id": "mountain_fist_1",
       "weight": 65
      },
      {
       "id": "mountain_staff_1",
       "weight": 65
      },
      {
       "id": "mountain_dagger_1",
       "weight": 65
      },
      {
       "id": "mountain_sword_2",
       "weight": 32
      },
      {
       "id": "mountain_saber_2",
       "weight": 32
      },
      {
       "id": "mountain_spear_2",
       "weight": 32
      },
      {
       "id": "mountain_bow_2",
       "weight": 32
      },
      {
       "id": "mountain_fan_2",
       "weight": 32
      },
      {
       "id": "mountain_fist_2",
       "weight": 32
      },
      {
       "id": "mountain_staff_2",
       "weight": 32
      },
      {
       "id": "mountain_dagger_2",
       "weight": 32
      },
      {
       "id": "mountain_sword_3",
       "weight": 12
      },
      {
       "id": "mountain_saber_3",
       "weight": 12
      },
      {
       "id": "mountain_spear_3",
       "weight": 12
      },
      {
       "id": "mountain_bow_3",
       "weight": 12
      },
      {
       "id": "mountain_fan_3",
       "weight": 12
      },
      {
       "id": "mountain_fist_3",
       "weight": 12
      },
      {
       "id": "mountain_staff_3",
       "weight": 12
      },
      {
       "id": "mountain_dagger_3",
       "weight": 12
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "mountain_armor_0",
       "weight": 100
      },
      {
       "id": "mountain_robe_0",
       "weight": 100
      },
      {
       "id": "mountain_armor_1",
       "weight": 65
      },
      {
       "id": "mountain_robe_1",
       "weight": 65
      },
      {
       "id": "mountain_armor_2",
       "weight": 32
      },
      {
       "id": "mountain_robe_2",
       "weight": 32
      },
      {
       "id": "mountain_armor_3",
       "weight": 12
      },
      {
       "id": "mountain_robe_3",
       "weight": 12
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "mountain_ring_0",
       "weight": 100
      },
      {
       "id": "mountain_charm_0",
       "weight": 100
      },
      {
       "id": "mountain_seal_0",
       "weight": 100
      },
      {
       "id": "mountain_ring_1",
       "weight": 65
      },
      {
       "id": "mountain_charm_1",
       "weight": 65
      },
      {
       "id": "mountain_seal_1",
       "weight": 65
      },
      {
       "id": "mountain_ring_2",
       "weight": 32
      },
      {
       "id": "mountain_charm_2",
       "weight": 32
      },
      {
       "id": "mountain_seal_2",
       "weight": 32
      },
      {
       "id": "mountain_ring_3",
       "weight": 12
      },
      {
       "id": "mountain_charm_3",
       "weight": 12
      },
      {
       "id": "mountain_seal_3",
       "weight": 12
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "mountain_boots_0",
       "weight": 100
      },
      {
       "id": "mountain_boots_1",
       "weight": 65
      },
      {
       "id": "mountain_boots_2",
       "weight": 32
      },
      {
       "id": "mountain_boots_3",
       "weight": 12
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "mountain_tool_0",
       "weight": 100
      },
      {
       "id": "mountain_tool_1",
       "weight": 65
      },
      {
       "id": "mountain_tool_2",
       "weight": 32
      },
      {
       "id": "mountain_tool_3",
       "weight": 12
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_armor_0",
       "weight": 100
      },
      {
       "id": "pill_armor_1",
       "weight": 65
      },
      {
       "id": "pill_armor_2",
       "weight": 32
      },
      {
       "id": "pill_armor_3",
       "weight": 12
      },
      {
       "id": "pill_foundation_0",
       "weight": 100
      },
      {
       "id": "pill_foundation_1",
       "weight": 65
      },
      {
       "id": "pill_foundation_2",
       "weight": 32
      },
      {
       "id": "pill_foundation_3",
       "weight": 12
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_mountain_0",
       "weight": 100
      },
      {
       "id": "mount_mountain_1",
       "weight": 65
      },
      {
       "id": "mount_mountain_2",
       "weight": 32
      },
      {
       "id": "mount_mountain_3",
       "weight": 12
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_mountain_0",
       "weight": 100
      },
      {
       "id": "mat_mountain_1",
       "weight": 65
      },
      {
       "id": "mat_mountain_2",
       "weight": 32
      },
      {
       "id": "mat_mountain_3",
       "weight": 12
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "mountain_sword_0",
     "weight": 100
    },
    {
     "id": "mountain_saber_0",
     "weight": 100
    },
    {
     "id": "mountain_spear_0",
     "weight": 100
    },
    {
     "id": "mountain_bow_0",
     "weight": 100
    },
    {
     "id": "mountain_fan_0",
     "weight": 100
    },
    {
     "id": "mountain_fist_0",
     "weight": 100
    },
    {
     "id": "mountain_staff_0",
     "weight": 100
    },
    {
     "id": "mountain_dagger_0",
     "weight": 100
    },
    {
     "id": "mountain_armor_0",
     "weight": 100
    },
    {
     "id": "mountain_robe_0",
     "weight": 100
    },
    {
     "id": "mountain_ring_0",
     "weight": 100
    },
    {
     "id": "mountain_charm_0",
     "weight": 100
    },
    {
     "id": "mountain_seal_0",
     "weight": 100
    },
    {
     "id": "mountain_boots_0",
     "weight": 100
    },
    {
     "id": "mountain_tool_0",
     "weight": 100
    },
    {
     "id": "mountain_sword_1",
     "weight": 65
    },
    {
     "id": "mountain_saber_1",
     "weight": 65
    },
    {
     "id": "mountain_spear_1",
     "weight": 65
    },
    {
     "id": "mountain_bow_1",
     "weight": 65
    },
    {
     "id": "mountain_fan_1",
     "weight": 65
    },
    {
     "id": "mountain_fist_1",
     "weight": 65
    },
    {
     "id": "mountain_staff_1",
     "weight": 65
    },
    {
     "id": "mountain_dagger_1",
     "weight": 65
    },
    {
     "id": "mountain_armor_1",
     "weight": 65
    },
    {
     "id": "mountain_robe_1",
     "weight": 65
    },
    {
     "id": "mountain_ring_1",
     "weight": 65
    },
    {
     "id": "mountain_charm_1",
     "weight": 65
    },
    {
     "id": "mountain_seal_1",
     "weight": 65
    },
    {
     "id": "mountain_boots_1",
     "weight": 65
    },
    {
     "id": "mountain_tool_1",
     "weight": 65
    },
    {
     "id": "mountain_sword_2",
     "weight": 32
    },
    {
     "id": "mountain_saber_2",
     "weight": 32
    },
    {
     "id": "mountain_spear_2",
     "weight": 32
    },
    {
     "id": "mountain_bow_2",
     "weight": 32
    },
    {
     "id": "mountain_fan_2",
     "weight": 32
    },
    {
     "id": "mountain_fist_2",
     "weight": 32
    },
    {
     "id": "mountain_staff_2",
     "weight": 32
    },
    {
     "id": "mountain_dagger_2",
     "weight": 32
    },
    {
     "id": "mountain_armor_2",
     "weight": 32
    },
    {
     "id": "mountain_robe_2",
     "weight": 32
    },
    {
     "id": "mountain_ring_2",
     "weight": 32
    },
    {
     "id": "mountain_charm_2",
     "weight": 32
    },
    {
     "id": "mountain_seal_2",
     "weight": 32
    },
    {
     "id": "mountain_boots_2",
     "weight": 32
    },
    {
     "id": "mountain_tool_2",
     "weight": 32
    },
    {
     "id": "mountain_sword_3",
     "weight": 12
    },
    {
     "id": "mountain_saber_3",
     "weight": 12
    },
    {
     "id": "mountain_spear_3",
     "weight": 12
    },
    {
     "id": "mountain_bow_3",
     "weight": 12
    },
    {
     "id": "mountain_fan_3",
     "weight": 12
    },
    {
     "id": "mountain_fist_3",
     "weight": 12
    },
    {
     "id": "mountain_staff_3",
     "weight": 12
    },
    {
     "id": "mountain_dagger_3",
     "weight": 12
    },
    {
     "id": "mountain_armor_3",
     "weight": 12
    },
    {
     "id": "mountain_robe_3",
     "weight": 12
    },
    {
     "id": "mountain_ring_3",
     "weight": 12
    },
    {
     "id": "mountain_charm_3",
     "weight": 12
    },
    {
     "id": "mountain_seal_3",
     "weight": 12
    },
    {
     "id": "mountain_boots_3",
     "weight": 12
    },
    {
     "id": "mountain_tool_3",
     "weight": 12
    },
    {
     "id": "pill_armor_0",
     "weight": 100
    },
    {
     "id": "pill_armor_1",
     "weight": 65
    },
    {
     "id": "pill_armor_2",
     "weight": 32
    },
    {
     "id": "pill_armor_3",
     "weight": 12
    },
    {
     "id": "pill_foundation_0",
     "weight": 100
    },
    {
     "id": "pill_foundation_1",
     "weight": 65
    },
    {
     "id": "pill_foundation_2",
     "weight": 32
    },
    {
     "id": "pill_foundation_3",
     "weight": 12
    },
    {
     "id": "mount_mountain_0",
     "weight": 100
    },
    {
     "id": "mount_mountain_1",
     "weight": 65
    },
    {
     "id": "mount_mountain_2",
     "weight": 32
    },
    {
     "id": "mount_mountain_3",
     "weight": 12
    }
   ]
  },
  "ruin": {
   "id": "ruin",
   "theme": "rain",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "rain_sword_1",
       "weight": 65
      },
      {
       "id": "rain_saber_1",
       "weight": 65
      },
      {
       "id": "rain_spear_1",
       "weight": 65
      },
      {
       "id": "rain_bow_1",
       "weight": 65
      },
      {
       "id": "rain_fan_1",
       "weight": 65
      },
      {
       "id": "rain_fist_1",
       "weight": 65
      },
      {
       "id": "rain_staff_1",
       "weight": 65
      },
      {
       "id": "rain_dagger_1",
       "weight": 65
      },
      {
       "id": "rain_sword_2",
       "weight": 32
      },
      {
       "id": "rain_saber_2",
       "weight": 32
      },
      {
       "id": "rain_spear_2",
       "weight": 32
      },
      {
       "id": "rain_bow_2",
       "weight": 32
      },
      {
       "id": "rain_fan_2",
       "weight": 32
      },
      {
       "id": "rain_fist_2",
       "weight": 32
      },
      {
       "id": "rain_staff_2",
       "weight": 32
      },
      {
       "id": "rain_dagger_2",
       "weight": 32
      },
      {
       "id": "rain_sword_3",
       "weight": 12
      },
      {
       "id": "rain_saber_3",
       "weight": 12
      },
      {
       "id": "rain_spear_3",
       "weight": 12
      },
      {
       "id": "rain_bow_3",
       "weight": 12
      },
      {
       "id": "rain_fan_3",
       "weight": 12
      },
      {
       "id": "rain_fist_3",
       "weight": 12
      },
      {
       "id": "rain_staff_3",
       "weight": 12
      },
      {
       "id": "rain_dagger_3",
       "weight": 12
      },
      {
       "id": "rain_sword_4",
       "weight": 3
      },
      {
       "id": "rain_saber_4",
       "weight": 3
      },
      {
       "id": "rain_spear_4",
       "weight": 3
      },
      {
       "id": "rain_bow_4",
       "weight": 3
      },
      {
       "id": "rain_fan_4",
       "weight": 3
      },
      {
       "id": "rain_fist_4",
       "weight": 3
      },
      {
       "id": "rain_staff_4",
       "weight": 3
      },
      {
       "id": "rain_dagger_4",
       "weight": 3
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "rain_armor_1",
       "weight": 65
      },
      {
       "id": "rain_robe_1",
       "weight": 65
      },
      {
       "id": "rain_armor_2",
       "weight": 32
      },
      {
       "id": "rain_robe_2",
       "weight": 32
      },
      {
       "id": "rain_armor_3",
       "weight": 12
      },
      {
       "id": "rain_robe_3",
       "weight": 12
      },
      {
       "id": "rain_armor_4",
       "weight": 3
      },
      {
       "id": "rain_robe_4",
       "weight": 3
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "rain_ring_1",
       "weight": 65
      },
      {
       "id": "rain_charm_1",
       "weight": 65
      },
      {
       "id": "rain_seal_1",
       "weight": 65
      },
      {
       "id": "rain_ring_2",
       "weight": 32
      },
      {
       "id": "rain_charm_2",
       "weight": 32
      },
      {
       "id": "rain_seal_2",
       "weight": 32
      },
      {
       "id": "rain_ring_3",
       "weight": 12
      },
      {
       "id": "rain_charm_3",
       "weight": 12
      },
      {
       "id": "rain_seal_3",
       "weight": 12
      },
      {
       "id": "rain_ring_4",
       "weight": 3
      },
      {
       "id": "rain_charm_4",
       "weight": 3
      },
      {
       "id": "rain_seal_4",
       "weight": 3
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "rain_boots_1",
       "weight": 65
      },
      {
       "id": "rain_boots_2",
       "weight": 32
      },
      {
       "id": "rain_boots_3",
       "weight": 12
      },
      {
       "id": "rain_boots_4",
       "weight": 3
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "rain_tool_1",
       "weight": 65
      },
      {
       "id": "rain_tool_2",
       "weight": 32
      },
      {
       "id": "rain_tool_3",
       "weight": 12
      },
      {
       "id": "rain_tool_4",
       "weight": 3
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_heal_1",
       "weight": 65
      },
      {
       "id": "pill_heal_2",
       "weight": 32
      },
      {
       "id": "pill_heal_3",
       "weight": 12
      },
      {
       "id": "pill_heal_4",
       "weight": 3
      },
      {
       "id": "pill_detox_1",
       "weight": 65
      },
      {
       "id": "pill_detox_2",
       "weight": 32
      },
      {
       "id": "pill_detox_3",
       "weight": 12
      },
      {
       "id": "pill_detox_4",
       "weight": 3
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_rain_1",
       "weight": 65
      },
      {
       "id": "mount_rain_2",
       "weight": 32
      },
      {
       "id": "mount_rain_3",
       "weight": 12
      },
      {
       "id": "mount_rain_4",
       "weight": 3
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_rain_1",
       "weight": 65
      },
      {
       "id": "mat_rain_2",
       "weight": 32
      },
      {
       "id": "mat_rain_3",
       "weight": 12
      },
      {
       "id": "mat_rain_4",
       "weight": 3
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "rain_sword_1",
     "weight": 65
    },
    {
     "id": "rain_saber_1",
     "weight": 65
    },
    {
     "id": "rain_spear_1",
     "weight": 65
    },
    {
     "id": "rain_bow_1",
     "weight": 65
    },
    {
     "id": "rain_fan_1",
     "weight": 65
    },
    {
     "id": "rain_fist_1",
     "weight": 65
    },
    {
     "id": "rain_staff_1",
     "weight": 65
    },
    {
     "id": "rain_dagger_1",
     "weight": 65
    },
    {
     "id": "rain_armor_1",
     "weight": 65
    },
    {
     "id": "rain_robe_1",
     "weight": 65
    },
    {
     "id": "rain_ring_1",
     "weight": 65
    },
    {
     "id": "rain_charm_1",
     "weight": 65
    },
    {
     "id": "rain_seal_1",
     "weight": 65
    },
    {
     "id": "rain_boots_1",
     "weight": 65
    },
    {
     "id": "rain_tool_1",
     "weight": 65
    },
    {
     "id": "rain_sword_2",
     "weight": 32
    },
    {
     "id": "rain_saber_2",
     "weight": 32
    },
    {
     "id": "rain_spear_2",
     "weight": 32
    },
    {
     "id": "rain_bow_2",
     "weight": 32
    },
    {
     "id": "rain_fan_2",
     "weight": 32
    },
    {
     "id": "rain_fist_2",
     "weight": 32
    },
    {
     "id": "rain_staff_2",
     "weight": 32
    },
    {
     "id": "rain_dagger_2",
     "weight": 32
    },
    {
     "id": "rain_armor_2",
     "weight": 32
    },
    {
     "id": "rain_robe_2",
     "weight": 32
    },
    {
     "id": "rain_ring_2",
     "weight": 32
    },
    {
     "id": "rain_charm_2",
     "weight": 32
    },
    {
     "id": "rain_seal_2",
     "weight": 32
    },
    {
     "id": "rain_boots_2",
     "weight": 32
    },
    {
     "id": "rain_tool_2",
     "weight": 32
    },
    {
     "id": "rain_sword_3",
     "weight": 12
    },
    {
     "id": "rain_saber_3",
     "weight": 12
    },
    {
     "id": "rain_spear_3",
     "weight": 12
    },
    {
     "id": "rain_bow_3",
     "weight": 12
    },
    {
     "id": "rain_fan_3",
     "weight": 12
    },
    {
     "id": "rain_fist_3",
     "weight": 12
    },
    {
     "id": "rain_staff_3",
     "weight": 12
    },
    {
     "id": "rain_dagger_3",
     "weight": 12
    },
    {
     "id": "rain_armor_3",
     "weight": 12
    },
    {
     "id": "rain_robe_3",
     "weight": 12
    },
    {
     "id": "rain_ring_3",
     "weight": 12
    },
    {
     "id": "rain_charm_3",
     "weight": 12
    },
    {
     "id": "rain_seal_3",
     "weight": 12
    },
    {
     "id": "rain_boots_3",
     "weight": 12
    },
    {
     "id": "rain_tool_3",
     "weight": 12
    },
    {
     "id": "rain_sword_4",
     "weight": 3
    },
    {
     "id": "rain_saber_4",
     "weight": 3
    },
    {
     "id": "rain_spear_4",
     "weight": 3
    },
    {
     "id": "rain_bow_4",
     "weight": 3
    },
    {
     "id": "rain_fan_4",
     "weight": 3
    },
    {
     "id": "rain_fist_4",
     "weight": 3
    },
    {
     "id": "rain_staff_4",
     "weight": 3
    },
    {
     "id": "rain_dagger_4",
     "weight": 3
    },
    {
     "id": "rain_armor_4",
     "weight": 3
    },
    {
     "id": "rain_robe_4",
     "weight": 3
    },
    {
     "id": "rain_ring_4",
     "weight": 3
    },
    {
     "id": "rain_charm_4",
     "weight": 3
    },
    {
     "id": "rain_seal_4",
     "weight": 3
    },
    {
     "id": "rain_boots_4",
     "weight": 3
    },
    {
     "id": "rain_tool_4",
     "weight": 3
    },
    {
     "id": "pill_heal_1",
     "weight": 65
    },
    {
     "id": "pill_heal_2",
     "weight": 32
    },
    {
     "id": "pill_heal_3",
     "weight": 12
    },
    {
     "id": "pill_heal_4",
     "weight": 3
    },
    {
     "id": "pill_detox_1",
     "weight": 65
    },
    {
     "id": "pill_detox_2",
     "weight": 32
    },
    {
     "id": "pill_detox_3",
     "weight": 12
    },
    {
     "id": "pill_detox_4",
     "weight": 3
    },
    {
     "id": "mount_rain_1",
     "weight": 65
    },
    {
     "id": "mount_rain_2",
     "weight": 32
    },
    {
     "id": "mount_rain_3",
     "weight": 12
    },
    {
     "id": "mount_rain_4",
     "weight": 3
    }
   ]
  },
  "peak": {
   "id": "peak",
   "theme": "thunder",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "thunder_sword_2",
       "weight": 32
      },
      {
       "id": "thunder_saber_2",
       "weight": 32
      },
      {
       "id": "thunder_spear_2",
       "weight": 32
      },
      {
       "id": "thunder_bow_2",
       "weight": 32
      },
      {
       "id": "thunder_fan_2",
       "weight": 32
      },
      {
       "id": "thunder_fist_2",
       "weight": 32
      },
      {
       "id": "thunder_staff_2",
       "weight": 32
      },
      {
       "id": "thunder_dagger_2",
       "weight": 32
      },
      {
       "id": "thunder_sword_3",
       "weight": 12
      },
      {
       "id": "thunder_saber_3",
       "weight": 12
      },
      {
       "id": "thunder_spear_3",
       "weight": 12
      },
      {
       "id": "thunder_bow_3",
       "weight": 12
      },
      {
       "id": "thunder_fan_3",
       "weight": 12
      },
      {
       "id": "thunder_fist_3",
       "weight": 12
      },
      {
       "id": "thunder_staff_3",
       "weight": 12
      },
      {
       "id": "thunder_dagger_3",
       "weight": 12
      },
      {
       "id": "thunder_sword_4",
       "weight": 3
      },
      {
       "id": "thunder_saber_4",
       "weight": 3
      },
      {
       "id": "thunder_spear_4",
       "weight": 3
      },
      {
       "id": "thunder_bow_4",
       "weight": 3
      },
      {
       "id": "thunder_fan_4",
       "weight": 3
      },
      {
       "id": "thunder_fist_4",
       "weight": 3
      },
      {
       "id": "thunder_staff_4",
       "weight": 3
      },
      {
       "id": "thunder_dagger_4",
       "weight": 3
      },
      {
       "id": "thunder_sword_5",
       "weight": 0.35
      },
      {
       "id": "thunder_saber_5",
       "weight": 0.35
      },
      {
       "id": "thunder_spear_5",
       "weight": 0.35
      },
      {
       "id": "thunder_bow_5",
       "weight": 0.35
      },
      {
       "id": "thunder_fan_5",
       "weight": 0.35
      },
      {
       "id": "thunder_fist_5",
       "weight": 0.35
      },
      {
       "id": "thunder_staff_5",
       "weight": 0.35
      },
      {
       "id": "thunder_dagger_5",
       "weight": 0.35
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "thunder_armor_2",
       "weight": 32
      },
      {
       "id": "thunder_robe_2",
       "weight": 32
      },
      {
       "id": "thunder_armor_3",
       "weight": 12
      },
      {
       "id": "thunder_robe_3",
       "weight": 12
      },
      {
       "id": "thunder_armor_4",
       "weight": 3
      },
      {
       "id": "thunder_robe_4",
       "weight": 3
      },
      {
       "id": "thunder_armor_5",
       "weight": 0.35
      },
      {
       "id": "thunder_robe_5",
       "weight": 0.35
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "thunder_ring_2",
       "weight": 32
      },
      {
       "id": "thunder_charm_2",
       "weight": 32
      },
      {
       "id": "thunder_seal_2",
       "weight": 32
      },
      {
       "id": "thunder_ring_3",
       "weight": 12
      },
      {
       "id": "thunder_charm_3",
       "weight": 12
      },
      {
       "id": "thunder_seal_3",
       "weight": 12
      },
      {
       "id": "thunder_ring_4",
       "weight": 3
      },
      {
       "id": "thunder_charm_4",
       "weight": 3
      },
      {
       "id": "thunder_seal_4",
       "weight": 3
      },
      {
       "id": "thunder_ring_5",
       "weight": 0.35
      },
      {
       "id": "thunder_charm_5",
       "weight": 0.35
      },
      {
       "id": "thunder_seal_5",
       "weight": 0.35
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "thunder_boots_2",
       "weight": 32
      },
      {
       "id": "thunder_boots_3",
       "weight": 12
      },
      {
       "id": "thunder_boots_4",
       "weight": 3
      },
      {
       "id": "thunder_boots_5",
       "weight": 0.35
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "thunder_tool_2",
       "weight": 32
      },
      {
       "id": "thunder_tool_3",
       "weight": 12
      },
      {
       "id": "thunder_tool_4",
       "weight": 3
      },
      {
       "id": "thunder_tool_5",
       "weight": 0.35
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_atk_2",
       "weight": 32
      },
      {
       "id": "pill_atk_3",
       "weight": 12
      },
      {
       "id": "pill_atk_4",
       "weight": 3
      },
      {
       "id": "pill_atk_5",
       "weight": 0.35
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_thunder_2",
       "weight": 32
      },
      {
       "id": "mount_thunder_3",
       "weight": 12
      },
      {
       "id": "mount_thunder_4",
       "weight": 3
      },
      {
       "id": "mount_thunder_5",
       "weight": 0.35
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_thunder_2",
       "weight": 32
      },
      {
       "id": "mat_thunder_3",
       "weight": 12
      },
      {
       "id": "mat_thunder_4",
       "weight": 3
      },
      {
       "id": "mat_thunder_5",
       "weight": 0.35
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "thunder_sword_2",
     "weight": 32
    },
    {
     "id": "thunder_saber_2",
     "weight": 32
    },
    {
     "id": "thunder_spear_2",
     "weight": 32
    },
    {
     "id": "thunder_bow_2",
     "weight": 32
    },
    {
     "id": "thunder_fan_2",
     "weight": 32
    },
    {
     "id": "thunder_fist_2",
     "weight": 32
    },
    {
     "id": "thunder_staff_2",
     "weight": 32
    },
    {
     "id": "thunder_dagger_2",
     "weight": 32
    },
    {
     "id": "thunder_armor_2",
     "weight": 32
    },
    {
     "id": "thunder_robe_2",
     "weight": 32
    },
    {
     "id": "thunder_ring_2",
     "weight": 32
    },
    {
     "id": "thunder_charm_2",
     "weight": 32
    },
    {
     "id": "thunder_seal_2",
     "weight": 32
    },
    {
     "id": "thunder_boots_2",
     "weight": 32
    },
    {
     "id": "thunder_tool_2",
     "weight": 32
    },
    {
     "id": "thunder_sword_3",
     "weight": 12
    },
    {
     "id": "thunder_saber_3",
     "weight": 12
    },
    {
     "id": "thunder_spear_3",
     "weight": 12
    },
    {
     "id": "thunder_bow_3",
     "weight": 12
    },
    {
     "id": "thunder_fan_3",
     "weight": 12
    },
    {
     "id": "thunder_fist_3",
     "weight": 12
    },
    {
     "id": "thunder_staff_3",
     "weight": 12
    },
    {
     "id": "thunder_dagger_3",
     "weight": 12
    },
    {
     "id": "thunder_armor_3",
     "weight": 12
    },
    {
     "id": "thunder_robe_3",
     "weight": 12
    },
    {
     "id": "thunder_ring_3",
     "weight": 12
    },
    {
     "id": "thunder_charm_3",
     "weight": 12
    },
    {
     "id": "thunder_seal_3",
     "weight": 12
    },
    {
     "id": "thunder_boots_3",
     "weight": 12
    },
    {
     "id": "thunder_tool_3",
     "weight": 12
    },
    {
     "id": "thunder_sword_4",
     "weight": 3
    },
    {
     "id": "thunder_saber_4",
     "weight": 3
    },
    {
     "id": "thunder_spear_4",
     "weight": 3
    },
    {
     "id": "thunder_bow_4",
     "weight": 3
    },
    {
     "id": "thunder_fan_4",
     "weight": 3
    },
    {
     "id": "thunder_fist_4",
     "weight": 3
    },
    {
     "id": "thunder_staff_4",
     "weight": 3
    },
    {
     "id": "thunder_dagger_4",
     "weight": 3
    },
    {
     "id": "thunder_armor_4",
     "weight": 3
    },
    {
     "id": "thunder_robe_4",
     "weight": 3
    },
    {
     "id": "thunder_ring_4",
     "weight": 3
    },
    {
     "id": "thunder_charm_4",
     "weight": 3
    },
    {
     "id": "thunder_seal_4",
     "weight": 3
    },
    {
     "id": "thunder_boots_4",
     "weight": 3
    },
    {
     "id": "thunder_tool_4",
     "weight": 3
    },
    {
     "id": "thunder_sword_5",
     "weight": 0.35
    },
    {
     "id": "thunder_saber_5",
     "weight": 0.35
    },
    {
     "id": "thunder_spear_5",
     "weight": 0.35
    },
    {
     "id": "thunder_bow_5",
     "weight": 0.35
    },
    {
     "id": "thunder_fan_5",
     "weight": 0.35
    },
    {
     "id": "thunder_fist_5",
     "weight": 0.35
    },
    {
     "id": "thunder_staff_5",
     "weight": 0.35
    },
    {
     "id": "thunder_dagger_5",
     "weight": 0.35
    },
    {
     "id": "thunder_armor_5",
     "weight": 0.35
    },
    {
     "id": "thunder_robe_5",
     "weight": 0.35
    },
    {
     "id": "thunder_ring_5",
     "weight": 0.35
    },
    {
     "id": "thunder_charm_5",
     "weight": 0.35
    },
    {
     "id": "thunder_seal_5",
     "weight": 0.35
    },
    {
     "id": "thunder_boots_5",
     "weight": 0.35
    },
    {
     "id": "thunder_tool_5",
     "weight": 0.35
    },
    {
     "id": "pill_atk_2",
     "weight": 32
    },
    {
     "id": "pill_atk_3",
     "weight": 12
    },
    {
     "id": "pill_atk_4",
     "weight": 3
    },
    {
     "id": "pill_atk_5",
     "weight": 0.35
    },
    {
     "id": "mount_thunder_2",
     "weight": 32
    },
    {
     "id": "mount_thunder_3",
     "weight": 12
    },
    {
     "id": "mount_thunder_4",
     "weight": 3
    },
    {
     "id": "mount_thunder_5",
     "weight": 0.35
    }
   ]
  },
  "temple": {
   "id": "temple",
   "theme": "ancestor",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "ancestor_sword_1",
       "weight": 65
      },
      {
       "id": "ancestor_saber_1",
       "weight": 65
      },
      {
       "id": "ancestor_spear_1",
       "weight": 65
      },
      {
       "id": "ancestor_bow_1",
       "weight": 65
      },
      {
       "id": "ancestor_fan_1",
       "weight": 65
      },
      {
       "id": "ancestor_fist_1",
       "weight": 65
      },
      {
       "id": "ancestor_staff_1",
       "weight": 65
      },
      {
       "id": "ancestor_dagger_1",
       "weight": 65
      },
      {
       "id": "ancestor_sword_2",
       "weight": 32
      },
      {
       "id": "ancestor_saber_2",
       "weight": 32
      },
      {
       "id": "ancestor_spear_2",
       "weight": 32
      },
      {
       "id": "ancestor_bow_2",
       "weight": 32
      },
      {
       "id": "ancestor_fan_2",
       "weight": 32
      },
      {
       "id": "ancestor_fist_2",
       "weight": 32
      },
      {
       "id": "ancestor_staff_2",
       "weight": 32
      },
      {
       "id": "ancestor_dagger_2",
       "weight": 32
      },
      {
       "id": "ancestor_sword_3",
       "weight": 12
      },
      {
       "id": "ancestor_saber_3",
       "weight": 12
      },
      {
       "id": "ancestor_spear_3",
       "weight": 12
      },
      {
       "id": "ancestor_bow_3",
       "weight": 12
      },
      {
       "id": "ancestor_fan_3",
       "weight": 12
      },
      {
       "id": "ancestor_fist_3",
       "weight": 12
      },
      {
       "id": "ancestor_staff_3",
       "weight": 12
      },
      {
       "id": "ancestor_dagger_3",
       "weight": 12
      },
      {
       "id": "ancestor_sword_4",
       "weight": 3
      },
      {
       "id": "ancestor_saber_4",
       "weight": 3
      },
      {
       "id": "ancestor_spear_4",
       "weight": 3
      },
      {
       "id": "ancestor_bow_4",
       "weight": 3
      },
      {
       "id": "ancestor_fan_4",
       "weight": 3
      },
      {
       "id": "ancestor_fist_4",
       "weight": 3
      },
      {
       "id": "ancestor_staff_4",
       "weight": 3
      },
      {
       "id": "ancestor_dagger_4",
       "weight": 3
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "ancestor_armor_1",
       "weight": 65
      },
      {
       "id": "ancestor_robe_1",
       "weight": 65
      },
      {
       "id": "ancestor_armor_2",
       "weight": 32
      },
      {
       "id": "ancestor_robe_2",
       "weight": 32
      },
      {
       "id": "ancestor_armor_3",
       "weight": 12
      },
      {
       "id": "ancestor_robe_3",
       "weight": 12
      },
      {
       "id": "ancestor_armor_4",
       "weight": 3
      },
      {
       "id": "ancestor_robe_4",
       "weight": 3
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "ancestor_ring_1",
       "weight": 65
      },
      {
       "id": "ancestor_charm_1",
       "weight": 65
      },
      {
       "id": "ancestor_seal_1",
       "weight": 65
      },
      {
       "id": "ancestor_ring_2",
       "weight": 32
      },
      {
       "id": "ancestor_charm_2",
       "weight": 32
      },
      {
       "id": "ancestor_seal_2",
       "weight": 32
      },
      {
       "id": "ancestor_ring_3",
       "weight": 12
      },
      {
       "id": "ancestor_charm_3",
       "weight": 12
      },
      {
       "id": "ancestor_seal_3",
       "weight": 12
      },
      {
       "id": "ancestor_ring_4",
       "weight": 3
      },
      {
       "id": "ancestor_charm_4",
       "weight": 3
      },
      {
       "id": "ancestor_seal_4",
       "weight": 3
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "ancestor_boots_1",
       "weight": 65
      },
      {
       "id": "ancestor_boots_2",
       "weight": 32
      },
      {
       "id": "ancestor_boots_3",
       "weight": 12
      },
      {
       "id": "ancestor_boots_4",
       "weight": 3
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "ancestor_tool_1",
       "weight": 65
      },
      {
       "id": "ancestor_tool_2",
       "weight": 32
      },
      {
       "id": "ancestor_tool_3",
       "weight": 12
      },
      {
       "id": "ancestor_tool_4",
       "weight": 3
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_faith_1",
       "weight": 65
      },
      {
       "id": "pill_faith_2",
       "weight": 32
      },
      {
       "id": "pill_faith_3",
       "weight": 12
      },
      {
       "id": "pill_faith_4",
       "weight": 3
      },
      {
       "id": "pill_understanding_1",
       "weight": 65
      },
      {
       "id": "pill_understanding_2",
       "weight": 32
      },
      {
       "id": "pill_understanding_3",
       "weight": 12
      },
      {
       "id": "pill_understanding_4",
       "weight": 3
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_ancestor_1",
       "weight": 65
      },
      {
       "id": "mount_ancestor_2",
       "weight": 32
      },
      {
       "id": "mount_ancestor_3",
       "weight": 12
      },
      {
       "id": "mount_ancestor_4",
       "weight": 3
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_ancestor_1",
       "weight": 65
      },
      {
       "id": "mat_ancestor_2",
       "weight": 32
      },
      {
       "id": "mat_ancestor_3",
       "weight": 12
      },
      {
       "id": "mat_ancestor_4",
       "weight": 3
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "ancestor_sword_1",
     "weight": 65
    },
    {
     "id": "ancestor_saber_1",
     "weight": 65
    },
    {
     "id": "ancestor_spear_1",
     "weight": 65
    },
    {
     "id": "ancestor_bow_1",
     "weight": 65
    },
    {
     "id": "ancestor_fan_1",
     "weight": 65
    },
    {
     "id": "ancestor_fist_1",
     "weight": 65
    },
    {
     "id": "ancestor_staff_1",
     "weight": 65
    },
    {
     "id": "ancestor_dagger_1",
     "weight": 65
    },
    {
     "id": "ancestor_armor_1",
     "weight": 65
    },
    {
     "id": "ancestor_robe_1",
     "weight": 65
    },
    {
     "id": "ancestor_ring_1",
     "weight": 65
    },
    {
     "id": "ancestor_charm_1",
     "weight": 65
    },
    {
     "id": "ancestor_seal_1",
     "weight": 65
    },
    {
     "id": "ancestor_boots_1",
     "weight": 65
    },
    {
     "id": "ancestor_tool_1",
     "weight": 65
    },
    {
     "id": "ancestor_sword_2",
     "weight": 32
    },
    {
     "id": "ancestor_saber_2",
     "weight": 32
    },
    {
     "id": "ancestor_spear_2",
     "weight": 32
    },
    {
     "id": "ancestor_bow_2",
     "weight": 32
    },
    {
     "id": "ancestor_fan_2",
     "weight": 32
    },
    {
     "id": "ancestor_fist_2",
     "weight": 32
    },
    {
     "id": "ancestor_staff_2",
     "weight": 32
    },
    {
     "id": "ancestor_dagger_2",
     "weight": 32
    },
    {
     "id": "ancestor_armor_2",
     "weight": 32
    },
    {
     "id": "ancestor_robe_2",
     "weight": 32
    },
    {
     "id": "ancestor_ring_2",
     "weight": 32
    },
    {
     "id": "ancestor_charm_2",
     "weight": 32
    },
    {
     "id": "ancestor_seal_2",
     "weight": 32
    },
    {
     "id": "ancestor_boots_2",
     "weight": 32
    },
    {
     "id": "ancestor_tool_2",
     "weight": 32
    },
    {
     "id": "ancestor_sword_3",
     "weight": 12
    },
    {
     "id": "ancestor_saber_3",
     "weight": 12
    },
    {
     "id": "ancestor_spear_3",
     "weight": 12
    },
    {
     "id": "ancestor_bow_3",
     "weight": 12
    },
    {
     "id": "ancestor_fan_3",
     "weight": 12
    },
    {
     "id": "ancestor_fist_3",
     "weight": 12
    },
    {
     "id": "ancestor_staff_3",
     "weight": 12
    },
    {
     "id": "ancestor_dagger_3",
     "weight": 12
    },
    {
     "id": "ancestor_armor_3",
     "weight": 12
    },
    {
     "id": "ancestor_robe_3",
     "weight": 12
    },
    {
     "id": "ancestor_ring_3",
     "weight": 12
    },
    {
     "id": "ancestor_charm_3",
     "weight": 12
    },
    {
     "id": "ancestor_seal_3",
     "weight": 12
    },
    {
     "id": "ancestor_boots_3",
     "weight": 12
    },
    {
     "id": "ancestor_tool_3",
     "weight": 12
    },
    {
     "id": "ancestor_sword_4",
     "weight": 3
    },
    {
     "id": "ancestor_saber_4",
     "weight": 3
    },
    {
     "id": "ancestor_spear_4",
     "weight": 3
    },
    {
     "id": "ancestor_bow_4",
     "weight": 3
    },
    {
     "id": "ancestor_fan_4",
     "weight": 3
    },
    {
     "id": "ancestor_fist_4",
     "weight": 3
    },
    {
     "id": "ancestor_staff_4",
     "weight": 3
    },
    {
     "id": "ancestor_dagger_4",
     "weight": 3
    },
    {
     "id": "ancestor_armor_4",
     "weight": 3
    },
    {
     "id": "ancestor_robe_4",
     "weight": 3
    },
    {
     "id": "ancestor_ring_4",
     "weight": 3
    },
    {
     "id": "ancestor_charm_4",
     "weight": 3
    },
    {
     "id": "ancestor_seal_4",
     "weight": 3
    },
    {
     "id": "ancestor_boots_4",
     "weight": 3
    },
    {
     "id": "ancestor_tool_4",
     "weight": 3
    },
    {
     "id": "pill_faith_1",
     "weight": 65
    },
    {
     "id": "pill_faith_2",
     "weight": 32
    },
    {
     "id": "pill_faith_3",
     "weight": 12
    },
    {
     "id": "pill_faith_4",
     "weight": 3
    },
    {
     "id": "pill_understanding_1",
     "weight": 65
    },
    {
     "id": "pill_understanding_2",
     "weight": 32
    },
    {
     "id": "pill_understanding_3",
     "weight": 12
    },
    {
     "id": "pill_understanding_4",
     "weight": 3
    },
    {
     "id": "mount_ancestor_1",
     "weight": 65
    },
    {
     "id": "mount_ancestor_2",
     "weight": 32
    },
    {
     "id": "mount_ancestor_3",
     "weight": 12
    },
    {
     "id": "mount_ancestor_4",
     "weight": 3
    }
   ]
  },
  "moon_cave": {
   "id": "moon_cave",
   "theme": "moon",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "moon_sword_0",
       "weight": 100
      },
      {
       "id": "moon_saber_0",
       "weight": 100
      },
      {
       "id": "moon_spear_0",
       "weight": 100
      },
      {
       "id": "moon_bow_0",
       "weight": 100
      },
      {
       "id": "moon_fan_0",
       "weight": 100
      },
      {
       "id": "moon_fist_0",
       "weight": 100
      },
      {
       "id": "moon_staff_0",
       "weight": 100
      },
      {
       "id": "moon_dagger_0",
       "weight": 100
      },
      {
       "id": "moon_sword_1",
       "weight": 65
      },
      {
       "id": "moon_saber_1",
       "weight": 65
      },
      {
       "id": "moon_spear_1",
       "weight": 65
      },
      {
       "id": "moon_bow_1",
       "weight": 65
      },
      {
       "id": "moon_fan_1",
       "weight": 65
      },
      {
       "id": "moon_fist_1",
       "weight": 65
      },
      {
       "id": "moon_staff_1",
       "weight": 65
      },
      {
       "id": "moon_dagger_1",
       "weight": 65
      },
      {
       "id": "moon_sword_2",
       "weight": 32
      },
      {
       "id": "moon_saber_2",
       "weight": 32
      },
      {
       "id": "moon_spear_2",
       "weight": 32
      },
      {
       "id": "moon_bow_2",
       "weight": 32
      },
      {
       "id": "moon_fan_2",
       "weight": 32
      },
      {
       "id": "moon_fist_2",
       "weight": 32
      },
      {
       "id": "moon_staff_2",
       "weight": 32
      },
      {
       "id": "moon_dagger_2",
       "weight": 32
      },
      {
       "id": "moon_sword_3",
       "weight": 12
      },
      {
       "id": "moon_saber_3",
       "weight": 12
      },
      {
       "id": "moon_spear_3",
       "weight": 12
      },
      {
       "id": "moon_bow_3",
       "weight": 12
      },
      {
       "id": "moon_fan_3",
       "weight": 12
      },
      {
       "id": "moon_fist_3",
       "weight": 12
      },
      {
       "id": "moon_staff_3",
       "weight": 12
      },
      {
       "id": "moon_dagger_3",
       "weight": 12
      },
      {
       "id": "moon_sword_4",
       "weight": 3
      },
      {
       "id": "moon_saber_4",
       "weight": 3
      },
      {
       "id": "moon_spear_4",
       "weight": 3
      },
      {
       "id": "moon_bow_4",
       "weight": 3
      },
      {
       "id": "moon_fan_4",
       "weight": 3
      },
      {
       "id": "moon_fist_4",
       "weight": 3
      },
      {
       "id": "moon_staff_4",
       "weight": 3
      },
      {
       "id": "moon_dagger_4",
       "weight": 3
      },
      {
       "id": "moon_sword_5",
       "weight": 0.35
      },
      {
       "id": "moon_saber_5",
       "weight": 0.35
      },
      {
       "id": "moon_spear_5",
       "weight": 0.35
      },
      {
       "id": "moon_bow_5",
       "weight": 0.35
      },
      {
       "id": "moon_fan_5",
       "weight": 0.35
      },
      {
       "id": "moon_fist_5",
       "weight": 0.35
      },
      {
       "id": "moon_staff_5",
       "weight": 0.35
      },
      {
       "id": "moon_dagger_5",
       "weight": 0.35
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "moon_armor_0",
       "weight": 100
      },
      {
       "id": "moon_robe_0",
       "weight": 100
      },
      {
       "id": "moon_armor_1",
       "weight": 65
      },
      {
       "id": "moon_robe_1",
       "weight": 65
      },
      {
       "id": "moon_armor_2",
       "weight": 32
      },
      {
       "id": "moon_robe_2",
       "weight": 32
      },
      {
       "id": "moon_armor_3",
       "weight": 12
      },
      {
       "id": "moon_robe_3",
       "weight": 12
      },
      {
       "id": "moon_armor_4",
       "weight": 3
      },
      {
       "id": "moon_robe_4",
       "weight": 3
      },
      {
       "id": "moon_armor_5",
       "weight": 0.35
      },
      {
       "id": "moon_robe_5",
       "weight": 0.35
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "moon_ring_0",
       "weight": 100
      },
      {
       "id": "moon_charm_0",
       "weight": 100
      },
      {
       "id": "moon_seal_0",
       "weight": 100
      },
      {
       "id": "moon_ring_1",
       "weight": 65
      },
      {
       "id": "moon_charm_1",
       "weight": 65
      },
      {
       "id": "moon_seal_1",
       "weight": 65
      },
      {
       "id": "moon_ring_2",
       "weight": 32
      },
      {
       "id": "moon_charm_2",
       "weight": 32
      },
      {
       "id": "moon_seal_2",
       "weight": 32
      },
      {
       "id": "moon_ring_3",
       "weight": 12
      },
      {
       "id": "moon_charm_3",
       "weight": 12
      },
      {
       "id": "moon_seal_3",
       "weight": 12
      },
      {
       "id": "moon_ring_4",
       "weight": 3
      },
      {
       "id": "moon_charm_4",
       "weight": 3
      },
      {
       "id": "moon_seal_4",
       "weight": 3
      },
      {
       "id": "moon_ring_5",
       "weight": 0.35
      },
      {
       "id": "moon_charm_5",
       "weight": 0.35
      },
      {
       "id": "moon_seal_5",
       "weight": 0.35
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "moon_boots_0",
       "weight": 100
      },
      {
       "id": "moon_boots_1",
       "weight": 65
      },
      {
       "id": "moon_boots_2",
       "weight": 32
      },
      {
       "id": "moon_boots_3",
       "weight": 12
      },
      {
       "id": "moon_boots_4",
       "weight": 3
      },
      {
       "id": "moon_boots_5",
       "weight": 0.35
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "moon_tool_0",
       "weight": 100
      },
      {
       "id": "moon_tool_1",
       "weight": 65
      },
      {
       "id": "moon_tool_2",
       "weight": 32
      },
      {
       "id": "moon_tool_3",
       "weight": 12
      },
      {
       "id": "moon_tool_4",
       "weight": 3
      },
      {
       "id": "moon_tool_5",
       "weight": 0.35
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_qi_0",
       "weight": 100
      },
      {
       "id": "pill_qi_1",
       "weight": 65
      },
      {
       "id": "pill_qi_2",
       "weight": 32
      },
      {
       "id": "pill_qi_3",
       "weight": 12
      },
      {
       "id": "pill_qi_4",
       "weight": 3
      },
      {
       "id": "pill_qi_5",
       "weight": 0.35
      },
      {
       "id": "pill_manaRestore_0",
       "weight": 100
      },
      {
       "id": "pill_manaRestore_1",
       "weight": 65
      },
      {
       "id": "pill_manaRestore_2",
       "weight": 32
      },
      {
       "id": "pill_manaRestore_3",
       "weight": 12
      },
      {
       "id": "pill_manaRestore_4",
       "weight": 3
      },
      {
       "id": "pill_manaRestore_5",
       "weight": 0.35
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_moon_0",
       "weight": 100
      },
      {
       "id": "mount_moon_1",
       "weight": 65
      },
      {
       "id": "mount_moon_2",
       "weight": 32
      },
      {
       "id": "mount_moon_3",
       "weight": 12
      },
      {
       "id": "mount_moon_4",
       "weight": 3
      },
      {
       "id": "mount_moon_5",
       "weight": 0.35
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_moon_0",
       "weight": 100
      },
      {
       "id": "mat_moon_1",
       "weight": 65
      },
      {
       "id": "mat_moon_2",
       "weight": 32
      },
      {
       "id": "mat_moon_3",
       "weight": 12
      },
      {
       "id": "mat_moon_4",
       "weight": 3
      },
      {
       "id": "mat_moon_5",
       "weight": 0.35
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "moon_sword_0",
     "weight": 100
    },
    {
     "id": "moon_saber_0",
     "weight": 100
    },
    {
     "id": "moon_spear_0",
     "weight": 100
    },
    {
     "id": "moon_bow_0",
     "weight": 100
    },
    {
     "id": "moon_fan_0",
     "weight": 100
    },
    {
     "id": "moon_fist_0",
     "weight": 100
    },
    {
     "id": "moon_staff_0",
     "weight": 100
    },
    {
     "id": "moon_dagger_0",
     "weight": 100
    },
    {
     "id": "moon_armor_0",
     "weight": 100
    },
    {
     "id": "moon_robe_0",
     "weight": 100
    },
    {
     "id": "moon_ring_0",
     "weight": 100
    },
    {
     "id": "moon_charm_0",
     "weight": 100
    },
    {
     "id": "moon_seal_0",
     "weight": 100
    },
    {
     "id": "moon_boots_0",
     "weight": 100
    },
    {
     "id": "moon_tool_0",
     "weight": 100
    },
    {
     "id": "moon_sword_1",
     "weight": 65
    },
    {
     "id": "moon_saber_1",
     "weight": 65
    },
    {
     "id": "moon_spear_1",
     "weight": 65
    },
    {
     "id": "moon_bow_1",
     "weight": 65
    },
    {
     "id": "moon_fan_1",
     "weight": 65
    },
    {
     "id": "moon_fist_1",
     "weight": 65
    },
    {
     "id": "moon_staff_1",
     "weight": 65
    },
    {
     "id": "moon_dagger_1",
     "weight": 65
    },
    {
     "id": "moon_armor_1",
     "weight": 65
    },
    {
     "id": "moon_robe_1",
     "weight": 65
    },
    {
     "id": "moon_ring_1",
     "weight": 65
    },
    {
     "id": "moon_charm_1",
     "weight": 65
    },
    {
     "id": "moon_seal_1",
     "weight": 65
    },
    {
     "id": "moon_boots_1",
     "weight": 65
    },
    {
     "id": "moon_tool_1",
     "weight": 65
    },
    {
     "id": "moon_sword_2",
     "weight": 32
    },
    {
     "id": "moon_saber_2",
     "weight": 32
    },
    {
     "id": "moon_spear_2",
     "weight": 32
    },
    {
     "id": "moon_bow_2",
     "weight": 32
    },
    {
     "id": "moon_fan_2",
     "weight": 32
    },
    {
     "id": "moon_fist_2",
     "weight": 32
    },
    {
     "id": "moon_staff_2",
     "weight": 32
    },
    {
     "id": "moon_dagger_2",
     "weight": 32
    },
    {
     "id": "moon_armor_2",
     "weight": 32
    },
    {
     "id": "moon_robe_2",
     "weight": 32
    },
    {
     "id": "moon_ring_2",
     "weight": 32
    },
    {
     "id": "moon_charm_2",
     "weight": 32
    },
    {
     "id": "moon_seal_2",
     "weight": 32
    },
    {
     "id": "moon_boots_2",
     "weight": 32
    },
    {
     "id": "moon_tool_2",
     "weight": 32
    },
    {
     "id": "moon_sword_3",
     "weight": 12
    },
    {
     "id": "moon_saber_3",
     "weight": 12
    },
    {
     "id": "moon_spear_3",
     "weight": 12
    },
    {
     "id": "moon_bow_3",
     "weight": 12
    },
    {
     "id": "moon_fan_3",
     "weight": 12
    },
    {
     "id": "moon_fist_3",
     "weight": 12
    },
    {
     "id": "moon_staff_3",
     "weight": 12
    },
    {
     "id": "moon_dagger_3",
     "weight": 12
    },
    {
     "id": "moon_armor_3",
     "weight": 12
    },
    {
     "id": "moon_robe_3",
     "weight": 12
    },
    {
     "id": "moon_ring_3",
     "weight": 12
    },
    {
     "id": "moon_charm_3",
     "weight": 12
    },
    {
     "id": "moon_seal_3",
     "weight": 12
    },
    {
     "id": "moon_boots_3",
     "weight": 12
    },
    {
     "id": "moon_tool_3",
     "weight": 12
    },
    {
     "id": "moon_sword_4",
     "weight": 3
    },
    {
     "id": "moon_saber_4",
     "weight": 3
    },
    {
     "id": "moon_spear_4",
     "weight": 3
    },
    {
     "id": "moon_bow_4",
     "weight": 3
    },
    {
     "id": "moon_fan_4",
     "weight": 3
    },
    {
     "id": "moon_fist_4",
     "weight": 3
    },
    {
     "id": "moon_staff_4",
     "weight": 3
    },
    {
     "id": "moon_dagger_4",
     "weight": 3
    },
    {
     "id": "moon_armor_4",
     "weight": 3
    },
    {
     "id": "moon_robe_4",
     "weight": 3
    },
    {
     "id": "moon_ring_4",
     "weight": 3
    },
    {
     "id": "moon_charm_4",
     "weight": 3
    },
    {
     "id": "moon_seal_4",
     "weight": 3
    },
    {
     "id": "moon_boots_4",
     "weight": 3
    },
    {
     "id": "moon_tool_4",
     "weight": 3
    },
    {
     "id": "moon_sword_5",
     "weight": 0.35
    },
    {
     "id": "moon_saber_5",
     "weight": 0.35
    },
    {
     "id": "moon_spear_5",
     "weight": 0.35
    },
    {
     "id": "moon_bow_5",
     "weight": 0.35
    },
    {
     "id": "moon_fan_5",
     "weight": 0.35
    },
    {
     "id": "moon_fist_5",
     "weight": 0.35
    },
    {
     "id": "moon_staff_5",
     "weight": 0.35
    },
    {
     "id": "moon_dagger_5",
     "weight": 0.35
    },
    {
     "id": "moon_armor_5",
     "weight": 0.35
    },
    {
     "id": "moon_robe_5",
     "weight": 0.35
    },
    {
     "id": "moon_ring_5",
     "weight": 0.35
    },
    {
     "id": "moon_charm_5",
     "weight": 0.35
    },
    {
     "id": "moon_seal_5",
     "weight": 0.35
    },
    {
     "id": "moon_boots_5",
     "weight": 0.35
    },
    {
     "id": "moon_tool_5",
     "weight": 0.35
    },
    {
     "id": "pill_qi_0",
     "weight": 100
    },
    {
     "id": "pill_qi_1",
     "weight": 65
    },
    {
     "id": "pill_qi_2",
     "weight": 32
    },
    {
     "id": "pill_qi_3",
     "weight": 12
    },
    {
     "id": "pill_qi_4",
     "weight": 3
    },
    {
     "id": "pill_qi_5",
     "weight": 0.35
    },
    {
     "id": "pill_manaRestore_0",
     "weight": 100
    },
    {
     "id": "pill_manaRestore_1",
     "weight": 65
    },
    {
     "id": "pill_manaRestore_2",
     "weight": 32
    },
    {
     "id": "pill_manaRestore_3",
     "weight": 12
    },
    {
     "id": "pill_manaRestore_4",
     "weight": 3
    },
    {
     "id": "pill_manaRestore_5",
     "weight": 0.35
    },
    {
     "id": "mount_moon_0",
     "weight": 100
    },
    {
     "id": "mount_moon_1",
     "weight": 65
    },
    {
     "id": "mount_moon_2",
     "weight": 32
    },
    {
     "id": "mount_moon_3",
     "weight": 12
    },
    {
     "id": "mount_moon_4",
     "weight": 3
    },
    {
     "id": "mount_moon_5",
     "weight": 0.35
    }
   ]
  },
  "dragon_nest": {
   "id": "dragon_nest",
   "theme": "dragon",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "dragon_sword_2",
       "weight": 32
      },
      {
       "id": "dragon_saber_2",
       "weight": 32
      },
      {
       "id": "dragon_spear_2",
       "weight": 32
      },
      {
       "id": "dragon_bow_2",
       "weight": 32
      },
      {
       "id": "dragon_fan_2",
       "weight": 32
      },
      {
       "id": "dragon_fist_2",
       "weight": 32
      },
      {
       "id": "dragon_staff_2",
       "weight": 32
      },
      {
       "id": "dragon_dagger_2",
       "weight": 32
      },
      {
       "id": "dragon_sword_3",
       "weight": 12
      },
      {
       "id": "dragon_saber_3",
       "weight": 12
      },
      {
       "id": "dragon_spear_3",
       "weight": 12
      },
      {
       "id": "dragon_bow_3",
       "weight": 12
      },
      {
       "id": "dragon_fan_3",
       "weight": 12
      },
      {
       "id": "dragon_fist_3",
       "weight": 12
      },
      {
       "id": "dragon_staff_3",
       "weight": 12
      },
      {
       "id": "dragon_dagger_3",
       "weight": 12
      },
      {
       "id": "dragon_sword_4",
       "weight": 3
      },
      {
       "id": "dragon_saber_4",
       "weight": 3
      },
      {
       "id": "dragon_spear_4",
       "weight": 3
      },
      {
       "id": "dragon_bow_4",
       "weight": 3
      },
      {
       "id": "dragon_fan_4",
       "weight": 3
      },
      {
       "id": "dragon_fist_4",
       "weight": 3
      },
      {
       "id": "dragon_staff_4",
       "weight": 3
      },
      {
       "id": "dragon_dagger_4",
       "weight": 3
      },
      {
       "id": "dragon_sword_5",
       "weight": 0.35
      },
      {
       "id": "dragon_saber_5",
       "weight": 0.35
      },
      {
       "id": "dragon_spear_5",
       "weight": 0.35
      },
      {
       "id": "dragon_bow_5",
       "weight": 0.35
      },
      {
       "id": "dragon_fan_5",
       "weight": 0.35
      },
      {
       "id": "dragon_fist_5",
       "weight": 0.35
      },
      {
       "id": "dragon_staff_5",
       "weight": 0.35
      },
      {
       "id": "dragon_dagger_5",
       "weight": 0.35
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "dragon_armor_2",
       "weight": 32
      },
      {
       "id": "dragon_robe_2",
       "weight": 32
      },
      {
       "id": "dragon_armor_3",
       "weight": 12
      },
      {
       "id": "dragon_robe_3",
       "weight": 12
      },
      {
       "id": "dragon_armor_4",
       "weight": 3
      },
      {
       "id": "dragon_robe_4",
       "weight": 3
      },
      {
       "id": "dragon_armor_5",
       "weight": 0.35
      },
      {
       "id": "dragon_robe_5",
       "weight": 0.35
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "dragon_ring_2",
       "weight": 32
      },
      {
       "id": "dragon_charm_2",
       "weight": 32
      },
      {
       "id": "dragon_seal_2",
       "weight": 32
      },
      {
       "id": "dragon_ring_3",
       "weight": 12
      },
      {
       "id": "dragon_charm_3",
       "weight": 12
      },
      {
       "id": "dragon_seal_3",
       "weight": 12
      },
      {
       "id": "dragon_ring_4",
       "weight": 3
      },
      {
       "id": "dragon_charm_4",
       "weight": 3
      },
      {
       "id": "dragon_seal_4",
       "weight": 3
      },
      {
       "id": "dragon_ring_5",
       "weight": 0.35
      },
      {
       "id": "dragon_charm_5",
       "weight": 0.35
      },
      {
       "id": "dragon_seal_5",
       "weight": 0.35
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "dragon_boots_2",
       "weight": 32
      },
      {
       "id": "dragon_boots_3",
       "weight": 12
      },
      {
       "id": "dragon_boots_4",
       "weight": 3
      },
      {
       "id": "dragon_boots_5",
       "weight": 0.35
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "dragon_tool_2",
       "weight": 32
      },
      {
       "id": "dragon_tool_3",
       "weight": 12
      },
      {
       "id": "dragon_tool_4",
       "weight": 3
      },
      {
       "id": "dragon_tool_5",
       "weight": 0.35
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_body_2",
       "weight": 32
      },
      {
       "id": "pill_body_3",
       "weight": 12
      },
      {
       "id": "pill_body_4",
       "weight": 3
      },
      {
       "id": "pill_body_5",
       "weight": 0.35
      },
      {
       "id": "pill_permanentHp_2",
       "weight": 32
      },
      {
       "id": "pill_permanentHp_3",
       "weight": 12
      },
      {
       "id": "pill_permanentHp_4",
       "weight": 3
      },
      {
       "id": "pill_permanentHp_5",
       "weight": 0.35
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_dragon_2",
       "weight": 32
      },
      {
       "id": "mount_dragon_3",
       "weight": 12
      },
      {
       "id": "mount_dragon_4",
       "weight": 3
      },
      {
       "id": "mount_dragon_5",
       "weight": 0.35
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_dragon_2",
       "weight": 32
      },
      {
       "id": "mat_dragon_3",
       "weight": 12
      },
      {
       "id": "mat_dragon_4",
       "weight": 3
      },
      {
       "id": "mat_dragon_5",
       "weight": 0.35
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "dragon_sword_2",
     "weight": 32
    },
    {
     "id": "dragon_saber_2",
     "weight": 32
    },
    {
     "id": "dragon_spear_2",
     "weight": 32
    },
    {
     "id": "dragon_bow_2",
     "weight": 32
    },
    {
     "id": "dragon_fan_2",
     "weight": 32
    },
    {
     "id": "dragon_fist_2",
     "weight": 32
    },
    {
     "id": "dragon_staff_2",
     "weight": 32
    },
    {
     "id": "dragon_dagger_2",
     "weight": 32
    },
    {
     "id": "dragon_armor_2",
     "weight": 32
    },
    {
     "id": "dragon_robe_2",
     "weight": 32
    },
    {
     "id": "dragon_ring_2",
     "weight": 32
    },
    {
     "id": "dragon_charm_2",
     "weight": 32
    },
    {
     "id": "dragon_seal_2",
     "weight": 32
    },
    {
     "id": "dragon_boots_2",
     "weight": 32
    },
    {
     "id": "dragon_tool_2",
     "weight": 32
    },
    {
     "id": "dragon_sword_3",
     "weight": 12
    },
    {
     "id": "dragon_saber_3",
     "weight": 12
    },
    {
     "id": "dragon_spear_3",
     "weight": 12
    },
    {
     "id": "dragon_bow_3",
     "weight": 12
    },
    {
     "id": "dragon_fan_3",
     "weight": 12
    },
    {
     "id": "dragon_fist_3",
     "weight": 12
    },
    {
     "id": "dragon_staff_3",
     "weight": 12
    },
    {
     "id": "dragon_dagger_3",
     "weight": 12
    },
    {
     "id": "dragon_armor_3",
     "weight": 12
    },
    {
     "id": "dragon_robe_3",
     "weight": 12
    },
    {
     "id": "dragon_ring_3",
     "weight": 12
    },
    {
     "id": "dragon_charm_3",
     "weight": 12
    },
    {
     "id": "dragon_seal_3",
     "weight": 12
    },
    {
     "id": "dragon_boots_3",
     "weight": 12
    },
    {
     "id": "dragon_tool_3",
     "weight": 12
    },
    {
     "id": "dragon_sword_4",
     "weight": 3
    },
    {
     "id": "dragon_saber_4",
     "weight": 3
    },
    {
     "id": "dragon_spear_4",
     "weight": 3
    },
    {
     "id": "dragon_bow_4",
     "weight": 3
    },
    {
     "id": "dragon_fan_4",
     "weight": 3
    },
    {
     "id": "dragon_fist_4",
     "weight": 3
    },
    {
     "id": "dragon_staff_4",
     "weight": 3
    },
    {
     "id": "dragon_dagger_4",
     "weight": 3
    },
    {
     "id": "dragon_armor_4",
     "weight": 3
    },
    {
     "id": "dragon_robe_4",
     "weight": 3
    },
    {
     "id": "dragon_ring_4",
     "weight": 3
    },
    {
     "id": "dragon_charm_4",
     "weight": 3
    },
    {
     "id": "dragon_seal_4",
     "weight": 3
    },
    {
     "id": "dragon_boots_4",
     "weight": 3
    },
    {
     "id": "dragon_tool_4",
     "weight": 3
    },
    {
     "id": "dragon_sword_5",
     "weight": 0.35
    },
    {
     "id": "dragon_saber_5",
     "weight": 0.35
    },
    {
     "id": "dragon_spear_5",
     "weight": 0.35
    },
    {
     "id": "dragon_bow_5",
     "weight": 0.35
    },
    {
     "id": "dragon_fan_5",
     "weight": 0.35
    },
    {
     "id": "dragon_fist_5",
     "weight": 0.35
    },
    {
     "id": "dragon_staff_5",
     "weight": 0.35
    },
    {
     "id": "dragon_dagger_5",
     "weight": 0.35
    },
    {
     "id": "dragon_armor_5",
     "weight": 0.35
    },
    {
     "id": "dragon_robe_5",
     "weight": 0.35
    },
    {
     "id": "dragon_ring_5",
     "weight": 0.35
    },
    {
     "id": "dragon_charm_5",
     "weight": 0.35
    },
    {
     "id": "dragon_seal_5",
     "weight": 0.35
    },
    {
     "id": "dragon_boots_5",
     "weight": 0.35
    },
    {
     "id": "dragon_tool_5",
     "weight": 0.35
    },
    {
     "id": "pill_body_2",
     "weight": 32
    },
    {
     "id": "pill_body_3",
     "weight": 12
    },
    {
     "id": "pill_body_4",
     "weight": 3
    },
    {
     "id": "pill_body_5",
     "weight": 0.35
    },
    {
     "id": "pill_permanentHp_2",
     "weight": 32
    },
    {
     "id": "pill_permanentHp_3",
     "weight": 12
    },
    {
     "id": "pill_permanentHp_4",
     "weight": 3
    },
    {
     "id": "pill_permanentHp_5",
     "weight": 0.35
    },
    {
     "id": "mount_dragon_2",
     "weight": 32
    },
    {
     "id": "mount_dragon_3",
     "weight": 12
    },
    {
     "id": "mount_dragon_4",
     "weight": 3
    },
    {
     "id": "mount_dragon_5",
     "weight": 0.35
    }
   ]
  },
  "star_vault": {
   "id": "star_vault",
   "theme": "void",
   "categories": {
    "weapon": {
     "weight": 26,
     "entries": [
      {
       "id": "void_sword_3",
       "weight": 12
      },
      {
       "id": "void_saber_3",
       "weight": 12
      },
      {
       "id": "void_spear_3",
       "weight": 12
      },
      {
       "id": "void_bow_3",
       "weight": 12
      },
      {
       "id": "void_fan_3",
       "weight": 12
      },
      {
       "id": "void_fist_3",
       "weight": 12
      },
      {
       "id": "void_staff_3",
       "weight": 12
      },
      {
       "id": "void_dagger_3",
       "weight": 12
      },
      {
       "id": "void_sword_4",
       "weight": 3
      },
      {
       "id": "void_saber_4",
       "weight": 3
      },
      {
       "id": "void_spear_4",
       "weight": 3
      },
      {
       "id": "void_bow_4",
       "weight": 3
      },
      {
       "id": "void_fan_4",
       "weight": 3
      },
      {
       "id": "void_fist_4",
       "weight": 3
      },
      {
       "id": "void_staff_4",
       "weight": 3
      },
      {
       "id": "void_dagger_4",
       "weight": 3
      },
      {
       "id": "void_sword_5",
       "weight": 0.35
      },
      {
       "id": "void_saber_5",
       "weight": 0.35
      },
      {
       "id": "void_spear_5",
       "weight": 0.35
      },
      {
       "id": "void_bow_5",
       "weight": 0.35
      },
      {
       "id": "void_fan_5",
       "weight": 0.35
      },
      {
       "id": "void_fist_5",
       "weight": 0.35
      },
      {
       "id": "void_staff_5",
       "weight": 0.35
      },
      {
       "id": "void_dagger_5",
       "weight": 0.35
      }
     ]
    },
    "armor": {
     "weight": 14,
     "entries": [
      {
       "id": "void_armor_3",
       "weight": 12
      },
      {
       "id": "void_robe_3",
       "weight": 12
      },
      {
       "id": "void_armor_4",
       "weight": 3
      },
      {
       "id": "void_robe_4",
       "weight": 3
      },
      {
       "id": "void_armor_5",
       "weight": 0.35
      },
      {
       "id": "void_robe_5",
       "weight": 0.35
      }
     ]
    },
    "charm": {
     "weight": 12,
     "entries": [
      {
       "id": "void_ring_3",
       "weight": 12
      },
      {
       "id": "void_charm_3",
       "weight": 12
      },
      {
       "id": "void_seal_3",
       "weight": 12
      },
      {
       "id": "void_ring_4",
       "weight": 3
      },
      {
       "id": "void_charm_4",
       "weight": 3
      },
      {
       "id": "void_seal_4",
       "weight": 3
      },
      {
       "id": "void_ring_5",
       "weight": 0.35
      },
      {
       "id": "void_charm_5",
       "weight": 0.35
      },
      {
       "id": "void_seal_5",
       "weight": 0.35
      }
     ]
    },
    "boots": {
     "weight": 7,
     "entries": [
      {
       "id": "void_boots_3",
       "weight": 12
      },
      {
       "id": "void_boots_4",
       "weight": 3
      },
      {
       "id": "void_boots_5",
       "weight": 0.35
      }
     ]
    },
    "tool": {
     "weight": 6,
     "entries": [
      {
       "id": "void_tool_3",
       "weight": 12
      },
      {
       "id": "void_tool_4",
       "weight": 3
      },
      {
       "id": "void_tool_5",
       "weight": 0.35
      }
     ]
    },
    "pill": {
     "weight": 19,
     "entries": [
      {
       "id": "pill_break_3",
       "weight": 12
      },
      {
       "id": "pill_break_4",
       "weight": 3
      },
      {
       "id": "pill_break_5",
       "weight": 0.35
      },
      {
       "id": "pill_permanentMana_3",
       "weight": 12
      },
      {
       "id": "pill_permanentMana_4",
       "weight": 3
      },
      {
       "id": "pill_permanentMana_5",
       "weight": 0.35
      }
     ]
    },
    "mount": {
     "weight": 6,
     "entries": [
      {
       "id": "mount_void_3",
       "weight": 12
      },
      {
       "id": "mount_void_4",
       "weight": 3
      },
      {
       "id": "mount_void_5",
       "weight": 0.35
      }
     ]
    },
    "material": {
     "weight": 10,
     "entries": [
      {
       "id": "mat_void_3",
       "weight": 12
      },
      {
       "id": "mat_void_4",
       "weight": 3
      },
      {
       "id": "mat_void_5",
       "weight": 0.35
      }
     ]
    }
   },
   "recipes": [
    {
     "id": "void_sword_3",
     "weight": 12
    },
    {
     "id": "void_saber_3",
     "weight": 12
    },
    {
     "id": "void_spear_3",
     "weight": 12
    },
    {
     "id": "void_bow_3",
     "weight": 12
    },
    {
     "id": "void_fan_3",
     "weight": 12
    },
    {
     "id": "void_fist_3",
     "weight": 12
    },
    {
     "id": "void_staff_3",
     "weight": 12
    },
    {
     "id": "void_dagger_3",
     "weight": 12
    },
    {
     "id": "void_armor_3",
     "weight": 12
    },
    {
     "id": "void_robe_3",
     "weight": 12
    },
    {
     "id": "void_ring_3",
     "weight": 12
    },
    {
     "id": "void_charm_3",
     "weight": 12
    },
    {
     "id": "void_seal_3",
     "weight": 12
    },
    {
     "id": "void_boots_3",
     "weight": 12
    },
    {
     "id": "void_tool_3",
     "weight": 12
    },
    {
     "id": "void_sword_4",
     "weight": 3
    },
    {
     "id": "void_saber_4",
     "weight": 3
    },
    {
     "id": "void_spear_4",
     "weight": 3
    },
    {
     "id": "void_bow_4",
     "weight": 3
    },
    {
     "id": "void_fan_4",
     "weight": 3
    },
    {
     "id": "void_fist_4",
     "weight": 3
    },
    {
     "id": "void_staff_4",
     "weight": 3
    },
    {
     "id": "void_dagger_4",
     "weight": 3
    },
    {
     "id": "void_armor_4",
     "weight": 3
    },
    {
     "id": "void_robe_4",
     "weight": 3
    },
    {
     "id": "void_ring_4",
     "weight": 3
    },
    {
     "id": "void_charm_4",
     "weight": 3
    },
    {
     "id": "void_seal_4",
     "weight": 3
    },
    {
     "id": "void_boots_4",
     "weight": 3
    },
    {
     "id": "void_tool_4",
     "weight": 3
    },
    {
     "id": "void_sword_5",
     "weight": 0.35
    },
    {
     "id": "void_saber_5",
     "weight": 0.35
    },
    {
     "id": "void_spear_5",
     "weight": 0.35
    },
    {
     "id": "void_bow_5",
     "weight": 0.35
    },
    {
     "id": "void_fan_5",
     "weight": 0.35
    },
    {
     "id": "void_fist_5",
     "weight": 0.35
    },
    {
     "id": "void_staff_5",
     "weight": 0.35
    },
    {
     "id": "void_dagger_5",
     "weight": 0.35
    },
    {
     "id": "void_armor_5",
     "weight": 0.35
    },
    {
     "id": "void_robe_5",
     "weight": 0.35
    },
    {
     "id": "void_ring_5",
     "weight": 0.35
    },
    {
     "id": "void_charm_5",
     "weight": 0.35
    },
    {
     "id": "void_seal_5",
     "weight": 0.35
    },
    {
     "id": "void_boots_5",
     "weight": 0.35
    },
    {
     "id": "void_tool_5",
     "weight": 0.35
    },
    {
     "id": "pill_break_3",
     "weight": 12
    },
    {
     "id": "pill_break_4",
     "weight": 3
    },
    {
     "id": "pill_break_5",
     "weight": 0.35
    },
    {
     "id": "pill_permanentMana_3",
     "weight": 12
    },
    {
     "id": "pill_permanentMana_4",
     "weight": 3
    },
    {
     "id": "pill_permanentMana_5",
     "weight": 0.35
    },
    {
     "id": "mount_void_3",
     "weight": 12
    },
    {
     "id": "mount_void_4",
     "weight": 3
    },
    {
     "id": "mount_void_5",
     "weight": 0.35
    }
   ]
  }
 },
 "themes": {
  "bamboo": {
   "name": "ไผ่หมอก",
   "tiers": [
    0,
    1,
    2
   ],
   "words": [
    "ไผ่สงบ",
    "ใบไผ่วายุ",
    "ไผ่หยกวิญญาณ"
   ],
   "bonus": {
    "work": 0.06
   },
   "terrain": "forest"
  },
  "moon": {
   "name": "จันทรา",
   "tiers": [
    0,
    1,
    2,
    3,
    4,
    5
   ],
   "words": [
    "แสงจันทร์",
    "เงาจันทร์",
    "จันทร์เย็น",
    "เหมันต์จันทรา",
    "จันทราดับดารา",
    "จันทราเทวะ"
   ],
   "bonus": {
    "mana": 0.06
   },
   "terrain": "water"
  },
  "mountain": {
   "name": "ภูผา",
   "tiers": [
    0,
    1,
    2,
    3
   ],
   "words": [
    "ศิลาดำ",
    "ผาหนัก",
    "ศิลาปราณ",
    "ภูผาวัชระ"
   ],
   "bonus": {
    "armor": 0.07
   },
   "terrain": "rock"
  },
  "rain": {
   "name": "ธาราฝน",
   "tiers": [
    1,
    2,
    3,
    4
   ],
   "words": [
    "",
    "หยาดฝน",
    "ธาราหยก",
    "พิรุณคืนชีพ",
    "สมุทรเมตตา"
   ],
   "bonus": {
    "heal": 0.06
   },
   "terrain": "water"
  },
  "thunder": {
   "name": "อัสนี",
   "tiers": [
    2,
    3,
    4,
    5
   ],
   "words": [
    "",
    "",
    "ประกายอัสนี",
    "อัสนีพิโรธ",
    "อัสนีทลายฟ้า",
    "ทัณฑ์เทวะ"
   ],
   "bonus": {
    "pierce": 0.06
   },
   "terrain": "rock"
  },
  "ancestor": {
   "name": "บรรพชน",
   "tiers": [
    1,
    2,
    3,
    4
   ],
   "words": [
    "",
    "ประทีปเก่า",
    "วิญญาณบรรพชน",
    "บรรพชนพิทักษ์",
    "บรรพชนหมื่นปี"
   ],
   "bonus": {
    "faith": 0.08
   },
   "terrain": "plain"
  },
  "dragon": {
   "name": "มังกร",
   "tiers": [
    2,
    3,
    4,
    5
   ],
   "words": [
    "",
    "",
    "เขี้ยวมังกร",
    "เกล็ดมังกร",
    "มังกรผงาด",
    "มังกรต้นกำเนิด"
   ],
   "bonus": {
    "hp": 0.07
   },
   "terrain": "rock"
  },
  "void": {
   "name": "ดาราเร้น",
   "tiers": [
    3,
    4,
    5
   ],
   "words": [
    "",
    "",
    "",
    "ดาราเร้นเงา",
    "ดาราผ่านภพ",
    "ดาราต้นกำเนิด"
   ],
   "bonus": {
    "train": 0.035
   },
   "terrain": "plain"
  }
 },
 "artEffects": {
  "atk": "พลังโจมตี",
  "armor": "เกราะป้องกัน",
  "hp": "เลือดสูงสุด",
  "mana": "พลังวิชาสูงสุด",
  "train": "ความเร็วฝึก",
  "break": "โอกาสทะลวง",
  "heal": "การรักษา",
  "work": "ผลผลิตแรงงาน",
  "craft": "ความเร็วผลิต",
  "travel": "ความเร็วเดินทาง",
  "faith": "ความจุศรัทธา",
  "loot": "เก็บทรัพยากร",
  "pierce": "เจาะเกราะ",
  "guard": "ลดความเสียหาย",
  "burst": "พลังเปิดฉาก",
  "control": "ตรึงศัตรู",
  "flight": "ควบคุมอาวุธบิน",
  "beastTravel": "ควบคุมสัตว์พาหนะ",
  "smith": "ฝีมือหลอม",
  "alchemy": "ฝีมือปรุงยา",
  "cleave": "โจมตีหมู่",
  "drain": "ดูดพลังฟื้นเลือด",
  "counter": "สวนกลับ",
  "regen": "ฟื้นเลือดระหว่างรบ",
  "shield": "ม่านป้องกัน",
  "weaken": "ลดกำลังศัตรู"
 },
 "lifeVoices": {
  "farm": [
   "เดินตรวจร่องน้ำก่อนลงมือ เก็บเกี่ยวได้มากเท่าใดก็หมายถึงวันฝึกที่ทุกคนจะมีเพิ่มขึ้น",
   "ยอมวางตำรับไว้ข้างแปลง วันนี้ข้าวในยุ้งสำคัญกว่าความก้าวหน้าของตน",
   "คัดเมล็ดและแบ่งน้ำตามสภาพฟ้า ความขยันช่วยได้ แต่ฝนแล้งยังเป็นข้อจำกัด"
  ],
  "herb": [
   "แยกสมุนไพรที่ใช้รักษาออกจากส่วนสำหรับฝึก รู้ดีว่าคนเจ็บกำลังรออยู่",
   "จดสภาพแปลงยาและใบที่เก็บได้ ความรู้เล็กน้อยนี้สะสมเป็นเสบียงของสำนัก",
   "เก็บรากอย่างระมัดระวัง ยาที่ถูกใช้วันนี้ต้องมีต้นใหม่ให้เก็บในวันหน้า"
  ],
  "wood": [
   "กลับจากชายป่าพร้อมวัสดุที่ต้องใช้ทั้งสร้างเรือนและแลกเงิน",
   "ทำงานที่ไม่มีแสงแห่งการทะลวงขั้น แต่ทุกอาคารเริ่มจากแรงคนเหล่านี้",
   "ตรวจเครื่องมือก่อนออกไป ต้นไม้ที่ตัดคือเวลาฝึกที่ตนยอมแลก"
  ],
  "mine": [
   "แยกแร่จากเศษหินเพื่อส่งโรงหลอม ฝีมือช่างยังต้องรอวัตถุดิบจากที่นี่",
   "กลับจากเหมืองอย่างเหน็ดเหนื่อย พร้อมแร่ที่ช่วยให้งานค้างเดินหน้า",
   "รู้ว่างานใช้แรง แต่การมีวัสดุเองช่วยลดภาระเงินของสำนัก"
  ],
  "meditate": [
   "นั่งรวบรวมปราณให้คลังส่วนกลาง ผู้ฝึกอีกหลายคนใช้สิ่งที่ตนสะสม",
   "ประคองลมหายใจตามสภาพพลังรอบเขา วันหมอกปราณให้ผลต่างจากวันแล้ง",
   "ยังไม่ได้ฝึกเพื่อตนเต็มที่ แต่หินปราณที่สะสมทำให้สำนักเดินต่อได้"
  ],
  "craft": [
   "กลับไปตรวจงานชิ้นเดิมอีกครั้ง ความสำเร็จต้องใช้ทั้งวัสดุและวันทำงานจริง",
   "แบ่งเวลาตามคิวโรงหลอม ฝีมือเพิ่มขึ้นจากการลงมือมากกว่าคำชื่นชม",
   "ตามหาสาเหตุที่งานเดินช้า โรงหลอมดีเพียงใดก็ไม่ช่วยเมื่อไม่มีคนหรือวัสดุ"
  ],
  "research": [
   "เทียบอักษรหลายฉบับ สิ่งที่ยังไม่เข้าใจถูกจดไว้ให้คนรุ่นหลัง",
   "ค่อย ๆ เปลี่ยนเวลาศึกษาเป็นความรู้ส่วนกลาง ไม่มีตำรับใหม่เกิดจากการอ่านเพียงวันเดียว",
   "จัดระเบียบข้อสังเกต วันนี้ยังไม่ค้นพบ แต่ความเข้าใจของตนเพิ่มขึ้น"
  ],
  "preach": [
   "ไปพบผู้คนที่ฝากความหวังไว้ ความศรัทธาจะมั่นคงได้เมื่อหน้าที่ถูกทำจริง",
   "ฟังความเดือดร้อนก่อนกล่าวคำปลอบ พรที่ให้ต้องตรงกับปณิธานของตน",
   "กลับจากชุมชนพร้อมความคาดหวังใหม่ ผู้ศรัทธามีชีวิตที่ต้องดูแล ไม่ใช่แค่ตัวเลข"
  ],
  "guard": [
   "ตรวจประตูและเส้นทางรอบสำนัก ความปลอดภัยที่ดีเปิดโอกาสให้คนอื่นฝึก",
   "ยืนเวรขณะที่ผู้อื่นอ่านตำรับ ผลงานวันนี้คือความเสี่ยงที่ลดลง",
   "ฟังเสียงจากแนวป่าและจดความผิดปกติ ยังไม่ใช่หลักฐานว่ามีผู้บุกรุก"
  ],
  "teach": [
   "ย้อนอธิบายรากฐานให้ผู้ที่ยังตามไม่ทัน การสอนทำให้ตนเข้าใจเรื่องเดิมลึกขึ้น",
   "เว้นจังหวะให้ศิษย์ถาม ผู้สอนที่อยู่จริงสำคัญกว่าตำแหน่งบนกระดาษ",
   "เฝ้าดูผู้เรียนลองผิดลองถูก ความสำเร็จของลูกศิษย์กำลังกลายเป็นผลงานของตน"
  ],
  "train": [
   "กลับมาทบทวนส่วนที่ยังติดขัด ความก้าวหน้าวันนี้ขึ้นกับสุขภาพ ฐานราก และทรัพยากร",
   "เดินตามคัมภีร์ของตนโดยไม่เห็นปลายทางทั้งหมด ความรีบร้อนกับความมั่นคงมีราคาต่างกัน",
   "สังเกตการเปลี่ยนแปลงในตนทีละน้อย คนที่ก้าวเร็วกว่าอาจไม่ได้มีต้นทุนเท่ากัน"
  ],
  "study": [
   "อ่านซ้ำและทดลองตามตำรับ การมีม้วนในห้องหนังสือยังไม่เท่ากับเรียนสำเร็จ",
   "พักงานเดิมเพื่อเรียนรู้สิ่งใหม่ เมื่อเรียนจบต้องกลับไปทำหน้าที่ที่รับไว้",
   "จดจุดที่ใช้ไม่ได้และรอคำอธิบาย ความสามารถใหม่ต้องมีเวลาให้เข้าใจ"
  ],
  "rest": [
   "ยอมพักก่อนฝืนร่างกาย อาการบาดเจ็บและความล้าต้องใช้เวลาฟื้นจริง",
   "เห็นผู้อื่นฝึกขณะตนพัก แต่การกลับมาสมบูรณ์สำคัญกว่าการเร่งอีกวัน",
   "นอนพักและปรับลมหายใจ สำหรับผู้หลอมกาย ช่วงฟื้นตัวเป็นส่วนหนึ่งของการฝึก"
  ]
 },
 "directions": {
  "balanced": "เติบโตอย่างสมดุล",
  "learning": "สำนักแห่งการถ่ายทอด",
  "craft": "สำนักช่างและการค้า",
  "community": "สำนักคุ้มครองชุมชน"
 },
 "admissions": {
  "open": "รับคนหลากหลาย",
  "talent": "เน้นพรสวรรค์",
  "service": "เน้นช่างและผู้บริหาร"
 }
};
