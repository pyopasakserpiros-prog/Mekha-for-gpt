// โหลดโค้ดเกมใน Node สำหรับทดสอบแบบไม่มีหน้าจอ
const fs=require('fs'),vm=require('vm'),path=require('path');
global.window=global; global.performance=global.performance||{now:()=>Date.now()};
const store={}; global.localStorage={getItem:k=>k in store?store[k]:null,setItem:(k,v)=>{store[k]=String(v)},removeItem:k=>delete store[k]};
['data','core','sim','world','actions','content-sanmakra','patch-core','patch-items','patch-arts','patch-stories','patch-lives','patch-validation','patch-parity','parity-validation','living-world','living-validation','living-deep','apprenticeship','action-registry','world-brain','world-consequences','world-integration','world-territory','world-history','world-validation','world-storage','civil-core','civil-actions','civil-life','civil-economy','civil-sect','civil-politics','civil-world','civil-personal','civil-simulation','civil-validation'].forEach(f=>vm.runInThisContext(fs.readFileSync(path.join(__dirname,'..','js',f+'.js'),'utf8'),{filename:f}));
module.exports=global.G;
