let dip=null;
const setInst=t=>{const a=$("#inst");if(a)a.textContent=t};
addEventListener("beforeinstallprompt",e=>{e.preventDefault();dip=e});
addEventListener("appinstalled",()=>{dip=null;setInst("Aplicativo instalado")});
document.addEventListener("click",e=>{const a=e.target.closest("#inst");if(!a||!dip)return;e.preventDefault();const d=dip;dip=null;try{d.prompt();d.userChoice.then(r=>{if(r.outcome==="accepted")setInst("Instalando o aplicativo...");else dip=d})}catch(x){location.href=BIBLIA}});
