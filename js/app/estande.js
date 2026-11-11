const TABS=[["r","Resumo"],["g","Galeria"],["c","Curiosidades"],["d","Quiz"]];
function stand(n){
  const x=ST[n-1],nx=n<N?ST[n]:null,tab=tabs[n]||"r";
  return `<div class="in pad"><div class="cover">${DATA[n-1].cover}<div class="ct"><small>Estande ${n} de ${N}</small><h2>${x.t}</h2></div></div>
<div class="meta"><button class="chip" data-fs="1" aria-label="Aumentar o texto">A+</button><button class="chip" data-fs="-1" aria-label="Diminuir o texto">A–</button></div>
<div class="tabs">${TABS.map(t=>`<button data-t="${t[0]}" class="${tab===t[0]?"on":""}">${t[1]}</button>`).join("")}</div>
<div class="tc"></div>
<a class="next" href="#${ROUTE[n+1]}" data-go="${n+1}"><div class="n">${nx?nx.n:ic("down")}</div><span><small>${nx?"Próximo estande":"Fim dos estandes"}</small><b>${nx?nx.t:"Ver o convite do aplicativo"}</b></span><i>›</i></a></div>`;
}
