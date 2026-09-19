(()=>{var _i=Object.freeze({festival_stage:Object.freeze({label:"Lakeside Stage apron",spot:"stage",approx:Object.freeze([0,0,-16])}),stage:Object.freeze({label:"Lakeside Stage",spot:"stage",approx:Object.freeze([0,0,-28])}),reboot_clinic:Object.freeze({label:"The Reboot Clinic",spot:"aid",approx:Object.freeze([15.3,0,2.05])}),meadow:Object.freeze({label:"Kick meadow",spot:"kick",approx:Object.freeze([-4.2,0,24])}),dog_lawn:Object.freeze({label:"Goodest guest lawn",spot:"dog",approx:Object.freeze([-10,0,26])}),activity_lawn:Object.freeze({label:"Central activity lawn",approx:Object.freeze([0,0,-8])}),picnic_west:Object.freeze({label:"West picnic clusters",approx:Object.freeze([-12,0,10])}),picnic_east:Object.freeze({label:"East picnic clusters",approx:Object.freeze([12,0,11])}),north_grove:Object.freeze({label:"North grove edge",approx:Object.freeze([-28,0,4])}),south_path:Object.freeze({label:"South path gatherings",approx:Object.freeze([0,0,-22])})}),xs=Object.freeze({stay_home:Object.freeze({live:!0,note:"Remain at kit/home pose until concert or another live event."}),concert_seat:Object.freeze({live:!0,note:"FestivalConcert.open seats featured NPCs into FEATURED_SEATS by registry order."}),repair_assist:Object.freeze({live:!0,note:"Spawn beside the reboot clinic (FestivalReactions kit.place)."}),cheer:Object.freeze({live:!0,note:"FestivalReactions celebrate / dance poses on success events."}),watch_stage:Object.freeze({live:!0,note:"NpcScheduleRunner walks toward festival_stage apron and faces the stage."}),visit_food_stall:Object.freeze({live:!0,note:"NpcScheduleRunner wanders toward picnic_west / picnic_east snack clusters."}),talk_with_friends:Object.freeze({live:!0,note:"NpcScheduleRunner gathers at home/location cluster and faces inward."})}),Mn=Object.freeze([Object.freeze({id:"maya",name:"Maya",role:"musician",location:"festival_stage",kitId:"guest_0",home:Object.freeze([-7,0,-14]),rotation:-.8,asset:"crowd_1",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","watch_stage","concert_seat","cheer"])}),Object.freeze({id:"rio",name:"Rio",role:"musician",location:"festival_stage",kitId:"guest_1",home:Object.freeze([-4.3,0,-16]),rotation:-.4,asset:"crowd_2",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","talk_with_friends","concert_seat","cheer"])}),Object.freeze({id:"sol",name:"Sol",role:"festivalgoer",location:"festival_stage",kitId:"guest_2",home:Object.freeze([-1.6,0,-14]),rotation:0,asset:"crowd_3",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","visit_food_stall","concert_seat","cheer"])}),Object.freeze({id:"nova",name:"Nova",role:"festivalgoer",location:"festival_stage",kitId:"guest_3",home:Object.freeze([1.1,0,-16]),rotation:.4,asset:"crowd_4",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","talk_with_friends","concert_seat","cheer"])}),Object.freeze({id:"kai",name:"Kai",role:"musician",location:"festival_stage",kitId:"guest_4",home:Object.freeze([3.8,0,-14]),rotation:.8,asset:"crowd_5",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","watch_stage","concert_seat","cheer"])}),Object.freeze({id:"luz",name:"Luz",role:"festivalgoer",location:"festival_stage",kitId:"guest_5",home:Object.freeze([6.5,0,-16]),rotation:1.2,asset:"crowd_6",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","visit_food_stall","concert_seat","cheer"])}),Object.freeze({id:"steward_left",name:"Clinic steward",role:"steward",location:"reboot_clinic",kitId:"repair_helper_0",home:Object.freeze([14.1,0,2]),rotation:.35,asset:"crowd_3",featured:!0,concertReserved:!0,schedule:Object.freeze(["repair_assist","stay_home","concert_seat","cheer"])}),Object.freeze({id:"steward_right",name:"Clinic steward",role:"steward",location:"reboot_clinic",kitId:"repair_helper_1",home:Object.freeze([16.5,0,2]),rotation:-.35,asset:"crowd_2",featured:!0,concertReserved:!0,schedule:Object.freeze(["repair_assist","stay_home","concert_seat","cheer"])}),Object.freeze({id:"hero",name:"You (festival avatar)",role:"player",location:"meadow",kitId:"hero",home:Object.freeze([-4.2,0,24]),rotation:.25,asset:"player_jam",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","concert_seat"])}),Object.freeze({id:"robot",name:"Reboot Clinic robot",role:"companion",location:"reboot_clinic",kitId:"robot",home:Object.freeze([15.3,0,2.05]),asset:"first_aid_robot",interactive:"aid",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","concert_seat"])}),Object.freeze({id:"dog",name:"The goodest festival guest",role:"animal",location:"dog_lawn",kitId:"dog",home:Object.freeze([-10,0,26]),rotation:.6,asset:"golden_retriever",interactive:"dog",featured:!0,concertReserved:!0,schedule:Object.freeze(["stay_home","concert_seat"])})]),wn=Object.freeze([Object.freeze({id:"crowd_lawn_w",role:"festivalgoer",location:"picnic_west",schedule:Object.freeze(["talk_with_friends","visit_food_stall","watch_stage"]),cluster:Object.freeze([-12,10]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_lawn_e",role:"festivalgoer",location:"picnic_east",schedule:Object.freeze(["talk_with_friends","visit_food_stall","watch_stage"]),cluster:Object.freeze([12,11]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_grove_w",role:"festivalgoer",location:"north_grove",schedule:Object.freeze(["talk_with_friends","stay_home"]),cluster:Object.freeze([-28,4]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_grove_e",role:"festivalgoer",location:"north_grove",schedule:Object.freeze(["talk_with_friends","stay_home"]),cluster:Object.freeze([28,11]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_south_w",role:"festivalgoer",location:"south_path",schedule:Object.freeze(["watch_stage","talk_with_friends"]),cluster:Object.freeze([-12,-16]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_south_e",role:"festivalgoer",location:"south_path",schedule:Object.freeze(["watch_stage","talk_with_friends"]),cluster:Object.freeze([12,-18]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_far_sw",role:"festivalgoer",location:"activity_lawn",schedule:Object.freeze(["stay_home","visit_food_stall"]),cluster:Object.freeze([-26,-26]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_far_se",role:"festivalgoer",location:"activity_lawn",schedule:Object.freeze(["stay_home","visit_food_stall"]),cluster:Object.freeze([27,-30]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_far_nw",role:"festivalgoer",location:"north_grove",schedule:Object.freeze(["talk_with_friends","stay_home"]),cluster:Object.freeze([-31,25]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_far_ne",role:"festivalgoer",location:"north_grove",schedule:Object.freeze(["talk_with_friends","stay_home"]),cluster:Object.freeze([31,28]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_apron_w",role:"festivalgoer",location:"festival_stage",schedule:Object.freeze(["watch_stage","concert_seat"]),cluster:Object.freeze([-5,-22]),groupSize:4,background:!0,featured:!1}),Object.freeze({id:"crowd_apron_e",role:"festivalgoer",location:"festival_stage",schedule:Object.freeze(["watch_stage","concert_seat"]),cluster:Object.freeze([6,-21]),groupSize:4,background:!0,featured:!1})]),$r=Object.freeze([...Mn,...wn]),Cg=new Map($r.map(s=>[s.id,s])),Pg=new Map(Mn.filter(s=>s.kitId).map(s=>[s.kitId,s]));function Co(s=wn){return Object.freeze(s.flatMap((e,t)=>{let[i,n]=e.cluster,r=e.groupSize??4;return Array.from({length:r},(a,o)=>{let c=o*Math.PI/2+t*.37,l=1.25+o%2*.15;return Object.freeze([i+Math.sin(c)*l,n+Math.cos(c)*l,c+Math.PI])})}))}function Po({featuredOnly:s=!1,backgroundOnly:e=!1}={}){return $r.filter(t=>!(s&&!t.featured||e&&!t.background)).map(t=>({...t,schedule:[...t.schedule]}))}function vs(s){if(s==null||s==="")return null;let e=Cg.get(s)||Pg.get(s);return e?{...e,schedule:[...e.schedule]}:null}function Qr(){return Mn.filter(s=>s.concertReserved).map(s=>s.kitId||s.id)}function uf(){return Mn.filter(s=>s.featured&&s.role!=="player"&&s.role!=="animal"&&s.role!=="companion").map(s=>s.kitId||s.id)}function df(){return Mn.filter(s=>s.schedule.includes("repair_assist")&&Array.isArray(s.home)).map(s=>({id:s.kitId||s.id,asset:s.asset||"crowd_1",position:[...s.home],rotation:s.rotation??0}))}function Js(s){if(!s)return null;if(Array.isArray(s.home)&&s.home.length>=3)return[s.home[0],s.home[1],s.home[2]];let e=_i[s.location];return e?.approx?[...e.approx]:null}function Ig(s){let e=[];if(!s||typeof s!="object")return["NPC must be an object"];if((typeof s.id!="string"||!s.id)&&e.push("id must be a non-empty string"),(typeof s.role!="string"||!s.role)&&e.push(`${s.id||"?"}: role required`),(typeof s.location!="string"||!_i[s.location])&&e.push(`${s.id||"?"}: location must be a LOCATION_KEYS entry`),!Array.isArray(s.schedule)||s.schedule.length===0)e.push(`${s.id||"?"}: schedule must be a non-empty array`);else for(let t of s.schedule)xs[t]||e.push(`${s.id||"?"}: unknown schedule tag "${t}"`);return s.home!=null&&(!Array.isArray(s.home)||s.home.length<3||!s.home.every(t=>Number.isFinite(t)))&&e.push(`${s.id||"?"}: home must be [x,y,z] numbers`),s.concertReserved&&!s.featured&&!s.background&&e.push(`${s.id||"?"}: concertReserved expects featured or background`),e}function ff(s=$r,{seatCount:e=null}={}){let t=[],i=new Set,n=new Set;for(let a of s)t.push(...Ig(a)),i.has(a.id)&&t.push(`duplicate id "${a.id}"`),i.add(a.id),a.kitId&&(n.has(a.kitId)&&t.push(`duplicate kitId "${a.kitId}"`),n.add(a.kitId));let r=s.filter(a=>a.concertReserved);if(e!=null&&r.length>e&&t.push(`concertReserved count ${r.length} exceeds FEATURED_SEATS (${e})`),t.length)throw new Error(`NPC registry invalid:
- `+t.join(`
- `));return!0}function Io(){return Object.fromEntries(Object.entries(xs).map(([s,e])=>[s,{live:e.live,note:e.note}]))}var pf=Co(wn);var _h=Object.freeze({communicate:"Say It Weird",solve:"Debug the Vibes",create:"Make a Mess",connect:"Meet Your Humans","stay curious":"What If, Though?"}),zi=s=>_h[String(s).toLowerCase()]||s;var ea=Object.freeze({title:"Aspen Trail Drift",src:"audio/aspen-trail-drift.mp3"}),yh=Object.freeze({title:"Moonlit Cabin Hush",src:"audio/moonlit-cabin-hush.mp3"}),mf=Object.freeze({title:"One Island One View",src:"audio/one-island-one-view.mp3"}),Dg=Object.freeze([["Communicate","communicate"],["Solve","solve"],["Create","create"],["Connect","connect"],["Stay Curious","stay-curious","3ebe2d327cbe"]].map(([s,e,t])=>Object.freeze({title:s,src:`audio/records/${e}.mp3`,revision:t})));function Lg(s){return Dg.find(e=>e.title.toLowerCase()===String(s).toLowerCase())}var Do=class{constructor({AudioClass:e=globalThis.Audio,onChange:t=()=>{},revokeURL:i=c=>URL.revokeObjectURL(c),fadeMs:n=700,now:r=()=>performance.now(),schedule:a=(c,l)=>globalThis.setTimeout(c,l),cancelTimer:o=c=>globalThis.clearTimeout(c)}={}){this.fadeMs=n,this.now=r,this.schedule=a,this.cancelTimer=o,this.transition=0,this.fade=null,this.AudioClass=e,this.onChange=t,this.revokeURL=i,this.track=null,this.title=ea.title,this.src=null,this.status="ready",this.volume=.65,this.request=0,this.wantsPlay=!1}get state(){return{title:this.title,src:this.src,status:this.status,playing:this.status==="playing",volume:this.volume,currentTime:this.pendingSrc?0:this.track?.currentTime||0,duration:!this.pendingSrc&&Number.isFinite(this.track?.duration)?this.track.duration:0}}emit(){this.onChange(this.state)}prepare(e,t){this.cancelFade(),this.request++,this.wantsPlay=!1;let i=this.track;this.track=null,i&&(i.pause(),i.removeAttribute("src"),i.load()),this.src?.startsWith("blob:")&&this.revokeURL(this.src),this.src=e,this.title=t,this.status="ready";let n=new this.AudioClass;this.track=n,n.preload="none",n.loop=!0,n.volume=this.volume,n.addEventListener("playing",()=>{if(this.track===n){if(!this.wantsPlay){n.pause();return}this.status="playing",this.emit()}}),n.addEventListener("waiting",()=>{this.track===n&&this.wantsPlay&&(this.status="loading",this.emit())}),n.addEventListener("pause",()=>{this.track===n&&(this.status!=="error"&&(this.status="paused"),this.emit())}),n.addEventListener("error",()=>{this.track===n&&(this.wantsPlay=!1,this.status="error",this.emit())}),n.addEventListener("ended",()=>{this.track!==n||n.loop||(this.wantsPlay=!1,this.status="ended",this.emit())}),n.src=e,this.emit()}pause(){this.cancelFade(),this.request++,this.wantsPlay=!1,this.track?.pause(),this.track&&(this.track.volume=this.volume),this.status="paused",this.emit()}async play(){this.cancelFade(),this.track&&(this.track.volume=this.volume),this.track||this.prepare(ea.src,ea.title);let e=this.track,t=++this.request;this.wantsPlay=!0,e.error&&e.load(),this.status="loading",this.emit();try{return await e.play(),t!==this.request||this.track!==e||!this.wantsPlay?!1:(this.status="playing",this.emit(),!0)}catch{return t!==this.request||this.track!==e||(this.wantsPlay=!1,this.status="error",this.emit()),!1}}cancelFade(){if(this.transition++,this.pendingSrc?.startsWith("blob:")&&this.revokeURL(this.pendingSrc),this.pendingSrc=null,this.fade){this.cancelTimer(this.fade.timer);let e=this.fade.done;this.fade=null,e(!1)}}async switchTo(e,t,{loop:i=!0,restart:n=!1,autoplay:r=!0}={}){if(this.src===e&&!n)return this.cancelFade(),r?this.play():!1;this.cancelFade();let a=this.transition,o=this.track;return this.pendingSrc=e,o&&this.wantsPlay&&o.paused!==!0&&this.fadeMs>0&&(this.status="loading",this.emit(),!await new Promise(l=>{let h=this.now(),u=o.volume,d=()=>{if(a!==this.transition)return;let f=Math.min(1,(this.now()-h)/this.fadeMs);o.volume=Math.min(this.volume,u)*(1-f),f>=1?(this.fade=null,l(!0)):this.fade.timer=this.schedule(d,25)};this.fade={done:l,timer:null},d()})||a!==this.transition)?!1:(this.pendingSrc=null,this.prepare(e,t),this.track.loop=i,r?this.play():!1)}playRecord(e){let t=Lg(e);if(!t)return Promise.resolve(!1);let i=t.src+(t.revision?"?v="+t.revision:"");return this.switchTo(i,t.title)}playCamp(){return this.switchTo(yh.src,yh.title)}leaveCamp(){if(!(this.src!==yh.src&&!this.fade))return this.switchTo(ea.src,ea.title,{autoplay:this.wantsPlay})}playFinale(){return this.switchTo(mf.src,mf.title,{loop:!1,restart:!0})}setVolume(e){this.volume=Math.max(0,Math.min(1,Number(e)||0)),this.track&&!this.fade&&(this.track.volume=this.volume),this.emit()}};var lp=0,lu=1,hp=2;var Os=1,up=2,Lr=3,ji=0,Yt=1,ot=2,Xi=0,Nr=1,Xa=2,hu=3,uu=4,dp=5;var Us=100,fp=101,pp=102,mp=103,gp=104,bp=200,xp=201,vp=202,_p=203,du=204,fu=205,yp=206,Sp=207,Mp=208,wp=209,Ep=210,Tp=211,Ap=212,Rp=213,Cp=214,dc=0,fc=1,pc=2,mr=3,mc=4,gc=5,bc=6,xc=7,pu=0,Pp=1,Ip=2,on=0,Ka=1,Ja=2,Ya=3,Bs=4,Za=5,$a=6,Qa=7,Yh="attached",Dp="detached",mu=300,ds=301,zs=302,Gc=303,Vc=304,eo=306,yi=1e3,Gi=1001,gr=1002,Bt=1003,Wc=1004;var Hs=1005;var It=1006,Fr=1007;var Ti=1008;var Ai=1009,gu=1010,bu=1011,kr=1012,qc=1013,Ni=1014,Fi=1015,ri=1016,jc=1017,Xc=1018,Or=1020,xu=35902,vu=35899,_u=1021,yu=1022,ki=1023,pn=1026,fs=1027,Kc=1028,Jc=1029,ps=1030,Yc=1031;var Zc=1033,to=33776,io=33777,no=33778,so=33779,$c=35840,Qc=35841,el=35842,tl=35843,il=36196,nl=37492,sl=37496,rl=37488,al=37489,ro=37490,ol=37491,cl=37808,ll=37809,hl=37810,ul=37811,dl=37812,fl=37813,pl=37814,ml=37815,gl=37816,bl=37817,xl=37818,vl=37819,_l=37820,yl=37821,Sl=36492,Ml=36494,wl=36495,El=36283,Tl=36284,ao=36285,Al=36286,Rl=2200,Cl=2201,Lp=2202,Rs=2300,Cs=2301,lc=2302,Zh=2303,ws=2400,Es=2401,ba=2402,Pl=2500,Np=2501,Su=0,oo=1,Ur=2,Fp=3200,co=3201;var Il=0,kp=1,qn="",at="srgb",pi="srgb-linear",xa="linear",ut="srgb";var hc=7680;var Op=519,Up=512,Bp=513,zp=514,Dl=515,Hp=516,Gp=517,Ll=518,Vp=519,Mu=35044,wu=35048;var Eu="300 es",tn=2e3,br=2001;function Ng(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fg(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Wp(){let s=xr("canvas");return s.style.display="block",s}var gf={},vr=null;function va(...s){let e="THREE."+s.shift();vr?vr("log",e,...s):console.log(e,...s)}function qp(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function Le(...s){s=qp(s);let e="THREE."+s.shift();if(vr)vr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ve(...s){s=qp(s);let e="THREE."+s.shift();if(vr)vr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function As(...s){let e=s.join(" ");e in gf||(gf[e]=!0,Le(...s))}function jp(s,e,t){return new Promise(function(i,n){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:i()}}setTimeout(r,t)})}var Xp={[dc]:fc,[pc]:bc,[mc]:xc,[mr]:gc,[fc]:dc,[bc]:pc,[xc]:mc,[gc]:mr},nn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){let i=this._listeners;if(i===void 0)return;let n=i[e];if(n!==void 0){let r=n.indexOf(t);r!==-1&&n.splice(r,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let i=t[e.type];if(i!==void 0){e.target=this;let n=i.slice(0);for(let r=0,a=n.length;r<a;r++)n[r].call(this,e);e.target=null}}},li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],bf=1234567,fa=Math.PI/180,Ps=180/Math.PI;function Vi(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[s&255]+li[s>>8&255]+li[s>>16&255]+li[s>>24&255]+"-"+li[e&255]+li[e>>8&255]+"-"+li[e>>16&15|64]+li[e>>24&255]+"-"+li[t&63|128]+li[t>>8&255]+"-"+li[t>>16&255]+li[t>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function et(s,e,t){return Math.max(e,Math.min(t,s))}function Tu(s,e){return(s%e+e)%e}function kg(s,e,t,i,n){return i+(s-e)*(n-i)/(t-e)}function Og(s,e,t){return s!==e?(t-s)/(e-s):0}function pa(s,e,t){return(1-t)*s+t*e}function Ug(s,e,t,i){return pa(s,e,1-Math.exp(-t*i))}function Bg(s,e=1){return e-Math.abs(Tu(s,e*2)-e)}function zg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hg(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Gg(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Vg(s,e){return s+Math.random()*(e-s)}function Wg(s){return s*(.5-Math.random())}function qg(s){s!==void 0&&(bf=s);let e=bf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function jg(s){return s*fa}function Xg(s){return s*Ps}function Kg(s){return s>0&&Number.isInteger(s)&&2**Math.round(Math.log2(s))===s}function Jg(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Yg(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zg(s,e,t,i,n){let r=Math.cos,a=Math.sin,o=r(t/2),c=a(t/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(n){case"XYX":s.set(o*h,c*u,c*d,o*l);break;case"YZY":s.set(c*d,o*h,c*u,o*l);break;case"ZXZ":s.set(c*u,c*d,o*h,o*l);break;case"XZX":s.set(o*h,c*g,c*f,o*l);break;case"YXY":s.set(c*f,o*h,c*g,o*l);break;case"ZYZ":s.set(c*g,c*f,o*h,o*l);break;default:Le("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+n)}}function en(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function _t(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var pt={DEG2RAD:fa,RAD2DEG:Ps,generateUUID:Vi,clamp:et,euclideanModulo:Tu,mapLinear:kg,inverseLerp:Og,lerp:pa,damp:Ug,pingpong:Bg,smoothstep:zg,smootherstep:Hg,randInt:Gg,randFloat:Vg,randFloatSpread:Wg,seededRandom:qg,degToRad:jg,radToDeg:Xg,isPowerOfTwo:Kg,ceilPowerOfTwo:Jg,floorPowerOfTwo:Yg,setQuaternionFromProperEuler:Zg,normalize:_t,denormalize:en},ie=class s{static{s.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,i=this.y,n=e.elements;return this.x=n[0]*t+n[3]*i+n[6],this.y=n[1]*t+n[4]*i+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let i=Math.cos(t),n=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*n+e.x,this.y=r*n+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Je=class{constructor(e=0,t=0,i=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=n}static slerpFlat(e,t,i,n,r,a,o){let c=i[n+0],l=i[n+1],h=i[n+2],u=i[n+3],d=r[a+0],f=r[a+1],g=r[a+2],x=r[a+3];if(u!==x||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*x;m<0&&(d=-d,f=-f,g=-g,x=-x,m=-m);let p=1-o;if(m<.9995){let v=Math.acos(m),S=Math.sin(v);p=Math.sin(p*v)/S,o=Math.sin(o*v)/S,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+x*o;let v=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=v,l*=v,h*=v,u*=v}}e[t]=c,e[t+1]=l,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,i,n,r,a){let o=i[n],c=i[n+1],l=i[n+2],h=i[n+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[t]=o*g+h*u+c*f-l*d,e[t+1]=c*g+h*d+l*u-o*f,e[t+2]=l*g+h*f+o*d-c*u,e[t+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,n){return this._x=e,this._y=t,this._z=i,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let i=e._x,n=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(n/2),u=o(r/2),d=c(i/2),f=c(n/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Le("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let i=t/2,n=Math.sin(i);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,i=t[0],n=t[4],r=t[8],a=t[1],o=t[5],c=t[9],l=t[2],h=t[6],u=t[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-n)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-n)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){let i=this.angleTo(e);if(i===0)return this;let n=Math.min(1,t/i);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=t._x,c=t._y,l=t._z,h=t._w;return this._x=i*h+a*o+n*l-r*c,this._y=n*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-n*o,this._w=a*h-i*o-n*c-r*l,this._onChangeCallback(),this}slerp(e,t){let i=e._x,n=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,n=-n,r=-r,a=-a,o=-o);let c=1-t;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,t=Math.sin(t*l)/h,this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+i*t,this._y=this._y*c+n*t,this._z=this._z*c+r*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),n=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(n*Math.sin(e),n*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},R=class s{static{s.prototype.isVector3=!0}constructor(e=0,t=0,i=0){this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(xf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(xf.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6]*n,this.y=r[1]*t+r[4]*i+r[7]*n,this.z=r[2]*t+r[5]*i+r[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=e.elements,a=1/(r[3]*t+r[7]*i+r[11]*n+r[15]);return this.x=(r[0]*t+r[4]*i+r[8]*n+r[12])*a,this.y=(r[1]*t+r[5]*i+r[9]*n+r[13])*a,this.z=(r[2]*t+r[6]*i+r[10]*n+r[14])*a,this}applyQuaternion(e){let t=this.x,i=this.y,n=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*n-o*i),h=2*(o*t-r*n),u=2*(r*i-a*t);return this.x=t+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=n+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,i=this.y,n=this.z,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*n,this.y=r[1]*t+r[5]*i+r[9]*n,this.z=r[2]*t+r[6]*i+r[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let i=e.x,n=e.y,r=e.z,a=t.x,o=t.y,c=t.z;return this.x=n*c-r*o,this.y=r*a-i*c,this.z=i*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Sh.copy(this).projectOnVector(e),this.sub(Sh)}reflect(e){return this.sub(Sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,i=this.y-e.y,n=this.z-e.z;return t*t+i*i+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){let n=Math.sin(t)*e;return this.x=n*Math.sin(i),this.y=Math.cos(t)*e,this.z=n*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Sh=new R,xf=new Je,Xe=class s{static{s.prototype.isMatrix3=!0}constructor(e,t,i,n,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,c,l)}set(e,t,i,n,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],x=n[0],m=n[3],p=n[6],v=n[1],S=n[4],b=n[7],M=n[2],w=n[5],A=n[8];return r[0]=a*x+o*v+c*M,r[3]=a*m+o*S+c*w,r[6]=a*p+o*b+c*A,r[1]=l*x+h*v+u*M,r[4]=l*m+h*S+u*w,r[7]=l*p+h*b+u*A,r[2]=d*x+f*v+g*M,r[5]=d*m+f*S+g*w,r[8]=d*p+f*b+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return t*a*h-t*o*l-i*r*h+i*o*c+n*r*l-n*a*c}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=t*u+i*d+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=u*x,e[1]=(n*l-h*i)*x,e[2]=(o*i-n*a)*x,e[3]=d*x,e[4]=(h*t-n*c)*x,e[5]=(n*r-o*t)*x,e[6]=f*x,e[7]=(i*c-l*t)*x,e[8]=(a*t-i*r)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,n,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-n*l,n*c,-n*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return As("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Mh.makeScale(e,t)),this}rotate(e){return As("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Mh.makeRotation(-e)),this}translate(e,t){return As("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Mh.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<9;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},Mh=new Xe,vf=new Xe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_f=new Xe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function $g(){let s={enabled:!0,workingColorSpace:pi,spaces:{},convert:function(n,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===ut&&(n.r=Dn(n.r),n.g=Dn(n.g),n.b=Dn(n.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[r].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===ut&&(n.r=pr(n.r),n.g=pr(n.g),n.b=pr(n.b))),n},workingToColorSpace:function(n,r){return this.convert(n,this.workingColorSpace,r)},colorSpaceToWorking:function(n,r){return this.convert(n,r,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===qn?xa:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,r=this.workingColorSpace){return n.fromArray(this.spaces[r].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,r,a){return n.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,r){return As("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,r)},toWorkingColorSpace:function(n,r){return As("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return s.define({[pi]:{primaries:e,whitePoint:i,transfer:xa,toXYZ:vf,fromXYZ:_f,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:at},outputColorSpaceConfig:{drawingBufferColorSpace:at}},[at]:{primaries:e,whitePoint:i,transfer:ut,toXYZ:vf,fromXYZ:_f,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:at}}}),s}var $e=$g();function Dn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function pr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var Ys,vc=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ys===void 0&&(Ys=xr("canvas")),Ys.width=e.width,Ys.height=e.height;let n=Ys.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),i=Ys}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=xr("canvas");t.width=e.width,t.height=e.height;let i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let n=i.getImageData(0,0,e.width,e.height),r=n.data;for(let a=0;a<r.length;a++)r[a]=Dn(r[a]/255)*255;return i.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Dn(t[i]/255)*255):t[i]=Dn(t[i]);return{data:t,width:e.width,height:e.height}}else return Le("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Qg=0,_r=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Qg++}),this.uuid=Vi(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},n=this.data;if(n!==null){let r;if(Array.isArray(n)){r=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?r.push(wh(n[a].image)):r.push(wh(n[a]))}else r=wh(n);i.url=r}return t||(e.images[this.uuid]=i),i}};function wh(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?vc.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(Le("Texture: Unable to serialize Texture."),{})}var e0=0,Eh=new R,Xt=class s extends nn{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,i=Gi,n=Gi,r=It,a=Ti,o=ki,c=Ai,l=s.DEFAULT_ANISOTROPY,h=qn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:e0++}),this.uuid=Vi(),this.name="",this.source=new _r(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=n,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Eh).x}get height(){return this.source.getSize(Eh).y}get depth(){return this.source.getSize(Eh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let i=e[t];if(i===void 0){Le(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Le(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&i&&n.isVector2&&i.isVector2||n&&i&&n.isVector3&&i.isVector3||n&&i&&n.isMatrix3&&i.isMatrix3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==mu)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yi:e.x=e.x-Math.floor(e.x);break;case Gi:e.x=e.x<0?0:1;break;case gr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yi:e.y=e.y-Math.floor(e.y);break;case Gi:e.y=e.y<0?0:1;break;case gr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Xt.DEFAULT_IMAGE=null;Xt.DEFAULT_MAPPING=mu;Xt.DEFAULT_ANISOTROPY=1;var ct=class s{static{s.prototype.isVector4=!0}constructor(e=0,t=0,i=0,n=1){this.x=e,this.y=t,this.z=i,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,n){return this.x=e,this.y=t,this.z=i,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,i=this.y,n=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*n+a[12]*r,this.y=a[1]*t+a[5]*i+a[9]*n+a[13]*r,this.z=a[2]*t+a[6]*i+a[10]*n+a[14]*r,this.w=a[3]*t+a[7]*i+a[11]*n+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,n,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],x=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let S=(l+1)/2,b=(f+1)/2,M=(p+1)/2,w=(h+d)/4,A=(u+x)/4,_=(g+m)/4;return S>b&&S>M?S<.01?(i=0,n=.707106781,r=.707106781):(i=Math.sqrt(S),n=w/i,r=A/i):b>M?b<.01?(i=.707106781,n=0,r=.707106781):(n=Math.sqrt(b),i=w/n,r=_/n):M<.01?(i=.707106781,n=.707106781,r=0):(r=Math.sqrt(M),i=A/r,n=_/r),this.set(i,n,r,t),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(d-h)*(d-h));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(d-h)/v,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){let i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_c=class extends nn{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:It,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:i.depth},r=new Xt(n),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:It,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let n=0,r=this.textures.length;n<r;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=i,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new _r(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},qt=class extends _c{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}},_a=class extends Xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yc=class extends Xt{constructor(e=null,t=1,i=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:n},this.magFilter=Bt,this.minFilter=Bt,this.wrapR=Gi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var Pe=class s{static{s.prototype.isMatrix4=!0}constructor(e,t,i,n,r,a,o,c,l,h,u,d,f,g,x,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,n,r,a,o,c,l,h,u,d,f,g,x,m)}set(e,t,i,n,r,a,o,c,l,h,u,d,f,g,x,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=i,p[12]=n,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new s().fromArray(this.elements)}copy(e){let t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){let t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,i=e.elements,n=1/Zs.setFromMatrixColumn(e,0).length(),r=1/Zs.setFromMatrixColumn(e,1).length(),a=1/Zs.setFromMatrixColumn(e,2).length();return t[0]=i[0]*n,t[1]=i[1]*n,t[2]=i[2]*n,t[3]=0,t[4]=i[4]*r,t[5]=i[5]*r,t[6]=i[6]*r,t[7]=0,t[8]=i[8]*a,t[9]=i[9]*a,t[10]=i[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,i=e.x,n=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(n),l=Math.sin(n),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=-c*u,t[8]=l,t[1]=f+g*l,t[5]=d-x*l,t[9]=-o*c,t[2]=x-d*l,t[6]=g+f*l,t[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d+x*o,t[4]=g*o-f,t[8]=a*l,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+d*o,t[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,x=l*u;t[0]=d-x*o,t[4]=-a*u,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-d*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,x=o*u;t[0]=c*h,t[4]=g*l-f,t[8]=d*l+x,t[1]=c*u,t[5]=x*l+d,t[9]=f*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=x-d*u,t[8]=g*u+f,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-l*h,t[6]=f*u+g,t[10]=d-x*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,x=o*l;t[0]=c*h,t[4]=-u,t[8]=l*h,t[1]=d*u+x,t[5]=a*h,t[9]=f*u-g,t[2]=g*u-f,t[6]=o*h,t[10]=x*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(t0,e,i0)}lookAt(e,t,i){let n=this.elements;return Pi.subVectors(e,t),Pi.lengthSq()===0&&(Pi.z=1),Pi.normalize(),Qn.crossVectors(i,Pi),Qn.lengthSq()===0&&(Math.abs(i.z)===1?Pi.x+=1e-4:Pi.z+=1e-4,Pi.normalize(),Qn.crossVectors(i,Pi)),Qn.normalize(),Lo.crossVectors(Pi,Qn),n[0]=Qn.x,n[4]=Lo.x,n[8]=Pi.x,n[1]=Qn.y,n[5]=Lo.y,n[9]=Pi.y,n[2]=Qn.z,n[6]=Lo.z,n[10]=Pi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let i=e.elements,n=t.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],x=i[6],m=i[10],p=i[14],v=i[3],S=i[7],b=i[11],M=i[15],w=n[0],A=n[4],_=n[8],T=n[12],P=n[1],I=n[5],N=n[9],B=n[13],D=n[2],O=n[6],V=n[10],j=n[14],ne=n[3],q=n[7],Z=n[11],Q=n[15];return r[0]=a*w+o*P+c*D+l*ne,r[4]=a*A+o*I+c*O+l*q,r[8]=a*_+o*N+c*V+l*Z,r[12]=a*T+o*B+c*j+l*Q,r[1]=h*w+u*P+d*D+f*ne,r[5]=h*A+u*I+d*O+f*q,r[9]=h*_+u*N+d*V+f*Z,r[13]=h*T+u*B+d*j+f*Q,r[2]=g*w+x*P+m*D+p*ne,r[6]=g*A+x*I+m*O+p*q,r[10]=g*_+x*N+m*V+p*Z,r[14]=g*T+x*B+m*j+p*Q,r[3]=v*w+S*P+b*D+M*ne,r[7]=v*A+S*I+b*O+M*q,r[11]=v*_+S*N+b*V+M*Z,r[15]=v*T+S*B+b*j+M*Q,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],x=e[7],m=e[11],p=e[15],v=c*f-l*d,S=o*f-l*u,b=o*d-c*u,M=a*f-l*h,w=a*d-c*h,A=a*u-o*h;return t*(x*v-m*S+p*b)-i*(g*v-m*M+p*w)+n*(g*S-x*M+p*A)-r*(g*b-x*w+m*A)}determinantAffine(){let e=this.elements,t=e[0],i=e[4],n=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return t*(a*h-o*l)-i*(r*h-o*c)+n*(r*l-a*c)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=i),this}invert(){let e=this.elements,t=e[0],i=e[1],n=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],x=e[13],m=e[14],p=e[15],v=t*o-i*a,S=t*c-n*a,b=t*l-r*a,M=i*c-n*o,w=i*l-r*o,A=n*l-r*c,_=h*x-u*g,T=h*m-d*g,P=h*p-f*g,I=u*m-d*x,N=u*p-f*x,B=d*p-f*m,D=v*B-S*N+b*I+M*P-w*T+A*_;if(D===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/D;return e[0]=(o*B-c*N+l*I)*O,e[1]=(n*N-i*B-r*I)*O,e[2]=(x*A-m*w+p*M)*O,e[3]=(d*w-u*A-f*M)*O,e[4]=(c*P-a*B-l*T)*O,e[5]=(t*B-n*P+r*T)*O,e[6]=(m*b-g*A-p*S)*O,e[7]=(h*A-d*b+f*S)*O,e[8]=(a*N-o*P+l*_)*O,e[9]=(i*P-t*N-r*_)*O,e[10]=(g*w-x*b+p*v)*O,e[11]=(u*b-h*w-f*v)*O,e[12]=(o*T-a*I-c*_)*O,e[13]=(t*I-i*T+n*_)*O,e[14]=(x*S-g*M-m*v)*O,e[15]=(h*M-u*S+d*v)*O,this}scale(e){let t=this.elements,i=e.x,n=e.y,r=e.z;return t[0]*=i,t[4]*=n,t[8]*=r,t[1]*=i,t[5]*=n,t[9]*=r,t[2]*=i,t[6]*=n,t[10]*=r,t[3]*=i,t[7]*=n,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,n))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let i=Math.cos(t),n=Math.sin(t),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-n*c,l*c+n*o,0,l*o+n*c,h*o+i,h*c-n*a,0,l*c-n*o,h*c+n*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,n,r,a){return this.set(1,i,r,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,i){let n=this.elements,r=t._x,a=t._y,o=t._z,c=t._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,x=a*h,m=a*u,p=o*u,v=c*l,S=c*h,b=c*u,M=i.x,w=i.y,A=i.z;return n[0]=(1-(x+p))*M,n[1]=(f+b)*M,n[2]=(g-S)*M,n[3]=0,n[4]=(f-b)*w,n[5]=(1-(d+p))*w,n[6]=(m+v)*w,n[7]=0,n[8]=(g+S)*A,n[9]=(m-v)*A,n[10]=(1-(d+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,i){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),t.identity(),this;let a=Zs.set(n[0],n[1],n[2]).length(),o=Zs.set(n[4],n[5],n[6]).length(),c=Zs.set(n[8],n[9],n[10]).length();r<0&&(a=-a),Zi.copy(this);let l=1/a,h=1/o,u=1/c;return Zi.elements[0]*=l,Zi.elements[1]*=l,Zi.elements[2]*=l,Zi.elements[4]*=h,Zi.elements[5]*=h,Zi.elements[6]*=h,Zi.elements[8]*=u,Zi.elements[9]*=u,Zi.elements[10]*=u,t.setFromRotationMatrix(Zi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,t,i,n,r,a,o=tn,c=!1){let l=this.elements,h=2*r/(t-e),u=2*r/(i-n),d=(t+e)/(t-e),f=(i+n)/(i-n),g,x;if(c)g=r/(a-r),x=a*r/(a-r);else if(o===tn)g=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,n,r,a,o=tn,c=!1){let l=this.elements,h=2/(t-e),u=2/(i-n),d=-(t+e)/(t-e),f=-(i+n)/(i-n),g,x;if(c)g=1/(a-r),x=a/(a-r);else if(o===tn)g=-2/(a-r),x=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=x,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,i=e.elements;for(let n=0;n<16;n++)if(t[n]!==i[n])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){let i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}},Zs=new R,Zi=new Pe,t0=new R(0,0,0),i0=new R(1,1,1),Qn=new R,Lo=new R,Pi=new R,yf=new Pe,Sf=new Je,Ln=class s{constructor(e=0,t=0,i=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,n=this._order){return this._x=e,this._y=t,this._z=i,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){let n=e.elements,r=n[0],a=n[4],o=n[8],c=n[1],l=n[5],h=n[9],u=n[2],d=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(et(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(et(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-et(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Le("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return yf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(yf,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sf.setFromEuler(this),this.setFromQuaternion(Sf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Ln.DEFAULT_ORDER="XYZ";var yr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},n0=0,Mf=new R,$s=new Je,En=new Pe,No=new R,ta=new R,s0=new R,r0=new Je,wf=new R(1,0,0),Ef=new R(0,1,0),Tf=new R(0,0,1),Af={type:"added"},a0={type:"removed"},Qs={type:"childadded",child:null},Th={type:"childremoved",child:null},dt=class s extends nn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:n0++}),this.uuid=Vi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new R,t=new Ln,i=new Je,n=new R(1,1,1);function r(){i.setFromEuler(t,!1)}function a(){t.setFromQuaternion(i,void 0,!1)}t._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Xe}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new yr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.multiply($s),this}rotateOnWorldAxis(e,t){return $s.setFromAxisAngle(e,t),this.quaternion.premultiply($s),this}rotateX(e){return this.rotateOnAxis(wf,e)}rotateY(e){return this.rotateOnAxis(Ef,e)}rotateZ(e){return this.rotateOnAxis(Tf,e)}translateOnAxis(e,t){return Mf.copy(e).applyQuaternion(this.quaternion),this.position.add(Mf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(wf,e)}translateY(e){return this.translateOnAxis(Ef,e)}translateZ(e){return this.translateOnAxis(Tf,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(En.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?No.copy(e):No.set(e,t,i);let n=this.parent;this.updateWorldMatrix(!0,!1),ta.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?En.lookAt(ta,No,this.up):En.lookAt(No,ta,this.up),this.quaternion.setFromRotationMatrix(En),n&&(En.extractRotation(n.matrixWorld),$s.setFromRotationMatrix(En),this.quaternion.premultiply($s.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Af),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(a0),Th.child=e,this.dispatchEvent(Th),Th.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),En.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),En.multiply(e.parent.matrixWorld)),e.applyMatrix4(En),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Af),Qs.child=e,this.dispatchEvent(Qs),Qs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,n=this.children.length;i<n;i++){let a=this.children[i].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);let n=this.children;for(let r=0,a=n.length;r<a;r++)n[r].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,e,s0),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ta,r0,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,i=e.y,n=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*i-r[8]*n,r[13]+=i-r[1]*t-r[5]*i-r[9]*n,r[14]+=n-r[2]*t-r[6]*i-r[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let i=0,n=t.length;i<n;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t,i=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),t===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));n.material=o}else n.material=r(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];n.animations.push(r(e.animations,c))}}if(t){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=n,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){let n=e.children[i];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};dt.DEFAULT_UP=new R(0,1,0);dt.DEFAULT_MATRIX_AUTO_UPDATE=!0;dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ue=class extends dt{constructor(){super(),this.isGroup=!0,this.type="Group"}},o0={type:"move"},Sr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ue,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ue,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new R,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new R),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ue,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new R,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new R,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let n=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let x of e.hand.values()){let m=t.getJointPose(x,i),p=this._getHandJoint(l,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,i),n===null&&r!==null&&(n=r),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(o0)))}return o!==null&&(o.visible=n!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let i=new Ue;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}},Kp={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},es={h:0,s:0,l:0},Fo={h:0,s:0,l:0};function Ah(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ge=class{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=at){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,$e.colorSpaceToWorking(this,t),this}setRGB(e,t,i,n=$e.workingColorSpace){return this.r=e,this.g=t,this.b=i,$e.colorSpaceToWorking(this,n),this}setHSL(e,t,i,n=$e.workingColorSpace){if(e=Tu(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+t):i+t-i*t,a=2*i-r;this.r=Ah(a,r,e+1/3),this.g=Ah(a,r,e),this.b=Ah(a,r,e-1/3)}return $e.colorSpaceToWorking(this,n),this}setStyle(e,t=at){function i(r){r!==void 0&&parseFloat(r)<1&&Le("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Le("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=n[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Le("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=at){let i=Kp[e.toLowerCase()];return i!==void 0?this.setHex(i,t):Le("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dn(e.r),this.g=Dn(e.g),this.b=Dn(e.b),this}copyLinearToSRGB(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=at){return $e.workingToColorSpace(hi.copy(this),e),Math.round(et(hi.r*255,0,255))*65536+Math.round(et(hi.g*255,0,255))*256+Math.round(et(hi.b*255,0,255))}getHexString(e=at){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=$e.workingColorSpace){$e.workingToColorSpace(hi.copy(this),t);let i=hi.r,n=hi.g,r=hi.b,a=Math.max(i,n,r),o=Math.min(i,n,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(n-r)/u+(n<r?6:0);break;case n:c=(r-i)/u+2;break;case r:c=(i-n)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,t=$e.workingColorSpace){return $e.workingToColorSpace(hi.copy(this),t),e.r=hi.r,e.g=hi.g,e.b=hi.b,e}getStyle(e=at){$e.workingToColorSpace(hi.copy(this),e);let t=hi.r,i=hi.g,n=hi.b;return e!==at?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(n*255)})`}offsetHSL(e,t,i){return this.getHSL(es),this.setHSL(es.h+e,es.s+t,es.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(es),e.getHSL(Fo);let i=pa(es.h,Fo.h,t),n=pa(es.s,Fo.s,t),r=pa(es.l,Fo.l,t);return this.setHSL(i,n,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,i=this.g,n=this.b,r=e.elements;return this.r=r[0]*t+r[3]*i+r[6]*n,this.g=r[1]*t+r[4]*i+r[7]*n,this.b=r[2]*t+r[5]*i+r[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},hi=new ge;ge.NAMES=Kp;var ya=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ge(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var Mr=class extends dt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ln,this.environmentIntensity=1,this.environmentRotation=new Ln,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},$i=new R,Tn=new R,Rh=new R,An=new R,er=new R,tr=new R,Rf=new R,Ch=new R,Ph=new R,Ih=new R,Dh=new ct,Lh=new ct,Nh=new ct,In=class s{constructor(e=new R,t=new R,i=new R){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,n){n.subVectors(i,t),$i.subVectors(e,t),n.cross($i);let r=n.lengthSq();return r>0?n.multiplyScalar(1/Math.sqrt(r)):n.set(0,0,0)}static getBarycoord(e,t,i,n,r){$i.subVectors(n,t),Tn.subVectors(i,t),Rh.subVectors(e,t);let a=$i.dot($i),o=$i.dot(Tn),c=$i.dot(Rh),l=Tn.dot(Tn),h=Tn.dot(Rh),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,t,i,n){return this.getBarycoord(e,t,i,n,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(e,t,i,n,r,a,o,c){return this.getBarycoord(e,t,i,n,An)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,An.x),c.addScaledVector(a,An.y),c.addScaledVector(o,An.z),c)}static getInterpolatedAttribute(e,t,i,n,r,a){return Dh.setScalar(0),Lh.setScalar(0),Nh.setScalar(0),Dh.fromBufferAttribute(e,t),Lh.fromBufferAttribute(e,i),Nh.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Dh,r.x),a.addScaledVector(Lh,r.y),a.addScaledVector(Nh,r.z),a}static isFrontFacing(e,t,i,n){return $i.subVectors(i,t),Tn.subVectors(e,t),$i.cross(Tn).dot(n)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,n){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,i,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return $i.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),$i.cross(Tn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,n,r){return s.getInterpolation(e,this.a,this.b,this.c,t,i,n,r)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let i=this.a,n=this.b,r=this.c,a,o;er.subVectors(n,i),tr.subVectors(r,i),Ch.subVectors(e,i);let c=er.dot(Ch),l=tr.dot(Ch);if(c<=0&&l<=0)return t.copy(i);Ph.subVectors(e,n);let h=er.dot(Ph),u=tr.dot(Ph);if(h>=0&&u<=h)return t.copy(n);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0)return a=c/(c-h),t.copy(i).addScaledVector(er,a);Ih.subVectors(e,r);let f=er.dot(Ih),g=tr.dot(Ih);if(g>=0&&f<=g)return t.copy(r);let x=f*l-c*g;if(x<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(i).addScaledVector(tr,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return Rf.subVectors(r,n),o=(u-h)/(u-h+(f-g)),t.copy(n).addScaledVector(Rf,o);let p=1/(m+x+d);return a=x*p,o=d*p,t.copy(i).addScaledVector(er,a).addScaledVector(tr,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},si=class{constructor(e=new R(1/0,1/0,1/0),t=new R(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Qi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Qi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let i=Qi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Qi):Qi.fromBufferAttribute(r,a),Qi.applyMatrix4(e.matrixWorld),this.expandByPoint(Qi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ko.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),ko.copy(i.boundingBox)),ko.applyMatrix4(e.matrixWorld),this.union(ko)}let n=e.children;for(let r=0,a=n.length;r<a;r++)this.expandByObject(n[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Qi),Qi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ia),Oo.subVectors(this.max,ia),ir.subVectors(e.a,ia),nr.subVectors(e.b,ia),sr.subVectors(e.c,ia),ts.subVectors(nr,ir),is.subVectors(sr,nr),_s.subVectors(ir,sr);let t=[0,-ts.z,ts.y,0,-is.z,is.y,0,-_s.z,_s.y,ts.z,0,-ts.x,is.z,0,-is.x,_s.z,0,-_s.x,-ts.y,ts.x,0,-is.y,is.x,0,-_s.y,_s.x,0];return!Fh(t,ir,nr,sr,Oo)||(t=[1,0,0,0,1,0,0,0,1],!Fh(t,ir,nr,sr,Oo))?!1:(Uo.crossVectors(ts,is),t=[Uo.x,Uo.y,Uo.z],Fh(t,ir,nr,sr,Oo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Qi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Qi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rn=[new R,new R,new R,new R,new R,new R,new R,new R],Qi=new R,ko=new si,ir=new R,nr=new R,sr=new R,ts=new R,is=new R,_s=new R,ia=new R,Oo=new R,Uo=new R,ys=new R;function Fh(s,e,t,i,n){for(let r=0,a=s.length-3;r<=a;r+=3){ys.fromArray(s,r);let o=n.x*Math.abs(ys.x)+n.y*Math.abs(ys.y)+n.z*Math.abs(ys.z),c=e.dot(ys),l=t.dot(ys),h=i.dot(ys);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}var Wt=new R,Bo=new ie,c0=0,Lt=class extends nn{constructor(e,t,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:c0++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Mu,this.updateRanges=[],this.gpuType=Fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let n=0,r=this.itemSize;n<r;n++)this.array[e+n]=t.array[i+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Bo.fromBufferAttribute(this,t),Bo.applyMatrix3(e),this.setXY(t,Bo.x,Bo.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix3(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyMatrix4(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.applyNormalMatrix(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Wt.fromBufferAttribute(this,t),Wt.transformDirection(e),this.setXYZ(t,Wt.x,Wt.y,Wt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=en(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=en(t,this.array)),t}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=en(t,this.array)),t}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=en(t,this.array)),t}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=en(t,this.array)),t}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,n){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),n=_t(n,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e*=this.itemSize,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=n,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Is=class extends Lt{constructor(e,t,i){super(new Uint16Array(e),t,i)}};var Sa=class extends Lt{constructor(e,t,i){super(new Uint32Array(e),t,i)}};var Ie=class extends Lt{constructor(e,t,i){super(new Float32Array(e),t,i)}},l0=new si,na=new R,kh=new R,Si=class{constructor(e=new R,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let i=this.center;t!==void 0?i.copy(t):l0.setFromPoints(e).getCenter(i);let n=0;for(let r=0,a=e.length;r<a;r++)n=Math.max(n,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;na.subVectors(e,this.center);let t=na.lengthSq();if(t>this.radius*this.radius){let i=Math.sqrt(t),n=(i-this.radius)*.5;this.center.addScaledVector(na,n/i),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(kh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(na.copy(e.center).add(kh)),this.expandByPoint(na.copy(e.center).sub(kh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},h0=0,Hi=new Pe,Oh=new dt,rr=new R,Ii=new si,sa=new si,Qt=new R,ze=class s extends nn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:h0++}),this.uuid=Vi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ng(e)?Sa:Is)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new Xe().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Hi.makeRotationFromQuaternion(e),this.applyMatrix4(Hi),this}rotateX(e){return Hi.makeRotationX(e),this.applyMatrix4(Hi),this}rotateY(e){return Hi.makeRotationY(e),this.applyMatrix4(Hi),this}rotateZ(e){return Hi.makeRotationZ(e),this.applyMatrix4(Hi),this}translate(e,t,i){return Hi.makeTranslation(e,t,i),this.applyMatrix4(Hi),this}scale(e,t,i){return Hi.makeScale(e,t,i),this.applyMatrix4(Hi),this}lookAt(e){return Oh.lookAt(e),Oh.updateMatrix(),this.applyMatrix4(Oh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(rr).negate(),this.translate(rr.x,rr.y,rr.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let i=[];for(let n=0,r=e.length;n<r;n++){let a=e[n];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ie(i,3))}else{let i=Math.min(e.length,t.count);for(let n=0;n<i;n++){let r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&Le("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new R(-1/0,-1/0,-1/0),new R(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,n=t.length;i<n;i++){let r=t[i];Ii.setFromBufferAttribute(r),this.morphTargetsRelative?(Qt.addVectors(this.boundingBox.min,Ii.min),this.boundingBox.expandByPoint(Qt),Qt.addVectors(this.boundingBox.max,Ii.max),this.boundingBox.expandByPoint(Qt)):(this.boundingBox.expandByPoint(Ii.min),this.boundingBox.expandByPoint(Ii.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Si);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new R,1/0);return}if(e){let i=this.boundingSphere.center;if(Ii.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Qt.addVectors(Ii.min,sa.min),Ii.expandByPoint(Qt),Qt.addVectors(Ii.max,sa.max),Ii.expandByPoint(Qt)):(Ii.expandByPoint(sa.min),Ii.expandByPoint(sa.max))}Ii.getCenter(i);let n=0;for(let r=0,a=e.count;r<a;r++)Qt.fromBufferAttribute(e,r),n=Math.max(n,i.distanceToSquared(Qt));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)Qt.fromBufferAttribute(o,l),c&&(rr.fromBufferAttribute(e,l),Qt.add(rr)),n=Math.max(n,i.distanceToSquared(Qt))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=t.position,n=t.normal,r=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new Lt(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[];for(let _=0;_<i.count;_++)o[_]=new R,c[_]=new R;let l=new R,h=new R,u=new R,d=new ie,f=new ie,g=new ie,x=new R,m=new R;function p(_,T,P){l.fromBufferAttribute(i,_),h.fromBufferAttribute(i,T),u.fromBufferAttribute(i,P),d.fromBufferAttribute(r,_),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,P),h.sub(l),u.sub(l),f.sub(d),g.sub(d);let I=1/(f.x*g.y-g.x*f.y);isFinite(I)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(I),o[_].add(x),o[T].add(x),o[P].add(x),c[_].add(m),c[T].add(m),c[P].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,N=P.count;for(let B=I,D=I+N;B<D;B+=3)p(e.getX(B+0),e.getX(B+1),e.getX(B+2))}let S=new R,b=new R,M=new R,w=new R;function A(_){M.fromBufferAttribute(n,_),w.copy(M);let T=o[_];S.copy(T),S.sub(M.multiplyScalar(M.dot(T))).normalize(),b.crossVectors(w,T);let I=b.dot(c[_])<0?-1:1;a.setXYZW(_,S.x,S.y,S.z,I)}for(let _=0,T=v.length;_<T;++_){let P=v[_],I=P.start,N=P.count;for(let B=I,D=I+N;B<D;B+=3)A(e.getX(B+0)),A(e.getX(B+1)),A(e.getX(B+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==t.count)i=new Lt(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let n=new R,r=new R,a=new R,o=new R,c=new R,l=new R,h=new R,u=new R;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),x=e.getX(d+1),m=e.getX(d+2);n.fromBufferAttribute(t,g),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,m),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,x),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=t.count;d<f;d+=3)n.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),h.subVectors(a,r),u.subVectors(n,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Qt.fromBufferAttribute(e,t),Qt.normalize(),e.setXYZ(t,Qt.x,Qt.y,Qt.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let x=0,m=c.length;x<m;x++){o.isInterleavedBufferAttribute?f=c[x]*o.data.stride+o.offset:f=c[x]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new Lt(d,h,u)}if(this.index===null)return Le("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,i=this.index.array,n=this.attributes;for(let o in n){let c=n[o],l=e(c,i);t.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let n={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(n[c]=h,r=!0)}r&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let n=e.attributes;for(let l in n){let h=n[l];this.setAttribute(l,h.clone(t))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},Nn=class{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Mu,this.updateRanges=[],this.version=0,this.uuid=Vi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,i){e*=this.stride,i*=t.stride;for(let n=0,r=this.stride;n<r;n++)this.array[e+n]=t.array[i+n];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(t,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Vi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}},fi=new R,Wi=class s{constructor(e,t,i,n=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=i,this.normalized=n}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,i=this.data.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let i=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(i=en(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=_t(i,this.array)),this.data.array[e*this.data.stride+this.offset+t]=i,this}setX(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=_t(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=en(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=en(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=en(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=en(t,this.array)),t}setXY(e,t,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this}setXYZ(e,t,i,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),n=_t(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this}setXYZW(e,t,i,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=_t(t,this.array),i=_t(i,this.array),n=_t(n,this.array),r=_t(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=i,this.data.array[e+2]=n,this.data.array[e+3]=r,this}clone(e){if(e===void 0){va("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return new Lt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new s(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){va("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let t=[];for(let i=0;i<this.count;i++){let n=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[n+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},Uh=new R,u0=new R,d0=new Xe,ni=class{constructor(e=new R(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,n){return this.normal.set(e,t,i),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){let n=Uh.subVectors(i,t).cross(u0.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,i=!0){let n=e.delta(Uh),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let i=t||d0.getNormalMatrix(e),n=this.coplanarPoint(Uh).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-n.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},f0=0,mi=class extends nn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:f0++}),this.uuid=Vi(),this.name="",this.type="Material",this.blending=Nr,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=du,this.blendDst=fu,this.blendEquation=Us,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ge(0,0,0),this.blendAlpha=0,this.depthFunc=mr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Op,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=hc,this.stencilZFail=hc,this.stencilZPass=hc,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let i=e[t];if(i===void 0){Le(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){Le(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(i):n&&n.isVector2&&i&&i.isVector2||n&&n.isEuler&&i&&i.isEuler||n&&n.isVector3&&i&&i.isVector3?n.copy(i):this[t]=i}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function n(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(t){let r=n(e.textures),a=n(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ge().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new ni().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new ie().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ie().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,i=null;if(t!==null){let n=t.length;i=new Array(n);for(let r=0;r!==n;++r)i[r]=t[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},wr=class extends mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},ar,ra=new R,or=new R,cr=new R,lr=new ie,aa=new ie,Jp=new Pe,zo=new R,oa=new R,Ho=new R,Cf=new ie,Bh=new ie,Pf=new ie,Ma=class extends dt{constructor(e=new wr){if(super(),this.isSprite=!0,this.type="Sprite",ar===void 0){ar=new ze;let t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Nn(t,5);ar.setIndex([0,1,2,0,2,3]),ar.setAttribute("position",new Wi(i,3,0,!1)),ar.setAttribute("uv",new Wi(i,2,3,!1))}this.geometry=ar,this.material=e,this.center=new ie(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ve('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),or.setFromMatrixScale(this.matrixWorld),Jp.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),cr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&or.multiplyScalar(-cr.z);let i=this.material.rotation,n,r;i!==0&&(r=Math.cos(i),n=Math.sin(i));let a=this.center;Go(zo.set(-.5,-.5,0),cr,a,or,n,r),Go(oa.set(.5,-.5,0),cr,a,or,n,r),Go(Ho.set(.5,.5,0),cr,a,or,n,r),Cf.set(0,0),Bh.set(1,0),Pf.set(1,1);let o=e.ray.intersectTriangle(zo,oa,Ho,!1,ra);if(o===null&&(Go(oa.set(-.5,.5,0),cr,a,or,n,r),Bh.set(0,1),o=e.ray.intersectTriangle(zo,Ho,oa,!1,ra),o===null))return;let c=e.ray.origin.distanceTo(ra);c<e.near||c>e.far||t.push({distance:c,point:ra.clone(),uv:In.getInterpolation(ra,zo,oa,Ho,Cf,Bh,Pf,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}};function Go(s,e,t,i,n,r){lr.subVectors(s,t).addScalar(.5).multiply(i),n!==void 0?(aa.x=r*lr.x-n*lr.y,aa.y=n*lr.x+r*lr.y):aa.copy(lr),s.copy(e),s.x+=aa.x,s.y+=aa.y,s.applyMatrix4(Jp)}var Cn=new R,zh=new R,Vo=new R,Wo=new R,rs=class{constructor(e=new R,t=new R(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,i,n){zh.copy(e).add(t).multiplyScalar(.5),Vo.copy(t).sub(e).normalize(),Wo.copy(this.origin).sub(zh);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Vo),o=Wo.dot(this.direction),c=-Wo.dot(Vo),l=Wo.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let x=1/h;u*=x,d*=x,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),n&&n.copy(zh).addScaledVector(Vo,d),f}intersectSphere(e,t){if(e.radius<0)return null;Cn.subVectors(e.center,this.origin);let i=Cn.dot(this.direction),n=Cn.dot(Cn)-i*i,r=e.radius*e.radius;if(n>r)return null;let a=Math.sqrt(r-n),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){let i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,n,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,n=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,n=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>n||((r>i||isNaN(i))&&(i=r),(a<n||isNaN(n))&&(n=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>n)||((o>i||i!==i)&&(i=o),(c<n||n!==n)&&(n=c),n<0)?null:this.at(i>=0?i:n,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,i,n,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,m=t.z-a.z,p=i.x-a.x,v=i.y-a.y,S=i.z-a.z,b=Math.abs(c),M=Math.abs(l),w=Math.abs(h),A,_,T,P,I,N,B,D,O,V,j,ne;if(b>=M&&b>=w?(T=c,N=u,O=g,ne=p,c>=0?(A=l,_=h,P=d,I=f,B=x,D=m,V=v,j=S):(A=h,_=l,P=f,I=d,B=m,D=x,V=S,j=v)):M>=w?(T=l,N=d,O=x,ne=v,l>=0?(A=h,_=c,P=f,I=u,B=m,D=g,V=S,j=p):(A=c,_=h,P=u,I=f,B=g,D=m,V=p,j=S)):(T=h,N=f,O=m,ne=S,h>=0?(A=c,_=l,P=u,I=d,B=g,D=x,V=p,j=v):(A=l,_=c,P=d,I=u,B=x,D=g,V=v,j=p)),T===0)return null;let q=A/T,Z=_/T,Q=1/T,Re=P-q*N,Me=I-Z*N,ft=B-q*O,nt=D-Z*O,lt=V-q*ne,J=j-Z*ne,ee=lt*nt-J*ft,xe=Re*J-Me*lt,We=ft*Me-nt*Re;if(n){if(ee<0||xe<0||We<0)return null}else if((ee<0||xe<0||We<0)&&(ee>0||xe>0||We>0))return null;let Se=ee+xe+We;if(Se===0)return null;let qe=Q*(ee*N+xe*O+We*ne);return(Se>0?qe<0:qe>0)?null:this.at(qe/Se,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},zt=class extends mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ge(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.combine=pu,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},If=new Pe,Ss=new rs,qo=new Si,Df=new R,jo=new R,Xo=new R,Ko=new R,Hh=new R,Jo=new R,Lf=new R,Yo=new R,ke=class extends dt{constructor(e=new ze,t=new zt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let i=this.geometry,n=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(r&&o){Jo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(Hh.fromBufferAttribute(u,e),a?Jo.addScaledVector(Hh,h):Jo.addScaledVector(Hh.sub(t),h))}t.add(Jo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.material,r=this.matrixWorld;n!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),qo.copy(i.boundingSphere),qo.applyMatrix4(r),Ss.copy(e.ray).recast(e.near),!(qo.containsPoint(Ss.origin)===!1&&(Ss.intersectSphere(qo,Df)===null||Ss.origin.distanceToSquared(Df)>(e.far-e.near)**2))&&(If.copy(r).invert(),Ss.copy(e.ray).applyMatrix4(If),!(i.boundingBox!==null&&Ss.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Ss)))}_computeIntersections(e,t,i){let n,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,M=S;b<M;b+=3){let w=o.getX(b),A=o.getX(b+1),_=o.getX(b+2);n=Zo(this,p,e,i,l,h,u,w,A,_),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=o.getX(m),S=o.getX(m+1),b=o.getX(m+2);n=Zo(this,a,e,i,l,h,u,v,S,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,x=d.length;g<x;g++){let m=d[g],p=a[m.materialIndex],v=Math.max(m.start,f.start),S=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=v,M=S;b<M;b+=3){let w=b,A=b+1,_=b+2;n=Zo(this,p,e,i,l,h,u,w,A,_),n&&(n.faceIndex=Math.floor(b/3),n.face.materialIndex=m.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(c.count,f.start+f.count);for(let m=g,p=x;m<p;m+=3){let v=m,S=m+1,b=m+2;n=Zo(this,a,e,i,l,h,u,v,S,b),n&&(n.faceIndex=Math.floor(m/3),t.push(n))}}}};function p0(s,e,t,i,n,r,a,o){let c;if(e.side===Yt?c=i.intersectTriangle(a,r,n,!0,o):c=i.intersectTriangle(n,r,a,e.side===ji,o),c===null)return null;Yo.copy(o),Yo.applyMatrix4(s.matrixWorld);let l=t.ray.origin.distanceTo(Yo);return l<t.near||l>t.far?null:{distance:l,point:Yo.clone(),object:s}}function Zo(s,e,t,i,n,r,a,o,c,l){s.getVertexPosition(o,jo),s.getVertexPosition(c,Xo),s.getVertexPosition(l,Ko);let h=p0(s,e,t,i,jo,Xo,Ko,Lf);if(h){let u=new R;In.getBarycoord(Lf,jo,Xo,Ko,u),n&&(h.uv=In.getInterpolatedAttribute(n,o,c,l,u,new ie)),r&&(h.uv1=In.getInterpolatedAttribute(r,o,c,l,u,new ie)),a&&(h.normal=In.getInterpolatedAttribute(a,o,c,l,u,new R),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new R,materialIndex:0};In.getNormal(jo,Xo,Ko,d.normal),h.face=d,h.barycoord=u}return h}var ca=new ct,Nf=new ct,Ff=new ct,m0=new ct,kf=new Pe,$o=new R,Gh=new Si,Of=new Pe,Vh=new rs,Fn=class extends ke{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Yh,this.bindMatrix=new Pe,this.bindMatrixInverse=new Pe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new si),this.boundingBox.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingBox.expandByPoint($o)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Si),this.boundingSphere.makeEmpty();let t=e.getAttribute("position");for(let i=0;i<t.count;i++)this.getVertexPosition(i,$o),this.boundingSphere.expandByPoint($o)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){let i=this.material,n=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gh.copy(this.boundingSphere),Gh.applyMatrix4(n),e.ray.intersectsSphere(Gh)!==!1&&(Of.copy(n).invert(),Vh.copy(e.ray).applyMatrix4(Of),!(this.boundingBox!==null&&Vh.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Vh)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new ct,t=this.geometry.attributes.skinWeight;for(let i=0,n=t.count;i<n;i++){e.fromBufferAttribute(t,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Yh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Dp?this.bindMatrixInverse.copy(this.bindMatrix).invert():Le("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){let i=this.skeleton,n=this.geometry;Nf.fromBufferAttribute(n.attributes.skinIndex,e),Ff.fromBufferAttribute(n.attributes.skinWeight,e),t.isVector4?(ca.copy(t),t.set(0,0,0,0)):(ca.set(...t,1),t.set(0,0,0)),ca.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=Ff.getComponent(r);if(a!==0){let o=Nf.getComponent(r);kf.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),t.addScaledVector(m0.copy(ca).applyMatrix4(kf),a)}}return t.isVector4&&(t.w=ca.w),t.applyMatrix4(this.bindMatrixInverse)}},Er=class extends dt{constructor(){super(),this.isBone=!0,this.type="Bone"}},kn=class extends Xt{constructor(e=null,t=1,i=1,n,r,a,o,c,l=Bt,h=Bt,u,d){super(null,a,o,c,l,h,n,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Uf=new Pe,g0=new Pe,wa=class s{constructor(e=[],t=[]){this.uuid=Vi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){let e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){Le("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,n=this.bones.length;i<n;i++)this.boneInverses.push(new Pe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){let i=new Pe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,t=this.boneInverses,i=this.boneMatrices,n=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:g0;Uf.multiplyMatrices(o,t[r]),Uf.toArray(i,r*16)}n!==null&&(n.needsUpdate=!0)}clone(){return new s(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let t=new Float32Array(e*e*4);t.set(this.boneMatrices);let i=new kn(t,e,e,ki,Fi);return i.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=i,this}getBoneByName(e){for(let t=0,i=this.bones.length;t<i;t++){let n=this.bones[t];if(n.name===e)return n}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let i=0,n=e.bones.length;i<n;i++){let r=e.bones[i],a=t[r];a===void 0&&(Le("Skeleton: No bone found with UUID:",r),a=new Er),this.bones.push(a),this.boneInverses.push(new Pe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let t=this.bones,i=this.boneInverses;for(let n=0,r=t.length;n<r;n++){let a=t[n];e.bones.push(a.uuid);let o=i[n];e.boneInverses.push(o.toArray())}return e}},On=class extends Lt{constructor(e,t,i,n=1){super(e,t,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},hr=new Pe,Bf=new Pe,Qo=[],zf=new si,b0=new Pe,la=new ke,ha=new Si,Kt=class extends ke{constructor(e,t,i){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new On(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let n=0;n<i;n++)this.setMatrixAt(n,b0)}computeBoundingBox(){let e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new si),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),zf.copy(e.boundingBox).applyMatrix4(hr),this.boundingBox.union(zf)}computeBoundingSphere(){let e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Si),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<t;i++)this.getMatrixAt(i,hr),ha.copy(e.boundingSphere).applyMatrix4(hr),this.boundingSphere.union(ha)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){let i=t.morphTargetInfluences,n=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=n[a+o]}raycast(e,t){let i=this.matrixWorld,n=this.count;if(la.geometry=this.geometry,la.material=this.material,la.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ha.copy(this.boundingSphere),ha.applyMatrix4(i),e.ray.intersectsSphere(ha)!==!1))for(let r=0;r<n;r++){this.getMatrixAt(r,hr),Bf.multiplyMatrices(i,hr),la.matrixWorld=Bf,la.raycast(e,Qo);for(let a=0,o=Qo.length;a<o;a++){let c=Qo[a];c.instanceId=r,c.object=this,t.push(c)}Qo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new On(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){let i=t.morphTargetInfluences,n=i.length+1;this.morphTexture===null&&(this.morphTexture=new kn(new Float32Array(n*this.count),n,this.count,Kc,Fi));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=n*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ms=new Si,x0=new ie(.5,.5),ec=new R,Tr=class{constructor(e=new ni,t=new ni,i=new ni,n=new ni,r=new ni,a=new ni){this.planes=[e,t,i,n,r,a]}set(e,t,i,n,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(n),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=tn,i=!1){let n=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],x=r[9],m=r[10],p=r[11],v=r[12],S=r[13],b=r[14],M=r[15];if(n[0].setComponents(l-a,f-h,p-g,M-v).normalize(),n[1].setComponents(l+a,f+h,p+g,M+v).normalize(),n[2].setComponents(l+o,f+u,p+x,M+S).normalize(),n[3].setComponents(l-o,f-u,p-x,M-S).normalize(),i)n[4].setComponents(c,d,m,b).normalize(),n[5].setComponents(l-c,f-d,p-m,M-b).normalize();else if(n[4].setComponents(l-c,f-d,p-m,M-b).normalize(),t===tn)n[5].setComponents(l+c,f+d,p+m,M+b).normalize();else if(t===br)n[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ms.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ms.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ms)}intersectsSprite(e){Ms.center.set(0,0,0);let t=x0.distanceTo(e.center);return Ms.radius=.7071067811865476+t,Ms.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ms)}intersectsSphere(e){let t=this.planes,i=e.center,n=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(i)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let i=0;i<6;i++){let n=t[i];if(ec.x=n.normal.x>0?e.max.x:e.min.x,ec.y=n.normal.y>0?e.max.y:e.min.y,ec.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(ec)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Di=class extends mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ge(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},Sc=new R,Mc=new R,Hf=new Pe,ua=new rs,tc=new Si,Wh=new R,Gf=new R,gi=class extends dt{constructor(e=new ze,t=new Di){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[0];for(let n=1,r=t.count;n<r;n++)Sc.fromBufferAttribute(t,n-1),Mc.fromBufferAttribute(t,n),i[n]=i[n-1],i[n]+=Sc.distanceTo(Mc);e.setAttribute("lineDistance",new Ie(i,1))}else Le("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),tc.copy(i.boundingSphere),tc.applyMatrix4(n),tc.radius+=r,e.ray.intersectsSphere(tc)===!1)return;Hf.copy(n).invert(),ua.copy(e.ray).applyMatrix4(Hf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=h.getX(x),v=h.getX(x+1),S=ic(this,e,ua,c,p,v,x);S&&t.push(S)}if(this.isLineLoop){let x=h.getX(g-1),m=h.getX(f),p=ic(this,e,ua,c,x,m,g-1);p&&t.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let x=f,m=g-1;x<m;x+=l){let p=ic(this,e,ua,c,x,x+1,x);p&&t.push(p)}if(this.isLineLoop){let x=ic(this,e,ua,c,g-1,f,g-1);x&&t.push(x)}}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function ic(s,e,t,i,n,r,a){let o=s.geometry.attributes.position;if(Sc.fromBufferAttribute(o,n),Mc.fromBufferAttribute(o,r),t.distanceSqToSegment(Sc,Mc,Wh,Gf)>i)return;Wh.applyMatrix4(s.matrixWorld);let l=e.ray.origin.distanceTo(Wh);if(!(l<e.near||l>e.far))return{distance:l,point:Gf.clone().applyMatrix4(s.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:s}}var Vf=new R,Wf=new R,Ea=class extends gi{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let t=e.attributes.position,i=[];for(let n=0,r=t.count;n<r;n+=2)Vf.fromBufferAttribute(t,n),Wf.fromBufferAttribute(t,n+1),i[n]=n===0?0:i[n-1],i[n+1]=i[n]+Vf.distanceTo(Wf);e.setAttribute("lineDistance",new Ie(i,1))}else Le("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Ta=class extends gi{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}},mn=class extends mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ge(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},qf=new Pe,$h=new rs,nc=new Si,sc=new R,Un=class extends dt{constructor(e=new ze,t=new mn){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let i=this.geometry,n=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nc.copy(i.boundingSphere),nc.applyMatrix4(n),nc.radius+=r,e.ray.intersectsSphere(nc)===!1)return;qf.copy(n).invert(),$h.copy(e.ray).applyMatrix4(qf);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,x=f;g<x;g++){let m=l.getX(g);sc.fromBufferAttribute(u,m),jf(sc,m,c,n,e,t,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,x=f;g<x;g++)sc.fromBufferAttribute(u,g),jf(sc,g,c,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){let n=t[i[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=n.length;r<a;r++){let o=n[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function jf(s,e,t,i,n,r,a){let o=$h.distanceSqToPoint(s);if(o<t){let c=new R;$h.closestPointToPoint(s,c),c.applyMatrix4(i);let l=n.ray.origin.distanceTo(c);if(l<n.near||l>n.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Aa=class extends Xt{constructor(e=[],t=ds,i,n,r,a,o,c,l,h){super(e,t,i,n,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},bi=class extends Xt{constructor(e,t,i,n,r,a,o,c,l){super(e,t,i,n,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}};var gn=class extends Xt{constructor(e,t,i=Ni,n,r,a,o=Bt,c=Bt,l,h=pn,u=1){if(h!==pn&&h!==fs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:t,depth:u};super(d,n,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new _r(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},wc=class extends gn{constructor(e,t=Ni,i=ds,n,r,a=Bt,o=Bt,c,l=pn){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,i,n,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Ra=class extends Xt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Mt=class s extends ze{constructor(e=1,t=1,i=1,n=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:n,heightSegments:r,depthSegments:a};let o=this;n=Math.floor(n),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,t,e,a,r,0),g("z","y","x",1,-1,i,t,-e,a,r,1),g("x","z","y",1,1,e,i,t,n,a,2),g("x","z","y",1,-1,e,i,-t,n,a,3),g("x","y","z",1,-1,e,t,i,n,r,4),g("x","y","z",-1,-1,e,t,-i,n,r,5),this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2));function g(x,m,p,v,S,b,M,w,A,_,T){let P=b/A,I=M/_,N=b/2,B=M/2,D=w/2,O=A+1,V=_+1,j=0,ne=0,q=new R;for(let Z=0;Z<V;Z++){let Q=Z*I-B;for(let Re=0;Re<O;Re++){let Me=Re*P-N;q[x]=Me*v,q[m]=Q*S,q[p]=D,l.push(q.x,q.y,q.z),q[x]=0,q[m]=0,q[p]=w>0?1:-1,h.push(q.x,q.y,q.z),u.push(Re/A),u.push(1-Z/_),j+=1}}for(let Z=0;Z<_;Z++)for(let Q=0;Q<A;Q++){let Re=d+Q+O*Z,Me=d+Q+O*(Z+1),ft=d+(Q+1)+O*(Z+1),nt=d+(Q+1)+O*Z;c.push(Re,Me,nt),c.push(Me,ft,nt),ne+=6}o.addGroup(f,ne,T),f+=ne,d+=j}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var sn=class s extends ze{constructor(e=1,t=32,i=0,n=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:i,thetaLength:n},t=Math.max(3,t);let r=[],a=[],o=[],c=[],l=new R,h=new ie;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){let f=i+u/t*n;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("normal",new Ie(o,3)),this.setAttribute("uv",new Ie(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.segments,e.thetaStart,e.thetaLength)}},wt=class s extends ze{constructor(e=1,t=1,i=1,n=32,r=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:n,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:c};let l=this;n=Math.floor(n),r=Math.floor(r);let h=[],u=[],d=[],f=[],g=0,x=[],m=i/2,p=0;v(),a===!1&&(e>0&&S(!0),t>0&&S(!1)),this.setIndex(h),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function v(){let b=new R,M=new R,w=0,A=(t-e)/i;for(let _=0;_<=r;_++){let T=[],P=_/r,I=P*(t-e)+e;for(let N=0;N<=n;N++){let B=N/n,D=B*c+o,O=Math.sin(D),V=Math.cos(D);M.x=I*O,M.y=-P*i+m,M.z=I*V,u.push(M.x,M.y,M.z),b.set(O,A,V).normalize(),d.push(b.x,b.y,b.z),f.push(B,1-P),T.push(g++)}x.push(T)}for(let _=0;_<n;_++)for(let T=0;T<r;T++){let P=x[T][_],I=x[T+1][_],N=x[T+1][_+1],B=x[T][_+1];(e>0||T!==0)&&(h.push(P,I,B),w+=3),(t>0||T!==r-1)&&(h.push(I,N,B),w+=3)}l.addGroup(p,w,0),p+=w}function S(b){let M=g,w=new ie,A=new R,_=0,T=b===!0?e:t,P=b===!0?1:-1;for(let N=1;N<=n;N++)u.push(0,m*P,0),d.push(0,P,0),f.push(.5,.5),g++;let I=g;for(let N=0;N<=n;N++){let D=N/n*c+o,O=Math.cos(D),V=Math.sin(D);A.x=T*V,A.y=m*P,A.z=T*O,u.push(A.x,A.y,A.z),d.push(0,P,0),w.x=O*.5+.5,w.y=V*.5*P+.5,f.push(w.x,w.y),g++}for(let N=0;N<n;N++){let B=M+N,D=I+N;b===!0?h.push(D,D+1,B):h.push(D+1,D,B),_+=3}l.addGroup(p,_,b===!0?1:2),p+=_}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},rn=class s extends wt{constructor(e=1,t=1,i=32,n=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,i,n,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:i,heightSegments:n,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new s(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Ec=class s extends ze{constructor(e=[],t=[],i=1,n=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:i,detail:n};let r=[],a=[];o(n),l(i),h(),this.setAttribute("position",new Ie(r,3)),this.setAttribute("normal",new Ie(r.slice(),3)),this.setAttribute("uv",new Ie(a,2)),n===0?this.computeVertexNormals():this.normalizeNormals();function o(v){let S=new R,b=new R,M=new R;for(let w=0;w<t.length;w+=3)f(t[w+0],S),f(t[w+1],b),f(t[w+2],M),c(S,b,M,v)}function c(v,S,b,M){let w=M+1,A=[];for(let _=0;_<=w;_++){A[_]=[];let T=v.clone().lerp(b,_/w),P=S.clone().lerp(b,_/w),I=w-_;for(let N=0;N<=I;N++)N===0&&_===w?A[_][N]=T:A[_][N]=T.clone().lerp(P,N/I)}for(let _=0;_<w;_++)for(let T=0;T<2*(w-_)-1;T++){let P=Math.floor(T/2);T%2===0?(d(A[_][P+1]),d(A[_+1][P]),d(A[_][P])):(d(A[_][P+1]),d(A[_+1][P+1]),d(A[_+1][P]))}}function l(v){let S=new R;for(let b=0;b<r.length;b+=3)S.x=r[b+0],S.y=r[b+1],S.z=r[b+2],S.normalize().multiplyScalar(v),r[b+0]=S.x,r[b+1]=S.y,r[b+2]=S.z}function h(){let v=new R;for(let S=0;S<r.length;S+=3){v.x=r[S+0],v.y=r[S+1],v.z=r[S+2];let b=m(v)/2/Math.PI+.5,M=p(v)/Math.PI+.5;a.push(b,1-M)}g(),u()}function u(){for(let v=0;v<a.length;v+=6){let S=a[v+0],b=a[v+2],M=a[v+4],w=Math.max(S,b,M),A=Math.min(S,b,M);w>.9&&A<.1&&(S<.2&&(a[v+0]+=1),b<.2&&(a[v+2]+=1),M<.2&&(a[v+4]+=1))}}function d(v){r.push(v.x,v.y,v.z)}function f(v,S){let b=v*3;S.x=e[b+0],S.y=e[b+1],S.z=e[b+2]}function g(){let v=new R,S=new R,b=new R,M=new R,w=new ie,A=new ie,_=new ie;for(let T=0,P=0;T<r.length;T+=9,P+=6){v.set(r[T+0],r[T+1],r[T+2]),S.set(r[T+3],r[T+4],r[T+5]),b.set(r[T+6],r[T+7],r[T+8]),w.set(a[P+0],a[P+1]),A.set(a[P+2],a[P+3]),_.set(a[P+4],a[P+5]),M.copy(v).add(S).add(b).divideScalar(3);let I=m(M);x(w,P+0,v,I),x(A,P+2,S,I),x(_,P+4,b,I)}}function x(v,S,b,M){M<0&&v.x===1&&(a[S]=v.x-1),b.x===0&&b.z===0&&(a[S]=M/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function p(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.vertices,e.indices,e.radius,e.detail)}};var Li=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){Le("Curve: .getPoint() not implemented.")}getPointAt(e,t){let i=this.getUtoTmapping(e);return this.getPoint(i,t)}getPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return t}getSpacedPoints(e=5){let t=[];for(let i=0;i<=e;i++)t.push(this.getPointAt(i/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],i,n=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)i=this.getPoint(a/e),r+=i.distanceTo(n),t.push(r),n=i;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){let i=this.getLengths(),n=0,r=i.length,a;t?a=t:a=e*i[r-1];let o=0,c=r-1,l;for(;o<=c;)if(n=Math.floor(o+(c-o)/2),l=i[n]-a,l<0)o=n+1;else if(l>0)c=n-1;else{c=n;break}if(n=c,i[n]===a)return n/(r-1);let h=i[n],d=i[n+1]-h,f=(a-h)/d;return(n+f)/(r-1)}getTangent(e,t){let n=e-1e-4,r=e+1e-4;n<0&&(n=0),r>1&&(r=1);let a=this.getPoint(n),o=this.getPoint(r),c=t||(a.isVector2?new ie:new R);return c.copy(o).sub(a).normalize(),c}getTangentAt(e,t){let i=this.getUtoTmapping(e);return this.getTangent(i,t)}computeFrenetFrames(e,t=!1){let i=new R,n=[],r=[],a=[],o=new R,c=new Pe;for(let f=0;f<=e;f++){let g=f/e;n[f]=this.getTangentAt(g,new R)}r[0]=new R,a[0]=new R;let l=Number.MAX_VALUE,h=Math.abs(n[0].x),u=Math.abs(n[0].y),d=Math.abs(n[0].z);h<=l&&(l=h,i.set(1,0,0)),u<=l&&(l=u,i.set(0,1,0)),d<=l&&i.set(0,0,1),o.crossVectors(n[0],i).normalize(),r[0].crossVectors(n[0],o),a[0].crossVectors(n[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(n[f-1],n[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(et(n[f-1].dot(n[f]),-1,1));r[f].applyMatrix4(c.makeRotationAxis(o,g))}a[f].crossVectors(n[f],r[f])}if(t===!0){let f=Math.acos(et(r[0].dot(r[e]),-1,1));f/=e,n[0].dot(o.crossVectors(r[0],r[e]))>0&&(f=-f);for(let g=1;g<=e;g++)r[g].applyMatrix4(c.makeRotationAxis(n[g],f*g)),a[g].crossVectors(n[g],r[g])}return{tangents:n,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},as=class extends Li{constructor(e=0,t=0,i=1,n=1,r=0,a=Math.PI*2,o=!1,c=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=i,this.yRadius=n,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=c}getPoint(e,t=new ie){let i=t,n=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=n;for(;r>n;)r-=n;r<Number.EPSILON&&(a?r=0:r=n),this.aClockwise===!0&&!a&&(r===n?r=-n:r=r-n);let o=this.aStartAngle+e*r,c=this.aX+this.xRadius*Math.cos(o),l=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=c-this.aX,f=l-this.aY;c=d*h-f*u+this.aX,l=d*u+f*h+this.aY}return i.set(c,l)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Tc=class extends as{constructor(e,t,i,n,r,a){super(e,t,i,i,n,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function Au(){let s=0,e=0,t=0,i=0;function n(r,a,o,c){s=r,e=o,t=-3*r+3*a-2*o-c,i=2*r-2*a+o+c}return{initCatmullRom:function(r,a,o,c,l){n(a,o,l*(o-r),l*(c-a))},initNonuniformCatmullRom:function(r,a,o,c,l,h,u){let d=(a-r)/l-(o-r)/(l+h)+(o-a)/h,f=(o-a)/h-(c-a)/(h+u)+(c-o)/u;d*=h,f*=h,n(a,o,d,f)},calc:function(r){let a=r*r,o=a*r;return s+e*r+t*a+i*o}}}var Xf=new R,Kf=new R,qh=new Au,jh=new Au,Xh=new Au,os=class extends Li{constructor(e=[],t=!1,i="centripetal",n=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=i,this.tension=n}getPoint(e,t=new R){let i=t,n=this.points,r=n.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),c=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:c===0&&o===r-1&&(o=r-2,c=1);let l,h;this.closed||o>0?l=n[(o-1)%r]:(Kf.subVectors(n[0],n[1]).add(n[0]),l=Kf);let u=n[o%r],d=n[(o+1)%r];if(this.closed||o+2<r?h=n[(o+2)%r]:(Xf.subVectors(n[r-1],n[r-2]).add(n[r-1]),h=Xf),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(l.distanceToSquared(u),f),x=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);x<1e-4&&(x=1),g<1e-4&&(g=x),m<1e-4&&(m=x),qh.initNonuniformCatmullRom(l.x,u.x,d.x,h.x,g,x,m),jh.initNonuniformCatmullRom(l.y,u.y,d.y,h.y,g,x,m),Xh.initNonuniformCatmullRom(l.z,u.z,d.z,h.z,g,x,m)}else this.curveType==="catmullrom"&&(qh.initCatmullRom(l.x,u.x,d.x,h.x,this.tension),jh.initCatmullRom(l.y,u.y,d.y,h.y,this.tension),Xh.initCatmullRom(l.z,u.z,d.z,h.z,this.tension));return i.set(qh.calc(c),jh.calc(c),Xh.calc(c)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new R().fromArray(n))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Jf(s,e,t,i,n){let r=(i-e)*.5,a=(n-t)*.5,o=s*s,c=s*o;return(2*t-2*i+r+a)*c+(-3*t+3*i-2*r-a)*o+r*s+t}function v0(s,e){let t=1-s;return t*t*e}function _0(s,e){return 2*(1-s)*s*e}function y0(s,e){return s*s*e}function ma(s,e,t,i){return v0(s,e)+_0(s,t)+y0(s,i)}function S0(s,e){let t=1-s;return t*t*t*e}function M0(s,e){let t=1-s;return 3*t*t*s*e}function w0(s,e){return 3*(1-s)*s*s*e}function E0(s,e){return s*s*s*e}function ga(s,e,t,i,n){return S0(s,e)+M0(s,t)+w0(s,i)+E0(s,n)}var Ca=class extends Li{constructor(e=new ie,t=new ie,i=new ie,n=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new ie){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ga(e,n.x,r.x,a.x,o.x),ga(e,n.y,r.y,a.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ac=class extends Li{constructor(e=new R,t=new R,i=new R,n=new R){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=i,this.v3=n}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ga(e,n.x,r.x,a.x,o.x),ga(e,n.y,r.y,a.y,o.y),ga(e,n.z,r.z,a.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Pa=class extends Li{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Rc=class extends Li{constructor(e=new R,t=new R){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new R){let i=t;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new R){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Ia=class extends Li{constructor(e=new ie,t=new ie,i=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new ie){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(ma(e,n.x,r.x,a.x),ma(e,n.y,r.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Da=class extends Li{constructor(e=new R,t=new R,i=new R){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=i}getPoint(e,t=new R){let i=t,n=this.v0,r=this.v1,a=this.v2;return i.set(ma(e,n.x,r.x,a.x),ma(e,n.y,r.y,a.y),ma(e,n.z,r.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},La=class extends Li{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){let i=t,n=this.points,r=(n.length-1)*e,a=Math.floor(r),o=r-a,c=n[a===0?a:a-1],l=n[a],h=n[a>n.length-2?n.length-1:a+1],u=n[a>n.length-3?n.length-1:a+2];return i.set(Jf(o,c.x,l.x,h.x,u.x),Jf(o,c.y,l.y,h.y,u.y)),i}copy(e){super.copy(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,i=this.points.length;t<i;t++){let n=this.points[t];e.points.push(n.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,i=e.points.length;t<i;t++){let n=e.points[t];this.points.push(new ie().fromArray(n))}return this}},Cc=Object.freeze({__proto__:null,ArcCurve:Tc,CatmullRomCurve3:os,CubicBezierCurve:Ca,CubicBezierCurve3:Ac,EllipseCurve:as,LineCurve:Pa,LineCurve3:Rc,QuadraticBezierCurve:Ia,QuadraticBezierCurve3:Da,SplineCurve:La}),Pc=class extends Li{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Cc[i](t,e))}return this}getPoint(e,t){let i=e*this.getLength(),n=this.getCurveLengths(),r=0;for(;r<n.length;){if(n[r]>=i){let a=n[r]-i,o=this.curves[r],c=o.getLength(),l=c===0?0:1-a/c;return o.getPointAt(l,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let i=0,n=this.curves.length;i<n;i++)t+=this.curves[i].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let i=0;i<=e;i++)t.push(this.getPoint(i/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],i;for(let n=0,r=this.curves;n<r.length;n++){let a=r[n],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,c=a.getPoints(o);for(let l=0;l<c.length;l++){let h=c[l];i&&i.equals(h)||(t.push(h),i=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(n.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,i=this.curves.length;t<i;t++){let n=this.curves[t];e.curves.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,i=e.curves.length;t<i;t++){let n=e.curves[t];this.curves.push(new Cc[n.type]().fromJSON(n))}return this}},Na=class extends Pc{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,i=e.length;t<i;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let i=new Pa(this.currentPoint.clone(),new ie(e,t));return this.curves.push(i),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,i,n){let r=new Ia(this.currentPoint.clone(),new ie(e,t),new ie(i,n));return this.curves.push(r),this.currentPoint.set(i,n),this}bezierCurveTo(e,t,i,n,r,a){let o=new Ca(this.currentPoint.clone(),new ie(e,t),new ie(i,n),new ie(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),i=new La(t);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,i,n,r,a){let o=this.currentPoint.x,c=this.currentPoint.y;return this.absarc(e+o,t+c,i,n,r,a),this}absarc(e,t,i,n,r,a){return this.absellipse(e,t,i,i,n,r,a),this}ellipse(e,t,i,n,r,a,o,c){let l=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+l,t+h,i,n,r,a,o,c),this}absellipse(e,t,i,n,r,a,o,c){let l=new as(e,t,i,n,r,a,o,c);if(this.curves.length>0){let u=l.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(l);let h=l.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Ar=class extends Na{constructor(e){super(e),this.uuid=Vi(),this.type="Shape",this.holes=[]}getPointsHoles(e){let t=[];for(let i=0,n=this.holes.length;i<n;i++)t[i]=this.holes[i].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(n.clone())}return this}toJSON(){let e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,i=this.holes.length;t<i;t++){let n=this.holes[t];e.holes.push(n.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,i=e.holes.length;t<i;t++){let n=e.holes[t];this.holes.push(new Na().fromJSON(n))}return this}};function T0(s,e,t=2){let i=e&&e.length,n=i?e[0]*t:s.length,r=Yp(s,0,n,t,!0),a=[];if(!r||r.next===r.prev)return a;let o,c,l;if(i&&(r=I0(s,e,r,t)),s.length>80*t){o=s[0],c=s[1];let h=o,u=c;for(let d=t;d<n;d+=t){let f=s[d],g=s[d+1];f<o&&(o=f),g<c&&(c=g),f>h&&(h=f),g>u&&(u=g)}l=Math.max(h-o,u-c),l=l!==0?32767/l:0}return Fa(r,a,t,o,c,l,0),a}function Yp(s,e,t,i,n){let r;if(n===G0(s,e,t,i)>0)for(let a=e;a<t;a+=i)r=Yf(a/i|0,s[a],s[a+1],r);else for(let a=t-i;a>=e;a-=i)r=Yf(a/i|0,s[a],s[a+1],r);return r&&Rr(r,r.next)&&(Oa(r),r=r.next),r}function Ds(s,e){if(!s)return s;e||(e=s);let t=s,i;do if(i=!1,!t.steiner&&(Rr(t,t.next)||Dt(t.prev,t,t.next)===0)){if(Oa(t),t=e=t.prev,t===t.next)break;i=!0}else t=t.next;while(i||t!==e);return e}function Fa(s,e,t,i,n,r,a){if(!s)return;!a&&r&&k0(s,i,n,r);let o=s;for(;s.prev!==s.next;){let c=s.prev,l=s.next;if(r?R0(s,i,n,r):A0(s)){e.push(c.i,s.i,l.i),Oa(s),s=l.next,o=l.next;continue}if(s=l,s===o){a?a===1?(s=C0(Ds(s),e),Fa(s,e,t,i,n,r,2)):a===2&&P0(s,e,t,i,n,r):Fa(Ds(s),e,t,i,n,r,1);break}}}function A0(s){let e=s.prev,t=s,i=s.next;if(Dt(e,t,i)>=0)return!1;let n=e.x,r=t.x,a=i.x,o=e.y,c=t.y,l=i.y,h=Math.min(n,r,a),u=Math.min(o,c,l),d=Math.max(n,r,a),f=Math.max(o,c,l),g=i.next;for(;g!==e;){if(g.x>=h&&g.x<=d&&g.y>=u&&g.y<=f&&da(n,o,r,c,a,l,g.x,g.y)&&Dt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function R0(s,e,t,i){let n=s.prev,r=s,a=s.next;if(Dt(n,r,a)>=0)return!1;let o=n.x,c=r.x,l=a.x,h=n.y,u=r.y,d=a.y,f=Math.min(o,c,l),g=Math.min(h,u,d),x=Math.max(o,c,l),m=Math.max(h,u,d),p=Qh(f,g,e,t,i),v=Qh(x,m,e,t,i),S=s.prevZ,b=s.nextZ;for(;S&&S.z>=p&&b&&b.z<=v;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&da(o,h,c,u,l,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0||(S=S.prevZ,b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==n&&b!==a&&da(o,h,c,u,l,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0))return!1;b=b.nextZ}for(;S&&S.z>=p;){if(S.x>=f&&S.x<=x&&S.y>=g&&S.y<=m&&S!==n&&S!==a&&da(o,h,c,u,l,d,S.x,S.y)&&Dt(S.prev,S,S.next)>=0)return!1;S=S.prevZ}for(;b&&b.z<=v;){if(b.x>=f&&b.x<=x&&b.y>=g&&b.y<=m&&b!==n&&b!==a&&da(o,h,c,u,l,d,b.x,b.y)&&Dt(b.prev,b,b.next)>=0)return!1;b=b.nextZ}return!0}function C0(s,e){let t=s;do{let i=t.prev,n=t.next.next;!Rr(i,n)&&$p(i,t,t.next,n)&&ka(i,n)&&ka(n,i)&&(e.push(i.i,t.i,n.i),Oa(t),Oa(t.next),t=s=n),t=t.next}while(t!==s);return Ds(t)}function P0(s,e,t,i,n,r){let a=s;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&B0(a,o)){let c=Qp(a,o);a=Ds(a,a.next),c=Ds(c,c.next),Fa(a,e,t,i,n,r,0),Fa(c,e,t,i,n,r,0);return}o=o.next}a=a.next}while(a!==s)}function I0(s,e,t,i){let n=[];for(let r=0,a=e.length;r<a;r++){let o=e[r]*i,c=r<a-1?e[r+1]*i:s.length,l=Yp(s,o,c,i,!1);l===l.next&&(l.steiner=!0),n.push(U0(l))}n.sort(D0);for(let r=0;r<n.length;r++)t=L0(n[r],t);return t}function D0(s,e){let t=s.x-e.x;if(t===0&&(t=s.y-e.y,t===0)){let i=(s.next.y-s.y)/(s.next.x-s.x),n=(e.next.y-e.y)/(e.next.x-e.x);t=i-n}return t}function L0(s,e){let t=N0(s,e);if(!t)return e;let i=Qp(t,s);return Ds(i,i.next),Ds(t,t.next)}function N0(s,e){let t=e,i=s.x,n=s.y,r=-1/0,a;if(Rr(s,t))return t;do{if(Rr(s,t.next))return t.next;if(n<=t.y&&n>=t.next.y&&t.next.y!==t.y){let u=t.x+(n-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(u<=i&&u>r&&(r=u,a=t.x<t.next.x?t:t.next,u===i))return a}t=t.next}while(t!==e);if(!a)return null;let o=a,c=a.x,l=a.y,h=1/0;t=a;do{if(i>=t.x&&t.x>=c&&i!==t.x&&Zp(n<l?i:r,n,c,l,n<l?r:i,n,t.x,t.y)){let u=Math.abs(n-t.y)/(i-t.x);ka(t,s)&&(u<h||u===h&&(t.x>a.x||t.x===a.x&&F0(a,t)))&&(a=t,h=u)}t=t.next}while(t!==o);return a}function F0(s,e){return Dt(s.prev,s,e.prev)<0&&Dt(e.next,s,s.next)<0}function k0(s,e,t,i){let n=s;do n.z===0&&(n.z=Qh(n.x,n.y,e,t,i)),n.prevZ=n.prev,n.nextZ=n.next,n=n.next;while(n!==s);n.prevZ.nextZ=null,n.prevZ=null,O0(n)}function O0(s){let e,t=1;do{let i=s,n;s=null;let r=null;for(e=0;i;){e++;let a=i,o=0;for(let l=0;l<t&&(o++,a=a.nextZ,!!a);l++);let c=t;for(;o>0||c>0&&a;)o!==0&&(c===0||!a||i.z<=a.z)?(n=i,i=i.nextZ,o--):(n=a,a=a.nextZ,c--),r?r.nextZ=n:s=n,n.prevZ=r,r=n;i=a}r.nextZ=null,t*=2}while(e>1);return s}function Qh(s,e,t,i,n){return s=(s-t)*n|0,e=(e-i)*n|0,s=(s|s<<8)&16711935,s=(s|s<<4)&252645135,s=(s|s<<2)&858993459,s=(s|s<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,s|e<<1}function U0(s){let e=s,t=s;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==s);return t}function Zp(s,e,t,i,n,r,a,o){return(n-a)*(e-o)>=(s-a)*(r-o)&&(s-a)*(i-o)>=(t-a)*(e-o)&&(t-a)*(r-o)>=(n-a)*(i-o)}function da(s,e,t,i,n,r,a,o){return!(s===a&&e===o)&&Zp(s,e,t,i,n,r,a,o)}function B0(s,e){return s.next.i!==e.i&&s.prev.i!==e.i&&!z0(s,e)&&(ka(s,e)&&ka(e,s)&&H0(s,e)&&(Dt(s.prev,s,e.prev)||Dt(s,e.prev,e))||Rr(s,e)&&Dt(s.prev,s,s.next)>0&&Dt(e.prev,e,e.next)>0)}function Dt(s,e,t){return(e.y-s.y)*(t.x-e.x)-(e.x-s.x)*(t.y-e.y)}function Rr(s,e){return s.x===e.x&&s.y===e.y}function $p(s,e,t,i){let n=ac(Dt(s,e,t)),r=ac(Dt(s,e,i)),a=ac(Dt(t,i,s)),o=ac(Dt(t,i,e));return!!(n!==r&&a!==o||n===0&&rc(s,t,e)||r===0&&rc(s,i,e)||a===0&&rc(t,s,i)||o===0&&rc(t,e,i))}function rc(s,e,t){return e.x<=Math.max(s.x,t.x)&&e.x>=Math.min(s.x,t.x)&&e.y<=Math.max(s.y,t.y)&&e.y>=Math.min(s.y,t.y)}function ac(s){return s>0?1:s<0?-1:0}function z0(s,e){let t=s;do{if(t.i!==s.i&&t.next.i!==s.i&&t.i!==e.i&&t.next.i!==e.i&&$p(t,t.next,s,e))return!0;t=t.next}while(t!==s);return!1}function ka(s,e){return Dt(s.prev,s,s.next)<0?Dt(s,e,s.next)>=0&&Dt(s,s.prev,e)>=0:Dt(s,e,s.prev)<0||Dt(s,s.next,e)<0}function H0(s,e){let t=s,i=!1,n=(s.x+e.x)/2,r=(s.y+e.y)/2;do t.y>r!=t.next.y>r&&t.next.y!==t.y&&n<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x&&(i=!i),t=t.next;while(t!==s);return i}function Qp(s,e){let t=eu(s.i,s.x,s.y),i=eu(e.i,e.x,e.y),n=s.next,r=e.prev;return s.next=e,e.prev=s,t.next=n,n.prev=t,i.next=t,t.prev=i,r.next=i,i.prev=r,i}function Yf(s,e,t,i){let n=eu(s,e,t);return i?(n.next=i.next,n.prev=i,i.next.prev=n,i.next=n):(n.prev=n,n.next=n),n}function Oa(s){s.next.prev=s.prev,s.prev.next=s.next,s.prevZ&&(s.prevZ.nextZ=s.nextZ),s.nextZ&&(s.nextZ.prevZ=s.prevZ)}function eu(s,e,t){return{i:s,x:e,y:t,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function G0(s,e,t,i){let n=0;for(let r=e,a=t-i;r<t;r+=i)n+=(s[a]-s[r])*(s[r+1]+s[a+1]),a=r;return n}var tu=class{static triangulate(e,t,i=2){return T0(e,t,i)}},Ts=class s{static area(e){let t=e.length,i=0;for(let n=t-1,r=0;r<t;n=r++)i+=e[n].x*e[r].y-e[r].x*e[n].y;return i*.5}static isClockWise(e){return s.area(e)<0}static triangulateShape(e,t){let i=[],n=[],r=[];Zf(e),$f(i,e);let a=e.length;t.forEach(Zf);for(let c=0;c<t.length;c++)n.push(a),a+=t[c].length,$f(i,t[c]);let o=tu.triangulate(i,n);for(let c=0;c<o.length;c+=3)r.push(o.slice(c,c+3));return r}};function Zf(s){let e=s.length;e>2&&s[e-1].equals(s[0])&&s.pop()}function $f(s,e){for(let t=0;t<e.length;t++)s.push(e[t].x),s.push(e[t].y)}var Ua=class s extends ze{constructor(e=new Ar([new ie(.5,.5),new ie(-.5,.5),new ie(-.5,-.5),new ie(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];let i=this,n=[],r=[];for(let o=0,c=e.length;o<c;o++){let l=e[o];a(l)}this.setAttribute("position",new Ie(n,3)),this.setAttribute("uv",new Ie(r,2)),this.computeVertexNormals();function a(o){let c=[],l=t.curveSegments!==void 0?t.curveSegments:12,h=t.steps!==void 0?t.steps:1,u=t.depth!==void 0?t.depth:1,d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,g=t.bevelSize!==void 0?t.bevelSize:f-.1,x=t.bevelOffset!==void 0?t.bevelOffset:0,m=t.bevelSegments!==void 0?t.bevelSegments:3,p=t.extrudePath,v=t.UVGenerator!==void 0?t.UVGenerator:V0,S,b=!1,M,w,A,_;if(p){S=p.getSpacedPoints(h),b=!0,d=!1;let te=p.isCatmullRomCurve3?p.closed:!1;M=p.computeFrenetFrames(h,te),w=new R,A=new R,_=new R}d||(m=0,f=0,g=0,x=0);let T=o.extractPoints(l),P=T.shape,I=T.holes;if(!Ts.isClockWise(P)){P=P.reverse();for(let te=0,re=I.length;te<re;te++){let ae=I[te];Ts.isClockWise(ae)&&(I[te]=ae.reverse())}}function B(te){let ae=10000000000000001e-36,oe=te[0];for(let he=1;he<=te.length;he++){let He=he%te.length,Be=te[He],je=Be.x-oe.x,Ke=Be.y-oe.y,L=je*je+Ke*Ke,mt=Math.max(Math.abs(Be.x),Math.abs(Be.y),Math.abs(oe.x),Math.abs(oe.y)),st=ae*mt*mt;if(L<=st){te.splice(He,1),he--;continue}oe=Be}}B(P),I.forEach(B);let D=I.length,O=P;for(let te=0;te<D;te++){let re=I[te];P=P.concat(re)}function V(te,re,ae){return re||Ve("ExtrudeGeometry: vec does not exist"),te.clone().addScaledVector(re,ae)}let j=P.length;function ne(te,re,ae){let oe,he,He,Be=te.x-re.x,je=te.y-re.y,Ke=ae.x-te.x,L=ae.y-te.y,mt=Be*Be+je*je,st=Be*L-je*Ke;if(Math.abs(st)>Number.EPSILON){let C=Math.sqrt(mt),y=Math.sqrt(Ke*Ke+L*L),U=re.x-je/C,G=re.y+Be/C,X=ae.x-L/y,ce=ae.y+Ke/y,le=((X-U)*L-(ce-G)*Ke)/(Be*L-je*Ke);oe=U+Be*le-te.x,he=G+je*le-te.y;let K=oe*oe+he*he;if(K<=2)return new ie(oe,he);He=Math.sqrt(K/2)}else{let C=!1;Be>Number.EPSILON?Ke>Number.EPSILON&&(C=!0):Be<-Number.EPSILON?Ke<-Number.EPSILON&&(C=!0):Math.sign(je)===Math.sign(L)&&(C=!0),C?(oe=-je,he=Be,He=Math.sqrt(mt)):(oe=Be,he=je,He=Math.sqrt(mt/2))}return new ie(oe/He,he/He)}let q=[];for(let te=0,re=O.length,ae=re-1,oe=te+1;te<re;te++,ae++,oe++)ae===re&&(ae=0),oe===re&&(oe=0),q[te]=ne(O[te],O[ae],O[oe]);let Z=[],Q,Re=q.concat();for(let te=0,re=D;te<re;te++){let ae=I[te];Q=[];for(let oe=0,he=ae.length,He=he-1,Be=oe+1;oe<he;oe++,He++,Be++)He===he&&(He=0),Be===he&&(Be=0),Q[oe]=ne(ae[oe],ae[He],ae[Be]);Z.push(Q),Re=Re.concat(Q)}let Me;if(m===0)Me=Ts.triangulateShape(O,I);else{let te=[],re=[];for(let ae=0;ae<m;ae++){let oe=ae/m,he=f*Math.cos(oe*Math.PI/2),He=g*Math.sin(oe*Math.PI/2)+x;for(let Be=0,je=O.length;Be<je;Be++){let Ke=V(O[Be],q[Be],He);xe(Ke.x,Ke.y,-he),oe===0&&te.push(Ke)}for(let Be=0,je=D;Be<je;Be++){let Ke=I[Be];Q=Z[Be];let L=[];for(let mt=0,st=Ke.length;mt<st;mt++){let C=V(Ke[mt],Q[mt],He);xe(C.x,C.y,-he),oe===0&&L.push(C)}oe===0&&re.push(L)}}Me=Ts.triangulateShape(te,re)}let ft=Me.length,nt=g+x;for(let te=0;te<j;te++){let re=d?V(P[te],Re[te],nt):P[te];b?(A.copy(M.normals[0]).multiplyScalar(re.x),w.copy(M.binormals[0]).multiplyScalar(re.y),_.copy(S[0]).add(A).add(w),xe(_.x,_.y,_.z)):xe(re.x,re.y,0)}for(let te=1;te<=h;te++)for(let re=0;re<j;re++){let ae=d?V(P[re],Re[re],nt):P[re];b?(A.copy(M.normals[te]).multiplyScalar(ae.x),w.copy(M.binormals[te]).multiplyScalar(ae.y),_.copy(S[te]).add(A).add(w),xe(_.x,_.y,_.z)):xe(ae.x,ae.y,u/h*te)}for(let te=m-1;te>=0;te--){let re=te/m,ae=f*Math.cos(re*Math.PI/2),oe=g*Math.sin(re*Math.PI/2)+x;for(let he=0,He=O.length;he<He;he++){let Be=V(O[he],q[he],oe);xe(Be.x,Be.y,u+ae)}for(let he=0,He=I.length;he<He;he++){let Be=I[he];Q=Z[he];for(let je=0,Ke=Be.length;je<Ke;je++){let L=V(Be[je],Q[je],oe);b?xe(L.x,L.y+S[h-1].y,S[h-1].x+ae):xe(L.x,L.y,u+ae)}}}lt(),J();function lt(){let te=n.length/3;if(d){let re=0,ae=j*re;for(let oe=0;oe<ft;oe++){let he=Me[oe];We(he[2]+ae,he[1]+ae,he[0]+ae)}re=h+m*2,ae=j*re;for(let oe=0;oe<ft;oe++){let he=Me[oe];We(he[0]+ae,he[1]+ae,he[2]+ae)}}else{for(let re=0;re<ft;re++){let ae=Me[re];We(ae[2],ae[1],ae[0])}for(let re=0;re<ft;re++){let ae=Me[re];We(ae[0]+j*h,ae[1]+j*h,ae[2]+j*h)}}i.addGroup(te,n.length/3-te,0)}function J(){let te=n.length/3,re=0;ee(O,re),re+=O.length;for(let ae=0,oe=I.length;ae<oe;ae++){let he=I[ae];ee(he,re),re+=he.length}i.addGroup(te,n.length/3-te,1)}function ee(te,re){let ae=te.length;for(;--ae>=0;){let oe=ae,he=ae-1;he<0&&(he=te.length-1);for(let He=0,Be=h+m*2;He<Be;He++){let je=j*He,Ke=j*(He+1),L=re+oe+je,mt=re+he+je,st=re+he+Ke,C=re+oe+Ke;Se(L,mt,st,C)}}}function xe(te,re,ae){c.push(te),c.push(re),c.push(ae)}function We(te,re,ae){qe(te),qe(re),qe(ae);let oe=n.length/3,he=v.generateTopUV(i,n,oe-3,oe-2,oe-1);vt(he[0]),vt(he[1]),vt(he[2])}function Se(te,re,ae,oe){qe(te),qe(re),qe(oe),qe(re),qe(ae),qe(oe);let he=n.length/3,He=v.generateSideWallUV(i,n,he-6,he-3,he-2,he-1);vt(He[0]),vt(He[1]),vt(He[3]),vt(He[1]),vt(He[2]),vt(He[3])}function qe(te){n.push(c[te*3+0]),n.push(c[te*3+1]),n.push(c[te*3+2])}function vt(te){r.push(te.x),r.push(te.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON(),t=this.parameters.shapes,i=this.parameters.options;return W0(t,i,e)}static fromJSON(e,t){let i=[];for(let r=0,a=e.shapes.length;r<a;r++){let o=t[e.shapes[r]];i.push(o)}let n=e.options.extrudePath;return n!==void 0&&(e.options.extrudePath=new Cc[n.type]().fromJSON(n)),new s(i,e.options)}},V0={generateTopUV:function(s,e,t,i,n){let r=e[t*3],a=e[t*3+1],o=e[i*3],c=e[i*3+1],l=e[n*3],h=e[n*3+1];return[new ie(r,a),new ie(o,c),new ie(l,h)]},generateSideWallUV:function(s,e,t,i,n,r){let a=e[t*3],o=e[t*3+1],c=e[t*3+2],l=e[i*3],h=e[i*3+1],u=e[i*3+2],d=e[n*3],f=e[n*3+1],g=e[n*3+2],x=e[r*3],m=e[r*3+1],p=e[r*3+2];return Math.abs(o-h)<Math.abs(a-l)?[new ie(a,1-c),new ie(l,1-u),new ie(d,1-g),new ie(x,1-p)]:[new ie(o,1-c),new ie(h,1-u),new ie(f,1-g),new ie(m,1-p)]}};function W0(s,e,t){if(t.shapes=[],Array.isArray(s))for(let i=0,n=s.length;i<n;i++){let r=s[i];t.shapes.push(r.uuid)}else t.shapes.push(s.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}var Cr=class s extends Ec{constructor(e=1,t=0){let i=(1+Math.sqrt(5))/2,n=[-1,i,0,1,i,0,-1,-i,0,1,-i,0,0,-1,i,0,1,i,0,-1,-i,0,1,-i,i,0,-1,i,0,1,-i,0,-1,-i,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(n,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new s(e.radius,e.detail)}},cs=class s extends ze{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,i=0,n=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:n},t=Math.floor(t),n=et(n,0,Math.PI*2);let r=[],a=[],o=[],c=[],l=[],h=1/t,u=new R,d=new ie,f=new R,g=new R,x=new R,m=0,p=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,x.copy(f),f.normalize(),c.push(f.x,f.y,f.z);break;case e.length-1:c.push(x.x,x.y,x.z);break;default:m=e[v+1].x-e[v].x,p=e[v+1].y-e[v].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=x.x,f.y+=x.y,f.z+=x.z,f.normalize(),c.push(f.x,f.y,f.z),x.copy(g)}for(let v=0;v<=t;v++){let S=i+v*h*n,b=Math.sin(S),M=Math.cos(S);for(let w=0;w<=e.length-1;w++){u.x=e[w].x*b,u.y=e[w].y,u.z=e[w].x*M,a.push(u.x,u.y,u.z),d.x=v/t,d.y=w/(e.length-1),o.push(d.x,d.y);let A=c[3*w+0]*b,_=c[3*w+1],T=c[3*w+0]*M;l.push(A,_,T)}}for(let v=0;v<t;v++)for(let S=0;S<e.length-1;S++){let b=S+v*e.length,M=b,w=b+e.length,A=b+e.length+1,_=b+1;r.push(M,w,_),r.push(A,_,w)}this.setIndex(r),this.setAttribute("position",new Ie(a,3)),this.setAttribute("uv",new Ie(o,2)),this.setAttribute("normal",new Ie(l,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.points,e.segments,e.phiStart,e.phiLength)}};var Ht=class s extends ze{constructor(e=1,t=1,i=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:n};let r=e/2,a=t/2,o=Math.floor(i),c=Math.floor(n),l=o+1,h=c+1,u=e/o,d=t/c,f=[],g=[],x=[],m=[];for(let p=0;p<h;p++){let v=p*d-a;for(let S=0;S<l;S++){let b=S*u-r;g.push(b,-v,0),x.push(0,0,1),m.push(S/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let v=0;v<o;v++){let S=v+l*p,b=v+l*(p+1),M=v+1+l*(p+1),w=v+1+l*p;f.push(S,b,w),f.push(b,M,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Jt=class s extends ze{constructor(e=1,t=32,i=16,n=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:n,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));let c=Math.min(a+o,Math.PI),l=0,h=[],u=new R,d=new R,f=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){let v=[],S=p/i,b=a+S*o,M=e*Math.cos(b),w=Math.sqrt(e*e-M*M),A=0;p===0&&a===0?A=.5/t:p===i&&c===Math.PI&&(A=-.5/t);for(let _=0;_<=t;_++){let T=_/t,P=n+T*r;u.x=-w*Math.cos(P),u.y=M,u.z=w*Math.sin(P),g.push(u.x,u.y,u.z),d.copy(u).normalize(),x.push(d.x,d.y,d.z),m.push(T+A,1-S),v.push(l++)}h.push(v)}for(let p=0;p<i;p++)for(let v=0;v<t;v++){let S=h[p][v+1],b=h[p][v],M=h[p+1][v],w=h[p+1][v+1];(p!==0||a>0)&&f.push(S,b,w),(p!==i-1||c<Math.PI)&&f.push(b,M,w)}this.setIndex(f),this.setAttribute("position",new Ie(g,3)),this.setAttribute("normal",new Ie(x,3)),this.setAttribute("uv",new Ie(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Mi=class s extends ze{constructor(e=1,t=.4,i=12,n=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:i,tubularSegments:n,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),n=Math.floor(n);let c=[],l=[],h=[],u=[],d=new R,f=new R,g=new R;for(let x=0;x<=i;x++){let m=a+x/i*o;for(let p=0;p<=n;p++){let v=p/n*r;f.x=(e+t*Math.cos(m))*Math.cos(v),f.y=(e+t*Math.cos(m))*Math.sin(v),f.z=t*Math.sin(m),l.push(f.x,f.y,f.z),d.x=e*Math.cos(v),d.y=e*Math.sin(v),g.subVectors(f,d).normalize(),h.push(g.x,g.y,g.z),u.push(p/n),u.push(x/i)}}for(let x=1;x<=i;x++)for(let m=1;m<=n;m++){let p=(n+1)*x+m-1,v=(n+1)*(x-1)+m-1,S=(n+1)*(x-1)+m,b=(n+1)*x+m;c.push(p,v,b),c.push(v,S,b)}this.setIndex(c),this.setAttribute("position",new Ie(l,3)),this.setAttribute("normal",new Ie(h,3)),this.setAttribute("uv",new Ie(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};var Ls=class s extends ze{constructor(e=new Da(new R(-1,-1,0),new R(-1,1,0),new R(1,1,0)),t=64,i=1,n=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:i,radialSegments:n,closed:r};let a=e.computeFrenetFrames(t,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new R,c=new R,l=new ie,h=new R,u=[],d=[],f=[],g=[];x(),this.setIndex(g),this.setAttribute("position",new Ie(u,3)),this.setAttribute("normal",new Ie(d,3)),this.setAttribute("uv",new Ie(f,2));function x(){for(let S=0;S<t;S++)m(S);m(r===!1?t:0),v(),p()}function m(S){h=e.getPointAt(S/t,h);let b=a.normals[S],M=a.binormals[S];for(let w=0;w<=n;w++){let A=w/n*Math.PI*2,_=Math.sin(A),T=-Math.cos(A);c.x=T*b.x+_*M.x,c.y=T*b.y+_*M.y,c.z=T*b.z+_*M.z,c.normalize(),d.push(c.x,c.y,c.z),o.x=h.x+i*c.x,o.y=h.y+i*c.y,o.z=h.z+i*c.z,u.push(o.x,o.y,o.z)}}function p(){for(let S=1;S<=t;S++)for(let b=1;b<=n;b++){let M=(n+1)*(S-1)+(b-1),w=(n+1)*S+(b-1),A=(n+1)*S+b,_=(n+1)*(S-1)+b;g.push(M,w,_),g.push(w,A,_)}}function v(){for(let S=0;S<=t;S++)for(let b=0;b<=n;b++)l.x=S/t,l.y=b/n,f.push(l.x,l.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){let e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new s(new Cc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}};function Gs(s){let e={};for(let t in s){e[t]={};for(let i in s[t]){let n=s[t][i];if(Qf(n))n.isRenderTargetTexture?(Le("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=n.clone();else if(Array.isArray(n))if(Qf(n[0])){let r=[];for(let a=0,o=n.length;a<o;a++)r[a]=n[a].clone();e[t][i]=r}else e[t][i]=n.slice();else e[t][i]=n}}return e}function ui(s){let e={};for(let t=0;t<s.length;t++){let i=Gs(s[t]);for(let n in i)e[n]=i[n]}return e}function Qf(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function q0(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Ru(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:$e.workingColorSpace}var Oi={clone:Gs,merge:ui},j0=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,X0=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,Nt=class extends mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=j0,this.fragmentShader=X0,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Gs(e.uniforms),this.uniformsGroups=q0(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let i={};for(let n in this.extensions)this.extensions[n]===!0&&(i[n]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let i in e.uniforms){let n=e.uniforms[i];switch(this.uniforms[i]={},n.type){case"t":this.uniforms[i].value=t[n.value]||null;break;case"c":this.uniforms[i].value=new ge().setHex(n.value);break;case"v2":this.uniforms[i].value=new ie().fromArray(n.value);break;case"v3":this.uniforms[i].value=new R().fromArray(n.value);break;case"v4":this.uniforms[i].value=new ct().fromArray(n.value);break;case"m3":this.uniforms[i].value=new Xe().fromArray(n.value);break;case"m4":this.uniforms[i].value=new Pe().fromArray(n.value);break;default:this.uniforms[i].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Pr=class extends Nt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},xt=class extends mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ge(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ge(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Il,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ln,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},wi=class extends xt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return et(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ge(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ge(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ge(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}};var ls=class extends mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Fp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Ic=class extends mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};var Ba=class extends Di{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}};function ss(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function uc(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}function K0(s){function e(n,r){return s[n]-s[r]}let t=s.length,i=new Array(t);for(let n=0;n!==t;++n)i[n]=n;return i.sort(e),i}function ep(s,e,t){let i=s.length,n=new s.constructor(i);for(let r=0,a=0;a!==i;++r){let o=t[r]*e;for(let c=0;c!==e;++c)n[a++]=s[o+c]}return n}function J0(s,e,t,i){let n=1,r=s[0];for(;r!==void 0&&r[i]===void 0;)r=s[n++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),t.push(...a)),r=s[n++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(t,t.length)),r=s[n++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),t.push(a)),r=s[n++];while(r!==void 0)}var bn=class{constructor(e,t,i,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(i),this.sampleValues=t,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,i=this._cachedIndex,n=t[i],r=t[i-1];e:{t:{let a;i:{n:if(!(e<n)){for(let o=i+2;;){if(n===void 0){if(e<r)break n;return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=n,n=t[++i],e<n)break t}a=t.length;break i}if(!(e>=r)){let o=t[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(n=r,r=t[--i-1],e>=r)break t}a=i,i=0;break i}break e}for(;i<a;){let o=i+a>>>1;e<t[o]?a=o:i=o+1}if(n=t[i],r=t[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return i=t.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,n)}return this.interpolate_(i,r,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n;for(let a=0;a!==n;++a)t[a]=i[r+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Dc=class extends bn{constructor(e,t,i,n){super(e,t,i,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ws,endingEnd:ws}}intervalChanged_(e,t,i){let n=this.parameterPositions,r=e-2,a=e+1,o=n[r],c=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Es:r=e,o=2*t-i;break;case ba:r=n.length-2,o=t+n[r]-n[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Es:a=e,c=2*i-t;break;case ba:a=1,c=i+n[1]-n[0];break;default:a=e-1,c=t}let l=(i-t)*.5,h=this.valueSize;this._weightPrev=l/(t-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-t)/(n-t),x=g*g,m=x*g,p=-d*m+2*d*x-d*g,v=(1+d)*m+(-1.5-2*d)*x+(-.5+d)*g+1,S=(-1-f)*m+(1.5+f)*x+.5*g,b=f*m-f*x;for(let M=0;M!==o;++M)r[M]=p*a[h+M]+v*a[l+M]+S*a[c+M]+b*a[u+M];return r}},za=class extends bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-t)/(n-t),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Lc=class extends bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e){return this.copySampleValue_(e-1)}},Nc=class extends bn{interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-t)/(n-t),x=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*x+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[l+g],m=a[c+g],p=f*d+g*2,v=u[p],S=u[p+1],b=e*d+g*2,M=h[b],w=h[b+1],A=Z0(i,t,v,M,n);r[g]=em(A,x,S,w,m)}return r}};function em(s,e,t,i,n){let r=1-s;return r*r*r*e+3*r*r*s*t+3*r*s*s*i+s*s*s*n}function Y0(s,e,t,i,n){let r=1-s;return 3*r*r*(t-e)+6*r*s*(i-t)+3*s*s*(n-i)}function Z0(s,e,t,i,n){let r=(s-e)/(n-e);for(let a=0;a<8;a++){let o=em(r,e,t,i,n)-s;if(Math.abs(o)<1e-10)break;let c=Y0(r,e,t,i,n);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}var Ei=class{constructor(e,t,i,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ss(t,this.TimeBufferType),this.values=ss(i,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,i;if(t.toJSON!==this.toJSON)i=t.toJSON(e);else{i={name:e.name,times:ss(e.times,Array),values:ss(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(i.interpolation=n),uc(e.settings)&&(i.settings={inTangents:ss(e.settings.inTangents,Array),outTangents:ss(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Lc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new za(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Dc(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new Nc(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case Rs:t=this.InterpolantFactoryMethodDiscrete;break;case Cs:t=this.InterpolantFactoryMethodLinear;break;case lc:t=this.InterpolantFactoryMethodSmooth;break;case Zh:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Le("KeyframeTrack:",i),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Rs;case this.InterpolantFactoryMethodLinear:return Cs;case this.InterpolantFactoryMethodSmooth:return lc;case this.InterpolantFactoryMethodBezier:return Zh}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let i=0,n=t.length;i!==n;++i)t[i]*=e;uc(this.settings)&&(tp(this.settings.inTangents,e),tp(this.settings.outTangents,e))}return this}trim(e,t){let i=this.times,n=i.length,r=0,a=n-1;for(;r!==n&&i[r]<e;)++r;for(;a!==-1&&i[a]>t;)--a;if(++a,r!==0||a!==n){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,n=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(n!==void 0&&Fg(n))for(let o=0,c=n.length;o!==c;++o){let l=n[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),i=this.getValueSize(),n=this.getInterpolation()===lc,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(n)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let x=t[u+g];if(x!==t[d+g]||x!==t[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)t[d+f]=t[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)t[c+l]=t[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*i)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),i=this.constructor,n=new i(this.name,e,t);return n.createInterpolant=this.createInterpolant,uc(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function tp(s,e){for(let t=0,i=s.length;t!==i;t+=2)s[t]*=e}Ei.prototype.ValueTypeName="";Ei.prototype.TimeBufferType=Float32Array;Ei.prototype.ValueBufferType=Float32Array;Ei.prototype.DefaultInterpolation=Cs;var Bn=class extends Ei{constructor(e,t,i){super(e,t,i)}};Bn.prototype.ValueTypeName="bool";Bn.prototype.ValueBufferType=Array;Bn.prototype.DefaultInterpolation=Rs;Bn.prototype.InterpolantFactoryMethodLinear=void 0;Bn.prototype.InterpolantFactoryMethodSmooth=void 0;var Ha=class extends Ei{constructor(e,t,i,n){super(e,t,i,n)}};Ha.prototype.ValueTypeName="color";var zn=class extends Ei{constructor(e,t,i,n){super(e,t,i,n)}};zn.prototype.ValueTypeName="number";var Fc=class extends bn{constructor(e,t,i,n){super(e,t,i,n)}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-t)/(n-t),l=e*o;for(let h=l+o;l!==h;l+=4)Je.slerpFlat(r,0,a,l-o,a,l,c);return r}},Hn=class extends Ei{constructor(e,t,i,n){super(e,t,i,n)}InterpolantFactoryMethodLinear(e){return new Fc(this.times,this.values,this.getValueSize(),e)}};Hn.prototype.ValueTypeName="quaternion";Hn.prototype.InterpolantFactoryMethodSmooth=void 0;var Gn=class extends Ei{constructor(e,t,i){super(e,t,i)}};Gn.prototype.ValueTypeName="string";Gn.prototype.ValueBufferType=Array;Gn.prototype.DefaultInterpolation=Rs;Gn.prototype.InterpolantFactoryMethodLinear=void 0;Gn.prototype.InterpolantFactoryMethodSmooth=void 0;var hs=class extends Ei{constructor(e,t,i,n){super(e,t,i,n)}};hs.prototype.ValueTypeName="vector";var Ns=class{constructor(e="",t=-1,i=[],n=Pl){this.name=e,this.tracks=i,this.duration=t,this.blendMode=n,this.uuid=Vi(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let t=[],i=e.tracks,n=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)t.push(Q0(i[a]).scale(n));let r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let t=[],i=e.tracks,n={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)t.push(Ei.toJSON(i[r]));return n}static CreateFromMorphTargetSequence(e,t,i,n){let r=t.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=K0(c);c=ep(c,1,h),l=ep(l,1,h),!n&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new zn(".morphTargetInfluences["+t[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,t){let i=e;if(!Array.isArray(e)){let n=e;i=n.geometry&&n.geometry.animations||n.animations}for(let n=0;n<i.length;n++)if(i[n].name===t)return i[n];return null}static CreateClipsFromMorphTargetSequences(e,t,i){let n={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=n[u];d||(n[u]=d=[]),d.push(l)}}let a=[];for(let o in n)a.push(this.CreateFromMorphTargetSequence(o,n[o],t,i));return a}resetDuration(){let e=this.tracks,t=0;for(let i=0,n=e.length;i!==n;++i){let r=this.tracks[i];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let t=new this.constructor(this.name,this.duration,e,this.blendMode);return t.userData=JSON.parse(JSON.stringify(this.userData)),t}toJSON(){return this.constructor.toJSON(this)}};function $0(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return zn;case"vector":case"vector2":case"vector3":case"vector4":return hs;case"color":return Ha;case"quaternion":return Hn;case"bool":case"boolean":return Bn;case"string":return Gn}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function Q0(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=$0(s.type);if(s.times===void 0){let i=[],n=[];J0(s.keys,i,n,"value"),s.times=i,s.values=n}let t;return e.parse!==void 0?t=e.parse(s):t=new e(s.name,s.times,s.values,s.interpolation),uc(s.settings)&&(t.settings={inTangents:ss(s.settings.inTangents,Float32Array),outTangents:ss(s.settings.outTangents,Float32Array)}),t}var fn={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(ip(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!ip(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function ip(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var kc=class{constructor(e,t,i){let n=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&n.onStart!==void 0&&n.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(r=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},tm=new kc,xn=class{constructor(e){this.manager=e!==void 0?e:tm,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let i=this;return new Promise(function(n,r){i.load(e,n,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};xn.DEFAULT_MATERIAL_NAME="__DEFAULT";var Pn={},iu=class extends Error{constructor(e,t){super(e),this.response=t}},Ir=class extends xn{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=fn.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0);return}if(Pn[e]!==void 0){Pn[e].push({onLoad:t,onProgress:i,onError:n});return}Pn[e]=[],Pn[e].push({onLoad:t,onProgress:i,onError:n});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Le("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Pn[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,x=0,m=new ReadableStream({start(p){v();function v(){u.read().then(({done:S,value:b})=>{if(S)p.close();else{x+=b.byteLength;let M=new ProgressEvent("progress",{lengthComputable:g,loaded:x,total:f});for(let w=0,A=h.length;w<A;w++){let _=h[w];_.onProgress&&_.onProgress(M)}p.enqueue(b),v()}},S=>{p.error(S)})}}});return new Response(m)}else throw new iu(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{fn.add(`file:${e}`,l);let h=Pn[e];delete Pn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Pn[e];if(h===void 0)throw this.manager.itemError(e),l;delete Pn[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var ur=new WeakMap,Oc=class extends xn{constructor(e){super(e)}load(e,t,i,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fn.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=ur.get(a);u===void 0&&(u=[],ur.set(a,u)),u.push({onLoad:t,onError:n})}return a}let o=xr("img");function c(){h(),t&&t(this);let u=ur.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}ur.delete(this),r.manager.itemEnd(e)}function l(u){h(),n&&n(u),fn.remove(`image:${e}`);let d=ur.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}ur.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),fn.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}};var an=class extends xn{constructor(e){super(e)}load(e,t,i,n){let r=new Xt,a=new Oc(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},i,n),r}},Fs=class extends dt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ge(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},Ga=class extends Fs{constructor(e,t,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ge(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Kh=new Pe,np=new R,sp=new R,Dr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.mapType=Ai,this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Tr,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;np.setFromMatrixPosition(e.matrixWorld),t.position.copy(np),sp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(sp),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,i,n){Kh.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Kh,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=n?n.z/r.x:1,o=n?n.w/r.y:1,c=n?n.x/r.x:0,l=n?n.y/r.y:0;e.coordinateSystem===br||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Kh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},oc=new R,cc=new Je,dn=new R,Va=class extends dt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=tn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(oc,cc,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,cc,dn.set(1,1,1)).invert()}updateWorldMatrix(e,t,i=!1){super.updateWorldMatrix(e,t,i),this.matrixWorld.decompose(oc,cc,dn),dn.x===1&&dn.y===1&&dn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(oc,cc,dn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ns=new R,rp=new ie,ap=new ie,Ft=class extends Va{constructor(e=50,t=1,i=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ps*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(fa*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ps*2*Math.atan(Math.tan(fa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){ns.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ns.x,ns.y).multiplyScalar(-e/ns.z),ns.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ns.x,ns.y).multiplyScalar(-e/ns.z)}getViewSize(e,t){return this.getViewBounds(e,rp,ap),t.subVectors(ap,rp)}setViewOffset(e,t,i,n,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(fa*.5*this.fov)/this.zoom,i=2*t,n=this.aspect*i,r=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*n/c,t-=a.offsetY*i/l,n*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+n,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},nu=class extends Dr{constructor(){super(new Ft(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let t=this.camera,i=Ps*2*e.angle*this.focus,n=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||t.far;(i!==t.fov||n!==t.aspect||r!==t.far)&&(t.fov=i,t.aspect=n,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Wa=class extends Fs{constructor(e,t,i=0,n=Math.PI/3,r=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.distance=i,this.angle=n,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new nu}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.angle=this.angle,t.object.decay=this.decay,t.object.penumbra=this.penumbra,t.object.target=this.target.uuid,this.map&&this.map.isTexture&&(t.object.map=this.map.toJSON(e).uuid),t.object.shadow=this.shadow.toJSON(),t}},su=class extends Dr{constructor(){super(new Ft(90,1,.5,500)),this.isPointLightShadow=!0}},qi=class extends Fs{constructor(e,t,i=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=n,this.shadow=new su}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},vn=class extends Va{constructor(e=-1,t=1,i=1,n=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=n,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,n,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=n,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,n=(this.top+this.bottom)/2,r=i-e,a=i+e,o=n+t,c=n-t;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},ru=class extends Dr{constructor(){super(new vn(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},us=class extends Fs{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(dt.DEFAULT_UP),this.updateMatrix(),this.target=new dt,this.shadow=new ru}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Vn=class{static extractUrlBase(e){let t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}};var Jh=new WeakMap,qa=class extends xn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Le("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Le("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,t,i,n){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=fn.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Jh.has(a)===!0?(n&&n(Jh.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(t&&t(l),r.manager.itemEnd(e))});return}setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return fn.add(`image-bitmap:${e}`,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){n&&n(l),Jh.set(c,l),fn.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});fn.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}};var dr=-90,fr=1,Uc=class extends dt{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new Ft(dr,fr,e,t);n.layers=this.layers,this.add(n);let r=new Ft(dr,fr,e,t);r.layers=this.layers,this.add(r);let a=new Ft(dr,fr,e,t);a.layers=this.layers,this.add(a);let o=new Ft(dr,fr,e,t);o.layers=this.layers,this.add(o);let c=new Ft(dr,fr,e,t);c.layers=this.layers,this.add(c);let l=new Ft(dr,fr,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[i,n,r,a,o,c]=t;for(let l of t)this.remove(l);if(e===tn)i.up.set(0,1,0),i.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(i,1,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(i,2,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(i,3,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(i,4,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,n),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Bc=class extends Ft{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ja=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=eb.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function eb(){this._document.hidden===!1&&this.reset()}var zc=class{constructor(e,t,i){this.binding=e,this.valueSize=i;let n,r,a;switch(t){case"quaternion":n=this._slerp,r=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(i*6),this._workIndex=5;break;case"string":case"bool":n=this._select,r=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(i*5);break;default:n=this._lerp,r=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(i*5)}this._mixBufferRegion=n,this._mixBufferRegionAdditive=r,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){let i=this.buffer,n=this.valueSize,r=e*n+n,a=this.cumulativeWeight;if(a===0){for(let o=0;o!==n;++o)i[r+o]=i[o];a=t}else{a+=t;let o=t/a;this._mixBufferRegion(i,r,0,o,n)}this.cumulativeWeight=a}accumulateAdditive(e){let t=this.buffer,i=this.valueSize,n=i*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,n,0,e,i),this.cumulativeWeightAdditive+=e}apply(e){let t=this.valueSize,i=this.buffer,n=e*t+t,r=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){let c=t*this._origIndex;this._mixBufferRegion(i,n,c,1-r,t)}a>0&&this._mixBufferRegionAdditive(i,n,this._addIndex*t,1,t);for(let c=t,l=t+t;c!==l;++c)if(i[c]!==i[c+t]){o.setValue(i,n);break}}saveOriginalState(){let e=this.binding,t=this.buffer,i=this.valueSize,n=i*this._origIndex;e.getValue(t,n);for(let r=i,a=n;r!==a;++r)t[r]=t[n+r%i];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){let e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){let e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let i=e;i<t;i++)this.buffer[i]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){let e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let i=0;i<this.valueSize;i++)this.buffer[t+i]=this.buffer[e+i]}_select(e,t,i,n,r){if(n>=.5)for(let a=0;a!==r;++a)e[t+a]=e[i+a]}_slerp(e,t,i,n){Je.slerpFlat(e,t,e,t,e,i,n)}_slerpAdditive(e,t,i,n,r){let a=this._workIndex*r;Je.multiplyQuaternionsFlat(e,a,e,t,e,i),Je.slerpFlat(e,t,e,t,e,a,n)}_lerp(e,t,i,n,r){let a=1-n;for(let o=0;o!==r;++o){let c=t+o;e[c]=e[c]*a+e[i+o]*n}}_lerpAdditive(e,t,i,n,r){for(let a=0;a!==r;++a){let o=t+a;e[o]=e[o]+e[i+a]*n}}},Cu="\\[\\]\\.:\\/",tb=new RegExp("["+Cu+"]","g"),Pu="[^"+Cu+"]",ib="[^"+Cu.replace("\\.","")+"]",nb=/((?:WC+[\/:])*)/.source.replace("WC",Pu),sb=/(WCOD+)?/.source.replace("WCOD",ib),rb=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Pu),ab=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Pu),ob=new RegExp("^"+nb+sb+rb+ab+"$"),cb=["material","materials","bones","map"],au=class{constructor(e,t,i){let n=i||St.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let i=this._targetGroup.nCachedObjects_,n=this._bindings[i];n!==void 0&&n.getValue(e,t)}setValue(e,t){let i=this._bindings;for(let n=this._targetGroup.nCachedObjects_,r=i.length;n!==r;++n)i[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,i=e.length;t!==i;++t)e[t].unbind()}},St=class s{constructor(e,t,i){this.path=t,this.parsedPath=i||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,i){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,i):new s(e,t,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(tb,"")}static parseTrackName(e){let t=ob.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=i.nodeName&&i.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let r=i.nodeName.substring(n+1);cb.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,n),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(t);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let c=i(o.children);if(c)return c}return null},n=i(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)e[t++]=i[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let i=this.resolvedProperty;for(let n=0,r=i.length;n!==r;++n)i[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,i=t.objectName,n=t.propertyName,r=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Le("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=t.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[n];if(a===void 0){let l=t.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};St.Composite=au;St.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};St.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};St.prototype.GetterByBindingType=[St.prototype._getValue_direct,St.prototype._getValue_array,St.prototype._getValue_arrayElement,St.prototype._getValue_toArray];St.prototype.SetterByBindingTypeAndVersioning=[[St.prototype._setValue_direct,St.prototype._setValue_direct_setNeedsUpdate,St.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[St.prototype._setValue_array,St.prototype._setValue_array_setNeedsUpdate,St.prototype._setValue_array_setMatrixWorldNeedsUpdate],[St.prototype._setValue_arrayElement,St.prototype._setValue_arrayElement_setNeedsUpdate,St.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[St.prototype._setValue_fromArray,St.prototype._setValue_fromArray_setNeedsUpdate,St.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var Hc=class{constructor(e,t,i=null,n=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=i,this.blendMode=n;let r=t.tracks,a=r.length,o=new Array(a),c={endingStart:ws,endingEnd:ws};for(let l=0;l!==a;++l){let h=r[l].createInterpolant(null);o[l]=h,h.settings=c}this._interpolantSettings=c,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._restoreTimeScale=null,this._weightInterpolant=null,this.loop=Cl,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,i=!1){if(e.fadeOut(t),this.fadeIn(t),i===!0){let n=this._clip.duration,r=e._clip.duration,a=r/n,o=n/r;e._restoreTimeScale=e.timeScale,this._restoreTimeScale=this.timeScale,e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,i=!1){return e.crossFadeFrom(this,t,i)}stopFading(){let e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,i){let n=this._mixer,r=n.time,a=this.timeScale,o=this._timeScaleInterpolant;o===null&&(o=n._lendControlInterpolant(),this._timeScaleInterpolant=o);let c=o.parameterPositions,l=o.sampleValues;return c[0]=r,c[1]=r+i,l[0]=e/a,l[1]=t/a,this}stopWarping(){let e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this._restoreTimeScale=null,this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,i,n){if(!this.enabled){this._updateWeight(e);return}let r=this._startTime;if(r!==null){let c=(e-r)*i;c<0||i===0?t=0:(this._startTime=null,t=i*c)}t*=this._updateTimeScale(e);let a=this._updateTime(t),o=this._updateWeight(e);if(o>0){let c=this._interpolants,l=this._propertyBindings;switch(this.blendMode){case Np:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulateAdditive(o);break;case Pl:default:for(let h=0,u=c.length;h!==u;++h)c[h].evaluate(a),l[h].accumulate(n,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;let i=this._weightInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(this.stopFading(),n===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;let i=this._timeScaleInterpolant;if(i!==null){let n=i.evaluate(e)[0];t*=n,e>i.parameterPositions[1]&&(t===0?this.paused=!0:(this._restoreTimeScale!==null&&(t=this._restoreTimeScale),this.timeScale=t),this.stopWarping())}}return this._effectiveTimeScale=t,t}_updateTime(e){let t=this._clip.duration,i=this.loop,n=this.time+e,r=this._loopCount,a=i===Lp;if(e===0)return r===-1?n:a&&(r&1)===1?t-n:n;if(i===Rl){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(n>=t)n=t;else if(n<0)n=0;else{this.time=n;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),n>=t||n<0){let o=Math.floor(n/t);n-=t*o,r+=Math.abs(o);let c=this.repetitions-r;if(c<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,n=e>0?t:0,this.time=n,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(c===1){let l=e<0;this._setEndings(l,!l,a)}else this._setEndings(!1,!1,a);this._loopCount=r,this.time=n,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this._loopCount=r,this.time=n;if(a&&(r&1)===1)return t-n}return n}_setEndings(e,t,i){let n=this._interpolantSettings;i?(n.endingStart=Es,n.endingEnd=Es):(e?n.endingStart=this.zeroSlopeAtStart?Es:ws:n.endingStart=ba,t?n.endingEnd=this.zeroSlopeAtEnd?Es:ws:n.endingEnd=ba)}_scheduleFading(e,t,i){let n=this._mixer,r=n.time,a=this._weightInterpolant;a===null&&(a=n._lendControlInterpolant(),this._weightInterpolant=a);let o=a.parameterPositions,c=a.sampleValues;return o[0]=r,c[0]=t,o[1]=r+e,c[1]=i,this}},lb=new Float32Array(1),ks=class extends nn{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}_bindAction(e,t){let i=e._localRoot||this._root,n=e._clip.tracks,r=n.length,a=e._propertyBindings,o=e._interpolants,c=i.uuid,l=this._bindingsByRootAndName,h=l[c];h===void 0&&(h={},l[c]=h);for(let u=0;u!==r;++u){let d=n[u],f=d.name,g=h[f];if(g!==void 0)++g.referenceCount,a[u]=g;else{if(g=a[u],g!==void 0){g._cacheIndex===null&&(++g.referenceCount,this._addInactiveBinding(g,c,f));continue}let x=t&&t._propertyBindings[u].binding.parsedPath;g=new zc(St.create(i,f,x),d.ValueTypeName,d.getValueSize()),++g.referenceCount,this._addInactiveBinding(g,c,f),a[u]=g}o[u].resultBuffer=g.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){let i=(e._localRoot||this._root).uuid,n=e._clip.uuid,r=this._actionsByClip[n];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,n,i)}let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;let e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){let t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,i){let n=this._actions,r=this._actionsByClip,a=r[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=a;else{let o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=n.length,n.push(e),a.actionByRoot[i]=e}_removeInactiveAction(e){let t=this._actions,i=t[t.length-1],n=e._cacheIndex;i._cacheIndex=n,t[n]=i,t.pop(),e._cacheIndex=null;let r=e._clip.uuid,a=this._actionsByClip,o=a[r],c=o.knownActions,l=c[c.length-1],h=e._byClipCacheIndex;l._byClipCacheIndex=h,c[h]=l,c.pop(),e._byClipCacheIndex=null;let u=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],c.length===0&&delete a[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){let t=e._propertyBindings;for(let i=0,n=t.length;i!==n;++i){let r=t[i];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){let t=this._actions,i=e._cacheIndex,n=this._nActiveActions++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackAction(e){let t=this._actions,i=e._cacheIndex,n=--this._nActiveActions,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_addInactiveBinding(e,t,i){let n=this._bindingsByRootAndName,r=this._bindings,a=n[t];a===void 0&&(a={},n[t]=a),a[i]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){let t=this._bindings,i=e.binding,n=i.rootNode.uuid,r=i.path,a=this._bindingsByRootAndName,o=a[n],c=t[t.length-1],l=e._cacheIndex;c._cacheIndex=l,t[l]=c,t.pop(),delete o[r],Object.keys(o).length===0&&delete a[n]}_lendBinding(e){let t=this._bindings,i=e._cacheIndex,n=this._nActiveBindings++,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_takeBackBinding(e){let t=this._bindings,i=e._cacheIndex,n=--this._nActiveBindings,r=t[n];e._cacheIndex=n,t[n]=e,r._cacheIndex=i,t[i]=r}_lendControlInterpolant(){let e=this._controlInterpolants,t=this._nActiveControlInterpolants++,i=e[t];return i===void 0&&(i=new za(new Float32Array(2),new Float32Array(2),1,lb),i.__cacheIndex=t,e[t]=i),i}_takeBackControlInterpolant(e){let t=this._controlInterpolants,i=e.__cacheIndex,n=--this._nActiveControlInterpolants,r=t[n];e.__cacheIndex=n,t[n]=e,r.__cacheIndex=i,t[i]=r}clipAction(e,t,i){let n=t||this._root,r=n.uuid,a=typeof e=="string"?Ns.findByName(n,e):e,o=a!==null?a.uuid:e,c=this._actionsByClip[o],l=null;if(i===void 0&&(a!==null?i=a.blendMode:i=Pl),c!==void 0){let u=c.actionByRoot[r];if(u!==void 0&&u.blendMode===i)return u;l=c.knownActions[0],a===null&&(a=l._clip)}if(a===null)return null;let h=new Hc(this,a,t,i);return this._bindAction(h,l),this._addInactiveAction(h,o,r),h}existingAction(e,t){let i=t||this._root,n=i.uuid,r=typeof e=="string"?Ns.findByName(i,e):e,a=r?r.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[n]||null}stopAllAction(){let e=this._actions,t=this._nActiveActions;for(let i=t-1;i>=0;--i)e[i].stop();return this}update(e){e*=this.timeScale;let t=this._actions,i=this._nActiveActions,n=this.time+=e,r=Math.sign(e),a=this._accuIndex^=1;for(let l=0;l!==i;++l)t[l]._update(n,e,r,a);let o=this._bindings,c=this._nActiveBindings;for(let l=0;l!==c;++l)o[l].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){let t=this._actions,i=e.uuid,n=this._actionsByClip,r=n[i];if(r!==void 0){let a=r.knownActions;for(let o=0,c=a.length;o!==c;++o){let l=a[o];this._deactivateAction(l);let h=l._cacheIndex,u=t[t.length-1];l._cacheIndex=null,l._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(l)}delete n[i]}}uncacheRoot(e){let t=e.uuid,i=this._actionsByClip;for(let a in i){let o=i[a].actionByRoot,c=o[t];c!==void 0&&(this._deactivateAction(c),this._removeInactiveAction(c))}let n=this._bindingsByRootAndName,r=n[t];if(r!==void 0)for(let a in r){let o=r[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){let i=this.existingAction(e,t);i!==null&&(this._deactivateAction(i),this._removeInactiveAction(i))}};var op=new Pe,Wn=class{constructor(e,t,i=0,n=1/0){this.ray=new rs(e,t),this.near=i,this.far=n,this.camera=null,this.layers=new yr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ve("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return op.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(op),this}intersectObject(e,t=!0,i=[]){return ou(e,this,i,t),i.sort(cp),i}intersectObjects(e,t=!0,i=[]){for(let n=0,r=e.length;n<r;n++)ou(e[n],this,i,t);return i.sort(cp),i}};function cp(s,e){return s.distance-e.distance}function ou(s,e,t,i){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&i===!0){let r=s.children;for(let a=0,o=r.length;a<o;a++)ou(r[a],e,t,!0)}}var cu=class s{static{s.prototype.isMatrix2=!0}constructor(e,t,i,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,i,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let i=0;i<4;i++)this.elements[i]=e[i+t];return this}set(e,t,i,n){let r=this.elements;return r[0]=e,r[2]=t,r[1]=i,r[3]=n,this}};function Iu(s,e,t,i){let n=hb(i);switch(t){case _u:return s*e;case Kc:return s*e/n.components*n.byteLength;case Jc:return s*e/n.components*n.byteLength;case ps:return s*e*2/n.components*n.byteLength;case Yc:return s*e*2/n.components*n.byteLength;case yu:return s*e*3/n.components*n.byteLength;case ki:return s*e*4/n.components*n.byteLength;case Zc:return s*e*4/n.components*n.byteLength;case to:case io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case no:case so:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Qc:case tl:return Math.max(s,16)*Math.max(e,8)/4;case $c:case el:return Math.max(s,8)*Math.max(e,8)/2;case il:case nl:case rl:case al:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sl:case ro:case ol:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ll:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hl:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case dl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case fl:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case pl:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case ml:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case gl:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case bl:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case vl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case _l:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case yl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Sl:case Ml:case wl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case El:case Tl:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ao:case Al:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hb(s){switch(s){case Ai:case gu:return{byteLength:1,components:1};case kr:case bu:case ri:return{byteLength:2,components:1};case jc:case Xc:return{byteLength:2,components:4};case Ni:case qc:case Fi:return{byteLength:4,components:1};case xu:case vu:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?Le("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Mm(){let s=null,e=!1,t=null,i=null;function n(r,a){i=s.requestAnimationFrame(n),t(r,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(i=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function db(s){let e=new WeakMap;function t(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=s.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=s.SHORT;else if(l instanceof Uint32Array)f=s.UNSIGNED_INT;else if(l instanceof Int32Array)f=s.INT;else if(l instanceof Int8Array)f=s.BYTE;else if(l instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(s.bindBuffer(l,o),u.length===0)s.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],x=u[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,u[d]=x)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let x=u[f];s.bufferSubData(l,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}c.clearUpdateRanges()}c.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(s.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:n,remove:r,update:a}}var fb=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pb=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bb=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,_b=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,yb=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Sb=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mb=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,wb=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Eb=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Tb=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ab=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Rb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Cb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Pb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ib=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Db=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Nb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Fb=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,kb=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ob=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ub=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Bb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,zb=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Hb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Gb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Vb="gl_FragColor = linearToOutputTexel( gl_FragColor );",Wb=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,jb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Xb=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Kb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Jb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,$b=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Qb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ex=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,tx=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ix=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,nx=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,sx=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,rx=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,ax=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,ox=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,cx=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,lx=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,hx=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ux=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,dx=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,fx=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,px=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,mx=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,gx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,bx=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,xx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,vx=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,_x=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yx=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Sx=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Mx=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wx=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Ex=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Tx=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ax=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Rx=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cx=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Px=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ix=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Dx=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Lx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Nx=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Fx=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kx=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ox=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ux=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Bx=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,zx=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Hx=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Gx=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Vx=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Wx=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qx=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,jx=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Xx=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Kx=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Jx=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yx=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Zx=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,$x=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Qx=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,ev=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,tv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,iv=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,sv=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,rv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,av=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ov=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,cv=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,lv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,uv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,dv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,fv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,pv=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,gv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,vv=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,_v=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yv=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,wv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ev=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Tv=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Av=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Rv=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cv=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Iv=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Dv=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lv=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Fv=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ov=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Uv=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bv=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Hv=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vv=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Wv=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,qv=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,jv=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,tt={alphahash_fragment:fb,alphahash_pars_fragment:pb,alphamap_fragment:mb,alphamap_pars_fragment:gb,alphatest_fragment:bb,alphatest_pars_fragment:xb,aomap_fragment:vb,aomap_pars_fragment:_b,batching_pars_vertex:yb,batching_vertex:Sb,begin_vertex:Mb,beginnormal_vertex:wb,bsdfs:Eb,iridescence_fragment:Tb,bumpmap_pars_fragment:Ab,clipping_planes_fragment:Rb,clipping_planes_pars_fragment:Cb,clipping_planes_pars_vertex:Pb,clipping_planes_vertex:Ib,color_fragment:Db,color_pars_fragment:Lb,color_pars_vertex:Nb,color_vertex:Fb,common:kb,cube_uv_reflection_fragment:Ob,defaultnormal_vertex:Ub,displacementmap_pars_vertex:Bb,displacementmap_vertex:zb,emissivemap_fragment:Hb,emissivemap_pars_fragment:Gb,colorspace_fragment:Vb,colorspace_pars_fragment:Wb,envmap_fragment:qb,envmap_common_pars_fragment:jb,envmap_pars_fragment:Xb,envmap_pars_vertex:Kb,envmap_physical_pars_fragment:rx,envmap_vertex:Jb,fog_vertex:Yb,fog_pars_vertex:Zb,fog_fragment:$b,fog_pars_fragment:Qb,gradientmap_pars_fragment:ex,lightmap_pars_fragment:tx,lights_lambert_fragment:ix,lights_lambert_pars_fragment:nx,lights_pars_begin:sx,lights_toon_fragment:ax,lights_toon_pars_fragment:ox,lights_phong_fragment:cx,lights_phong_pars_fragment:lx,lights_physical_fragment:hx,lights_physical_pars_fragment:ux,lights_fragment_begin:dx,lights_fragment_maps:fx,lights_fragment_end:px,lightprobes_pars_fragment:mx,logdepthbuf_fragment:gx,logdepthbuf_pars_fragment:bx,logdepthbuf_pars_vertex:xx,logdepthbuf_vertex:vx,map_fragment:_x,map_pars_fragment:yx,map_particle_fragment:Sx,map_particle_pars_fragment:Mx,metalnessmap_fragment:wx,metalnessmap_pars_fragment:Ex,morphinstance_vertex:Tx,morphcolor_vertex:Ax,morphnormal_vertex:Rx,morphtarget_pars_vertex:Cx,morphtarget_vertex:Px,normal_fragment_begin:Ix,normal_fragment_maps:Dx,normal_pars_fragment:Lx,normal_pars_vertex:Nx,normal_vertex:Fx,normalmap_pars_fragment:kx,clearcoat_normal_fragment_begin:Ox,clearcoat_normal_fragment_maps:Ux,clearcoat_pars_fragment:Bx,iridescence_pars_fragment:zx,opaque_fragment:Hx,packing:Gx,premultiplied_alpha_fragment:Vx,project_vertex:Wx,dithering_fragment:qx,dithering_pars_fragment:jx,roughnessmap_fragment:Xx,roughnessmap_pars_fragment:Kx,shadowmap_pars_fragment:Jx,shadowmap_pars_vertex:Yx,shadowmap_vertex:Zx,shadowmask_pars_fragment:$x,skinbase_vertex:Qx,skinning_pars_vertex:ev,skinning_vertex:tv,skinnormal_vertex:iv,specularmap_fragment:nv,specularmap_pars_fragment:sv,tonemapping_fragment:rv,tonemapping_pars_fragment:av,transmission_fragment:ov,transmission_pars_fragment:cv,uv_pars_fragment:lv,uv_pars_vertex:hv,uv_vertex:uv,worldpos_vertex:dv,background_vert:fv,background_frag:pv,backgroundCube_vert:mv,backgroundCube_frag:gv,cube_vert:bv,cube_frag:xv,depth_vert:vv,depth_frag:_v,distance_vert:yv,distance_frag:Sv,equirect_vert:Mv,equirect_frag:wv,linedashed_vert:Ev,linedashed_frag:Tv,meshbasic_vert:Av,meshbasic_frag:Rv,meshlambert_vert:Cv,meshlambert_frag:Pv,meshmatcap_vert:Iv,meshmatcap_frag:Dv,meshnormal_vert:Lv,meshnormal_frag:Nv,meshphong_vert:Fv,meshphong_frag:kv,meshphysical_vert:Ov,meshphysical_frag:Uv,meshtoon_vert:Bv,meshtoon_frag:zv,points_vert:Hv,points_frag:Gv,shadow_vert:Vv,shadow_frag:Wv,sprite_vert:qv,sprite_frag:jv},ue={common:{diffuse:{value:new ge(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xe}},envmap:{envMap:{value:null},envMapRotation:{value:new Xe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xe},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ge(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new R},probesMax:{value:new R},probesResolution:{value:new R}},points:{diffuse:{value:new ge(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0},uvTransform:{value:new Xe}},sprite:{diffuse:{value:new ge(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xe},alphaMap:{value:null},alphaMapTransform:{value:new Xe},alphaTest:{value:0}}},yn={basic:{uniforms:ui([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.fog]),vertexShader:tt.meshbasic_vert,fragmentShader:tt.meshbasic_frag},lambert:{uniforms:ui([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},envMapIntensity:{value:1}}]),vertexShader:tt.meshlambert_vert,fragmentShader:tt.meshlambert_frag},phong:{uniforms:ui([ue.common,ue.specularmap,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},specular:{value:new ge(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:tt.meshphong_vert,fragmentShader:tt.meshphong_frag},standard:{uniforms:ui([ue.common,ue.envmap,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.roughnessmap,ue.metalnessmap,ue.fog,ue.lights,{emissive:{value:new ge(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag},toon:{uniforms:ui([ue.common,ue.aomap,ue.lightmap,ue.emissivemap,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.gradientmap,ue.fog,ue.lights,{emissive:{value:new ge(0)}}]),vertexShader:tt.meshtoon_vert,fragmentShader:tt.meshtoon_frag},matcap:{uniforms:ui([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,ue.fog,{matcap:{value:null}}]),vertexShader:tt.meshmatcap_vert,fragmentShader:tt.meshmatcap_frag},points:{uniforms:ui([ue.points,ue.fog]),vertexShader:tt.points_vert,fragmentShader:tt.points_frag},dashed:{uniforms:ui([ue.common,ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:tt.linedashed_vert,fragmentShader:tt.linedashed_frag},depth:{uniforms:ui([ue.common,ue.displacementmap]),vertexShader:tt.depth_vert,fragmentShader:tt.depth_frag},normal:{uniforms:ui([ue.common,ue.bumpmap,ue.normalmap,ue.displacementmap,{opacity:{value:1}}]),vertexShader:tt.meshnormal_vert,fragmentShader:tt.meshnormal_frag},sprite:{uniforms:ui([ue.sprite,ue.fog]),vertexShader:tt.sprite_vert,fragmentShader:tt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:tt.background_vert,fragmentShader:tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xe}},vertexShader:tt.backgroundCube_vert,fragmentShader:tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:tt.cube_vert,fragmentShader:tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:tt.equirect_vert,fragmentShader:tt.equirect_frag},distance:{uniforms:ui([ue.common,ue.displacementmap,{referencePosition:{value:new R},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:tt.distance_vert,fragmentShader:tt.distance_frag},shadow:{uniforms:ui([ue.lights,ue.fog,{color:{value:new ge(0)},opacity:{value:1}}]),vertexShader:tt.shadow_vert,fragmentShader:tt.shadow_frag}};yn.physical={uniforms:ui([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xe},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xe},sheen:{value:0},sheenColor:{value:new ge(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xe},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xe},attenuationDistance:{value:0},attenuationColor:{value:new ge(0)},specularColor:{value:new ge(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xe},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xe}}]),vertexShader:tt.meshphysical_vert,fragmentShader:tt.meshphysical_frag};var Nl={r:0,b:0,g:0},Xv=new Pe,wm=new Xe;wm.set(-1,0,0,0,1,0,0,0,1);function Kv(s,e,t,i,n,r){let a=new ge(0),o=n===!0?0:1,c,l,h=null,u=0,d=null;function f(v){let S=v.isScene===!0?v.background:null;if(S&&S.isTexture){let b=v.backgroundBlurriness>0;S=e.get(S,b)}return S}function g(v){let S=!1,b=f(v);b===null?m(a,o):b&&b.isColor&&(m(b,1),S=!0);let M=s.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(s.autoClear||S)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(v,S){let b=f(S);b&&(b.isCubeTexture||b.mapping===eo)?(l===void 0&&(l=new ke(new Mt(1,1,1),new Nt({name:"BackgroundCubeMaterial",uniforms:Gs(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:Yt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(M,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(Xv.makeRotationFromEuler(S.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(wm),l.material.toneMapped=$e.getTransfer(b.colorSpace)!==ut,(h!==b||u!==b.version||d!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),l.layers.enableAll(),v.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new ke(new Ht(2,2),new Nt({name:"BackgroundMaterial",uniforms:Gs(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=$e.getTransfer(b.colorSpace)!==ut,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=s.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function m(v,S){v.getRGB(Nl,Ru(s)),t.buffers.color.setClear(Nl.r,Nl.g,Nl.b,S,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(v,S=1){a.set(v),o=S,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(v){o=v,m(a,o)},render:g,addToRenderList:x,dispose:p}}function Jv(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),i={},n=d(null),r=n,a=!1;function o(I,N,B,D,O){let V=!1,j=u(I,D,B,N);r!==j&&(r=j,l(r.object)),V=f(I,D,B,O),V&&g(I,D,B,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,b(I,N,B,D),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function c(){return s.createVertexArray()}function l(I){return s.bindVertexArray(I)}function h(I){return s.deleteVertexArray(I)}function u(I,N,B,D){let O=D.wireframe===!0,V=i[N.id];V===void 0&&(V={},i[N.id]=V);let j=I.isInstancedMesh===!0?I.id:0,ne=V[j];ne===void 0&&(ne={},V[j]=ne);let q=ne[B.id];q===void 0&&(q={},ne[B.id]=q);let Z=q[O];return Z===void 0&&(Z=d(c()),q[O]=Z),Z}function d(I){let N=[],B=[],D=[];for(let O=0;O<t;O++)N[O]=0,B[O]=0,D[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:B,attributeDivisors:D,object:I,attributes:{},index:null}}function f(I,N,B,D){let O=r.attributes,V=N.attributes,j=0,ne=B.getAttributes();for(let q in ne)if(ne[q].location>=0){let Q=O[q],Re=V[q];if(Re===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Re=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Re=I.instanceColor)),Q===void 0||Q.attribute!==Re||Re&&Q.data!==Re.data)return!0;j++}return r.attributesNum!==j||r.index!==D}function g(I,N,B,D){let O={},V=N.attributes,j=0,ne=B.getAttributes();for(let q in ne)if(ne[q].location>=0){let Q=V[q];Q===void 0&&(q==="instanceMatrix"&&I.instanceMatrix&&(Q=I.instanceMatrix),q==="instanceColor"&&I.instanceColor&&(Q=I.instanceColor));let Re={};Re.attribute=Q,Q&&Q.data&&(Re.data=Q.data),O[q]=Re,j++}r.attributes=O,r.attributesNum=j,r.index=D}function x(){let I=r.newAttributes;for(let N=0,B=I.length;N<B;N++)I[N]=0}function m(I){p(I,0)}function p(I,N){let B=r.newAttributes,D=r.enabledAttributes,O=r.attributeDivisors;B[I]=1,D[I]===0&&(s.enableVertexAttribArray(I),D[I]=1),O[I]!==N&&(s.vertexAttribDivisor(I,N),O[I]=N)}function v(){let I=r.newAttributes,N=r.enabledAttributes;for(let B=0,D=N.length;B<D;B++)N[B]!==I[B]&&(s.disableVertexAttribArray(B),N[B]=0)}function S(I,N,B,D,O,V,j){j===!0?s.vertexAttribIPointer(I,N,B,O,V):s.vertexAttribPointer(I,N,B,D,O,V)}function b(I,N,B,D){x();let O=D.attributes,V=B.getAttributes(),j=N.defaultAttributeValues;for(let ne in V){let q=V[ne];if(q.location>=0){let Z=O[ne];if(Z===void 0&&(ne==="instanceMatrix"&&I.instanceMatrix&&(Z=I.instanceMatrix),ne==="instanceColor"&&I.instanceColor&&(Z=I.instanceColor)),Z!==void 0){let Q=Z.normalized,Re=Z.itemSize,Me=e.get(Z);if(Me===void 0)continue;let ft=Me.buffer,nt=Me.type,lt=Me.bytesPerElement,J=nt===s.INT||nt===s.UNSIGNED_INT||Z.gpuType===qc;if(Z.isInterleavedBufferAttribute){let ee=Z.data,xe=ee.stride,We=Z.offset;if(ee.isInstancedInterleavedBuffer){for(let Se=0;Se<q.locationSize;Se++)p(q.location+Se,ee.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let Se=0;Se<q.locationSize;Se++)m(q.location+Se);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let Se=0;Se<q.locationSize;Se++)S(q.location+Se,Re/q.locationSize,nt,Q,xe*lt,(We+Re/q.locationSize*Se)*lt,J)}else{if(Z.isInstancedBufferAttribute){for(let ee=0;ee<q.locationSize;ee++)p(q.location+ee,Z.meshPerAttribute);I.isInstancedMesh!==!0&&D._maxInstanceCount===void 0&&(D._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let ee=0;ee<q.locationSize;ee++)m(q.location+ee);s.bindBuffer(s.ARRAY_BUFFER,ft);for(let ee=0;ee<q.locationSize;ee++)S(q.location+ee,Re/q.locationSize,nt,Q,Re*lt,Re/q.locationSize*ee*lt,J)}}else if(j!==void 0){let Q=j[ne];if(Q!==void 0)switch(Q.length){case 2:s.vertexAttrib2fv(q.location,Q);break;case 3:s.vertexAttrib3fv(q.location,Q);break;case 4:s.vertexAttrib4fv(q.location,Q);break;default:s.vertexAttrib1fv(q.location,Q)}}}}v()}function M(){T();for(let I in i){let N=i[I];for(let B in N){let D=N[B];for(let O in D){let V=D[O];for(let j in V)h(V[j].object),delete V[j];delete D[O]}}delete i[I]}}function w(I){if(i[I.id]===void 0)return;let N=i[I.id];for(let B in N){let D=N[B];for(let O in D){let V=D[O];for(let j in V)h(V[j].object),delete V[j];delete D[O]}}delete i[I.id]}function A(I){for(let N in i){let B=i[N];for(let D in B){let O=B[D];if(O[I.id]===void 0)continue;let V=O[I.id];for(let j in V)h(V[j].object),delete V[j];delete O[I.id]}}}function _(I){for(let N in i){let B=i[N],D=I.isInstancedMesh===!0?I.id:0,O=B[D];if(O!==void 0){for(let V in O){let j=O[V];for(let ne in j)h(j[ne].object),delete j[ne];delete O[V]}delete B[D],Object.keys(B).length===0&&delete i[N]}}}function T(){P(),a=!0,r!==n&&(r=n,l(r.object))}function P(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:w,releaseStatesOfObject:_,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function Yv(s,e,t){let i;function n(c){i=c}function r(c,l){s.drawArrays(i,c,l),t.update(l,i,1)}function a(c,l,h){h!==0&&(s.drawArraysInstanced(i,c,l,h),t.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];t.update(d,i,1)}this.setMode=n,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Zv(s,e,t,i){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==ki&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let _=A===ri&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ai&&A!==Fi&&!_&&i.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp",h=c(l);h!==l&&(Le("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=t.logarithmicDepthBuffer===!0,d=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&d===!1&&Le("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),v=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),S=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),M=s.getParameter(s.MAX_SAMPLES),w=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:v,maxVaryings:S,maxFragmentUniforms:b,maxSamples:M,samples:w}}function $v(s){let e=this,t=null,i=0,n=!1,r=!1,a=new ni,o=new Xe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||n;return n=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!n||g===null||g.length===0||r&&!m)r?h(null):l();else{let v=r?0:i,S=v*4,b=p.clippingState||null;c.value=b,b=h(g,d,S,f);for(let M=0;M!==S;++M)b[M]=t[M];p.clippingState=b,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let x=u!==null?u.length:0,m=null;if(x!==0){if(m=c.value,g!==!0||m===null){let p=f+x*4,v=d.matrixWorldInverse;o.getNormalMatrix(v),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,b=f;S!==x;++S,b+=4)a.copy(u[S]).applyMatrix4(v,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}var zr=4,Qv=6,e_=20,t_=256,lo=new vn,im=new ge,Du=null,Lu=0,Nu=0,Fu=!1,i_=new R,Vs=new R,Gr=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,i=.1,n=100,r={}){let{size:a=256,position:o=i_}=r;Du=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,i,n,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=rm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=sm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Du,Lu,Nu),this._renderer.xr.enabled=Fu,e.scissorTest=!1,Br(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ds||e.mapping===zs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Du=this._renderer.getRenderTarget(),Lu=this._renderer.getActiveCubeFace(),Nu=this._renderer.getActiveMipmapLevel(),Fu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:It,minFilter:It,generateMipmaps:!1,type:ri,format:ki,colorSpace:pi,depthBuffer:!1},n=nm(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=nm(e,t,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=n_(r)),this._blurMaterial=r_(r,e,t),this._ggxMaterial=s_(r,e,t)}return n}_compileMaterial(e){let t=new ke(new ze,e);this._renderer.compile(t,lo)}_sceneToCubeUV(e,t,i,n,r){let c=new Ft(90,1,t,i),l=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(im),u.toneMapping=on,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(n),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ke(new Mt,new zt({name:"PMREM.Background",side:Yt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,m=x.material,p=!1,v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,p=!0):(m.color.copy(im),p=!0);for(let S=0;S<6;S++){let b=S%3;b===0?(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x+h[S],r.y,r.z)):b===1?(c.up.set(0,0,l[S]),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y+h[S],r.z)):(c.up.set(0,l[S],0),c.position.set(r.x,r.y,r.z),c.lookAt(r.x,r.y,r.z+h[S]));let M=this._cubeSize;Br(n,b*M,S>2?M:0,M,M),u.setRenderTarget(n),p&&u.render(x,c),u.render(e,c)}u.toneMapping=f,u.autoClear=d,e.background=v}_textureToCubeUV(e,t){let i=this._renderer,n=e.mapping===ds||e.mapping===zs;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=rm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=sm());let r=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=e;let c=this._cubeSize;Br(t,0,0,3*c,2*c),i.setRenderTarget(t),i.render(a,lo)}_applyPMREM(e){let t=this._renderer,i=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let r=1;r<n;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=i}_applyGGXFilter(e,t,i){let n=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let c=a.uniforms,l=i/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(l*l-h*h),d=l*1.25,f=u*d,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-zr?i-g+zr:0),p=4*(this._cubeSize-x);c.envMap.value=e.texture,c.roughness.value=f,c.mipInt.value=g-t,Br(r,m,p,3*x,2*x),n.setRenderTarget(r),n.render(o,lo),c.envMap.value=r.texture,c.roughness.value=0,c.mipInt.value=g-i,Br(e,m,p,3*x,2*x),n.setRenderTarget(e),n.render(o,lo)}_blur(e,t,i,n){let r=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,i,a),this._blurPass(r,e,i,i,a)}_blurPass(e,t,i,n,r){let a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[n];c.material=o;let l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=r,l.mipInt.value=this._lodMax-i;let h=this._sizeLods[n],u=3*h*(n>this._lodMax-zr?n-this._lodMax+zr:0),d=4*(this._cubeSize-h);Br(t,u,d,3*h,2*h),a.setRenderTarget(t),a.render(c,lo)}};function n_(s){let e=[],t=[],i=s,n=s-zr+1+Qv;for(let r=0;r<n;r++){let a=Math.pow(2,i);e.push(a);let o=1/(a-2),c=-o,l=1+o,h=[c,c,l,c,l,l,c,c,l,l,c,l],u=6,d=6,f=3,g=new Float32Array(f*d*u),x=new Float32Array(f*d*u);for(let p=0;p<u;p++){let v=p%3*2/3-1,S=p>2?0:-1,b=[v,S,0,v+2/3,S,0,v+2/3,S+1,0,v,S,0,v+2/3,S+1,0,v,S+1,0];g.set(b,f*d*p);for(let M=0;M<d;M++){let w=h[M*2]*2-1,A=h[M*2+1]*2-1;p===0?Vs.set(1,A,w):p===1?Vs.set(-w,1,-A):p===2?Vs.set(-w,A,1):p===3?Vs.set(-1,A,-w):p===4?Vs.set(-w,-1,A):Vs.set(w,A,-1),Vs.toArray(x,(p*d+M)*f)}}let m=new ze;m.setAttribute("position",new Lt(g,f)),m.setAttribute("outputDirection",new Lt(x,f)),t.push(new ke(m,null)),i>zr&&i--}return{lodMeshes:t,sizeLods:e}}function nm(s,e,t){let i=new qt(s,e,t);return i.texture.mapping=eo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Br(s,e,t,i,n){s.viewport.set(e,t,i,n),s.scissor.set(e,t,i,n)}function s_(s,e,t){return new Nt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:t_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function r_(s,e,t){return new Nt({name:"SphericalGaussianBlur",defines:{SAMPLES:e_,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Ul(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function sm(){return new Nt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function rm(){return new Nt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Xi,depthTest:!1,depthWrite:!1})}function Ul(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var kl=class extends qt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},n=[i,i,i,i,i,i];this.texture=new Aa(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Mt(5,5,5),r=new Nt({name:"CubemapFromEquirect",uniforms:Gs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Yt,blending:Xi});r.uniforms.tEquirect.value=t;let a=new ke(n,r),o=t.minFilter;return t.minFilter===Ti&&(t.minFilter=It),new Uc(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,i=!0,n=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,i,n);e.setRenderTarget(r)}};function a_(s){let e=new WeakMap,t=new WeakMap,i=null;function n(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===Gc||f===Vc)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let x=new kl(g.height);return x.fromEquirectangularTexture(s,d),e.set(d,x),d.addEventListener("dispose",l),o(x.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture){let f=d.mapping,g=f===Gc||f===Vc,x=f===ds||f===zs;if(g||x){let m=t.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new Gr(s)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),m.texture;if(m!==void 0)return m.texture;{let v=d.image;return g&&v&&v.height>0||x&&v&&c(v)?(i===null&&(i=new Gr(s)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,t.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===Gc?d.mapping=ds:f===Vc&&(d.mapping=zs),d}function c(d){let f=0,g=6;for(let x=0;x<g;x++)d[x]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function u(){e=new WeakMap,t=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:n,dispose:u}}function o_(s){let e={};function t(i){if(e[i]!==void 0)return e[i];let n=s.getExtension(i);return e[i]=n,n}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){let n=t(i);return n===null&&As("WebGLRenderer: "+i+" extension not supported."),n}}}function c_(s,e,t,i){let n={},r=new WeakMap;function a(u){let d=u.target;d.index!==null&&e.remove(d.index);for(let g in d.attributes)e.remove(d.attributes[g]);d.removeEventListener("dispose",a),delete n[d.id];let f=r.get(d);f&&(e.remove(f),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(u,d){return n[d.id]===!0||(d.addEventListener("dispose",a),n[d.id]=!0,t.memory.geometries++),d}function c(u){let d=u.attributes;for(let f in d)e.update(d[f],s.ARRAY_BUFFER)}function l(u){let d=[],f=u.index,g=u.attributes.position,x=0;if(g===void 0)return;if(f!==null){let v=f.array;x=f.version;for(let S=0,b=v.length;S<b;S+=3){let M=v[S+0],w=v[S+1],A=v[S+2];d.push(M,w,w,A,A,M)}}else{let v=g.array;x=g.version;for(let S=0,b=v.length/3-1;S<b;S+=3){let M=S+0,w=S+1,A=S+2;d.push(M,w,w,A,A,M)}}let m=new(g.count>=65535?Sa:Is)(d,1);m.version=x;let p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){let d=r.get(u);if(d){let f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:o,update:c,getWireframeAttribute:h}}function l_(s,e,t){let i;function n(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){s.drawElements(i,d,r,u*a),t.update(d,i,1)}function l(u,d,f){f!==0&&(s.drawElementsInstanced(i,d,r,u*a,f),t.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let x=0;for(let m=0;m<f;m++)x+=d[m];t.update(x,i,1)}this.setMode=n,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function h_(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(r/3);break;case s.LINES:t.lines+=o*(r/2);break;case s.LINE_STRIP:t.lines+=o*(r-1);break;case s.LINE_LOOP:t.lines+=o*r;break;case s.POINTS:t.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:i}}function u_(s,e,t){let i=new WeakMap,n=new ct;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],v=o.morphAttributes.color||[],S=0;f===!0&&(S=1),g===!0&&(S=2),x===!0&&(S=3);let b=o.attributes.position.count*S,M=1;b>e.maxTextureSize&&(M=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let w=new Float32Array(b*M*4*u),A=new _a(w,b,M,u);A.type=Fi,A.needsUpdate=!0;let _=S*4;for(let P=0;P<u;P++){let I=m[P],N=p[P],B=v[P],D=b*M*4*P;for(let O=0;O<I.count;O++){let V=O*_;f===!0&&(n.fromBufferAttribute(I,O),w[D+V+0]=n.x,w[D+V+1]=n.y,w[D+V+2]=n.z,w[D+V+3]=0),g===!0&&(n.fromBufferAttribute(N,O),w[D+V+4]=n.x,w[D+V+5]=n.y,w[D+V+6]=n.z,w[D+V+7]=0),x===!0&&(n.fromBufferAttribute(B,O),w[D+V+8]=n.x,w[D+V+9]=n.y,w[D+V+10]=n.z,w[D+V+11]=B.itemSize===4?n.w:1)}}d={count:u,texture:A,size:new ie(b,M)},i.set(o,d),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<l.length;x++)f+=l[x];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function d_(s,e,t,i,n){let r=new WeakMap;function a(l){let h=n.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var f_={[Ka]:"LINEAR_TONE_MAPPING",[Ja]:"REINHARD_TONE_MAPPING",[Ya]:"CINEON_TONE_MAPPING",[Bs]:"ACES_FILMIC_TONE_MAPPING",[$a]:"AGX_TONE_MAPPING",[Qa]:"NEUTRAL_TONE_MAPPING",[Za]:"CUSTOM_TONE_MAPPING"};function p_(s,e,t,i,n,r){let a=new qt(e,t,{type:s,depthBuffer:n,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=new ze;l.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new Ie([0,2,0,0,2,0],2));let h=new Pr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new ke(l,h),d=new vn(-1,1,1,-1,0,1),f=null,g=null,x=!1,m,p=null,v=[],S=!1;this.setSize=function(b,M){a.setSize(b,M),o!==null&&o.setSize(b,M),c!==null&&c.setSize(b,M);for(let w=0;w<v.length;w++){let A=v[w];A.setSize&&A.setSize(b,M)}},this.setEffects=function(b){v=b,S=v.length>0&&v[0].isRenderPass===!0;let M=a.width,w=a.height;v.length>0&&o===null&&(o=new qt(M,w,{type:ri,depthBuffer:!1,stencilBuffer:!1}),c=new qt(M,w,{type:ri,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<v.length;A++){let _=v[A];_.setSize&&_.setSize(M,w)}},this.begin=function(b,M){if(x||b.toneMapping===on&&v.length===0)return!1;if(p=M,M!==null){let w=M.width,A=M.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return S===!1&&b.setRenderTarget(a),m=b.toneMapping,b.toneMapping=on,!0},this.hasRenderPass=function(){return S},this.end=function(b,M){b.toneMapping=m,x=!0;let w=a,A=o;for(let _=0;_<v.length;_++){let T=v[_];T.enabled!==!1&&(T.render(b,A,w,M),T.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(f!==b.outputColorSpace||g!==b.toneMapping){f=b.outputColorSpace,g=b.toneMapping,h.defines={},$e.getTransfer(f)===ut&&(h.defines.SRGB_TRANSFER="");let _=f_[g];_&&(h.defines[_]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=w.texture,b.setRenderTarget(p),b.render(u,d),p=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),h.dispose()}}var Em=new Xt,Uu=new gn(1,1),Tm=new _a,Am=new yc,Rm=new Aa,am=[],om=[],cm=new Float32Array(16),lm=new Float32Array(9),hm=new Float32Array(4);function Vr(s,e,t){let i=s[0];if(i<=0||i>0)return s;let n=e*t,r=am[n];if(r===void 0&&(r=new Float32Array(n),am[n]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(r,o)}return r}function Zt(s,e){if(s.length!==e.length)return!1;for(let t=0,i=s.length;t<i;t++)if(s[t]!==e[t])return!1;return!0}function $t(s,e){for(let t=0,i=e.length;t<i;t++)s[t]=e[t]}function Bl(s,e){let t=om[e];t===void 0&&(t=new Int32Array(e),om[e]=t);for(let i=0;i!==e;++i)t[i]=s.allocateTextureUnit();return t}function m_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function g_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2fv(this.addr,e),$t(t,e)}}function b_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Zt(t,e))return;s.uniform3fv(this.addr,e),$t(t,e)}}function x_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4fv(this.addr,e),$t(t,e)}}function v_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;hm.set(i),s.uniformMatrix2fv(this.addr,!1,hm),$t(t,i)}}function __(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;lm.set(i),s.uniformMatrix3fv(this.addr,!1,lm),$t(t,i)}}function y_(s,e){let t=this.cache,i=e.elements;if(i===void 0){if(Zt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),$t(t,e)}else{if(Zt(t,i))return;cm.set(i),s.uniformMatrix4fv(this.addr,!1,cm),$t(t,i)}}function S_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function M_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2iv(this.addr,e),$t(t,e)}}function w_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3iv(this.addr,e),$t(t,e)}}function E_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4iv(this.addr,e),$t(t,e)}}function T_(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function A_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Zt(t,e))return;s.uniform2uiv(this.addr,e),$t(t,e)}}function R_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Zt(t,e))return;s.uniform3uiv(this.addr,e),$t(t,e)}}function C_(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Zt(t,e))return;s.uniform4uiv(this.addr,e),$t(t,e)}}function P_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n);let r;this.type===s.SAMPLER_2D_SHADOW?(Uu.compareFunction=t.isReversedDepthBuffer()?Ll:Dl,r=Uu):r=Em,t.setTexture2D(e||r,n)}function I_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture3D(e||Am,n)}function D_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTextureCube(e||Rm,n)}function L_(s,e,t){let i=this.cache,n=t.allocateTextureUnit();i[0]!==n&&(s.uniform1i(this.addr,n),i[0]=n),t.setTexture2DArray(e||Tm,n)}function N_(s){switch(s){case 5126:return m_;case 35664:return g_;case 35665:return b_;case 35666:return x_;case 35674:return v_;case 35675:return __;case 35676:return y_;case 5124:case 35670:return S_;case 35667:case 35671:return M_;case 35668:case 35672:return w_;case 35669:case 35673:return E_;case 5125:return T_;case 36294:return A_;case 36295:return R_;case 36296:return C_;case 35678:case 36198:case 36298:case 36306:case 35682:return P_;case 35679:case 36299:case 36307:return I_;case 35680:case 36300:case 36308:case 36293:return D_;case 36289:case 36303:case 36311:case 36292:return L_}}function F_(s,e){s.uniform1fv(this.addr,e)}function k_(s,e){let t=Vr(e,this.size,2);s.uniform2fv(this.addr,t)}function O_(s,e){let t=Vr(e,this.size,3);s.uniform3fv(this.addr,t)}function U_(s,e){let t=Vr(e,this.size,4);s.uniform4fv(this.addr,t)}function B_(s,e){let t=Vr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function z_(s,e){let t=Vr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function H_(s,e){let t=Vr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function G_(s,e){s.uniform1iv(this.addr,e)}function V_(s,e){s.uniform2iv(this.addr,e)}function W_(s,e){s.uniform3iv(this.addr,e)}function q_(s,e){s.uniform4iv(this.addr,e)}function j_(s,e){s.uniform1uiv(this.addr,e)}function X_(s,e){s.uniform2uiv(this.addr,e)}function K_(s,e){s.uniform3uiv(this.addr,e)}function J_(s,e){s.uniform4uiv(this.addr,e)}function Y_(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));let a;this.type===s.SAMPLER_2D_SHADOW?a=Uu:a=Em;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,r[o])}function Z_(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Am,r[a])}function $_(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||Rm,r[a])}function Q_(s,e,t){let i=this.cache,n=e.length,r=Bl(t,n);Zt(i,r)||(s.uniform1iv(this.addr,r),$t(i,r));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Tm,r[a])}function ey(s){switch(s){case 5126:return F_;case 35664:return k_;case 35665:return O_;case 35666:return U_;case 35674:return B_;case 35675:return z_;case 35676:return H_;case 5124:case 35670:return G_;case 35667:case 35671:return V_;case 35668:case 35672:return W_;case 35669:case 35673:return q_;case 5125:return j_;case 36294:return X_;case 36295:return K_;case 36296:return J_;case 35678:case 36198:case 36298:case 36306:case 35682:return Y_;case 35679:case 36299:case 36307:return Z_;case 35680:case 36300:case 36308:case 36293:return $_;case 36289:case 36303:case 36311:case 36292:return Q_}}var Bu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=N_(t.type)}},zu=class{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ey(t.type)}},Hu=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){let n=this.seq;for(let r=0,a=n.length;r!==a;++r){let o=n[r];o.setValue(e,t[o.id],i)}}},ku=/(\w+)(\])?(\[|\.)?/g;function um(s,e){s.seq.push(e),s.map[e.id]=e}function ty(s,e,t){let i=s.name,n=i.length;for(ku.lastIndex=0;;){let r=ku.exec(i),a=ku.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===n){um(t,l===void 0?new Bu(o,s,e):new zu(o,s,e));break}else{let u=t.map[o];u===void 0&&(u=new Hu(o),um(t,u)),t=u}}}var Hr=class{constructor(e,t){this.seq=[],this.map={};let i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);ty(o,c,this)}let n=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):r.push(a);n.length>0&&(this.seq=n.concat(r))}setValue(e,t,i,n){let r=this.map[t];r!==void 0&&r.setValue(e,i,n)}setOptional(e,t,i){let n=t[i];n!==void 0&&this.setValue(e,i,n)}static upload(e,t,i,n){for(let r=0,a=t.length;r!==a;++r){let o=t[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,n)}}static seqWithValue(e,t){let i=[];for(let n=0,r=e.length;n!==r;++n){let a=e[n];a.id in t&&i.push(a)}return i}};function dm(s,e,t){let i=s.createShader(e);return s.shaderSource(i,t),s.compileShader(i),i}var iy=37297,ny=0;function sy(s,e){let t=s.split(`
`),i=[],n=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=n;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return i.join(`
`)}var fm=new Xe;function ry(s){$e._getMatrix(fm,$e.workingColorSpace,s);let e=`mat3( ${fm.elements.map(t=>t.toFixed(4))} )`;switch($e.getTransfer(s)){case xa:return[e,"LinearTransferOETF"];case ut:return[e,"sRGBTransferOETF"];default:return Le("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function pm(s,e,t){let i=s.getShaderParameter(e,s.COMPILE_STATUS),r=(s.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sy(s.getShaderSource(e),o)}else return r}function ay(s,e){let t=ry(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var oy={[Ka]:"Linear",[Ja]:"Reinhard",[Ya]:"Cineon",[Bs]:"ACESFilmic",[$a]:"AgX",[Qa]:"Neutral",[Za]:"Custom"};function cy(s,e){let t=oy[e];return t===void 0?(Le("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var Fl=new R;function ly(){$e.getLuminanceCoefficients(Fl);let s=Fl.x.toFixed(4),e=Fl.y.toFixed(4),t=Fl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hy(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(uo).join(`
`)}function uy(s){let e=[];for(let t in s){let i=s[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function dy(s,e){let t={},i=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<i;n++){let r=s.getActiveAttrib(e,n),a=r.name,o=1;r.type===s.FLOAT_MAT2&&(o=2),r.type===s.FLOAT_MAT3&&(o=3),r.type===s.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function uo(s){return s!==""}function mm(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function gm(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var fy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gu(s){return s.replace(fy,my)}var py=new Map;function my(s,e){let t=tt[e];if(t===void 0){let i=py.get(e);if(i!==void 0)t=tt[i],Le('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gu(t)}var gy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function bm(s){return s.replace(gy,by)}function by(s,e,t,i){let n="";for(let r=parseInt(e);r<parseInt(t);r++)n+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return n}function xm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var xy={[Os]:"SHADOWMAP_TYPE_PCF",[Lr]:"SHADOWMAP_TYPE_VSM"};function vy(s){return xy[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var _y={[ds]:"ENVMAP_TYPE_CUBE",[zs]:"ENVMAP_TYPE_CUBE",[eo]:"ENVMAP_TYPE_CUBE_UV"};function yy(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":_y[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var Sy={[zs]:"ENVMAP_MODE_REFRACTION"};function My(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":Sy[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var wy={[pu]:"ENVMAP_BLENDING_MULTIPLY",[Pp]:"ENVMAP_BLENDING_MIX",[Ip]:"ENVMAP_BLENDING_ADD"};function Ey(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":wy[s.combine]||"ENVMAP_BLENDING_NONE"}function Ty(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function Ay(s,e,t,i){let n=s.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,c=vy(t),l=yy(t),h=My(t),u=Ey(t),d=Ty(t),f=hy(t),g=uy(r),x=n.createProgram(),m,p,v=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(uo).join(`
`),p.length>0&&(p+=`
`)):(m=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(uo).join(`
`),p=[xm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==on?"#define TONE_MAPPING":"",t.toneMapping!==on?tt.tonemapping_pars_fragment:"",t.toneMapping!==on?cy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",tt.colorspace_pars_fragment,ay("linearToOutputTexel",t.outputColorSpace),ly(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(uo).join(`
`)),a=Gu(a),a=mm(a,t),a=gm(a,t),o=Gu(o),o=mm(o,t),o=gm(o,t),a=bm(a),o=bm(o),t.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Eu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Eu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let S=v+m+a,b=v+p+o,M=dm(n,n.VERTEX_SHADER,S),w=dm(n,n.FRAGMENT_SHADER,b);n.attachShader(x,M),n.attachShader(x,w),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(I){if(s.debug.checkShaderErrors){let N=n.getProgramInfoLog(x)||"",B=n.getShaderInfoLog(M)||"",D=n.getShaderInfoLog(w)||"",O=N.trim(),V=B.trim(),j=D.trim(),ne=!0,q=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(ne=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,M,w);else{let Z=pm(n,M,"vertex"),Q=pm(n,w,"fragment");Ve("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+O+`
`+Z+`
`+Q)}else O!==""?Le("WebGLProgram: Program Info Log:",O):(V===""||j==="")&&(q=!1);q&&(I.diagnostics={runnable:ne,programLog:O,vertexShader:{log:V,prefix:m},fragmentShader:{log:j,prefix:p}})}n.deleteShader(M),n.deleteShader(w),_=new Hr(n,x),T=dy(n,x)}let _;this.getUniforms=function(){return _===void 0&&A(this),_};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=n.getProgramParameter(x,iy)),P},this.destroy=function(){i.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ny++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=w,this}var Ry=0,Vu=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,i){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(i)===!1&&(n.add(i),i.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){let t=this.shaderCache,i=t.get(e);return i===void 0&&(i=new Wu(e),t.set(e,i)),i}},Wu=class{constructor(e){this.id=Ry++,this.code=e,this.usedTimes=0}};function Cy(s){return s===ps||s===ro||s===ao}function Py(s,e,t,i,n,r){let a=new yr,o=new Vu,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(_){return c.add(_),_===0?"uv":`uv${_}`}function x(_,T,P,I,N,B){let D=I.fog,O=N.geometry,V=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,j=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,ne=e.get(_.envMap||V,j),q=ne&&ne.mapping===eo?ne.image.height:null,Z=f[_.type];_.precision!==null&&(d=i.getMaxPrecision(_.precision),d!==_.precision&&Le("WebGLProgram.getParameters:",_.precision,"not supported, using",d,"instead."));let Q=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,Re=Q!==void 0?Q.length:0,Me=0;O.morphAttributes.position!==void 0&&(Me=1),O.morphAttributes.normal!==void 0&&(Me=2),O.morphAttributes.color!==void 0&&(Me=3);let ft,nt,lt,J;if(Z){let Tt=yn[Z];ft=Tt.vertexShader,nt=Tt.fragmentShader}else{ft=_.vertexShader,nt=_.fragmentShader;let Tt=o.getVertexShaderStage(_),gt=o.getFragmentShaderStage(_);o.update(_,Tt,gt),lt=Tt.id,J=gt.id}let ee=s.getRenderTarget(),xe=s.state.buffers.depth.getReversed(),We=N.isInstancedMesh===!0,Se=N.isBatchedMesh===!0,qe=!!_.map,vt=!!_.matcap,te=!!ne,re=!!_.aoMap,ae=!!_.lightMap,oe=!!_.bumpMap&&_.wireframe===!1,he=!!_.normalMap,He=!!_.displacementMap,Be=!!_.emissiveMap,je=!!_.metalnessMap,Ke=!!_.roughnessMap,L=_.anisotropy>0,mt=_.clearcoat>0,st=_.dispersion>0,C=_.retroreflectivity>0,y=_.iridescence>0,U=_.sheen>0,G=_.transmission>0,X=L&&!!_.anisotropyMap,ce=mt&&!!_.clearcoatMap,le=mt&&!!_.clearcoatNormalMap,K=mt&&!!_.clearcoatRoughnessMap,$=y&&!!_.iridescenceMap,de=y&&!!_.iridescenceThicknessMap,Ne=U&&!!_.sheenColorMap,be=U&&!!_.sheenRoughnessMap,fe=!!_.specularMap,Fe=!!_.specularColorMap,Ge=!!_.specularIntensityMap,Ze=G&&!!_.transmissionMap,k=G&&!!_.thicknessMap,pe=!!_.gradientMap,Y=!!_.alphaMap,me=_.alphaTest>0,ye=!!_.alphaHash,se=!!_.extensions,Oe=on;_.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(Oe=s.toneMapping);let Ce={shaderID:Z,shaderType:_.type,shaderName:_.name,vertexShader:ft,fragmentShader:nt,defines:_.defines,customVertexShaderID:lt,customFragmentShaderID:J,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:d,batching:Se,batchingColor:Se&&N._colorsTexture!==null,instancing:We,instancingColor:We&&N.instanceColor!==null,instancingMorph:We&&N.morphTexture!==null,outputColorSpace:ee===null?s.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:$e.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:qe,matcap:vt,envMap:te,envMapMode:te&&ne.mapping,envMapCubeUVHeight:q,aoMap:re,lightMap:ae,bumpMap:oe,normalMap:he,displacementMap:He,emissiveMap:Be,normalMapObjectSpace:he&&_.normalMapType===kp,normalMapTangentSpace:he&&_.normalMapType===Il,packedNormalMap:he&&_.normalMapType===Il&&Cy(_.normalMap.format),metalnessMap:je,roughnessMap:Ke,anisotropy:L,anisotropyMap:X,clearcoat:mt,clearcoatMap:ce,clearcoatNormalMap:le,clearcoatRoughnessMap:K,dispersion:st,retroreflection:C,iridescence:y,iridescenceMap:$,iridescenceThicknessMap:de,sheen:U,sheenColorMap:Ne,sheenRoughnessMap:be,specularMap:fe,specularColorMap:Fe,specularIntensityMap:Ge,transmission:G,transmissionMap:Ze,thicknessMap:k,gradientMap:pe,opaque:_.transparent===!1&&_.blending===Nr&&_.alphaToCoverage===!1,alphaMap:Y,alphaTest:me,alphaHash:ye,combine:_.combine,mapUv:qe&&g(_.map.channel),aoMapUv:re&&g(_.aoMap.channel),lightMapUv:ae&&g(_.lightMap.channel),bumpMapUv:oe&&g(_.bumpMap.channel),normalMapUv:he&&g(_.normalMap.channel),displacementMapUv:He&&g(_.displacementMap.channel),emissiveMapUv:Be&&g(_.emissiveMap.channel),metalnessMapUv:je&&g(_.metalnessMap.channel),roughnessMapUv:Ke&&g(_.roughnessMap.channel),anisotropyMapUv:X&&g(_.anisotropyMap.channel),clearcoatMapUv:ce&&g(_.clearcoatMap.channel),clearcoatNormalMapUv:le&&g(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(_.clearcoatRoughnessMap.channel),iridescenceMapUv:$&&g(_.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(_.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&g(_.sheenColorMap.channel),sheenRoughnessMapUv:be&&g(_.sheenRoughnessMap.channel),specularMapUv:fe&&g(_.specularMap.channel),specularColorMapUv:Fe&&g(_.specularColorMap.channel),specularIntensityMapUv:Ge&&g(_.specularIntensityMap.channel),transmissionMapUv:Ze&&g(_.transmissionMap.channel),thicknessMapUv:k&&g(_.thicknessMap.channel),alphaMapUv:Y&&g(_.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(he||L),vertexNormals:!!O.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!O.attributes.uv&&(qe||Y),fog:!!D,useFog:_.fog===!0,fogExp2:!!D&&D.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||O.attributes.normal===void 0&&he===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:Re,morphTextureStride:Me,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:B.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&P.length>0,shadowMapType:s.shadowMap.type,toneMapping:Oe,decodeVideoTexture:qe&&_.map.isVideoTexture===!0&&$e.getTransfer(_.map.colorSpace)===ut,decodeVideoTextureEmissive:Be&&_.emissiveMap.isVideoTexture===!0&&$e.getTransfer(_.emissiveMap.colorSpace)===ut,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===ot,flipSided:_.side===Yt,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:se&&_.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(se&&_.extensions.multiDraw===!0||Se)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ce.vertexUv1s=c.has(1),Ce.vertexUv2s=c.has(2),Ce.vertexUv3s=c.has(3),c.clear(),Ce}function m(_){let T=[];if(_.shaderID?T.push(_.shaderID):(T.push(_.customVertexShaderID),T.push(_.customFragmentShaderID)),_.defines!==void 0)for(let P in _.defines)T.push(P),T.push(_.defines[P]);return _.isRawShaderMaterial===!1&&(p(T,_),v(T,_),T.push(s.outputColorSpace)),T.push(_.customProgramCacheKey),T.join()}function p(_,T){_.push(T.precision),_.push(T.outputColorSpace),_.push(T.envMapMode),_.push(T.envMapCubeUVHeight),_.push(T.mapUv),_.push(T.alphaMapUv),_.push(T.lightMapUv),_.push(T.aoMapUv),_.push(T.bumpMapUv),_.push(T.normalMapUv),_.push(T.displacementMapUv),_.push(T.emissiveMapUv),_.push(T.metalnessMapUv),_.push(T.roughnessMapUv),_.push(T.anisotropyMapUv),_.push(T.clearcoatMapUv),_.push(T.clearcoatNormalMapUv),_.push(T.clearcoatRoughnessMapUv),_.push(T.iridescenceMapUv),_.push(T.iridescenceThicknessMapUv),_.push(T.sheenColorMapUv),_.push(T.sheenRoughnessMapUv),_.push(T.specularMapUv),_.push(T.specularColorMapUv),_.push(T.specularIntensityMapUv),_.push(T.transmissionMapUv),_.push(T.thicknessMapUv),_.push(T.combine),_.push(T.fogExp2),_.push(T.sizeAttenuation),_.push(T.morphTargetsCount),_.push(T.morphAttributeCount),_.push(T.numSunLights),_.push(T.numDirLights),_.push(T.numPointLights),_.push(T.numSpotLights),_.push(T.numSpotLightMaps),_.push(T.numHemiLights),_.push(T.numRectAreaLights),_.push(T.numSunLightShadows),_.push(T.numDirLightShadows),_.push(T.numPointLightShadows),_.push(T.numSpotLightShadows),_.push(T.numSpotLightShadowsWithMaps),_.push(T.numLightProbes),_.push(T.shadowMapType),_.push(T.toneMapping),_.push(T.numClippingPlanes),_.push(T.numClipIntersection),_.push(T.depthPacking)}function v(_,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function S(_){let T=f[_.type],P;if(T){let I=yn[T];P=Oi.clone(I.uniforms)}else P=_.uniforms;return P}function b(_,T){let P=h.get(T);return P!==void 0?++P.usedTimes:(P=new Ay(s,T,_,n),l.push(P),h.set(T,P)),P}function M(_){if(--_.usedTimes===0){let T=l.indexOf(_);l[T]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:m,getUniforms:S,acquireProgram:b,releaseProgram:M,releaseShaderCache:w,programs:l,dispose:A}}function Iy(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function i(a){s.delete(a)}function n(a,o,c){s.get(a)[o]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:i,update:n,dispose:r}}function Dy(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function vm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function _m(){let s=[],e=0,t=[],i=[],n=[];function r(){e=0,t.length=0,i.length=0,n.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,x,m,p){let v=s[e];return v===void 0?(v={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:x,renderOrder:d.renderOrder,z:m,group:p},s[e]=v):(v.id=d.id,v.object=d,v.geometry=f,v.material=g,v.materialVariant=a(d),v.groupOrder=x,v.renderOrder=d.renderOrder,v.z=m,v.group=p),e++,v}function c(d,f,g,x,m,p,v){v.reversedDepth===!0&&(m=-m);let S=o(d,f,g,x,m,p);g.transmission>0?i.push(S):g.transparent===!0?n.push(S):t.push(S)}function l(d,f,g,x,m,p){let v=o(d,f,g,x,m,p);g.transmission>0?i.unshift(v):g.transparent===!0?n.unshift(v):t.unshift(v)}function h(d,f){t.length>1&&t.sort(d||Dy),i.length>1&&i.sort(f||vm),n.length>1&&n.sort(f||vm)}function u(){for(let d=e,f=s.length;d<f;d++){let g=s[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:i,transparent:n,init:r,push:c,unshift:l,finish:u,sort:h}}function Ly(){let s=new WeakMap;function e(i,n){let r=s.get(i),a;return r===void 0?(a=new _m,s.set(i,[a])):n>=r.length?(a=new _m,r.push(a)):a=r[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function Ny(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new R,color:new ge};break;case"SpotLight":t={position:new R,direction:new R,color:new ge,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new R,color:new ge,distance:0,decay:0};break;case"HemisphereLight":t={direction:new R,skyColor:new ge,groundColor:new ge};break;case"RectAreaLight":t={color:new ge,position:new R,halfWidth:new R,halfHeight:new R};break}return s[e.id]=t,t}}}function Fy(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var ky=0;function Oy(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function Uy(s){let e=new Ny,t=Fy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new R);let n=new R,r=new Pe,a=new Pe;function o(l){let h=0,u=0,d=0;for(let N=0;N<9;N++)i.probe[N].set(0,0,0);let f=0,g=0,x=0,m=0,p=0,v=0,S=0,b=0,M=0,w=0,A=0,_=0,T=0,P=0;l.sort(Oy);for(let N=0,B=l.length;N<B;N++){let D=l[N],O=D.color,V=D.intensity,j=D.distance,ne=null;if(D.shadow&&D.shadow.map&&(D.shadow.map.texture.format===ps?ne=D.shadow.map.texture:ne=D.shadow.map.depthTexture||D.shadow.map.texture),D.isAmbientLight)h+=O.r*V,u+=O.g*V,d+=O.b*V;else if(D.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(D.sh.coefficients[q],V);P++}else if(D.isSunLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=ne;let Re=Z.getViewportCount();for(let Me=0;Me<Re;Me++)i.sunShadowMatrix[x+Me]=Z.getMatrix(Me),i.sunShadowCascade[x+Me]=Z._cascadeData[Me];x+=Re,g++}i.sun[f]=q,f++}else if(D.isDirectionalLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){let Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=ne,i.directionalShadowMatrix[m]=D.shadow.matrix,M++}i.directional[m]=q,m++}else if(D.isSpotLight){let q=e.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(O).multiplyScalar(V),q.distance=j,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,i.spot[v]=q;let Z=D.shadow;if(D.map&&(i.spotLightMap[_]=D.map,_++,Z.updateMatrices(D),D.castShadow&&T++),i.spotLightMatrix[v]=Z.matrix,D.castShadow){let Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[v]=Q,i.spotShadowMap[v]=ne,A++}v++}else if(D.isRectAreaLight){let q=e.get(D);q.color.copy(O).multiplyScalar(V),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),i.rectArea[S]=q,S++}else if(D.isPointLight){let q=e.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){let Z=D.shadow,Q=t.get(D);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=ne,i.pointShadowMatrix[p]=D.shadow.matrix,w++}i.point[p]=q,p++}else if(D.isHemisphereLight){let q=e.get(D);q.skyColor.copy(D.color).multiplyScalar(V),q.groundColor.copy(D.groundColor).multiplyScalar(V),i.hemi[b]=q,b++}}S>0&&(s.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ue.LTC_FLOAT_1,i.rectAreaLTC2=ue.LTC_FLOAT_2):(i.rectAreaLTC1=ue.LTC_HALF_1,i.rectAreaLTC2=ue.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let I=i.hash;(I.sunLength!==f||I.directionalLength!==m||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==S||I.hemiLength!==b||I.numSunShadows!==g||I.numDirectionalShadows!==M||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==_||I.numLightProbes!==P)&&(i.sun.length=f,i.directional.length=m,i.spot.length=v,i.rectArea.length=S,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=x,i.sunShadowCascade.length=x,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.directionalShadowMatrix.length=M,i.pointShadow.length=w,i.pointShadowMap.length=w,i.pointShadowMatrix.length=w,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+_-T,i.spotLightMap.length=_,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=P,I.sunLength=f,I.directionalLength=m,I.pointLength=p,I.spotLength=v,I.rectAreaLength=S,I.hemiLength=b,I.numSunShadows=g,I.numDirectionalShadows=M,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=_,I.numLightProbes=P,i.version=ky++)}function c(l,h){let u=0,d=0,f=0,g=0,x=0,m=0,p=h.matrixWorldInverse;for(let v=0,S=l.length;v<S;v++){let b=l[v];if(b.isSunLight){let M=i.sun[u];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let M=i.directional[d];M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),d++}else if(b.isSpotLight){let M=i.spot[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),M.direction.setFromMatrixPosition(b.matrixWorld),n.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(n),M.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let M=i.rectArea[x];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(b.isPointLight){let M=i.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let M=i.hemi[m];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function ym(s){let e=new Uy(s),t=[],i=[],n=[];function r(d){u.camera=d,t.length=0,i.length=0,n.length=0}function a(d){t.push(d)}function o(d){i.push(d)}function c(d){n.push(d)}function l(){e.setup(t)}function h(d){e.setupView(t,d)}let u={lightsArray:t,shadowsArray:i,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:l,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function By(s){let e=new WeakMap;function t(n,r=0){let a=e.get(n),o;return a===void 0?(o=new ym(s),e.set(n,[o])):r>=a.length?(o=new ym(s),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:t,dispose:i}}var zy=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hy=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gy=[new R(1,0,0),new R(-1,0,0),new R(0,1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1)],Vy=[new R(0,-1,0),new R(0,-1,0),new R(0,0,1),new R(0,0,-1),new R(0,-1,0),new R(0,-1,0)],Sm=new Pe,ho=new R,Ou=new R;function Wy(s,e,t){let i=new Tr,n=new ie,r=new ie,a=new ct,o=new ls,c=new Ic,l={},h=t.maxTextureSize,u={[ji]:Yt,[Yt]:ji,[ot]:ot},d=new Nt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:zy,fragmentShader:Hy}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new ze;g.setAttribute("position",new Lt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new ke(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Os;let p=this.type;this.render=function(w,A,_){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===up&&(Le("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Os);let T=s.getRenderTarget(),P=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),N=s.state;N.setBlending(Xi),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);let B=p!==this.type;B&&A.traverse(function(D){D.material&&(Array.isArray(D.material)?D.material.forEach(O=>O.needsUpdate=!0):D.material.needsUpdate=!0)});for(let D=0,O=w.length;D<O;D++){let V=w[D],j=V.shadow;if(j===void 0){Le("WebGLShadowMap:",V,"has no shadow.");continue}if(j.autoUpdate===!1&&j.needsUpdate===!1)continue;n.copy(j.mapSize);let ne=j.getFrameExtents();n.multiply(ne),r.copy(j.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(r.x=Math.floor(h/ne.x),n.x=r.x*ne.x,j.mapSize.x=r.x),n.y>h&&(r.y=Math.floor(h/ne.y),n.y=r.y*ne.y,j.mapSize.y=r.y));let q=s.state.buffers.depth.getReversed();if(j.camera._reversedDepth=q,j.map===null||B===!0){if(j.map!==null&&(j.map.depthTexture!==null&&(j.map.depthTexture.dispose(),j.map.depthTexture=null),j.map.dispose()),this.type===Lr){if(V.isPointLight){Le("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}j.map=new qt(n.x,n.y,{format:ps,type:ri,minFilter:It,magFilter:It,generateMipmaps:!1}),j.map.texture.name=V.name+".shadowMap",j.map.depthTexture=new gn(n.x,n.y,Fi),j.map.depthTexture.name=V.name+".shadowMapDepth",j.map.depthTexture.format=pn,j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bt,j.map.depthTexture.magFilter=Bt}else V.isPointLight?(j.map=new kl(n.x),j.map.depthTexture=new wc(n.x,Ni)):(j.map=new qt(n.x,n.y),j.map.depthTexture=new gn(n.x,n.y,Ni)),j.map.depthTexture.name=V.name+".shadowMap",j.map.depthTexture.format=pn,this.type===Os?(j.map.depthTexture.compareFunction=q?Ll:Dl,j.map.depthTexture.minFilter=It,j.map.depthTexture.magFilter=It):(j.map.depthTexture.compareFunction=null,j.map.depthTexture.minFilter=Bt,j.map.depthTexture.magFilter=Bt);j.camera.updateProjectionMatrix()}j.map.isWebGLCubeRenderTarget!==!0&&(j.map.width!==n.x||j.map.height!==n.y)&&j.map.setSize(n.x,n.y);let Z=j.map.isWebGLCubeRenderTarget?6:j.getViewportCount();V.isPointLight!==!0&&j.updateMatrices(V,_);for(let Q=0;Q<Z;Q++){let Re=j.getCamera(Q);if(V.isPointLight){let Me=j.camera,ft=j.matrix,nt=V.distance||Me.far;nt!==Me.far&&(Me.far=nt,Me.updateProjectionMatrix()),ho.setFromMatrixPosition(V.matrixWorld),Me.position.copy(ho),Ou.copy(Me.position),Ou.add(Gy[Q]),Me.up.copy(Vy[Q]),Me.lookAt(Ou),Me.updateMatrixWorld(),ft.makeTranslation(-ho.x,-ho.y,-ho.z),Sm.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),j._frustum.setFromProjectionMatrix(Sm,Me.coordinateSystem,Me.reversedDepth)}if(j.map.isWebGLCubeRenderTarget)s.setRenderTarget(j.map,Q),s.clear();else{Q===0&&(s.setRenderTarget(j.map),s.clear());let Me=j.getViewport(Q);a.set(r.x*Me.x,r.y*Me.y,r.x*Me.z,r.y*Me.w),N.viewport(a)}i=j.getFrustum(Q),b(A,_,Re,V,this.type)}j.isPointLightShadow!==!0&&this.type===Lr&&v(j,_),j.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,P,I)};function v(w,A){let _=e.update(x);d.defines.VSM_SAMPLES!==w.blurSamples&&(d.defines.VSM_SAMPLES=w.blurSamples,f.defines.VSM_SAMPLES=w.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),w.mapPass===null?w.mapPass=new qt(n.x,n.y,{format:ps,type:ri}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),d.uniforms.shadow_pass.value=w.map.depthTexture,d.uniforms.resolution.value.set(w.map.width,w.map.height),d.uniforms.radius.value=w.radius,s.setRenderTarget(w.mapPass),s.clear(),s.renderBufferDirect(A,null,_,d,x,null),f.uniforms.shadow_pass.value=w.mapPass.texture,f.uniforms.resolution.value.set(w.map.width,w.map.height),f.uniforms.radius.value=w.radius,s.setRenderTarget(w.map),s.clear(),s.renderBufferDirect(A,null,_,f,x,null)}function S(w,A,_,T){let P=null,I=_.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(I!==void 0)P=I;else if(P=_.isPointLight===!0?c:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let N=P.uuid,B=A.uuid,D=l[N];D===void 0&&(D={},l[N]=D);let O=D[B];O===void 0&&(O=P.clone(),D[B]=O,A.addEventListener("dispose",M)),P=O}if(P.visible=A.visible,P.wireframe=A.wireframe,T===Lr?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,_.isPointLight===!0&&P.isMeshDistanceMaterial===!0){let N=s.properties.get(P);N.light=_}return P}function b(w,A,_,T,P){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&P===Lr)&&(!w.frustumCulled||w.intersectsFrustum(i))){w.modelViewMatrix.multiplyMatrices(_.matrixWorldInverse,w.matrixWorld);let B=e.update(w),D=w.material;if(Array.isArray(D)){let O=B.groups;for(let V=0,j=O.length;V<j;V++){let ne=O[V],q=D[ne.materialIndex];if(q&&q.visible){let Z=S(w,q,T,P);w.onBeforeShadow(s,w,A,_,B,Z,ne),s.renderBufferDirect(_,null,B,Z,w,ne),w.onAfterShadow(s,w,A,_,B,Z,ne)}}}else if(D.visible){let O=S(w,D,T,P);w.onBeforeShadow(s,w,A,_,B,O,null),s.renderBufferDirect(_,null,B,O,w,null),w.onAfterShadow(s,w,A,_,B,O,null)}}let N=w.children;for(let B=0,D=N.length;B<D;B++)b(N[B],A,_,T,P)}function M(w){w.target.removeEventListener("dispose",M);for(let _ in l){let T=l[_],P=w.target.uuid;P in T&&(T[P].dispose(),delete T[P])}}}function qy(s,e){function t(){let k=!1,pe=new ct,Y=null,me=new ct(0,0,0,0);return{setMask:function(ye){Y!==ye&&!k&&(s.colorMask(ye,ye,ye,ye),Y=ye)},setLocked:function(ye){k=ye},setClear:function(ye,se,Oe,Ce,Tt){Tt===!0&&(ye*=Ce,se*=Ce,Oe*=Ce),pe.set(ye,se,Oe,Ce),me.equals(pe)===!1&&(s.clearColor(ye,se,Oe,Ce),me.copy(pe))},reset:function(){k=!1,Y=null,me.set(-1,0,0,0)}}}function i(){let k=!1,pe=!1,Y=null,me=null,ye=null;return{setReversed:function(se){if(pe!==se){let Oe=e.get("EXT_clip_control");se?Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.ZERO_TO_ONE_EXT):Oe.clipControlEXT(Oe.LOWER_LEFT_EXT,Oe.NEGATIVE_ONE_TO_ONE_EXT),pe=se;let Ce=ye;ye=null,this.setClear(Ce)}},getReversed:function(){return pe},setTest:function(se){se?ee(s.DEPTH_TEST):xe(s.DEPTH_TEST)},setMask:function(se){Y!==se&&!k&&(s.depthMask(se),Y=se)},setFunc:function(se){if(pe&&(se=Xp[se]),me!==se){switch(se){case dc:s.depthFunc(s.NEVER);break;case fc:s.depthFunc(s.ALWAYS);break;case pc:s.depthFunc(s.LESS);break;case mr:s.depthFunc(s.LEQUAL);break;case mc:s.depthFunc(s.EQUAL);break;case gc:s.depthFunc(s.GEQUAL);break;case bc:s.depthFunc(s.GREATER);break;case xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}me=se}},setLocked:function(se){k=se},setClear:function(se){ye!==se&&(ye=se,pe&&(se=1-se),s.clearDepth(se))},reset:function(){k=!1,Y=null,me=null,ye=null,pe=!1}}}function n(){let k=!1,pe=null,Y=null,me=null,ye=null,se=null,Oe=null,Ce=null,Tt=null;return{setTest:function(gt){k||(gt?ee(s.STENCIL_TEST):xe(s.STENCIL_TEST))},setMask:function(gt){pe!==gt&&!k&&(s.stencilMask(gt),pe=gt)},setFunc:function(gt,Yi,hn){(Y!==gt||me!==Yi||ye!==hn)&&(s.stencilFunc(gt,Yi,hn),Y=gt,me=Yi,ye=hn)},setOp:function(gt,Yi,hn){(se!==gt||Oe!==Yi||Ce!==hn)&&(s.stencilOp(gt,Yi,hn),se=gt,Oe=Yi,Ce=hn)},setLocked:function(gt){k=gt},setClear:function(gt){Tt!==gt&&(s.clearStencil(gt),Tt=gt)},reset:function(){k=!1,pe=null,Y=null,me=null,ye=null,se=null,Oe=null,Ce=null,Tt=null}}}let r=new t,a=new i,o=new n,c=new WeakMap,l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,S=null,b=null,M=null,w=null,A=null,_=new ge(0,0,0),T=0,P=!1,I=null,N=null,B=null,D=null,O=null,V=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),j=!1,ne=0,q=s.getParameter(s.VERSION);q.indexOf("WebGL")!==-1?(ne=parseFloat(/^WebGL (\d)/.exec(q)[1]),j=ne>=1):q.indexOf("OpenGL ES")!==-1&&(ne=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),j=ne>=2);let Z=null,Q={},Re=s.getParameter(s.SCISSOR_BOX),Me=s.getParameter(s.VIEWPORT),ft=new ct().fromArray(Re),nt=new ct().fromArray(Me);function lt(k,pe,Y,me){let ye=new Uint8Array(4),se=s.createTexture();s.bindTexture(k,se),s.texParameteri(k,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(k,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Oe=0;Oe<Y;Oe++)k===s.TEXTURE_3D||k===s.TEXTURE_2D_ARRAY?s.texImage3D(pe,0,s.RGBA,1,1,me,0,s.RGBA,s.UNSIGNED_BYTE,ye):s.texImage2D(pe+Oe,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,ye);return se}let J={};J[s.TEXTURE_2D]=lt(s.TEXTURE_2D,s.TEXTURE_2D,1),J[s.TEXTURE_CUBE_MAP]=lt(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),J[s.TEXTURE_2D_ARRAY]=lt(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),J[s.TEXTURE_3D]=lt(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ee(s.DEPTH_TEST),a.setFunc(mr),oe(!1),he(lu),ee(s.CULL_FACE),re(Xi);function ee(k){h[k]!==!0&&(s.enable(k),h[k]=!0)}function xe(k){h[k]!==!1&&(s.disable(k),h[k]=!1)}function We(k,pe){return d[k]!==pe?(s.bindFramebuffer(k,pe),d[k]=pe,k===s.DRAW_FRAMEBUFFER&&(d[s.FRAMEBUFFER]=pe),k===s.FRAMEBUFFER&&(d[s.DRAW_FRAMEBUFFER]=pe),!0):!1}function Se(k,pe){let Y=g,me=!1;if(k){Y=f.get(pe),Y===void 0&&(Y=[],f.set(pe,Y));let ye=k.textures;if(Y.length!==ye.length||Y[0]!==s.COLOR_ATTACHMENT0){for(let se=0,Oe=ye.length;se<Oe;se++)Y[se]=s.COLOR_ATTACHMENT0+se;Y.length=ye.length,me=!0}}else Y[0]!==s.BACK&&(Y[0]=s.BACK,me=!0);me&&s.drawBuffers(Y)}function qe(k){return x!==k?(s.useProgram(k),x=k,!0):!1}let vt={[Us]:s.FUNC_ADD,[fp]:s.FUNC_SUBTRACT,[pp]:s.FUNC_REVERSE_SUBTRACT};vt[mp]=s.MIN,vt[gp]=s.MAX;let te={[bp]:s.ZERO,[xp]:s.ONE,[vp]:s.SRC_COLOR,[du]:s.SRC_ALPHA,[Ep]:s.SRC_ALPHA_SATURATE,[Mp]:s.DST_COLOR,[yp]:s.DST_ALPHA,[_p]:s.ONE_MINUS_SRC_COLOR,[fu]:s.ONE_MINUS_SRC_ALPHA,[wp]:s.ONE_MINUS_DST_COLOR,[Sp]:s.ONE_MINUS_DST_ALPHA,[Tp]:s.CONSTANT_COLOR,[Ap]:s.ONE_MINUS_CONSTANT_COLOR,[Rp]:s.CONSTANT_ALPHA,[Cp]:s.ONE_MINUS_CONSTANT_ALPHA};function re(k,pe,Y,me,ye,se,Oe,Ce,Tt,gt){if(k===Xi){m===!0&&(xe(s.BLEND),m=!1);return}if(m===!1&&(ee(s.BLEND),m=!0),k!==dp){if(k!==p||gt!==P){if((v!==Us||M!==Us)&&(s.blendEquation(s.FUNC_ADD),v=Us,M=Us),gt)switch(k){case Nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xa:s.blendFunc(s.ONE,s.ONE);break;case hu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ve("WebGLState: Invalid blending: ",k);break}else switch(k){case Nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Xa:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case hu:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case uu:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",k);break}S=null,b=null,w=null,A=null,_.set(0,0,0),T=0,p=k,P=gt}return}ye=ye||pe,se=se||Y,Oe=Oe||me,(pe!==v||ye!==M)&&(s.blendEquationSeparate(vt[pe],vt[ye]),v=pe,M=ye),(Y!==S||me!==b||se!==w||Oe!==A)&&(s.blendFuncSeparate(te[Y],te[me],te[se],te[Oe]),S=Y,b=me,w=se,A=Oe),(Ce.equals(_)===!1||Tt!==T)&&(s.blendColor(Ce.r,Ce.g,Ce.b,Tt),_.copy(Ce),T=Tt),p=k,P=!1}function ae(k,pe){k.side===ot?xe(s.CULL_FACE):ee(s.CULL_FACE);let Y=k.side===Yt;pe&&(Y=!Y),oe(Y),k.blending===Nr&&k.transparent===!1?re(Xi):re(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let me=k.stencilWrite;o.setTest(me),me&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Be(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ee(s.SAMPLE_ALPHA_TO_COVERAGE):xe(s.SAMPLE_ALPHA_TO_COVERAGE)}function oe(k){I!==k&&(k?s.frontFace(s.CW):s.frontFace(s.CCW),I=k)}function he(k){k!==lp?(ee(s.CULL_FACE),k!==N&&(k===lu?s.cullFace(s.BACK):k===hp?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):xe(s.CULL_FACE),N=k}function He(k){k!==B&&(j&&s.lineWidth(k),B=k)}function Be(k,pe,Y){k?(ee(s.POLYGON_OFFSET_FILL),(D!==pe||O!==Y)&&(D=pe,O=Y,a.getReversed()&&(pe=-pe),s.polygonOffset(pe,Y))):xe(s.POLYGON_OFFSET_FILL)}function je(k){k?ee(s.SCISSOR_TEST):xe(s.SCISSOR_TEST)}function Ke(k){k===void 0&&(k=s.TEXTURE0+V-1),Z!==k&&(s.activeTexture(k),Z=k)}function L(k,pe,Y){Y===void 0&&(Z===null?Y=s.TEXTURE0+V-1:Y=Z);let me=Q[Y];me===void 0&&(me={type:void 0,texture:void 0},Q[Y]=me),(me.type!==k||me.texture!==pe)&&(Z!==Y&&(s.activeTexture(Y),Z=Y),s.bindTexture(k,pe||J[k]),me.type=k,me.texture=pe)}function mt(){let k=Q[Z];k!==void 0&&k.type!==void 0&&(s.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function st(){try{s.compressedTexImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function C(){try{s.compressedTexImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function y(){try{s.texSubImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function U(){try{s.texSubImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function G(){try{s.compressedTexSubImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function X(){try{s.compressedTexSubImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function ce(){try{s.texStorage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function le(){try{s.texStorage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function K(){try{s.texImage2D(...arguments)}catch(k){Ve("WebGLState:",k)}}function $(){try{s.texImage3D(...arguments)}catch(k){Ve("WebGLState:",k)}}function de(k){return u[k]!==void 0?u[k]:s.getParameter(k)}function Ne(k,pe){u[k]!==pe&&(s.pixelStorei(k,pe),u[k]=pe)}function be(k){ft.equals(k)===!1&&(s.scissor(k.x,k.y,k.z,k.w),ft.copy(k))}function fe(k){nt.equals(k)===!1&&(s.viewport(k.x,k.y,k.z,k.w),nt.copy(k))}function Fe(k,pe){let Y=l.get(pe);Y===void 0&&(Y=new WeakMap,l.set(pe,Y));let me=Y.get(k);me===void 0&&(me=s.getUniformBlockIndex(pe,k.name),Y.set(k,me))}function Ge(k,pe){let me=l.get(pe).get(k);c.get(pe)!==me&&(s.uniformBlockBinding(pe,me,k.__bindingPointIndex),c.set(pe,me))}function Ze(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},u={},Z=null,Q={},d={},f=new WeakMap,g=[],x=null,m=!1,p=null,v=null,S=null,b=null,M=null,w=null,A=null,_=new ge(0,0,0),T=0,P=!1,I=null,N=null,B=null,D=null,O=null,ft.set(0,0,s.canvas.width,s.canvas.height),nt.set(0,0,s.canvas.width,s.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ee,disable:xe,bindFramebuffer:We,drawBuffers:Se,useProgram:qe,setBlending:re,setMaterial:ae,setFlipSided:oe,setCullFace:he,setLineWidth:He,setPolygonOffset:Be,setScissorTest:je,activeTexture:Ke,bindTexture:L,unbindTexture:mt,compressedTexImage2D:st,compressedTexImage3D:C,texImage2D:K,texImage3D:$,pixelStorei:Ne,getParameter:de,updateUBOMapping:Fe,uniformBlockBinding:Ge,texStorage2D:ce,texStorage3D:le,texSubImage2D:y,texSubImage3D:U,compressedTexSubImage2D:G,compressedTexSubImage3D:X,scissor:be,viewport:fe,reset:Ze}}function jy(s,e,t,i,n,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new ie,h=new WeakMap,u=new Set,d,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(C,y){return g?new OffscreenCanvas(C,y):xr("canvas")}function m(C,y,U){let G=1,X=st(C);if((X.width>U||X.height>U)&&(G=U/Math.max(X.width,X.height)),G<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){let ce=Math.floor(G*X.width),le=Math.floor(G*X.height);d===void 0&&(d=x(ce,le));let K=y?x(ce,le):d;return K.width=ce,K.height=le,K.getContext("2d").drawImage(C,0,0,ce,le),Le("WebGLRenderer: Texture has been resized from ("+X.width+"x"+X.height+") to ("+ce+"x"+le+")."),K}else return"data"in C&&Le("WebGLRenderer: Image in DataTexture is too big ("+X.width+"x"+X.height+")."),C;return C}function p(C){return C.generateMipmaps}function v(C){s.generateMipmap(C)}function S(C){return C.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?s.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function b(C,y,U,G,X,ce=!1){if(C!==null){if(s[C]!==void 0)return s[C];Le("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let le;G&&(le=e.get("EXT_texture_norm16"),le||Le("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=y;if(y===s.RED&&(U===s.FLOAT&&(K=s.R32F),U===s.HALF_FLOAT&&(K=s.R16F),U===s.UNSIGNED_BYTE&&(K=s.R8),U===s.UNSIGNED_SHORT&&le&&(K=le.R16_EXT),U===s.SHORT&&le&&(K=le.R16_SNORM_EXT)),y===s.RED_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.R8UI),U===s.UNSIGNED_SHORT&&(K=s.R16UI),U===s.UNSIGNED_INT&&(K=s.R32UI),U===s.BYTE&&(K=s.R8I),U===s.SHORT&&(K=s.R16I),U===s.INT&&(K=s.R32I)),y===s.RG&&(U===s.FLOAT&&(K=s.RG32F),U===s.HALF_FLOAT&&(K=s.RG16F),U===s.UNSIGNED_BYTE&&(K=s.RG8),U===s.UNSIGNED_SHORT&&le&&(K=le.RG16_EXT),U===s.SHORT&&le&&(K=le.RG16_SNORM_EXT)),y===s.RG_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RG8UI),U===s.UNSIGNED_SHORT&&(K=s.RG16UI),U===s.UNSIGNED_INT&&(K=s.RG32UI),U===s.BYTE&&(K=s.RG8I),U===s.SHORT&&(K=s.RG16I),U===s.INT&&(K=s.RG32I)),y===s.RGB_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGB8UI),U===s.UNSIGNED_SHORT&&(K=s.RGB16UI),U===s.UNSIGNED_INT&&(K=s.RGB32UI),U===s.BYTE&&(K=s.RGB8I),U===s.SHORT&&(K=s.RGB16I),U===s.INT&&(K=s.RGB32I)),y===s.RGBA_INTEGER&&(U===s.UNSIGNED_BYTE&&(K=s.RGBA8UI),U===s.UNSIGNED_SHORT&&(K=s.RGBA16UI),U===s.UNSIGNED_INT&&(K=s.RGBA32UI),U===s.BYTE&&(K=s.RGBA8I),U===s.SHORT&&(K=s.RGBA16I),U===s.INT&&(K=s.RGBA32I)),y===s.RGB&&(U===s.UNSIGNED_SHORT&&le&&(K=le.RGB16_EXT),U===s.SHORT&&le&&(K=le.RGB16_SNORM_EXT),U===s.UNSIGNED_INT_5_9_9_9_REV&&(K=s.RGB9_E5),U===s.UNSIGNED_INT_10F_11F_11F_REV&&(K=s.R11F_G11F_B10F)),y===s.RGBA){let $=ce?xa:$e.getTransfer(X);U===s.FLOAT&&(K=s.RGBA32F),U===s.HALF_FLOAT&&(K=s.RGBA16F),U===s.UNSIGNED_BYTE&&(K=$===ut?s.SRGB8_ALPHA8:s.RGBA8),U===s.UNSIGNED_SHORT&&le&&(K=le.RGBA16_EXT),U===s.SHORT&&le&&(K=le.RGBA16_SNORM_EXT),U===s.UNSIGNED_SHORT_4_4_4_4&&(K=s.RGBA4),U===s.UNSIGNED_SHORT_5_5_5_1&&(K=s.RGB5_A1)}return(K===s.R16F||K===s.R32F||K===s.RG16F||K===s.RG32F||K===s.RGBA16F||K===s.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function M(C,y){let U;return C?y===null||y===Ni||y===Or?U=s.DEPTH24_STENCIL8:y===Fi?U=s.DEPTH32F_STENCIL8:y===kr&&(U=s.DEPTH24_STENCIL8,Le("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===Or?U=s.DEPTH_COMPONENT24:y===Fi?U=s.DEPTH_COMPONENT32F:y===kr&&(U=s.DEPTH_COMPONENT16),U}function w(C,y){return p(C)===!0||C.isFramebufferTexture&&C.minFilter!==Bt&&C.minFilter!==It?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){let y=C.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&u.delete(y)}function _(C){let y=C.target;y.removeEventListener("dispose",_),I(y)}function T(C){let y=i.get(C);if(y.__webglInit===void 0)return;let U=C.source,G=f.get(U);if(G){let X=G[y.__cacheKey];X.usedTimes--,X.usedTimes===0&&P(C),Object.keys(G).length===0&&f.delete(U)}i.remove(C)}function P(C){let y=i.get(C);s.deleteTexture(y.__webglTexture);let U=C.source,G=f.get(U);delete G[y.__cacheKey],a.memory.textures--}function I(C){let y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let G=0;G<6;G++){if(Array.isArray(y.__webglFramebuffer[G]))for(let X=0;X<y.__webglFramebuffer[G].length;X++)s.deleteFramebuffer(y.__webglFramebuffer[G][X]);else s.deleteFramebuffer(y.__webglFramebuffer[G]);y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer[G])}else{if(Array.isArray(y.__webglFramebuffer))for(let G=0;G<y.__webglFramebuffer.length;G++)s.deleteFramebuffer(y.__webglFramebuffer[G]);else s.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&s.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&s.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let G=0;G<y.__webglColorRenderbuffer.length;G++)y.__webglColorRenderbuffer[G]&&s.deleteRenderbuffer(y.__webglColorRenderbuffer[G]);y.__webglDepthRenderbuffer&&s.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let U=C.textures;for(let G=0,X=U.length;G<X;G++){let ce=i.get(U[G]);ce.__webglTexture&&(s.deleteTexture(ce.__webglTexture),a.memory.textures--),i.remove(U[G])}i.remove(C)}let N=0;function B(){N=0}function D(){return N}function O(C){N=C}function V(){let C=N;return C>=n.maxTextures&&Le("WebGLTextures: Trying to use "+(C+1)+" texture units while this GPU supports only "+n.maxTextures),N+=1,C}function j(C){let y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function ne(C,y){let U=i.get(C);if(C.isVideoTexture&&L(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){let G=C.image;if(G===null)Le("WebGLRenderer: Texture marked for update but no image data found.");else if(G.complete===!1)Le("WebGLRenderer: Texture marked for update but image is incomplete");else{xe(U,C,y);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,U.__webglTexture,s.TEXTURE0+y)}function q(C,y){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){xe(U,C,y);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,U.__webglTexture,s.TEXTURE0+y)}function Z(C,y){let U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){xe(U,C,y);return}t.bindTexture(s.TEXTURE_3D,U.__webglTexture,s.TEXTURE0+y)}function Q(C,y){let U=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){We(U,C,y);return}t.bindTexture(s.TEXTURE_CUBE_MAP,U.__webglTexture,s.TEXTURE0+y)}let Re={[yi]:s.REPEAT,[Gi]:s.CLAMP_TO_EDGE,[gr]:s.MIRRORED_REPEAT},Me={[Bt]:s.NEAREST,[Wc]:s.NEAREST_MIPMAP_NEAREST,[Hs]:s.NEAREST_MIPMAP_LINEAR,[It]:s.LINEAR,[Fr]:s.LINEAR_MIPMAP_NEAREST,[Ti]:s.LINEAR_MIPMAP_LINEAR},ft={[Up]:s.NEVER,[Vp]:s.ALWAYS,[Bp]:s.LESS,[Dl]:s.LEQUAL,[zp]:s.EQUAL,[Ll]:s.GEQUAL,[Hp]:s.GREATER,[Gp]:s.NOTEQUAL};function nt(C,y){if(y.type===Fi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===It||y.magFilter===Fr||y.magFilter===Hs||y.magFilter===Ti||y.minFilter===It||y.minFilter===Fr||y.minFilter===Hs||y.minFilter===Ti)&&Le("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(C,s.TEXTURE_WRAP_S,Re[y.wrapS]),s.texParameteri(C,s.TEXTURE_WRAP_T,Re[y.wrapT]),(C===s.TEXTURE_3D||C===s.TEXTURE_2D_ARRAY)&&s.texParameteri(C,s.TEXTURE_WRAP_R,Re[y.wrapR]),s.texParameteri(C,s.TEXTURE_MAG_FILTER,Me[y.magFilter]),s.texParameteri(C,s.TEXTURE_MIN_FILTER,Me[y.minFilter]),y.compareFunction&&(s.texParameteri(C,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(C,s.TEXTURE_COMPARE_FUNC,ft[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Bt||y.minFilter!==Hs&&y.minFilter!==Ti||y.type===Fi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let U=e.get("EXT_texture_filter_anisotropic");s.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,n.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function lt(C,y){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));let G=y.source,X=f.get(G);X===void 0&&(X={},f.set(G,X));let ce=j(y);if(ce!==C.__cacheKey){X[ce]===void 0&&(X[ce]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,U=!0),X[ce].usedTimes++;let le=X[C.__cacheKey];le!==void 0&&(X[C.__cacheKey].usedTimes--,le.usedTimes===0&&P(y)),C.__cacheKey=ce,C.__webglTexture=X[ce].texture}return U}function J(C,y,U){return Math.floor(Math.floor(C/U)/y)}function ee(C,y,U,G){let ce=C.updateRanges;if(ce.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,y.width,y.height,U,G,y.data);else{ce.sort((Ne,be)=>Ne.start-be.start);let le=0;for(let Ne=1;Ne<ce.length;Ne++){let be=ce[le],fe=ce[Ne],Fe=be.start+be.count,Ge=J(fe.start,y.width,4),Ze=J(be.start,y.width,4);fe.start<=Fe+1&&Ge===Ze&&J(fe.start+fe.count-1,y.width,4)===Ge?be.count=Math.max(be.count,fe.start+fe.count-be.start):(++le,ce[le]=fe)}ce.length=le+1;let K=t.getParameter(s.UNPACK_ROW_LENGTH),$=t.getParameter(s.UNPACK_SKIP_PIXELS),de=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,y.width);for(let Ne=0,be=ce.length;Ne<be;Ne++){let fe=ce[Ne],Fe=Math.floor(fe.start/4),Ge=Math.ceil(fe.count/4),Ze=Fe%y.width,k=Math.floor(Fe/y.width),pe=Ge,Y=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ze),t.pixelStorei(s.UNPACK_SKIP_ROWS,k),t.texSubImage2D(s.TEXTURE_2D,0,Ze,k,pe,Y,U,G,y.data)}C.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,K),t.pixelStorei(s.UNPACK_SKIP_PIXELS,$),t.pixelStorei(s.UNPACK_SKIP_ROWS,de)}}function xe(C,y,U){let G=s.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(G=s.TEXTURE_2D_ARRAY),y.isData3DTexture&&(G=s.TEXTURE_3D);let X=lt(C,y),ce=y.source;t.bindTexture(G,C.__webglTexture,s.TEXTURE0+U);let le=i.get(ce);if(ce.version!==le.__version||X===!0){if(t.activeTexture(s.TEXTURE0+U),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let Y=$e.getPrimaries($e.workingColorSpace),me=y.colorSpace===qn?null:$e.getPrimaries(y.colorSpace),ye=y.colorSpace===qn||Y===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye)}t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment);let $=m(y.image,!1,n.maxTextureSize);$=mt(y,$);let de=r.convert(y.format,y.colorSpace),Ne=r.convert(y.type),be=b(y.internalFormat,de,Ne,y.normalized,y.colorSpace,y.isVideoTexture);nt(G,y);let fe,Fe=y.mipmaps,Ge=y.isVideoTexture!==!0,Ze=le.__version===void 0||X===!0,k=ce.dataReady,pe=w(y,$);if(y.isDepthTexture)be=M(y.format===fs,y.type),Ze&&(Ge?t.texStorage2D(s.TEXTURE_2D,1,be,$.width,$.height):t.texImage2D(s.TEXTURE_2D,0,be,$.width,$.height,0,de,Ne,null));else if(y.isDataTexture)if(Fe.length>0){Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,pe,be,Fe[0].width,Fe[0].height);for(let Y=0,me=Fe.length;Y<me;Y++)fe=Fe[Y],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(s.TEXTURE_2D,Y,be,fe.width,fe.height,0,de,Ne,fe.data);y.generateMipmaps=!1}else Ge?(Ze&&t.texStorage2D(s.TEXTURE_2D,pe,be,$.width,$.height),k&&ee(y,$,de,Ne)):t.texImage2D(s.TEXTURE_2D,0,be,$.width,$.height,0,de,Ne,$.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Ge&&Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,Fe[0].width,Fe[0].height,$.depth);for(let Y=0,me=Fe.length;Y<me;Y++)if(fe=Fe[Y],y.format!==ki)if(de!==null)if(Ge){if(k)if(y.layerUpdates.size>0){let ye=Iu(fe.width,fe.height,y.format,y.type);for(let se of y.layerUpdates){let Oe=fe.data.subarray(se*ye/fe.data.BYTES_PER_ELEMENT,(se+1)*ye/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,se,fe.width,fe.height,1,de,Oe)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,$.depth,de,fe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,Y,be,fe.width,fe.height,$.depth,0,fe.data,0,0);else Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ge?k&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,$.depth,de,Ne,fe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,Y,be,fe.width,fe.height,$.depth,0,de,Ne,fe.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Ge&&Ze&&t.texStorage2D(s.TEXTURE_2D,pe,be,Fe[0].width,Fe[0].height);for(let Y=0,me=Fe.length;Y<me;Y++)fe=Fe[Y],y.format!==ki?de!==null?Ge?k&&t.compressedTexSubImage2D(s.TEXTURE_2D,Y,0,0,fe.width,fe.height,de,fe.data):t.compressedTexImage2D(s.TEXTURE_2D,Y,be,fe.width,fe.height,0,fe.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ge?k&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,fe.width,fe.height,de,Ne,fe.data):t.texImage2D(s.TEXTURE_2D,Y,be,fe.width,fe.height,0,de,Ne,fe.data)}else if(y.isDataArrayTexture)if(Ge){if(Ze&&t.texStorage3D(s.TEXTURE_2D_ARRAY,pe,be,$.width,$.height,$.depth),k)if(y.layerUpdates.size>0){let Y=Iu($.width,$.height,y.format,y.type);for(let me of y.layerUpdates){let ye=$.data.subarray(me*Y/$.data.BYTES_PER_ELEMENT,(me+1)*Y/$.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,me,$.width,$.height,1,de,Ne,ye)}y.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,be,$.width,$.height,$.depth,0,de,Ne,$.data);else if(y.isData3DTexture)Ge?(Ze&&t.texStorage3D(s.TEXTURE_3D,pe,be,$.width,$.height,$.depth),k&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,$.width,$.height,$.depth,de,Ne,$.data)):t.texImage3D(s.TEXTURE_3D,0,be,$.width,$.height,$.depth,0,de,Ne,$.data);else if(y.isFramebufferTexture){if(Ze)if(Ge)t.texStorage2D(s.TEXTURE_2D,pe,be,$.width,$.height);else{let Y=$.width,me=$.height;for(let ye=0;ye<pe;ye++)t.texImage2D(s.TEXTURE_2D,ye,be,Y,me,0,de,Ne,null),Y>>=1,me>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in s){let Y=s.canvas;if(Y.hasAttribute("layoutsubtree")||Y.setAttribute("layoutsubtree","true"),$.parentNode!==Y){Y.appendChild($),u.add(y),Y.onpaint=me=>{let ye=me.changedElements;for(let se of u)ye.includes(se.image)&&(se.needsUpdate=!0)},Y.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,$);else{let ye=s.RGBA,se=s.RGBA,Oe=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,ye,se,Oe,$)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Ge&&Ze){let Y=st(Fe[0]);t.texStorage2D(s.TEXTURE_2D,pe,be,Y.width,Y.height)}for(let Y=0,me=Fe.length;Y<me;Y++)fe=Fe[Y],Ge?k&&t.texSubImage2D(s.TEXTURE_2D,Y,0,0,de,Ne,fe):t.texImage2D(s.TEXTURE_2D,Y,be,de,Ne,fe);y.generateMipmaps=!1}else if(Ge){if(Ze){let Y=st($);t.texStorage2D(s.TEXTURE_2D,pe,be,Y.width,Y.height)}k&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,de,Ne,$)}else t.texImage2D(s.TEXTURE_2D,0,be,de,Ne,$);p(y)&&v(G),le.__version=ce.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function We(C,y,U){if(y.image.length!==6)return;let G=lt(C,y),X=y.source;t.bindTexture(s.TEXTURE_CUBE_MAP,C.__webglTexture,s.TEXTURE0+U);let ce=i.get(X);if(X.version!==ce.__version||G===!0){t.activeTexture(s.TEXTURE0+U);let le=$e.getPrimaries($e.workingColorSpace),K=y.colorSpace===qn?null:$e.getPrimaries(y.colorSpace),$=y.colorSpace===qn||le===K?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,$);let de=y.isCompressedTexture||y.image[0].isCompressedTexture,Ne=y.image[0]&&y.image[0].isDataTexture,be=[];for(let se=0;se<6;se++)!de&&!Ne?be[se]=m(y.image[se],!0,n.maxCubemapSize):be[se]=Ne?y.image[se].image:y.image[se],be[se]=mt(y,be[se]);let fe=be[0],Fe=r.convert(y.format,y.colorSpace),Ge=r.convert(y.type),Ze=b(y.internalFormat,Fe,Ge,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,pe=ce.__version===void 0||G===!0,Y=X.dataReady,me=w(y,fe);nt(s.TEXTURE_CUBE_MAP,y);let ye;if(de){k&&pe&&t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ze,fe.width,fe.height);for(let se=0;se<6;se++){ye=be[se].mipmaps;for(let Oe=0;Oe<ye.length;Oe++){let Ce=ye[Oe];y.format!==ki?Fe!==null?k?Y&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ce.width,Ce.height,Fe,Ce.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,Ze,Ce.width,Ce.height,0,Ce.data):Le("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,0,0,Ce.width,Ce.height,Fe,Ge,Ce.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe,Ze,Ce.width,Ce.height,0,Fe,Ge,Ce.data)}}}else{if(ye=y.mipmaps,k&&pe){ye.length>0&&me++;let se=st(be[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,me,Ze,se.width,se.height)}for(let se=0;se<6;se++)if(Ne){k?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,be[se].width,be[se].height,Fe,Ge,be[se].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,be[se].width,be[se].height,0,Fe,Ge,be[se].data);for(let Oe=0;Oe<ye.length;Oe++){let Tt=ye[Oe].image[se].image;k?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Tt.width,Tt.height,Fe,Ge,Tt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,Ze,Tt.width,Tt.height,0,Fe,Ge,Tt.data)}}else{k?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,0,0,Fe,Ge,be[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,0,Ze,Fe,Ge,be[se]);for(let Oe=0;Oe<ye.length;Oe++){let Ce=ye[Oe];k?Y&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,0,0,Fe,Ge,Ce.image[se]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+se,Oe+1,Ze,Fe,Ge,Ce.image[se])}}}p(y)&&v(s.TEXTURE_CUBE_MAP),ce.__version=X.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function Se(C,y,U,G,X,ce){let le=r.convert(U.format,U.colorSpace),K=r.convert(U.type),$=b(U.internalFormat,le,K,U.normalized,U.colorSpace),de=i.get(y),Ne=i.get(U);if(Ne.__renderTarget=y,!de.__hasExternalTextures){let be=Math.max(1,y.width>>ce),fe=Math.max(1,y.height>>ce);X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?t.texImage3D(X,ce,$,be,fe,y.depth,0,le,K,null):t.texImage2D(X,ce,$,be,fe,0,le,K,null)}t.bindFramebuffer(s.FRAMEBUFFER,C),Ke(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,G,X,Ne.__webglTexture,0,je(y)):(X===s.TEXTURE_2D||X>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&X<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,G,X,Ne.__webglTexture,ce),t.bindFramebuffer(s.FRAMEBUFFER,null)}function qe(C,y,U){if(s.bindRenderbuffer(s.RENDERBUFFER,C),y.depthBuffer){let G=y.depthTexture,X=G&&G.isDepthTexture?G.type:null,ce=M(y.stencilBuffer,X),le=y.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;Ke(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je(y),ce,y.width,y.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,je(y),ce,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,ce,y.width,y.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,le,s.RENDERBUFFER,C)}else{let G=y.textures;for(let X=0;X<G.length;X++){let ce=G[X],le=r.convert(ce.format,ce.colorSpace),K=r.convert(ce.type),$=b(ce.internalFormat,le,K,ce.normalized,ce.colorSpace);Ke(y)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,je(y),$,y.width,y.height):U?s.renderbufferStorageMultisample(s.RENDERBUFFER,je(y),$,y.width,y.height):s.renderbufferStorage(s.RENDERBUFFER,$,y.width,y.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function vt(C,y,U){let G=y.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let X=i.get(y.depthTexture);if(X.__renderTarget=y,(!X.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),G){if(X.__webglInit===void 0&&(X.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),X.__webglTexture===void 0){X.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,X.__webglTexture),nt(s.TEXTURE_CUBE_MAP,y.depthTexture);let de=r.convert(y.depthTexture.format),Ne=r.convert(y.depthTexture.type),be;y.depthTexture.format===pn?be=s.DEPTH_COMPONENT24:y.depthTexture.format===fs&&(be=s.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,be,y.width,y.height,0,de,Ne,null)}}else ne(y.depthTexture,0);let ce=X.__webglTexture,le=je(y),K=G?s.TEXTURE_CUBE_MAP_POSITIVE_X+U:s.TEXTURE_2D,$=y.depthTexture.format===fs?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(y.depthTexture.format===pn)Ke(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,ce,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,$,K,ce,0);else if(y.depthTexture.format===fs)Ke(y)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,K,ce,0,le):s.framebufferTexture2D(s.FRAMEBUFFER,$,K,ce,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function te(C){let y=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){let G=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),G){let X=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,G.removeEventListener("dispose",X)};G.addEventListener("dispose",X),y.__depthDisposeCallback=X}y.__boundDepthTexture=G}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let G=0;G<6;G++)vt(y.__webglFramebuffer[G],C,G);else{let G=C.texture.mipmaps;G&&G.length>0?vt(y.__webglFramebuffer[0],C,0):vt(y.__webglFramebuffer,C,0)}else if(U){y.__webglDepthbuffer=[];for(let G=0;G<6;G++)if(t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[G]),y.__webglDepthbuffer[G]===void 0)y.__webglDepthbuffer[G]=s.createRenderbuffer(),qe(y.__webglDepthbuffer[G],C,!1);else{let X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer[G];s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,ce)}}else{let G=C.texture.mipmaps;if(G&&G.length>0?t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=s.createRenderbuffer(),qe(y.__webglDepthbuffer,C,!1);else{let X=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ce=y.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ce),s.framebufferRenderbuffer(s.FRAMEBUFFER,X,s.RENDERBUFFER,ce)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function re(C,y,U){let G=i.get(C);y!==void 0&&Se(G.__webglFramebuffer,C,C.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),U!==void 0&&te(C)}function ae(C){let y=C.texture,U=i.get(C),G=i.get(y);C.addEventListener("dispose",_);let X=C.textures,ce=C.isWebGLCubeRenderTarget===!0,le=X.length>1;if(le||(G.__webglTexture===void 0&&(G.__webglTexture=s.createTexture()),G.__version=y.version,a.memory.textures++),ce){U.__webglFramebuffer=[];for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[K]=[];for(let $=0;$<y.mipmaps.length;$++)U.__webglFramebuffer[K][$]=s.createFramebuffer()}else U.__webglFramebuffer[K]=s.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let K=0;K<y.mipmaps.length;K++)U.__webglFramebuffer[K]=s.createFramebuffer()}else U.__webglFramebuffer=s.createFramebuffer();if(le)for(let K=0,$=X.length;K<$;K++){let de=i.get(X[K]);de.__webglTexture===void 0&&(de.__webglTexture=s.createTexture(),a.memory.textures++)}if(C.samples>0&&Ke(C)===!1){U.__webglMultisampledFramebuffer=s.createFramebuffer(),U.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let K=0;K<X.length;K++){let $=X[K];U.__webglColorRenderbuffer[K]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,U.__webglColorRenderbuffer[K]);let de=r.convert($.format,$.colorSpace),Ne=r.convert($.type),be=b($.internalFormat,de,Ne,$.normalized,$.colorSpace,C.isXRRenderTarget===!0),fe=je(C);s.renderbufferStorageMultisample(s.RENDERBUFFER,fe,be,C.width,C.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+K,s.RENDERBUFFER,U.__webglColorRenderbuffer[K])}s.bindRenderbuffer(s.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=s.createRenderbuffer(),qe(U.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ce){t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture),nt(s.TEXTURE_CUBE_MAP,y);for(let K=0;K<6;K++)if(y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Se(U.__webglFramebuffer[K][$],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,$);else Se(U.__webglFramebuffer[K],C,y,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(y)&&v(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(le){for(let K=0,$=X.length;K<$;K++){let de=X[K],Ne=i.get(de),be=s.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(be=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,Ne.__webglTexture),nt(be,de),Se(U.__webglFramebuffer,C,de,s.COLOR_ATTACHMENT0+K,be,0),p(de)&&v(be)}t.unbindTexture()}else{let K=s.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(K=C.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(K,G.__webglTexture),nt(K,y),y.mipmaps&&y.mipmaps.length>0)for(let $=0;$<y.mipmaps.length;$++)Se(U.__webglFramebuffer[$],C,y,s.COLOR_ATTACHMENT0,K,$);else Se(U.__webglFramebuffer,C,y,s.COLOR_ATTACHMENT0,K,0);p(y)&&v(K),t.unbindTexture()}C.depthBuffer&&te(C)}function oe(C){let y=C.textures;for(let U=0,G=y.length;U<G;U++){let X=y[U];if(p(X)){let ce=S(C),le=i.get(X).__webglTexture;t.bindTexture(ce,le),v(ce),t.unbindTexture()}}}let he=[],He=[];function Be(C){if(C.samples>0){if(Ke(C)===!1){let y=C.textures,U=C.width,G=C.height,X=s.COLOR_BUFFER_BIT,ce=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,le=i.get(C),K=y.length>1;if(K)for(let de=0;de<y.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,le.__webglMultisampledFramebuffer);let $=C.texture.mipmaps;$&&$.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglFramebuffer);for(let de=0;de<y.length;de++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(X|=s.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(X|=s.STENCIL_BUFFER_BIT)),K){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,le.__webglColorRenderbuffer[de]);let Ne=i.get(y[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Ne,0)}s.blitFramebuffer(0,0,U,G,0,0,U,G,X,s.NEAREST),c===!0&&(he.length=0,He.length=0,he.push(s.COLOR_ATTACHMENT0+de),C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&(he.push(ce),He.push(ce),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,He)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,he))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<y.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,le.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,le.__webglColorRenderbuffer[de]);let Ne=i.get(y[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,le.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,Ne,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,le.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.storeMultisampledDepthBuffer===!1&&c){let y=C.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[y])}}}function je(C){return Math.min(n.maxSamples,C.samples)}function Ke(C){let y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function L(C){let y=a.render.frame;h.get(C)!==y&&(h.set(C,y),C.update())}function mt(C,y){let U=C.colorSpace,G=C.format,X=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==pi&&U!==qn&&($e.getTransfer(U)===ut?(G!==ki||X!==Ai)&&Le("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",U)),y}function st(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(l.width=C.naturalWidth||C.width,l.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(l.width=C.displayWidth,l.height=C.displayHeight):(l.width=C.width,l.height=C.height),l}this.allocateTextureUnit=V,this.resetTextureUnits=B,this.getTextureUnits=D,this.setTextureUnits=O,this.setTexture2D=ne,this.setTexture2DArray=q,this.setTexture3D=Z,this.setTextureCube=Q,this.rebindTextures=re,this.setupRenderTarget=ae,this.updateRenderTargetMipmap=oe,this.updateMultisampleRenderTarget=Be,this.setupDepthRenderbuffer=te,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=Ke,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Xy(s,e){function t(i,n=qn){let r,a=$e.getTransfer(n);if(i===Ai)return s.UNSIGNED_BYTE;if(i===jc)return s.UNSIGNED_SHORT_4_4_4_4;if(i===Xc)return s.UNSIGNED_SHORT_5_5_5_1;if(i===xu)return s.UNSIGNED_INT_5_9_9_9_REV;if(i===vu)return s.UNSIGNED_INT_10F_11F_11F_REV;if(i===gu)return s.BYTE;if(i===bu)return s.SHORT;if(i===kr)return s.UNSIGNED_SHORT;if(i===qc)return s.INT;if(i===Ni)return s.UNSIGNED_INT;if(i===Fi)return s.FLOAT;if(i===ri)return s.HALF_FLOAT;if(i===_u)return s.ALPHA;if(i===yu)return s.RGB;if(i===ki)return s.RGBA;if(i===pn)return s.DEPTH_COMPONENT;if(i===fs)return s.DEPTH_STENCIL;if(i===Kc)return s.RED;if(i===Jc)return s.RED_INTEGER;if(i===ps)return s.RG;if(i===Yc)return s.RG_INTEGER;if(i===Zc)return s.RGBA_INTEGER;if(i===to||i===io||i===no||i===so)if(a===ut)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===to)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===to)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===io)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===no)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===so)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===$c||i===Qc||i===el||i===tl)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===$c)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Qc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===el)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===tl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===il||i===nl||i===sl||i===rl||i===al||i===ro||i===ol)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===il||i===nl)return a===ut?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===sl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===rl)return r.COMPRESSED_R11_EAC;if(i===al)return r.COMPRESSED_SIGNED_R11_EAC;if(i===ro)return r.COMPRESSED_RG11_EAC;if(i===ol)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===cl||i===ll||i===hl||i===ul||i===dl||i===fl||i===pl||i===ml||i===gl||i===bl||i===xl||i===vl||i===_l||i===yl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===cl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ll)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===hl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===ul)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===dl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===fl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===pl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ml)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===gl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===bl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===xl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===vl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===_l)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===yl)return a===ut?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Sl||i===Ml||i===wl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===Sl)return a===ut?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===wl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===El||i===Tl||i===ao||i===Al)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===El)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Tl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ao)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Al)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Or?s.UNSIGNED_INT_24_8:s[i]!==void 0?s[i]:null}return{convert:t}}var Ky=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Jy=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,qu=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let i=new Ra(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,i=new Nt({vertexShader:Ky,fragmentShader:Jy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ke(new Ht(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},ju=class extends nn{constructor(e,t){super();let i=this,n=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,x=typeof XRWebGLBinding<"u",m=new qu,p={},v=t.getContextAttributes(),S=null,b=null,M=[],w=[],A=new ie,_=null,T=null,P=new Ft;P.viewport=new ct;let I=new Ft;I.viewport=new ct;let N=[P,I],B=new Bc,D=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let ee=M[J];return ee===void 0&&(ee=new Sr,M[J]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(J){let ee=M[J];return ee===void 0&&(ee=new Sr,M[J]=ee),ee.getGripSpace()},this.getHand=function(J){let ee=M[J];return ee===void 0&&(ee=new Sr,M[J]=ee),ee.getHandSpace()};function V(J){let ee=w.indexOf(J.inputSource);if(ee===-1)return;let xe=M[ee];xe!==void 0&&(xe.update(J.inputSource,J.frame,l||a),xe.dispatchEvent({type:J.type,data:J.inputSource}))}function j(){n.removeEventListener("select",V),n.removeEventListener("selectstart",V),n.removeEventListener("selectend",V),n.removeEventListener("squeeze",V),n.removeEventListener("squeezestart",V),n.removeEventListener("squeezeend",V),n.removeEventListener("end",j),n.removeEventListener("inputsourceschange",ne);for(let J=0;J<M.length;J++){let ee=w[J];ee!==null&&(w[J]=null,M[J].disconnect(ee))}D=null,O=null,m.reset();for(let J in p)delete p[J];if(e.setRenderTarget(S),f=null,d=null,u=null,n=null,b=null,lt.stop(),i.isPresenting=!1,e.setPixelRatio(_),e.setSize(A.width,A.height,!1),T!==null){let J=T.camera;J.fov=T.fov,J.zoom=T.zoom,J.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){r=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){o=J,i.isPresenting===!0&&Le("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(J){l=J},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(n,t)),u},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(J){if(n=J,n!==null){if(S=e.getRenderTarget(),n.addEventListener("select",V),n.addEventListener("selectstart",V),n.addEventListener("selectend",V),n.addEventListener("squeeze",V),n.addEventListener("squeezestart",V),n.addEventListener("squeezeend",V),n.addEventListener("end",j),n.addEventListener("inputsourceschange",ne),v.xrCompatible!==!0&&await t.makeXRCompatible(),_=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let xe=null,We=null,Se=null;v.depth&&(Se=v.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,xe=v.stencil?fs:pn,We=v.stencil?Or:Ni);let qe={colorFormat:t.RGBA8,depthFormat:Se,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(qe),n.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new qt(d.textureWidth,d.textureHeight,{format:ki,type:Ai,depthTexture:new gn(d.textureWidth,d.textureHeight,We,void 0,void 0,void 0,void 0,void 0,void 0,xe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let xe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(n,t,xe),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new qt(f.framebufferWidth,f.framebufferHeight,{format:ki,type:Ai,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await n.requestReferenceSpace(o),lt.setContext(n),lt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ne(J){for(let ee=0;ee<J.removed.length;ee++){let xe=J.removed[ee],We=w.indexOf(xe);We>=0&&(w[We]=null,M[We].disconnect(xe))}for(let ee=0;ee<J.added.length;ee++){let xe=J.added[ee],We=w.indexOf(xe);if(We===-1){for(let qe=0;qe<M.length;qe++)if(qe>=w.length){w.push(xe),We=qe;break}else if(w[qe]===null){w[qe]=xe,We=qe;break}if(We===-1)break}let Se=M[We];Se&&Se.connect(xe)}}let q=new R,Z=new R;function Q(J,ee,xe){q.setFromMatrixPosition(ee.matrixWorld),Z.setFromMatrixPosition(xe.matrixWorld);let We=q.distanceTo(Z),Se=ee.projectionMatrix.elements,qe=xe.projectionMatrix.elements,vt=Se[14]/(Se[10]-1),te=Se[14]/(Se[10]+1),re=(Se[9]+1)/Se[5],ae=(Se[9]-1)/Se[5],oe=(Se[8]-1)/Se[0],he=(qe[8]+1)/qe[0],He=vt*oe,Be=vt*he,je=We/(-oe+he),Ke=je*-oe;if(ee.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Ke),J.translateZ(je),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Se[10]===-1)J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse);else{let L=vt+je,mt=te+je,st=He-Ke,C=Be+(We-Ke),y=re*te/mt*L,U=ae*te/mt*L;J.projectionMatrix.makePerspective(st,C,y,U,L,mt),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function Re(J,ee){ee===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(ee.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(n===null)return;let ee=J.near,xe=J.far;m.texture!==null&&(m.depthNear>0&&(ee=m.depthNear),m.depthFar>0&&(xe=m.depthFar)),B.near=I.near=P.near=ee,B.far=I.far=P.far=xe,(D!==B.near||O!==B.far)&&(n.updateRenderState({depthNear:B.near,depthFar:B.far}),D=B.near,O=B.far),B.layers.mask=J.layers.mask|6,P.layers.mask=B.layers.mask&-5,I.layers.mask=B.layers.mask&-3;let We=J.parent,Se=B.cameras;Re(B,We);for(let qe=0;qe<Se.length;qe++)Re(Se[qe],We);Se.length===2?Q(B,P,I):B.projectionMatrix.copy(P.projectionMatrix),T===null&&J.isPerspectiveCamera&&(T={camera:J,fov:J.fov,zoom:J.zoom}),Me(J,B,We)};function Me(J,ee,xe){xe===null?J.matrix.copy(ee.matrixWorld):(J.matrix.copy(xe.matrixWorld),J.matrix.invert(),J.matrix.multiply(ee.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(ee.projectionMatrix),J.projectionMatrixInverse.copy(ee.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=Ps*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return B},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(J){c=J,d!==null&&(d.fixedFoveation=J),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=J)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(B)},this.getCameraTexture=function(J){return p[J]};let ft=null;function nt(J,ee){if(h=ee.getViewerPose(l||a),g=ee,h!==null){let xe=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let We=!1;xe.length!==B.cameras.length&&(B.cameras.length=0,We=!0);for(let te=0;te<xe.length;te++){let re=xe[te],ae=null;if(f!==null)ae=f.getViewport(re);else{let he=u.getViewSubImage(d,re);ae=he.viewport,te===0&&(e.setRenderTargetTextures(b,he.colorTexture,he.depthStencilTexture),e.setRenderTarget(b))}let oe=N[te];oe===void 0&&(oe=new Ft,oe.layers.enable(te),oe.viewport=new ct,N[te]=oe),oe.matrix.fromArray(re.transform.matrix),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.projectionMatrix.fromArray(re.projectionMatrix),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert(),oe.viewport.set(ae.x,ae.y,ae.width,ae.height),te===0&&(B.matrix.copy(oe.matrix),B.matrix.decompose(B.position,B.quaternion,B.scale)),We===!0&&B.cameras.push(oe)}let Se=n.enabledFeatures;if(Se&&Se.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){u=i.getBinding();let te=u.getDepthInformation(xe[0]);te&&te.isValid&&te.texture&&m.init(te,n.renderState)}if(Se&&Se.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let te=0;te<xe.length;te++){let re=xe[te].camera;if(re){let ae=p[re];ae||(ae=new Ra,p[re]=ae);let oe=u.getCameraImage(re);ae.sourceTexture=oe}}}}for(let xe=0;xe<M.length;xe++){let We=w[xe],Se=M[xe];We!==null&&Se!==void 0&&Se.update(We,ee,l||a)}ft&&ft(J,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),g=null}let lt=new Mm;lt.setAnimationLoop(nt),this.setAnimationLoop=function(J){ft=J},this.dispose=function(){}}},Yy=new Pe,Cm=new Xe;Cm.set(-1,0,0,0,1,0,0,0,1);function Zy(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Ru(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function n(m,p,v,S,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),x(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,v,S):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Yt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Yt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let v=e.get(p),S=v.envMap,b=v.envMapRotation;S&&(m.envMap.value=S,m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(b)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Cm),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,v,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*v,m.scale.value=S*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,v){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Yt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){let v=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:n}}function $y(s,e,t,i){let n={},r={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(b,M){let w=M.program;i.uniformBlockBinding(b,w)}function l(b,M){let w=n[b.id];w===void 0&&(m(b),w=h(b),n[b.id]=w,b.addEventListener("dispose",v));let A=M.program;i.updateUBOMapping(b,A);let _=e.render.frame;r[b.id]!==_&&(d(b),r[b.id]=_)}function h(b){let M=u();b.__bindingPointIndex=M;let w=s.createBuffer(),A=b.__size,_=b.usage;return s.bindBuffer(s.UNIFORM_BUFFER,w),s.bufferData(s.UNIFORM_BUFFER,A,_),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,w),w}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return Ve("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(b){let M=n[b.id],w=b.uniforms,A=b.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let _=0,T=w.length;_<T;_++){let P=w[_];if(Array.isArray(P))for(let I=0,N=P.length;I<N;I++)f(P[I],_,I,A);else f(P,_,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(b,M,w,A){if(x(b,M,w,A)===!0){let _=b.__offset,T=b.value;if(Array.isArray(T)){let P=0;for(let I=0;I<T.length;I++){let N=T[I],B=p(N);g(N,b.__data,P),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(P+=B.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,b.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,_,b.__data)}}function g(b,M,w){typeof b=="number"||typeof b=="boolean"?M[0]=b:b.isMatrix3?(M[0]=b.elements[0],M[1]=b.elements[1],M[2]=b.elements[2],M[3]=0,M[4]=b.elements[3],M[5]=b.elements[4],M[6]=b.elements[5],M[7]=0,M[8]=b.elements[6],M[9]=b.elements[7],M[10]=b.elements[8],M[11]=0):ArrayBuffer.isView(b)?M.set(new b.constructor(b.buffer,b.byteOffset,M.length)):b.toArray(M,w)}function x(b,M,w,A){let _=b.value,T=M+"_"+w;if(A[T]===void 0)return typeof _=="number"||typeof _=="boolean"?A[T]=_:ArrayBuffer.isView(_)?A[T]=_.slice():A[T]=_.clone(),!0;{let P=A[T];if(typeof _=="number"||typeof _=="boolean"){if(P!==_)return A[T]=_,!0}else{if(ArrayBuffer.isView(_))return!0;if(P.equals(_)===!1)return P.copy(_),!0}}return!1}function m(b){let M=b.uniforms,w=0,A=16;for(let T=0,P=M.length;T<P;T++){let I=Array.isArray(M[T])?M[T]:[M[T]];for(let N=0,B=I.length;N<B;N++){let D=I[N],O=Array.isArray(D.value)?D.value:[D.value];for(let V=0,j=O.length;V<j;V++){let ne=O[V],q=p(ne),Z=w%A,Q=Z%q.boundary,Re=Z+Q;w+=Q,Re!==0&&A-Re<q.storage&&(w+=A-Re),D.__data=new Float32Array(q.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=w,w+=q.storage}}}let _=w%A;return _>0&&(w+=A-_),b.__size=w,b.__cache={},this}function p(b){let M={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(M.boundary=4,M.storage=4):b.isVector2?(M.boundary=8,M.storage=8):b.isVector3||b.isColor?(M.boundary=16,M.storage=12):b.isVector4?(M.boundary=16,M.storage=16):b.isMatrix3?(M.boundary=48,M.storage=48):b.isMatrix4?(M.boundary=64,M.storage=64):b.isTexture?Le("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(M.boundary=16,M.storage=b.byteLength):Le("WebGLRenderer: Unsupported uniform value type.",b),M}function v(b){let M=b.target;M.removeEventListener("dispose",v);let w=a.indexOf(M.__bindingPointIndex);a.splice(w,1),s.deleteBuffer(n[M.id]),delete n[M.id],delete r[M.id]}function S(){for(let b in n)s.deleteBuffer(n[b]);a=[],n={},r={}}return{bind:c,update:l,dispose:S}}var Qy=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),_n=null;function eS(){return _n===null&&(_n=new kn(Qy,16,16,ps,ri),_n.name="DFG_LUT",_n.minFilter=It,_n.magFilter=It,_n.wrapS=Gi,_n.wrapT=Gi,_n.generateMipmaps=!1,_n.needsUpdate=!0),_n}var Ol=class{constructor(e={}){let{canvas:t=Wp(),context:i=null,depth:n=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=Ai}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let x=f,m=new Set([Zc,Yc,Jc]),p=new Set([Ai,Ni,kr,Or,jc,Xc]),v=new Uint32Array(4),S=new Int32Array(4),b=new R,M=null,w=null,A=[],_=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=on,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let P=this,I=!1,N=null,B=null,D=null,O=null;this._outputColorSpace=at;let V=0,j=0,ne=null,q=-1,Z=null,Q=new ct,Re=new ct,Me=null,ft=new ge(0),nt=0,lt=t.width,J=t.height,ee=1,xe=null,We=null,Se=new ct(0,0,lt,J),qe=new ct(0,0,lt,J),vt=!1,te=new Tr,re=!1,ae=!1,oe=new Pe,he=new R,He=new ct,Be={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function Ke(){return ne===null?ee:1}let L=i;function mt(E,F){return t.getContext(E,F)}let st,C,y,U,G,X,ce,le,K,$,de,Ne,be,fe,Fe,Ge,Ze,k,pe,Y,me,ye,se;try{let E={alpha:!0,depth:n,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",Tt,!1),t.addEventListener("webglcontextrestored",gt,!1),t.addEventListener("webglcontextcreationerror",Yi,!1),L===null){let F="webgl2";if(L=mt(F,E),L===null)throw mt(F)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Oe()}catch(E){throw t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Yi,!1),Ve("WebGLRenderer: "+E.message),E}function Oe(){st=new o_(L),st.init(),me=new Xy(L,st),C=new Zv(L,st,e,me),y=new qy(L,st),C.reversedDepthBuffer&&d&&y.buffers.depth.setReversed(!0),B=L.createFramebuffer(),D=L.createFramebuffer(),O=L.createFramebuffer(),U=new h_(L),G=new Iy,X=new jy(L,st,y,G,C,me,U),ce=new a_(P),le=new db(L),ye=new Jv(L,le),K=new c_(L,le,U,ye),$=new d_(L,K,le,ye,U),k=new u_(L,C,X),Fe=new $v(G),de=new Py(P,ce,st,C,ye,Fe),Ne=new Zy(P,G),be=new Ly,fe=new By(st),Ze=new Kv(P,ce,y,$,g,c),Ge=new Wy(P,$,C),se=new $y(L,U,C,y),pe=new Yv(L,st,U),Y=new l_(L,st,U),U.programs=de.programs,P.capabilities=C,P.extensions=st,P.properties=G,P.renderLists=be,P.shadowMap=Ge,P.state=y,P.info=U}x!==Ai&&(T=new p_(x,t.width,t.height,o,n,r));let Ce=new ju(P,L);this.xr=Ce,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let E=st.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){let E=st.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(E){E!==void 0&&(ee=E,this.setSize(lt,J,!1))},this.getSize=function(E){return E.set(lt,J)},this.setSize=function(E,F,W=!0){if(Ce.isPresenting){Le("WebGLRenderer: Can't change size while VR device is presenting.");return}lt=E,J=F,t.width=Math.floor(E*ee),t.height=Math.floor(F*ee),W===!0&&(t.style.width=E+"px",t.style.height=F+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(lt*ee,J*ee).floor()},this.setDrawingBufferSize=function(E,F,W){lt=E,J=F,ee=W,t.width=Math.floor(E*W),t.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.setEffects=function(E){if(x===Ai){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(E){for(let F=0;F<E.length;F++)if(E[F].isOutputPass===!0){Le("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(E||[])},this.getCurrentViewport=function(E){return E.copy(Q)},this.getViewport=function(E){return E.copy(Se)},this.setViewport=function(E,F,W,z){E.isVector4?Se.set(E.x,E.y,E.z,E.w):Se.set(E,F,W,z),y.viewport(Q.copy(Se).multiplyScalar(ee).round())},this.getScissor=function(E){return E.copy(qe)},this.setScissor=function(E,F,W,z){E.isVector4?qe.set(E.x,E.y,E.z,E.w):qe.set(E,F,W,z),y.scissor(Re.copy(qe).multiplyScalar(ee).round())},this.getScissorTest=function(){return vt},this.setScissorTest=function(E){y.setScissorTest(vt=E)},this.setOpaqueSort=function(E){xe=E},this.setTransparentSort=function(E){We=E},this.getClearColor=function(E){return E.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor(...arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha(...arguments)},this.clear=function(E=!0,F=!0,W=!0){let z=0;if(E){let H=!1;if(ne!==null){let _e=ne.texture.format;H=m.has(_e)}if(H){let _e=ne.texture.type,Ee=p.has(_e),ve=Ze.getClearColor(),Te=Ze.getClearAlpha(),De=ve.r,Qe=ve.g,rt=ve.b;Ee?(v[0]=De,v[1]=Qe,v[2]=rt,v[3]=Te,L.clearBufferuiv(L.COLOR,0,v)):(S[0]=De,S[1]=Qe,S[2]=rt,S[3]=Te,L.clearBufferiv(L.COLOR,0,S))}else z|=L.COLOR_BUFFER_BIT}F&&(z|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(z|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z!==0&&L.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(E){E.setRenderer(this),N=E},this.dispose=function(){t.removeEventListener("webglcontextlost",Tt,!1),t.removeEventListener("webglcontextrestored",gt,!1),t.removeEventListener("webglcontextcreationerror",Yi,!1),Ze.dispose(),be.dispose(),fe.dispose(),G.dispose(),ce.dispose(),$.dispose(),ye.dispose(),se.dispose(),de.dispose(),Ce.dispose(),Ce.removeEventListener("sessionstart",tf),Ce.removeEventListener("sessionend",nf),bs.stop()};function Tt(E){E.preventDefault(),va("WebGLRenderer: Context Lost."),I=!0}function gt(){va("WebGLRenderer: Context Restored."),I=!1;let E=U.autoReset,F=Ge.enabled,W=Ge.autoUpdate,z=Ge.needsUpdate,H=Ge.type;Oe(),U.autoReset=E,Ge.enabled=F,Ge.autoUpdate=W,Ge.needsUpdate=z,Ge.type=H}function Yi(E){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function hn(E){let F=E.target;F.removeEventListener("dispose",hn),Sg(F)}function Sg(E){Mg(E),G.remove(E)}function Mg(E){let F=G.get(E).programs;F!==void 0&&(F.forEach(function(W){de.releaseProgram(W)}),E.isShaderMaterial&&de.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,z,H,_e){F===null&&(F=Be);let Ee=H.isMesh&&H.matrixWorld.determinantAffine()<0,ve=Tg(E,F,W,z,H);y.setMaterial(z,Ee);let Te=W.index,De=1;if(z.wireframe===!0){if(Te=K.getWireframeAttribute(W),Te===void 0)return;De=2}let Qe=W.drawRange,rt=W.attributes.position,Ae=Qe.start*De,bt=(Qe.start+Qe.count)*De;_e!==null&&(Ae=Math.max(Ae,_e.start*De),bt=Math.min(bt,(_e.start+_e.count)*De)),Te!==null?(Ae=Math.max(Ae,0),bt=Math.min(bt,Te.count)):rt!=null&&(Ae=Math.max(Ae,0),bt=Math.min(bt,rt.count));let Vt=bt-Ae;if(Vt<0||Vt===1/0)return;ye.setup(H,z,ve,W,Te);let Pt,Et=pe;if(Te!==null&&(Pt=le.get(Te),Et=Y,Et.setIndex(Pt)),H.isMesh)z.wireframe===!0?(y.setLineWidth(z.wireframeLinewidth*Ke()),Et.setMode(L.LINES)):Et.setMode(L.TRIANGLES);else if(H.isLine){let ci=z.linewidth;ci===void 0&&(ci=1),y.setLineWidth(ci*Ke()),H.isLineSegments?Et.setMode(L.LINES):H.isLineLoop?Et.setMode(L.LINE_LOOP):Et.setMode(L.LINE_STRIP)}else H.isPoints?Et.setMode(L.POINTS):H.isSprite&&Et.setMode(L.TRIANGLES);if(H.isBatchedMesh)if(st.get("WEBGL_multi_draw"))Et.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{let ci=H._multiDrawStarts,we=H._multiDrawCounts,di=H._multiDrawCount,ht=Te?le.get(Te).bytesPerElement:1,Bi=G.get(z).currentProgram.getUniforms();for(let un=0;un<di;un++)Bi.setValue(L,"_gl_DrawID",un),Et.render(ci[un]/ht,we[un])}else if(H.isInstancedMesh)Et.renderInstances(Ae,Vt,H.count);else if(W.isInstancedBufferGeometry){let ci=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,we=Math.min(W.instanceCount,ci);Et.renderInstances(Ae,Vt,we)}else Et.render(Ae,Vt)};function ef(E,F,W,z){N!==null&&E.isNodeMaterial&&N.setObject(z,E),re===!0&&Fe.setState(E,W,!1),E.transparent===!0&&E.side===ot&&E.forceSinglePass===!1?(E.side=Yt,E.needsUpdate=!0,Ro(E,F,z),E.side=ji,E.needsUpdate=!0,Ro(E,F,z),E.side=ot):Ro(E,F,z)}this.compile=function(E,F,W=null){W===null&&(W=E),N!==null&&N.renderStart(E,F,W),w=fe.get(W),w.init(F),_.push(w),W.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),E!==W&&E.traverseVisible(function(H){H.isLight&&H.layers.test(F.layers)&&(w.pushLight(H),H.castShadow&&w.pushShadow(H))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),ae=this.localClippingEnabled,re=Fe.init(this.clippingPlanes,ae),re===!0&&Fe.setGlobalState(this.clippingPlanes,F),N!==null&&Ge.render(w.state.shadowsArray,W,F);let z=new Set;return E.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;let _e=H.material;if(_e)if(Array.isArray(_e))for(let Ee=0;Ee<_e.length;Ee++){let ve=_e[Ee];ef(ve,W,F,H),z.add(ve)}else ef(_e,W,F,H),z.add(_e)}),w=_.pop(),N!==null&&N.renderEnd(),z},this.compileAsync=function(E,F,W=null){let z=this.compile(E,F,W);return new Promise(H=>{function _e(){if(z.forEach(function(Ee){let Te=G.get(Ee).currentProgram;(Te===void 0||Te.isReady())&&z.delete(Ee)}),z.size===0){H(E);return}setTimeout(_e,10)}st.get("KHR_parallel_shader_compile")!==null?_e():setTimeout(_e,10)})};let xh=null;function wg(E){xh&&xh(E)}function tf(){bs.stop()}function nf(){bs.start()}let bs=new Mm;bs.setAnimationLoop(wg),typeof self<"u"&&bs.setContext(self),this.setAnimationLoop=function(E){xh=E,Ce.setAnimationLoop(E),E===null?bs.stop():bs.start()},Ce.addEventListener("sessionstart",tf),Ce.addEventListener("sessionend",nf),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(I===!0)return;N!==null&&N.renderStart(E,F);let W=Ce.enabled===!0&&Ce.isPresenting===!0,z=T!==null&&(ne===null||W)&&T.begin(P,ne);if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),Ce.enabled===!0&&Ce.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Ce.cameraAutoUpdate===!0&&Ce.updateCamera(F),F=Ce.getCamera()),E.isScene===!0&&E.onBeforeRender(P,E,F,ne),w=fe.get(E,_.length),w.init(F),w.state.textureUnits=X.getTextureUnits(),_.push(w),oe.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),te.setFromProjectionMatrix(oe,tn,F.reversedDepth),ae=this.localClippingEnabled,re=Fe.init(this.clippingPlanes,ae),M=be.get(E,A.length),M.init(),A.push(M),Ce.enabled===!0&&Ce.isPresenting===!0){let Ee=P.xr.getDepthSensingMesh();Ee!==null&&vh(Ee,F,-1/0,P.sortObjects)}vh(E,F,0,P.sortObjects),M.finish(),N!==null&&N.updateLights(w.state.lightsArray),P.sortObjects===!0&&M.sort(xe,We),je=Ce.enabled===!1||Ce.isPresenting===!1||Ce.hasDepthSensing()===!1,je&&Ze.addToRenderList(M,E),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),re===!0&&Fe.beginShadows();let H=w.state.shadowsArray;if(Ge.render(H,E,F),re===!0&&Fe.endShadows(),(z&&T.hasRenderPass())===!1){let Ee=M.opaque,ve=M.transmissive;if(w.setupLights(),F.isArrayCamera){let Te=F.cameras;if(ve.length>0)for(let De=0,Qe=Te.length;De<Qe;De++){let rt=Te[De];rf(Ee,ve,E,rt)}je&&Ze.render(E);for(let De=0,Qe=Te.length;De<Qe;De++){let rt=Te[De];sf(M,E,rt,rt.viewport)}}else ve.length>0&&rf(Ee,ve,E,F),je&&Ze.render(E),sf(M,E,F)}ne!==null&&j===0&&(X.updateMultisampleRenderTarget(ne),X.updateRenderTargetMipmap(ne)),z&&T.end(P),E.isScene===!0&&E.onAfterRender(P,E,F),ye.resetDefaultState(),q=-1,Z=null,_.pop(),_.length>0?(w=_[_.length-1],X.setTextureUnits(w.state.textureUnits),re===!0&&Fe.setGlobalState(P.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,N!==null&&N.renderEnd()};function vh(E,F,W,z){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLightProbeGrid)w.pushLightProbeGrid(E);else if(E.isLight)w.pushLight(E),E.castShadow&&w.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||E.intersectsFrustum(te)){z&&He.setFromMatrixPosition(E.matrixWorld).applyMatrix4(oe);let Ee=$.update(E),ve=E.material;ve.visible&&M.push(E,Ee,ve,W,He.z,null,F)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||E.intersectsFrustum(te))){let Ee=$.update(E),ve=E.material;if(z&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),He.copy(E.boundingSphere.center)):(Ee.boundingSphere===null&&Ee.computeBoundingSphere(),He.copy(Ee.boundingSphere.center)),He.applyMatrix4(E.matrixWorld).applyMatrix4(oe)),Array.isArray(ve)){let Te=Ee.groups;for(let De=0,Qe=Te.length;De<Qe;De++){let rt=Te[De],Ae=ve[rt.materialIndex];Ae&&Ae.visible&&M.push(E,Ee,Ae,W,He.z,rt,F)}}else ve.visible&&M.push(E,Ee,ve,W,He.z,null,F)}}let _e=E.children;for(let Ee=0,ve=_e.length;Ee<ve;Ee++)vh(_e[Ee],F,W,z)}function sf(E,F,W,z){let{opaque:H,transmissive:_e,transparent:Ee}=E;w.setupLightsView(W),re===!0&&Fe.setGlobalState(P.clippingPlanes,W),z&&y.viewport(Q.copy(z)),H.length>0&&Ao(H,F,W),_e.length>0&&Ao(_e,F,W),Ee.length>0&&Ao(Ee,F,W),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function rf(E,F,W,z){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[z.id]===void 0){let Ae=st.has("EXT_color_buffer_half_float")||st.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[z.id]=new qt(1,1,{generateMipmaps:!0,type:Ae?ri:Ai,minFilter:Ti,samples:Math.max(4,C.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:$e.workingColorSpace})}let _e=w.state.transmissionRenderTarget[z.id],Ee=z.viewport||Q;_e.setSize(Ee.z*P.transmissionResolutionScale,Ee.w*P.transmissionResolutionScale);let ve=P.getRenderTarget(),Te=P.getActiveCubeFace(),De=P.getActiveMipmapLevel();P.setRenderTarget(_e),P.getClearColor(ft),nt=P.getClearAlpha(),nt<1&&P.setClearColor(16777215,.5),P.clear(),je&&Ze.render(W);let Qe=P.toneMapping;P.toneMapping=on;let rt=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),w.setupLightsView(z),re===!0&&Fe.setGlobalState(P.clippingPlanes,z),Ao(E,W,z),X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e),st.has("WEBGL_multisampled_render_to_texture")===!1){let Ae=!1;for(let bt=0,Vt=F.length;bt<Vt;bt++){let Pt=F[bt],{object:Et,geometry:ci,material:we,group:di}=Pt;if(we.side===ot&&Et.layers.test(z.layers)){let ht=we.side;we.side=Yt,we.needsUpdate=!0,af(Et,W,z,ci,we,di),we.side=ht,we.needsUpdate=!0,Ae=!0}}Ae===!0&&(X.updateMultisampleRenderTarget(_e),X.updateRenderTargetMipmap(_e))}P.setRenderTarget(ve,Te,De),P.setClearColor(ft,nt),rt!==void 0&&(z.viewport=rt),P.toneMapping=Qe}function Ao(E,F,W){let z=F.isScene===!0?F.overrideMaterial:null;for(let H=0,_e=E.length;H<_e;H++){let Ee=E[H],{object:ve,geometry:Te,group:De}=Ee,Qe=Ee.material;Qe.allowOverride===!0&&z!==null&&(Qe=z),ve.layers.test(W.layers)&&af(ve,F,W,Te,Qe,De)}}function af(E,F,W,z,H,_e){N!==null&&H.isNodeMaterial&&N.setObject(E,H),E.onBeforeRender(P,F,W,z,H,_e),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),H.onBeforeRender(P,F,W,z,E,_e),H.transparent===!0&&H.side===ot&&H.forceSinglePass===!1?(H.side=Yt,H.needsUpdate=!0,P.renderBufferDirect(W,F,z,H,E,_e),H.side=ji,H.needsUpdate=!0,P.renderBufferDirect(W,F,z,H,E,_e),H.side=ot):P.renderBufferDirect(W,F,z,H,E,_e),E.onAfterRender(P,F,W,z,H,_e)}function Ro(E,F,W){F.isScene!==!0&&(F=Be);let z=G.get(E),H=w.state.lights,_e=w.state.shadowsArray,Ee=H.state.version,ve=de.getParameters(E,H.state,_e,F,W,w.state.lightProbeGridArray),Te=de.getProgramCacheKey(ve),De=z.programs;z.environment=E.isMeshStandardMaterial||E.isMeshLambertMaterial||E.isMeshPhongMaterial?F.environment:null,z.fog=F.fog;let Qe=E.isMeshStandardMaterial||E.isMeshLambertMaterial&&!E.envMap||E.isMeshPhongMaterial&&!E.envMap;z.envMap=ce.get(E.envMap||z.environment,Qe),z.envMapRotation=z.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,De===void 0&&(E.addEventListener("dispose",hn),De=new Map,z.programs=De);let rt=De.get(Te);if(rt!==void 0){if(z.currentProgram===rt&&z.lightsStateVersion===Ee)return cf(E,ve),rt}else ve.uniforms=de.getUniforms(E),N!==null&&E.isNodeMaterial&&N.build(E,W,ve),E.onBeforeCompile(ve,P),rt=de.acquireProgram(ve,Te),De.set(Te,rt),z.uniforms=ve.uniforms;let Ae=z.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Ae.clippingPlanes=Fe.uniform),cf(E,ve),z.needsLights=Rg(E),z.lightsStateVersion=Ee,z.needsLights&&(Ae.ambientLightColor.value=H.state.ambient,Ae.lightProbe.value=H.state.probe,Ae.sunLights.value=H.state.sun,Ae.sunLightShadows.value=H.state.sunShadow,Ae.directionalLights.value=H.state.directional,Ae.directionalLightShadows.value=H.state.directionalShadow,Ae.spotLights.value=H.state.spot,Ae.spotLightShadows.value=H.state.spotShadow,Ae.rectAreaLights.value=H.state.rectArea,Ae.ltc_1.value=H.state.rectAreaLTC1,Ae.ltc_2.value=H.state.rectAreaLTC2,Ae.pointLights.value=H.state.point,Ae.pointLightShadows.value=H.state.pointShadow,Ae.hemisphereLights.value=H.state.hemi,Ae.sunShadowMatrix.value=H.state.sunShadowMatrix,Ae.sunShadowCascade.value=H.state.sunShadowCascade,Ae.directionalShadowMatrix.value=H.state.directionalShadowMatrix,Ae.spotLightMatrix.value=H.state.spotLightMatrix,Ae.spotLightMap.value=H.state.spotLightMap,Ae.pointShadowMatrix.value=H.state.pointShadowMatrix),z.lightProbeGrid=w.state.lightProbeGridArray.length>0,z.currentProgram=rt,z.uniformsList=null,rt}function of(E){if(E.uniformsList===null){let F=E.currentProgram.getUniforms();E.uniformsList=Hr.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function cf(E,F){let W=G.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function Eg(E,F){if(E.length===0)return null;if(E.length===1)return E[0].texture!==null?E[0]:null;b.setFromMatrixPosition(F.matrixWorld);for(let W=0,z=E.length;W<z;W++){let H=E[W];if(H.texture!==null&&H.boundingBox.containsPoint(b))return H}return null}function Tg(E,F,W,z,H){F.isScene!==!0&&(F=Be),X.resetTextureUnits();let _e=F.fog,Ee=z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial?F.environment:null,ve=ne===null?P.outputColorSpace:ne.isXRRenderTarget===!0?ne.texture.colorSpace:$e.workingColorSpace,Te=z.isMeshStandardMaterial||z.isMeshLambertMaterial&&!z.envMap||z.isMeshPhongMaterial&&!z.envMap,De=ce.get(z.envMap||Ee,Te),Qe=z.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,rt=!!W.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),Ae=!!W.morphAttributes.position,bt=!!W.morphAttributes.normal,Vt=!!W.morphAttributes.color,Pt=on;z.toneMapped&&(ne===null||ne.isXRRenderTarget===!0)&&(Pt=P.toneMapping);let Et=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,ci=Et!==void 0?Et.length:0,we=G.get(z),di=w.state.lights;if(re===!0&&(ae===!0||E!==Z)){let At=E===Z&&z.id===q;Fe.setState(z,E,At)}let ht=!1;z.version===we.__version?(we.needsLights&&we.lightsStateVersion!==di.state.version||we.outputColorSpace!==ve||H.isBatchedMesh&&we.batching===!1||!H.isBatchedMesh&&we.batching===!0||H.isBatchedMesh&&we.batchingColor===!0&&H._colorsTexture===null||H.isBatchedMesh&&we.batchingColor===!1&&H._colorsTexture!==null||H.isInstancedMesh&&we.instancing===!1||!H.isInstancedMesh&&we.instancing===!0||H.isSkinnedMesh&&we.skinning===!1||!H.isSkinnedMesh&&we.skinning===!0||H.isInstancedMesh&&we.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&we.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&we.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&we.instancingMorph===!1&&H.morphTexture!==null||we.envMap!==De||z.fog===!0&&we.fog!==_e||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==Fe.numPlanes||we.numIntersection!==Fe.numIntersection)||we.vertexAlphas!==Qe||we.vertexTangents!==rt||we.morphTargets!==Ae||we.morphNormals!==bt||we.morphColors!==Vt||we.toneMapping!==Pt||we.morphTargetsCount!==ci||!!we.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(ht=!0):(ht=!0,we.__version=z.version);let Bi=we.currentProgram;ht===!0&&(Bi=Ro(z,F,H),N&&z.isNodeMaterial&&N.onUpdateProgram(z,Bi,we));let un=!1,Yn=!1,Xs=!1,yt=Bi.getUniforms(),Ut=we.uniforms;if(y.useProgram(Bi.program)&&(un=!0,Yn=!0,Xs=!0),z.id!==q&&(q=z.id,Yn=!0),we.needsLights){let At=Eg(w.state.lightProbeGridArray,H);we.lightProbeGrid!==At&&(we.lightProbeGrid=At,Yn=!0)}if(un||Z!==E){y.buffers.depth.getReversed()&&E.reversedDepth!==!0&&(E._reversedDepth=!0,E.updateProjectionMatrix()),yt.setValue(L,"projectionMatrix",E.projectionMatrix),yt.setValue(L,"viewMatrix",E.matrixWorldInverse);let $n=yt.map.cameraPosition;$n!==void 0&&$n.setValue(L,he.setFromMatrixPosition(E.matrixWorld)),C.logarithmicDepthBuffer&&yt.setValue(L,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&yt.setValue(L,"isOrthographic",E.isOrthographicCamera===!0),Z!==E&&(Z=E,Yn=!0,Xs=!0)}if(we.needsLights&&(di.state.sunShadowMap.length>0&&yt.setValue(L,"sunShadowMap",di.state.sunShadowMap,X),di.state.directionalShadowMap.length>0&&yt.setValue(L,"directionalShadowMap",di.state.directionalShadowMap,X),di.state.spotShadowMap.length>0&&yt.setValue(L,"spotShadowMap",di.state.spotShadowMap,X),di.state.pointShadowMap.length>0&&yt.setValue(L,"pointShadowMap",di.state.pointShadowMap,X)),H.isSkinnedMesh){yt.setOptional(L,H,"bindMatrix"),yt.setOptional(L,H,"bindMatrixInverse");let At=H.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),yt.setValue(L,"boneTexture",At.boneTexture,X))}H.isBatchedMesh&&(yt.setOptional(L,H,"batchingTexture"),yt.setValue(L,"batchingTexture",H._matricesTexture,X),yt.setOptional(L,H,"batchingIdTexture"),yt.setValue(L,"batchingIdTexture",H._indirectTexture,X),yt.setOptional(L,H,"batchingColorTexture"),H._colorsTexture!==null&&yt.setValue(L,"batchingColorTexture",H._colorsTexture,X));let Zn=W.morphAttributes;if((Zn.position!==void 0||Zn.normal!==void 0||Zn.color!==void 0)&&k.update(H,W,Bi),(Yn||we.receiveShadow!==H.receiveShadow)&&(we.receiveShadow=H.receiveShadow,yt.setValue(L,"receiveShadow",H.receiveShadow)),(z.isMeshStandardMaterial||z.isMeshLambertMaterial||z.isMeshPhongMaterial)&&z.envMap===null&&F.environment!==null&&(Ut.envMapIntensity.value=F.environmentIntensity),Ut.dfgLUT!==void 0&&(Ut.dfgLUT.value=eS()),Yn){if(yt.setValue(L,"toneMappingExposure",P.toneMappingExposure),we.needsLights&&Ag(Ut,Xs),_e&&z.fog===!0&&Ne.refreshFogUniforms(Ut,_e),Ne.refreshMaterialUniforms(Ut,z,ee,J,w.state.transmissionRenderTarget[E.id]),we.needsLights&&we.lightProbeGrid){let At=we.lightProbeGrid;Ut.probesSH.value=At.texture,Ut.probesMin.value.copy(At.boundingBox.min),Ut.probesMax.value.copy(At.boundingBox.max),Ut.probesResolution.value.copy(At.resolution)}Hr.upload(L,of(we),Ut,X)}if(z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Hr.upload(L,of(we),Ut,X),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&yt.setValue(L,"center",H.center),yt.setValue(L,"modelViewMatrix",H.modelViewMatrix),yt.setValue(L,"normalMatrix",H.normalMatrix),yt.setValue(L,"modelMatrix",H.matrixWorld),z.uniformsGroups!==void 0){let At=z.uniformsGroups;for(let $n=0,Ks=At.length;$n<Ks;$n++){let hf=At[$n];se.update(hf,Bi),se.bind(hf,Bi)}}return Bi}function Ag(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.sunLights.needsUpdate=F,E.sunLightShadows.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function Rg(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return j},this.getRenderTarget=function(){return ne},this.setRenderTargetTextures=function(E,F,W){let z=G.get(E);z.__autoAllocateDepthBuffer=E.resolveDepthBuffer===!1,z.__autoAllocateDepthBuffer===!1&&(z.__useRenderToTexture=!1),G.get(E.texture).__webglTexture=F,G.get(E.depthTexture).__webglTexture=z.__autoAllocateDepthBuffer?void 0:W,z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(E,F){let W=G.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){ne=E,V=F,j=W;let z=null,H=!1,_e=!1;if(E){let ve=G.get(E);if(ve.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(L.FRAMEBUFFER,ve.__webglFramebuffer),Q.copy(E.viewport),Re.copy(E.scissor),Me=E.scissorTest,y.viewport(Q),y.scissor(Re),y.setScissorTest(Me),q=-1;return}else if(ve.__webglFramebuffer===void 0)X.setupRenderTarget(E);else if(ve.__hasExternalTextures)X.rebindTextures(E,G.get(E.texture).__webglTexture,G.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){let Qe=E.depthTexture;if(ve.__boundDepthTexture!==Qe){if(Qe!==null&&G.has(Qe)&&(E.width!==Qe.image.width||E.height!==Qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");X.setupDepthRenderbuffer(E)}}let Te=E.texture;(Te.isData3DTexture||Te.isDataArrayTexture||Te.isCompressedArrayTexture)&&(_e=!0);let De=G.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(De[F])?z=De[F][W]:z=De[F],H=!0):E.samples>0&&X.useMultisampledRTT(E)===!1?z=G.get(E).__webglMultisampledFramebuffer:Array.isArray(De)?z=De[W]:z=De,Q.copy(E.viewport),Re.copy(E.scissor),Me=E.scissorTest}else Q.copy(Se).multiplyScalar(ee).floor(),Re.copy(qe).multiplyScalar(ee).floor(),Me=vt;if(W!==0&&(z=B),y.bindFramebuffer(L.FRAMEBUFFER,z)&&y.drawBuffers(E,z),y.viewport(Q),y.scissor(Re),y.setScissorTest(Me),H){let ve=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+F,ve.__webglTexture,W)}else if(_e){let ve=F;for(let Te=0;Te<E.textures.length;Te++){let De=G.get(E.textures[Te]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Te,De.__webglTexture,W,ve)}}else if(E!==null&&W!==0){let ve=G.get(E.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ve.__webglTexture,W)}q=-1};function lf(E){let F=G.get(E);return(F.__readFormat!==E.format||F.__readType!==E.type)&&(F.__readFormat=E.format,F.__readType=E.type,F.__formatReadable=C.textureFormatReadable(E.format),F.__typeReadable=C.textureTypeReadable(E.type)),F}this.readRenderTargetPixels=function(E,F,W,z,H,_e,Ee,ve=0){if(!(E&&E.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Te=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te){y.bindFramebuffer(L.FRAMEBUFFER,Te);try{let De=E.textures[ve],Qe=De.format,rt=De.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);let Ae=lf(De);if(Ae.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ae.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-z&&W>=0&&W<=E.height-H&&L.readPixels(F,W,z,H,me.convert(Qe),me.convert(rt),_e)}finally{let De=ne!==null?G.get(ne).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,z,H,_e,Ee,ve=0){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Te=G.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Te=Te[Ee]),Te)if(F>=0&&F<=E.width-z&&W>=0&&W<=E.height-H){y.bindFramebuffer(L.FRAMEBUFFER,Te);let De=E.textures[ve],Qe=De.format,rt=De.type;E.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ve);let Ae=lf(De);if(Ae.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ae.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let bt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.bufferData(L.PIXEL_PACK_BUFFER,_e.byteLength,L.STREAM_READ),L.readPixels(F,W,z,H,me.convert(Qe),me.convert(rt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Vt=ne!==null?G.get(ne).__webglFramebuffer:null;y.bindFramebuffer(L.FRAMEBUFFER,Vt);let Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await jp(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,bt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,_e),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(bt),L.deleteSync(Pt),_e}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(E,F=null,W=0){let z=Math.pow(2,-W),H=Math.floor(E.image.width*z),_e=Math.floor(E.image.height*z),Ee=F!==null?F.x:0,ve=F!==null?F.y:0;X.setTexture2D(E,0),L.copyTexSubImage2D(L.TEXTURE_2D,W,0,0,Ee,ve,H,_e),y.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,z=null,H=0,_e=0){let Ee,ve,Te,De,Qe,rt,Ae,bt,Vt,Pt=E.isCompressedTexture?E.mipmaps[_e]:E.image;if(W!==null)Ee=W.max.x-W.min.x,ve=W.max.y-W.min.y,Te=W.isBox3?W.max.z-W.min.z:1,De=W.min.x,Qe=W.min.y,rt=W.isBox3?W.min.z:0;else{let Ut=Math.pow(2,-H);Ee=Math.floor(Pt.width*Ut),ve=Math.floor(Pt.height*Ut),E.isDataArrayTexture?Te=Pt.depth:E.isData3DTexture?Te=Math.floor(Pt.depth*Ut):Te=1,De=0,Qe=0,rt=0}z!==null?(Ae=z.x,bt=z.y,Vt=z.z):(Ae=0,bt=0,Vt=0);let Et=me.convert(F.format),ci=me.convert(F.type),we;F.isData3DTexture?(X.setTexture3D(F,0),we=L.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(X.setTexture2DArray(F,0),we=L.TEXTURE_2D_ARRAY):(X.setTexture2D(F,0),we=L.TEXTURE_2D),y.activeTexture(L.TEXTURE0),y.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,F.flipY),y.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),y.pixelStorei(L.UNPACK_ALIGNMENT,F.unpackAlignment);let di=y.getParameter(L.UNPACK_ROW_LENGTH),ht=y.getParameter(L.UNPACK_IMAGE_HEIGHT),Bi=y.getParameter(L.UNPACK_SKIP_PIXELS),un=y.getParameter(L.UNPACK_SKIP_ROWS),Yn=y.getParameter(L.UNPACK_SKIP_IMAGES);y.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),y.pixelStorei(L.UNPACK_SKIP_PIXELS,De),y.pixelStorei(L.UNPACK_SKIP_ROWS,Qe),y.pixelStorei(L.UNPACK_SKIP_IMAGES,rt);let Xs=E.isDataArrayTexture||E.isData3DTexture,yt=F.isDataArrayTexture||F.isData3DTexture;if(E.isDepthTexture){let Ut=G.get(E),Zn=G.get(F),At=G.get(Ut.__renderTarget),$n=G.get(Zn.__renderTarget);y.bindFramebuffer(L.READ_FRAMEBUFFER,At.__webglFramebuffer),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,$n.__webglFramebuffer);for(let Ks=0;Ks<Te;Ks++)Xs&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(E).__webglTexture,H,rt+Ks),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,G.get(F).__webglTexture,_e,Vt+Ks)),L.blitFramebuffer(De,Qe,Ee,ve,Ae,bt,Ee,ve,L.DEPTH_BUFFER_BIT,L.NEAREST);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(H!==0||E.isRenderTargetTexture||G.has(E)){let Ut=G.get(E),Zn=G.get(F);y.bindFramebuffer(L.READ_FRAMEBUFFER,D),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let At=0;At<Te;At++)Xs?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Ut.__webglTexture,H,rt+At):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Ut.__webglTexture,H),yt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Zn.__webglTexture,_e,Vt+At):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Zn.__webglTexture,_e),H!==0?L.blitFramebuffer(De,Qe,Ee,ve,Ae,bt,Ee,ve,L.COLOR_BUFFER_BIT,L.NEAREST):yt?L.copyTexSubImage3D(we,_e,Ae,bt,Vt+At,De,Qe,Ee,ve):L.copyTexSubImage2D(we,_e,Ae,bt,De,Qe,Ee,ve);y.bindFramebuffer(L.READ_FRAMEBUFFER,null),y.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else yt?E.isDataTexture||E.isData3DTexture?L.texSubImage3D(we,_e,Ae,bt,Vt,Ee,ve,Te,Et,ci,Pt.data):F.isCompressedArrayTexture?L.compressedTexSubImage3D(we,_e,Ae,bt,Vt,Ee,ve,Te,Et,Pt.data):L.texSubImage3D(we,_e,Ae,bt,Vt,Ee,ve,Te,Et,ci,Pt):E.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,_e,Ae,bt,Ee,ve,Et,ci,Pt.data):E.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,_e,Ae,bt,Pt.width,Pt.height,Et,Pt.data):L.texSubImage2D(L.TEXTURE_2D,_e,Ae,bt,Ee,ve,Et,ci,Pt);y.pixelStorei(L.UNPACK_ROW_LENGTH,di),y.pixelStorei(L.UNPACK_IMAGE_HEIGHT,ht),y.pixelStorei(L.UNPACK_SKIP_PIXELS,Bi),y.pixelStorei(L.UNPACK_SKIP_ROWS,un),y.pixelStorei(L.UNPACK_SKIP_IMAGES,Yn),_e===0&&F.generateMipmaps&&L.generateMipmap(we),y.unbindTexture()},this.initRenderTarget=function(E){G.get(E).__webglFramebuffer===void 0&&X.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?X.setTextureCube(E,0):E.isData3DTexture?X.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?X.setTexture2DArray(E,0):X.setTexture2D(E,0),y.unbindTexture()},this.resetState=function(){V=0,j=0,ne=null,y.reset(),ye.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return tn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=$e._getDrawingBufferColorSpace(e),t.unpackColorSpace=$e._getUnpackColorSpace()}};var cn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},tS=new vn(-1,1,1,-1,0,1),Xu=class extends ze{constructor(){super(),this.setAttribute("position",new Ie([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ie([0,2,0,0,2,0],2))}},iS=new Xu,Wr=class{constructor(e){this._mesh=new ke(iS,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,tS)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var Ws=class extends cn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof Nt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Oi.clone(e.uniforms),this.material=new Nt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new Wr(this.material)}render(e,t,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var zl=class extends Ws{constructor(e){super({uniforms:{tDiffuse:{value:null},tDepth:{value:null},inverseProjection:{value:e.projectionMatrixInverse},projection:{value:e.projectionMatrix},resolution:{value:new ie(1,1)},strength:{value:.82}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`
 varying vec2 vUv;uniform sampler2D tDiffuse;uniform sampler2D tDepth;uniform mat4 inverseProjection;uniform mat4 projection;uniform vec2 resolution;uniform float strength;
 vec3 pointAt(vec2 uv){float depth=texture2D(tDepth,uv).x;vec4 p=inverseProjection*vec4(uv*2.-1.,depth*2.-1.,1.);return p.xyz/p.w;}
 void main(){vec4 color=texture2D(tDiffuse,vUv);float depth=texture2D(tDepth,vUv).x;vec3 p=pointAt(vUv);vec3 normal=normalize(cross(dFdx(p),dFdy(p)));float occlusion=0.;
 if(depth<.99999){vec2 radius=clamp(vec2(projection[0][0],projection[1][1])*.62/max(-p.z,.5),vec2(2.)/resolution,vec2(.045));
 for(int i=0;i<12;i++){float a=float(i)*2.399963;float ring=sqrt((float(i)+.5)/12.);vec2 coord=vUv+vec2(cos(a),sin(a))*radius*ring;if(any(lessThan(coord,vec2(0.)))||any(greaterThan(coord,vec2(1.))))continue;vec3 delta=pointAt(coord)-p;float distanceToPoint=length(delta);float cosine=max(dot(normal,delta)/max(distanceToPoint,.001)-.12,0.);occlusion+=cosine*(1.-smoothstep(.12,1.25,distanceToPoint))*smoothstep(.012,.06,distanceToPoint);}
 }
 color.rgb*=1.-strength*clamp(occlusion/5.,0.,.65);gl_FragColor=color;
 }`}),this.camera=e}setSize(e,t){this.uniforms.resolution.value.set(e,t)}render(e,t,i,...n){this.uniforms.tDepth.value=i.depthTexture,super.render(e,t,i,...n)}},Hl=class extends Ws{constructor(){super({uniforms:{tDiffuse:{value:null},resolution:{value:new ie(1,1)}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec2 vUv;uniform sampler2D tDiffuse;uniform vec2 resolution;
 void main(){vec4 source=texture2D(tDiffuse,vUv);vec3 glow=vec3(0.);for(int i=0;i<12;i++){float a=float(i)*2.399963;float radius=2.+float(i)*.8;vec3 c=texture2D(tDiffuse,vUv+vec2(cos(a),sin(a))*radius/resolution).rgb;glow+=max(c-vec3(1.15),vec3(0.));}vec3 color=source.rgb+glow*.018;float luminance=dot(color,vec3(.2126,.7152,.0722));color=mix(vec3(luminance),color,1.045);vec2 d=vUv-.5;color*=1.-.14*dot(d,d);gl_FragColor=vec4(color,source.a);}`})}setSize(e,t){this.uniforms.resolution.value.set(e,t)}};var fo=Object.freeze({noon:Object.freeze({time:.25,dusk:0,campNight:0}),"late-afternoon":Object.freeze({time:.45,dusk:0,campNight:0}),dusk:Object.freeze({time:.65,dusk:1,campNight:0}),night:Object.freeze({time:.9,dusk:1,campNight:.85})}),Gl="late-afternoon",Rt=Object.freeze({batchFreqX:1.25,batchFreqZ:.85,batchAmpX:.055,batchAmpZ:.035,meadowFreqX:1.3,meadowFreqZ:.8,meadowAmpX:.075,meadowAmpZ:.035,defaultStrength:1,minStrength:0,maxStrength:3}),Ku=Object.freeze({default:1,stage:1.12,records:1.15,camp:.72,pier:.82,garden:.9,lake:.8,kick:1,maker:1,ai:1,aid:1,swap:1,news:1,dog:1,poster:1}),Ju=Object.freeze({clouds:1,minClouds:0,maxClouds:2});function po(s,e,t){let i=Number(s);return Number.isFinite(i)?Math.min(t,Math.max(e,i)):e}function nS(s){let e=po(s,0,1);return e<=.5?{time:e,dusk:0,campNight:0}:e<=.7?{time:e,dusk:(e-.5)/.2,campNight:0}:{time:e,dusk:1,campNight:(e-.7)/.3}}function sS(s){if(typeof s=="string"){let e=s.trim().toLowerCase().replace(/\s+/g,"-"),t=fo[e];if(!t)throw new Error(`Unknown time preset "${s}". Try: ${Object.keys(fo).join(", ")}`);return{...t,preset:e}}if(typeof s=="number"||typeof s=="string"&&s!==""&&Number.isFinite(Number(s)))return{...nS(Number(s)),preset:null};throw new Error("setTime expects a number 0\u20131 or a named preset (noon, late-afternoon, dusk, night)")}var Yu=class{constructor(e){this.atmosphere=e,this.live=!0}get strength(){return this.atmosphere.windStrength}setStrength(e){let t=po(e,Rt.minStrength,Rt.maxStrength);this.atmosphere.windStrength=t;let i=this.atmosphere.engine;return i?.windStrength&&(i.windStrength.value=t),t}batchShaderTerms(e){let t=Number(e)||0;return{freqX:Rt.batchFreqX,freqZ:Rt.batchFreqZ,ampX:(t*Rt.batchAmpX).toFixed(4),ampZ:(t*Rt.batchAmpZ).toFixed(4)}}meadowShaderTerms(){return{freqX:Rt.meadowFreqX,freqZ:Rt.meadowFreqZ,ampX:Rt.meadowAmpX.toFixed(4),ampZ:Rt.meadowAmpZ.toFixed(4)}}},Zu=class{constructor(e){this.atmosphere=e,this.live=!0}setTime(e,{snap:t=!0}={}){let i=sS(e),n=this.atmosphere;n.time=i.time,n.preset=i.preset,n.targetDusk=i.dusk,n.targetCampNight=i.campNight,n.hooks.setTargetDusk?.(i.dusk);let a=n.engine;return a&&!n.lakeOwnsNight()?(a.campNight=i.campNight,t&&(a.dusk=i.dusk)):a&&t&&!n.lakeOwnsNight()&&(a.dusk=i.dusk),n.snapshot()}syncFromHostDusk(e){let t=po(e,0,1);this.atmosphere.targetDusk=t,t>=.99&&this.atmosphere.preset!=="night"&&(this.atmosphere.preset="dusk"),t<=.01&&this.atmosphere.preset!=="noon"&&(this.atmosphere.preset="late-afternoon")}},$u=class{constructor(e){this.atmosphere=e,this.live=!0,this.lastDistrict="default",this.lastGain=1}districtForPosition(e,t){if(t&&Ku[t]!=null)return t;if(!e||e.length<3)return"default";let[i,,n]=e;return Math.hypot(i+51,n+16)<18?"camp":i>40&&n>-25&&n<20?"garden":Math.hypot(i-23,n+60)<22?"pier":n<-70?"lake":Math.hypot(i,n+30)<14?"stage":Math.hypot(i-11,n-26)<8?"records":"default"}districtMultiplier(e){let t=e&&Ku[e]!=null?e:"default";return Ku[t]}musicBedGain(e,{modalId:t,baseVolume:i=.65}={}){let n=this.districtForPosition(e,null);this.lastDistrict=t==="records"?"records":n;let r=Math.hypot(e?.[0]??0,(e?.[2]??0)+30);if(t==="records")return this.lastGain=.8,this.lastGain;let a=.38+.5*Math.max(0,1-r/65),o=this.districtMultiplier(this.lastDistrict),c=a*(.85+.15*o);return this.lastGain=po(c,0,1),this.lastGain}},Qu=class{constructor(e){this.atmosphere=e,this.live=!1,this.clouds=Ju.clouds}setWeather(e={}){let t=e.clouds!=null?po(e.clouds,Ju.minClouds,Ju.maxClouds):this.clouds;return this.clouds=t,this.apply(),{clouds:this.clouds,stub:!0}}apply(){let t=this.atmosphere.engine?.cloudSky?.material?.uniforms?.cloudIntensity;t&&(t.value=this.clouds)}},ed=class{constructor(e,t={}){this.engine=e,this.hooks=t,this.time=fo[Gl].time,this.preset=Gl,this.targetDusk=0,this.targetCampNight=0,this.windStrength=Rt.defaultStrength,this.wind=new Yu(this),this.timeOfDay=new Zu(this),this.ambientAudio=new $u(this),this.weather=new Qu(this),e&&(e.windStrength??={value:Rt.defaultStrength},e.windStrength.value=this.windStrength,e.atmosphere=this)}bindHost(e={}){return Object.assign(this.hooks,e),this}lakeOwnsNight(){return!!this.engine?.play?.adventure?.active}setTime(e,t){return this.timeOfDay.setTime(e,t)}setWind(e){return this.wind.setStrength(e)}setWeather(e){return this.weather.setWeather(e)}getTargetDusk(){return this.hooks.getTargetDusk?.()??this.targetDusk}snapshot(){let e=this.engine;return{time:this.time,preset:this.preset,dusk:e?.dusk??this.targetDusk,targetDusk:this.getTargetDusk(),campNight:e?.campNight??this.targetCampNight,wind:this.windStrength,weather:{clouds:this.weather.clouds},ambient:{district:this.ambientAudio.lastDistrict,gain:this.ambientAudio.lastGain},systems:{wind:this.wind.live?"live":"stub",timeOfDay:this.timeOfDay.live?"live":"stub",ambientAudio:this.ambientAudio.live?"live":"stub",weather:this.weather.live?"live":"stub"}}}tick(e,t={}){if(this.engine?.windStrength&&(this.engine.windStrength.value=this.windStrength),!this.lakeOwnsNight()&&this.targetCampNight!==(this.engine?.campNight??0)){let r=this.engine?.campNight??0,a=r+(this.targetCampNight-r)*Math.min((e||0)*1.3,1);this.engine&&(this.engine.campNight=a)}let i=t.position??this.hooks.getPosition?.(),n=t.modalId??this.hooks.getModalId?.();if(i&&this.hooks.applyMusicBedGain){let r=this.ambientAudio.musicBedGain(i,{modalId:n});this.hooks.applyMusicBedGain(r)}return this.weather.apply(),this.snapshot()}};function td(s,e){return new ed(s,e)}var Pm=`
float jamHash(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float jamNoise(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(jamHash(i),jamHash(i+vec2(1,0)),f.x),mix(jamHash(i+vec2(0,1)),jamHash(i+vec2(1,1)),f.x),f.y);}
`;function qr(s,e,t,i=null,n=null){let r=s.onBeforeCompile;s.onBeforeCompile=o=>{r.call(s,o),o.uniforms.jamTime=t,i&&(o.uniforms.jamAlbedo={value:i}),n&&(o.uniforms.jamPaths={value:n.map(([l,h])=>new ct(...l,...h))},o.uniforms.jamWidths={value:n.map(l=>l[2]/2)}),o.vertexShader=`varying vec3 vJamWorld; varying vec2 vJamUV;
`+o.vertexShader,o.vertexShader=o.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec4 jamWorld=vec4(transformed,1.);
#ifdef USE_INSTANCING
jamWorld=instanceMatrix*jamWorld;
#endif
vJamWorld=(modelMatrix*jamWorld).xyz;vJamUV=uv;`),o.fragmentShader=(i?`uniform sampler2D jamAlbedo;
`:"")+`varying vec3 vJamWorld; varying vec2 vJamUV;
`+Pm+o.fragmentShader,n&&(o.fragmentShader=`uniform vec4 jamPaths[${n.length}]; uniform float jamWidths[${n.length}];
`+o.fragmentShader);let c="";e==="grass"&&(c="float broad=jamNoise(vJamWorld.xz*.16);diffuseColor.rgb*=mix(vec3(.86,.96,.78),vec3(1.17,1.13,.91),broad);"),e==="grass"&&i&&(c+="vec3 pigment=texture2D(jamAlbedo,vJamWorld.xz*.24).rgb;vec3 pigment2=texture2D(jamAlbedo,mat2(.8,-.6,.6,.8)*vJamWorld.xz*.11+vec2(.17,.37)).rgb;diffuseColor.rgb=mix(diffuseColor.rgb,mix(pigment,pigment2,.35)*vec3(.58,.73,.57),.38);"),e==="grass"&&n&&(c+=`
float pathDistance=1000.;float lateral=0.;
for(int i=0;i<${n.length};i++){vec2 a=jamPaths[i].xy,b=jamPaths[i].zw,ab=b-a;float along=clamp(dot(vJamWorld.xz-a,ab)/dot(ab,ab),0.,1.);float d=length(vJamWorld.xz-a-ab*along)-jamWidths[i];if(d<pathDistance){pathDistance=d;lateral=abs(dot(vJamWorld.xz-a,normalize(vec2(ab.y,-ab.x))));}}
float grain=jamNoise(vJamWorld.xz*31.);float soil=jamNoise(vJamWorld.xz*1.7);float edgeNoise=(jamNoise(vJamWorld.xz*4.)-.5)*.13;
float verge=1.-smoothstep(-.08,.85,pathDistance+edgeNoise);
float trail=1.-smoothstep(-.18,.17,pathDistance+edgeNoise);
float dry=jamNoise(vJamWorld.xz*.21+vec2(19.));
diffuseColor.rgb*=mix(vec3(.76,.88,.69),vec3(1.12,1.04,.77),dry);
float stageWear=1.-smoothstep(.55,1.15,length((vJamWorld.xz-vec2(0.,-25.))/vec2(8.5,5.5)));
float boothWear=max(1.-smoothstep(.6,1.2,length((vJamWorld.xz-vec2(0.,1.))/vec2(5.,3.))),max(1.-smoothstep(.55,1.2,length((vJamWorld.xz-vec2(-16.,3.))/vec2(4.,2.6))),1.-smoothstep(.55,1.2,length((vJamWorld.xz-vec2(16.,3.))/vec2(4.,2.6)))));
float wear=max(stageWear,boothWear)*(.3+soil*.4);
vec3 earth=vec3(.24,.16,.083)*mix(.89,1.1,soil)*mix(.97,1.03,grain);
float tracks=exp(-pow((lateral-.63)*10.,2.))*.035;
diffuseColor.rgb=mix(diffuseColor.rgb,vec3(.30,.32,.14),max(verge*.46,wear));
diffuseColor.rgb=mix(diffuseColor.rgb,earth*(1.-tracks),max(trail,wear*.35));`),e==="path"&&(c="float grain=jamNoise(vJamWorld.xz*24.);float broad=jamNoise(vJamWorld.xz*.8);diffuseColor.rgb*=mix(.9,1.07,broad)*mix(.94,1.05,grain);float edge=abs(vJamUV.x-.5)*2.;if(edge>.84+jamNoise(vJamWorld.xz*7.)*.16)discard;"),e==="canvas"&&(c="float weave=sin(vJamWorld.x*460.+vJamWorld.z*460.)*sin(vJamWorld.y*460.);float wash=jamNoise(vJamWorld.xz*1.6+vJamWorld.y);diffuseColor.rgb*=.94+.055*wash+.015*weave;"),e==="mountain"&&(c="float forest=jamNoise(vJamWorld.xz*.19+vJamWorld.y*.33);float folds=jamNoise(vJamWorld.xz*.045+vJamWorld.y*.12);diffuseColor.rgb*=mix(.79,1.08,folds)*mix(.84,1.07,forest);"),e==="cloth"&&(c="float fibre=sin(vJamWorld.y*280.)*sin((vJamWorld.x+vJamWorld.z)*280.);diffuseColor.rgb*=.985+.015*fibre;"),e==="wood"&&(c="float grain=jamNoise(vec2((vJamWorld.x+vJamWorld.z)*34.,vJamWorld.y*.8));diffuseColor.rgb*=mix(.73,1.11,grain);"),o.fragmentShader=o.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
`+c)};let a=s.customProgramCacheKey();s.customProgramCacheKey=()=>a+"|finish-"+e+(i?"|art-v2":"")+(n?"|routes-v4-"+n.length:""),s.needsUpdate=!0}function Im(s,e,t){let i=new ze;i.setAttribute("position",new Ie([-.026,0,0,.026,0,0,-.015,.55,.035,.015,.55,.035,.012,1,.12],3)),i.setAttribute("uv",new Ie([0,0,1,0,0,.55,1,.55,.5,1],2)),i.setIndex([0,1,2,1,3,2,2,3,4]),i.computeVertexNormals();let n=2049,r=()=>(n=Math.imul(n,1664525)+1013904223>>>0,n/4294967296),a=[];for(let u=0;u<8e4;u++){let d=r()*116-58,f=r()*84-47;if(e(d,f)||t(d,f)||Math.abs(d)<10&&f<-20&&f>-32)continue;let g=.5+.5*Math.sin(d*.55+Math.sin(f*.31)*2);r()>.35+g*.65||a.push([d,f,r(),r()])}let o=new xt({color:16777215,roughness:.96,side:ot});s.windStrength??={value:Rt.defaultStrength},o.onBeforeCompile=u=>{u.uniforms.jamTime=s.time,u.uniforms.windStrength=s.windStrength,u.vertexShader=`uniform float jamTime;uniform float windStrength;varying float vBladeHeight;
`+u.vertexShader,u.vertexShader=u.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
 vBladeHeight=uv.y;vec3 origin=instanceMatrix[3].xyz;
 transformed.x+=sin(jamTime*${Rt.meadowFreqX}+origin.x*.6+origin.z*.45)*uv.y*uv.y*${Rt.meadowAmpX}*windStrength;
 transformed.z+=sin(jamTime*${Rt.meadowFreqZ}+origin.z*.7)*uv.y*uv.y*${Rt.meadowAmpZ}*windStrength;`),u.fragmentShader=`varying float vBladeHeight;
`+u.fragmentShader,u.fragmentShader=u.fragmentShader.replace("#include <color_fragment>",`#include <color_fragment>
diffuseColor.rgb*=mix(vec3(.72,.83,.5),vec3(1.08,1.07,.79),vBladeHeight);`)},o.customProgramCacheKey=()=>"jam-meadow-v3";let c=new Kt(i,o,a.length),l=new dt,h=new ge;for(let u=0;u<a.length;u++){let[d,f,g,x]=a[u];l.position.set(d,-.016,f),l.rotation.y=g*Math.PI*2,l.scale.set(.65+x*.55,.07+g*.14,.65+x*.55),l.updateMatrix(),c.setMatrixAt(u,l.matrix),h.setHSL(.2+x*.045,.28+g*.12,.31+g*.1),c.setColorAt(u,h)}return c.instanceMatrix.needsUpdate=!0,c.instanceColor.needsUpdate=!0,c.receiveShadow=!0,c.castShadow=!1,c.computeBoundingSphere(),c.name="Wind-swept meadow",s.scene.add(c),s.meadow=c,s.low&&(c.count=Math.floor(a.length*.25)),c}function rS(s,e){let t=new Ht(1,1);t.rotateX(-Math.PI/2);let i=new Nt({transparent:!0,depthWrite:!1,uniforms:{},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"varying vec2 vUv;void main(){vec2 q=abs(vUv-.5)*2.;float shade=pow(max(0.,1.-pow(q.x,2.)),2.)*pow(max(0.,1.-pow(q.y,2.)),2.);gl_FragColor=vec4(.10,.16,.085,shade*.24);}"}),n=[];for(let[r,a]of e.instances){if(/tree|grass|sky|record_|jar_|bottle|kickball|backpack/.test(r))continue;a.updateWorldMatrix(!0,!0);let o=new si().setFromObject(a),c=o.getSize(new R);if(o.min.y>.4||c.x<.1)continue;let l=new ke(t,i);l.name=r+"_contact",l.position.set(a.position.x,.026,a.position.z);let h=r.startsWith("tent");l.scale.set(h?c.x*1.12:Math.max(.55,c.x*1.25),1,h?c.z*1.08:Math.max(.5,c.z*1.3)),s.scene.add(l),n.push({mesh:l,root:a})}s.contactShadows=n}function Dm(s,e){let t=new Set;e.group.traverse(i=>{if(i.isMesh)for(let n of Array.isArray(i.material)?i.material:[i.material]){if(t.has(n))continue;t.add(n);let r=n.name;/canvas|denim/.test(r)&&(n.roughness=.91,s.surfaceDetail&&(n.bumpMap=s.surfaceDetail(6),n.bumpScale=.007),qr(n,"canvas",s.time)),/wood|bark/.test(r)&&(n.roughness=.84,s.surfaceDetail&&(n.bumpMap=s.surfaceDetail(5),n.bumpScale=.012),qr(n,"wood",s.time)),/metal_pole/.test(r)&&(n.metalness=.68,n.roughness=.34),/vinyl_black/.test(r)&&(n.metalness=.16,n.roughness=.3),/skin/.test(r)&&(n.roughness=.82,n.envMapIntensity=.6),r==="painted_character_matte"&&(n.roughness=.92,qr(n,"cloth",s.time))}}),aS(s,e),rS(s,e)}function aS(s,e){let t=s.batches?.find(n=>n.nodes[0].tex?.id&&n.nodes[0].props[1]===4),i=s.geometries?.get("canopy");if(!(!t||!i))for(let[n,r]of e.instances){if(!/^kit_tree_(oak|birch)$/.test(n)||r.userData.refinedCanopy)continue;let a=n.endsWith("birch"),o=new Kt(i,t.mesh.material,70),c=new dt;o.name=n+"_leaf_clusters",o.castShadow=!0,o.receiveShadow=!0,o.customDepthMaterial=t.mesh.customDepthMaterial;for(let l=0;l<7;l++)for(let h=0;h<10;h++){let u=l*2.4,d=h*2.399+l*.7,f=.35+h%3*.2;c.position.set(Math.sin(u)*(a?.6:1.2)+Math.cos(d)*f,3.4+l%3*.75+Math.sin(h*1.7)*.5,-Math.cos(u)*.9+Math.sin(d)*f),c.rotation.set(Math.sin(h*2.3)*.65,d,Math.cos(h)*.4),c.scale.set(a?1.5:1.9,a?1.9:1.8,1),c.updateMatrix(),o.setMatrixAt(l*10+h,c.matrix),o.setColorAt(l*10+h,new ge(h%3?"#c4d5b2":"#e0ddb4"))}r.traverse(l=>{l.isMesh&&/^(foliage_card|leaf_light)$/.test(l.material?.name)&&(l.visible=!1)}),o.instanceMatrix.needsUpdate=!0,o.instanceColor.needsUpdate=!0,o.computeBoundingSphere(),r.add(o),r.userData.refinedCanopy=!0}}function Lm(s){let e=new Nt({side:Yt,depthWrite:!1,uniforms:{jamTime:s.time,dusk:{value:0},cloudIntensity:{value:1},sunDirection:{value:new R(-.55,.82,-.48).normalize()},zenith:{value:new ge("#5c9fcd")},horizon:{value:new ge("#b6d4e3")}},vertexShader:"varying vec3 vSky;void main(){vSky=(modelMatrix*vec4(position,1.)).xyz;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 vSky;uniform float jamTime;uniform float dusk;uniform float cloudIntensity;uniform vec3 sunDirection;uniform vec3 zenith;uniform vec3 horizon;
${Pm}
float fbm(vec2 p){return jamNoise(p)*.53+jamNoise(p*2.03)*.27+jamNoise(p*4.07)*.13+jamNoise(p*8.11)*.07;}
void main(){vec3 direction=normalize(vSky-cameraPosition);float elevation=max(direction.y,0.);vec3 top=mix(zenith,vec3(.23,.30,.42),dusk);vec3 edge=mix(horizon,vec3(.87,.48,.28),dusk);vec3 sky=mix(edge,top,smoothstep(0.,.68,elevation));
vec2 plane=direction.xz/max(.13,direction.y)*1.3+vec2(jamTime*.002,0.);float cloud=fbm(plane);float cover=smoothstep(.54,.69,cloud)*smoothstep(.06,.23,elevation)*cloudIntensity;float cloudShade=fbm(plane+vec2(.10,.18));vec3 cloudColor=mix(vec3(.63,.71,.74),vec3(1.,.96,.84),cloudShade);cloudColor=mix(cloudColor,vec3(.96,.64,.40),dusk*.5);sky=mix(sky,cloudColor,cover*.9);float sun=pow(max(dot(direction,normalize(sunDirection)),0.),160.);sky+=vec3(1.,.79,.45)*sun*.5;gl_FragColor=vec4(sky,1.);
#include <tonemapping_fragment>
#include <colorspace_fragment>
}`}),t=new ke(new Jt(700,32,16),e);t.name="Festival cloud sky",t.frustumCulled=!1,s.scene.add(t),s.cloudSky=t,s.sky.visible=!1}var oS=[{x:-5,z:-4,hx:2.1,hz:2.2},{x:2,z:-2,r:1.05},{x:-1,z:1,r:1.12},{x:-3,z:2,hx:1.3,hz:.32},{x:2,z:2,hx:1.3,hz:.32},...[-8,-2].flatMap(s=>[-7.01,-.99].map(e=>({x:s,z:e,r:.14})))],mo={x:-5,z:-.95};function id(s,e,t=.3){return s*s+(e+2)**2>(11.6-t)**2?!0:oS.some(i=>i.r!==void 0?Math.hypot(s-i.x,e-i.z)<i.r+t:Math.hypot(Math.max(0,Math.abs(s-i.x)-i.hx),Math.max(0,Math.abs(e-i.z)-i.hz))<t)}function Nm(s,e,t){let i=Math.max(1,Math.ceil(Math.hypot(e,t)/.08));for(let n=0;n<i;n++)id(s.x+e/i,s.z)||(s.x+=e/i),id(s.x,s.z+t/i)||(s.z+=t/i);return s}function Fm(s){let e=new ze;e.setAttribute("position",new Ie([-.08,0,0,.08,0,0,.03,.32,.035,0,0,-.08,0,0,.08,-.025,.27,.02],3)),e.computeVertexNormals();let t=new xt({color:"#72935c",roughness:1,side:ot}),i=[],n=2614,r=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296;for(let l=0;l<4200;l++){let h=(r()-.5)*23,u=(r()-.5)*23-2;id(h,u,.55)||Math.abs(h)<.9&&u>-.2||Math.abs(h+5)<.85&&u>-.95&&u<4||i.push([h,u,.35+r()*.7,r()*Math.PI*2,r()])}let a=new Kt(e,t,i.length),o=new dt,c=new ge;return i.forEach(([l,h,u,d,f],g)=>{o.position.set(l,.46,h),o.scale.setScalar(u),o.rotation.y=d,o.updateMatrix(),a.setMatrixAt(g,o.matrix),a.setColorAt(g,c.setHSL(.23+f*.04,.22+f*.12,.25+f*.14))}),a.receiveShadow=!0,a.name="Cove grass clumps",a.computeBoundingSphere(),s.add(a),a}function Ki(s){let e=new Map,t=new Map,i=s.clone();return km(s,i,function(n,r){e.set(r,n),t.set(n,r)}),i.traverse(function(n){if(!n.isSkinnedMesh)return;let r=n,a=e.get(n),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return t.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function km(s,e,t){t(s,e);for(let i=0;i<s.children.length;i++)km(s.children[i],e.children[i],t)}function nd(s,e=!1){let t=s[0].index!==null,i=new Set(Object.keys(s[0].attributes)),n=new Set(Object.keys(s[0].morphAttributes)),r={},a={},o=s[0].morphTargetsRelative,c=new ze,l=0;for(let h=0;h<s.length;++h){let u=s[h],d=0;if(t!==(u.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in u.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(u.attributes[f]),d++}if(d!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==u.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in u.morphAttributes){if(!n.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(u.morphAttributes[f])}if(e){let f;if(t)f=u.index.count;else if(u.attributes.position!==void 0)f=u.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;c.addGroup(l,f,h),l+=f}}if(t){let h=0,u=[];for(let d=0;d<s.length;++d){let f=s[d].index;for(let g=0;g<f.count;++g)u.push(f.getX(g)+h);h+=s[d].attributes.position.count}c.setIndex(u)}for(let h in r){let u=Om(r[h]);if(!u)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;c.setAttribute(h,u)}for(let h in a){let u=a[h][0].length;if(u!==0){c.morphAttributes=c.morphAttributes||{},c.morphAttributes[h]=[];for(let d=0;d<u;++d){let f=[];for(let x=0;x<a[h].length;++x)f.push(a[h][x][d]);let g=Om(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;c.morphAttributes[h].push(g)}}}return c}function Om(s){let e,t,i,n=-1,r=0;for(let l=0;l<s.length;++l){let h=s[l];if(e===void 0&&(e=h.array.constructor),e!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(t===void 0&&(t=h.itemSize),t!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(n===-1&&(n=h.gpuType),n!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*t}let a=new e(r),o=new Lt(a,t,i),c=0;for(let l=0;l<s.length;++l){let h=s[l];if(h.isInterleavedBufferAttribute){let u=c/t;for(let d=0,f=h.count;d<f;d++)for(let g=0;g<t;g++){let x=h.getComponent(d,g);o.setComponent(d+u,g,x)}}else a.set(h.array,c);c+=h.count*t}return n!==void 0&&(o.gpuType=n),o}function sd(s,e){if(e===Su)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Ur||e===oo){let t=s.getIndex();if(t===null){let r=[],a=s.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);s.setIndex(r),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}let i=t.count-2,n=[];if(e===Ur)for(let r=1;r<=i;r++)n.push(t.getX(0)),n.push(t.getX(r)),n.push(t.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(n.push(t.getX(r)),n.push(t.getX(r+1)),n.push(t.getX(r+2))):(n.push(t.getX(r+2)),n.push(t.getX(r+1)),n.push(t.getX(r)));return n.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),s.setIndex(n),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}var Vl=class extends xn{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new ud(t)}),this.register(function(t){return new dd(t)}),this.register(function(t){return new yd(t)}),this.register(function(t){return new Sd(t)}),this.register(function(t){return new Md(t)}),this.register(function(t){return new pd(t)}),this.register(function(t){return new md(t)}),this.register(function(t){return new gd(t)}),this.register(function(t){return new bd(t)}),this.register(function(t){return new hd(t)}),this.register(function(t){return new xd(t)}),this.register(function(t){return new fd(t)}),this.register(function(t){return new _d(t)}),this.register(function(t){return new vd(t)}),this.register(function(t){return new cd(t)}),this.register(function(t){return new Wl(t,it.EXT_MESHOPT_COMPRESSION)}),this.register(function(t){return new Wl(t,it.KHR_MESHOPT_COMPRESSION)}),this.register(function(t){return new wd(t)})}load(e,t,i,n){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Vn.extractUrlBase(e);a=Vn.resolveURL(l,this.path)}else a=Vn.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){n?n(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Ir(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){t(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,i,n){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Gm){try{a[it.KHR_BINARY_GLTF]=new Ed(e)}catch(u){n&&n(u);return}r=JSON.parse(a[it.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){n&&n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Dd(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case it.KHR_MATERIALS_UNLIT:a[u]=new ld;break;case it.KHR_DRACO_MESH_COMPRESSION:a[u]=new Td(r,this.dracoLoader);break;case it.KHR_TEXTURE_TRANSFORM:a[u]=new Ad;break;case it.KHR_MESH_QUANTIZATION:a[u]=new Rd;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,n)}parseAsync(e,t){let i=this;return new Promise(function(n,r){i.parse(e,t,n,r)})}};function cS(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}function Gt(s,e,t){let i=s.json.materials[e];return i.extensions&&i.extensions[t]?i.extensions[t]:null}var it={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},cd=class{constructor(e){this.parser=e,this.name=it.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,t=this.parser.json.nodes||[];for(let i=0,n=t.length;i<n;i++){let r=t[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let t=this.parser,i="light:"+e,n=t.cache.get(i);if(n)return n;let r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ge(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],pi);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new us(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new qi(h),l.distance=u;break;case"spot":l=new Wa(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),Sn(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),n=Promise.resolve(l),t.cache.add(i,n),n}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){let t=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(t.cache,o,c)})}},ld=class{constructor(){this.name=it.KHR_MATERIALS_UNLIT}getMaterialType(){return zt}extendParams(e,t,i){let n=[];e.color=new ge(1,1,1),e.opacity=1;let r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],pi),e.opacity=a[3]}r.baseColorTexture!==void 0&&n.push(i.assignTexture(e,"map",r.baseColorTexture,at))}return Promise.all(n)}},hd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(t.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},ud=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(i.clearcoatFactor!==void 0&&(t.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(n.push(this.parser.assignTexture(t,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(r,r)}return Promise.all(n)}},dd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);return i===null||(t.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},fd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.iridescenceFactor!==void 0&&(t.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(t.iridescenceIOR=i.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),i.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(n)}},pd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SHEEN}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];if(t.sheenColor=new ge(0,0,0),t.sheenRoughness=0,t.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;t.sheenColor.setRGB(r[0],r[1],r[2],pi)}return i.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenColorMap",i.sheenColorTexture,at)),i.sheenRoughnessTexture!==void 0&&n.push(this.parser.assignTexture(t,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(n)}},md=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.transmissionFactor!==void 0&&(t.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&n.push(this.parser.assignTexture(t,"transmissionMap",i.transmissionTexture)),Promise.all(n)}},gd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_VOLUME}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&n.push(this.parser.assignTexture(t,"thicknessMap",i.thicknessTexture)),t.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return t.attenuationColor=new ge().setRGB(r[0],r[1],r[2],pi),Promise.all(n)}},bd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_IOR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);return i===null||(t.ior=i.ior!==void 0?i.ior:1.5,t.ior===0&&(t.ior=1e3)),Promise.resolve()}},xd=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];t.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return t.specularColor=new ge().setRGB(r[0],r[1],r[2],pi),i.specularColorTexture!==void 0&&n.push(this.parser.assignTexture(t,"specularColorMap",i.specularColorTexture,at)),Promise.all(n)}},vd=class{constructor(e){this.parser=e,this.name=it.EXT_MATERIALS_BUMP}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return t.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&n.push(this.parser.assignTexture(t,"bumpMap",i.bumpTexture)),Promise.all(n)}},_d=class{constructor(e){this.parser=e,this.name=it.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Gt(this.parser,e,this.name)!==null?wi:null}extendMaterialParams(e,t){let i=Gt(this.parser,e,this.name);if(i===null)return Promise.resolve();let n=[];return i.anisotropyStrength!==void 0&&(t.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(t.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&n.push(this.parser.assignTexture(t,"anisotropyMap",i.anisotropyTexture)),Promise.all(n)}},yd=class{constructor(e){this.parser=e,this.name=it.KHR_TEXTURE_BASISU}loadTexture(e){let t=this.parser,i=t.json,n=i.textures[e];if(!n.extensions||!n.extensions[this.name])return null;let r=n.extensions[this.name],a=t.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,a)}},Sd=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_WEBP}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},Md=class{constructor(e){this.parser=e,this.name=it.EXT_TEXTURE_AVIF}loadTexture(e){let t=this.name,i=this.parser,n=i.json,r=n.textures[e];if(!r.extensions||!r.extensions[t])return null;let a=r.extensions[t],o=n.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},Wl=class{constructor(e,t){this.name=t,this.parser=e}loadBufferView(e){let t=this.parser.json,i=t.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let n=i.extensions[this.name],r=this.parser.getDependency("buffer",n.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=n.byteOffset||0,l=n.byteLength||0,h=n.count,u=n.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,n.mode,n.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,n.mode,n.filter),f})})}else return null}},wd=class{constructor(e){this.name=it.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let t=this.parser.json,i=t.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let n=t.meshes[i.mesh];for(let l of n.primitives)if(l.mode!==Ji.TRIANGLES&&l.mode!==Ji.TRIANGLE_STRIP&&l.mode!==Ji.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let x=new Pe,m=new R,p=new Je,v=new R(1,1,1),S=new Kt(g.geometry,g.material,d);for(let M=0;M<d;M++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,M),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,M),c.SCALE&&v.fromBufferAttribute(c.SCALE,M),S.setMatrixAt(M,x.compose(m,p,v));let b=null;for(let M in c)if(M==="_COLOR_0"){let w=c[M];S.instanceColor=new On(w.array,w.itemSize,w.normalized)}else if(M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"){if(b===null){let A=S.geometry;b=new ze,b.name=A.name;for(let _ in A.attributes)b.setAttribute(_,A.attributes[_]);for(let _ in A.morphAttributes)b.morphAttributes[_]=A.morphAttributes[_];A.index!==null&&b.setIndex(A.index),b.morphTargetsRelative=A.morphTargetsRelative;for(let _ of A.groups)b.addGroup(_.start,_.count,_.materialIndex);A.boundingBox!==null&&(b.boundingBox=A.boundingBox.clone()),A.boundingSphere!==null&&(b.boundingSphere=A.boundingSphere.clone()),b.drawRange.start=A.drawRange.start,b.drawRange.count=A.drawRange.count,b.userData=Object.assign({},A.userData),S.geometry=b}let w=c[M];b.setAttribute(M,new On(w.array,w.itemSize,w.normalized))}dt.prototype.copy.call(S,g),this.parser.assignFinalMaterial(S),f.push(S)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Gm="glTF",go=12,Um={JSON:1313821514,BIN:5130562},Ed=class{constructor(e){this.name=it.KHR_BINARY_GLTF,this.content=null,this.body=null;let t=new DataView(e,0,go),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Gm)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let n=this.header.length-go,r=new DataView(e,go),a=0;for(;a<n;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Um.JSON){let l=new Uint8Array(e,go+a,o);this.content=i.decode(l)}else if(c===Um.BIN){let l=go+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Td=class{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=it.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){let i=this.json,n=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=Pd[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=Pd[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=jr[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){n.decodeDracoFile(h,function(f){for(let g in f.attributes){let x=f.attributes[g],m=c[g];m!==void 0&&(x.normalized=m)}u(f)},o,l,pi,d)})})}},Ad=class{constructor(){this.name=it.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){if((t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0)return e;if(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),t.rotation!==void 0){let i=Math.cos(e.rotation),n=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*n,e.offset.x,-e.repeat.x*n,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Rd=class{constructor(){this.name=it.KHR_MESH_QUANTIZATION}},ql=class extends bn{constructor(e,t,i,n){super(e,t,i,n)}copySampleValue_(e){let t=this.resultBuffer,i=this.sampleValues,n=this.valueSize,r=e*n*3+n;for(let a=0;a!==n;a++)t[a]=i[r+a];return t}interpolate_(e,t,i,n){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=n-t,u=(i-t)/h,d=u*u,f=d*u,g=e*l,x=g-l,m=-2*f+3*d,p=f-d,v=1-m,S=p-d+u;for(let b=0;b!==o;b++){let M=a[x+b+o],w=a[x+b+c]*h,A=a[g+b+o],_=a[g+b]*h;r[b]=v*M+S*w+m*A+p*_}return r}},lS=new Je,Cd=class extends ql{interpolate_(e,t,i,n){let r=super.interpolate_(e,t,i,n);return lS.fromArray(r).normalize().toArray(r),r}},Ji={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},jr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Bm={9728:Bt,9729:It,9984:Wc,9985:Fr,9986:Hs,9987:Ti},zm={33071:Gi,33648:gr,10497:yi},rd={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Pd={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ms={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},hS={CUBICSPLINE:void 0,LINEAR:Cs,STEP:Rs},ad={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function uS(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new xt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),s.DefaultMaterial}function qs(s,e,t){for(let i in t.extensions)s[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=t.extensions[i])}function Sn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function dS(s,e,t){let i=!1,n=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(n=!0),u.COLOR_0!==void 0&&(r=!0),i&&n&&r)break}if(!i&&!n&&!r)return Promise.resolve(s);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;a.push(d)}if(n){let d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(s.morphAttributes.position=h),n&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function fS(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,i=e.weights.length;t<i;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){let t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let i=0,n=t.length;i<n;i++)s.morphTargetDictionary[t[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function pS(s){let e,t=s.extensions&&s.extensions[it.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+od(t.attributes):e=s.indices+":"+od(s.attributes)+":"+s.mode,s.targets!==void 0)for(let i=0,n=s.targets.length;i<n;i++)e+=":"+od(s.targets[i]);return e}function od(s){let e="",t=Object.keys(s).sort();for(let i=0,n=t.length;i<n;i++)e+=t[i]+":"+s[t[i]]+";";return e}function Id(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function mS(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}var gS=new Pe,Dd=class{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new cS,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,n=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);n=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&n<17||r&&a<98?this.textureLoader=new an(this.options.manager):this.textureLoader=new qa(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Ir(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){let i=this,n=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][n.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:n.asset,parser:i,userData:{}};return qs(r,o,n),Sn(o,n),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(t)}_markDefs(){let e=this.json.nodes||[],t=this.json.skins||[],i=this.json.meshes||[];for(let n=0,r=t.length;n<r;n++){let a=t[n].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let n=0,r=e.length;n<r;n++){let a=e[n];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,i){if(e.refs[t]<=1)return i;let n=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,n),n.name+="_instance_"+e.uses[t]++,n}_invokeOne(e){let t=Object.values(this.plugins);t.push(this);for(let i=0;i<t.length;i++){let n=e(t[i]);if(n)return n}return null}_invokeAll(e){let t=Object.values(this.plugins);t.unshift(this);let i=[];for(let n=0;n<t.length;n++){let r=e(t[n]);r&&i.push(r)}return i}getDependency(e,t){let i=e+":"+t,n=this.cache.get(i);if(!n){switch(e){case"scene":n=this.loadScene(t);break;case"node":n=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":n=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":n=this.loadAccessor(t);break;case"bufferView":n=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":n=this.loadBuffer(t);break;case"material":n=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":n=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":n=this.loadSkin(t);break;case"animation":n=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":n=this.loadCamera(t);break;default:if(n=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!n)throw new Error("Unknown type: "+e);break}this.cache.add(i,n)}return n}getDependencies(e){let t=this.cache.get(e);if(!t){let i=this,n=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(n.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,t)}return t}loadBuffer(e){let t=this.json.buffers[e],i=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[it.KHR_BINARY_GLTF].body);let n=this.options;return new Promise(function(r,a){i.load(Vn.resolveURL(t.uri,n.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){let t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(i){let n=t.byteLength||0,r=t.byteOffset||0;return i.slice(r,r+n)})}loadAccessor(e){let t=this,i=this.json,n=this.json.accessors[e];if(n.bufferView===void 0&&n.sparse===void 0){let a=rd[n.type],o=jr[n.componentType],c=n.normalized===!0,l=new o(n.count*a);return Promise.resolve(new Lt(l,a,c))}let r=[];return n.bufferView!==void 0?r.push(this.getDependency("bufferView",n.bufferView)):r.push(null),n.sparse!==void 0&&(r.push(this.getDependency("bufferView",n.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",n.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=rd[n.type],l=jr[n.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=n.byteOffset||0,f=n.bufferView!==void 0?i.bufferViews[n.bufferView].byteStride:void 0,g=n.normalized===!0,x,m;if(f&&f!==u){let p=Math.floor(d/f),v="InterleavedBuffer:"+n.bufferView+":"+n.componentType+":"+p+":"+n.count,S=t.cache.get(v);S||(x=new l(o,p*f,n.count*f/h),S=new Nn(x,f/h),t.cache.add(v,S)),m=new Wi(S,c,d%f/h,g)}else o===null?x=new l(n.count*c):x=new l(o,d,n.count*c),m=new Lt(x,c,g);if(n.sparse!==void 0){let p=rd.SCALAR,v=jr[n.sparse.indices.componentType],S=n.sparse.indices.byteOffset||0,b=n.sparse.values.byteOffset||0,M=new v(a[1],S,n.sparse.count*p),w=new l(a[2],b,n.sparse.count*c);o!==null&&(m=new Lt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,_=M.length;A<_;A++){let T=M[A];if(m.setX(T,w[A*c]),c>=2&&m.setY(T,w[A*c+1]),c>=3&&m.setZ(T,w[A*c+2]),c>=4&&m.setW(T,w[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let t=this.json,i=this.options,r=t.textures[e].source,a=t.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,t,i){let n=this,r=this.json,a=r.textures[e],o=r.images[t],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(t,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Bm[d.magFilter]||It,h.minFilter=Bm[d.minFilter]||Ti,h.wrapS=zm[d.wrapS]||yi,h.wrapT=zm[d.wrapT]||yi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==Bt&&h.minFilter!==It,n.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){let i=this,n=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=n.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1;if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let d=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(d),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");let h=Promise.resolve(c).then(function(u){return new Promise(function(d,f){let g=d;t.isImageBitmapLoader===!0&&(g=function(x){let m=new Xt(x);m.needsUpdate=!0,d(m)}),t.load(Vn.resolveURL(u,r.path),g,void 0,f)})}).then(function(u){return l===!0&&o.revokeObjectURL(c),Sn(u,a),u.userData.mimeType=a.mimeType||mS(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=h,h}assignTexture(e,t,i,n){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[it.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[it.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[it.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return n!==void 0&&(a.colorSpace=n),e[t]=a,a})}assignFinalMaterial(e){let t=e.geometry,i=e.material,n=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,a=t.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new mn,mi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Di,mi.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(n||r||a){let o="ClonedMaterial:"+i.uuid+":";n&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),n&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return xt}loadMaterial(e){let t=this,i=this.json,n=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[it.KHR_MATERIALS_UNLIT]){let u=n[it.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,t))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ge(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],pi),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(t.assignTexture(o,"map",u.baseColorTexture,at)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(t.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=ot);let h=r.alphaMode||ad.OPAQUE;if(h===ad.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===ad.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==zt&&(l.push(t.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==zt&&(l.push(t.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==zt){let u=r.emissiveFactor;o.emissive=new ge().setRGB(u[0],u[1],u[2],pi)}return r.emissiveTexture!==void 0&&a!==zt&&l.push(t.assignTexture(o,"emissiveMap",r.emissiveTexture,at)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),Sn(u,r),t.associations.set(u,{materials:e}),r.extensions&&qs(n,u,r),u})}createUniqueName(e){let t=St.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){let t=this,i=this.extensions,n=this.primitiveCache;function r(o){return i[it.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,t).then(function(c){return Hm(c,o,t)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=pS(l),u=n[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[it.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Hm(new ze,l,t),l.mode===Ji.TRIANGLE_STRIP?d=d.then(f=>sd(f,oo)):l.mode===Ji.TRIANGLE_FAN&&(d=d.then(f=>sd(f,Ur))),n[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let t=this,i=this.json,n=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?uS(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(t.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let x=h[f],m=a[f],p,v=l[f];if(m.mode===Ji.TRIANGLES||m.mode===Ji.TRIANGLE_STRIP||m.mode===Ji.TRIANGLE_FAN||m.mode===void 0){let S=r.isSkinnedMesh===!0,b=x.hasAttribute("skinIndex")&&x.hasAttribute("skinWeight");S&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=S&&b?new Fn(x,v):new ke(x,v),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Ji.LINES)p=new Ea(x,v);else if(m.mode===Ji.LINE_STRIP)p=new gi(x,v);else if(m.mode===Ji.LINE_LOOP)p=new Ta(x,v);else if(m.mode===Ji.POINTS)p=new Un(x,v);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&fS(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Sn(p,r),m.extensions&&qs(n,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&qs(n,u[0],r),u[0];let d=new Ue;r.extensions&&qs(n,d,r),t.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let t,i=this.json.cameras[e],n=i[i.type];if(!n){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?t=new Ft(pt.radToDeg(n.yfov),n.aspectRatio||1,n.znear||1,n.zfar||2e6):i.type==="orthographic"&&(t=new vn(-n.xmag,n.xmag,n.ymag,-n.ymag,n.znear,n.zfar)),i.name&&(t.name=this.createUniqueName(i.name)),Sn(t,i),Promise.resolve(t)}loadSkin(e){let t=this.json.skins[e],i=[];for(let n=0,r=t.joints.length;n<r;n++)i.push(this._loadNodeShallow(t.joints[n]));return t.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",t.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(n){let r=n.pop(),a=n,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new Pe;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new wa(o,c)})}loadAnimation(e){let t=this.json,i=this,n=t.animations[e],r=n.name?n.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=n.channels.length;u<d;u++){let f=n.channels[u],g=n.samplers[f.sampler],x=f.target,m=x.node,p=n.parameters!==void 0?n.parameters[g.input]:g.input,v=n.parameters!==void 0?n.parameters[g.output]:g.output;x.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",v)),l.push(g),h.push(x))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],x=u[3],m=u[4],p=[];for(let S=0,b=d.length;S<b;S++){let M=d[S],w=f[S],A=g[S],_=x[S],T=m[S];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();let P=i._createAnimationTracks(M,w,A,_,T);if(P)for(let I=0;I<P.length;I++)p.push(P[I])}let v=new Ns(r,void 0,p);return Sn(v,n),v})}createNodeMesh(e){let t=this.json,i=this,n=t.nodes[e];return n.mesh===void 0?null:i.getDependency("mesh",n.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,n.mesh,r);return n.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=n.weights.length;c<l;c++)o.morphTargetInfluences[c]=n.weights[c]}),a})}loadNode(e){let t=this.json,i=this,n=t.nodes[e],r=i._loadNodeShallow(e),a=[],o=n.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=n.skin===void 0?Promise.resolve(null):i.getDependency("skin",n.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,gS)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new R().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let t=this.json,i=this.extensions,n=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=t.nodes[e],a=r.name?n.createUniqueName(r.name):"",o=[],c=n._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(n.getDependency("camera",r.camera).then(function(l){return n._getNodeRef(n.cameraCache,r.camera,l)})),n._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Er:l.length>1?h=new Ue:l.length===1?h=l[0]:h=new dt,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),Sn(h,r),r.extensions&&qs(i,h,r),r.matrix!==void 0){let u=new Pe;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!n.associations.has(h))n.associations.set(h,{});else if(r.mesh!==void 0&&n.meshCache.refs[r.mesh]>1){let u=n.associations.get(h);n.associations.set(h,{...u})}return n.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let t=this.extensions,i=this.json.scenes[e],n=this,r=new Ue;i.name&&(r.name=n.createUniqueName(i.name)),Sn(r,i),i.extensions&&qs(t,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(n.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Ki(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of n.associations)(d instanceof mi||d instanceof Xt)&&u.set(d,f);return h.traverse(d=>{let f=n.associations.get(d);f!=null&&u.set(d,f)}),u};return n.associations=l(r),r})}_createAnimationTracks(e,t,i,n,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}ms[r.path]===ms.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(ms[r.path]){case ms.weights:h=zn;break;case ms.rotation:h=Hn;break;case ms.translation:case ms.scale:h=hs;break;default:i.itemSize===1?h=zn:h=hs;break}let u=n.interpolation!==void 0?hS[n.interpolation]:Cs,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let x=new h(c[f]+"."+ms[r.path],t.array,d,u);n.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(x),a.push(x)}return a}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){let i=Id(t.constructor),n=new Float32Array(t.length);for(let r=0,a=t.length;r<a;r++)n[r]=t[r]*i;t=n}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let n=this instanceof Hn?Cd:ql;return new n(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}};function bS(s,e,t){let i=e.attributes,n=new si;if(i.POSITION!==void 0){let o=t.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(n.set(new R(c[0],c[1],c[2]),new R(l[0],l[1],l[2])),o.normalized){let h=Id(jr[o.componentType]);n.min.multiplyScalar(h),n.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new R,c=new R;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=t.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let x=Id(jr[d.componentType]);c.multiplyScalar(x)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}n.expandByVector(o)}s.boundingBox=n;let a=new Si;n.getCenter(a.center),a.radius=n.min.distanceTo(n.max)/2,s.boundingSphere=a}function Hm(s,e,t){let i=e.attributes,n=[];function r(a,o){return t.getDependency("accessor",a).then(function(c){s.setAttribute(o,c)})}for(let a in i){let o=Pd[a]||a.toLowerCase();o in s.attributes||n.push(r(i[a],o))}if(e.indices!==void 0&&!s.index){let a=t.getDependency("accessor",e.indices).then(function(o){s.setIndex(o)});n.push(a)}return $e.workingColorSpace!==pi&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${$e.workingColorSpace}" not supported.`),Sn(s,e),bS(s,e,t),Promise.all(n).then(function(){return e.targets!==void 0?dS(s,e.targets,t):s})}var jl=(function(){var s="b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuixkbeeeddddillviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WboY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbrl79IV9Rbwq:VZkdbk:XYi5ud9:du8Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaicefhxcj;abad9Uc;WFbGcjdadca0EhmaialfgPar9Rgoadfhsavaoadz:jjjjbgzceVhHcbhOdndninaeaO9nmeaPax9RaD6mdamaeaO9RaOamfgoae6EgAcsfglc9WGhCabaOad2fhXaAcethQaxaDfhiaOaeaoaeao6E9RhLalcl4cifcd4hKazcj;cbfaAfhYcbh8AazcjdfhEaHh3incbh5dnawTmbaxa8Acd4fRbbh5kcbh8Eazcj;cbfhqinaih8Fdndndndna5a8Ecet4ciGgoc9:fPdebdkaPa8F9RaA6mrazcj;cbfa8EaA2fa8FaAz:jjjjb8Aa8FaAfhixdkazcj;cbfa8EaA2fcbaAz:kjjjb8Aa8FhixekaPa8F9RaK6mva8FaKfhidnaCTmbaPai9RcK6mbaocdtc:q:G:cjbfcj:G:cjbawEhaczhrcbhlinargoc9Wfghaqfhrdndndndndndnaaa8Fahco4fRbbalcoG4ciGcdtfydbPDbedvivvvlvkar9cb83bwar9cb83bbxlkarcbaiRbdai8Xbb9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbaqaofgrcGfcbaicdfa8J9c8N1:NfghRbbag9cjjjjjw:dg8J9qE86bbarcVfcbaha8J9c8M1:NfghRbbag9cjjjjjl:dg8J9qE86bbarc7fcbaha8J9c8L1:NfghRbbag9cjjjjjd:dg8J9qE86bbarctfcbaha8J9c8K1:NfghRbbag9cjjjjje:dg8J9qE86bbarc91fcbaha8J9c8J1:NfghRbbag9cjjjj;ab:dg8J9qE86bbarc4fcbaha8J9cg1:NfghRbbag9cjjjja:dg8J9qE86bbarc93fcbaha8J9ch1:NfghRbbag9cjjjjz:dgg9qE86bbarc94fcbahag9ca1:NfghRbbai8Xbe9c:c:qj:bw9:9c:q;c1:I1e:d9c:b:c:e1z9:gg9cjjjjjz:dg8J9qE86bbarc95fcbaha8J9c8N1:NfgiRbbag9cjjjjjw:dg8J9qE86bbarc96fcbaia8J9c8M1:NfgiRbbag9cjjjjjl:dg8J9qE86bbarc97fcbaia8J9c8L1:NfgiRbbag9cjjjjjd:dg8J9qE86bbarc98fcbaia8J9c8K1:NfgiRbbag9cjjjjje:dg8J9qE86bbarc99fcbaia8J9c8J1:NfgiRbbag9cjjjj;ab:dg8J9qE86bbarc9:fcbaia8J9cg1:NfgiRbbag9cjjjja:dg8J9qE86bbarcufcbaia8J9ch1:NfgiRbbag9cjjjjz:dgg9qE86bbaiag9ca1:NfhixikaraiRblaiRbbghco4g8Ka8KciSg8KE86bbaqaofgrcGfaiclfa8Kfg8KRbbahcl4ciGg8La8LciSg8LE86bbarcVfa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc7fa8Ka8Lfg8KRbbahciGghahciSghE86bbarctfa8Kahfg8KRbbaiRbeghco4g8La8LciSg8LE86bbarc91fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc4fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc93fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc94fa8Kahfg8KRbbaiRbdghco4g8La8LciSg8LE86bbarc95fa8Ka8Lfg8KRbbahcl4ciGg8La8LciSg8LE86bbarc96fa8Ka8Lfg8KRbbahcd4ciGg8La8LciSg8LE86bbarc97fa8Ka8Lfg8KRbbahciGghahciSghE86bbarc98fa8KahfghRbbaiRbigico4g8Ka8KciSg8KE86bbarc99faha8KfghRbbaicl4ciGg8Ka8KciSg8KE86bbarc9:faha8KfghRbbaicd4ciGg8Ka8KciSg8KE86bbarcufaha8KfgrRbbaiciGgiaiciSgiE86bbaraifhixdkaraiRbwaiRbbghcl4g8Ka8KcsSg8KE86bbaqaofgrcGfaicwfa8Kfg8KRbbahcsGghahcsSghE86bbarcVfa8KahfghRbbaiRbeg8Kcl4g8La8LcsSg8LE86bbarc7faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarctfaha8KfghRbbaiRbdg8Kcl4g8La8LcsSg8LE86bbarc91faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc4faha8KfghRbbaiRbig8Kcl4g8La8LcsSg8LE86bbarc93faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc94faha8KfghRbbaiRblg8Kcl4g8La8LcsSg8LE86bbarc95faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc96faha8KfghRbbaiRbvg8Kcl4g8La8LcsSg8LE86bbarc97faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc98faha8KfghRbbaiRbog8Kcl4g8La8LcsSg8LE86bbarc99faha8LfghRbba8KcsGg8Ka8KcsSg8KE86bbarc9:faha8KfghRbbaiRbrgicl4g8Ka8KcsSg8KE86bbarcufaha8KfgrRbbaicsGgiaicsSgiE86bbaraifhixekarai8Pbw83bwarai8Pbb83bbaiczfhikdnaoaC9pmbalcdfhlaoczfhraPai9RcL0mekkaoaC6moaimexokaCmva8FTmvkaqaAfhqa8Ecefg8Ecl9hmbkdndndndnawTmbasa8Acd4fRbbgociGPlbedrbkaATmdaza8Afh8Fazcj;cbfhhcbh8EaEhaina8FRbbhraahocbhlinaoahalfRbbgqce4cbaqceG9R7arfgr86bbaoadfhoaAalcefgl9hmbkaacefhaa8Fcefh8FahaAfhha8Ecefg8Ecl9hmbxikkaATmeaza8Afhaazcj;cbfhhcbhoceh8EaYh8FinaEaofhlaa8Vbbhrcbhoinala8FaofRbbcwtahaofRbbgqVc;:FiGce4cbaqceG9R7arfgr87bbaladfhlaLaocefgofmbka8FaQfh8FcdhoaacdfhaahaQfhha8EceGhlcbh8EalmbxdkkaATmbaocl4h8Eaza8AfRbbhqcwhoa3hlinalRbbaotaqVhqalcefhlaocwfgoca9hmbkcbhhaEh8FaYhainazcj;cbfahfRbbhrcwhoaahlinalRbbaotarVhralaAfhlaocwfgoca9hmbkara8E94aq7hqcbhoa8Fhlinalaqao486bbalcefhlaocwfgoca9hmbka8Fadfh8FaacefhaahcefghaA9hmbkkaEclfhEa3clfh3a8Aclfg8Aad6mbkaXazcjdfaAad2z:jjjjb8AazazcjdfaAcufad2fadz:jjjjb8AaAaOfhOaihxaimbkc9:hoxdkcbc99aPax9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaok:ysezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:kjjjb8Aav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk:4ioiue99dud99dud99dnaeTmbcbhiabhlindndnal8Uebgv:YgoJ:ji:1Salcof8UebgrciVgw:Y:vgDNJbbbZJbbb:;avcu9kEMgq:lJbbb9p9DTmbaq:Ohkxekcjjjj94hkkalclf8Uebhvalcdf8UebhxalarcefciGcetfak87ebdndnax:YgqaDNJbbbZJbbb:;axcu9kEMgm:lJbbb9p9DTmbam:Ohxxekcjjjj94hxkabaiarciGgkfcd7cetfax87ebdndnav:YgmaDNJbbbZJbbb:;avcu9kEMgP:lJbbb9p9DTmbaP:Ohvxekcjjjj94hvkalarcufciGcetfav87ebdndnawaw2:ZgPaPMaoaoN:taqaqN:tamamN:tgoJbbbbaoJbbbb9GE:raDNJbbbZMgD:lJbbb9p9DTmbaD:Ohrxekcjjjj94hrkalakcetfar87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk:Tvirud99eudndnadcl9hmbaeTmeindndnabRbbgiabcefgl8Sbbgvabcdfgo8Sbbgrf9R:YJbbuJabcifgwRbbgdce4adVgDcd4aDVgDcl4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax86bbdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao86bbdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai86bbdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad86bbabclfhbaecufgembxdkkaeTmbindndnab8Vebgiabcdfgl8Uebgvabclfgo8Uebgrf9R:YJbFu9habcofgw8Vebgdce4adVgDcd4aDVgDcl4aDVgDcw4aDVgD:Z:vgqNJbbbZMgk:lJbbb9p9DTmbak:Ohxxekcjjjj94hxkaoax87ebdndnaraif:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohoxekcjjjj94hokalao87ebdndnavaifar9R:YaqNJbbbZMgk:lJbbb9p9DTmbak:Ohixekcjjjj94hikabai87ebdndnaDadcetGadceGV:ZaqNJbbbZMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkawad87ebabcwfhbaecufgembkkk9teiucbcbyd:K:G:cjbgeabcifc98GfgbBd:K:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkk83dbcj:Gdk8Kbbbbdbbblbbbwbbbbbbbebbbdbbblbbbwbbbbc:K:Gdkl8W:qbb",e="b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuixkbbebeeddddilve9Weeeviebeoweuecj:Gdkr;Neqo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949WbwY9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVJ9V29VVbDl79IV9Rbqq:W9Dklbzik94evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaeai86b:q:W:cjbaecitab8Piw83i:q:G:cjbaecefgecjd9hmbkk:JBl8Aud97dur978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnalTmbcuhoaiRbbgrc;WeGc:Ge9hmbarcsGgwce0mbc9:hoalcufadcd4cbawEgDadfgrcKcaawEgqaraq0Egk6mbaialfgxar9RhodnadTgmmbavaoad;8qbbkaicefhPcj;abad9Uc;WFbGcjdadca0EhsdndndnadTmbaoadfhzcbhHinaeaH9nmdaxaP9RaD6miabaHad2fhOaPaDfhAasaeaH9RaHasfae6EgCcsfgocl4cifcd4hXavcj;cbfaoc9WGgQcetfhLavcj;cbfaQci2fhKavcj;cbfaQfhYcbh8Aaoc;ab6hEincbh3dnawTmbaPa8Acd4fRbbh3kcbh5avcj;cbfh8Eindndndndna3a5cet4ciGgoc9:fPdebdkaxaA9RaQ6mwdnaQTmbavcj;cbfa5aQ2faAaQ;8qbbkaAaCfhAxdkaQTmeavcj;cbfa5aQ2fcbaQ;8kbxekaxaA9RaX6moaoclVcbawEhraAaXfhocbhidnaEmbaxao9Rc;Gb6mbcbhlina8EalfhidndndndndndnaAalco4fRbbgqciGarfPDbedibledibkaipxbbbbbbbbbbbbbbbbpklbxlkaiaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiaopbbbpklbaoczfhoxekaiaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcd4ciGarfPDbedibledibkaiczfpxbbbbbbbbbbbbbbbbpklbxlkaiczfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaiczfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaiczfaopbbbpklbaoczfhoxekaiczfaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqcl4ciGarfPDbedibledibkaicafpxbbbbbbbbbbbbbbbbpklbxlkaicafaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaoclffagRb:q:W:cjbfhoxikaicafaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbahaocwffagRb:q:W:cjbfhoxdkaicafaopbbbpklbaoczfhoxekaicafaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbahaocdffagRb:q:W:cjbfhokdndndndndndnaqco4arfPDbedibledibkaic8Wfpxbbbbbbbbbbbbbbbbpklbxlkaic8Wfaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaoclffaqRb:q:W:cjbfhoxikaic8Wfaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Ngicitpbi:q:G:cjbaiRb:q:W:cjbgipsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Ngqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spklbaiaocwffaqRb:q:W:cjbfhoxdkaic8Wfaopbbbpklbaoczfhoxekaic8WfaopbbdaoRbbgicitpbi:q:G:cjbaiRb:q:W:cjbgipsaoRbegqcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpklbaiaocdffaqRb:q:W:cjbfhokalc;abfhialcjefaQ0meaihlaxao9Rc;Fb0mbkkdnaiaQ9pmbaici4hlinaxao9RcK6mwa8EaifhqdndndndndndnaAaico4fRbbalcoG4ciGarfPDbedibledibkaqpxbbbbbbbbbbbbbbbbpkbbxlkaqaopbblaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLg8Fcdp:mea8FpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogapxiiiiiiiiiiiiiiiip8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaoclffagRb:q:W:cjbfhoxikaqaopbbwaopbbbg8Fclp:mea8FpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogapxssssssssssssssssp8Jg8Fp5b9cjF;8;4;W;G;ab9:9cU1:Nghcitpbi:q:G:cjbahRb:q:W:cjbghpsa8Fp5e9cjF;8;4;W;G;ab9:9cU1:Nggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPaaa8Fp9spkbbahaocwffagRb:q:W:cjbfhoxdkaqaopbbbpkbbaoczfhoxekaqaopbbdaoRbbghcitpbi:q:G:cjbahRb:q:W:cjbghpsaoRbeggcitpbi:q:G:cjbp9UpmbedilvorzHOACXQLpPpkbbahaocdffagRb:q:W:cjbfhokalcdfhlaiczfgiaQ6mbkkaohAaoTmoka8EaQfh8Ea5cefg5cl9hmbkdndndndnawTmbaza8Acd4fRbbglciGPlbedwbkaQTmdavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep9Ta8Fpxeeeeeeeeeeeeeeeegap9op9Hp9rg8Fa8Jp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ug8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp9Ug8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep9Ta8Faap9op9Hp9rg8Fp9Ugap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp9Ugap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp9Ugap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp9Ug8Jp9AbbbaladfhlaoczfgoaQ6mbxikkaQTmeavcjdfa8Afhlava8Afpbdbh8Jcbhoinalavcj;cbfaofpblbg8KaYaofpblbg8LpmbzeHdOiAlCvXoQrLg8MaLaofpblbg8NaKaofpblbgypmbzeHdOiAlCvXoQrLg8PpmbezHdiOAlvCXorQLg8Fcep:nea8Fpxebebebebebebebebgap9op:bep9rg8Fa8Jp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ma8PpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwKDYq8AkEx3m5P8Es8Fg8Ka8NaypmwKDYq8AkEx3m5P8Es8Fg8LpmbezHdiOAlvCXorQLg8Fcep:nea8Faap9op:bep9rg8Fp:oeg8Jp9Abbbaladfgla8Ja8Fa8Fpmlvorlvorlvorlvorp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmwDqkwDqkwDqkwDqkp:oeg8Jp9Abbbaladfgla8Ja8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9Abbbaladfgla8Ja8Ka8LpmwDKYqk8AExm35Ps8E8Fg8Fcep:nea8Faap9op:bep9rg8Fp:oegap9Abbbaladfglaaa8Fa8Fpmlvorlvorlvorlvorp:oegap9Abbbaladfglaaa8Fa8FpmwDqkwDqkwDqkwDqkp:oegap9Abbbaladfglaaa8Fa8FpmxmPsxmPsxmPsxmPsp:oeg8Jp9AbbbaladfhlaoczfgoaQ6mbxdkkaQTmbcbhocbalcl4gl9Rc8FGhiavcjdfa8Afhrava8Afpbdbhainaravcj;cbfaofpblbg8JaYaofpblbg8KpmbzeHdOiAlCvXoQrLg8LaLaofpblbg8MaKaofpblbg8NpmbzeHdOiAlCvXoQrLgypmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Faap9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8LaypmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwKDYq8AkEx3m5P8Es8Fg8Ja8Ma8NpmwKDYq8AkEx3m5P8Es8Fg8KpmbezHdiOAlvCXorQLg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9Abbbaradfgraaa8Ja8KpmwDKYqk8AExm35Ps8E8Fg8Faip:Rea8Falp:Tep9qg8Fp9rgap9Abbbaradfgraaa8Fa8Fpmlvorlvorlvorlvorp9rgap9Abbbaradfgraaa8Fa8FpmwDqkwDqkwDqkwDqkp9rgap9Abbbaradfgraaa8Fa8FpmxmPsxmPsxmPsxmPsp9rgap9AbbbaradfhraoczfgoaQ6mbkka8Aclfg8Aad6mbkdnaCad2goTmbaOavcjdfao;8qbbkdnammbavavcjdfaCcufad2fad;8qbbkaCaHfhHc9:hoaAhPaAmbxlkkaeTmbaDalfhrcbhocuhlinaralaD9RglfaD6mdasaeao9Raoasfae6Eaofgoae6mbkaial9RhPkcbc99axaP9RakSEhoxekc9:hokavcj;kbf8Kjjjjbaokwbz:bjjjbkNsezu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnalaeci9UgrcHf6mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbav9cu83iUav9cu83i8Wav9cu83iyav9cu83iaav9cu83iKav9cu83izav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhldnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhoindnalaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfaoaDcu7gPcl4fcsGcitfgsydlhzasydbhHdndnaDcsGgsak9pmbavaiaPfcsGcdtfydbaxasEhDaxasTgOfhxxekdndnascsSmbcehOasc987asamffcefhDxekalcefhDal8SbbgscFeGhPdndnascu9mmbaDhlxekalcvfhlaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhlkcehOaPce4cbaPceG9R7amfhDkaDhmkavc;abfaocitfgsaDBdbasazBdlavaicdtfaDBdbavc;abfaocefcsGcitfgsaHBdbasaDBdlaocdfhoaOaifhidnadcd9hmbabarcetfgsaH87ebasclfaD87ebascdfaz87ebxdkabarcdtfgsaHBdbascwfaDBdbasclfazBdbxekdnaDcpe0mbavaiaqaDcsGfRbbgscl4gP9RcsGcdtfydbaxcefgOaPEhDavaias9RcsGcdtfydbaOaPTgzfgOascsGgPEhsaPThPdndnadcd9hmbabarcetfgHax87ebaHclfas87ebaHcdfaD87ebxekabarcdtfgHaxBdbaHcwfasBdbaHclfaDBdbkavaicdtfaxBdbavc;abfaocitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfaocefcsGcitfgHasBdbaHaDBdlavaiazfgicsGcdtfasBdbavc;abfaocdfcsGcitfgDaxBdbaDasBdlaocifhoaiaPfhiaOaPfhxxekaxcbalRbbgsEgHaDc;:eSgDfhOascsGhAdndnascl4gCmbaOcefhzxekaOhzavaiaC9RcsGcdtfydbhOkdndnaAmbazcefhxxekazhxavaias9RcsGcdtfydbhzkdndnaDTmbalcefhDxekalcdfhDal8SbegPcFeGhsdnaPcu9kmbalcofhHascFbGhscrhldninaD8SbbgPcFbGaltasVhsaPcu9kmeaDcefhDalcrfglc8J9hmbkaHhDxekaDcefhDkasce4cbasceG9R7amfgmhHkdndnaCcsSmbaDhsxekaDcefhsaD8SbbglcFeGhPdnalcu9kmbaDcvfhOaPcFbGhPcrhldninas8SbbgDcFbGaltaPVhPaDcu9kmeascefhsalcrfglc8J9hmbkaOhsxekascefhskaPce4cbaPceG9R7amfgmhOkdndnaAcsSmbashlxekascefhlas8SbbgDcFeGhPdnaDcu9kmbascvfhzaPcFbGhPcrhDdninal8SbbgscFbGaDtaPVhPascu9kmealcefhlaDcrfgDc8J9hmbkazhlxekalcefhlkaPce4cbaPceG9R7amfgmhzkdndnadcd9hmbabarcetfgDaH87ebaDclfaz87ebaDcdfaO87ebxekabarcdtfgDaHBdbaDcwfazBdbaDclfaOBdbkavc;abfaocitfgDaOBdbaDaHBdlavaicdtfaHBdbavc;abfaocefcsGcitfgDazBdbaDaOBdlavaicefgicsGcdtfaOBdbavc;abfaocdfcsGcitfgDaHBdbaDazBdlavaiaCTaCcsSVfgicsGcdtfazBdbaiaATaAcsSVfhiaocifhokawcefhwaocsGhoaicsGhiarcifgrae6mbkkcbc99alaqSEhokavc;aef8Kjjjjbaok:clevu8Jjjjjbcz9Rhvdnalaecvf9pmbc9:skdnaiRbbc;:eGc;qeSmbcuskav9cb83iwaicefhoaialfc98fhrdnaeTmbdnadcdSmbcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcdtfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgiBdbalaiBdbawcefgwae9hmbxdkkcbhwindnaoar6mbc9:skaocefhlao8SbbgicFeGhddndnaicu9mmbalhoxekaocvfhoadcFbGhdcrhidninal8SbbgDcFbGaitadVhdaDcu9kmealcefhlaicrfgic8J9hmbxdkkalcefhokabawcetfadc8Etc8F91adcd47avcwfadceGcdtVglydbfgi87ebalaiBdbawcefgwae9hmbkkcbc99aoarSEk;Toio97eue97aec98Ghedndnadcl9hmbaeTmecbhdinababpbbbgicKp:RecKp:Sep;6eglaicwp:RecKp:Sep;6ealp;Geaiczp:RecKp:Sep;6egvp;Gep;Kep;Legopxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgwp9op9rp;Keglpxbb;:9cbb;:9cbb;:9cbb;:9calalp;Meaoaop;Meavaravawp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFbbbFbbbFbbbFbbbp9oaipxbbbFbbbFbbbFbbbFp9op9qalavp;Mearp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaoavp;Mearp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgDaDpbbbgipxbbbbbbFFbbbbbbFFgwp9oabpbbbgoaipmbediwDqkzHOAKY8AEgvczp:Reczp:Sep;6eglaoaipmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eavczp:Sep;6egvp;Gealp;Gep;Kep;Legipxbbbbbbbbbbbbbbbbp:2egralpxbbbjbbbjbbbjbbbjgqp9op9rp;Keglpxb;:FSb;:FSb;:FSb;:FSalalp;Meaiaip;Meavaravaqp9op9rp;Keglalp;Mep;Kep;Kep;Jep;Negvp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbp9oaiavp;Mearp;Keczp:Rep9qgialavp;Mearp;KepxFFbbFFbbFFbbFFbbp9oglpmwDKYqk8AExm35Ps8E8Fp9qpkbbabaoawp9oaialpmbezHdiOAlvCXorQLp9qpkbbabcafhbadclfgdae6mbkkk;2ileue97euo97dnaec98GgiTmbcbheinabcKfpx:ji:1S:ji:1S:ji:1S:ji:1SabpbbbglabczfgvpbbbgopmlvorxmPsCXQL358E8Fgrczp:Segwpxibbbibbbibbbibbbp9qp;6egDp;NegqaDaDp;MegDaDp;KealaopmbediwDqkzHOAKY8AEgDczp:Reczp:Sep;6eglalp;MeaDczp:Sep;6egoaop;Mearczp:Reczp:Sep;6egrarp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jep;Mepxbbn0bbn0bbn0bbn0gDp;KepxFFbbFFbbFFbbFFbbgkp9oaqaop;MeaDp;Keczp:Rep9qgoaqalp;MeaDp;Keakp9oaqarp;MeaDp;Keczp:Rep9qgDpmwDKYqk8AExm35Ps8E8Fglp5eawclp:RegqpEi:T:j83ibavalp5baqpEd:T:j83ibabcwfaoaDpmbezHdiOAlvCXorQLgDp5eaqpEe:T:j83ibabaDp5baqpEb:T:j83ibabcafhbaeclfgeai6mbkkkuee97dnadcd4ae2c98GgeTmbcbhdinababpbbbgicwp:Recwp:Sep;6eaicep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbabczfhbadclfgdae6mbkkk:Sodw97euaec98Ghedndnadcl9hmbaeTmecbhdinabpxbbuJbbuJbbuJbbuJabpbbbgicKp:TeglaicYp:Tep9qgvcdp:Teavp9qgvclp:Teavp9qgop;6ep;Negvaicwp:RecKp:SegraipxFbbbFbbbFbbbFbbbgwp9ogDp:Uep;6ep;Mepxbbn0bbn0bbn0bbn0gqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9oavaDarp:Xeaiczp:RecKp:Segip:Uep;6ep;Meaqp;Keawp9op9qavaDaraip:Uep:Xep;6ep;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qavaoalcep:Rep9oalpxebbbebbbebbbebbbp9op9qp;6ep;Meaqp;KecKp:Rep9qpkbbabczfhbadclfgdae6mbxdkkaeTmbcbhdinabczfgkpxbFu9hbFu9hbFu9hbFu9habpbbbglakpbbbgrpmlvorxmPsCXQL358E8Fgvczp:TegqavcHp:Tep9qgicdp:Teaip9qgiclp:Teaip9qgicwp:Teaip9qgop;6ep;NegialarpmbediwDqkzHOAKY8AEgDpxFFbbFFbbFFbbFFbbglp9ograDczp:Segwp:Ueavczp:Reczp:SegDp:Xep;6ep;Mepxbbn0bbn0bbn0bbn0gvp;Kealp9oaiarawaDp:Uep:Xep;6ep;Meavp;Keczp:Rep9qgwaiaoaqcep:Rep9oaqpxebbbebbbebbbebbbp9op9qp;6ep;Meavp;Keczp:ReaiaDarp:Uep;6ep;Meavp;Kealp9op9qgipmwDKYqk8AExm35Ps8E8FpkbbabawaipmbezHdiOAlvCXorQLpkbbabcafhbadclfgdae6mbkkk9teiucbcbydj:G:cjbgeabcifc98GfgbBdj:G:cjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkxebcj:Gdklz:zbb",t=new Uint8Array([0,97,115,109,1,0,0,0,1,4,1,96,0,0,3,3,2,0,0,5,3,1,0,1,12,1,0,10,22,2,12,0,65,0,65,0,65,0,252,10,0,0,11,7,0,65,0,253,15,26,11]),i=new Uint8Array([32,0,65,2,1,106,34,33,3,128,11,4,13,64,6,253,10,7,15,116,127,5,8,12,40,16,19,54,20,9,27,255,113,17,42,67,24,23,146,148,18,14,22,45,70,69,56,114,101,21,25,63,75,136,108,28,118,29,73,115]);if(typeof WebAssembly!="object")return{supported:!1};var n=WebAssembly.validate(t)?o(e):o(s),r,a=WebAssembly.instantiate(n,{}).then(function(p){r=p.instance,r.exports.__wasm_call_ctors()});function o(p){for(var v=new Uint8Array(p.length),S=0;S<p.length;++S){var b=p.charCodeAt(S);v[S]=b>96?b-97:b>64?b-39:b+4}for(var M=0,S=0;S<p.length;++S)v[M++]=v[S]<60?i[v[S]]:(v[S]-60)*64+v[++S];return v.buffer.slice(0,M)}function c(p,v,S,b,M,w,A){var _=p.exports.sbrk,T=b+3&-4,P=_(T*M),I=_(w.length),N=new Uint8Array(p.exports.memory.buffer);N.set(w,I);var B=v(P,b,M,I,w.length);if(B==0&&A&&A(P,T,M),S.set(N.subarray(P,P+b*M)),_(P-_(0)),B!=0)throw new Error("Malformed buffer data: "+B)}var l={NONE:"",OCTAHEDRAL:"meshopt_decodeFilterOct",QUATERNION:"meshopt_decodeFilterQuat",EXPONENTIAL:"meshopt_decodeFilterExp",COLOR:"meshopt_decodeFilterColor"},h={ATTRIBUTES:"meshopt_decodeVertexBuffer",TRIANGLES:"meshopt_decodeIndexBuffer",INDICES:"meshopt_decodeIndexSequence"},u=[],d=0;function f(p){var v={object:new Worker(p),pending:0,requests:{}};return v.object.onmessage=function(S){var b=S.data;v.pending-=b.count,v.requests[b.id][b.action](b.value),delete v.requests[b.id]},v}function g(p){for(var v="self.ready = WebAssembly.instantiate(new Uint8Array(["+new Uint8Array(n)+"]), {}).then(function(result) { result.instance.exports.__wasm_call_ctors(); return result.instance; });self.onmessage = "+m.name+";"+c.toString()+m.toString(),S=new Blob([v],{type:"text/javascript"}),b=URL.createObjectURL(S),M=u.length;M<p;++M)u[M]=f(b);for(var M=p;M<u.length;++M)u[M].object.postMessage({});u.length=p,URL.revokeObjectURL(b)}function x(p,v,S,b,M){for(var w=u[0],A=1;A<u.length;++A)u[A].pending<w.pending&&(w=u[A]);return new Promise(function(_,T){var P=new Uint8Array(S),I=++d;w.pending+=p,w.requests[I]={resolve:_,reject:T},w.object.postMessage({id:I,count:p,size:v,source:P,mode:b,filter:M},[P.buffer])})}function m(p){var v=p.data;self.ready.then(function(S){if(!v.id)return self.close();try{var b=new Uint8Array(v.count*v.size);c(S,S.exports[v.mode],b,v.count,v.size,v.source,S.exports[v.filter]),self.postMessage({id:v.id,count:v.count,action:"resolve",value:b},[b.buffer])}catch(M){self.postMessage({id:v.id,count:v.count,action:"reject",value:M})}})}return{ready:a,supported:!0,useWorkers:function(p){g(p)},decodeVertexBuffer:function(p,v,S,b,M){c(r,r.exports.meshopt_decodeVertexBuffer,p,v,S,b,r.exports[l[M]])},decodeIndexBuffer:function(p,v,S,b){c(r,r.exports.meshopt_decodeIndexBuffer,p,v,S,b)},decodeIndexSequence:function(p,v,S,b){c(r,r.exports.meshopt_decodeIndexSequence,p,v,S,b)},decodeGltfBuffer:function(p,v,S,b,M,w){c(r,r.exports[h[M]],p,v,S,b,r.exports[l[w]])},decodeGltfBufferAsync:function(p,v,S,b,M){return u.length>0?x(p,v,S,h[b],l[M]):a.then(function(){var w=new Uint8Array(p*v);return c(r,r.exports[h[b]],w,p,v,S,r.exports[l[M]]),w})}}})();var xS={ai:"DUBIOUS ADVICE BUREAU",maker:"THE TINKER TENT",aid:"THE REBOOT CLINIC",swap:"BRAIN SWAP BAZAAR",news:"THE PATCH NOTES PRESS",stage:`LESS DOOMSCROLL
MORE DANCE FLOOR`};function vS(s,e,{ink:t="#184c4b",paper:i="#efe3c5",border:n=!0}={}){let r=document.createElement("canvas");r.width=2048,r.height=Math.max(1,Math.round(r.width/e));let a=r.getContext("2d"),o=r.width,c=r.height;a.fillStyle=i,a.fillRect(0,0,o,c);let l=Math.min(c*.14,o*.06);n&&(a.strokeStyle="#b39a70",a.lineWidth=Math.max(2,c*.012),a.strokeRect(l*.45,l*.45,o-l*.9,c-l*.9)),a.fillStyle=t,a.textAlign="center",a.textBaseline="middle";let h=Math.min(c*.57/s.length,(c-l*2)/s.length*.8);for(a.font=`700 ${h}px Arial, sans-serif`;s.some(u=>a.measureText(u).width>o-l*2)&&h>4;)h-=1,a.font=`700 ${h}px Arial, sans-serif`;return s.forEach((u,d)=>a.fillText(u,o/2,c/2+(d-(s.length-1)/2)*h*1.35)),r}function Vm(s,e=4){let t=new Map,i=s.get("player_jam")?.scene.getObjectByName("player_jam_print");if(i){let r=i.geometry,a=r.attributes.position,o=r.attributes.color,c=r.index?.array||Array.from({length:a.count},(u,d)=>d),l=[],h=[];for(let u=0;u<a.count;u++)o.getZ(u)>.15&&h.push(u);for(let u=0;u<c.length;u+=3)[c[u],c[u+1],c[u+2]].every(d=>o.getZ(d)<.15)&&l.push(c[u],c[u+1],c[u+2]);if(h.length&&l.length){i.geometry=r.clone(),i.geometry.setIndex(l);let u=document.createElement("canvas");u.width=u.height=512;let d=u.getContext("2d");d.fillStyle="#efdfb9",d.textAlign="center",d.textBaseline="middle",d.font="bold 76px Arial",["GOOD","VIBES","WEIRD","OUTPUTS"].forEach((_,T)=>d.fillText(_,256,60+T*126));let f=[],g=[],x=[],m=[],p=[],v=8,S=8;for(let _=0;_<=S;_++)for(let T=0;T<=v;T++){let P=(T/v-.5)*.164,I=1.1+_/S*.151,N=h[0],B=1/0;for(let D of h){let O=(a.getX(D)-P)**2+(a.getY(D)-I)**2;O<B&&(B=O,N=D)}f.push(P,I,a.getZ(N)+.0015),g.push(T/v,_/S);for(let D=0;D<4;D++)x.push(r.attributes.skinIndex.array[N*4+D]),m.push(r.attributes.skinWeight.array[N*4+D])}for(let _=0;_<S;_++)for(let T=0;T<v;T++){let P=_*(v+1)+T,I=P+v+1;p.push(P,P+1,I,P+1,I+1,I)}let b=new ze;b.setAttribute("position",new Ie(f,3)),b.setAttribute("uv",new Ie(g,2)),b.setAttribute("skinIndex",new Is(x,4)),b.setAttribute("skinWeight",new Ie(m,4)),b.setIndex(p),b.computeVertexNormals();let M=new bi(u);M.colorSpace=at,M.anisotropy=e;let w=new xt({map:M,alphaTest:.3,roughness:.92,side:ot}),A=new Fn(b,w);A.name="player_jam_lettering",A.position.copy(i.position),A.quaternion.copy(i.quaternion),A.scale.copy(i.scale),A.bindMode=i.bindMode,A.bind(i.skeleton,i.bindMatrix),A.frustumCulled=!1,i.parent.add(A)}}let n=new Set;for(let r of s.values())r.scene.traverse(a=>{let o=a.material;if(!a.isMesh||Array.isArray(o)||o?.name!=="labels_atlas"||n.has(o))return;n.add(o);let c=o.map.image,l=document.createElement("canvas");l.width=c.width,l.height=c.height;let h=l.getContext("2d");h.drawImage(c,0,0),h.save(),h.scale(l.width/1024,l.height/1024);let u=[...Object.values(_h),"PROMPT","TOOL","CONTEXT","SHOW ME","TRY THIS","YOUR TURN","TEAM UP","MAKE STUFF","SNACKS / VIBES","REBOOT CLUB"],d=["#d5a342","#6e9aab","#b94d36","#6b9c81","#d5a342"];u.forEach((g,x)=>{if(x>=5&&x<=7)return;let m=x%4*256,p=Math.floor(x/4)*256;h.fillStyle=x<5||x>=8&&x<=12?d[x%5]:"#efdfb9",h.fillRect(m+12,p+45,232,x<5?109:140),h.fillStyle="#173f3c",h.textAlign="center",h.textBaseline="middle";let v=30,S=g.toUpperCase().split(" "),b=[],M="";h.font=`bold ${v}px Arial`;for(let w of S)M&&h.measureText(M+" "+w).width>214?(b.push(M),M=w):M+=(M?" ":"")+w;for(b.push(M);b.some(w=>h.measureText(w).width>214)&&v>8;)v--,h.font=`bold ${v}px Arial`;b.forEach((w,A)=>h.fillText(w,m+128,p+96+(A-(b.length-1)/2)*34))}),h.fillStyle="#21534d",h.fillRect(778,958,236,47),h.fillStyle="#efdfb9",h.textAlign="center",h.font="bold 25px Arial",h.fillText("PROMPTSTOCK",896,981),h.restore();let f=new bi(l);f.colorSpace=at,f.flipY=o.map.flipY,f.anisotropy=e,o.map=f,o.needsUpdate=!0});for(let r of s.values())r.scene.traverse(a=>{if(!a.isMesh||Array.isArray(a.material)||!a.material.name.startsWith("banner_"))return;let o=a.material.name.slice(7),c=xS[o];if(!c)return;a.geometry.computeBoundingBox();let l=a.geometry.boundingBox.getSize(new R),h=[l.x,l.y,l.z].sort((f,g)=>g-f),u=h[0]/h[1],d=o+":"+u.toFixed(3);if(!t.has(d)){let f=o==="maker"?["THE TINKER","TENT"]:o==="news"&&u<6?["THE PATCH NOTES","PRESS"]:c.split(`
`),g=new bi(vS(f,u,{ink:o==="aid"?"#993f31":"#184c4b"}));g.colorSpace=at,g.flipY=a.material.map?.flipY??!1,g.anisotropy=e;let x=a.material.clone();x.map=g,x.roughness=1,x.name="printed_"+d,t.set(d,x)}a.material=t.get(d)})}async function _S(){let s=new Vl;return jl.supported&&(await jl.ready,s.setMeshoptDecoder(jl)),s}function yS(s){let e=new Map;s.updateWorldMatrix(!0,!0),s.traverse(t=>{if(!t.isSkinnedMesh||Array.isArray(t.material))return;let i=[t.parent.uuid,t.skeleton.uuid,t.material.uuid,t.bindMode,t.bindMatrix.elements.join(","),t.matrix.elements.join(","),Object.keys(t.geometry.attributes).sort().join(",")].join("|");e.has(i)||e.set(i,[]),e.get(i).push(t)});for(let t of e.values()){if(t.length<2)continue;let i=t[0],n=t.map(o=>o.geometry.index?o.geometry.toNonIndexed():o.geometry.clone()),r=nd(n,!1);if(n.forEach(o=>o.dispose()),!r)continue;let a=new Fn(r,i.material);a.name=s.name+"_"+i.material.name,a.position.copy(i.position),a.quaternion.copy(i.quaternion),a.scale.copy(i.scale),a.bindMode=i.bindMode,a.bind(i.skeleton,i.bindMatrix),a.frustumCulled=!1,a.castShadow=a.receiveShadow=!0,i.parent.add(a),t.forEach(o=>o.removeFromParent())}}function SS(s,e="idle"){let t=Ki(s),i=new Ue;t.updateMatrixWorld(!0);let n=u=>{let d;return t.traverse(f=>{f.isBone&&f.name.startsWith(u)&&(d=f)}),d},r=(u,d,f)=>{let g=n(u);if(!g)return;let x=f.clone().applyQuaternion(t.getWorldQuaternion(new Je)).applyQuaternion(g.parent.getWorldQuaternion(new Je).invert());g.quaternion.premultiply(new Je().setFromAxisAngle(x,d)),g.updateWorldMatrix(!1,!0)},a=new R(1,0,0),o=new R(0,0,1);if(e==="wave"&&(r("upper_arm_R",.85,o),r("forearm_R",-1,a)),e==="play")for(let u of["L","R"])r("upper_arm_"+u,-.6,a),r("forearm_"+u,-.8,a);(e==="talk"||e==="listen")&&(r("upper_arm_R",e==="talk"?-.3:-.1,a),r("upper_arm_R",.12,o),r("forearm_R",e==="talk"?-.95:-.45,a),r("head",e==="talk"?-.1:.1,new R(0,1,0))),t.updateMatrixWorld(!0);let c=t.matrixWorld.clone().invert(),l=new R,h=n("hand_R");return h&&(i.userData.handGrip=h.getWorldPosition(new R).applyMatrix4(c).toArray()),t.traverse(u=>{if(!u.isMesh)return;let d=u.geometry.clone();if(u.isSkinnedMesh){u.skeleton.update();let g=d.attributes.position;for(let x=0;x<g.count;x++)u.getVertexPosition(x,l),g.setXYZ(x,l.x,l.y,l.z);d.deleteAttribute("skinIndex"),d.deleteAttribute("skinWeight"),d.computeVertexNormals()}d.applyMatrix4(c.clone().multiply(u.matrixWorld));let f=new ke(d,u.material);i.add(f)}),jn(i),i}function jn(s){s.updateWorldMatrix(!0,!0);let e=s.matrixWorld.clone().invert(),t=new Map,i=[];if(s.traverse(n=>{if(!n.isMesh||n.isSkinnedMesh||Array.isArray(n.material))return;i.push(n);let r=n.material.uuid+"|"+Object.keys(n.geometry.attributes).sort().join(",");t.has(r)||t.set(r,{material:n.material,geometries:[]});let a=n.geometry.clone().applyMatrix4(e.clone().multiply(n.matrixWorld));t.get(r).geometries.push(a.index?a.toNonIndexed():a)}),!!i.length){for(let n of i)n.removeFromParent();for(let{material:n,geometries:r}of t.values()){let a=nd(r,!1);if(a){let o=new ke(a,n);o.name=s.name+"_"+n.name,s.add(o)}for(let o of r)o.dispose()}}}var Ld=class{constructor(e,t,i){this.engine=e,this.libraries=t,this.layout=i,this.group=new Ue,this.group.name="SkillsJamPlacedKit",this.instances=new Map,this.mixers=[],this.enabled=!0,e.scene.add(this.group);for(let n of i.placements)this.place(n)}instanceCrowd(e){let t=new Map,i=new Map,n=0;this.crowdMotion={value:1};for(let r of e){if(Nd(r))continue;let a=n++%6+1,o=r.jamHuman.pose||"idle",c=a+":"+o;t.has(c)||t.set(c,{variant:a,pose:o,nodes:[]}),t.get(c).nodes.push(r);for(let l of r.jamHuman.parts)l.jamReplace=!0}for(let{variant:r,pose:a,nodes:o}of t.values()){let c=this.libraries.get("crowd_kit").scene.getObjectByName("crowd_"+r),l=SS(c,a);l.traverse(h=>{if(!h.isMesh)return;if(!i.has(h.material)){let d=h.material.clone();d.onBeforeCompile=f=>{f.uniforms.jamCrowdTime=this.engine.time,f.uniforms.jamCrowdMotion=this.crowdMotion,f.vertexShader=`uniform float jamCrowdTime;uniform float jamCrowdMotion;
`+f.vertexShader,f.vertexShader=f.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 guestOrigin=instanceMatrix[3].xyz;float guestPhase=guestOrigin.x*.73+guestOrigin.z*.41;
transformed.x+=sin(jamCrowdTime*.8+guestPhase)*max(position.y,0.)*.011*jamCrowdMotion;
transformed.z+=sin(jamCrowdTime*.6+guestPhase)*max(position.y,0.)*.007*jamCrowdMotion;`)},d.customProgramCacheKey=()=>"jam-social-sway-v4",i.set(h.material,d)}let u=new Kt(h.geometry,i.get(h.material),o.length);u.name=`Festival guests ${r} ${a}`,u.userData.handGrip=l.userData.handGrip,u.castShadow=!0,u.receiveShadow=!0,u.customDepthMaterial=new ls({depthPacking:co}),u.customDepthMaterial.onBeforeCompile=u.material.onBeforeCompile,u.customDepthMaterial.customProgramCacheKey=()=>"jam-social-sway-depth-v4";for(let d=0;d<o.length;d++)u.setMatrixAt(d,new Pe().fromArray(o[d].world).scale(c.scale));u.computeBoundingSphere(),this.group.add(u)})}this.backgroundPeople=n}place(e){let t=this.libraries.get(e.library),i;if(t.scene.traverse(r=>{r.userData.asset_id===e.asset&&(i=r)}),i??=t.scene.getObjectByName(e.asset),!i)throw new Error(`Missing kit root ${e.asset}`);let n=Ki(i);if(n.name=e.id,n.position.fromArray(e.position),n.rotation.y=e.rotation||0,e.scale&&n.scale.setScalar(e.scale),n.userData={...n.userData,asset:e.asset,interactive:e.interactive||null},n.traverse(r=>{if(r.isMesh){r.isSkinnedMesh&&(r.frustumCulled=!1),r.castShadow=!e.skyCard,r.receiveShadow=!e.skyCard;let a=Array.isArray(r.material)?r.material:[r.material];for(let o of a)o.side=ot}}),this.group.add(n),this.instances.set(e.id,n),t.animations.length){let r=new ks(n),a=Object.fromEntries(t.animations.map(c=>[c.name,r.clipAction(c)])),o={mixer:r,actions:a,object:n};this.mixers.push(o),a[e.clip||"idle"]?.play()}return n}play(e,t,i=!1){let n=this.mixers.find(a=>a.object.name===e);if(!n?.actions[t])return!1;Object.values(n.actions).forEach(a=>a.stop());let r=n.actions[t];return r.reset(),r.setLoop(i?Rl:Cl,i?1:1/0),r.clampWhenFinished=i,r.play(),!0}setDressed(e){this.enabled=e,this.group.visible=e;for(let t of this.engine.batches)t.dirty=!0}update(e){this.crowdMotion&&(this.crowdMotion.value=this.engine.play?.reduced||this.engine.play?.concert?.active?0:1);let t=this.lastTime===void 0?0:Math.min(.1,Math.max(0,e-this.lastTime));this.lastTime=e;for(let{mixer:n}of this.mixers)this.engine.jamReview?n.setTime(e):n.update(t);let i=this.instances.get("kickball");if(i&&!this.controlledBall){let n=e%1;i.position.y=.2+Math.max(0,Math.sin(n*Math.PI))*.42,i.rotation.x=e*2,i.rotation.z=e}}stats(){let e=0,t=0;return this.group.traverse(i=>{i.isMesh&&(e+=(i.geometry.index?.count||i.geometry.attributes.position.count)/3*(i.isInstancedMesh?i.count:1),t+=i.geometry.groups.length||1)}),{finiteTransforms:this.group.children.every(i=>i.matrixWorld.elements.every(Number.isFinite)),placedRoots:this.instances.size,backgroundPeople:this.backgroundPeople||0,triangles:e,meshBatches:t,clips:Object.keys(this.mixers[0]?.actions||{}),enabled:this.enabled}}};async function Wm(s){let e=await _S(),t=await fetch("assets/models/layout.json",{cache:"no-store"}).then(r=>{if(!r.ok)throw Error("Kit layout failed to load");return r.json()}),i=["tent_kit","props_kit","player_jam","crowd_kit","world_dressing"],n=await Promise.all(i.map(async r=>[r,await e.loadAsync(`assets/models/${r}.glb?v=${t.modelRevisions?.[r]||1}`)]));Vm(new Map(n),Math.min(8,s.renderer?.capabilities.getMaxAnisotropy()||4));for(let[r,a]of n)if(r!=="player_jam"&&!new URLSearchParams(location.search).has("unbatched")){let o=[];a.scene.traverse(c=>{c.userData.asset_id&&o.push(c)});for(let c of o)r==="crowd_kit"&&yS(c),jn(c)}return new Ld(s,new Map(n),t)}function Nd(s){for(let e=s;e;e=e.parent)if(e.jamReplace)return!0;return!1}var Xl=class{constructor(){this.phase="paddle",this.distance=0,this.speed=0,this.strokes=0,this.cooldown=0,this.stirs=0,this.heat=0,this.held=!1,this.night=0}stroke(){return this.phase!=="paddle"||this.cooldown>0?!1:(this.speed=Math.min(4.5,this.speed+1.65),this.cooldown=.5,this.strokes++,!0)}step(e){e=Math.max(0,Math.min(e,.1)),this.cooldown=Math.max(0,this.cooldown-e),this.phase==="paddle"&&(this.distance=Math.min(78,this.distance+this.speed*e),this.speed*=Math.exp(-.65*e)),this.phase==="roast"&&this.held&&(this.heat=Math.min(10,this.heat+e)),this.phase==="sleep"&&(this.night+=e)}beach(){return this.phase!=="paddle"||this.distance<77.5?!1:(this.phase="meet",!0)}meet(){return this.phase!=="meet"?!1:(this.phase="dinner",!0)}stir(){return this.phase!=="dinner"?!1:(++this.stirs>=6&&(this.phase="secret"),!0)}promise(){return this.phase!=="secret"?!1:(this.phase="roast",!0)}bite(){return this.phase!=="roast"||this.held||this.heat<5||this.heat>8?!1:(this.phase="bed",!0)}fresh(){return this.phase!=="roast"?!1:(this.heat=0,this.held=!1,!0)}sleep(){return this.phase!=="bed"?!1:(this.phase="sleep",this.night=0,!0)}wake(){return this.phase!=="sleep"||this.night<3?!1:(this.phase="done",!0)}};var jt=(...s)=>new R(...s),Ot=(s,e={})=>new xt({color:s,roughness:.92,...e});function ei(s,e,t,i=[0,0,0],n=[1,1,1]){let r=new ke(e,t);return r.position.fromArray(i),r.scale.fromArray(n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function kt(s,e,t,i){return ei(s,new Jt(1,18,12),e,t,i)}function xi(s,e,t,i,n=.025,r=n){let a=jt(...i).sub(jt(...t)),o=ei(s,new wt(r,n,a.length(),8),e,jt(...t).add(jt(...i)).multiplyScalar(.5).toArray());return o.quaternion.setFromUnitVectors(jt(0,1,0),a.normalize()),o}function bo(s,e,t,i=.018){return ei(s,new Ls(new os(t.map(n=>jt(...n))),20,i,5,!1),e)}function Fd(s,e=1){let t=new an().load("assets/camp-v2/"+s+".png");return t.colorSpace=at,t.wrapS=t.wrapT=yi,t.repeat.set(e,e),t.anisotropy=4,t}function qm(){let s=Fd("fur",2),e=Fd("canvas",2),t=Fd("stone");return{fur:Ot("#d8bfa8",{map:s}),chest:Ot("#efd4b7",{map:s}),skin:Ot("#aa7b57"),dark:Ot("#32271f"),wood:Ot("#745038"),rope:Ot("#ddc694"),cream:Ot("#eedcb6"),canvas:Ot("#fff4db",{map:e,bumpMap:e,bumpScale:.016,side:ot}),stone:Ot("#d0cfbf",{map:t,bumpMap:t,bumpScale:.025}),metal:Ot("#343b37",{metalness:.65,roughness:.6})}}function Jl(s,e){let t=new Ue,i=Ot("#70543c");xi(t,i,[0,0,0],[.08,7.8,-.05],.19,.018);let n=[],r=[],a=new ge;function o(d,f,g,x){let m=f.clone().sub(d),p=jt(-m.z,.12,m.x).normalize().multiplyScalar(g);n.push(...d.clone().add(p).toArray(),...d.clone().sub(p).toArray(),...f.toArray()),a.set(x);for(let v=0;v<3;v++)r.push(a.r,a.g,a.b)}for(let d=0;d<8;d++)for(let f=0;f<6;f++){let g=f*Math.PI/3+d*1.67+Math.sin(f*3.7+d)*.12,x=1.65+d*.77+Math.sin(f*1.3+d)*.14,m=2.3*(1-d/9.5)*(1+Math.sin(f*2.1+d)*.14),p=jt(Math.cos(g),0,Math.sin(g)),v=jt(0,x,0),S=p.clone().multiplyScalar(m).add(jt(0,x-.38,0));xi(t,i,v.toArray(),S.toArray(),.035*(1-d/10),.006);for(let b=1;b<=6;b++){let M=b/6,w=v.clone().lerp(S,M);w.y+=.18*M*M;for(let A=-1;A<=1;A+=2){let _=g+A*(.62+.2*M),T=jt(Math.cos(_),.2,Math.sin(_)).multiplyScalar(.65*(1-.3*M));for(let P=0;P<6;P++){let I=P/6,N=w.clone().addScaledVector(T,I),B=.25*(1-I*.5);for(let D of[-1,1]){let O=N.clone().add(jt(Math.cos(_+D*.9)*B,.13*Math.sin(P*2.4+A)+P%2*.08,Math.sin(_+D*.9)*B));o(N,O,.025,(P+b+d)%4===0?"#79954c":(P+b)%3===0?"#456b3b":"#315638")}}}}}let c=new ze;c.setAttribute("position",new Ie(n,3)),c.setAttribute("color",new Ie(r,3)),c.computeVertexNormals();let l=ei(t,c,Ot("#ffffff",{vertexColors:!0,side:ot}));l.name="Pine needles",jn(t),t.updateMatrixWorld(!0);let h=new Ue;h.name="Branching mountain pines",s.add(h);let u=new dt;return t.traverse(d=>{if(!d.isMesh)return;let f=d.geometry.clone().applyMatrix4(d.matrixWorld),g=new Kt(f,d.material,e.length);g.castShadow=g.receiveShadow=!0,e.forEach((x,m)=>{u.position.set(x[0],x[1],x[2]),u.rotation.set(0,m*2.399,Math.sin(m*1.9)*.025),u.scale.setScalar(x[3]||1),u.updateMatrix(),g.setMatrixAt(m,u.matrix)}),g.computeBoundingSphere(),h.add(g)}),h}function Kl(s,e,t,i,n=0){let r=[jt(.001,0),jt(.06,.07),jt(.08,.19),jt(.045,.3),jt(.002,.4)].map(l=>new ie(l.x,l.y)),a=new cs(r,7),o=a.attributes.position;for(let l=0;l<o.count;l++)o.setX(l,o.getX(l)+.22*o.getY(l)*o.getY(l));a.computeVertexNormals();let c=ei(s,a,e,t,i);return c.rotation.z=Math.PI+n,c}function jm(s,e){let t=Ot("#c69954"),i=Ot("#fcebd0"),n=new Ue;n.name="Sasquatch \xB7 shaggy lake guardian",n.position.set(2,.35,-2),s.add(n);let r=[[.29,.78],[.48,.93],[.56,1.25],[.61,1.6],[.75,1.88],[.62,2.03],[.34,2.1],[.28,2.24]],a=ei(n,new cs(r.map(o=>new ie(...o)),24),e.fur);a.scale.z=.64,kt(n,e.chest,[0,1.58,.22],[.46,.48,.19]),kt(n,e.fur,[0,2.35,0],[.43,.5,.35]),kt(n,e.skin,[0,2.23,.29],[.265,.27,.115]);for(let o of[-1,1]){kt(n,e.fur,[o*.34,.62,0],[.23,.59,.25]),kt(n,e.skin,[o*.34,.13,.22],[.24,.15,.38]);for(let u=0;u<4;u++)kt(n,e.skin,[o*.34+(u-1.5)*.1,.105,.5+(u===1?.025:0)],[.059,.07,.12]);let c=kt(n,e.fur,[o*.69,1.63,-.03],[.25,.49,.26]);c.rotation.z=o*.2;let l=kt(n,e.fur,[o*.79,1.05,.1],[.19,.4,.2]);l.rotation.x=-.2,kt(n,e.skin,[o*.8,.75,.19],[.14,.19,.085]);for(let u=0;u<4;u++)xi(n,e.skin,[o*.8+(u-1.5)*.061,.7,.21],[o*.8+(u-1.5)*.055,.49+Math.abs(u-1.5)*.035,.25],.031,.022);xi(n,e.skin,[o*.8-o*.12,.78,.2],[o*.8-o*.18,.63,.28],.048,.029),kt(n,e.fur,[o*.4,2.32,0],[.12,.17,.095]),kt(n,e.skin,[o*.442,2.32,.045],[.054,.085,.04]),kt(n,e.dark,[o*.12,2.41,.318],[.091,.071,.038]),kt(n,t,[o*.12,2.405,.351],[.044,.033,.019]),kt(n,e.dark,[o*.12,2.405,.366],[.018,.024,.009]),kt(n,i,[o*.12-.009,2.417,.373],[.008,.008,.004]);let h=kt(n,e.fur,[o*.12,2.477,.327],[.15,.055,.067]);h.rotation.z=o*.1,kt(n,e.skin,[o*.13,2.205,.374],[.12,.093,.052]);for(let u=0;u<6;u++)Kl(n,e.fur,[o*(.4+u%2*.025),2.44-u*.07,.13],[1,1,1],o*-.23);for(let u=0;u<6;u++)Kl(n,e.fur,[o*(.58+u*.032),1.96-u*.15,.1],[1.1,1.05,1.1],o*.18)}kt(n,e.dark,[0,2.32,.406],[.09,.062,.058]),bo(n,e.dark,[[-.13,2.16,.408],[-.07,2.135,.43],[.015,2.13,.432],[.1,2.15,.419]],.009);for(let o=0;o<40;o++){let c=o*2.4,l=.95+o%7*.15;Kl(n,e.fur,[Math.sin(c)*(.47+(l-1)*.12),l,Math.cos(c)*.33],[.8,.72,.8],Math.sin(o)*.2)}for(let o=0;o<7;o++)Kl(n,e.fur,[(o-3)*.073,2.84-Math.abs(o-3)*.035,0],[1,1,1],(o-3)*.1);return jn(n),n.traverse(o=>{o.isMesh&&(o.castShadow=o.receiveShadow=!0)}),n}function Xm(s,e){let t=new Ue;t.name="Cove canvas tent \xB7 stitched fly and tied doors",t.position.set(-5,.45,-4),s.add(t);let i=Ot("#4b6258");ei(t,new Mt(3.7,.07,4),i,[0,.035,0]);let n=12,r=16;for(let l of[-1,1]){let h=[],u=[],d=[];for(let x=0;x<=r;x++)for(let m=0;m<=n;m++){let p=m/n,v=x/r;h.push(l*p*2.05,.16+(1-p)*2.02-.13*Math.sin(Math.PI*p)*Math.sin(v*Math.PI),-2.15+v*4.3),u.push(p*1.25,v*1.5)}for(let x=0;x<r;x++)for(let m=0;m<n;m++){let p=x*(n+1)+m,v=p+n+1;d.push(p,v,p+1,p+1,v,v+1)}let f=new ze;f.setAttribute("position",new Ie(h,3)),f.setAttribute("uv",new Ie(u,2)),f.setIndex(d),f.computeVertexNormals(),ei(t,f,e.canvas);for(let x of[-2.15,2.15])xi(t,e.rope,[0,2.19,x],[l*2.05,.16,x],.018),bo(t,e.rope,[[l*1.96,.22,x],[l*2.52,.13,x*1.2],[l*3,.025,x*1.4]],.012),xi(t,e.wood,[l*3,0,x*1.4],[l*3-.06,.19,x*1.4],.035);let g=new ze;g.setAttribute("position",new Ie([0,2.14,2.07,l*2,.1,2.07,l*1.55,.12,2.14,0,2.14,2.07,l*1.55,.12,2.14,l*.55,1.61,2.12],3)),g.setAttribute("uv",new Ie([0,1,1,0,.75,0,0,1,.75,0,.25,.8],2)),g.computeVertexNormals(),ei(t,g,e.canvas),xi(t,e.canvas,[l*.56,1.59,2.12],[l*1.57,.15,2.14],.07),xi(t,e.rope,[l*1.06,.82,2.22],[l*1.24,.72,2.17],.02)}xi(t,e.wood,[0,0,-2.07],[0,2.23,-2.07],.037),xi(t,e.wood,[0,0,2.09],[0,2.23,2.09],.037),xi(t,e.rope,[0,2.2,-2.2],[0,2.2,2.2],.021);let a=kt(t,Ot("#3f7372"),[.6,.19,.15],[.52,.15,1.12]),o=Ot("#548989");for(let l=0;l<7;l++)bo(t,o,[[.13,.2,-.65+l*.26],[.35,.325,-.65+l*.26],[.7,.33,-.65+l*.26],[1.07,.2,-.65+l*.26]],.012);kt(t,e.cream,[.6,.29,-.68],[.42,.13,.28]);let c=new Ue;return c.position.set(-1.45,.1,1.42),t.add(c),ei(c,new wt(.12,.14,.06,12),e.metal,[0,.03,0]),ei(c,new wt(.085,.085,.2,12),Ot("#f8d685",{emissive:"#ed9a3d",emissiveIntensity:.8}),[0,.16,0]),ei(c,new rn(.15,.09,12),e.metal,[0,.31,0]),bo(c,e.metal,[[-.1,.28,0],[-.11,.44,0],[.11,.44,0],[.1,.28,0]],.012),jn(t),t.traverse(l=>{l.isMesh&&(l.castShadow=l.receiveShadow=!0)}),{root:t,bed:a}}function Km(s,e){let t=new Ue;t.name="River stone hearth",t.position.set(-1,.5,1),s.add(t),ei(t,new wt(.72,.74,.045,28),Ot("#292825"),[0,-.15,0]);for(let v=0;v<13;v++){let S=v/13*Math.PI*2;kt(t,e.stone,[Math.sin(S)*.82,-.07+v%3*.015,Math.cos(S)*.82],[.25,.18,.21]).rotation.set(v*.3,S,v*.1)}let i=Ot("#392c25"),n=Ot("#dd6021",{emissive:"#ff6420",emissiveIntensity:1.5});for(let v=0;v<4;v++){let S=v*Math.PI/2+.3,b=jt(Math.cos(S),0,Math.sin(S));xi(t,i,b.clone().multiplyScalar(-.58).add(jt(0,-.03,0)).toArray(),b.clone().multiplyScalar(.55).add(jt(0,.08,0)).toArray(),.12,.09);for(let M=0;M<4;M++)kt(t,n,[b.x*(M*.2-.3),.08,b.z*(M*.2-.3)],[.055,.019,.035])}let r=[];for(let v=0;v<7;v++){let S=new cs([[.035,0],[.12,.08],[.13,.22],[.07,.36],[.04,.49],[.001,.68]].map(A=>new ie(...A)),10),b=S.attributes.position;for(let A=0;A<b.count;A++){let _=b.getY(A);b.setX(A,b.getX(A)+Math.sin(_*6+v)*_*.16)}S.computeVertexNormals();let M=ei(t,S,new zt({color:v%2?"#ffad32":"#f67720",toneMapped:!1}),[Math.sin(v*2.4)*.25,.03,Math.cos(v*2.4)*.21],[.8,.7+v%3*.18,.7]);M.castShadow=M.receiveShadow=!1,r.push(M);let w=ei(M,S,new zt({color:"#ffe191",toneMapped:!1}),[0,0,0],[.6,.57,.6]);w.castShadow=w.receiveShadow=!1}let a=new qi("#ffb35a",12,13,2);a.position.set(.12,.4,.08),a.visible=!1,t.add(a);let o=document.createElement("canvas");o.width=o.height=64;let c=o.getContext("2d"),l=c.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(193,192,177,.18)"),l.addColorStop(.5,"rgba(193,192,177,.06)"),l.addColorStop(1,"rgba(193,192,177,0)"),c.fillStyle=l,c.fillRect(0,0,64,64);let h=new bi(o),u=[];for(let v=0;v<7;v++){let S=new Ma(new wr({map:h,transparent:!0,depthWrite:!1,opacity:.4}));S.position.set(0,1.35+v*.5,0),S.scale.setScalar(.5+v*.16),t.add(S),u.push(S)}let d=[];for(let v=0;v<28;v++)d.push(Math.sin(v*2.4)*.36,.25+v%9*.15,Math.cos(v*2.4)*.34);let f=new ze;f.setAttribute("position",new Ie(d,3));let g=new Un(f,new mn({color:"#ffd387",size:.026,transparent:!0,opacity:.75,depthWrite:!1,toneMapped:!1}));t.add(g);let x=ei(t,new cs([[0,0],[.23,0],[.3,.06],[.33,.24],[.35,.26]].map(v=>new ie(...v)),24),e.metal,[0,.51,0]);ei(t,new Mi(.34,.025,6,24),e.metal,[0,.77,0]).rotation.x=Math.PI/2,ei(t,new sn(.3,24),Ot("#ae733b"),[0,.755,0]).rotation.x=-Math.PI/2;for(let v of[-1,1])bo(t,e.metal,[[v*.29,.7,0],[v*.46,.77,0],[v*.44,.87,0],[v*.32,.83,0]],.023);for(let v of[0,2.1,4.2])xi(t,e.metal,[Math.cos(v)*.75,-.02,Math.sin(v)*.75],[0,1.24,0],.025);xi(t,e.metal,[0,1.24,0],[0,.8,0],.012);let m=xi(t,e.wood,[.1,.72,0],[.55,1.2,.1],.023),p=new Ue;p.name="Batched hearth stones and cookware";for(let v of[...t.children])v.isMesh&&!r.includes(v)&&v!==m&&p.add(v);return t.add(p),jn(p),p.traverse(v=>{v.isMesh&&(v.castShadow=v.receiveShadow=!0)}),{root:t,flames:r,smoke:u,light:a,pot:x,spoon:m,sparks:g}}var Ct=(s=0,e=0,t=0)=>new R(s,e,t),Ui=(s,e={})=>new xt({color:s,roughness:.92,...e});function Xn(s,e,t,i=[0,0,0],n=[1,1,1]){let r=new ke(e,t);return r.position.fromArray(i),r.scale.fromArray(n),r.castShadow=r.receiveShadow=!0,s.add(r),r}function kd(s,e,t,i){return Xn(s,new Jt(1,14,10),e,t,i)}function Jm(s,e,t,i){return Xn(s,new Mt(1,1,1),e,t,i)}function Od(s,e,t,i,n){let r=Ct(...i).sub(Ct(...t)),a=Xn(s,new wt(n,n,r.length(),10),e,Ct(...t).add(Ct(...i)).multiplyScalar(.5).toArray());return a.quaternion.setFromUnitVectors(Ct(0,1,0),r.normalize()),a}function xo(s,e,t,i){let n;if(s.traverse(a=>{a.isBone&&a.name.startsWith(e)&&(n=a)}),!n)return;s.updateMatrixWorld(!0);let r=i.clone().applyQuaternion(s.getWorldQuaternion(new Je)).applyQuaternion(n.parent.getWorldQuaternion(new Je).invert());n.quaternion.premultiply(new Je().setFromAxisAngle(r,t)),s.updateMatrixWorld(!0)}var Yl=class{constructor(e,t,{reduced:i=!1,onWake:n,getDusk:r,setDusk:a,playMusic:o,endMusic:c,musicState:l,toggleMusic:h}={}){this.e=e,this.kit=t,this.reduced=i,this.onWake=n,this.getDusk=r,this.setDusk=a,this.playMusic=o,this.endMusic=c,this.musicState=l,this.toggleMusic=h,this.keys=new Set,this.active=!1,this.root=new Ue,this.root.name="Mountain lake overnight",e.scene.add(this.root),this.build()}build(){this.wood=Ui("#9a6138"),this.cream=Ui("#eddfb7"),this.fur=Ui("#65412d"),this.dark=Ui("#302a26"),this.green=Ui("#426b50"),this.red=Ui("#a64432"),this.boat=new Ue,this.boat.name="Borrowable canoe",this.root.add(this.boat),this.boat.position.set(27,-.04,-67);let e=[],t=[],i=[[.08,-.2],[.65,-.02],[.82,.34],[.71,.34],[.52,.02]],n=40;i.forEach(([m,p])=>{for(let v=0;v<n;v++){let S=v/n*Math.PI*2;e.push(Math.sin(S)*m,p+Math.pow(Math.abs(Math.cos(S)),8)*.22,Math.cos(S)*2.25)}});for(let m=0;m<i.length-1;m++)for(let p=0;p<n;p++){let v=m*n+p,S=m*n+(p+1)%n,b=v+n,M=S+n;t.push(v,S,b,S,M,b)}let r=new ze;r.setAttribute("position",new Ie(e,3)),r.setIndex(t),r.computeVertexNormals(),Xn(this.boat,r,Ui("#a74932",{side:ot})),Jm(this.boat,this.wood,[0,.01,0],[1,.07,3.4]);for(let m of[-.8,.85])Jm(this.boat,this.cream,[0,.32,m],[1.25,.08,.35]);this.paddle=new Ue,this.paddle.position.set(.95,.7,.2),this.boat.add(this.paddle),Od(this.paddle,this.wood,[0,-.9,0],[0,.8,0],.025),kd(this.paddle,this.cream,[0,-1,0],[.14,.3,.035]),this.paddle.rotation.z=-.5,this.rider=Ki(this.kit.instances.get("hero")),this.rider.name="Seated canoe guest",this.rider.position.set(0,-.65,.85),this.rider.rotation.set(0,Math.PI,0),this.boat.add(this.rider);for(let m of["L","R"])xo(this.rider,"thigh_"+m,-1.2,Ct(1,0,0)),xo(this.rider,"shin_"+m,1.35,Ct(1,0,0)),xo(this.rider,"upper_arm_"+m,-.6,Ct(1,0,0)),xo(this.rider,"forearm_"+m,-.8,Ct(1,0,0));this.rider.visible=!1,this.riderHands={},this.riderArms={},this.rider.traverse(m=>{for(let p of["L","R"])m.isBone&&m.name==="hand_"+p&&(this.riderHands[p]=m),m.isBone&&m.name==="upper_arm_"+p&&(this.riderArms[p]={bone:m,q:m.quaternion.clone()})}),this.camp=new Ue,this.camp.name="Sasquatch Cove",this.camp.position.set(-18,0,-128),this.root.add(this.camp);let a=Ui("#b1a27a"),o=Ui("#566b45"),c=Ui("#7b8070");kd(this.camp,a,[0,-.75,0],[15,1.2,15]),Xn(this.camp,new wt(12,14,1,48),o,[0,-.05,-2]);let l=qm(),h=[];for(let m=0;m<18;m++){let p=Math.PI*(.05+m/17*.9),v=13+m%3;h.push([Math.cos(p)*v,.25,-Math.sin(p)*v-1,.78+m%5*.12])}Jl(this.camp,h);let u=[];for(let m=0;m<80;m++){let p=-140+m*3.5;p>-36&&p<1||u.push([p,-.2,-137+Math.sin(p*.13)*3,.5+m%5*.13])}Jl(this.root,u);let d=this.kit.instances.get("kit_tree_pine");if(d){for(let m of d.children)m.visible=!1;Jl(d,[[0,0,0,.8]])}for(let m=0;m<5;m++)Xn(this.camp,new rn(9+m%2*4,16+m%3*6,5),Ui(m%2?"#6a7970":"#536968"),[-23+m*11,4,-24-m%2*4]);let f=Km(this.camp,l);this.fire=f.root,this.flames=f.flames,this.smoke=f.smoke,this.fireLight=f.light,this.pot=f.pot,this.spoon=f.spoon,this.sparks=f.sparks;for(let m of[-2.8,2.5])Xn(this.camp,new Jt(.2,16,8,0,Math.PI*2,Math.PI/2,Math.PI/2),this.cream,[m,.83,2]),Xn(this.camp,new sn(.17,16),Ui("#b77938"),[m,.84,2]).rotation.x=-Math.PI/2,kd(this.camp,this.cream,[m+.35,.85,2],[.18,.11,.13]);for(let[m,p]of[[-3,2],[2,2]])Od(this.camp,this.wood,[m-1,.55,p],[m+1,.55,p],.3);this.bed=Xm(this.camp,l).bed,this.bigfoot=jm(this.camp,l),this.walker=Ki(this.kit.instances.get("hero")),this.walker.position.set(0,.45,8),this.walker.rotation.set(0,Math.PI,0),this.camp.add(this.walker),this.walker.visible=!1,this.campMixer=new ks(this.walker);let g=this.kit.libraries.get("player_jam").animations;this.walkAction=this.campMixer.clipAction(g.find(m=>m.name==="walk")),this.idleAction=this.campMixer.clipAction(g.find(m=>m.name==="idle")),this.idleAction.play(),this.stick=new Ue,this.stick.position.set(-2,.65,2.4),this.camp.add(this.stick),Od(this.stick,this.wood,[0,0,0],[1.3,.3,-1.4],.023),this.mallow=Xn(this.stick,new wt(.1,.1,.16,12),Ui("#fff0cf"),[1.3,.3,-1.4]),this.stick.visible=!1;let x=new Ue;for(let m of[...this.camp.children])m.isMesh&&!m.isSkinnedMesh&&x.add(m);this.camp.add(x),jn(x),this.grass=Fm(this.camp)}open(e){this.ui=e,this.playMusic?.(),this.journey=new Xl,this.previousDusk=this.getDusk?.()||0,this.setDusk?.(.35),this.active=!0,this.fireLight.visible=!0,this.keys.clear(),this.rider.visible=!0,this.walker.visible=!1,this.stick.visible=!1,this.boat.position.set(27,-.04,-67),this.boat.rotation.set(0,0,0),this.walker.position.set(0,.45,8),this.lastPhase=null,this.rowSide=1,this.render()}render(){let e=this.journey,t=e.phase;this.e.campNight={paddle:0,meet:.25,dinner:.65,secret:.7,roast:.85,bed:.9,sleep:1}[t]||0;let i=this.ui.querySelector("h2"),n=this.ui.querySelector("#playHint"),r=this.ui.querySelector("#playDock"),a={paddle:["The long way across","A curl of campfire smoke rises below the mountains. Row toward it."],meet:["Someone lives here","Follow the woodsmoke. Walk over to your very tall neighbor."],dinner:["Dinner for two","\u201CYou brought an appetite, right? Give that stew a stir.\u201D"],secret:["A very small secret","Sasquatch: \u201CDon\u2019t tell anyone about me, haha. I like it quiet here.\u201D"],roast:["One more before bed","Hold your marshmallow over the fire. Pull it away when it turns golden."],bed:["Under the pines","\u201CBest campsite on the lake. Your bed is under the little canvas roof.\u201D"],sleep:["Goodnight, Sasquatch","Crickets, a crackling fire, and absolutely no photographic evidence."]}[t];a&&(i.textContent=a[0],n.textContent=a[1]);let o={paddle:'<p id="tripProgress"></p><div class="play-actions"><button id="rowLeft">Row left</button><button id="rowRight">Row right</button><button id="beachBoat" hidden>Beach the canoe</button></div><small>Tap the paddles, or hold W / \u2191 for steady strokes. A / D switches paddle side. The current guides you into the cove.</small>',meet:'<p id="campHint">WASD / arrows to walk \xB7 E to say hello</p><div class="play-actions"><button data-walk="forward">Walk forward</button><button data-walk="left">Left</button><button data-walk="right">Right</button><button data-walk="back">Back</button><button id="campAction" disabled>Say hello</button></div>',dinner:'<p>A pot of vegetable stew bubbles over the fire.</p><button id="stirPot">Stir the stew \xB7 0 / 6</button>',secret:'<p>You share warm bowls of stew, some bread, and an excellent view. He seems relieved that you didn\u2019t ask for a selfie.</p><button id="keepSecret">Your secret is safe with me</button>',roast:'<p id="roastHint" role="status"></p><div class="play-actions"><button id="holdMallow" aria-pressed="false">Hold over the fire</button><button id="eatMallow" disabled>Eat marshmallow</button><button id="freshMallow">Fresh marshmallow</button></div><small>Space also holds the stick. Golden takes about five seconds; blackened takes eight.</small>',bed:'<p id="campHint">Walk to the tent entrance to go to bed.</p><div class="play-actions"><button data-walk="forward">Walk forward</button><button data-walk="left">Left</button><button data-walk="right">Right</button><button data-walk="back">Back</button><button id="campAction" disabled>Go to bed</button></div>',sleep:'<div class="trip-night"><span>\u2726 \xB7 \u2727 \xB7 \u2726</span><h3>A secret worth keeping.</h3><p>You drift off beneath the pines\u2026</p><button id="wakeUp" hidden>Wake up at the festival</button></div>'};r.innerHTML=(o[t]||"")+"<div class=camp-music><span id=campMusicStatus role=status>Moonlit Cabin Hush</span><button id=campMusicButton>Pause music</button></div>",r.querySelector("#campMusicButton").onclick=()=>this.toggleMusic?.(),this.lastPhase=t,this.ui.dataset.tripPhase=t;let c=(l,h)=>{let u=this.ui.querySelector("#"+l);u&&(u.onclick=h)};c("rowLeft",()=>this.stroke(-1)),c("rowRight",()=>this.stroke(1)),c("beachBoat",()=>{e.beach()&&(this.rider.visible=!1,this.walker.visible=!0,this.setDusk?.(.65),this.render())}),c("campAction",()=>this.interact()),c("stirPot",()=>{e.stir(),this.spoon.rotation.y+=1,this.ui.querySelector("#stirPot").textContent=`Stir the stew \xB7 ${e.stirs} / 6`,e.phase!==t&&this.render()}),c("keepSecret",()=>{e.promise(),this.stick.visible=!0,this.setDusk?.(.9),this.render()}),c("holdMallow",()=>{e.held=!e.held}),c("freshMallow",()=>e.fresh()),c("eatMallow",()=>{e.bite()&&(this.stick.visible=!1,this.walker.position.set(-2,.45,3),this.render())}),c("wakeUp",()=>{e.wake()&&this.onWake?.()}),this.ui.querySelectorAll("[data-walk]").forEach(l=>{let h={forward:"KeyW",back:"KeyS",left:"KeyA",right:"KeyD"}[l.dataset.walk];l.onpointerdown=u=>{u.preventDefault(),l.setPointerCapture(u.pointerId),this.keys.add(h)},l.onpointerup=l.onpointercancel=l.onlostpointercapture=()=>this.keys.delete(h)})}stroke(e){this.journey.stroke()&&(this.rowSide=e,this.rowAt=this.t||0)}interact(){let e=this.journey,t=e.phase==="meet"?Ct(2,.45,-2):Ct(mo.x,.45,mo.z);this.walker.position.distanceTo(t)>(e.phase==="bed"?1.25:2.5)||(e.phase==="meet"?(e.meet(),this.walker.position.set(-3,.45,3.05),this.render()):e.phase==="bed"&&e.sleep()&&(this.walker.visible=!1,this.setDusk?.(1),this.render()))}key(e,t){if(this.active){if(e.code==="Space"){e.preventDefault(),this.journey.phase==="roast"&&(this.journey.held=t);return}e.code==="KeyE"&&t&&!e.repeat&&this.interact(),["KeyW","KeyA","KeyS","KeyD","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(e.code)&&(e.preventDefault(),t?this.keys.add(e.code):this.keys.delete(e.code))}}update(e,t){if(!this.active)return;let i=this.musicState?.();if(i){let a=i.status==="playing"?"Pause music":i.status==="loading"?"Cancel loading":i.status==="error"?"Retry music":"Play music",o=this.ui.querySelector("#campMusicButton");o.textContent!==a&&(o.textContent=a);let c=this.ui.querySelector("#campMusicStatus"),l="Moonlit Cabin Hush \xB7 "+i.status;c.textContent!==l&&(c.textContent=l)}this.t=t;let n=this.journey;n.step(e);let r=this.camp.position;if(n.phase==="paddle"){(this.keys.has("KeyW")||this.keys.has("ArrowUp"))&&this.stroke(this.rowSide*-1),(this.keys.has("KeyA")||this.keys.has("ArrowLeft"))&&this.stroke(-1),(this.keys.has("KeyD")||this.keys.has("ArrowRight"))&&this.stroke(1);let a=n.distance/78,o=Ct(-18,-.04,-115);this.boat.position.lerpVectors(Ct(27,-.04,-67),o,a);let c=this.reduced?0:Math.sin(t*1.8)*.035;this.boat.position.y+=c,this.boat.rotation.y=Math.atan2(45,48),this.boat.rotation.z=this.reduced?0:Math.sin(t)*.015;let l=Math.max(0,1-(t-(this.rowAt||0))/.65);for(let d of Object.values(this.riderArms))d.bone.quaternion.copy(d.q);let h=this.rowSide<0?"L":"R";xo(this.rider,"upper_arm_"+h,l*.5,Ct(1,0,0)),this.paddle.rotation.set(l*.5,0,this.rowSide*-.5);let u=this.riderHands[h];if(u){this.boat.updateMatrixWorld(!0);let d=this.boat.worldToLocal(u.localToWorld(Ct(0,.055,0)));this.paddle.position.copy(d).sub(Ct(0,.45,0).applyQuaternion(this.paddle.quaternion))}this.ui.querySelector("#tripProgress").textContent=`Across the lake \xB7 ${Math.round(a*100)}% \xB7 ${n.strokes} paddle strokes`,this.ui.querySelector("#beachBoat").hidden=a<.995,this.e.setCamera(this.boat.position.clone().add(Ct(6,4.2,7)).toArray(),this.boat.position.clone().add(Ct(-1,.7,-2)).toArray())}else if(n.phase==="meet"||n.phase==="bed"){let a=(this.keys.has("KeyD")||this.keys.has("ArrowRight")?1:0)-(this.keys.has("KeyA")||this.keys.has("ArrowLeft")?1:0),o=(this.keys.has("KeyS")||this.keys.has("ArrowDown")?1:0)-(this.keys.has("KeyW")||this.keys.has("ArrowUp")?1:0),c=Math.hypot(a,o)||1;Nm(this.walker.position,a/c*Math.min(e,.1)*2.5,o/c*Math.min(e,.1)*2.5),(a||o)&&(this.walker.rotation.y=Math.atan2(a,o));let l=!!(a||o);l!==this.walking&&(this.walking=l,(l?this.idleAction:this.walkAction).stop(),(l?this.walkAction:this.idleAction).reset().play()),this.campMixer.update(e);let h=n.phase==="meet"?Ct(2,.45,-2):Ct(mo.x,.45,mo.z),u=this.walker.position.distanceTo(h)<(n.phase==="bed"?1.25:2.5);this.ui.querySelector("#campAction").disabled=!u,this.ui.querySelector("#campHint").textContent=u?"E or the button to "+(n.phase==="meet"?"say hello.":"go to bed."):`${n.phase==="meet"?"Sasquatch":"Sleeping bag"} \xB7 ${Math.round(this.walker.position.distanceTo(h))} m \xB7 WASD / arrows to walk`;let d=r.clone().add(this.walker.position);this.e.setCamera(d.clone().add(Ct(0,5,8)).toArray(),d.clone().add(Ct(0,.7,-2)).toArray())}else this.e.setCamera(r.clone().add(Ct(-1,3.6,8)).toArray(),r.clone().add(Ct(.2,1.2,-1)).toArray());if(n.phase==="roast"){this.e.setCamera(r.clone().add(Ct(-2,2.4,4.5)).toArray(),r.clone().add(Ct(.3,1.25,-.6)).toArray());let a=n.heat>8,o=n.heat>=5&&!a;this.ui.querySelector("#roastHint").textContent=a?"A little too crispy! Try a fresh one.":o?"Golden! Pull it away and take a bite.":`Toasting \xB7 ${Math.round(n.heat/5*100)}%`;let c=this.ui.querySelector("#holdMallow");c.textContent=n.held?"Pull away from the fire":"Hold over the fire",c.setAttribute("aria-pressed",String(n.held)),this.ui.querySelector("#eatMallow").disabled=n.held||!o,this.mallow.material.color.set(a?"#403126":o?"#c99043":"#fff0cf"),this.stick.rotation.y=n.held?0:-.65}n.phase==="sleep"&&(this.ui.querySelector("#wakeUp").hidden=n.night<3),this.reduced||(this.smoke.forEach((a,o)=>{a.position.x=Math.sin(t*.3+o)*.2+o*.03}),this.flames.forEach((a,o)=>a.scale.y=.8+Math.sin(t*5+o)*.14),this.bigfoot.rotation.z=Math.sin(t*.7)*.008,this.sparks.rotation.y=t*.18,this.sparks.position.y=(Math.sin(t*.7)+1)*.12),this.fireLight.intensity=n.phase==="paddle"?4:8}close(){this.active&&(this.endMusic?.(),this.active=!1,this.e.campNight=0,this.fireLight.visible=!1,delete this.ui.dataset.tripPhase,this.keys.clear(),this.journey.held=!1,this.rider.visible=!1,this.walker.visible=!1,this.stick.visible=!1,this.boat.position.set(27,-.04,-67),this.boat.rotation.set(0,0,0),this.setDusk?.(this.previousDusk))}};var MS=[{id:"kick",title:"Give the world a little nudge",clue:"A globe is waiting at someone\u2019s feet. Three rings, one good kick at a time.",place:"Look on the lawn just inside the festival entrance."},{id:"aid",title:"A friend could use a hand",clue:"Someone at the Reboot Clinic has lost their spark. Match the missing pieces and help them wake up.",place:"Find the red-striped Reboot Clinic tent on the right."},{id:"maker",title:"Make something useful",clue:"A thirsty guest. A missing bag. A little light. The right ingredients make someone\u2019s day.",place:"Try the jars at the large cream tent in the middle."}];function Ym(s){return`<p>The headliner is waiting for three little acts of kindness. Explore the festival and follow these clues in any order.</p><div class="festival-clues">${MS.map(e=>`<article class="${s.includes(e.id)?"clue-done":""}"><strong>${s.includes(e.id)?"\u2713":"\u25C7"} ${e.title}</strong><p>${s.includes(e.id)?"You made it happen.":e.clue}</p><small>${e.place}</small></article>`).join("")}</div><p class="callout">${s.length===3?"All three lights are on. Follow the path behind the tents to the main stage. Your concert is ready.":"Three completed challenges bring everyone together for One Island One View at the main stage."}</p><p>A different kind of secret waits at Lantern Pier. Someone left a canoe by the dock\u2026</p>`}var wS=[{id:"water",title:"Help a thirsty guest",prompt:"Bring water",context:["Thirsty guest","Dry tree"],tool:["Cup","Big watering can"],success:"A drink for our guest!",missing:"The tree got a drink. Add who needs help.",wrongContext:"Happy tree. Still-thirsty guest!",wrongTool:"That is a lot of watering can. Try a cup."},{id:"backpack",title:"Return the teal backpack",prompt:"Find a backpack",context:["Teal backpack","Red backpack"],tool:["Lost-property map","Leaf blower"],success:"Their backpack is back!",missing:"Two bags. Whose is it? Add the color.",wrongContext:"Nice bag. Wrong color!",wrongTool:"The leaves moved. The backpack did not."},{id:"stage",title:"Get the stage ready",prompt:"Light the stage",context:["Stage at dusk","Picnic table"],tool:["Stage switch","Flashlight"],success:"The stage is ready. Let\u2019s dance!",missing:"A lovely picnic light. Add where to shine.",wrongContext:"The picnic looks lovely. The stage is dark.",wrongTool:"One tiny spotlight. Try the stage switch."}];function ES(s){return[{id:"prompt",kind:"prompt",name:s.prompt,color:"#ed7850",symbol:"\u2726"},{id:"context0",kind:"context",name:s.context[0],color:"#a08ada",symbol:"\u25CE"},{id:"context1",kind:"context",name:s.context[1],color:"#a08ada",symbol:"\u25CE"},{id:"tool0",kind:"tool",name:s.tool[0],color:"#32afab",symbol:"\u2699"},{id:"tool1",kind:"tool",name:s.tool[1],color:"#32afab",symbol:"\u2699"}]}var Bd=class{constructor(){this.index=0,this.recipe={},this.phase="choose",this.solved=0,this.attempts=0}get challenge(){return wS[this.index]}get jars(){return ES(this.challenge)}add(e){if(this.phase!=="choose")return!1;let t=this.jars.find(i=>i.id===e);return t?(this.recipe[t.kind]=e,!0):!1}remove(e){return this.phase!=="choose"?!1:(delete this.recipe[e],!0)}run(){if(this.phase!=="choose"||!this.recipe.prompt)return null;this.phase="running",this.attempts++;let e=this.recipe;return this.outcome=e.context?e.context!=="context0"?"context":e.tool!=="tool0"?"tool":"success":"missing",this.outcome}settle(){return this.phase!=="running"?!1:(this.phase=this.outcome==="success"?"success":"choose",this.phase==="success"&&this.solved++,!0)}next(){return this.phase!=="success"?!1:this.index===2?(this.phase="complete",!0):(this.index++,this.recipe={},this.phase="choose",!0)}},Ye=(...s)=>new R(...s),vi=(s,e={})=>new xt({color:s,roughness:.65,...e});function Kn(s,e,t,i,n){let r=new ke(new Mt(...t),n);return r.name=e,r.position.fromArray(i),r.castShadow=r.receiveShadow=!0,s.add(r),r}function ti(s,e,t,i,n,r,a){let o=new ke(new wt(t,i,n,24),a);return o.name=e,o.position.fromArray(r),o.castShadow=o.receiveShadow=!0,s.add(o),o}function eg(s,e="#234b45",t="#fff1ce",i=512,n=160){let r=document.createElement("canvas");r.width=i,r.height=n;let a=r.getContext("2d");a.fillStyle=t,a.fillRect(0,0,i,n),a.fillStyle=e,a.textAlign="center",a.textBaseline="middle",a.font="bold 44px Trebuchet MS";let o=s.split(" "),c="",l=[];for(let u of o)a.measureText(c+" "+u).width>i-30&&c?(l.push(c),c=u):c+=(c?" ":"")+u;l.push(c),l.forEach((u,d)=>a.fillText(u,i/2,n/2+(d-(l.length-1)/2)*49));let h=new bi(r);return h.colorSpace=at,new zt({map:h,side:ot})}function Ud(s,e,t,i,n){let r=new ke(new Ht(...t),eg(e,n));return r.position.fromArray(i),s.add(r),r}function Zl(s,e,t){let i=s.libraries.get(e).scene,n;if(i.traverse(a=>{a.userData.asset_id===t&&(n=a)}),n??=i.getObjectByName(t),!n)throw Error("Missing mixer asset "+t);let r=Ki(n);return r.position.set(0,0,0),r.rotation.set(0,0,0),r.traverse(a=>{a.isMesh&&(a.castShadow=a.receiveShadow=!0,a.isSkinnedMesh&&(a.frustumCulled=!1))}),r}function Zm(s){let e={};return s.traverse(t=>{if(t.isBone)for(let i of["upper_arm_L","upper_arm_R","forearm_L","forearm_R","head","hand_R","hand_L","thigh_L","thigh_R","shin_L","shin_R"])t.name.startsWith(i)&&(e[i]={bone:t,q:t.quaternion.clone()})}),e}function ai(s,e,t,i,n=Ye(0,0,1)){let r=e[t];if(!r)return;let a=r.bone.parent.getWorldQuaternion(new Je);n.applyQuaternion(s.getWorldQuaternion(new Je)).applyQuaternion(a.invert()),r.bone.quaternion.premultiply(new Je().setFromAxisAngle(n,i)),r.bone.updateWorldMatrix(!1,!0)}function $m(s,e){return s.worldToLocal(e.localToWorld(Ye(0,.055,0)))}function Qm(s,e,t){s.position.copy(e).sub(t.clone().multiply(s.scale).applyQuaternion(s.quaternion))}function TS(s,e,t,i,n){let r=s.worldToLocal(e.localToWorld(t.clone())),a=r.clone().lerp(i,n);return a.y=r.y+(i.y-r.y)*n*n,a}var $l=class{constructor(e,t,{reduced:i=!1,onComplete:n=()=>{},onWin:r=()=>{},onPour:a=()=>{}}={}){this.e=e,this.kit=t,this.reduced=i,this.onComplete=n,this.onWin=r,this.onPour=a,this.active=!1,this.root=new Ue,this.root.name="SkillMixingBooth",e.scene.add(this.root),this.root.visible=!1,this.build(),this.ray=new Wn,this.pointer=new ie,this.plane=new ni(Ye(0,0,1),-2.5),this.hit=Ye(0,0,0),this.dragId=null,e.canvas.addEventListener("pointerdown",o=>this.down(o),!0),e.canvas.addEventListener("pointermove",o=>this.move(o),!0),e.canvas.addEventListener("pointerup",o=>this.up(o),!0),e.canvas.addEventListener("pointercancel",()=>this.cancel(),!0),e.canvas.addEventListener("lostpointercapture",()=>this.cancel(),!0)}build(){let e=vi("#98704a"),t=vi("#f4dfae"),i=vi("#246c66"),n=vi("#dfad49",{metalness:.3}),r=vi("#21423d");Kn(this.root,"Mixing bench",[3.5,.13,1.65],[0,.79,2.55],e);for(let f of[-1.45,1.45])for(let g of[1.95,3.1])Kn(this.root,"Bench leg",[.12,.73,.12],[f,.36,g],e);this.machine=new Ue,this.machine.name="Skill mixing machine",this.machine.position.set(0,.85,1.95),this.root.add(this.machine),ti(this.machine,"Mixer foot",.44,.5,.13,[0,.065,0],r),ti(this.machine,"Canvas mixer body",.37,.37,.48,[0,.33,0],i),ti(this.machine,"Open funnel",.48,.25,.25,[0,.695,0],n),ti(this.machine,"Funnel opening",.405,.405,.015,[0,.825,0],r),this.liquid=ti(this.machine,"Glowing mixture",.34,.34,.015,[0,.83,0],vi("#64d6bc",{emissive:"#41b38d",emissiveIntensity:.4})),Ud(this.machine,"TRY A SKILL",[.59,.18],[0,.37,.377]),this.handle=new Ue,this.handle.position.set(.42,.38,0),this.machine.add(this.handle),Kn(this.handle,"Crank",[.23,.05,.05],[.09,0,0],n),Kn(this.handle,"Crank grip",[.065,.22,.065],[.2,.1,0],e),this.stream=ti(this.root,"Pouring ingredient",.028,.028,.7,[0,1.95,1.95],vi("#ed7850",{emissive:"#ed7850",emissiveIntensity:.3})),this.stream.visible=!1,this.bubbles=Array.from({length:10},(f,g)=>{let x=new ke(new Cr(.035+g%3*.012,1),vi(["#ed7850","#a08ada","#32afab"][g%3],{emissive:["#ed7850","#a08ada","#32afab"][g%3],emissiveIntensity:.15}));return this.root.add(x),x}),this.jars=[];for(let f=0;f<5;f++){let g=new Ue;g.name="Ingredient jar "+f,g.position.set((f-2)*.64,.86,3.02),g.userData.jarIndex=f,g.userData.home=g.position.clone(),this.root.add(g);let x=["#ed7850","#a08ada","#a08ada","#32afab","#32afab"][f];ti(g,"Glazed jar",.21,.2,.39,[0,.205,0],vi(x)),ti(g,"Glass shoulder",.17,.21,.09,[0,.445,0],vi("#e3ead1",{transparent:!0,opacity:.55})),ti(g,"Cork lid",.17,.17,.075,[0,.518,0],e);let m=new ke(new Mi(.207,.012,6,24),t);m.rotation.x=Math.PI/2,m.position.y=.06,g.add(m);let p=Ud(g,"",[.38,.2],[0,.22,.211]);g.userData.face=p,this.jars.push(g)}this.workbench=new Ue,this.workbench.name="Mixing workbench";for(let f of[...this.root.children])this.workbench.add(f);this.root.add(this.workbench),this.helper=Zl(this.kit,"crowd_kit","crowd_1"),this.helper.name="Mixer helper",this.root.add(this.helper),this.helperBones=Zm(this.helper),this.guest=Zl(this.kit,"crowd_kit","crowd_5"),this.guest.name="Guest who needs help",this.root.add(this.guest),this.guestBones=Zm(this.guest),this.tree=new Ue,this.tree.position.set(-1.35,0,-.7),this.root.add(this.tree),ti(this.tree,"Sapling pot",.25,.17,.35,[0,.175,0],e),ti(this.tree,"Sapling trunk",.035,.06,.9,[0,.75,0],e);for(let[f,g,x]of[[0,1.35,0],[-.22,1.12,.04],[.24,1.06,.03]]){let m=new ke(new Cr(.34,1),vi("#6f9559"));m.position.set(f,g,x),m.scale.y=1.25,this.tree.add(m)}this.tealPack=Zl(this.kit,"props_kit","backpack_teal"),this.redPack=Zl(this.kit,"props_kit","backpack_rust"),this.root.add(this.tealPack,this.redPack);for(let f of[this.tealPack,this.redPack]){let g=new ke(new Mi(.055,.012,6,16),r);g.name="Backpack carry handle",g.position.set(0,.49,0),g.scale.y=.7,f.add(g)}this.stage=new Ue,this.stage.position.set(.9,0,-.8),this.root.add(this.stage),Kn(this.stage,"Small stage",[1.7,.22,1.15],[0,.11,0],e);for(let f of[-.75,.75])Kn(this.stage,"Stage light pole",[.045,1.9,.045],[f,.95,-.5],n);Ud(this.stage,"PROMPTSTOCK",[1.45,.3],[0,1.7,-.46]);let a=new gi(new ze().setFromPoints([Ye(-.75,1.9,-.5),Ye(0,1.72,-.5),Ye(.75,1.9,-.5)]),new Di({color:"#554a38"}));this.stage.add(a),this.stageBulbs=Array.from({length:5},(f,g)=>{let x=new ke(new Jt(.055,10,8),vi("#8c8966",{emissive:"#ffcf6b",emissiveIntensity:0}));return x.position.set((g-2)*.31,1.73+Math.abs(g-2)*.065,-.5),this.stage.add(x),x}),this.picnic=new Ue,this.picnic.position.set(-1.5,0,-1),this.root.add(this.picnic),Kn(this.picnic,"Picnic table",[.9,.08,.6],[0,.5,0],e),Kn(this.picnic,"Picnic leg",[.12,.5,.12],[0,.25,0],e),this.picnicLamp=ti(this.picnic,"Picnic lantern",.085,.085,.15,[0,.63,0],vi("#edc55e",{emissive:"#ffd76b",emissiveIntensity:0})),this.carried=new Ue,this.root.add(this.carried),this.cup=new Ue,this.carried.add(this.cup),ti(this.cup,"Cup",.062,.047,.115,[0,0,0],t),ti(this.cup,"Water surface",.052,.052,.004,[0,.053,0],vi("#6caaa8"));let o=new ke(new Mi(.035,.01,6,16),n);o.position.x=.065,this.cup.add(o),this.can=new Ue,this.carried.add(this.can),this.can.scale.setScalar(.65),ti(this.can,"Oversized watering can",.31,.29,.48,[0,0,0],i);let c=ti(this.can,"Can spout",.07,.09,.55,[.4,.06,0],i);c.rotation.z=-1;let l=new ke(new Mi(.29,.04,6,20),n);l.position.set(-.22,.15,0),this.can.add(l),this.blower=new Ue,this.carried.add(this.blower),Kn(this.blower,"Leaf blower",[.3,.22,.24],[0,0,0],i);let h=ti(this.blower,"Blower tube",.075,.12,.7,[.37,0,0],r);h.rotation.z=Math.PI/2,this.flashlight=new Ue,this.carried.add(this.flashlight);let u=ti(this.flashlight,"Flashlight",.09,.065,.3,[0,0,0],i);u.rotation.z=Math.PI/2;let d=new ke(new rn(.22,.95,20,1,!0),new zt({color:"#fff1a7",transparent:!0,opacity:.12,depthWrite:!1,side:ot}));d.rotation.z=Math.PI/2,d.position.x=.65,this.flashlight.add(d),this.drops=Array.from({length:9},()=>{let f=new ke(new Jt(.028,8,6),vi("#7bdcdd"));return this.root.add(f),f})}open(e){this.ui=e,this.puzzle=new Bd,this.active=!0,this.root.visible=!0,this.pouring=null,this.elapsed=0,this.completed=!1,this.e.canvas.style.touchAction="none",this.e.canvas.style.cursor="grab",this.refreshChallenge()}refreshChallenge(){this.resultView=!1,this.reveal=0,this.workbench.visible=!0,this.elapsed=0,this.pouring=null,this.stream.visible=!1,this.jars.forEach((e,t)=>{let i=e.userData.face;i.material.map?.dispose(),i.material.dispose(),i.material=eg(this.puzzle.jars[t].name,"#234b45","#fff1ce",512,270),e.position.copy(e.userData.home),e.rotation.set(0,0,0)}),this.resetScene(),this.ui.querySelector("#playHint").textContent=this.puzzle.challenge.title,this.renderControls()}resetScene(){this.helper.position.set(-1.15,0,.05),this.helper.rotation.set(0,0,0),this.guest.position.set(1,0,0),this.guest.rotation.set(0,0,0),this.tree.visible=this.puzzle.index===0,this.tealPack.visible=this.redPack.visible=this.puzzle.index===1,this.tealPack.position.set(.1,0,-.5),this.redPack.position.set(-.65,0,-.6),this.stage.visible=this.picnic.visible=this.puzzle.index===2,this.stageBulbs.forEach(e=>e.material.emissiveIntensity=0),this.picnicLamp.material.emissiveIntensity=0,this.tealPack.rotation.set(0,0,0),this.redPack.rotation.set(0,0,0),this.carried.visible=!1,this.cup.visible=this.can.visible=this.blower.visible=this.flashlight.visible=!1,this.drops.forEach(e=>e.visible=!1)}renderControls(){let e=this.puzzle.challenge;this.ui.querySelector("#playDock").innerHTML=`<div class="mix-top"><strong>Experiment ${this.puzzle.index+1} / 3</strong><span id="mixStatus" role="status">Pick up a jar. Pour it into the funnel.</span></div><div class="mix-jars">${this.puzzle.jars.map((t,i)=>`<button data-jar="${t.id}" style="--jar:${t.color}" aria-label="Pour ${t.name}"><small>${t.kind}</small><strong>${t.name}</strong><kbd>${i+1}</kbd></button>`).join("")}</div><div class="mix-bottom"><div class="mix-recipe">${["prompt","context","tool"].map(t=>`<button data-remove="${t}" aria-label="Remove ${t}" disabled>${t} +</button>`).join("")}</div><button id="mixRun" class="primary" disabled>Mix & try</button><button id="mixNext" hidden>Next challenge \u2192</button></div>`,this.ui.querySelectorAll("[data-jar]").forEach(t=>t.onclick=()=>this.pour(t.dataset.jar)),this.ui.querySelectorAll("[data-remove]").forEach(t=>t.onclick=()=>{this.pouring||(this.puzzle.remove(t.dataset.remove),this.sync())}),this.ui.querySelector("#mixRun").onclick=()=>this.run(),this.ui.querySelector("#mixNext").onclick=()=>this.next(),this.sync()}say(e){let t=this.ui?.querySelector("#mixStatus");t&&(t.textContent=e)}sync(){if(!this.ui)return;let e=!!this.pouring||this.puzzle.phase!=="choose";this.ui.querySelectorAll("[data-jar]").forEach(i=>{i.disabled=e,i.setAttribute("aria-pressed",String(Object.values(this.puzzle.recipe).includes(i.dataset.jar)))}),this.ui.querySelectorAll("[data-remove]").forEach(i=>{let n=this.puzzle.recipe[i.dataset.remove],r=this.puzzle.jars.find(a=>a.id===n);i.textContent=r?r.name+" \xD7":i.dataset.remove+" +",i.disabled=e||!r}),this.ui.querySelector("#mixRun").disabled=e||!this.puzzle.recipe.prompt,this.ui.querySelector("#mixRun").hidden=this.puzzle.phase==="success";let t=this.ui.querySelector("#mixNext");t.hidden=this.puzzle.phase!=="success",t.textContent=this.puzzle.index===2?"Finish experiment \u2713":"Next challenge \u2192"}pour(e){return!this.active||this.pouring||this.puzzle.phase!=="choose"||!this.puzzle.add(e)?!1:(this.resultView=!1,this.resetScene(),this.pouring={index:this.puzzle.jars.findIndex(t=>t.id===e),time:0},this.onPour(),this.say("Pouring "+this.puzzle.jars[this.pouring.index].name.toLowerCase()+"\u2026"),this.sync(),!0)}run(){return this.pouring||!this.active||!this.puzzle.run()?!1:(this.elapsed=0,this.resetScene(),this.say("Let\u2019s see what happens\u2026"),this.sync(),!0)}next(){return!this.active||!this.puzzle.next()?!1:(this.puzzle.phase==="complete"?this.completed||(this.completed=!0,this.sync(),this.onComplete()):this.refreshChallenge(),!0)}camera(){let e=this.e.camera.aspect<.75,t=this.reveal||0,i=this.puzzle.index===0&&this.puzzle.outcome&&this.puzzle.outcome!=="success",n=Ye(0,e?4.2:3.6,e?10:7.65),r=Ye(i?-.4:.15,2.65,e?7.2:i?6:5.4);this.e.setCamera(n.lerp(r,t).toArray(),Ye(0,1,1.2).lerp(Ye(i?-.3:.25,.85,-.25),t).toArray()),this.workbench.visible=t<.45}point(e){let t=this.e.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.e.camera)}down(e){if(!this.active||this.pouring||this.puzzle.phase!=="choose"||e.button!==0)return;this.point(e);let t=this.ray.intersectObjects(this.jars,!0)[0];if(!t)return;let i=t.object;for(;i&&i.userData.jarIndex===void 0;)i=i.parent;i&&(this.dragIndex=i.userData.jarIndex,this.dragId=e.pointerId,this.dragStart=[e.clientX,e.clientY],this.dragged=!1,this.e.canvas.setPointerCapture(e.pointerId),e.preventDefault(),e.stopImmediatePropagation())}move(e){this.dragId===e.pointerId&&(e.preventDefault(),e.stopImmediatePropagation(),Math.hypot(e.clientX-this.dragStart[0],e.clientY-this.dragStart[1])>5&&(this.dragged=!0),this.dragged&&(this.point(e),this.ray.ray.intersectPlane(this.plane,this.hit)&&this.jars[this.dragIndex].position.set(pt.clamp(this.hit.x,-2,2),pt.clamp(this.hit.y-.2,.8,2.6),2.5)))}up(e){if(e.pointerId!==this.dragId)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.dragIndex,i=this.dragged;this.point(e);let n=this.machine.localToWorld(Ye(0,.83,0)).project(this.e.camera),r=this.e.canvas.getBoundingClientRect(),a=Math.hypot((this.pointer.x-n.x)*r.width/2,(this.pointer.y-n.y)*r.height/2);this.cancel(),!i||a<70?this.pour(this.puzzle.jars[t].id):this.say("Drop over the funnel, or tap a jar to pour.")}cancel(){let e=this.dragId;if(this.dragId=null,this.dragIndex!==void 0){let t=this.jars[this.dragIndex];t.position.copy(t.userData.home)}this.dragIndex=void 0,this.dragged=!1,e!==null&&this.e.canvas.hasPointerCapture?.(e)&&this.e.canvas.releasePointerCapture(e)}key(e){!this.active||e.repeat||(/^Digit[1-5]$/.test(e.code)&&(e.preventDefault(),this.pour(this.puzzle.jars[Number(e.code.at(-1))-1].id)),e.code==="Enter"&&!e.target.closest("button,input")&&(e.preventDefault(),this.puzzle.phase==="success"?this.next():this.run()))}update(e,t){if(!this.active)return;e=Math.max(0,Math.min(.1,Number.isFinite(e)?e:0)),this.reveal=pt.damp(this.reveal||0,this.resultView?1:0,this.reduced?100:6,e),this.camera();for(let n of[this.helperBones,this.guestBones])for(let r of Object.values(n))r.bone.quaternion.copy(r.q);if(this.pouring){let n=this.pouring;n.time+=e;let r=Math.min(1,n.time/(this.reduced?.18:1.15)),a=this.jars[n.index],o=a.userData.home,c=Math.sin(Math.PI*r);a.position.copy(o).lerp(Ye(-.25,2.02,1.95),Math.min(1,c*1.5)),a.rotation.z=c*-1.65,this.stream.visible=!this.reduced&&r>.25&&r<.75,this.stream.material.color.set(this.puzzle.jars[n.index].color),r===1&&(a.position.copy(o),a.rotation.z=0,this.pouring=null,this.stream.visible=!1,this.say("Ready to try? Missing ingredients are experiments too."),this.sync())}let i=this.puzzle.phase==="running";if(i){if(this.elapsed+=e,this.elapsed>1.1&&(this.resultView=!0),this.handle.rotation.x=this.reduced?0:this.elapsed*8,this.liquid.material.color.set(["#ed7850","#a08ada","#32afab"][Math.floor(this.elapsed*4)%3]),this.animateResult(this.elapsed,t),this.elapsed>5.2){this.puzzle.settle();let n=this.puzzle.challenge;this.say(this.puzzle.outcome==="success"?n.success:this.puzzle.outcome==="missing"?n.missing:this.puzzle.outcome==="context"?n.wrongContext:n.wrongTool),this.puzzle.outcome==="success"&&this.onWin(),this.sync(),this.puzzle.phase==="success"&&this.ui.querySelector("#mixNext")?.focus({preventScroll:!0})}}else this.resultView&&this.animateResult(5.2,t);this.bubbles.forEach((n,r)=>{n.visible=i&&!this.reduced&&this.elapsed<1.3,n.position.set(Math.sin(t*3+r)*.26,1.7+(t*1.5+r*.13)%1*.55,1.95+Math.cos(t*3+r)*.22)})}animateResult(e,t){let i=this.puzzle.outcome,n=this.puzzle.index,r=i==="success",a=pt.smoothstep(e,1.25,3.25),o=pt.smoothstep(e,3.25,4.25),c=this.reduced?0:Math.sin((e-3.25)*3)*Math.sin(Math.PI*o)*.07,l=n===0&&!r,h=n===0?l?Ye(-2.05,0,.5):Ye(-.15,0,.05):n===1?Ye(-.4,0,-.25):Ye(-.6,0,-.2);this.helper.position.lerpVectors(Ye(-1.15,0,.05),h,a),this.helper.rotation.y=l?.5*a:Math.sin(Math.PI*a)*.25,this.helper.position.y=0,this.guest.position.y=0,this.helper.updateWorldMatrix(!0,!0),this.guest.updateWorldMatrix(!0,!0);let u=this.reduced?0:Math.sin(a*Math.PI*4)*Math.sin(a*Math.PI)*.22;if(ai(this.helper,this.helperBones,"thigh_L",u,Ye(1,0,0)),ai(this.helper,this.helperBones,"thigh_R",-u,Ye(1,0,0)),ai(this.helper,this.helperBones,"shin_L",Math.max(0,-u)*.5,Ye(1,0,0)),ai(this.helper,this.helperBones,"shin_R",Math.max(0,u)*.5,Ye(1,0,0)),ai(this.helper,this.helperBones,"upper_arm_R",-.45*a*(1-o*.65),Ye(1,0,0)),ai(this.helper,this.helperBones,"forearm_R",-.8*a*(1-o*.65),Ye(1,0,0)),l&&(ai(this.helper,this.helperBones,"upper_arm_R",.45*a),ai(this.helper,this.helperBones,"upper_arm_R",-.5*a,Ye(1,0,0)),ai(this.helper,this.helperBones,"forearm_R",-.8*a,Ye(1,0,0))),ai(this.helper,this.helperBones,"head",c,Ye(1,0,0)),r){let x=n===0,m=n===1;ai(this.guest,this.guestBones,"upper_arm_L",x?-.42*o:m?-.08*o:-.2*o,Ye(1,0,0)),ai(this.guest,this.guestBones,"upper_arm_L",m?-.22*o:-.1*o),ai(this.guest,this.guestBones,"forearm_L",x?-.98*o:m?-.12*o:-.6*o,Ye(1,0,0)),ai(this.guest,this.guestBones,"upper_arm_R",(.18+c)*o),ai(this.guest,this.guestBones,"forearm_R",-.8*o,Ye(1,0,0)),ai(this.guest,this.guestBones,"head",c,Ye(1,0,0))}else ai(this.guest,this.guestBones,"head",this.reduced?0:Math.sin(e*3)*o*.09,Ye(0,1,0));this.helper.updateWorldMatrix(!0,!0),this.guest.updateWorldMatrix(!0,!0);let d=this.helperBones.hand_R?$m(this.root,this.helperBones.hand_R.bone):this.helper.position.clone().add(Ye(.36,.94,.24)),f=this.guestBones.hand_L?$m(this.root,this.guestBones.hand_L.bone):this.guest.position.clone().add(Ye(-.36,.94,.24));this.carried.visible=e>1.25,this.carried.rotation.set(0,this.helper.rotation.y*(1-o),0);let g=d.clone();if(n===0&&r&&g.lerp(f,o),l&&this.carried.rotation.set(0,0,(i==="tool"?-.95:1)*o),Qm(this.carried,g,n===0?i==="tool"?Ye(-.33,.1,0):Ye(.088,0,0):Ye(0,0,0)),this.cup.visible=n===0&&i!=="tool",this.can.visible=n===0&&i==="tool",this.blower.visible=n===1&&i==="tool",this.flashlight.visible=n===2,n===1&&e>1.8&&i!=="tool"){let x=r?this.tealPack:this.redPack;x.rotation.set(0,this.helper.rotation.y*(1-o),0);let m=d.clone();r&&m.lerp(f,o),Qm(x,m,Ye(0,.525,0));let p=pt.smoothstep(e,1.8,2.5),v=r?Ye(.1,0,-.5):Ye(-.65,0,-.6);x.position.lerpVectors(v,x.position.clone(),p)}this.drops.forEach((x,m)=>{x.visible=n===0&&!r&&o>.3&&!this.reduced;let p=i==="tool"?this.can:this.cup,v=i==="tool"?Ye(.4+Math.sin(1)*.275,.06+Math.cos(1)*.275,0):Ye(-.058,.057,0);x.position.copy(TS(this.root,p,v,Ye(-1.22,.35,-.58),(t*1.3+m/9)%1)),n===1&&i==="tool"?(x.visible=o>.1&&!this.reduced,x.material.color.set("#cab973"),x.scale.set(1,.25,1.7),x.position.set(.1+(t*1.2+m*.16)%1*1.2,.1+Math.abs(Math.sin(t*4+m))*.35,-.1+m*.03)):(x.material.color.set("#7bdcdd"),x.scale.set(1,1,1))}),n===2&&(this.flashlight.visible=i==="tool",this.stageBulbs.forEach(x=>x.material.emissiveIntensity=r&&o>.2?1.5:0),this.picnicLamp.material.emissiveIntensity=(i==="context"||i==="missing")&&o>.2?2:0)}close(){this.cancel(),this.active=!1,this.root.visible=!1,this.pouring=null,this.stream.visible=!1,this.ui=null,this.e.canvas.style.touchAction="",this.e.canvas.style.cursor=""}};var vo=Object.freeze([{id:"focus",name:"Focus lens",symbol:"\u25C9",color:"#37bfa5",target:[-.2,.7],turn:0,home:[-.39,.33]},{id:"spark",name:"Power cell",symbol:"\u03DF",color:"#efb63c",target:[0,.59],turn:1,home:[0,.33]},{id:"signal",name:"Signal chip",symbol:"\u2318",color:"#ed7650",target:[.2,.7],turn:3,home:[.39,.33]}]),zd=s=>(s%4+4)%4,Hd=class{constructor(e=1){this.parts=vo.map((t,i)=>({...t,rotation:zd(t.turn+1+(e+i)%2),position:[...t.home],fitted:!1})),this.charge=0,this.completed=!1,this.mistakes=0}get ready(){return this.parts.every(e=>e.fitted)}rotate(e){let t=this.parts.find(i=>i.id===e);return!t||t.fitted||this.completed?!1:(t.rotation=zd(t.rotation+1),!0)}drop(e,t){let i=this.parts.find(r=>r.id===e);return!i||i.fitted||this.completed?"locked":t.every(Number.isFinite)?Math.hypot(t[0]-i.target[0],t[1]-i.target[1])<.135?zd(i.rotation)!==i.turn?(this.mistakes++,i.position=[...i.home],"rotate"):(i.fitted=!0,i.position=[...i.target],"fitted"):(i.position=[...i.home],"miss"):"miss"}power(e,t){return!Number.isFinite(e)||e<=0||!this.ready||this.completed?!1:(this.charge=Math.max(0,Math.min(1,this.charge+Math.min(e,.1)*(t?.8:-1.2))),this.charge>=1?(this.completed=!0,!0):!1)}};function AS(s,e){let t=new Ar,i;return s===0?i=Array.from({length:32},(n,r)=>{let a=r/32*Math.PI*2,o=r===7||r===8||r===9?e*.67:e;return[o*Math.cos(a),o*Math.sin(a)]}):s===1?i=[[-e,-e],[e*.12,-e],[e*.12,-e*.1],[e,-e*.1],[e,e],[-e,e]]:i=Array.from({length:12},(n,r)=>{let a=r/12*Math.PI*2,o=r===3?e*.6:e*(r%2?.83:1);return[o*Math.cos(a),o*Math.sin(a)]}),i.forEach((n,r)=>r?t.lineTo(...n):t.moveTo(...n)),t.closePath(),t}var Ci=(s,e={})=>new xt({color:s,roughness:.65,...e}),tg=(s,e,t)=>new Ua(AS(s,e),{depth:t,bevelEnabled:!0,bevelSegments:2,steps:1,bevelSize:.006,bevelThickness:.004,curveSegments:16}),Ql=class{constructor(e,t,{onFit:i=()=>{},onComplete:n=()=>{},reduced:r=!1,home:a=null}={}){this.e=e,this.robot=t,this.onFit=i,this.onComplete=n,this.reduced=r,this.group=new Ue,this.group.name="RobotRepairBench",e.scene.add(this.group),this.group.visible=!1,this.active=!1,this.homes=new Map,this.meshes=[],this.sockets=[],this.traces=[],this.lights=[],this.ray=new Wn,this.pointer=new ie,this.intersection=new R,this.plane=new ni,this.home=(a||t.position).clone(),this.homeRotation=t.quaternion.clone();let o=(h,u,d,f=this.group)=>{let g=new ke(h,u);return g.position.set(...d),g.castShadow=g.receiveShadow=!0,f.add(g),g};this.add=o,o(new Mt(.76,.4,.07),Ci("#284e49"),[0,.66,.22]);let c=Ci("#d2b36d",{metalness:.3});for(let h of[-.355,.355])for(let u of[.495,.825]){let d=o(new wt(.018,.018,.015,8),c,[h,u,.265]);d.rotation.x=Math.PI/2}o(new Mt(1.12,.055,.34),Ci("#bc9257"),[0,.2,.42]);for(let h of[-.55,.55])o(new Mt(.025,.1,.34),c,[h,.235,.42]);vo.forEach((h,u)=>{let d=o(tg(u,.083,.012),Ci("#142d2b"),[...h.target,.264]);d.rotation.z=h.turn*Math.PI/2,this.sockets.push(d),o(new Mt(.025,.022,.012),c,[0,.093,.014],d);let f=new Ue;f.userData.repairPart=h.id,f.name="repair_"+h.id,this.group.add(f),this.meshes.push(f);let g=o(tg(u,.068,.026),Ci(h.color,{metalness:.15}),[0,0,0],f);if(g.userData.repairPart=h.id,o(new Mt(.024,.018,.012),Ci("#fff1c4"),[0,.068,.04],f),u===0){let p=o(new wt(.036,.036,.012,24),Ci("#183f43",{metalness:.6,roughness:.18}),[0,0,.039],f);p.rotation.x=Math.PI/2}if(u===1)for(let p of[-.032,.032])o(new Mt(.05,.015,.016),Ci("#fff0b8",{metalness:.5}),[-.015,p,.038],f);if(u===2){o(new Mt(.051,.048,.012),Ci("#263c3a"),[0,0,.037],f);for(let p of[-.041,.041])for(let v of[-.024,0,.024])o(new Mt(.019,.008,.007),c,[p,v,.034],f)}let x=new ke(new Ls(new os([new R(h.target[0],h.target[1]-.085,.266),new R(h.target[0],.49,.266),new R(0,.465,.266)]),8,.006,4,!1),Ci("#566e55",{emissive:h.color,emissiveIntensity:0}));this.group.add(x),this.traces.push(x);let m=o(new Jt(.018,8,6),Ci(h.color,{emissive:h.color,emissiveIntensity:0}),[(u-1)*.06,.445,.277]);this.lights.push(m)}),this.face=new Ue,this.face.position.set(0,1.03,.229),this.group.add(this.face),o(new Mt(.43,.21,.013),Ci("#163d39"),[0,0,0],this.face),this.eyes=[];for(let h of[-.12,.12])this.eyes.push(o(new Mt(.067,.022,.012),Ci("#dd9447",{emissive:"#dd9447",emissiveIntensity:.3}),[h,0,.016],this.face));let l=new as(0,-.014,.065,.045,Math.PI,2*Math.PI,!1,0);this.smile=new gi(new ze().setFromPoints(l.getPoints(16).map(h=>new R(h.x,h.y,.027))),new Di({color:"#9ff3bf"})),this.face.add(this.smile),this.smile.visible=!1,this.progress=new ke(new Mi(.1,.007,5,40,Math.PI*2),Ci("#66deb0",{emissive:"#66deb0",emissiveIntensity:.7})),this.progress.position.set(0,.91,.25),this.progress.visible=!1,this.group.add(this.progress),this.events={down:h=>this.down(h),move:h=>this.move(h),up:h=>this.up(h),cancel:()=>this.cancel()},e.canvas.addEventListener("pointerdown",this.events.down,!0),e.canvas.addEventListener("pointermove",this.events.move,!0),e.canvas.addEventListener("pointerup",this.events.up,!0),e.canvas.addEventListener("pointercancel",this.events.cancel,!0),e.canvas.addEventListener("lostpointercapture",this.events.cancel,!0)}open(e,t){this.ui=t,this.puzzle=new Hd(e),this.selected=null,this.held=!1,this.dragId=null,this.done=!1,this.reveal=0,this.active=!0,this.group.visible=!0,this.robot.position.copy(this.home),this.robot.quaternion.copy(this.homeRotation),this.group.position.copy(this.home),this.group.rotation.set(0,0,0),this.robot.rotation.set(0,0,0),this.e.canvas.style.touchAction="none",this.e.canvas.style.cursor="grab",this.smile.visible=!1,this.eyes.forEach(i=>{i.scale.y=1,i.material.color.set("#dd9447"),i.material.emissive.set("#dd9447")}),this.sync(!0)}camera(){let e=this.e.camera.aspect<.75,t=this.reveal||0,i=t*t*(3-2*t);this.e.setCamera([this.home.x,pt.lerp(e?1.19:1.32,1.85,i),this.home.z+pt.lerp(e?2.05:1.78,3.6,i)],[this.home.x,pt.lerp(.64,.84,i),this.home.z+.24])}state(){return this.puzzle.parts.map((e,t)=>({id:e.id,fitted:e.fitted,rotation:e.rotation,position:this.meshes[t].position.toArray()}))}sync(e=!1){this.puzzle.parts.forEach((t,i)=>{let n=this.meshes[i];e&&n.position.set(t.position[0],t.position[1],t.fitted?.285:.43),n.rotation.z=t.rotation*Math.PI/2,this.traces[i].material.emissiveIntensity=t.fitted?.8:0,this.lights[i].material.emissiveIntensity=t.fitted?1.4:0,this.sockets[i].material.color.set(t.fitted?"#237d67":"#142d2b")}),this.ui&&(this.ui.querySelectorAll("[data-repair-part]").forEach(t=>{let i=this.puzzle.parts.find(n=>n.id===t.dataset.repairPart);t.disabled=i.fitted,t.setAttribute("aria-pressed",String(this.selected===i.id)),t.querySelector("small").textContent=i.fitted?"Fitted":i.name}),this.ui.querySelector("#repairCount").textContent=`${this.puzzle.parts.filter(t=>t.fitted).length} / 3 fitted`,this.ui.querySelector("#repairRotate").disabled=!this.selected||this.puzzle.completed,this.ui.querySelector("#repairFit").disabled=!this.selected||this.puzzle.completed,this.ui.querySelector("#repairPower").disabled=!this.puzzle.ready||this.puzzle.completed)}say(e){let t=this.ui?.querySelector("#repairStatus");t&&(t.textContent=e)}select(e){if(!this.active||this.puzzle.completed)return!1;let t=this.puzzle.parts.find(i=>i.id===e);return!t||t.fitted?!1:(this.selected=e,this.say("Match the shape and the gold marker."),this.sync(),!0)}rotate(){this.selected&&this.puzzle.rotate(this.selected)&&(this.sync(),this.say("Quarter turn. Line up the gold markers."))}fit(e){if(!this.selected)return;let t=this.selected,i=this.puzzle.parts.find(r=>r.id===t),n=this.puzzle.drop(t,e||i.target);return n==="fitted"?(this.selected=null,this.say(this.puzzle.ready?"All connected. Hold POWER to wake your friend.":"Click. Connected!"),this.onFit()):this.say(n==="rotate"?"The marker is turned. Rotate the part and try again.":"Move the part over its matching socket."),this.sync(),n}point(e){let t=this.e.canvas.getBoundingClientRect();this.pointer.set((e.clientX-t.left)/t.width*2-1,-(e.clientY-t.top)/t.height*2+1),this.ray.setFromCamera(this.pointer,this.e.camera)}down(e){if(!this.active||this.done||e.button!==0)return;this.point(e);let t=this.ray.intersectObjects(this.meshes,!0).find(n=>{let r=n.object;for(;r&&!r.userData.repairPart;)r=r.parent;return r&&!this.puzzle.parts.find(a=>a.id===r.userData.repairPart).fitted});if(!t)return;let i=t.object;for(;i&&!i.userData.repairPart;)i=i.parent;this.select(i.userData.repairPart),this.dragId=e.pointerId,this.dragged=!1,this.dragStart=[e.clientX,e.clientY],this.e.canvas.setPointerCapture(e.pointerId),this.e.canvas.style.cursor="grabbing",e.preventDefault(),e.stopImmediatePropagation()}move(e){if(!(!this.active||e.pointerId!==this.dragId||!this.selected)&&(e.preventDefault(),e.stopImmediatePropagation(),Math.hypot(e.clientX-this.dragStart[0],e.clientY-this.dragStart[1])>5&&(this.dragged=!0),!!this.dragged&&(this.point(e),this.plane.set(new R(0,0,1),-(this.home.z+.34)),this.ray.ray.intersectPlane(this.plane,this.intersection)))){let t=this.puzzle.parts.find(i=>i.id===this.selected);t.position=[pt.clamp(this.intersection.x-this.home.x,-.68,.68),pt.clamp(this.intersection.y,.16,1.2)],this.meshes[this.puzzle.parts.indexOf(t)].position.set(...t.position,.34)}}up(e){if(e.pointerId!==this.dragId)return;e.preventDefault(),e.stopImmediatePropagation();let t=this.dragged;this.dragId=null,this.e.canvas.releasePointerCapture(e.pointerId),this.e.canvas.style.cursor="grab",t&&this.selected&&this.fit(this.puzzle.parts.find(i=>i.id===this.selected).position)}cancel(){if(this.held=!1,this.dragId!==null&&this.selected){let e=this.puzzle.parts.find(t=>t.id===this.selected);e.position=[...e.home]}this.dragId=null,this.dragged=!1}update(e,t){if(!this.active)return;this.done&&(this.reveal=this.reduced?1:Math.min(1,this.reveal+e*.85)),this.camera(),this.puzzle.parts.forEach((r,a)=>{let o=this.meshes[a];if(this.dragId!==null&&r.id===this.selected)return;let c=r.id===this.selected,l=new R(r.position[0],r.position[1]+(c&&!r.fitted?.035:0),r.fitted?.285:c?.49:.43);o.position.lerp(l,this.reduced?1:1-Math.exp(-Math.min(e,.1)*16))});let i=this.puzzle.power(e,this.held);this.progress.visible=this.puzzle.charge>0&&!this.done,this.progress.scale.setScalar(.7+this.puzzle.charge*.3);let n=this.ui?.querySelector("#repairPower");n&&(n.style.setProperty("--charge",`${this.puzzle.charge*100}%`),n.textContent=this.done?"Awake!":this.puzzle.ready?`Hold POWER${this.puzzle.charge>0?" \xB7 "+Math.round(this.puzzle.charge*100)+"%":""}`:"POWER"),i&&(this.done=!0,this.held=!1,this.smile.visible=!0,this.eyes.forEach(r=>{r.scale.y=2.6,r.material.color.set("#9ff3bf"),r.material.emissive.set("#9ff3bf")}),this.sync(),this.say("Ready for the festival. Thank you!"),this.onComplete()),this.done&&!this.reduced&&(this.robot.rotation.z=Math.sin(t*4)*.035)}close(){this.cancel(),this.active=!1,this.group.visible=!1,this.e.canvas.style.touchAction="",this.e.canvas.style.cursor="",this.robot.rotation.z=0,this.ui=null}};var eh=Object.freeze([[-4.7,-29.2],[-2.8,-29.6],[-.7,-29.1],[1.3,-29.5],[3.4,-29.1],[5.5,-29.4],[-4,-27.2],[-1.7,-27.5],[1,-27.2],[-6.6,-27.7],[6.8,-27.3]]);function ig(s){let e=260913,t=()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296),i=[];for(let n=0;i.length<s&&n<5e4;n++){let r=[(t()-.5)*18,-27+t()*12];[...eh,...i].every(a=>Math.hypot(r[0]-a[0],r[1]-a[1])>1.35)&&i.push(r)}if(i.length!==s)throw Error("Concert lawn is full");for(let n=i.length-1;n>0;n--){let r=Math.floor(t()*(n+1));[i[n],i[r]]=[i[r],i[n]]}return i.map(([n,r])=>({x:n,z:r,yaw:Math.PI+(t()-.5)*.55}))}var ii=(...s)=>new R(...s),RS=s=>s*s*(3-2*s),th=[[0,[13,9,-13],[0,3,-33]],[15,[6,5,-24],[0,2.8,-33]],[32,[2.5,3,-28],[0,2.8,-33.5]],[52,[-9,4,-27],[-1,2.8,-33]],[72,[-7,3,-35],[1,1.4,-24]],[92,[8,6,-22],[0,2.8,-33]],[112,[3,3.2,-28],[0,2.8,-33.5]],[136,[-8,4.5,-25],[0,2.8,-33]],[160,[10,7,-20],[0,2.5,-30]],[180,[0,9,-14],[0,2.5,-31]],[194,[0,11,-10],[0,3,-31]]];function ng(s,{steady:e=!1,aspect:t=1.6}={}){if(e)return{position:[0,t<1?9:6,t<1?-12:-21],target:[0,2.8,-33]};let i=Math.max(0,Math.min(194,Number(s)||0)),n=0;for(;n<th.length-2&&i>th[n+1][0];)n++;let r=t<1?th.map(u=>u[0]===72?[72,[6,4,-30],[0,1.5,-27]]:[u[0],[u[1][0]*.65,u[1][1]+3,u[1][2]+8],u[2]]):th,a=r[n],o=r[n+1],c=RS(pt.clamp((i-a[0])/(o[0]-a[0]),0,1)),l=a[1].map((u,d)=>pt.lerp(u,o[1][d],c)),h=a[2].map((u,d)=>pt.lerp(u,o[2][d],c));return{position:l,target:h}}function rg(s,e=1024,t=512){let i=document.createElement("canvas");i.width=e,i.height=t,s(i.getContext("2d"),e,t);let n=new bi(i);return n.colorSpace=at,n}function CS(){return rg((s,e,t)=>{s.fillStyle="#fff9e9",s.fillRect(0,0,e,t),s.fillStyle="#df253a";for(let i=0;i<5;i+=2)s.fillRect(0,i*t/5,e,t/5);s.fillStyle="#1463bb",s.beginPath(),s.moveTo(0,0),s.lineTo(e*.44,t/2),s.lineTo(0,t),s.fill(),s.fillStyle="white",s.beginPath();for(let i=0;i<10;i++){let n=-Math.PI/2+i*Math.PI/5,r=i%2?t*.09:t*.22;s.lineTo(e*.15+Math.cos(n)*r,t/2+Math.sin(n)*r)}s.closePath(),s.fill()},768,512)}function sg(s){let e={};return s.traverse(t=>{t.isBone&&(e[t.name]={b:t,q:t.quaternion.clone()})}),{o:s,bones:e}}function ln(s,e,t,i=ii(0,0,1)){let n=Object.values(s.bones).find(c=>c.b.name.startsWith(e));if(!n)return;let r=n.b,a=r.parent.getWorldQuaternion(new Je),o=s.o.getWorldQuaternion(new Je);r.quaternion.premultiply(new Je().setFromAxisAngle(i.clone().applyQuaternion(o).applyQuaternion(a.invert()),t)),r.updateWorldMatrix(!1,!0)}function PS(s){return{o:s,p:s.position.clone(),q:s.quaternion.clone(),visible:s.visible}}var gs=(s,e={})=>new xt({color:s,roughness:.65,...e});function oi(s,e,t,i){let n=new ke(e,t);return i&&n.position.fromArray(i),n.castShadow=!0,n.receiveShadow=!0,s.add(n),n}function Xr(s,e,t,i){return oi(s,new Mt(...e),i,t)}var ih=class{constructor(e,t,{reduced:i=!1}={}){this.e=e,this.kit=t,this.reduced=i,this.steady=i,this.active=!1,this.built=!1,this.crowdMatrix=new Pe,this.crowdRotation=new Je,this.crowdAxis=ii(0,0,1)}build(){if(this.built)return;this.built=!0,this.root=new Ue,this.root.name="One Island One View \xB7 concert kit",this.e.scene.add(this.root),this.root.visible=!1,this.flagMaterial=gs("white",{map:CS(),side:ot,roughness:1});let e=new an;this.orbit=e.load("assets/concert/puerto-rico-orbit.jpg"),this.orbit.colorSpace=at,this.landsat=e.load("assets/concert/puerto-rico-landsat.jpg"),this.landsat.colorSpace=at,this.photoMaterials=[this.orbit,this.landsat].map(o=>gs("white",{map:o,side:ot,emissive:"white",emissiveMap:o,emissiveIntensity:.22})),this.dark=gs("#162b3d"),this.gold=gs("#e8b872",{metalness:.65}),this.paper=gs("#fff4dd"),this.wood=gs("#956136"),Xr(this.root,[14.8,.12,6.4],[0,1.25,-34],this.dark),Xr(this.root,[12.9,5.7,.15],[0,4.48,-36.8],this.dark),oi(this.root,new Ht(12.5,5.2),this.photoMaterials[0],[0,4.4,-36.69]);let t=rg((o,c,l)=>{o.fillStyle="#102638",o.fillRect(0,0,c,l),o.fillStyle="#f9e9c6",o.textAlign="center",o.font="bold 64px Georgia",o.fillText("ONE ISLAND ONE VIEW",c/2,100),o.font="24px sans-serif",o.fillStyle="#74d5d6",o.fillText("BORINQU\xC9N  \u2022  PUERTO RICO  \u2022  PROMPTSTOCK FINALE",c/2,157)},1536,210);oi(this.root,new Ht(12.5,1.71),new zt({map:t}),[0,6.2,-36.55]);for(let o of[-6.65,6.65]){Xr(this.root,[.15,5.5,.15],[o,4,-36.35],this.gold);let c=oi(this.root,new Ht(1.5,1),this.flagMaterial,[o,5.3,-36.25]);c.rotation.y=o<0?.15:-.15}this.band=[[-.5,-32.6,4],[-3.7,-33.5,2],[3.5,-33.7,5],[.1,-35.5,1]].map(([o,c,l],h)=>{let u=this.kit.libraries.get("crowd_kit").scene.getObjectByName("crowd_"+l),d=Ki(u);return d.position.set(o,1.32,c),d.rotation.y=0,d.name=["Borinquen vocalist","Borinquen cuatro player","Borinquen bassist","Borinquen percussionist"][h],d.traverse(f=>{f.isSkinnedMesh&&(f.frustumCulled=!1),f.isMesh&&(f.castShadow=!0)}),this.root.add(d),sg(d)});let i=oi(this.root,new wt(.023,.023,1.5,10),this.dark,[-.5,2.08,-32.12]);oi(this.root,new Jt(.085,12,8),this.dark,[-.5,2.92,-32.12]),oi(this.root,new wt(.28,.28,.05,16),this.dark,[-.5,1.34,-32.12]),this.instruments=[];for(let[o,c,l]of[[-3.7,-33.2,!1],[3.5,-33.4,!0]]){let h=new Ue;h.position.set(o,2.25,c),h.rotation.z=-.5,this.root.add(h),oi(h,new Jt(1,20,12),gs(l?"#9b2638":"#d9a05a"),[0,0,0]).scale.set(.25,.34,.09),Xr(h,[.08,.65,.06],[0,.49,0],this.wood),oi(h,new sn(.068,16),this.dark,[0,.06,.094]);for(let d=0;d<(l?4:10);d++)Xr(h,[.002,.8,.002],[(d-4.5)*.007,.2,.1],this.gold);this.instruments.push(h)}for(let o of[-.6,.6])oi(this.root,new wt(.24,.18,.85,16),gs("#ba5234"),[o,1.77,-34.75]),oi(this.root,new wt(.245,.245,.045,20),this.paper,[o,2.21,-34.75]);this.lights=[];for(let o=0;o<6;o++){let c=-6+o*2.4,l=o%3===0?"#ff446b":o%3===1?"#57cfff":"#ffd28b";if(o===1||o===4){let h=new qi(l,26,17,2);h.position.set(c,5,-33.5),this.root.add(h),this.lights.push(h)}oi(this.root,new Jt(.13,12,8),new zt({color:l}),[c,7,-36.1])}this.beams=[];for(let o=0;o<4;o++){let c=new rn(1.7,10,24,1,!0);c.translate(0,-5,0);let l=oi(this.root,c,new zt({color:o%2?"#5bbfff":"#ffba8b",transparent:!0,opacity:.045,depthWrite:!1,side:ot,blending:Xa}),[-6+o*4,7,-36]);l.castShadow=!1,this.beams.push(l)}let n=new ze,r=new Float32Array(720),a=new Float32Array(720);for(let o=0;o<240;o++)r.set([Math.sin(o*37)*11,2+o%29*.29,-31+Math.cos(o*17)*8],o*3),new ge(["#ff5568","#fff5d5","#75c6ff"][o%3]).toArray(a,o*3);n.setAttribute("position",new Lt(r,3)),n.setAttribute("color",new Lt(a,3)),this.confetti=new Un(n,new mn({size:.065,vertexColors:!0,transparent:!0,opacity:.85,depthWrite:!1})),this.root.add(this.confetti),this.confettiBase=r.slice(),this.props=[]}prop(e,t){let i=new Ue;i.name=e==="flag"?"Puerto Rican flag":"Puerto Rico satellite sign",this.root.add(i);let n=oi(i,new wt(.012,.012,e==="flag"?1.15:.65,8),this.wood,[0,e==="flag"?.45:.2,0]),r;e==="flag"?r=oi(i,new Ht(.78,.52,14,8),this.flagMaterial,[.39,.85,0]):(Xr(i,[.93,.65,.035],[0,.62,0],this.paper),oi(i,new Ht(.85,.55),this.photoMaterials[t%2],[0,.64,.022]),oi(i,new Ht(.85,.55),this.photoMaterials[t%2],[0,.64,-.022]).rotation.y=Math.PI);let a={g:i,cloth:r,index:t};return this.props.push(a),a}buildAudienceProps(){if(this.audiencePropBatches)return;this.audiencePropBatches=[],this.propGrip=ii(),this.propScale=ii(1,1,1),this.propTilt=new Je;let e=[],t=[[],[]];this.seats.forEach((n,r)=>{r%3!==0&&(r%4===0?t[r%8===0?0:1].push(r):e.push(r))});let i=(n,r,a)=>{if(!a.length)return;let o=new Kt(n,r,a.length);o.name="Audience flags and Puerto Rico signs",o.castShadow=!1,o.frustumCulled=!1,this.root.add(o),this.audiencePropBatches.push({o,indices:a})};i(new wt(.012,.012,1.7,6).translate(0,.76,0),this.wood,e),i(new Ht(.78,.52,1,1).translate(.38,1.43,0),this.flagMaterial,e);for(let n=0;n<2;n++)i(new wt(.012,.012,1.35,6).translate(0,.6,0),this.wood,t[n]),i(new Mt(.93,.65,.025).translate(0,1.17,0),this.paper,t[n]),i(new Ht(.85,.55).translate(0,1.17,.017),this.photoMaterials[n],t[n]),i(new Ht(.85,.55).rotateY(Math.PI).translate(0,1.17,-.017),this.photoMaterials[n],t[n])}open(){this.build(),this.active=!0,this.root.visible=!0,this.time=0,this.lastPoseTime=-1,this.steady=this.reduced,this.saved=[],this.rigs=[],this.batches=[];let e=new Set;this.kit.group.traverse(o=>{if(o.isInstancedMesh&&o.name.startsWith("Festival guests"))for(let c=0;c<o.count;c++)e.add(o.name+":"+c)});let t=ig(e.size),i=0,n=new Map;this.kit.group.traverse(o=>{if(!o.isInstancedMesh||!o.name.startsWith("Festival guests"))return;let c=o.instanceMatrix.array.slice(),l=[];for(let h=0;h<o.count;h++){let u=new Pe().fromArray(c,h*16),d=ii(),f=new Je,g=ii();u.decompose(d,f,g);let x=o.name+":"+h,m=n.get(x);if(!m){let p=t[i];m={p:ii(p.x,0,p.z),q:new Je().setFromAxisAngle(ii(0,1,0),p.yaw),phase:i,scale:g.clone(),grip:ii(...o.userData.handGrip||[0,100,0])},m.animatedP=m.p.clone(),m.animatedQ=m.q.clone(),n.set(x,m),i++}l.push({...m,s:g})}this.batches.push({o,original:c,positions:l,castShadow:o.castShadow}),o.castShadow=!1}),this.seats=[...n.values()],this.audienceCount=this.seats.length,this.flagMaterial&&this.buildAudienceProps();let r=this.e.contactShadows?.[0]?.mesh;if(r&&!this.audienceContacts){let o=r.material.clone();o.vertexShader=o.vertexShader.replace("modelViewMatrix*vec4(position,1.)","modelViewMatrix*instanceMatrix*vec4(position,1.)"),this.audienceContacts=new Kt(r.geometry,o,this.seats.length),this.audienceContacts.name="Concert audience contact shadows",this.root.add(this.audienceContacts)}if(this.audienceContacts){for(let o=0;o<this.seats.length;o++){let c=this.seats[o].p;this.crowdMatrix.makeScale(.75,1,.6).setPosition(c.x,.027,c.z),this.audienceContacts.setMatrixAt(o,this.crowdMatrix)}this.audienceContacts.instanceMatrix.needsUpdate=!0,this.audienceContacts.computeBoundingSphere()}Qr().forEach((o,c)=>{let l=this.kit.instances.get(o);if(!l)return;this.saved.push(PS(l)),l.visible=!0,l.position.set(eh[c][0],0,eh[c][1]),l.rotation.set(0,Math.PI,0);let h=sg(l);h.base=l.position.clone(),h.id=o,c<9&&(h.prop=this.prop(c%3===1?"sign":"flag",c),h.hand=Object.values(h.bones).find(u=>u.b.name.startsWith("hand_R"))?.b),this.rigs.push(h)}),this.legacy=[],this.hiddenNodes=[];for(let o of this.e.batches||[]){if(!o.mesh?.isInstancedMesh)continue;let c=o.mesh.instanceMatrix.array.slice(),l=!1;for(let h=0;h<o.nodes.length;h++){let u=new Pe().fromArray(c,h*16),d=ii().setFromMatrixPosition(u);d.z<-33&&d.z>-36.8&&d.y>1.3&&d.y<3.4&&Math.abs(d.x)<5&&(this.hiddenNodes.push(o.nodes[h]),o.nodes[h].concertHidden=!0,u.scale(ii(0,0,0)),o.mesh.setMatrixAt(h,u),l=!0)}l&&(o.mesh.instanceMatrix.needsUpdate=!0,this.legacy.push({o:o.mesh,original:c}))}this.update(0,!1);for(let o of this.batches)o.o.computeBoundingSphere(),o.o.boundingSphere.radius+=.15}update(e,t){if(!this.active)return;if(e===this.lastPoseTime){let a=ng(e,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(a.position,a.target);return}this.lastPoseTime=e,this.time=e;let i=this.reduced?0:e;for(let a=0;a<this.rigs.length;a++){let o=this.rigs[a];o.o.position.copy(o.base),o.o.position.y+=this.reduced?0:Math.sin(i*1.3+a)*.006,o.o.rotation.y=Math.PI+(this.reduced?0:Math.sin(i*1.1+a)*.06),o.o.updateWorldMatrix(!0,!0);for(let c of Object.values(o.bones))c.b.quaternion.copy(c.q);if(ln(o,"upper_arm_R",(a%3===0?.48:.25)+Math.sin(i*1.6+a)*.07),ln(o,"upper_arm_L",-.08+Math.sin(i*1.5+a)*.06),ln(o,"forearm_R",-1.05+Math.sin(i*1.6+a)*.1,ii(1,0,0)),ln(o,"spine",Math.sin(i*2+a)*.055),o.prop){let c=o.hand?o.hand.getWorldPosition(ii()):o.o.position.clone().add(ii(-.3,1.7,0));o.prop.g.position.copy(c),o.prop.g.rotation.set(0,-.1,Math.sin(i*1.1+a)*.06)}}for(let a=0;a<this.band.length;a++){let o=this.band[a];for(let c of Object.values(o.bones))c.b.quaternion.copy(c.q);o.o.position.y=1.32+(this.reduced?0:Math.abs(Math.sin(i*4+a))*.025),o.o.updateWorldMatrix(!0,!0),ln(o,"spine",Math.sin(i*2+a)*.055),ln(o,"upper_arm_L",a===0?-.45:-.2),ln(o,"upper_arm_R",a===0?.45:.2),ln(o,"upper_arm_L",a===0?-.25:-.8,ii(1,0,0)),ln(o,"upper_arm_R",a===0?-.6:-.85,ii(1,0,0)),ln(o,"forearm_L",-.85+Math.sin(i*(a===3?8:4))*.18,ii(1,0,0)),ln(o,"forearm_R",-.9+Math.cos(i*(a===3?8:4))*.22,ii(1,0,0))}for(let a of this.seats)a.animatedP.copy(a.p),a.animatedP.y+=this.reduced?0:Math.sin(i*1.3+a.phase)*.006,a.animatedQ.copy(a.q).multiply(this.crowdRotation.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(i*1.25+a.phase)*.022));for(let a of this.batches){for(let o=0;o<a.positions.length;o++){let{animatedP:c,animatedQ:l,s:h}=a.positions[o];a.o.setMatrixAt(o,this.crowdMatrix.compose(c,l,h))}a.o.instanceMatrix.needsUpdate=!0}for(let a of this.audiencePropBatches||[]){for(let o=0;o<a.indices.length;o++){let c=this.seats[a.indices[o]];this.propGrip.copy(c.grip).multiply(c.scale).applyQuaternion(c.animatedQ).add(c.animatedP),this.propTilt.setFromAxisAngle(this.crowdAxis,this.reduced?0:Math.sin(i*.9+c.phase)*.05),a.o.setMatrixAt(o,this.crowdMatrix.compose(this.propGrip,this.propTilt,this.propScale))}a.o.instanceMatrix.needsUpdate=!0}for(let a of this.props)if(a.cloth){let o=a.cloth.geometry.attributes.position;for(let c=0;c<o.count;c++){let l=o.getX(c)+.39;o.setZ(c,this.reduced?0:Math.sin(l*10-i*4+a.index)*l*.12)}o.needsUpdate=!0,a.cloth.geometry.computeVertexNormals()}for(let a=0;a<this.beams.length;a++)this.beams[a].rotation.z=.25*Math.sin(i*.3+a),this.beams[a].rotation.x=-.35+Math.sin(i*.2+a)*.12,this.beams[a].visible=!this.reduced&&!this.e.low;this.lights.forEach((a,o)=>{a.intensity=(this.e.low?10:26)*(1+.15*Math.sin(i*2+o))}),this.confetti.visible=!this.reduced&&e>8;let n=this.confetti.geometry.attributes.position;for(let a=0;a<n.count;a++)n.setY(a,1+((this.confettiBase[a*3+1]-i*.35)%8+8)%8),n.setX(a,this.confettiBase[a*3]+Math.sin(i+a)*.22);n.needsUpdate=!0;let r=ng(e,{steady:this.steady,aspect:this.e.camera.aspect});this.e.setCamera(r.position,r.target)}close(){if(this.active){this.active=!1,this.root.visible=!1;for(let e of this.hiddenNodes||[])delete e.concertHidden;for(let e of this.saved)e.o.position.copy(e.p),e.o.quaternion.copy(e.q),e.o.visible=e.visible;for(let e of this.rigs)for(let t of Object.values(e.bones))t.b.quaternion.copy(t.q);for(let e of[...this.batches,...this.legacy])e.castShadow!==void 0&&(e.o.castShadow=e.castShadow),e.o.instanceMatrix.array.set(e.original),e.o.instanceMatrix.needsUpdate=!0,e.o.computeBoundingSphere();for(let e of this.props)e.g.traverse(t=>{t.isMesh&&t.geometry.dispose()}),e.g.removeFromParent();this.props=[]}}};var Jn=(s,e,t)=>new R(s,e,t);function IS(s,e){let t;return s.traverse(i=>{i.isBone&&i.name.startsWith(e)&&(t=i)}),t}var _o=Object.freeze([[15.3,0,3.75],[8.6,0,3.75],[8.6,0,-11],[7.7,0,-24],[4.4,0,-28]]),nh=class{constructor(e,{reduced:t=!1,repaired:i=!1}={}){this.kit=e,this.reduced=t,this.cheerUntil=0,this.danceUntil=0,this.robot=e.instances.get("robot"),this.robotHome=this.robot.position.clone(),this.robotRepaired=i;for(let o of df())e.place({id:o.id,library:"crowd_kit",asset:o.asset,position:o.position,rotation:o.rotation});this.guests=uf().map(o=>e.instances.get(o)).filter(Boolean).map(o=>({o,p:o.position.clone(),rotation:o.rotation.y,bones:Object.fromEntries(["upper_arm_L","upper_arm_R","forearm_L","forearm_R","spine","head"].map(c=>{let l=IS(o,c);return[c,l?{b:l,q:l.quaternion.clone()}:null]}))}));let n=new Ue;n.name="RepairedRobotBadge",n.position.set(0,.66,.175),this.robot.add(n),this.badge=n;let r=new ke(new sn(.055,20),new xt({color:"#81edb5",emissive:"#3aba80",emissiveIntensity:.7,roughness:.5}));n.add(r);let a=new gi(new ze().setFromPoints([Jn(-.027,0,.006),Jn(-.008,-.022,.006),Jn(.032,.026,.006)]),new Di({color:"#154c42"}));n.add(a),n.visible=i,i&&this.robot.position.fromArray(_o.at(-1))}celebrate(e,t="success"){this.cheerStart=e,this.cheerUntil=e+(t==="repair"?5:3),(t==="record"||t==="finale")&&(this.danceUntil=e+30)}repaired(e){this.robotRepaired=!0,this.badge.visible=!0,this.celebrate(e,"repair")}beginRepair(){this.robotRepaired=!1,this.routeIndex=void 0,this.badge.visible=!1,this.robot.position.copy(this.robotHome),this.robot.rotation.set(0,0,0)}leaveBench(e=!1){!e||!this.robotRepaired||(this.routeIndex=0,this.reduced&&(this.robot.position.fromArray(_o.at(-1)),this.routeIndex=_o.length))}turnBone(e,t,i,n){let r=e.bones[t];if(!r)return;let a=r.b,o=a.parent.getWorldQuaternion(new Je),c=e.o.getWorldQuaternion(new Je),l=n.clone().applyQuaternion(c).applyQuaternion(o.invert());a.quaternion.copy(r.q).premultiply(new Je().setFromAxisAngle(l,i)),a.updateWorldMatrix(!1,!0)}update(e,t,{activity:i,musicPlaying:n=!1,finale:r=!1}={}){let a=t<this.cheerUntil,o=t<this.danceUntil&&n||r;for(let c=0;c<this.guests.length;c++){let l=this.guests[c],h=l.o;for(let x of Object.values(l.bones))x&&x.b.quaternion.copy(x.q);let u=a&&(c<6||i==="aid"),d=!this.reduced,f=t-(this.cheerStart||0)-c*.09,g=u?Math.max(0,Math.min(1,f/.45,(this.cheerUntil-t)/.7)):0;if(h.position.copy(l.p),h.rotation.y=l.rotation,d&&(h.position.y+=o?Math.sin(t*1.4+c)*.006:0,h.rotation.y+=Math.sin(t*(o?1.2:.22)+c)*(o?.07:.035)),h.updateWorldMatrix(!0,!0),d){let x=Math.sin(t*1.8+c);this.turnBone(l,"upper_arm_L",o?-.25+x*.1:-.15*g,Jn(0,0,1)),this.turnBone(l,"upper_arm_R",u?(c%3===0?.85:.48)*g:o?.25-x*.1:0,Jn(0,0,1)),this.turnBone(l,"forearm_L",-.25*g,Jn(1,0,0)),this.turnBone(l,"forearm_R",-.85*g,Jn(1,0,0)),this.turnBone(l,"head",Math.sin(f*3)*.06*g,Jn(1,0,0)),this.turnBone(l,"spine",Math.sin(t*1.2+c)*.012,Jn(0,0,1))}}if(this.robotRepaired&&i!=="aid")if(this.routeIndex!==void 0&&this.routeIndex<_o.length){let c=new R(..._o[this.routeIndex]),l=c.sub(this.robot.position);l.y=0;let h=l.length(),u=Math.min(h,Math.min(e,.1)*2.2);h<.025?this.routeIndex++:(this.robot.position.addScaledVector(l.normalize(),u),this.robot.rotation.y=Math.atan2(l.x,l.z)),this.reduced||(this.robot.position.y=Math.abs(Math.sin(t*10))*.025)}else this.robot.position.y=0,this.robot.rotation.y=0,this.robot.rotation.z=!this.reduced&&o?Math.sin(t*4)*.075:0}};var DS=Object.freeze(new Set(["concert_seat","cheer"])),sh=Object.freeze({stay_home:Object.freeze({location:null,linger:16,face:"home",note:"Remain near kit/home pose."}),repair_assist:Object.freeze({location:"reboot_clinic",linger:20,face:"home",note:"Hold near the reboot clinic."}),watch_stage:Object.freeze({location:"festival_stage",linger:22,face:"stage",note:"Walk to the stage apron and face the stage."}),visit_food_stall:Object.freeze({location:"picnic_west",linger:18,face:null,note:"Wander toward picnic / snack clusters."}),talk_with_friends:Object.freeze({location:null,linger:20,face:"inward",note:"Gather at the home/location cluster and face inward."}),concert_seat:Object.freeze({location:"festival_stage",linger:0,face:"stage",note:"Owned by FestivalConcert \u2014 skipped in free-roam cycles."}),cheer:Object.freeze({location:null,linger:0,face:null,note:"Owned by FestivalReactions celebrate \u2014 not a walk tag."})});function yo(s){return Array.isArray(s)?s.filter(e=>xs[e]&&!DS.has(e)):[]}function LS(s,e){if(e==="picnic_west"||e==="picnic_east"){let t=Js(s);return t&&t[0]>=0?"picnic_east":"picnic_west"}return e&&_i[e]?e:s?.location&&_i[s.location]?s.location:null}function Kr(s,e,{cluster:t=null}={}){let i=sh[s]||sh.stay_home,n=LS(e,i.location),r=Js(e)||(t?[t[0],0,t[1]]:[0,0,0]),a;s==="stay_home"?a=t?[t[0],0,t[1]]:[...r]:s==="repair_assist"?a=[...r]:s==="talk_with_friends"?a=t?[t[0],0,t[1]]:n&&_i[n]?.approx?[..._i[n].approx]:[...r]:n&&_i[n]?.approx?a=[..._i[n].approx]:t?a=[t[0],0,t[1]]:a=[...r];let o=NS(e?.id||"x");s==="watch_stage"?(a[0]+=(o%7-3)*.55,a[2]+=(o%5-2)*.35):s==="visit_food_stall"?(a[0]+=(o%5-2)*.7,a[2]+=(o%3-1)*.55):s==="talk_with_friends"&&(a[0]+=(o%3-1)*.45,a[2]+=(o%3-1)*.45);let c=typeof e?.rotation=="number"?e.rotation:0;if(i.face==="stage"){let l=_i.stage?.approx||[0,0,-28];c=Math.atan2(l[0]-a[0],l[2]-a[2])}else if(i.face==="inward"){let l=n&&_i[n]?.approx?_i[n].approx:r;c=Math.atan2(l[0]-a[0],l[2]-a[2])}else i.face==="home"&&typeof e?.rotation=="number"&&(c=e.rotation);return{tag:s,location:n,position:[a[0],a[1]??0,a[2]],yaw:c,linger:i.linger}}function NS(s){let e=0;for(let t=0;t<s.length;t++)e=e*31+s.charCodeAt(t)|0;return Math.abs(e)}function FS(s,e,t){let i=(e-s+Math.PI)%(Math.PI*2)-Math.PI;return i<-Math.PI&&(i+=Math.PI*2),s+i*t}function Gd(s,{cluster:e=null,phaseOffset:t=0}={}){let i=yo(s.schedule||["stay_home"]),n=i.length?i:["stay_home"],r=t%n.length,a=Kr(n[r],s,{cluster:e}),o=Js(s)||a.position;return{id:s.id,kitId:s.kitId||null,background:!!s.background,tags:[...n],index:r,elapsed:0,lingering:!1,x:o[0],y:o[1]??0,z:o[2],yaw:typeof s.rotation=="number"?s.rotation:a.yaw,target:a,cluster:e?[e[0],e[1]]:null,overrides:null}}function kS(s,e,{walkSpeed:t=1.35,snap:i=!1}={}){if(!s?.target)return s;let n=s.target,r=n.position[0]-s.x,a=n.position[2]-s.z,o=Math.hypot(r,a);if(!s.lingering&&o>.1){if(i)return s.x=n.position[0],s.y=n.position[1]??0,s.z=n.position[2],s.yaw=n.yaw,s.lingering=!0,s.elapsed=0,s;let c=Math.min(o,Math.max(0,e)*t),l=1/o;return s.x+=r*l*c,s.z+=a*l*c,s.yaw=FS(s.yaw,Math.atan2(r,a),Math.min(1,e*4)),s}return s.lingering||(s.x=n.position[0],s.z=n.position[2],s.yaw=n.yaw,s.lingering=!0,s.elapsed=0),s.elapsed+=Math.max(0,e),s.elapsed>=n.linger&&Vd(s),s}function Vd(s){if(!s?.tags?.length)return s;s.index=(s.index+1)%s.tags.length;let e={id:s.id,kitId:s.kitId,location:s.target?.location||"activity_lawn",home:[s.x,s.y,s.z],rotation:s.yaw,schedule:s.tags},t=vs(s.id);return t&&(e.location=t.location,t.home&&(e.home=[...t.home]),typeof t.rotation=="number"&&(e.rotation=t.rotation)),s.overrides?.length&&(e.schedule=s.overrides),s.tags=yo(e.schedule),s.tags.length||(s.tags=["stay_home"]),s.index=s.index%s.tags.length,s.target=Kr(s.tags[s.index],e,{cluster:s.cluster}),s.lingering=!1,s.elapsed=0,s}var Jr=class{constructor(e={}){this.walkSpeed=e.walkSpeed??1.35,this.reduced=!!e.reduced,this.paused=!1,this.actors=new Map,this.crowdBindings=[],this._tmpMatrix=null,this._tmpPos=null,this._tmpQuat=null,this._tmpScale=null,this._tmpAxis=null;let t=e.featured??Mn,i=e.groups??wn;t.forEach((n,r)=>{if(n.role==="player"||n.role==="animal"||n.role==="companion"){let o=Gd(n,{phaseOffset:0});o.tags=["stay_home"],o.index=0,o.target=Kr("stay_home",n),this.actors.set(n.id,o),n.kitId&&this.actors.set(n.kitId,o);return}let a=Gd(n,{phaseOffset:r});this.actors.set(n.id,a),n.kitId&&this.actors.set(n.kitId,a)}),i.forEach((n,r)=>{let a=Gd(n,{cluster:n.cluster,phaseOffset:r*2});a.x=n.cluster[0],a.z=n.cluster[1],this.actors.set(n.id,a)})}pause(e=!0){this.paused=!!e}getState(e){let t=this.actors.get(e);return t?{id:t.id,kitId:t.kitId,tag:t.target?.tag??null,location:t.target?.location??null,index:t.index,tags:[...t.tags],lingering:t.lingering,elapsed:t.elapsed,position:[t.x,t.y,t.z],yaw:t.yaw,background:t.background}:null}setNpcSchedule(e,t){let i=this.actors.get(e);if(!i)throw new Error(`Unknown schedule actor "${e}"`);if(!Array.isArray(t)||!t.length)throw new Error("setNpcSchedule expects a non-empty tags array");for(let r of t)if(!xs[r])throw new Error(`Unknown schedule tag "${r}"`);i.overrides=[...t],i.tags=yo(t),i.tags.length||(i.tags=["stay_home"]),i.index=0;let n=vs(i.id)||{id:i.id,location:"activity_lawn",home:[i.x,i.y,i.z]};return i.target=Kr(i.tags[0],{...n,home:n.home||[i.x,i.y,i.z],schedule:i.tags},{cluster:i.cluster}),i.lingering=!1,i.elapsed=0,this.getState(i.id)}advanceSchedule(e){if(e!=null&&e!==""){let i=this.actors.get(e);if(!i)throw new Error(`Unknown schedule actor "${e}"`);return Vd(i),this.getState(i.id)}let t=new Set;for(let i of this.actors.values())t.has(i.id)||(t.add(i.id),Vd(i));return[...t].map(i=>this.getState(i))}tick(e){if(this.paused)return;let t=new Set,i=this.reduced;for(let n of this.actors.values())t.has(n.id)||(t.add(n.id),kS(n,e,{walkSpeed:this.walkSpeed,snap:i}))}applyToReactions(e){if(!(!e?.guests||this.paused))for(let t of e.guests){let i=t.o?.name,n=i?this.actors.get(i):null;!n||n.background||(t.p.set(n.x,n.y,n.z),t.rotation=n.yaw)}}bindCrowd(e,t=wn){if(!e?.group)return 0;let i=new Pe,n=new R,r=new Je,a=new R,o=new Map;e.group.traverse(h=>{if(!(!h.isInstancedMesh||!h.name?.startsWith("Festival guests")))for(let u=0;u<h.count;u++){h.getMatrixAt(u,i),i.decompose(n,r,a);let d=`${Math.round(n.x*20)/20},${Math.round(n.z*20)/20}`,f=o.get(d);f||(f={x:n.x,z:n.z,parts:[]},o.set(d,f)),f.parts.push({mesh:h,index:u,scale:a.x||1})}});let c=[...o.values()];this.crowdBindings=[];let l=new Set;for(let h of t){let[u,d]=h.cluster,f=h.groupSize||4,g=c.map((m,p)=>({p:m,pi:p,d:Math.hypot(m.x-u,m.z-d)})).filter(m=>!l.has(m.pi)&&m.d<5.5).sort((m,p)=>m.d-p.d).slice(0,f);for(let m of g)l.add(m.pi);let x=[];for(let{p:m}of g){let p=m.x-u,v=m.z-d;for(let S of m.parts)x.push({mesh:S.mesh,index:S.index,ox:p,oz:v,scale:S.scale})}this.crowdBindings.push({groupId:h.id,entries:x})}return l.size}applyToCrowd(){if(!(this.paused||!this.crowdBindings.length))for(let e of this.crowdBindings){let t=this.actors.get(e.groupId);if(!t)continue;let i=t.yaw,n=Math.cos(i),r=Math.sin(i),a=new Set;for(let o of e.entries){let c=t.x+o.ox,l=t.z+o.oz,h=o.scale,u=o.mesh.instanceMatrix.array,d=o.index*16;u[d]=n*h,u[d+1]=0,u[d+2]=-r*h,u[d+3]=0,u[d+4]=0,u[d+5]=h,u[d+6]=0,u[d+7]=0,u[d+8]=r*h,u[d+9]=0,u[d+10]=n*h,u[d+11]=0,u[d+12]=c,u[d+13]=0,u[d+14]=l,u[d+15]=1,a.add(o.mesh)}for(let o of a)o.instanceMatrix.needsUpdate=!0}}};var Yr=.008333333333333333,rh=class s{constructor({radius:e=.13,obstacles:t=[]}={}){this.radius=e,this.obstacles=t,this.reset()}reset(e=this.home?.[0]??-4,t=this.home?.[1]??27){this.home=[e,t],this.p=[e,this.radius,t],this.v=[0,0,0],this.accumulator=0,this.age=0,this.moving=!1}kick(e,t){let i=5+Math.max(0,Math.min(1,t))*8;this.v=[Math.sin(e)*i*.86,i*.51,-Math.cos(e)*i*.86],this.moving=!0,this.age=0}tick(){if(this.moving){this.age+=Yr,this.v[1]-=9.81*Yr;for(let e=0;e<3;e++)this.p[e]+=this.v[e]*Yr;if(this.p[1]<this.radius){this.p[1]=this.radius,this.v[1]=Math.abs(this.v[1])>.55?-this.v[1]*.38:0;let e=Math.exp(-2.7*Yr);this.v[0]*=e,this.v[2]*=e}for(let e of this.obstacles){let t=this.p[0]-e.x,i=this.p[2]-e.z,n=Math.hypot(t,i),r=this.radius+e.r;if(n<r&&this.p[1]<(e.height||2)){let a=n?t/n:1,o=n?i/n:0;this.p[0]=e.x+a*r,this.p[2]=e.z+o*r;let c=this.v[0]*a+this.v[2]*o;c<0&&(this.v[0]-=1.6*c*a,this.v[2]-=1.6*c*o)}}Math.hypot(this.v[0],this.v[2])<.06&&this.p[1]<=this.radius+.001&&(this.v=[0,0,0],this.moving=!1),(this.age>12||Math.abs(this.p[0])>28||this.p[2]<9||this.p[2]>40||!this.p.every(Number.isFinite))&&this.reset()}}advance(e,t=()=>{}){for(this.accumulator+=Math.max(0,Math.min(e,.25));this.accumulator+1e-10>=Yr;)this.tick(),t(this),this.accumulator-=Yr}predict(e,t){let i=new s({radius:this.radius,obstacles:this.obstacles});i.reset(this.p[0],this.p[2]),i.kick(e,t);let n=[];for(let r=0;r<600&&i.moving;r++)i.tick(),r%8===0&&n.push([...i.p]);return n}},js=["kick","aid","maker"];function ag(s){let e=s&&typeof s=="object"?s:{};return{version:1,overnights:Number.isInteger(e.overnights)?Math.max(0,e.overnights):0,robotRepaired:e.robotRepaired===!0,day:Number.isInteger(e.day)&&e.day>0?e.day:1,active:!!e.active,completed:[...new Set((Array.isArray(e.completed)?e.completed:[]).filter(t=>js.includes(t)))],best:Number.isFinite(e.best)?Math.max(0,e.best):0,finished:Number.isInteger(e.finished)?Math.max(0,e.finished):0}}function Wd(s){return(s.completed.length||s.finished)&&s.day++,s.active=!0,s.completed=[],s}function og(s,e){return!s.active||!js.includes(e)||s.completed.includes(e)?!1:(s.completed.push(e),!0)}function OS(s){return js.find(e=>!s.completed.includes(e))||"finale"}function cg(s){return!s.active||OS(s)!=="finale"?!1:(s.active=!1,s.finished++,!0)}function Zr(s){return js.every(e=>s.completed.includes(e))}var US={kick:"Kick the globe",records:"Spin a record",aid:"Help the robot",maker:"Build a useful skill",canoe:"Across the lake",finale:"Meet at the stage"},So=["Communicate","Solve","Create","Connect","Stay curious"],ah=class{constructor(e,t){this.e=e,this.h=t,this.concert=new ih(e,e.jamKit,{reduced:t.reduced}),this.active=null,this.keys=new Set,this.clock=0,this.reduced=t.reduced,this.kit=e.jamKit;let i;try{i=JSON.parse(localStorage.getItem("skillsjam.round.v1"))}catch{}this.state=ag(i),this.root=new Ue,this.root.name="FestivalActivities",e.scene.add(this.root),this.ballMesh=this.kit.instances.get("kickball");let n=new si().setFromObject(this.ballMesh).getSize(new R);this.ball=new rh({radius:Math.max(n.x,n.y,n.z)/2,obstacles:[{x:-5.4,z:25.1,r:.45,height:.6},{x:-10,z:26,r:.7,height:1}]}),this.ball.reset(),this.ballMesh.position.fromArray(this.ball.p),this.hero=this.kit.instances.get("hero"),this.syncHeroVisibility(),this.kit.play("hero","idle"),this.kit.controlledBall=!0,this.marker=new Ue,this.marker.name="KickTargets",this.root.add(this.marker),this.targets=[];for(let r=0;r<3;r++){let a=new ke(new Mi(.9,.045,6,40),new xt({color:["#1b7d78","#c85a3f","#cb9227"][r],roughness:.9}));a.rotation.x=-Math.PI/2,a.position.y=.05,this.marker.add(a),this.targets.push(a)}if(this.path=new gi(new ze,new Ba({color:"#185a56",dashSize:.16,gapSize:.12,depthTest:!1})),this.path.renderOrder=5,this.root.add(this.path),this.marker.visible=this.path.visible=!1,this.recordHomes=new Map(So.map(r=>{let a=this.kit.instances.get("record_"+r.toLowerCase().replaceAll(" ","_"));return[r,{o:a,p:a.position.clone(),q:a.quaternion.clone()}]})),this.deck=new ke(new wt(.19,.19,.035,32),new xt({color:"#254c48",roughness:.7})),this.deck.position.set(11.75,.94,26.06),this.root.add(this.deck),this.reactions=new nh(this.kit,{reduced:this.reduced,repaired:this.state.robotRepaired}),this.schedule=new Jr({reduced:this.reduced}),this.schedule.bindCrowd(this.kit),this.repair=new Ql(e,this.kit.instances.get("robot"),{home:this.reactions.robotHome,reduced:this.reduced,onFit:()=>this.h.chime(),onComplete:()=>{this.state.robotRepaired=!0,this.reactions.repaired(this.clock),this.result("aid","Your friend is awake!")}}),this.adventure=new Yl(e,this.kit,{reduced:this.reduced,getDusk:t.getDusk,setDusk:t.setDusk,playMusic:t.playCamp,endMusic:t.endCampMusic,musicState:t.musicState,toggleMusic:t.toggleMusic,onWake:()=>{this.state.overnights=(this.state.overnights||0)+1,this.save(),this.exit(!1),this.h.wakeAtFestival?.()}}),this.mixer=new $l(e,this.kit,{reduced:this.reduced,onPour:()=>this.h.chime(),onWin:()=>{this.h.chime(),this.reactions.celebrate(this.clock)},onComplete:()=>this.result("maker","Three useful skills. Three happy outcomes!")}),this.ui=document.createElement("section"),this.ui.id="festivalPlay",this.ui.hidden=!0,this.ui.setAttribute("aria-label","Festival activity"),document.body.append(this.ui),this.launch=document.createElement("button"),this.launch.id="roundLaunch",this.launch.className="round-launch",this.launch.onclick=()=>this.h.showJournal?.(),document.getElementById("hud").append(this.launch),this.syncLaunch(),this.raycaster=new Wn,e.canvas.addEventListener("pointerdown",r=>{if(this.active&&(r.stopImmediatePropagation(),this.active==="records"&&this.recordPhase!=="playing")){let a=e.canvas.getBoundingClientRect();this.raycaster.setFromCamera(new ie((r.clientX-a.left)/a.width*2-1,-(r.clientY-a.top)/a.height*2+1),e.camera);let o=this.raycaster.intersectObjects([...this.recordHomes.values()].map(c=>c.o),!0)[0];if(o){let c=o.object;for(;c&&!So.some(h=>this.recordHomes.get(h).o===c);)c=c.parent;let l=So.findIndex(h=>this.recordHomes.get(h).o===c);l>=0&&this.ui.querySelector(`[data-record="${l}"]`).click()}}},!0),this.profile=[],this.lastFrame=0,this.qa=new URLSearchParams(location.search).has("playQA"),this.qa){this.qaText=document.createElement("output"),this.qaText.id="playMetrics",this.qaText.style="position:fixed;right:12px;top:155px;z-index:18;background:#fff5dc;padding:8px;font:12px monospace;max-width:260px;white-space:normal;overflow-wrap:anywhere",document.body.append(this.qaText);let r=document.createElement("button");r.textContent="Save QA frame",r.style="position:fixed;right:12px;top:280px;z-index:18;padding:10px",document.body.append(r),r.onclick=async()=>{let a="play_"+(this.active||"entrance"),o=await new Promise(l=>e.canvas.toBlob(l,"image/png")),c=await fetch("/__kit_capture/"+a,{method:"POST",headers:{"Content-Type":"image/png"},body:o});r.textContent=c.ok?"QA frame saved":"Capture unavailable"}}window.addEventListener("keydown",r=>this.key(r,!0),!0),window.addEventListener("keyup",r=>this.key(r,!1),!0),window.addEventListener("blur",()=>this.clearInput()),document.addEventListener("visibilitychange",()=>this.clearInput())}save(){try{localStorage.setItem("skillsjam.round.v1",JSON.stringify(this.state))}catch{}this.syncLaunch()}syncLaunch(){this.launch.textContent=Zr(this.state)?"Headliner ready \xB7 Meet at the stage":`Headliner clues \xB7 ${this.state.completed.length}/${js.length}`}journal(){return Ym(this.state.completed)}canAttendConcert(){return Zr(this.state)}clearInput(){this.keys.clear(),this.charging=!1,this.repair?.cancel(),this.mixer?.cancel(),this.adventure?.keys.clear(),this.adventure?.journey&&(this.adventure.journey.held=!1)}startRound(){this.exit(!1),this.finaleAt=0,this.state.active||(Wd(this.state),this.save()),this.h.prepare(),this.h.welcomeClues?.()}continueRound(){this.state.active||this.startRound(),this.h.showJournal?.()}complete(e){og(this.state,e),e!=="kick"&&this.h.award(e),this.save(),this.reactUntil=this.clock+2.5,this.reactions.celebrate(this.clock,e==="aid"?"repair":e==="records"?"record":"success"),this.h.chime()}open(e){return["kick","records","aid","maker","finale","canoe"].includes(e)?(this.exit(!1),this.h.prepare(),!this.state.active&&!Zr(this.state)&&js.includes(e)&&(Wd(this.state),this.save()),this.active=e,this.syncHeroVisibility(),this.ui.hidden=!1,document.getElementById("toast").classList.remove("show"),document.body.classList.add("playing-activity"),this.ui.dataset.activity=e,this.savedHero={p:this.hero.position.clone(),q:this.hero.quaternion.clone()},this.ui.innerHTML=`<div class="play-head"><div><small>PROMPTSTOCK \xB7 DAY ${this.state.day}</small><h2>${US[e]}</h2><p id="playHint"></p></div><span class="play-navigation"><button data-action="menu">Main menu</button><button data-action="exit" aria-label="Return to wandering">\u2715</button></span></div><div class="play-dock" id="playDock"></div>`,this.ui.querySelector("[data-action=exit]").onclick=()=>this.exit(),this.ui.querySelector("[data-action=menu]").onclick=()=>this.h.mainMenu?.(),e==="kick"?this.setupKick():e==="records"?this.setupRecords():e==="aid"?this.setupAid():e==="maker"?this.setupMaker():e==="canoe"?this.adventure.open(this.ui):this.setupFinale(),this.profile=[],this.lastFrame=0,this.ui.querySelector("button")?.focus(),!0):!1}hint(e){this.ui.querySelector("#playHint").textContent=e}dock(e){this.ui.querySelector("#playDock").innerHTML=e}button(e,t){this.ui.querySelector("#"+e).onclick=t}result(e,t){this.complete(e);let i=Zr(this.state);this.hint(i?"Three acts of kindness. Follow the path behind the tents: the headliner is ready.":t+" Find your next clue on the lawn."),this.ui.querySelector("#playDock").insertAdjacentHTML("beforeend",`<div class="activity-success" role="status"><strong>${t}</strong><button id="playNext">${i?"Back to the lawn \xB7 Find the stage":"Back to exploring"}</button></div>`),this.button("playNext",()=>this.exit()),this.ui.querySelector("#playNext").focus({preventScroll:!0})}setupKick(){this.hint("Land the globe inside each ring. Aim with \u2190 \u2192. Hold Space and release to kick."),this.score=0,this.shots=0,this.hit=new Set,this.shotDone=!1,this.kickTimer=-1,this.aim=0,this.power=.4;let e=(this.state.day-1)%3-1;[[-1+e,20],[4-e,17],[1+e,14]].forEach((t,i)=>{this.targets[i].position.set(t[0],.045,t[1]),this.targets[i].material.color.set(["#167d76","#d25435","#c49624"][i])}),this.marker.visible=!0,this.hero.position.set(1,0,27.65),this.hero.rotation.y=Math.PI,this.kit.play("hero","idle"),this.resetBall(),this.dock(`<div class="course-score"><strong id="kickScore">0 / 3 rings</strong><span id="shotCount">0 kicks \xB7 best ${this.state.best}</span></div><div class="kick-controls"><label>Aim <input id="kickAim" aria-label="Kick aim" type="range" min="-45" max="45" value="0"></label><label>Power <input id="kickPower" aria-label="Kick power" type="range" min="0" max="100" value="40"></label></div><div class="play-actions"><button id="kickNow" class="primary">Kick globe</button><button id="kickAssist" disabled>Help me aim</button><button id="kickRetry">Reset ball</button></div><p class="play-note">A / D sidestep \xB7 W / S approach \xB7 Space charges \xB7 Esc leaves. Touch: use the sliders and Kick.</p>`),this.ui.querySelector("#kickAim").oninput=t=>{this.aim=Number(t.target.value)*Math.PI/180,this.preview()},this.ui.querySelector("#kickPower").oninput=t=>{this.power=Number(t.target.value)/100,this.preview()},this.button("kickNow",()=>this.kick()),this.button("kickAssist",()=>{this.assist(),this.hint("Try this angle and power, then make the kick.")}),this.button("kickRetry",()=>this.resetBall()),this.aimTarget()}resetBall(){this.ball.reset(this.hero.position.x,this.hero.position.z-.5),this.kickTimer=-1,this.shotDone=!1,this.kit.play("hero","idle"),this.preview()}aimTarget(){this.aim=0,this.power=.4,this.ui.querySelector("#kickAim").value=0,this.ui.querySelector("#kickPower").value=40,this.preview()}assist(){let e=this.targets.find((r,a)=>!this.hit.has(a));if(!e)return;this.aim=Math.atan2(e.position.x-this.ball.p[0],this.ball.p[2]-e.position.z);let t=1/0;for(let r=0;r<=100;r++){let a=this.ball.predict(this.aim,r/100);for(let o of a){if(o[1]>.55)continue;let c=Math.hypot(o[0]-e.position.x,o[2]-e.position.z);c<t&&(t=c,this.power=r/100)}}let i=this.ui.querySelector("#kickAim"),n=this.ui.querySelector("#kickPower");i&&(i.value=this.aim*180/Math.PI),n&&(n.value=this.power*100),this.preview()}preview(){if(this.active!=="kick"||this.ball.moving)return;let e=this.ball.predict(this.aim,this.power);this.path.geometry.dispose(),this.path.geometry=new ze().setFromPoints(e.map(t=>new R(...t))),this.path.computeLineDistances(),this.path.visible=!0}kick(){this.ball.moving||this.kickTimer>=0||this.hit.size===3||(this.hero.position.set(this.ball.p[0]-Math.sin(this.aim)*.5,0,this.ball.p[2]+Math.cos(this.aim)*.5),this.hero.rotation.y=Math.PI-this.aim,this.shot={aim:this.aim,power:this.power},this.kickTimer=0,this.kit.play("hero","kick",!0),this.path.visible=!1,this.shots++,this.ui.querySelector("#kickAssist").disabled=this.shots<2,this.ui.querySelector("#shotCount").textContent=`${this.shots} kicks \xB7 best ${this.state.best}`)}scoreStep(){if(!this.shotDone)for(let e=0;e<3;e++){let t=this.targets[e];if(!this.hit.has(e)&&this.ball.p[1]<.55&&Math.hypot(this.ball.p[0]-t.position.x,this.ball.p[2]-t.position.z)<.83){this.hit.add(e),this.shotDone=!0,this.score=Math.max(0,300-(this.shots-this.hit.size)*20),t.material.color.set("#f0d570"),this.reactUntil=this.clock+2,this.reactions.celebrate(this.clock),this.h.chime(),this.hint(`${this.hit.size} of 3! ${this.hit.size<3?"Try the next ring.":"Every ring found."}`),this.ui.querySelector("#kickScore").textContent=`${this.hit.size} / 3 rings`,this.hit.size===3&&(this.state.best=Math.max(this.state.best,this.score),this.ui.querySelector("#shotCount").textContent=`${this.shots} kicks \xB7 best ${this.state.best}`,this.result("kick",`Course complete \xB7 ${this.score} points \xB7 ${this.shots} kicks`)),this.resetAt=this.clock+1.3;break}}}setupRecords(){this.recordRequest=(this.recordRequest||0)+1,this.recordPhase="choose",this.selected=null,this.recordAwarded=!1,this.hint("Lift a record, then place it on the turntable to play its song."),this.dock(`<div class="record-picks">${So.map((e,t)=>`<button data-record="${t}">${zi(e)}</button>`).join("")}</div><p id="recordRead" class="record-read">Five records. Five songs. Pick your next spin.</p><p id="recordPlayback" role="status"></p><div class="play-actions"><button id="recordPlace" class="primary" disabled>Place & play</button><button id="recordPause">Pause music</button><button id="recordBack">Return to crate</button></div>`),this.ui.querySelectorAll("[data-record]").forEach(e=>e.onclick=()=>{this.recordPhase!=="loading"&&(this.restoreRecords(),this.selected=So[Number(e.dataset.record)],this.recordPhase="inspect",this.ui.querySelectorAll("[data-record]").forEach(t=>t.setAttribute("aria-pressed",String(t===e))),this.ui.querySelector("#recordRead").textContent=zi(this.selected).toUpperCase()+" \xB7 "+{Communicate:"Explain one useful idea simply.",Solve:"Break a problem into one manageable step.",Create:"Make a small first draft.",Connect:"Invite someone to share a useful tip.","Stay curious":"Ask one question you have not asked before."}[this.selected],this.ui.querySelector("#recordPlace").disabled=!1,this.ui.querySelector("#recordPlace").textContent="Place & play")}),this.button("recordBack",()=>{this.recordPhase!=="loading"&&(this.restoreRecords(),this.selected=null,this.recordPhase="choose",this.ui.querySelector("#recordPlace").disabled=!0,this.ui.querySelector("#recordRead").textContent="Choose another record.")}),this.button("recordPause",()=>this.h.toggleMusic?.()),this.button("recordPlace",async()=>{if(!this.selected||this.recordPhase!=="inspect")return;let e=this.selected,t=++this.recordRequest;this.recordPhase="loading",this.hint(`Loading ${zi(e)}\u2026`),this.ui.querySelector("#recordPlace").disabled=!0,this.ui.querySelector("#recordPlace").textContent="Loading\u2026",this.setRecordChoicesDisabled(!0);let i=await this.h.playRecord?.(e);if(!(t!==this.recordRequest||this.active!=="records"||this.selected!==e||this.recordPhase!=="loading")){if(this.setRecordChoicesDisabled(!1),!i){this.recordPhase="inspect",this.ui.querySelector("#recordPlace").disabled=!1,this.ui.querySelector("#recordPlace").textContent="Retry record",this.hint("Music did not start. Retry or choose another record.");return}this.recordPhase="playing",this.h.record(e),this.ui.querySelector("#recordPlace").textContent="On the turntable",this.recordAwarded?this.hint(`${zi(e)} is playing.`):(this.recordAwarded=!0,this.result("records","A record shared. Your stamp is ready.")),this.syncRecordAudio()}}),this.syncRecordAudio()}setRecordChoicesDisabled(e){this.ui.querySelector("#recordBack").disabled=e,this.ui.querySelectorAll("[data-record]").forEach(t=>t.disabled=e)}syncRecordAudio(){if(this.active!=="records")return;let e=this.h.musicState?.();if(!e)return;let t=this.ui.querySelector("#recordPlayback"),i=this.ui.querySelector("#recordPause");this.recordPhase==="playing"&&this.hint(e.status==="playing"?`${zi(e.title)} is playing. Enjoy the song or choose another.`:e.status==="paused"?`${zi(e.title)} is paused.`:e.status==="loading"?`Loading ${zi(e.title)}\u2026`:"Music could not play. Press Retry music."),t&&(t.textContent=e.status==="error"?`${zi(e.title)} could not play. Retry the record.`:`${zi(e.title)} \xB7 ${e.status}`),i&&(i.textContent=e.status==="playing"?"Pause music":e.status==="loading"?"Cancel loading":e.status==="error"?"Retry music":"Resume music",i.disabled=!e.src)}restoreRecords(){for(let{o:e,p:t,q:i}of this.recordHomes.values())e.position.copy(t),e.quaternion.copy(i)}setupAid(){this.hint("Fit three parts. Line up the gold markers. Wake your friend."),this.dock(`<div class="repair-top"><strong id="repairCount">0 / 3 fitted</strong><span id="repairStatus" role="status">Drag a part onto its matching socket.</span></div><div class="repair-controls"><div class="repair-picks">${vo.map((t,i)=>`<button data-repair-part="${t.id}" aria-label="Select ${t.name}" style="--part:${t.color}"><span>${t.symbol}</span><small>${t.name}</small><kbd>${i+1}</kbd></button>`).join("")}</div><div class="repair-tools"><button id="repairRotate" disabled>Rotate \u21BB <kbd>R</kbd></button><button id="repairFit" disabled>Fit part <kbd>Enter</kbd></button><button id="repairPower" class="primary" disabled>POWER</button></div></div><p class="repair-tip">Drag to fit \xB7 or select a part, rotate, then press Fit.</p>`),this.reactions.beginRepair(),this.state.robotRepaired=!1,this.save(),this.repair.open(this.state.day,this.ui),this.repair.camera(),this.ui.querySelectorAll("[data-repair-part]").forEach(t=>t.onclick=()=>this.repair.select(t.dataset.repairPart)),this.button("repairRotate",()=>this.repair.rotate()),this.button("repairFit",()=>this.repair.fit());let e=this.ui.querySelector("#repairPower");e.setAttribute("aria-label","Power on robot. Hold with pointer or press Enter."),e.onpointerdown=t=>{e.disabled||(t.preventDefault(),e.setPointerCapture(t.pointerId),this.repair.held=!0)},e.onpointerup=e.onpointercancel=e.onlostpointercapture=()=>this.repair.held=!1,e.onkeydown=t=>{["Space","Enter"].includes(t.code)&&(t.preventDefault(),this.repair.held=!0)},e.onkeyup=t=>{t.code==="Space"&&(t.preventDefault(),this.repair.held=!1)}}setupMaker(){this.mixer.open(this.ui),this.mixer.camera();let e=document.createElement("button");e.className="mix-free",e.textContent="Prompt builder",e.onclick=()=>{this.exit(),this.h.freePrompt()},this.ui.querySelector(".play-navigation").prepend(e)}setupFinale(){if(!Zr(this.state)){this.hint("Complete all three mini-games in this round to unlock the headliner."),this.dock('<button id="resumeRound" class="primary">Continue the round</button>'),this.button("resumeRound",()=>this.continueRound());return}cg(this.state),this.save(),this.previousDusk=this.h.getDusk(),this.h.setDusk(1),this.concert.open(),this.concertEnded=!1,this.ui.querySelector(".play-head small").textContent="BORINQU\xC9N \xB7 PUERTO RICO \xB7 LIVE AT PROMPTSTOCK",this.ui.querySelector("h2").textContent="One Island One View",this.hint("You brought everyone together. This one is for you."),this.dock(`<div class="concert-playing"><span class="concert-dot"></span><span id="concertStatus" role="status">Taking the stage\u2026</span><time id="concertTime">0:00 / 3:14</time></div><progress id="concertProgress" aria-label="Concert progress" value="0" max="194"></progress><div class="play-actions"><button id="concertSound" class="primary">Loading music\u2026</button><button id="concertCamera" aria-pressed="${this.concert.steady}">${this.concert.steady?"Cinematic camera":"Steady camera"}</button><label class="concert-volume">Volume <input id="concertVolume" aria-label="Concert volume" type="range" min="0" max="1" step=".05" value="${this.h.musicState?.().volume??.65}"></label></div><div id="concertEnding" hidden><small>FESTIVAL COMPLETE</small><h3>One island. One view. All of us.</h3><p>You kicked, shared, repaired and created. Now you belong to the band.</p><div class="play-actions"><button id="concertReplay">Encore</button><button id="anotherRound">Another festival day</button><button id="keepWandering">Keep wandering</button></div></div>`),this.button("concertSound",()=>this.h.toggleMusic?.()),this.button("concertCamera",()=>{this.concert.steady=!this.concert.steady;let e=this.ui.querySelector("#concertCamera");e.textContent=this.concert.steady?"Cinematic camera":"Steady camera",e.setAttribute("aria-pressed",String(this.concert.steady))}),this.ui.querySelector("#concertVolume").oninput=e=>this.h.setMusicVolume?.(e.target.value),this.button("concertReplay",()=>this.open("finale")),this.button("anotherRound",()=>this.startRound()),this.button("keepWandering",()=>this.exit()),this.h.playFinale?.(),this.syncConcertAudio()}syncConcertAudio(){if(this.active!=="finale"||!this.concert.active)return;let e=this.h.musicState?.();if(!e)return;let t=this.ui.querySelector("#concertStatus"),i=this.ui.querySelector("#concertSound"),n=e.status==="playing"?"Borinqu\xE9n \xB7 One Island One View":e.status==="ended"?"Thank you, Puerto Rico.":e.status==="error"?"Tap Retry music to start the show.":e.status==="loading"?"Loading the headliner\u2026":"Concert paused";t.textContent!==n&&(t.textContent=n),i.textContent=e.status==="playing"?"Pause concert":e.status==="error"?"Retry music":e.status==="loading"?"Cancel loading":e.status==="ended"?"Play again":"Play concert",e.status==="ended"&&this.finishConcert()}finishConcert(){this.concertEnded||(this.concertEnded=!0,this.ui.querySelector("#concertEnding").hidden=!1,this.hint("The festival is complete. The connection stays."),this.ui.querySelector("#concertSound").hidden=!0,this.ui.querySelector("#concertReplay").focus({preventScroll:!0}))}key(e,t){if(!this.active)return;if(e.code==="Tab"){if(!t)return;let n=[...this.ui.querySelectorAll("button,input")].filter(o=>!o.disabled&&o.getClientRects().length),r=n[0],a=n.at(-1);e.shiftKey&&document.activeElement===r?(e.preventDefault(),a.focus()):!e.shiftKey&&document.activeElement===a&&(e.preventDefault(),r.focus());return}let i=!!e.target.closest("input,button");if(e.code==="Escape"&&t){e.preventDefault(),e.stopImmediatePropagation(),this.exit();return}if(this.active==="canoe"){this.adventure.key(e,t),e.stopImmediatePropagation();return}if(this.active==="maker"){t&&this.mixer.key(e),i||e.stopImmediatePropagation();return}if(this.active==="aid"){if(e.target.id==="repairPower")return;t&&!e.repeat&&(["Digit1","Digit2","Digit3"].includes(e.code)&&(e.preventDefault(),this.repair.select(vo[Number(e.code.at(-1))-1].id)),e.code==="KeyR"&&(e.preventDefault(),this.repair.rotate()),e.code==="Enter"&&!i&&(e.preventDefault(),this.repair.fit())),i||e.stopImmediatePropagation();return}if(this.active!=="kick"||i&&e.code!=="Space"&&e.code!=="KeyW"&&e.code!=="KeyA"&&e.code!=="KeyS"&&e.code!=="KeyD"){i||e.stopImmediatePropagation();return}if(["Space","ArrowLeft","ArrowRight","KeyW","KeyA","KeyS","KeyD"].includes(e.code)){if(e.code==="Space"&&e.target.matches("button"))return;e.preventDefault(),e.stopImmediatePropagation(),t?(this.keys.add(e.code),e.code==="Space"&&!e.repeat&&!this.ball.moving&&(this.charging=!0,this.power=0)):(this.keys.delete(e.code),e.code==="Space"&&this.charging&&(this.charging=!1,this.kick()))}}update(e,t){if(this.clock=t,this.lastFrame&&document.visibilityState==="visible"&&(this.profile.push(performance.now()-this.lastFrame),this.profile.length>600&&this.profile.shift()),this.lastFrame=performance.now(),this.qa&&this.e.frame%60===0&&(this.qaText.textContent=JSON.stringify(this.metrics())),this.ambient(t,e),!!this.active){if(this.active==="kick"){if(this.charging&&(this.power=Math.min(1,this.power+e*.7),this.ui.querySelector("#kickPower").value=this.power*100,this.preview()),!this.ball.moving&&this.kickTimer<0&&this.hit.size<3){let i=!1,n=(this.keys.has("KeyD")?1:0)-(this.keys.has("KeyA")?1:0),r=(this.keys.has("KeyS")?1:0)-(this.keys.has("KeyW")?1:0);(n||r)&&(this.hero.position.x=pt.clamp(this.hero.position.x+n*e*1.5,-2,4),this.hero.position.z=pt.clamp(this.hero.position.z+r*e*1.5,27,30),this.ball.reset(this.hero.position.x,this.hero.position.z-.5),i=!0);let a=(this.keys.has("ArrowRight")?1:0)-(this.keys.has("ArrowLeft")?1:0);a&&(this.aim=pt.clamp(this.aim+a*e*.5,-.78,.78),this.ui.querySelector("#kickAim").value=this.aim*180/Math.PI),(i||a)&&this.preview(),this.walking!==i&&(this.kit.play("hero",i?"walk":"idle"),this.walking=i)}if(this.kickTimer>=0){let i=this.kickTimer;this.kickTimer+=e,i<.5&&this.kickTimer>=.5&&(this.ball.kick(this.shot.aim,this.shot.power),this.h.chime()),this.kickTimer>1.05&&(this.kickTimer=-1,this.kit.play("hero","idle"))}this.ball.advance(e,()=>this.scoreStep()),this.ballMesh.position.fromArray(this.ball.p),!this.reduced&&this.ball.moving&&(this.ballMesh.rotation.x-=Math.hypot(this.ball.v[0],this.ball.v[2])*e/this.ball.radius),this.resetAt&&t>=this.resetAt&&(this.resetAt=0,this.hit.size<3&&(this.hero.position.set(1,0,27.65),this.resetBall(),this.aimTarget())),!this.ball.moving&&this.ball.age>0&&!this.shotDone&&this.kickTimer<0&&(this.hint("Close! Adjust the aim or power, or try Assist this kick."),this.resetBall()),this.e.camera.aspect<.7?this.e.setCamera([this.hero.position.x,10,this.hero.position.z+10],[this.hero.position.x,.3,22]):this.e.setCamera([this.hero.position.x+3,7,this.hero.position.z+7],[this.hero.position.x,.6,this.e.camera.aspect>1.4?26:24])}else if(this.active==="records"){if(this.e.setCamera([11.1,1.65,28],[11.1,1.16,26]),this.selected){let i=this.recordHomes.get(this.selected).o;this.recordPhase==="inspect"?(i.position.lerp(new R(11.1,1.5,26.85),this.reduced?1:1-Math.exp(-e*10)),i.quaternion.slerp(new Je,this.reduced?1:1-Math.exp(-e*10))):this.recordPhase==="playing"&&(i.position.lerp(new R(11.75,.965,26.06),this.reduced?1:1-Math.exp(-e*10)),this.recordSpin||(this.recordSpin=0),this.h.musicPlaying?.()&&!this.reduced&&(this.recordSpin+=e),i.rotation.set(-Math.PI/2,0,this.recordSpin))}}else if(this.active==="aid")this.repair.update(e,t);else if(this.active==="maker")this.mixer.update(e,t);else if(this.active==="canoe")this.adventure.update(e,t);else if(this.active==="finale"&&this.concert.active){let i=this.h.musicState?.()||{},n=i.currentTime||0;this.concert.update(n,i.playing);let r=a=>`${Math.floor(a/60)}:${String(Math.floor(a%60)).padStart(2,"0")}`;this.ui.querySelector("#concertTime").textContent=r(n)+" / "+r(i.duration||194),this.ui.querySelector("#concertProgress").value=n,this.ui.querySelector("#concertProgress").max=i.duration||194,this.syncConcertAudio()}}}ambient(e,t){if(this.concert?.active)return;this.schedule&&(this.schedule.tick(t),this.schedule.applyToReactions(this.reactions),!this.reduced&&this.e.frame%2===0&&this.schedule.applyToCrowd()),this.reactions.update(t,e,{activity:this.active,musicPlaying:this.h.musicPlaying?.()||!1,finale:this.active==="finale"});let i=this.kit.instances.get("dog");i&&this.petUntil>e&&!this.reduced?(i.rotation.y=Math.sin(e*3)*.18,i.position.y=Math.abs(Math.sin(e*5))*.05):i&&(i.position.y=0,i.rotation.y=0)}pet(){this.petUntil=this.clock+4,this.h.chime()}metrics(){let e=[...this.profile].sort((i,n)=>i-n),t=this.e.renderer.info;return{samples:e.length,medianFrameMs:e[Math.floor(e.length*.5)]||0,p95FrameMs:e[Math.floor(e.length*.95)]||0,drawCalls:t.render.calls,triangles:t.render.triangles,renderPath:this.e.low?"lighter":this.e.postprocessingSupported===!1?"direct":"composer"}}syncHeroVisibility(){this.hero.visible=!!this.e.jamReview||this.active==="kick"||this.active==="finale"}exit(e=!0){this.active&&(this.finaleAt=0,this.concert?.active&&(this.concert.close(),this.h.pauseMusic?.()),this.clearInput(),this.active==="maker"&&this.mixer.close(),this.active==="canoe"&&this.adventure.close(),this.active==="aid"&&(this.repair.close(),this.reactions.leaveBench(this.repair.done===!0)),this.restoreRecords(),this.marker.visible=this.path.visible=!1,this.resetAt=0,this.ball.reset(),this.ballMesh.position.fromArray(this.ball.p),this.savedHero&&(this.hero.position.copy(this.savedHero.p),this.hero.quaternion.copy(this.savedHero.q)),this.kit.play("hero","idle"),this.active==="finale"&&this.previousDusk!==void 0&&(this.h.setDusk(this.previousDusk),this.previousDusk=void 0),this.active=null,this.syncHeroVisibility(),this.ui.hidden=!0,document.body.classList.remove("playing-activity"),e&&this.h.returnToWorld())}};var ch="skillsjam.quality.v1",oh={festival_stage_wide:[[12,4.4,-23],[0,3,-34]],meadow_path:[[0,2.4,34],[0,1.4,20]],pier:[[23,2.8,-58],[23,1,-72]],camp:[[-48,2.6,-6],[-51,1.1,-16]],player_closeup:[[-2.5,1.85,27],[-4.2,1,24]]},BS=["maker","ai","aid","swap","news","records","stage","poster","dog","kick","lake","camp","garden","pier"];function ug(s){let e=s??(typeof localStorage<"u"?localStorage:null);if(!e?.getItem)return null;try{let t=e.getItem(ch);if(t==null||t==="")return null;if(t==="high"||t==="low")return t;let i=JSON.parse(t);if(i==="high"||i==="low")return i;if(i&&(i.level==="high"||i.level==="low"))return i.level}catch{}return null}function qd(s,e){if(s!=="high"&&s!=="low")throw new Error(`saveQualityPreference expects 'high' or 'low', got ${JSON.stringify(s)}`);let t=e??(typeof localStorage<"u"?localStorage:null);if(t?.setItem)try{t.setItem(ch,s)}catch{}}function jd(s,e){if(!s)throw new Error("applyEngineQuality requires an engine");if(e!=="high"&&e!=="low")throw new Error(`applyEngineQuality expects 'high' or 'low', got ${JSON.stringify(e)}`);return s.low=e==="low",s.resize?.(),e}function zS(s){return s?.canvas||s?.renderer?.domElement||null}function lg(s,e){if(typeof document>"u")return;let t=document.createElement("a");t.href=s,t.download=e,t.click()}function hg(s){let e=zS(s);if(!e||typeof e.toDataURL!="function")throw new Error("engine canvas.toDataURL is not available");if(typeof s.draw=="function"){let t=s.time?.value??0;s.draw(t)}return e.toDataURL("image/png")}function dg(s){if(!s||typeof s!="object")throw new Error("attachGameDebug requires the skillsJam host object");let e=()=>{s.engine&&(s.engine.debugCamera=null)},t={version:"1.4.0",listLocations(){return typeof s.locations=="function"?s.locations():Array.isArray(s.locations)?s.locations.slice():BS.slice()},listCameras(){return Object.keys(oh)},listNpcs(i){return typeof s.listNpcs=="function"?s.listNpcs(i):Po(i)},getNpc(i){return typeof s.getNpc=="function"?s.getNpc(i):vs(i)},npcScheduleStatus(){return Io()},setNpcSchedule(i,n){let r=s.play?.schedule||s.schedule;if(!r?.setNpcSchedule)throw new Error("schedule runner not available (boot the festival first)");return r.setNpcSchedule(i,n)},advanceSchedule(i){let n=s.play?.schedule||s.schedule;if(!n?.advanceSchedule)throw new Error("schedule runner not available (boot the festival first)");return n.advanceSchedule(i)},getNpcSchedule(i){let n=s.play?.schedule||s.schedule;return n?.getState?n.getState(i):null},focusNpc(i){let n=t.getNpc(i);if(!n)throw new Error(`Unknown NPC "${i}". Try gameDebug.listNpcs().map(n => n.id)`);e();let r=n.kitId||n.id,a=null,o=s.kit?.instances?.get?.(r)||s.engine?.jamKit?.instances?.get?.(r);if(o?.position?a=[o.position.x,o.position.y,o.position.z]:a=Js(n),!a)throw new Error(`NPC "${n.id}" has no home position`);let c=[a[0],1.82,a[2]+3.2],l=Math.atan2(a[0]-c[0],a[2]-c[2]);if(typeof s.setView=="function")s.setView(c,l,.05);else if(typeof s.teleport=="function"&&n.location){let h=n.location==="festival_stage"?"stage":n.location==="reboot_clinic"?"aid":n.location==="dog_lawn"?"dog":n.location==="meadow"?"kick":n.location;try{s.teleport(h)}catch{}}else throw new Error("host.setView / teleport not available for focusNpc");if(s.engine?.setCamera){let h=[c[0],1.82,c[2]],u=[a[0],1.2,a[2]];s.engine.debugCamera=[h.slice(),u.slice()],s.engine.setCamera(h,u)}return{id:n.id,kitId:r,position:a,stand:c}},teleport(i){if(e(),typeof s.teleport!="function")throw new Error("host.teleport is not available");return s.teleport(i),i},go(i){return t.teleport(i)},setCamera(i){if(i==null||i==="clear"||i==="none")return e(),null;let n=oh[i];if(!n)throw new Error(`Unknown camera "${i}". Try: ${Object.keys(oh).join(", ")}`);if(!s.engine?.setCamera)throw new Error("host.engine.setCamera is not available");return s.engine.debugCamera=[n[0].slice(),n[1].slice()],s.engine.setCamera(n[0],n[1]),i},getPlayerState(){let i=typeof s.state=="object"&&s.state?s.state:{};return{position:i.position?i.position.slice():null,yaw:i.yaw,pitch:i.pitch,started:i.started,touring:i.touring,nearby:i.nearby??null,modal:i.modal??null,badges:i.badges?i.badges.slice():[],discoveries:i.discoveries?i.discoveries.slice():[],goldenHour:!!i.goldenHour,quality:i.quality}},getRenderStats(){let i=typeof s.state=="object"&&s.state?s.state:{};return{fps:i.fps??null,quality:i.quality??(s.engine?.low?"lighter":"detailed"),low:!!s.engine?.low,instances:i.instances??null,batches:i.batches??null,debugCamera:!!s.engine?.debugCamera}},setQuality(i){if(i!=="high"&&i!=="low")throw new Error(`setQuality expects 'high' or 'low', got ${JSON.stringify(i)}`);if(!s.engine)throw new Error("host.engine is not available");return jd(s.engine,i),qd(i),i},capture(i,n={}){if(i&&t.setCamera(i),!s.engine)throw new Error("host.engine is not available");let r=hg(s.engine),a=i||"view";return n.download&&lg(r,n.filename||`promptstock-${a}.png`),r},screenshot(i,n){return t.capture(i,n)},captureAll(i,n={}){let r=Array.isArray(i)&&i.length?i:Object.keys(oh),a=[];for(let o of r){t.setCamera(o);let c=hg(s.engine);n.download&&lg(c,`promptstock-${o}.png`),a.push({name:o,dataUrl:c})}return a},screenshotSuite(i,n){return t.captureAll(i,n)},_atmosphere(){return s.engine?.atmosphere||s.atmosphere||null},setTime(i){let n=t._atmosphere();if(!n?.setTime)throw new Error("atmosphere not available (boot the festival first)");return n.setTime(i)},setWind(i){let n=t._atmosphere();if(!n?.setWind)throw new Error("atmosphere not available (boot the festival first)");return n.setWind(i)},getAtmosphere(){let i=t._atmosphere();if(!i?.snapshot)throw new Error("atmosphere not available (boot the festival first)");return i.snapshot()},setWeather(i){let n=t._atmosphere();if(!n?.setWeather)throw new Error("atmosphere not available (boot the festival first)");return n.setWeather(i)}};return typeof window<"u"&&(window.gameDebug=t),t}var lh="skillsjam.world.passport.v1",hh="skillsjam.discovery.v2",fg="skillsjam.round.v1",uh=Object.freeze(["maker","ai","aid","swap","news","records"]),Xd=Object.freeze(["prompt","tool","context"]),Kd=Object.freeze(["Communicate","Solve","Create","Connect","Stay curious"]),Jd=Object.freeze(["camp","garden","pier"]);function Mo(){return{badges:[],pills:[],record:"Communicate",dog:!1}}function Yd(s,e=uh){let t=Mo();if(!s||typeof s!="object")return t;let i=s;return t.badges=Array.isArray(i.badges)?[...new Set(i.badges.filter(n=>e.includes(n)))]:[],t.pills=Array.isArray(i.pills)?[...new Set(i.pills.filter(n=>Xd.includes(n)))]:[],t.record=Kd.includes(i.record)?i.record:"Communicate",t.dog=!!i.dog,t}function pg(s,e=uh){let t=s??(typeof localStorage<"u"?localStorage:null);if(!t?.getItem)return Mo();try{return Yd(JSON.parse(t.getItem(lh)||"null"),e)}catch{return Mo()}}function mg(s,e){let t=e??(typeof localStorage<"u"?localStorage:null);if(t?.setItem)try{t.setItem(lh,JSON.stringify(s))}catch{}}function gg(s=Jd,e){let t=e??(typeof localStorage<"u"?localStorage:null);if(!t?.getItem)return[];try{let i=JSON.parse(t.getItem(hh)||"[]");return Array.isArray(i)?i.filter(n=>s.includes(n)):[]}catch{return[]}}function bg(s,e){let t=e??(typeof localStorage<"u"?localStorage:null);if(t?.setItem)try{t.setItem(hh,JSON.stringify(s))}catch{}}var dh=Object.freeze({maker:Object.freeze({id:"maker",name:"The Tinker Tent",short:"Tinker Tent",tag:"A little practice. A new possibility.",x:0,z:2.3,y:2.3,arrival:Object.freeze([0,1.8,6.5]),yaw:0,icon:"\u2726",color:"#e9ae45"}),ai:Object.freeze({id:"ai",name:"A small dose of possibility",short:"Dubious Advice Bureau",tag:"Curiosity sold separately. Batteries not required.",x:-16,z:4.5,y:2.4,arrival:Object.freeze([-16,1.8,7]),yaw:0,icon:"\u273A",color:"#075358"}),aid:Object.freeze({id:"aid",name:"A little reality check",short:"The Reboot Clinic",tag:"Confidence is not the same as correctness.",x:16,z:4.5,y:2.4,arrival:Object.freeze([16,1.8,7]),yaw:0,icon:"+",color:"#c44c37"}),swap:Object.freeze({id:"swap",name:"What will you pass on?",short:"Brain Swap Bazaar",tag:"Your odd little talent belongs here.",x:-17,z:20.5,y:2.4,arrival:Object.freeze([-17,1.8,23.3]),yaw:0,icon:"\u2194",color:"#538b71"}),news:Object.freeze({id:"news",name:"Fresh connections",short:"The Patch Notes Press",tag:"Choose a tool. Set a boundary. Check the result.",x:17,z:19,y:2.35,arrival:Object.freeze([17,1.8,21.8]),yaw:0,icon:"\u25A4",color:"#307681"}),records:Object.freeze({id:"records",name:"Spin a skill",short:"The Crate Escape",tag:"The good stuff is worth passing on.",x:11,z:28.6,y:2.1,arrival:Object.freeze([10.5,1.8,30.6]),yaw:0,icon:"\u25C9",color:"#e9ae45"}),stage:Object.freeze({id:"stage",name:"The No-Skip Stage",short:"Lakeside Stage",tag:"Stay a while. There is no rush.",x:0,z:-28,y:3,arrival:Object.freeze([0,1.8,-25.5]),yaw:0,icon:"\u266B",color:"#c44c37"}),poster:Object.freeze({id:"poster",name:"Festival notice",short:"The Notice Board",tag:"Please do not feed the algorithm. It already ate the weekend.",x:-25,z:29,y:2.3,arrival:Object.freeze([-23,1.8,31]),yaw:.5,icon:"\u25A7",color:"#f5e4ba"}),dog:Object.freeze({id:"dog",name:"Make a four-legged friend",short:"The Goodest Festival Guest",tag:"No skills required. Just kindness.",x:-10,z:27,y:1.8,arrival:Object.freeze([-10,1.8,29.2]),yaw:0,icon:"\u2661",color:"#e9ae45"}),kick:Object.freeze({id:"kick",name:"Give the world a little nudge",short:"Kick the globe",tag:"Three rings. One little act of courage.",x:0,z:27,y:1.8,arrival:Object.freeze([0,1.82,30]),yaw:0,icon:"\u25C9",color:"#e9ae45"}),lake:Object.freeze({id:"lake",name:"A quieter kind of progress",short:"Lakeside Lookout",tag:"Take a breath. You belong here.",x:23,z:-46,y:2.2,arrival:Object.freeze([23,1.8,-44]),yaw:0,icon:"\u2248",color:"#307681"}),camp:Object.freeze({id:"camp",short:"Woodland Camp",name:"Stories around the fire",tag:"A warm fire. A slower conversation.",x:-51,z:-12,arrival:Object.freeze([-51,1.82,-8]),yaw:0,icon:"\u2668",color:"#a96942"}),garden:Object.freeze({id:"garden",short:"The Wild Garden",name:"A little closer to the world",tag:"Find the color hiding in plain sight.",x:51,z:-15,arrival:Object.freeze([51,1.82,-11]),yaw:0,icon:"\u2740",color:"#80658d"}),pier:Object.freeze({id:"pier",short:"Lantern Pier",name:"Out over the water",tag:"Borrow a canoe. Follow the smoke across the lake.",x:23,z:-65,arrival:Object.freeze([23,1.82,-63]),yaw:0,icon:"\u2637",color:"#4e8290"})}),xg=Object.freeze(["maker","ai","aid","swap","news","records","stage","lake","camp","garden","pier"]),vg=Object.freeze(["kick","maker","ai","aid","swap","news","records","stage","lake","dog","poster","camp","garden","pier"]);function Zd(){return Object.keys(dh)}function $d(s){let e=dh[s];if(!e)throw new Error(`Unknown map destination "${s}"`);return{...e,arrival:e.arrival.slice()}}function _g(){return Zd().map($d)}var wo=class s extends ke{constructor(){let e=s.SkyShader,t=new Nt({name:e.name,uniforms:Oi.clone(e.uniforms),vertexShader:e.vertexShader,fragmentShader:e.fragmentShader,side:Yt,depthWrite:!1});super(new Mt(1,1,1),t),this.isSky=!0}};wo.SkyShader={name:"SkyShader",uniforms:{turbidity:{value:2},rayleigh:{value:1},mieCoefficient:{value:.005},mieDirectionalG:{value:.8},sunPosition:{value:new R},cloudScale:{value:2e-4},cloudSpeed:{value:2e-5},cloudCoverage:{value:.4},cloudDensity:{value:.4},cloudElevation:{value:.5},showSunDisc:{value:1},time:{value:0}},vertexShader:`
		uniform vec3 sunPosition;
		uniform float rayleigh;
		uniform float turbidity;
		uniform float mieCoefficient;

		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying float vSunfade;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		// constants for atmospheric scattering
		const float e = 2.71828182845904523536028747135266249775724709369995957;
		const float pi = 3.141592653589793238462643383279502884197169;

		// wavelength of used primaries, according to preetham
		const vec3 lambda = vec3( 680E-9, 550E-9, 450E-9 );
		// this pre-calculation replaces older TotalRayleigh(vec3 lambda) function:
		// (8.0 * pow(pi, 3.0) * pow(pow(n, 2.0) - 1.0, 2.0) * (6.0 + 3.0 * pn)) / (3.0 * N * pow(lambda, vec3(4.0)) * (6.0 - 7.0 * pn))
		const vec3 totalRayleigh = vec3( 5.804542996261093E-6, 1.3562911419845635E-5, 3.0265902468824876E-5 );

		// mie stuff
		// K coefficient for the primaries
		const float v = 4.0;
		const vec3 K = vec3( 0.686, 0.678, 0.666 );
		// MieConst = pi * pow( ( 2.0 * pi ) / lambda, vec3( v - 2.0 ) ) * K
		const vec3 MieConst = vec3( 1.8399918514433978E14, 2.7798023919660528E14, 4.0790479543861094E14 );

		// earth shadow hack
		// cutoffAngle = pi / 1.95;
		const float cutoffAngle = 1.6110731556870734;
		const float steepness = 1.5;
		const float EE = 1000.0;

		float sunIntensity( float zenithAngleCos ) {
			zenithAngleCos = clamp( zenithAngleCos, -1.0, 1.0 );
			return EE * max( 0.0, 1.0 - pow( e, -( ( cutoffAngle - acos( zenithAngleCos ) ) / steepness ) ) );
		}

		vec3 totalMie( float T ) {
			float c = ( 0.2 * T ) * 10E-18;
			return 0.434 * c * MieConst;
		}

		void main() {

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vWorldPosition = worldPosition.xyz;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			gl_Position.z = gl_Position.w; // set z to camera.far

			vSunDirection = normalize( sunPosition );

			vSunE = sunIntensity( vSunDirection.y );

			vSunfade = 1.0 - clamp( 1.0 - exp( ( sunPosition.y / 450000.0 ) ), 0.0, 1.0 );

			float rayleighCoefficient = rayleigh - ( 1.0 * ( 1.0 - vSunfade ) );

			// extinction (absorption + out scattering)
			// rayleigh coefficients
			vBetaR = totalRayleigh * rayleighCoefficient;

			// mie coefficients
			vBetaM = totalMie( turbidity ) * mieCoefficient;

		}`,fragmentShader:`
		varying vec3 vWorldPosition;
		varying vec3 vSunDirection;
		varying vec3 vBetaR;
		varying vec3 vBetaM;
		varying float vSunE;

		uniform float mieDirectionalG;
		uniform float cloudScale;
		uniform float cloudSpeed;
		uniform float cloudCoverage;
		uniform float cloudDensity;
		uniform float cloudElevation;
		uniform float showSunDisc;
		uniform float time;

		// gradient at a lattice corner; sinless hash so every GPU produces the same clouds
		vec2 gradient( vec2 i ) {
			vec3 p = fract( i.xyx * vec3( 0.1031, 0.1030, 0.0973 ) );
			p += dot( p, p.yzx + 33.33 );
			return fract( ( p.xx + p.yz ) * p.zy ) * 2.0 - 1.0;
		}

		// 2D gradient noise: isotropic lobes like Perlin at value-noise cost
		float noise( vec2 p ) {
			vec2 i = floor( p );
			vec2 f = fract( p );
			vec2 u = f * f * f * ( f * ( f * 6.0 - 15.0 ) + 10.0 ); // quintic fade
			float a = dot( gradient( i ), f );
			float b = dot( gradient( i + vec2( 1.0, 0.0 ) ), f - vec2( 1.0, 0.0 ) );
			float c = dot( gradient( i + vec2( 0.0, 1.0 ) ), f - vec2( 0.0, 1.0 ) );
			float d = dot( gradient( i + vec2( 1.0, 1.0 ) ), f - vec2( 1.0, 1.0 ) );
			return mix( mix( a, b, u.x ), mix( c, d, u.x ), u.y ) * 1.6; // ~[-1,1]
		}

		// fbm; per-octave drift makes clouds billow instead of scrolling as a rigid stamp
		float fbm( vec2 p, float drift ) {
			float result = 0.0;
			float amplitude = 1.0;
			for ( int i = 0; i < 4; i ++ ) {
				result += amplitude * noise( p );
				amplitude *= 0.5;
				p = p * 2.0 + drift;
			}
			return result;
		}

		// constants for atmospheric scattering
		const float pi = 3.141592653589793238462643383279502884197169;

		const float n = 1.0003; // refractive index of air
		const float N = 2.545E25; // number of molecules per unit volume for air at 288.15K and 1013mb (sea level -45 celsius)

		// optical length at zenith for molecules
		const float rayleighZenithLength = 8.4E3;
		const float mieZenithLength = 1.25E3;
		// 66 arc seconds -> degrees, and the cosine of that
		const float sunAngularDiameterCos = 0.999956676946448443553574619906976478926848692873900859324;

		// 3.0 / ( 16.0 * pi )
		const float THREE_OVER_SIXTEENPI = 0.05968310365946075;
		// 1.0 / ( 4.0 * pi )
		const float ONE_OVER_FOURPI = 0.07957747154594767;

		float rayleighPhase( float cosTheta ) {
			return THREE_OVER_SIXTEENPI * ( 1.0 + pow( cosTheta, 2.0 ) );
		}

		float hgPhase( float cosTheta, float g ) {
			float g2 = pow( g, 2.0 );
			float inverse = 1.0 / pow( 1.0 - 2.0 * g * cosTheta + g2, 1.5 );
			return ONE_OVER_FOURPI * ( ( 1.0 - g2 ) * inverse );
		}

		void main() {

			vec3 direction = normalize( vWorldPosition - cameraPosition );

			// optical length
			// cutoff angle at 90 to avoid singularity in next formula.
			float zenithAngle = acos( max( 0.0, direction.y ) );
			float inverse = 1.0 / ( cos( zenithAngle ) + 0.15 * pow( 93.885 - ( ( zenithAngle * 180.0 ) / pi ), -1.253 ) );
			float sR = rayleighZenithLength * inverse;
			float sM = mieZenithLength * inverse;

			// combined extinction factor
			vec3 Fex = exp( -( vBetaR * sR + vBetaM * sM ) );

			// in scattering
			float cosTheta = dot( direction, vSunDirection );

			float rPhase = rayleighPhase( cosTheta * 0.5 + 0.5 );
			vec3 betaRTheta = vBetaR * rPhase;

			float mPhase = hgPhase( cosTheta, mieDirectionalG );
			vec3 betaMTheta = vBetaM * mPhase;

			vec3 Lin = pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * ( 1.0 - Fex ), vec3( 1.5 ) );
			Lin *= mix( vec3( 1.0 ), pow( vSunE * ( ( betaRTheta + betaMTheta ) / ( vBetaR + vBetaM ) ) * Fex, vec3( 1.0 / 2.0 ) ), clamp( pow( 1.0 - vSunDirection.y, 5.0 ), 0.0, 1.0 ) );

			// nightsky
			float theta = acos( direction.y ); // elevation --> y-axis, [-pi/2, pi/2]
			float phi = atan( direction.z, direction.x ); // azimuth --> x-axis [-pi/2, pi/2]
			vec2 uv = vec2( phi, theta ) / vec2( 2.0 * pi, pi ) + vec2( 0.5, 0.0 );
			vec3 L0 = vec3( 0.1 ) * Fex;

			// composition + solar disc
			float sundisc = clamp( ( cosTheta - sunAngularDiameterCos ) * 50000.0, 0.0, 1.0 ) * showSunDisc;
			vec3 sundiscColor = ( 760.0 * sundisc ) * min( vSunE * Fex, 80.0 );

			vec3 texColor = ( Lin + L0 ) * 0.04 + sundiscColor + vec3( 0.0, 0.0003, 0.00075 );

			// Clouds
			if ( direction.y > 0.0 && cloudCoverage > 0.0 ) {

				// Project to cloud plane (higher elevation = clouds appear lower/closer)
				float elevation = mix( 1.0, 0.1, cloudElevation );
				vec2 cloudUV = direction.xz / ( direction.y * elevation );
				cloudUV *= cloudScale;
				cloudUV += time * cloudSpeed;

				// Cloud density field
				float evolve = time * cloudSpeed * 300.0;
				float cloudNoise = clamp( fbm( cloudUV * 1000.0, evolve ) * 0.7 + 0.5, 0.0, 1.0 );

				// Large-scale coverage variation: clear gaps next to dense banks
				float region = noise( cloudUV * 300.0 ) * 0.37 + 0.5;
				float cov = clamp( cloudCoverage + ( region - 0.5 ) * 0.6, 0.0, 1.0 );

				// Carve clouds where noise rises above the coverage level
				float threshold = 1.0 - cov;
				float cloudMask = smoothstep( threshold, threshold + 0.3, cloudNoise );

				// Fade clouds near horizon (adjusted by elevation)
				float horizonFade = smoothstep( 0.0, 0.03 + 0.06 * cloudElevation, direction.y );
				cloudMask *= horizonFade;

				// Cloud lighting from the sky's own radiance
				float dayFactor = smoothstep( -0.08, 0.3, vSunDirection.y );
				vec3 sunColor = vSunE * Fex * 0.22 * 0.04; // 0.22 ~ albedo/pi, 0.04 = exposure; the aerial composite adds the eye-leg extinction
				vec3 skyAmbient = Lin * 0.04 + vec3( 0.0, 0.0003, 0.00075 );

				// Beer-powder self-shadow from the sampled density
				float depth = max( 0.0, cloudNoise - threshold );
				float beer = exp( depth * -4.0 );
				float powder = 1.0 - beer * beer; // beer*beer == exp(-8*depth)
				float shade = mix( 0.45, 1.0, clamp( beer * powder * 2.6, 0.0, 1.0 ) ); // 2.6 = 1/0.385, normalizes beer*powder peak to 1

				// Henyey-Greenstein forward lobe ( g = 0.7 ): silver lining on rims toward the sun
				float silver = clamp( 0.51 / pow( 1.49 - cosTheta * 1.4, 1.5 ), 0.0, 3.0 ); // 0.51=1-g^2, 1.49=1+g^2, 1.4=2g
				float edge = cloudMask * ( 1.0 - cloudMask ) * 4.0;

				vec3 cloudColor = skyAmbient + sunColor * shade;
				cloudColor += sunColor * silver * edge * 0.6;
				cloudColor *= max( dayFactor, 0.03 );

				// Cloud opacity via Beer's law: density sets how solid the clouds get
				float alpha = ( 1.0 - exp( depth * cloudDensity * -12.0 ) ) * horizonFade;

				// Occlude the sun disc/glow behind opaque cloud
				texColor -= L0 * 0.04 * alpha;

				// Composite through the atmosphere so distant clouds dissolve into haze
				vec3 cloudAerial = mix( texColor, cloudColor, Fex );
				texColor = mix( texColor, cloudAerial, alpha );

			}

			gl_FragColor = vec4( texColor, 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};var fh=class extends ke{constructor(e,t={}){super(e),this.isWater=!0;let i=this,n=t.textureWidth!==void 0?t.textureWidth:512,r=t.textureHeight!==void 0?t.textureHeight:512,a=t.clipBias!==void 0?t.clipBias:0,o=t.alpha!==void 0?t.alpha:1,c=t.time!==void 0?t.time:0,l=t.waterNormals!==void 0?t.waterNormals:null,h=t.sunDirection!==void 0?t.sunDirection:new R(.70707,.70707,0),u=new ge(t.sunColor!==void 0?t.sunColor:16777215),d=new ge(t.waterColor!==void 0?t.waterColor:8355711),f=t.eye!==void 0?t.eye:new R(0,0,0),g=t.distortionScale!==void 0?t.distortionScale:20,x=t.side!==void 0?t.side:ji,m=t.fog!==void 0?t.fog:!1,p=new ni,v=new R,S=new R,b=new R,M=new Pe,w=new R(0,0,-1),A=new ct,_=new R,T=new R,P=new ct,I=new Pe,N=new Ft,B=new qt(n,r,{type:ri}),D={name:"MirrorShader",uniforms:Oi.merge([ue.fog,ue.lights,{normalSampler:{value:null},mirrorSampler:{value:null},alpha:{value:1},time:{value:0},size:{value:1},distortionScale:{value:20},textureMatrix:{value:new Pe},sunColor:{value:new ge(8355711)},sunDirection:{value:new R(.70707,.70707,0)},eye:{value:new R},waterColor:{value:new ge(5592405)}}]),vertexShader:`
				uniform mat4 textureMatrix;
				uniform float time;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				#include <common>
				#include <fog_pars_vertex>
				#include <shadowmap_pars_vertex>
				#include <logdepthbuf_pars_vertex>

				void main() {
					mirrorCoord = modelMatrix * vec4( position, 1.0 );
					worldPosition = mirrorCoord.xyzw;
					mirrorCoord = textureMatrix * mirrorCoord;
					vec4 mvPosition =  modelViewMatrix * vec4( position, 1.0 );
					gl_Position = projectionMatrix * mvPosition;

				#include <beginnormal_vertex>
				#include <defaultnormal_vertex>
				#include <logdepthbuf_vertex>
				#include <fog_vertex>
				#include <shadowmap_vertex>
			}`,fragmentShader:`
				uniform sampler2D mirrorSampler;
				uniform float alpha;
				uniform float time;
				uniform float size;
				uniform float distortionScale;
				uniform sampler2D normalSampler;
				uniform vec3 sunColor;
				uniform vec3 sunDirection;
				uniform vec3 eye;
				uniform vec3 waterColor;

				varying vec4 mirrorCoord;
				varying vec4 worldPosition;

				vec4 getNoise( vec2 uv ) {
					vec2 uv0 = ( uv / 103.0 ) + vec2(time / 17.0, time / 29.0);
					vec2 uv1 = uv / 107.0-vec2( time / -19.0, time / 31.0 );
					vec2 uv2 = uv / vec2( 8907.0, 9803.0 ) + vec2( time / 101.0, time / 97.0 );
					vec2 uv3 = uv / vec2( 1091.0, 1027.0 ) - vec2( time / 109.0, time / -113.0 );
					vec4 noise = texture2D( normalSampler, uv0 ) +
						texture2D( normalSampler, uv1 ) +
						texture2D( normalSampler, uv2 ) +
						texture2D( normalSampler, uv3 );
					return noise * 0.5 - 1.0;
				}

				void sunLight( const vec3 surfaceNormal, const vec3 eyeDirection, float shiny, float spec, float diffuse, inout vec3 diffuseColor, inout vec3 specularColor ) {
					vec3 reflection = normalize( reflect( -sunDirection, surfaceNormal ) );
					float direction = max( 0.0, dot( eyeDirection, reflection ) );
					specularColor += pow( direction, shiny ) * sunColor * spec;
					diffuseColor += max( dot( sunDirection, surfaceNormal ), 0.0 ) * sunColor * diffuse;
				}

				#include <common>
				#include <packing>
				#include <bsdfs>
				#include <fog_pars_fragment>
				#include <logdepthbuf_pars_fragment>
				#include <lights_pars_begin>
				#include <shadowmap_pars_fragment>
				#include <shadowmask_pars_fragment>

				void main() {

					#include <logdepthbuf_fragment>
					vec4 noise = getNoise( worldPosition.xz * size );
					vec3 surfaceNormal = normalize( noise.xzy * vec3( 1.5, 1.0, 1.5 ) );

					vec3 diffuseLight = vec3(0.0);
					vec3 specularLight = vec3(0.0);

					vec3 worldToEye = eye-worldPosition.xyz;
					vec3 eyeDirection = normalize( worldToEye );
					sunLight( surfaceNormal, eyeDirection, 100.0, 2.0, 0.5, diffuseLight, specularLight );

					float distance = length(worldToEye);

					vec2 distortion = surfaceNormal.xz * ( 0.001 + 1.0 / distance ) * distortionScale;
					vec3 reflectionSample = vec3( texture2D( mirrorSampler, mirrorCoord.xy / mirrorCoord.w + distortion ) );

					float theta = max( dot( eyeDirection, surfaceNormal ), 0.0 );
					float rf0 = 0.02;
					float reflectance = rf0 + ( 1.0 - rf0 ) * pow( ( 1.0 - theta ), 5.0 );
					vec3 scatter = max( 0.0, dot( surfaceNormal, eyeDirection ) ) * waterColor;
					vec3 albedo = mix( ( sunColor * diffuseLight * 0.3 + scatter ) * getShadowMask(), reflectionSample + specularLight, reflectance );
					vec3 outgoingLight = albedo;
					gl_FragColor = vec4( outgoingLight, alpha );

					#include <tonemapping_fragment>
					#include <colorspace_fragment>
					#include <fog_fragment>	
				}`},O=new Nt({name:D.name,uniforms:Oi.clone(D.uniforms),vertexShader:D.vertexShader,fragmentShader:D.fragmentShader,lights:!0,side:x,fog:m});O.uniforms.mirrorSampler.value=B.texture,O.uniforms.textureMatrix.value=I,O.uniforms.alpha.value=o,O.uniforms.time.value=c,O.uniforms.normalSampler.value=l,O.uniforms.sunColor.value=u,O.uniforms.waterColor.value=d,O.uniforms.sunDirection.value=h,O.uniforms.distortionScale.value=g,O.uniforms.eye.value=f,i.material=O,i.onBeforeRender=function(V,j,ne){if(S.setFromMatrixPosition(i.matrixWorld),b.setFromMatrixPosition(ne.matrixWorld),M.extractRotation(i.matrixWorld),v.set(0,0,1),v.applyMatrix4(M),_.subVectors(S,b),_.dot(v)>0)return;_.reflect(v).negate(),_.add(S),M.extractRotation(ne.matrixWorld),w.set(0,0,-1),w.applyMatrix4(M),w.add(b),T.subVectors(S,w),T.reflect(v).negate(),T.add(S),N.position.copy(_),N.up.set(0,1,0),N.up.applyMatrix4(M),N.up.reflect(v),N.lookAt(T),N.far=ne.far,N.updateMatrixWorld(),N.projectionMatrix.copy(ne.projectionMatrix),I.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),I.multiply(N.projectionMatrix),I.multiply(N.matrixWorldInverse),p.setFromNormalAndCoplanarPoint(v,S),p.applyMatrix4(N.matrixWorldInverse),A.set(p.normal.x,p.normal.y,p.normal.z,p.constant);let q=N.projectionMatrix;P.x=(Math.sign(A.x)+q.elements[8])/q.elements[0],P.y=(Math.sign(A.y)+q.elements[9])/q.elements[5],P.z=-1,P.w=(1+q.elements[10])/q.elements[14],A.multiplyScalar(2/A.dot(P)),q.elements[2]=A.x,q.elements[6]=A.y,q.elements[10]=A.z+1-a,q.elements[14]=A.w,f.setFromMatrixPosition(ne.matrixWorld);let Z=V.getRenderTarget(),Q=V.xr.enabled,Re=V.shadowMap.autoUpdate;i.visible=!1,V.xr.enabled=!1,V.shadowMap.autoUpdate=!1,V.setRenderTarget(B),V.state.buffers.depth.setMask(!0),V.autoClear===!1&&V.clear(),V.render(j,N),i.visible=!0,V.xr.enabled=Q,V.shadowMap.autoUpdate=Re,V.setRenderTarget(Z);let Me=ne.viewport;Me!==void 0&&V.state.viewport(Me)}}};var yg={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Eo=class extends cn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,i){let n=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),r.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(i),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(n.EQUAL,1,4294967295),r.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),r.buffers.stencil.setLocked(!0)}},ph=class extends cn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var mh=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let i=e.getSize(new ie);this._width=i.width,this._height=i.height,t=new qt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ri}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Ws(yg),this.copyPass.material.blending=Xi,this.timer=new ja}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),i=!1;for(let n=0,r=this.passes.length;n<r;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,i),a.needsSwap){if(i){let o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Eo!==void 0&&(a instanceof Eo?i=!0:a instanceof ph&&(i=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new ie);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let i=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(i,n),this.renderTarget2.setSize(i,n);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var gh=class extends cn{constructor(e,t,i=null,n=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=i,this.clearColor=n,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ge}render(e,t,i){let n=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var To={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var bh=class extends cn{constructor(){super(),this.isOutputPass=!0,this.uniforms=Oi.clone(To.uniforms),this.material=new Pr({name:To.name,uniforms:this.uniforms,vertexShader:To.vertexShader,fragmentShader:To.fragmentShader}),this._fsQuad=new Wr(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},$e.getTransfer(this._outputColorSpace)===ut&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Ka?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ja?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ya?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Bs?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===$a?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Qa?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Za&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var Qd=class{constructor(e){this.canvas=e,this.batches=[],this.low=!1,this.dusk=0,this.cam=[0,1.8,31],this.time={value:0},this.geometries=new Map,this.materials=new Map,this.lastSize="",this.lastLight=-1,this.frame=0,this.renderer=new Ol({canvas:e,antialias:!0,alpha:!1,powerPreference:"high-performance",preserveDrawingBuffer:!0}),this.renderer.debug.onShaderError=(i,n)=>{throw new Error("The graphics engine could not compile a material: "+i.getProgramInfoLog(n))},this.renderer.outputColorSpace=at,this.renderer.toneMapping=Bs,this.renderer.toneMappingExposure=.94,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=Os,this.renderer.shadowMap.autoUpdate=!1,this.scene=new Mr,this.scene.fog=new ya("#b1cedb",.0032),this.scene.environmentIntensity=.2,this.artMeadow=new an().load("assets/art-direction/meadow-albedo-v2.png"),this.artMeadow.colorSpace=at,this.artMeadow.wrapS=this.artMeadow.wrapT=yi,this.artMeadow.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),this.fill=new us("#d3e1ec",.18),this.fill.position.set(35,35,55),this.scene.add(this.fill),this.camera=new Ft(63,1,.08,1400),this.sky=new wo,this.sky.scale.setScalar(1e3),this.sky.material.uniforms.turbidity.value=2.2,this.sky.material.uniforms.rayleigh.value=2.8,this.sky.material.uniforms.mieCoefficient.value=.004,this.sky.material.uniforms.mieDirectionalG.value=.78,this.scene.add(this.sky),this.hemi=new Ga("#b9d7ed","#514b32",.48),this.scene.add(this.hemi),this.sun=new us("#fff1d4",3),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(2048,2048),Object.assign(this.sun.shadow.camera,{left:-62,right:62,top:55,bottom:-55,near:1,far:260}),this.sun.shadow.normalBias=.018,this.sun.shadow.bias=-12e-5,this.sun.shadow.radius=2.2,this.sun.shadow.camera.updateProjectionMatrix(),this.scene.add(this.sun,this.sun.target),this.fire=new qi("#ff873d",18,11,2),this.fire.position.set(-51,1.05,-16),this.scene.add(this.fire),this.stageLight=new qi("#ffd69a",12,20,2),this.stageLight.position.set(0,5,-31),this.scene.add(this.stageLight),this.pmrem=new Gr(this.renderer),this.windStrength={value:Rt.defaultStrength},this.updateLighting(!0),Lm(this),this.atmosphere=td(this);let t=new qt(1,1,{type:ri,samples:Math.min(2,this.renderer.capabilities.maxSamples)});t.depthTexture=new gn(1,1,Ni),this.composer=new mh(this.renderer,t),this.composer.addPass(new gh(this.scene,this.camera)),this.occlusion=new zl(this.camera),this.composer.addPass(this.occlusion),this.finishPass=new Hl,this.composer.addPass(this.finishPass),this.composer.addPass(new bh)}async loadJamKit(){this.jamKit=await Wm(this),this.jamKit.instanceCrowd(this.legacyPeople||[]),Dm(this,this.jamKit);for(let e of this.batches)e.replacements=e.nodes.map(Nd),e.allReplaced=e.replacements.every(Boolean),e.dirty=!0;return this.jamKit}createMeadow(e,t){return Im(this,e,t)}texture(e){let t=new bi(e);return t.colorSpace=at,t.anisotropy=Math.min(8,this.renderer.capabilities.getMaxAnisotropy()),t}geometry(e,t){if(this.geometries.has(e))return this.geometries.get(e);let i=new ze,n=new Nn(t,8);return i.setAttribute("position",new Wi(n,3,0)),i.setAttribute("normal",new Wi(n,3,3)),i.setAttribute("uv",new Wi(n,2,6)),i.computeBoundingSphere(),this.geometries.set(e,i),i}material(e){let[t,i,n]=e.props,r=[e.tex?.id||"",i,n,t,n?e.color.join(","):""].join("|");if(this.materials.has(r))return this.materials.get(r);let a={color:16777215,roughness:i===5?.8:i===6?.95:.88,metalness:0,map:e.tex?.gl||null,side:ot,shadowSide:ot};e.tex&&(a.alphaTest=.28,a.alphaToCoverage=!0),n&&(a.emissive=new ge().setRGB(...e.color),a.emissiveIntensity=n*2.3,a.emissiveMap=e.tex?.gl||null),(i===5||i===6)&&(a.bumpMap=this.surfaceDetail(i),a.bumpScale=i===5?.022:.008);let o=new xt(a);return o.name=`Festival material ${r}`,t&&this.addWind(o,t),i===8&&qr(o,"mountain",this.time),(i===1||i===7)&&qr(o,i===1?"grass":"path",this.time,i===1?this.artMeadow:null,i===1?this.groundPaths:null),this.materials.set(r,o),o}surfaceDetail(e){if(this.detailTextures??=new Map,this.detailTextures.has(e))return this.detailTextures.get(e);let t=128,i=new Uint8Array(t*t*4);for(let r=0;r<t;r++)for(let a=0;a<t;a++){let o=a/t*Math.PI*2,c=r/t*Math.PI*2,l=e===5?.5+.28*Math.sin(o*12+Math.sin(c*2)*1.5)+.1*Math.sin(o*31+c*2):.5+.23*Math.sin(o*24)*Math.sin(c*24),h=(r*t+a)*4,u=Math.round(l*255);i[h]=i[h+1]=i[h+2]=u,i[h+3]=255}let n=new kn(i,t,t);return n.wrapS=n.wrapT=yi,n.magFilter=It,n.minFilter=Ti,n.generateMipmaps=!0,n.needsUpdate=!0,this.detailTextures.set(e,n),n}addWind(e,t){this.windStrength??={value:Rt.defaultStrength},e.onBeforeCompile=i=>{i.uniforms.festivalTime=this.time,i.uniforms.windStrength=this.windStrength,i.vertexShader=`uniform float festivalTime;uniform float windStrength;
`+i.vertexShader,i.vertexShader=i.vertexShader.replace("#include <begin_vertex>",`#include <begin_vertex>
vec3 origin=vec3(0.);
#ifdef USE_INSTANCING
origin=instanceMatrix[3].xyz;
#endif
transformed.x+=sin(festivalTime*${Rt.batchFreqX}+origin.z*.43+origin.x*.13)*${t.toFixed(4)}*${Rt.batchAmpX}*windStrength*max(position.y,0.);
transformed.z+=cos(festivalTime*${Rt.batchFreqZ}+origin.x*.31)*${t.toFixed(4)}*${Rt.batchAmpZ}*windStrength*max(position.y,0.);`)},e.customProgramCacheKey=()=>`festival-wind-v2-${t}`}build(e,t){e.update(),this.legacyPeople=[];let i=new Map,n=o=>{if(o.jamHuman&&this.legacyPeople.push(o),o.geo&&o.props[1]!==3&&!(this.groundPaths&&o.props[1]===7)){let c=[o.geo,o.tex?.id||"",...o.props,o.props[2]?o.color.join(","):""].join("|");i.has(c)||i.set(c,{geo:o.geo,nodes:[]}),i.get(c).nodes.push(o)}for(let c of o.children)n(c)};n(e);let r=new Pe,a=new ge;for(let o of i.values()){let c=o.nodes[0],l=this.material(c);if(o.mesh=new Kt(this.geometry(o.geo,t[o.geo]),l,o.nodes.length),o.mesh.frustumCulled=!1,o.mesh.castShadow=!!c.props[3],o.mesh.receiveShadow=!0,o.mesh.instanceMatrix.setUsage(wu),o.data=new Float32Array(o.nodes.length*24),o.nodes.forEach((h,u)=>{h.batch=o,h.index=u,o.data.set(h.world,u*24),o.mesh.setMatrixAt(u,r.fromArray(h.world)),o.mesh.setColorAt(u,a.setRGB(...h.color,at))}),o.mesh.instanceMatrix.needsUpdate=!0,o.mesh.instanceColor.needsUpdate=!0,c.tex||c.props[0]){let h=new ls({depthPacking:co,map:c.tex?.gl||null,alphaTest:c.tex?.28:0,side:ot});c.props[0]&&this.addWind(h,c.props[0]),o.mesh.customDepthMaterial=h}this.scene.add(o.mesh),this.batches.push(o)}this.createWater(),this.scene.updateMatrixWorld(!0)}createWater(){let t=new Uint8Array(65536);for(let r=0;r<128;r++)for(let a=0;a<128;a++){let o=a/128*Math.PI*2,c=r/128*Math.PI*2,l=Math.sin(o*4+Math.sin(c*3))*.32+Math.sin(o*9-c*4)*.16,h=Math.cos(c*5+Math.sin(o*2))*.32+Math.cos(c*11+o*5)*.12,u=new R(l,h,1).normalize(),d=(r*128+a)*4;t[d]=(u.x*.5+.5)*255,t[d+1]=(u.y*.5+.5)*255,t[d+2]=(u.z*.5+.5)*255,t[d+3]=255}let i=new kn(t,128,128);i.wrapS=i.wrapT=yi,i.magFilter=It,i.minFilter=Ti,i.generateMipmaps=!0,i.needsUpdate=!0,this.water=new fh(new Ht(320,104),{textureWidth:512,textureHeight:512,waterNormals:i,sunDirection:this.sun.position.clone().normalize(),sunColor:16773849,waterColor:2645861,distortionScale:1.9,fog:!0}),this.water.rotation.x=-Math.PI/2,this.water.position.set(0,-.16,-105),this.water.material.uniforms.size.value=3.5;let n=this.water.onBeforeRender;this.water.onBeforeRender=(...r)=>{!this.play?.concert?.active&&(this.frame===1||this.frame%(this.low?12:8)===0)&&n.apply(this.water,r)},this.scene.add(this.water)}updateLighting(e=!1){let t=this.dusk,i=this.campNight||0;if(!e&&Math.abs(t-this.lastLight)<.005&&Math.abs(i-(this.lastCampNight||0))<.005)return;this.lastLight=t,this.lastCampNight=i,this.cloudSky&&(this.cloudSky.material.uniforms.dusk.value=t);let n=new R(-.65,pt.lerp(.58,.19,t),-.38).normalize();if(this.cloudSky&&this.cloudSky.material.uniforms.sunDirection.value.copy(n),this.sun.position.copy(n).multiplyScalar(120),this.sun.target.position.set(0,0,-7),this.sky.material.uniforms.sunPosition.value.copy(n),this.sun.color.set("#ffe4b9").lerp(new ge("#ffb26e"),t),this.sun.intensity=pt.lerp(2.5,1.65,t),this.fill&&(this.fill.intensity=pt.lerp(.12,.1,t)),this.hemi.intensity=pt.lerp(.48,.42,t),this.scene.fog.color.set("#b1cedb").lerp(new ge("#b9907b"),t),this.fire.intensity=pt.lerp(18,40,t),this.stageLight.intensity=pt.lerp(12,45,t),this.sun.intensity*=1-i*.96,this.hemi.intensity*=1-i*.55,this.scene.environmentIntensity=.2*(1-i*.88),this.scene.fog.color.lerp(new ge("#25364e"),i),this.water&&(this.water.material.uniforms.sunDirection.value.copy(n),this.water.material.uniforms.sunColor.value.copy(this.sun.color)),(e||t<.01||t>.99)&&(this.environmentDusk===void 0||Math.abs(t-this.environmentDusk)>.5)){let r=new Mr,a=this.sky.clone();a.visible=!0,a.material=this.sky.material.clone(),a.material.uniforms=Oi.clone(this.sky.material.uniforms),a.material.uniforms.showSunDisc&&(a.material.uniforms.showSunDisc.value=!1),r.add(a);let o=this.pmrem.fromScene(r,.04,.1,1500);this.environmentTarget?.dispose(),this.environmentTarget=o,this.scene.environment=o.texture,this.environmentDusk=t,a.material.dispose()}}resize(){let e=this.play?.concert?.active?65e4:18e5,t=Math.min(devicePixelRatio,this.low?1:1.25,Math.sqrt(e/(innerWidth*innerHeight))),i=[innerWidth,innerHeight,t,this.low].join(":");i!==this.lastSize&&(this.lastSize=i,this.renderer.setPixelRatio(t),this.renderer.setSize(innerWidth,innerHeight,!1),this.camera.aspect=innerWidth/innerHeight,this.camera.updateProjectionMatrix(),this.composer.setPixelRatio(t),this.composer.setSize(innerWidth,innerHeight),this.meadow&&(this.meadow.count=this.low?Math.floor(this.meadow.instanceMatrix.count*.25):this.meadow.instanceMatrix.count),this.renderer.shadowMap.enabled=!this.low,this.renderer.shadowMap.needsUpdate=!0)}setCamera(e,t){this.cam=e,this.camera.position.fromArray(e),this.camera.lookAt(...t),this.camera.updateMatrixWorld()}draw(e){this.jamKit?.update(e);for(let i of this.contactShadows||[])i.mesh.visible=this.jamKit.enabled&&i.root.visible,i.mesh.position.x=i.root.position.x,i.mesh.position.z=i.root.position.z;this.frame++,this.renderer?.shadowMap&&!this.low&&(this.lastShadowTime===void 0||e-this.lastShadowTime>=1/(this.play?.concert?.active?12:24))&&(this.renderer.shadowMap.needsUpdate=!0,this.lastShadowTime=e),this.renderer?.info&&(this.renderer.info.autoReset=!1,this.renderer.info.reset()),this.time.value=e,this.sky&&(this.sky.material.uniforms.time.value=e),this.updateLighting();let t=new Pe;for(let i of this.batches)if(i.dirty){i.mesh.visible=!(this.jamKit?.enabled&&i.allReplaced);for(let n=0;n<i.nodes.length;n++)t.fromArray(i.data,n*24),(i.nodes[n].concertHidden||this.jamKit?.enabled&&i.replacements?.[n])&&t.scale(new R(0,0,0)),i.mesh.setMatrixAt(n,t);i.mesh.instanceMatrix.needsUpdate=!0,i.dirty=!1}if(this.water&&(this.water.material.uniforms.time.value=e*.35),this.fire.intensity=(18+22*this.dusk)*(1+Math.sin(e*6)*.08),this.low||this.postprocessingSupported===!1)this.renderer.render(this.scene,this.camera);else if(this.renderer.setRenderTarget(null),this.composer.render(),this.renderer.setRenderTarget(null),this.postprocessingSupported===void 0){let i=this.renderer.getContext(),n=new Uint8Array(4);i.readPixels(Math.floor(i.drawingBufferWidth/2),Math.floor(i.drawingBufferHeight/2),1,1,i.RGBA,i.UNSIGNED_BYTE,n),this.postprocessingSupported=n[3]>0,this.postprocessingSupported||(this.renderer.setRenderTarget(null),this.renderer.render(this.scene,this.camera))}}project(e){let t=new R(...e).project(this.camera);return t.z>1?null:[(t.x*.5+.5)*innerWidth,(-t.y*.5+.5)*innerHeight,t.z]}async compile(){await this.renderer.compileAsync(this.scene,this.camera)}};typeof window<"u"&&(window.FestivalCopy={recordLabel:zi},window.FestivalCrowd={EXTRA_FESTIVAL_GUESTS:pf},window.FestivalNpcs={NPC_REGISTRY:$r,FEATURED_NPCS:Mn,CROWD_GROUPS:wn,LOCATION_KEYS:_i,SCHEDULE_TAGS:xs,listNpcs:Po,getNpc:vs,featuredConcertKitIds:Qr,generateBackgroundGuests:Co,assertNpcRegistry:ff,scheduleStatus:Io,TAG_BEHAVIORS:sh,cycleTags:yo,resolveTagTarget:Kr,NpcScheduleRunner:Jr},window.FestivalEngine=Qd,window.Atmosphere={createAtmosphere:td,WIND:Rt,TIME_PRESETS:fo,DEFAULT_TIME_PRESET:Gl},window.FestivalPlay=ah,window.FestivalMusic=Do,window.attachGameDebug=dg,window.QUALITY_STORAGE_KEY=ch,window.loadQualityPreference=ug,window.saveQualityPreference=qd,window.applyEngineQuality=jd,window.PassportStore={PASSPORT_STORAGE_KEY:lh,DISCOVERY_STORAGE_KEY:hh,ROUND_STORAGE_KEY:fg,STAMP_IDS:uh,PILL_IDS:Xd,RECORD_CHOICES:Kd,DISTRICT_IDS:Jd,emptyPassport:Mo,normalizePassport:Yd,loadPassport:pg,savePassport:mg,loadDiscoveries:gg,saveDiscoveries:bg},window.FestivalMapData={DESTINATIONS:dh,TOUR_ROUTE:xg,MAP_PANEL_IDS:vg,destinationIds:Zd,cloneDestination:$d,listDestinations:_g});})();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
