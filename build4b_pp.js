const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const paraphrase=[
 {id:'pp_x4_although_despite1',lv:'B2',source:"Although the team had practised hard, they lost the final.",
  instruction:"Cümleyi anlamını koruyarak 'despite' ile yeniden yaz.",instruction_en:"Rewrite the sentence with 'despite', keeping the meaning.",
  sample:"Despite practising hard, the team lost the final."},
 {id:'pp_x4_although_despite2',lv:'B2',source:"Although it was raining heavily, the outdoor festival continued.",
  instruction:"'despite' kullanarak cümleyi yeniden yaz (bir isim öbeği ile).",instruction_en:"Rewrite the sentence with 'despite', using a noun phrase.",
  sample:"Despite the heavy rain, the outdoor festival continued."},
 {id:'pp_x4_passive1',lv:'B2',source:"Workers built the new bridge in only two years.",
  instruction:"Cümleyi edilgen (passive) yapıya çevir.",instruction_en:"Change the sentence into the passive voice.",
  sample:"The new bridge was built in only two years."},
 {id:'pp_x4_passive2',lv:'B2',source:"Scientists have discovered a new species of frog in the forest.",
  instruction:"Cümleyi edilgen yapıya çevir (present perfect).",instruction_en:"Change the sentence into the passive voice (present perfect).",
  sample:"A new species of frog has been discovered in the forest."},
 {id:'pp_x4_relative1',lv:'B2',source:"I met a woman yesterday. She speaks five languages.",
  instruction:"İki cümleyi 'who' ile bir relative clause olarak birleştir.",instruction_en:"Join the two sentences into one using a 'who' relative clause.",
  sample:"Yesterday I met a woman who speaks five languages."},
 {id:'pp_x4_relative2',lv:'B2',source:"This is the village. My grandparents grew up there.",
  instruction:"İki cümleyi 'where' kullanarak tek cümlede birleştir.",instruction_en:"Combine the two sentences into one using 'where'.",
  sample:"This is the village where my grandparents grew up."},
 {id:'pp_x4_reported1',lv:'B2',source:"He said, \"I will call you tomorrow.\"",
  instruction:"Cümleyi dolaylı anlatıma (reported speech) çevir.",instruction_en:"Change the sentence into reported speech.",
  sample:"He said that he would call me the next day."},
 {id:'pp_x4_reported2',lv:'B2',source:"She asked me, \"Are you coming to the party?\"",
  instruction:"Soruyu dolaylı anlatıma çevir.",instruction_en:"Change the question into reported speech.",
  sample:"She asked me whether I was coming to the party."},
 {id:'pp_x4_inversion1',lv:'C1',source:"I had never seen such a beautiful sunset before.",
  instruction:"Cümleyi 'Never' ile başlatıp devrik (inversion) yapı kullanarak yeniden yaz.",instruction_en:"Rewrite the sentence beginning with 'Never', using inversion.",
  sample:"Never before had I seen such a beautiful sunset."},
 {id:'pp_x4_inversion2',lv:'C1',source:"As soon as we had arrived, the rain started.",
  instruction:"Cümleyi 'No sooner' ile başlatıp devrik yapı kullanarak yeniden yaz.",instruction_en:"Rewrite the sentence beginning with 'No sooner', using inversion.",
  sample:"No sooner had we arrived than the rain started."},
 {id:'pp_x4_comparative1',lv:'C1',source:"If you practise more, you will improve faster.",
  instruction:"Cümleyi 'The more ..., the ...' karşılaştırma kalıbıyla yeniden yaz.",instruction_en:"Rewrite the sentence using 'The more ..., the ...'.",
  sample:"The more you practise, the faster you will improve."},
 {id:'pp_x4_comparative2',lv:'C1',source:"No other mountain in the range is as high as this one.",
  instruction:"Cümleyi karşılaştırmalı (comparative) yapı kullanarak yeniden yaz, anlamı koru.",instruction_en:"Rewrite the sentence using a comparative structure, keeping the meaning.",
  sample:"This mountain is higher than any other in the range."}
];
content.paraphrase=(content.paraphrase||[]).concat(paraphrase);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const l={};paraphrase.forEach(p=>l[p.lv]=(l[p.lv]||0)+1);
console.log('paraphrase added:',paraphrase.length,'lv',JSON.stringify(l));
