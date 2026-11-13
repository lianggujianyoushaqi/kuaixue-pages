import {wordArt as firstArt,optionArt as firstOption,taskTarget as firstTarget,COLORS} from './art.mjs';
import {escapeHTML as esc} from './logic.mjs';
const ink='#18324b',green='#65966a',orange='#e88742',blue='#72acdb',paper='#fff7df';
const R=(x,y,w,h,f=paper)=>`<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="2" fill="${f}"/>`;
const P=(d,f='none')=>`<path d="${d}" fill="${f}"/>`;
const C=(x,y,r,f)=>`<circle cx="${x}" cy="${y}" r="${r}" fill="${f}"/>`;
const arrow=(d='M15 50H82m-16-14 16 14-16 14')=>P(d);
const person=(x=32,y=16,pose='stand')=>`<g transform="translate(${x} ${y})">${R(4,0,21,22,'#efc49e')}${R(3,-2,24,7,'#427ca7')}${R(0,24,32,29,green)}${P(pose==='sit'?'M7 53v10h30v18M25 53v6h25v22':'M8 53v28M25 53v28')}${P(pose==='run'?'M0 28-12 42M32 28l15-10':'M0 29-7 49M32 29l7 20')}</g>`;
const book=R(15,22,70,58,blue)+P('M50 22v58M24 34h17m18 0h17M24 46h17m18 0h17');
const key=C(27,38,13,'#e5b629')+C(27,38,4,paper)+P('m36 47 41 31 8-10-10-8-6 8-6-6 6-8-8-7-6 8-12-12','#e5b629');
const table=R(12,38,76,12,orange)+P('M20 50v39M80 50v39');
const chair=R(27,15,36,39,orange)+R(25,55,53,10,orange)+P('M31 65v25M70 65v25');
const tree=R(44,61,13,29,'#a77b52')+P('M50 7 19 42h13L12 66h76L68 42h13z',green);
const house=(fill=orange)=>R(20,43,60,47,fill)+P('M12 43 50 10l38 33z','#cf7742')+R(42,61,17,29,'#664c45')+R(26,52,10,13,blue)+R(65,52,10,13,blue);
const box=R(18,39,65,47,orange)+P('m18 39 20-17h64L83 39M50 39v47M38 22l12 17');
const cup=(fill=blue)=>P('M27 22h45L65 85H34z','#fff')+P('M31 48h36l-4 31H36z',fill)+P('M72 32h12v26H68');
const note=R(24,10,53,78,paper)+P('M34 28h33M34 42h33M34 56h24M34 70h29');
const bridge=P('M6 67 24 48h53l18 19v14H6z',orange)+P('M15 65h70M28 49v31M44 49v31M60 49v31M76 49v31M12 44v23M88 44v23');
const river=P('M23 3Q75 22 43 48T65 97H93Q56 71 73 48T55 3z',blue)+P('M40 15h17M39 70h16M63 87h16');
const shapes={
bag:P('M30 30V18q20-17 40 0v12')+R(20,24,60,66,orange)+R(30,54,40,27,'#f3c983')+P('M20 42h60M40 63h20'),
map:R(9,20,82,65,'#dcebcf')+P('m35 20-6 65m35-65 5 65M16 65l20-23 20 18 28-26')+C(16,65,4,orange)+C(84,34,4,orange),book,
pen:P('m22 77 5-17L70 17l13 13-43 43z',blue)+P('m27 60 13 13M22 77l-4 8 9-4M65 23l13 13'),key,box,
water:cup()+P('M47 29q-12 12 0 16 12-4 0-16',blue),bread:P('M18 80V37C2 8 39 4 50 22 65 4 99 13 82 38v42z','#e3b56f')+P('M33 36v27M50 32v31M67 36v27'),
apple:P('M50 31C17 8 6 53 28 78q15 16 22 4 14 12 29-9 20-43-15-49z','#ce5660')+P('M50 31V13m0 5Q69 2 78 14 64 28 50 18',green),
milk:R(25,28,49,61,'#fff')+P('m25 28 11-17h26l12 17M36 11v17h38')+R(32,51,35,23,'#f2c49b')+P('M36 57h27M36 65h27'),
rice:P('M14 56h72q-5 36-36 36T14 56z',blue)+P('M16 55q1-34 34-34t34 34z','#fff')+P('M28 38l5 5m7-13 5 6m12-6 5 6m5 8 5 5m-34-1 6 3'),
egg:P('M50 8C27 8 12 55 22 75q27 27 55 0C89 55 72 8 50 8z','#ffefc9'),small:house(blue)+P('M4 91h92M25 5h50')+P('M30 8v10m40-10v10'),big:house(orange)+P('M4 94V7h92v87'),
house:house(),room:R(8,10,85,80,'#e5eef5')+P('m8 10 17 13h49l19-13M25 23v51L8 90m17-16h49l19 16M74 23v51')+R(33,44,31,22,blue),door:R(25,8,53,84,'#bd885b')+R(34,19,35,59,orange)+C(62,58,3,'#f3cf73'),window:R(12,15,77,70,blue)+P('M50 15v70M12 50h77')+P('m20 38 13-13m24 48 15-15'),bed:R(12,50,77,23,blue)+R(12,38,11,42,orange)+R(26,43,22,11,'#fff')+P('M18 73v17M83 73v17'),chair,table,
lamp:R(43,51,12,35,orange)+R(27,85,45,7,blue)+P('M34 15h33l16 38H17z','#f3cf73')+P('M11 36H2m87 0h9'),
in:box+R(37,40,28,28,blue)+P('M14 87h73'),on:table+C(50,26,10,blue),under:table+C(50,72,10,blue),near:house()+tree.replaceAll('44','80').replaceAll('50','86'),
cat:P('M22 43 20 16l24 15h16l22-15-3 29v37H22z','#dda67b')+C(39,49,3,ink)+C(65,49,3,ink)+P('m48 59 5 5 5-5M24 74Q0 83 10 47'),
dog:P('M28 30q22-13 44 0l8 49H21z','#bd885b')+P('M29 29Q4 22 12 65l19-15M71 29q24-6 19 35L70 50','#8c684f')+C(40,48,3,ink)+C(62,48,3,ink)+P('m45 61 7 6 7-6','#18324b'),
cow:R(20,29,60,54,'#fff')+P('M24 31 15 12l18 10m39 9 14-19-19 10','#f2c49b')+R(26,32,15,18,ink)+R(61,32,12,20,ink)+R(27,57,46,24,'#edb4af')+C(39,68,3,ink)+C(62,68,3,ink),
pig:C(50,50,34,'#efafb6')+P('m20 31-4-22 27 13M62 20 86 9l-5 25','#efafb6')+C(38,44,3,ink)+C(65,44,3,ink)+R(32,56,38,21,'#df8e9c')+C(43,66,3,ink)+C(59,66,3,ink),
hen:P('M20 55q-4-38 29-34 24 0 23 26l15 8-15 9q-5 23-34 21z','#fff')+P('m38 21-2-15 12 6 7-9 8 19','#ce5660')+P('m71 42 19 8-19 7','#e5b629')+C(59,35,3,ink)+P('M41 83v10m17-10v10'),
duck:P('M13 53q18 13 29-8-9-23 13-29 29-5 20 25l18 6-21 7q2 33-32 30T13 53z','#f4cf70')+C(64,29,3,ink)+P('M75 36h20v10H74',orange)+P('M5 89h88',blue),
sun:C(50,50,22,'#f3cf73')+P('M50 4v16m0 60v16M4 50h16m60 0h16M15 15l12 12m46 46 12 12M15 85l12-12m46-46 12-12'),
cloud:P('M17 70C-5 52 12 26 32 35 40 2 79 18 78 40 111 43 98 72 77 72z','#d7e6ee'),rain:P('M17 49C0 37 12 17 31 26 43 0 76 9 79 30 107 34 96 52 77 52z','#cadde9')+P('m25 61-9 20m35-20-9 20m35-20-9 20',blue),wind:P('M6 32h66q24-1 14-18-9-12-16 2M6 50h50q28 0 20 21-7 16-19 2M8 68h25'),
coat:P('m30 15 20 10 20-10 22 39-18 9-8-20v46H32V43l-7 20-18-9z',orange)+P('M50 25v64m-17-27 10 5m14 0 10-5'),hat:P('M23 54V24q28-22 54 0v30l16 10v12H7V64z',blue)+P('M23 51h54'),shirt:P('m30 15 20 10 20-10 24 25-17 18-10-12v43H32V46L22 58 6 40z',blue)+P('M50 25v63m-10-65 10 12 10-12'),
shoes:R(10,33,29,27,blue)+P('M10 58h28l10 9v13H7z',orange)+R(57,33,29,27,blue)+P('M57 58h28l10 9v13H54z',orange),boots:R(11,12,27,52,orange)+P('M11 60h27l11 10v13H8z',orange)+R(57,12,27,52,orange)+P('M57 60h27l11 10v13H54z',orange),socks:P('M16 12h24v45l9 8-13 20H11L4 72l12-15z',paper)+P('M62 12h24v45l9 8-13 20H57L50 72l12-15z',paper)+P('M16 25h24m22 0h24'),
tree,flower:P('M50 50v42m0-18q-24-24-29-6 6 19 29 11m0 0q24-24 29-6-6 19-29 11',green)+C(50,33,23,'#c76f8b')+C(50,33,9,'#f3cf73'),river,forest:`<g transform="translate(-2 16) scale(.7)">${tree}</g><g transform="translate(38 0) scale(.7)">${tree}</g>`,path:P('M40 4 10 95h50L68 56 90 4z','#e6cd9c')+P('m36 80 7-23m8-15 7-22'),bridge,
banana:P('M17 17q-8 74 58 66l13-16Q44 76 29 17z','#e9be35')+P('M17 17h12M32 42q8 31 39 32'),orange:C(50,56,32,orange)+P('M50 24V11m0 6Q67-3 79 11 66 27 50 17',green),carrot:P('m33 28 39 15-47 49z',orange)+P('M45 30 30 9m24 24L57 6m8 30L82 15',green)+P('m33 36 17 6m-22 8 13 5m-15 8 8 3'),potato:P('M22 31C-7 79 35 97 73 82s28-72-4-70-36 1-47 19z','#bd966d')+P('m25 45 5 2m21-17 4 3m16 29 5 2M35 77l4-2'),fish:P('m20 51-17-22v44l17-22Q60 2 92 51 60 99 20 51z',blue)+C(75,44,3,ink)+P('M45 33v36'),juice:cup(orange)+P('M56 51 64 9h19')+C(38,65,6,'#f3cf73'),
coin:C(50,50,34,'#e5b629')+C(50,50,24,'#f3cf73')+P('M50 31v38M39 40h20m-20 20h20'),shop:R(13,39,75,50,paper)+P('M8 38 23 13h56l16 25z',orange)+P('M29 14 23 38m28-24v24m21-24 7 24')+R(23,52,24,23,blue)+R(60,51,18,38,'#c8b493'),basket:P('M15 42h70L75 87H25z',orange)+P('M28 42V29q22-34 44 0v13M35 43l4 43m25-43-4 43'),food:`<g transform="scale(.52) translate(0 48)">${cup(orange)}</g><g transform="translate(40 0) scale(.62)">${P('M18 80V37C2 8 39 4 50 22 65 4 99 13 82 38v42z','#e3b56f')}</g>`,
school:house(blue)+R(35,12,30,25,paper)+P('M50 16v13l8 4')+P('M17 90h66'),park:tree+R(10,72,32,10,orange)+P('M15 82v10m22-10v10'),farm:house('#d16f66')+P('M8 78h83M8 65v27M92 65v27M19 65v27M82 65v27'),home:house('#dea76a')+P('m40 47 10-10 10 10-10 12z','#c76f8b'),town:`<g transform="scale(.58) translate(1 57)">${house(orange)}</g><g transform="translate(42 0) scale(.58)">${house(blue)}</g>`,store:'',note,light:P('M33 53C2 15 90-8 77 40L66 60H36z','#f3cf73')+R(36,61,31,18,orange)+P('M43 80v7h17v-7M50 1v9M7 26l13 6m64 0 12-6'),dark:R(8,8,84,84,'#344a68')+P('M19 77 76 20',paper),night:R(6,6,88,88,'#344a68')+P('M62 18C26 21 30 70 73 66 47 87 9 56 29 29 38 17 51 12 62 18z','#f3cf73')+C(78,26,3,paper),day:'',now:C(50,50,36,paper)+P('M50 24v28h25')+C(50,52,4,orange),rope:P('M31 19q-35 18 0 36l39 17q33 14 16 22M31 19q59-17 50 14-6 16-42 6-34-10-34 11 0 28 48 30')+P('M30 14v11m17-14v13m16-11v12m17-7-7 11'),wood:R(15,27,68,21,'#bd885b')+R(21,56,68,21,'#cda176')+P('M22 35h54m-48 30h53M27 27v21m46 8v21'),stone:P('m13 70 9-37 25-21 32 14 14 45-25 16H32z','#96a5ad')+P('m22 33 32 12 25-19M54 45 68 87'),
};
shapes.store=shapes.shop;shapes.day=shapes.sun;
const actionWords=['open','close','sit','stand','look','stop','run','jump','swim','walk','fly','sleep','feed','help','find','give','come','follow','want','some','more','please','thanks','hungry','buy','pay','left','right','straight','turn','go','wait','read','write','listen','say','ask','answer','carry','build','fix','first','next','last','together','again','ready'];
function action(w){
 if(['left','right','straight','turn','go','come'].includes(w))return arrow(w==='left'?'M88 50H15m16-16L15 50l16 16':w==='right'?undefined:w==='turn'?'M20 85V35h62M66 19l16 16-16 16':'M50 90V12M34 28 50 12l16 16');
 if(['first','next','last'].includes(w))return [0,1,2].map(i=>R(3+i*33,35,28,30,i===(w==='first'?0:w==='next'?1:2)?orange:'#dce8ef')).join('')+arrow('M8 82h82m-10-8 10 8-10 8');
 if(w==='again')return P('M82 38A34 34 0 1 0 82 70M82 12v26H56');
 if(w==='some')return [20,45,70].map(x=>C(x,52,10,orange)).join('');
 if(w==='more')return cup()+arrow('M8 17h19M18 7v20')+P('M80 10v35m-9-9 9 9 9-9');
 if(w==='swim')return `<g transform="translate(5 -5) scale(.85)">${shapes.duck}</g>`+P('M5 86q15-10 30 0t30 0t30 0',blue);
 if(w==='fly')return P('M5 25Q30 1 50 50 70 1 95 25 68 23 50 75 32 23 5 25z',blue)+arrow('M10 92V60m-8 9 8-9 8 9');
 if(w==='sleep')return shapes.bed+`<g transform="translate(9 18) rotate(-70 50 50) scale(.65)">${person()}</g>`+P('M70 12h15L70 27h15');
 if(w==='open'||w==='close')return R(18,8,58,83,orange)+(w==='open'?P('M26 15 61 30v48L26 86z',ink):R(26,17,42,66,paper))+arrow(w==='open'?'M90 38v32m-8-8 8 8 8-8':'M92 72V40m-8 8 8-8 8 8');
 if(w==='read'||w==='write')return `<g transform="translate(-3 -6) scale(.8)">${person()}</g><g transform="translate(42 29) scale(.55)">${w==='read'?shapes.map:note}</g>`+(w==='write'?P('m63 68 25-27 5 5-25 27z',orange):'');
 if(w==='build'||w==='fix')return bridge+(w==='fix'?P('m48 10 9 13-13 17-9-7 13-17-4-8z',blue):R(40,11,25,18,orange));
 if(w==='find')return C(42,38,24,'#eef6ff')+P('m59 57 27 30')+`<g transform="translate(13 11) scale(.55)">${key}</g>`;
 if(w==='carry')return person()+`<g transform="translate(26 25) scale(.55)">${shapes.wood}</g>`;
 if(w==='feed')return `<g transform="translate(25 0) scale(.7)">${shapes.hen}</g>`+P('M5 72h42L38 90H14z',orange)+C(25,67,3,'#e5b629');
 if(w==='give'||w==='help'||w==='follow'||w==='together')return `<g transform="translate(-10 20) scale(.65)">${person()}</g><g transform="translate(43 15) scale(.65)">${person()}</g>`+(w==='give'?`<g transform="translate(28 23) scale(.45)">${key}</g>`:w==='help'?R(34,48,32,25,orange):arrow('M12 14h65m-10-8 10 8-10 8'));
 if(w==='buy'||w==='pay')return `<g transform="translate(5 0) scale(.65)">${shapes.basket}</g><g transform="translate(44 32) scale(.48)">${shapes.coin}</g>`+arrow('M20 85h53m-9-8 9 8-9 8');
 if(w==='listen')return P('M61 83q-25 6-19-19 3-10 17-13 24-26-3-33-28-5-26 23M61 40q-15-15-15 10M78 28q18 19 0 38');
 if(w==='say'||w==='ask'||w==='answer')return person()+P('M61 3h36v31H80L66 48V34h-5z',paper)+(w==='ask'?P('M73 13q13-10 14 2l-8 7m0 5v2'):w==='answer'?P('m71 18 7 7 13-14'):P('M69 13h20m-20 8h14'));
 if(w==='hungry'||w==='want'||w==='please'||w==='thanks'||w==='ready')return person()+(w==='hungry'?C(48,60,11,paper)+P('M43 60h10'):w==='want'?`<g transform="translate(58 0) scale(.4)">${shapes.apple}</g>`:w==='ready'?P('m63 12 9 9 20-20'):w==='thanks'?P('M62 18q-2-15 10-12 12-3 10 12L72 32z','#c76f8b'):P('M65 14h29v24H76l-10 9z',paper)+P('M72 23h16'));
 if(w==='look')return person()+P('M65 25h25m-8-7 8 7-8 7')+`<g transform="translate(70 41) scale(.28)">${shapes.window}</g>`;
 if(w==='stop'||w==='wait')return person()+P(w==='stop'?'M4 10h18v22H4z':'M2 6h22v23H2z',w==='stop'?'#c76f8b':'#f3cf73')+(w==='wait'?P('M14 10v8h6'):'');
 if(w==='jump')return `<g transform="translate(0 -9)">${person()}</g>`+arrow('M12 89V50m-8 8 8-8 8 8')+P('M35 92h31');
 if(w==='run'||w==='walk')return person(30,15,w==='run'?'run':'stand')+arrow('M4 88h85m-9-8 9 8-9 8')+(w==='run'?P('M4 30h16M1 45h16'):'');
 return person(32,10,w==='sit'?'sit':'stand')+(w==='sit'?`<g transform="translate(31 38) scale(.6)">${chair}</g>`:arrow('M11 87V53m-7 7 7-7 7 7'));
}
for(const w of actionWords)shapes[w]=action(w);
shapes.cold=R(8,8,84,84,'#e5f2fc')+person()+P('M9 18v26M0 31h19M76 19v26m-12-13h25',blue);
shapes.hot=R(8,8,84,84,'#fff0db')+person()+C(83,21,12,'#e5b629')+P('M13 43q-9 15 0 17 9-2 0-17',blue);
shapes.cold+=R(82,50,9,35,'#fff')+R(84,72,5,13,blue)+C(86,86,7,blue);
shapes.hot+=R(82,50,9,35,'#fff')+R(84,54,5,31,orange)+C(86,86,7,orange);
shapes.near=`<g transform="translate(0 20) scale(.55)">${house()}</g><g transform="translate(44 20) scale(.55)">${tree}</g>`;
shapes.small=`<g transform="translate(25 30) scale(.5)">${shapes.bag}</g>`;
shapes.big=shapes.bag;
shapes['empty-cup']=P('M27 22h45L65 85H34z','#fff');
export const ART_WORDS=new Set([...Object.keys(shapes),'hello','goodbye','yes','no','friend','name',...Object.keys(COLORS),'one','two','three','four','five','six','seven','eight','nine','ten']);
export function glyph(word,label=word){if(!shapes[word])throw Error('Missing original illustration: '+word);return `<svg class="atlas-art" viewBox="0 0 100 100" role="img" aria-label="${esc(label)}" fill="none" stroke="${ink}" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">${shapes[word]}</svg>`;}
export function wordArt(w){const ns=['one','two','three','four','five','six','seven','eight','nine','ten'];if(ns.indexOf(w)>5)return quantity(ns.indexOf(w)+1,'key');if(shapes[w])return glyph(w);if(ART_WORDS.has(w))return firstArt(w);throw Error('Missing word art '+w);}
export function quantity(n,item='coin'){return `<span class="object-grid" role="img" aria-label="${n}个图示">${Array.from({length:n},()=>glyph(item)).join('')}</span>`;}
export function combo(items){return `<span class="art-combo">${items.map(x=>typeof x==='string'?glyph(x):quantity(x[1],x[0])).join('')}</span>`;}
export function position(item,where,base){return `<svg class="position-art" viewBox="0 0 220 160" role="img" aria-label="${esc(item+' '+where+' '+base)}" fill="none" stroke="${ink}" stroke-width="2.5"><g transform="translate(60 35) scale(1.05)">${shapes[base]}</g><g transform="translate(${where==='near'?153:88} ${where==='under'?95:where==='on'?6:74}) scale(.45)">${shapes[item]}</g></svg>`;}
const nounMap={'地图':'map','书':'book','钥匙':'key','笔':'pen','盒子':'box','箱子':'box','水':'water','面包':'bread','苹果':'apple','牛奶':'milk','米饭':'rice','鸡蛋':'egg','椅子':'chair','床':'bed','窗户':'window','奶牛':'cow','猪':'pig','狗':'dog','母鸡':'hen','猫':'cat','鸭子':'duck','橙子':'orange','胡萝卜':'carrot','果汁':'juice','香蕉':'banana','土豆':'potato','云朵':'cloud','雨滴':'rain','太阳':'sun','靴子':'boots','袜子':'socks','帽子':'hat','桥':'bridge','小路':'path','树':'tree','学校':'school','公园':'park','农场':'farm','商店':'shop','台灯':'lamp'};
function roomWith(item){return `<svg class="atlas-art" viewBox="0 0 100 100" role="img" aria-label="room with ${item}" fill="none" stroke="${ink}" stroke-width="2.5">${R(4,4,92,92,'#edf5fb')}${P('M4 4l15 17h62L96 4M19 21v59L4 96m15-16h62l15 16M81 21v59')}<g transform="translate(17 25) scale(.65)">${shapes[item]}</g></svg>`;}
const specific={
'U02-L03-Q2':[()=>`<span class="size-pair small-bag">${glyph('bag')}</span>`,()=>glyph('bag'),()=>glyph('box')],
'U02-L03-Q3':[()=>combo(['bag',['key',10]]),()=>`<span class="small-bag">${glyph('bag')}</span>${quantity(10,'key')}`,()=>combo(['bag',['key',8]])],
'U02-L04-Q1':[()=>combo(['map',['apple',2],'water']),()=>combo(['map','apple','water']),()=>combo(['book',['apple',2],'water'])],
'U03-L01-Q2':[()=>roomWith('bed'),()=>roomWith('box'),()=>roomWith('chair')],
'U03-L02-Q1':[()=>position('key','under','table'),()=>position('key','on','table'),()=>position('key','in','box')],
'U03-L03-Q1':[()=>glyph('close'),()=>glyph('open'),()=>glyph('sit')],
'U03-L03-Q2':[()=>glyph('stop'),()=>glyph('stand'),()=>glyph('look')],
'U03-L03-Q3':[()=>glyph('stand'),()=>glyph('sit'),()=>glyph('open')],
'U03-L04-Q1':[()=>position('key','under','chair'),()=>position('key','on','chair'),()=>position('key','in','box')],
'U04-L02-Q1':[()=>glyph('jump'),()=>glyph('sleep'),()=>glyph('walk')],
'U04-L03-Q1':[()=>glyph('follow'),()=>glyph('sleep'),()=>glyph('close')],
'U04-L04-Q1':[()=>combo(['duck','water']),()=>position('duck','in','box'),()=>position('duck','under','table')],
'U04-L04-Q2':[()=>glyph('follow'),()=>combo(['jump','table']),()=>glyph('sleep')],
'U05-L02-Q1':[()=>glyph('more'),()=>glyph('give'),()=>combo(['bread','left'])],
'U05-L03-Q2':[()=>quantity(2),()=>quantity(3),()=>quantity(1)],'U05-L04-Q1':[()=>quantity(3),()=>quantity(2),()=>quantity(5)],
'U06-L01-Q1':[()=>glyph('cold'),()=>glyph('hot'),()=>glyph('book')],
'U06-L04-Q1':[()=>combo(['coat','boots']),()=>combo(['hat','socks']),()=>combo(['shirt','shoes'])],
'U06-L04-Q2':[()=>combo(['bridge','tree']),()=>combo(['bridge','flower']),()=>combo(['bridge','house'])],
'U07-L01-Q1':[()=>glyph('right'),()=>glyph('left'),()=>glyph('straight')],
'U07-L01-Q2':[()=>houseSVG('blue'),()=>houseSVG('red'),()=>glyph('box')],
'U07-L02-Q2':[()=>combo(['park','school']),()=>combo(['park','store']),()=>combo(['park','farm'])],
'U07-L03-Q1':[()=>glyph('write'),()=>glyph('listen'),()=>combo(['open','box'])],
'U07-L03-Q2':[()=>glyph('read'),()=>glyph('apple'),()=>glyph('swim')],
'U08-L01-Q1':[()=>glyph('night'),()=>glyph('day'),()=>glyph('bread')],
'U08-L01-Q2':[()=>combo(['open','box']),()=>glyph('close'),()=>glyph('sleep')],
'U08-L02-Q1':[()=>combo(['wood','rope']),()=>combo(['stone','rope']),()=>combo(['wood','bread'])],
'U08-L03-Q2':[()=>glyph('again'),()=>firstArt('goodbye'),()=>glyph('sleep')],
'U08-L04-Q1':[()=>position('key','under','table'),()=>position('key','on','box'),()=>position('key','on','chair')]
};
export function houseSVG(color){return `<svg class="atlas-art" viewBox="0 0 100 100" role="img" aria-label="${color} house" stroke="${ink}" stroke-width="2.6">${house(COLORS[color])}</svg>`;}
export function optionArt(l,qi,text,index){if(l.unitId==='U01')return firstOption(l.number,qi,text);const q=l.tasks[qi];if(specific[q.id])return specific[q.id][index]();if(/^[A-Za-z]/.test(text))return '';if(text.includes('把钥匙'))return quantity({'九':9,'七':7,'十':10}[text[0]]||8,'key');for(const [zh,en] of Object.entries(nounMap))if(text.includes(zh))return glyph(en);throw Error('Missing option art '+q.id+' '+text);}
export function targetArt(l,qi){if(l.unitId==='U01')return firstTarget(l.number,qi);const id=l.tasks[qi].id;const words={'U03-L02-Q2':()=>position('book','in','box'),'U03-L02-Q3':()=>position('lamp','on','table'),'U04-L01-Q2':()=>glyph('hen'),'U04-L01-Q3':()=>glyph('cat'),'U04-L02-Q2':()=>glyph('swim'),'U05-L02-Q1':()=>`<p class="sample-label">杯子里的水已经喝完</p>${glyph('empty-cup')}`,'U06-L02-Q2':()=>glyph('shirt'),'U08-L02-Q2':()=>`<div class="broken-bridge">${glyph('bridge')}</div>`};return words[id]?.()||'';}
