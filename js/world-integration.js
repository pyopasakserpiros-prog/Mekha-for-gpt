/* Connect social and organizational state to existing authority, training and market rules. */
(function(G){'use strict';const W=G.WORLD,N=G.N,C=G.clamp;
const init=N.init;N.init=s=>{init(s);s.patch.simulation.shortage??=false;return s};
const emit=W.emit;W.emit=(id,actor,target,text,options={})=>emit(id,actor,target,text,['SET_GOAL','COMPLETE_GOAL','FAIL_GOAL','ABANDON_GOAL'].includes(id)?{...options,witnesses:actor?[actor]:[]}:options);
const remember=W.remember;
W.remember=(a,e,emotion=0)=>{
 if(a?.id===e.actor){if(e.keyword==='LOSE_DUEL')emotion=-12;else if(e.keyword==='WIN_DUEL')emotion=8;else if(e.keyword==='COMPLETE_GOAL')emotion=8;else if(e.keyword==='FAIL_GOAL')emotion=-8;}
 remember(a,e,emotion);
 if(a&&e.keyword==='LOSE_DUEL'&&a.id===e.actor&&e.target)W.relate(a,e.target,{fear:2,respect:1});
};
// Routine work has real effects and counters, but must not become recursive gossip.
const record=W.record;
W.record=(a,id,text,target=null,changes={})=>{
 const significant=new Set(['CARE_FOR_INJURED','CHALLENGE','REQUEST_PROMOTION','TRAVEL','RETURN_HOME','SEARCH_RUINS','FIND_TREASURE','REPAY_FAVOR','FORGIVE']);
 if(significant.has(id))return record(a,id,text,target,changes);
 for(const g of a.b.goals)if(g.steps[g.cursor]===id){g.cursor++;g.attempts++;if(g.cursor>=g.steps.length)g.cursor=0;}
 if(a.b.plan&&a.b.goals[0])a.b.plan.steps=a.b.goals[0].steps.slice(a.b.goals[0].cursor);
 a.b.lastAction=G.S.day;a.b.counts[id]=(a.b.counts[id]||0)+1;a.b.month[id]=(a.b.month[id]||0)+1;
 return null;
};
// A longstanding negative bond is a plausible starting rivalry, not a random grudge.
const relation=W.rel;
W.rel=(a,id)=>{const existed=!!a.b.relations[id],r=relation(a,id);if(!existed){const old=a.f?(a.c.mx.bonds?.[id]||0):(a.c.rel[id]||0);if(old<-20){r.rivalry=Math.min(60,-old*.5);r.hatred=Math.min(40,-old*.3);}}return r};
const score=W.score;
W.score=(a,p)=>{
 const x=score(a,p),r=p.target&&a.b.relations[p.target];
 const motivation=r?(x.id==='CHALLENGE'?r.jealousy*.12-r.fear*.2:['SUPPORT_CANDIDATE','REQUEST_GUIDANCE'].includes(x.id)?r.respect*.08+r.loyalty*.08:['REPAY_FAVOR','CARE_FOR_INJURED'].includes(x.id)?Math.max(0,r.debt)*.1+r.loyalty*.04:0):0;
 const exposure=['TRAVEL','CHALLENGE'].includes(x.id)?a.b.needs.safety*.12:0;
 x.score+=motivation-exposure;x.reasons.politics=motivation;x.reasons.exposure=-exposure;return x;
};
// The existing succession menu remains authoritative; supporters affect the default choice.
const succession=G.startSuccession;
G.startSuccession=()=>{
 succession();if(!G.S.patch?.simulation)return;
 const p=G.S.pending.find(x=>x.type==='succ');if(!p)return;
 const support=id=>G.alive().reduce((n,c)=>n+(c.mx.brain.cohort===id?1+Math.max(0,c.mx.brain.relations[id]?.loyalty||0)/50:0),0)+(G.S.patch.heir===id?3:0);
 p.opts.sort((a,b)=>{const ca=G.S.chars[a.arg],cb=G.S.chars[b.arg],value=c=>c.realm*10+c.loy/5+c.at.admin/8+c.at.int/10+c.rank*4+(c.state==='home'?3:0)+support(c.id)*2;return value(cb)-value(ca)});
 for(const o of p.opts)o.t+=' • ผู้สนับสนุน '+G.f1(support(o.arg));p.def=0;
};
const succeed=G.succeed;
G.succeed=id=>{const before=G.S.sect.leader,r=succeed(id);if(G.S.patch?.simulation&&before!==id&&G.S.sect.leader===id){
 W.emit('SUPPORT_CANDIDATE',id,null,(G.S.chars[id]?.name||'ผู้สืบทอด')+' รับตำแหน่งหลังการเลือกผู้สืบทอด',{public:true,importance:90,witnesses:G.home().map(c=>c.id)});
 for(const a of W.people().filter(a=>!a.f)){if(a.b.cohort===id){a.c.loy=C(a.c.loy+2,0,100);W.relate(a,id,{loyalty:3,trust:1});}else if(a.b.cohort&&a.c.at.amb>65){W.relate(a,id,{trust:-2,rivalry:2});a.c.sat=C(a.c.sat-1,0,100);}}
 }return r};
N.registerAction('SUPPORT_CANDIDATE','สนับสนุนผู้สืบทอด','sect','support_candidate');
// Investments improve real paid learning and effective defensive strength.
const pow=G.fPow;G.fPow=f=>pow(f)*(1+(f.mx?.organization?.fortification||0)*.006);
const foreign=N.foreignDay;
N.foreignDay=()=>{const before=new Map(G.S.factions.flatMap(f=>f.roster.filter(r=>r.mx).map(r=>[r.mx.id,{realm:r.r,progress:r.mx.progress}])));foreign();for(const f of G.S.factions)for(const r of f.roster){const b=before.get(r.mx.id),library=f.mx.organization.library;if(!b||!library||r.r!==b.realm||r.mx.progress<=b.progress)continue;const need=G.PATHS[f.path].realms[r.r]?.need;if(need)r.mx.progress=Math.min(need,b.progress+(r.mx.progress-b.progress)*(1+library*.05));}};
// Purchases and sales use actual finite merchant stocks for herbs and ore.
const trade=G.trade;
G.trade=(key,qty,dir)=>{const e=G.S.patch?.simulation?.economy,stock=key==='herb'?'herbSupply':key==='ore'?'oreSupply':null;
 if(e&&stock&&dir==='buy'&&Number.isFinite(qty)&&qty>e[stock])return {ok:false,msg:'พ่อค้ามี'+G.RES[key].n+'ไม่พอ เส้นทางค้าและการผลิตต้องฟื้นก่อน'};
 const r=trade(key,qty,dir);if(r.ok&&e&&stock)e[stock]=Math.max(0,e[stock]+(dir==='buy'?-qty:qty));return r;
};
const day=G.stepDay;
G.stepDay=()=>{day();if(!G.S.patch?.simulation)return;W.cleanup();const s=G.S,q=W.state(),foodDays=s.res.food/Math.max(1,s.order.length),short=foodDays<s.patch.management.foodDays;
 const previously=q.shortage;
 if(short&&!previously)W.emit('SECT_SHORTAGE',s.sect.leader,null,'เสบียงเหลือประมาณ '+Math.floor(foodDays)+' วัน ต่ำกว่าเป้าสำนัก ผู้นำและคนทำงานต้องปรับลำดับความสำคัญ',{importance:65,public:true,witnesses:G.home().map(c=>c.id)});
 q.shortage=short;
};
})(window.G);
