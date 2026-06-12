const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const grammar=[
 {id:'gr_x5_quantifiers',lv:'B1',title:'Quantifiers (much / many / few / little)',
  exp:"Sayılabilen isimlerle 'many, (a) few, a number of'; sayılamayanlarla 'much, (a) little, an amount of' kullanılır. 'a few/a little' = biraz (olumlu); 'few/little' = neredeyse hiç (olumsuz vurgu). 'some' olumlu cümlede, 'any' olumsuz ve soruda gelir. Tuzak: 'much' çoğunlukla olumsuz/soru cümlesinde kullanılır; olumlu cümlede 'a lot of' tercih edilir.",
  items:[
   {q:"How ___ sugar do you take in your coffee?",opts:["many","much","few"],ans:1,tr:"'sugar' sayılamaz -> much."},
   {q:"There are too ___ cars in the city centre.",opts:["much","many","little"],ans:1,tr:"'cars' sayılabilir çoğul -> many."},
   {q:"I have only a ___ minutes, so let's be quick.",opts:["few","little","much"],ans:0,tr:"'minutes' sayılabilir + biraz -> a few."},
   {q:"She has very ___ patience with lazy people.",opts:["few","little","many"],ans:1,tr:"'patience' sayılamaz + neredeyse yok -> little."},
   {q:"Would you like ___ tea?",opts:["any","some","many"],ans:1,tr:"Kibar teklif/olumlu -> some."},
   {q:"We didn't have ___ money left after the trip.",opts:["much","many","a lot"],ans:0,tr:"Olumsuz + sayılamaz -> much."}]},
 {id:'gr_x5_linking_devices',lv:'B1',title:'Linking Devices (and / but / so / because)',
  exp:"Bağlaçlar cümleler arasında ilişki kurar: 'and' ekleme, 'but' karşıtlık, 'so' sonuç, 'because' neden, 'although' ödün, 'or' seçenek bildirir. Tuzak: 'because' nedeni, 'so' sonucu gösterir; karıştırma. 'although' ile 'but' aynı cümlede birlikte kullanılmaz.",
  items:[
   {q:"It was raining, ___ we stayed at home.",opts:["because","so","but"],ans:1,tr:"Sonuç -> so."},
   {q:"I was tired ___ I had worked all day.",opts:["because","so","or"],ans:0,tr:"Neden -> because."},
   {q:"She is rich ___ she is not happy.",opts:["so","but","because"],ans:1,tr:"Karşıtlık -> but."},
   {q:"___ it was cold, we went swimming.",opts:["Although","Because","So"],ans:0,tr:"Ödün/karşıtlık -> Although."},
   {q:"Would you like tea ___ coffee?",opts:["and","or","so"],ans:1,tr:"Seçenek -> or."},
   {q:"He studied hard, ___ he passed the exam.",opts:["because","but","and"],ans:2,tr:"Ekleme/sıralı sonuç -> and."}]},
 {id:'gr_x5_future_perfect',lv:'B1',title:'Future Perfect (will have done)',
  exp:"Gelecekte belirli bir andan ÖNCE tamamlanmış olacak eylemler için 'will have + V3' kullanılır: By 2030, they will have finished the bridge. Genellikle 'by + zaman' veya 'by the time ...' ifadeleriyle gelir. Tuzak: 'by the time' yan cümlesinde gelecek değil GENİŞ zaman kullanılır (By the time you arrive, I will have left).",
  items:[
   {q:"By next June, I ___ my degree.",opts:["will finish","will have finished","finish"],ans:1,tr:"Gelecekte bir andan önce tamamlanır -> will have finished."},
   {q:"By the time you ___ home, we will have eaten.",opts:["will get","get","got"],ans:1,tr:"'by the time' yan cümlesi geniş zaman -> get."},
   {q:"They ___ the report by Friday.",opts:["will have written","will write","have written"],ans:0,tr:"'by Friday' + tamamlanmışlık -> will have written."},
   {q:"In two hours, the train ___ the city.",opts:["will have reached","reaches","is reaching"],ans:0,tr:"Belirli andan önce tamamlanır -> will have reached."},
   {q:"By the end of the year, she ___ here for a decade.",opts:["will work","will have worked","works"],ans:1,tr:"Bir noktaya kadar süregelmiş -> will have worked."},
   {q:"By midnight, they ___ all the tickets.",opts:["sell","will have sold","sold"],ans:1,tr:"Gece yarısından önce tamamlanmış -> will have sold."}]},
 {id:'gr_x5_causatives',lv:'B2',title:'Causatives (have / get something done)',
  exp:"Bir işi başkasına yaptırmayı anlatmak için 'have/get + nesne + V3' kullanılır: I had my car repaired (arabamı tamir ettirdim). 'get' daha gündelik. Kişiye yaptırma için 'have somebody do' veya 'get somebody to do' kalıbı vardır. Tuzak: 'I repaired my car' kendin yaptın demektir; başkasına yaptırdıysan 'had it repaired' de.",
  items:[
   {q:"I'm going to ___ my hair cut tomorrow.",opts:["have","make","do"],ans:0,tr:"Yaptırma -> have ... cut."},
   {q:"She had the kitchen ___ last month.",opts:["paint","painted","painting"],ans:1,tr:"have + nesne + V3 -> painted."},
   {q:"We need to get the windows ___.",opts:["cleaned","clean","cleaning"],ans:0,tr:"get + nesne + V3 -> cleaned."},
   {q:"He had the mechanic ___ the engine.",opts:["check","to check","checked"],ans:0,tr:"have somebody do -> check (yalın)."},
   {q:"They got an expert ___ the painting.",opts:["examine","to examine","examined"],ans:1,tr:"get somebody to do -> to examine."},
   {q:"I must have these documents ___ today.",opts:["sign","signed","signing"],ans:1,tr:"have + nesne + V3 -> signed."}]},
 {id:'gr_x5_modals_deduction',lv:'B2',title:"Modals of Deduction (must / might / can't)",
  exp:"Çıkarım yaparken: kesin olumlu -> 'must' (He must be tired); olası -> 'might/may/could'; kesin olumsuz -> 'can't' (She can't be at home). Geçmiş için 'must have / might have / can't have + V3'. Tuzak: olumsuz kesin çıkarımda 'mustn't' değil 'can't' kullanılır (He can't be the thief).",
  items:[
   {q:"The lights are off; they ___ be asleep.",opts:["must","can't","might not"],ans:0,tr:"Kesin olumlu çıkarım -> must."},
   {q:"She isn't answering; she ___ be busy.",opts:["can't","might","mustn't"],ans:1,tr:"Olasılık -> might."},
   {q:"You ___ be serious! That's impossible.",opts:["must","can't","may"],ans:1,tr:"Kesin olumsuz çıkarım -> can't."},
   {q:"He ___ have missed the bus; that's why he's late.",opts:["can't","might","must"],ans:2,tr:"Geçmiş kesin çıkarım -> must have."},
   {q:"They ___ have heard the news yet; they look calm.",opts:["can't","must","should"],ans:0,tr:"Geçmiş kesin olumsuz -> can't have."},
   {q:"Nobody answered. They ___ have gone out.",opts:["might","can't","mustn't"],ans:0,tr:"Geçmiş olasılık -> might have."}]},
 {id:'gr_x5_noun_clauses',lv:'B2',title:'Noun Clauses (that / wh- / if-whether)',
  exp:"İsim cümlecikleri özne ya da nesne yerine geçer: I know that he is right. Soru sözcükleriyle gelenlerde DÜZ diziliş kullanılır (I don't know where she lives, 'does she live' değil). Evet/hayır soruları 'if/whether' ile aktarılır. Tuzak: gömülü soruda yardımcı fiil-özne devrik olmaz.",
  items:[
   {q:"Do you know ___ the museum opens?",opts:["when does","when","what time does"],ans:1,tr:"Gömülü soru düz diziliş -> when (+ özne + fiil)."},
   {q:"I'm not sure ___ he will come or not.",opts:["that","whether","what"],ans:1,tr:"Evet/hayır gömülü soru -> whether."},
   {q:"She told me ___ she was tired.",opts:["that","what","if"],ans:0,tr:"Bildirme cümleciği -> that."},
   {q:"Can you tell me where ___?",opts:["is the station","the station is","does the station"],ans:1,tr:"Gömülü soru -> the station is (düz)."},
   {q:"___ he said surprised everyone.",opts:["What","That","If"],ans:0,tr:"Özne işlevli isim cümleciği -> What."},
   {q:"I wonder ___ the test will be difficult.",opts:["that","whether","what"],ans:1,tr:"Belirsiz evet/hayır -> whether."}]},
 {id:'gr_x5_participle_clauses',lv:'C1',title:'Participle Clauses',
  exp:"İki cümleyi kısaltmak için ortaç kullanılır. Etken/eşzamanlı için '-ing' (Opening the door, she smiled = As she opened ...). Edilgen/önce biten için '-ed/V3' (Built in 1900, the house ...). Neden de gösterebilir (Feeling tired, he left). Tuzak: ortacın öznesi ana cümlenin öznesiyle AYNI olmalı; aksi halde 'dangling' hata olur.",
  items:[
   {q:"___ the letter, she began to cry.",opts:["Reading","Read","To read"],ans:0,tr:"Etken eşzamanlı -> Reading (= As she read)."},
   {q:"___ in 1920, the bridge is still in use.",opts:["Building","Built","To build"],ans:1,tr:"Edilgen/önce biten -> Built."},
   {q:"___ tired, he went straight to bed.",opts:["Feeling","Felt","To feel"],ans:0,tr:"Neden, etken -> Feeling."},
   {q:"The man ___ in the corner is my uncle.",opts:["sat","sitting","to sit"],ans:1,tr:"Etken, ismi niteler -> sitting."},
   {q:"___ by the noise, the baby woke up.",opts:["Disturbing","Disturbed","Disturb"],ans:1,tr:"Edilgen -> Disturbed."},
   {q:"___ what to say, she stayed silent.",opts:["Not knowing","Not known","Don't know"],ans:0,tr:"Etken olumsuz ortaç -> Not knowing."}]},
 {id:'gr_x5_cleft_sentences',lv:'B2',title:'Cleft Sentences (It is / What ...)',
  exp:"Bir ögeyi vurgulamak için cümle ikiye bölünür. 'It + be + vurgulanan + that/who ...' (It was John who broke it). 'What + cümle + be ...' (What I need is a holiday). Tuzak: 'It was ... that' kalıbında vurgulanan nesne de olsa 'that' kullanılır; özneyse 'who' de olabilir.",
  items:[
   {q:"___ John who solved the problem.",opts:["It was","There was","That was"],ans:0,tr:"Vurgu kalıbı -> It was ... who."},
   {q:"___ I really want is some peace and quiet.",opts:["That","What","It"],ans:1,tr:"'What' yarık cümle -> What I want is ..."},
   {q:"It was in Paris ___ they first met.",opts:["that","what","which"],ans:0,tr:"It + be + yer + that -> that."},
   {q:"___ surprised me was his honesty.",opts:["What","It","That"],ans:0,tr:"Özne vurgusu -> What ... was."},
   {q:"It is the climate ___ attracts tourists here.",opts:["who","that","what"],ans:1,tr:"Nesne/şey vurgusu -> that."},
   {q:"What she did ___ call the police immediately.",opts:["was","was to","did"],ans:1,tr:"'What ... was to + V1' kalıbı -> was to."}]},
 {id:'gr_x5_mixed_conditionals',lv:'C1',title:'Mixed Conditionals',
  exp:"Karma koşul cümleleri farklı zamanları birleştirir. Geçmişteki bir koşulun ŞİMDİKİ sonucu: If + had + V3, would + V1 (If I had studied medicine, I would be a doctor now). Şimdiki bir durumun GEÇMİŞTEKİ sonucu: If + past, would have + V3 (If I were brave, I would have told her). Tuzak: zaman göstergelerine (now, today / then, yesterday) dikkat ederek doğru yapıyı seç.",
  items:[
   {q:"If I had saved money, I ___ rich now.",opts:["would be","would have been","am"],ans:0,tr:"Geçmiş koşul + şimdiki sonuç -> would be."},
   {q:"If she were more careful, she ___ that mistake yesterday.",opts:["wouldn't make","wouldn't have made","didn't make"],ans:1,tr:"Şimdiki durum + geçmiş sonuç -> wouldn't have made."},
   {q:"If he hadn't missed the train, he ___ here by now.",opts:["would be","would have been","will be"],ans:0,tr:"Geçmiş koşul + şimdiki sonuç -> would be."},
   {q:"If I didn't love this job, I ___ it years ago.",opts:["would leave","would have left","left"],ans:1,tr:"Şimdiki durum + geçmiş sonuç -> would have left."},
   {q:"If they had taken the map, they ___ lost now.",opts:["wouldn't be","wouldn't have been","aren't"],ans:0,tr:"Geçmiş koşul + şimdiki sonuç -> wouldn't be."},
   {q:"If she spoke German, she ___ the job in Berlin last month.",opts:["would get","would have got","got"],ans:1,tr:"Şimdiki yeti + geçmiş sonuç -> would have got."}]},
 {id:'gr_x5_subjunctive',lv:'C1',title:'The Subjunctive (suggest / insist that ...)',
  exp:"Öneri, talep, ısrar bildiren fiil ve sıfatlardan sonra (suggest, insist, demand, recommend, essential, important) 'that' cümleciğinde fiilin YALIN hâli (base form) kullanılır, özne ne olursa olsun: I suggest that he be present. Olumsuzda 'that he not go'. Tuzak: 'he is/goes' değil, kişide bile 'be/go' yalın biçim gelir.",
  items:[
   {q:"The teacher insisted that he ___ on time.",opts:["is","be","was"],ans:1,tr:"insist + that + yalın fiil -> be."},
   {q:"It is essential that she ___ the rules.",opts:["follows","follow","followed"],ans:1,tr:"essential that + yalın -> follow."},
   {q:"I recommend that he ___ a doctor.",opts:["sees","see","saw"],ans:1,tr:"recommend that + yalın -> see."},
   {q:"They demanded that the report ___ ready by noon.",opts:["is","be","will be"],ans:1,tr:"demand that + yalın 'be'."},
   {q:"The doctor advised that he ___ not smoke.",opts:["does","do","did"],ans:1,tr:"Olumsuz subjunctive -> (do) not smoke; yalın 'do'."},
   {q:"It is important that everyone ___ the form.",opts:["sign","signs","signed"],ans:0,tr:"important that + yalın -> sign."}]}
];
content.grammar=content.grammar.concat(grammar);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const lv={};grammar.forEach(g=>lv[g.lv]=(lv[g.lv]||0)+1);
console.log('grammar x5 added:',grammar.length,'lv',JSON.stringify(lv));
