const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,c,t){const x=arr[c];const r=arr.filter((_,i)=>i!==c);t=Math.max(0,Math.min(t,r.length));r.splice(t,0,x);return{arr:r,ans:t};}
const topics=[
 {id:'gr_x6_past_modals',lv:'B2',title:'Past Modals (should have / could have / must have)',
  exp:"Kip fiillerin geçmiş biçimi 'modal + have + V3' ile kurulur ve geçmişe dair pişmanlık, eleştiri ya da çıkarım anlatır. 'should have + V3' = yapılması iyi olurdu ama yapılmadı (pişmanlık); 'could have + V3' = mümkündü ama olmadı; 'must have + V3' = kesin olmuş (çıkarım); 'can't have + V3' = kesin olmamış; 'might have + V3' = olmuş olabilir.\n\nÖrnekler:\n• You should have called me. (Beni aramalıydın.)\n• She must have forgotten. (Kesin unutmuştur.)\n• He can't have finished so fast. (Bu kadar hızlı bitirmiş olamaz.)\n• They might have missed the train. (Treni kaçırmış olabilirler.)\n\nSık tuzaklar: 'of' değil 'have' kullan: 'should of gone' YANLIŞ, 'should have gone' doğru. V3 (past participle) gerekir: 'must have went' değil 'must have gone'. Kesin olumsuz çıkarımda 'mustn't have' değil 'can't have' tercih edilir.",
  items:[
   {q:"You ___ told me earlier; now it's too late.",opts:["should have","must have","can't have"],ans:0,tr:"Pişmanlık/eleştiri -> should have."},
   {q:"The ground is wet; it ___ rained.",opts:["should have","must have","couldn't have"],ans:1,tr:"Kanıta dayalı çıkarım -> must have."},
   {q:"She ___ have passed; she never studied.",opts:["must","can't","should"],ans:1,tr:"Kesin olumsuz çıkarım -> can't have."},
   {q:"We ___ have taken a taxi, but we walked.",opts:["could","must","can't"],ans:0,tr:"Mümkündü ama olmadı -> could have."},
   {q:"He ___ have left; his coat is gone.",opts:["can't","must","shouldn't"],ans:1,tr:"Çıkarım -> must have left."},
   {q:"They ___ have missed the bus; I'm not sure.",opts:["might","must","should"],ans:0,tr:"Olasılık -> might have."},
   {q:"I should ___ studied harder for the test.",opts:["have","of","had"],ans:0,tr:"modal + have -> have studied."},
   {q:"You must have ___ very tired last night.",opts:["been","being","be"],ans:0,tr:"must have + V3 -> been."}]},
 {id:'gr_x6_passive_reporting',lv:'B2',title:'Passive Reporting (It is said that...)',
  exp:"Bir haberi ya da genel kanıyı, kaynağını belirtmeden aktarmak için iki edilgen kalıp kullanılır. 1) 'It + is/was + said/thought/believed + that + cümle' (It is said that he is rich). 2) 'Özne + is/was + said/believed + to + fiil' (He is said to be rich). İkinci kalıpta önceki bir zaman için 'to have + V3' gelir (He is said to have left).\n\nÖrnekler:\n• It is believed that the castle is haunted. (Kalenin perili olduğuna inanılır.)\n• The company is said to be in trouble. (Şirketin zorda olduğu söyleniyor.)\n• She is thought to have left the country. (Ülkeden ayrıldığı düşünülüyor.)\n• It was reported that no one was hurt. (Kimsenin yaralanmadığı bildirildi.)\n\nSık tuzaklar: İkinci kalıpta özneden sonra 'to' gelir: 'He is said is rich' YANLIŞ, 'He is said to be rich' doğru. Geçmiş eylem için mastarı 'to have + V3' yap.",
  items:[
   {q:"It is ___ that the bridge is very old.",opts:["said","saying","say"],ans:0,tr:"It is + V3 -> said."},
   {q:"He is said ___ very wealthy.",opts:["to be","being","is"],ans:0,tr:"özne + is said + to -> to be."},
   {q:"It ___ believed that prices will rise.",opts:["is","are","being"],ans:0,tr:"'It' tekil -> is believed."},
   {q:"The suspect is thought to ___ the country.",opts:["have left","left","leaving"],ans:0,tr:"Önceki eylem -> to have left."},
   {q:"It was ___ that no one was injured.",opts:["reported","reporting","report"],ans:0,tr:"It was + V3 -> reported."},
   {q:"They are believed ___ hiding in the mountains.",opts:["to be","being","are"],ans:0,tr:"özne + are believed + to -> to be."},
   {q:"The painting is said ___ worth a fortune.",opts:["to be","is","being"],ans:0,tr:"is said + to -> to be."},
   {q:"It is ___ that she speaks five languages.",opts:["known","knowing","know"],ans:0,tr:"It is + V3 -> known."}]},
 {id:'gr_x6_future_continuous',lv:'B2',title:'Future Continuous (will be doing)',
  exp:"Future Continuous (will be + V-ing), gelecekte belirli bir anda süregelecek eylemi anlatır. Ayrıca kibar bir şekilde birinin planını sormak için de kullanılır. Genellikle 'at this time tomorrow, at 8 p.m., when you arrive' gibi zaman ifadeleriyle gelir.\n\nÖrnekler:\n• This time tomorrow, I will be flying to Rome. (Yarın bu saatte Roma'ya uçuyor olacağım.)\n• Don't call at nine; we will be having dinner. (Dokuzda arama; yemek yiyor olacağız.)\n• When you arrive, I will be waiting outside. (Vardığında dışarıda bekliyor olacağım.)\n• Will you be using the car tonight? (Bu akşam arabayı kullanacak mısın? — kibar)\n\nSık tuzaklar: 'be' fiilini unutma: 'I will flying' YANLIŞ, 'I will be flying' doğru. Gelecekte bir andan ÖNCE tamamlanmış eylem için Future Perfect (will have done) kullanılır; süregelen için Future Continuous.",
  items:[
   {q:"This time next week, we ___ on a beach.",opts:["will lie","will be lying","lie"],ans:1,tr:"Gelecekte süregelen -> will be lying."},
   {q:"Don't phone at eight; I ___ .",opts:["will be studying","will study","study"],ans:0,tr:"O anda süren eylem -> will be studying."},
   {q:"When you get home, the kids ___ .",opts:["will sleep","will be sleeping","sleep"],ans:1,tr:"O anda süregelen -> will be sleeping."},
   {q:"He will ___ working late tonight.",opts:["be","been","being"],ans:0,tr:"will + be + V-ing -> be."},
   {q:"___ you be using your laptop later?",opts:["Will","Do","Are"],ans:0,tr:"Kibar soru -> Will you be ...?"},
   {q:"At noon tomorrow, they ___ the exam.",opts:["will be taking","will take","take"],ans:0,tr:"Belirli anda süren -> will be taking."},
   {q:"I ___ be waiting for you at the gate.",opts:["will","am","would"],ans:0,tr:"Future continuous -> will be waiting."},
   {q:"This time tomorrow she ___ to the coast.",opts:["will drive","will be driving","drives"],ans:1,tr:"Süregelen gelecek -> will be driving."}]},
 {id:'gr_x6_so_such_too_enough',lv:'B2',title:'So / Such / Too / Enough',
  exp:"Bu ifadeler derece ve sonuç anlatır. 'so + sıfat/zarf' (so tired), 'such (a) + sıfat + isim' (such a nice day). Sonuç için 'that' gelebilir. 'too + sıfat' = fazla (olumsuz, gereğinden çok): too hot. 'enough' = yeterli; sıfattan SONRA (warm enough), isimden ÖNCE (enough money) gelir.\n\nÖrnekler:\n• It was so cold that we stayed in. (O kadar soğuktu ki içeride kaldık.)\n• It was such a boring film. (Öyle sıkıcı bir filmdi ki.)\n• This coffee is too hot to drink. (Bu kahve içilemeyecek kadar sıcak.)\n• She isn't old enough to drive. (Araba kullanacak kadar büyük değil.)\n\nSık tuzaklar: 'so' sıfatla, 'such' isimli öbekle: 'so a nice day' YANLIŞ, 'such a nice day' doğru. 'enough' sıfattan sonra gelir: 'enough warm' değil 'warm enough'. 'too' olumsuz aşırılık, 'very' yalnızca yoğunluk bildirir; karıştırma.",
  items:[
   {q:"The box was ___ heavy to lift.",opts:["so","too","such"],ans:1,tr:"Aşırılık (kaldıramayacak) -> too heavy."},
   {q:"It was ___ a beautiful garden.",opts:["so","too","such"],ans:2,tr:"'a + sıfat + isim' -> such."},
   {q:"She was ___ tired that she fell asleep.",opts:["so","such","too"],ans:0,tr:"'so + sıfat + that' -> so tired."},
   {q:"He isn't tall ___ to reach the shelf.",opts:["too","enough","so"],ans:1,tr:"Sıfattan sonra -> tall enough."},
   {q:"We don't have ___ time to finish.",opts:["enough","too","so"],ans:0,tr:"İsimden önce -> enough time."},
   {q:"It was ___ an interesting book.",opts:["so","such","too"],ans:1,tr:"'a + sıfat + isim' -> such."},
   {q:"This tea is ___ sweet for me.",opts:["such","too","enough"],ans:1,tr:"Aşırılık -> too sweet."},
   {q:"The music was ___ loud that we left.",opts:["so","such","enough"],ans:0,tr:"'so + sıfat + that' -> so loud."}]},
 {id:'gr_x6_contrast_purpose',lv:'B2',title:'Connectors of Contrast & Purpose',
  exp:"Karşıtlık için: 'although / even though / though + cümle' (Although it rained, we went); 'despite / in spite of + isim veya -ing' (Despite the rain, ...); 'however' iki cümleyi ayırır. Amaç için: 'to / in order to / so as to + V1' (to save money); 'so that + cümle' (so that we could see).\n\nÖrnekler:\n• Although he was ill, he came to work. (Hasta olmasına rağmen işe geldi.)\n• Despite the traffic, we arrived on time. (Trafiğe rağmen zamanında vardık.)\n• She saved money in order to buy a car. (Araba almak için para biriktirdi.)\n• Speak clearly so that everyone can hear. (Herkes duyabilsin diye net konuş.)\n\nSık tuzaklar: 'despite' ve 'in spite of'tan sonra CÜMLE değil isim/-ing gelir: 'despite it was late' YANLIŞ, 'despite being late' veya 'although it was late' doğru. 'although' ile 'but' aynı cümlede birlikte kullanılmaz.",
  items:[
   {q:"___ the cold weather, we enjoyed the trip.",opts:["Although","Despite","However"],ans:1,tr:"İsim öbeğiyle -> Despite the cold weather."},
   {q:"___ it was expensive, she bought it.",opts:["Despite","Although","In spite of"],ans:1,tr:"Cümleyle -> Although."},
   {q:"He works hard ___ support his family.",opts:["so that","in order to","despite"],ans:1,tr:"Amaç + fiil -> in order to."},
   {q:"I left early ___ I could catch the train.",opts:["so that","to","despite"],ans:0,tr:"Amaç + cümle -> so that."},
   {q:"Despite ___ tired, he kept going.",opts:["he was","being","was"],ans:1,tr:"despite + -ing -> being."},
   {q:"The plan failed, ___ we tried our best.",opts:["despite","even though","in spite of"],ans:1,tr:"Cümleyle karşıtlık -> even though."},
   {q:"She whispered ___ not to wake the baby.",opts:["so as","despite","although"],ans:0,tr:"Amaç -> so as (to) not."},
   {q:"In spite of ___ , the match continued.",opts:["it rained","the rain","although"],ans:1,tr:"in spite of + isim -> the rain."}]},
 {id:'gr_x6_gradable_adjectives',lv:'B2',title:'Gradable & Non-gradable Adjectives',
  exp:"Sıfatlar iki türdür. Dereceli (gradable) sıfatlar az/çok olabilir (cold, big, tired) ve 'very, quite, a bit' ile kullanılır. Derecesiz/uç (non-gradable/extreme) sıfatlar zaten en uç anlamı taşır (freezing, huge, exhausted) ve 'absolutely, completely, totally' ile kullanılır; 'very' onlarla pek uyumlu değildir.\n\nÖrnekler:\n• It's very cold today. (Bugün çok soğuk. — dereceli)\n• It's absolutely freezing! (Buz gibi! — uç)\n• The film was quite good. (Film oldukça iyiydi.)\n• I was absolutely exhausted. (Tamamen bitkindim.)\n\nSık tuzaklar: Uç sıfatlarla 'very' kullanma: 'very freezing' genelde YANLIŞ, 'absolutely freezing' doğru. Dereceli sıfatlarla 'absolutely' tuhaf durur: 'absolutely cold' yerine 'very cold'. 'quite', uç sıfatlarla 'tamamen' anlamına gelebilir (quite impossible).",
  items:[
   {q:"It's ___ freezing outside!",opts:["very","absolutely","a bit"],ans:1,tr:"Uç sıfat -> absolutely freezing."},
   {q:"The soup is ___ hot; be careful.",opts:["very","absolutely","completely"],ans:0,tr:"Dereceli sıfat -> very hot."},
   {q:"I was ___ exhausted after the race.",opts:["very","absolutely","quite a"],ans:1,tr:"Uç sıfat -> absolutely exhausted."},
   {q:"The test was ___ difficult, but I passed.",opts:["completely","quite","absolutely"],ans:1,tr:"Dereceli -> quite difficult."},
   {q:"Their house is ___ enormous.",opts:["very","absolutely","a bit"],ans:1,tr:"Uç sıfat -> absolutely enormous."},
   {q:"She was ___ tired, so she rested.",opts:["absolutely","a bit","completely"],ans:1,tr:"Dereceli -> a bit tired."},
   {q:"That idea is ___ impossible.",opts:["very","absolutely","a bit"],ans:1,tr:"Uç sıfat -> absolutely impossible."},
   {q:"The weather was ___ good for a picnic.",opts:["completely","quite","absolutely"],ans:1,tr:"Dereceli -> quite good."}]}
];
let ctr=0;for(const t of topics)for(const q of t.items){const r=place(q.opts,q.ans,ctr%3);q.opts=r.arr;q.ans=r.ans;ctr++;}
content.grammar=content.grammar.concat(topics);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const ans={};topics.forEach(t=>t.items.forEach(q=>ans[q.ans]=(ans[q.ans]||0)+1));
console.log('B2 grammar added:',topics.length,'ans',JSON.stringify(ans));
