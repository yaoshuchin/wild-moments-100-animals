(() => {
'use strict';

const landData = (typeof LAND_POLYGONS !== 'undefined') ? LAND_POLYGONS : (typeof window !== 'undefined' && window.LAND_POLYGONS) ? window.LAND_POLYGONS : [];
const defaultSpots = (typeof DEFAULT_SPOTS !== 'undefined' && DEFAULT_SPOTS.length) ? DEFAULT_SPOTS : (typeof window !== 'undefined' && window.DEFAULT_SPOTS) ? window.DEFAULT_SPOTS : [];

let SPOTS = loadStoredSources(defaultSpots);
if (!SPOTS || !SPOTS.length) {
  SPOTS = JSON.parse(JSON.stringify(defaultSpots));
}

const state={when:'all',kind:'全部',query:'',selected:'monterey',cam:0,frameLoaded:false,lat:20,lon:-85,targetLat:20,targetLon:-85,zoom:1,drag:false,auto:true,pausedUntil:0,markerHits:[],fps:0};
const $=s=>document.querySelector(s);const canvas=$('#globe'), ctx=canvas.getContext('2d',{alpha:false});let W=0,H=0,dpr=1,baseR=200,cx=0,cy=0,lastFrame=0;let stars=[],shadeCanvas=document.createElement('canvas'),shadeCtx=shadeCanvas.getContext('2d'),lastShadeKey='',solarInfo={};const TWOPI=2*Math.PI,deg=Math.PI/180;
const favorites=(()=>{try{return new Set(JSON.parse(localStorage.getItem('wildmoments-favorites')||'[]'))}catch{return new Set()}})();
function solarAt(date){const start=Date.UTC(date.getUTCFullYear(),0,0),doy=Math.floor((date-start)/86400000),h=date.getUTCHours()+date.getUTCMinutes()/60+date.getUTCSeconds()/3600;const g=2*Math.PI/365*(doy-1+(h-12)/24);const eq=229.18*(.000075+.001868*Math.cos(g)-.032077*Math.sin(g)-.014615*Math.cos(2*g)-.040849*Math.sin(2*g));const dec=.006918-.399912*Math.cos(g)+.070257*Math.sin(g)-.006758*Math.cos(2*g)+.000907*Math.sin(2*g)-.002697*Math.cos(3*g)+.00148*Math.sin(3*g);let lon=(12-h)*15-eq/4;lon=((lon+540)%360)-180;return{lat:dec/deg,lon,eq,dec,h};}
function sunElevation(lat,lon){const s=solarInfo;return Math.asin(Math.sin(lat*deg)*Math.sin(s.dec)+Math.cos(lat*deg)*Math.cos(s.dec)*Math.cos((lon-s.lon)*deg))/deg}
function isDay(spot){return sunElevation(spot.lat,spot.lon)>-0.833}
function localTime(spot){try{return new Intl.DateTimeFormat('zh-TW',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:spot.tz}).format(new Date())}catch{return '—'}}
function visibleSpots(){const q=state.query.trim().toLocaleLowerCase();return SPOTS.filter(p=>p.enabled!==false&&(state.when==='all'||isDay(p)===(state.when==='day'))&&(state.kind==='全部'||p.kind===state.kind)&&(!q||[p.name,p.country,p.kind,...p.tags].join(' ').toLowerCase().includes(q)))}
function currentSpot(){return SPOTS.find(p=>p.id===state.selected && p.enabled!==false)||SPOTS.find(p=>p.enabled!==false)||SPOTS[0]||{name:'載入中',country:'全球',kind:'全部',lat:0,lon:0,tz:'UTC',tags:[],summary:'',fact:''}}
function escapeHTML(v){return String(v).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function renderList(){const vis=visibleSpots();$('#resultCount').textContent=`${vis.length} / ${SPOTS.filter(p=>p.enabled!==false).length} 處`;$('#spotList').innerHTML=vis.length?vis.map(p=>`<button class="spot-item ${state.selected===p.id?'selected':''}" data-id="${p.id}"><span class="spot-emoji">${escapeHTML(p.icon)}</span><span class="spot-text"><span class="spot-name">${escapeHTML(p.name)}</span><span class="spot-loc">${escapeHTML(p.country)}</span><span class="spot-status ${healthDisplay(p).cls}">${escapeHTML(healthDisplay(p).label)}</span></span><span class="day-dot" title="${isDay(p)?'當地白天':'當地夜晚'}">${isDay(p)?'☀':'☾'}</span></button>`).join(''):'<div class="empty">目前沒有符合條件的攝影機。<br>請改用「全部」或調整搜尋內容。</div>';$('#spotList').querySelectorAll('[data-id]').forEach(el=>el.addEventListener('click',()=>selectSpot(el.dataset.id,true)))}
function updateClocks(){const spot=currentSpot();$('#localClock').textContent=localTime(spot);const day=isDay(spot);$('#dayStatus').textContent=day?'☀ 白天':'☾ 夜晚';$('#dayStatus').className=day?'day':'night';const d=new Date();$('#headerTime').textContent=new Intl.DateTimeFormat('zh-TW',{hour:'2-digit',minute:'2-digit',hour12:false,timeZone:'Asia/Taipei'}).format(d)+' 台灣時間';}
const SOURCE_REVIEWS={
 monterey:['已更新來源｜站內播放待實測','已替換舊版過期影片 ID；來源參考 Monterey Bay Aquarium 及近期直播目錄。此處只能確認連結線索，不能保證此刻直播或允許內嵌。遇到限制時請至官方直播頁。','https://www.montereybayaquarium.org/cams-videos/live-cams/sea-otter-cam'],
 penguin:['整修暫停｜預設停用','Monterey Bay Aquarium 官方頁面公告企鵝攝影機因整修暫停；此據點仍可在來源管理找到。','https://www.montereybayaquarium.org/cams-videos/live-cams/penguin-cam'],
 shark:['已核對官方來源頁','Explore.org 鯊魚攝影機頁面存在；未取得可確認的第三方內嵌影片 ID。','https://explore.org/livecams/oceans/shark-cam'],
 bear:['已核對官方來源頁｜季節性','Explore.org Brooks Falls 棕熊攝影機來源可查；是否播出依季節及官網狀態。','https://explore.org/livecams/brown-bears/brooks-falls-brown-bears'],
 eagle:['已核對官方來源頁','Explore.org Decorah North Nest 頁面可查；未確立固定內嵌影片 ID。','https://explore.org/livecams/bald-eagles/decorah-eagles-north-nest'],
 polarbear:['已核對官方來源頁｜季節性','Explore.org 北極熊攝影機來源存在；依觀察季節安排播出。','https://explore.org/livecams/polar-bears-international/polar-bear-cape-churchill-cam'],
 kenya:['已核對來源頁｜官方頻道試播','Mpala 觀察站來源已核對；站內試播使用 Explore Africa 官方 YouTube 頻道，不保證目前直播鏡頭就是 Mpala。','https://explore.org/livecams/mpala/african-watering-hole-animal-camera'],
 tembe:['已核對官方來源頁','Explore.org Tembe Elephant Park 觀察站頁面存在；固定 YouTube 內嵌 ID 尚待核實。','https://explore.org/livecams/african-wildlife/tembe-elephant-park'],
 panda:['已核對官方來源頁','Explore.org Wolong Grove Panda Yard 官方頁面存在；目前未取得可確認的嵌入影片 ID。','https://explore.org/livecams/explore-all-cams/wolong-grove-panda-yard']
};
function renderSourceReview(p){
  const r = SOURCE_REVIEWS[p.id] || ['官方生態來源｜持續觀測', p.summary || '全球野生動物生態觀測據點，提供實況或官方科普資訊。', p.url];
  $('#verifyLabel').textContent = r[0];
  $('#verifyDetails').textContent = r[1];
  $('#verifyUrl').href = r[2] || p.url;
  $('#montereyCams').hidden = p.id !== 'monterey';
}
function renderDetails(){
  renderSourceReview(currentSpot());
  const originBanner = $('#originNotice');
  if (originBanner) originBanner.hidden = true;
  
  const p = currentSpot();
  $('#detailName').textContent = p.name;
  $('#detailRegion').textContent = '📍 ' + p.country;
  $('#typeStatus').textContent = p.kind;
  $('#detailBody').textContent = p.summary;
  $('#detailFact').textContent = p.fact;
  $('#sourceLink').href = officialCamUrl(p);
  $('#sourceLink').title = `前往 ${p.source}`;
  $('#favBtn').textContent = favorites.has(p.id) ? '♥' : '♡';
  $('#favBtn').classList.toggle('on', favorites.has(p.id));
  $('#mediaEmoji').textContent = p.icon;
  $('#mediaBadge').textContent = p.cams ? '🎬 官方影片／直播' : p.channelId ? '🎬 官方頻道直播' : '↗ 官方攝影機來源';
  $('#mediaPlay').textContent = p.cams ? '▶ 在新分頁觀看官方影片' : p.channelId ? '▶ 在新分頁開啟頻道直播' : '↗ 前往官方網站觀看';
  $('#playNotice').textContent = '點選按鈕將直接開啟新分頁，前往 YouTube 或官方平台觀看最高畫質影像。';
  
  const curVideoUrl = p.cams ? ('https://www.youtube.com/watch?v=' + encodeURIComponent(p.cams[state.cam].id)) : (p.channelId ? ('https://www.youtube.com/channel/' + encodeURIComponent(p.channelId) + '/live') : p.url);
  $('#videoDirect').style.display = 'inline-block';
  $('#videoDirect').href = curVideoUrl;
  $('#videoDirect').textContent = '↗ 在新分頁開啟影音連結';

  $('#camList').innerHTML = p.cams ? p.cams.map((v, i) => `<button class="cam-chip ${state.cam === i ? 'active' : ''}" data-cam="${i}">${escapeHTML(v.name)}</button>`).join('') : '<span style="font-size:11px;color:#7ea499">此據點由官方網站直接提供串流畫面</span>';
  $('#camList').querySelectorAll('[data-cam]').forEach(b => b.addEventListener('click', () => {
    state.cam = Number(b.dataset.cam);
    renderDetails();
  }));
  updateClocks();
  renderHealth();
}

function clearMedia(){
  stopPlayer();
  $('#mediaEmoji').style.display = '';
  $('#mediaPlay').style.display = '';
  $('#mediaBadge').style.display = '';
}
function selectSpot(id, focus){
  const p = SPOTS.find(s => s.id === id && s.enabled !== false);
  if (!p) return;
  state.selected = id;
  state.cam = 0;
  clearMedia();
  renderList();
  renderDetails();
  if (focus) {
    state.targetLon = p.lon;
    state.targetLat = p.lat;
    state.pausedUntil = Date.now() + 18000;
  }
  $('#stageStatus').textContent = `◉ 已定位：${p.name}`;
}
function officialCamUrl(p, index = state.cam){
  if (!p) return '#';
  if (p.id === 'monterey') {
    return index === 1
      ? 'https://www.montereybayaquarium.org/cams-videos/live-cams/jelly-cam'
      : 'https://www.montereybayaquarium.org/cams-videos/live-cams/sea-otter-cam';
  }
  return p.url || '#';
}

function watchUrl(id){return 'https://www.youtube.com/watch?v='+encodeURIComponent(id)}
function openOfficialVideo(id){
  const address=watchUrl(id),link=$('#videoDirect');link.href=address;
  // 直接在使用者點擊事件中開啟；不使用任何假冒的 referrer 網址。
  window.open(address,'_blank','noopener');
  toast('正在嘗試開啟 YouTube；如果沒有出現新分頁，請點選下方官方影片連結。');
}
function showVideoFallback(mount,id,title,reason,code=''){
  if(!mount?.isConnected)return;
  // 不重試同一個被拒絕的 iframe；提供可直接操作的官方觀看入口。
  try{if(activePlayer){activePlayer.destroy();activePlayer=null}}catch(_){}
  mount.replaceChildren();
  const box=document.createElement('div');box.className='media-fallback';
  const h=document.createElement('h3');h.textContent=title;
  const p=document.createElement('p');p.textContent=reason;
  const a=document.createElement('a');a.href=watchUrl(id);a.target='_blank';a.rel='noopener';a.className='external-watch';a.textContent='▶ 前往 YouTube 觀看';
  box.append(h,p,a);
  const place=currentSpot();
  if(place){const original=document.createElement('a');original.href=officialCamUrl(place,state.cam);original.target='_blank';original.rel='noopener noreferrer';original.className='external-watch';original.textContent='↗ 前往原始官方攝影機頁面';original.style.marginLeft='6px';box.appendChild(original)}
  if(code){const hint=document.createElement('div');hint.className='why-code';hint.textContent=code;box.appendChild(hint)}
  mount.append(box);
}
function startChannelPreview(p){
 const target='https://www.youtube.com/channel/'+p.channelId+'/live';
 if(isFileMode()){window.open(target,'_blank','noopener');setCamHealth(p,'external_watch','本機檔案改至 Explore Africa 頻道觀看',0);return;}
 clearMedia();
 setCamHealth(p,'checking','嘗試載入 Explore Africa 官方 YouTube 頻道（鏡頭位置不固定）',0);
 const mount=document.createElement('div');mount.id='youtubePlayerMount';mount.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:3';$('#media').appendChild(mount);
 $('#mediaEmoji').style.display='none';$('#mediaPlay').style.display='none';$('#mediaBadge').style.display='none';
 const frame=document.createElement('iframe');frame.title='Explore Africa 官方頻道 Live（場景位置依頻道，不一定為 Mpala）';frame.referrerPolicy='strict-origin-when-cross-origin';frame.allow='autoplay;encrypted-media;picture-in-picture;fullscreen';frame.allowFullscreen=true;frame.style.cssText='width:100%;height:100%;border:0';frame.src='https://www.youtube.com/embed/live_stream?channel='+encodeURIComponent(p.channelId)+'&autoplay=1&mute=1&playsinline=1';mount.appendChild(frame);
 const bar=document.createElement('div');bar.className='embed-caption';const message=document.createElement('span');message.textContent='實驗性頻道直播：不保證目前播出或地點為肯亞 Mpala';const link=document.createElement('a');link.href=target;link.target='_blank';link.rel='noopener noreferrer';link.textContent='官方 YouTube ↗';bar.append(message,link);mount.appendChild(bar);
 frame.addEventListener('load',()=>setCamHealth(p,'ready','嵌入頁面已載入，尚未確認有直播畫面',0));
 setTimeout(()=>{if(frame.isConnected)toast('非洲頻道嵌入為試播：若沒有畫面，請點底部「官方 YouTube」或來源網站。')},10000);
}
function startMedia(){
  const p = currentSpot();
  let targetUrl = '';
  let videoName = p.name;
  
  if (p.cams && p.cams.length) {
    const cam = p.cams[state.cam] || p.cams[0];
    targetUrl = 'https://www.youtube.com/watch?v=' + encodeURIComponent(cam.id);
    videoName = cam.name || p.name;
  } else if (p.channelId) {
    targetUrl = 'https://www.youtube.com/channel/' + encodeURIComponent(p.channelId) + '/live';
    videoName = p.name + ' 官方頻道';
  } else {
    targetUrl = officialCamUrl(p);
  }
  
  setCamHealth(p, 'playing', '已在新分頁開啟「' + videoName + '」', state.cam);
  window.open(targetUrl, '_blank', 'noopener,noreferrer');
  toast('已在新分頁開啟「' + videoName + '」觀看！');
}

function toast(message){const t=$('#toast');t.textContent=message;t.classList.add('show');clearTimeout(toast.timer);toast.timer=setTimeout(()=>t.classList.remove('show'),3200)}
function wrapLon(a){return((a+540)%360)-180}function smoothAngle(cur,target,speed){let diff=wrapLon(target-cur);return wrapLon(cur+diff*speed)}
function project(lat,lon){const l=lat*deg,d=(lon-state.lon)*deg,cl=state.lat*deg;const c=Math.cos(l),s=Math.sin(l),cd=Math.cos(d);return{x:c*Math.sin(d),y:s*Math.cos(cl)-c*cd*Math.sin(cl),z:s*Math.sin(cl)+c*cd*Math.cos(cl)}}
function resize(){const box=canvas.getBoundingClientRect();W=Math.max(200,box.width);H=Math.max(200,box.height);dpr=Math.min(window.devicePixelRatio||1,2);canvas.width=Math.round(W*dpr);canvas.height=Math.round(H*dpr);ctx.setTransform(dpr,0,0,dpr,0,0);baseR=Math.min(W*.405,H*.397,405);cx=W*.51;cy=H*.535;if(W<550){baseR=Math.min(W*.41,H*.39);cx=W*.50;cy=H*.56;}stars=[];let seed=31337;function rand(){seed=(1664525*seed+1013904223)>>>0;return seed/4294967296;}for(let i=0;i<175;i++)stars.push({x:rand()*W,y:rand()*H,s:rand()*1.25+.35,a:rand()*.5+.08});lastShadeKey='';}
function lineOnSphere(pts,r,stroke,width=1){ctx.beginPath();let started=false,prev=null;for(const [lat,lon]of pts){const p=project(lat,lon);if(p.z>.015){if(!started||!prev||Math.hypot(p.x-prev.x,p.y-prev.y)>.42){ctx.moveTo(cx+p.x*r,cy-p.y*r)}else ctx.lineTo(cx+p.x*r,cy-p.y*r);started=true;}else started=false;prev=p;}ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke()}
function renderLand(r){ctx.save();ctx.shadowBlur=0;ctx.fillStyle='#26554b';ctx.strokeStyle='rgba(157,218,165,.23)';ctx.lineWidth=.55;
for(const poly of landData){if(poly.length<4)continue;const first=project(poly[0][1],poly[0][0]);let prev=first,started=false;const pts=[];for(let i=1;i<=poly.length;i++){const it=poly[i%poly.length];const curr=project(it[1],it[0]);const ain=prev.z>=.009,bin=curr.z>=.009;if(ain!==bin){const t=(.009-prev.z)/(curr.z-prev.z);pts.push({x:prev.x+t*(curr.x-prev.x),y:prev.y+t*(curr.y-prev.y)});}if(bin)pts.push(curr);prev=curr;}
if(pts.length<3)continue;ctx.beginPath();ctx.moveTo(cx+pts[0].x*r,cy-pts[0].y*r);for(let i=1;i<pts.length;i++)ctx.lineTo(cx+pts[i].x*r,cy-pts[i].y*r);ctx.closePath();ctx.fill();ctx.stroke();}
ctx.restore()}
function updateShade(s,r){const q=260,key=`${Math.round(state.lat*2)}|${Math.round(state.lon*2)}|${Math.round(s.lat)}|${Math.round(s.lon)}`;if(key===lastShadeKey)return;lastShadeKey=key;shadeCanvas.width=shadeCanvas.height=q;const data=shadeCtx.createImageData(q,q),sun=project(s.lat,s.lon),pix=data.data;for(let y=0;y<q;y++){const py=1-2*(y+.5)/q;for(let x=0;x<q;x++){const px=2*(x+.5)/q-1;const t=px*px+py*py;if(t>1)continue;const zz=Math.sqrt(1-t);const dot=px*sun.x+py*sun.y+zz*sun.z;const k=Math.min(1,Math.max(0,(.14-dot)/.30));const a=Math.round(205*k*k*(3-2*k));const idx=(y*q+x)*4;pix[idx]=2;pix[idx+1]=9;pix[idx+2]=19;pix[idx+3]=a;}}shadeCtx.putImageData(data,0,0);}
function drawGlobe(){const r=baseR*state.zoom;ctx.fillStyle='#061316';ctx.fillRect(0,0,W,H);for(const st of stars){ctx.globalAlpha=st.a;ctx.fillStyle='#dff9e3';ctx.beginPath();ctx.arc(st.x,st.y,st.s,0,TWOPI);ctx.fill();}ctx.globalAlpha=1;
let backGlow=ctx.createRadialGradient(cx,cy,r*.40,cx,cy,r*1.28);backGlow.addColorStop(0,'#2f87861a');backGlow.addColorStop(.78,'#67d9c90f');backGlow.addColorStop(.93,'#65e1c817');backGlow.addColorStop(1,'#65e1c800');ctx.fillStyle=backGlow;ctx.beginPath();ctx.arc(cx,cy,r*1.3,0,TWOPI);ctx.fill();
ctx.save();ctx.strokeStyle='#75ceb220';ctx.lineWidth=1;ctx.beginPath();ctx.ellipse(cx,cy,r*1.13,r*.27,-.3,0,TWOPI);ctx.stroke();ctx.beginPath();ctx.ellipse(cx,cy,r*1.16,r*.20,.6,0,TWOPI);ctx.stroke();ctx.restore();
ctx.save();ctx.beginPath();ctx.arc(cx,cy,r,0,TWOPI);ctx.clip();const o=ctx.createRadialGradient(cx-r*.35,cy-r*.37,r*.04,cx+r*.14,cy+r*.18,r*1.42);o.addColorStop(0,'#27646c');o.addColorStop(.33,'#164c58');o.addColorStop(.73,'#0e303e');o.addColorStop(1,'#071825');ctx.fillStyle=o;ctx.fillRect(cx-r,cy-r,2*r,2*r);
const gridStroke='rgba(129,195,182,.13)';for(let lat=-75;lat<=75;lat+=15){const arr=[];for(let lon=-180;lon<=180;lon+=3)arr.push([lat,lon]);lineOnSphere(arr,r,gridStroke,.7);}for(let lon=-180;lon<180;lon+=15){const arr=[];for(let lat=-90;lat<=90;lat+=3)arr.push([lat,lon]);lineOnSphere(arr,r,gridStroke,.7);}
renderLand(r);updateShade(solarInfo,r);ctx.drawImage(shadeCanvas,cx-r,cy-r,2*r,2*r);
let edge=ctx.createRadialGradient(cx,cy,r*.72,cx,cy,r);edge.addColorStop(0,'#00000000');edge.addColorStop(.85,'#00000000');edge.addColorStop(1,'#03111380');ctx.fillStyle=edge;ctx.fillRect(cx-r,cy-r,2*r,2*r);ctx.restore();
ctx.save();ctx.shadowColor='#81e8c5';ctx.shadowBlur=23;ctx.beginPath();ctx.arc(cx,cy,r,0,TWOPI);ctx.strokeStyle='#86e7cc63';ctx.lineWidth=1.65;ctx.stroke();ctx.restore();
ctx.beginPath();ctx.arc(cx,cy,r*1.038,0,TWOPI);ctx.strokeStyle='#66cab126';ctx.lineWidth=1;ctx.stroke();
const list=visibleSpots();state.markerHits=[];const markers=[];for(const s of list){const p=project(s.lat,s.lon);if(p.z<=.11)continue;const px=cx+p.x*r,py=cy-p.y*r;markers.push({spot:s,x:px,y:py,z:p.z});}markers.sort((a,b)=>a.z-b.z);
for(const m of markers){const selected=state.selected===m.spot.id;const t=performance.now()/1000;const rr=selected?19:15;ctx.save();if(selected){ctx.beginPath();ctx.arc(m.x,m.y,rr+5+Math.sin(t*2.5)*2,0,TWOPI);ctx.lineWidth=1.2;ctx.strokeStyle='#a1ebcc88';ctx.stroke();}ctx.shadowColor='#54f1c0';ctx.shadowBlur=selected?28:12;ctx.fillStyle=selected?'#d3ffe5':'#123935';ctx.beginPath();ctx.arc(m.x,m.y,rr,0,TWOPI);ctx.fill();ctx.shadowBlur=0;ctx.lineWidth=selected?2:1;ctx.strokeStyle=selected?'#ffffff':'#a4efc880';ctx.stroke();ctx.fillStyle='#fff';ctx.textAlign='center';ctx.textBaseline='middle';ctx.font=`${selected?22:19}px "Segoe UI Emoji","Apple Color Emoji",sans-serif`;ctx.fillText(m.spot.icon,m.x,m.y+1);ctx.restore();
if(selected){ctx.font='600 12px "Microsoft JhengHei",sans-serif';const tx=m.spot.name;const w=Math.min(ctx.measureText(tx).width+25,190);const yy=m.y-rr-31;ctx.fillStyle='#0b2a2fe8';roundRect(ctx,m.x-w/2,yy,w,26,8);ctx.fill();ctx.strokeStyle='#95eac456';ctx.lineWidth=.7;ctx.stroke();ctx.fillStyle='#e3f9e9';ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(tx,m.x,yy+13);}
state.markerHits.push({id:m.spot.id,x:m.x,y:m.y,r:rr+7});}
}
function roundRect(c,x,y,w,h,rr){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,rr);else c.rect(x,y,w,h)}
function frame(now){const dt=Math.min(40,now-lastFrame||16);lastFrame=now;const dlon=wrapLon(state.targetLon-state.lon);const dlat=state.targetLat-state.lat;const easing=1-Math.exp(-dt*.0057);if(!state.drag){if(Math.abs(dlon)>.018)state.lon=smoothAngle(state.lon,state.targetLon,easing);else state.lon=state.targetLon;if(Math.abs(dlat)>.018)state.lat+=dlat*easing;else state.lat=state.targetLat;if(state.auto&&Date.now()>state.pausedUntil){state.targetLon=wrapLon(state.targetLon+dt*.0016)}}drawGlobe();requestAnimationFrame(frame)}
function applyFilter(){document.querySelectorAll('[data-when]').forEach(el=>el.classList.toggle('active',el.dataset.when===state.when));document.querySelectorAll('[data-kind]').forEach(el=>el.classList.toggle('active',el.dataset.kind===state.kind));renderList();}
function saveFav(){try{localStorage.setItem('wildmoments-favorites',JSON.stringify([...favorites]))}catch{toast('目前瀏覽器不允許儲存收藏')}}
$('#timeFilters').addEventListener('click',e=>{const t=e.target.closest('[data-when]');if(!t)return;state.when=t.dataset.when;applyFilter()});$('#categories').addEventListener('click',e=>{const t=e.target.closest('[data-kind]');if(!t)return;state.kind=t.dataset.kind;applyFilter()});$('#search').addEventListener('input',e=>{state.query=e.target.value;renderList()});$('#zoomIn').addEventListener('click',()=>{state.zoom=Math.min(1.50,state.zoom+.12)});$('#zoomOut').addEventListener('click',()=>{state.zoom=Math.max(.61,state.zoom-.12)});$('#resetView').addEventListener('click',()=>{state.targetLat=20;state.targetLon=-18;state.zoom=1;state.pausedUntil=Date.now()+15000;toast('已重設地球視角')});$('#rotateToggle').addEventListener('click',()=>{state.auto=!state.auto;$('#rotateToggle').style.color=state.auto?'#a1ebcc':'#819b96';state.pausedUntil=Date.now()+600;toast(state.auto?'已開啟緩慢自轉':'已暫停自動旋轉')});$('#mediaPlay').addEventListener('click',startMedia);$('#sourceLink').addEventListener('click',()=>{});$('#focusBtn').addEventListener('click',()=>{const s=currentSpot();state.targetLat=s.lat;state.targetLon=s.lon;state.pausedUntil=Date.now()+20000;$('#stageStatus').textContent='◉ 已定位：'+s.name});$('#favBtn').addEventListener('click',()=>{const p=currentSpot();favorites.has(p.id)?favorites.delete(p.id):favorites.add(p.id);saveFav();renderDetails();toast(favorites.has(p.id)?'已加入我的收藏':'已取消收藏')});$('#surpriseBtn').addEventListener('click',()=>{const a=visibleSpots();if(!a.length){toast('目前沒有符合條件的觀察站');return;}const other=a.filter(p=>p.id!==state.selected);const arr=other.length?other:a;selectSpot(arr[Math.floor(Math.random()*arr.length)].id,true)});
$('#helpBtn').addEventListener('click',()=>{$('#help').classList.add('show')});$('#helpClose').addEventListener('click',()=>{$('#help').classList.remove('show')});$('#help').addEventListener('click',e=>{if(e.target.id==='help')$('#help').classList.remove('show')});document.addEventListener('keydown',e=>{if(e.key==='Escape')$('#help').classList.remove('show');if(e.key.toLowerCase()==='f'&&!/input|textarea/i.test(document.activeElement.tagName)){if(!document.fullscreenElement)$('#stage').requestFullscreen?.();else document.exitFullscreen?.()}});
let dragStart=null,moved=false,dragOrigin=null;canvas.addEventListener('pointerdown',e=>{canvas.setPointerCapture(e.pointerId);dragStart={x:e.clientX,y:e.clientY};dragOrigin={x:e.clientX,y:e.clientY,lon:state.lon,lat:state.lat};moved=false;state.drag=true;canvas.classList.add('dragging');});canvas.addEventListener('pointermove',e=>{const box=canvas.getBoundingClientRect(),x=e.clientX-box.left,y=e.clientY-box.top;if(state.drag&&dragOrigin){const dx=e.clientX-dragOrigin.x,dy=e.clientY-dragOrigin.y;if(Math.abs(dx)>4||Math.abs(dy)>4)moved=true;if(moved){state.lon=wrapLon(dragOrigin.lon-dx*.26/state.zoom);state.lat=Math.max(-75,Math.min(75,dragOrigin.lat+dy*.22/state.zoom));state.targetLon=state.lon;state.targetLat=state.lat;state.pausedUntil=Date.now()+22000;}}else{canvas.style.cursor=state.markerHits.some(v=>Math.hypot(v.x-x,v.y-y)<v.r)?'pointer':'grab'}});canvas.addEventListener('pointerup',e=>{if(!moved&&dragStart){const box=canvas.getBoundingClientRect(),x=e.clientX-box.left,y=e.clientY-box.top;const m=[...state.markerHits].reverse().find(v=>Math.hypot(v.x-x,v.y-y)<v.r);if(m)selectSpot(m.id,true);}state.drag=false;dragOrigin=null;dragStart=null;canvas.classList.remove('dragging')});canvas.addEventListener('pointercancel',()=>{state.drag=false;dragOrigin=null;canvas.classList.remove('dragging')});canvas.addEventListener('wheel',e=>{e.preventDefault();state.zoom=Math.min(1.5,Math.max(.61,state.zoom+(e.deltaY<0?.09:-.09)))},{passive:false});window.addEventListener('resize',resize);
/* ========== LIVE MONITOR + SOURCE MANAGER ========== */
const SOURCES_STORAGE='wildmoments-source-100-v2',ISSUE_STORAGE='wildmoments-user-reports-v2';
const healthMap=new Map(),alerts=[];
let activePlayer=null,playerToken=0,playerTimeout=null,ytApiPromise=null,editId=null;
let inlineAlertsEnabled=true,desktopNotifyEnabled=false,sourceModalOpen=false;
const manualIssues=(()=>{try{const p=JSON.parse(localStorage.getItem(ISSUE_STORAGE)||'{}');return p&&typeof p==='object'&&!Array.isArray(p)?p:{}}catch{return{}}})();
function isSafeLink(link){try{const u=new URL(String(link));return u.protocol==='https:'||u.protocol==='http:'}catch{return false}}
function getYouTubeId(raw){let v=String(raw||'').trim();if(/^[\w-]{11}$/.test(v))return v;let u;try{u=new URL(v)}catch{return null}let host=u.hostname.toLowerCase().replace(/^www\./,'');if(!['youtube.com','m.youtube.com','music.youtube.com','youtube-nocookie.com','youtu.be'].includes(host))return null;let id=host==='youtu.be'?u.pathname.slice(1).split('/')[0]:u.searchParams.get('v')||u.pathname.match(/^\/(?:shorts|live|embed)\/([\w-]+)/)?.[1];return id&&/^[\w-]{11}$/.test(id)?id:null}
function normalizeSource(v,idx){if(!v||typeof v!=='object')throw Error('第 '+(idx+1)+' 筆來源不是有效物件');const textField=(key,length)=>String(v[key]??'').trim().slice(0,length);const name=textField('name',70),country=textField('country',90),source=textField('source',90),tz=textField('tz',80),url=textField('url',1000);const lat=Number(v.lat),lon=Number(v.lon);if(!name||!country||!source||!tz||!isSafeLink(url))throw Error('「'+(name||'第 '+(idx+1)+' 筆')+'」缺少名稱、地點、時區或有效的 http(s) 來源網址');if(!Number.isFinite(lat)||lat < -90||lat>90||!Number.isFinite(lon)||lon < -180||lon>180)throw Error('「'+name+'」的經緯度不正確');try{new Intl.DateTimeFormat('en',{timeZone:tz}).format()}catch{throw Error('「'+name+'」的時區代碼不正確，例如 Asia/Taipei')};const rawCams=Array.isArray(v.cams)?v.cams:[],cams=rawCams.map((c,i)=>{const id=getYouTubeId(c.id||c.url);return id?{name:String(c.name||'鏡頭 '+(i+1)).slice(0,45),id}:null});if(cams.length>30)throw Error('一個來源最多 30 個影片');let id=String(v.id||('import_'+idx)).slice(0,70).replace(/[^a-zA-Z0-9_-]/g,'_');if(!id)id='import_'+idx;const allowed=['哺乳類','鳥類','海洋生物','野生動物'];const channelId=/^UC[a-zA-Z0-9_-]{22}$/.test(String(v.channelId||''))?v.channelId:null;return{id,name,icon:textField('icon',12)||'📍',country,source,lat,lon,tz,kind:allowed.includes(v.kind)?v.kind:'野生動物',tags:Array.isArray(v.tags)?v.tags.slice(0,30).map(x=>String(x).slice(0,40)):[],url,summary:textField('summary',1500),fact:textField('fact',700),enabled:v.enabled!==false,...(cams.length?{cams}:{}),...(channelId?{channelId}:{})};}
function normalizeSourceList(list){if(!Array.isArray(list)||!list.length||list.length > 250)throw Error('來源必須為 1～250 筆的陣列');const arr=list.map((v,i)=>normalizeSource(v,i));const ids=arr.map(x=>x.id);if(new Set(ids).size!==ids.length)throw Error('來源 ID 重複，請先修改後再匯入');if(!arr.some(x=>x.enabled))throw Error('至少需要啟用一處觀察站');return arr;}
function loadStoredSources(defaults){
  try{
    const own = localStorage.getItem('wildmoments-source-100-v2');
    if(own){
      const data = JSON.parse(own);
      const list = normalizeSourceList(Array.isArray(data) ? data : data.spots);
      if(list && list.length >= 80) return list;
    }
  }catch(e){
    console.warn('讀取儲存來源失敗，使用預設來源：', e);
  }
  return JSON.parse(JSON.stringify(defaults));
}
function persistSources(){try{localStorage.setItem(SOURCES_STORAGE,JSON.stringify({version:4,exportedAt:new Date().toISOString(),spots:SPOTS}));return true}catch(e){toast('無法寫入瀏覽器儲存空間；來源變更仍可在這次開啟期間使用');return false}}
function persistIssues(){try{localStorage.setItem(ISSUE_STORAGE,JSON.stringify(manualIssues))}catch{toast('瀏覽器不允許儲存異常回報')}}
function healthKey(p,idx=0){return p.id+'::'+idx}
function healthDisplay(p){if(p.enabled===false)return{cls:'unknown',label:'已停用',detail:'此來源目前停用',code:'disabled'};if(navigator.onLine===false)return{cls:'warning',label:'本機網路中斷',detail:'瀏覽器回報本機網路可能離線，不能代表來源已下線',code:'offline'};if(manualIssues[p.id])return{cls:'warning',label:'人工回報異常',detail:'由使用者手動標記，尚未由來源方證實離線',code:'reported',time:manualIssues[p.id]};let r=p.id===state.selected?healthMap.get(healthKey(p,state.cam)):null;if(!r&&p.cams){for(let i=0;i<p.cams.length;i++){const item=healthMap.get(healthKey(p,i));if(item&&(!r||item.at>r.at))r=item}}if(!r)return p.cams?.length?{cls:'unknown',label:'尚未檢測',detail:'按「播放」後可取得 YouTube 播放器事件，未測不等於離線',code:'unknown'}:p.channelId?{cls:'unknown',label:'頻道待試播',detail:'來源為 Explore Africa 官方頻道，無法保證正在播放或為該位置',code:'unknown'}:{cls:'external',label:'↗ 官網確認',detail:'外部攝影機不開放本站直接偵測，請前往官方來源查看',code:'external'};
const states={external_watch:['external','↗ 需在官網觀看'],checking:['unknown','檢查播放器中'],ready:['unknown','播放器已就緒'],playing:['playing','▶ 播放中'],paused:['unknown','Ⅱ 播放暫停'],buffering:['unknown','… 緩衝中'],ended:['unknown','影片已結束'],error:['warning','⚠ 播放錯誤'],uncertain:['unknown','狀態未確認']};const spec=states[r.code]||['unknown','狀態待確認'];return{cls:spec[0],label:spec[1],detail:r.message,code:r.code,time:r.at}}
function logAlert(message,isWarning=true){const at=Date.now();if(alerts.length&&alerts[0].message===message&&at-alerts[0].at<45000)return;alerts.unshift({message,at,isWarning});alerts.splice(24);renderAlertLog();if(inlineAlertsEnabled)toast((isWarning?'⚠ ':'ℹ ')+message);if(isWarning&&desktopNotifyEnabled&&typeof Notification!=='undefined'&&Notification.permission==='granted'){try{new Notification('此刻野境・狀態提醒',{body:message,tag:'wildmoments-monitor'})}catch{}}}
function setCamHealth(p,code,message,index=state.cam,notify=false){const key=healthKey(p,index),before=healthMap.get(key);healthMap.set(key,{code,message,at:Date.now()});renderHealth();renderList();if(sourceModalOpen)renderManagerItems();if(notify&&!(before?.code===code&&before.message===message))logAlert(p.name+'：'+message)}
function renderHealth(){const p=currentSpot();if(!p)return;const h=healthDisplay(p),node=$('#detailMonitor');if(node){node.className='detail-status '+h.cls;node.innerHTML='<span class="activity-dot '+h.cls+'"></span><span id="monitorText">'+escapeHTML(h.label)+'</span><small id="monitorTime">'+(h.time?new Intl.DateTimeFormat('zh-TW',{hour:'2-digit',minute:'2-digit'}).format(new Date(h.time)):'未檢測')+'</small>';$('#monitorExplain').textContent=h.detail;}renderStatusOverview();if($('#reportBtn'))$('#reportBtn').textContent=manualIssues[p.id]?'✓ 清除人工異常回報':'⚠ 回報畫面異常';}
function renderStatusOverview(){const active=SPOTS.filter(p=>p.enabled!==false),playing=active.filter(p=>healthDisplay(p).code==='playing').length,warnings=active.filter(p=>healthDisplay(p).cls==='warning').length;$('#sourceTotal').textContent=active.length;$('#sourcePlaying').textContent=playing;$('#sourceWarnings').textContent=warnings;const net=$('#netIndicator');net.textContent=navigator.onLine===false?'⚠ 本機網路可能離線':'◌ 瀏覽器網路正常（非來源驗證）';net.classList.toggle('warn',navigator.onLine===false);}
function renderAlertLog(){const el=$('#alertLog');el.innerHTML=alerts.length?alerts.map(e=>'<p><span class="at">'+new Intl.DateTimeFormat('zh-TW',{hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(new Date(e.at))+'</span>'+escapeHTML(e.message)+'</p>').join(''):'<p>目前沒有異常紀錄。尚未播放的鏡頭不會被推定為離線。</p>'}
function stopPlayer(){playerToken++;clearTimeout(playerTimeout);if(activePlayer){try{activePlayer.destroy()}catch(_){}activePlayer=null}}
function loadYTApi(){if(window.YT&&window.YT.Player)return Promise.resolve();if(ytApiPromise)return ytApiPromise;ytApiPromise=new Promise((resolve,reject)=>{const old=window.onYouTubeIframeAPIReady;let done=false;const timeout=setTimeout(()=>{if(!done){done=true;reject(Error('YouTube API 載入逾時'))}},14000);window.onYouTubeIframeAPIReady=()=>{try{if(typeof old==='function')old()}catch(_){}if(!done){done=true;clearTimeout(timeout);resolve()}};const script=document.createElement('script');script.src='https://www.youtube.com/iframe_api';script.async=true;script.onerror=()=>{if(!done){done=true;clearTimeout(timeout);reject(Error('YouTube API 載入失敗'))}};document.head.appendChild(script)}).catch(e=>{ytApiPromise=null;throw e});return ytApiPromise}
function showFallback(mount,id){showVideoFallback(mount,id,'無法嵌入播放','請改由 YouTube 官方頁面觀看。')}
function sourceCamLines(p){return(p.cams||[]).map(c=>c.name+' | https://www.youtube.com/watch?v='+c.id).join('\n')}
function fillSourceForm(p){editId=p?.id||null;$('#formTitle').textContent=p?'編輯：'+p.name:'新增攝影機來源';for(const [k,id] of [['name','editName'],['icon','editIcon'],['country','editCountry'],['source','editSource'],['lat','editLat'],['lon','editLon'],['tz','editTZ'],['url','editURL'],['summary','editSummary'],['fact','editFact']])$('#'+id).value=p?(p[k]??''):'';$('#editTZ').value=p?.tz||'Asia/Taipei';$('#editKind').value=p?.kind||'野生動物';$('#editTags').value=(p?.tags||[]).join(', ');$('#editCams').value=p?sourceCamLines(p):'';$('#sourceDelete').disabled=!p;$('#sourceView').disabled=!p||p.enabled===false;$('#managerMessage').textContent='';renderManagerItems()}
function renderManagerItems(){const el=$('#managerItems');if(!el)return;el.innerHTML=SPOTS.map(p=>{const h=healthDisplay(p);return'<div class="manager-item '+(p.id===editId?'current':'')+'"><div class="manager-text"><b>'+escapeHTML(p.icon+' '+p.name)+'</b><small><span class="activity-dot '+h.cls+'"></span> '+escapeHTML(h.label)+' · '+escapeHTML(p.source)+'</small></div><button class="tiny-btn" data-edit="'+escapeHTML(p.id)+'">編輯</button><button class="tiny-btn" data-toggle="'+escapeHTML(p.id)+'">'+(p.enabled===false?'啟用':'停用')+'</button></div>'}).join('');}
function openManager(){sourceModalOpen=true;$('#manager').classList.add('show');fillSourceForm(currentSpot());}
function closeManager(){sourceModalOpen=false;$('#manager').classList.remove('show')}
function normalizeForm(){let cams=$('#editCams').value.split(/\r?\n/).map(s=>s.trim()).filter(Boolean).map((line,i)=>{const bar=line.indexOf('|');if(bar<1)throw Error('鏡頭第 '+(i+1)+' 行須以「名稱 | YouTube 網址」格式填寫');const id=getYouTubeId(line.slice(bar+1).trim());if(!id)throw Error('鏡頭第 '+(i+1)+' 行的 YouTube 網址或 ID 無效');return{name:line.slice(0,bar).trim(),id}});const data={id:editId||('user_'+Date.now()+'_'+Math.floor(Math.random()*100000)),name:$('#editName').value,icon:$('#editIcon').value,country:$('#editCountry').value,source:$('#editSource').value,lat:$('#editLat').value,lon:$('#editLon').value,tz:$('#editTZ').value,kind:$('#editKind').value,url:$('#editURL').value,summary:$('#editSummary').value,fact:$('#editFact').value,tags:$('#editTags').value.split(/[,，]/).map(s=>s.trim()).filter(Boolean),cams,enabled:editId?(SPOTS.find(p=>p.id===editId)?.enabled!==false):true};return normalizeSource(data,0)}
function refreshAfterChange(preferred){const id=SPOTS.some(p=>p.id===state.selected&&p.enabled!==false)?state.selected:SPOTS.find(p=>p.enabled!==false)?.id;stopPlayer();clearMedia();healthMap.clear();for(const key of Object.keys(manualIssues)){if(!SPOTS.some(p=>p.id===key)){delete manualIssues[key]}}persistIssues();state.selected=id||preferred;state.cam=0;persistSources();renderList();renderDetails();renderHealth();renderManagerItems();$('#stageStatus').textContent='◉ 來源管理設定已更新';}
$('#managerBtn').addEventListener('click',openManager);$('#netIndicator').addEventListener('click',openManager);$('#managerClose').addEventListener('click',closeManager);$('#manager').addEventListener('click',e=>{if(e.target.id==='manager')closeManager()});$('#openStatusBtn').addEventListener('click',()=>{document.querySelector('.details').scrollIntoView({behavior:'smooth',block:'start'});toast('右側顯示播放器實測結果、人工回報與異常紀錄')});
$('#sourceAdd').addEventListener('click',()=>fillSourceForm(null));$('#managerItems').addEventListener('click',e=>{const edit=e.target.closest('[data-edit]'),toggle=e.target.closest('[data-toggle]');if(edit){fillSourceForm(SPOTS.find(p=>p.id===edit.dataset.edit));return}if(toggle){const p=SPOTS.find(x=>x.id===toggle.dataset.toggle);if(!p)return;if(p.enabled!==false&&SPOTS.filter(x=>x.enabled!==false).length<=1){toast('至少保留一處啟用中的來源');return;}p.enabled=p.enabled===false;refreshAfterChange();fillSourceForm(p);toast(p.enabled?'來源已啟用':'來源已停用')}});
$('#sourceForm').addEventListener('submit',e=>{e.preventDefault();try{const p=normalizeForm();const ix=SPOTS.findIndex(x=>x.id===p.id);if(ix<0)SPOTS.push(p);else SPOTS[ix]=p;refreshAfterChange(p.id);fillSourceForm(p);toast('已儲存來源：'+p.name)}catch(e){$('#managerMessage').textContent='⚠ '+e.message}});
$('#sourceDelete').addEventListener('click',()=>{if(!editId)return;if(SPOTS.length<=1){toast('至少保留一個來源');return}const p=SPOTS.find(x=>x.id===editId);if(!p)return;if(!confirm('確定刪除「'+p.name+'」？此變更只影響本瀏覽器，可從預設或備份還原。'))return;SPOTS=SPOTS.filter(x=>x.id!==editId);if(!SPOTS.some(x=>x.enabled!==false))SPOTS[0].enabled=true;refreshAfterChange();fillSourceForm(currentSpot());toast('來源已刪除')});$('#sourceView').addEventListener('click',()=>{if(editId&&SPOTS.find(p=>p.id===editId)?.enabled!==false){selectSpot(editId,true);closeManager()}});
$('#sourceExport').addEventListener('click',()=>{const blob=new Blob([JSON.stringify({version:4,exportedAt:new Date().toISOString(),spots:SPOTS},null,2)],{type:'application/json;charset=utf-8'}),link=document.createElement('a'),u=URL.createObjectURL(blob);link.href=u;link.download='此刻野境_攝影機來源備份.json';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);toast('已匯出 '+SPOTS.length+' 筆攝影機來源')});
$('#sourceImport').addEventListener('click',()=>{$('#sourceImportFile').value='';$('#sourceImportFile').click()});$('#sourceImportFile').addEventListener('change',async e=>{const f=e.target.files?.[0];if(!f)return;try{if(f.size>1024*1024)throw Error('JSON 檔案不可超過 1MB');const raw=JSON.parse(await f.text()),list=normalizeSourceList(Array.isArray(raw)?raw:raw.spots);if(!confirm('將以 '+list.length+' 筆來源取代目前來源？建議先匯出備份。'))return;SPOTS=list;refreshAfterChange();fillSourceForm(currentSpot());toast('已成功匯入 '+list.length+' 筆來源')}catch(err){$('#managerMessage').textContent='⚠ 匯入失敗：'+err.message}});
$('#sourceRestore').addEventListener('click',()=>{if(!confirm('確定恢復預設 100 筆來源？目前的自訂與修改會被覆蓋。'))return;SPOTS=JSON.parse(JSON.stringify(DEFAULT_SPOTS));refreshAfterChange();fillSourceForm(currentSpot());toast('已恢復預設來源')});
$('#reportBtn').addEventListener('click',()=>{const p=currentSpot();if(manualIssues[p.id]){delete manualIssues[p.id];persistIssues();logAlert('已取消「'+p.name+'」的人工異常回報',false)}else{manualIssues[p.id]=new Date().toISOString();persistIssues();logAlert('「'+p.name+'」由使用者回報無法觀看（未經官方驗證）')}renderHealth();renderList();if(sourceModalOpen)renderManagerItems()});
$('#recheckBtn').addEventListener('click',()=>{if(navigator.onLine===false){toast('瀏覽器提示網路可能中斷，恢復後再檢查');return}startMedia()});$('#clearAlertsBtn').addEventListener('click',()=>{alerts.length=0;renderAlertLog();toast('本次異常紀錄已清除')});$('#inlineAlerts').addEventListener('change',e=>{inlineAlertsEnabled=e.target.checked});
$('#notifyBtn').addEventListener('click',async()=>{if(!('Notification' in window)){toast('此瀏覽器不支援桌面通知，頁內提醒仍可使用');return}if(!window.isSecureContext){toast('桌面通知需 HTTPS 或 localhost；直接開啟 HTML 仍可使用頁內提醒');return}try{if(Notification.permission==='granted'){desktopNotifyEnabled=!desktopNotifyEnabled}else{const response=await Notification.requestPermission();desktopNotifyEnabled=response==='granted'}$('#notifyBtn').textContent=desktopNotifyEnabled?'✓ 桌面通知已開':'開啟桌面通知';toast(desktopNotifyEnabled?'已啟用本頁開啟期間的桌面提醒':'未啟用桌面提醒')}catch{toast('此瀏覽器無法取得通知權限')}});
window.addEventListener('offline',()=>{healthMap.clear();renderHealth();renderList();if(sourceModalOpen)renderManagerItems();logAlert('瀏覽器回報本機網路可能中斷；無法確認外部攝影機狀態')});window.addEventListener('online',()=>{healthMap.clear();clearMedia();renderHealth();renderList();if(sourceModalOpen)renderManagerItems();logAlert('瀏覽器網路連線提示已恢復，請手動重新播放以驗證攝影機',false)});
window.addEventListener('keydown',e=>{if(e.key==='Escape'&&sourceModalOpen)closeManager()});
setInterval(()=>{if(activePlayer&&currentSpot()?.cams?.length){let playerState;try{playerState=activePlayer.getPlayerState()}catch{return}const code=healthMap.get(healthKey(currentSpot(),state.cam))?.code;if(playerState===1&&code!=='playing')setCamHealth(currentSpot(),'playing','影片正在播放（不代表即時直播）');if(playerState===3&&code==='playing')setCamHealth(currentSpot(),'buffering','播放器正在緩衝');}renderStatusOverview()},30000);
renderAlertLog();renderStatusOverview();
/* ========== END LIVE FEATURES ========== */

solarInfo=solarAt(new Date());$('#earthYear').textContent='EARTH · '+new Date().getFullYear();setInterval(()=>{solarInfo=solarAt(new Date());lastShadeKey='';renderList();updateClocks()},60000);setInterval(updateClocks,1000);resize();renderList();renderDetails();state.targetLon=currentSpot().lon;state.targetLat=currentSpot().lat;state.pausedUntil=Date.now()+20000;requestAnimationFrame(frame);
})();


