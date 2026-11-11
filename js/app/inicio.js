build();
loadReal();
const first=parse();pg.scrollLeft=first*pg.clientWidth;cur=first;
if(first>=1&&first<=5&&!seen.includes(first)){seen.push(first);lsS("mostra-vistos",seen);pane(0).innerHTML=home()}
paint();paintTheme();frame();
