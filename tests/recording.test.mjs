import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import {createHash} from 'node:crypto';
import {AUDIO} from '../audio-index.mjs';
import {createSpeaker} from '../audio.mjs';

test('all 412 bundled recordings exist and match text, voice and checksum manifest',()=>{
  const manifest=JSON.parse(fs.readFileSync(new URL('../audio-manifest.json',import.meta.url),'utf8'));
  assert.equal(Object.keys(AUDIO).length,412);assert.equal(manifest.files.length,412);
  for(const [id,clip] of Object.entries(AUDIO)){
    assert.equal(clip.available,true);const entry=manifest.files.find(r=>r.id===id);assert(entry);
    assert.equal(entry.text,clip.text);assert.equal(entry.voice,clip.voice);
    const data=fs.readFileSync(new URL('../'+clip.file,import.meta.url));
    assert.equal(data.subarray(0,4).toString(),'RIFF');assert.equal(data.subarray(8,12).toString(),'WAVE');
    assert.equal(createHash('sha256').update(data).digest('hex'),entry.sha256);
    assert(entry.seconds>0.1&&entry.rms>10&&entry.peak>100);
  }
});
const oldWindow=globalThis.window,oldAudio=globalThis.Audio;
const clip={local:{text:'Hello!',voice:'Microsoft Zira Desktop',available:true,file:'assets/audio/example.wav'}};
function setup(reject=false){
  const created=[];globalThis.window={};
  globalThis.Audio=class{
    constructor(src){this.src=src;this.paused=true;this.readyState=4;this.currentTime=0;created.push(this);}
    play(){if(reject)return Promise.reject(new Error('Playback denied'));this.paused=false;return Promise.resolve();}
    pause(){this.paused=true;}
  };
  return created;
}
function restore(){globalThis.window=oldWindow;globalThis.Audio=oldAudio;}
test('recordings play without any speechSynthesis service and retain slow-rate pitch',async()=>{
  try{const created=setup(),events=[];let completed=0;const player=createSpeaker(clip,e=>events.push(e));player.setRate(0.8);await player.play('local',()=>completed++);const a=created[0];a.onloadeddata();a.onplaying();assert.equal(a.playbackRate,0.8);assert.equal(a.preservesPitch,true);assert.equal(events.at(-1).provider,'recording');const end=a.onended;end();end();assert.equal(completed,1);assert.equal(events.at(-1).status,'ended');}finally{restore();}
});
test('stopping native audio invalidates queued callbacks and pauses the old element',async()=>{
  try{const created=setup(),events=[];let completed=0;const player=createSpeaker(clip,e=>events.push(e));await player.play('local',()=>completed++);const a=created[0],end=a.onended;player.stop();end();assert.equal(completed,0);assert(a.paused);assert.equal(events.at(-1).status,'idle');}finally{restore();}
});
test('native play rejection never marks a listening item heard',async()=>{
  try{setup(true);const events=[];let completed=0;const player=createSpeaker(clip,e=>events.push(e));await player.play('local',()=>completed++);assert.equal(completed,0);assert.equal(events.at(-1).status,'error');assert.match(events.at(-1).message,/未能播放/);player.stop();}finally{restore();}
});
test('a damaged recording reports one terminal error and no successful completion',async()=>{
  try{const created=setup(),events=[];let completed=0;const player=createSpeaker(clip,e=>events.push(e));await player.play('local',()=>completed++);const a=created[0],error=a.onerror;error();error();assert.equal(completed,0);assert.equal(events.filter(e=>e.status==='error').length,1);player.stop();}finally{restore();}
});
