/* Service worker: guarda o site no aparelho para abrir offline.
   Troque a versão (V) a cada publicação para atualizar o cache. */
const V="mostra-biblia-v4";
const FILES=[
  "/",
  "/biblia/",
  "/apple-touch-icon.png",
  "/biblia/css/app.css",
  "/biblia/css/instalar.css",
  "/biblia/data/biblia-almeida.js",
  "/biblia/data/livros.js",
  "/biblia/data/versiculos.js",
  "/biblia/js/base.js",
  "/biblia/js/busca.js",
  "/biblia/js/conteudo.js",
  "/biblia/js/estado.js",
  "/biblia/js/fe-acoes.js",
  "/biblia/js/fe-base.js",
  "/biblia/js/fe-habitos.js",
  "/biblia/js/fe-infantil.js",
  "/biblia/js/fe-meditar.js",
  "/biblia/js/fe-memorizar.js",
  "/biblia/js/fe-oracao.js",
  "/biblia/js/fe-planos.js",
  "/biblia/js/fe-quiz.js",
  "/biblia/js/instalar.js",
  "/biblia/js/principal.js",
  "/biblia/js/pwa-inicio.js",
  "/biblia/js/telas.js",
  "/biblia/js/voz.js",
  "/css/base.css",
  "/css/guia.css",
  "/icon-192.png",
  "/icon-512.png",
  "/icon-maskable-512.png",
  "/img/fotos.json",
  "/img/logo-agape.jpg",
  "/img/logo-boa-terra.jpg",
  "/img/mockup-app.jpg",
  "/js/app/conteudo.js",
  "/js/app/estande.js",
  "/js/app/eventos.js",
  "/js/app/imagens-reais.js",
  "/js/app/inicio.js",
  "/js/app/instalar.js",
  "/js/app/navegacao.js",
  "/js/app/nucleo.js",
  "/js/app/quiz.js",
  "/js/app/tema.js",
  "/js/arte/base.js",
  "/js/arte/estande-1.js",
  "/js/arte/estande-2.js",
  "/js/arte/estande-3.js",
  "/js/arte/estande-4.js",
  "/js/arte/estande-5.js",
  "/js/config.js",
  "/js/dados/estandes.js",
  "/js/dados/quiz.js",
  "/js/pwa.js",
  "/manifest.webmanifest"
];
self.addEventListener("install",e=>{e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
  const r=e.request;if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  e.respondWith(caches.open(V).then(c=>c.match(r,{ignoreSearch:true}).then(hit=>{
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>hit||c.match("/biblia/"));
    return hit||net;
  })));
});
