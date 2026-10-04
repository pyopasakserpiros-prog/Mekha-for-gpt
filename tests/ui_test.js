// ทดสอบ UI แบบไม่มีเบราว์เซอร์: เรนเดอร์ทุกหน้า/ทุกแท็บย่อย/modal ศิษย์ทุกคน และจำลองการคลิกคำสั่ง
const G=require('./harness');const fs=require('fs'),vm=require('vm'),path=require('path');
const els={};const mk=id=>els[id]||(els[id]={id,innerHTML:'',className:'',scrollTop:0,firstChild:null,textContent:'',value:'',files:[]});
global.document={getElementById:mk,addEventListener(){},querySelector(){return null},querySelectorAll(){return[]},body:{appendChild(){}}};
global.history={pushState(){},back(){}};global.confirm=()=>true;global.navigator={};
['ui','ui2','patch-ui','parity-ui','living-ui','living-deep-ui','apprenticeship-ui','world-ui'].forEach(f=>vm.runInThisContext(fs.readFileSync(path.join(__dirname,'..','js',f+'.js'),'utf8'),{filename:f}));
const U=G.UI;let fails=0;const t=(n,f)=>{try{f();}catch(e){fails++;console.log('FAIL',n,e.stack.split('\n').slice(0,3).join(' | '));}};
G.newGame(77);
for(let day=0;day<400;day+=40){
  for(let i=0;i<40;i++){G.stepDay();G.S.pending.slice().forEach(p=>G.decide(p.id,p.def));if(i%10===0&&G.S.applicants.length&&G.alive().length<16)G.admit(G.S.applicants[0].id);}
  ['home','disc','sect','world','rep','menu'].forEach(tab=>{U.tab=tab;t('tab '+tab+' d'+G.S.day,()=>{U.render();if(/undefined|NaN|\[object/.test(mk('view').innerHTML))throw new Error('bad text in '+tab+': '+(mk('view').innerHTML.match(/.{30}(undefined|NaN|\[object).{30}/)||[''])[0]);});});
  [['sect',['stock','build','craft','pol','man','app','inventory','workshop','arts','stories','steward','allocation','equipment','lives','council','legends']],['world',['fac','vil','exp','bat','people']],['menu',['save','help','pause','about','editor']]].forEach(([tab,subs])=>subs.forEach(s=>{U.tab=tab;U.sub[tab]=s;t(tab+'/'+s,()=>{U.render();if(/undefined|NaN|\[object/.test(mk('view').innerHTML))throw new Error('bad text '+tab+'/'+s+': '+(mk('view').innerHTML.match(/.{40}(undefined|NaN|\[object).{40}/)||[''])[0]);});}));
  G.alive().forEach(c=>t('char '+c.id,()=>{const h=U.M.char(c.id);if(/undefined|NaN|\[object/.test(h))throw new Error('bad text char: '+(h.match(/.{40}(undefined|NaN|\[object).{40}/)||[''])[0]);}));
}
t('dead char modal',()=>U.M.char('c99999'));
// คำสั่ง
const c=G.alive()[3];
t('acts',()=>{const A=U.A;els.jobsel=mk('jobsel');els.jobsel.value='farm';A.job({id:c.id});A.build({f:'garden'});A.buy({r:'herb'});A.sell({r:'herb'});A.craftT({r:'pillQi',d:'2'});A.craftOn({r:'pillQi'});A.dip({f:'f2',d:'scout'});A.dip({f:'f2',d:'gift'});A.dip({f:'f2',d:'trade'});A.pol({k:'ration'},{value:'2'});A.pol({k:'autoBT'},{value:'bold'});A.selmode({});A.selall({});els.bulkjob=mk('bulkjob');els.bulkjob.value='auto';A.bulkjob({});A.save({n:'1'});A.load({n:'1'});A.fspend({v:'v1'});A.flt({k:'rank',v:'2'});U.V.disc();});
t('save roundtrip',()=>{const a=G.serialize();const r=G.loadText(a);if(!r.ok)throw new Error(r.msg);});
process.exitCode=fails?1:0;console.log(fails?('FAILS '+fails):'UI OK');
