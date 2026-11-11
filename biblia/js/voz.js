const SPKM={pae:"pai",paes:"pais",elle:"ele",elles:"eles",ella:"ela",ellas:"elas",christo:"Cristo",jehovah:"Jeová",creou:"criou"};
function spk(t){
  return t.replace(/\b([nd])’ell([aeo])(s?)\b/gi,(m,a,v,s)=>a+"el"+v+s).replace(/\p{L}+/gu,w=>{
    const k=w.toLowerCase(),r=SPKM[k];if(!r)return w;
    return w[0]!==w[0].toLowerCase()&&r[0]===r[0].toLowerCase()?r[0].toUpperCase()+r.slice(1):r});
}
function vscore(v){
  const n=v.name.toLowerCase(),l=v.lang.replace("_","-").toLowerCase();let s=l==="pt-br"?50:10;
  if(/natural|neural/.test(n))s+=40;if(/online/.test(n))s+=15;if(/google/.test(n))s+=25;
  if(/premium|enhanced|siri|francisca|antonio|thalita|luciana|felipe|fernanda|raquel|vitoria|camila/.test(n))s+=12;
  if(/espeak|compact/.test(n))s-=30;
  return s;
}
function vlist(){return syn?syn.getVoices().filter(v=>/^pt/i.test(v.lang)).sort((a,b)=>vscore(b)-vscore(a)):[]}
function bestVoice(){const L=vlist(),n=LSg("vn",null);return L.find(v=>v.name===n)||L[0]||null}
const SAMPLE="O Senhor é o meu pastor, nada me faltará.";
function say(t,done){
  if(!syn){toast("Seu navegador não suporta leitura em voz alta.");return}
  const k=++S.tk;syn.cancel();
  const u=new SpeechSynthesisUtterance(spk(t));u.lang="pt-BR";u.rate=S.rate;u.pitch=S.pitch;
  const v=bestVoice();if(v){u.voice=v;u.lang=v.lang}
  u.onend=()=>{if(k===S.tk&&done)done()};
  syn.speak(u);
}
const vsay=()=>{halt();say(SAMPLE)};
function vsheet(){
  const L=vlist(),cur=bestVoice(),rs=[0.8,0.9,1,1.1,1.25,1.5],ps=[["Grave",0.85],["Normal",1],["Agudo",1.15]];
  const rows=L.length?L.map(v=>{const on=cur&&v.name===cur.name;
    return `<button class="vrow${on?" on":""}" data-a="vpick" data-v="${encodeURIComponent(v.name)}"><span><b>${v.name.replace(/^(Microsoft|Google)\s+/,"")}</b><small>${v.lang.replace("_","-")}${/natural|neural|online/i.test(v.name)?" · qualidade alta":""}${v.localService?"":" · online"}</small></span>${on?ICO.check:ICO.play}</button>`}).join("")
    :`<p class="note">Este aparelho não informou vozes em português. Instale uma voz nas configurações do celular (Idioma ou Acessibilidade, em “Texto para fala”).</p>`;
  return `<div class="shade" data-a="vsx"></div><div class="sheet"><div class="grab"></div><h3>Voz da leitura</h3><p class="note">Toque em uma voz para ouvir uma amostra e usá-la.</p><div>${rows}</div><p class="lbl">Velocidade</p><div class="chips">${rs.map(x=>`<button class="${S.rate===x?"on":""}" data-a="vrate" data-v="${x}">${x}×</button>`).join("")}</div><p class="lbl">Tom</p><div class="chips">${ps.map(x=>`<button class="${S.pitch===x[1]?"on":""}" data-a="vpitch" data-v="${x[1]}">${x[0]}</button>`).join("")}</div><button class="btn" data-a="vtest" style="width:100%;margin-top:6px">${ICO.play}Ouvir amostra</button><p class="note">As vozes vêm do próprio aparelho, então a qualidade depende do que está instalado nele. As vozes “Natural” (Edge e Windows) e as do Google (Android) costumam soar melhor.</p></div>`;
}
function halt(){S.tk++;S.playing=false;if(syn)syn.cancel()}
function play(i){
  const d=data();if(!d)return;
  if(i>=d.v.length){const nb=S.c<LIV[S.b][1]?[S.b,S.c+1]:S.b<LIV.length-1&&S.b!==65?[S.b+1,1]:null;if(!nb){S.playing=false;S.idx=0;mark();return}S.b=nb[0];S.c=nb[1];render();scrollTo(0,0);play(0);return}
  S.playing=true;S.idx=i;mark();
  say((i===0?LIV[S.b][0]+", capítulo "+S.c+". ":"")+d.v[i],()=>play(i+1));
}
function mark(){
  document.querySelectorAll(".v").forEach((p,i)=>p.classList.toggle("on",S.playing&&i===S.idx));
  const f=$(".fab");if(f)f.innerHTML=S.playing?ICO.pause+"Pausar":ICO.play+"Ouvir";
  const c=$(".v.on");if(c)c.scrollIntoView({block:"center",behavior:"smooth"});
}
