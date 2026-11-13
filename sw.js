const V="biblia-v5",FILES=["/","/biblia/","/manifest.webmanifest","/oracoes.js","/icon-192.png","/icon-512.png"];
self.addEventListener("install",e=>{
  e.waitUntil(caches.open(V).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));
});
self.addEventListener("activate",e=>{
  e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()));
});
self.addEventListener("fetch",e=>{
  const r=e.request;
  if(r.method!=="GET"||new URL(r.url).origin!==location.origin)return;
  const doc=r.mode==="navigate"||r.destination==="document";
  if(doc){
    e.respondWith(fetch(r).then(res=>{
      if(res.ok){const copy=res.clone();caches.open(V).then(c=>c.put(r,copy));}
      return res;
    }).catch(async()=>{
      const c=await caches.open(V);
      return await c.match(r,{ignoreSearch:true})||await c.match("/biblia/")||await c.match("/");
    }));
    return;
  }
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(r,{ignoreSearch:true});
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>hit);
    return hit||net;
  }));
});
