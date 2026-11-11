/* ===== ABA FÉ ===== */
const LSg=(k,d)=>{try{const v=JSON.parse(localStorage.getItem(k));return v==null?d:v}catch(e){return d}};
const LSs=(k,v)=>{try{localStorage.setItem(k,JSON.stringify(v))}catch(e){}};
const DAY=Math.floor(Date.now()/864e5),pick=a=>a[DAY%a.length];
const DK=()=>{const d=new Date();return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
const faSay=t=>{halt();say(t)};
const MSG=[["Fizeste-nos para ti, Senhor, e inquieto está o nosso coração enquanto não repousa em ti.","Santo Agostinho, Confissões I,1"],
["Nossa sabedoria consiste quase inteiramente em duas coisas: conhecer a Deus e conhecer a nós mesmos.","João Calvino, Institutas I,1,1"],
["O mundo é a minha paróquia.","John Wesley, Diário, 1739"],
["A graça não destrói a natureza, mas a aperfeiçoa.","Tomás de Aquino, Suma Teológica I, q.1, a.8"],
["Nada te perturbe, nada te espante; quem a Deus tem nada lhe falta. Só Deus basta.","Santa Teresa de Ávila"],
["Creio no cristianismo como creio que o sol nasceu: não porque o vejo, mas porque por ele vejo todo o resto.","C. S. Lewis, O Peso da Glória"],
["Os Salmos são uma anatomia de todas as partes da alma.","João Calvino, Prefácio ao Comentário dos Salmos"]];
const PASS=[[42,3,15,"Agostinho e a tradição da Igreja veem aqui a iniciativa do amor: a salvação começa em Deus, não em nós.","Hoje, agradeça a Deus em voz alta por ter amado você primeiro."],
[44,3,27,"Na tradição da Reforma (Lutero), este texto resume a justificação pela fé. Católicos e ortodoxos lembram que a fé verdadeira age pelo amor (Gl 5:6).","Entregue a Deus uma culpa que você carrega e receba o perdão dele."],
[39,5,47,"Wesley entendia a perfeição cristã como amor pleno a Deus e ao próximo, e não como ausência de falhas. Tomás de Aquino via a perfeição na caridade.","Escolha um gesto concreto de amor por alguém difícil."],
[18,51,9,"A tradição penitencial, de Agostinho aos reformadores, lê este salmo como a oração de quem se arrepende: um coração novo é obra de Deus.","Antes de dormir, faça um breve exame de consciência e peça um coração limpo."],
[49,4,5,"Paulo une oração e gratidão como resposta à ansiedade. Os Pais da Igreja viam a oração agradecida como o remédio da inquietação.","Faça uma lista de três motivos de gratidão e leve-os a Deus."],
[45,13,12,"Tomás de Aquino chamou a caridade de forma de todas as virtudes: sem ela, as demais não chegam à sua plenitude.","Pratique hoje um ato de paciência e de bondade."],
[18,23,0,"Calvino via nos Salmos um espelho da alma; este salmo ensina a confiar na providência de Deus que cuida de cada passo.","Leia o Salmo 23 inteiro e agradeça por uma coisa que Deus lhe deu hoje."]];
const ORA=[["Inspirada em Santo Agostinho","Senhor, tu nos fizeste para ti, e o nosso coração não descansa enquanto não repousa em ti. Ensina-me hoje a amar o que é bom e a buscar-te acima de tudo. Amém."],
["Inspirada na Oração de Aliança de John Wesley","Senhor, não sou mais meu, mas teu. Coloca-me onde quiseres e faz de mim o que quiseres. Que eu esteja pronto para servir ou para esperar, e que tudo seja segundo a tua vontade. Amém."],
["Inspirada na oração atribuída a Francisco de Assis","Senhor, faz de mim instrumento da tua paz. Onde houver ódio, que eu leve amor; onde houver ofensa, perdão; onde houver dúvida, fé. Amém."],
["Inspirada em Santa Teresa de Ávila","Senhor, que nada me perturbe e nada me assuste. Tu não mudas, e a tua presença me basta. Dá-me paciência e confiança neste dia. Amém."],
["Oração da noite, inspirada no Salmo 4","Pai, o dia termina. Agradeço o que recebi e entrego o que me pesa. Em paz me deito e logo adormeço, porque só tu me fazes viver em segurança. Amém."]];
const DES=["Pratique um versículo: escolha um e viva-o hoje.","Ajude alguém hoje, sem esperar nada em troca.","Doe algo que você tem e não usa.","Seja como Jesus hoje: responda com mansidão a quem te irritar.","Pense em Jesus ao acordar, ao meio-dia e ao deitar.","Converse com Deus sobre o seu dia, contando o que aconteceu.","Peça perdão a alguém ou perdoe alguém hoje."];
const JORN=[["Ansiedade",[[49,4,5],[59,5,6],[22,41,9],[39,6,33],[18,27,0]]],["Tristeza e depressão",[[18,34,17],[18,42,10],[22,43,1],[18,30,4],[39,5,3]]],["Problemas financeiros",[[39,6,25],[49,4,18],[57,13,4],[18,37,24],[19,3,8]]],["Solidão",[[18,68,5],[4,31,5],[39,28,19],[18,25,15],[22,49,14]]],["Culpa",[[18,51,9],[61,1,8],[44,8,0],[18,32,0],[22,1,17]]],["Cansaço",[[39,11,27],[22,40,30],[49,4,12],[18,121,0],[18,23,2]]]];
const ESTU=[["O Pai-Nosso",[[[39,6,8],"A quem Jesus nos ensina a orar? O que muda ao chamar Deus de Pai?"],[[39,6,9],"O que significa pedir que a vontade de Deus se faça?"],[[39,6,10],"Pelo que você precisa confiar em Deus hoje?"],[[39,6,11],"Quem precisa do seu perdão?"],[[39,6,12],"Em que áreas você precisa de livramento?"]]],["O amor, segundo Paulo",[[[45,13,0],"Sem amor, o que valem os dons?"],[[45,13,3],"Qual característica do amor você mais precisa praticar?"],[[45,13,12],"Por que o amor é o maior?"]]],["O Bom Pastor",[[[42,10,10],"O que Jesus faz pelas ovelhas?"],[[18,23,0],"De que você precisa quando Deus é seu pastor?"],[[41,15,3],"O que a parábola da ovelha perdida revela sobre Deus?"]]]];
const FSEC=[["hoje","Hoje"],["hab","Hábitos"],["med","Meditar"],["ora","Oração"],["plan","Planos de leitura"],["mem","Memorizar"],["jorn","Jornadas"],["estu","Estudos"],["ask","Pergunte"],["dia","Diário"],["lem","Lembretes"],["quiz","Quiz"],["kid","Infantil"]];
const fh=(x,t)=>`<div class="card"><h2>${x}</h2>${t}</div>`;
const fb=(a,v,l,c)=>`<button class="${c||"btn"}" data-a="${a}" data-v="${v}">${l}</button>`;
const FT=[
["Todo dia",[["hab","Hábitos","Marque o que fez hoje e veja sua sequência","habit"],["med","Meditar","9 meditações guiadas, respiração, silêncio e repetição","leaf"],["ora","Oração","Roteiro, orações da Bíblia e pedidos","heart"]]],
["Crescer",[["plan","Planos de leitura","21 planos, de 10 dias a 1 ano","cal"],["mem","Memorizar","Conjuntos por tema e 3 modos de treino","mark"],["jorn","Jornadas","Leituras de 5 dias para cada momento","route"],["estu","Estudos","Passo a passo com perguntas","cap"],["ask","Pergunte","Versículos ligados ao seu tema","chat"]]],
["Registrar",[["dia","Diário","Orações e reflexões, só neste aparelho","pen"],["lem","Lembretes","Aviso diário no horário que você escolher","bell"]]],
["Mais",[["quiz","Quiz","5 categorias, rodadas de 10 perguntas","quiz"],["kid","Infantil","17 histórias e 7 desenhos para pintar","smile"]]]];
const tile=(a,x)=>`<button class="tile" data-a="${a}" data-v="${x[0]}">${ICO[x[3]]}<b>${x[1]}</b><small>${x[2]}</small></button>`;
/* ===== Fé: ferramentas de uso diário ===== */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const dkey=(n=0)=>{const d=new Date();d.setDate(d.getDate()-n);return d.getFullYear()+"-"+(d.getMonth()+1)+"-"+d.getDate()};
const dnum=()=>{const d=new Date();return Math.floor(Date.UTC(d.getFullYear(),d.getMonth(),d.getDate())/864e5)};
const bidx=n=>LIV.findIndex(l=>l[0]===n);
const vrs=(b,c,a,z)=>B[b][c-1].slice(a-1,z).join(" ");
const pbar=p=>`<div class="pbar"><i style="width:${Math.round(Math.max(0,Math.min(1,p))*100)}%"></i></div>`;
const seg2=(a,cur,L)=>`<div class="seg sm">${L.map(x=>`<button class="${cur===x[0]?"on":""}" data-a="${a}" data-v="${x[0]}">${x[1]}</button>`).join("")}</div>`;
const inp=(id,ph)=>`<input id="${id}" class="ta" style="min-height:0;height:48px" placeholder="${ph}" autocomplete="off">`;
const fmt=s=>Math.floor(s/60)+":"+String(s%60).padStart(2,"0");
