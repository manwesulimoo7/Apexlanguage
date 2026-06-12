const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,correctIdx,target){const correct=arr[correctIdx];const rest=arr.filter((_,i)=>i!==correctIdx);const t=Math.max(0,Math.min(target,rest.length));rest.splice(t,0,correct);return{arr:rest,ans:t};}
const isX4=it=>typeof it.id==='string'&&it.id.includes('_x4_');
// cloze blanks (4 opts)
let cb=0;for(const it of content.cloze.filter(isX4))for(const b of it.blanks){const r=place(b.opts,b.ans,cb%4);b.opts=r.arr;b.ans=r.ans;cb++;}
// 4-opt banks
for(const [bank,len] of [['restate',4],['dialogue',4],['paracomp',4],['translate',4]]){
  let c=0;for(const it of content[bank].filter(isX4)){const r=place(it.opts,it.ans,c%len);it.opts=r.arr;it.ans=r.ans;c++;}
}
// oddout (5 sentences): move odd to balanced 0-4
let oc=0;for(const it of content.oddout.filter(isX4)){const r=place(it.sentences,it.ans,oc%5);it.sentences=r.arr;it.ans=r.ans;oc++;}
fs.writeFileSync(file,JSON.stringify(content,null,2));
// report
const banks=['cloze','restate','oddout','dialogue','paracomp','translate'];
const lv={B2:0,C1:0,other:0};const field={fen:0,saglik:0,sosyal:0};const ans={};
for(const b of banks)for(const it of content[b].filter(isX4)){
  lv[it.lv]!==undefined?lv[it.lv]++:lv.other++;
  if(field[it.field]!==undefined)field[it.field]++;
  if(b==='cloze')for(const bl of it.blanks)ans[bl.ans]=(ans[bl.ans]||0)+1; else ans[it.ans]=(ans[it.ans]||0)+1;
}
const total=banks.reduce((s,b)=>s+content[b].filter(isX4).length,0);
console.log('x4 total',total,'lv',JSON.stringify(lv),'=> B2',(100*lv.B2/total).toFixed(0)+'%','C1',(100*lv.C1/total).toFixed(0)+'%');
console.log('field',JSON.stringify(field),'ans',JSON.stringify(ans));
