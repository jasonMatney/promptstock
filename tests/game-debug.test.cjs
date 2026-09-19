const {test}=require('node:test');
const assert=require('node:assert/strict');

async function load(){
  return import('../game-debug.mjs');
}

test('game-debug exports camera presets and default locations',async()=>{
  const {CAMERA_PRESETS,DEFAULT_LOCATIONS,attachGameDebug}=await load();
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
});

test('attachGameDebug exposes the console API shape on a mock host',async()=>{
  const {attachGameDebug,CAMERA_PRESETS,DEFAULT_LOCATIONS}=await load();
  const teleports=[];
  const engine={
    low:false,
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
  const api=attachGameDebug(host);
  assert.equal(api.version,'1.0.0');
  assert.deepEqual(api.listLocations(),DEFAULT_LOCATIONS);
  assert.deepEqual(api.listCameras().sort(),Object.keys(CAMERA_PRESETS).sort());

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
  assert.equal(api.setQuality('high'),'high');
  assert.equal(engine.low,false);

  assert.throws(()=>api.setCamera('nope'),/Unknown camera/);
  assert.throws(()=>api.setQuality('medium'),/high.*or.*low/);
});

test('attachGameDebug prefers host.locations when provided',async()=>{
  const {attachGameDebug}=await load();
  const api=attachGameDebug({
    engine:{setCamera(){},resize(){}},
    teleport(){},
    locations:()=>['camp','pier'],
    state:{},
  });
  assert.deepEqual(api.listLocations(),['camp','pier']);
});
