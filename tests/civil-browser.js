/* Real Chromium, Android-size viewport, portable file:// entry and downloads. */
const {chromium}=require('playwright'),assert=require('node:assert/strict'),path=require('node:path'),fs=require('node:fs');
(async()=>{const browser=await chromium.launch({headless:true,args:['--no-sandbox']}),context=await browser.newContext({viewport:{width:412,height:915},isMobile:true,hasTouch:true,acceptDownloads:true}),page=await context.newPage(),errors=[];
page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error')errors.push(m.text())});
try{
 await page.goto('file://'+path.resolve(__dirname,'../index.html'));await page.waitForFunction(()=>window.G?.S?.schema===8);assert.equal(await page.evaluate(()=>G.VERSION),'2.1.0');
 await page.getByRole('button',{name:'ข้อร้องเรียน / อำนาจ / การค้า / ข้อมูลฝึก',exact:true}).click();await page.getByText('อำนาจและความเป็นธรรม',{exact:true}).waitFor();
 assert((await page.locator('#modal').innerText()).includes('ข้อร้องเรียนที่รอคำตอบ'));await page.screenshot({path:path.join(__dirname,'browser-v210-government.png'),fullPage:true});
 await page.getByRole('button',{name:'เริ่มเก็บข้อมูล',exact:true}).click();assert(await page.evaluate(()=>G.CIVIL.state().training.enabled));
 await page.getByRole('button',{name:'ทะเบียนกิจกรรมทั้งหมด',exact:true}).click();await page.getByText('กิจกรรมและเหตุการณ์ของโลก',{exact:true}).waitFor();assert.equal(await page.evaluate(()=>Object.keys(G.ACTIONS).length),236);
 const overflow=await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth+2);assert(!overflow,'horizontal page overflow');
 await page.evaluate(()=>{G.UI.close();for(const k of Object.keys(G.S.pauseCfg))G.S.pauseCfg[k]=0;});
 const timings=await page.evaluate(async()=>{const start=performance.now();const r=await G.advance(30,{budget:8});G.UI.render();return {ms:performance.now()-start,done:r.done,valid:G.validate(G.serialize()).ok}});assert.equal(timings.done,30);assert(timings.valid);
 await page.getByRole('button',{name:'ข้อร้องเรียน / อำนาจ / การค้า / ข้อมูลฝึก',exact:true}).click();
 const downloadPromise=page.waitForEvent('download');await page.getByRole('button',{name:'ส่งออกข้อมูลฝึก AI',exact:true}).click();const d=await downloadPromise;const exported=path.join(__dirname,'browser-v210-training.json');await d.saveAs(exported);assert.equal(JSON.parse(fs.readFileSync(exported)).kind,'observational_decision_outcomes');
 const state=await page.evaluate(()=>{G.save('auto');return {day:G.S.day,rng:G.S.rng}});await page.reload();await page.waitForFunction(()=>window.G?.S?.day===30);assert.deepEqual(await page.evaluate(()=>({day:G.S.day,rng:G.S.rng})),state);
 await page.evaluate(()=>G.UI.open('worldPerson',G.S.order[1]));assert((await page.locator('#modal').innerText()).includes('ชีวิตและฐานอำนาจ'));await page.screenshot({path:path.join(__dirname,'browser-v210-person.png'),fullPage:true});
 assert.deepEqual(errors,[]);const report={passed:true,browser:'Chromium headless',viewport:{width:412,height:915},entry:'file:// index.html',checks:['boot','government buttons','catalog','no horizontal overflow','30-day asynchronous advance','training JSON download','reload auto-save preserves RNG','person panel','no console/page errors'],timings,limitation:'Mobile viewport emulation on a server; no physical Android/Snapdragon benchmark.'};fs.writeFileSync(path.join(__dirname,'results-v210-browser.json'),JSON.stringify(report,null,2));console.log('BROWSER PASS',JSON.stringify(report));
}finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});
