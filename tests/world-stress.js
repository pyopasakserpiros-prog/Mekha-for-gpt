const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),G=require('./harness'),W=G.WORLD;
const seed=+(process.argv[2]||7),days=+(process.argv[3]||3600);G.newGame(seed);const s=G.S;
for(const k of Object.keys(s.pauseCfg))s.pauseCfg[k]=0;
const start=performance.now(),milestones=[],ticks=[];let maxSave=0,maxPacked=0,maxMemory=0,maxKnown=0;
for(let d=0;d<days&&!s.over;d++){
 if(d===90){G.add('silver',1000000,'ทดสอบทุนมหาศาล');G.add('food',5000,'ทดสอบเสบียง');G.N.addItem('foundation_pill',500);G.N.addItem('iron_sword',100);}
 if(d===180){s.patch.management.direction='craft';s.patch.management.autoSell=true;}
 if(d===360){s.patch.management.direction='learning';s.patch.management.autoMissions=true;}
 if(d===540){const f=s.factions.find(f=>!f.dead&&f.id!=='f6');if(f){f.wealth+=10000;f.stance='war';f.mx.organization.warSince=s.day;}s.patch.management.autoDiplomacy=true;}
 if(d===1080){s.patch.management.direction='community';W.state().quality='NORMAL';}
 if(d===1440)W.state().quality='DEEP';
 const t=performance.now();G.stepDay();ticks.push(performance.now()-t);for(const p of s.pending.slice())G.decide(p.id,p.def);
 for(const a of W.people()){maxMemory=Math.max(maxMemory,a.b.memories.length);maxKnown=Math.max(maxKnown,a.b.knowledge.length);assert(a.b.memories.length<=64);assert(a.b.knowledge.length<=48);assert(a.b.goals.length<=6);assert(Object.keys(a.b.relations).length<=24);assert(a.b.wallet>=0&&Number.isFinite(a.b.wallet));assert(a.b.months.length<=12);}
 for(const value of Object.values(s.res))assert(value>=0&&Number.isFinite(value));for(const f of s.factions){assert(f.wealth>=0&&Number.isFinite(f.wealth));assert(f.stock>=0&&Number.isFinite(f.stock));}
 if([30,180,360,1080,1800,3600].includes(s.day)||s.day%180===0){
  const raw=G.serialize(),valid=G.validate(raw);assert(valid.ok,`seed ${seed} day ${s.day}: ${valid.msg}`);const packed=G.packLocalSave(raw);assert.equal(G.unpackLocalSave(packed),raw);maxSave=Math.max(maxSave,Buffer.byteLength(raw));maxPacked=Math.max(maxPacked,packed.length*2);
  assert(maxSave<16*1024*1024,'exported save growth exceeds bounded-state budget');assert(packed.length*2<3*1024*1024,'compressed local save exceeds practical budget');
  const report=W.state().reports[0],busy=report?.people.filter(p=>p.actions>=5).length||0;
  milestones.push({day:s.day,alive:s.order.length,saveBytes:Buffer.byteLength(raw),localBytes:packed.length*2,activeImportant:busy,reportedPeople:report?.people.length||0,routeSafety:W.state().economy.routeSafety,wars:s.factions.filter(f=>!f.dead&&(f.stance==='war'||Object.keys(f.war).length)).length});
  console.log('MILESTONE',seed,s.day,'bytes',Buffer.byteLength(raw),'local',packed.length*2);
 }
}
assert.equal(s.day,days,'world ended early; inspect failure instead of claiming a complete long run');assert(W.state().metrics.success>1000);assert(W.state().metrics.goalsCompleted>0);assert(W.state().reports.length<=12);ticks.sort((a,b)=>a-b);
const result={seed,days:s.day,seconds:+((performance.now()-start)/1000).toFixed(2),alive:s.order.length,over:s.over,metrics:W.state().metrics,maxSaveBytes:maxSave,maxLocalBytes:maxPacked,maxMemory,maxKnowledge:maxKnown,tickMedianMs:+ticks[Math.floor(ticks.length*.5)].toFixed(2),tickP95Ms:+ticks[Math.floor(ticks.length*.95)].toFixed(2),milestones};
fs.writeFileSync(path.join(__dirname,`results-v200-stress-${seed}.json`),JSON.stringify(result,null,2));console.log('STRESS PASS',JSON.stringify({seed,days:s.day,seconds:result.seconds,maxSaveBytes:maxSave,maxLocalBytes:maxPacked}));
