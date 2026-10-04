const assert=require('node:assert/strict'),fs=require('node:fs'),path=require('node:path'),G=require('./harness');
const oldText=fs.readFileSync(path.join(__dirname,'fixtures/real-v140.json'),'utf8');
const old=JSON.parse(oldText).S;
G.newGame(2026);G.S.day=10000;assert(G.loadText(oldText).ok);const s=G.S;
assert.equal(s.schema,G.SCHEMA);assert.equal(s.day,old.day);assert.equal(s.rng,old.rng);assert.equal(s.nextId,old.nextId);
assert.deepEqual(s.res,old.res);assert.deepEqual(s.patch.items,old.patch.items);assert.deepEqual(s.order,old.order);
for(const id of s.order){const c=s.chars[id],o=old.chars[id];assert.equal(c.master,o.master);assert.deepEqual(c.mx.apprentice,o.mx.apprentice);assert.deepEqual(c.mx.arts,o.mx.arts);assert.equal(c.mx.brain.wallet,0);assert.equal(c.mx.brain.lastReview,-99);}
for(let d=0;d<180&&!s.over;d++){G.stepDay();for(const p of s.pending.slice())G.decide(p.id,p.def);if(d%30===0){const r=G.validate(G.serialize());assert(r.ok,r.msg)}}
assert(G.validate(G.serialize()).ok);console.log('MIGRATION 2.0 PASS actual schema-6 engine save continued',s.day,'days');
