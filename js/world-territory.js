/* Finite resource sites connect control, transport, hostility and investment. */
(function(G){'use strict';const W=G.WORLD,N=G.N,C=G.clamp;
N.registerAction('CLAIM_TERRITORY','ตั้งกำลังควบคุมพื้นที่','politics','territory',{actors:['sect'],costs:{silver:50,food:5},requirements:['known_location','funds','force','diplomatic_permission']});
N.registerAction('CAPTURE_RESOURCE_SITE','ยึดแหล่งทรัพยากร','combat','territory',{actors:['sect'],risk:25,requirements:['available_squad','known_location','supplies','battle_result']});
const init=N.init;
N.init=s=>{init(s);for(const [id,site]of Object.entries(s.patch.simulation.sites)){
 if(!('owner' in site))site.owner=(id==='oldmine'||id==='herbwood'?'f6':null);
 site.garrison??=2;site.controlledSince??=0;site.lastHarvest??=-7;
}return s};
const newGame=G.newGame;G.newGame=(...args)=>{const s=newGame(...args);N.init(s);return s};
W.siteKnown=(a,id)=>a.b.knowledge.some(k=>k.location===id&&k.confidence>=.6);
W.captureSite=(loc,ids)=>{
 const s=G.S,site=W.state().sites[loc],L=G.LOCS[loc];
 if(!site||!L||!s.discovered[loc]||L.k==='trade')return {ok:false,msg:'ยังไม่พบพื้นที่นี้ หรือเป็นเส้นทางค้าที่ไม่ใช่แหล่งให้ยึด'};
 if(site.owner==='player')return {ok:false,msg:'สำนักควบคุมอยู่แล้ว'};
 if(!Array.isArray(ids)||!ids.length||new Set(ids).size!==ids.length)return {ok:false,msg:'ต้องมีกำลังที่ไม่ซ้ำกัน'};
 const team=ids.map(id=>s.chars[id]);if(team.some(c=>!c||!W.available(W.person(c.id))||c.hp<70||c.fat>65))return {ok:false,msg:'กำลังต้องอยู่ในสำนักและพร้อมรบ'};
 const cost={silver:50,food:team.length*3+5};if(!G.can(cost))return {ok:false,msg:'ต้องใช้ทุน 50 และเสบียง '+cost.food};
 const faction=s.factions.find(f=>f.id===site.owner&&!f.dead);
 if(faction?.stance==='ally'||faction?.pact)return {ok:false,msg:'ไม่ยึดพื้นที่ของพันธมิตรหรือคู่ค้า ต้องยกเลิกข้อตกลงก่อน'};
 G.pay(cost,'จัดกำลังยึด '+L.n);
 const attackers=team.map(c=>G.fighter(c));
 const defenders=Array.from({length:Math.max(1,Math.round(site.garrison))},(_,i)=>G.unit('ผู้เฝ้า '+L.n,Math.max(.3,L.danger*.5)+(i===0?.2:0),'mob'));
 const result=G.battle(attackers,defenders,{tactic:s.sect.policies.tactic,retreat:.35,log:1});
 G.aftermath(attackers,result,'ยึด '+L.n);
 if(faction){faction.rel=C(faction.rel-8,-100,100);faction.grudge=(faction.grudge||0)+1;faction.mx.organization.lastReview=-7;}
 if(result.win){site.owner='player';site.garrison=2;site.controlledSince=s.day;W.emit('CAPTURE_RESOURCE_SITE',s.sect.leader,null,s.sect.name+' ยึด '+L.n+' สำเร็จหลังจ่ายทุน เสบียง และผ่านการรบ',{importance:85,public:true,location:loc,witnesses:team.filter(c=>s.chars[c.id]).map(c=>c.id),effects:{silver:-50,food:-cost.food}});}
 else W.emit('LOSE_DUEL',s.sect.leader,null,'กำลังสำนักไม่สามารถยึด '+L.n+' ต้องพักฟื้นและเตรียมตัวใหม่',{importance:80,location:loc,witnesses:team.filter(c=>s.chars[c.id]).map(c=>c.id)});
 return {ok:true,msg:result.win?'ยึดพื้นที่สำเร็จ ทรัพยากรจะทยอยเข้า ไม่ได้เพิ่มของทันที':result.retreat?'ถอยจากการยึดพื้นที่ มีค่าใช้จ่ายและอาจบาดเจ็บ':'ยึดพื้นที่ไม่สำเร็จ ตรวจผู้บาดเจ็บและความสูญเสีย',win:result.win};
};
const economy=W.economyDay;
W.economyDay=()=>{economy();const s=G.S,q=W.state(),hostile=Object.values(q.sites).filter(x=>x.owner&&x.owner!=='player'&&s.factions.some(f=>f.id===x.owner&&(f.stance==='war'||f.id==='f6')&&!f.dead)).length;
 q.economy.routeSafety=C(q.economy.routeSafety-hostile*.02,.25,1);
 q.economy.scarcity=C(q.economy.scarcity+hostile*.04,.7,2.8);q.economy.medicinePrice=C(q.economy.medicinePrice+hostile*.04,.7,3);
 for(const [id,site]of Object.entries(q.sites)){
  if(site.owner&&site.owner!=='player'&&!s.factions.some(f=>f.id===site.owner&&!f.dead)){site.owner=null;site.garrison=0;}
  if(s.day-site.lastHarvest<7||!site.owner)continue;
  site.lastHarvest=s.day;const key=G.LOCS[id].k==='ore'?'ore':'herb',qty=Math.min(site[key],1.4);
  if(qty<=0)continue;site[key]-=qty;
  if(site.owner==='player'){G.add(key,qty,'แหล่งที่ควบคุม '+G.LOCS[id].n);if(s.day%28===0)W.emit('HARVEST_RESOURCE',s.sect.leader,null,'แหล่ง '+G.LOCS[id].n+' ส่ง '+G.RES[key].n+' ตามปริมาณที่ยังมีอยู่',{importance:45,location:id,effects:{[key]:qty}});}
  else {const f=s.factions.find(f=>f.id===site.owner&&!f.dead);if(f){f.stock+=qty;f.mx.organization.morale=C(f.mx.organization.morale+.05,0,100);}}
 }
};
const decision=W.factionDecision;
W.factionDecision=f=>{const before=f.mx.organization.lastReview;decision(f);if(f.dead||before===f.mx.organization.lastReview||f.wealth<100||f.stock<5)return;
 const a=W.person(f.mx.leader);if(!a||W.attr(a,'amb')<60)return;
 const sites=Object.entries(W.state().sites).filter(([id,x])=>!x.owner&&G.LOCS[id].k!=='trade'&&W.siteKnown(a,id)&&G.LOCS[id].danger<=Math.max(1,W.realm(a)));
 if(!sites.length)return;const [id,x]=sites[0];f.wealth-=50;f.stock-=5;W.state().economy.treasury+=50;x.owner=f.id;x.garrison=2;x.controlledSince=G.S.day;
 W.orgRecord(f,'CLAIM_TERRITORY','ตั้งกำลังที่ '+G.LOCS[id].n,'รับรู้เบาะแสและมีทุน เสบียง พร้อมควบคุมแหล่งที่ไม่มีเจ้าของ',{silver:-50,food:-5});
 W.emit('CLAIM_TERRITORY',f.mx.leader,null,f.n+' ควบคุม '+G.LOCS[id].n,{public:true,importance:80,group:f.id,location:id,witnesses:f.roster.map(r=>r.mx.id)});
};
// Recent detailed schedules are bounded separately from long-term memories and monthly totals.
const day=G.stepDay;G.stepDay=()=>{day();const limit=W.state().quality==='DEEP'?128:W.state().quality==='NORMAL'?96:64;
 for(const c of G.alive()){c.mx.life.history=c.mx.life.history.slice(0,limit);}
};
})(window.G);
