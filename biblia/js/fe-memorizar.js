/* ---- Memorizar ---- */
const INTV=[0,1,3,7,15,30],MBOX=["Novo","Nível 1","Nível 2","Nível 3, sem dicas","Quase fixado","Fixado"];
const SETS=[["Confiança","Para quando falta controle",["Provérbios 3:5-6","Salmos 56:3","Isaías 26:3","Salmos 37:5","Jeremias 17:7"]],
["Paz","Para acalmar o coração",["João 14:27","Filipenses 4:6-7","Salmos 29:11","Romanos 15:13","Colossenses 3:15"]],
["Coragem e força","Para dias difíceis",["Josué 1:9","Isaías 41:10","Filipenses 4:13","Salmos 27:1","Deuteronômio 31:6","2 Timóteo 1:7"]],
["Amor","O coração da mensagem cristã",["João 3:16","1 João 4:19","Romanos 5:8","1 Coríntios 13:4-7","João 15:12","Romanos 8:38-39"]],
["Sabedoria","Para decidir bem",["Provérbios 9:10","Tiago 1:5","Salmos 119:105","Provérbios 16:3","Eclesiastes 3:1"]],
["Gratidão e louvor","Para começar o dia",["Salmos 100:4","1 Tessalonicenses 5:18","Salmos 118:24","Salmos 103:2","Colossenses 3:17"]],
["Consolo","Para quem está cansado ou triste",["Mateus 11:28","Salmos 34:18","1 Pedro 5:7","Salmos 46:1","Salmos 23:1-3","Apocalipse 21:4"]],
["Fé e vida","Viver o que se crê",["Hebreus 11:1","Romanos 8:28","Gálatas 2:20","Mateus 6:33","Mateus 5:16","Romanos 12:2"]]];
const SUGM=SETS[0][2].slice(0,2).concat(["João 3:16","Salmos 23:1","Filipenses 4:13","Josué 1:9"]);
const MEM=()=>LSg("mem",[]);
const MST=()=>{const s=LSg("mst",{d:"",n:0,t:0});return s.d===dkey(0)?s:{d:dkey(0),n:0,t:s.t||0}};
const mref=x=>LIV[x.b][0]+" "+x.c+":"+x.a+(x.z>x.a?"-"+x.z:"");
const mdue=()=>MEM().filter(x=>x.due<=dnum()).sort((p,q)=>p.due-q.due||(p.last||0)-(q.last||0));
const msame=(x,y)=>x.b===y.b&&x.c===y.c&&x.a===y.a&&x.z===y.z;
const mkey=x=>x.b+"."+x.c+"."+x.a+"."+x.z;
const wcore=w=>w.replace(/[^\p{L}\p{N}]/gu,"").toLowerCase();
const shuf=a=>{a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[a[i],a[j]]=[a[j],a[i]]}return a};
function mparse(q){
  const m=String(q).trim().match(/^(.*?\d+\s*[:.,]\s*\d+)(?:\s*[-–]\s*(\d+))?$/);if(!m)return null;
  const r=parseRef(m[1]);if(!r||r[2]<0)return null;
  const a=r[2]+1,z=m[2]?+m[2]:a,n=B[r[0]][r[1]-1].length;
  return z<a||z>n||z-a>4?null:{b:r[0],c:r[1],a,z};
}
function mcur(){const D=mdue();if(D.length)return{it:D[0],free:false};const M=MEM();if(S.mfree&&M.length)return{it:M[(S.mfi||0)%M.length],free:true};return null}
function mqInit(it){const w=vrs(it.b,it.c,it.a,it.z).split(" "),g=Math.max(2,Math.ceil(w.length/12)),ch=[];for(let i=0;i<w.length;i+=g)ch.push(w.slice(i,i+g).join(" "));S.mq={k:mkey(it),ch,o:shuf(ch.map((_,i)=>i)),pk:[],er:0}}
function mgrade(){return `<div class="row">${fb("f_vm_g","0","Errei","btn alt")}${fb("f_vm_g","1","Lembrei")}</div>`}
function mcard(it,free){
  const txt=vrs(it.b,it.c,it.a,it.z),words=txt.split(" "),box=free?Math.max(1,it.box):it.box,mo=S.mo||"lac",ref=mref(it);
  const top=`<div class="card"><h2>${ref}${free?" · treino livre":""}</h2>`, spk=`${fb("f_vm_s","","Ouvir","btn alt")}`;
  if(box===0)return top+`<p class="ptxt">${txt}</p><p class="note">Versículo novo. Leia em voz alta duas ou três vezes e depois toque em Já sei.</p><div class="row">${spk}${fb("f_vm_g","1","Já sei")}</div></div>`;
  const modes=seg2("f_vm_mo",mo,[["lac","Lacunas"],["ord","Ordenar"],["dig","Digitar"]]);
  if(mo==="ord"){
    if(!S.mq||S.mq.k!==mkey(it))mqInit(it);const q=S.mq,rest=q.o.filter(i=>!q.pk.includes(i)),ok=q.pk.length===q.ch.length;
    return top+modes+`<p class="note">Toque nos trechos na ordem certa.</p><p class="ptxt" style="min-height:60px">${q.pk.map(i=>q.ch[i]).join(" ")||"…"}</p>`+(ok?`<p class="note"><b>${q.er?"Completo, com "+q.er+(q.er>1?" erros.":" erro."):"Completo, sem erros!"}</b></p>${mgrade()}`:`<div class="chips">${rest.map(i=>`<button data-a="f_vm_p" data-v="${i}">${q.ch[i]}</button>`).join("")}</div>`)+`<div class="row">${spk}${fb("f_vm_rs","","Embaralhar","btn alt")}</div></div>`;
  }
  if(mo==="dig"){
    const g=S.mdg&&S.mdg.k===mkey(it)?S.mdg:null;
    if(g)return top+modes+`<p class="ptxt">${g.html}</p><p class="note"><b>${g.pct}% das palavras certas.</b> Verde: acertou. Vermelho: faltou ou diferente.</p>${mgrade()}</div>`;
    return top+modes+`<p class="note">Escreva o versículo de memória, depois toque em Conferir.</p><textarea id="md" class="ta" placeholder="Escreva aqui…"></textarea><div class="row">${spk}${fb("f_vm_c","","Conferir")}</div></div>`;
  }
  const lv=Math.min(box,3);
  const html=words.map((w,i)=>{const m=w.match(/^([^\p{L}\p{N}]*)(.*?)([^\p{L}\p{N}]*)$/u),core=m[2];
    const hide=!S.mall&&core.length>0&&!(S.mrv||[]).includes(i)&&(lv===3||((i*7+3)%10)<(lv===1?3:6));
    return hide?`${m[1]}<span class="bl" data-a="f_vm_w" data-v="${i}">${lv<3?core[0]:""}${"_".repeat(Math.max(core.length-(lv<3?1:0),1))}</span>${m[3]}`:w}).join(" ");
  return top+modes+`<p class="ptxt">${html}</p><p class="note">Nível ${lv} de 3. Toque nas lacunas para ver a palavra.</p><div class="row">${fb("f_vm_all","",S.mall?"Esconder":"Mostrar tudo","btn alt")}${spk}</div>${mgrade()}</div>`;
}
function feMem(){
  const M=MEM(),D=mdue(),td=dnum(),st=MST(),T=S.mt||"r";
  let c=seg2("f_vm_t",T,[["r","Revisar"],["l","Lista"],["s","Conjuntos"]]);
  if(T==="s"){
    c+=`<p class="note">Conjuntos temáticos. Toque em Adicionar para incluir todos os versículos na sua lista de revisão.</p>`;
    return c+SETS.map((s,i)=>{const ps=s[2].map(mparse),nw=ps.filter(p=>p&&!M.some(x=>msame(x,p))).length;return `<div class="card"><h2>${s[0]} · ${s[2].length} versículos</h2><p class="note">${s[1]}</p><p class="note">${s[2].join(" · ")}</p>${nw?fb("f_vm_set",i,"Adicionar "+nw+(nw>1?" novos":" novo"),"btn"):`<p class="note"><b>Todos já estão na sua lista.</b></p>`}</div>`}).join("");
  }
  if(T==="l"){
    c+=M.length?`<p class="note">${M.length} versículos na lista · ${M.filter(x=>x.box>=5).length} fixados</p>`+pbar(M.reduce((a,x)=>a+x.box,0)/(5*M.length))+M.map((x,i)=>`<div class="hrow"><span><b>${mref(x)}</b><i>${MBOX[x.box]}${x.due<=td?" · para revisar":""}</i></span><button class="lnk" data-a="f_vm_x" data-v="${i}">Remover</button></div>`).join(""):`<p class="note">Sua lista está vazia. Adicione abaixo ou escolha um conjunto.</p>`;
    const sg=SUGM.filter(r=>{const p=mparse(r);return p&&!M.some(x=>msame(x,p))});
    return c+`<p class="lbl">Adicionar versículo</p>${inp("mr","Ex.: João 3:16 ou Salmos 23:1-3")}<button class="btn" data-a="f_vm_a" style="width:100%;margin:8px 0">Adicionar</button><div class="chips">${sg.map(r=>`<button data-a="f_vm_a" data-v="${r}">${r}</button>`).join("")}</div>`;
  }
  if(!M.length)return c+`<p class="note">Aqui cada versículo volta na hora certa: amanhã, em 3 dias, em uma semana, e assim por diante. Você treina de três jeitos: completar lacunas, ordenar trechos e digitar de memória.</p><div class="card"><p class="pt">Comece escolhendo um conjunto.</p>${fb("f_vm_t","s","Ver conjuntos")}</div>`;
  c+=`<p class="note">Hoje: <b>${st.n}</b> ${st.n===1?"revisão":"revisões"} · <b>${D.length}</b> para revisar · ${st.t||0} no total</p>`;
  const cu=mcur();
  if(cu)c+=mcard(cu.it,cu.free);
  else{const nd=Math.min(...M.map(x=>x.due))-td;c+=`<div class="card"><p class="pt">Tudo revisado por hoje.</p><p class="note">Próxima revisão ${nd<=1?"amanhã":"em "+nd+" dias"}.</p>${fb("f_vm_fr","","Treinar mesmo assim","btn alt")}</div>`}
  if(S.mfree&&D.length===0&&cu)c+=fb("f_vm_fr0","","Sair do treino livre","btn alt");
  return c;
}
