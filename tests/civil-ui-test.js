const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),G=require('./harness');
const els={},el=id=>els[id]||(els[id]={id,value:'',innerHTML:'',textContent:'',className:'',scrollTop:0,querySelector(){return null}});let downloaded=null;
global.document={getElementById:el,querySelector(){return null},querySelectorAll(){return []},addEventListener(){},body:{appendChild(){}},createElement(){return {href:'',download:'',click(){downloaded=this.download},remove(){}}}};global.history={pushState(){},back(){}};global.confirm=()=>true;global.navigator={};
for(const f of ['ui','ui2','patch-ui','parity-ui','living-ui','living-deep-ui','apprenticeship-ui','world-ui','civil-ui'])vm.runInThisContext(fs.readFileSync(path.join(__dirname,'../js',f+'.js'),'utf8'),{filename:f});
G.newGame(7);const U=G.UI,X=G.CIVIL,W=G.WORLD;let renders=0;
function check(h){assert(h.length>100);assert(!/undefined|NaN|\[object/.test(h));for(const m of h.matchAll(/data-a="([^"]+)"/g))assert.equal(typeof U.A[m[1]],'function',m[1]);renders++}
check(U.M.civilGovernment());check(U.M.civilCatalog());check(U.V.home());for(const a of W.people())check(U.M.worldPerson(a.id));
U.A['civil-open']();assert(el('modal').innerHTML.includes('อำนาจและความเป็นธรรม'));U.A['civil-training']();assert(X.state().training.enabled);U.A['civil-export']();assert(downloaded?.endsWith('.json'));
const a=W.person(G.home()[1].id);X.life(a).grievance=60;X.petition(a);G.S.res.silver=10000;G.N._claims={};check(U.M.civilGovernment());U.A['civil-grievance']({id:a.id});assert.equal(X.life(a).petition.status,'resolved');
U.A['civil-catalog']();assert(el('modal').innerHTML.includes('กิจกรรมและเหตุการณ์ของโลก'));assert(!el('modal').innerHTML.includes('อนาคตจะไม่'));
for(let i=0;i<30;i++){G.stepDay();for(const p of G.S.pending.slice())G.decide(p.id,p.def)}check(U.M.civilGovernment());check(U.M.civilCatalog());check(U.M.worldSimulation());assert(G.validate(G.serialize()).ok);clearTimeout(U._tt);console.log('CIVIL UI PASS',renders,'renders, governance actions and training download (DOM stub, not a physical browser)');
