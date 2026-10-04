/* Release fixture generator; not needed for playing or running packaged tests. */
const fs=require('node:fs'),path=require('node:path');
const root=path.resolve(__dirname,'..');
const G=require(path.resolve(root,'../MeKha_v1.4.0/tests/harness.js'));
G.newGame(233);for(let i=0;i<35;i++)G.stepDay();
fs.writeFileSync(path.join(root,'tests/fixtures/real-v140.json'),G.serialize());
console.log('Generated authentic schema-6 fixture from unchanged 1.4.0 engine');
