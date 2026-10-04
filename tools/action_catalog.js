/* Generated documentation only: runtime source of truth is G.ACTIONS in the JS modules. */
const fs=require('node:fs'),path=require('node:path'),G=require('../tests/harness');
const records=Object.values(G.ACTIONS).sort((a,b)=>a.category.localeCompare(b.category)||a.id.localeCompare(b.id));
fs.writeFileSync(path.join(__dirname,'../data/action-keywords-v210.json'),JSON.stringify({version:G.VERSION,runtimeSource:'js/action-registry.js plus registered integration handlers',selectability:'supported does not imply every actor can execute an action; actual validators and event-only/native handlers are authoritative',records},null,2));
console.log('Catalog',records.length,'records;',records.filter(a=>a.supported).length,'supported');
