addEventListener("keydown",e=>{if(document.querySelector(".lb,.sh"))return;if(e.key==="ArrowRight")go(cur+1);if(e.key==="ArrowLeft")go(cur-1)});
addEventListener("hashchange",()=>{const i=parse();if(i!==cur)go(i)});
addEventListener("resize",()=>{pg.scrollLeft=Math.max(0,cur)*pg.clientWidth;frame()});
