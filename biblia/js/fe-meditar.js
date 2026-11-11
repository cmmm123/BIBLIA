/* ---- Meditar ---- */
const pas=x=>({ref:x[0]+" "+x[1]+":"+x[2]+(x[3]>x[2]?"-"+x[3]:""),t:vrs(bidx(x[0]),x[1],x[2],x[3])});
const MPAS=[["Salmos",23,1,3],["Salmos",46,10,10],["Salmos",62,1,2],["Salmos",131,1,3],["Salmos",91,1,2],["Salmos",121,1,2],["Salmos",42,1,2],["Mateus",11,28,30],["Filipenses",4,6,7],["Isaías",41,10,10],["Isaías",43,1,2],["João",15,4,5],["João",14,27,27],["Romanos",8,38,39]];
const SESS=[
{id:"lectio",t:"Leitura meditada",d:"Lectio divina: leia, medite, ore e descanse em um texto bíblico.",steps:[["Ler","Leia o texto devagar, duas vezes. Perceba qual palavra ou frase chama a sua atenção.",.2],["Meditar","Repita essa palavra ou frase. O que ela mostra sobre Deus? E sobre o seu dia de hoje?",.3],["Orar","Converse com Deus sobre o que surgiu: agradeça, peça, entregue o que pesa.",.3],["Descansar","Fique em silêncio, sem pedir nem pensar em nada. Apenas descanse na presença de Deus.",.2]]},
{id:"manha",t:"Começar o dia",d:"Entregar o dia a Deus antes de começar.",p:["Salmos",143,8,8],steps:[["Agradecer","Agradeça pelo novo dia, pelo descanso e por uma coisa simples que você tem.",.2],["Entregar","Diga a Deus o que espera você hoje: tarefas, encontros, preocupações. Entregue cada um.",.3],["Pedir","Peça sabedoria, paciência e atenção para as pessoas que vai encontrar.",.3],["Escolher","Escolha uma atitude para hoje, como ouvir mais ou reclamar menos, e peça ajuda para vivê-la.",.2]]},
{id:"ansiedade",t:"Entregando a ansiedade",d:"Para quando a cabeça não para.",n:"Esta prática acompanha, mas não substitui, o cuidado profissional quando a ansiedade é frequente ou intensa.",p:["Filipenses",4,6,7],steps:[["Parar","Pare o que está fazendo. Solte os ombros e respire fundo três vezes.",.15],["Nomear","Diga em voz baixa, uma a uma, as coisas que pesam. Dar nome ajuda a reduzir o tamanho delas.",.25],["Entregar","Para cada preocupação, diga: isto eu entrego a ti. Deixe-a nas mãos de Deus.",.3],["Receber","Respire devagar e fique em silêncio. Não force nada: apenas receba a paz.",.2],["Um passo","Pense em um único passo pequeno ao seu alcance hoje e comprometa-se com ele.",.1]]},
{id:"gratidao",t:"Gratidão",d:"Perceber o que já foi dado.",p:["Salmos",103,1,2],steps:[["Lembrar","Lembre três coisas boas dos últimos dias, grandes ou pequenas.",.25],["Pessoas","Pense em quem esteve do seu lado. Agradeça por cada pessoa, pelo nome.",.25],["O difícil","Há algo difícil pelo qual, olhando para trás, você aprendeu? Agradeça sem pressa.",.25],["Louvar","Termine em louvor simples: obrigado, Senhor. Repita devagar.",.25]]},
{id:"perdao",t:"Perdoar e ser perdoado",d:"Soltar mágoas e recomeçar.",p:["Efésios",4,31,32],steps:[["Admitir","Reconheça sem disfarce o que ainda dói ou incomoda em você.",.25],["Pedir perdão","Há algo pelo qual você precisa pedir perdão a Deus ou a alguém? Diga isso a Deus agora.",.25],["Soltar","Pense em quem feriu você. Perdoar é decidir soltar a dívida, mesmo antes de sentir. Faça essa decisão em oração.",.3],["Abençoar","Peça algo bom para essa pessoa e para si mesmo. Se for sábio, pense em um gesto de reconciliação.",.2]]},
{id:"esperanca",t:"Quando falta esperança",d:"Para dias cinzentos.",n:"Se a tristeza persistir por muitos dias, procure alguém de confiança ou um profissional de saúde.",p:["Isaías",40,29,31],steps:[["Aceitar","Diga a Deus, com sinceridade, como você está. Não precisa melhorar a frase.",.25],["Lembrar","Lembre de uma vez em que, depois de um tempo difícil, as coisas melhoraram.",.25],["Pedir","Peça forças para o dia de hoje, só para hoje. Não precisa resolver o futuro agora.",.3],["Descansar","Fique em silêncio. Esperar, aqui, é apenas permanecer.",.2]]},
{id:"luto",t:"Dor e saudade",d:"Para quem está de luto ou machucado.",n:"A dor tem seu tempo. Se estiver pesada demais, não a carregue sozinho: procure alguém de confiança ou um profissional.",p:["Salmos",34,18,18],steps:[["Permitir","Deixe a dor existir. Você pode chorar. Diga a Deus tudo o que sente.",.3],["Recordar","Lembre com carinho de quem ou do que você perdeu. Agradeça pelo que foi vivido.",.3],["Entregar","Entregue a Deus o que você não consegue carregar hoje.",.2],["Ser consolado","Respire devagar e fique em silêncio, como quem descansa nos braços de alguém.",.2]]},
{id:"exame",t:"Revisão do dia",d:"Um exame da noite, inspirado no Exame de Santo Inácio de Loyola.",p:["Salmos",139,23,24],steps:[["Agradecer","Percorra o dia e agradeça pelo que recebeu, mesmo o que parecia comum.",.2],["Pedir luz","Peça a Deus que mostre o dia com os olhos dele, com verdade e sem culpa excessiva.",.15],["Rever","Reveja as horas do dia: quando você amou bem, quando se afastou. O que se repete?",.35],["Pedir perdão","Reconheça as falhas e peça perdão. Perdoe também quem o feriu hoje.",.15],["Amanhã","Olhe para o dia seguinte e peça a graça de fazer algo melhor.",.15]]},
{id:"dormir",t:"Antes de dormir",d:"Soltar o dia e descansar em paz.",p:["Salmos",4,8,8],steps:[["Soltar","Deixe o dia ir. O que ficou sem resolver pode esperar até amanhã.",.25],["Reconciliar","Peça perdão pelo que fez e perdoe o que sofreu hoje.",.25],["Entregar","Entregue a Deus as pessoas que você ama e a noite que vem.",.25],["Descansar","Respire devagar, mais devagar a cada vez. Durma em paz.",.25]]}];
const BPAT=[["Calma 4-4-6","Inspire 4, segure 4, expire 6. Bom para desacelerar.",[["Inspire",4],["Segure",4],["Expire",6]]],["Sono 4-7-8","Inspire 4, segure 7, expire 8. Bom antes de dormir.",[["Inspire",4],["Segure",7],["Expire",8]]],["Quadrada 4-4-4-4","Quatro fases iguais. Ajuda a focar.",[["Inspire",4],["Segure",4],["Expire",4],["Segure",4]]],["Suave 5-5","Inspire 5, expire 5. O mais simples.",[["Inspire",5],["Expire",5]]]];
const FRAS=["Senhor Jesus Cristo, tem piedade de mim.","Vem, Senhor Jesus.","Aquietai-vos, e sabei que eu sou Deus.","Confio em ti, Senhor.","Paz seja contigo."];
const MS={tab:"g",sid:null,p:0,min:10,kind:"",run:false,pause:false,i:0,left:0,el:0,voice:false,snd:true,done:false,pat:0,bmin:3,smin:5,rc:0,rg:33,rp:0};
let MH=null,WL=null,AC=null;
const SS=()=>SESS.find(x=>x.id===MS.sid);
const sdur=()=>SS().steps.map(s=>Math.max(20,Math.round(MS.min*60*s[2])));
const spas=()=>{const s=SS();return pas(s.id==="lectio"?MPAS[MS.p]:s.p)};
const bcyc=P=>P.reduce((a,x)=>a+x[1],0);
function chime(n){try{AC=AC||new (window.AudioContext||window.webkitAudioContext)();for(let k=0;k<(n||1);k++){const o=AC.createOscillator(),g=AC.createGain(),t=AC.currentTime+k*1.3;o.type="sine";o.frequency.value=528;g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.22,t+.05);g.gain.exponentialRampToValueAtTime(.001,t+1.5);o.connect(g);g.connect(AC.destination);o.start(t);o.stop(t+1.6)}}catch(e){}}
function mtStop(){if(MH){clearInterval(MH);MH=null}MS.run=false;try{if(WL){WL.release();WL=null}}catch(e){}}
function bph(el){const P=BPAT[MS.pat][2],t=el%bcyc(P);let a=0;for(let i=0;i<P.length;i++){if(t<a+P[i][1])return{i,rem:a+P[i][1]-t,len:P[i][1],lab:P[i][0]};a+=P[i][1]}}
function bkick(){const c=$("#mc");if(!c||MS.kind!=="r")return;const P=BPAT[MS.pat][2],ph=bph(MS.el),lab=ph.lab;
  const sc=lab==="Inspire"?1.55:lab==="Expire"?.8:(P[(ph.i+P.length-1)%P.length][0]==="Inspire"?1.55:.8);
  c.style.transition=lab==="Segure"?"none":"transform "+ph.rem+"s linear";c.style.transform="scale("+sc+")";const b=$("#mb");if(b)b.textContent=lab}
function mtTick(){
  if(MS.pause||!MS.run)return;
  MS.left--;MS.el++;
  if(MS.kind==="g"){
    const D=sdur(),tot=D.reduce((a,b)=>a+b,0);
    if(MS.left<=0){MS.i++;if(MS.i>=D.length){mtStop();MS.done=true;render();if(MS.snd)chime(2);return}MS.left=D[MS.i];MS.el=D.slice(0,MS.i).reduce((a,b)=>a+b,0);render();if(MS.snd)chime(1);if(MS.voice)faSay(SS().steps[MS.i][1]);return}
    const t=$("#mt"),p=$("#mp");if(t)t.textContent=fmt(MS.left);if(p)p.style.width=(MS.el/tot*100)+"%";
  }else{
    if(MS.left<=0){mtStop();MS.done=true;render();if(MS.snd)chime(2);return}
    const t=$("#mt");if(t)t.textContent=fmt(MS.left);
    if(MS.kind==="r"){const ph=bph(MS.el);if(ph.rem===ph.len)bkick()}
  }
}
function lecRun(){
  const s=SS(),D=sdur(),tot=D.reduce((a,b)=>a+b,0),pp=spas();
  return `<p class="note">${s.t} · passo ${MS.i+1} de ${D.length} · <b>${s.steps[MS.i][0]}</b></p><p class="clock" id="mt">${fmt(MS.left)}</p><div class="pbar"><i id="mp" style="width:${MS.el/tot*100}%"></i></div><p class="pt">${s.steps[MS.i][1]}</p><div class="card"><p class="ptxt">${pp.t}</p><p class="note"><b>${pp.ref}</b></p></div><div class="row"><button class="btn alt" id="mpz" data-a="f_md_z">${MS.pause?"Continuar":"Pausar"}</button>${fb("f_md_n","","Próximo passo","btn alt")}</div>${fb("f_md_q","","Encerrar","btn alt")}`;
}
function respRun(){
  setTimeout(bkick,60);
  return `<p class="note" style="text-align:center">${BPAT[MS.pat][0]}</p><div class="bwrap"><div class="bcirc" id="mc" style="transform:scale(.8)"></div><span class="blab" id="mb">Inspire</span></div><p class="clock" id="mt">${fmt(MS.left)}</p><div class="row"><button class="btn alt" id="mpz" data-a="f_md_z">${MS.pause?"Continuar":"Pausar"}</button>${fb("f_md_q","","Encerrar","btn alt")}</div>`;
}
function silRun(){
  return `<p class="note" style="text-align:center">Silêncio</p><p class="clock" id="mt" style="margin-top:50px">${fmt(MS.left)}</p><p class="ptxt" style="text-align:center;margin:30px 0">${vrs(bidx("Salmos"),46,10,10)}</p><div class="row"><button class="btn alt" id="mpz" data-a="f_md_z">${MS.pause?"Continuar":"Pausar"}</button>${fb("f_md_q","","Encerrar","btn alt")}</div>`;
}
const durChips=(a,cur,L)=>`<div class="chips">${L.map(x=>`<button class="${cur===x?"on":""}" data-a="${a}" data-v="${x}">${x} min</button>`).join("")}</div>`;
function feMed(){
  if(MS.done){const k=MS.kind;return `<div class="card"><p class="pt">${k==="g"?"Amém.":k==="r"?"Bom descanso.":"Obrigado pelo silêncio."}</p><p class="note">${k==="g"?"Se algo marcou você, escreva antes que passe.":"Se quiser, registre uma palavra de gratidão no diário ou faça uma oração curta."}</p>${fb("f_md_dj","","Escrever no diário")}${fb("f_md_q","","Fazer de novo","btn alt")}</div>`}
  if(MS.run)return MS.kind==="g"?lecRun():MS.kind==="r"?respRun():silRun();
  const seg=seg2("f_md_m",MS.tab,[["g","Guiadas"],["r","Respirar"],["s","Silêncio"],["c","Repetir"]]);
  if(MS.tab==="g"){
    if(!MS.sid)return seg+`<p class="note">Meditações com passos e cronômetro. Escolha uma e siga no seu ritmo. Você pode ativar a voz que guia cada passo e um sino suave nas trocas.</p>`+SESS.map(x=>`<button class="mrow" data-a="f_md_o" data-v="${x.id}"><span><b>${x.t}</b><small>${x.d}</small></span>${ICO.next}</button>`).join("");
    const s=SS(),pp=s.id==="lectio"?null:pas(s.p),D=sdur();
    return `<div class="bar"><button class="ghost" data-a="f_md_back">‹ Meditações</button></div><h3 class="sub2">${s.t}</h3><p class="note">${s.d}</p>${s.n?`<p class="note"><i>${s.n}</i></p>`:""}`+
    (s.id==="lectio"?`<p class="lbl">Passagem</p><div class="chips">${MPAS.map((x,i)=>`<button class="${MS.p===i?"on":""}" data-a="f_md_p" data-v="${i}">${pas(x).ref}</button>`).join("")}</div><div class="card"><p class="ptxt">${pas(MPAS[MS.p]).t}</p><p class="note"><b>${pas(MPAS[MS.p]).ref}</b></p></div>`:`<div class="card"><p class="ptxt">${pp.t}</p><p class="note"><b>${pp.ref}</b></p></div>`)+
    `<p class="lbl">Duração</p>${durChips("f_md_d",MS.min,[5,10,15,20])}<p class="lbl">Passos</p>`+s.steps.map((x,i)=>`<div class="hrow"><span><b>${x[0]}</b><i>${Math.max(1,Math.round(D[i]/60*10)/10).toString().replace(".",",")} min</i></span></div>`).join("")+
    `<div class="chips" style="margin-top:12px"><button class="${MS.voice?"on":""}" data-a="f_md_v">Guia em voz: ${MS.voice?"sim":"não"}</button><button class="${MS.snd?"on":""}" data-a="f_md_sn">Sino: ${MS.snd?"sim":"não"}</button></div>${fb("f_md_i","","Começar")}`;
  }
  if(MS.tab==="r")return seg+`<p class="note">Respiração lenta ajuda o corpo a desacelerar antes de orar. Siga o círculo: ele cresce ao inspirar e diminui ao expirar.</p><p class="lbl">Ritmo</p><div class="chips">${BPAT.map((x,i)=>`<button class="${MS.pat===i?"on":""}" data-a="f_md_pat" data-v="${i}">${x[0]}</button>`).join("")}</div><p class="note">${BPAT[MS.pat][1]}</p><p class="lbl">Duração</p>${durChips("f_md_b",MS.bmin,[1,3,5,10])}${fb("f_md_i","","Começar")}`;
  if(MS.tab==="s")return seg+`<p class="note">Um tempo de silêncio diante de Deus, sem falar e sem ler. Um sino suave marca o fim.</p><div class="card"><p class="ptxt">${vrs(bidx("Salmos"),46,10,10)}</p><p class="note"><b>Salmos 46:10</b></p></div><p class="lbl">Duração</p>${durChips("f_md_ss",MS.smin,[3,5,10,20])}<div class="chips"><button class="${MS.snd?"on":""}" data-a="f_md_sn">Sino: ${MS.snd?"sim":"não"}</button></div>${fb("f_md_i","","Começar")}`;
  return seg+`<p class="note">Frases curtas para repetir devagar, no ritmo da respiração. Toque no botão a cada repetição para contar.</p><div class="chips">${FRAS.map((x,i)=>`<button class="${MS.rp===i?"on":""}" data-a="f_md_cp" data-v="${i}">${x.length>22?x.slice(0,20)+"…":x}</button>`).join("")}</div><p class="ptxt" style="text-align:center;margin:18px 0 6px">${FRAS[MS.rp]}</p><button class="count" id="mcnt" data-a="f_md_c">${MS.rc}</button>${pbar(MS.rc/MS.rg)}<p class="note" style="text-align:center">Meta: ${MS.rg} repetições</p><div class="chips" style="justify-content:center">${[10,33,100].map(x=>`<button class="${MS.rg===x?"on":""}" data-a="f_md_cg" data-v="${x}">${x}</button>`).join("")}<button data-a="f_md_cr">Zerar</button></div>`;
}
