/* Native primary duties are counted alongside optional decisions; prose follows actual causes. */
(function(G){'use strict';const W=G.WORLD,N=G.N;
W.QUALITY.DEEP.memories=48;W.QUALITY.DEEP.knowledge=32;
W.QUALITY.NORMAL.memories=32;W.QUALITY.NORMAL.knowledge=24;
const trace=W.trace;W.trace=(...args)=>{trace(...args);if(!W.state().debug)args[0].b.trace=args[0].b.trace.slice(0,4);};
W.retention=b=>{const cfg=W.config(),scale=b.tier===1?1:b.tier===2?.5:.25;return {memories:Math.max(6,Math.floor(cfg.memories*scale)),knowledge:Math.max(6,Math.floor(cfg.knowledge*scale))}};
const remember=W.remember;W.remember=(a,...args)=>{remember(a,...args);if(a)a.b.memories=a.b.memories.slice(0,W.retention(a.b).memories);};
const learn=W.learn;W.learn=(a,...args)=>{learn(a,...args);if(a)a.b.knowledge=a.b.knowledge.slice(0,W.retention(a.b).knowledge);};
// A self-funded purchase is not a gift and must not create a favor debt to the leader.
const execute=W.execute;W.execute=(a,p)=>{const purchase=['buy_personal','seek_weapon'].includes(p.key),before=W._purchaseBuyer;if(purchase)W._purchaseBuyer=a.id;try{return execute(a,p)}finally{W._purchaseBuyer=before;}};
const receipt=W.receipt;W.receipt=(cid,id,name,grade,medicine=false)=>{if(W._purchaseBuyer!==cid)return receipt(cid,id,name,grade,medicine);const a=W.person(cid);if(a)W.emit('BUY_ITEM',cid,null,a.name+' ใช้เงินเก็บซื้อ'+(medicine?'และใช้ ':' ')+name,{importance:grade>=3?80:45,witnesses:[cid],public:grade>=3});};
const cleanup=W.cleanup;W.cleanup=()=>{cleanup();if(W._candidateDebug){const live=new Set(W.people().map(a=>a.id));for(const id of Object.keys(W._candidateDebug))if(!live.has(id))delete W._candidateDebug[id];}};
N.registerAction('CULTIVATE','บ่มเพาะตามหน้าที่','cultivation','native_cultivation');
N.registerAction('WORK','ปฏิบัติหน้าที่ประจำ','economy','native_work');
N.registerAction('REST','พักรักษาตามหน้าที่','health','native_rest');
if(!W.GOALS.realm.actions.includes('CULTIVATE'))W.GOALS.realm.actions.push('CULTIVATE');
const init=N.init;N.init=s=>{init(s);s.patch.simulation.lastPrimaryDay??=-1;const cfg=W.QUALITY[s.patch.simulation.quality];for(const b of [...Object.values(s.chars),...s.applicants].map(c=>c.mx.brain).concat(s.factions.flatMap(f=>f.roster.map(r=>r.mx.brain)))){if(b.memories.length>cfg.memories)b.memories=b.memories.slice(0,cfg.memories);if(b.knowledge.length>cfg.knowledge)b.knowledge=b.knowledge.slice(0,cfg.knowledge);}return s};
const foreign=N.foreignDay;
N.foreignDay=()=>{const before=new Map(G.S.factions.flatMap(f=>f.roster.filter(r=>r.mx).map(r=>[r.mx.id,{realm:r.r,progress:r.mx.progress}])));foreign();for(const f of G.S.factions)for(const r of f.roster){const old=before.get(r.mx.id);if(old&&(r.r>old.realm||r.mx.progress>old.progress))W.record(W.person(r.mx.id),'CULTIVATE',r.n+' ใช้ทุนของฝ่ายบ่มเพาะตามหน้าที่');}};
const monthly=W.monthly;
W.monthly=()=>{
 const s=G.S,q=W.state();if(q.lastPrimaryDay!==s.day){q.lastPrimaryDay=s.day;for(const c of G.alive()){
  const job=c.mx.workedJob;if(!job||c.state!=='home'&&c.mx.brain.travel?.started!==s.day)continue;
  const id=job==='cultivate'?'CULTIVATE':job==='study'?'STUDY_TECHNIQUE':job==='rest'?'REST':'WORK';W.record(W.person(c.id),id,c.name+' รับผิดชอบ '+(G.JOBS[job]?.n||job));
 }}
 monthly();if(s.day%30!==0||!q.reports[0])return;
 for(const r of q.reports[0].people){const a=W.person(r.id);if(!a)continue;const b=a.b,m=b.months[0],counts=m.counts,goal=b.focus?W.GOALS[b.focus].name:'หน้าที่ที่ได้รับมอบหมาย';
  const recent=b.memories.filter(e=>e.day>s.day-30&&e.importance>=55).sort((x,y)=>y.day-x.day).slice(0,2);
  const work=(counts.WORK||0)+(counts.HELP_PERSON||0)+(counts.HARVEST_RESOURCE||0),training=(counts.CULTIVATE||0)+(counts.TRAIN_MARTIAL_ART||0)+(counts.PREPARE_BREAKTHROUGH||0)+(counts.SECLUDED_CULTIVATION||0),social=(counts.SOCIALIZE||0)+(counts.BUILD_TRUST||0)+(counts.REPAY_FAVOR||0);
  const clauses=[];if(training)clauses.push('ฝึกบ่มเพาะและวรยุทธ์ '+training+' ช่วง');if(work)clauses.push('แบ่งกำลังให้งานสำนัก '+work+' ช่วง');if(counts.STUDY_TECHNIQUE)clauses.push('ศึกษาวิชา '+counts.STUDY_TECHNIQUE+' ช่วง');if(social)clauses.push('สานสัมพันธ์และตอบแทนบุญคุณ '+social+' ครั้ง');if(counts.RECOVER||counts.REST)clauses.push('พักฟื้นเมื่อร่างกายต้องการ');
  const tone=G.N.hash(a.id+'|'+s.day)%3;
  const opening=tone===0?'ตลอดเดือนที่ผ่านมา '+a.name+' ยังมุ่ง'+goal:tone===1?'เส้นทางของ '+a.name+' ในเดือนนี้ผูกอยู่กับ'+goal:a.name+' จัดชีวิตประจำวันตามความตั้งใจที่จะ'+goal;
  const cause=recent.length?' เหตุการณ์ที่ติดอยู่ในความทรงจำคือ '+recent.map(e=>e.text).join(' และ '):'';
  const text=opening+' โดย'+(clauses.join(' พร้อมทั้ง ')||'ดูแลหน้าที่และข้อจำกัดที่เผชิญ')+'.'+cause+' ปลายเดือนมีเงินเก็บ '+G.f1(b.wallet)+' เหรียญ';r.text=text;m.text=text;
 }
};
const daily=G.stepDay;G.stepDay=()=>{daily();for(const a of W.people()){const cfg=W.retention(a.b);a.b.memories=a.b.memories.slice(0,cfg.memories);a.b.knowledge=a.b.knowledge.slice(0,cfg.knowledge);}for(const f of G.S.factions){for(const r of f.roster){r.mx.sideHistory=(r.mx.sideHistory||[]).slice(0,16);r.mx.months=(r.mx.months||[]).slice(0,6);}for(const r of f.mx.news?.people||[]){r.mx.sideHistory=(r.mx.sideHistory||[]).slice(0,12);r.mx.months=(r.mx.months||[]).slice(0,6);}}};
})(window.G);
