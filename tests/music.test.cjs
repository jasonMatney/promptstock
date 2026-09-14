const test=require('node:test');const assert=require('node:assert/strict');const fs=require('node:fs');
const modulePromise=import('../festival-music.mjs');
class AudioMock {
 constructor(){this.events={};this.paused=true;this.error=null;this.loads=0;}
 addEventListener(type,fn){(this.events[type]??=[]).push(fn);}
 emit(type){for(const fn of this.events[type]||[])fn();}
 pause(){this.paused=true;this.emit('pause');}
 play(){return new Promise((resolve,reject)=>{this.resolve=()=>{this.paused=false;this.emit('playing');resolve();};this.reject=reject;});}
 load(){this.loads++;this.error=null;}
 removeAttribute(name){if(name==='src')this.src='';}
}
test('all five named records resolve to distinct playable files, including Stay Curious casing',async()=>{
 const {RECORD_TRACKS,recordTrack}=await modulePromise;assert.equal(RECORD_TRACKS.length,5);assert.equal(new Set(RECORD_TRACKS.map(t=>t.src)).size,5);
 for(const item of RECORD_TRACKS){assert.equal(recordTrack(item.title.toLowerCase()),item);assert.ok(fs.statSync(item.src).size>10000);}
 assert.equal(recordTrack('Stay curious').title,'Stay Curious');assert.equal(recordTrack('unknown'),undefined);
});
test('switching records stops the previous song and ignores late old playback and error events',async()=>{
 const {FestivalMusic}=await modulePromise;const music=new FestivalMusic({AudioClass:AudioMock});
 const first=music.playRecord('Communicate'),old=music.track;const second=music.playRecord('Solve'),current=music.track;
 assert.equal(old.paused,true);assert.equal(old.src,'');old.resolve();old.emit('error');assert.equal(await first,false);
 assert.equal(music.state.title,'Solve');assert.equal(music.state.status,'loading');current.resolve();assert.equal(await second,true);assert.equal(music.state.status,'playing');
});
test('pause during loading cannot be undone by a delayed play event',async()=>{
 const {FestivalMusic}=await modulePromise;const music=new FestivalMusic({AudioClass:AudioMock});const attempt=music.playRecord('Create');const track=music.track;music.pause();track.resolve();
 assert.equal(await attempt,false);assert.equal(track.paused,true);assert.equal(music.state.playing,false);
});
test('playback failure is retryable; volume and paused position survive resuming a record',async()=>{
 const {FestivalMusic}=await modulePromise;const music=new FestivalMusic({AudioClass:AudioMock});music.setVolume(.3);
 const failed=music.playRecord('Connect');const track=music.track;track.error={code:4};track.reject(Error('media failure'));assert.equal(await failed,false);assert.equal(music.status,'error');
 const retry=music.playRecord('Connect');assert.equal(music.track,track);assert.equal(track.loads,1);assert.equal(track.volume,.3);track.resolve();assert.equal(await retry,true);
 track.currentTime=42;music.pause();const resumed=music.playRecord('Connect');track.resolve();assert.equal(await resumed,true);assert.equal(track.currentTime,42);
 const next=music.playRecord('Stay Curious');assert.equal(music.track.volume,.3);assert.match(music.track.src,/stay-curious\.mp3\?v=b68bbb383b16$/);music.track.resolve();await next;
 const replacement=music.track;replacement.currentTime=17;music.pause();const replacementResume=music.playRecord('Stay Curious');assert.equal(music.track,replacement);replacement.resolve();await replacementResume;assert.equal(replacement.currentTime,17);
});
test('local file URLs are released on replacement and songs stay lazy until played',async()=>{
 const {FestivalMusic}=await modulePromise;const revoked=[];const music=new FestivalMusic({AudioClass:AudioMock,revokeURL:url=>revoked.push(url)});
 music.prepare('blob:local-song','Local song');assert.equal(music.track.preload,'none');assert.equal(music.track.paused,true);const next=music.playRecord('Solve');music.track.resolve();await next;assert.deepEqual(revoked,['blob:local-song']);
});
test('canoe music replaces a record, loops through camp, and restores festival music on leaving',async()=>{
 const {FestivalMusic,CAMP_TRACK,BACKGROUND_TRACK}=await modulePromise;const m=new FestivalMusic({AudioClass:AudioMock});
 assert.ok(fs.statSync(CAMP_TRACK.src).size>10000);
 const record=m.playRecord('Solve'),old=m.track;old.resolve();await record;
 const trip=m.playCamp(),camp=m.track;assert.equal(old.paused,true);assert.equal(old.src,'');assert.equal(camp.loop,true);camp.resolve();await trip;
 camp.currentTime=110;const same=m.playCamp();assert.equal(m.track,camp);camp.resolve();await same;assert.equal(camp.currentTime,110);
 const back=m.leaveCamp();assert.equal(camp.paused,true);assert.equal(m.src,BACKGROUND_TRACK.src);m.track.resolve();await back;
});
test('muted camp stays muted on leaving and main menu cancels a pending festival resume',async()=>{
 const {FestivalMusic,BACKGROUND_TRACK}=await modulePromise;const m=new FestivalMusic({AudioClass:AudioMock});
 let trip=m.playCamp();m.track.resolve();await trip;m.pause();m.leaveCamp();assert.equal(m.src,BACKGROUND_TRACK.src);assert.equal(m.wantsPlay,false);
 trip=m.playCamp();m.track.resolve();await trip;const resume=m.leaveCamp(),track=m.track;m.pause();track.resolve();assert.equal(await resume,false);assert.equal(track.paused,true);
});
