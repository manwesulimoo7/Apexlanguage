// Build script: merges YDS/YOKDIL question banks into content.json (additive only).
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.json');
const content = JSON.parse(fs.readFileSync(file, 'utf8'));

// ---------------------------------------------------------------------------
// CLOZE (10) — 120-180 word academic paragraphs, 5 blanks each
// ---------------------------------------------------------------------------
const cloze = [
  {
    id: 'cz_x1_ottoman_trade', lv: 'C1', field: 'sosyal',
    title: 'Ottoman Overland Trade',
    text: "For several centuries the Ottoman Empire occupied a strategic position between Europe and Asia, and this geography (1) ____ much of its early economic policy. Control of the principal overland routes allowed the state to (2) ____ substantial revenues by taxing the caravans that crossed its territory. As European powers established direct maritime routes to Asia, however, the volume of goods passing through Ottoman lands gradually (3) ____, and customs income fell accordingly. Confronted with this decline, the administration attempted to (4) ____ alternative sources of wealth, encouraging domestic manufacture and reforming the system of taxation. These measures, though partially effective, could not entirely (5) ____ the long-term redirection of global commerce towards the oceans, a shift that ultimately reshaped the empire's place in the world economy.",
    blanks: [
      { n: 1, opts: ['shaped', 'concealed', 'neglected', 'imitated'], ans: 0, tr: "'shaped much of its policy' = politikasının çoğunu biçimlendirdi; coğrafya ekonomik politikayı belirleyen özne olduğu için 'shaped' doğru. 'concealed/neglected' bağlamla çelişir.", en: "'shaped much of its policy' fits: geography determined economic policy. 'concealed/neglected' contradict the context." },
      { n: 2, opts: ['waive', 'extract', 'forgive', 'borrow'], ans: 1, tr: "'extract revenues by taxing' = vergilendirerek gelir elde etmek; vergiden gelir 'çekip çıkarılır'. 'waive/forgive' (vazgeçmek/bağışlamak) anlamı tersine çevirir.", en: "'extract revenues by taxing' is right: revenue is drawn from taxes. 'waive/forgive' reverse the meaning." },
      { n: 3, opts: ['expanded', 'stabilised', 'diminished', 'doubled'], ans: 2, tr: "Deniz yolları açılınca karadan geçen mal hacmi 'diminished' (azaldı); ardından gelen 'customs income fell' ifadesi bunu doğrular. 'expanded/doubled' artış demek olup çelişir.", en: "With sea routes opening, overland volume 'diminished'; 'customs income fell' confirms it. 'expanded/doubled' contradict." },
      { n: 4, opts: ['develop', 'abandon', 'overlook', 'destroy'], ans: 0, tr: "'develop alternative sources of wealth' = alternatif zenginlik kaynakları geliştirmek; sonraki 'encouraging manufacture' bunu örnekler. 'abandon/overlook' niyetle çelişir.", en: "'develop alternative sources of wealth' fits; 'encouraging manufacture' illustrates it. 'abandon/overlook' contradict the intent." },
      { n: 5, opts: ['accelerate', 'offset', 'welcome', 'announce'], ans: 1, tr: "'offset the redirection' = yön değişiminin etkisini dengelemek/telafi etmek; önlemler kısmen etkili ama kaymayı tam telafi edemedi. 'accelerate' tersini söyler.", en: "'offset the redirection' = counterbalance the shift; measures could not fully compensate. 'accelerate' says the opposite." }
    ]
  },
  {
    id: 'cz_x1_coral_reefs', lv: 'C1', field: 'fen',
    title: 'Coral Reef Decline',
    text: "Coral reefs support a remarkable proportion of marine biodiversity, yet they are extraordinarily (1) ____ to even small changes in their environment. When sea temperatures rise beyond a narrow tolerance, corals expel the symbiotic algae on which they (2) ____ for most of their energy, losing their colour in a process known as bleaching. If warm conditions (3) ____ for long enough, the weakened corals die and the intricate structures they have built over centuries begin to collapse. Scientists warn that the frequency of such events has increased markedly, leaving reefs with insufficient time to (4) ____ between successive shocks. Although some species show signs of greater heat resistance, researchers caution that adaptation alone is unlikely to (5) ____ the scale of warming now projected for the coming decades.",
    blanks: [
      { n: 1, opts: ['indifferent', 'vulnerable', 'attached', 'superior'], ans: 1, tr: "'vulnerable to changes' = değişimlere karşı kırılgan; küçük çevresel değişimden zarar gören mercanlar için doğru. 'indifferent' (kayıtsız) anlamla çelişir.", en: "'vulnerable to changes' is correct: reefs are harmed by small shifts. 'indifferent' contradicts." },
      { n: 2, opts: ['rely', 'reflect', 'comment', 'experiment'], ans: 0, tr: "'rely on ... for energy' = enerji için ona bağımlı olmak; mercan enerjisini alglerden alır. 'rely on' kalıbı 'for' ile gelir.", en: "'rely on ... for energy' fits: corals depend on algae. The collocation 'rely on' pairs with 'for'." },
      { n: 3, opts: ['persist', 'vanish', 'recover', 'cool'], ans: 0, tr: "'if warm conditions persist' = sıcak koşullar yeterince sürerse; sonrasındaki ölüm bunun sonucudur. 'vanish/cool' koşulu ortadan kaldırır.", en: "'if warm conditions persist' fits; death follows from prolonged heat. 'vanish/cool' remove the condition." },
      { n: 4, opts: ['compete', 'recover', 'migrate', 'reproduce'], ans: 1, tr: "'time to recover between shocks' = şoklar arasında toparlanacak zaman; sık olaylar toparlanmayı engeller. Diğer fiiller bağlamı tam karşılamaz.", en: "'time to recover between shocks' is right: frequent events prevent recovery. The other verbs don't fit the gap." },
      { n: 5, opts: ['match', 'cause', 'predict', 'measure'], ans: 0, tr: "'adaptation is unlikely to match the scale of warming' = uyum, ısınmanın ölçüsüne yetişemez; 'match' burada 'denk gelmek/yetişmek' anlamında. 'cause/predict' mantıksız.", en: "'unlikely to match the scale of warming' = adaptation cannot keep pace. 'cause/predict' are illogical here." }
    ]
  },
  {
    id: 'cz_x1_memory_sleep', lv: 'C1', field: 'saglik',
    title: 'Sleep and Memory',
    text: "The idea that sleep merely allows the body to rest has been steadily revised as researchers have come to (1) ____ its active role in learning. During the night the brain does not simply switch off; instead it (2) ____ the experiences of the previous day, strengthening certain neural connections while weakening others. This selective process appears to be essential for converting fragile, short-term traces into more (3) ____ long-term memories. Experiments in which volunteers are deprived of sleep consistently show (4) ____ performance on tasks that depend on recall, even when the participants believe they have compensated for their tiredness. Such findings have led many specialists to argue that adequate sleep should be regarded not as a luxury but as a (5) ____ component of effective study and sound mental health.",
    blanks: [
      { n: 1, opts: ['deny', 'appreciate', 'forget', 'doubt'], ans: 1, tr: "'come to appreciate its active role' = etkin rolünü takdir etmeye/anlamaya başlamak; eski görüşün revize edildiği bağlamla uyumlu. 'deny/doubt' çelişir.", en: "'come to appreciate its active role' fits the revised view. 'deny/doubt' contradict." },
      { n: 2, opts: ['ignores', 'processes', 'erases', 'invents'], ans: 1, tr: "'processes the experiences' = deneyimleri işler; sonraki 'strengthening connections' bunu açıklar. 'erases/invents' bağlama aykırı.", en: "'processes the experiences' is right; 'strengthening connections' explains it. 'erases/invents' don't fit." },
      { n: 3, opts: ['durable', 'temporary', 'visible', 'distant'], ans: 0, tr: "'more durable long-term memories' = daha kalıcı uzun süreli anılar; kısa süreliyle karşıtlık kurulur. 'temporary' tam tersidir.", en: "'more durable long-term memories' contrasts with short-term traces. 'temporary' is the opposite." },
      { n: 4, opts: ['improved', 'impaired', 'identical', 'flawless'], ans: 1, tr: "'impaired performance' = bozulmuş performans; uyku yoksunluğunun beklenen sonucu. 'improved/flawless' çelişir.", en: "'impaired performance' is the expected result of sleep deprivation. 'improved/flawless' contradict." },
      { n: 5, opts: ['trivial', 'optional', 'necessary', 'random'], ans: 2, tr: "'a necessary component' = gerekli bir bileşen; 'not a luxury but' yapısı zorunluluğa işaret eder. 'trivial/optional' bu karşıtlıkla uyumsuz.", en: "'a necessary component' fits the 'not a luxury but' structure. 'trivial/optional' clash with that contrast." }
    ]
  },
  {
    id: 'cz_x1_inflation_policy', lv: 'C1', field: 'sosyal',
    title: 'Central Banks and Inflation',
    text: "Modern central banks are widely expected to keep inflation low and (1) ____, a task that is far more delicate than it may first appear. When prices rise too quickly, the purchasing power of households (2) ____, and savings lose their value, undermining confidence in the currency. To counter this, banks often raise interest rates, which tends to (3) ____ borrowing and spending throughout the economy. Yet the same instrument carries clear risks: if rates are pushed too high, economic activity may slow so sharply that unemployment (4) ____. Policymakers must therefore weigh competing dangers, and they rely heavily on forecasts that are inevitably (5) ____, since the future behaviour of consumers and firms can never be known with certainty.",
    blanks: [
      { n: 1, opts: ['volatile', 'stable', 'hidden', 'optional'], ans: 1, tr: "'low and stable' = düşük ve istikrarlı; enflasyon hedefinin standart ifadesi. 'volatile' (oynak) hedefle çelişir.", en: "'low and stable' is the standard inflation target phrasing. 'volatile' contradicts the goal." },
      { n: 2, opts: ['rises', 'doubles', 'erodes', 'returns'], ans: 2, tr: "'purchasing power erodes' = alım gücü aşınır; hızlı fiyat artışının sonucu. 'rises/doubles' tersini söyler.", en: "'purchasing power erodes' results from fast price rises. 'rises/doubles' say the opposite." },
      { n: 3, opts: ['restrain', 'encourage', 'celebrate', 'ignore'], ans: 0, tr: "Faiz artışı borçlanma ve harcamayı 'restrain' eder (kısıtlar). 'encourage' faiz artışının etkisiyle çelişir.", en: "Higher rates 'restrain' borrowing and spending. 'encourage' contradicts the effect of rate rises." },
      { n: 4, opts: ['falls', 'rises', 'disappears', 'stabilises'], ans: 1, tr: "Aşırı yavaşlamada işsizlik 'rises' (artar). Bağlam 'risks' ve 'too high' ile olumsuz sonuca işaret eder.", en: "If activity slows sharply, unemployment 'rises'. The context of risks points to a negative outcome." },
      { n: 5, opts: ['certain', 'imprecise', 'final', 'official'], ans: 1, tr: "'inevitably imprecise' = kaçınılmaz olarak belirsiz/kesin olmayan; geleceğin bilinememesiyle uyumlu. 'certain/final' çelişir.", en: "'inevitably imprecise' matches the uncertainty of the future. 'certain/final' contradict." }
    ]
  },
  {
    id: 'cz_x1_neolithic_settlement', lv: 'C1', field: 'sosyal',
    title: 'The First Settlements',
    text: "The shift from a mobile, hunting way of life to permanent settlement was one of the most (1) ____ transformations in human history. As communities began to cultivate crops, they could no longer move freely in search of food and were obliged to (2) ____ near their fields. This new permanence encouraged the construction of durable houses, the storage of surplus grain, and, in time, the emergence of more complex social arrangements. Archaeologists who excavate such sites must interpret fragmentary evidence with great care, for a single layer of soil may (3) ____ centuries of occupation. By comparing the remains of tools, seeds, and dwellings, they attempt to (4) ____ how daily life was organised long before the invention of writing. Their conclusions, though necessarily (5) ____, have transformed our understanding of how civilisation began.",
    blanks: [
      { n: 1, opts: ['trivial', 'profound', 'recent', 'temporary'], ans: 1, tr: "'profound transformations' = köklü/derin dönüşümler; insanlık tarihinin en önemli değişimi vurgusuyla uyumlu. 'trivial' çelişir.", en: "'profound transformations' fits the emphasis on a major change. 'trivial' contradicts." },
      { n: 2, opts: ['settle', 'wander', 'hide', 'compete'], ans: 0, tr: "'obliged to settle near their fields' = tarlalarının yakınına yerleşmek zorunda; yerleşik yaşam bağlamı. 'wander' (dolaşmak) tersidir.", en: "'obliged to settle near their fields' fits sedentism. 'wander' is the opposite." },
      { n: 3, opts: ['represent', 'erase', 'predict', 'reward'], ans: 0, tr: "'a single layer may represent centuries' = tek bir tabaka yüzyılları temsil edebilir; arkeolojik yorumlama güçlüğünü anlatır. 'erase' mantıksız.", en: "'a single layer may represent centuries' explains the interpretive difficulty. 'erase' is illogical." },
      { n: 4, opts: ['reconstruct', 'forget', 'destroy', 'sell'], ans: 0, tr: "'reconstruct how daily life was organised' = günlük yaşamın nasıl düzenlendiğini yeniden kurmak; arkeologların amacı. Diğerleri bağlama aykırı.", en: "'reconstruct how daily life was organised' is the archaeologists' aim. The others contradict the context." },
      { n: 5, opts: ['tentative', 'permanent', 'identical', 'illegal'], ans: 0, tr: "'necessarily tentative' = ister istemez geçici/ihtiyatlı; parçalı kanıttan çıkarılan sonuçlar kesin değildir. 'permanent' uymaz.", en: "'necessarily tentative' fits conclusions drawn from fragmentary evidence. 'permanent' doesn't fit." }
    ]
  },
  {
    id: 'cz_x1_renewable_grid', lv: 'B2', field: 'fen',
    title: 'Renewable Energy and the Grid',
    text: "As countries try to reduce their dependence on fossil fuels, they are installing more wind turbines and solar panels than ever before. These sources are clean, but they are also (1) ____, because the wind does not always blow and the sun does not always shine. To keep the electricity supply (2) ____, engineers must find ways to store energy when production is high and release it when demand increases. Large batteries can help, yet they remain expensive and cannot yet (3) ____ the needs of an entire nation. Another approach is to connect distant regions, so that a shortage in one area can be (4) ____ by a surplus in another. Together, these strategies are gradually making renewable power a more (5) ____ part of the modern energy system.",
    blanks: [
      { n: 1, opts: ['reliable', 'intermittent', 'cheap', 'dangerous'], ans: 1, tr: "'intermittent' = kesintili; rüzgârın ve güneşin sürekli olmadığı açıklamasıyla uyumlu. 'reliable' tersidir.", en: "'intermittent' matches the note that wind/sun are not constant. 'reliable' is the opposite." },
      { n: 2, opts: ['steady', 'unstable', 'secret', 'visible'], ans: 0, tr: "'keep the supply steady' = arzı istikrarlı tutmak; depolama amacının nedeni. 'unstable' çelişir.", en: "'keep the supply steady' is the goal of storage. 'unstable' contradicts." },
      { n: 3, opts: ['ignore', 'meet', 'reduce', 'invent'], ans: 1, tr: "'meet the needs' = ihtiyaçları karşılamak; bataryaların henüz ülke çapında ihtiyacı karşılayamadığını söyler. 'meet the needs' yerleşik kalıptır.", en: "'meet the needs' is the set phrase: batteries can't yet supply a whole nation. " },
      { n: 4, opts: ['caused', 'offset', 'ignored', 'repeated'], ans: 1, tr: "'offset by a surplus' = bir bölgedeki açık başka bölgedeki fazlayla dengelenir. 'caused' mantığı bozar.", en: "'offset by a surplus' = a shortage balanced by surplus elsewhere. 'caused' breaks the logic." },
      { n: 5, opts: ['minor', 'dependable', 'foreign', 'temporary'], ans: 1, tr: "'a more dependable part' = daha güvenilir bir parça; stratejilerin amacı yenilenebiliri güvenilir kılmaktır. 'minor' çelişir.", en: "'a more dependable part' is the aim of the strategies. 'minor' contradicts." }
    ]
  },
  {
    id: 'cz_x1_vaccine_history', lv: 'B2', field: 'saglik',
    title: 'A Short History of Vaccines',
    text: "The principle behind vaccination is surprisingly simple: the body is shown a harmless version of a germ so that it can learn to (1) ____ the real threat later. Before this idea was understood, diseases that are now rare killed enormous numbers of people every year. Early experiments were often risky, and many doctors were (2) ____ to accept methods they could not fully explain. Over time, however, careful observation showed that vaccinated people were far less likely to (3) ____ certain illnesses. As laboratories improved, scientists were able to produce vaccines that were both safer and more (4) ____, protecting whole communities rather than single individuals. Today, widespread vaccination is regarded as one of the most (5) ____ achievements of modern medicine, even though debates about it still appear from time to time.",
    blanks: [
      { n: 1, opts: ['ignore', 'recognise', 'spread', 'create'], ans: 1, tr: "'learn to recognise the real threat' = gerçek tehdidi tanımayı öğrenmek; bağışıklığın çalışma biçimi. 'ignore/spread' çelişir.", en: "'learn to recognise the real threat' explains how immunity works. 'ignore/spread' contradict." },
      { n: 2, opts: ['eager', 'reluctant', 'forced', 'paid'], ans: 1, tr: "'reluctant to accept' = kabul etmekte isteksiz; açıklanamayan yönteme karşı doktorların tutumu. 'eager' tersidir.", en: "'reluctant to accept' fits doctors' attitude to an unexplained method. 'eager' is the opposite." },
      { n: 3, opts: ['catch', 'cure', 'study', 'prevent'], ans: 0, tr: "'less likely to catch certain illnesses' = belli hastalıkları kapma olasılığı daha düşük; aşının koruyucu etkisi. 'cure/prevent' özneyle uyumsuz.", en: "'less likely to catch certain illnesses' fits the protective effect. 'cure/prevent' don't match the subject." },
      { n: 4, opts: ['effective', 'expensive', 'fragile', 'rare'], ans: 0, tr: "'safer and more effective' = daha güvenli ve daha etkili; bilimsel ilerlemenin sonucu. 'fragile/rare' bağlama aykırı.", en: "'safer and more effective' fits scientific progress. 'fragile/rare' contradict." },
      { n: 5, opts: ['doubtful', 'important', 'forgotten', 'secret'], ans: 1, tr: "'one of the most important achievements' = en önemli başarılardan biri; tıp tarihindeki yeri. 'doubtful/forgotten' çelişir.", en: "'one of the most important achievements' fits its place in medicine. 'doubtful/forgotten' contradict." }
    ]
  },
  {
    id: 'cz_x1_social_media', lv: 'B2', field: 'sosyal',
    title: 'Social Media and Attention',
    text: "Social media platforms are designed to hold our attention for as long as possible, and they are remarkably (1) ____ at doing so. Every notification, every new post, and every brief video is carefully arranged to keep us (2) ____ in the screen. Researchers have begun to ask what effect this constant stimulation has on our ability to (3) ____ on a single task. Some studies suggest that frequent switching between apps may make it harder to read a long text or follow a complex argument without becoming (4) ____. Critics therefore argue that users should learn to set clear limits, turning off alerts and choosing deliberately when to log on. Used with awareness, these tools can be genuinely useful; used without it, they can quietly (5) ____ the very focus that serious work requires.",
    blanks: [
      { n: 1, opts: ['poor', 'successful', 'honest', 'slow'], ans: 1, tr: "'remarkably successful at doing so' = bunu yapmakta dikkat çekici biçimde başarılı; dikkati tutma amacıyla uyumlu. 'poor' çelişir.", en: "'remarkably successful at doing so' fits the goal of holding attention. 'poor' contradicts." },
      { n: 2, opts: ['absorbed', 'bored', 'absent', 'asleep'], ans: 0, tr: "'keep us absorbed in the screen' = bizi ekrana dalmış tutmak; tasarımın hedefi. 'bored/absent' çelişir.", en: "'keep us absorbed in the screen' fits the design goal. 'bored/absent' contradict." },
      { n: 3, opts: ['comment', 'concentrate', 'rely', 'spend'], ans: 1, tr: "'concentrate on a single task' = tek bir göreve odaklanmak; 'on' edatıyla gelen kalıp. 'rely on' anlamı bozar.", en: "'concentrate on a single task' is the right collocation with 'on'. 'rely on' breaks the meaning." },
      { n: 4, opts: ['distracted', 'interested', 'skilled', 'relaxed'], ans: 0, tr: "'without becoming distracted' = dikkati dağılmadan; sık uygulama değiştirmenin olumsuz etkisi. 'interested/relaxed' uymaz.", en: "'without becoming distracted' fits the negative effect of app-switching. 'interested/relaxed' don't fit." },
      { n: 5, opts: ['sharpen', 'undermine', 'reward', 'measure'], ans: 1, tr: "'quietly undermine the very focus' = ihtiyaç duyulan odağı sessizce baltalamak; 'without it' (farkındalık olmadan) olumsuz sonuç. 'sharpen' tersidir.", en: "'quietly undermine the very focus' fits the negative outcome 'without it'. 'sharpen' is the opposite." }
    ]
  },
  {
    id: 'cz_x1_antibiotic_resistance', lv: 'C1', field: 'saglik',
    title: 'Antibiotic Resistance',
    text: "Antibiotics transformed medicine by making once-fatal infections routinely treatable, but their very success has created a serious new problem. Each time these drugs are used, the bacteria they target are placed under pressure, and the few that happen to (1) ____ the treatment survive to reproduce. Over many generations, this process allows resistant strains to become increasingly (2) ____, until some infections no longer respond to the medicines that once defeated them. The danger is made worse by the (3) ____ use of antibiotics in cases where they offer no benefit, such as ordinary viral colds. Health authorities are therefore urging both doctors and patients to use these drugs more (4) ____, reserving them for situations in which they are genuinely needed. Without such restraint, experts warn, we risk returning to an era in which a minor wound could once again prove (5) ____.",
    blanks: [
      { n: 1, opts: ['withstand', 'request', 'enjoy', 'announce'], ans: 0, tr: "'withstand the treatment' = tedaviye dayanmak/karşı koymak; hayatta kalan dirençli bakteriler. 'request/enjoy' mantıksız.", en: "'withstand the treatment' fits surviving resistant bacteria. 'request/enjoy' are illogical." },
      { n: 2, opts: ['rare', 'common', 'gentle', 'silent'], ans: 1, tr: "'increasingly common' = giderek yaygınlaşan; dirençli suşların çoğalması. 'rare' süreçle çelişir.", en: "'increasingly common' fits resistant strains spreading. 'rare' contradicts the process." },
      { n: 3, opts: ['careful', 'unnecessary', 'rare', 'legal'], ans: 1, tr: "'the unnecessary use' = gereksiz kullanım; viral soğuk algınlığı örneğiyle uyumlu. 'careful' çelişir.", en: "'the unnecessary use' fits the example of viral colds. 'careful' contradicts." },
      { n: 4, opts: ['frequently', 'sparingly', 'loudly', 'cheaply'], ans: 1, tr: "'use these drugs more sparingly' = ilaçları daha tutumlu/idareli kullanmak; gerçekten gerekli durumlara saklamakla uyumlu. 'frequently' tersidir.", en: "'use these drugs more sparingly' fits reserving them for real need. 'frequently' is the opposite." },
      { n: 5, opts: ['harmless', 'fatal', 'common', 'cheap'], ans: 1, tr: "'a minor wound could prove fatal' = küçük bir yara ölümcül olabilir; antibiyotik öncesi döneme dönüş uyarısı. 'harmless' çelişir.", en: "'a minor wound could prove fatal' fits the warning of a pre-antibiotic era. 'harmless' contradicts." }
    ]
  },
  {
    id: 'cz_x1_urban_heat', lv: 'B2', field: 'fen',
    title: 'The Urban Heat Island',
    text: "Anyone who has walked through a city on a hot summer evening will have noticed that it feels warmer than the countryside nearby. This difference is not imagined; it is a well-documented effect that scientists (1) ____ the urban heat island. Concrete, asphalt, and brick absorb heat during the day and release it slowly at night, so the air in dense neighbourhoods stays warm long after the surrounding fields have begun to (2) ____. The problem is made worse by the lack of trees, whose shade and moisture would otherwise help to (3) ____ the temperature. As summers become hotter, this extra warmth can pose a real (4) ____ to elderly residents and to people who are already unwell. Planners are therefore looking at simple measures, such as planting more greenery and using lighter materials, that could make crowded cities noticeably more (5) ____.",
    blanks: [
      { n: 1, opts: ['call', 'hide', 'forget', 'sell'], ans: 0, tr: "'scientists call the urban heat island' = bilim insanlarının kentsel ısı adası dediği; bir olguya isim verme. 'call' burada 'adlandırmak'.", en: "'scientists call the urban heat island' = name the phenomenon. 'call' here means 'name'." },
      { n: 2, opts: ['warm', 'cool', 'grow', 'shine'], ans: 1, tr: "'fields have begun to cool' = kırların serinlemeye başlaması; şehirle karşıtlık. 'warm' tersini söyler.", en: "'fields have begun to cool' contrasts with the warm city. 'warm' says the opposite." },
      { n: 3, opts: ['raise', 'lower', 'hide', 'count'], ans: 1, tr: "'help to lower the temperature' = sıcaklığı düşürmeye yardımcı olmak; ağaç gölgesinin işlevi. 'raise' çelişir.", en: "'help to lower the temperature' fits the role of shade. 'raise' contradicts." },
      { n: 4, opts: ['benefit', 'risk', 'reward', 'choice'], ans: 1, tr: "'pose a real risk to elderly residents' = yaşlı sakinlere gerçek bir tehlike oluşturmak; aşırı sıcağın olumsuz etkisi. 'benefit' çelişir.", en: "'pose a real risk to elderly residents' fits the danger of extra heat. 'benefit' contradicts." },
      { n: 5, opts: ['hotter', 'cooler', 'larger', 'older'], ans: 1, tr: "'noticeably more cooler' → doğru sözcük 'cooler'; önlemlerin amacı şehri serinletmek. 'hotter' amacı tersine çevirir.", en: "'noticeably cooler' fits: the measures aim to cool cities. 'hotter' reverses the aim." }
    ]
  }
];
content.cloze = cloze;

// ---------------------------------------------------------------------------
// RESTATE (20) — closest restatement
// ---------------------------------------------------------------------------
const restate = [
  {
    id: 'rs_x1_climate_migration', lv: 'C1', field: 'sosyal',
    stem: "Although the report acknowledges that climate change will displace millions of people, it stops short of recommending any binding international agreement.",
    opts: [
      "The report denies that climate change will force anyone to move and therefore sees no need for an agreement.",
      "While the report admits that climate change will drive mass displacement, it does not go so far as to call for a binding international treaty.",
      "The report calls for a binding international agreement precisely because climate change will displace millions.",
      "The report argues that an international agreement would be useless against the displacement caused by climate change."
    ],
    ans: 1,
    tr: "'acknowledges ... but stops short of recommending' = kabul eder ama önermeye varmaz; B şıkkı hem kabulü hem de çekinceyi korur. C ve D zıt anlam, A ise kabulü inkâr ediyor.",
    en: "'acknowledges ... but stops short of recommending' keeps both the admission and the reservation; only B preserves both. C/D reverse it; A denies the admission."
  },
  {
    id: 'rs_x1_placebo_effect', lv: 'C1', field: 'saglik',
    stem: "The improvement reported by some patients may owe less to the drug itself than to their expectation that it will work.",
    opts: [
      "The drug is clearly responsible for the improvement that patients report.",
      "Patients improve only when they have no expectations about the drug.",
      "The reported improvement might stem more from patients' expectations than from the medicine.",
      "Patients' expectations have no measurable effect on whether they improve."
    ],
    ans: 2,
    tr: "'may owe less to X than to Y' = X'ten çok Y'ye bağlı olabilir; C bu karşılaştırmayı (beklenti > ilaç) korur. A ilacı sorumlu tutarak, D beklentiyi yok sayarak çelişir.",
    en: "'may owe less to X than to Y' means it is more due to Y (expectation) than X (drug); C keeps this. A credits the drug, D dismisses expectation — both wrong."
  },
  {
    id: 'rs_x1_ancient_diet', lv: 'B2', field: 'sosyal',
    stem: "Analysis of the bones suggests that the community relied heavily on fish, rather than on farmed grain as scholars had previously assumed.",
    opts: [
      "The bones show that the community ate mostly fish, contrary to the earlier belief that grain was their main food.",
      "The bones confirm the old view that the community lived mainly on farmed grain.",
      "The community ate neither fish nor grain, according to the bones.",
      "Scholars still believe that grain was more important than fish for this community."
    ],
    ans: 0,
    tr: "'relied heavily on fish, rather than on grain as scholars had assumed' = balığa dayandı, eski varsayım olan tahıla değil; A bu karşıtlığı korur. B eski görüşü doğruluyor, yanlış.",
    en: "'relied on fish, rather than grain as scholars had assumed' contrasts new finding with old assumption; A keeps it. B affirms the old view, which is wrong."
  },
  {
    id: 'rs_x1_automation_jobs', lv: 'C1', field: 'sosyal',
    stem: "Automation is likely to eliminate many routine jobs, but it may also create new roles that we cannot yet imagine.",
    opts: [
      "Automation will destroy jobs without producing any new ones.",
      "Although automation will probably remove many routine jobs, it could also generate new kinds of work that are hard to foresee.",
      "Automation will create new jobs only by preserving the routine ones.",
      "The new roles created by automation are already clearly understood."
    ],
    ans: 1,
    tr: "'likely to eliminate ... but may also create' = hem yok edebilir hem de yaratabilir; B her iki yönü korur. A yaratımı yok sayar, D 'cannot yet imagine' ile çelişir.",
    en: "'likely to eliminate ... but may also create' keeps both sides; B preserves them. A drops creation; D contradicts 'cannot yet imagine'."
  },
  {
    id: 'rs_x1_volcano_warning', lv: 'B2', field: 'fen',
    stem: "Scientists cannot predict the exact day a volcano will erupt, but they can often tell when an eruption is becoming more likely.",
    opts: [
      "Scientists can name the precise day of an eruption well in advance.",
      "Scientists know nothing about when a volcano might erupt.",
      "Though scientists cannot fix the exact date of an eruption, they can frequently detect when one is growing more probable.",
      "Volcanic eruptions happen without any warning signs at all."
    ],
    ans: 2,
    tr: "'cannot predict the exact day but can tell when more likely' = kesin günü değil ama olasılığın arttığını söyleyebilir; C bu ayrımı korur. A ve D aşırı uçlardır.",
    en: "'cannot predict the exact day but can tell when more likely' is preserved in C. A and D are extremes that distort the meaning."
  },
  {
    id: 'rs_x1_reading_habits', lv: 'B2', field: 'sosyal',
    stem: "The survey found that people who read regularly as children are more likely to enjoy books as adults.",
    opts: [
      "Childhood reading has no connection with whether adults enjoy books.",
      "Adults who dislike books were always frequent readers in childhood.",
      "According to the survey, regular reading in childhood is linked to a greater enjoyment of books later in life.",
      "The survey proves that reading in childhood guarantees a love of books forever."
    ],
    ans: 2,
    tr: "'more likely to enjoy' = olasılık ifadesi; C bu ihtimalli bağı korur. D 'guarantees' diyerek kesinliğe kaçar, abartır.",
    en: "'more likely to enjoy' is a probabilistic link, kept in C. D overstates it with 'guarantees'."
  },
  {
    id: 'rs_x1_economic_growth', lv: 'C1', field: 'sosyal',
    stem: "Rapid economic growth raised average incomes, yet it did little to narrow the gap between the richest and the poorest.",
    opts: [
      "Economic growth both raised incomes and sharply reduced inequality.",
      "Although growth lifted average incomes, it had hardly any effect on the divide between rich and poor.",
      "Economic growth lowered average incomes while widening inequality.",
      "Growth closed the gap between rich and poor without changing average incomes."
    ],
    ans: 1,
    tr: "'raised incomes, yet did little to narrow the gap' = gelir arttı ama uçurum daralmadı; B bu karşıtlığı korur. A eşitsizliğin azaldığını söyleyerek çelişir.",
    en: "'raised incomes, yet did little to narrow the gap' — B keeps both. A wrongly says inequality fell."
  },
  {
    id: 'rs_x1_bilingual_brain', lv: 'C1', field: 'saglik',
    stem: "Speaking two languages from an early age does not delay a child's development, as was once feared, but appears to strengthen certain mental skills.",
    opts: [
      "Learning two languages early seriously slows down a child's development.",
      "Contrary to earlier fears, early bilingualism does not hold back development and may even enhance some cognitive abilities.",
      "Bilingual children develop at exactly the same rate as others, with no advantages.",
      "Children should avoid learning two languages until they are older."
    ],
    ans: 1,
    tr: "'does not delay ... but appears to strengthen' = geciktirmez, hatta güçlendirir; B her iki noktayı korur. A eski korkuyu doğru sayar, C avantajı yok sayar.",
    en: "'does not delay ... but appears to strengthen' — B keeps both. A affirms the old fear; C ignores the advantage."
  },
  {
    id: 'rs_x1_museum_funding', lv: 'B2', field: 'sosyal',
    stem: "Without additional funding, the museum will be forced to reduce its opening hours and cancel several educational programmes.",
    opts: [
      "The museum will expand its programmes even if it receives no extra money.",
      "Unless it obtains more money, the museum will have to cut its hours and drop some of its educational programmes.",
      "The museum has already received the funding it needs to stay open.",
      "Educational programmes are the only thing the museum plans to keep."
    ],
    ans: 1,
    tr: "'Without additional funding ... will be forced to reduce/cancel' = ek fon olmazsa kısmak zorunda; B koşul-sonuç bağını korur. A ve C koşulu tersine çevirir.",
    en: "'Without additional funding ... will be forced to reduce/cancel' — B keeps the condition-consequence link. A and C reverse the condition."
  },
  {
    id: 'rs_x1_renewable_cost', lv: 'C1', field: 'fen',
    stem: "The cost of solar power has fallen so dramatically that it is now cheaper than coal in many parts of the world.",
    opts: [
      "Solar power remains far more expensive than coal almost everywhere.",
      "Coal has become cheaper than solar power across most of the globe.",
      "Solar power's price has dropped so sharply that, in many regions, it now undercuts coal.",
      "The price of solar power has hardly changed in recent years."
    ],
    ans: 2,
    tr: "'fallen so dramatically that it is now cheaper than coal' = öyle düştü ki kömürden ucuz; C bu sonucu korur. A ve B fiyat ilişkisini ters çevirir, D düşüşü yok sayar.",
    en: "'fallen so dramatically that it is now cheaper than coal' — C keeps it. A/B reverse the price relation; D denies the drop."
  },
  {
    id: 'rs_x1_stress_health', lv: 'B2', field: 'saglik',
    stem: "Long periods of stress can weaken the immune system, making people more vulnerable to common infections.",
    opts: [
      "Stress strengthens the immune system and protects people from infection.",
      "Prolonged stress can lower the body's defences, leaving people more open to ordinary infections.",
      "Infections are the main cause of long-term stress in most people.",
      "Stress affects the immune system only over very short periods."
    ],
    ans: 1,
    tr: "'weaken the immune system, making more vulnerable' = bağışıklığı zayıflatır, savunmasız bırakır; B aynı neden-sonucu korur. A tam tersini söyler.",
    en: "'weaken the immune system, making more vulnerable' — B keeps the cause-effect. A says the opposite."
  },
  {
    id: 'rs_x1_trade_route', lv: 'C1', field: 'sosyal',
    stem: "Far from being isolated, the early city maintained extensive contacts with distant regions through a network of trade routes.",
    opts: [
      "The early city was completely cut off from the rest of the world.",
      "Trade routes existed but the city refused to use them.",
      "Rather than standing alone, the early city was widely connected to far-off regions by trade routes.",
      "The city traded only with its immediate neighbours."
    ],
    ans: 2,
    tr: "'Far from being isolated ... maintained extensive contacts' = izole olmak şöyle dursun, geniş temaslar; C bu vurguyu korur. A ve D izolasyonu öne sürerek çelişir.",
    en: "'Far from being isolated ... maintained extensive contacts' — C keeps the emphasis. A and D wrongly suggest isolation."
  },
  {
    id: 'rs_x1_exercise_mood', lv: 'B2', field: 'saglik',
    stem: "Regular physical activity not only improves fitness but also helps to reduce feelings of anxiety and low mood.",
    opts: [
      "Exercise improves fitness but has no effect on a person's mood.",
      "Besides making people fitter, regular exercise can also ease anxiety and lift a low mood.",
      "Exercise lifts the mood only in people who are already very fit.",
      "Physical activity increases anxiety in most people who try it."
    ],
    ans: 1,
    tr: "'not only improves fitness but also reduces anxiety' = hem formu artırır hem kaygıyı azaltır; B her iki yararı korur. A ruh hali etkisini, D yönü yok sayar/ters çevirir.",
    en: "'not only improves fitness but also reduces anxiety' — B keeps both benefits. A drops the mood effect; D reverses it."
  },
  {
    id: 'rs_x1_language_loss', lv: 'C1', field: 'sosyal',
    stem: "When a language disappears, it is not only words that are lost but also a unique way of understanding the world.",
    opts: [
      "The loss of a language means losing only a list of words.",
      "Languages disappear because their words are no longer useful.",
      "The death of a language takes with it not merely its vocabulary but a distinctive way of seeing the world.",
      "A vanished language can always be fully recovered from its words."
    ],
    ans: 2,
    tr: "'not only words ... but also a unique way of understanding' = sadece sözcükler değil, dünyayı anlamanın özgün bir biçimi; C bu eklemeyi korur. A 'sadece sözcük' diyerek eksiltir.",
    en: "'not only words ... but also a unique way of understanding' — C keeps the addition. A reduces it to 'just words'."
  },
  {
    id: 'rs_x1_screen_sleep', lv: 'B2', field: 'saglik',
    stem: "Using bright screens late at night can make it harder to fall asleep, because the light interferes with the body's natural rhythms.",
    opts: [
      "Bright screens at night help people fall asleep more quickly.",
      "The body's rhythms have nothing to do with screen light.",
      "Looking at bright screens late at night may delay sleep, since the light disrupts the body's natural rhythms.",
      "People sleep better the more they use screens before bed."
    ],
    ans: 2,
    tr: "'make it harder to fall asleep, because the light interferes' = uykuyu zorlaştırır çünkü ışık ritmi bozar; C neden-sonucu korur. A ve D tersini iddia eder.",
    en: "'make it harder to fall asleep, because the light interferes' — C keeps the cause-effect. A and D claim the opposite."
  },
  {
    id: 'rs_x1_fossil_record', lv: 'C1', field: 'fen',
    stem: "The fossil record is incomplete, so the absence of a species from a particular layer does not necessarily mean it was extinct at that time.",
    opts: [
      "If a species is missing from a layer, it was certainly extinct then.",
      "Because the fossil record has gaps, a species' absence from a layer does not prove it had died out by then.",
      "The fossil record is complete, so missing species must have been extinct.",
      "Fossils can never tell us anything about when species lived."
    ],
    ans: 1,
    tr: "'incomplete, so absence does not necessarily mean extinct' = eksik olduğundan yokluk mutlaka soy tükenmesi demek değil; B bu temkinli çıkarımı korur. A kesinlik ekleyerek çelişir.",
    en: "'incomplete, so absence does not necessarily mean extinct' — B keeps the cautious inference. A adds false certainty."
  },
  {
    id: 'rs_x1_tax_reform', lv: 'C1', field: 'sosyal',
    stem: "The proposed reform would simplify the tax system, though critics worry that it could reduce the revenue available for public services.",
    opts: [
      "The reform would complicate the tax system and increase public revenue.",
      "Everyone agrees the reform would raise more money for public services.",
      "While the reform would make the tax system simpler, opponents fear it might cut the funds available for public services.",
      "Critics believe the reform would have no effect on public services at all."
    ],
    ans: 2,
    tr: "'would simplify ... though critics worry it could reduce revenue' = sadeleştirir ama eleştirmenler geliri azaltabileceğinden kaygılı; C her iki yönü korur. A sadeleştirmeyi ters çevirir.",
    en: "'would simplify ... though critics worry it could reduce revenue' — C keeps both. A reverses the simplification."
  },
  {
    id: 'rs_x1_robot_surgery', lv: 'C1', field: 'saglik',
    stem: "Robotic systems can assist surgeons by improving precision, but they are tools that still depend entirely on human judgement.",
    opts: [
      "Robotic systems have replaced surgeons and now operate on their own.",
      "Robots make surgery less precise and should not be used.",
      "Although robotic systems can make surgery more precise, they remain instruments that rely completely on human decision-making.",
      "Human judgement plays no part once a robotic system is used."
    ],
    ans: 2,
    tr: "'can assist ... but still depend entirely on human judgement' = yardımcı olur ama tamamen insan kararına bağlıdır; C bu dengeyi korur. A ve D insan rolünü siler.",
    en: "'can assist ... but still depend entirely on human judgement' — C keeps the balance. A and D erase the human role."
  },
  {
    id: 'rs_x1_plastic_ocean', lv: 'B2', field: 'fen',
    stem: "Much of the plastic that ends up in the ocean breaks into tiny pieces that are almost impossible to remove.",
    opts: [
      "Plastic in the ocean stays in large pieces that are easy to collect.",
      "A large part of ocean plastic fragments into minuscule particles that can scarcely be cleared away.",
      "The ocean naturally dissolves all the plastic that reaches it.",
      "Removing plastic from the ocean is a simple and quick task."
    ],
    ans: 1,
    tr: "'breaks into tiny pieces almost impossible to remove' = temizlemesi neredeyse imkânsız küçük parçalara ayrılır; B bunu korur. A ve D zorluğu yok sayar.",
    en: "'breaks into tiny pieces almost impossible to remove' — B keeps it. A and D deny the difficulty."
  },
  {
    id: 'rs_x1_remote_work', lv: 'B2', field: 'sosyal',
    stem: "Remote work offers employees greater flexibility, but it can also blur the boundary between professional and personal life.",
    opts: [
      "Remote work removes all flexibility from employees' schedules.",
      "Working from home keeps work and personal life strictly separate.",
      "While remote work gives employees more flexibility, it may also make the line between work and home life less clear.",
      "Remote work has no effect on the balance between work and personal life."
    ],
    ans: 2,
    tr: "'offers flexibility, but can blur the boundary' = esneklik sağlar ama sınırı bulanıklaştırabilir; C her iki yönü korur. B sınırın net kaldığını söyleyerek çelişir.",
    en: "'offers flexibility, but can blur the boundary' — C keeps both. B wrongly says the line stays sharp."
  }
];
content.restate = restate;

// ---------------------------------------------------------------------------
// ODDOUT (15) — sentence breaking the coherence of a 5-sentence paragraph
// ---------------------------------------------------------------------------
const oddout = [
  {
    id: 'oo_x1_printing_press', lv: 'C1', field: 'sosyal',
    sentences: [
      "The invention of the printing press in the fifteenth century made it possible to produce books far more quickly than by hand.",
      "As a result, texts that had once been rare and expensive gradually became affordable to a much wider public.",
      "This rapid spread of printed material helped ideas to circulate across borders with unprecedented speed.",
      "Many early printers, however, complained that the quality of locally produced paper was disappointingly poor.",
      "Within a few generations, literacy rates began to rise in regions where printing had taken hold."
    ],
    ans: 3,
    tr: "Paragraf matbaanın fikirlerin yayılması ve okuryazarlık üzerindeki etkisini anlatır; 4. cümle 'kâğıt kalitesinden şikâyet' yan bir ayrıntı olup bütünlüğü bozar.",
    en: "The paragraph is about printing spreading ideas and literacy; sentence 4 about poor paper quality is a side detail that breaks the unity."
  },
  {
    id: 'oo_x1_photosynthesis', lv: 'B2', field: 'fen',
    sentences: [
      "Plants use sunlight to turn water and carbon dioxide into the sugars they need to grow.",
      "This process, called photosynthesis, takes place mainly in the green parts of the plant.",
      "In doing so, plants release oxygen, which most living things depend on to breathe.",
      "Some gardeners prefer to plant their vegetables in neat, straight rows.",
      "Without photosynthesis, life as we know it on Earth could not exist."
    ],
    ans: 3,
    tr: "Paragraf fotosentezi ve önemini açıklar; 4. cümle 'bahçıvanların düzgün sıralar tercih etmesi' konuyla ilgisizdir.",
    en: "The paragraph explains photosynthesis and its importance; sentence 4 about gardeners' neat rows is irrelevant."
  },
  {
    id: 'oo_x1_sleep_teenagers', lv: 'B2', field: 'saglik',
    sentences: [
      "Many teenagers find it difficult to fall asleep early, partly because of natural changes in their body clock.",
      "Yet most schools still begin classes at a time that suits younger children far better.",
      "As a result, a large number of adolescents arrive at school without having had enough sleep.",
      "Researchers say this lack of rest can affect both their mood and their ability to concentrate.",
      "Football remains one of the most popular sports among students of this age."
    ],
    ans: 4,
    tr: "Paragraf ergenlerde uyku eksikliği ve etkilerini ele alır; 5. cümle 'futbolun popülerliği' bağlam dışıdır.",
    en: "The paragraph is about teenage sleep deprivation; sentence 5 about football's popularity is off-topic."
  },
  {
    id: 'oo_x1_roman_roads', lv: 'C1', field: 'sosyal',
    sentences: [
      "The Romans built an extensive network of roads to move their armies quickly across the empire.",
      "These roads were carefully engineered, with solid foundations and drainage that allowed them to last for centuries.",
      "Merchants soon took advantage of them, and trade flourished along the same routes the legions used.",
      "Modern tourists today often prefer to travel by high-speed train rather than by car.",
      "Long after the empire fell, many of these roads continued to shape the movement of people and goods."
    ],
    ans: 3,
    tr: "Paragraf Roma yollarının askeri ve ticari önemini anlatır; 4. cümle 'modern turistlerin tren tercihi' anlam bütünlüğünü bozar.",
    en: "The paragraph concerns Roman roads' military and commercial role; sentence 4 about modern tourists' train preference breaks the unity."
  },
  {
    id: 'oo_x1_bee_decline', lv: 'C1', field: 'fen',
    sentences: [
      "Bees play a vital role in agriculture by pollinating a large share of the crops we eat.",
      "In recent years, however, beekeepers in many countries have reported alarming losses in their colonies.",
      "Scientists suspect that a combination of pesticides, disease, and habitat loss is to blame.",
      "If these trends continue, the cost of producing many fruits and vegetables could rise sharply.",
      "Honey has been used as a natural sweetener since ancient times."
    ],
    ans: 4,
    tr: "Paragraf arı kayıplarının tarımsal sonuçlarını ele alır; 5. cümle 'balın eski çağlardan beri tatlandırıcı olması' konuyla bağlantısızdır.",
    en: "The paragraph is about bee losses and their effect on agriculture; sentence 5 about honey as a sweetener is unrelated."
  },
  {
    id: 'oo_x1_great_depression', lv: 'C1', field: 'sosyal',
    sentences: [
      "The economic collapse of the 1930s threw millions of people out of work across the industrialised world.",
      "Banks failed, factories closed, and families that had once been comfortable suddenly faced hardship.",
      "Governments responded with large public works programmes intended to put people back to work.",
      "These measures marked a lasting change in how states viewed their responsibility for the economy.",
      "Jazz music developed a number of distinctive regional styles during this period."
    ],
    ans: 4,
    tr: "Paragraf Büyük Buhran ve devlet müdahalesini anlatır; 5. cümle 'caz müziğinin bölgesel stilleri' bütünlüğü bozar.",
    en: "The paragraph is about the Depression and state intervention; sentence 5 about jazz styles breaks the unity."
  },
  {
    id: 'oo_x1_vaccination_program', lv: 'B2', field: 'saglik',
    sentences: [
      "A successful vaccination programme depends on reaching a very high proportion of the population.",
      "When enough people are protected, even those who cannot be vaccinated benefit from reduced spread.",
      "For this reason, health workers often travel to remote villages to make sure no one is missed.",
      "Keeping vaccines at the right temperature during transport is another major challenge.",
      "The first hospitals in the region were built largely from local stone."
    ],
    ans: 4,
    tr: "Paragraf aşı programlarının kapsama ve lojistik zorluklarını anlatır; 5. cümle 'hastanelerin taştan yapılması' konu dışıdır.",
    en: "The paragraph concerns vaccination coverage and logistics; sentence 5 about hospitals built from stone is off-topic."
  },
  {
    id: 'oo_x1_glacier_melt', lv: 'C1', field: 'fen',
    sentences: [
      "Glaciers act as natural reservoirs, storing water as ice in winter and releasing it slowly in summer.",
      "Millions of people downstream rely on this steady flow for drinking water and irrigation.",
      "As the climate warms, however, many glaciers are shrinking faster than they can be replenished.",
      "In the short term this produces more meltwater, but in the long term the supply may sharply decline.",
      "Mountaineering became a fashionable pastime among the European middle classes in the nineteenth century."
    ],
    ans: 4,
    tr: "Paragraf buzulların su kaynağı işlevini ve erimesini anlatır; 5. cümle 'dağcılığın moda olması' bağlam dışıdır.",
    en: "The paragraph is about glaciers as water sources and their melting; sentence 5 about mountaineering as fashion is off-topic."
  },
  {
    id: 'oo_x1_writing_origins', lv: 'C1', field: 'sosyal',
    sentences: [
      "The earliest writing systems seem to have developed not for literature but for keeping records.",
      "Merchants and officials needed a reliable way to track goods, debts, and payments.",
      "Over time, these practical signs grew into scripts capable of expressing complex ideas.",
      "Eventually, the same systems were used to record laws, prayers, and stories.",
      "Clay is a soft material that hardens when it is heated in a fire."
    ],
    ans: 4,
    tr: "Paragraf yazının kayıt tutmadan edebiyata doğru gelişimini anlatır; 5. cümle 'kilin ısıtılınca sertleşmesi' genel bir bilgi olup bütünlüğü bozar.",
    en: "The paragraph traces writing from record-keeping to literature; sentence 5 about clay hardening is a generic fact that breaks the unity."
  },
  {
    id: 'oo_x1_memory_eyewitness', lv: 'C1', field: 'saglik',
    sentences: [
      "People tend to assume that memory works like a recording that can be played back exactly.",
      "In reality, every act of remembering involves reconstructing the past rather than replaying it.",
      "Because of this, witnesses can sincerely report details that never actually happened.",
      "Researchers have shown that even simple leading questions can reshape what a person recalls.",
      "Many courtrooms are decorated with wood panelling and high ceilings."
    ],
    ans: 4,
    tr: "Paragraf belleğin yeniden inşa edici doğasını ve tanık güvenilirliğini anlatır; 5. cümle 'mahkeme salonlarının dekoru' konuyla ilgisizdir.",
    en: "The paragraph is about reconstructive memory and witness reliability; sentence 5 about courtroom decor is unrelated."
  },
  {
    id: 'oo_x1_solar_panels', lv: 'B2', field: 'fen',
    sentences: [
      "Solar panels convert sunlight directly into electricity without any moving parts.",
      "Because of this, they are quiet, clean, and relatively cheap to maintain.",
      "Their output falls on cloudy days, so they are often paired with batteries or other sources.",
      "As prices have dropped, panels have appeared on the roofs of homes all over the world.",
      "The first long-distance telephone call was a remarkable technical achievement."
    ],
    ans: 4,
    tr: "Paragraf güneş panellerinin işleyişi ve yayılmasını anlatır; 5. cümle 'ilk şehirlerarası telefon görüşmesi' konu dışıdır.",
    en: "The paragraph is about how solar panels work and spread; sentence 5 about the first telephone call is off-topic."
  },
  {
    id: 'oo_x1_archaeology_methods', lv: 'C1', field: 'sosyal',
    sentences: [
      "Modern archaeologists rely on far more than the spade to understand the past.",
      "Techniques such as ground-penetrating radar can reveal buried structures without any digging.",
      "Chemical analysis of pottery can show what foods were once stored or cooked in it.",
      "Even tiny grains of pollen can tell researchers which plants grew nearby thousands of years ago.",
      "Most museums close to visitors at least one day a week for cleaning."
    ],
    ans: 4,
    tr: "Paragraf modern arkeolojik yöntemleri sıralar; 5. cümle 'müzelerin temizlik için kapanması' bütünlüğü bozar.",
    en: "The paragraph lists modern archaeological methods; sentence 5 about museum closing days breaks the unity."
  },
  {
    id: 'oo_x1_obesity_diet', lv: 'B2', field: 'saglik',
    sentences: [
      "Rates of obesity have risen sharply in many countries over the past few decades.",
      "Experts point to diets high in sugar and fat, combined with increasingly inactive lifestyles.",
      "Cheap, energy-dense food is now available almost everywhere and at any hour.",
      "Meanwhile, many jobs that once involved physical effort are now done sitting at a desk.",
      "The recipe calls for two eggs, a cup of flour, and a pinch of salt."
    ],
    ans: 4,
    tr: "Paragraf obezite artışının nedenlerini açıklar; 5. cümle bir 'yemek tarifi' olup konuyla bağlantısızdır.",
    en: "The paragraph explains the causes of rising obesity; sentence 5, a recipe, is unrelated."
  },
  {
    id: 'oo_x1_river_civilisation', lv: 'C1', field: 'sosyal',
    sentences: [
      "Some of the earliest civilisations grew up along the banks of great rivers.",
      "The yearly floods left behind fertile soil that made reliable farming possible.",
      "Surplus food allowed some people to specialise in crafts, trade, or administration.",
      "From these settlements eventually emerged cities, writing, and organised states.",
      "Sailing boats are usually faster than rowing boats when the wind is strong."
    ],
    ans: 4,
    tr: "Paragraf nehir kenarındaki erken uygarlıkların doğuşunu anlatır; 5. cümle 'yelkenli teknelerin hızı' konu dışıdır.",
    en: "The paragraph is about early river civilisations; sentence 5 about sailing boats' speed is off-topic."
  },
  {
    id: 'oo_x1_ai_translation', lv: 'C1', field: 'fen',
    sentences: [
      "Machine translation has improved enormously thanks to systems trained on vast amounts of text.",
      "These tools can now produce fluent drafts that would have seemed impossible a generation ago.",
      "Yet they still struggle with humour, cultural references, and deliberate ambiguity.",
      "For this reason, professional translators remain essential for sensitive or creative work.",
      "The oldest surviving libraries were often attached to temples or palaces."
    ],
    ans: 4,
    tr: "Paragraf makine çevirisinin gelişimi ve sınırlarını anlatır; 5. cümle 'en eski kütüphaneler' konu dışıdır.",
    en: "The paragraph is about the progress and limits of machine translation; sentence 5 about ancient libraries is off-topic."
  }
];
content.oddout = oddout;

// ---------------------------------------------------------------------------
// DIALOGUE (12) — fill the missing turn
// ---------------------------------------------------------------------------
const dialogue = [
  {
    id: 'dlg_x1_research_funding', lv: 'C1', field: 'sosyal',
    lines: [
      { sp: 'A', t: "Our proposal was technically excellent, yet the committee still rejected it." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "You may be right. Perhaps we failed to show how the findings would benefit the wider public." }
    ],
    blankIndex: 1,
    opts: [
      "I suppose the science simply wasn't strong enough, then.",
      "Maybe the problem wasn't the quality of the work but how well we explained its relevance.",
      "Then we should submit exactly the same proposal again next year.",
      "It clearly means they never read the proposal at all."
    ],
    ans: 1,
    tr: "A teknik mükemmellik olmasına rağmen reddi vurguluyor; sonrasında 'kamu yararını gösterememek'i kabul ediyor. B, kaliteyi değil anlatımı sorgulayarak bu akışa uyar.",
    en: "A stresses rejection despite technical excellence and then concedes they failed to show public relevance. B fits by questioning the framing, not the quality."
  },
  {
    id: 'dlg_x1_museum_visit', lv: 'B2', field: 'sosyal',
    lines: [
      { sp: 'A', t: "Did you manage to see the new exhibition at the history museum?" },
      { sp: 'B', t: "I did, but honestly the labels were so long that I gave up reading them." },
      { sp: 'A', t: "____" },
      { sp: 'B', t: "Exactly. A few clear sentences would have told me far more than those huge paragraphs." }
    ],
    blankIndex: 2,
    opts: [
      "I agree the rooms were far too dark to see anything.",
      "That's a shame, because the entrance fee was quite cheap.",
      "I know what you mean; sometimes too much information is worse than too little.",
      "So you think the museum should add even more detail to the labels?"
    ],
    ans: 2,
    tr: "B etiketlerin fazla uzun olmasından yakınır; sonraki replikte 'birkaç net cümle daha iyi olurdu' der. C, fazla bilginin azdan kötü olabileceğini söyleyerek köprü kurar.",
    en: "B complains the labels were too long and then says a few clear sentences would help more. C bridges this by noting too much information can be worse than too little."
  },
  {
    id: 'dlg_x1_lab_result', lv: 'C1', field: 'saglik',
    lines: [
      { sp: 'A', t: "The trial showed improvement, but only in a very small number of patients." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "That's exactly my concern. With so few cases, we can't rule out that it happened by chance." }
    ],
    blankIndex: 1,
    opts: [
      "Then we can confidently recommend the treatment to everyone.",
      "So the sample may simply be too small to draw any firm conclusion.",
      "That proves the drug works better than any other on the market.",
      "It means the patients must have been misdiagnosed from the start."
    ],
    ans: 1,
    tr: "A çok az hastada iyileşmeyi belirtir; sonra 'şans eseri olabilir' kaygısını onaylar. B, örneklemin kesin sonuç için fazla küçük olduğunu söyleyerek uyumludur.",
    en: "A notes improvement in very few patients and then confirms a worry about chance. B fits by saying the sample may be too small for a firm conclusion."
  },
  {
    id: 'dlg_x1_recycling', lv: 'B2', field: 'fen',
    lines: [
      { sp: 'A', t: "I always rinse the jars before putting them in the recycling bin." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "Really? I had no idea that a little leftover food could ruin a whole batch." }
    ],
    blankIndex: 1,
    opts: [
      "That's pointless; nobody checks whether the containers are clean.",
      "It's a good habit, actually — dirty containers can contaminate everything else in the load.",
      "You should stop recycling altogether to save time.",
      "Glass jars can never be recycled, whatever you do with them."
    ],
    ans: 1,
    tr: "A kavanozları yıkadığını söyler; sonra 'az artığın tüm partiyi bozabileceğini bilmediğini' belirtir. B bu bilgiyi vererek mantıklı köprü kurar.",
    en: "A says they rinse jars; A then admits surprise that leftover food could ruin a batch. B supplies that very information, making it the logical bridge."
  },
  {
    id: 'dlg_x1_job_interview', lv: 'C1', field: 'sosyal',
    lines: [
      { sp: 'A', t: "They said I was overqualified for the position. I'm not sure how to take that." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "I hadn't thought of it that way. Maybe they assumed I'd leave as soon as something better came along." }
    ],
    blankIndex: 1,
    opts: [
      "It probably just means they didn't read your CV properly.",
      "Sometimes employers worry that very experienced candidates will quickly become bored and move on.",
      "You should take it as a clear sign that you got the job.",
      "Being overqualified always guarantees a higher salary."
    ],
    ans: 1,
    tr: "A 'aşırı nitelikli' denmesine şaşırır; sonra 'daha iyisi çıkınca ayrılacağımı düşündüler' diye yorumlar. B tam bu kaygıyı dile getirerek akışı tamamlar.",
    en: "A is puzzled at being called overqualified and then reasons the employer feared they'd leave. B voices exactly that concern, completing the flow."
  },
  {
    id: 'dlg_x1_history_class', lv: 'B2', field: 'sosyal',
    lines: [
      { sp: 'A', t: "Our teacher says we shouldn't trust a single source when studying the past." },
      { sp: 'B', t: "Why not? If someone wrote it down at the time, surely it must be accurate." },
      { sp: 'A', t: "____" },
      { sp: 'B', t: "I see — so even an eyewitness might describe events in a way that suits their own side." }
    ],
    blankIndex: 2,
    opts: [
      "Yes, written records are always completely neutral.",
      "Not necessarily; the person writing usually had their own interests and point of view.",
      "That's true, which is why one source is always enough.",
      "Then we should ignore written records entirely."
    ],
    ans: 1,
    tr: "B 'aynı dönemde yazıldıysa doğrudur' der; sonra 'tanık bile kendi tarafına göre anlatabilir' diye anlar. A, yazanın kendi çıkarı olduğunu söyleyerek bu kavrayışı hazırlar.",
    en: "B claims a contemporary record must be accurate, then realises even a witness may be biased. A's reply about the writer's own interests sets up that realisation."
  },
  {
    id: 'dlg_x1_app_design', lv: 'C1', field: 'fen',
    lines: [
      { sp: 'A', t: "Users keep complaining that the app is confusing, even though we added lots of new features." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "You might be onto something. Maybe we should remove a few options rather than keep adding them." }
    ],
    blankIndex: 1,
    opts: [
      "Then we clearly need to add even more features as quickly as possible.",
      "Perhaps all those extra features are precisely what's making it harder to use.",
      "It must mean the users simply aren't intelligent enough.",
      "The app is obviously perfect, so the complaints can be ignored."
    ],
    ans: 1,
    tr: "A özellik eklemeye rağmen kafa karışıklığından yakınır; sonra 'seçenek çıkaralım' der. B fazla özelliğin sorunun kaynağı olabileceğini söyleyerek bunu hazırlar.",
    en: "A complains of confusion despite added features, then suggests removing options. B fits by proposing the extra features themselves cause the difficulty."
  },
  {
    id: 'dlg_x1_diet_advice', lv: 'B2', field: 'saglik',
    lines: [
      { sp: 'A', t: "I've cut out every kind of fat from my diet to lose weight." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "Oh, I didn't realise that. So some fats are actually good for me?" }
    ],
    blankIndex: 1,
    opts: [
      "That's wise; the body has absolutely no use for fat of any kind.",
      "Be careful, though — the body actually needs some fats to work properly.",
      "Good idea; you should also stop drinking water for a while.",
      "There's no point; diet has nothing to do with weight."
    ],
    ans: 1,
    tr: "A tüm yağları kestiğini söyler; sonra 'bazı yağlar iyi mi?' diye sorar. B, vücudun bazı yağlara ihtiyaç duyduğunu söyleyerek bu soruyu hazırlar.",
    en: "A says they cut out all fat, then asks whether some fats are good. B sets that up by noting the body needs some fats."
  },
  {
    id: 'dlg_x1_economy_news', lv: 'C1', field: 'sosyal',
    lines: [
      { sp: 'A', t: "The headlines say unemployment is falling, so the economy must be doing well." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "That's a fair point. If people have simply stopped looking for work, the figure could be misleading." }
    ],
    blankIndex: 1,
    opts: [
      "Absolutely, a falling rate always tells the whole story.",
      "Not so fast — the rate can also fall when discouraged people give up searching altogether.",
      "It means wages must be rising for everyone right now.",
      "Unemployment figures have no connection to the economy."
    ],
    ans: 1,
    tr: "A düşen işsizliği iyi ekonomiye bağlar; sonra 'iş aramayı bırakanlar rakamı yanıltabilir' der. B tam bu nüansı sunarak akışı tamamlar.",
    en: "A links falling unemployment to a strong economy, then concedes discouraged workers can distort it. B introduces exactly that nuance."
  },
  {
    id: 'dlg_x1_dig_site', lv: 'C1', field: 'sosyal',
    lines: [
      { sp: 'A', t: "We found no gold or jewellery at the site, so the dig was basically a failure." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "When you put it like that, those broken pots and seeds probably tell us more about daily life than treasure would." }
    ],
    blankIndex: 1,
    opts: [
      "I agree completely; without valuables, there's nothing worth studying.",
      "I wouldn't say that — everyday objects often reveal far more about how people actually lived.",
      "Then we should stop excavating the area immediately.",
      "Gold is the only thing that ever matters in archaeology."
    ],
    ans: 1,
    tr: "A değerli eşya bulunmadığı için kazıyı başarısız sayar; sonra 'kırık çömlek ve tohumlar günlük yaşamı daha iyi anlatır' der. B gündelik nesnelerin değerini vurgulayarak bunu hazırlar.",
    en: "A calls the dig a failure for lack of valuables, then admits everyday finds reveal daily life better. B fits by stressing the value of ordinary objects."
  },
  {
    id: 'dlg_x1_online_course', lv: 'B2', field: 'sosyal',
    lines: [
      { sp: 'A', t: "I signed up for three online courses this month, but I haven't finished a single one." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "You're probably right. Maybe I should focus on just one course at a time." }
    ],
    blankIndex: 1,
    opts: [
      "Then you should sign up for several more straight away.",
      "Perhaps you've simply taken on too many at once to give any of them proper attention.",
      "It clearly means online courses are a complete waste of time.",
      "You must be the only person who has ever struggled with this."
    ],
    ans: 1,
    tr: "A üç kursa yazılıp hiçbirini bitiremediğini söyler; sonra 'birine odaklanmalıyım' der. B aynı anda çok fazlasını üstlenmeyi işaret ederek bunu hazırlar.",
    en: "A enrolled in three courses and finished none, then decides to focus on one. B sets this up by suggesting they took on too many at once."
  },
  {
    id: 'dlg_x1_clinical_visit', lv: 'C1', field: 'saglik',
    lines: [
      { sp: 'A', t: "The patient insists the new tablets aren't working, even though the tests look fine." },
      { sp: 'B', t: "____" },
      { sp: 'A', t: "Good thinking. I'll ask whether she's been taking them exactly as prescribed before we change anything." }
    ],
    blankIndex: 1,
    opts: [
      "Then we should obviously double the dose right away.",
      "Before adjusting the medication, it might be worth checking how regularly she's actually taking it.",
      "The tests must be wrong, so we can ignore them.",
      "She clearly needs a completely different diagnosis."
    ],
    ans: 1,
    tr: "A testler iyi olsa da hastanın ilacın işe yaramadığını söylediğini belirtir; sonra 'reçeteye uyup uymadığını soracağım' der. B önce uyumu kontrol etmeyi önererek bunu hazırlar.",
    en: "A notes the patient says the tablets fail though tests are fine, then decides to check adherence. B fits by proposing to check how regularly she takes them first."
  }
];
content.dialogue = dialogue;

// ---------------------------------------------------------------------------
// PARACOMP (15) — paragraph completion; gap marked with "----"
// ---------------------------------------------------------------------------
const paracomp = [
  {
    id: 'pc_x1_pompeii', lv: 'C1', field: 'sosyal',
    text: "The eruption that buried Pompeii in AD 79 was a catastrophe for its inhabitants, yet it proved invaluable to later historians. ---- As a result, archaeologists have been able to study not only grand public buildings but also the ordinary details of daily life, from loaves of bread to election notices painted on the walls.",
    opts: [
      "Most other ancient cities were gradually rebuilt and altered over many centuries.",
      "The volcanic ash sealed the town so suddenly that it preserved an entire community almost exactly as it had been.",
      "Modern tourists now arrive at the site in their thousands every single day.",
      "Few written accounts of the disaster have survived into the present."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'kül kasabayı korudu' sonucu (ekmek, duvar yazıları) geliyor. B, külün kasabayı aniden mühürleyip koruduğunu söyleyerek bu sonucu hazırlar.",
    en: "After the gap, the consequence is preservation (bread, wall notices). B explains that the ash suddenly sealed the town, setting up that result."
  },
  {
    id: 'pc_x1_deep_sea', lv: 'C1', field: 'fen',
    text: "The deep ocean was long imagined to be a lifeless desert, too dark and cold for anything to survive. ---- Strange communities of creatures cluster around volcanic vents on the sea floor, drawing energy not from sunlight but from chemicals rising out of the Earth itself.",
    opts: [
      "Sunlight easily reaches even the deepest parts of the sea.",
      "Recent expeditions, however, have revealed that life flourishes even in these extreme depths.",
      "As a result, no one has ever attempted to explore the ocean floor.",
      "Most fish prefer to live close to warm tropical beaches."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'volkanik bacaların çevresinde tuhaf canlılar' örneği geliyor. B, derinlerde bile yaşamın geliştiğini söyleyerek 'however' ile eski görüşü çürütür ve örneği hazırlar.",
    en: "After the gap comes an example of creatures around vents. B, with 'however', overturns the old view and introduces that life thrives at depth."
  },
  {
    id: 'pc_x1_handwashing', lv: 'B2', field: 'saglik',
    text: "When a doctor first suggested that washing hands could prevent the spread of disease, his colleagues largely dismissed the idea. ---- Today, however, hand hygiene is recognised as one of the simplest and most effective ways to stop infections in hospitals.",
    opts: [
      "They immediately adopted his method in every ward of the hospital.",
      "At the time, no one understood that invisible germs could pass from one patient to another.",
      "He had also invented several new surgical instruments.",
      "Most patients in those days recovered very quickly."
    ],
    ans: 1,
    tr: "Boşluk, fikrin reddedilmesi ile bugünkü kabulü arasında köprüdür. B, o dönemde görünmez mikropların bilinmediğini söyleyerek reddi açıklar.",
    en: "The gap bridges the idea's rejection and today's acceptance. B explains the rejection by noting invisible germs were then unknown."
  },
  {
    id: 'pc_x1_currency', lv: 'C1', field: 'sosyal',
    text: "Before the invention of money, people exchanged goods directly through barter, swapping grain for tools or cloth for livestock. ---- A coin, by contrast, could be accepted by anyone and stored until it was needed, which is why money gradually replaced barter in almost every society.",
    opts: [
      "This system worked smoothly as long as both parties were satisfied.",
      "The trouble was that barter only worked when each person happened to want exactly what the other offered.",
      "Livestock were considered the most valuable of all possessions.",
      "Many ancient coins were beautifully decorated with portraits of rulers."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'oysa para herkesçe kabul edilir' karşıtlığı geliyor. B, takasın yalnızca karşılıklı istek varsa işlediğini söyleyerek paranın üstünlüğünü hazırlar.",
    en: "After the gap comes the contrast that a coin is accepted by anyone. B sets it up by noting barter only worked with a double coincidence of wants."
  },
  {
    id: 'pc_x1_antarctica', lv: 'C1', field: 'fen',
    text: "Antarctica holds about seventy per cent of the world's fresh water, locked away in a vast sheet of ice. ---- For this reason, scientists monitor the continent closely, since even a partial loss of this ice could raise sea levels enough to threaten coastal cities around the globe.",
    opts: [
      "The continent is also home to a wide variety of tropical plants.",
      "If even a fraction of that ice were to melt, the effect on the oceans would be enormous.",
      "Very few researchers have ever shown any interest in the region.",
      "Antarctica receives more rainfall than almost anywhere else on Earth."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'bu yüzden bilim insanları yakından izliyor, deniz seviyeleri yükselebilir' geliyor. B, buzun bir kısmının erimesinin etkisinin büyük olacağını söyleyerek bunu hazırlar.",
    en: "After the gap: scientists monitor it because melting could raise sea levels. B sets this up by noting even partial melting would have an enormous effect."
  },
  {
    id: 'pc_x1_habit_formation', lv: 'C1', field: 'saglik',
    text: "People often blame a lack of willpower when they fail to change their behaviour. ---- Researchers suggest that designing one's surroundings carefully — keeping healthy food visible or leaving running shoes by the door — can make good habits far easier to maintain than sheer determination alone.",
    opts: [
      "Willpower is in fact unlimited and never runs out during the day.",
      "Yet studies increasingly show that environment shapes our actions at least as much as personal resolve.",
      "Most people find it very easy to break long-established routines.",
      "Changing a habit has nothing to do with one's daily surroundings."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'çevreyi düzenlemek iradeden daha etkili' örneği geliyor. B, çevrenin davranışı en az irade kadar biçimlendirdiğini söyleyerek bunu hazırlar; D ise örnekle çelişir.",
    en: "After the gap, arranging one's environment beats willpower. B sets this up by noting environment shapes behaviour as much as resolve; D contradicts the example."
  },
  {
    id: 'pc_x1_tree_rings', lv: 'B2', field: 'fen',
    text: "Each year a tree adds a new ring of growth to its trunk, and these rings can be read almost like a diary. ---- A wide ring points to a warm, wet season with plenty of growth, while a narrow one suggests a year of drought or cold.",
    opts: [
      "Trees of the same species always grow at exactly the same speed.",
      "The width of each ring records what the weather was like in that particular year.",
      "Most trees lose all their rings during the winter months.",
      "Counting rings is the only thing scientists can learn from old wood."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'geniş halka sıcak/yağışlı, dar halka kuraklık' geliyor. B, halka genişliğinin o yılki havayı kaydettiğini söyleyerek bunu hazırlar.",
    en: "After the gap: wide ring = warm/wet, narrow = drought. B sets it up by stating ring width records that year's weather."
  },
  {
    id: 'pc_x1_gig_economy', lv: 'C1', field: 'sosyal',
    text: "The rise of digital platforms has created millions of short-term, flexible jobs in what is often called the gig economy. ---- Critics, however, point out that this freedom frequently comes without the security of a steady wage, paid holidays, or protection against sudden loss of work.",
    opts: [
      "Such jobs are valued by some workers for the freedom to choose their own hours.",
      "Traditional factories have completely disappeared as a result.",
      "These platforms refuse to let anyone work flexible hours.",
      "Most gig workers are guaranteed a generous pension."
    ],
    ans: 0,
    tr: "Boşluktan sonra 'eleştirmenler bu özgürlüğün güvencesiz geldiğini söyler' (however) geliyor. A, bazı işçilerin esnekliği özgürlük için değerli bulduğunu söyleyerek karşıtlığı hazırlar.",
    en: "After the gap, critics say this freedom lacks security ('however'). A sets up the contrast by noting some workers value the freedom to set their hours."
  },
  {
    id: 'pc_x1_immune_memory', lv: 'C1', field: 'saglik',
    text: "After the body fights off a particular infection, it does not simply return to its previous state. ---- Thanks to these long-lived defenders, a second encounter with the same germ is often dealt with so quickly that the person never even feels ill.",
    opts: [
      "The immune system forgets every infection within a few hours.",
      "Instead, it keeps a population of specialised cells that remember the invader.",
      "Most infections leave the body permanently weakened.",
      "The body reacts to every germ in exactly the same way."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'bu uzun ömürlü savunucular sayesinde ikinci karşılaşma hızlı atlatılır' geliyor. B, bağışıklığın istilacıyı hatırlayan hücreler tuttuğunu söyleyerek bunu hazırlar.",
    en: "After the gap: thanks to long-lived defenders a second encounter is handled fast. B sets it up by noting the system keeps memory cells of the invader."
  },
  {
    id: 'pc_x1_lost_city', lv: 'C1', field: 'sosyal',
    text: "For decades the location of the ancient city was known only from a few lines in old texts. ---- Using satellite images and ground surveys, a team finally identified faint patterns in the soil that matched the descriptions, and excavation soon confirmed that the long-lost settlement had been found.",
    opts: [
      "The city had in fact never existed outside of legend.",
      "Recent advances in technology, however, gave researchers new tools to search for it.",
      "Nobody had ever bothered to read those old texts.",
      "The texts gave precise modern coordinates for the site."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'uydu görüntüleri ve yüzey araştırması ile bulundu' geliyor. B, yeni teknolojinin arama araçları sağladığını söyleyerek bunu hazırlar.",
    en: "After the gap: satellite imagery and surveys located it. B sets this up by noting new technology gave researchers fresh tools to search."
  },
  {
    id: 'pc_x1_electric_car', lv: 'B2', field: 'fen',
    text: "Electric cars produce no exhaust fumes, which makes them attractive in crowded cities suffering from poor air quality. ---- If that power is generated by burning coal, the overall benefit to the climate is far smaller than it might at first appear.",
    opts: [
      "Their batteries never need to be charged at all.",
      "Yet the electricity they run on still has to be produced somewhere.",
      "Electric cars are always more expensive than petrol ones.",
      "Air quality in cities has nothing to do with traffic."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'o güç kömürle üretilirse iklim faydası küçülür' geliyor. B, kullandıkları elektriğin bir yerde üretilmesi gerektiğini söyleyerek bunu hazırlar.",
    en: "After the gap: if that power comes from coal the climate benefit shrinks. B sets it up by noting the electricity must still be produced somewhere."
  },
  {
    id: 'pc_x1_bystander', lv: 'C1', field: 'saglik',
    text: "It might seem obvious that the more people who witness an emergency, the more likely someone is to help. ---- Psychologists have found the opposite can occur: when many onlookers are present, each individual tends to assume that somebody else will take responsibility, and so no one acts at all.",
    opts: [
      "In practice, a large crowd always guarantees a swift rescue.",
      "Surprisingly, a larger group of witnesses does not necessarily mean faster assistance.",
      "Emergencies are extremely rare in crowded public places.",
      "People in groups are far braver than people on their own."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'psikologlar tersinin olabileceğini bulmuş: herkes başkası yapar sanır' geliyor. B, kalabalık tanığın daha hızlı yardım demek olmadığını söyleyerek bunu hazırlar.",
    en: "After the gap, psychologists find the opposite (diffusion of responsibility). B sets it up by noting more witnesses don't necessarily mean faster help."
  },
  {
    id: 'pc_x1_spice_trade', lv: 'C1', field: 'sosyal',
    text: "In the medieval period, spices such as pepper and cinnamon were worth almost their weight in gold. ---- This extraordinary value drove merchants to undertake long and dangerous journeys, and it eventually encouraged European powers to seek direct sea routes to the lands where the spices grew.",
    opts: [
      "They were so common that nobody paid much attention to them.",
      "Because they could only be grown in distant regions, supplies in Europe were scarce and unpredictable.",
      "Most cooks of the time avoided using any spices at all.",
      "Gold, by comparison, was almost impossible to find."
    ],
    ans: 1,
    tr: "Boşluktan sonra 'bu olağanüstü değer tüccarları uzun yolculuklara itti' geliyor. B, baharatın yalnızca uzak bölgelerde yetiştiği için kıt olduğunu söyleyerek değeri açıklar.",
    en: "After the gap: this extraordinary value drove long voyages. B explains the value by noting spices grew only in distant regions, making supply scarce."
  },
  {
    id: 'pc_x1_microbiome', lv: 'C1', field: 'saglik',
    text: "The human gut is home to trillions of bacteria, and for a long time these were regarded mainly as a threat to be eliminated. ---- It is now clear that many of them help us digest food, produce essential vitamins, and even influence our mood, so that destroying them all would do far more harm than good.",
    opts: [
      "Modern research, however, has revealed how useful these microbes can be.",
      "Bacteria of every kind are equally dangerous to human health.",
      "The gut contains almost no bacteria in a healthy adult.",
      "Scientists still know nothing whatever about gut bacteria."
    ],
    ans: 0,
    tr: "Boşluktan sonra 'sindirim, vitamin, ruh hali' yararları geliyor (now clear). A, araştırmanın bu mikropların yararını ortaya koyduğunu söyleyerek 'however' ile eski görüşü çürütür.",
    en: "After the gap come benefits (digestion, vitamins, mood). A, with 'however', overturns the old view by noting research revealed how useful the microbes are."
  },
  {
    id: 'pc_x1_dark_tourism', lv: 'B2', field: 'sosyal',
    text: "Each year millions of visitors travel to sites associated with disaster, war, or tragedy. ---- Supporters argue that such visits help keep painful memories alive and teach valuable lessons, while critics worry that they can turn human suffering into mere entertainment.",
    opts: [
      "This practice has sparked a lively debate about whether it is respectful or not.",
      "Nobody has ever questioned the purpose of visiting these places.",
      "These sites are usually completely empty throughout the year.",
      "Tourism of this kind brings no money to the local area."
    ],
    ans: 0,
    tr: "Boşluktan sonra 'destekçiler ... eleştirenler ...' tartışması geliyor. A, bu uygulamanın saygılı olup olmadığına dair canlı bir tartışma başlattığını söyleyerek iki görüşü hazırlar.",
    en: "After the gap come supporters vs. critics. A sets up both sides by noting the practice has sparked a lively debate about whether it is respectful."
  }
];
content.paracomp = paracomp;

// ---------------------------------------------------------------------------
// TRANSLATE (15) — 8 en2tr + 7 tr2en; closest translation
// ---------------------------------------------------------------------------
const translate = [
  // --- en2tr (8) ---
  {
    id: 'tx_x1_climate_evidence', lv: 'C1', field: 'fen', dir: 'en2tr',
    source: "The evidence suggests that human activity has played a decisive role in the recent rise in global temperatures.",
    opts: [
      "Kanıtlar, insan faaliyetinin son zamanlardaki küresel sıcaklık artışında belirleyici bir rol oynadığını göstermektedir.",
      "Kanıtlara göre küresel sıcaklıklar insan faaliyetinden bağımsız olarak yükselmiştir.",
      "İnsan faaliyetinin küresel ısınmayı durdurmada önemli bir rol oynadığı ileri sürülmektedir.",
      "Bazı kanıtlar, sıcaklık artışının yakında duracağını ima etmektedir."
    ],
    ans: 0,
    tr: "'has played a decisive role in the recent rise' = son artışta belirleyici rol oynadı; A bunu birebir karşılar. B 'bağımsız', C 'durdurma' diyerek anlamı çarpıtır.",
    en: "'has played a decisive role in the recent rise' is rendered exactly by A. B says 'independent', C says 'stopping' — both distort it."
  },
  {
    id: 'tx_x1_ancient_text', lv: 'C1', field: 'sosyal', dir: 'en2tr',
    source: "Scholars have long debated whether the manuscript was written by a single author or compiled from several earlier sources.",
    opts: [
      "Akademisyenler el yazmasının tek bir yazar tarafından mı yazıldığını yoksa daha eski birkaç kaynaktan mı derlendiğini uzun süredir tartışmaktadır.",
      "Akademisyenler el yazmasının kim tarafından yazıldığını hiçbir zaman merak etmemiştir.",
      "El yazmasının tek bir yazara ait olduğu artık kesin olarak bilinmektedir.",
      "Akademisyenler yakın zamanda el yazmasının sahte olduğunu kanıtlamıştır."
    ],
    ans: 0,
    tr: "'have long debated whether ... or ...' = uzun süredir ... mı yoksa ... mı diye tartışıyor; A iki seçenekli tartışmayı korur. C kesinlik ekler, yanlış.",
    en: "'have long debated whether ... or ...' is kept by A with both options. C adds false certainty."
  },
  {
    id: 'tx_x1_treatment_caution', lv: 'C1', field: 'saglik', dir: 'en2tr',
    source: "Although the treatment appears promising, doctors warn that it should not be used widely until further trials confirm its safety.",
    opts: [
      "Tedavi umut verici görünse de doktorlar, güvenliği başka denemelerle doğrulanana dek yaygın biçimde kullanılmaması gerektiği konusunda uyarmaktadır.",
      "Tedavi umut verici göründüğü için doktorlar onun hemen yaygın olarak kullanılmasını önermektedir.",
      "Doktorlar tedavinin güvenli olmadığını ve asla kullanılmaması gerektiğini söylemektedir.",
      "Tedavinin güvenliği zaten kanıtlandığından başka denemeye gerek yoktur."
    ],
    ans: 0,
    tr: "'Although ... promising ... should not be used widely until further trials confirm' = umut verici olsa da denemeler doğrulayana dek yaygın kullanılmamalı; A bu koşullu uyarıyı korur. B ve D çekinceyi siler.",
    en: "'Although promising ... should not be used widely until further trials confirm' is kept by A. B and D drop the caveat."
  },
  {
    id: 'tx_x1_economic_policy', lv: 'C1', field: 'sosyal', dir: 'en2tr',
    source: "The government's decision to raise interest rates was intended to curb inflation, even at the risk of slowing economic growth.",
    opts: [
      "Hükûmetin faiz oranlarını artırma kararı, ekonomik büyümeyi yavaşlatma riskini göze alarak bile enflasyonu dizginlemeyi amaçlıyordu.",
      "Hükûmet, ekonomik büyümeyi hızlandırmak için faiz oranlarını düşürmeye karar vermiştir.",
      "Faiz oranlarındaki artış enflasyonu yükseltmek amacıyla yapılmıştır.",
      "Hükûmet, büyümeyi yavaşlatmamak için faiz oranlarını sabit tutmaya karar verdi."
    ],
    ans: 0,
    tr: "'to curb inflation, even at the risk of slowing growth' = büyümeyi yavaşlatma riskini göze alarak enflasyonu dizginlemek; A bu amaç-risk dengesini korur. B/D kararın yönünü ters çevirir.",
    en: "'to curb inflation, even at the risk of slowing growth' — A keeps the aim-risk balance. B/D reverse the decision."
  },
  {
    id: 'tx_x1_excavation', lv: 'B2', field: 'sosyal', dir: 'en2tr',
    source: "The artefacts found at the site reveal that the community traded with regions far beyond its own borders.",
    opts: [
      "Bölgede bulunan eserler, topluluğun kendi sınırlarının çok ötesindeki bölgelerle ticaret yaptığını ortaya koymaktadır.",
      "Bölgede hiçbir esere rastlanmadığı için ticaret yapılıp yapılmadığı bilinmemektedir.",
      "Topluluğun yalnızca komşu köylerle ticaret yaptığı anlaşılmıştır.",
      "Bulunan eserler topluluğun dış dünyadan tamamen yalıtılmış olduğunu göstermektedir."
    ],
    ans: 0,
    tr: "'traded with regions far beyond its own borders' = kendi sınırlarının çok ötesindeki bölgelerle ticaret; A bunu korur. C 'yalnızca komşu', D 'yalıtılmış' diyerek çelişir.",
    en: "'traded with regions far beyond its own borders' is kept by A. C ('only neighbours') and D ('isolated') contradict it."
  },
  {
    id: 'tx_x1_brain_plasticity', lv: 'C1', field: 'saglik', dir: 'en2tr',
    source: "The brain remains capable of reorganising itself throughout life, forming new connections in response to learning and experience.",
    opts: [
      "Beyin, yaşam boyunca kendini yeniden düzenleyebilme yeteneğini korur ve öğrenme ile deneyime karşılık yeni bağlantılar kurar.",
      "Beyin yalnızca çocuklukta gelişir ve yetişkinlikte hiç değişmez.",
      "Beyin, deneyimden bağımsız olarak doğuştan gelen bağlantılarını korur.",
      "Öğrenme, beynin yeni bağlantılar kurmasını engeller."
    ],
    ans: 0,
    tr: "'remains capable of reorganising itself throughout life ... new connections' = yaşam boyu kendini düzenleyip yeni bağlantı kurar; A bunu korur. B yetişkinlikte değişmediğini, D öğrenmenin engellediğini söyleyerek çelişir.",
    en: "'remains capable of reorganising itself throughout life ... new connections' is kept by A. B and D contradict it."
  },
  {
    id: 'tx_x1_renewable_shift', lv: 'B2', field: 'fen', dir: 'en2tr',
    source: "As the cost of clean energy continues to fall, more and more households are choosing to install solar panels on their roofs.",
    opts: [
      "Temiz enerjinin maliyeti düşmeye devam ettikçe gittikçe daha fazla hane, çatılarına güneş paneli kurmayı tercih ediyor.",
      "Temiz enerji pahalı kaldığı için çok az hane güneş paneli kurmaktadır.",
      "Güneş panellerinin maliyeti arttıkça haneler bunlardan vazgeçmektedir.",
      "Haneler, çatılarındaki güneş panellerini sökmeye karar vermiştir."
    ],
    ans: 0,
    tr: "'As the cost ... continues to fall, more and more households are choosing to install' = maliyet düştükçe daha çok hane kurmayı tercih ediyor; A bu neden-sonucu korur. B/C/D yönü ters çevirir.",
    en: "'As the cost continues to fall, more households are choosing to install' — A keeps the cause-effect. B/C/D reverse it."
  },
  {
    id: 'tx_x1_urban_planning', lv: 'C1', field: 'sosyal', dir: 'en2tr',
    source: "Planners increasingly recognise that a city designed around cars is rarely a city designed for the people who live in it.",
    opts: [
      "Şehir plancıları, otomobiller etrafında tasarlanmış bir şehrin, orada yaşayan insanlar için tasarlanmış bir şehir olmadığını giderek daha çok kabul ediyor.",
      "Şehir plancıları, otomobiller için tasarlanan şehirlerin insanlar için de en uygun şehirler olduğunu savunuyor.",
      "Plancılar, şehirlerin yalnızca otomobiller düşünülerek tasarlanması gerektiğini söylüyor.",
      "İnsanlar için tasarlanan şehirlerin otomobillere hiç yer bırakmadığı kabul edilmektedir."
    ],
    ans: 0,
    tr: "'a city designed around cars is rarely a city designed for the people' = otomobiller için tasarlanan şehir nadiren insanlar içindir; A bu karşıtlığı korur. B ve C anlamı tersine çevirir.",
    en: "'a city designed around cars is rarely a city designed for the people' — A keeps the contrast. B and C reverse the meaning."
  },
  // --- tr2en (7) ---
  {
    id: 'tx_x1_osym_history', lv: 'C1', field: 'sosyal', dir: 'tr2en',
    source: "Tarihçiler, imparatorluğun çöküşünün tek bir nedene değil, birbiriyle ilişkili birçok etkenin birleşimine bağlanması gerektiğini savunmaktadır.",
    opts: [
      "Historians argue that the empire's collapse should be attributed not to a single cause but to a combination of many interrelated factors.",
      "Historians believe that the empire collapsed for one simple and obvious reason.",
      "Historians claim that the empire never actually collapsed at all.",
      "Historians suggest that the many factors behind the collapse were entirely unrelated to one another."
    ],
    ans: 0,
    tr: "'tek bir nedene değil ... birçok etkenin birleşimine' = not to a single cause but to a combination of many factors; A bunu korur. B tek neden, D 'ilişkisiz' diyerek çelişir.",
    en: "'not to a single cause but a combination of interrelated factors' is rendered by A. B (single cause) and D (unrelated) contradict it."
  },
  {
    id: 'tx_x1_osym_research', lv: 'C1', field: 'saglik', dir: 'tr2en',
    source: "Araştırmacılar, yeni ilacın yan etkilerinin tam olarak anlaşılabilmesi için daha uzun süreli çalışmalara ihtiyaç duyulduğunu vurgulamaktadır.",
    opts: [
      "Researchers emphasise that longer-term studies are needed before the side effects of the new drug can be fully understood.",
      "Researchers claim that the side effects of the new drug are already completely understood.",
      "Researchers argue that no further studies of the new drug are necessary.",
      "Researchers stress that the new drug has no side effects whatsoever."
    ],
    ans: 0,
    tr: "'tam olarak anlaşılabilmesi için daha uzun çalışmalara ihtiyaç' = longer-term studies are needed before fully understood; A bunu korur. B/C/D gereği siler veya tersine çevirir.",
    en: "'longer-term studies are needed before the side effects can be fully understood' — A keeps it. B/C/D drop or reverse the need."
  },
  {
    id: 'tx_x1_osym_environment', lv: 'B2', field: 'fen', dir: 'tr2en',
    source: "Ormanların hızla yok edilmesi, yalnızca pek çok türün yaşam alanını değil, aynı zamanda bölgenin iklimini de tehdit etmektedir.",
    opts: [
      "The rapid destruction of forests threatens not only the habitat of many species but also the climate of the region.",
      "The rapid destruction of forests threatens only the habitat of a few rare species.",
      "Planting new forests has improved both wildlife and the regional climate.",
      "The destruction of forests has no effect on the climate of the region."
    ],
    ans: 0,
    tr: "'yalnızca ... değil, aynı zamanda ... de' = not only ... but also ...; A bu çift vurguyu korur. B 'yalnızca', D 'etkisi yok' diyerek anlamı daraltır/çevirir.",
    en: "'not only ... but also ...' is kept by A. B narrows it ('only') and D reverses it ('no effect')."
  },
  {
    id: 'tx_x1_osym_technology', lv: 'C1', field: 'fen', dir: 'tr2en',
    source: "Yapay zekâ araçları giderek yetkinleşse de, karmaşık etik kararların hâlâ insan denetimini gerektirdiği yaygın olarak kabul edilmektedir.",
    opts: [
      "Although artificial intelligence tools are becoming increasingly capable, it is widely accepted that complex ethical decisions still require human oversight.",
      "Because artificial intelligence tools are now fully capable, human oversight of ethical decisions is no longer needed.",
      "Artificial intelligence tools remain too weak to be of any use in decision-making.",
      "It is widely denied that ethical decisions have anything to do with human judgement."
    ],
    ans: 0,
    tr: "'giderek yetkinleşse de ... insan denetimini gerektirir' = although increasingly capable ... still require human oversight; A bu ödün-koşulunu korur. B denetimi gereksiz sayar, çelişir.",
    en: "'although increasingly capable ... still require human oversight' — A keeps the concessive structure. B wrongly drops the oversight."
  },
  {
    id: 'tx_x1_osym_psychology', lv: 'C1', field: 'saglik', dir: 'tr2en',
    source: "İnsanların kararlarının çoğu zaman mantıktan çok duygulardan etkilendiği, son yıllarda yapılan deneylerle açıkça gösterilmiştir.",
    opts: [
      "Experiments carried out in recent years have clearly shown that people's decisions are often influenced more by emotion than by logic.",
      "Recent experiments have shown that people's decisions are guided purely by cold logic.",
      "It has never been demonstrated that emotions affect human decisions.",
      "People's decisions are influenced more by logic than by emotion, recent studies suggest."
    ],
    ans: 0,
    tr: "'mantıktan çok duygulardan etkilendiği' = influenced more by emotion than by logic; A bu karşılaştırmayı korur. B/D karşılaştırmayı tersine çevirir.",
    en: "'influenced more by emotion than by logic' is kept by A. B and D reverse the comparison."
  },
  {
    id: 'tx_x1_osym_economy', lv: 'C1', field: 'sosyal', dir: 'tr2en',
    source: "Küçük işletmeler, büyük şirketlerle rekabet edebilmek için çoğu zaman yenilikçi fikirlere ve esnek çalışma biçimlerine güvenmek zorundadır.",
    opts: [
      "In order to compete with large companies, small businesses often have to rely on innovative ideas and flexible ways of working.",
      "Large companies usually rely on small businesses to provide them with innovative ideas.",
      "Small businesses rarely need any new ideas to compete with large companies.",
      "Small businesses prefer to avoid competing with large companies altogether."
    ],
    ans: 0,
    tr: "'rekabet edebilmek için ... yenilikçi fikirlere ve esnek çalışmaya güvenmek zorunda' = to compete ... have to rely on innovative ideas and flexible working; A bunu korur. C gereği yok sayar.",
    en: "'in order to compete ... have to rely on innovative ideas and flexible working' — A keeps it. C wrongly removes the need."
  },
  {
    id: 'tx_x1_osym_archaeology', lv: 'B2', field: 'sosyal', dir: 'tr2en',
    source: "Kazılarda bulunan araç gereçler, bu toplumun düşünüldüğünden çok daha gelişmiş bir teknolojiye sahip olduğunu ortaya koymaktadır.",
    opts: [
      "The tools found during the excavations reveal that this society possessed a far more advanced technology than had been thought.",
      "The tools found during the excavations suggest that this society had almost no technology at all.",
      "No tools were discovered during the excavations of this society.",
      "The society's technology turned out to be much simpler than researchers had expected."
    ],
    ans: 0,
    tr: "'düşünüldüğünden çok daha gelişmiş bir teknoloji' = a far more advanced technology than had been thought; A bunu korur. D 'daha basit' diyerek tersine çevirir.",
    en: "'a far more advanced technology than had been thought' is kept by A. D ('much simpler') reverses it."
  }
];
content.translate = translate;

// ---------------------------------------------------------------------------
// Update readme and write out
// ---------------------------------------------------------------------------
content._readme = "ApexFlow icerigi. Oxford 5000 A-F partileri (B2-C1) yuklu; ayrica YDS/YOKDIL soru bankalari eklendi: cloze, restate, oddout, dialogue, paracomp, translate. Yeni parti: bu dosyayi bana gonder, siradaki maddeleri ekleyip geri vereyim. id benzersiz; lv A1-C2 (banka maddelerinde B2/C1); ans 0'dan baslar.";

fs.writeFileSync(file, JSON.stringify(content, null, 2));
console.log('Banks written:',
  'cloze', content.cloze.length,
  'restate', content.restate.length,
  'oddout', content.oddout.length,
  'dialogue', content.dialogue.length,
  'paracomp', content.paracomp.length,
  'translate', content.translate.length,
  'total', content.cloze.length+content.restate.length+content.oddout.length+content.dialogue.length+content.paracomp.length+content.translate.length);
