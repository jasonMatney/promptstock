/** Actual browser QA of every shipped human, the close-up controls and animation clips. */
import { chromium } from 'playwright';
import { mkdir } from 'node:fs/promises';
const base=process.env.PEOPLE_REVIEW_URL||'http://127.0.0.1:8765/people-review.html';
const out='art/skills-jam/renders/people-v6';await mkdir(out,{recursive:true});
const browser=await chromium.launch({channel:'chrome',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
try{
 const page=await browser.newPage({viewport:{width:1440,height:1000},deviceScaleFactor:1});const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)errors.push(`${r.status()} ${r.url()}`);});
 await page.goto(base);await page.waitForFunction(()=>window.peopleReview?.ready,{},{timeout:120000});
 for(let i=0;i<7;i++){
  await page.locator(`[data-person="${i}"]`).click();await page.locator('[data-view="portrait"]').click();await page.waitForTimeout(500);await page.screenshot({path:`${out}/browser-person-${i}.png`});
  const selected=await page.evaluate(()=>window.peopleReview.current);if(selected!==i)throw new Error('Character selection failed');
 }
 await page.locator('[data-person="0"]').click();await page.locator('[data-view="full"]').click();
 for(const clip of ['idle','walk','kick']){await page.locator(`[data-clip="${clip}"]`).click();await page.waitForTimeout(500);await page.screenshot({path:`${out}/browser-${clip}.png`});}
 await page.setViewportSize({width:390,height:844});await page.screenshot({path:`${out}/browser-mobile.png`});
 if(await page.evaluate(()=>document.documentElement.scrollWidth>innerWidth))throw new Error('Mobile horizontal overflow');
 if(errors.length)throw new Error(errors.join('\n'));console.log('7 characters, 3 clips, portrait/full controls and mobile layout: PASS; no browser errors.');
}finally{await browser.close();}
