const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const errorhunt=[
 {id:'eh_x4_recycling',lv:'B2',field:'fen',
  text:"Recycling have become an important part of modern life. Last year alone, our school collect more than two tonnes of paper for reuse. When we recycle glass and metal, we save energy and protect the environment at the same time. Such small actions, repeated by many people, can make a real difference to the planet in long term.",
  errors:[
   {find:"Recycling have become",fix:"Recycling has become",tr:"Özne-yüklem uyumu: 'Recycling' tekil sayılır, yardımcı fiil 'has' olmalı.",en:"Subject-verb agreement: 'Recycling' is singular, so it takes 'has'."},
   {find:"school collect more",fix:"school collected more",tr:"Zaman: 'Last year' geçmişi gösterir, fiil 'collected' (geçmiş zaman) olmalı.",en:"Tense: 'Last year' signals the past, so the verb must be 'collected'."},
   {find:"planet in long term",fix:"planet in the long term",tr:"Eksik tanımlık: kalıp 'in the long term' biçimindedir.",en:"Missing article: the fixed phrase is 'in the long term'."}]},
 {id:'eh_x4_exercise',lv:'B2',field:'saglik',
  text:"Doing regular exercise are one of the best ways to stay healthy. My doctor often tells me that I should move more and to sit less during the day. Even a short walk can improve your mood and is good for the heart. If we make exercise a habit while we are young, it becomes much easier to keep it up later of life.",
  errors:[
   {find:"exercise are one",fix:"exercise is one",tr:"Özne-yüklem uyumu: özne 'Doing regular exercise' tekildir, fiil 'is' olmalı.",en:"Subject-verb agreement: the subject 'Doing regular exercise' is singular, so 'is'."},
   {find:"more and to sit less",fix:"more and sit less",tr:"Koşut yapı: 'move' yalın fiille eşlenmeli; 'to' fazladır ('move more and sit less').",en:"Parallel structure: it should match 'move' with the bare verb; 'to' is wrong ('move more and sit less')."},
   {find:"later of life",fix:"later in life",tr:"Edat hatası: kalıp 'later in life' biçimindedir.",en:"Preposition error: the phrase is 'later in life'."}]},
 {id:'eh_x4_internet',lv:'B2',field:'sosyal',
  text:"The internet has change the way we find information completely. Twenty years ago, a student had to spend hours in a library, but now answers appears in seconds. Of course, not everything we read online is true, so we must always check our sources with care. Learning how to do this is one of the most important skill in the modern world.",
  errors:[
   {find:"has change the",fix:"has changed the",tr:"Zaman/ortaç: present perfect 'has' ile fiilin üçüncü hâli 'changed' kullanılır.",en:"Tense/participle: present perfect 'has' needs the past participle 'changed'."},
   {find:"answers appears in",fix:"answers appear in",tr:"Özne-yüklem uyumu: 'answers' çoğuldur, fiil 'appear' olmalı.",en:"Subject-verb agreement: 'answers' is plural, so 'appear'."},
   {find:"important skill in",fix:"important skills in",tr:"Sayı: 'one of the most important' kalıbından sonra çoğul 'skills' gelir.",en:"Number: 'one of the most important' must be followed by a plural, 'skills'."}]},
 {id:'eh_x4_sleep',lv:'B2',field:'saglik',
  text:"Getting enough sleep is more important than many people realizes. Last night I slept very badly, and today I cannot barely keep my eyes open. People who sleep less than six hours often feel tired and find it hard to concentrate in their work. Doctors say that going to bed at a regular time helps the body to rest properly.",
  errors:[
   {find:"many people realizes",fix:"many people realize",tr:"Özne-yüklem uyumu: 'people' çoğuldur, fiil 'realize' olmalı.",en:"Subject-verb agreement: 'people' is plural, so 'realize'."},
   {find:"cannot barely keep",fix:"can barely keep",tr:"Çifte olumsuzluk: 'barely' zaten olumsuzdur; 'cannot' yanlıştır, 'can barely' doğrudur.",en:"Double negative: 'barely' is already negative; it should be 'can barely', not 'cannot barely'."},
   {find:"concentrate in their work",fix:"concentrate on their work",tr:"Edat hatası: 'concentrate' fiili 'on' edatıyla kullanılır.",en:"Preposition error: 'concentrate' is used with 'on'."}]},
 {id:'eh_x4_climate',lv:'C1',field:'fen',
  text:"Scientists has warned for decades that the planet is growing warmer. The evidence, drawn from many independent sources, is now very difficult to deny. Since the nineteenth century, average temperatures rose steadily, and the rate of change is increasing rapid. If we do not act soon, future generations will inherit a world far less stable than the one we know today.",
  errors:[
   {find:"Scientists has warned",fix:"Scientists have warned",tr:"Özne-yüklem uyumu: 'Scientists' çoğuldur, yardımcı fiil 'have' olmalı.",en:"Subject-verb agreement: 'Scientists' is plural, so 'have'."},
   {find:"temperatures rose steadily",fix:"temperatures have risen steadily",tr:"Zaman: 'Since the nineteenth century' present perfect ister ('have risen').",en:"Tense: 'Since the nineteenth century' requires the present perfect ('have risen')."},
   {find:"increasing rapid",fix:"increasing rapidly",tr:"Kelime formu: fiili niteleyen sözcük zarf olmalı ('rapidly').",en:"Word form: the word modifying the verb must be an adverb ('rapidly')."}]},
 {id:'eh_x4_history',lv:'C1',field:'sosyal',
  text:"The study of history is not only about memorising dates and names. It help us to understand why societies change and how people in past lived their daily lives. A good historian must examine many sources, because a single document can gives a one-sided view of events. By comparing different accounts, we build a picture that is far more balanced than any one source alone.",
  errors:[
   {find:"It help us",fix:"It helps us",tr:"Özne-yüklem uyumu: özne 'It' tekildir, fiil 'helps' olmalı.",en:"Subject-verb agreement: the subject 'It' is singular, so 'helps'."},
   {find:"people in past lived",fix:"people in the past lived",tr:"Eksik tanımlık: kalıp 'in the past' biçimindedir.",en:"Missing article: the phrase is 'in the past'."},
   {find:"can gives a",fix:"can give a",tr:"Kip+fiil: 'can' kipinden sonra fiilin yalın hâli ('give') gelir.",en:"Modal + verb: after the modal 'can', use the base form 'give'."}]},
 {id:'eh_x4_handwashing',lv:'C1',field:'saglik',
  text:"Washing your hands properly is one of the simplest way to stop the spread of disease. For a long time, doctors did not understood why so many patients fell ill in hospitals. Then a careful physician noticed that washing the hands between visits dramatically reduced infections. Today this habit seem obvious, yet it took many years before the medical world accepted such a simple idea.",
  errors:[
   {find:"simplest way to stop",fix:"simplest ways to stop",tr:"Sayı: 'one of the simplest' kalıbından sonra çoğul 'ways' gelir.",en:"Number: 'one of the simplest' must be followed by a plural, 'ways'."},
   {find:"did not understood",fix:"did not understand",tr:"Yardımcı fiil+fiil: 'did' ile fiilin yalın hâli ('understand') kullanılır.",en:"Auxiliary + verb: with 'did', use the base form 'understand'."},
   {find:"habit seem obvious",fix:"habit seems obvious",tr:"Özne-yüklem uyumu: 'this habit' tekildir, fiil 'seems' olmalı.",en:"Subject-verb agreement: 'this habit' is singular, so 'seems'."}]},
 {id:'eh_x4_economy',lv:'C1',field:'sosyal',
  text:"When prices rise quickly, the money in people's pockets buy less than it did before. Economists call this problem inflation, and it can quickly damage trust in currency. Governments often respond by raising interest rates, which they hope will slow the economy. However, if they act too strong, they may cause the very recession that they were trying to avoid.",
  errors:[
   {find:"pockets buy less",fix:"pockets buys less",tr:"Özne-yüklem uyumu: gerçek özne 'the money' tekildir, fiil 'buys' olmalı.",en:"Subject-verb agreement: the real subject 'the money' is singular, so 'buys'."},
   {find:"trust in currency",fix:"trust in a currency",tr:"Eksik tanımlık: sayılabilir tekil 'currency' önünde 'a' gerekir.",en:"Missing article: the singular countable 'currency' needs 'a'."},
   {find:"act too strong",fix:"act too strongly",tr:"Kelime formu: fiili niteleyen sözcük zarf olmalı ('strongly').",en:"Word form: the word modifying the verb must be an adverb ('strongly')."}]},
 {id:'eh_x4_diet',lv:'C1',field:'saglik',
  text:"A balanced diet provide the body with everything it needs to work well. Many people believe that cutting out an entire food group is the fastest way to lose weight, but this often does more harm than good. Instead, doctors advise us eat a wide variety of foods every day. By making small, lasting changes, we are far more likely to stay healthy on the long run.",
  errors:[
   {find:"diet provide the",fix:"diet provides the",tr:"Özne-yüklem uyumu: 'A balanced diet' tekildir, fiil 'provides' olmalı.",en:"Subject-verb agreement: 'A balanced diet' is singular, so 'provides'."},
   {find:"advise us eat a",fix:"advise us to eat a",tr:"Fiil yapısı: 'advise somebody to do' kalıbında 'to' gerekir.",en:"Verb pattern: 'advise somebody to do' requires 'to'."},
   {find:"healthy on the long run",fix:"healthy in the long run",tr:"Edat hatası: kalıp 'in the long run' biçimindedir.",en:"Preposition error: the phrase is 'in the long run'."}]},
 {id:'eh_x4_technology',lv:'C1',field:'fen',
  text:"Over the past decade, smartphones has transformed the way we communicate. A device that was once used only for phone calls now lets us read the news and find our way across unfamiliar city. Yet these benefits come at a price, because we spend more time to look at screens than ever before. Some researchers worry that this constant habit is slowly changing how our brains work.",
  errors:[
   {find:"smartphones has transformed",fix:"smartphones have transformed",tr:"Özne-yüklem uyumu: 'smartphones' çoğuldur, yardımcı fiil 'have' olmalı.",en:"Subject-verb agreement: 'smartphones' is plural, so 'have'."},
   {find:"across unfamiliar city",fix:"across an unfamiliar city",tr:"Eksik tanımlık: sayılabilir tekil 'city' önünde 'an' gerekir.",en:"Missing article: the singular countable 'city' needs 'an'."},
   {find:"more time to look at",fix:"more time looking at",tr:"Fiil formu: 'spend time' yapısından sonra '-ing' (looking) gelir.",en:"Verb form: 'spend time' is followed by the -ing form ('looking')."}]},
 {id:'eh_x4_education',lv:'C1',field:'sosyal',
  text:"When schools first begun to use computers, many teachers worried that students would stop to think for themselves. These fears have not entirely disappeared, but most teachers now see technology as a helpful tool rather than a threat. Used wisely, a laptop can give a child access of knowledge that earlier generations could only imagine. The real challenge lies in how these tools are used in the classroom.",
  errors:[
   {find:"schools first begun to",fix:"schools first began to",tr:"Zaman: düzensiz fiilin geçmiş hâli 'began'dır ('begun' geçmiş ortaçtır).",en:"Tense: the past simple of the irregular verb is 'began' ('begun' is the past participle)."},
   {find:"stop to think for",fix:"stop thinking for",tr:"Fiil yapısı: 'stop doing' (bırakmak) anlamı için '-ing' gerekir.",en:"Verb pattern: 'stop doing' (to cease) requires the -ing form."},
   {find:"access of knowledge",fix:"access to knowledge",tr:"Edat hatası: 'access' ismi 'to' edatıyla kullanılır.",en:"Preposition error: the noun 'access' is used with 'to'."}]},
 {id:'eh_x4_environment',lv:'C1',field:'fen',
  text:"Every summer, the number of forest fires seem to grow larger. Scientists explain that hotter, drier weather creates the conditions for flames to spread quick. In the past, small natural fires cleared away dead wood, but for decades people have put almost all of them out. As a result, fuel builds up, and when a fire finally starts, it burns with a fierce intensity than it once would have.",
  errors:[
   {find:"fires seem to grow",fix:"fires seems to grow",tr:"Özne-yüklem uyumu: gerçek özne 'the number' tekildir, fiil 'seems' olmalı.",en:"Subject-verb agreement: the real subject 'the number' is singular, so 'seems'."},
   {find:"to spread quick",fix:"to spread quickly",tr:"Kelime formu: fiili niteleyen sözcük zarf olmalı ('quickly').",en:"Word form: the word modifying the verb must be an adverb ('quickly')."},
   {find:"a fierce intensity than",fix:"a fiercer intensity than",tr:"Karşılaştırma: 'than' ile karşılaştırma sıfatı 'fiercer' kullanılır.",en:"Comparative: 'than' requires the comparative form 'fiercer'."}]}
];
content.errorhunt=(content.errorhunt||[]).concat(errorhunt);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const f={};errorhunt.forEach(e=>f[e.field]=(f[e.field]||0)+1);
const l={};errorhunt.forEach(e=>l[e.lv]=(l[e.lv]||0)+1);
console.log('errorhunt added:',errorhunt.length,'field',JSON.stringify(f),'lv',JSON.stringify(l));
