const {test}=require('node:test');
const assert=require('node:assert/strict');

async function load(){
  return import('../game-debug.mjs');
}

function memoryStorage(seed={}){
  const map=new Map(Object.entries(seed));
  return {
    getItem(k){return map.has(k)?map.get(k):null;},
    setItem(k,v){map.set(k,String(v));},
    removeItem(k){map.delete(k);},
    _map:map,
  };
}

test('game-debug exports camera presets, locations, and quality key',async()=>{
  const {CAMERA_PRESETS,DEFAULT_LOCATIONS,QUALITY_STORAGE_KEY,attachGameDebug,loadQualityPreference,saveQualityPreference}=await load();
  assert.equal(QUALITY_STORAGE_KEY,'skillsjam.quality.v1');
  assert.deepEqual(Object.keys(CAMERA_PRESETS).sort(),[
    'camp','festival_stage_wide','meadow_path','pier','player_closeup',
  ]);
  for(const [name,[pos,target]] of Object.entries(CAMERA_PRESETS)){
    assert.equal(pos.length,3,name+' position');
    assert.equal(target.length,3,name+' target');
  }
  assert.ok(DEFAULT_LOCATIONS.includes('stage'));
  assert.ok(DEFAULT_LOCATIONS.includes('pier'));
  assert.equal(typeof attachGameDebug,'function');
  assert.equal(typeof loadQualityPreference,'function');
  assert.equal(typeof saveQualityPreference,'function');
});

test('quality preference load/save round-trips via storage mock',async()=>{
  const {QUALITY_STORAGE_KEY,loadQualityPreference,saveQualityPreference}=await load();
  const store=memoryStorage();
  assert.equal(loadQualityPreference(store),null);
  saveQualityPreference('low',store);
  assert.equal(store.getItem(QUALITY_STORAGE_KEY),'low');
  assert.equal(loadQualityPreference(store),'low');
  saveQualityPreference('high',store);
  assert.equal(loadQualityPreference(store),'high');
  store.setItem(QUALITY_STORAGE_KEY,JSON.stringify({level:'low'}));
  assert.equal(loadQualityPreference(store),'low');
  store.setItem(QUALITY_STORAGE_KEY,'nope');
  assert.equal(loadQualityPreference(store),null);
  assert.throws(()=>saveQualityPreference('medium',store),/high.*or.*low/);
});

test('attachGameDebug exposes the console API shape on a mock host',async()=>{
  const {attachGameDebug,CAMERA_PRESETS,DEFAULT_LOCATIONS,QUALITY_STORAGE_KEY}=await load();
  const teleports=[];
  const store=memoryStorage();
  const engine={
    low:false,
    canvas:{toDataURL(){return 'data:image/png;base64,TEST';}},
    draw(){this.drew=true;},
    setCamera(){this.lastCam=[...arguments];},
    resize(){this.resized=true;},
    debugCamera:null,
  };
  const host={
    engine,
    teleport(id){teleports.push(id);},
    get state(){
      return {
        position:[1,1.82,2],yaw:.1,pitch:.02,started:true,touring:false,
        nearby:'kick',modal:null,badges:['maker'],discoveries:['camp'],
        goldenHour:false,quality:'detailed',fps:60,instances:100,batches:12,
      };
    },
  };
  // Monkey-patch localStorage for setQuality persistence in this process.
  const prev=globalThis.localStorage;
  Object.defineProperty(globalThis,'localStorage',{value:store,configurable:true});
  try{
    const api=attachGameDebug(host);
    assert.equal(api.version,'1.2.0');
    assert.deepEqual(api.listLocations(),DEFAULT_LOCATIONS);
    assert.deepEqual(api.listCameras().sort(),Object.keys(CAMERA_PRESETS).sort());

    const npcs=api.listNpcs({featuredOnly:true});
    assert.ok(npcs.length>=3);
    assert.equal(api.getNpc('maya').kitId,'guest_0');
    assert.equal(api.getNpc('guest_0').id,'maya');
    assert.equal(typeof api.focusNpc,'function');
    assert.equal(typeof api.npcScheduleStatus,'function');
    assert.equal(api.npcScheduleStatus().concert_seat.live,true);

    api.go('stage');
    assert.deepEqual(teleports,['stage']);
    assert.equal(engine.debugCamera,null);

    assert.equal(api.setCamera('festival_stage_wide'),'festival_stage_wide');
    assert.deepEqual(engine.debugCamera,CAMERA_PRESETS.festival_stage_wide);
    assert.deepEqual(engine.lastCam,CAMERA_PRESETS.festival_stage_wide);

    assert.equal(api.setCamera('clear'),null);
    assert.equal(engine.debugCamera,null);

    const player=api.getPlayerState();
    assert.deepEqual(player.position,[1,1.82,2]);
    assert.equal(player.nearby,'kick');
    assert.deepEqual(player.badges,['maker']);

    const stats=api.getRenderStats();
    assert.equal(stats.fps,60);
    assert.equal(stats.quality,'detailed');
    assert.equal(stats.low,false);

    assert.equal(api.setQuality('low'),'low');
    assert.equal(engine.low,true);
    assert.equal(engine.resized,true);
    assert.equal(store.getItem(QUALITY_STORAGE_KEY),'low');
    assert.equal(api.setQuality('high'),'high');
    assert.equal(engine.low,false);
    assert.equal(store.getItem(QUALITY_STORAGE_KEY),'high');

    assert.equal(typeof api.capture,'function');
    assert.equal(typeof api.screenshot,'function');
    assert.equal(typeof api.captureAll,'function');
    assert.equal(typeof api.screenshotSuite,'function');

    const shot=api.capture('pier');
    assert.equal(shot,'data:image/png;base64,TEST');
    assert.equal(engine.drew,true);
    assert.equal(api.setCamera.name,'setCamera');
    assert.deepEqual(engine.debugCamera,CAMERA_PRESETS.pier);
    assert.equal(api.screenshot(),'data:image/png;base64,TEST');

    const suite=api.captureAll(['camp','meadow_path']);
    assert.equal(suite.length,2);
    assert.equal(suite[0].name,'camp');
    assert.equal(suite[0].dataUrl,'data:image/png;base64,TEST');
    assert.equal(suite[1].name,'meadow_path');
    const full=api.screenshotSuite();
    assert.equal(full.length,Object.keys(CAMERA_PRESETS).length);
    assert.ok(full.every(s=>typeof s.name==='string'&&typeof s.dataUrl==='string'));

    assert.throws(()=>api.setCamera('nope'),/Unknown camera/);
    assert.throws(()=>api.setQuality('medium'),/high.*or.*low/);
  }finally{
    if(prev===undefined)delete globalThis.localStorage;
    else Object.defineProperty(globalThis,'localStorage',{value:prev,configurable:true});
  }
});

test('attachGameDebug prefers host.locations when provided',async()=>{
  const {attachGameDebug}=await load();
  const api=attachGameDebug({
    engine:{setCamera(){},resize(){},canvas:{toDataURL:()=>'data:image/png;base64,x'}},
    teleport(){},
    locations:()=>['camp','pier'],
    state:{},
  });
  assert.deepEqual(api.listLocations(),['camp','pier']);
});

test('applyEngineQuality flips engine.low and resizes',async()=>{
  const {applyEngineQuality}=await load();
  const engine={low:false,resize(){this.resized=true;}};
  assert.equal(applyEngineQuality(engine,'low'),'low');
  assert.equal(engine.low,true);
  assert.equal(engine.resized,true);
  applyEngineQuality(engine,'high');
  assert.equal(engine.low,false);
});
