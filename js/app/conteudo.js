function content(n){
  const el=pane(n).querySelector(".tc"),tab=tabs[n]||"r";let h="";
  const D=DATA[n-1];
  if(tab==="r")h=`<p class="lead">${D.lead}</p>`+D.secs.map((x,k)=>`<h3 class="hh">${x.h}</h3><p class="txt">${x.p}</p>`+(k===0?`<figure class="fig" data-i="0">${D.gal[0].svg}<figcaption>${D.gal[0].cap}</figcaption></figure>`:"")).join("")+`<div class="orn">${ic("cross")}</div><div class="quote">${D.quote.t}<small class="qb">${D.quote.by}</small></div>`;
  else if(tab==="g")h=`<div class="gal">${D.gal.map((g,k)=>`<button data-i="${k}" aria-label="Ampliar: ${g.cap}">${g.svg}<span>${g.cap}</span></button>`).join("")}</div><p class="mut" style="margin-top:10px">Toque em uma imagem para ampliar.</p>`;
  else if(tab==="c")h=`<p class="mut" style="margin:0 0 12px">Toque nos cartões para virar.</p>`+D.curios.map(c=>`<button class="flip" data-f="1"><div class="fi"><div class="f">${ic("bulb")}<b>${c.f}</b><small>Toque para revelar</small></div><div class="b">${c.b}</div></div></button>`).join("");
  else h=quiz(n);
  el.innerHTML=h;
}
function end(){
  return `<div class="in pad"><div class="fin"><div class="cf" id="cf"></div><div class="rays"></div><p class="k" style="position:relative">Fim da mostra</p><h2 style="position:relative">Obrigado pela visita</h2><p style="position:relative">Leve a Bíblia com você: o aplicativo funciona no seu celular, sem precisar procurar na loja.</p>
<div class="phone"><img src="${APP}" alt="Tela inicial do aplicativo Bíblia Sagrada"></div>
<ul class="ben"><li>Bíblia completa para ler, com áudio em voz alta</li><li>Versículo do dia com reflexão</li><li>Planos de leitura, memorização e quiz</li><li>Meditação, orações e diário, tudo no seu aparelho</li></ul>
<a class="btn" id="inst" href="${BIBLIA}">Instalar o aplicativo da Bíblia</a></div>
</div>`;
}
