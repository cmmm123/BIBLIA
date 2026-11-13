const V="biblia-v6";
const FILES=["/biblia/","/oracoes.js","/icon-192.png","/icon-512.png"];
const APP_PATH="/biblia/";
const SHARED_ASSETS=new Set(["/oracoes.js","/icon-192.png","/icon-512.png"]);

function isAppRequest(url){
  return url.pathname===APP_PATH || url.pathname.startsWith(APP_PATH) || SHARED_ASSETS.has(url.pathname);
}

self.addEventListener("install",e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});

self.addEventListener("activate",e=>{
  e.waitUntil(
    caches.keys()
      .then(keys=>Promise.all(keys.filter(key=>key.startsWith("biblia-v")&&key!==V).map(key=>caches.delete(key))))
      .then(()=>self.clients.claim())
  );
});

self.addEventListener("fetch",e=>{
  const request=e.request;
  const url=new URL(request.url);
  if(request.method!=="GET"||url.origin!==location.origin||!isAppRequest(url))return;

  const isDocument=request.mode==="navigate"||request.destination==="document";
  if(isDocument){
    e.respondWith(
      fetch(request).then(response=>{
        if(response.ok){
          const copy=response.clone();
          caches.open(V).then(cache=>cache.put(request,copy));
        }
        return response;
      }).catch(async()=>{
        const cache=await caches.open(V);
        return await cache.match(request,{ignoreSearch:true})||await cache.match(APP_PATH);
      })
    );
    return;
  }

  e.respondWith(caches.open(V).then(async cache=>{
    const cached=await cache.match(request,{ignoreSearch:true});
    const network=fetch(request).then(response=>{
      if(response.ok)cache.put(request,response.clone());
      return response;
    }).catch(()=>cached);
    return cached||network;
  }));
});
