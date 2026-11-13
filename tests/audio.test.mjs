import test from 'node:test';
import assert from 'node:assert/strict';
import {createSpeaker} from '../audio.mjs';
const originalWindow=globalThis.window,originalUtterance=globalThis.SpeechSynthesisUtterance;
function mock(voices=[{name:'Microsoft Zira',lang:'en-US'}]){
  const synth={getVoices:()=>voices,addEventListener(){},removeEventListener(){},cancel(){},speak(u){this.current=u;}};
  globalThis.window={speechSynthesis:synth};globalThis.SpeechSynthesisUtterance=class{constructor(text){this.text=text;}};
  return synth;
}
function restore(){globalThis.window=originalWindow;globalThis.SpeechSynthesisUtterance=originalUtterance;}
const clips={a:{text:'Hello!',voice:'Microsoft Zira Desktop',available:false}};
test('browser narrator only marks completion on the current utterance end event',async()=>{
  try{const synth=mock(),events=[];let finished=0;const p=createSpeaker(clips,e=>events.push(e));await p.play('a',()=>finished++);assert.equal(events.at(-1).status,'loading');assert.equal(finished,0);synth.current.onstart();assert.equal(events.at(-1).status,'playing');synth.current.onend();assert.equal(events.at(-1).status,'ended');assert.equal(finished,1);p.stop();}finally{restore();}
});
test('navigation stop prevents a stale speech callback from completing an activity',async()=>{
  try{const synth=mock();let finished=0;const p=createSpeaker(clips,()=>{});await p.play('a',()=>finished++);const stale=synth.current.onend;p.stop();stale();assert.equal(finished,0);}finally{restore();}
});
test('no English voice shows an error instead of faking playback completion',async()=>{
  try{mock([{name:'Chinese only',lang:'zh-CN'}]);const events=[];let finished=0;const p=createSpeaker(clips,e=>events.push(e));await p.play('a',()=>finished++);assert.equal(events.at(-1).status,'error');assert.equal(finished,0);p.stop();}finally{restore();}
});
test('unknown narration never falls through to an unrelated file',async()=>{
  try{mock();const events=[];const p=createSpeaker(clips,e=>events.push(e));await p.play('unknown');assert.equal(events.at(-1).status,'error');assert.match(events.at(-1).message,/未配置/);}finally{restore();}
});
