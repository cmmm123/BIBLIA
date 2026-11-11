const S={tab:"home",view:"books",sheet:false,q:"",g:-1,fv:null,ex:0,sc:"0-72",md:"a",lim:30,H:[],T:[],nt:false,b:0,c:1,fs:19,rate:1,pitch:1,playing:false,idx:0,r:Math.floor(Math.random()*VERS.length),tk:0};
try{const f=+localStorage.getItem("fs");if(f>=14&&f<=30)S.fs=f;const r=+localStorage.getItem("rate");if(r>=0.6&&r<=1.6)S.rate=r;const p=+localStorage.getItem("pitch");if(p>=0.7&&p<=1.3)S.pitch=p}catch(e){}
const syn=window.speechSynthesis;
let POS=null;try{const p=JSON.parse(localStorage.getItem("pos"));if(p&&LIV[p[0]]&&p[1]>=1&&p[1]<=LIV[p[0]][1])POS=p}catch(e){}
function savePos(){if(S.tab==="read"&&S.view==="reader"){POS=[S.b,S.c];try{localStorage.setItem("pos",JSON.stringify(POS))}catch(e){}}}
const data=()=>{const c=B[S.b]&&B[S.b][S.c-1];return c?{v:c}:null};

