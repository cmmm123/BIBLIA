const NS={hab:feHab,med:feMed,ora:feOra,plan:fePlan,mem:feMem};
function gadv(){const D=sdur();MS.i++;if(MS.i>=D.length){mtStop();MS.done=true;render();if(MS.snd)chime(2);return}
  MS.left=D[MS.i];MS.el=D.slice(0,MS.i).reduce((a,b)=>a+b,0);render();if(MS.snd)chime(1);if(MS.voice)faSay(SS().steps[MS.i][1])}
const FH={
 f_pl_start(v){const s=PL();s.a=v;if(!s.p[v])s.p[v]={s:dnum(),d:[]};LSs("pl",s);S.pls=false;render();scrollTo(0,0)},
 f_pl_sw(){S.pls=true;render();scrollTo(0,0)},
 f_pl_d(v){const s=PL(),pr=s.p[s.a],d=+v,i=pr.d.indexOf(d);i<0?pr.d.push(d):pr.d.splice(i,1);LSs("pl",s);if(i<0)toast("Dia "+(d+1)+" concluído");render();scrollTo(0,0)},
 f_pl_un(){const s=PL(),pr=s.p[s.a];if(pr.d.length){pr.d.splice(pr.d.indexOf(Math.max(...pr.d)),1);LSs("pl",s)}render()},
 f_hb_t(v){const H=hab(),k=dkey(0),a=H.g[k]||(H.g[k]=[]),i=a.indexOf(v);i<0?a.push(v):a.splice(i,1);LSs("hab",H);render()},
 f_hb_add(){const t=($("#hn").value||"").trim();if(!t)return toast("Escreva o hábito");const H=hab();H.l.push({id:"u"+Date.now(),t:t.slice(0,60)});LSs("hab",H);render()},
 f_hb_x(v){const H=hab();H.l=H.l.filter(x=>x.id!==v);LSs("hab",H);render()},
 f_hb_e(){S.hed=!S.hed;render()},
 f_md_m(v){MS.tab=v;render()},
 f_md_o(v){MS.sid=v;render();scrollTo(0,0)},
 f_md_back(){MS.sid=null;render()},
 f_md_p(v){MS.p=+v;render()},
 f_md_d(v){MS.min=+v;render()},
 f_md_b(v){MS.bmin=+v;render()},
 f_md_ss(v){MS.smin=+v;render()},
 f_md_pat(v){MS.pat=+v;render()},
 f_md_v(){MS.voice=!MS.voice;render()},
 f_md_sn(){MS.snd=!MS.snd;render()},
 f_md_i(){mtStop();MS.kind=MS.tab;MS.run=true;MS.pause=false;MS.done=false;MS.i=0;MS.el=0;
   MS.left=MS.kind==="g"?sdur()[0]:MS.kind==="r"?MS.bmin*60:MS.smin*60;
   try{if(navigator.wakeLock)navigator.wakeLock.request("screen").then(l=>WL=l).catch(()=>{})}catch(e){}
   MH=setInterval(mtTick,1000);render();scrollTo(0,0);if(MS.snd)chime(1);if(MS.kind==="g"&&MS.voice)faSay(SS().steps[0][1]+" "+spas().t)},
 f_md_q(){mtStop();MS.done=false;render()},
 f_md_z(){MS.pause=!MS.pause;const b=$("#mpz");if(b)b.textContent=MS.pause?"Continuar":"Pausar"},
 f_md_n(){if(MS.kind==="g"&&MS.run)gadv()},
 f_md_dj(){mtStop();MS.done=false;S.f="dia";S.dt="Reflexão";render();scrollTo(0,0)},
 f_md_cp(v){MS.rp=+v;MS.rc=0;render()},
 f_md_c(){MS.rc++;try{navigator.vibrate&&navigator.vibrate(12)}catch(e){}if(MS.rc===MS.rg){toast("Meta alcançada");if(MS.snd)chime(1)}render()},
 f_md_cg(v){MS.rg=+v;render()},
 f_md_cr(){MS.rc=0;render()},
 f_or_t(v){S.ot=v;render()},
 f_or_c(v){S.oc=v;render()},
 f_or_a(){const t=($("#pr").value||"").trim();if(!t)return toast("Escreva o pedido");const P=LSg("ped",[]);P.unshift({id:"p"+Date.now(),t:t.slice(0,200),c:S.oc||"Eu",n:0,l:"",a:false,ad:""});LSs("ped",P);render()},
 f_or_o(v){const P=LSg("ped",[]),x=P.find(y=>y.id===v);if(x&&x.l!==dkey(0)){x.n++;x.l=dkey(0)}LSs("ped",P);render()},
 f_or_r(v){const P=LSg("ped",[]),x=P.find(y=>y.id===v);if(x){x.a=!x.a;x.ad=x.a?new Date().toLocaleDateString("pt-BR"):""}LSs("ped",P);render()},
 f_or_x(v){LSs("ped",LSg("ped",[]).filter(y=>y.id!==v));render()},
 f_or_s(v){const x=ORS[+v];faSay(x[0]+". "+vrs(bidx(x[1]),x[2],x[3],x[4]))},
 f_vm_t(v){S.mt=v;render()},
 f_vm_a(v){const p=mparse(v||($("#mr")?$("#mr").value:""));if(!p)return toast("Não entendi. Use o formato João 3:16");const M=MEM();if(M.some(x=>msame(x,p)))return toast("Já está na sua lista");M.push({b:p.b,c:p.c,a:p.a,z:p.z,box:0,due:dnum(),last:0});LSs("mem",M);toast("Adicionado");render()},
 f_vm_set(v){const M=MEM();let n=0;SETS[+v][2].forEach(r=>{const p=mparse(r);if(p&&!M.some(x=>msame(x,p))){M.push({b:p.b,c:p.c,a:p.a,z:p.z,box:0,due:dnum(),last:0});n++}});LSs("mem",M);toast(n+(n===1?" versículo adicionado":" versículos adicionados"));S.mt="r";render();scrollTo(0,0)},
 f_vm_mo(v){S.mo=v;S.mq=null;S.mdg=null;render()},
 f_vm_g(v){const cu=mcur();if(!cu)return;const M=MEM();
   if(!cu.free){const it=M.find(x=>msame(x,cu.it));it.box=v==="1"?Math.min(5,it.box+1):0;it.due=dnum()+INTV[it.box];it.last=Date.now();LSs("mem",M)}else S.mfi=(S.mfi||0)+1;
   const st=MST();st.n++;st.t=(st.t||0)+1;st.d=dkey(0);LSs("mst",st);S.mrv=[];S.mall=false;S.mq=null;S.mdg=null;render()},
 f_vm_w(v){(S.mrv||(S.mrv=[])).push(+v);render()},
 f_vm_all(){S.mall=!S.mall;render()},
 f_vm_p(v){const q=S.mq;if(!q)return;const i=+v;if(q.ch[i]===q.ch[q.pk.length])q.pk.push(i);else{q.er++;toast("Não é essa")}render()},
 f_vm_rs(){const cu=mcur();if(cu)mqInit(cu.it);render()},
 f_vm_c(){const cu=mcur(),t=($("#md")?$("#md").value:"").trim();if(!cu||!t)return toast("Escreva o versículo primeiro");
   const ex=vrs(cu.it.b,cu.it.c,cu.it.a,cu.it.z).split(" "),ty=t.split(/\s+/).map(wcore),pool=ty.slice();let ok=0;
   const html=ex.map(w=>{const k=wcore(w),j=pool.indexOf(k);if(k&&j>=0){pool.splice(j,1);ok++;return `<span class="wok">${w}</span>`}return k?`<span class="wmiss">${w}</span>`:w}).join(" ");
   const n=ex.filter(w=>wcore(w)).length;S.mdg={k:mkey(cu.it),pct:Math.round(ok/n*100),html};render()},
 f_vm_fr(){S.mfree=true;S.mfi=0;render()},
 f_vm_fr0(){S.mfree=false;render()},
 f_vm_s(){const cu=mcur();if(cu)faSay(mref(cu.it).replace(":",", versículo ")+". "+vrs(cu.it.b,cu.it.c,cu.it.a,cu.it.z))},
 f_vm_x(v){const M=MEM();M.splice(+v,1);LSs("mem",M);render()},
 f_qz_c(v){S.qz={cat:v,Q:qbuild(v),i:0,sc:0,a:null,nb:false};render();scrollTo(0,0)},
 f_qz_a(v){const z=S.qz;if(!z||z.a!=null)return;z.a=+v;if(+v===z.Q[z.i].c)z.sc++;render()},
 f_qz_n(){const z=S.qz;z.i++;z.a=null;if(z.i>=z.Q.length){const b=QBEST();if(b[z.cat]==null||z.sc>b[z.cat]){z.nb=b[z.cat]!=null;b[z.cat]=z.sc;LSs("qzs",b)}}render();scrollTo(0,0)},
 f_qz_q(){S.qz=null;render()},
 f_kd_t(v){S.kt=v;render()},
 f_kd_s(v){const x=KST[+v];faSay(x[0]+". "+x[1]+" "+x[4])},
 f_kd_r2(v){const R=KR(),i=R.indexOf(+v);i<0?R.push(+v):R.splice(i,1);LSs("kr",R);render()},
 f_kd_pg(v){S.kt="p";S.kg=v;render();scrollTo(0,0)},
 f_kd_c(v){S.kc=v;window.pc=v;document.querySelectorAll(".sw").forEach(b=>b.classList.toggle("on",b.dataset.v===v))},
 f_kd_r(v){const e=document.querySelector('.cp [data-r="'+v+'"]');if(!e)return;const c=S.kc||PCOL[0],g=S.kg||PG[0][0],P=PNT();(P[g]||(P[g]={}))[v]=c;LSs("pnt",P);e.style.fill=c},
 f_kd_cl(v){const P=PNT();delete P[v];LSs("pnt",P);render()},
 f_kd_cc(){render()}
};
function FN(a,v){const h=FH[a];if(!h)return false;h(v);return true}
function memDueN(){return MEM().filter(x=>x.due<=dnum()).length}
function feHub(){
  const p=pick(PASS),txt=B[p[0]][p[1]-1][p[2]],st=PL(),pl=PLANS.find(x=>x[0]===st.a),sk=streak(),md=memDueN();
  let ps=["—","sem plano"];if(pl){const pr=st.p[pl[0]];ps=[Math.min(pl[3],pr.d.length+1)+"/"+pl[3],"dia do plano"]}
  return `<h2 class="ttl">Fé</h2><section class="fhero"><p class="k">Seu momento de hoje</p><p class="v2">“${txt}”</p><b class="r">${LIV[p[0]][0]} ${p[1]}:${p[2]+1}</b><p class="s">Com reflexão, oração e mensagem do dia.</p><div class="row"><button class="btn" data-a="f_s" data-v="hoje">Abrir o dia</button><button class="btn alt" data-a="f_spd" data-v="p">${ICO.sound}Ouvir</button></div></section>
<div class="stat3"><button data-a="f_s" data-v="hab"><b>${sk}</b><small>${sk===1?"dia seguido":"dias seguidos"}</small></button><button data-a="f_s" data-v="plan"><b>${ps[0]}</b><small>${ps[1]}</small></button><button data-a="f_s" data-v="mem"><b>${md}</b><small>para revisar</small></button></div>`+
  FT.map(g=>`<p class="fgrp">${g[0]}</p><div class="tiles">${g[1].map(x=>tile("f_s",x)).join("")}</div>`).join("")+
  `<p class="fgrp">Ajustes</p><button class="mrow" data-a="vs">${ICO.sound}<span><b>Voz da leitura</b><small>Escolha a voz, a velocidade e o tom do áudio</small></span>${ICO.next}</button><p class="note">As reflexões resumem tradições teológicas e não substituem o estudo nem a orientação pastoral.</p>`;
}
function homeFe(){
  const L=[["hoje","Momento de hoje","Mensagem, passagem e oração","sun"],["plan","Plano de leitura","A Bíblia em dias curtos","cal"],["ora","Oração","Roteiro, orações e pedidos","heart"],["hab","Hábitos","Acompanhe sua sequência","habit"]];
  return `<p class="fgrp">Fé no dia a dia</p><div class="tiles">${L.map(x=>tile("f_go",x)).join("")}</div><button class="mrow" data-a="f_go" data-v="">${ICO.fe}<span><b>Ver todas as funções da Fé</b><small>Meditação, memorização, estudos, diário e mais</small></span>${ICO.next}</button>`;
}

function fe(){
  if(!S.f)return feHub();const f=S.f,chips=`<div class="bar"><button class="ghost" data-a="f_s" data-v="">‹ Fé</button>${f==="hoje"||f==="med"?`<button class="ghost" data-a="vs">${ICO.sound}Voz</button>`:""}</div>`;
  let c="";
  if(f==="hoje"){const m=pick(MSG),p=pick(PASS),o=pick(ORA),d=pick(DES);
    c=fh("Mensagem de fé",`<p class="verse">“${m[0]}”</p><p class="note">${m[1]} (tradução livre)</p>${fb("f_spd","m","Ouvir","btn alt")}`)+
    fh("Passagem do dia",`<p class="verse">${B[p[0]][p[1]-1][p[2]]}</p><p class="note"><b>${LIV[p[0]][0]} ${p[1]}:${p[2]+1}</b></p><p><b>Reflexão.</b> ${p[3]}</p><p><b>Para viver hoje.</b> ${p[4]}</p><div class="row">${fb("hit",p[0]+","+p[1]+",-1","Ler o capítulo")}${fb("f_spd","p","Ouvir","btn alt")}</div>`)+
    fh("Oração do dia",`<p class="note">${o[0]}</p><p class="verse">${o[1]}</p>${fb("f_spd","o","Ouvir","btn alt")}`)+fh("Desafio do dia",`<p>${d}</p>`)+
    `<p class="note">As reflexões resumem tradições teológicas e não substituem o estudo nem a orientação pastoral. Frases e orações são traduções ou inspirações livres.</p>`;
  }else if(f==="jorn"){const j=S.jn==null?null:JORN[S.jn],dn=LSg("jd",[]);
    c=`<p class="note">Escolha o que você está vivendo. Cada jornada tem 5 dias de leitura.</p><div class="chips">${JORN.map((x,i)=>`<button class="${S.jn===i?"on":""}" data-a="f_j" data-v="${i}">${x[0]}</button>`).join("")}</div>`;
    if(j)c+=`<h3 class="sub2">${j[0]}: ${j[1].filter((_,i)=>dn.includes(S.jn+"-"+i)).length}/5 dias</h3>`+j[1].map((x,i)=>{const k=S.jn+"-"+i;return `<p class="lbl">Dia ${i+1}</p>${hitv(x)}${fb("f_jd",k,dn.includes(k)?"✓ Concluído":"Marcar como lido","btn alt")}`}).join("");
  }else if(f==="estu"){const e=ESTU[S.st||0];
    c=`<p class="note">Estudos guiados: leia o texto, responda à pergunta e anote no Diário. Um por semana é um bom ritmo.</p><div class="chips">${ESTU.map((x,i)=>`<button class="${(S.st||0)===i?"on":""}" data-a="f_st" data-v="${i}">${x[0]}</button>`).join("")}</div><h3 class="sub2">${e[0]}</h3>`+e[1].map((x,i)=>`<p class="lbl">Passo ${i+1}</p>${hitv(x[0])}<p class="note">${x[1]}</p>`).join("");
  }else if(f==="dia"){const t=S.dt||"Oração",L=LSg("dj",[]);
    c=`<p class="note">Escreva orações, desabafos, reflexões e gratidão. Fica salvo só neste aparelho.</p><div class="chips">${["Oração","Desabafo","Reflexão","Estudo","Gratidão"].map(x=>`<button class="${t===x?"on":""}" data-a="f_dt" data-v="${x}">${x}</button>`).join("")}</div><textarea id="dj" class="ta" placeholder="Escreva aqui..."></textarea>${fb("f_ds","","Salvar no diário")}`+L.map((x,i)=>`<div class="card"><p class="lbl">${x.t} · ${x.d}</p><p>${x.x.replace(/</g,"&lt;").replace(/\n/g,"<br>")}</p>${fb("f_dx",i,"Apagar","btn alt")}</div>`).join("");
  }else if(NS[f]){c=NS[f]();
  }else if(f==="quiz"){c=feQuiz();
  }else if(f==="ask"){
    c=`<p class="note">Escreva uma pergunta. Este assistente não é uma IA: ele procura na Bíblia os versículos mais ligados às suas palavras.</p><input id="ak" class="ta" style="min-height:0;height:48px" placeholder="Ex.: o que a Bíblia diz sobre perdão?" value="${(S.ak||"").replace(/"/g,"&quot;")}">${fb("f_ask","","Buscar resposta")}`+(S.ar||"");
  }else if(f==="lem"){const l=LSg("lem",{t:"07:00",on:false});
    c=`<p class="note">Receba um lembrete diário para ver a passagem, a oração e a mensagem novas.</p><input id="lt" type="time" class="ta" style="min-height:0;height:48px" value="${l.t}">${fb("f_nt","","Ativar notificação")}${fb("f_ics","","Adicionar ao calendário (.ics)","btn alt")}<p class="note">${l.on?"Notificação ativada às "+l.t+". ":""}A notificação funciona com o site aberto. Para ser avisado com o site fechado, use o calendário do aparelho.</p>`;
  }else if(f==="kid"){c=feKid();}
  return `${chips}<h2 class="ttl">${(FSEC.find(x=>x[0]===f)||["","Fé"])[1]}</h2>${c}`;
}
function fePost(){}
function FA(a,v){
  if(FN(a,v))return;
  if(a==="f_go"){halt();S.tab="fe";S.f=v;S.ar="";render();scrollTo(0,0);return}
  if(a==="f_spd"){const m=pick(MSG),p=pick(PASS),o=pick(ORA);halt();
    const en=t=>/[.!?]$/.test(t)?t:t+".";
    say(v==="m"?en(m[0])+" "+m[1]:v==="p"?LIV[p[0]][0]+", capítulo "+p[1]+", versículo "+(p[2]+1)+". "+en(B[p[0]][p[1]-1][p[2]])+" Reflexão. "+p[3]:en(o[0])+" "+o[1]);return}
  if(a==="f_s"){S.f=v;S.ar="";render();scrollTo(0,0);return}
  const R=()=>render();
  if(a==="f_j"){S.jn=+v;R()}
  else if(a==="f_jd"){const d=LSg("jd",[]),i=d.indexOf(v);i<0?d.push(v):d.splice(i,1);LSs("jd",d);R()}
  else if(a==="f_st"){S.st=+v;R()}
  else if(a==="f_dt"){S.dt=v;R()}
  else if(a==="f_ds"){const x=$("#dj").value.trim();if(!x)return toast("Escreva algo primeiro");const L=LSg("dj",[]);L.unshift({t:S.dt||"Oração",d:new Date().toLocaleDateString("pt-BR"),x});LSs("dj",L);R()}
  else if(a==="f_dx"){const L=LSg("dj",[]);L.splice(+v,1);LSs("dj",L);R()}
  else if(a==="f_ask"){const q=$("#ak").value.trim();S.ak=q;if(q.length<3)return toast("Escreva uma pergunta");
    if(!window.ASK){window.ASK=[];B.forEach((bk,b)=>bk.forEach((ch,c)=>ch.forEach((t,i)=>ASK.push([b,c+1,i," "+nzl(t).replace(/[^a-z0-9]+/g," ")+" "]))))}
    const st=" que como qual quais para sobre bible biblia diz fala nao uma uns com por mais dos das ser tem ter quando onde".split(" "),ts=nzl(q).replace(/[^a-z0-9]+/g," ").trim().split(" ").filter(w=>w.length>3&&!st.includes(w));
    const H=ASK.map(x=>[x,ts.reduce((n,k)=>n+(x[3].includes(" "+k+" ")?2:x[3].includes(" "+k)?1:0),0)]).filter(x=>x[1]>0).sort((a,b)=>b[1]-a[1]).slice(0,5);
    S.ar=H.length?`<h3 class="sub2">Passagens relacionadas</h3>`+H.map(x=>hitv(x[0])).join(""):`<p class="note">Não achei passagens com essas palavras. Tente termos mais simples, como perdão, medo ou esperança.</p>`;R()}
  else if(a==="f_nt"){const t=$("#lt").value||"07:00";if(typeof Notification==="undefined")return toast("Este navegador não permite notificações");
    Notification.requestPermission().then(p=>{if(p==="granted"){LSs("lem",{t,on:true,last:""});toast("Notificação ativada");R()}else toast("Permissão negada")})}
  else if(a==="f_ics"){const t=($("#lt").value||"07:00").replace(":",""),d=new Date(),ymd=d.getFullYear()+String(d.getMonth()+1).padStart(2,"0")+String(d.getDate()).padStart(2,"0");
    const ics=["BEGIN:VCALENDAR","VERSION:2.0","PRODID:-//Biblia//PT","BEGIN:VEVENT","UID:fe-diaria@biblia","DTSTAMP:"+new Date().toISOString().replace(/[-:]|\.\d+/g,""),"DTSTART:"+ymd+"T"+t+"00","RRULE:FREQ=DAILY","SUMMARY:Momento de fé: passagem, oração e mensagem do dia","BEGIN:VALARM","TRIGGER:PT0M","ACTION:DISPLAY","DESCRIPTION:Fé diária","END:VALARM","END:VEVENT","END:VCALENDAR"].join("\r\n");
    const l=document.createElement("a");l.href=URL.createObjectURL(new Blob([ics],{type:"text/calendar"}));l.download="lembrete-fe.ics";l.click()}
}
