const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,correctIdx,target){const correct=arr[correctIdx];const rest=arr.filter((_,i)=>i!==correctIdx);const t=Math.max(0,Math.min(target,rest.length));rest.splice(t,0,correct);return{arr:rest,ans:t};}
const isX5=it=>typeof it.id==='string'&&it.id.includes('_x5_');
// articles items: 4 opts, cycle 0-3
let a=0;for(const it of content.articles.filter(isX5))for(const q of it.items){const r=place(q.opts,q.ans,a%4);q.opts=r.arr;q.ans=r.ans;a++;}
// listening items: 3 opts, cycle 0-2
let l=0;for(const it of content.listening.filter(isX5))for(const q of it.items){const r=place(q.opts,q.ans,l%3);q.opts=r.arr;q.ans=r.ans;l++;}
// grammar items: 3 opts, cycle 0-2
let g=0;for(const it of content.grammar.filter(isX5))for(const q of it.items){const r=place(q.opts,q.ans,g%3);q.opts=r.arr;q.ans=r.ans;g++;}
fs.writeFileSync(file,JSON.stringify(content,null,2));
// report
const aAns={},lAns={},gAns={};
for(const it of content.articles.filter(isX5))for(const q of it.items)aAns[q.ans]=(aAns[q.ans]||0)+1;
for(const it of content.listening.filter(isX5))for(const q of it.items)lAns[q.ans]=(lAns[q.ans]||0)+1;
for(const it of content.grammar.filter(isX5))for(const q of it.items)gAns[q.ans]=(gAns[q.ans]||0)+1;
console.log('article ans',JSON.stringify(aAns),'listening ans',JSON.stringify(lAns),'grammar ans',JSON.stringify(gAns));
const types=['articles','listening','grammar','writing'];const lv={B1:0,B2:0,C1:0};let tot=0;
for(const t of types)for(const it of content[t].filter(isX5)){if(lv[it.lv]!==undefined)lv[it.lv]++;tot++;}
console.log('x5 total',tot,'lv',JSON.stringify(lv),'=> B1',(100*lv.B1/tot).toFixed(0)+'% B2',(100*lv.B2/tot).toFixed(0)+'% C1',(100*lv.C1/tot).toFixed(0)+'%');
