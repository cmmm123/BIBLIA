const ST=DATA.map((d,i)=>({n:i+1,t:d.t,sub:d.sub}));

const ROUTE=["inicio","estande-1","estande-2","estande-3","estande-4","estande-5","baixar"];
const $=s=>document.querySelector(s),pg=$("#pg");
const lsG=(k,d)=>{try{const v=localStorage.getItem(k);return v==null?d:JSON.parse(v)}catch(e){return d}};
const lsS=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
let seen=lsG("mostra-vistos",[]),fs=lsG("mostra-fonte",1),cur=-1,tabs={},qs={},swiped=lsG("mostra-deslizou",false);
document.documentElement.style.setProperty("--fs",fs);
const parse=()=>{const i=ROUTE.indexOf(location.hash.replace("#",""));return i<0?0:i};
const IC={clock:'<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',play:'<path d="M8 5l11 7-11 7z" fill="currentColor"/>',stop:'<rect x="6" y="6" width="12" height="12" rx="1.5" fill="currentColor"/>',check:'<path d="M5 12.5l4.5 4.5L19 7"/>',bulb:'<path d="M9 18h6M10 21h4M12 3a6 6 0 00-3.5 10.9c.6.5 1 1.2 1 2.1h5c0-.9.4-1.6 1-2.1A6 6 0 0012 3z"/>',cross:'<path d="M12 3v18M6 9h12"/>',x:'<path d="M6 6l12 12M18 6L6 18"/>',left:'<path d="M15 5l-7 7 7 7"/>',right:'<path d="M9 5l7 7-7 7"/>',up:'<path d="M6 15l6-6 6 6"/>',home:'<path d="M4 11l8-7 8 7v9H4z"/><path d="M10 20v-6h4v6"/>',down:'<path d="M12 4v11M7 11l5 5 5-5M5 20h14"/>'};
const ic=n=>`<svg class="ic" viewBox="0 0 24 24" aria-hidden="true">${IC[n]}</svg>`;
const clamp=(v,a,b)=>Math.max(a,Math.min(b,v));
const reduce=matchMedia("(prefers-reduced-motion:reduce)").matches;
const pane=i=>pg.children[i];
/* ---- páginas ---- */
function home(){
  const nx=ST.find(x=>!seen.includes(x.n))||ST[0],started=seen.length>0;
  return `<div class="in pad"><section class="hero"><div class="rays"></div><p class="k" style="margin:0;position:relative">Mostra cultural</p><h1 style="position:relative">Bíblia Sagrada</h1><img src="img/logo-boa-terra.jpg" alt="Logo Boa Terra" style="position:relative;display:block;width:62%;max-width:230px;aspect-ratio:1;border-radius:50%;margin:22px auto 6px;box-shadow:0 0 0 4px #d9a866,0 8px 24px rgba(0,0,0,.35)"><p class="k" style="position:relative;text-align:center;margin:18px 0 0;color:#f0dfc0">Realização</p><img src="img/logo-agape.jpg" alt="Logo do Centro Educacional Ágape" style="position:relative;display:block;width:68%;max-width:250px;margin:14px auto 0;border-radius:14px;box-shadow:0 0 0 3px #d9a866"></section>
<a class="btn" href="#estande-${nx.n}" data-go="${nx.n}">${started?(seen.length>=N?"Rever desde o estande 1":"Continuar no estande "+nx.n):"Começar pelo estande 1"}</a>
<p class="k" style="margin:26px 0 6px">O caminho da mostra</p><div class="route">${ST.map(x=>`<div class="rt ${seen.includes(x.n)?"v":""}${x.n===nx.n&&seen.length<N?" nx":""}"><div class="n">${seen.includes(x.n)?ic("check"):x.n}</div><div class="bx"><b>${x.t}</b><small>${seen.includes(x.n)?"Visitado · "+x.sub:x.n===nx.n?"Próximo · "+x.sub:x.sub}</small></div></div>`).join("")}</div>
<p class="hint">Ao terminar um estande, toque em Próximo (ou arraste a tela) para seguir ao seguinte.</p></div>`;
}
