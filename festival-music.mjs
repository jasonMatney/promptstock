export const BACKGROUND_TRACK = Object.freeze({title:'Aspen Trail Drift',src:'audio/aspen-trail-drift.mp3'});
export const CAMP_TRACK = Object.freeze({title:'Moonlit Cabin Hush',src:'audio/moonlit-cabin-hush.mp3'});
export const FINALE_TRACK = Object.freeze({title:'One Island One View',src:'audio/one-island-one-view.mp3'});
export const RECORD_TRACKS = Object.freeze([
  ['Communicate','communicate'],['Solve','solve'],['Create','create'],['Connect','connect'],['Stay Curious','stay-curious','b68bbb383b16']
].map(([title,slug,revision])=>Object.freeze({title,src:`audio/records/${slug}.mp3`,revision})));
export function recordTrack(name){return RECORD_TRACKS.find(t=>t.title.toLowerCase()===String(name).toLowerCase());}

// A single active media element prevents overlap when records are switched quickly.
export class FestivalMusic {
  constructor({AudioClass=globalThis.Audio,onChange=()=>{},revokeURL=url=>URL.revokeObjectURL(url)}={}){
    this.AudioClass=AudioClass;this.onChange=onChange;this.revokeURL=revokeURL;
    this.track=null;this.title=BACKGROUND_TRACK.title;this.src=null;this.status='ready';this.volume=.65;this.request=0;this.wantsPlay=false;
  }
  get state(){return {title:this.title,src:this.src,status:this.status,playing:this.status==='playing',volume:this.volume,currentTime:this.track?.currentTime||0,duration:Number.isFinite(this.track?.duration)?this.track.duration:0};}
  emit(){this.onChange(this.state);}
  prepare(src,title){
    this.request++;this.wantsPlay=false;const old=this.track;this.track=null;
    if(old){old.pause();old.removeAttribute('src');old.load();}
    if(this.src?.startsWith('blob:'))this.revokeURL(this.src);
    this.src=src;this.title=title;this.status='ready';
    const track=new this.AudioClass();this.track=track;track.preload='none';track.loop=true;track.volume=this.volume;
    track.addEventListener('playing',()=>{if(this.track!==track)return;if(!this.wantsPlay){track.pause();return;}this.status='playing';this.emit();});
    track.addEventListener('waiting',()=>{if(this.track===track&&this.wantsPlay){this.status='loading';this.emit();}});
    track.addEventListener('pause',()=>{if(this.track!==track)return;if(this.status!=='error')this.status='paused';this.emit();});
    track.addEventListener('error',()=>{if(this.track!==track)return;this.wantsPlay=false;this.status='error';this.emit();});
    track.addEventListener('ended',()=>{if(this.track!==track||track.loop)return;this.wantsPlay=false;this.status='ended';this.emit();});
    track.src=src;this.emit();
  }
  pause(){this.request++;this.wantsPlay=false;this.track?.pause();this.status='paused';this.emit();}
  async play(){
    if(!this.track)this.prepare(BACKGROUND_TRACK.src,BACKGROUND_TRACK.title);
    const track=this.track,request=++this.request;this.wantsPlay=true;
    if(track.error)track.load();this.status='loading';this.emit();
    try{
      await track.play();
      if(request!==this.request||this.track!==track||!this.wantsPlay)return false;
      this.status='playing';this.emit();return true;
    }catch{
      if(request!==this.request||this.track!==track)return false;
      this.wantsPlay=false;this.status='error';this.emit();return false;
    }
  }
  playRecord(name){const item=recordTrack(name);if(!item)return Promise.resolve(false);const src=item.src+(item.revision?'?v='+item.revision:'');if(this.src!==src)this.prepare(src,item.title);return this.play();}
  playCamp(){if(this.src!==CAMP_TRACK.src)this.prepare(CAMP_TRACK.src,CAMP_TRACK.title);return this.play();}
  leaveCamp(){if(this.src!==CAMP_TRACK.src)return;const resume=this.wantsPlay;this.prepare(BACKGROUND_TRACK.src,BACKGROUND_TRACK.title);if(resume)return this.play();}
  playFinale(){this.prepare(FINALE_TRACK.src,FINALE_TRACK.title);this.track.loop=false;return this.play();}
  setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)||0));if(this.track)this.track.volume=this.volume;this.emit();}
}
