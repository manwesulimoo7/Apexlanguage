const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const writing=[
 {id:'wr_x5_thankyou_email',lv:'B1',exam:['GENEL'],type:'Teşekkür E-postası',minWords:80,
  prompt:"A friend helped you move into your new flat last weekend. Write a short email to thank them and invite them for dinner.",
  tips:"Samimi bir selamlamayla başla (Hi / Dear). Tam olarak ne için teşekkür ettiğini belirt, yardımın sana nasıl iyi geldiğini söyle, küçük bir karşılık (akşam yemeği daveti) sun ve sıcak bir kapanış yaz.",
  structure:"Selamlama -> teşekkür + neden -> kısa duygu/yorum -> davet -> sıcak kapanış."},
 {id:'wr_x5_apology_letter',lv:'B1',exam:['GENEL'],type:'Özür Mektubu',minWords:100,
  prompt:"You missed your friend's birthday party. Write a letter to apologise, explain why you could not come, and suggest meeting soon.",
  tips:"Özrünü açıkça ve içtenlikle ifade et (I'm really sorry ...). Gelememe nedenini kısaca açıkla, üzüldüğünü belirt ve telafi için somut bir öneri (buluşma) sun. Nazik bir kapanışla bitir.",
  structure:"Selamlama -> özür -> açıklama (neden) -> üzüntü ifadesi -> telafi önerisi -> kapanış."},
 {id:'wr_x5_event_announcement',lv:'B1',exam:['GENEL'],type:'Etkinlik Duyurusu',minWords:80,
  prompt:"Your class is organising a charity book sale at school. Write a short announcement to inform other students about it.",
  tips:"Net bir başlıkla başla. Etkinliğin ne olduğunu, tarihini, yerini ve saatini açıkça yaz. İnsanları neden katılmaya çağırdığını belirt (iyi bir amaç). Kısa, açık ve davetkâr bir dil kullan.",
  structure:"Başlık -> etkinlik nedir -> tarih/yer/saat -> neden katılmalı -> kapanış çağrısı."},
 {id:'wr_x5_advice_email',lv:'B1',exam:['GENEL'],type:'Tavsiye E-postası',minWords:100,
  prompt:"A friend from abroad is going to visit your city for three days and asks what to do. Write an email giving advice.",
  tips:"Selamlamadan sonra arkadaşını mutlu et (I'm so excited ...). Görülecek iki-üç yer öner, neden tavsiye ettiğini kısaca açıkla, pratik bir ipucu (hava, ulaşım) ekle ve görüşmeyi dört gözle beklediğini söyle.",
  structure:"Selamlama -> heyecan ifadesi -> öneri 1-2-3 + kısa neden -> pratik ipucu -> sıcak kapanış."},
 {id:'wr_x5_blog_post',lv:'B2',exam:['GENEL'],type:'Blog Yazısı',minWords:150,
  prompt:"Write a blog post about a hobby that has changed your life, explaining what it is and why you recommend it to others.",
  tips:"Okuru çeken bir girişle başla. Hobiyi tanıt, sana neler kattığını somut örneklerle anlat, başkalarının da neden denemesi gerektiğini söyle. Samimi ama düzenli bir ton kullan; okuyucuya doğrudan seslen.",
  structure:"İlgi çekici giriş -> hobi nedir -> sana etkisi + örnek -> okuyucuya öneri -> kapanış sorusu/çağrısı."},
 {id:'wr_x5_advantages_essay',lv:'B2',exam:['IELTS'],type:'Avantaj-Dezavantaj Denemesi',minWords:250,
  prompt:"More and more people are working from home rather than in an office. Do the advantages of this development outweigh the disadvantages?",
  tips:"Giriş'te konuyu parafraz et ve duruşunu belirt. Bir gövde paragrafında avantajları, diğerinde dezavantajları örneklerle sun. Sonuçta hangisinin ağır bastığına dair net bir yargı ver. Akademik bağlaçlar (on the one hand, however) kullan.",
  structure:"Giriş (parafraz + tez) -> avantajlar + örnek -> dezavantajlar + örnek -> tartılı sonuç."},
 {id:'wr_x5_ielts_process',lv:'B2',exam:['IELTS'],type:'IELTS Task 1 Süreç Betimleme',minWords:150,
  prompt:"The diagram below shows how paper is recycled. Summarise the information by describing the main stages of the process.",
  tips:"Giriş'te süreci kendi cümlenle tanıt ve kaç aşamadan oluştuğunu söyle. Aşamaları sırayla ve edilgen yapıyla anlat (is collected, is cleaned). Sıra bağlaçları kullan (first, then, after that, finally). Görüş ekleme; yalnızca betimle.",
  structure:"Giriş (sürecin tanıtımı) -> genel bakış (kaç aşama) -> aşamalar sırayla -> son ürün/kapanış."},
 {id:'wr_x5_formal_report',lv:'C1',exam:['GENEL'],type:'Biçimsel Rapor',minWords:200,
  prompt:"Your manager has asked you to assess the staff canteen and suggest improvements. Write a formal report with findings and recommendations.",
  tips:"Başlık ve kısa bir amaç cümlesiyle başla. Bulguları başlıklar altında nesnel biçimde sun (yemek kalitesi, fiyat, ortam). Her bulguyu somut gözleme dayandır ve net, uygulanabilir öneriler ver. Resmî, kişisellikten uzak bir dil kullan.",
  structure:"Başlık + amaç -> bulgular (alt başlıklarla) -> değerlendirme -> öneriler -> kısa kapanış."},
 {id:'wr_x5_problem_solution',lv:'C1',exam:['IELTS'],type:'IELTS Task 2 Problem-Çözüm Denemesi',minWords:250,
  prompt:"Traffic congestion is becoming a serious problem in many large cities. What are the causes of this problem, and what measures could be taken to solve it?",
  tips:"Giriş'te sorunu parafraz et ve denemenin yapısını ima et. Bir gövde paragrafında nedenleri, diğerinde çözümleri ele al; her çözümü olası sonucuyla birlikte açıkla. Sonuçta en etkili çözümü vurgula. Resmî ve tutarlı bir ton koru.",
  structure:"Giriş (parafraz) -> nedenler + açıklama -> çözümler + olası sonuç -> sonuç."},
 {id:'wr_x5_toefl_preference',lv:'C1',exam:['TOEFL'],type:'TOEFL Bağımsız Deneme (Tercih)',minWords:250,
  prompt:"Some people prefer to plan their activities for their free time very carefully. Others choose not to make any plans at all. Which do you prefer, and why?",
  tips:"Net bir tercih belirterek başla. İki-üç güçlü gerekçeyi ayrı paragraflarda örneklerle geliştir; kişisel deneyim örnekleri kabul edilir. Karşı tercihi kısaca kabul edip neden seninkini yeğlediğini açıkla. Sonuçta tercihini yinele.",
  structure:"Giriş (tercih) -> gerekçe 1 + örnek -> gerekçe 2 + örnek -> karşı tercihe kısa değini -> sonuç."}
];
content.writing=content.writing.concat(writing);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const lv={},ex={};writing.forEach(w=>{lv[w.lv]=(lv[w.lv]||0)+1;w.exam.forEach(e=>ex[e]=(ex[e]||0)+1);});
console.log('writing x5 added:',writing.length,'lv',JSON.stringify(lv),'exam',JSON.stringify(ex));
