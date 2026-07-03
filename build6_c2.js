const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,c,t){const x=arr[c];const r=arr.filter((_,i)=>i!==c);t=Math.max(0,Math.min(t,r.length));r.splice(t,0,x);return{arr:r,ans:t};}
const topics=[
 {id:'gr_x6_nominalisation',lv:'C2',title:'Nominalisation',
  exp:"Adlaştırma (nominalisation), bir fiil ya da sıfağı isme çevirerek cümleyi daha yoğun, nesnel ve resmî kılar; akademik yazının temel özelliğidir. 'They decided quickly' → 'Their quick decision'; 'The prices increased' → 'The increase in prices'. Böylece fiil öbeği bir isim öbeğine dönüşür ve cümlenin öznesi olabilir.\n\nÖrnekler:\n• The government decided to act. → The government's decision to act was welcomed. (Hükümetin harekete geçme kararı memnuniyetle karşılandı.)\n• Scientists discovered the cause. → The discovery of the cause was crucial. (Nedenin keşfi çok önemliydi.)\n• Prices rose sharply. → The sharp rise in prices alarmed buyers. (Fiyatlardaki keskin artış alıcıları ürküttü.)\n\nSık tuzaklar: Adlaştırma metni yoğunlaştırır ama aşırısı okunurluğu düşürür. Doğru isim ekini seç: decide→decision, analyse→analysis, able→ability. İsimden sonra genelde 'of/in' edatı gelir: 'the analysis OF the data'.",
  items:[
   {q:"The sudden ___ in temperature damaged the crops.",opts:["rise","risen","rose"],ans:0,tr:"İsim gerekiyor -> rise."},
   {q:"Her ___ to resign surprised everyone.",opts:["decide","decision","decisive"],ans:1,tr:"Fiilin isim biçimi -> decision."},
   {q:"The ___ of the new drug took ten years.",opts:["develop","developed","development"],ans:2,tr:"İsimleştirme -> development."},
   {q:"A careful ___ of the data is required.",opts:["analyse","analysis","analysed"],ans:1,tr:"analyse -> analysis (isim)."},
   {q:"The ___ of the bridge caused major delays.",opts:["destroy","destruction","destroyed"],ans:1,tr:"destroy -> destruction."},
   {q:"His ___ to speak three languages impressed us.",opts:["able","ability","ably"],ans:1,tr:"able -> ability (isim)."},
   {q:"There has been a steady ___ in unemployment.",opts:["reduce","reduced","reduction"],ans:2,tr:"reduce -> reduction."},
   {q:"The ___ of the results will take a week.",opts:["evaluate","evaluation","evaluated"],ans:1,tr:"evaluate -> evaluation."}]},
 {id:'gr_x6_conditional_inversion',lv:'C2',title:'Conditional Inversion (Had I / Were I / Should you)',
  exp:"Resmî dilde koşul cümlelerinde 'if' düşürülüp yardımcı fiil öne alınabilir (devrik koşul). Üç kalıp yaygındır: 'Had + özne + V3' (= if had); 'Were + özne (+ to + V1)' (= if were); 'Should + özne + V1' (= if should, olasılık düşükse).\n\nÖrnekler:\n• Had I known, I would have helped. (= If I had known...) (Bilseydim yardım ederdim.)\n• Were she here, she would agree. (= If she were here...) (Burada olsaydı katılırdı.)\n• Should you need anything, just call. (= If you should need...) (Bir şey lazım olursa ara.)\n• Were it not for his advice, we would have failed. (Onun tavsiyesi olmasaydı başarısız olurduk.)\n\nSık tuzaklar: Devrik koşulda 'if' KULLANILMAZ: 'Had if I known' YANLIŞ. 'Had' ardından V3 gelir (Had I gone); 'Should' ardından yalın fiil (Should you require). Yapı resmîdir; gündelik dilde 'if'li biçim tercih edilir.",
  items:[
   {q:"___ I known earlier, I would have called.",opts:["Had","Did","If had"],ans:0,tr:"Devrik 3. koşul -> Had I known."},
   {q:"___ you need help, please let me know.",opts:["Should","Would","If should"],ans:0,tr:"Düşük olasılık -> Should you need."},
   {q:"___ it not for her, we would be lost.",opts:["Were","Was","Had"],ans:0,tr:"'Were it not for' kalıbı -> Were."},
   {q:"Had they arrived on time, they ___ the show.",opts:["would see","would have seen","saw"],ans:1,tr:"3. koşul sonucu -> would have seen."},
   {q:"___ she to accept, everything would change.",opts:["Were","Was","Did"],ans:0,tr:"'Were + özne + to' -> Were she to accept."},
   {q:"Should you ___ any problems, contact us.",opts:["have","had","having"],ans:0,tr:"Should + yalın fiil -> have."},
   {q:"Had I ___ the truth, I would have spoken.",opts:["know","known","knew"],ans:1,tr:"Had + V3 -> known."},
   {q:"___ he more careful, the accident wouldn't have happened.",opts:["Had been","Been","Had he been"],ans:2,tr:"Devrik -> Had he been."}]},
 {id:'gr_x6_hedging',lv:'C2',title:'Hedging & Cautious Language',
  exp:"Kaçınma dili (hedging), bir iddiayı yumuşatarak temkinli ve ölçülü bir ton kazandırır; akademik yazıda kesin genellemelerden kaçınmak için şarttır. Araçlar: 'may/might/could', 'seem/appear/tend to', 'suggest/indicate', 'it would seem that', 'somewhat, relatively, arguably, in some cases'.\n\nÖrnekler:\n• The results suggest a link between diet and mood. (Sonuçlar beslenme ile ruh hâli arasında bir bağ olduğunu düşündürüyor.)\n• Stress may contribute to illness. (Stres hastalığa katkıda bulunabilir.)\n• People tend to prefer familiar options. (İnsanlar tanıdık seçenekleri tercih etme eğilimindedir.)\n• It would appear that the plan has failed. (Anlaşılan plan başarısız olmuş görünüyor.)\n\nSık tuzaklar: 'prove, always, never, definitely' gibi kesin sözcükler iddiayı fazla güçlü kılar; veriler 'suggest/indicate' eder, 'prove' etmez. Aşırı hedging de belirsizlik yaratır; dengeyi koru.",
  items:[
   {q:"The data ___ that sleep affects memory.",opts:["prove","suggest","guarantee"],ans:1,tr:"Temkinli -> suggest."},
   {q:"Young people ___ to use social media more.",opts:["tend","must","always"],ans:0,tr:"Eğilim -> tend to."},
   {q:"It would ___ that the theory is flawed.",opts:["appear","prove","be certain"],ans:0,tr:"Yumuşatma -> would appear."},
   {q:"This factor ___ contribute to the problem.",opts:["may","definitely","never"],ans:0,tr:"Olasılık -> may."},
   {q:"The findings are ___ inconclusive.",opts:["absolutely","somewhat","completely"],ans:1,tr:"Ölçülü -> somewhat."},
   {q:"Such behaviour is ___ linked to stress.",opts:["possibly","surely","never"],ans:0,tr:"Temkinli -> possibly."},
   {q:"The evidence ___ a possible connection.",opts:["indicates","proves","denies"],ans:0,tr:"Kaçınma -> indicates."},
   {q:"There ___ to be several explanations.",opts:["seem","must","have"],ans:0,tr:"'seem to be' -> seem."}]},
 {id:'gr_x6_collocations',lv:'C2',title:'Advanced Collocations',
  exp:"Eşdizim (collocation), sözcüklerin doğal olarak birlikte kullanıldığı kalıplardır; dilbilgisi doğru olsa bile yanlış eşdizim kulağı tırmalar. 'make a decision' (do değil), 'strong coffee' (powerful değil), 'heavy rain' (big değil), 'commit a crime', 'pay attention', 'reach a conclusion', 'meet a deadline'.\n\nÖrnekler:\n• We need to make a decision soon. (Yakında bir karar vermeliyiz.)\n• The jury reached a verdict. (Jüri bir karara vardı.)\n• Please pay attention to the details. (Ayrıntılara dikkat et.)\n• He committed a serious crime. (Ciddi bir suç işledi.)\n\nSık tuzaklar: 'do a decision' YANLIŞ, 'make a decision' doğru. 'say a crime' değil 'commit a crime'. 'do attention' değil 'pay attention'. Türkçeden birebir çeviri çoğu zaman yanlış eşdizim üretir; kalıbı bir bütün olarak öğren.",
  items:[
   {q:"It's hard to ___ a decision under pressure.",opts:["make","do","take"],ans:0,tr:"'make a decision' kalıbı."},
   {q:"The committee finally ___ a conclusion.",opts:["reached","made","did"],ans:0,tr:"'reach a conclusion' kalıbı."},
   {q:"Students must ___ attention in class.",opts:["pay","make","give"],ans:0,tr:"'pay attention' kalıbı."},
   {q:"He ___ a crime and was arrested.",opts:["committed","did","made"],ans:0,tr:"'commit a crime' kalıbı."},
   {q:"I like ___ coffee in the morning.",opts:["strong","powerful","hard"],ans:0,tr:"'strong coffee' kalıbı."},
   {q:"We got soaked in the ___ rain.",opts:["heavy","big","strong"],ans:0,tr:"'heavy rain' kalıbı."},
   {q:"She ___ a fortune in property.",opts:["made","did","got"],ans:0,tr:"'make a fortune' kalıbı."},
   {q:"Can you ___ the deadline for Friday?",opts:["meet","catch","reach"],ans:0,tr:"'meet a deadline' kalıbı."}]},
 {id:'gr_x6_cohesion',lv:'C2',title:'Cohesion & Cohesive Devices',
  exp:"Bağdaşıklık (cohesion), bir metnin cümlelerini görünmez iplerle birbirine bağlar. Araçlar: gönderim sözcükleri (this, that, these, such), 'the former / the latter' (ilki / ikincisi), yerine koyma ve bağlaçlar. Bu ögeler tekrarı önler ve okuyucuyu yönlendirir.\n\nÖrnekler:\n• He arrived late again. Such behaviour is unacceptable. (Yine geç geldi. Böyle bir davranış kabul edilemez.)\n• I studied French and German; I found the former easier. (Fransızca ve Almanca çalıştım; ilkini daha kolay buldum.)\n• The plan has risks. That said, it may still work. (Planın riskleri var. Yine de işe yarayabilir.)\n• Costs rose. This led to higher prices. (Maliyetler arttı. Bu, fiyatların yükselmesine yol açtı.)\n\nSık tuzaklar: 'the former/the latter' yalnızca iki öge için kullanılır. Gönderim sözcüğü (this/such) önceki fikri açıkça karşılamalı; belirsiz 'this' okuyucuyu şaşırtır. 'such' isimle birlikte gelir: 'such behaviour'.",
  items:[
   {q:"He kept lying. ___ dishonesty cost him his job.",opts:["Such","So","This the"],ans:0,tr:"'Such + isim' gönderimi -> Such."},
   {q:"We offer tea and coffee; ___ is stronger.",opts:["the last","the latter","latter"],ans:1,tr:"İkincisi (coffee) -> the latter."},
   {q:"Sales fell sharply. ___ worried the board.",opts:["This","It the","That the"],ans:0,tr:"Önceki fikre gönderim -> This."},
   {q:"I met Ann and Sue; ___ is a lawyer.",opts:["the former","former","the first one is"],ans:0,tr:"İlki (Ann) -> the former."},
   {q:"The idea is risky. ___ , it deserves a chance.",opts:["That said","That say","Said that"],ans:0,tr:"Bağdaşık geçiş -> That said."},
   {q:"He broke the rules, and ___ actions have consequences.",opts:["such","so","this the"],ans:0,tr:"'such + isim' -> such actions."},
   {q:"Two plans were offered; we chose ___ .",opts:["the latter","latter","the second of"],ans:0,tr:"İkincisi -> the latter."},
   {q:"Costs keep rising. ___ is a serious concern.",opts:["This","It the","Such"],ans:0,tr:"Fikre gönderim -> This."}]},
 {id:'gr_x6_ellipsis_substitution',lv:'C2',title:'Ellipsis & Substitution',
  exp:"Eksiltme (ellipsis), tekrar eden sözcükleri atmaktır: 'She can sing and (she can) dance.' Yerine koyma (substitution) ise tekrarı bir sözcükle değiştirir: sayılabilen isim için 'one/ones', fiil öbeği için 'do/do so', bütün bir cümle için 'so/not', 'neither/so' ile eş görüş bildirme.\n\nÖrnekler:\n• Would you like a cake? — Yes, I'll have one. (Kek ister misin? — Evet, bir tane alayım.)\n• Is it going to rain? — I think so. (Yağmur yağacak mı? — Sanırım öyle.)\n• He passed the test, and so did she. (Sınavı geçti, o da geçti.)\n• I don't agree. — Neither do I. (Katılmıyorum. — Ben de.)\n\nSık tuzaklar: Sayılabilen isim için 'one', sayılamayan için hiçbir şey koyma: 'I need some money; I have some' ('one' değil). 'so/neither' ile devrik yardımcı fiil gelir: 'So do I', 'Neither can he'. 'I think so / I hope so / I'm afraid not' kalıplarını ezberle.",
  items:[
   {q:"Would you like an apple? — Yes, I'll take ___ .",opts:["one","it","that"],ans:0,tr:"Sayılabilen yerine -> one."},
   {q:"Is she coming? — I hope ___ .",opts:["so","it","that"],ans:0,tr:"Cümle yerine -> so."},
   {q:"He loves jazz, and so ___ I.",opts:["do","am","did"],ans:0,tr:"Geniş zaman eş görüş -> so do I."},
   {q:"I can't swim. — ___ can I.",opts:["Neither","So","Either"],ans:0,tr:"Olumsuz eş görüş -> Neither."},
   {q:"Do you think it'll work? — I'm afraid ___ .",opts:["not","no","don't"],ans:0,tr:"Olumsuz kısa yanıt -> afraid not."},
   {q:"These shoes are old; I need new ___ .",opts:["ones","one","some"],ans:0,tr:"Çoğul sayılabilen -> ones."},
   {q:"She said she would help, and she ___ .",opts:["did","does","done"],ans:0,tr:"Fiil öbeği yerine (geçmiş) -> did."},
   {q:"They were late, and so ___ we.",opts:["were","did","are"],ans:0,tr:"'be' ile eş görüş -> so were we."}]},
 {id:'gr_x6_absolute_constructions',lv:'C2',title:'Absolute Constructions',
  exp:"Mutlak yapı (absolute construction), kendi öznesi olan ama ana cümleye bir bağlaç olmadan bağlanan, genellikle bir isim + ortaç öbeğidir. Zaman, neden ya da koşul katar ve dile resmî, edebî bir hava verir: 'The weather being fine, we went out.'\n\nÖrnekler:\n• The work finished, they went home. (İş bitince eve gittiler.)\n• Weather permitting, the match will go ahead. (Hava el verirse maç oynanacak.)\n• All things considered, it was a success. (Her şey göz önüne alınınca başarıydı.)\n• The sun having set, the air grew cold. (Güneş battığından hava soğudu.)\n\nSık tuzaklar: Mutlak yapının KENDİ öznesi vardır; bu yüzden ana cümlenin öznesiyle aynı olmasına gerek yoktur (dangling participle sorununu çözer). Önce biten eylem için 'having + V3' kullan. Kalıplaşmış biçimleri (weather permitting, all things considered) olduğu gibi öğren.",
  items:[
   {q:"___ permitting, we'll leave at dawn.",opts:["Weather","Weather is","The weather is"],ans:0,tr:"Mutlak yapı kalıbı -> Weather permitting."},
   {q:"All things ___ , the plan worked well.",opts:["considered","considering","consider"],ans:0,tr:"Kalıp -> all things considered."},
   {q:"The sun ___ risen, we set off.",opts:["having","has","had"],ans:0,tr:"Önce biten eylem -> having risen."},
   {q:"The task ___ , everyone relaxed.",opts:["completed","completing","complete"],ans:0,tr:"Edilgen mutlak -> The task completed."},
   {q:"Her work ___ , she took a long break.",opts:["done","doing","do"],ans:0,tr:"'work done' (bitince) -> done."},
   {q:"The guests ___ , the host cleaned up.",opts:["having left","leaving","left"],ans:0,tr:"Önce biten -> having left."},
   {q:"Other factors ___ equal, price decides.",opts:["being","been","are"],ans:0,tr:"'other things being equal' -> being."},
   {q:"The rain ___ , the streets flooded quickly.",opts:["being heavy","is heavy","was heavy"],ans:0,tr:"Neden bildiren mutlak -> being heavy."}]},
 {id:'gr_x6_register_formality',lv:'C2',title:'Register & Formality (lest / commence / require)',
  exp:"Register (dil düzeyi), bağlama göre resmî ya da gündelik sözcük ve yapı seçimidir. Resmî yazıda Latin kökenli tek sözcüklü fiiller (commence, purchase, require, obtain), 'lest + yalın fiil' (...maması için), 'whom', kısaltmasız biçimler tercih edilir; gündelik dilde phrasal verb'ler (kick off, buy, need) ve kısaltmalar yaygındır.\n\nÖrnekler:\n• The ceremony will commence at noon. (Tören öğlen başlayacak.) — resmî\n• He spoke softly lest he wake the baby. (Bebeği uyandırmamak için usulca konuştu.)\n• Applicants are required to submit two references. (Başvuranlardan iki referans sunmaları istenir.)\n• We would be grateful if you could confirm. (Teyit ederseniz minnettar oluruz.)\n\nSık tuzaklar: 'lest'ten sonra yalın (subjunctive) fiil gelir: 'lest he wakes' değil 'lest he wake'. Resmî metinde 'get, kids, wanna, a lot of' gibi gündelik ögelerden kaçın; 'obtain, children, want to, much/many' tercih et.",
  items:[
   {q:"He whispered ___ he disturb the others.",opts:["lest","unless","so"],ans:0,tr:"'...maması için' -> lest."},
   {q:"The conference will ___ at nine sharp.",opts:["commence","kick off","start up"],ans:0,tr:"Resmî -> commence."},
   {q:"All visitors are ___ to sign in.",opts:["required","made","wanted"],ans:0,tr:"Resmî -> required to."},
   {q:"Where can I ___ a copy of the report?",opts:["obtain","get hold of","grab"],ans:0,tr:"Resmî -> obtain."},
   {q:"He hid the letter lest it ___ found.",opts:["be","was","is"],ans:0,tr:"lest + yalın (subjunctive) -> be."},
   {q:"Customers may ___ tickets online.",opts:["purchase","buy up","grab"],ans:0,tr:"Resmî -> purchase."},
   {q:"We would ___ your prompt response.",opts:["appreciate","be into","dig"],ans:0,tr:"Resmî nezaket -> appreciate."},
   {q:"To ___ the deadline, submit by Friday.",opts:["meet","make it to","catch up on"],ans:0,tr:"'meet the deadline' resmî eşdizim."}]}
];
let ctr=0;for(const t of topics)for(const q of t.items){const r=place(q.opts,q.ans,ctr%3);q.opts=r.arr;q.ans=r.ans;ctr++;}
content.grammar=content.grammar.concat(topics);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const ans={};topics.forEach(t=>t.items.forEach(q=>ans[q.ans]=(ans[q.ans]||0)+1));
console.log('C2 grammar added:',topics.length,'ans',JSON.stringify(ans));
