import {escapeHTML as esc} from './logic.mjs';
export const COLORS={red:'#BD3C49',blue:'#3273B7',green:'#337751',yellow:'#E5B629',black:'#263347',white:'#FFFFFF'};
export const COLOR_NAMES={red:'红色',blue:'蓝色',green:'绿色',yellow:'黄色',black:'黑色',white:'白色'};
function colorSymbol(color){
  const start='<svg class="color-symbol" viewBox="0 0 32 32" aria-hidden="true">';
  const shapes={red:'<circle cx="16" cy="16" r="8" fill="currentColor"/>',blue:'<path d="M16 3C13 9 7 15 7 21a9 9 0 0018 0c0-6-6-12-9-18z" fill="currentColor"/>',green:'<path d="M25 5C9 3 4 12 7 22c10 5 21-1 18-17z" fill="currentColor"/><path d="m7 27 14-16" fill="none" stroke="var(--swatch)" stroke-width="2.5"/>',yellow:'<circle cx="16" cy="16" r="6" fill="currentColor"/><path d="M16 2v5m0 18v5M2 16h5m18 0h5M6 6l4 4m12 12 4 4M6 26l4-4M22 10l4-4" stroke="currentColor" stroke-width="2.5"/>',black:'<path d="m16 5 12 22H4z" fill="currentColor"/>',white:'<circle cx="16" cy="16" r="10" fill="none" stroke="currentColor" stroke-width="3"/>'};
  return start+shapes[color]+'</svg>';
}
export function icon(name,size=22){
  const paths={sound:'M3 9h4l5-5v16l-5-5H3V9zm12-1a6 6 0 010 8m3-11a10 10 0 010 14',arrow:'M5 12h14m-6-6 6 6-6 6',back:'M19 12H5m6-6-6 6 6 6',check:'m5 12 4 4L19 6',close:'m6 6 12 12M6 18 18 6',play:'m8 5 11 7-11 7V5z',pause:'M8 5v14M16 5v14',home:'m3 10 9-7 9 7M5 9v11h14V9M10 20v-7h4v7',flag:'M5 21V3m0 0h12l-3 4 3 4H5',spark:'m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2z',download:'M12 3v12m-5-5 5 5 5-5M5 17v4h14v-4',settings:'M4 7h16M4 17h16M8 4v6m8 4v6',book:'M3 4h6a4 4 0 013 2 4 4 0 013-2h6v15h-6a4 4 0 00-3 2 4 4 0 00-3-2H3V4zm9 2v15'};
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]||paths.spark}"/></svg>`;
}
function personBody(kind='nori',pose='hello'){
  const guide=kind==='nori',shirt=guide?'#337751':'#D69035',hair=guide?'#6C4035':'#344A68',hat=guide?'#E88742':'#427CA7';
  return `<g shape-rendering="crispEdges"><path d="M23 74h13v21H21V83h2zm20 0h13v21H43z" fill="#344A68"/><path d="M18 94h19v6H15v-6zm24 0h19v6H42z" fill="#18324B"/><path d="M17 45h43v33H17z" fill="${shirt}"/><path d="M17 45h8v32h-8zm35 0h8v32h-8z" fill="${guide?'#285B43':'#B77930'}"/><path d="M25 45h27v8H25z" fill="#F2C29B"/><path d="M18 18h41v29H18z" fill="#F2C29B"/><path d="M18 14h41v12H18v12h-5V20h5zm35 12h6v14h-6z" fill="${hair}"/><path d="M18 11h35v10H18zm-7 10h49v5H11z" fill="${hat}"/><path d="M27 31h4v5h-4zm16 0h4v5h-4z" fill="#18324B"/><path d="M33 40h9v3h-9z" fill="#A45E53"/><path d="M26 53h23v5H26v10h-5V53z" fill="${guide?'#EAAE66':'#A84D68'}"/>${pose==='hello'?'<path d="M9 45h9v19H9zM2 32h8v18H2z" fill="#F2C29B"/>':'<path d="M9 49h8v24H9z" fill="#F2C29B"/>'}<path d="M60 49h8v24h-8z" fill="#F2C29B"/>${pose==='bye'?'<path d="m74 58 9 0 0-6 10 10-10 10v-6h-9z" fill="#A84D68"/>':''}</g>`;
}
export function character(kind='nori',pose='hello',label='营地朋友'){
  return `<svg class="character-art" viewBox="0 0 98 108" role="img" aria-label="${esc(label)}"><ellipse cx="39" cy="101" rx="30" ry="5" fill="#18324B" opacity=".1"/>${personBody(kind,pose)}</svg>`;
}
export function swatch(color){
  const key=COLORS[color]?color:'blue';
  return `<span class="swatch swatch-${key}" style="--swatch:${COLORS[key]}" role="img" aria-label="${COLOR_NAMES[key]}">${colorSymbol(key)}</span>`;
}
export function tiles(count=3,color='blue'){
  return `<span class="tile-group" role="img" aria-label="${count}个${COLOR_NAMES[color]||'蓝色'}方块">${Array.from({length:count},()=>`<i class="count-tile" style="--tile:${COLORS[color]||COLORS.blue}" aria-hidden="true"></i>`).join('')}</span>`;
}
export function badgeSVG(name='Alex',color='blue',count=3){
  const fill=COLORS[color]||COLORS.blue,n=Math.max(1,Math.min(6,Number(count)||3));
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 420 270" role="img" aria-label="${esc(name)}的营地名牌"><rect x="8" y="8" width="404" height="254" rx="20" fill="white" stroke="#18324B" stroke-width="4"/><path d="M28 8h364v58H28z" fill="${fill}"/><path d="m182 8 0 24 56 0V8" fill="#18324B"/><text x="210" y="103" text-anchor="middle" fill="#516980" font-size="17" font-family="Trebuchet MS,Arial,sans-serif">Hello! My name is</text><text x="210" y="158" text-anchor="middle" fill="#18324B" font-size="${name.length>8?29:42}" font-weight="bold" font-family="Trebuchet MS,Microsoft YaHei,Arial,sans-serif">${esc(name)}</text>${Array.from({length:n},(_,i)=>`<path d="M${210-n*14+i*28} 188h20v20h-20z" fill="${fill}" stroke="#18324B" stroke-width="1.5"/>`).join('')}<text x="210" y="241" text-anchor="middle" fill="#516980" font-size="15" font-family="Microsoft YaHei,Arial,sans-serif">营地见面会 · 原创英语样课</text></svg>`;
}
export function wordArt(word){
  if(COLORS[word])return swatch(word);
  const numbers=['one','two','three','four','five','six'];if(numbers.includes(word))return tiles(numbers.indexOf(word)+1);
  if(word==='hello')return character('nori','hello','挥手打招呼的朋友');
  if(word==='goodbye')return character('alex','bye','正在挥手告别的朋友');
  if(word==='friend')return `<span class="friends-art">${character('nori','idle')}${character('alex','idle')}</span>`;
  if(word==='name')return `<span class="mini-name" aria-hidden="true">Hello, I'm<br><b>Alex</b></span>`;
  if(word==='yes'||word==='no')return `<span class="response-symbol ${word}" aria-hidden="true">${word==='yes'?icon('check',64):icon('close',64)}</span>`;
  return icon('spark',60);
}
export function optionArt(lesson,qi,text){
  const color=text.includes('红色')?'red':text.includes('绿色')?'green':text.includes('黄色')?'yellow':'blue';
  const nums={'一':1,'二':2,'两':2,'三':3,'四':4,'五':5,'六':6};
  if(text.includes('色牌'))return swatch(color);
  if(text.includes('小方片')||text.includes('标记')){const n=nums[text[0]]||3;return lesson===4?badgeSVG('Alex',color,n):tiles(n,color);}
  if(text==='见面问候')return character('nori','hello','见面问候');
  if(text==='离开告别'||text==='再见')return character('alex','bye','离开告别');
  if(text==='表示不同意'||text==='不；不是')return wordArt('no');
  if(text==='是；对')return wordArt('yes');
  return '';
}
export function taskTarget(lesson,qi){
  if(lesson===1&&qi===1)return `<div class="sample-label">示例名牌</div><div class="small-badge">${badgeSVG('Alex','blue',3)}</div><p class="target-line">My name is <strong>Alex</strong>.</p>`;
  if(lesson===2&&qi===1)return `<div class="target-swatch">${swatch('yellow')}</div>`;
  if(lesson===3&&qi===1)return `<div class="target-tiles">${tiles(5,'blue')}</div>`;
  if(lesson===4&&qi===1)return `<p class="sample-label">练习用的固定示例，不是你的个人名牌</p><div class="small-badge">${badgeSVG('Alex','blue',3)}</div><div class="sample-reading">Name: Alex.<br>Color: blue.<br>Number: three.</div>`;
  return '';
}
function tree(x,y,s=1){return `<g transform="translate(${x} ${y}) scale(${s})" shape-rendering="crispEdges"><path d="M19 56h12v36H19z" fill="#97654B"/><path d="M18 0h14v12h12v13h11v16h9v20H-13V41H-4V25H7V12h11z" fill="#4D8461"/><path d="M7 25h24v15H-4V25zm-20 16h38v20h-38z" fill="#659C6C"/></g>`;}
export function campScene(done=[]){
  const posts=[[70,320],[266,170],[466,312],[380,412]];
  return `<svg class="camp-illustration" viewBox="0 0 620 500" role="img" aria-label="原创营地：帐篷、树木、两位朋友和四个可点击的课站"><defs><pattern id="campGrid" width="24" height="24" patternUnits="userSpaceOnUse"><path d="M24 0H0v24" fill="none" stroke="#E1EBF4" stroke-width=".6"/></pattern></defs><rect width="620" height="500" rx="30" fill="#F7FBFF"/><rect width="620" height="500" rx="30" fill="url(#campGrid)"/><circle cx="511" cy="76" r="32" fill="#F3CF73"/><path d="M68 65h58v-12h52v18h22v14H68zm270-28h40v-10h40v10h21v15h-101z" fill="white"/><path d="M28 270 206 190l178 36 207 101-34 108-186 50-231-30L16 371z" fill="#E0EDDA"/><path d="M16 371 140 455l231 30 186-50v18l-187 46-232-29L16 386z" fill="#BBCFB0"/><path d="m77 335 127-60 104 7 170 60-51 70" stroke="#F9F3DA" stroke-width="32" fill="none" stroke-linecap="square"/>${tree(65,180,.9)}${tree(504,225,1.05)}${tree(415,102,.7)}${tree(157,132,.65)}<g shape-rendering="crispEdges"><path d="m213 272 86-123 94 136-96 32z" fill="#D57B3E"/><path d="m299 149 94 136 54-24-88-126z" fill="#F0AC67"/><path d="m213 272 86-123 3 166z" fill="#F8C48B"/><path d="m265 296 34-78 36 86-33 12z" fill="#516146"/><path d="m299 219 3 97 33-12z" fill="#334C40"/><path d="M283 281h12v16h-12zm21 2h12v17h-12z" fill="#F5DBAD"/><path d="M440 354h58v12h-58zm-8 17h74v10h-74z" fill="#B78D65"/><path d="M448 330h38v24h-38z" fill="#EAAE66"/></g><g transform="translate(128 278) scale(.72)">${personBody('nori','hello')}</g><g transform="translate(337 313) scale(.74)">${personBody('alex','idle')}</g><path d="M74 383h12v12H74zm17 12h8v8h-8zm340-141h8v8h-8zm9 9h12v12h-12z" fill="#A84D68"/><path d="M201 377h8v8h-8zm12 6h6v6h-6zm305 24h8v8h-8z" fill="#6C9463"/>${posts.map(([x,y],i)=>`<a href="#lesson/${i+1}/words" aria-label="进入第${i+1}课"><g class="camp-stop" transform="translate(${x} ${y})"><path d="M0 14h5v49H0z" fill="#8A6853"/><path d="M-14-15h47v34h-47z" fill="${done.includes(i+1)?'#2E664A':'#FFFFFF'}" stroke="#18324B" stroke-width="2"/><text x="10" y="9" text-anchor="middle" fill="${done.includes(i+1)?'#FFFFFF':'#18324B'}" font-family="Trebuchet MS,sans-serif" font-size="20" font-weight="bold">${done.includes(i+1)?'✓':i+1}</text></g></a>`).join('')}<g transform="translate(401 43)"><path d="M0 0v46" stroke="#18324B" stroke-width="3"/><path d="M0 0h28l-7 12 7 12H0z" fill="#A84D68"/></g></svg>`;
}
