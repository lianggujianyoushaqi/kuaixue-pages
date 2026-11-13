export function createSpeaker(clips,onState){
  let operation=0,media=null,utterance=null,watchdog=null,rate=1;
  const synth=window.speechSynthesis;
  const emit=(status,id='',provider='',message='')=>onState({status,id,provider,message});
  function cleanup(){clearTimeout(watchdog);if(media){media.onplaying=media.onended=media.onerror=null;media.pause();media=null;}if(utterance){utterance.onstart=utterance.onend=utterance.onerror=null;utterance=null;if(synth)synth.cancel();}}
  function stop(){operation++;cleanup();emit('idle');}
  function fail(token,id,provider,message){if(token!==operation)return;operation++;cleanup();emit('error',id,provider,message);}
  async function englishVoice(){
    if(!synth)return null;
    let voices=synth.getVoices();
    if(!voices.length){await new Promise(resolve=>{let done=false;const finish=()=>{if(done)return;done=true;synth.removeEventListener('voiceschanged',finish);resolve();};synth.addEventListener('voiceschanged',finish);setTimeout(finish,1200);});voices=synth.getVoices();}
    return voices.filter(v=>/^en[-_]/i.test(v.lang)).sort((a,b)=>(/Zira/i.test(a.name)?-2:/en-US/i.test(a.lang)?-1:0)-(/Zira/i.test(b.name)?-2:/en-US/i.test(b.lang)?-1:0));
  }
  async function play(id,onEnd){
    stop();const token=operation,clip=clips[id];
    if(!clip){emit('error',id,'','这条示范音未配置。可查看文字继续。');return;}
    const provider=clip.available?'recording':'browser';emit('loading',id,provider);
    if(clip.available){
      const audio=new Audio(clip.file);media=audio;audio.playbackRate=rate;audio.preservesPitch=true;
      audio.onplaying=()=>{if(token===operation)emit('playing',id,provider);};
      audio.onended=()=>{if(token!==operation)return;operation++;cleanup();emit('ended',id,provider);onEnd?.();};
      audio.onerror=()=>fail(token,id,provider,'示范音加载失败。请重试，或打开文字辅助继续。');
      watchdog=setTimeout(()=>fail(token,id,provider,'示范音加载超时，请重试。'),12000);
      audio.onloadeddata=()=>{if(token===operation){clearTimeout(watchdog);watchdog=null;}};
      try{await audio.play();}catch{fail(token,id,provider,'浏览器未能播放，请再点一次喇叭；也可打开文字辅助。');}
      return;
    }
    const voices=await englishVoice();if(token!==operation)return;
    if(!voices?.length){fail(token,id,provider,'当前浏览器没有可用英文声线。可打开文字辅助继续，或重试本地示范音。');return;}
    const preferred=voices.find(v=>clip.voice.includes('David')&&/David/i.test(v.name))||voices[0];
    const u=new SpeechSynthesisUtterance(clip.text);utterance=u;u.voice=preferred;u.lang=preferred.lang;u.rate=rate===0.8?0.68:0.86;
    u.onstart=()=>{if(token!==operation)return;clearTimeout(watchdog);watchdog=setTimeout(()=>fail(token,id,provider,'语音播放没有正常结束，请重试或使用文字辅助。'),Math.max(20000,clip.text.length*220));emit('playing',id,provider);};
    u.onend=()=>{if(token!==operation)return;operation++;utterance=null;clearTimeout(watchdog);watchdog=null;emit('ended',id,provider);onEnd?.();};
    u.onerror=e=>{if(token!==operation)return;fail(token,id,provider,e.error==='not-allowed'?'请先点击喇叭允许播放，再试一次。':'设备英文语音暂不可用，可打开文字辅助继续。');};
    watchdog=setTimeout(()=>fail(token,id,provider,'设备语音没有启动，请重试或使用文字辅助。'),8000);
    synth.speak(u);
  }
  return {play,stop,setRate(value){rate=value===0.8?0.8:1;stop();},get status(){return media?{provider:'recording',paused:media.paused,readyState:media.readyState,time:media.currentTime}:utterance?{provider:'browser',speaking:!!synth?.speaking,pending:!!synth?.pending}:{provider:'idle'};}};
}
