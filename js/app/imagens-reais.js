/* Fotos opcionais dos estandes.
   Liste em img/fotos.json os arquivos que existirem (ex.: ["e1-0.jpg","e1-1.jpg"]).
   e{estande}-0.jpg = capa; e{estande}-1..5.jpg = galeria. O que não estiver na lista continua com o desenho. */
const rr={};
function aplicarFoto(arq){
  const m=/^e([1-5])-([0-5])\.jpg$/.exec(arq);if(!m)return;
  const n=+m[1],k=+m[2],D=DATA[n-1],src="img/"+arq,im=new Image();
  im.onload=()=>{
    const tag='<img src="'+src+'" alt="'+(k?D.gal[k-1].cap:D.t)+'" loading="lazy">';
    if(k)D.gal[k-1].svg=tag;else D.cover=tag;
    clearTimeout(rr[n]);rr[n]=setTimeout(()=>{pane(n).innerHTML=stand(n);content(n)},80);
  };
  im.src=src;
}
function loadReal(){
  fetch("img/fotos.json").then(r=>r.ok?r.json():[]).then(l=>l.forEach(aplicarFoto)).catch(()=>{});
}
