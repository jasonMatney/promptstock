export const BACKGROUND_TRACK = Object.freeze({title:'Aspen Trail Drift',src:'audio/aspen-trail-drift.mp3'});
export const CAMP_TRACK = Object.freeze({title:'Moonlit Cabin Hush',src:'audio/moonlit-cabin-hush.mp3'});
export const FINALE_TRACK = Object.freeze({title:'One Island One View',src:'audio/one-island-one-view.mp3'});
export const RECORD_TRACKS = Object.freeze([
  ['Communicate','communicate'],['Solve','solve'],['Create','create'],['Connect','connect'],['Stay Curious','stay-curious','b68bbb383b16']
].map(([title,slug,revision])=>Object.freeze({title,src:`audio/records/${slug}.mp3`,revision})));
export function recordTrack(name){return RECORD_TRACKS.find(t=>t.title.toLowerCase()===String(name).toLowerCase());}

// A single active media element prevents overlap when records are switched quickly.
export class FestivalMusic {
  constructor({AudioClass=globalThis.Audio,onChange=()=>{},revokeURL=url=>URL.revokeObjectURL(url),fadeMs=700,now=()=>performance.now(),schedule=(fn,ms)=>globalThis.setTimeout(fn,ms),cancelTimer=id=>globalThis.clearTimeout(id)}={}){
    this.fadeMs=fadeMs;this.now=now;this.schedule=schedule;this.cancelTimer=cancelTimer;this.transition=0;this.fade=null;this.AudioClass=AudioClass;this.onChange=onChange;this.revokeURL=revokeURL;
    this.track=null;this.title=BACKGROUND_TRACK.title;this.src=null;this.status='ready';this.volume=.65;this.request=0;this.wantsPlay=false;
  }
  get state(){return {title:this.title,src:this.src,status:this.status,playing:this.status==='playing',volume:this.volume,currentTime:this.pendingSrc?0:this.track?.currentTime||0,duration:!this.pendingSrc&&Number.isFinite(this.track?.duration)?this.track.duration:0};}
  emit(){this.onChange(this.state);}
  prepare(src,title){
    this.cancelFade();
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
  pause(){this.cancelFade();this.request++;this.wantsPlay=false;this.track?.pause();if(this.track)this.track.volume=this.volume;this.status='paused';this.emit();}
  async play(){
    this.cancelFade();if(this.track)this.track.volume=this.volume;
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
  cancelFade(){this.transition++;if(this.pendingSrc?.startsWith('blob:'))this.revokeURL(this.pendingSrc);this.pendingSrc=null;if(this.fade){this.cancelTimer(this.fade.timer);const done=this.fade.done;this.fade=null;done(false);}}
  async switchTo(src,title,{loop=true,restart=false,autoplay=true}={}){
    if(this.src===src&&!restart){this.cancelFade();return autoplay?this.play():false;}
    this.cancelFade();const token=this.transition,old=this.track;this.pendingSrc=src;
    if(old&&this.wantsPlay&&old.paused!==true&&this.fadeMs>0){
      this.status='loading';this.emit();
      const completed=await new Promise(done=>{const start=this.now(),initial=old.volume;
        const tick=()=>{if(token!==this.transition)return;const t=Math.min(1,(this.now()-start)/this.fadeMs);old.volume=Math.min(this.volume,initial)*(1-t);
          if(t>=1){this.fade=null;done(true);}else this.fade.timer=this.schedule(tick,25);};
        this.fade={done,timer:null};tick();
      });
      if(!completed||token!==this.transition)return false;
    }
    this.pendingSrc=null;this.prepare(src,title);this.track.loop=loop;return autoplay?this.play():false;
  }
  playRecord(name){const item=recordTrack(name);if(!item)return Promise.resolve(false);const src=item.src+(item.revision?'?v='+item.revision:'');return this.switchTo(src,item.title);}
  playCamp(){return this.switchTo(CAMP_TRACK.src,CAMP_TRACK.title);}
  leaveCamp(){if(this.src!==CAMP_TRACK.src&&!this.fade)return;return this.switchTo(BACKGROUND_TRACK.src,BACKGROUND_TRACK.title,{autoplay:this.wantsPlay});}
  playFinale(){return this.switchTo(FINALE_TRACK.src,FINALE_TRACK.title,{loop:false,restart:true});}
  setVolume(value){this.volume=Math.max(0,Math.min(1,Number(value)||0));if(this.track&&!this.fade)this.track.volume=this.volume;this.emit();}
}
