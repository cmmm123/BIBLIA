(function(){
var st=matchMedia("(display-mode: standalone)").matches||navigator.standalone;if(st)return;
var K="biblia-instalar-dispensado",dis=false;try{dis=localStorage.getItem(K)==="1"}catch(e){}
var ios=/iphone|ipad|ipod/i.test(navigator.userAgent),el=null;
function close(save){if(el){el.remove();el=null}if(save)try{localStorage.setItem(K,"1")}catch(e){}}
function show(){
 if(el)return;var can=!!window.__dip,msg=can?"Instale no seu celular para abrir como um aplicativo, sem precisar do navegador.":ios?"No iPhone: toque em Compartilhar (quadrado com seta) e depois em Adicionar à Tela de Início.":"Abra o menu do navegador (três pontos) e toque em Instalar aplicativo ou Adicionar à tela inicial.";
 el=document.createElement("div");el.className="ib";
 el.innerHTML='<div role="dialog" aria-label="Instalar aplicativo"><div class="r"><img src="/icon-192.png" alt=""><div><b>Instalar a Bíblia Sagrada</b><p>'+msg+'</p></div></div><div class="a">'+(can?'<button class="y" id="ibi">Instalar</button>':'')+'<button class="n" id="ibn">'+(can?'Agora não':'Entendi')+'</button></div></div>';
 document.body.appendChild(el);
 var i=el.querySelector("#ibi");if(i)i.onclick=function(){var d=window.__dip;window.__dip=null;close(false);if(d){d.prompt();d.userChoice&&d.userChoice.then(function(){})}};
 el.querySelector("#ibn").onclick=function(){close(true)};
}
window.__dipf=function(){if(!dis&&!window.__inst)setTimeout(show,2500);else if(el){close(false);show()}};
if(window.__inst)setTimeout(show,700);else if(window.__dip&&!dis)show();
})();
