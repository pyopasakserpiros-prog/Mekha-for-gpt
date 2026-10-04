/* Natural and deliberately funded stress worlds are reported separately. */
const fs=require('fs'),path=require('path'),assert=require('node:assert/strict'),G=require('./harness'),X=G.CIVIL,W=G.WORLD;
const seed=Number(process.argv[2]||7),mode=process.argv[3]||'natural',days=Number(process.argv[4]||1080),start=Date.now();
G.newGame(seed);X.state().training.enabled=true;const selected=new Set(),counts={},sampled=[];let maxBytes=0,lastCheckpoint=0;
if(mode==='stress'){G.S.patch.management.enabled=true;G.S.patch.management.autoMissions=true;G.S.patch.management.autoDiplomacy=true;for(const c of G.alive()){c.hp=100;c.fat=0;c.jobFix=0;}}
function fund(){for(const k of ['silver','food','herb','ore','stone','wood'])G.S.res[k]=Math.max(G.S.res[k],10000);for(const f of G.S.factions.filter(f=>!f.dead)){f.wealth=Math.max(f.wealth,10000);f.stock=Math.max(f.stock,10000);const g=X.group(f.id);for(const k of ['herb','ore','stone','wood'])g.materials[k]=Math.max(g.materials[k]||0,100);g.facilities.forge=Math.max(g.facilities.forge,1);g.facilities.alchemy=Math.max(g.facilities.alchemy,1);}}
const result=X.result;X.result=(a,id,...rest)=>{selected.add(id);counts[id]=(counts[id]||0)+1;return result(a,id,...rest)};
for(let i=0;i<days&&!G.S.over;i++){
 if(mode==='stress'&&i%30===0)fund();
 G.stepDay();for(const p of G.S.pending.slice())G.decide(p.id,p.def);
 if(G.S.day%30===0||G.S.over){const text=G.serialize(),r=G.validate(text);assert(r.ok,'day '+G.S.day+': '+r.msg);const bytes=Buffer.byteLength(text);maxBytes=Math.max(maxBytes,bytes);if(G.S.day%180===0){assert(G.loadText(text).ok);lastCheckpoint=G.S.day;sampled.push({day:G.S.day,people:W.people().length,player:G.S.order.length,bytes,pending:X.state().training.pending.length,samples:X.state().training.samples.length})}}
 if(G.S.day%180===0)console.log(JSON.stringify({seed,mode,day:G.S.day,ms:Date.now()-start,player:G.S.order.length}));
}
const text=G.serialize();assert(G.validate(text).ok);const packedUtf16Bytes=G.packLocalSave(text).length*2;assert(X.state().training.pending.length<=128);assert(X.state().training.samples.length<=256);
const report={seed,mode,requestedDays:days,completedDays:G.S.day,over:G.S.over,elapsedMs:Date.now()-start,player:G.S.order.length,people:W.people().length,maxBytes,lastCheckpoint,packedUtf16Bytes,selected:[...selected].sort(),counts,sampled,training:{pending:X.state().training.pending.length,samples:X.state().training.samples.length,dropped:X.state().training.dropped},note:mode==='stress'?'Resources are replenished explicitly; this tests capacity/stability, not natural survival.':'No artificial resource top-up. Early game-over is reported, never hidden.'};
fs.writeFileSync(path.join(__dirname,`results-v210-${mode}-${seed}.json`),JSON.stringify(report,null,2));console.log('LONGRUN PASS',JSON.stringify({seed,mode,days:report.completedDays,actions:report.selected.length,maxBytes,over:report.over}));
