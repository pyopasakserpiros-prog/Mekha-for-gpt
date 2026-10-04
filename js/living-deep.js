/* 1.4: multi-slot daily lives, personality×duty, leader item policy, foreign pulse. */
(function(G){'use strict';const N=G.N,P=G.PATCH,C=G.clamp;
G.VERSION='1.4.0';G.SCHEMA=5;
Object.assign(N.ACTIVITIES,{
  cook:'ปรุงอาหารส่วนตัว',patrol:'ลาดตระเวนนอกเวร',write:'จดบันทึกวิชา',court:'ผูกพันใกล้ชิด',
  gossip:'ฟังข่าวในสำนัก',pray:'นั่งสมาธิและสวด',market:'ไปตลาดชุมชน',secret:'ฝึกวิชาลับส่วนตัว',
  garden:'ดูแลแปลงส่วนตัว',feast:'สังสรรค์ยามค่ำ',letter:'เขียนจดหมาย',tidy:'จัดของและที่พัก',
  extra_teach:'สอนนอกเวลา',stargaze:'ดูดาวครุ่นคิด',nap:'งีบพักระหว่างวัน',spectate:'ดูการประลอง',
  help_other:'ช่วยงานต่างหน้าที่',journal:'เขียนบันทึกชีวิต'
});
N.SLOTS=['dawn','morning','midday','afternoon','dusk','night'];
N.SLOT_NAME={dawn:'รุ่งอรุณ',morning:'เช้า',midday:'เที่ยง',afternoon:'บ่าย',dusk:'เย็น',night:'ค่ำ'};
N.DUTY_SLOTS={farm:['dawn','morning','afternoon'],herb:['morning','afternoon'],mine:['morning','afternoon'],wood:['dawn','morning','afternoon'],hunt:['dawn','morning','dusk'],build:['morning','afternoon'],craft:['morning','afternoon','night'],teach:['morning','afternoon'],guard:['dusk','night','dawn'],preach:['morning','dusk'],heal:['morning','afternoon','night'],service:['morning','afternoon'],cultivate:['dawn','morning','night'],rest:['morning','afternoon','night'],study:['morning','afternoon','night']};
N.CORE_KEYS={recover:1,reflect:1,read:1,practice:1,consult:1,social:1,mentor:1,spar:1,maintain:1,supply:1,community:1,research:1,copy:1,govern:1,mediate:1,reconcile:1,learn:1,outing:1};
N.FOREIGN_KEYS=['recover','supply','diplomacy','defense','social','consult','reflect','train','trade','recruit','festival','spy','craft_side','rest_night','scheme'];
N._claims={};N._planningSlot='dusk';N._dayKeys=[];

const ip=N.initPerson;N.initPerson=c=>{ip(c);const l=c.mx.life;l.agenda??=[];l.mood??={tag:'content',energy:70,spirit:65,drive:50,lonely:20};l.habits??={personal:N.hash(c.id+'habit')%7,nightOwl:N.hash(c.id+'owl')%3===0,early:N.hash(c.id+'lark')%3===0,market:N.hash(c.id+'bazaar')%7};l.projects??=[];l.variety??=0;l.slotCounts??={};return c};
const init=N.init;N.init=s=>{init(s);const m=s.patch.management,w=s.patch.worldLife;m.deepLife??=true;m.leaderUse??=true;w.pulse??=0;w.leaderUses??=0;w.lastPulse??=-1;w.lastUtilize??=-1;w.utilizeRev??=-1;w.style??= '';w.worldEvents??=[];w.considerations??=0;return s};
G.MIGRATE[4]=s=>{N.init(s);s.schema=5;s.v=G.VERSION;return s};

N.moodOf=c=>{const energy=C(100-c.fat*.7-c.stress*.35-(100-c.hp)*.4,0,100),spirit=C((c.mind+c.sat)/2,0,100),drive=C(c.at.amb*.5+(c.prog>=(G.PATHS[c.path].realms[c.realm]?.need||Infinity)?28:0)+(N.hasTrait(c,'ambitious')?18:0)-(N.hasTrait(c,'lazy')?15:0),0,100),lonely=C(55-c.at.soc*.25-(c.sat-50)*.2,0,100);const tag=c.hp<45||c.fat>80?'weary':c.stress>70?'agitated':drive>72?'driven':lonely>58?'lonely':spirit>70&&energy>55?'content':'restless';c.mx.life.mood={tag,energy,spirit,drive,lonely};return c.mx.life.mood};
N.leaderStyle=c=>{if(!c)return {cautious:40,ambitious:40,fair:40,nepotism:20,scholar:40,martial:40,merchant:40,craftsman:40,pious:40,organizer:40,caring:40,label:'ไม่มีผู้บริหาร'};const has=k=>N.hasTrait(c,k)||c.traits.includes(k);const s={
  cautious:C(c.at.cau+(has('cautious')||has('timid')?28:0),0,100),
  ambitious:C(c.at.amb+(has('ambitious')?30:0),0,100),
  fair:C(50+(has('fair')?35:0)-(has('biased')?35:0)+c.at.loy*.1,0,100),
  nepotism:C((has('biased')?55:10)+c.at.loy*.15,0,100),
  scholar:C(c.at.int*.7+(has('mentorGift')?25:0)+(c.job==='teach'?12:0),0,100),
  martial:C(c.at.cou*.7+(c.path==='body'?18:0)+(c.job==='guard'||c.job==='hunt'?12:0),0,100),
  merchant:C(c.at.admin*.45+c.at.soc*.4,0,100),
  craftsman:C(c.at.craft+(has('smith')||has('alchemist')?20:0),0,100),
  pious:C(c.apt.faith*.6+(c.path==='faith'?25:0)+(c.job==='preach'?12:0),0,100),
  organizer:C(c.at.admin+(has('organizer')?28:0),0,100),
  caring:C(c.at.soc*.4+(has('kind')||has('fair')?22:0)+(c.job==='heal'?18:0),0,100)
};const top=Object.entries(s).sort((a,b)=>b[1]-a[1])[0];s.label=({cautious:'เหรัญญิกผู้รอบคอบ',ambitious:'ผู้ขยายสำนัก',fair:'ผู้ปกครองเที่ยงธรรม',nepotism:'ผู้ลำเอียงเข้าข้างคนใกล้',scholar:'ปราชญ์หอวิชา',martial:'ผู้นำสายรบ',merchant:'พ่อค้านักการทูต',craftsman:'ผู้อุปถัมภ์งานช่าง',pious:'ผู้นำศรัทธา',organizer:'ผู้ประสานฝ่าย',caring:'ผู้ดูแลชีวิตศิษย์'}[top[0]]||'ผู้บริหาร');s.top=top[0];s.name=c.name;s.admin=c.at.admin;return s};
N.styleText=()=>{const p=N.managementProfile(),st=N.leaderStyle(N.activeLeader());return (p.name||'ว่าง')+' · '+st.label+(p.acting?' (รักษาการ)':'')+' · บริหาร '+p.admin};

N.recentKeys=(c,n=14)=>c.mx.life.history.slice(0,n*2).map(x=>x.key);
N.dow=()=>G.S.day%7;

const origPlan=N.planCandidates;
N.planCandidates=(c,local)=>{const xs=origPlan(c,local),s=G.S,l=c.mx.life,slot=N._planningSlot,mood=N.moodOf(c),duty=(N.DUTY_SLOTS[c.job]||['morning','afternoon']).includes(slot),add=(key,score,why,target,data)=>{if((l.cooldowns[key]||0)>s.day&&key!=='recover'&&key!=='nap')return;if(N._dayKeys.includes(key))score-=45;const recent=l.history.slice(0,18).filter(x=>x.key===key).length;score-=recent*7;if(l.preferences.includes(key))score+=6;score+=(N.hash(c.id+'|'+s.day+'|'+slot+'|'+key)%11)/4;xs.push({key,score,why,target:target?.id||null,data:data||null})};
if(s.res.food>2)add('cook',18+c.at.craft*.12+(c.job==='farm'?10:0)+(slot==='midday'||slot==='dusk'?14:0),'ปรุงจากเสบียงจริงให้ร่างกายพร้อมงาน');
if(['guard','hunt'].includes(c.job)||c.at.cou>60)add('patrol',16+c.at.cou*.2+(s.beastP>50?22:0)+(slot==='night'||slot==='dawn'?12:0),'ลาดตระเวนรับแรงกดดันอสูรและข่าวรอบสำนัก');
if(s.fac.library&&c.at.int>45)add('write',20+c.at.int*.18+(c.mx.arts.length?8:0)+(slot==='night'?10:0),'จดสิ่งที่เรียนและฝึกไว้เป็นสมุดส่วนตัว');
let crush=null,cs=-Infinity;for(const t of local){if(t===c||t.mx.busyUntil>s.day||t.mx.study)continue;const b=(c.rel[t.id]||0)+t.at.soc*.2-(Math.abs(t.realm-c.realm)*4);if(b>cs&&(c.rel[t.id]||0)>25){crush=t;cs=b}}
if(crush&&(slot==='dusk'||slot==='night'||slot==='midday'))add('court',14+c.at.soc*.25+(c.rel[crush.id]||0)*.12+(mood.lonely>50?16:0),'เลือกคนที่สัมพันธ์ลึกพอจะแบ่งเวลานอกงาน',crush);
add('gossip',12+c.at.soc*.3+(slot==='midday'||slot==='dusk'?10:0)+(mood.tag==='restless'?8:0),'ฟังข่าวหน้าที่ การเมืองในสำนัก และชีวิตคนอื่น');
if(c.path==='faith'||c.job==='preach'||c.apt.faith>55)add('pray',22+c.apt.faith*.2+(slot==='dawn'||slot==='night'?14:0),'สะสมจิตและศรัทธาก่อนกลับไปทำหน้าที่');
if(s.villages.length&&(N.dow()===c.mx.life.habits.market||slot==='midday'))add('market',18+c.at.soc*.15+(c.job==='service'?14:0),'ไปตลาดชุมชนตามวันเคยและดูราคาของจริง');
if(c.at.amb>60||N.hasTrait(c,'ambitious')||mood.drive>70)add('secret',16+c.at.amb*.2+(slot==='night'?18:0)-(duty?12:0),'ฝึกเพิ่มนอกแผนสำนัก เพราะยังไม่พอใจความก้าวหน้า');
if(c.job==='farm'||c.job==='herb'||c.path==='faith')add('garden',14+c.at.con*.1+(slot==='dawn'?10:0),'ดูแลแปลงเล็กที่ผูกกับงานและมรรคา');
if(slot==='night'||N.dow()===6)add('feast',10+c.at.soc*.35+(mood.spirit<45?12:0)-(N.hasTrait(c,'diligent')?10:0),'คลายเครียดกับคนในสำนักยามค่ำหรือวันพัก');
if(c.at.soc>40)add('letter',12+c.at.int*.1+(c.patron?8:0),'เขียนถึงชุมชนหรือสหายที่ออกนอกสำนัก');
add('tidy',10+c.at.dis*.25+(slot==='night'?8:0)+(N.hasTrait(c,'organizer')?12:0),'จัดที่พัก อุปกรณ์ และของที่ได้มา');
if(c.rank>=2||c.job==='teach')add('extra_teach',18+c.at.int*.15+(slot==='dusk'?8:0),'แบ่งเวลาสอนนอกตาราง เพราะหน้าที่ถ่ายทอดยังไม่จบแค่เวรเช้า');
if(c.at.int>50&&(slot==='night'||slot==='dawn'))add('stargaze',14+(100-c.mind)*.2+(mood.tag==='restless'?10:0),'หยุดคิดและจัดระเบียบใจก่อนวันใหม่');
if(mood.energy<42||c.fat>70||slot==='midday')add('nap',8+(100-mood.energy)*.4+(N.hasTrait(c,'lazy')?18:0)-(N.hasTrait(c,'diligent')?8:0),'งีบเพื่อให้เวรถัดไปยังทำงานได้');
if(local.some(t=>t!==c&&t.mx.life.plan?.key==='spar'))add('spectate',11+c.at.cou*.12+(slot==='dusk'?10:0),'เรียนรู้จากประลองของคนอื่นแทนการลงเองทุกวัน');
if(s.buildQ.length||s.patch.orders.length)add('help_other',20+c.loy*.15+(duty?8:0),'งานก่อสร้างหรือคิวผลิตยังค้าง ช่วยต่างหน้าที่ได้');
add('journal',8+c.at.int*.1+(slot==='night'?12:0),'บันทึกผลฝึกและอารมณ์ของวันนี้');
for(const x of xs)N.reweightOne(c,x,slot,mood,duty);
s.patch.worldLife.considerations+=xs.length;l.evaluations+=xs.length;return xs.sort((a,b)=>b.score-a.score||a.key.localeCompare(b.key))};

N.reweightOne=(c,x,slot,mood,duty)=>{const s=G.S,l=c.mx.life,recent=N.recentKeys(c,10),uniq=new Set(recent).size,job=c.job;
if(recent.slice(0,6).filter(k=>k===x.key).length>=3)x.score-=28;
if(recent[0]===x.key)x.score-=35;
if(N._dayKeys.includes(x.key))x.score-=45;
if(uniq<5&&!recent.includes(x.key))x.score+=14;
if(l.variety<3&&!recent.includes(x.key))x.score+=10;
if(duty){if(['supply','maintain','research','copy','govern','mediate','practice','patrol','help_other','extra_teach','heal'].includes(x.key)||(job==='farm'&&x.key==='garden')||(job==='craft'&&['research','maintain','tidy'].includes(x.key)))x.score+=18;if(['outing','feast','nap','stargaze','court','secret'].includes(x.key)&&mood.energy>50&&c.hp>60)x.score-=22}
if(!duty){if(['outing','social','court','pray','stargaze','feast','market','journal'].includes(x.key))x.score+=8;if(slot==='night'&&l.habits.nightOwl)x.score+=['secret','write','practice','stargaze','feast'].includes(x.key)?12:0;if(slot==='dawn'&&l.habits.early)x.score+=['reflect','pray','practice','patrol','garden'].includes(x.key)?12:0}
if(N.dow()===l.habits.personal)x.score+=['outing','social','court','market','feast','journal'].includes(x.key)?14:0;
if(N.dow()===6)x.score+=['outing','feast','market','social','nap'].includes(x.key)?10:['copy','research','secret'].includes(x.key)?-6:0;
if(mood.tag==='weary')x.score+=['recover','nap','outing','tidy'].includes(x.key)?22:['spar','secret','patrol','research'].includes(x.key)?-18:0;
if(mood.tag==='driven')x.score+=['practice','secret','copy','learn','research','write'].includes(x.key)?16:['nap','feast'].includes(x.key)?-10:0;
if(mood.tag==='lonely')x.score+=['social','court','gossip','feast','community'].includes(x.key)?16:0;
if(mood.tag==='agitated')x.score+=['reflect','pray','stargaze','reconcile','mediate'].includes(x.key)?14:['spar','feast'].includes(x.key)?-8:0;
if(s.weather.k!=='ปกติ')x.score+=['outing','patrol','market','community','garden'].includes(x.key)?-12:['read','write','research','nap','tidy'].includes(x.key)?8:0;
if(slot==='midday'&&['nap','cook','gossip','social'].includes(x.key))x.score+=8;
if(c.mx.study||c.mx.busyUntil>s.day)x.score=-999};

N.planAgenda=(c,local)=>{const dayKeys=[],agenda=[];for(const slot of N.SLOTS){N._planningSlot=slot;N._dayKeys=dayKeys;const xs=N.planCandidates(c,local);if(!xs.length)continue;const h=N.hash(c.id+'|'+G.S.day+'|'+slot+'|pick');const pick=(h%13===0&&xs[2]&&xs[2].score>xs[0].score-22)?xs[2]:(h%8===0&&xs[1]&&xs[1].score>xs[0].score-16)?xs[1]:xs[0];agenda.push({...pick,slot,since:G.S.day,until:G.S.day});dayKeys.push(pick.key)}return agenda};

N.buildAgendas=()=>{const s=G.S,local=G.home();N._claims={};for(const slot of N.SLOTS)N._claims[slot]=new Set();for(const c of local){if(c.mx.study||c.mx.busyUntil>s.day||c.hp<20){c.mx.life.agenda=[];continue}c.mx.life.agenda=N.planAgenda(c,local);const featured=c.mx.life.agenda.find(x=>!(N.DUTY_SLOTS[c.job]||[]).includes(x.slot))||c.mx.life.agenda[3]||c.mx.life.agenda[0];if(featured)c.mx.life.plan={...featured,target:null}}
for(const slot of N.SLOTS){const bids=[];for(const c of local){const p=c.mx.life.agenda.find(x=>x.slot===slot);if(p?.target)bids.push({c,p})}bids.sort((a,b)=>b.p.score-a.p.score||a.c.id.localeCompare(b.c.id));const used=N._claims[slot];for(const{c,p}of bids){if(used.has(p.target)||used.has(c.id)){N._planningSlot=slot;N._dayKeys=c.mx.life.agenda.map(x=>x.key);const solo=N.planCandidates(c,local).find(x=>!x.target);const i=c.mx.life.agenda.findIndex(x=>x.slot===slot);if(i>=0)c.mx.life.agenda[i]=solo?{...solo,slot,since:s.day,until:s.day}:{...p,target:null}}else{used.add(c.id);used.add(p.target)}}}
for(const slot of N.SLOTS)N._claims[slot]=new Set()};

const origPrepare=N.prepareLife;
N.prepareLife=()=>{N._planningSlot='dusk';N._dayKeys=[];origPrepare();if(!G.S.patch.management.living||!G.S.patch.management.deepLife)return;N.buildAgendas();for(const c of G.home()){if(c.mx.life.agenda?.length)c.mx.life.mainShare=C(.62+.06*Math.max(0,4-c.mx.life.agenda.filter(x=>!(N.DUTY_SLOTS[c.job]||[]).includes(x.slot)).length),0.55,.9)}};

const origEvent=N.lifeEvent;
N.lifeEvent=(c,key,why,detail,target,changes={})=>{const l=c.mx.life,e={day:G.S.day,key,text:N.ACTIVITIES[key]||key,why,detail,target:target||null,changes,slot:N._planningSlot||null};l.history.unshift(e);l.history.length=Math.min(216,l.history.length);l.counts[key]=(l.counts[key]||0)+1;l.monthCounts[key]=(l.monthCounts[key]||0)+1;l.slotCounts[e.slot||'dusk']=(l.slotCounts[e.slot||'dusk']||0)+1;l.cooldowns[key]=G.S.day+({recover:0,nap:0,copy:0,govern:1,learn:3,maintain:4,research:2,secret:2,court:1}[key]??2);N.lifeRecord(c,(e.slot?N.SLOT_NAME[e.slot]+' · ':'')+e.text+' • '+detail+' • เหตุ: '+why);G.S.patch.worldLife.actions++;return e};

const origPerform=N.performLife;
N.performExtra=(c,p)=>{const s=G.S,t=s.chars[p.target],key=p.key,before={hp:c.hp,fat:c.fat,mind:c.mind,found:c.found,sat:c.sat,int:c.at.int,craft:c.at.craft,prog:c.prog,faith:c.faith},stock={...s.res};let detail='',ok=true;
switch(key){
case'cook':if(s.res.food<.2){ok=false;break}G.add('food',-.2,'ปรุงอาหารส่วนตัว');c.hp=C(c.hp+.4,0,100);c.sat=C(c.sat+.35,0,100);c.fat=C(c.fat-.4,0,100);detail='ใช้เสบียง 0.2 ปรุงมื้อเล็ก';break;
case'patrol':c.fat=C(c.fat+.7,0,100);s.beastP=C(s.beastP-.08,0,130);c.sk.guard=C((c.sk.guard||0)+.02,0,25);detail='ลาดตระเวน ลดแรงกดดันอสูรเล็กน้อย';break;
case'write':c.at.int=C(c.at.int+.03,0,100);c.mind=C(c.mind+.15,0,100);detail='จดบทเรียนลงสมุดส่วนตัว';break;
case'court':if(!N.home(t)){ok=false;break}G.relAdd(c,t,.55);c.sat=C(c.sat+.4,0,100);t.sat=C(t.sat+.3,0,100);detail='แบ่งเวลากับ '+t.name+' นอกเหนืองาน';break;
case'gossip':c.sat=C(c.sat+.2,0,100);detail='ได้ข่าวในสำนักและคลายเหงา';break;
case'pray':c.mind=C(c.mind+.35,0,100);if(c.path==='faith')c.faith=Math.min(5000,c.faith+.2);c.found=C(c.found+.04,0,100);detail='นั่งสมาธิสะสมจิต';break;
case'market':{const v=s.villages[0];if(v)v.trust=C(v.trust+.04,0,100);c.sat=C(c.sat+.2,0,100);detail='ไปตลาดดูราคาและคนในชุมชน';break}
case'secret':c.prog=c.prog+(.12*(.7+c.apt[c.path]/120));c.fat=C(c.fat+1.1,0,100);c.found=C(c.found-.02,0,100);detail='ฝึกเพิ่มนอกตาราง เหนื่อยและฐานรากต้องตามให้ทัน';break;
case'garden':if(s.res.herb<200)G.add('herb',.05,'แปลงส่วนตัว');c.sat=C(c.sat+.15,0,100);detail='ดูแลแปลง ได้สมุนไพรเล็กน้อย';break;
case'feast':c.sat=C(c.sat+.5,0,100);c.fat=C(c.fat-.6,0,100);c.mind=C(c.mind+.2,0,100);if(s.res.food>s.order.length*8)G.add('food',-.15,'สังสรรค์ยามค่ำ');detail='สังสรรค์คลายเครียด';break;
case'letter':c.at.soc=C(c.at.soc+.03,0,100);if(c.patron){const v=s.villages.find(v=>v.id===c.patron);if(v)v.trust=C(v.trust+.05,0,100)}detail='เขียนจดหมายสานสัมพันธ์';break;
case'tidy':c.sat=C(c.sat+.12,0,100);c.at.dis=C(c.at.dis+.02,0,100);detail='จัดที่พักและของที่ได้มา';break;
case'extra_teach':{const jun=G.home().filter(x=>x!==c&&x.realm<c.realm).sort((a,b)=>a.realm-b.realm)[0];if(!jun){ok=false;break}jun.found=C(jun.found+.06*(1+c.at.int/120),0,100);G.relAdd(c,jun,.25);c.merit=(c.merit||0)+.08;detail='สอน '+jun.name+' นอกเวลา';break}
case'stargaze':c.mind=C(c.mind+.55,0,100);c.stress=C(c.stress-1.2,0,100);detail='ดูดาวจัดระเบียบใจ';break;
case'nap':c.fat=C(c.fat-3.2,0,100);c.hp=C(c.hp+.3,0,100);detail='งีบฟื้นกำลังก่อนเวรถัดไป';break;
case'spectate':c.sk.guard=C((c.sk.guard||0)+.015,0,25);c.at.cou=C(c.at.cou+.02,0,100);detail='ดูประลองแล้วเก็บจุดอ่อนไปคิด';break;
case'help_other':c.fat=C(c.fat+.8,0,100);c.loy=C(c.loy+.08,0,100);if(s.buildQ[0])s.buildQ[0].done=Math.min(s.buildQ[0].work,s.buildQ[0].done+.15);if(s.patch.orders[0])N.workOrders(.1);detail='ช่วยงานต่างหน้าที่ที่ค้างอยู่';break;
case'journal':c.mind=C(c.mind+.2,0,100);c.at.int=C(c.at.int+.02,0,100);detail='เขียนบันทึกวันนี้';break;
default:ok=false}
if(!ok)return false;const changes={};for(const[k,v]of Object.entries(before)){const now=k==='int'?c.at.int:k==='craft'?c.at.craft:k==='faith'?c.faith:c[k];if(Math.abs(now-v)>.00001)changes[k]=+(now-v).toFixed(3)}for(const[k,v]of Object.entries(stock))if(Math.abs(s.res[k]-v)>.00001)changes['res_'+k]=+(s.res[k]-v).toFixed(3);N.lifeEvent(c,key,p.why,detail,p.target,changes);c.mx.life.lastDay=s.day;if(t&&key==='court')N.lifeEvent(t,key,'ร่วมเวลาส่วนตัวกับ '+c.name,'ร่วมกับ '+c.name,c.id,{sat:+.3});return true};

N.performLife=c=>{
 const s=G.S,l=c.mx.life;
 if(!s.patch.management.deepLife)return origPerform(c);
 if(!N.home(c)||c.mx.study||c.mx.busyUntil>s.day||c.hp<20)return;
 const slot=N._planningSlot,used=N._claims[slot]||new Set();
 if(used.has(c.id))return;
 N._dayKeys=l.history.filter(e=>e.day===s.day).map(e=>e.key);
 const available=p=>!p.target||(!used.has(p.target)&&!s.chars[p.target]?.mx.life.history.some(e=>e.day===s.day&&e.key===p.key)&&N.home(s.chars[p.target])&&!s.chars[p.target].mx.study&&(s.chars[p.target].mx.busyUntil||0)<=s.day);
 const candidates=N.planCandidates(c,G.home()).filter(p=>p.score>-900&&available(p));
 const maxRepeats=k=>['recover','nap'].includes(k)&&(c.hp<45||c.fat>80)?2:1;
 let xs=candidates.filter(p=>N._dayKeys.filter(k=>k===p.key).length<maxRepeats(p.key));
 if(!xs.length)return;
 const h=N.hash(c.id+'|'+s.day+'|'+slot+'|pick');
 let p=G.WORLD?xs[0]:(h%8===0&&xs[1]&&xs[1].score>xs[0].score-16)?xs[1]:xs[0];
 p={...p,slot,since:s.day,until:s.day};l.plan=p;
 const before=l.history[0];
 if(N.CORE_KEYS[p.key])origPerform(c);else N.performExtra(c,p);
 const agenda=l.agenda.findIndex(a=>a.slot===slot);
 if(before!==l.history[0]){
  used.add(c.id);if(p.target)used.add(p.target);
  if(agenda>=0)l.agenda[agenda]={...p,status:'done'};
  if(p.target){const other=s.chars[p.target],j=other.mx.life.agenda.findIndex(a=>a.slot===slot);if(j>=0)other.mx.life.agenda[j]={...p,target:c.id,status:'paired'};}
 }else if(agenda>=0)l.agenda[agenda]={...p,status:'skipped'};
 if(G.WORLD && !G.WORLD.extraKey?.(p.key))G.WORLD.trace(G.WORLD.person(c.id),p,before!==l.history[0]);
};
N.executeDayAgendas=()=>{
 const local=G.home();
 for(const c of local)for(const p of c.mx.life.agenda||[])p.status='skipped';
 for(const slot of N.SLOTS){
  N._planningSlot=slot;N._claims[slot]=new Set();
  // Rotate order deterministically so earlier IDs cannot monopolize partners.
  const order=local.slice().sort((a,b)=>N.hash(a.id+'|'+G.S.day+'|'+slot)-N.hash(b.id+'|'+G.S.day+'|'+slot)||a.id.localeCompare(b.id));
  for(const c of order)N.performLife(c);
 }
 for(const c of local){const l=c.mx.life;l.variety=new Set(l.history.filter(e=>e.day===G.S.day).map(e=>e.key)).size;l.plan=l.agenda.find(p=>p.status==='done')||null;if(l.plan)l.plan={...l.plan,target:null};}
 N._planningSlot='dusk';N._dayKeys=[];
};

N.worldPulse=()=>{const s=G.S,w=s.patch.worldLife;if(w.lastPulse===s.day)return;w.lastPulse=s.day;w.pulse++;const st=N.leaderStyle(N.activeLeader());w.style=st.label;if(s.day%30===14){const v=s.villages.slice().sort((a,b)=>a.trust-b.trust)[0];if(v){v.trust=C(v.trust+(st.pious>55?.4:.15),0,100);w.worldEvents.unshift({day:s.day,text:'ชุมชน '+v.n+' มีงานประจำเดือน ผู้บริหารแนว '+st.label+' ส่งคนไปปรากฏตัว'});}}
if(s.day%90===2){w.worldEvents.unshift({day:s.day,text:['เทศกาลเก็บเกี่ยว','พิธีปล่อยโคม','ตลาดนัดขุนเขา','วันสักการะบรรพชน'][Math.floor(s.day/90)%4]+' เป็นข่าวเทศกาลประจำฤดูกาล'});for(const c of G.home())c.mx.life.plan=null}
if(s.weather.k!=='ปกติ'&&s.day%7===1)w.worldEvents.unshift({day:s.day,text:'อากาศ'+s.weather.k+' กระทบการเลือกกิจกรรมกลางแจ้ง'});
w.worldEvents=w.worldEvents.slice(0,36)};

N.autoCopyScroll=iid=>{
 const s=G.S,m=s.patch.management,i=s.patch.items.find(x=>x.id===iid),d=P.items[i?.def];
 if(!m.autoStudy||!i||i.locked||i.owner||i.qty<=m.itemReserve||i.grade>m.maxGrade||!d||!N.reserveAllows({silver:4+d.grade*5,wood:1+d.grade}))return false;
 return !N.copyScroll(i.id);
};

N.leaderUtilize=()=>{const s=G.S,m=s.patch.management,w=s.patch.worldLife;if(!m.enabled||!m.leaderUse||!m.living)return;if(w.lastUtilize===s.day&&w.utilizeRev===s.patch.itemsRevision)return;const lead=N.activeLeader();if(!lead)return;w.lastUtilize=s.day;w.utilizeRev=s.patch.itemsRevision;const st=N.leaderStyle(lead),quota=Math.max(1,Math.min(6,1+Math.floor((st.organizer+st.admin)/70))),cands=[];const add=(score,why,run,key)=>{cands.push({score,why,run,key})};const local=G.home(),items=s.patch.items.filter(i=>!i.owner&&!i.locked);
const free=def=>items.filter(i=>i.def===def||P.items[i.def]?.type===def);
for(const i of items){const d=P.items[i.def];if(!d)continue;
if(d.type==='scroll'){const art=d.artId,man=d.manualId,known=art?s.patch.knownArts.includes(art):!!s.known[man];if(m.autoStudy&&d.grade<=m.maxGrade&&i.qty>m.itemReserve&&N.reserveAllows({silver:4+d.grade*5,wood:1+d.grade})&&!s.patch.library.copies.some(q=>q.def===d.id)&&!local.some(c=>c.mx.transcription)&&!known&&s.fac.library&&s.patch.library.copies.length<3&&st.scholar>42)add(70+st.scholar*.3+d.grade*4,'คัมภีร์ '+d.name+' ยังไม่เข้าหอ แนว '+st.label+' สั่งคัดลอก',()=>N.autoCopyScroll(i.id),'copy');if(m.autoSell&&d.grade<=m.maxGrade&&known&&i.qty>Math.max(1,m.itemReserve)&&(st.merchant>58||s.res.silver<m.reserve)&&(m.autoSell||st.merchant>70))add(40+st.merchant*.25+(s.res.silver<m.reserve?30:0),'คัมภีร์ซ้ำ '+d.name+' ขายเติมทุนตามนิสัยพ่อค้า',()=>!N.sellItem(i.id),'sell')}
if(m.autoRefine&&d.refine&&d.grade<=m.maxGrade&&d.grade<=2&&st.craftsman>50){const res=N.cost(d.refine),short=Object.keys(res).some(k=>s.res[k]<({wood:50,ore:30,stone:25,herb:22,beast:3}[k]||0));if(short&&i.qty>Math.max(1,m.itemReserve)&&N.reserveAllows(res))add(45+st.craftsman*.2,'แปร '+d.name+' เติมทรัพยากรที่ขาด',()=>!N.refine(i.id,1),'refine')}
}
if(m.autoCommunity&&st.pious>58&&s.villages.length&&s.res.food>s.order.length*(m.foodDays+6)&&N.reserveAllows({silver:0})){const v=s.villages.slice().sort((a,b)=>a.trust-b.trust)[0];add(35+st.pious*.2,'แบ่งเสบียงส่วนเกินให้ '+v.n,()=>{const q=Math.min(8,Math.floor(s.res.food-s.order.length*(m.foodDays+4)));if(q<2)return false;G.add('food',-q,'ช่วยชุมชนตามนิสัยผู้นำ');v.trust=C(v.trust+.3+st.pious/200,0,100);return true},'aid')}
if(m.autoSell&&st.merchant>60&&s.res.food>s.order.length*45&&s.res.silver<m.reserve)add(48,'ขายเสบียงส่วนเกินเพราะเงินต่ำกว่าสำรอง',()=>{const q=Math.min(40,Math.floor(s.res.food-s.order.length*32));return q>2&&G.trade('food',q,'sell').ok},'trade');
if(m.autoStudy&&st.scholar>62&&s.fac.library&&s.patch.library.copies.length<3){const i=items.find(x=>x.grade<=m.maxGrade&&x.qty>m.itemReserve&&N.reserveAllows({silver:4+x.grade*5,wood:1+x.grade})&&!s.patch.library.copies.some(q=>q.def===x.def)&&P.items[x.def]?.type==='scroll'&&((P.items[x.def].artId&&!s.patch.knownArts.includes(P.items[x.def].artId))||(P.items[x.def].manualId&&!s.known[P.items[x.def].manualId])));if(i)add(66,'ปราชญ์หอวิชาไม่ปล่อยคัมภีร์นอนคลัง',()=>N.autoCopyScroll(i.id),'copy')}
if(s.sect.policies.autoAssign&&st.martial>62&&s.beastP>70&&!local.some(c=>c.job==='guard')){const c=local.filter(c=>!c.jobFix&&!c.mx.managementLock&&!c.mx.study&&c.hp>70).sort((a,b)=>b.at.cou-a.at.cou)[0];if(c)add(60,'ภัยอสูรสูง ผู้นำสายรบดึง '+c.name+' มาเฝ้ายาม',()=>{c.job='guard';c.mx.decision='ผู้นำสายรบปรับเวรยามตามภัยจริง';return true},'guard')}
cands.sort((a,b)=>b.score-a.score||a.key.localeCompare(b.key));w.considerations+=cands.length;let n=0;for(const x of cands){if(n>=quota)break;try{if(x.run()){n++;w.leaderUses++;N.recordDecision(lead.name+' ('+st.label+') '+x.why,x.why+' • คะแนน '+Math.round(x.score)+' • โควตา '+quota)}}catch(e){w.lastUtilizeError=String(e.message||e).slice(0,200)}}};

const origCouncil=N.councilDay;
N.councilDay=()=>{origCouncil();N.leaderPolicyPulse(N.leaderStyle(N.activeLeader()))};
N.leaderPolicyPulse=st=>{const s=G.S,m=s.patch.management;if(!m.enabled||!st.name)return;if(st.cautious>70&&s.res.silver<m.reserve)return;if(st.organizer>60&&s.day%5===0&&s.sect.policies.autoAssign)G.autoAssign()};

const origOrder=N.allocationOrder;
// The player's allocation ordering remains authoritative. The original order already handles biased leaders.
N.allocationOrder=()=>origOrder();

const origForeign=N.foreignDay;
N.foreignDay=()=>{origForeign();if(!G.S.patch.management.living||!G.S.patch.management.deepLife)return;N.foreignDeep();G.S.patch.worldLife.worldEvents=G.S.patch.worldLife.worldEvents.slice(0,36)};
N.foreignDeep=()=>{const s=G.S;for(const f of s.factions){if(f.dead)continue;N.foreignInit(s,f);const rows=f.roster,lead=rows.find(r=>r.mx?.id===f.mx.leader)||rows[0];for(const r of rows){const c=r.mx;if(!c)continue;c.secondaryCounts??={};c.sideHistory??=[];const h=N.hash(c.id+'|'+s.day+'|foreign');if(h%2===0)continue;let key,text;if(c.fatigue>50||c.health<70){key='rest_night';c.fatigue=C(c.fatigue-3,0,100);c.health=C(c.health+.5,0,100);text='พักตามสภาพร่างกาย ไม่ฝืนฝึก'}else if(f.stock<f.pop*.06){key='supply';const q=.05*(.4+c.apt/120);f.stock+=q;c.fatigue=C(c.fatigue+1,0,100);text='ช่วยเสบียงฝ่าย ได้ '+q.toFixed(3)}else if(c.id===f.mx.leader){if(f.stance==='war'&&f.wealth>40){key='scheme';f.wealth-=.12;f.troops+=.008;text='หัวหน้าวางกำลัง ใช้ทุน 0.12'}else if(f.rel<40&&f.wealth>15){key='diplomacy';f.wealth-=.05;f.rel=C(f.rel+.02,-100,100);text='ทบทวนไมตรีกับสำนักผู้เล่น'}else{key='train';c.progress=Math.min((G.PATHS[f.path].realms[Math.min(r.r,G.PATHS[f.path].realms.length-1)]||{need:99}).need,c.progress+.08);text='หัวหน้าฝึกเองเป็นแบบอย่าง'}}else if(h%5===0&&rows.length>1){const t=rows[(h>>>3)%rows.length];key='social';c.bonds??={};if(t?.mx)c.bonds[t.mx.id]=C((c.bonds[t.mx.id]||0)+.35,-100,100);text='พบคนในฝ่ายเดียวกัน'}else if(f.stance==='ally'&&h%7===0){key='trade';if(f.wealth>8){f.wealth+=.04;text='ค้าขายระยะใกล้ ได้ทุนเล็กน้อย'}else text='ยังไม่มีทุนพอค้า'}else if(h%11===0){key='festival';c.health=C(c.health+.2,0,100);c.stress=C(c.stress-1,0,100);text='ร่วมพิธีท้องถิ่นของฝ่าย'}else{key='train';c.foundation=C(c.foundation+.05,0,100);c.fatigue=C(c.fatigue+.6,0,100);text='ฝึกตามหน้าที่และพรสวรรค์'}c.secondaryCounts[key]=(c.secondaryCounts[key]||0)+1;c.sideHistory.unshift({day:s.day,key,text});c.sideHistory.length=Math.min(24,c.sideHistory.length);s.patch.worldLife.foreignActions++}if(lead?.mx&&s.day%6===(s.factions.indexOf(f)%6)){if(f.stance!=='war'&&f.rel<-20&&f.wealth>60&&N.hash(f.id+'|war|'+s.day)%9===0){f.stance='war';s.patch.worldLife.worldEvents.unshift({day:s.day,text:f.n+' เตรียมกำลังเพราะสัมพันธ์กับสำนักผู้เล่นต่ำ'});}else if(f.stance==='war'&&f.wealth<25){f.stance='none';s.patch.worldLife.worldEvents.unshift({day:s.day,text:f.n+' ชะลอความขัดแย้งเพราะทุนไม่พอ'})}}}};

const origProc=N.processItems;
N.processItems=()=>{const w=G.S.patch.worldLife,b=G.S.patch.allocationLogs.length,rev=G.S.patch.itemsRevision;origProc();if(G.S.patch.management.leaderUse&&G.S.patch.itemsRevision!==rev)w.leaderUses+=Math.max(0,G.S.patch.allocationLogs.length-b);N.leaderUtilize()};

const origStep=G.stepDay;
G.stepDay=()=>{if(G.S.over)return;N.init(G.S);N.worldPulse();origStep()};

const origAdv=G.advance;
G.advance=function(days,opt){opt=opt||{};if(opt.budget==null){const cores=(typeof navigator!=='undefined'&&navigator.hardwareConcurrency)||8;opt.budget=Math.min(24,8+cores*2)}return origAdv(days,opt)};
})(window.G);
