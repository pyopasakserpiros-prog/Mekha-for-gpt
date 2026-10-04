const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),G=require('./harness');
for(const name of ['real-v130.json','real-grok-v140.json']){
 const text=fs.readFileSync(path.join(__dirname,'fixtures',name),'utf8'),old=JSON.parse(text).S;
 G.newGame(2026);G.S.day=10000;const r=G.loadText(text);assert(r.ok,name+': '+r.msg);
 assert.equal(G.S.schema,G.SCHEMA);assert.equal(G.S.rng,old.rng);assert.equal(G.S.nextId,old.nextId);assert.deepEqual(G.S.res,old.res);assert.deepEqual(G.S.order,old.order);assert.deepEqual(G.S.patch.items,old.patch.items);assert.deepEqual(G.S.patch.knownArts,old.patch.knownArts);
 for(const id of old.order){assert.equal(G.S.chars[id].master,old.chars[id].master);assert.equal(G.S.chars[id].job,old.chars[id].job);assert.deepEqual(G.S.chars[id].mx.arts,old.chars[id].mx.arts)}
 for(let i=0;i<60&&!G.S.over;i++){G.stepDay();for(const p of G.S.pending.slice())G.decide(p.id,p.def)}
 const after=G.validate(G.serialize());assert(after.ok,after.msg);console.log('PASS actual previous-engine save',name,'continued to day',G.S.day);
}
