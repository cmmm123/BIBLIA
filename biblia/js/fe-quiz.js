/* ---- Quiz ---- */
const QB=[
["at","Quem foi o primeiro homem criado por Deus?","Adão",["Noé","Abel","Sete"],"Gênesis 2: Deus formou o homem do pó da terra."],
["at","Em quantos dias Deus criou os céus e a terra, antes de descansar?","Seis",["Três","Sete","Quarenta"],"Gênesis 1: seis dias de criação e o sétimo de descanso."],
["at","Quem construiu a arca?","Noé",["Moisés","Abraão","Davi"],"Gênesis 6: Deus avisou Noé do dilúvio."],
["at","Qual foi o sinal da promessa de Deus a Noé depois do dilúvio?","O arco-íris",["Uma estrela","Uma pomba branca","Uma nuvem de fogo"],"Gênesis 9: o arco nas nuvens lembra a aliança de Deus."],
["at","Quem é chamado de pai da fé?","Abraão",["Isaque","Moisés","Elias"],"Abraão saiu de sua terra confiando na promessa de Deus (Gênesis 12 e 15)."],
["at","Como se chamava a esposa de Abraão?","Sara",["Rebeca","Raquel","Ana"],"Sara foi mãe de Isaque (Gênesis 21)."],
["at","Quem vendeu o direito de primogênito por um prato de lentilhas?","Esaú",["Jacó","Ismael","Rúben"],"Gênesis 25: Esaú, filho de Isaque."],
["at","Quantos filhos teve Jacó, cujos descendentes formaram as tribos de Israel?","Doze",["Sete","Dez","Quatorze"],"Gênesis 35 e 49."],
["at","Quem foi vendido pelos irmãos e depois governou o Egito?","José",["Benjamim","Judá","Levi"],"Gênesis 37 a 45."],
["at","Quem liderou o povo de Israel para fora do Egito?","Moisés",["Josué","Arão","Calebe"],"Êxodo: Deus o chamou na sarça ardente."],
["at","Quantas pragas Deus enviou ao Egito?","Dez",["Sete","Doze","Três"],"Êxodo 7 a 12."],
["at","Quantos são os Dez Mandamentos?","Dez",["Sete","Doze","Quarenta"],"Êxodo 20 e Deuteronômio 5."],
["at","Quem conduziu Israel na entrada da terra prometida?","Josué",["Moisés","Gideão","Samuel"],"Josué sucedeu a Moisés."],
["at","Qual cidade teve os muros derrubados depois de o povo marchar ao redor?","Jericó",["Belém","Babilônia","Nínive"],"Josué 6."],
["at","Qual juiz de Israel tinha grande força ligada ao cabelo longo?","Sansão",["Gideão","Eli","Samuel"],"Juízes 13 a 16."],
["at","Qual mulher disse a Noemi: teu povo será o meu povo?","Rute",["Ester","Débora","Ana"],"Rute 1:16."],
["at","Quem foi o primeiro rei de Israel?","Saul",["Davi","Salomão","Samuel"],"1 Samuel 9 e 10."],
["at","Quem derrotou o gigante Golias?","Davi",["Saul","Jônatas","Josué"],"1 Samuel 17."],
["at","Qual rei ficou famoso pela sabedoria e construiu o Templo em Jerusalém?","Salomão",["Davi","Ezequias","Josias"],"1 Reis 3 a 8."],
["at","Qual profeta enfrentou os profetas de Baal no monte Carmelo?","Elias",["Eliseu","Isaías","Jeremias"],"1 Reis 18."],
["at","Quem foi lançado na cova dos leões?","Daniel",["José","Jonas","Elias"],"Daniel 6."],
["at","Quantos homens foram lançados na fornalha ardente em Daniel 3?","Três",["Dois","Quatro","Sete"],"O rei viu um quarto homem caminhando com eles no fogo."],
["at","Qual profeta foi engolido por um grande peixe?","Jonas",["Amós","Oseias","Miqueias"],"Jonas 1 e 2."],
["at","Qual rainha arriscou a vida para salvar seu povo?","Ester",["Rute","Débora","Maria"],"Ester 4 e 5."],
["at","Qual homem perdeu tudo e permaneceu fiel a Deus?","Jó",["Jeremias","Eli","Neemias"],"O livro de Jó trata do sofrimento e da fidelidade."],
["at","Quem reconstruiu as muralhas de Jerusalém?","Neemias",["Esdras","Zorobabel","Ageu"],"Livro de Neemias."],
["at","Quem escreveu a maior parte dos Salmos?","Davi",["Salomão","Moisés","Asafe"],"Muitos salmos trazem o título: de Davi."],
["at","Por quantos anos Israel peregrinou no deserto?","Quarenta",["Dez","Setenta","Cem"],"Números 14 e Deuteronômio 8."],
["nt","Em qual cidade Jesus nasceu?","Belém",["Nazaré","Jerusalém","Cafarnaum"],"Lucas 2 e Mateus 2."],
["nt","Qual era o nome da mãe de Jesus?","Maria",["Marta","Isabel","Ana"],"Lucas 1 e 2."],
["nt","Quem batizou Jesus no rio Jordão?","João Batista",["Pedro","Tiago","André"],"Mateus 3."],
["nt","Quantos apóstolos Jesus escolheu?","Doze",["Sete","Setenta","Dez"],"Mateus 10 e Lucas 6."],
["nt","Qual foi o primeiro sinal de Jesus, segundo João?","Transformar água em vinho",["Acalmar o mar","Curar um cego","Andar sobre as águas"],"João 2: a festa de casamento em Caná."],
["nt","Qual apóstolo negou Jesus três vezes?","Pedro",["Tomé","João","André"],"Lucas 22."],
["nt","Qual discípulo entregou Jesus?","Judas Iscariotes",["Tomé","Mateus","Filipe"],"Mateus 26."],
["nt","Quantos dias depois da morte de Jesus ocorreu a ressurreição?","No terceiro dia",["No primeiro dia","No sétimo dia","No quadragésimo dia"],"1 Coríntios 15:4 e os Evangelhos."],
["nt","Qual cobrador de impostos subiu numa árvore para ver Jesus?","Zaqueu",["Mateus","Levi","Nicodemos"],"Lucas 19."],
["nt","Qual parábola fala de um viajante que ajuda um homem ferido na estrada?","O bom samaritano",["O filho pródigo","O semeador","As dez virgens"],"Lucas 10."],
["nt","Quem se converteu no caminho para Damasco?","Saulo, depois chamado Paulo",["Barnabé","Timóteo","Silas"],"Atos 9."],
["nt","Qual livro conta o dia de Pentecostes?","Atos",["Romanos","Apocalipse","Hebreus"],"Atos 2."],
["nt","Qual é o último livro da Bíblia?","Apocalipse",["Judas","Hebreus","Atos"],"Apocalipse fecha o Novo Testamento."],
["nt","Quem escreveu o livro de Atos?","Lucas",["Paulo","Marcos","Pedro"],"Atos continua o Evangelho de Lucas."],
["nt","Qual Evangelho começa com: No princípio era o Verbo?","João",["Mateus","Marcos","Lucas"],"João 1:1."],
["nt","Em qual Evangelho está o Sermão do Monte?","Mateus",["João","Marcos","Atos"],"Mateus 5 a 7."],
["nt","Quantos pães e peixes um menino tinha quando Jesus alimentou a multidão?","Cinco pães e dois peixes",["Sete pães e três peixes","Doze pães","Dois pães e cinco peixes"],"João 6."],
["nt","Quem Jesus ressuscitou em Betânia?","Lázaro",["Jairo","O filho da viúva","Tabita"],"João 11."],
["nt","Qual discípulo andou sobre as águas ao encontro de Jesus?","Pedro",["João","Tiago","André"],"Mateus 14."],
["nt","Quem foi o primeiro mártir cristão?","Estêvão",["Tiago","Paulo","Barnabé"],"Atos 7."],
["nt","Qual destes é fruto do Espírito, segundo Gálatas 5?","Domínio próprio",["Vaidade","Rancor","Cobiça"],"Gálatas 5:22-23."],
["nt","Quem foi a primeira a ver Jesus ressuscitado, segundo João 20?","Maria Madalena",["Marta","Maria de Betânia","Salomé"],"João 20:14-16."],
["nt","Em qual cidade Jesus cresceu?","Nazaré",["Belém","Jericó","Betânia"],"Lucas 2:39-40."],
["nt","Quem escreveu a maior parte das cartas do Novo Testamento?","Paulo",["Pedro","João","Tiago"],"Treze cartas levam o seu nome."],
["ge","Quantos livros tem o Antigo Testamento, na Bíblia protestante?","39",["27","46","66"],"O Novo Testamento tem 27, num total de 66."],
["ge","Quantos livros tem o Novo Testamento?","27",["39","12","66"],"Do Evangelho de Mateus ao Apocalipse."],
["ge","Qual é o primeiro livro da Bíblia?","Gênesis",["Êxodo","Salmos","Mateus"],"Gênesis significa origem."],
["ge","Quantos livros formam o Pentateuco?","Cinco",["Quatro","Doze","Sete"],"Gênesis, Êxodo, Levítico, Números e Deuteronômio."],
["ge","Qual é o capítulo mais longo da Bíblia?","Salmo 119",["Salmo 23","Isaías 53","Gênesis 1"],"O Salmo 119 tem 176 versículos."],
["ge","Qual é o capítulo mais curto da Bíblia?","Salmo 117",["Salmo 23","Salmo 1","Salmo 150"],"O Salmo 117 tem apenas 2 versículos."],
["ge","Quantos Evangelhos há no Novo Testamento?","Quatro",["Três","Cinco","Doze"],"Mateus, Marcos, Lucas e João."],
["ge","O que significa a palavra Evangelho?","Boa notícia",["Lei antiga","Canto de louvor","Livro sagrado"],"Vem do grego euangelion."],
["ge","Em qual língua foi escrita a maior parte do Antigo Testamento?","Hebraico",["Grego","Latim","Aramaico"],"Há também pequenos trechos em aramaico."],
["ge","Em qual língua foi escrito o Novo Testamento?","Grego",["Hebraico","Latim","Árabe"],"O grego comum da época."],
["ge","Qual livro tem mais capítulos?","Salmos",["Isaías","Gênesis","Jeremias"],"Salmos tem 150 capítulos."],
["ge","Quantos dias Jesus jejuou no deserto?","Quarenta",["Sete","Doze","Trinta"],"Mateus 4."],
["ge","Qual destes livros é de sabedoria?","Provérbios",["Atos","Amós","Josué"],"Provérbios, Jó, Eclesiastes e Cantares."],
["ge","A palavra Bíblia vem de um termo grego que significa:","Livros",["Palavra","Aliança","Escritos antigos"],"Biblia, plural de biblion, livro."]];
const FAMV=[["João",3,16],["Salmos",23,1],["Filipenses",4,13],["Provérbios",3,5],["Josué",1,9],["Isaías",41,10],["Mateus",6,33],["Salmos",119,105],["Romanos",8,28],["1 Pedro",5,7],["Mateus",11,28],["Salmos",46,1],["Gênesis",1,1],["João",1,1],["Romanos",3,23],["Efésios",2,8],["Hebreus",11,1],["Tiago",1,5],["Isaías",40,31],["Jeremias",29,11]];
const QCAT=[["at","Antigo Testamento","Patriarcas, reis e profetas"],["nt","Novo Testamento","Jesus, apóstolos e igreja"],["lv","Livros e versículos","Ordem dos livros e origem dos textos"],["ge","Conhecimentos gerais","Números e curiosidades"],["mx","Misto","Dez perguntas de todos os temas"]];
const rint=n=>Math.floor(Math.random()*n);
const qmk=(q,c,w,e)=>{const o=shuf([c,...w]);return{q,o,c:o.indexOf(c),e}};
function qdyn(kind){
  if(kind==="vv"){const f=FAMV[rint(FAMV.length)],b=bidx(f[0]),t=B[b][f[1]-1][f[2]-1],w=shuf(LIV.map(x=>x[0]).filter(x=>x!==f[0])).slice(0,3);return qmk("De qual livro é este versículo?\n“"+t+"”",f[0],w,"Está em "+f[0]+" "+f[1]+":"+f[2]+".")}
  if(kind==="gc"){let i;do{i=rint(66)}while(LIV[i][1]<4);const c=LIV[i][1],w=shuf([c-2,c-1,c+1,c+2,c*2,Math.round(c/2)].filter((x,k,a)=>x>0&&x!==c&&a.indexOf(x)===k)).slice(0,3).map(String);return qmk("Quantos capítulos tem o livro de "+LIV[i][0]+"?",String(c),w,LIV[i][0]+" tem "+c+" capítulos.")}
  const i=rint(65),c=LIV[i+1][0],w=shuf(LIV.map(x=>x[0]).filter((x,k)=>k!==i&&k!==i+1)).slice(0,3);return qmk("Qual livro vem logo depois de "+LIV[i][0]+"?",c,w,"Depois de "+LIV[i][0]+" vem "+c+".");
}
function qbuild(cat){
  const st=t=>shuf(QB.filter(x=>x[0]===t)).map(x=>qmk(x[1],x[2],x[3],x[4]));
  if(cat==="lv"){const o=[];for(let i=0;i<4;i++)o.push(qdyn("vv"));for(let i=0;i<3;i++)o.push(qdyn("gc"));for(let i=0;i<3;i++)o.push(qdyn("nx"));return shuf(o)}
  if(cat==="mx"){const o=shuf(QB).slice(0,7).map(x=>qmk(x[1],x[2],x[3],x[4]));o.push(qdyn("vv"),qdyn("gc"),qdyn("nx"));return shuf(o)}
  return st(cat).slice(0,10);
}
const QBEST=()=>LSg("qzs",{});
function feQuiz(){
  const z=S.qz;
  if(!z){const bs=QBEST();return `<p class="note">Rodadas de 10 perguntas, com explicação a cada resposta. Seu melhor resultado fica salvo.</p>`+QCAT.map(x=>`<button class="mrow" data-a="f_qz_c" data-v="${x[0]}"><span><b>${x[1]}</b><small>${x[2]}${bs[x[0]]!=null?" · melhor: "+bs[x[0]]+"/10":""}</small></span>${ICO.next}</button>`).join("");}
  if(z.i>=z.Q.length){const bs=QBEST(),pct=z.sc/z.Q.length;
    return `<div class="card"><p class="pt">Você acertou ${z.sc} de ${z.Q.length}.</p>${pbar(pct)}<p class="note">${pct===1?"Perfeito!":pct>=.7?"Muito bem!":pct>=.4?"Bom começo. Tente de novo para melhorar.":"Que tal ler um pouco e tentar outra vez?"}${z.nb?" Novo recorde!":""} Melhor desta categoria: ${bs[z.cat]}/10.</p>${fb("f_qz_c",z.cat,"Jogar de novo")}${fb("f_qz_q","","Escolher outra categoria","btn alt")}</div>`}
  const q=z.Q[z.i],nm=QCAT.find(x=>x[0]===z.cat)[1];
  return `<div class="bar"><button class="ghost" data-a="f_qz_q">‹ Categorias</button></div><p class="note">${nm} · pergunta ${z.i+1} de ${z.Q.length} · ${z.sc} ${z.sc===1?"acerto":"acertos"}</p>${pbar(z.i/z.Q.length)}<h3 class="sub2" style="margin-top:12px;white-space:pre-line">${q.q}</h3>`+q.o.map((o,k)=>`<button class="hit" ${z.a==null?`data-a="f_qz_a" data-v="${k}"`:""} style="${z.a!=null&&k===q.c?"border-color:#2e7d32;border-left:4px solid #2e7d32;padding-left:10px":z.a===k?"border-left:4px solid #c62828;padding-left:10px":""}"><span><b style="color:inherit;font-size:17px;margin:0">${o}</b></span></button>`).join("")+(z.a!=null?`<p class="note"><b>${z.a===q.c?"Correto!":"Não foi dessa vez."}</b> ${q.e}</p>${fb("f_qz_n","",z.i+1>=z.Q.length?"Ver resultado":"Próxima")}`:"");
}
