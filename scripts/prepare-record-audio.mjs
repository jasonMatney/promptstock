// Convert the supplied originals to the browser copies used by the record player.
import {mkdir} from 'node:fs/promises';
import {spawnSync} from 'node:child_process';
import {RECORD_TRACKS} from '../festival-music.mjs';
await mkdir('audio/records',{recursive:true});
for(const {title,src} of RECORD_TRACKS){
 const result=spawnSync('ffmpeg',['-nostdin','-hide_banner','-loglevel','error','-y','-i',`audio/${title}.m4a`,'-map','0:a:0','-map_metadata','-1','-c:a','libmp3lame','-b:a','160k',src],{stdio:'inherit'});
 if(result.error)throw result.error;if(result.status!==0)throw Error(`Could not prepare ${title}`);
 console.log(`Prepared ${title}`);
}
