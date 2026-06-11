// Rebalances the correct-answer position across 0-3 (and 0-4 for oddout) so the
// answer key is not clustered. Reorders options/sentences and rewrites the
// position-dependent explanations (restate/paracomp/translate use option
// letters; oddout cites sentence numbers) into position-independent text.
// Cloze (refers to words) and dialogue (refers to speakers) are left untouched.
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.json');
const content = JSON.parse(fs.readFileSync(file, 'utf8'));

// Move the correct option/sentence to `target`, keeping the others in order.
function place(arr, correctIdx, target) {
  const correct = arr[correctIdx];
  const rest = arr.filter((_, i) => i !== correctIdx);
  const t = Math.max(0, Math.min(target, rest.length));
  rest.splice(t, 0, correct);
  return { arr: rest, ans: t };
}

// --- position-independent explanations ---
const expl = {
  restate: {
    rs_x1_climate_migration: { tr: "'acknowledges ... but stops short of recommending' = kabul eder ama önermeye varmaz; doğru cevap hem iklim kaynaklı göçün kabulünü hem de bağlayıcı anlaşma önerilmemesi çekincesini korur. Çeldiriciler ya kabulü inkâr eder ya da anlaşmayı savunarak anlamı tersine çevirir.", en: "'acknowledges ... but stops short of recommending' keeps both the admission of displacement and the refusal to call for a binding treaty; the distractors either deny the admission or reverse it." },
    rs_x1_placebo_effect: { tr: "'may owe less to X than to Y' = X'ten çok Y'ye bağlı olabilir; doğru cevap iyileşmenin ilaçtan çok beklentiye bağlı olabileceği karşılaştırmasını korur. Çeldiriciler ilacı tek sorumlu sayar ya da beklentiyi yok sayar.", en: "'may owe less to X than to Y' means it is more due to Y (expectation); the correct option keeps that comparison, while distractors credit the drug or dismiss expectation." },
    rs_x1_ancient_diet: { tr: "'relied heavily on fish, rather than grain as scholars had assumed' = balığa dayandı, sanılan tahıla değil; doğru cevap bu karşıtlığı korur. Çeldiriciler eski tahıl görüşünü doğrular ya da her ikisini de reddeder.", en: "'relied on fish, rather than grain as scholars had assumed' contrasts the new finding with the old assumption; the correct option keeps it, while distractors reaffirm the grain view or deny both." },
    rs_x1_automation_jobs: { tr: "'likely to eliminate ... but may also create' = hem yok edebilir hem yaratabilir; doğru cevap her iki yönü de korur. Çeldiriciler yaratımı yok sayar ya da yeni rollerin şimdiden bilindiğini iddia ederek 'cannot yet imagine' ile çelişir.", en: "'likely to eliminate ... but may also create' keeps both sides; the correct option preserves them, while distractors drop the job creation or contradict 'cannot yet imagine'." },
    rs_x1_volcano_warning: { tr: "'cannot predict the exact day but can tell when more likely' = kesin günü değil ama olasılık artışını söyleyebilir; doğru cevap bu ayrımı korur. Çeldiriciler ya kesin tarih verir ya da hiçbir şey bilinemez diyerek uç noktalara kaçar.", en: "'cannot predict the exact day but can tell when more likely' is preserved; the distractors swing to extremes (exact date vs. no knowledge)." },
    rs_x1_reading_habits: { tr: "'more likely to enjoy' = olasılık bildirir; doğru cevap çocukluk okumasıyla yetişkin keyfi arasındaki ihtimalli bağı korur. 'guarantees' diyen çeldirici kesinliğe kaçarak abartır; diğeri bağı koparır.", en: "'more likely to enjoy' is probabilistic; the correct option keeps the link, while a distractor overstates it with 'guarantees' and another severs the link." },
    rs_x1_economic_growth: { tr: "'raised incomes, yet did little to narrow the gap' = gelir arttı ama uçurum daralmadı; doğru cevap bu karşıtlığı korur. Çeldiriciler eşitsizliğin azaldığını ya da gelirin düştüğünü söyleyerek çelişir.", en: "'raised incomes, yet did little to narrow the gap' keeps both; distractors claim inequality fell or incomes dropped." },
    rs_x1_bilingual_brain: { tr: "'does not delay ... but appears to strengthen' = geciktirmez, hatta güçlendirir; doğru cevap iki noktayı da korur. Çeldiriciler eski 'gecikme' korkusunu doğrular ya da avantajı yok sayar.", en: "'does not delay ... but appears to strengthen' keeps both; distractors revive the old fear of delay or ignore the advantage." },
    rs_x1_museum_funding: { tr: "'Without additional funding ... will be forced to reduce/cancel' = ek fon olmazsa kısmak/iptal zorunda; doğru cevap koşul-sonuç bağını korur. Çeldiriciler koşulu tersine çevirir (genişleme / fon zaten alındı).", en: "'Without additional funding ... will be forced to reduce/cancel' keeps the condition-consequence; distractors reverse the condition (expansion / funding already secured)." },
    rs_x1_renewable_cost: { tr: "'fallen so dramatically that it is now cheaper than coal' = öyle düştü ki kömürden ucuz; doğru cevap bu sonucu korur. Çeldiriciler fiyat ilişkisini tersine çevirir ya da düşüşü yok sayar.", en: "'fallen so dramatically that it is now cheaper than coal' is kept; distractors reverse the price relation or deny the drop." },
    rs_x1_stress_health: { tr: "'weaken the immune system, making more vulnerable' = bağışıklığı zayıflatıp savunmasız bırakır; doğru cevap aynı neden-sonucu korur. Çeldirici tam tersini (güçlendirir) iddia eder.", en: "'weaken the immune system, making more vulnerable' keeps the cause-effect; a distractor claims the opposite (strengthens)." },
    rs_x1_trade_route: { tr: "'Far from being isolated ... maintained extensive contacts' = izole olmak şöyle dursun, geniş temaslar; doğru cevap bu vurguyu korur. Çeldiriciler izolasyonu ya da yalnızca komşularla ticareti öne sürerek çelişir.", en: "'Far from being isolated ... maintained extensive contacts' is kept; distractors suggest isolation or trade only with neighbours." },
    rs_x1_exercise_mood: { tr: "'not only improves fitness but also reduces anxiety' = hem formu artırır hem kaygıyı azaltır; doğru cevap iki yararı da korur. Çeldiriciler ruh hali etkisini yok sayar ya da yönü tersine çevirir.", en: "'not only improves fitness but also reduces anxiety' keeps both benefits; distractors drop the mood effect or reverse it." },
    rs_x1_language_loss: { tr: "'not only words ... but also a unique way of understanding' = sadece sözcükler değil, dünyayı anlamanın özgün bir biçimi; doğru cevap bu eklemeyi korur. Çeldirici 'sadece sözcük' diyerek eksiltir.", en: "'not only words ... but also a unique way of understanding' keeps the addition; a distractor reduces it to 'just words'." },
    rs_x1_screen_sleep: { tr: "'make it harder to fall asleep, because the light interferes' = ışık ritmi bozduğu için uykuyu zorlaştırır; doğru cevap neden-sonucu korur. Çeldiriciler tersini (uykuyu kolaylaştırır) iddia eder.", en: "'make it harder to fall asleep, because the light interferes' keeps the cause-effect; distractors claim the opposite." },
    rs_x1_fossil_record: { tr: "'incomplete, so absence does not necessarily mean extinct' = kayıt eksik olduğundan yokluk mutlaka soy tükenmesi değil; doğru cevap bu temkinli çıkarımı korur. Çeldiriciler yanlış kesinlik ekler.", en: "'incomplete, so absence does not necessarily mean extinct' keeps the cautious inference; distractors add false certainty." },
    rs_x1_tax_reform: { tr: "'would simplify ... though critics worry it could reduce revenue' = sadeleştirir ama eleştirmenler geliri azaltabileceğinden kaygılı; doğru cevap iki yönü de korur. Çeldiriciler sadeleştirmeyi ya da kaygıyı tersine çevirir.", en: "'would simplify ... though critics worry it could reduce revenue' keeps both; distractors reverse the simplification or the concern." },
    rs_x1_robot_surgery: { tr: "'can assist ... but still depend entirely on human judgement' = yardımcı olur ama tamamen insan kararına bağlı; doğru cevap bu dengeyi korur. Çeldiriciler insan rolünü siler ya da robotu işe yaramaz sayar.", en: "'can assist ... but still depend entirely on human judgement' keeps the balance; distractors erase the human role or dismiss the robots." },
    rs_x1_plastic_ocean: { tr: "'breaks into tiny pieces almost impossible to remove' = temizlemesi neredeyse imkânsız küçük parçalara ayrılır; doğru cevap bunu korur. Çeldiriciler zorluğu yok sayar.", en: "'breaks into tiny pieces almost impossible to remove' is kept; distractors deny the difficulty." },
    rs_x1_remote_work: { tr: "'offers flexibility, but can blur the boundary' = esneklik sağlar ama sınırı bulanıklaştırabilir; doğru cevap iki yönü de korur. Çeldiriciler esnekliği yok sayar ya da sınırın net kaldığını söyler.", en: "'offers flexibility, but can blur the boundary' keeps both; distractors drop the flexibility or claim the line stays sharp." }
  },
  paracomp: {
    pc_x1_pompeii: { tr: "Boşluktan sonra korunmuşluğun sonuçları (ekmek, duvar yazıları) gelir; doğru cevap külün kasabayı aniden mühürleyip koruduğunu söyleyerek bu sonucu hazırlar. Diğer seçenekler kül/koruma izleğini sürdürmez.", en: "After the gap come the results of preservation (bread, wall notices); the correct option explains the ash suddenly sealed the town, setting up that result. The others fail to continue the ash/preservation thread." },
    pc_x1_deep_sea: { tr: "Boşluktan sonra volkanik bacalardaki canlı örneği gelir; doğru cevap 'however' ile eski 'cansız çöl' görüşünü çürütüp derinlerde yaşamın geliştiğini söyleyerek örneği hazırlar.", en: "After the gap comes the example of life around vents; the correct option uses 'however' to overturn the 'lifeless desert' view and introduce thriving deep-sea life." },
    pc_x1_handwashing: { tr: "Boşluk, fikrin reddi ile bugünkü kabulü arasında köprüdür; doğru cevap o dönemde görünmez mikropların bilinmediğini söyleyerek reddi açıklar.", en: "The gap bridges rejection and today's acceptance; the correct option explains the rejection by noting invisible germs were then unknown." },
    pc_x1_currency: { tr: "Boşluktan sonra 'oysa parayı herkes kabul eder' karşıtlığı gelir; doğru cevap takasın yalnızca karşılıklı istek varsa işlediğini söyleyerek paranın üstünlüğünü hazırlar.", en: "After the gap comes the contrast that a coin is accepted by anyone; the correct option sets it up by noting barter needs a double coincidence of wants." },
    pc_x1_antarctica: { tr: "Boşluktan sonra 'bu yüzden izleniyor; deniz seviyeleri yükselebilir' gelir; doğru cevap buzun bir kısmının erimesinin etkisinin büyük olacağını söyleyerek bunu hazırlar.", en: "After the gap: scientists monitor it because melting could raise sea levels; the correct option notes that even partial melting would have an enormous effect." },
    pc_x1_habit_formation: { tr: "Boşluktan sonra çevreyi düzenlemenin iradeden etkili olduğu örneği gelir; doğru cevap çevrenin davranışı en az irade kadar biçimlendirdiğini söyleyerek bunu hazırlar. Çevreyle ilgisiz diyen seçenek örnekle çelişir.", en: "After the gap, arranging one's environment beats willpower; the correct option notes environment shapes behaviour as much as resolve. The option denying any role of surroundings contradicts the example." },
    pc_x1_tree_rings: { tr: "Boşluktan sonra 'geniş halka sıcak/yağışlı, dar halka kuraklık' gelir; doğru cevap halka genişliğinin o yılki havayı kaydettiğini söyleyerek bunu hazırlar.", en: "After the gap: wide ring = warm/wet, narrow = drought; the correct option states ring width records that year's weather." },
    pc_x1_gig_economy: { tr: "Boşluktan sonra 'eleştirmenler bu özgürlüğün güvencesiz geldiğini söyler' (however) gelir; doğru cevap bazı işçilerin esnekliği özgürlük için değerli bulduğunu söyleyerek karşıtlığı hazırlar.", en: "After the gap, critics say this freedom lacks security ('however'); the correct option sets up the contrast by noting some workers value the freedom of flexible hours." },
    pc_x1_immune_memory: { tr: "Boşluktan sonra 'bu uzun ömürlü savunucular sayesinde ikinci karşılaşma hızlı atlatılır' gelir; doğru cevap bağışıklığın istilacıyı hatırlayan hücreler tuttuğunu söyleyerek bunu hazırlar.", en: "After the gap: thanks to long-lived defenders a second encounter is handled fast; the correct option notes the system keeps memory cells of the invader." },
    pc_x1_lost_city: { tr: "Boşluktan sonra 'uydu görüntüleri ve yüzey araştırması ile bulundu' gelir; doğru cevap yeni teknolojinin arama araçları sağladığını söyleyerek bunu hazırlar.", en: "After the gap: satellites and surveys located it; the correct option notes new technology gave researchers fresh tools to search." },
    pc_x1_electric_car: { tr: "Boşluktan sonra 'o güç kömürle üretilirse iklim faydası küçülür' gelir; doğru cevap kullanılan elektriğin bir yerde üretilmesi gerektiğini söyleyerek bunu hazırlar.", en: "After the gap: if that power comes from coal the climate benefit shrinks; the correct option notes the electricity must still be produced somewhere." },
    pc_x1_bystander: { tr: "Boşluktan sonra 'psikologlar tersinin olabileceğini bulmuş: herkes başkası yapar sanır' gelir; doğru cevap kalabalık tanığın daha hızlı yardım demek olmadığını söyleyerek bunu hazırlar.", en: "After the gap, psychologists find the opposite (diffusion of responsibility); the correct option notes more witnesses don't necessarily mean faster help." },
    pc_x1_spice_trade: { tr: "Boşluktan sonra 'bu olağanüstü değer tüccarları uzun yolculuklara itti' gelir; doğru cevap baharatın yalnızca uzak bölgelerde yetiştiği için kıt olduğunu söyleyerek değeri açıklar.", en: "After the gap: this extraordinary value drove long voyages; the correct option explains the value by noting spices grew only in distant regions, so supply was scarce." },
    pc_x1_microbiome: { tr: "Boşluktan sonra sindirim, vitamin, ruh hali yararları gelir; doğru cevap 'however' ile eski 'tehdit' görüşünü çürütüp araştırmanın mikropların yararını ortaya koyduğunu söyler.", en: "After the gap come benefits (digestion, vitamins, mood); the correct option uses 'however' to overturn the old 'threat' view by noting research revealed the microbes' usefulness." },
    pc_x1_dark_tourism: { tr: "Boşluktan sonra 'destekçiler ... eleştirenler ...' tartışması gelir; doğru cevap bu uygulamanın saygılı olup olmadığına dair canlı bir tartışma başlattığını söyleyerek iki görüşü hazırlar.", en: "After the gap come supporters vs. critics; the correct option sets up both sides by noting the practice sparked a lively debate over whether it is respectful." }
  },
  translate: {
    tx_x1_climate_evidence: { tr: "'has played a decisive role in the recent rise' = son artışta belirleyici rol oynadı; doğru çeviri bunu birebir karşılar. Çeldiriciler 'bağımsız' ya da 'durdurma' diyerek anlamı çarpıtır.", en: "'has played a decisive role in the recent rise' is rendered exactly by the correct translation; distractors distort it with 'independent' or 'stopping'." },
    tx_x1_ancient_text: { tr: "'have long debated whether ... or ...' = uzun süredir ... mı yoksa ... mı diye tartışıyor; doğru çeviri iki seçenekli tartışmayı korur. Çeldiriciler kesinlik ekler ya da konuyu değiştirir.", en: "'have long debated whether ... or ...' keeps the two-option debate in the correct translation; distractors add false certainty or change the topic." },
    tx_x1_treatment_caution: { tr: "'Although ... promising ... should not be used widely until further trials confirm' = umut verici olsa da denemeler doğrulayana dek yaygın kullanılmamalı; doğru çeviri bu koşullu uyarıyı korur. Çeldiriciler çekinceyi siler.", en: "'Although promising ... should not be used widely until further trials confirm' keeps the conditional caution; distractors drop the caveat." },
    tx_x1_economic_policy: { tr: "'to curb inflation, even at the risk of slowing growth' = büyümeyi yavaşlatma riskini göze alarak enflasyonu dizginlemek; doğru çeviri bu amaç-risk dengesini korur. Çeldiriciler kararın yönünü tersine çevirir.", en: "'to curb inflation, even at the risk of slowing growth' keeps the aim-risk balance; distractors reverse the decision." },
    tx_x1_excavation: { tr: "'traded with regions far beyond its own borders' = kendi sınırlarının çok ötesindeki bölgelerle ticaret; doğru çeviri bunu korur. Çeldiriciler 'yalnızca komşu' ya da 'yalıtılmış' diyerek çelişir.", en: "'traded with regions far beyond its own borders' is kept; distractors contradict it with 'only neighbours' or 'isolated'." },
    tx_x1_brain_plasticity: { tr: "'remains capable of reorganising itself throughout life ... new connections' = yaşam boyu kendini düzenleyip yeni bağlantı kurar; doğru çeviri bunu korur. Çeldiriciler yetişkinlikte değişmez der ya da öğrenmenin engellediğini söyler.", en: "'remains capable of reorganising itself throughout life ... new connections' is kept; distractors say it never changes in adulthood or that learning prevents new connections." },
    tx_x1_renewable_shift: { tr: "'As the cost ... continues to fall, more and more households are choosing to install' = maliyet düştükçe daha çok hane kurmayı tercih ediyor; doğru çeviri bu neden-sonucu korur. Çeldiriciler yönü tersine çevirir.", en: "'As the cost continues to fall, more households are choosing to install' keeps the cause-effect; distractors reverse it." },
    tx_x1_urban_planning: { tr: "'a city designed around cars is rarely a city designed for the people' = otomobiller için tasarlanan şehir nadiren insanlar içindir; doğru çeviri bu karşıtlığı korur. Çeldiriciler anlamı tersine çevirir.", en: "'a city designed around cars is rarely a city designed for the people' keeps the contrast; distractors reverse the meaning." },
    tx_x1_osym_history: { tr: "'tek bir nedene değil ... birçok etkenin birleşimine' = not to a single cause but to a combination of many factors; doğru çeviri bunu korur. Çeldiriciler tek neden ya da 'ilişkisiz etkenler' diyerek çelişir.", en: "'not to a single cause but to a combination of interrelated factors' is kept; distractors give a single cause or call the factors unrelated." },
    tx_x1_osym_research: { tr: "'tam olarak anlaşılabilmesi için daha uzun çalışmalara ihtiyaç' = longer-term studies are needed before fully understood; doğru çeviri bunu korur. Çeldiriciler gereği siler ya da tersine çevirir.", en: "'longer-term studies are needed before the side effects can be fully understood' is kept; distractors drop or reverse the need." },
    tx_x1_osym_environment: { tr: "'yalnızca ... değil, aynı zamanda ... de' = not only ... but also ...; doğru çeviri bu çift vurguyu korur. Çeldiriciler kapsamı daraltır ya da etkiyi inkâr eder.", en: "'not only ... but also ...' keeps the double emphasis; distractors narrow the scope or deny the effect." },
    tx_x1_osym_technology: { tr: "'giderek yetkinleşse de ... insan denetimini gerektirir' = although increasingly capable ... still require human oversight; doğru çeviri bu ödün yapısını korur. Çeldiriciler denetimi gereksiz sayar.", en: "'although increasingly capable ... still require human oversight' keeps the concessive structure; distractors drop the needed oversight." },
    tx_x1_osym_psychology: { tr: "'mantıktan çok duygulardan etkilendiği' = influenced more by emotion than by logic; doğru çeviri bu karşılaştırmayı korur. Çeldiriciler karşılaştırmayı tersine çevirir ya da inkâr eder.", en: "'influenced more by emotion than by logic' keeps the comparison; distractors reverse or deny it." },
    tx_x1_osym_economy: { tr: "'rekabet edebilmek için ... yenilikçi fikirlere ve esnek çalışmaya güvenmek zorunda' = to compete ... have to rely on innovative ideas and flexible working; doğru çeviri bunu korur. Çeldiriciler gereği yok sayar.", en: "'in order to compete ... have to rely on innovative ideas and flexible working' is kept; distractors remove the need." },
    tx_x1_osym_archaeology: { tr: "'düşünüldüğünden çok daha gelişmiş bir teknoloji' = a far more advanced technology than had been thought; doğru çeviri bunu korur. Çeldiriciler 'daha basit' ya da 'teknoloji yok' diyerek tersine çevirir.", en: "'a far more advanced technology than had been thought' is kept; distractors reverse it with 'much simpler' or 'no technology'." }
  },
  oddout: {
    oo_x1_printing_press: { tr: "Paragraf matbaanın fikirleri yayması ve okuryazarlığı artırmasını anlatır; kâğıt kalitesinden şikâyet eden cümle yan bir ayrıntı olup anlam bütünlüğünü bozar.", en: "The paragraph is about printing spreading ideas and literacy; the sentence complaining about poor paper quality is a side detail that breaks the unity." },
    oo_x1_photosynthesis: { tr: "Paragraf fotosentezi ve önemini açıklar; bahçıvanların düzgün sıralar tercih etmesini anlatan cümle konuyla ilgisizdir.", en: "The paragraph explains photosynthesis and its importance; the sentence about gardeners preferring neat rows is irrelevant." },
    oo_x1_sleep_teenagers: { tr: "Paragraf ergenlerde uyku eksikliği ve sonuçlarını ele alır; futbolun popülerliğinden söz eden cümle bağlam dışıdır.", en: "The paragraph is about teenage sleep deprivation and its effects; the sentence about football's popularity is off-topic." },
    oo_x1_roman_roads: { tr: "Paragraf Roma yollarının askeri ve ticari önemini anlatır; modern turistlerin tren tercihini anlatan cümle bütünlüğü bozar.", en: "The paragraph concerns Roman roads' military and commercial role; the sentence about modern tourists' train preference breaks the unity." },
    oo_x1_bee_decline: { tr: "Paragraf arı kayıplarının tarımsal sonuçlarını ele alır; balın eski çağlardan beri tatlandırıcı olduğunu söyleyen cümle konuyla bağlantısızdır.", en: "The paragraph is about bee losses and their effect on agriculture; the sentence about honey as an ancient sweetener is unrelated." },
    oo_x1_great_depression: { tr: "Paragraf Büyük Buhran ve devlet müdahalesini anlatır; caz müziğinin bölgesel stillerinden söz eden cümle bütünlüğü bozar.", en: "The paragraph is about the Depression and state intervention; the sentence about regional jazz styles breaks the unity." },
    oo_x1_vaccination_program: { tr: "Paragraf aşı programlarının kapsama ve lojistik zorluklarını anlatır; hastanelerin taştan yapıldığını söyleyen cümle konu dışıdır.", en: "The paragraph concerns vaccination coverage and logistics; the sentence about hospitals built from stone is off-topic." },
    oo_x1_glacier_melt: { tr: "Paragraf buzulların su kaynağı işlevini ve erimesini anlatır; dağcılığın moda olmasından söz eden cümle bağlam dışıdır.", en: "The paragraph is about glaciers as water sources and their melting; the sentence about mountaineering as fashion is off-topic." },
    oo_x1_writing_origins: { tr: "Paragraf yazının kayıt tutmadan edebiyata gelişimini anlatır; kilin ısıtılınca sertleştiğini söyleyen genel bilgi cümlesi bütünlüğü bozar.", en: "The paragraph traces writing from record-keeping to literature; the generic sentence about clay hardening when heated breaks the unity." },
    oo_x1_memory_eyewitness: { tr: "Paragraf belleğin yeniden inşa edici doğasını ve tanık güvenilirliğini anlatır; mahkeme salonlarının dekorundan söz eden cümle konuyla ilgisizdir.", en: "The paragraph is about reconstructive memory and witness reliability; the sentence about courtroom decor is unrelated." },
    oo_x1_solar_panels: { tr: "Paragraf güneş panellerinin işleyişi ve yayılmasını anlatır; ilk şehirlerarası telefon görüşmesinden söz eden cümle konu dışıdır.", en: "The paragraph is about how solar panels work and spread; the sentence about the first long-distance telephone call is off-topic." },
    oo_x1_archaeology_methods: { tr: "Paragraf modern arkeolojik yöntemleri sıralar; müzelerin temizlik için kapandığını söyleyen cümle bütünlüğü bozar.", en: "The paragraph lists modern archaeological methods; the sentence about museum closing days breaks the unity." },
    oo_x1_obesity_diet: { tr: "Paragraf obezite artışının nedenlerini açıklar; bir yemek tarifi veren cümle konuyla bağlantısızdır.", en: "The paragraph explains the causes of rising obesity; the sentence giving a recipe is unrelated." },
    oo_x1_river_civilisation: { tr: "Paragraf nehir kenarındaki erken uygarlıkların doğuşunu anlatır; yelkenli teknelerin hızından söz eden cümle konu dışıdır.", en: "The paragraph is about early river civilisations; the sentence about sailing boats' speed is off-topic." },
    oo_x1_ai_translation: { tr: "Paragraf makine çevirisinin gelişimi ve sınırlarını anlatır; en eski kütüphanelerden söz eden cümle konu dışıdır.", en: "The paragraph is about the progress and limits of machine translation; the sentence about the oldest libraries is off-topic." }
  }
};

// --- field reclassification: move items whose content genuinely centres on
// science/technology or psychology out of the over-represented "sosyal" bucket
// so the three fields are more balanced. Every move is content-justified. ---
const fieldOverride = {
  cz_x1_social_media: 'fen',        // platform technology & attention
  rs_x1_climate_migration: 'fen',   // climate (environmental) science
  rs_x1_automation_jobs: 'fen',     // automation / technology
  oo_x1_archaeology_methods: 'fen', // radar, chemical analysis, pollen science
  pc_x1_lost_city: 'fen',           // satellite imagery / remote sensing
  tx_x1_urban_planning: 'fen',      // urban & transport planning
  rs_x1_reading_habits: 'saglik',   // developmental / educational psychology
  dlg_x1_online_course: 'saglik'    // study behaviour / self-regulation
};
// Nudge a few accessible items from C1 to B2 to reach the ~40/60 target split.
const lvOverride = {
  dlg_x1_dig_site: 'B2',
  dlg_x1_economy_news: 'B2',
  rs_x1_renewable_cost: 'B2',
  oo_x1_bee_decline: 'B2'
};
for (const b of ['cloze', 'restate', 'oddout', 'dialogue', 'paracomp', 'translate']) {
  for (const it of (content[b] || [])) {
    if (fieldOverride[it.id]) it.field = fieldOverride[it.id];
    if (lvOverride[it.id]) it.lv = lvOverride[it.id];
  }
}

// --- rebalance the four-option banks (reorder opts) ---
function rebalanceFourOpt(bankName, cycleLen) {
  const arr = content[bankName] || [];
  arr.forEach((it, i) => {
    const target = i % cycleLen;
    const r = place(it.opts, it.ans, target);
    it.opts = r.arr;
    it.ans = r.ans;
    if (expl[bankName] && expl[bankName][it.id]) {
      it.tr = expl[bankName][it.id].tr;
      it.en = expl[bankName][it.id].en;
    }
  });
}

rebalanceFourOpt('restate', 4);
rebalanceFourOpt('dialogue', 4); // explanations already position-independent (speakers)
rebalanceFourOpt('paracomp', 4);
rebalanceFourOpt('translate', 4);

// --- cloze: reorder every blank's opts across a single 0-3 cycle ---
let clozeCounter = 0;
(content.cloze || []).forEach((it) => {
  it.blanks.forEach((b) => {
    const target = clozeCounter % 4;
    clozeCounter++;
    const r = place(b.opts, b.ans, target);
    b.opts = r.arr;
    b.ans = r.ans;
  });
});

// --- oddout: move the odd sentence to a balanced 0-4 position ---
(content.oddout || []).forEach((it, i) => {
  const target = i % 5;
  const r = place(it.sentences, it.ans, target);
  it.sentences = r.arr;
  it.ans = r.ans;
  if (expl.oddout[it.id]) {
    it.tr = expl.oddout[it.id].tr;
    it.en = expl.oddout[it.id].en;
  }
});

fs.writeFileSync(file, JSON.stringify(content, null, 2));
console.log('Rebalanced.');
