/* ---- Planos de leitura ---- */
const chs=(a,b)=>{const o=[];for(let i=a;i<=b;i++)for(let c=1;c<=LIV[i][1];c++)o.push([i,c]);return o};
const lst=a=>{const o=[];a.forEach(x=>{const b=bidx(x[0]);for(let c=x[1];c<=(x[2]||x[1]);c++)o.push([b,c])});return o};
const bks=n=>n.flatMap(nm=>chs(bidx(nm),bidx(nm)));
const PLANS=[
["jo21","João em 21 dias","Um capítulo por dia, para conhecer Jesus pelo quarto Evangelho.",21,()=>chs(42,42)],
["mc16","Marcos em 16 dias","O Evangelho mais curto e direto, um capítulo por dia.",16,()=>chs(40,40)],
["rm16","Romanos em 16 dias","A grande carta de Paulo sobre graça, fé e vida nova.",16,()=>chs(44,44)],
["cc14","Cartas curtas em 14 dias","Filipenses, Colossenses, Tessalonicenses, Tito, Filemom, Tiago, 1 Pedro e 1 João.",14,()=>bks(["Filipenses","Colossenses","1 Tessalonicenses","2 Tessalonicenses","Tito","Filemom","Tiago","1 Pedro","1 João"])],
["nat14","Natal: da promessa ao nascimento","Das promessas dos profetas até a manjedoura, em 14 leituras.",14,()=>lst([["Gênesis",3],["Gênesis",12],["Isaías",7],["Isaías",9],["Isaías",11],["Isaías",40],["Isaías",53],["Miqueias",5],["Malaquias",3],["Lucas",1],["Mateus",1],["Lucas",2],["Mateus",2],["João",1]])],
["pas10","Os últimos dias de Jesus","Do capítulo 12 ao 21 de João: a despedida, a cruz e a ressurreição.",10,()=>lst([["João",12,21]])],
["at28","Atos em 28 dias","O nascimento e o crescimento das primeiras comunidades cristãs.",28,()=>chs(43,43)],
["pv31","Provérbios em 31 dias","Um capítulo por dia, um para cada dia do mês.",31,()=>chs(19,19)],
["ev30","Os quatro Evangelhos em 30 dias","A vida e os ensinos de Jesus, contados quatro vezes.",30,()=>chs(39,42)],
["sl30","Salmos em 30 dias","Louvor, súplica e consolo: os 150 salmos em um mês.",30,()=>chs(18,18)],
["sp30","Salmos e Provérbios em 30 dias","Oração e sabedoria para o dia a dia.",30,()=>chs(18,19)],
["pau30","Cartas de Paulo em 30 dias","De Romanos a Filemom.",30,()=>chs(44,56)],
["hf30","Heróis da fé em 30 dias","Histórias marcantes do Antigo Testamento, um capítulo por dia.",30,()=>lst([["Gênesis",1],["Gênesis",3],["Gênesis",6],["Gênesis",8],["Gênesis",12],["Gênesis",22],["Gênesis",32],["Gênesis",37],["Gênesis",41],["Gênesis",45],["Êxodo",3],["Êxodo",14],["Êxodo",20],["Josué",1],["Josué",6],["Juízes",7],["Rute",1],["Rute",4],["1 Samuel",3],["1 Samuel",17],["1 Reis",3],["1 Reis",18],["Daniel",3],["Daniel",6],["Ester",4],["Jonas",1],["Jonas",3],["Jó",1],["Neemias",2],["Salmos",23]])],
["gn50","Gênesis em 50 dias","Um capítulo por dia: criação, patriarcas e José.",50,()=>chs(0,0)],
["ex40","Êxodo em 40 dias","A libertação do Egito, a lei e o tabernáculo.",40,()=>chs(1,1)],
["pm60","Profetas maiores em 60 dias","Isaías, Jeremias, Lamentações, Ezequiel e Daniel.",60,()=>chs(22,26)],
["nt90","Novo Testamento em 90 dias","Os 260 capítulos, de Mateus ao Apocalipse.",90,()=>chs(39,65)],
["sab90","Sabedoria em 90 dias","Jó, Salmos, Provérbios, Eclesiastes e Cantares.",90,()=>chs(17,21)],
["b180","Bíblia em 180 dias","Um ritmo intenso: do Gênesis ao Apocalipse em seis meses.",180,()=>chs(0,65)],
["at365","Antigo Testamento em 1 ano","Os 39 livros, em um ritmo tranquilo.",365,()=>chs(0,38)],
["b365","Bíblia em 1 ano","Do Gênesis ao Apocalipse, em um ritmo tranquilo.",365,()=>chs(0,65)]];
const pch={};
const planCh=p=>pch[p[0]]||(pch[p[0]]=p[4]());
const pday=(p,d)=>{const a=planCh(p),n=a.length;return a.slice(Math.floor(d*n/p[3]),Math.floor((d+1)*n/p[3]))};
const pper=p=>{const x=planCh(p).length/p[3];return x<10?(Math.round(x*10)/10+"").replace(".",","):Math.round(x)+""};
function rng(l){const o=[];for(const x of l){const t=o[o.length-1];if(t&&t.b===x[0]&&t.e===x[1]-1)t.e=x[1];else o.push({b:x[0],s:x[1],e:x[1]})}return o.map(t=>LIV[t.b][0]+" "+(t.s===t.e?t.s:t.s+"–"+t.e)).join("; ")}
const PL=()=>LSg("pl",{a:null,p:{}});
function fePlan(){
  const st=PL(),p=PLANS.find(x=>x[0]===st.a);
  if(!p||S.pls){
    const G=[["Curtos, até 31 dias",x=>x[3]<=31],["Médios, de 32 a 100 dias",x=>x[3]>31&&x[3]<=100],["Longos, mais de 100 dias",x=>x[3]>100]];
    return `<p class="note">Escolha um plano. Cada um divide a leitura em dias curtos, e o progresso fica salvo neste aparelho. Você pode trocar de plano sem perder o que já leu.</p>`+G.map(g=>`<p class="fgrp">${g[0]}</p>`+PLANS.filter(g[1]).map(x=>{const pr=st.p[x[0]];return `<div class="card"><h2>${x[3]} dias · ${planCh(x).length} capítulos · cerca de ${pper(x)} por dia</h2><p class="pt">${x[1]}</p><p class="note">${x[2]}</p>${pr?`<p class="note">Seu progresso: ${pr.d.length} de ${x[3]} dias.</p>`:""}${fb("f_pl_start",x[0],pr?"Continuar este plano":"Começar",pr?"btn alt":"btn")}</div>`}).join("")).join("");
  }
  const pr=st.p[p[0]],done=new Set(pr.d),n=p[3];let nx=0;while(nx<n&&done.has(nx))nx++;
  const el=Math.min(n,Math.max(0,dnum()-pr.s)),late=el-done.size;
  let c=`<div class="card"><h2>${p[1]}</h2>${pbar(done.size/n)}<p class="note">${done.size} de ${n} dias lidos · ${Math.round(done.size/n*100)}%</p>`;
  if(nx>=n)return c+`<p class="pt">Plano concluído!</p><p class="note">Você leu tudo o que o plano propunha. Que tal começar outro?</p></div>`+fb("f_pl_sw","","Escolher outro plano");
  c+=`<p class="note">${late>0?late+(late>1?" dias":" dia")+" de atraso. Sem pressa: continue de onde parou.":"Você está em dia. Continue assim."}</p></div>`;
  const rd=pday(p,nx);
  c+=`<div class="card"><h2>Leitura do dia ${nx+1}</h2><p class="pt">${rng(rd)}</p>${rd.map(x=>`<button class="mrow" data-a="hit" data-v="${x[0]},${x[1]},-1"><span><b>${LIV[x[0]][0]} ${x[1]}</b><small>${B[x[0]][x[1]-1].length} versículos · toque para ler ou ouvir</small></span>${ICO.next}</button>`).join("")}${fb("f_pl_d",nx,"Marcar dia "+(nx+1)+" como lido")}</div>`;
  const up=[];for(let d=nx+1;d<n&&up.length<3;d++)if(!done.has(d))up.push(d);
  if(up.length)c+=`<p class="fgrp">Próximos dias</p>`+up.map(d=>`<div class="hrow"><span><b>Dia ${d+1}</b><i>${rng(pday(p,d))}</i></span></div>`).join("");
  return c+`<div class="row">${pr.d.length?fb("f_pl_un","","Desfazer último dia","btn alt"):""}${fb("f_pl_sw","","Trocar de plano","btn alt")}</div>`;
}
