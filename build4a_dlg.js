const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const dialogue=[
 {id:'dlg_x4_grant_review',lv:'C1',field:'fen',lines:[
  {sp:'A',t:"The reviewers liked our method but said the sample was too small to prove anything."},
  {sp:'B',t:"____"},
  {sp:'A',t:"You're right. If we run the study again with more participants, the results will carry far more weight."}],
  blankIndex:1,opts:["Then there's nothing we can do but give up the project.","So perhaps the answer is to repeat the work on a larger group before we draw conclusions.","That means our method must have been completely wrong.","I suppose the reviewers simply didn't read the proposal."],ans:1,
  tr:"A küçük örneklem eleştirisini aktarır; sonra 'daha çok katılımcıyla tekrar' fikrini onaylar. Doğru replik, sonuca varmadan çalışmayı daha büyük grupta tekrarlamayı önererek bu akışı hazırlar.",en:"A reports the small-sample criticism, then agrees to repeat with more participants; the correct line proposes exactly that, fitting the flow."},
 {id:'dlg_x4_clinic_followup',lv:'C1',field:'saglik',lines:[
  {sp:'A',t:"The patient says the new diet hasn't lowered her blood pressure at all."},
  {sp:'B',t:"____"},
  {sp:'A',t:"Good point. I'll check how closely she's actually been following it before we change the plan."}],
  blankIndex:1,opts:["Then the diet clearly doesn't work and we should stop it.","Before we conclude that, it might be worth finding out how strictly she's keeping to it.","Her blood pressure must be impossible to treat.","We should double her medication immediately."],ans:1,
  tr:"A diyetin tansiyonu düşürmediğini söyler; sonra 'ne kadar uyduğunu kontrol edeceğim' der. Doğru replik, sonuca varmadan uyumu kontrol etmeyi önererek bunu hazırlar.",en:"A says the diet hasn't helped, then decides to check adherence; the correct line proposes checking how strictly she follows it."},
 {id:'dlg_x4_city_planning',lv:'C1',field:'sosyal',lines:[
  {sp:'A',t:"Residents keep complaining about traffic, even though we've widened two of the main roads."},
  {sp:'B',t:"____"},
  {sp:'A',t:"That hadn't occurred to me. Maybe bigger roads just encourage more people to drive."}],
  blankIndex:1,opts:["Then we should widen every road in the city as fast as possible.","Perhaps wider roads are part of the problem, not the solution.","It clearly means the residents are exaggerating.","Traffic has nothing to do with the width of roads."],ans:1,
  tr:"A yolları genişletmesine rağmen şikâyetlerden yakınır; sonra 'büyük yollar daha çok araç çekebilir' der. Doğru replik, geniş yolların sorunun parçası olabileceğini söyleyerek bunu hazırlar.",en:"A complains despite widening roads, then realises bigger roads invite more cars; the correct line suggests wider roads are part of the problem."},
 {id:'dlg_x4_library_research',lv:'B2',field:'sosyal',lines:[
  {sp:'A',t:"I found a great website for my history project, so I'm just going to use that."},
  {sp:'B',t:"Be careful — anyone can put information online, true or not."},
  {sp:'A',t:"____"},
  {sp:'B',t:"Exactly. If two or three reliable sources agree, you can trust the fact much more."}],
  blankIndex:2,opts:["So you think one website is always enough for a project.","I see — so I should check the same facts in other sources too.","Then I shouldn't use the internet for research at all.","That means all websites are completely accurate."],ans:1,
  tr:"B internetteki bilginin doğru olmayabileceğini söyler; sonra 'birkaç güvenilir kaynak aynı şeyi söylerse güvenebilirsin' der. Doğru replik, aynı bilgiyi başka kaynaklarda doğrulamayı önererek bunu hazırlar.",en:"B warns online info may be false, then says agreement of several sources builds trust; the correct line proposes cross-checking in other sources."},
 {id:'dlg_x4_lab_safety',lv:'B2',field:'fen',lines:[
  {sp:'A',t:"Do I really need to wear goggles? I'm only mixing two harmless liquids."},
  {sp:'B',t:"____"},
  {sp:'A',t:"Fair enough. I suppose it's better to be safe even when nothing seems dangerous."}],
  blankIndex:1,opts:["No, goggles are a waste of time in this lab.","Even safe-looking reactions can splash, so it's wise to protect your eyes anyway.","You should never wear goggles when mixing liquids.","Goggles only matter when you work with fire."],ans:1,
  tr:"A gözlüğe gerek olmadığını ima eder; sonra 'tehlikesiz görünse de güvende olmak iyi' der. Doğru replik, güvenli görünen tepkimelerin bile sıçrayabileceğini söyleyerek bunu hazırlar.",en:"A doubts the need for goggles, then agrees safety is wise; the correct line notes even safe-looking reactions can splash."},
 {id:'dlg_x4_startup_pitch',lv:'C1',field:'sosyal',lines:[
  {sp:'A',t:"Investors love the idea, but they keep asking how we'll actually make money."},
  {sp:'B',t:"____"},
  {sp:'A',t:"You're right. A brilliant product is no use if we can't explain how it pays for itself."}],
  blankIndex:1,opts:["Then we should stop talking to investors altogether.","Maybe the problem is that we've described the product but not a clear plan for revenue.","It means the idea itself must be worthless.","Investors never care about how a company earns money."],ans:1,
  tr:"A yatırımcıların 'nasıl para kazanacaksınız' sorusunu aktarır; sonra 'ürün harika olsa da kendini nasıl ödediğini anlatmalıyız' der. Doğru replik, net gelir planının eksik olduğunu söyleyerek bunu hazırlar.",en:"A reports investors asking about revenue, then admits a great product needs a clear way to pay for itself; the correct line points to a missing revenue plan."},
 {id:'dlg_x4_diet_advice2',lv:'B2',field:'saglik',lines:[
  {sp:'A',t:"I've started skipping breakfast completely to lose weight faster."},
  {sp:'B',t:"____"},
  {sp:'A',t:"Oh, I didn't know that. So eating something in the morning might actually help?"}],
  blankIndex:1,opts:["Good idea; the body never needs food in the morning.","Be careful — for many people, skipping breakfast just leads to overeating later.","You should skip lunch and dinner too, then.","Breakfast has no effect on weight at all."],ans:1,
  tr:"A kahvaltıyı atladığını söyler; sonra 'sabah bir şey yemek aslında işe yarar mı?' diye sorar. Doğru replik, kahvaltıyı atlamanın ileride aşırı yemeye yol açabileceğini söyleyerek bunu hazırlar.",en:"A says they skip breakfast, then asks if eating in the morning helps; the correct line notes skipping breakfast often leads to later overeating."},
 {id:'dlg_x4_museum_tour',lv:'B2',field:'sosyal',lines:[
  {sp:'A',t:"This vase has almost no decoration. The plain ones must be the least valuable."},
  {sp:'B',t:"____"},
  {sp:'A',t:"Really? So a simple shape can tell historians more than a fancy one?"}],
  blankIndex:1,opts:["Yes, only decorated objects are worth studying.","Actually, plain everyday objects often tell us most about how ordinary people lived.","That's true; plain vases are always worthless.","Historians ignore anything without decoration."],ans:1,
  tr:"A süssüz vazoyu değersiz sanır; sonra 'basit şekil daha çok şey anlatabilir mi?' der. Doğru replik, sade gündelik nesnelerin sıradan yaşamı en iyi anlattığını söyleyerek bunu hazırlar.",en:"A assumes plain vases are worthless, then asks if a simple shape reveals more; the correct line notes plain everyday objects often reveal most about ordinary life."},
 {id:'dlg_x4_software_bug',lv:'C1',field:'fen',lines:[
  {sp:'A',t:"The app crashes only on some phones, so I think it's just those users' fault."},
  {sp:'B',t:"____"},
  {sp:'A',t:"You may be right. If it happens on a whole brand of phone, the problem is probably ours."}],
  blankIndex:1,opts:["Yes, it's definitely the users who are doing something wrong.","I'd be careful — if it always fails on one type of phone, that points to our code, not the users.","Then we should ignore those users completely.","Crashes never tell us anything about the software."],ans:1,
  tr:"A çökmeleri kullanıcılara yükler; sonra 'tüm bir marka telefonda oluyorsa sorun bizde' der. Doğru replik, belirli bir telefon türünde sürekli çökmenin kodu işaret ettiğini söyleyerek bunu hazırlar.",en:"A blames users, then concedes a whole phone brand failing points to their code; the correct line makes that very point."},
 {id:'dlg_x4_energy_bill',lv:'B2',field:'sosyal',lines:[
  {sp:'A',t:"My electricity bill doubled this winter, but I haven't bought any new devices."},
  {sp:'B',t:"____"},
  {sp:'A',t:"That makes sense. The heater has been on almost all day during the cold spell."}],
  blankIndex:1,opts:["Then the electricity company must be cheating you.","Heating usually uses far more power than gadgets, so the cold weather could explain it.","New devices are the only thing that raises a bill.","Your bill has nothing to do with the weather."],ans:1,
  tr:"A faturanın iki katına çıktığını ama yeni cihaz almadığını söyler; sonra 'soğukta ısıtıcı sürekli açıktı' der. Doğru replik, ısıtmanın cihazlardan çok güç çektiğini söyleyerek bunu hazırlar.",en:"A is puzzled by a doubled bill with no new devices, then notes the heater ran all day; the correct line explains heating uses far more power than gadgets."},
 {id:'dlg_x4_thesis_topic',lv:'C1',field:'sosyal',lines:[
  {sp:'A',t:"My thesis question covers the entire history of European trade. There's just so much to read."},
  {sp:'B',t:"____"},
  {sp:'A',t:"You're probably right. Focusing on one port over fifty years would be much more manageable."}],
  blankIndex:1,opts:["Then you should add even more centuries to be safe.","Perhaps the topic is simply too broad to handle in a single thesis.","It means you shouldn't write a thesis at all.","A narrow topic is always a bad idea."],ans:1,
  tr:"A tezinin tüm Avrupa ticaretini kapsadığını, çok okuma olduğunu söyler; sonra 'tek liman, elli yıl daha yönetilebilir' der. Doğru replik, konunun fazla geniş olduğunu söyleyerek bunu hazırlar.",en:"A says the thesis covers all European trade, too much to read, then agrees to narrow it; the correct line notes the topic is too broad."},
 {id:'dlg_x4_pharmacy',lv:'B2',field:'saglik',lines:[
  {sp:'A',t:"The label says take this medicine with food, but I always forget and take it on an empty stomach."},
  {sp:'B',t:"____"},
  {sp:'A',t:"I see. So eating first isn't just a suggestion; it actually protects my stomach."}],
  blankIndex:1,opts:["It doesn't matter at all when you take it.","That instruction is there for a reason — food can stop the medicine upsetting your stomach.","You should never eat before taking medicine.","Labels are usually wrong, so just ignore them."],ans:1,
  tr:"A ilacı aç karnına aldığını söyler; sonra 'önce yemek midemi koruyor' der. Doğru replik, talimatın boşuna olmadığını, yemeğin mideyi koruduğunu söyleyerek bunu hazırlar.",en:"A admits taking the medicine on an empty stomach, then realises eating protects the stomach; the correct line explains the instruction exists for that reason."},
 {id:'dlg_x4_translation_app',lv:'C1',field:'fen',lines:[
  {sp:'A',t:"This translation app is amazing. I'll just use it for the whole business contract."},
  {sp:'B',t:"____"},
  {sp:'A',t:"Good point. For something legal, one wrong word could cause real trouble."}],
  blankIndex:1,opts:["Yes, the app is perfect for legal documents.","I'd be careful — these apps still make subtle mistakes that matter a lot in a contract.","Then you never need a human translator again.","Legal documents are the easiest thing to translate."],ans:1,
  tr:"A çeviri uygulamasını sözleşme için kullanmak ister; sonra 'hukuki metinde tek yanlış kelime sorun olur' der. Doğru replik, uygulamaların sözleşmede önemli ince hatalar yaptığını söyleyerek bunu hazırlar.",en:"A wants to use the app for a contract, then notes one wrong legal word is risky; the correct line warns apps still make subtle, costly mistakes."},
 {id:'dlg_x4_volunteer_signup',lv:'B2',field:'sosyal',lines:[
  {sp:'A',t:"I signed up for five different volunteer groups, but I never seem to actually help any of them."},
  {sp:'B',t:"____"},
  {sp:'A',t:"You're right. I should probably commit to just one and give it my full attention."}],
  blankIndex:1,opts:["Then you should join several more groups at once.","Maybe you've simply taken on too many to give any of them real time.","It means volunteering is a waste of effort.","Helping one group is exactly the same as helping five."],ans:1,
  tr:"A beş gruba yazılıp hiçbirine yardım edemediğini söyler; sonra 'birine tam odaklanmalıyım' der. Doğru replik, aynı anda çok fazlasını üstlendiğini söyleyerek bunu hazırlar.",en:"A joined five groups but helps none, then decides to focus on one; the correct line notes they took on too many."},
 {id:'dlg_x4_field_dig',lv:'C1',field:'sosyal',lines:[
  {sp:'A',t:"We've dug all week and found only broken pottery, not a single coin or jewel."},
  {sp:'B',t:"____"},
  {sp:'A',t:"When you put it that way, those broken pots probably tell us more about daily life than treasure would."}],
  blankIndex:1,opts:["I agree; without treasure the whole dig was pointless.","I wouldn't be disappointed — everyday objects often reveal far more about how people actually lived.","Then we should stop digging this site at once.","Only gold is ever worth finding in archaeology."],ans:1,
  tr:"A sadece kırık çömlek bulduklarını söyler; sonra 'kırık çömlekler günlük yaşamı hazineden iyi anlatır' der. Doğru replik, gündelik nesnelerin yaşamı daha iyi anlattığını söyleyerek bunu hazırlar.",en:"A laments finding only broken pottery, then admits it reveals daily life better than treasure; the correct line stresses the value of everyday objects."}
];
content.dialogue=content.dialogue.concat(dialogue);
fs.writeFileSync(file,JSON.stringify(content,null,2));
console.log('dialogue x4 added:',dialogue.length,'total',content.dialogue.length);
