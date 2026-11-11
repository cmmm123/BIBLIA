const vt=(b,c,v)=>{let t=((B[b]||[])[c-1]||[])[v]||"";if(t.length>150)t=t.slice(0,150).replace(/\s+\S*$/,"")+"…";return t};
const hitv=x=>`<button class="hit" data-a="hit" data-v="${x[0]},${x[1]},${x[2]}"><b>${LIV[x[0]][0]} ${x[1]}:${x[2]+1}</b><span>${vt(x[0],x[1],x[2])}</span></button>`;
const histBlock=l=>`<div class="tl">${l.map(x=>`<button data-a="hit" data-v="${x[2]},${x[3]},-1"><b>${x[0]}</b><small>${x[1]}</small><i class="rf">${LIV[x[2]][0]} ${x[3]}</i></button>`).join("")}</div>`;
const SUG=["amor","fé","esperança","paz","perdão","sabedoria","luz","coração"];
const ABR={sl:18,jo:42,jn:42,mt:39,mc:40,lc:41,gn:0,ex:1,rm:44,ap:65,is:22,jr:23,pv:19,dn:26,at:43};
let IDX=null,REC=[];
try{REC=JSON.parse(localStorage.getItem("rec"))||[]}catch(e){}
function addRec(q){q=q.trim();if(q.length<3)return;REC=[q].concat(REC.filter(x=>x!==q)).slice(0,6);try{localStorage.setItem("rec",JSON.stringify(REC))}catch(e){}}
const nz=s=>s.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase();
const nzl=s=>nz(s).replace(/chr/g,"cr").replace(/ph/g,"f").replace(/th/g,"t").replace(/y/g,"i").replace(/ct/g,"t").replace(/ae/g,"ai").replace(/([a-qt-z])\1/g,"$1");
const hl=(t,ts)=>t.replace(/\p{L}+/gu,w=>{const n=nzl(w);return ts.some(k=>n===k||(k.length>3&&n.startsWith(k)))?"<mark>"+w+"</mark>":w});
function parseRef(q){
  const m=q.match(/^((?:[1-3]\s*)?[a-zA-ZÀ-ÿ]+)\.?\s*(\d+)(?:\s*[:.,]\s*(\d+))?$/);if(!m)return null;
  const nm=nz(m[1]).replace(/\s/g,""),c=+m[2];if(nm.length<2)return null;
  const nn=l=>nz(l[0]).replace(/\s/g,"");
  let b=m[1].toLowerCase()==="jó"?17:ABR[nm]!==undefined?ABR[nm]:LIV.findIndex(l=>nn(l)===nm);
  if(b<0)b=LIV.findIndex(l=>nn(l).startsWith(nm));
  if(b<0||c<1||c>LIV[b][1])return null;
  const v=m[3]?+m[3]-1:-1;
  return [b,c,v>=0&&v<B[b][c-1].length?v:-1];
}
function find(){
  const out=$("#res"),nt=$("#qn"),ex=$("#ex");if(!out)return;
  S.lim=30;S.H=[];ex.innerHTML="";
  const q=S.q.trim(),r=parseRef(q),rg=S.sc.split("-").map(Number);
  if(r)ex.innerHTML=`<button class="jump" data-a="hit" data-v="${r.join(",")}">${ICO.book}<span>Ir para <b>${LIV[r[0]][0]} ${r[1]}${r[2]>=0?":"+(r[2]+1):""}</b></span>${ICO.next}</button>`;
  if(r){
    const rv=r[2]>=0?r:null;
    nt.textContent=rv?"":"Referência encontrada. Toque para abrir o capítulo.";
    out.innerHTML=rv?`<button class="hit" data-a="hit" data-v="${rv.join(",")}"><b>${LIV[rv[0]][0]} ${rv[1]}:${rv[2]+1}</b><span>${B[rv[0]][rv[1]-1][rv[2]]}</span></button>`:"";
    return;
  }
  if(q.length<2){
    const ch=l=>`<div class="chips">${l.map(x=>`<button data-a="sug" data-v="${encodeURIComponent(x)}">${x}</button>`).join("")}</div>`;
    nt.textContent=q?"Digite ao menos 2 letras.":"Busque por palavra, frase ou referência. Ignora acentos e aceita a grafia de hoje: “pai” encontra “pae”. Use aspas para buscar uma frase exata.";
    out.innerHTML=q?"":(REC.length?`<p class="lbl">Buscas recentes<button class="lnk" data-a="clr">Limpar</button></p>`+ch(REC):"")+`<p class="lbl">Ir direto a um trecho</p>`+ch(["João 3:16","Salmos 23","Gênesis 1","Romanos 8","1 Coríntios 13","Mateus 5"])+`<p class="lbl">Sugestões de palavras</p>`+ch(SUG);
    return;
  }
  if(!IDX){IDX=[];B.forEach((bk,b)=>bk.forEach((ch,c)=>ch.forEach((t,v)=>IDX.push([b,c+1,v," "+nzl(t).replace(/[^a-z0-9]+/g," ")+" "]))))}
  const ts=nzl(q).replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(w=>w.length>1),ph=ts.join(" "),cnt={};
  S.T=ts;
  if(!ts.length){nt.textContent="Digite ao menos 3 letras.";out.innerHTML="";return}
  const sc=(t,k)=>t.includes(" "+k+" ")?2:k.length>3&&t.includes(" "+k)?1:0;
  let md=/^["“”'].+["“”']$/.test(q)?"p":"a",any=false;
  for(let pass=0;pass<2;pass++){
    S.H=[];Object.keys(cnt).forEach(k=>delete cnt[k]);
    for(const x of IDX){
      if(x[0]<rg[0]||x[0]>rg[1])continue;
      const t=x[3];let p=0,ok;
      if(md==="p"){ok=t.includes(" "+ph);p=t.includes(" "+ph+" ")?4:0}
      else{const a=ts.map(k=>sc(t,k));ok=md==="o"?a.some(n=>n>0):a.every(n=>n>0);p=a.reduce((m,n)=>m+n,0);if(ts.length>1&&t.includes(" "+ph))p+=3}
      if(ok){x[4]=p;S.H.push(x);cnt[x[0]]=(cnt[x[0]]||0)+1}
    }
    if(S.H.length||md!=="a"||ts.length<2)break;
    md="o";any=true;
  }
  if(S.so!=="b")S.H.sort((a,b)=>b[4]-a[4]);
  const nb=Object.keys(cnt).length,tot=S.H.length;
  nt.textContent=tot?(any?"Nenhum versículo reúne todas as palavras. Mostrando os que têm alguma delas: ":"")+tot+(tot>1?" versículos":" versículo")+" em "+nb+(nb>1?" livros.":" livro."):"Nada encontrado. Tente outras palavras ou outro trecho da Bíblia.";
  if(nb>1)ex.innerHTML+=`<p class="lbl">Onde mais aparece</p><div class="chips">${Object.keys(cnt).sort((a,b)=>cnt[b]-cnt[a]).slice(0,8).map(b=>`<button data-a="bk" data-v="${b}">${LIV[b][0]}<i>${cnt[b]}</i></button>`).join("")}</div>`;
  show();
}
function show(){
  const out=$("#res");if(!out)return;
  out.innerHTML=S.H.slice(0,S.lim).map(x=>`<button class="hit" data-a="hit" data-v="${x[0]},${x[1]},${x[2]}"><b>${LIV[x[0]][0]} ${x[1]}:${x[2]+1}<span class="cp" data-a="cp" data-v="${x[0]},${x[1]},${x[2]}">copiar</span></b><span>${hl(B[x[0]][x[1]-1][x[2]],S.T)}</span></button>`).join("")+(S.H.length>S.lim?`<button class="btn alt" data-a="more" style="width:100%;margin:14px 0">Mostrar mais ${Math.min(30,S.H.length-S.lim)}</button>`:"");
}
function ctl(){
  const sc=[["Toda a Bíblia","0-72"],["Antigo Testamento","0-38"],["Novo Testamento","39-65"]].concat(GRUPOS.map(g=>[g[0],g[2]+"-"+g[3]]));
  if(!sc.some(x=>x[1]===S.sc))sc.unshift([LIV[+S.sc.split("-")[0]][0],S.sc]);
  const sg=(a,cur,l)=>`<div class="seg sm">${l.map(x=>`<button class="${cur===x[0]?"on":""}" data-a="${a}" data-v="${x[0]}">${x[1]}</button>`).join("")}</div>`;
  return `<p class="lbl" style="margin:0 0 2px">Onde buscar</p><div class="exh"><div class="chips">${sc.map(x=>`<button class="${S.sc===x[1]?"on":""}" data-a="scp" data-v="${x[1]}">${x[0]}</button>`).join("")}</div></div>`+sg("ord",S.so||"r",[["r","Mais relevantes"],["b","Ordem da Bíblia"]]);
}
function srch(){
  const o=(v,t)=>`<option value="${v}"${S.sc===v?" selected":""}>${t}</option>`,m=(v,t)=>`<option value="${v}"${S.md===v?" selected":""}>${t}</option>`;
  return `<h2 class="ttl">Buscar</h2><div class="sbox">${ICO.search}<input id="q" type="search" enterkeyhint="search" placeholder="Palavra, frase ou referência" autocomplete="off" value="${S.q.replace(/"/g,"&quot;")}"><button class="qx" id="qx" data-a="qx" aria-label="Limpar busca" style="visibility:${S.q?"visible":"hidden"}">×</button></div>
${ctl()}
<div id="ex"></div><p class="note" id="qn"></p><div id="res"></div>`;
}
function expl(){
  const seg=["Histórias","Temas","Ensinos","Livros"].map((t,i)=>`<button class="${S.ex===i?"on":""}" data-a="exv" data-v="${i}">${t}</button>`).join("");
  const row=(t,s,r,d)=>`<button class="mrow" data-a="hit" data-v="${d}"><span><b>${t}</b><small>${s}</small><i class="rf">${r}</i></span>${ICO.next}</button>`;
  let c="";
  if(S.ex===0){
    const h=HIST[Math.floor(Date.now()/864e5)%HIST.length];
    c=`<div class="card dia"><h2>História do dia</h2><p class="verse">${h[0]}</p><p class="note">${h[1]}</p><button class="btn" data-a="hit" data-v="${h[2]},${h[3]},-1">Ler: ${LIV[h[2]][0]} ${h[3]}</button></div>
<h3 class="sub2">Antigo Testamento</h3>${histBlock(HIST.filter(x=>x[2]<39))}<h3 class="sub2">Novo Testamento</h3>${histBlock(HIST.filter(x=>x[2]>=39))}`;
  }else if(S.ex===1){
    const t=TEMAS[S.th||0];
    c=`<p class="note">Escolha o que você está vivendo e leia passagens que falam sobre isso.</p><div class="chips">${TEMAS.map((x,i)=>`<button class="${(S.th||0)===i?"on":""}" data-a="th" data-v="${i}">${x[0]}</button>`).join("")}</div><h3 class="sub2">${t[0]}</h3>${t[1].map(hitv).join("")}`;
  }else if(S.ex===2)c=`<h3 class="sub2">Ensinos de Jesus e de Paulo</h3>${ENS.map(x=>row(x[0],x[1],LIV[x[2]][0]+" "+x[3],x[2]+","+x[3]+","+x[4])).join("")}<h3 class="sub2">Salmos para cada momento</h3>${SAL.map(x=>row(x[0],"",`Salmos ${x[1]}`,`18,${x[1]},-1`)).join("")}`;
  else c=`<h3 class="sub2" style="margin-top:6px">Por onde começar</h3>${[["Conhecer Jesus","O Evangelho mais curto e direto.",40,1],["Ler com calma","Um evangelho cheio de conversas e sinais.",42,1],["O começo de tudo","A primeira página da Bíblia.",0,1],["Orar e refletir","O primeiro dos Salmos.",18,1],["Sabedoria prática","Conselhos para o dia a dia.",19,1]].map(x=>row(x[0],x[1],LIV[x[2]][0]+" "+x[3],x[2]+","+x[3]+",-1")).join("")}
<h3 class="sub2">Os 73 livros</h3><p class="note">A Bíblia é uma biblioteca reunida em grupos. Toque em um grupo para ver seus livros e o número de capítulos.</p>`+
    GRUPOS.map((g,i)=>`<div><button class="mrow" data-a="grp" data-v="${i}"><span><b>${g[0]}</b><small>${g[1]}</small></span>${i===S.g?ICO.up:ICO.down}</button>${i===S.g?`<div class="bks">${LIV.slice(g[2],g[3]+1).map((l,k)=>`<button data-a="book" data-v="${g[2]+k}">${l[0]}<i>${l[1]}</i></button>`).join("")}</div>`:""}</div>`).join("")+
    `<h3 class="sub2">Você sabia?</h3>`+FATOS.map(f=>f[2]?`<button class="fato" data-a="hit" data-v="${f[2]}"><b>${f[0]}</b><small>${f[1]}</small></button>`:`<div class="fato"><b>${f[0]}</b><small>${f[1]}</small></div>`).join("");
  return `<h2 class="ttl">Explorar</h2><div class="seg">${seg}</div>${c}`;
}
