/* ---- estrutura ---- */
function build(){
  pg.innerHTML=ROUTE.map((r,i)=>`<section class="pane" data-p="${i}" aria-label="${i===0?"Início":i===6?"Aplicativo":"Estande "+i}"></section>`).join("")+`<div class="swh${swiped?" off":""}" id="swh">Arraste para o lado ›</div>`;
  pane(0).innerHTML=home();for(let n=1;n<=N;n++){pane(n).innerHTML=stand(n);content(n)}pane(6).innerHTML=end();
  $("#tr").insertAdjacentHTML("beforeend",ST.map(x=>`<a href="#estande-${x.n}" data-go="${x.n}" aria-label="Estande ${x.n}" id="t${x.n}">${x.n}</a>`).join(""));
}
function go(i,instant){pg.scrollTo({left:clamp(i,0,6)*pg.clientWidth,behavior:instant||reduce?"auto":"smooth"})}
function paint(){
  const c=cur;
  for(let n=1;n<=N;n++)$("#t"+n).className=c===n?"on":seen.includes(n)?"v":"";
  $("#hb").style.display=c===0?"none":"";
  const ht=$("#ht"),nh=c===0?"Mostra Bíblia Sagrada":c===6?"Aplicativo da Bíblia":`<small>Estande ${c} de ${N}</small>${ST[c-1].t}`;
  if(ht.dataset.k!==String(c)){ht.dataset.k=c;ht.innerHTML=nh;ht.style.animation="none";ht.offsetWidth;ht.style.animation=""}
  $("#pv").disabled=c<=0;
  $("#ml").textContent=c===0?"Início":c===6?"Aplicativo":"Estande "+c+" de "+N;
  $("#dts").innerHTML=ST.map(x=>`<i class="${c===x.n?"on":seen.includes(x.n)?"v":""}"></i>`).join("");
  const nx=$("#nx");nx.dataset.to=c>=6?0:c+1;nx.innerHTML=(c===0?"Começar":c===5?"Finalizar":c===6?"Início":"Próximo")+(c===6?"":" "+ic("right"));
  nx.classList.toggle("fin5",c===5);
}
function frame(){
  const p=pg.scrollLeft/(pg.clientWidth||1);
  $("#fl").style.width=(clamp(p-1,0,4)/4)*($("#tr").clientWidth-30)+"px";
  for(let n=1;n<=N;n++)$("#t"+n).style.transform="scale("+(1+.3*Math.max(0,1-Math.abs(p-n)))+")";
  $("#pr").style.width=(clamp(p,0,6)/6*100)+"%";
}
let raf=0,settle=0;
pg.addEventListener("scroll",()=>{if(!raf)raf=requestAnimationFrame(()=>{raf=0;frame()});clearTimeout(settle);settle=setTimeout(onSettle,90);if(!swiped&&pg.scrollLeft>20){swiped=true;lsS("mostra-deslizou",true);$("#swh").classList.add("off")}},{passive:true});
function onSettle(){
  const i=Math.round(pg.scrollLeft/(pg.clientWidth||1));if(i===cur)return;
  const prev=cur;cur=i;
  if(i>=1&&i<=5&&!seen.includes(i)){seen.push(i);lsS("mostra-vistos",seen);pane(0).innerHTML=home()}
  if(i===0)pane(0).innerHTML=home();
  if(i===6)confete();
  try{history.replaceState(null,"","#"+ROUTE[i])}catch(e){}
  try{if(prev>=0&&navigator.vibrate)navigator.vibrate(8)}catch(e){}
  paint();
}
function confete(){
  if(seen.length<N||lsG("mostra-festa",false))return;lsS("mostra-festa",true);
  const f=$("#cf");if(!f)return;
  for(let i=0;i<28;i++){const s=document.createElement("i");s.style.left=Math.random()*100+"%";s.style.background=COL[i%4];s.style.animationDelay=Math.random()*.9+"s";f.appendChild(s)}
}
function lightbox(i){
  const L=document.createElement("div");L.className="lb";let k=i;const g=DATA[Math.max(1,cur)-1].gal;
  const draw=()=>{L.innerHTML=`<div class="lbi">${g[k].svg}</div><p>${g[k].cap} (${k+1} de ${g.length})</p><div class="rw"><button data-d="-1">‹</button><button data-d="0">Fechar</button><button data-d="1">›</button></div>`};
  draw();L.addEventListener("click",e=>{const b=e.target.closest("button");if(!b)return;const d=+b.dataset.d;if(d===0)L.remove();else{k=(k+d+g.length)%g.length;draw()}});document.body.appendChild(L);
}
function sheet(){
  const L=document.createElement("div");L.className="sh";
  L.innerHTML=`<div class="sp" role="dialog" aria-label="Ir para"><div class="grab"></div><p class="k" style="margin:0 0 4px">Ir para</p>${[0,1,2,3,4,5,6].map(i=>`<button data-to="${i}" class="${i===cur?"on":""}"><span class="sn">${i===0?ic("home"):i===6?ic("down"):i}</span><span><b>${i===0?"Início":i===6?"Aplicativo da Bíblia":ST[i-1].t}</b><small>${i===cur?"Você está aqui":i>=1&&i<=5?(seen.includes(i)?"Já visitado":ST[i-1].sub):i===0?"Menu da mostra":"Convite final"}</small></span></button>`).join("")}</div>`;
  L.addEventListener("click",e=>{const b=e.target.closest("[data-to]");if(b){L.remove();go(+b.dataset.to);return}if(e.target===L)L.remove()});
  document.body.appendChild(L);
}
document.addEventListener("click",e=>{
  if(e.target.closest("#pv")){go(cur-1);return}
  if(e.target.closest("#nx")){go(+$("#nx").dataset.to);return}
  if(e.target.closest("#md")){sheet();return}
  const g=e.target.closest("[data-go]");if(g&&!e.target.closest(".lb")){e.preventDefault();go(+g.dataset.go);return}
  const ps=e.target.closest(".pane");if(!ps)return;const n=+ps.dataset.p;
  const t=e.target.closest("[data-t]");
  if(t){tabs[n]=t.dataset.t;ps.querySelectorAll(".tabs button").forEach(b=>b.classList.toggle("on",b===t));content(n);return}
  const gi=e.target.closest("[data-i]");if(gi){lightbox(+gi.dataset.i);return}
  const f=e.target.closest("[data-f]");if(f){f.classList.toggle("on");return}
  const show=()=>{content(n);const x=ps.querySelector(".fb,.win");if(x)x.scrollIntoView({block:"center",behavior:reduce?"auto":"smooth"})};
  const o=e.target.closest("[data-o]");
  if(o){const q=qs[n];if(!q||q.a!=null)return;const k=+o.dataset.o;q.a=k;q.ok=k===QZ(n)[q.i].c;try{navigator.vibrate&&navigator.vibrate(q.ok?[12,40,12]:[30])}catch(x){}show();return}
  if(e.target.closest("[data-qn]")){const q=qs[n];if(q.i<QN-1){q.i++;q.ok=false;q.a=null}else q.done=true;content(n);const tb=ps.querySelector(".tabs");if(tb)ps.scrollTo({top:tb.offsetTop-6,behavior:reduce?"auto":"smooth"});return}
  if(e.target.closest("[data-qr]")){qs[n]=null;content(n);return}
  const fz=e.target.closest("[data-fs]");
  if(fz){fs=Math.round(clamp(fs+.1*(+fz.dataset.fs),.85,1.35)*100)/100;document.documentElement.style.setProperty("--fs",fs);lsS("mostra-fonte",fs);return}
});
