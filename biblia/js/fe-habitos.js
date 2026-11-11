/* ---- Hábitos ---- */
const HDEF=[["h1","Li a Bíblia"],["h2","Orei"],["h3","Agradeci a Deus"],["h4","Pratiquei um gesto de bondade"]];
const hab=()=>LSg("hab",{l:HDEF.map(x=>({id:x[0],t:x[1]})),g:{}});
function streak(){const g=hab().g,has=n=>g[dkey(n)]&&g[dkey(n)].length;let n=0,i=has(0)?0:1;while(has(i)){n++;i++}return n}
function feHab(){
  const H=hab(),dn=H.g[dkey(0)]||[],gd=pick(DES),sk=streak();
  const row=(id,t,tag)=>`<div class="hrow"><button class="hk${dn.includes(id)?" on":""}" data-a="f_hb_t" data-v="${id}" aria-label="Marcar">${dn.includes(id)?ICO.check:""}</button><span>${esc(t)}${tag?`<i>${tag}</i>`:""}</span>${S.hed&&id!=="gd"?`<button class="lnk" data-a="f_hb_x" data-v="${id}">Remover</button>`:""}</div>`;
  const wk=[6,5,4,3,2,1,0].map(n=>{const d=new Date();d.setDate(d.getDate()-n);const on=(H.g[dkey(n)]||[]).length;return `<span class="${on?"on":""}${n===0?" td":""}">${"DSTQQSS"[d.getDay()]}</span>`}).join("");
  return `<p class="note">Marque o que você fez hoje. Pouco todo dia vale mais do que muito de vez em quando.</p><div class="week">${wk}</div><p class="note"><b>${sk}</b> ${sk===1?"dia seguido":"dias seguidos"} · hoje: ${dn.length} de ${H.l.length+1}</p><div class="card">${H.l.map(x=>row(x.id,x.t)).join("")}${row("gd",gd,"Desafio de hoje")}</div><p class="lbl">Novo hábito</p>${inp("hn","Ex.: ler um salmo antes de dormir")}<div class="row"><button class="btn" data-a="f_hb_add">Adicionar</button><button class="btn alt" data-a="f_hb_e">${S.hed?"Concluir":"Editar lista"}</button></div>`;
}
