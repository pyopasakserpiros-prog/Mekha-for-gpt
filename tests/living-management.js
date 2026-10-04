const G=require('./harness'),A=require('node:assert/strict');
G.newGame(700);let s=G.S,N=G.N,cs=G.home();for(const c of cs){c.jobFix=0;c.mx.managementLock=false;c.mx.study=null;c.fat=0;c.stress=0;c.hp=100;c.inj=[];c.sat=100}s.res.food=10000;s.res.silver=0;s.beastP=0;s.buildQ=[];s.patch.orders=[];
G.autoAssign();let income=G.home().filter(c=>c.job==='service').reduce((n,c)=>n+G.skill(c,'service')*G.workEff(c)*.82*G.CFG.serviceBase*(1+s.sect.rep/200),0);A(income>=N.dailyUpkeep()*1.3,'daily service forecast must cover ongoing upkeep');console.log('PASS income staffing forecasts real upkeep');
const c=cs[0];c.jobFix=1;c.job='wood';s.res.food=0;G.autoAssign();A.equal(c.job,'wood');A(cs.some(c=>c.job==='farm'));console.log('PASS scarcity changes staffing while preserving player fixed jobs');
s.patch.management.autoBuild=false;s.res.silver=N.dailyUpkeep()*14+3;s.patch.management.reserve=0;A.equal(N.reserveAllows({silver:4}),false);A.equal(N.reserveAllows({silver:2}),true);console.log('PASS investment preserves fourteen days of actual upkeep');
s.day=180;s.patch.management.autoBuild=true;s.buildQ=[];s.fac.wall=0;s.fac.farm=10;s.fac.garden=10;s.fac.clinic=1;A.equal(N.constructionPlan(),'wall');console.log('PASS construction considers defenses before optional expansion');
console.log('MANAGEMENT 4 groups passed');
