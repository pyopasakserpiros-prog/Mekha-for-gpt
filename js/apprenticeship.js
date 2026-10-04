/* Official 1.4: reciprocal apprenticeship, real training benefits and private teaching. */
(function(G){'use strict';
const N=G.N,P=G.PATCH,C=G.clamp;
G.VERSION='1.4.0';G.SCHEMA=6;
Object.assign(N.ACTIVITIES,{master_session:'ฝึกกับอาจารย์',master_care:'อาจารย์ดูแลศิษย์',master_art:'วางแผนรับถ่ายทอดวิชา'});
const personInit=N.initPerson;
N.initPerson=c=>{personInit(c);c.mx.apprentice??={masterId:c.master||null,since:0,teacherReason:c.master?'สายสัมพันธ์อาจารย์เดิม':'',studentReason:c.master?'รักษาสายสัมพันธ์จากเซฟเดิม':'',lastApproach:-14,guidanceUntil:0,supportUntil:0,lastSession:-1,lastCare:-7,sessions:0,helps:0,learned:[],history:[]};return c};
const init=N.init;
N.init=s=>{init(s);s.patch.mentorship??={history:[],lastReview:-1};return s};
G.MIGRATE[5]=s=>{N.init(s);s.schema=6;s.v=G.VERSION;return s};

N.disciples=t=>G.alive().filter(c=>c.master===t.id);
N.mentorCapacity=t=>Math.min(8,2+Math.floor(t.at.int/35)+(N.hasTrait(t,'mentorGift')?2:0)+Math.floor(G.S.fac.library/2));
N.mentorAvailable=t=>N.home(t)&&!t.mx.study&&(t.mx.busyUntil||0)<=G.S.day&&t.hp>=50&&t.fat<85;
N.mentorCycle=(t,c)=>{const seen=new Set([c.id]);let x=t;while(x){if(seen.has(x.id))return true;seen.add(x.id);x=G.S.chars[x.master]}return false};
N.personalArts=(t,c)=>t.mx.arts.filter(id=>{const a=P.arts[id];return a&&(t.mx.mastery[id]||0)>=60&&!c.mx.arts.includes(id)&&N.artCompatible(c,a)});
N.mentorProblem=(t,c)=>{
 if(!N.home(t)||!N.home(c)||t===c)return 'ทั้งสองต้องเป็นคนละคนและอยู่ในสำนัก';
 if(c.master&&c.master!==t.id)return 'มีอาจารย์อยู่แล้ว ต้องยุติสายสัมพันธ์เดิมก่อน';
 if(t.rank<2)return 'ผู้รับศิษย์ต้องมีตำแหน่งศิษย์หลักขึ้นไป';
 if(!N.mentorAvailable(t)||c.mx.study||c.mx.busyUntil>G.S.day)return 'ยังติดการเรียน ภารกิจ หรือไม่พร้อมสอน';
 if(N.mentorCycle(t,c))return 'สายอาจารย์ห้ามวนกลับมาหาตัวเอง';
 if(t.realm<c.realm||(t.realm===c.realm&&t.at.int<c.at.int+12&&!N.personalArts(t,c).length))return 'ยังไม่มีความรู้หรือประสบการณ์เหนือกว่าผู้ขอเรียน';
 if(c.master!==t.id&&N.disciples(t).length>=N.mentorCapacity(t))return 'อาจารย์ดูแลศิษย์เต็มกำลังแล้ว';
 return '';
};
N.mentorAssessment=(t,c)=>{
 const problem=N.mentorProblem(t,c),same=t.path===c.path,bond=((t.rel[c.id]||0)+(c.rel[t.id]||0))/2;
 const similar=100-Math.abs(t.at.dis-c.at.dis),arts=N.personalArts(t,c),diligent=N.hasTrait(c,'diligent')||c.traits.includes('diligent'),lazy=N.hasTrait(c,'lazy')||c.traits.includes('lazy');
 const shared=c.traits.filter(k=>t.traits.includes(k)).length;
 let teacher=16+(same?22:0)+c.apt[t.path]*.23+bond*.18+similar*.08+shared*4+(diligent?8:0)-(lazy&&t.at.dis>65?18:0)+(N.hasTrait(t,'mentorGift')?10:0)+(N.hasTrait(t,'kind')?6:0)-N.disciples(t).length*3;
 let student=14+(same?23:0)+Math.min(24,Math.max(0,t.realm-c.realm)*7)+t.at.int*.18+bond*.2+similar*.06+Math.min(18,arts.length*5)-(N.hasTrait(c,'proud')&&t.realm===c.realm?16:0);
 if(N.hasTrait(t,'ambitious'))teacher+=(c.apt[c.path]-50)*.15;
 if(bond<-20){teacher-=20;student-=20}
 const tr=[same?'มรรคาตรงกัน ถ่ายทอดได้ตรงทาง':'ต่างมรรคา แต่มีประสบการณ์หรือวิชาเฉพาะให้ถ่ายทอด', 'พรสวรรค์ที่สนใจ '+Math.round(c.apt[t.path]),diligent?'ศิษย์มีนิสัยขยัน':lazy?'ต้องพิจารณานิสัยเกียจคร้าน':'วินัยและนิสัยใกล้กัน '+Math.round(similar)+'%',bond>=20?'มีความไว้วางใจเดิม':bond<-20?'มีความขัดแย้งเดิม':'ยังต้องสร้างความไว้วางใจ'];
 const sr=[same?'อยากเรียนกับผู้รู้มรรคาเดียวกัน':'สนใจประสบการณ์จากต่างมรรคา', 'อาจารย์มีขอบเขต '+t.realm+' และความเข้าใจ '+Math.round(t.at.int), arts.length?'มีวิชาที่อยากรับถ่ายทอด '+arts.length+' วิชา':'ต้องการคำแนะนำฐานรากและการฝึก'];
 const noT=teacher<50?'ยังไม่มั่นใจพรสวรรค์ นิสัย หรือความไว้วางใจของผู้ขอเรียน':'',noS=student<50?'ยังไม่เห็นความเหมาะสมหรือประโยชน์พอที่จะฝากตัว':'';
 return {teacher:Math.round(teacher),student:Math.round(student),teacherReason:tr.join(' • '),studentReason:sr.join(' • '),problem,teacherAccept:!problem&&teacher>=50,studentAccept:!problem&&student>=50,teacherDecline:problem||noT,studentDecline:problem||noS};
};
N.mentorLog=(t,c,direction,result,text)=>{
 const e={day:G.S.day,teacher:t.id,student:c.id,teacherName:t.name,studentName:c.name,direction,result,text};
 G.S.patch.mentorship.history.unshift(e);G.S.patch.mentorship.history.length=Math.min(80,G.S.patch.mentorship.history.length);
 for(const x of [t,c]){x.mx.apprentice.history.unshift({...e});x.mx.apprentice.history.length=Math.min(16,x.mx.apprentice.history.length);N.lifeRecord(x,text)}
 N.recordDecision(text,'ศิษย์–อาจารย์ • '+direction);
 return e;
};
N.proposeMentor=(tid,cid,direction='student',automatic=false)=>{
 const t=G.S.chars[tid],c=G.S.chars[cid];
 if(!t||!c||!['student','teacher','player'].includes(direction))return {ok:false,msg:'ไม่พบผู้เสนอและผู้ตอบรับ'};
 if(c.master===t.id)return {ok:true,msg:'เป็นศิษย์อาจารย์กันอยู่แล้ว'};
 if(automatic&&(t.mx.managementLock||c.mx.managementLock))return {ok:false,msg:'ผู้เล่นล็อกการจัดการบุคคลนี้ไว้'};
 const a=N.mentorAssessment(t,c);c.mx.apprentice.lastApproach=G.S.day;
 const opening=direction==='teacher'?t.name+' ชวน '+c.name+' เป็นศิษย์':direction==='student'?c.name+' ขอฝากตัวกับ '+t.name:'ผู้เล่นเสนอให้ '+c.name+' ฝากตัวกับ '+t.name;
 if(!a.teacherAccept||!a.studentAccept){
  const why=!a.teacherAccept?t.name+' ไม่รับ: '+a.teacherDecline:c.name+' ไม่ตกลง: '+a.studentDecline;
  const text=opening+' • '+why+' • ฝ่ายอาจารย์พิจารณา: '+a.teacherReason+' • ฝ่ายศิษย์พิจารณา: '+a.studentReason;
  N.mentorLog(t,c,direction,'declined',text);return {ok:false,msg:why};
 }
 c.master=t.id;Object.assign(c.mx.apprentice,{masterId:t.id,since:G.S.day,teacherReason:a.teacherReason,studentReason:a.studentReason,guidanceUntil:0,supportUntil:0});
 G.relAdd(c,t,3);
 const text=opening+' • ทั้งสองตกลง • อาจารย์รับเพราะ '+a.teacherReason+' • ศิษย์ยอมรับเพราะ '+a.studentReason;
 N.mentorLog(t,c,direction,'accepted',text);return {ok:true,msg:'ทั้งสองตกลงเป็นศิษย์–อาจารย์'};
};
N.leaveMentor=(c,reason='ผู้เล่นยุติสายสัมพันธ์')=>{
 const t=G.S.chars[c.master];if(c.mx.study?.kind==='teacher'&&c.mx.study.teacher===c.master&&!allowed(c,c.mx.study.id))N.cancelStudy(c.id);c.master=null;Object.assign(c.mx.apprentice,{masterId:null,guidanceUntil:0,supportUntil:0,lastApproach:G.S.day});
 if(t)N.mentorLog(t,c,'player','ended',c.name+' ยุติสายสัมพันธ์กับ '+t.name+' • '+reason);
 return {ok:true,msg:'ยุติสายสัมพันธ์แล้ว วิชาที่เรียนสำเร็จยังคงอยู่'};
};
G.setMaster=(c,id)=>!c?{ok:false,msg:'ไม่พบสมาชิก'}:id?N.proposeMentor(id,c.id,'player'):N.leaveMentor(c);
// Recruitment/death must no longer assign a teacher unilaterally.
G.pickMaster=()=>null;
const fresh=G.newGame;
G.newGame=(...args)=>{const s=fresh(...args);N.init(s);N.mentorshipDay(true);return s};
N.mentorshipDay=(initial=false)=>{
 const s=G.S,w=s.patch.mentorship;
 if(!initial&&w.lastReview===s.day)return;w.lastReview=s.day;
 for(const c of G.alive()){
  const a=c.mx.apprentice;
  if(a.masterId!==c.master){a.masterId=c.master||null;a.guidanceUntil=0;a.supportUntil=0;if(c.master){a.teacherReason='รักษาสายสัมพันธ์เดิม';a.studentReason='เรียนต่อจากอาจารย์เดิม'}}
 }
 if(!s.patch.management.enabled||!s.patch.management.autoMentors)return;
 const local=G.home().filter(c=>!c.mx.managementLock);
 // The teacher initiates on some days; the student initiates on other days.
 for(const t of local.filter(t=>t.rank>=2&&N.mentorAvailable(t))){
  if(!initial&&(s.day+N.hash(t.id))%7!==0)continue;
  if(N.disciples(t).length>=N.mentorCapacity(t))continue;
  const candidates=local.filter(c=>c!==t&&!c.master&&c.mx.apprentice.lastApproach<=s.day-14).map(c=>({c,a:N.mentorAssessment(t,c)})).filter(x=>!x.a.problem&&x.a.teacherAccept).sort((a,b)=>b.a.teacher-a.a.teacher||a.c.id.localeCompare(b.c.id));
  if(candidates[0])N.proposeMentor(t.id,candidates[0].c.id,'teacher',true);
 }
 for(const c of local.filter(c=>!c.master&&c.mx.apprentice.lastApproach<=s.day-14)){
  if(!initial&&(s.day+N.hash(c.id))%7!==3)continue;
  const candidates=local.filter(t=>t!==c).map(t=>({t,a:N.mentorAssessment(t,c)})).filter(x=>!x.a.problem&&x.a.studentAccept).sort((a,b)=>b.a.student-a.a.student||a.t.id.localeCompare(b.t.id));
  if(candidates[0])N.proposeMentor(candidates[0].t.id,c.id,'student',true);
 }
};
N.mentorBenefit=c=>{
 const t=G.S.chars[c.master];if(!t||!N.mentorAvailable(t)||!N.home(c)||c.hp<30||N.mentorCycle(t,c))return {training:0,breakthrough:0,label:'อาจารย์ไม่พร้อมหรือไม่มีอาจารย์'};
 const relation=C(((c.rel[t.id]||0)+50)/100,.2,1.25),same=t.path===c.path?1:.35,load=Math.max(1,N.disciples(t).length),capacity=N.mentorCapacity(t);
 const time=t.job==='teach'?1:.45;
 let training=(.08+Math.min(4,Math.max(0,t.realm-c.realm))*.025+t.at.int/1000+(N.hasTrait(t,'mentorGift')?.06:0))*same*time*relation*Math.min(1,capacity/load);
 if(c.mx.apprentice.guidanceUntil>=G.S.day&&c.mx.apprentice.sessions)training+=.07*same;
 const cap=Math.min(.4,training),breakthrough=Math.min(.06,cap*.15);
 return {training:cap,breakthrough,label:t.name+' • '+(same===1?'มรรคาเดียวกัน':'ต่างมรรคา')+' • ดูแล '+load+'/'+capacity+' คน'+(t.job==='teach'?' • สอนเต็มเวลา':' • แบ่งเวลาสอน')};
};
const training=N.training;N.training=c=>training(c)*(1+N.mentorBenefit(c).training);
const bt=G.btInfo;G.btInfo=(c,mode)=>{const info=bt(c,mode),b=N.mentorBenefit(c).breakthrough;if(b){info.p=C(info.p+b,.08,.98);info.fac.push(['คำแนะนำอาจารย์',b])}return info};
// Replace the old cultivation teacher multiplier; the new benefit covers both full and spare-time teaching.
const allowed=N.allowedArt,sourceList=N.sources;
N.privateTeacher=(c,id)=>{const t=G.S.chars[c.master],a=P.arts[id];return t&&N.mentorAvailable(t)&&t.mx.arts.includes(id)&&(t.mx.mastery[id]||0)>=60&&N.artCompatible(t,a)&&N.artCompatible(c,a)?t:null};
N.allowedArt=(c,id)=>allowed(c,id)||!!N.privateTeacher(c,id);
N.sources=(c,a)=>{
 const list=allowed(c,a.id)?sourceList(c,a):[];const t=N.privateTeacher(c,a.id);
 if(t&&!list.some(x=>x.kind==='teacher'&&x.id===t.id))list.push({kind:'teacher',id:t.id,label:'ถ่ายทอดส่วนตัวจาก '+t.name});
 return list;
};
N.mentorLearnable=c=>{const t=G.S.chars[c.master];return t?N.personalArts(t,c).filter(id=>N.privateTeacher(c,id)&&!N.artProblems(c,P.arts[id]).length):[]};
const candidates=N.planCandidates;
N.planCandidates=(c,local)=>{
 const xs=candidates(c,local),t=G.S.chars[c.master],s=G.S;
 const add=(key,score,why,target,data=null)=>{
  if((c.mx.life.cooldowns[key]||0)>s.day)return;
  if(N._dayKeys.includes(key))score-=60;
  score-=c.mx.life.history.slice(0,12).filter(e=>e.key===key).length*9;
  xs.push({key,score,why,target:target.id,data});
 };
 if(t&&N.mentorAvailable(t)&&!c.mx.study&&(c.mx.busyUntil||0)<=s.day){
  const own=c.mx.apprentice,bond=c.rel[t.id]||0;
  if(!own.sessions||own.guidanceUntil<=s.day+1)add('master_session',48+c.at.amb*.12+Math.max(0,t.realm-c.realm)*3+bond*.06,'ฝึกกับอาจารย์ประจำตัวเพื่อแก้ฐานรากและเพิ่มความเร็วบ่มเพาะ',t);
  if((c.hp<80||c.fat>60||c.stress>55||c.mind<45)&&own.lastCare<=s.day-7)add('master_care',42+(100-c.hp)*.35+c.fat*.15,'ขอให้อาจารย์ดูแลตามอาการและใช้โอสถจริงเมื่อมีนโยบายอนุญาต',t);
  const id=N.mentorLearnable(c).sort((a,b)=>P.arts[a].tier-P.arts[b].tier||a.localeCompare(b))[0];
  if(id&&s.patch.management.autoStudy&&!c.jobFix&&!c.mx.managementLock&&N.reserveAllows(P.arts[id].cost)&&G.home().filter(x=>x.mx.study).length<Math.max(1,Math.floor(G.home().length/4)))add('master_art',52+c.at.int*.12+c.at.amb*.08,'สนใจวิชา '+P.arts[id].name+' ที่อาจารย์รู้จริงและตนผ่านเงื่อนไข',t,{id});
 }
 // A teacher also initiates guidance and care, rather than waiting for every pupil to ask.
 if(N.mentorAvailable(c)){
  const pupils=N.disciples(c).filter(x=>N.home(x)&&!x.mx.study&&!(x.mx.busyUntil>s.day));
  const needy=pupils.filter(x=>x.mx.apprentice.lastCare<=s.day-7&&(x.hp<80||x.fat>60||x.stress>55||x.mind<45)).sort((a,b)=>a.hp-b.hp||b.fat-a.fat||a.id.localeCompare(b.id))[0];
  if(needy)add('master_care',50+(100-needy.hp)*.4+(N.hasTrait(c,'kind')?12:0),'อาจารย์เห็นอาการของศิษย์ จึงแบ่งเวลาดูแลด้วยตนเอง',needy,{asTeacher:true});
  const pupil=pupils.filter(x=>x.mx.apprentice.lastSession!==s.day&&(!x.mx.apprentice.sessions||x.mx.apprentice.guidanceUntil<=s.day+1)).sort((a,b)=>a.mx.apprentice.guidanceUntil-b.mx.apprentice.guidanceUntil||a.id.localeCompare(b.id))[0];
  if(pupil)add('master_session',47+c.at.int*.1+(N.hasTrait(c,'mentorGift')?12:0),'อาจารย์นัดศิษย์ทบทวนฐานรากและติดตามแนวฝึก',pupil,{asTeacher:true});
 }
 return xs.sort((a,b)=>b.score-a.score||a.key.localeCompare(b.key));
};
const extra=N.performExtra;
N.performExtra=(c,p)=>{
 if(!['master_session','master_care','master_art'].includes(p.key))return extra(c,p);
 if(p.data?.asTeacher){const pupil=G.S.chars[p.target];if(!pupil||pupil.master!==c.id)return false;return N.performExtra(pupil,{...p,target:c.id,data:null})}
 const s=G.S,t=s.chars[p.target];if(!t||c.master!==t.id||!N.mentorAvailable(t)||c.mx.study||c.mx.busyUntil>s.day)return false;
 const a=c.mx.apprentice,before={found:c.found,prog:c.prog,fat:c.fat,hp:c.hp,mind:c.mind,stress:c.stress},mentorFat=t.fat;let detail='';
 if(p.key==='master_session'){
  if(a.lastSession===s.day)return false;
  const same=t.path===c.path?1:.35;const gain=.18*(1+t.at.int/100)*same;
  c.found=C(c.found+gain,0,100);c.fat=C(c.fat+.6,0,100);t.fat=C(t.fat+.8,0,100);t.merit=(t.merit||0)+.08;
  const id=c.mx.active.find(id=>t.mx.arts.includes(id)&&(t.mx.mastery[id]||0)>(c.mx.mastery[id]||0));
  if(id)c.mx.mastery[id]=Math.min(t.mx.mastery[id],100,(c.mx.mastery[id]||0)+.18*same);
  a.guidanceUntil=s.day+5;a.lastSession=s.day;a.sessions++;
  detail='อาจารย์ '+t.name+' ตรวจฐานรากและแนวฝึก • คำแนะนำใช้ได้ 5 วัน'+(id?' • ทบทวน '+P.arts[id].name:'');
 }else if(p.key==='master_care'){
  if(a.lastCare>s.day-7)return false;
  c.fat=C(c.fat-1.8,0,100);c.stress=C(c.stress-1.2,0,100);c.mind=C(c.mind+.6,0,100);t.fat=C(t.fat+.5,0,100);
  const m=s.patch.management;
  const needs=N.pillNeeds(c);let used=null;
  if(m.enabled&&m.autoPills){const budget=Math.max(0,m.budget-(s.patch.allocationBudgetDay===s.day?s.patch.allocationDaySpent:0));const i=s.patch.items.filter(i=>!i.owner&&!i.locked&&i.qty>m.itemReserve&&i.grade<=m.maxGrade&&['heal','detox','rest'].includes(P.items[i.def].effect)&&needs.includes(P.items[i.def].effect)&&N.itemValue(i)<=budget&&!N.pillError(i,c)&&c.mx.lastAutoPill!==s.day).sort((a,b)=>a.grade-b.grade||a.id.localeCompare(b.id))[0];
   if(i){const price=N.itemValue(i),name=P.items[i.def].name;if(!N.usePill(i.id,c.id)){used=name;if(s.patch.allocationBudgetDay!==s.day){s.patch.allocationBudgetDay=s.day;s.patch.allocationDaySpent=0}s.patch.allocationDaySpent+=price;c.mx.lastAutoPill=s.day;c.mx.allocated=(c.mx.allocated||0)+1;N.allocationLog(c,'อาจารย์ช่วยใช้ '+name+' • อยู่ในงบและสำรองตามนโยบาย')}}}
  a.supportUntil=s.day+5;a.lastCare=s.day;a.helps++;
  detail=t.name+' ช่วยจัดการพักและประคองจิตใจ'+(used?' • ใช้ '+used+' จากคลังจริง':' • ไม่มีการใช้ของในคลัง');
 }else{
  if(!p.data?.id||!s.patch.management.autoStudy||c.jobFix||c.mx.managementLock||!N.reserveAllows(P.arts[p.data.id]?.cost)||!N.privateTeacher(c,p.data.id))return false;
  const err=N.learn(c.id,p.data.id,t.id);if(err)return false;
  detail='เริ่มรับถ่ายทอด '+P.arts[p.data.id].name+' จาก '+t.name+' • ใช้ค่าเรียนจริง • ไม่เปิดตำรับให้ทั้งสำนัก';
 }
 G.relAdd(c,t,.25);
 const changes={};for(const[k,v]of Object.entries(before))if(c[k]!==v)changes[k]=+(c[k]-v).toFixed(3);
 N.lifeEvent(c,p.key,p.why,detail,t.id,changes);N.lifeEvent(t,p.key,'ดูแลศิษย์ประจำตัว '+c.name,detail,c.id,{fat:+(t.fat-mentorFat).toFixed(3)});
 return true;
};
// Full-day private lessons take time from the teacher's other duties.
const prepare=N.prepareLife;
N.prepareLife=()=>{prepare();for(const t of G.home()){const n=G.home().filter(c=>c.mx.study?.kind==='teacher'&&c.mx.study.teacher===t.id).length;if(n&&t.job!=='teach')t.mx.life.mainShare*=Math.max(.6,1-n*.1)}};
const dailyArts=N.dailyArts;
N.dailyArts=()=>{const studying=new Map(G.alive().filter(c=>c.mx.study).map(c=>[c.id,{...c.mx.study}]));dailyArts();for(const [cid,st]of studying){const c=G.S.chars[cid];if(c&&!c.mx.study&&c.mx.arts.includes(st.id)&&st.kind==='teacher'&&c.master===st.teacher&&!c.mx.apprentice.learned.includes(st.id)){c.mx.apprentice.learned.push(st.id);N.lifeRecord(c,'รับถ่ายทอด '+P.arts[st.id].name+' จากอาจารย์ประจำตัวสำเร็จ')}}};
const day=G.stepDay;
G.stepDay=()=>{if(G.S.over)return;N.init(G.S);N.mentorshipDay();day();N.mentorshipDay();for(const c of G.alive())if(c.master&&(!G.S.chars[c.master]||N.mentorCycle(G.S.chars[c.master],c))){c.master=null;c.mx.apprentice.masterId=null;c.mx.apprentice.guidanceUntil=0}};
// A dead/expelled private teacher leaves completed knowledge, not a free public scroll.
for(const key of ['die','leave'])if(typeof G[key]==='function'){const old=G[key];G[key]=function(c,...args){for(const x of G.alive())if(x.mx.study?.kind==='teacher'&&x.mx.study.teacher===c.id){if(allowed(x,x.mx.study.id)){x.mx.study.kind='library';x.mx.study.teacher='';N.lifeRecord(x,'เรียนต่อจากตำรับส่วนกลางที่มีสิทธิ์อยู่แล้ว')}else{N.cancelStudy(x.id);N.lifeRecord(x,'ยุติการรับถ่ายทอดเพราะผู้สอนไม่อยู่ในสำนักแล้ว')}}return old(c,...args)}}

N.validateMentors=s=>{
 const bad=x=>{throw Error('เซฟศิษย์–อาจารย์ไม่ถูกต้อง: '+x)},num=(x,min=0,max=1e8)=>{if(typeof x!=='number'||!Number.isFinite(x)||x<min||x>max)bad('ตัวเลข')},str=(x,max=2000)=>{if(typeof x!=='string'||x.length>max)bad('ข้อความ')};
 const event=e=>{num(e.day,0,s.day);for(const k of ['teacher','student'])str(e[k],80);for(const k of ['teacherName','studentName'])str(e[k],100);if(!['teacher','student','player'].includes(e.direction)||!['accepted','declined','ended'].includes(e.result))bad('คำตอบ');str(e.text)};
 const w=s.patch.mentorship;if(!w||!Array.isArray(w.history)||w.history.length>80)bad('ประวัติ');num(w.lastReview,-1,s.day);w.history.forEach(event);
 for(const c of [...Object.values(s.chars),...s.applicants]){const a=c.mx.apprentice;if(!a||typeof a!=='object'||Array.isArray(a))bad('บุคคล');if(a.masterId!==null)str(a.masterId,80);num(a.since,0,s.day);str(a.teacherReason);str(a.studentReason);num(a.lastApproach,-14,s.day);for(const k of ['guidanceUntil','supportUntil','sessions','helps'])num(a[k]);num(a.lastSession,-1,s.day);num(a.lastCare,-7,s.day);if(!Array.isArray(a.learned)||a.learned.length>Object.keys(P.arts).length||new Set(a.learned).size!==a.learned.length||a.learned.some(id=>!P.arts[id]||!c.mx.arts.includes(id)))bad('วิชาถ่ายทอด');if(!Array.isArray(a.history)||a.history.length>16)bad('ประวัติบุคคล');a.history.forEach(event);
 const seen=new Set([c.id]);let t=s.chars[c.master];while(t){if(seen.has(t.id))bad('สายอาจารย์วนซ้ำ');seen.add(t.id);t=s.chars[t.master]}}
 return true;
};
const validation=N.validatePatch;N.validatePatch=s=>{validation(s);if(s.schema>=6)N.validateMentors(s);return true};
const validate=G.validate;
G.validate=txt=>{try{
 const o=JSON.parse(txt);if(o.S?.schema===5){
  // Verify original integrity before repairing only the known Grok progress overflow.
  const body=JSON.stringify(o.S);let sum=5381;for(let i=0;i<body.length;i++)sum=((sum<<5)+sum+body.charCodeAt(i))|0;
  if(o.sum!==undefined&&o.sum!==sum)return {ok:false,msg:'เซฟถูกแก้ไขหรือข้อมูลเสียหาย'};
  let repaired=false;for(const q of o.S.patch?.orders||[])if(Number.isFinite(q.done)&&Number.isFinite(q.work)&&q.work>0&&q.done>q.work){q.done=q.work;repaired=true}
  if(repaired){const next=JSON.stringify(o.S);sum=5381;for(let i=0;i<next.length;i++)sum=((sum<<5)+sum+next.charCodeAt(i))|0;o.sum=sum;txt=JSON.stringify(o)}
 }
 if(o.S?.schema===6)N.validateMentors(o.S);
 const r=validate(txt);if(r.ok)N.validateMentors(r.S);return r;
}catch(e){return {ok:false,msg:e.message||'เซฟศิษย์–อาจารย์เสียหาย'}}};
})(window.G);
