const assert=require('node:assert/strict'),fs=require('node:fs'),vm=require('node:vm'),path=require('node:path'),G=require('./harness');
const elements={},el=id=>elements[id]||(elements[id]={id,value:'',innerHTML:'',className:'',scrollTop:0,firstChild:null,textContent:'',files:[],querySelector(){return null}});
global.document={getElementById:el,addEventListener(){},querySelector(){return null},querySelectorAll(){return []},body:{appendChild(){}}};global.history={pushState(){},back(){}};global.confirm=()=>true;global.navigator={};
for(const f of ['ui','ui2','patch-ui','parity-ui','living-ui','living-deep-ui','apprenticeship-ui','world-ui','civil-ui'])vm.runInThisContext(fs.readFileSync(path.join(__dirname,'../js',f+'.js'),'utf8'),{filename:f});
const U=G.UI,W=G.WORLD;G.newGame(7);let renders=0;
function check(h){assert(h.length);assert(!/undefined|NaN|\[object/.test(h));for(const m of h.matchAll(/data-a="([^"]+)"/g))assert.equal(typeof U.A[m[1]],'function',m[1]);renders++;}
check(U.M.civilGovernment());check(U.M.civilCatalog());check(U.M.worldSimulation());check(U.V.home());check(U.M.worldPerson(G.home()[0].id));
U.A['world-debug']();assert(W.state().debug);el('world-quality').value='LOW';U.A['world-quality']();assert.equal(W.state().quality,'LOW');
for(let i=0;i<30;i++)G.stepDay();check(U.M.worldSimulation());for(const a of W.people())check(U.M.worldPerson(a.id));
check(U.M.char(G.home()[0].id));check(G.N.views.lives());check(G.N.views.steward());
el('world-quality').value='DEEP';U.A['world-quality']();assert.equal(W.state().quality,'DEEP');
assert(G.validate(G.serialize()).ok);clearTimeout(U._tt);console.log('WORLD UI PASS',renders,'views and quality/debug handlers (DOM stub, not real browser)');
