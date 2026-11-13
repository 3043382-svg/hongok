document.getElementById('share').addEventListener('click',async()=>{const status=document.getElementById('share-status');const url=new URL('./?v=film5',location.href).href;try{if(navigator.share){await navigator.share({title:'홍옥 紅玉 · 익숙한 한 끼에, 홍옥 한 술',text:'익숙한 한 끼에, 홍옥 한 술. 20초 영상과 함께 만나보세요.',url});}else if(navigator.clipboard&&window.isSecureContext){await navigator.clipboard.writeText(url);status.textContent='주소를 복사했습니다. 카카오톡에 붙여넣어 보내세요.';}else{status.textContent='아래 주소를 복사해 카카오톡에 보내세요: '+url;}}catch(e){if(e.name!=='AbortError')status.textContent='브라우저 주소를 복사해 카카오톡에 보내주세요.';}});

const film=document.getElementById('hongok-film');
const play=document.querySelector('.film-play');
play.addEventListener('click',async()=>{try{await film.play();play.hidden=true;}catch{play.hidden=true;film.controls=true;}});
film.addEventListener('play',()=>{play.hidden=true;});
film.addEventListener('ended',()=>{play.hidden=false;});
