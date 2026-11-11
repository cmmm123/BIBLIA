let pd=false,lp=null;window.pc="#e53935";
const cpos=e=>{const c=e.target,r=c.getBoundingClientRect();return[(e.clientX-r.left)*c.width/r.width,(e.clientY-r.top)*c.height/r.height]};
document.addEventListener("pointerdown",e=>{if(e.target.id!=="pt")return;pd=true;lp=cpos(e);const g=e.target.getContext("2d");g.strokeStyle=window.pc;g.lineWidth=12;g.lineCap="round";g.beginPath();g.moveTo(lp[0],lp[1]);g.lineTo(lp[0]+.1,lp[1]);g.stroke()});
document.addEventListener("pointermove",e=>{if(!pd||e.target.id!=="pt")return;const g=e.target.getContext("2d"),p=cpos(e);g.strokeStyle=window.pc;g.lineWidth=12;g.lineCap="round";g.beginPath();g.moveTo(lp[0],lp[1]);g.lineTo(p[0],p[1]);g.stroke();lp=p});
addEventListener("pointerup",()=>pd=false);
setInterval(()=>{const l=LSg("lem",null);if(!l||!l.on||typeof Notification==="undefined"||Notification.permission!=="granted")return;const n=new Date(),hm=String(n.getHours()).padStart(2,"0")+":"+String(n.getMinutes()).padStart(2,"0");if(hm===l.t&&l.last!==DK()){l.last=DK();LSs("lem",l);new Notification("Fé diária",{body:"Tem passagem, oração e mensagem novas para hoje."})}},20000);

function render(){
  savePos();
  document.querySelectorAll("nav button").forEach(n=>n.classList.toggle("on",n.dataset.v===S.tab));
  if(MH&&!(S.tab==="fe"&&S.f==="med"))mtStop();
  $("#app").innerHTML=({home:home,read:read,search:srch,explore:expl,rand:rand,fe:fe})[S.tab]();
  if(S.vs)$("#app").insertAdjacentHTML("beforeend",vsheet());
  if(S.tab==="fe")fePost();
  if(S.tab==="search")find(S.q);
  if(S.fv!=null){const el=document.querySelectorAll(".v")[S.fv];if(el){el.classList.add("hl");el.scrollIntoView({block:"center"})}S.fv=null}
}

document.addEventListener("click",e=>{
  const t=e.target.closest("[data-a]");if(!t)return;
  const a=t.dataset.a,v=t.dataset.v;
  if(a==="tab"){halt();S.sheet=false;if(v==="fe")S.f="";S.tab=v;render();scrollTo(0,0)}
  else if(a==="nt"){S.nt=v==="2"?2:v==="1";render()}
  else if(a==="book"){halt();S.tab="read";S.b=+v;S.c=1;S.idx=0;S.sheet=false;S.view="reader";render();scrollTo(0,0)}
  else if(a==="chap"){halt();S.c=+v;S.idx=0;S.sheet=false;S.view="reader";render();scrollTo(0,0)}
  else if(a==="sheet"){S.sheet=true;render()}
  else if(a==="sheetx"){S.sheet=false;render()}
  else if(a==="back"){halt();S.sheet=false;S.view="books";render();scrollTo(0,0)}
  else if(a==="fs"){S.fs=Math.min(30,Math.max(14,S.fs+ +v));try{localStorage.setItem("fs",S.fs)}catch(x){}render()}
  else if(a==="rate"){S.rate=S.rate>=1.4?0.8:Math.round((S.rate+0.2)*10)/10;render()}
  else if(a==="play"){if(S.playing){halt();mark()}else play(S.idx)}
  else if(a==="verse"){halt();play(+v)}
  else if(a==="open"){halt();S.sheet=false;S.tab="read";
    if(v==="ot"||v==="nt"||v==="dc"){S.view="books";S.nt=v==="dc"?2:v==="nt"}
    else{S.view="reader";S.idx=0;if(v==="salmos"){S.b=18;S.c=1}else if(POS){S.b=POS[0];S.c=POS[1]}else{S.b=0;S.c=1}}
    render();scrollTo(0,0);if(v==="listen")play(0)}
  else if(a==="readv"){halt();const r=VERS[S.r];S.tab="read";S.view="reader";S.b=r[4];S.c=r[5];S.idx=0;render();scrollTo(0,0)}
  else if(a==="exv"){S.ex=+v;render();scrollTo(0,0)}
  else if(a==="th"){S.th=+v;render()}
  else if(a==="qx"){S.q="";$("#q").value="";find();$("#q").focus()}
  else if(a==="clr"){REC=[];try{localStorage.removeItem("rec")}catch(x){}find()}
  else if(a==="scp"){S.sc=v;render()}
  else if(a==="ord"){S.so=v;render()}
  else if(a==="cp"){const p=v.split(",").map(Number),t="“"+B[p[0]][p[1]-1][p[2]]+"” — "+LIV[p[0]][0]+" "+p[1]+":"+(p[2]+1);try{navigator.clipboard.writeText(t).then(()=>toast("Versículo copiado"))}catch(x){toast("Não foi possível copiar")}}
  else if(a.startsWith("f_"))FA(a,v)
  else if(a==="more"){S.lim+=30;show()}
  else if(a==="bk"){S.sc=v+"-"+v;render()}
  else if(a==="sug"){S.q=decodeURIComponent(v);$("#q").value=S.q;find()}
  else if(a==="grp"){S.g=S.g===+v?-1:+v;render()}
  else if(a==="hit"){const p=v.split(",").map(Number);if(S.tab==="search")addRec(S.q);halt();S.sheet=false;S.tab="read";S.view="reader";S.b=p[0];S.c=p[1];S.idx=0;S.fv=p[2]>=0?p[2]:null;render();if(S.fv==null)scrollTo(0,0)}
  else if(a==="go")go(+v);
  else if(a==="rnd"){halt();let n;do{n=Math.floor(Math.random()*VERS.length)}while(n===S.r);S.r=n;render()}
  else if(a==="speakr"){halt();const r=VERS[S.r];say(r[0].replace(":",", versículo ")+". "+r[1],()=>say("Reflexão. "+r[3]))}
  else if(a==="share"){
    const r=VERS[S.r],txt="“"+r[1]+"” — "+r[0];
    if(navigator.share){navigator.share({text:txt}).catch(()=>{})}
    else{try{navigator.clipboard.writeText(txt).then(()=>toast("Versículo copiado"))}catch(x){toast("Não foi possível copiar")}}
  }
  else if(a==="vs"){S.vs=true;render()}
  else if(a==="vsx"){S.vs=false;halt();render()}
  else if(a==="vpick"){LSs("vn",decodeURIComponent(v));render();vsay()}
  else if(a==="vrate"){S.rate=+v;LSs("rate",S.rate);render();vsay()}
  else if(a==="vpitch"){S.pitch=+v;LSs("pitch",S.pitch);render();vsay()}
  else if(a==="vtest")vsay();
  else if(a==="theme"){
    const r=document.documentElement,dk=matchMedia("(prefers-color-scheme: dark)").matches;
    r.dataset.theme=(r.dataset.theme||(dk?"dark":"light"))==="dark"?"light":"dark";
  }
});
let qt;
document.addEventListener("change",e=>{if(e.target.id==="sc"){S.sc=e.target.value;find()}else if(e.target.id==="md"){S.md=e.target.value;find()}});
document.addEventListener("keydown",e=>{if(e.key==="Enter"&&e.target.id==="q"){addRec(S.q);e.target.blur()}});
document.addEventListener("input",e=>{if(e.target.id==="q"){S.q=e.target.value;{const x=$("#qx");if(x)x.style.visibility=S.q?"visible":"hidden"}clearTimeout(qt);qt=setTimeout(()=>find(S.q),250)}});
if(syn){syn.getVoices();syn.onvoiceschanged=()=>{if(S.vs)render()}}
document.querySelectorAll("nav i").forEach(i=>i.innerHTML=ICO[i.dataset.i]);
render();
