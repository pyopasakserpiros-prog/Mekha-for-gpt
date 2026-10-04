const G=require('./harness');
G.newGame(12345);
console.log('start',G.S.order.length,JSON.stringify(G.S.res));
for(let i=0;i<400;i++){G.stepDay(); if(G.S.pending.length){G.S.pending.slice().forEach(p=>G.decide(p.id,p.def));} if(G.S.over)break;}
const S=G.S;console.log('day',S.day,'pop',S.order.length,'food',Math.round(S.res.food),'silver',Math.round(S.res.silver));
console.log(S.log.slice(-15).map(l=>l.day+' '+l.t).join('\n'));
