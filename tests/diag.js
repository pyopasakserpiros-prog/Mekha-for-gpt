const G=require('./harness');
const seed=+process.argv[2]||12345, days=+process.argv[3]||360;
G.newGame(seed);
function snap(){const S=G.S;const jobs={};G.alive().forEach(c=>jobs[c.job]=(jobs[c.job]||0)+1);
 console.log('d'+S.day,'n'+S.order.length,'food',Math.round(S.res.food),'ag',Math.round(S.res.silver),'herb',Math.round(S.res.herb),'ore',Math.round(S.res.ore),'stone',Math.round(S.res.stone),'beast',Math.round(S.res.beast),'wood',Math.round(S.res.wood),JSON.stringify(jobs));
 const fa=S.flowAvg;const line=r=>Object.entries(fa[r]||{}).map(([k,v])=>k+':'+v.toFixed(1)).join(' | ');console.log('  food:',line('food'));console.log('  silver:',line('silver'));}
for(let i=0;i<days;i++){G.stepDay();G.S.pending.slice().forEach(p=>G.decide(p.id,p.def));if(G.S.day%10===0&&G.S.applicants.length&&G.alive().length<16&&G.S.res.food>200)G.admit(G.S.applicants[0].id);if(G.S.day%30===0)snap();if(G.S.over)break;}
