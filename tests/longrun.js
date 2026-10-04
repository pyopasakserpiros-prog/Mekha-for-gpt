// ทดสอบระยะยาวหลาย seed: node tests/longrun.js [วัน] [จำนวน seed]
const G=require('./harness');const days=+process.argv[2]||1800,N=+process.argv[3]||10;
const rows=[];
for(let seed=1;seed<=N;seed++){
 G.newGame(seed*7919);const t0=Date.now();let minPop=99,maxPop=0,starve=0,err=null,maxSer=0;
 try{for(let i=0;i<days;i++){G.stepDay();G.S.pending.slice().forEach(p=>G.decide(p.id,p.def));
   if(i%10===0&&G.S.applicants.length&&G.alive().length<18&&G.S.res.food>200&&G.S.res.silver>60)G.admit(G.S.applicants[0].id);
   const n=G.S.order.length;minPop=Math.min(minPop,n);maxPop=Math.max(maxPop,n);if(i%180===0)maxSer=Math.max(maxSer,G.serialize().length);if(G.S.over)break;}}catch(e){err=e.stack.split('\n').slice(0,3).join(' | ');}
 const S=G.S,ms=Date.now()-t0;const real=Object.values(S.chars).every(c=>Number.isFinite(c.hp)&&Number.isFinite(c.prog));
 const res=Object.entries(S.res).filter(([k,v])=>!Number.isFinite(v)||v<0).map(e=>e[0]);
 rows.push({seed,day:S.day,over:!!S.over,pop:S.order.length,minPop,maxPop,dead:S.stats.deaths,bt:S.stats.breakthroughs,fails:S.stats.fails,won:S.stats.battlesWon,lost:S.stats.battlesLost,food:Math.round(S.res.food),silver:Math.round(S.res.silver),log:S.log.length,saveKB:Math.round(G.serialize().length/1024),maxSaveKB:Math.round(maxSer/1024),ms,ok:real&&!res.length&&!err,res:res.join(','),err});
}
console.table(rows.map(r=>({seed:r.seed,day:r.day,over:r.over,pop:r.pop,min:r.minPop,max:r.maxPop,dead:r.dead,bt:r.bt,btFail:r.fails,won:r.won,lost:r.lost,food:r.food,ag:r.silver,logN:r.log,saveKB:r.saveKB,ms:r.ms,ok:r.ok})));
rows.filter(r=>r.err||!r.ok).forEach(r=>console.log('PROBLEM seed',r.seed,r.err||('bad values '+r.res)));
console.log('heap MB',Math.round(process.memoryUsage().heapUsed/1048576));
