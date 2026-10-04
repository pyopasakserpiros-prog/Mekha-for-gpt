// ชุดทดสอบเป้าหมาย: node tests/suite.js
const G=require('./harness');let pass=0,fail=[];const ok=(n,c,info)=>{if(c)pass++;else{fail.push(n+(info?' :: '+info:''));console.log('FAIL',n,info||'');}};
const decideAll=()=>G.S.pending.slice().forEach(p=>G.decide(p.id,p.def));
const hash=()=>{const s=G.serialize();let h=0;for(let i=0;i<s.length;i++)h=(h*31+s.charCodeAt(i))|0;return h+'/'+s.length;};
const run=n=>{for(let i=0;i<n;i++){G.stepDay();decideAll();}};
// 1) เดิน N วัน = เดินทีละวัน N ครั้ง (ผ่าน G.advance แบบแบ่งก้อนที่ขนาดต่างกัน)
(async()=>{
 G.newGame(2024);run(120);const hA=hash();
 G.newGame(2024);
 for(let left=120;left>0;){const n=Math.min(left,[1,7,30,5][Math.floor(Math.random()*4)]);const r=await G.advance(n,{budget:[0.001,5,30][Math.floor(Math.random()*3)]});left-=r.done;decideAll();}
 const hB=hash();ok('advance chunks == step-by-step',hA===hB,hA+' vs '+hB);
 // 2) เซฟ/โหลดต่อเนื่องของ RNG
 G.newGame(555);run(100);const txt=G.serialize();run(100);const h1=hash();
 const r=G.loadText(txt);ok('load ok',r.ok,r.msg);run(100);ok('save/load RNG continuity',hash()===h1);
 // 3) การขยายรายละเอียดฝ่าย: จำนวนคน/ทรัพย์สิน/กำลังรบคงเดิม
 G.newGame(9);const f=G.S.factions[1];const b={c:G.fCount(f),p:G.fPow(f),w:f.wealth};f.pact=1;G.refreshFactionDetail();
 ok('faction expanded',f.detail===1);ok('faction people conserved',G.fCount(f)===b.c,b.c+' -> '+G.fCount(f));ok('faction power conserved',Math.abs(G.fPow(f)-b.p)<.5,b.p+' -> '+G.fPow(f));ok('faction wealth conserved',f.wealth===b.w);
 f.pact=0;const c1=G.fCount(f);run(5);ok('detail lock holds 60 days',f.detail===1);run(70);ok('detail collapses after lock',f.detail===0);ok('named people persist after detail collapse (continuity)',f.roster.length>=9-3,'roster '+f.roster.length);
 // 4) ข้อมูลอ้างอิงที่ไม่ถูกต้องหลังตาย/ลบ
 G.newGame(31);run(30);const S=G.S;const v=G.alive().find(c=>c.rank<3);const other=G.alive().find(c=>c.rank===3);v.master=other.id;other.rel[v.id]=60;S.exps.length=0;
 G.die(other,'ทดสอบ');ok('master cleared on death',v.master!==other.id);ok('rel cleared on death',!Object.values(S.chars).some(c=>other.id in c.rel));
 run(60);let bad=0;Object.values(S.chars).forEach(c=>{if(c.master&&!S.chars[c.master])bad++;if(c.state==='exp'&&!S.exps.some(e=>e.id===c.exp))bad++;});S.exps.forEach(e=>e.mem.forEach(i=>{if(!S.chars[i])bad++;}));ok('no dangling refs',bad===0,bad+'');
 // 5) ทะลวงขั้นทั้งสามสาย
 for(const p of ['qi','body','faith']){G.newGame(77);const c=G.alive().find(x=>x.rank<3);G.setPath(c,p,true);c.manual=Object.keys(G.MANUALS).find(i=>G.MANUALS[i].p===p&&G.S.known[i]);c.realm=0;c.hp=100;c.inj=[];c.state='home';c.stress=0;c.mind=80;
  G.S.res.stone=99;G.S.res.herb=99;G.S.res.pillFound=3;G.S.res.pillQi=3;G.S.res.pillBody=3;c.faith=200;c.patron=G.S.villages[0].id;G.S.villages[0].trust=70;c.prog=G.PATHS[p].realms[0].need;
  const i=G.btInfo(c,'normal');ok('bt ready '+p,i.ready,i.blk.join(','));let up=0,fl=0;for(let k=0;k<40;k++){c.realm=0;c.prog=G.PATHS[p].realms[0].need;c.hp=100;c.inj=[];c.faith=200;G.S.res.stone=99;G.S.res.herb=99;if(!G.S.chars[c.id])break;const r=G.attemptBT(c,'normal');if(!G.S.chars[c.id]){break;}if(c.realm>0)up++;else fl++;}
  ok('bt both outcomes possible '+p,up>0&&fl>0,'up='+up+' fail='+fl);}
 // 6) เซฟเสียหาย/ถูกแก้
 G.newGame(5);const good=G.serialize();ok('reject junk',!G.loadText('{{{').ok);ok('reject wrong game',!G.loadText('{"game":"x"}').ok);
 const o=JSON.parse(good);o.S.day+=1;ok('reject tampered checksum',!G.loadText(JSON.stringify(o)).ok);
 const o2=JSON.parse(good);o2.S.schema=99;delete o2.sum;ok('reject newer schema',!G.loadText(JSON.stringify(o2)).ok);
 const o3=JSON.parse(good);const cid=o3.S.order[2];o3.S.chars[cid].manual='nope';o3.S.chars[cid].job='nojob';o3.S.chars[cid].master='ghost';delete o3.sum;const r3=G.loadText(JSON.stringify(o3));ok('repair bad refs',r3.ok&&G.S.chars[cid].manual!=='nope'&&G.S.chars[cid].job==='cultivate'&&G.S.chars[cid].master===null,JSON.stringify(r3.fixed));
 // 7) เกมจบ/ล่มสลายและผู้สืบทอด
 G.newGame(41);const L=G.S.sect.leader;G.die(G.S.chars[L],'ทดสอบ');G.S.sect.leader=null;G.stepDay();ok('succession pending',G.S.pending.some(p=>p.type==='succ'));decideAll();ok('new leader',!!G.S.chars[G.S.sect.leader]);
 console.log(fail.length?'FAILED '+fail.length+' / pass '+pass:'ALL PASS '+pass);process.exit(fail.length?1:0);
})();
