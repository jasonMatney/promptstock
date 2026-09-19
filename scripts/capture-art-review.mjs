import { chromium } from 'playwright';
import { mkdirSync, writeFileSync } from 'node:fs';
const phase=process.argv[2]||'after';
const out='art/skills-jam/renders/astra';mkdirSync(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
const issues=[];
try {
 const page=await browser.newPage({viewport:{width:1440,height:900},deviceScaleFactor:1});
 page.on('pageerror',e=>issues.push(e.message));
 page.on('console',m=>{if(m.type()==='error')issues.push(m.text());});
 const results=[];
 for(const view of ['tents','aid','records','overview','props']){
  await page.goto(`http://127.0.0.1:8765/skills-jam-3d.html?kitReview=${view}`,{waitUntil:'load'});
  await page.waitForFunction(()=>window.skillsJam?.kit?.enabled,null,{timeout:120000});
  await page.evaluate((view)=>{document.querySelector('#kitReview')?.remove();const e=window.skillsJam.engine;if(view==='props')e.jamReview.camera=[[-5.5,.7,26.35],[-5.5,.21,25.15]];e.low=false;e.resize();e.setCamera(...e.jamReview.camera);e.draw(.5);},view);
  await page.locator('#world').screenshot({path:`${out}/${view}-${phase}.png`});
  results.push(await page.evaluate(()=>({kit:skillsJam.kit.stats(),renderer:{calls:skillsJam.engine.renderer.info.render.calls,triangles:skillsJam.engine.renderer.info.render.triangles}})));
 }
 writeFileSync(`${out}/${phase}.json`,JSON.stringify({issues,results},null,2));
 if(issues.length)throw Error(issues.join('\n'));
 console.log(`Saved ${phase} review: ${results.length} views, no browser errors.`);
} finally {await browser.close();}
