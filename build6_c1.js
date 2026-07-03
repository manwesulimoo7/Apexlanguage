const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,c,t){const x=arr[c];const r=arr.filter((_,i)=>i!==c);t=Math.max(0,Math.min(t,r.length));r.splice(t,0,x);return{arr:r,ans:t};}
const topics=[
 {id:'gr_x6_conditional_alternatives',lv:'C1',title:"Conditional Alternatives (unless / provided that / as long as)",
  exp:"'if' dışında da koşul kurulabilir. 'unless' = if not (eğer ...mazsa): I won't go unless you come. 'provided/providing that' ve 'as long as' = ancak ...şartıyla (koşul vurgusu). 'in case' = ihtimaline karşı, önlem (Take an umbrella in case it rains). 'but for + isim' = ...olmasaydı (resmî).\n\nÖrnekler:\n• You'll fail unless you study. (Çalışmazsan kalırsın.)\n• You can borrow it, provided that you return it. (İade etmen şartıyla ödünç alabilirsin.)\n• I'll help as long as you're honest. (Dürüst olduğun sürece yardım ederim.)\n• Take a map in case you get lost. (Kaybolma ihtimaline karşı harita al.)\n\nSık tuzaklar: 'unless' zaten olumsuzdur; ikinci olumsuz ekleme: 'unless you don't come' genelde YANLIŞ. 'in case' gelecek olay için geniş zaman ister: 'in case it will rain' değil 'in case it rains'.",
  items:[
   {q:"You won't pass ___ you work harder.",opts:["unless","provided","in case"],ans:0,tr:"'if not' anlamı -> unless."},
   {q:"I'll lend you the car ___ you drive carefully.",opts:["unless","as long as","in case"],ans:1,tr:"Koşul şartı -> as long as."},
   {q:"Take some cash ___ the card doesn't work.",opts:["unless","in case","provided"],ans:1,tr:"Önlem/ihtimal -> in case."},
   {q:"You may enter ___ that you show your ID.",opts:["unless","provided","in case"],ans:1,tr:"Şart -> provided that."},
   {q:"___ for your help, I would have failed.",opts:["But","Unless","In case"],ans:0,tr:"'...olmasaydı' -> But for."},
   {q:"We'll go out ___ it doesn't rain.",opts:["unless","as long as","but for"],ans:1,tr:"Koşul -> as long as it doesn't rain."},
   {q:"I won't call ___ it's an emergency.",opts:["unless","provided","in case"],ans:0,tr:"'if not' -> unless."},
   {q:"Bring a jacket in case it ___ cold.",opts:["will get","gets","got"],ans:1,tr:"'in case' + geniş zaman -> gets."}]},
 {id:'gr_x6_discourse_markers',lv:'C1',title:'Discourse Markers (however / moreover / on the other hand)',
  exp:"Söylem belirleyicileri cümleler ve fikirler arasında mantıksal ilişki kurar ve metne akıcılık verir. Karşıtlık: however, nevertheless, on the other hand. Ekleme: moreover, furthermore, in addition. Sonuç: therefore, consequently, as a result. Örnek verme: for instance. Yeniden ifade: in other words. Genellikle başta gelir ve virgülle ayrılır.\n\nÖrnekler:\n• The plan is risky. However, it may work. (Plan riskli. Yine de işe yarayabilir.)\n• It's cheap. Moreover, it's reliable. (Ucuz. Dahası, güvenilir.)\n• Sales fell; therefore, prices rose. (Satışlar düştü; bu nedenle fiyatlar arttı.)\n• He's talented. On the other hand, he's lazy. (Yetenekli. Öte yandan tembel.)\n\nSık tuzaklar: 'however' bir bağlaç değildir; iki cümleyi virgülle bağlayamaz ('..., however, ...' ya da noktalı virgül gerekir). Anlam ayrımına dikkat: 'moreover' ekler, 'however' zıtlaştırır; karıştırma.",
  items:[
   {q:"The hotel was cheap. ___ , it was very clean.",opts:["However","Moreover","Therefore"],ans:1,tr:"Olumlu ekleme -> Moreover."},
   {q:"He studied hard. ___ , he failed the exam.",opts:["Moreover","However","In addition"],ans:1,tr:"Beklenmedik karşıtlık -> However."},
   {q:"It rained all day; ___ , the match was cancelled.",opts:["therefore","however","for instance"],ans:0,tr:"Sonuç -> therefore."},
   {q:"City life is exciting. ___ , it can be stressful.",opts:["Moreover","On the other hand","Therefore"],ans:1,tr:"Karşı görüş -> On the other hand."},
   {q:"Many animals migrate; ___ , birds fly south.",opts:["however","for instance","therefore"],ans:1,tr:"Örnek verme -> for instance."},
   {q:"The results were poor. ___ , we must try again.",opts:["Consequently","However","For example"],ans:0,tr:"Sonuç -> Consequently."},
   {q:"She's qualified. ___ , she has experience.",opts:["However","Furthermore","On the other hand"],ans:1,tr:"Ekleme -> Furthermore."},
   {q:"He said little; ___ , he agreed.",opts:["in other words","moreover","however"],ans:0,tr:"Yeniden ifade -> in other words."}]},
 {id:'gr_x6_advanced_relatives',lv:'C1',title:'Advanced Relative Clauses (of which / of whom / prepositional)',
  exp:"İleri düzey ilgi cümleleri, miktar ve edat yapılarını içerir. 'quantifier + of + whom/which' resmî yapılarda kullanılır: 'many of whom', 'some of which', 'the roof of which'. Edatlar resmî dilde ilgi zamirinden ÖNCE gelebilir: 'the man to whom I spoke' (gündelikte: the man I spoke to). 'whose' iyelik bildirir.\n\nÖrnekler:\n• He has three sisters, all of whom are doctors. (Üçü de doktor olan üç kız kardeşi var.)\n• She wrote ten books, some of which were bestsellers. (Bazıları çok satan on kitap yazdı.)\n• This is the house in which I grew up. (İçinde büyüdüğüm ev bu.)\n• The committee, the head of which resigned, met today. (Başkanı istifa eden komite bugün toplandı.)\n\nSık tuzaklar: İnsan için 'of whom', nesne için 'of which' kullan; 'of who' YANLIŞ. Edat + whom/which yapısında 'that' kullanılamaz: 'in that' değil 'in which'.",
  items:[
   {q:"He has many friends, most of ___ live abroad.",opts:["who","whom","which"],ans:1,tr:"İnsan + of -> of whom."},
   {q:"She gave three reasons, none of ___ convinced me.",opts:["whom","which","that"],ans:1,tr:"Nesne + of -> of which."},
   {q:"This is the tool with ___ they cut the metal.",opts:["that","which","whom"],ans:1,tr:"Edat + nesne -> with which."},
   {q:"The author, ___ new novel won a prize, is here.",opts:["who","whose","which"],ans:1,tr:"İyelik -> whose."},
   {q:"He interviewed ten people, two of ___ were experts.",opts:["which","whom","who"],ans:1,tr:"İnsan + of -> of whom."},
   {q:"The building, the roof of ___ collapsed, is closed.",opts:["whom","which","that"],ans:1,tr:"Nesne iyeliği -> of which."},
   {q:"That is the colleague to ___ I owe my success.",opts:["who","whom","which"],ans:1,tr:"Edat + insan -> to whom."},
   {q:"They made offers, all of ___ we refused.",opts:["whom","which","that"],ans:1,tr:"Nesne + of -> of which."}]},
 {id:'gr_x6_emphatic_structures',lv:'C1',title:'Emphatic Structures (do-emphasis & fronting)',
  exp:"Bir ögeyi vurgulamak için birkaç yol vardır. 1) Olumlu cümlede 'do/does/did' yardımcı fiili vurgu için eklenir: 'I do like it' (gerçekten severim). 2) Öne çekme (fronting): normalde sonda olan bir öge cümle başına alınır: 'Never have I seen...' (devrikle). 3) Zarf öbeğinin öne alınması: 'Down came the rain'.\n\nÖrnekler:\n• I do appreciate your help. (Yardımını gerçekten takdir ediyorum.)\n• She did tell me, but I forgot. (Bana söyledi gerçekten, ama unuttum.)\n• Little did they know what was coming. (Neyin geleceğini pek bilmiyorlardı.)\n• Only then did I understand. (Ancak o zaman anladım.)\n\nSık tuzaklar: 'do' vurgusundan sonra ana fiil YALIN kalır: 'I do liked it' değil 'I do like it'. Olumsuz/sınırlayıcı öge öne alınınca devrik yapı gerekir: 'Never I have' değil 'Never have I'.",
  items:[
   {q:"I ___ believe you; I'm not lying.",opts:["do","am","did"],ans:0,tr:"Vurgu, geniş zaman -> do believe."},
   {q:"She ___ warn us, but we ignored her.",opts:["did","does","do"],ans:0,tr:"Geçmiş vurgu -> did warn."},
   {q:"Little ___ he know that he had won.",opts:["he did","did he","does he"],ans:1,tr:"Öne çekme + devrik -> did he."},
   {q:"Only after the test ___ I relax.",opts:["did","do","was"],ans:0,tr:"'Only after' + devrik -> did I."},
   {q:"He does ___ hard every single day.",opts:["works","work","working"],ans:1,tr:"do/does + yalın fiil -> work."},
   {q:"Never ___ such a mess in my life.",opts:["I have seen","have I seen","I saw"],ans:1,tr:"'Never' başta -> devrik: have I seen."},
   {q:"We ___ enjoy the concert, despite the rain.",opts:["did","were","do"],ans:0,tr:"Geçmiş vurgu -> did enjoy."},
   {q:"Rarely ___ we see such talent.",opts:["do","we do","did we saw"],ans:0,tr:"'Rarely' başta -> do we see."}]},
 {id:'gr_x6_future_in_past',lv:'C1',title:'Future in the Past (was going to / would)',
  exp:"Geçmişte bir noktadan bakılarak, o ana göre GELECEKTE olan bir eylemi anlatmak için 'was/were going to + V1', 'would + V1' ve 'was/were to + V1' kullanılır. Sıklıkla gerçekleşmeyen planları da anlatır. Dolaylı anlatımda gelecek 'will → would' olur.\n\nÖrnekler:\n• I was going to call you, but I forgot. (Seni arayacaktım ama unuttum.)\n• She said she would arrive at noon. (Öğlen varacağını söyledi.)\n• They were to meet at six, but he was late. (Altıda buluşacaklardı ama o geç kaldı.)\n• Little did he know he would become famous. (Ünlü olacağını pek bilmiyordu.)\n\nSık tuzaklar: Gerçekleşmemiş niyet için 'was going to' idealdir: 'I went to call' değil 'I was going to call'. Dolaylı anlatımda 'will' kalmaz, 'would' olur: 'He said he will come' → 'He said he would come'.",
  items:[
   {q:"I ___ going to help, but I ran out of time.",opts:["was","did","would"],ans:0,tr:"Gerçekleşmemiş niyet -> was going to."},
   {q:"She promised she ___ return the book.",opts:["will","would","was"],ans:1,tr:"Dolaylı gelecek -> would."},
   {q:"They were ___ get married, but they split up.",opts:["going to","would","to going"],ans:0,tr:"Gerçekleşmemiş plan -> going to."},
   {q:"He said the train ___ leave at nine.",opts:["will","would","was"],ans:1,tr:"Aktarımda will -> would."},
   {q:"We ___ to meet at noon, but she cancelled.",opts:["were","was","would"],ans:0,tr:"'were to' planı -> were to meet."},
   {q:"Little did I know I ___ regret that choice.",opts:["will","would","was"],ans:1,tr:"Geçmişten bakılan gelecek -> would."},
   {q:"I knew she ___ be late; she always is.",opts:["will","would","was"],ans:1,tr:"Geçmişte öngörülen gelecek -> would."},
   {q:"He ___ going to apologise, but he changed his mind.",opts:["was","would","did"],ans:0,tr:"Gerçekleşmemiş niyet -> was going to."}]},
 {id:'gr_x6_get_passive',lv:'C1',title:'The Get-Passive & Passive Variations',
  exp:"Edilgen çatı 'be + V3' dışında 'get + V3' ile de kurulabilir. 'get-passive' daha gündelik ve genellikle ani, beklenmedik veya olumsuz olaylar için kullanılır: 'get broken, get hurt, get married, get caught'. Ayrıca 'have/get something done' (ettirgen) ve 'need + -ing' (edilgen anlamlı) yapıları vardır.\n\nÖrnekler:\n• My phone got stolen on the bus. (Telefonum otobüste çalındı.)\n• They got married last spring. (Geçen ilkbaharda evlendiler.)\n• He got promoted after a year. (Bir yıl sonra terfi etti.)\n• This shirt needs washing. (Bu gömleğin yıkanması gerek. = needs to be washed)\n\nSık tuzaklar: 'get-passive' resmî yazıda seyrek kullanılır; akademik dilde 'be-passive' tercih et. 'get' sonrası V3 gelir: 'got break' değil 'got broken'. 'need + -ing' edilgen anlam taşır: 'needs washing' = 'needs to be washed'.",
  items:[
   {q:"Careful! You might ___ hurt.",opts:["get","be got","being"],ans:0,tr:"get-passive -> get hurt."},
   {q:"Our car got ___ into last night.",opts:["break","broken","breaking"],ans:1,tr:"get + V3 -> broken."},
   {q:"They ___ married in a small church.",opts:["got","get","were get"],ans:0,tr:"get-passive geçmiş -> got married."},
   {q:"The window needs ___ ; it's filthy.",opts:["clean","cleaning","to clean"],ans:1,tr:"need + -ing (edilgen anlam) -> cleaning."},
   {q:"He got ___ cheating in the exam.",opts:["catch","caught","catching"],ans:1,tr:"get + V3 -> caught."},
   {q:"Thousands of homes got ___ in the flood.",opts:["destroy","destroyed","destroying"],ans:1,tr:"get + V3 -> destroyed."},
   {q:"Her wallet ___ stolen at the station.",opts:["got","get","being"],ans:0,tr:"get-passive -> got stolen."},
   {q:"This report needs ___ before Friday.",opts:["finish","finishing","to finishing"],ans:1,tr:"need + -ing -> finishing."}]}
];
let ctr=0;for(const t of topics)for(const q of t.items){const r=place(q.opts,q.ans,ctr%3);q.opts=r.arr;q.ans=r.ans;ctr++;}
content.grammar=content.grammar.concat(topics);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const ans={};topics.forEach(t=>t.items.forEach(q=>ans[q.ans]=(ans[q.ans]||0)+1));
console.log('C1 grammar added:',topics.length,'ans',JSON.stringify(ans));
