const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
function place(arr,c,t){const x=arr[c];const r=arr.filter((_,i)=>i!==c);t=Math.max(0,Math.min(t,r.length));r.splice(t,0,x);return{arr:r,ans:t};}
const topics=[
 {id:'gr_x6_presentperfect_vs_past',lv:'B1',title:'Present Perfect vs Past Simple',
  exp:"Past Simple (V2) geçmişte BİTMİŞ, zamanı belli eylemleri anlatır (yesterday, in 2010, last week). Present Perfect (have/has + V3) ise geçmişte olan ama şimdiyle bağı olan, zamanı belirsiz eylemleri anlatır; deneyim (ever/never), yeni bitmiş (just), süregelen durum (for/since) için kullanılır.\n\nÖrnekler:\n• I saw her yesterday. (Onu dün gördüm. — belirli geçmiş)\n• I have seen that film three times. (O filmi üç kez izledim. — deneyim)\n• She has lived here since 2015. (2015'ten beri burada yaşıyor. — süregelen)\n• Have you ever been to Rome? (Hiç Roma'ya gittin mi?)\n\nSık tuzaklar: Belirli geçmiş zaman zarfıyla present perfect kullanma: 'I have seen her yesterday' YANLIŞ, 'I saw her yesterday' doğru. 'for' süre (for two years), 'since' başlangıç noktası (since Monday) ile gelir.",
  items:[
   {q:"I ___ my keys. I can't find them anywhere.",opts:["lost","have lost","was losing"],ans:1,tr:"Şimdiye etkisi süren -> have lost."},
   {q:"She ___ to Paris last summer.",opts:["has gone","went","has been"],ans:1,tr:"Belirli geçmiş 'last summer' -> went."},
   {q:"We ___ here since 2010.",opts:["live","have lived","lived"],ans:1,tr:"'since' + süregelen -> have lived."},
   {q:"___ you ever eaten sushi?",opts:["Did","Have","Do"],ans:1,tr:"Deneyim (ever) -> Have you ever ...?"},
   {q:"He ___ his homework two hours ago.",opts:["has finished","finished","finishes"],ans:1,tr:"'two hours ago' belirli geçmiş -> finished."},
   {q:"They ___ just arrived at the airport.",opts:["have","did","were"],ans:0,tr:"'just' yeni bitmiş -> have just arrived."},
   {q:"I ___ this book for three days.",opts:["read","have had","had"],ans:1,tr:"'for three days' süre -> have had."},
   {q:"When ___ you buy your car?",opts:["have","did","do"],ans:1,tr:"'When' belirli zaman sorusu -> did."}]},
 {id:'gr_x6_past_perfect',lv:'B1',title:'Past Perfect (had done)',
  exp:"Past Perfect (had + V3), geçmişteki BİR olaydan DAHA ÖNCE tamamlanmış başka bir eylemi anlatır; iki geçmiş olayın sırasını netleştirir. Genellikle 'before, after, when, by the time' ile kullanılır. Önce olan eylem past perfect, sonra olan past simple biçimindedir.\n\nÖrnekler:\n• When I arrived, the train had already left. (Vardığımda tren çoktan kalkmıştı.)\n• She had finished dinner before he came. (O gelmeden önce yemeğini bitirmişti.)\n• They were tired because they had walked all day. (Bütün gün yürüdükleri için yorgundular.)\n• By the time we got there, the shop had closed. (Oraya vardığımızda dükkân kapanmıştı.)\n\nSık tuzaklar: Sadece tek bir geçmiş olay varsa past perfect gereksizdir; past simple yeterlidir. 'had'i tüm öznelerle kullan (I/he/they had). Sıra açıksa (and, then) genelde past simple tercih edilir.",
  items:[
   {q:"The film ___ before we arrived.",opts:["started","had started","starts"],ans:1,tr:"Önce olan eylem -> had started."},
   {q:"She was upset because she ___ the exam.",opts:["had failed","failed","fails"],ans:0,tr:"Daha önce olan neden -> had failed."},
   {q:"By the time I called, he ___ .",opts:["left","had left","leaves"],ans:1,tr:"'By the time' + önce biten -> had left."},
   {q:"After they ___ lunch, they went out.",opts:["had had","have had","has"],ans:0,tr:"'After' önce biten eylem -> had had."},
   {q:"I couldn't enter because I ___ my key.",opts:["forgot","had forgotten","forget"],ans:1,tr:"Daha önceki neden -> had forgotten."},
   {q:"When we got home, someone ___ the window.",opts:["had broken","broke","breaks"],ans:0,tr:"Varıştan önce olmuş -> had broken."},
   {q:"They had never ___ snow before that trip.",opts:["saw","seen","see"],ans:1,tr:"had + V3 -> seen."},
   {q:"The ground was wet; it ___ during the night.",opts:["rained","had rained","rains"],ans:1,tr:"Islaklıktan önceki eylem -> had rained."}]},
 {id:'gr_x6_used_to',lv:'B1',title:"'used to' for Past Habits",
  exp:"'used to + V1', geçmişte düzenli olan ama ARTIK OLMAYAN alışkanlıkları ve durumları anlatır. Olumsuz ve soruda 'did' devreye girer ve 'use to' biçimi (d'siz) kullanılır: didn't use to, Did you use to ...?\n\nÖrnekler:\n• I used to play football every weekend. (Eskiden her hafta sonu futbol oynardım.)\n• She used to have long hair. (Onun eskiden uzun saçı vardı.)\n• We didn't use to eat out much. (Eskiden pek dışarıda yemezdik.)\n• Did you use to live in the city? (Eskiden şehirde mi yaşardın?)\n\nSık tuzaklar: Olumsuz/soruda ikinci 'd'yi düşür: 'didn't used to' YANLIŞ, 'didn't use to' doğru. Şu anki alışkanlık için 'used to' kullanılmaz; onun yerine geniş zaman ve sıklık zarfı (usually) gelir. 'be used to + -ing' (alışkın olmak) farklı bir yapıdır.",
  items:[
   {q:"I ___ smoke, but I stopped years ago.",opts:["used to","use to","am used to"],ans:0,tr:"Bırakılmış alışkanlık -> used to."},
   {q:"She ___ have a dog when she was young.",opts:["use to","used to","uses to"],ans:1,tr:"Geçmiş durum -> used to."},
   {q:"We didn't ___ travel much.",opts:["used to","use to","using to"],ans:1,tr:"Olumsuzda -> use to."},
   {q:"___ you use to walk to school?",opts:["Did","Do","Were"],ans:0,tr:"Soru -> Did you use to ...?"},
   {q:"There ___ be a cinema here.",opts:["used to","use to","uses to"],ans:0,tr:"Geçmişte vardı, artık yok -> used to."},
   {q:"He didn't use ___ like vegetables.",opts:["to","-","for"],ans:0,tr:"'didn't use to' + fiil -> to like."},
   {q:"They ___ live in a small village.",opts:["used to","use to","are used to"],ans:0,tr:"Geçmiş alışkanlık -> used to."},
   {q:"I used ___ be afraid of the dark.",opts:["to","-","for"],ans:0,tr:"'used to' + yalın fiil -> to be."}]},
 {id:'gr_x6_present_perfect_continuous',lv:'B1',title:'Present Perfect Continuous (have been doing)',
  exp:"Present Perfect Continuous (have/has been + V-ing), geçmişte başlayıp ŞİMDİYE kadar SÜREN ya da yeni durmuş, sonucu görünen eylemleri vurgular. Eylemin ne kadar sürdüğüne odaklanır. 'for, since, all day, lately' ile sık kullanılır.\n\nÖrnekler:\n• I have been waiting for an hour. (Bir saattir bekliyorum.)\n• She has been studying since morning. (Sabahtan beri ders çalışıyor.)\n• It has been raining all day. (Bütün gün yağmur yağıyor.)\n• You look tired. Have you been running? (Yorgun görünüyorsun. Koşuyor muydun?)\n\nSık tuzaklar: Durum fiilleri (know, like, be) genelde bu yapıyı almaz. Tamamlanan MİKTAR/sonuç için Present Perfect (have done) daha uygundur: 'I have read three books' (kaç tane) vs 'I have been reading' (ne kadar süre). 'been' fiilini unutma.",
  items:[
   {q:"I ___ for you since two o'clock.",opts:["have waited","have been waiting","wait"],ans:1,tr:"Süregelen, süre vurgusu -> have been waiting."},
   {q:"She has ___ studying all afternoon.",opts:["been","being","be"],ans:0,tr:"have + been + V-ing -> been."},
   {q:"They have been ___ in the garden.",opts:["work","working","worked"],ans:1,tr:"been + V-ing -> working."},
   {q:"How long ___ you been learning English?",opts:["have","has","did"],ans:0,tr:"'you' -> have you been ...?"},
   {q:"It ___ raining since morning.",opts:["has been","have been","is"],ans:0,tr:"'It' 3. tekil -> has been."},
   {q:"He's tired because he ___ running.",opts:["has been","have been","is been"],ans:0,tr:"'he' -> has been running."},
   {q:"We ___ been trying to call you.",opts:["has","have","are"],ans:1,tr:"'We' -> have been."},
   {q:"My eyes hurt; I ___ reading for hours.",opts:["have been","am","was"],ans:0,tr:"Sonucu görünen süregelen eylem -> have been."}]},
 {id:'gr_x6_question_tags',lv:'B1',title:'Question Tags',
  exp:"Eklenti sorular (question tags) bir cümlenin sonuna eklenen kısa sorulardır; onay almak ya da teyit etmek için kullanılır. Kural: olumlu cümle → olumsuz tag, olumsuz cümle → olumlu tag. Cümledeki yardımcı fiil (veya 'be') tag'de tekrarlanır; yardımcı yoksa do/does/did kullanılır. Özne zamire dönüşür.\n\nÖrnekler:\n• You are coming, aren't you? (Geliyorsun, değil mi?)\n• She can swim, can't she? (O yüzebilir, değil mi?)\n• They don't like it, do they? (Onlar bunu sevmiyor, değil mi?)\n• He went home, didn't he? (Eve gitti, değil mi?)\n\nSık tuzaklar: Olumlu-olumsuz dengesini kur: 'You are ready, are you?' genelde YANLIŞ; 'aren't you?' doğru. 'I am' için tag 'aren't I?' olur. 'Let's' → shall we?; emir → will you?",
  items:[
   {q:"You're from Turkey, ___ ?",opts:["aren't you","are you","don't you"],ans:0,tr:"Olumlu cümle -> olumsuz tag: aren't you."},
   {q:"She can drive, ___ ?",opts:["can she","can't she","doesn't she"],ans:1,tr:"Olumlu + can -> can't she."},
   {q:"They don't smoke, ___ ?",opts:["do they","don't they","are they"],ans:0,tr:"Olumsuz cümle -> olumlu tag: do they."},
   {q:"He went out, ___ ?",opts:["didn't he","did he","doesn't he"],ans:0,tr:"Past simple olumlu -> didn't he."},
   {q:"It isn't cold today, ___ ?",opts:["isn't it","is it","does it"],ans:1,tr:"Olumsuz -> olumlu tag: is it."},
   {q:"We should leave now, ___ ?",opts:["should we","shouldn't we","do we"],ans:1,tr:"Olumlu should -> shouldn't we."},
   {q:"You haven't eaten, ___ ?",opts:["have you","haven't you","did you"],ans:0,tr:"Olumsuz perfect -> have you."},
   {q:"Let's go for a walk, ___ ?",opts:["will we","shall we","don't we"],ans:1,tr:"'Let's' -> shall we?"}]}
];
let ctr=0;for(const t of topics)for(const q of t.items){const r=place(q.opts,q.ans,ctr%3);q.opts=r.arr;q.ans=r.ans;ctr++;}
content.grammar=content.grammar.concat(topics);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const ans={};topics.forEach(t=>t.items.forEach(q=>ans[q.ans]=(ans[q.ans]||0)+1));
console.log('B1 grammar added:',topics.length,'ans',JSON.stringify(ans));
