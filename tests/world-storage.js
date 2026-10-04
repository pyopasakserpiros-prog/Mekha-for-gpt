const assert=require('node:assert/strict'),G=require('./harness');
for(const input of ['', 'ภาษาไทย 😀 สำนักเมฆา', 'abc'.repeat(100000), Array.from({length:20000},(_,i)=>JSON.stringify({i,n:'ผู้บำเพ็ญ '+i%200})).join(',')])assert.equal(G.unpackLocalSave(G.packLocalSave(input)),input);
G.newGame(7);for(let d=0;d<180;d++)G.stepDay();const raw=G.serialize(),packed=G.packLocalSave(raw);
assert.equal(G.unpackLocalSave(packed),raw);assert(packed.length<raw.length*.6);assert(G.save('auto').ok);assert.equal(G.store.get('mekha_patch_auto'),raw);assert(G.load('auto').ok);assert.equal(G.serialize(),raw);
localStorage.setItem('mekha_patch_old',raw);assert(G.load('old').ok);assert.equal(G.serialize(),raw);
assert.equal(G.unpackLocalSave('plain old data'),'plain old data');assert.throws(()=>G.unpackLocalSave('MEKHA-LZ1:'+String.fromCharCode(1000)));
console.log('STORAGE PASS raw UTF16 bytes',raw.length*2,'packed UTF16 bytes',packed.length*2,'ratio',+(packed.length/raw.length).toFixed(3));
