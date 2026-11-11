function toast(m){const t=document.createElement("div");t.className="toast";t.textContent=m;document.body.appendChild(t);setTimeout(()=>t.remove(),2200)}
function nxt(d){let b=S.b,c=S.c+d;if(c<1){b--;if(b<0||(b===65&&S.b>=66))return null;c=LIV[b][1]}else if(c>LIV[b][1]){b++;if(b>=LIV.length||(b===66&&S.b<66))return null;c=1}return [b,c]}
function go(d){halt();const x=nxt(d);if(!x)return;S.b=x[0];S.c=x[1];S.idx=0;render();scrollTo(0,0)}

function home(){
  const t=new Date(),hr=t.getHours(),g=hr<12?"Bom dia":hr<18?"Boa tarde":"Boa noite";
  const n=Math.floor((t-new Date(t.getFullYear(),0,0))/864e5),v=VERS[n%VERS.length];
  const row=(a,ic,ti,s)=>`<button class="mrow" data-a="open" data-v="${a}">${ICO[ic]}<span><b>${ti}</b><small>${s}</small></span>${ICO.next}</button>`;
  return `<header class="hero"><button class="theme" data-a="theme" aria-label="Alternar tema">${ICO.moon}</button><img src="/icon-512.png" alt="Logo Boa Terra" style="display:block;width:92px;height:92px;border-radius:50%;margin:0 0 14px;box-shadow:0 0 0 3px #d9a866"><h1>Bíblia Sagrada</h1><p class="sub">Boa Terra</p><p>${g}. Leia, ouça e reflita com a Palavra.</p><div class="stats"><span>73 livros</span><span>1.326 capítulos</span><span>35.286 versículos</span></div></header>
<section class="card"><h2>Versículo do dia</h2><p class="tema">${v[2]}</p><p class="verse">“${v[1]}”</p><b class="ref">${v[0]}</b><p class="refl">${v[3]}</p></section>
${homeFe()}<div class="menu">${POS?row("cont","mark","Continuar de onde parou",LIV[POS[0]][0]+" "+POS[1]):""}${row("ot","book","Antigo Testamento","39 livros, da Criação aos profetas")}${row("nt","crossm","Novo Testamento","27 livros, de Mateus ao Apocalipse")}${row("dc","book","Livros Deuterocanônicos","7 livros: Tobias, Judite, Sabedoria e outros")}${row("salmos","note","Salmos","150 cânticos de louvor, súplica e consolo")}${row("listen","sound","Ouvir a Bíblia","Leitura em voz alta, capítulo após capítulo")}<button class="mrow" data-a="tab" data-v="rand">${ICO.shuffle}<span><b>Versículo e reflexão</b><small>Um texto para meditar a cada toque</small></span>${ICO.next}</button></div>
<p class="note">Texto: Almeida 1911 (domínio público), com a ortografia da época. Livros deuterocanônicos: Figueiredo (domínio público).</p>`;
}
function read(){
  const n=LIV[S.b];
  if(S.view==="books")return `<h2 class="ttl">Livros</h2><div class="seg"><button class="${S.nt?"":"on"}" data-a="nt" data-v="0">Antigo Test.</button><button class="${S.nt===true?"on":""}" data-a="nt" data-v="1">Novo Test.</button><button class="${S.nt===2?"on":""}" data-a="nt" data-v="2">Deuterocanônicos</button></div>`+(S.nt===2?`<p class="note">Sete livros do cânone católico, em tradução do Pe. Antônio Pereira de Figueiredo (domínio público).</p>`:"")+LIV.map((l,i)=>(i>=66?2:i>=39?1:0)===(S.nt===2?2:S.nt?1:0)?`<button class="item" data-a="book" data-v="${i}">${l[0]}<span>${l[1]} cap.</span></button>`:"").join("");
  const d=data();if(!d)return"";
  const pv=nxt(-1),nx=nxt(1),nm=x=>LIV[x[0]][0]+" "+x[1];
  const flow=d.v.map((t,i)=>`<span class="v${S.playing&&i===S.idx?" on":""}" data-a="verse" data-v="${i}"><sup>${i+1}</sup>${t}</span>`).join("")+(S.b>=66?`<p class="note">Texto digitalizado da tradução de Figueiredo, que pode conter pequenas falhas de leitura.</p>`:"");
  return `<div class="bar"><button class="ghost" data-a="back">‹ Livros</button><div class="tools"><button data-a="fs" data-v="-2">A−</button><button data-a="fs" data-v="2">A+</button><button data-a="vs">${ICO.sound}Voz</button></div></div>
<button class="pick" data-a="sheet" aria-label="Escolher capítulo"><span>${n[0]}</span><b>${S.c}</b>${ICO.down}</button>
<article class="flow" style="--fs:${S.fs}px">${flow}</article>
<div class="end"><p>${nx?"Fim de "+n[0]+" "+S.c:"Fim da Bíblia"}</p>${nx?`<button class="btn" data-a="go" data-v="1">${nm(nx)}${ICO.next}</button>`:""}${pv?`<button class="ghost" data-a="go" data-v="-1">‹ ${nm(pv)}</button>`:""}</div>
<button class="fab" data-a="play">${S.playing?ICO.pause+"Pausar":ICO.play+"Ouvir"}</button>`+(S.sheet?sheet():"");
}
function sheet(){
  const n=LIV[S.b];let g="";
  for(let c=1;c<=n[1];c++)g+=`<button class="${c===S.c?"cur":""}" data-a="chap" data-v="${c}">${c}</button>`;
  return `<div class="shade" data-a="sheetx"></div><div class="sheet"><div class="grab"></div><h3>${n[0]}</h3><p class="note">Escolha o capítulo</p><div class="chs">${g}</div></div>`;
}
function rand(){
  const v=VERS[S.r];
  return `<h2 class="ttl">Versículo e reflexão</h2><section class="card big"><p class="tema">${v[2]}</p><p class="verse">“${v[1]}”</p><b class="ref">${v[0]}</b></section>
<section class="card"><h2>Reflexão</h2><p class="refl">${v[3]}</p></section>
<div class="row"><button class="btn" data-a="rnd">${ICO.shuffle}Outro versículo</button></div>
<div class="row"><button class="btn alt" data-a="speakr">${ICO.sound}Ouvir</button><button class="btn alt" data-a="share">${ICO.share}Compartilhar</button></div>
<div class="row"><button class="btn alt" data-a="readv">${ICO.book}Ler o capítulo completo</button></div>`;
}
