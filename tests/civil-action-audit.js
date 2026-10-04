/* Every contextual action is checked against independent prepared states. */
const G=require('./harness'),X=G.CIVIL,W=G.WORLD,N=G.N,P=G.PATCH,fs=require('fs'),path=require('path'),assert=require('node:assert/strict');
const results=[];
function setup(d,variant){G.newGame(7);N._claims={};N._dayKeys=[];G.S.day=200;Object.assign(G.S.patch.management,{enabled:true,autoMissions:true,autoDiplomacy:true,autoStudy:true,autoCraft:true,autoPromote:true,autoPills:true,autoSell:true});for(const k of Object.keys(G.S.res))G.S.res[k]=10000;
 for(const f of G.S.factions){f.wealth=10000;f.stock=10000;const g=X.group(f.id);Object.assign(g.materials,{herb:100,ore:100,wood:100,stone:100});Object.assign(g.facilities,{forge:1,alchemy:1,clinic:1,dorm:1});}
 const group=variant%2?'player':G.S.factions[0].id,people=X.members(group),leader=X.leader(group),a=d.actors.includes('sect')||d.actors.includes('leader')?leader:people.find(a=>a.id!==leader.id),t=people.find(t=>t.id!==a.id&&t.id!==leader.id)||leader,g=X.group(group);
 if(d.actors.includes('elder')){if(a.f)a.c.mx.role='ผู้อาวุโส';else a.c.rank=3;}if(!a.f){a.c.jobFix=0;a.c.mx.managementLock=false;}
 for(const b of people){b.b.wallet=b.id===a.id?variant>=2?0:50:50;X.life(b).grievance=80;X.life(b).influence=20;X.life(b).loneliness=60;X.life(b).qi=60;X.life(b).poison=10;X.life(b).wounds=4;X.life(b).confidence=40;X.life(b).deviation=10;b.b.cohort=a.id;if(b.f){b.c.r=3;b.c.mx.foundation=70;b.c.mx.health=variant>=2?100:60;b.c.mx.fatigue=35;b.c.mx.stress=60;b.c.mx.born=-9000;b.c.mx.apt=90;X.life(b).satisfaction=25;X.life(b).loyalty=15;}else{b.c.realm=3;b.c.found=70;b.c.hp=variant>=2?100:60;b.c.fat=35;b.c.stress=60;b.c.born=-9000;b.c.tox=10;b.c.at.int=90;b.c.at.amb=95;b.c.at.cau=85;b.c.at.cou=90;b.c.sat=25;b.c.loy=15;}
  for(const c of people)if(c.id!==b.id)W.relate(b,c.id,{trust:60,respect:65,affection:80,hatred:25,rivalry:45,debt:10});
  const arts=Object.values(P.arts).filter(k=>k.paths.includes(X.path(b)));if(b.f){X.life(b).arts=arts.map(k=>k.id);for(const k of arts)X.life(b).mastery[k.id]=90;}else{b.c.mx.arts=arts.map(k=>k.id);for(const k of arts)b.c.mx.mastery[k.id]=90;}
  X.life(b).evidence=[{day:200,type:'theft',actor:b.id,target:t.id,confidence:1}];b.b.goalHistory=[{day:200,kind:'wealth',result:'complete',target:null,progress:1}];
 }
 g.legitimacy=20;g.unrest=80;g.damage=10;g.security=20;g.lastChange=-180;
 const other=G.S.factions.find(f=>f.id!==group&&!f.dead),to=other.id,r=X.diplomacy(group,to);Object.assign(r,{trust:60,relation:variant<2?50:-75,hostility:variant<2?0:80,trade:true,alliance:d.id==='BREAK_ALLIANCE'||d.id==='DONATE_RESOURCES',war:['SEEK_PEACE','OFFER_TRIBUTE','RAID','SIEGE','ATTACK_SECT','SABOTAGE','INFILTRATE'].includes(d.id),embargo:d.id==='SMUGGLE'});g.intel[to]={day:200,power:1,wealth:100,confidence:.8};
 for(const b of people){W.learn(b,W.emit('VISIT_SECT',null,other.mx.leader,'รู้จักผู้แทน',{group:to,witnesses:[]}), 'direct');W.learn(b,W.emit('LEARN_RUMOR',null,null,'รู้จักป่า',{group,location:'herbwood',witnesses:[]}), 'direct');}
 const cultivation=Object.values(P.items).find(k=>k.type==='pill'&&k.effect==='train'&&k.grade<=2&&X.itemCompatible(a,k));
 const weapon=Object.values(P.items).find(k=>k.type==='weapon'&&X.itemCompatible(a,k)),pill=Object.values(P.items).find(k=>k.type==='pill'&&k.effect==='heal'&&X.itemCompatible(a,k)),scroll=Object.values(P.items).find(k=>k.type==='scroll'&&X.itemCompatible(a,k));for(const item of [weapon,pill,scroll,cultivation].filter(Boolean)){X.addStock(group,item.id,2);if(a.f)X.giveItem(a,item.id);else if(P.slots[item.type]){const i=N.addItem(item.id);N.equip(i.id,a.id)}}
 W.state().economy.treasury=10000;
 if(['INSULT','INTIMIDATE','MANIPULATE','SPREAD_RUMOR','STEAL','ROB','SMUGGLE','BRIBE','MEDDLE','UNDERMINE_FACTION','ASSASSINATE','DUEL_TO_DEATH','EXECUTE'].includes(d.id)){if(a.f)a.f.honor=.1;else a.c.at.loy=10;}
 if(['DECLARE_WAR','RAID','SIEGE','ATTACK_SECT','SABOTAGE'].includes(d.id)){g.legitimacy=60;g.unrest=20;}
 if(d.id==='HIDE')r.war=true;
 if(d.id==='PROTECT'){r.war=true;if(t.f)t.c.mx.health=60;else t.c.hp=60;}
 if(d.id==='LOSE_CONFIDENCE'){const e=W.emit('LOSE_DUEL',a.id,t.id,'แพ้ประลอง',{witnesses:[a.id],importance:60});W.remember(a,e,-20);}
 if(d.id==='PROMOTE_MEMBER'){if(t.f)t.c.mx.role='ศิษย์';else{t.c.rank=1;t.c.loy=80;t.c.merit=100;}}
 if(d.id==='SELL_ITEM'){if(a.f)a.c.mx.health=100;else a.c.hp=100;}
 let data=d.choose?.(a,X.context(a))||{};

 if(d.target==='near_person'||d.target==='known_person')data={...data,person:t.id};if(d.target==='group')data={...data,group:to};
 if(d.id==='BREAKTHROUGH_ATTEMPT'){if(a.f)a.c.mx.progress=W.need(a);else a.c.prog=W.need(a);X.life(a).deviation=0;}
 if(['TRAIN_MARTIAL_ART','COMPREHEND_TECHNIQUE','IMPROVE_TECHNIQUE','CREATE_TECHNIQUE'].includes(d.id))data={art:X.arts(a)[0]};
 if(d.id.startsWith('PRACTICE_'))data=d.choose?.(a,X.context(a))||{};
 if(['STUDY_TECHNIQUE','IMITATE_TECHNIQUE','TEACH_TECHNIQUE','TEACH_DISCIPLE','TEACH'].includes(d.id)){const id=X.arts(a)[0];if(d.id==='STUDY_TECHNIQUE'){if(a.f)X.life(a).arts=X.arts(a).filter(k=>k!==id);else a.c.mx.arts=X.arts(a).filter(k=>k!==id);data={art:id}}else{if(t.f)X.life(t).arts=[];else t.c.mx.arts=[];data={person:t.id}}}
 if(d.id==='SEEK_MASTER'){if(t.f)t.c.r=4;else t.c.realm=4;W.relate(t,a.id,{hatred:-25});}
 if(d.id==='VISIT_MASTER'){if(a.f)X.life(a).master=t.id;else a.c.master=t.id;}
 if(['VISIT_FAMILY','CARE_FOR_FAMILY'].includes(d.id)){X.life(a).partner=t.id;X.life(t).partner=a.id;}
 if(['MARRY','PROPOSE_MARRIAGE','GIVE_GIFT'].includes(d.id))W.relate(t,a.id,{hatred:-25});if(d.id==='MARRY')X.life(a).proposal=t.id;
 if(d.id==='HELP_PERSON'){if(t.f)t.c.mx.fatigue=60;else t.c.fat=60;}
 if(d.id==='GUIDE_JUNIOR_CULTIVATION'){if(t.f)t.c.r=1;else t.c.realm=1;}
 if(d.id==='HIDE_INFORMATION')a.b.knowledge[0].public=false;
 if(['SHARE_INFORMATION','GOSSIP','SPREAD_RUMOR'].includes(d.id))t.b.knowledge=[];
 if(d.id==='FORM_INTERNAL_FACTION'){if(!a.f)a.c.at.amb=95;else a.f.honor=.1;}
 if(d.id==='RESOLVE_GRIEVANCE')X.petition(t);
 if(['VOTE_NO_CONFIDENCE','COUP'].includes(d.id)){g.case={id:'case1',challenger:a.id,leader:leader.id,started:190,due:200,phase:d.id==='COUP'?'conflict':'vote',support:10,response:d.id==='COUP'?'refuse':'vote'};if(a.f)a.c.mx.apt=100;}
 if(d.id==='WITHDRAW_SUPPORT'){a.b.cohort=t.id;W.relate(a,t.id,{trust:-60});}
 if(d.id==='OPPOSE_CANDIDATE')g.case={challenger:t.id};
 if(['BORROW_MONEY','REQUEST_FAVOR','ASK_FOR_HELP','STEAL','ROB'].includes(d.id))a.b.wallet=0;
 if(d.id==='LEND_MONEY'){a.b.wallet=50;t.b.wallet=0;}
 if(d.id==='REPAY_LOAN'){const loan={id:'ln1',borrower:a.id,lender:t.id,amount:10,due:230,status:'overdue'};X.life(a).debts=[{...loan}];X.life(t).debts=[{...loan}];}
 if(['FLEE','SPARE','EXECUTE','RESCUE'].includes(d.id)){const c=d.id==='FLEE'?a:t;X.life(c).captive={captor:d.id==='FLEE'?t.id:a.id,group:a.group,since:180,verdict:true};if(!c.f)c.c.state='civilCaptive';}
 if(['CAPTURE','ASSASSINATE','DUEL_TO_DEATH','ATTACK','DEFEND','AMBUSH','RETREAT','CHASE'].includes(d.id)){const victim=W.person(other.roster[1].mx.id);data={person:victim.id};W.relate(a,victim.id,{hatred:80,rivalry:60});X.setDiplomacy(a.group,to,{war:true});X.life(victim).travel={location:a.group,phase:'stay',remaining:2,days:4,purpose:'VISIT_SECT',target:null,started:200,resumeJob:'foreign',resumeFix:0};if(d.id==='CAPTURE')victim.c.mx.health=20;}
 if(d.id==='PROTECT')r.war=true;
 if(d.id==='LOOT')X.life(a).loot={from:t.id,until:203};
 if(['RETURN_HOME','FLEE','FOLLOW_TARGET'].includes(d.id)&&d.id!=='FLEE'){const b=d.id==='FOLLOW_TARGET'?t:a;X.startTravel(b,'herbwood','EXPLORE');X.life(b).travel.phase='stay';if(d.id==='FOLLOW_TARGET')data={person:t.id};}
 if(['GATHER_HERBS','MINE_ORE','HARVEST_RESOURCE'].includes(d.id)){const site=d.id==='MINE_ORE'?'oldmine':'herbwood';X.startTravel(a,site,'EXPLORE');X.life(a).travel.phase='stay';W.state().sites[site].owner=a.group;data={site};}
 if(d.id==='ESCORT'){const cv=X.caravan(group,to,'food',5,8);data={caravan:cv.id};}
 if(['DEFEND_RESOURCE_SITE','CLAIM_TERRITORY','CONTEST_TERRITORY','CAPTURE_RESOURCE_SITE'].includes(d.id)){W.state().sites.herbwood.owner=d.id==='DEFEND_RESOURCE_SITE'?group:d.id==='CLAIM_TERRITORY'?null:to;W.state().sites.herbwood.garrison=0;X.setDiplomacy(group,to,{war:true});data={site:'herbwood'};}
 if(['TRAVEL','VISIT_CITY','VISIT_SECT','EXPLORE','SCOUT','HUNT','SEARCH','SEARCH_RUINS','SEARCH_TREASURE','INFILTRATE'].includes(d.id))data={location:d.id==='VISIT_CITY'?'silkroad':['VISIT_SECT','INFILTRATE'].includes(d.id)?to:'herbwood'};
 if(d.id==='SELL_ITEM')data={item:X.gear(a).find(i=>P.items[i.def].type==='pill')?.id};
 if(d.id==='BUY_ITEM')data={item:weapon?.id};
 if(d.id==='DISTRIBUTE_EQUIPMENT'){if(t.f)X.life(t).gear=[];}
 if(d.id==='SEEK_BREAKTHROUGH_RESOURCE'){};
 if(d.id==='RESEARCH_TECHNIQUE')data=d.choose(a,X.context(a))||{};
 if(d.id==='STUDY_TREASURE')data={item:X.gear(a).find(i=>P.items[i.def].type==='scroll')?.id};
 if(['BUILD_FACILITY','EXPAND_SECT'].includes(d.id))data={facility:d.id==='EXPAND_SECT'?'dorm':'forge'};
 if(d.id==='BUY_RESOURCES')data={resource:'herb'};
 if(['CRAFT','REFINE_PILL','FORGE_WEAPON'].includes(d.id)){const recipe=X.recipe(a,d.id==='REFINE_PILL'?'pill':d.id==='FORGE_WEAPON'?'weapon':null);data=recipe?{recipe:recipe.id}:{};}
 if(d.id==='ABDICATE'){if(t.f)t.c.mx.role='ผู้อาวุโส';else t.c.rank=3;}
 return {a,data};
}
for(const d of Object.values(X.actions)){
 let success=false,error=null;
 for(let v=0;v<4&&!success;v++){try{const {a,data}=setup(d,v),p=X.make(a,d.id,data);if(!X.validate(a,p))continue;const before=JSON.stringify(G.S),text=X.execute(a,p);if(text){assert.notEqual(JSON.stringify(G.S),before);success=true;}}catch(e){error=e.stack;}}
 results.push({id:d.id,name:d.name,executed:success,error:success?null:error});
}
const report={total:results.length,executed:results.filter(r=>r.executed).length,unexercised:results.filter(r=>!r.executed),results,note:'Prepared states exercise legality and concrete state transitions; not a natural frequency or balance test. Dedicated scenarios verify conservation, delayed effects and consequences.'};fs.writeFileSync(path.join(__dirname,'results-v210-action-audit.json'),JSON.stringify(report,null,2));console.log(JSON.stringify({total:report.total,executed:report.executed,unexercised:report.unexercised},null,2));assert.equal(report.executed,report.total,'Every contextual handler must be exercised');
