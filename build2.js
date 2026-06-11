// Batch 2: adds Learn modules (articles, listening, grammar, writing) to content.json.
// Additive only. Run: node build2.js  (then node validate.js)
const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, 'content.json');
const content = JSON.parse(fs.readFileSync(file, 'utf8'));

// Move the correct option to `target`, keeping the others in order.
function place(arr, correctIdx, target) {
  const correct = arr[correctIdx];
  const rest = arr.filter((_, i) => i !== correctIdx);
  const t = Math.max(0, Math.min(target, rest.length));
  rest.splice(t, 0, correct);
  return { arr: rest, ans: t };
}

const articles = [
  {
    id: 'art_x2_coffee_history', lv: 'B2', field: 'sosyal',
    title: 'The Surprising Journey of Coffee',
    body: "Few drinks have shaped daily life as quietly as coffee. According to a popular legend, its energising effect was first noticed by an Ethiopian goat herder who saw his animals grow lively after eating the bright red berries of a certain shrub. Whether or not the story is true, by the fifteenth century coffee was being roasted and brewed in the Arabian Peninsula, where it became central to social and religious life.\n\nFrom there the drink spread along trade routes to the great cities of the Ottoman world. Coffee houses, sometimes called 'schools of the wise', became places where people gathered to talk, play games, listen to music, and argue about the news. Rulers were not always pleased; on several occasions the authorities tried to close these establishments, fearing that lively conversation might turn into criticism of those in power.\n\nWhen coffee reached Europe in the seventeenth century, it met a similar mixture of enthusiasm and suspicion. Yet the coffee house soon took on the same role it had played further east, drawing merchants, writers, and scientists into long discussions. Some historians argue that these crowded, smoky rooms helped spread the new ideas of the age more effectively than any library could.\n\nToday coffee is grown across a wide band of tropical countries and consumed almost everywhere. The legend of the dancing goats may be impossible to prove, but the drink's deeper history is clear enough: wherever it has travelled, coffee has done more than wake people up. It has given them a reason to sit down together.",
    items: [
      { q: "The legend of the goat herder is included mainly to —", opts: ["explain how coffee's energising effect may have been discovered", "prove that all coffee comes from Ethiopia", "describe how coffee is roasted today", "warn readers against eating wild berries"], ans: 0, tr: "Efsane, kahvenin uyarıcı etkisinin nasıl fark edilmiş olabileceğini düşündürmek için verilir.", en: "The legend is used to suggest how coffee's stimulating effect may first have been noticed." },
      { q: "Why did some rulers try to close coffee houses?", opts: ["They were too expensive to run", "They feared the conversations might become political criticism", "They wanted people to drink tea instead", "They needed the buildings for schools"], ans: 1, tr: "Yöneticiler, canlı sohbetin iktidara yönelik eleştiriye dönüşmesinden korkuyordu.", en: "Rulers worried that the lively talk might turn into criticism of those in power." },
      { q: "The phrase 'schools of the wise' suggests that coffee houses were seen as —", opts: ["official universities with fees", "places of discussion and learning", "buildings open only to teachers", "quiet, private libraries"], ans: 1, tr: "Bu ifade, kahvehanelerin tartışma ve öğrenme yerleri olarak görüldüğünü ima eder.", en: "The phrase implies coffee houses were regarded as places of discussion and learning." },
      { q: "What do some historians claim about European coffee houses?", opts: ["They replaced all the libraries", "They helped spread new ideas of the time", "They were used only by merchants", "They were quieter than eastern ones"], ans: 1, tr: "Bazı tarihçiler kahvehanelerin çağın yeni fikirlerini yaymaya yardım ettiğini öne sürer.", en: "Some historians argue the coffee houses helped spread the new ideas of the age." },
      { q: "What is the main point of the final paragraph?", opts: ["Coffee is now grown only in Ethiopia", "The goat legend has finally been proven", "Coffee's lasting value is in bringing people together", "Coffee is no longer popular today"], ans: 2, tr: "Son paragrafın ana fikri, kahvenin kalıcı değerinin insanları bir araya getirmesi olduğudur.", en: "The final paragraph stresses that coffee's enduring value lies in bringing people together." }
    ]
  },
  {
    id: 'art_x2_octopus_intelligence', lv: 'B2', field: 'fen',
    title: 'How Clever Is an Octopus?',
    body: "For an animal with no bones and a lifespan of only a year or two, the octopus is astonishingly clever. Its body contains around five hundred million nerve cells, but, remarkably, most of them are not in its brain. They are spread through its eight arms, each of which can taste, touch, and even make simple decisions on its own. In a sense, an octopus thinks not only with its head but with its whole body.\n\nThis distributed intelligence allows octopuses to perform feats that surprise the scientists who study them. In laboratories they have learned to open jars to reach food, to recognise individual human faces, and to find their way through mazes. Some have been filmed carrying coconut shells across the sea floor, fitting them together later as portable shelters — a clear example of using tools.\n\nPerhaps their most famous skill is disguise. Special cells in their skin let them change colour, and even texture, in less than a second, melting into rock, sand, or coral. Curiously, octopuses appear to be colour-blind, which makes their ability to match their surroundings so precisely all the more puzzling.\n\nBecause they are so different from us — and from almost every other intelligent creature — octopuses raise a fascinating question. Intelligence, it seems, is not a single ladder with humans at the top. It may instead be something that nature has invented more than once, in forms we are only beginning to understand.",
    items: [
      { q: "What is surprising about the octopus's nerve cells?", opts: ["There are very few of them", "Most are not located in its brain", "They stop working at night", "They are all in its head"], ans: 1, tr: "Sinir hücrelerinin çoğunun beyinde değil, kollarda olması şaşırtıcıdır.", en: "What is surprising is that most of its nerve cells are not in the brain but in the arms." },
      { q: "The coconut shells are mentioned as an example of —", opts: ["the octopus hiding from light", "the octopus using tools", "the octopus changing colour", "the octopus's short lifespan"], ans: 1, tr: "Hindistan cevizi kabukları, ahtapotun alet kullanmasına örnek olarak verilir.", en: "The coconut shells illustrate the octopus using tools." },
      { q: "Why does the writer find the octopus's disguise especially puzzling?", opts: ["It happens very slowly", "The octopus seems unable to see colour", "It only works at night", "Other animals do it better"], ans: 1, tr: "Ahtapotun renk körü görünmesine rağmen çevresine uyum sağlaması bunu daha da şaşırtıcı kılar.", en: "It is puzzling because the octopus appears colour-blind yet still matches its surroundings precisely." },
      { q: "What does 'distributed intelligence' mean in the passage?", opts: ["Intelligence shared between many octopuses", "Thinking that is spread through the body, not just the brain", "Intelligence that fades quickly", "A skill taught in laboratories"], ans: 1, tr: "'Dağıtık zekâ', düşünmenin yalnızca beyinde değil tüm bedene yayılmış olmasıdır.", en: "It refers to thinking spread through the whole body rather than concentrated in the brain." },
      { q: "What broader idea does the final paragraph suggest?", opts: ["Humans are the most intelligent animals", "Intelligence may have evolved in more than one form", "Octopuses will soon be as clever as humans", "Only animals with bones can be clever"], ans: 1, tr: "Son paragraf, zekânın doğada birden fazla biçimde gelişmiş olabileceğini ima eder.", en: "The final paragraph suggests intelligence may have arisen in nature in more than one form." }
    ]
  },
  {
    id: 'art_x2_placebo_effect', lv: 'C1', field: 'saglik',
    title: 'The Power of the Placebo',
    body: "Imagine being given a pill that contains no active medicine at all — just sugar — and yet feeling genuinely better afterwards. This puzzling effect, known as the placebo response, has been recorded for centuries and continues to challenge our understanding of the mind and body.\n\nIn carefully designed trials, some patients receive the real drug while others unknowingly receive a dummy version. Researchers expect the dummy group to show no improvement, yet these patients often do improve, reporting less pain, better sleep, or reduced anxiety. The effect tends to be strongest for symptoms closely tied to perception, and weakest for measurable physical changes such as the shrinking of a tumour.\n\nWhat could explain this? Part of the answer seems to lie in expectation. When we believe a treatment will work, the brain may release its own pain-relieving chemicals, and the simple ritual of being cared for can itself reduce stress. Intriguingly, the placebo effect can persist even when patients are openly told that they are taking a dummy pill, which suggests that conscious belief is not the whole story.\n\nFar from being a mere nuisance to be subtracted from trial results, the placebo response is increasingly studied as a genuine biological phenomenon. Understanding it better could help doctors make real treatments more effective, by paying closer attention to something medicine has long underestimated: the powerful influence of the mind upon the body.",
    items: [
      { q: "What is the placebo response, according to the text?", opts: ["A side effect of strong medicines", "Improvement after taking a treatment with no active medicine", "A method for shrinking tumours", "A way of measuring pain"], ans: 1, tr: "Plasebo yanıtı, etkin madde içermeyen bir tedaviden sonra görülen iyileşmedir.", en: "The placebo response is improvement that follows a treatment containing no active medicine." },
      { q: "For which kind of symptom is the placebo effect weakest?", opts: ["Pain", "Anxiety", "Measurable physical changes like a shrinking tumour", "Poor sleep"], ans: 2, tr: "Plasebo etkisi, tümörün küçülmesi gibi ölçülebilir fiziksel değişimlerde en zayıftır.", en: "It is weakest for measurable physical changes such as the shrinking of a tumour." },
      { q: "Why is it significant that the effect can work even when patients know the pill is fake?", opts: ["It proves the medicine is dangerous", "It shows conscious belief alone cannot fully explain it", "It means patients were lying", "It shows the trials were badly designed"], ans: 1, tr: "Hastalar hapın sahte olduğunu bilse de etkinin sürmesi, bilinçli inancın tek açıklama olmadığını gösterir.", en: "It shows that conscious belief alone cannot fully account for the effect." },
      { q: "How does modern research increasingly view the placebo response?", opts: ["As a mistake to be ignored", "As a genuine biological phenomenon worth studying", "As proof that medicine does not work", "As a purely imaginary effect"], ans: 1, tr: "Modern araştırmalar plasebo yanıtını incelenmeye değer gerçek bir biyolojik olgu olarak görür.", en: "Modern research increasingly treats it as a real biological phenomenon worth studying." },
      { q: "What does the writer suggest medicine has long underestimated?", opts: ["The cost of new drugs", "The influence of the mind on the body", "The importance of sugar", "The length of clinical trials"], ans: 1, tr: "Yazara göre tıp uzun süredir zihnin beden üzerindeki etkisini hafife almıştır.", en: "The writer suggests medicine has long underestimated the mind's influence on the body." }
    ]
  },
  {
    id: 'art_x2_pyramid_builders', lv: 'B2', field: 'sosyal',
    title: 'Who Really Built the Pyramids?',
    body: "For a long time, popular imagination pictured the Egyptian pyramids as the work of vast armies of slaves, driven by the whip beneath a burning sun. This dramatic image, repeated in countless films, turns out to be largely a myth. The evidence uncovered by archaeologists tells a rather different story.\n\nNear the pyramids of Giza, excavations have revealed the remains of a well-organised workers' town, complete with bakeries, breweries, and areas for preparing fish and meat. The sheer quantity of food suggests that the labourers were fed well — hardly the treatment one would expect for slaves. Skeletons found in nearby cemeteries show signs of hard physical labour, but also of medical care, with broken bones that had been carefully set and allowed to heal.\n\nMost scholars now believe that the pyramids were built largely by paid workers and seasonal labourers, many of them ordinary farmers. During the months when the Nile flooded their fields, farming was impossible, and the building projects offered employment, food, and perhaps a sense of shared purpose. Skilled craftsmen lived on the site all year round, while teams of workers rotated in and out.\n\nThe truth, then, is in some ways more impressive than the myth. The pyramids stand not as monuments to cruelty alone, but as evidence of a society able to organise, feed, and motivate thousands of people toward a single enormous goal.",
    items: [
      { q: "What does the writer say about the image of slaves building the pyramids?", opts: ["It is supported by recent excavations", "It is largely a myth", "It was invented by archaeologists", "It is impossible to investigate"], ans: 1, tr: "Yazar, kölelerin piramitleri inşa ettiği imgesinin büyük ölçüde bir efsane olduğunu söyler.", en: "The writer states the image of slaves is largely a myth." },
      { q: "Why does the large quantity of food matter to the argument?", opts: ["It shows the workers were probably not treated as slaves", "It proves the pyramids were built quickly", "It explains why the Nile flooded", "It shows the food was wasted"], ans: 0, tr: "Bol miktarda yiyecek, işçilerin köle gibi davranılmadığını gösterir.", en: "The abundance of food suggests the workers were not treated as slaves." },
      { q: "What do the healed bones in the cemeteries suggest?", opts: ["The workers never got hurt", "The workers received medical care", "The bones belonged to animals", "The workers were very old"], ans: 1, tr: "İyileşmiş kemikler, işçilerin tıbbi bakım gördüğünü düşündürür.", en: "The healed bones indicate the workers received medical care." },
      { q: "Why did farmers take part in building during certain months?", opts: ["They were forced to by the army", "Their fields were flooded and farming was impossible", "They wanted to become craftsmen", "The pyramids were near their homes"], ans: 1, tr: "Nil tarlaları bastığında çiftçilik imkânsız olduğundan çiftçiler inşaatta çalışıyordu.", en: "When the Nile flooded their fields, farming was impossible, so farmers joined the building work." },
      { q: "What does the writer conclude about Egyptian society?", opts: ["It relied entirely on cruelty", "It could organise and motivate huge numbers of people", "It was smaller than once thought", "It had no skilled craftsmen"], ans: 1, tr: "Yazar, Mısır toplumunun çok sayıda insanı örgütleyip motive edebildiği sonucuna varır.", en: "The writer concludes that the society could organise and motivate vast numbers of people." }
    ]
  },
  {
    id: 'art_x2_northern_lights', lv: 'B1', field: 'fen',
    title: 'What Causes the Northern Lights?',
    body: "On clear nights in the far north, the sky sometimes fills with waves of green, pink, and violet light. These glowing curtains are called the Northern Lights, or the aurora. For hundreds of years, people told stories to explain them. Some believed the lights were the spirits of the dead; others thought they were a warning of coming danger.\n\nToday we understand what really causes the aurora. It begins with the Sun, which constantly sends out a stream of tiny particles into space. When these particles reach the Earth, most of them are pushed away by our planet's magnetic field. But near the North and South Poles, some particles slip through and crash into the gases high in our atmosphere.\n\nWhen the particles hit these gases, they make them glow, rather like the gas inside a neon sign. The colour depends on which gas is struck and how high up it is. Oxygen usually produces green or red light, while nitrogen can create blue or purple. The same thing happens near the South Pole, where the display is known as the Southern Lights.\n\nThe best time to see the aurora is on a dark, cloudless night, far from city lights. Many travellers now journey to countries such as Norway, Iceland, and Canada just for the chance to watch the sky come alive. For most of them, it is a sight they never forget.",
    items: [
      { q: "What did some people in the past believe about the lights?", opts: ["That they were caused by the Sun", "That they were the spirits of the dead", "That they were made by neon signs", "That they came from city lights"], ans: 1, tr: "Geçmişte bazı insanlar ışıkların ölülerin ruhları olduğuna inanıyordu.", en: "Some people once believed the lights were the spirits of the dead." },
      { q: "Where do the particles from the Sun manage to enter the atmosphere?", opts: ["At the equator", "Near the North and South Poles", "Only over cities", "Only during the day"], ans: 1, tr: "Güneş'ten gelen parçacıklar atmosfere Kuzey ve Güney Kutupları yakınında girer.", en: "The particles slip through near the North and South Poles." },
      { q: "What decides the colour of the aurora?", opts: ["The time of year", "Which gas is hit and how high it is", "The number of tourists", "The phase of the Moon"], ans: 1, tr: "Auroranın rengi, hangi gazın ve hangi yükseklikte vurulduğuna bağlıdır.", en: "The colour depends on which gas is struck and at what height." },
      { q: "Why does the writer compare the glowing gas to a neon sign?", opts: ["To show the gas is dangerous", "To help explain how the gas lights up", "To prove neon signs are natural", "To describe the Sun"], ans: 1, tr: "Yazar, gazın nasıl ışıdığını açıklamaya yardımcı olmak için neon tabelaya benzetir.", en: "The comparison helps explain how the gas glows." },
      { q: "What is the best condition for seeing the aurora?", opts: ["A bright, cloudy night in a city", "A dark, cloudless night away from city lights", "A sunny afternoon", "A rainy evening"], ans: 1, tr: "Aurorayı görmek için en iyi koşul, şehir ışıklarından uzak, karanlık ve bulutsuz bir gecedir.", en: "The best condition is a dark, cloudless night far from city lights." }
    ]
  },
  {
    id: 'art_x2_why_we_laugh', lv: 'B1', field: 'saglik',
    title: 'Why Do We Laugh?',
    body: "Laughter seems simple, but scientists still find it surprising. We often think we laugh because something is funny, yet most laughter has little to do with jokes. Studies of ordinary conversations show that people usually laugh at quite plain comments, such as 'I'll see you later' or 'It was nice to meet you'. We laugh, it seems, mainly to connect with other people.\n\nLaughter is social in another way too. We are far more likely to laugh when we are with others than when we are alone. A funny film might make you smile by yourself, but the same film can make a whole cinema roar together. In this sense, laughter works like a kind of glue, helping a group feel close and relaxed.\n\nThere may be health benefits as well. When we laugh, our muscles relax, we breathe more deeply, and the body releases chemicals that make us feel good. Some doctors believe that regular laughter can lower stress and may even be good for the heart, although more research is still needed.\n\nBabies begin to laugh long before they can speak, and people laugh in every culture on Earth. This suggests that laughter is not something we simply learn, but a deep part of being human — a signal, older than language, that says we feel safe and we belong.",
    items: [
      { q: "What do studies of conversations show about laughter?", opts: ["People only laugh at good jokes", "People often laugh at quite ordinary comments", "People rarely laugh in groups", "People laugh most when alone"], ans: 1, tr: "Çalışmalar, insanların çoğu zaman oldukça sıradan sözlere güldüğünü gösterir.", en: "Studies show people often laugh at quite ordinary comments, not just jokes." },
      { q: "When are we most likely to laugh?", opts: ["When we are alone", "When we are with other people", "When we are reading", "When we are tired"], ans: 1, tr: "Başkalarıyla birlikteyken gülme olasılığımız çok daha yüksektir.", en: "We are far more likely to laugh when we are with others." },
      { q: "Why does the writer compare laughter to 'glue'?", opts: ["Because it is sticky", "Because it helps groups feel close", "Because it is hard to remove", "Because it is used in films"], ans: 1, tr: "Yazar, gülmenin grupları yakınlaştırdığı için onu tutkala benzetir.", en: "The comparison shows laughter helps a group feel close and connected." },
      { q: "What does the example of babies suggest about laughter?", opts: ["It must be taught at school", "It is a deep, natural part of being human", "It only appears after we learn to speak", "It is different in every country"], ans: 1, tr: "Bebek örneği, gülmenin insan olmanın derin ve doğal bir parçası olduğunu gösterir.", en: "The example of babies suggests laughter is a deep, natural part of being human." }
    ]
  },
  {
    id: 'art_x2_venice_and_sea', lv: 'C1', field: 'sosyal',
    title: 'The City That Fights the Sea',
    body: "Few cities are as instantly recognisable as Venice, with its canals, bridges, and palaces rising directly out of the water. Yet the very setting that makes the city so beautiful also threatens its survival. Built on wooden posts driven into the mud of a shallow lagoon more than a thousand years ago, Venice has always lived in an uneasy relationship with the sea.\n\nThe problem has grown worse in recent times. The ground beneath the city has slowly sunk, partly because of the natural settling of the soil and partly because of water once pumped from below for industry. At the same time, global sea levels have been rising. As a result, the high tides that flood the famous Saint Mark's Square now arrive more often, and reach higher, than they did a century ago.\n\nIn response, engineers have built an enormous system of movable barriers at the entrances to the lagoon. When a dangerous tide is forecast, the barriers rise from the seabed to hold back the water. The system has already prevented serious flooding on several occasions, yet many experts warn that it cannot be a permanent answer if the seas keep rising.\n\nVenice has thus become a symbol far beyond Italy. Its struggle raises a question that more and more coastal cities will soon have to face: how do you protect an irreplaceable place from a danger that is slow, steady, and steadily growing?",
    items: [
      { q: "Why is Venice's beautiful setting also a threat?", opts: ["The canals are too narrow for boats", "The city sits in water and is vulnerable to the sea", "Tourists damage the palaces", "The bridges are too old"], ans: 1, tr: "Venedik suyun içinde kurulu olduğundan denize karşı savunmasızdır; bu yüzden güzelliği aynı zamanda tehdittir.", en: "Because Venice sits in the water, it is vulnerable to the sea that makes it beautiful." },
      { q: "What are the two main reasons flooding has got worse?", opts: ["More tourists and bigger boats", "The land sinking and sea levels rising", "Stronger winds and colder winters", "Less rain and more sun"], ans: 1, tr: "Sular, zeminin çökmesi ve deniz seviyesinin yükselmesi nedeniyle daha kötü basıyor.", en: "Flooding has worsened because the land has sunk and sea levels have risen." },
      { q: "How do the movable barriers protect the city?", opts: ["They pump water out of the canals", "They rise from the seabed to hold back dangerous tides", "They warn tourists to leave", "They make the lagoon deeper"], ans: 1, tr: "Hareketli bariyerler, tehlikeli gelgitlerde deniz tabanından yükselerek suyu tutar.", en: "The barriers rise from the seabed to hold back dangerous tides." },
      { q: "What concern do many experts have about the barriers?", opts: ["They are too cheap to build", "They may not work if the seas keep rising", "They block all the boats", "They are no longer needed"], ans: 1, tr: "Uzmanlar, deniz seviyesi yükselmeye devam ederse bariyerlerin kalıcı çözüm olamayacağından kaygılıdır.", en: "Experts worry the barriers cannot be a permanent solution if seas keep rising." },
      { q: "Why has Venice become a symbol 'far beyond Italy'?", opts: ["It is the oldest city in the world", "Its struggle reflects a problem many coastal cities will face", "It has the most tourists", "It has banned all cars"], ans: 1, tr: "Venedik'in mücadelesi, birçok kıyı kentinin yakında karşılaşacağı bir sorunu yansıttığı için bir simge olmuştur.", en: "Its struggle mirrors a danger that many coastal cities will soon confront." }
    ]
  },
  {
    id: 'art_x2_living_near_volcanoes', lv: 'C1', field: 'fen',
    title: 'Why People Live Near Volcanoes',
    body: "It might seem foolish to build a home in the shadow of a volcano, yet millions of people around the world do exactly that. For them, the danger of a future eruption is outweighed by advantages that are present every single day.\n\nThe most important of these is the soil. When a volcano erupts, the ash and lava it produces are rich in minerals such as potassium and phosphorus. Over many years, this material breaks down into some of the most fertile land on the planet. Farmers on the slopes of volcanoes can often grow crops that would be difficult elsewhere, from coffee and grapes to rice and vegetables.\n\nVolcanic regions offer other resources too. In several countries, the heat stored beneath the ground is used to generate clean electricity and to warm homes, a technology known as geothermal energy. Volcanoes also attract tourists, whose spending supports local businesses, and they often contain valuable minerals that can be mined.\n\nScientists, meanwhile, work hard to reduce the risks. By monitoring small earthquakes, escaping gases, and tiny changes in the shape of the ground, they can often warn communities before an eruption begins. The relationship between people and volcanoes is therefore not simply one of fear. It is a long-standing bargain, in which communities accept a rare but serious threat in exchange for benefits they depend on throughout their lives.",
    items: [
      { q: "According to the text, why do people accept the risk of living near volcanoes?", opts: ["They cannot afford to move", "The daily benefits outweigh the rare danger", "They do not know the volcano is active", "The government forces them to stay"], ans: 1, tr: "İnsanlar, her gün var olan yararlar nadir tehlikeden ağır bastığı için riski kabul eder.", en: "People accept the risk because the everyday benefits outweigh the rare danger." },
      { q: "Why is volcanic soil so valuable to farmers?", opts: ["It never needs water", "Ash and lava make it rich in minerals", "It is easy to dig", "It is found only near cities"], ans: 1, tr: "Kül ve lav toprağı minerallerce zengin yaptığı için volkanik toprak çok değerlidir.", en: "Ash and lava make the soil rich in minerals, so it is highly fertile." },
      { q: "What is geothermal energy, as described here?", opts: ["Electricity made from sunlight", "Clean power and heat from the heat beneath the ground", "Energy stored in volcanic minerals", "Power produced by earthquakes"], ans: 1, tr: "Jeotermal enerji, yer altındaki ısıdan elde edilen temiz elektrik ve ısıtmadır.", en: "Geothermal energy is clean power and heating drawn from the heat beneath the ground." },
      { q: "How do scientists help to reduce the danger?", opts: ["By stopping eruptions completely", "By watching for warning signs before an eruption", "By moving the volcanoes", "By banning farming on the slopes"], ans: 1, tr: "Bilim insanları, patlama öncesi uyarı işaretlerini izleyerek tehlikeyi azaltır.", en: "Scientists reduce danger by monitoring warning signs before an eruption." },
      { q: "What does the writer mean by calling the relationship a 'bargain'?", opts: ["People pay money to the volcano", "Communities accept a serious risk in return for valuable benefits", "Scientists sell warnings to farmers", "Volcanoes give nothing in return"], ans: 1, tr: "'Pazarlık' ifadesi, toplulukların değerli yararlar karşılığında ciddi bir riski kabul etmesini anlatır.", en: "The 'bargain' means communities accept a serious risk in exchange for valuable benefits." }
    ]
  }
];
content.articles = content.articles.concat(articles);

const listening = [
  {
    id: 'lst_x2_doctor_appointment', lv: 'B1', field: 'saglik', accent: 'en-GB',
    title: 'Booking a doctor appointment',
    script: "Good morning, Doctor's surgery, how can I help? — Hello, I'd like to make an appointment to see Doctor Lewis, please. — Of course. Is it urgent, or a routine check? — It's just a routine check-up. — Right. Doctor Lewis is free on Thursday at ten o'clock, or Friday afternoon at three. — Thursday morning is better for me. — Lovely. Can I take your name and date of birth? — Yes, it's Sarah Hughes, the fifth of March, nineteen ninety. — Thank you. You're booked for Thursday at ten. Please arrive ten minutes early.",
    items: [
      { q: "What kind of appointment does the caller want?", opts: ["An emergency", "A routine check-up", "A vaccination"], ans: 1 },
      { q: "When is the appointment?", opts: ["Thursday at ten", "Friday at three", "Thursday afternoon"], ans: 0 },
      { q: "What information does the caller give?", opts: ["Her address", "Her name and date of birth", "Her phone number"], ans: 1 },
      { q: "What is she asked to do?", opts: ["Pay in advance", "Bring a document", "Arrive ten minutes early"], ans: 2 }
    ]
  },
  {
    id: 'lst_x2_gym_membership', lv: 'B1', field: 'saglik', accent: 'en-US',
    title: 'Joining a gym',
    script: "Hi there, welcome to FitZone. Are you interested in joining? — Yes, I'd like to know about your memberships. — Sure. The standard plan is thirty dollars a month and includes the gym and all the classes. — Do you have anything cheaper? — We do. The off-peak plan is twenty dollars, but you can only come before four in the afternoon. — That's fine; my mornings are usually free. — Then off-peak is perfect for you. Would you like to start today? — Yes, please. — Great. I'll just need a photo for your membership card.",
    items: [
      { q: "How much is the standard plan each month?", opts: ["Twenty dollars", "Thirty dollars", "Forty dollars"], ans: 1 },
      { q: "What is the restriction on the off-peak plan?", opts: ["Only on weekends", "Only before four in the afternoon", "Only with a friend"], ans: 1 },
      { q: "Which plan does the customer choose?", opts: ["Standard", "Off-peak", "Neither"], ans: 1 },
      { q: "What is needed for the membership card?", opts: ["A photo", "A passport", "A deposit"], ans: 0 }
    ]
  },
  {
    id: 'lst_x2_recycling_centre', lv: 'B2', field: 'fen', accent: 'en-GB',
    title: 'At the recycling centre',
    script: "Excuse me, I've brought some things to recycle but I'm not sure where they go. — No problem, I'll show you. What have you got? — Mostly glass bottles, some cardboard, and a few old batteries. — Right. Glass goes in the green container over there, and please flatten the cardboard before you put it in the brown one. — And the batteries? — Those can't go in the ordinary bins. There's a special box by the entrance, because batteries contain chemicals that can harm the soil. — I see. What about this broken mirror? — Believe it or not, mirror glass isn't recycled with bottles. Just leave it with me and I'll dispose of it safely.",
    items: [
      { q: "Where should the glass bottles go?", opts: ["The brown container", "The green container", "The special box"], ans: 1 },
      { q: "What must be done with the cardboard first?", opts: ["Flatten it", "Wash it", "Cut it into squares"], ans: 0 },
      { q: "Why are batteries kept separate?", opts: ["They are heavy", "Their chemicals can harm the soil", "They are valuable"], ans: 1 },
      { q: "What is true about the broken mirror?", opts: ["It goes with the bottles", "It is not recycled with the bottles", "It goes in the brown container"], ans: 1 }
    ]
  },
  {
    id: 'lst_x2_job_interview', lv: 'B2', field: 'sosyal', accent: 'en-US',
    title: 'A job interview',
    script: "Thanks for coming in today. Could you start by telling me a little about your current role? — Of course. I currently work as a marketing assistant, where I manage our social media and help plan campaigns. — And why are you interested in this position? — I'm looking for more responsibility. Your company is known for creative work, and I'd love to lead projects rather than just support them. — That's good to hear. This role can involve some travel. Is that a problem? — Not at all; I really enjoy meeting clients face to face. — Excellent. Do you have any questions for us? — Yes, what would success look like in the first six months?",
    items: [
      { q: "What is the candidate's current job?", opts: ["Project manager", "Marketing assistant", "Travel agent"], ans: 1 },
      { q: "Why is she interested in the new position?", opts: ["A higher salary", "More responsibility", "Shorter working hours"], ans: 1 },
      { q: "How does she feel about travelling for work?", opts: ["She dislikes it", "She is happy to do it", "She cannot travel at all"], ans: 1 },
      { q: "What does she ask the interviewer?", opts: ["About the salary", "What success looks like in six months", "About the holidays"], ans: 1 }
    ]
  },
  {
    id: 'lst_x2_hotel_checkin', lv: 'B1', field: 'sosyal', accent: 'en-GB',
    title: 'Checking in at a hotel',
    script: "Good evening, welcome to the Riverside Hotel. — Hello, I have a reservation under the name Carter. — Let me check... yes, a double room for two nights. — That's right. — May I see your passport, please? — Here you are. — Thank you. Your room is number two hundred and twelve, on the second floor. Breakfast is served from seven until ten in the dining room. — Is there wifi in the room? — Yes, and it's free; the password is on the card in your key envelope. — Wonderful, thank you.",
    items: [
      { q: "How many nights is the room booked for?", opts: ["One", "Two", "Three"], ans: 1 },
      { q: "What is the room number?", opts: ["Two hundred and twelve", "Two hundred and twenty", "Two hundred and two"], ans: 0 },
      { q: "When is breakfast served?", opts: ["Six to nine", "Seven to ten", "Eight to eleven"], ans: 1 },
      { q: "Where can the guest find the wifi password?", opts: ["On the door", "On a card in the key envelope", "At reception only"], ans: 1 }
    ]
  },
  {
    id: 'lst_x2_sleep_radio', lv: 'B2', field: 'saglik', accent: 'en-US',
    title: 'A radio show about sleep',
    script: "Welcome back to Healthy Living. Today we're talking about sleep. Many of us treat sleep as the first thing to sacrifice when we get busy, but experts say that is a mistake. Adults generally need between seven and nine hours a night, and regularly getting less can affect memory, mood, and even the immune system. So what can you do? First, try to go to bed and wake up at the same time every day, even at weekends. Second, keep screens out of the bedroom, because the bright light can trick your brain into thinking it is still daytime. And finally, avoid coffee in the late afternoon. Small changes like these can make a surprising difference to how rested you feel.",
    items: [
      { q: "How many hours of sleep do adults usually need?", opts: ["Five to six", "Seven to nine", "Ten to twelve"], ans: 1 },
      { q: "What is the first piece of advice?", opts: ["Sleep at the same time each day", "Eat a big meal before bed", "Exercise late at night"], ans: 0 },
      { q: "Why should screens be kept out of the bedroom?", opts: ["They are noisy", "Their light can trick the brain", "They are expensive"], ans: 1 },
      { q: "What should you avoid in the late afternoon?", opts: ["Water", "Coffee", "Reading"], ans: 1 }
    ]
  },
  {
    id: 'lst_x2_clinic_announcement', lv: 'B1', field: 'saglik', accent: 'en-GB',
    title: 'A clinic announcement',
    script: "Good morning, and welcome to the City Health Clinic. Please listen to the following announcements. If you have an appointment, take a ticket from the machine near the door and wait until your number appears on the screen. If you are here to collect a prescription, please go directly to the pharmacy window on your left. We kindly ask all visitors to switch their phones to silent and not to eat or drink in the waiting area. The clinic is rather busy this morning, so there may be a short delay. Thank you for your patience, and we will see you as soon as we can.",
    items: [
      { q: "What should patients with an appointment do?", opts: ["Go straight to the pharmacy", "Take a ticket and wait for their number", "Phone reception"], ans: 1 },
      { q: "Where do you collect a prescription?", opts: ["At the pharmacy window", "From the ticket machine", "On the screen"], ans: 0 },
      { q: "What are visitors asked to do with their phones?", opts: ["Turn them off completely", "Switch them to silent", "Leave them at the desk"], ans: 1 },
      { q: "Why might there be a delay?", opts: ["The clinic is busy", "A doctor is absent", "The computers are broken"], ans: 0 }
    ]
  },
  {
    id: 'lst_x2_weather_forecast', lv: 'B2', field: 'fen', accent: 'en-US',
    title: 'The weekend weather forecast',
    script: "And now for your weekend weather. Saturday will start with thick fog in many valleys, so please take care if you are driving early. The fog should clear by late morning, giving way to bright sunshine and pleasant temperatures of around twenty-two degrees. Sunday, however, will be a different story. A band of rain is moving in from the west, reaching the coast by midday and spreading inland during the afternoon. The wind will strengthen too, so if you have outdoor plans, Saturday is definitely the better choice. Looking further ahead, this unsettled weather is expected to continue into Monday before things finally calm down.",
    items: [
      { q: "What is the main hazard early on Saturday?", opts: ["Heavy rain", "Thick fog", "Strong wind"], ans: 1 },
      { q: "What will Saturday afternoon be like?", opts: ["Sunny and pleasant", "Cold and wet", "Windy and grey"], ans: 0 },
      { q: "When does Sunday's rain reach the coast?", opts: ["Early morning", "Around midday", "Late at night"], ans: 1 },
      { q: "Which day is better for outdoor plans?", opts: ["Saturday", "Sunday", "Monday"], ans: 0 }
    ]
  },
  {
    id: 'lst_x2_space_lecture', lv: 'C1', field: 'fen', accent: 'en-GB',
    title: 'A short lecture on orbits',
    script: "In today's session we'll look briefly at why the planets in our solar system stay in orbit, rather than flying off into space or falling into the Sun. The key idea is gravity. Every object with mass pulls on every other object, and the Sun, being by far the most massive thing in our neighbourhood, exerts an enormous pull on the planets. You might then ask why the planets don't simply crash into it. The answer is that they are also moving sideways, very fast. The result is a kind of balance: a planet is constantly falling toward the Sun, but it is travelling forward so quickly that it keeps missing. We call this stable, curving path an orbit, and the same principle keeps the Moon circling the Earth.",
    items: [
      { q: "What two things keep the planets in orbit?", opts: ["Gravity and sideways motion", "Heat and light from the Sun", "The Earth's magnetism"], ans: 0 },
      { q: "Why is the Sun's pull so strong?", opts: ["It is extremely hot", "It is by far the most massive object", "It is the closest star"], ans: 1 },
      { q: "Why don't the planets crash into the Sun?", opts: ["They move sideways very quickly", "They are too light", "Sunlight pushes them away"], ans: 0 },
      { q: "What else is kept in place by the same principle?", opts: ["The Moon circling the Earth", "Comets leaving the system", "Rivers flowing on Earth"], ans: 0 }
    ]
  },
  {
    id: 'lst_x2_airport_announcement', lv: 'C1', field: 'sosyal', accent: 'en-US',
    title: 'Airport announcements',
    script: "Ladies and gentlemen, may I have your attention, please. This is a final boarding call for passengers travelling to Madrid on flight four six seven. The gate is now closing, so any remaining passengers should make their way to gate fifteen immediately. We would also like to inform passengers waiting for the flight to Rome that, due to the late arrival of the incoming aircraft, departure has been delayed by approximately forty minutes. A new boarding time will be shown on the screens shortly. Finally, please remember that, for security reasons, baggage should never be left unattended at any time. Thank you for choosing Skyline Airways, and we wish you a pleasant journey.",
    items: [
      { q: "What is happening with the flight to Madrid?", opts: ["It has been delayed", "The gate is now closing", "It has been cancelled"], ans: 1 },
      { q: "Which gate should Madrid passengers go to?", opts: ["Gate fifteen", "Gate fifty", "Gate five"], ans: 0 },
      { q: "Why is the flight to Rome delayed?", opts: ["Bad weather", "The late arrival of the aircraft", "A security alert"], ans: 1 },
      { q: "What are passengers reminded about?", opts: ["Not to leave baggage unattended", "To keep their boarding passes", "To check their passports"], ans: 0 }
    ]
  }
];
content.listening = content.listening.concat(listening);

const grammar = [
  {
    id: 'gr_x2_conditionals', lv: 'B2', title: 'Conditionals (Type 0-1-2-3)',
    exp: "Type 0 genel gerçek: If + present, present (If you heat ice, it melts). Type 1 gerçekçi gelecek: If + present, will + V1 (If it rains, we'll stay in). Type 2 hayali şimdi/gelecek: If + past, would + V1 (If I had time, I would help). Type 3 geçmişe pişmanlık: If + had + V3, would have + V3. Tuzak: 'if' cümleciğinde 'will' kullanma; Type 2'de resmî dilde tüm öznelerle 'were' (If I were you).",
    items: [
      { q: "If it ___ tomorrow, we'll cancel the picnic.", opts: ["rains", "will rain", "rained"], ans: 0, tr: "Type 1: if + present -> 'rains'." },
      { q: "If I ___ you, I would apologise.", opts: ["am", "were", "will be"], ans: 1, tr: "Type 2 hayali -> 'were' tercih edilir." },
      { q: "If she had studied, she ___ the exam.", opts: ["would pass", "would have passed", "passed"], ans: 1, tr: "Type 3 geçmiş -> would have + V3." },
      { q: "We would travel more if we ___ more money.", opts: ["have", "had", "will have"], ans: 1, tr: "Type 2: if + past -> 'had'." },
      { q: "If you heat ice, it ___.", opts: ["melts", "would melt", "will melt"], ans: 0, tr: "Type 0 genel gerçek -> present + present." },
      { q: "I'll call you if I ___ time.", opts: ["will have", "have", "had"], ans: 1, tr: "'if' cümleciğinde 'will' olmaz -> 'have'." }
    ]
  },
  {
    id: 'gr_x2_passive', lv: 'B1', title: 'The Passive Voice',
    exp: "Edilgen yapı: be + V3 (fiilin üçüncü hali). Eylemi yapan bilinmiyor ya da önemsizse kullanılır: The bridge was built in 1990. 'be' fiili zamana göre değişir (is made / was made / will be made / has been made). Eylemi yapan önemliyse 'by' ile verilir. Tuzak: geçişsiz fiiller (happen, arrive, exist) edilgen yapılamaz.",
    items: [
      { q: "The letter ___ yesterday.", opts: ["was sent", "sent", "is sent"], ans: 0, tr: "Geçmiş edilgen -> was + V3." },
      { q: "English ___ all over the world.", opts: ["speaks", "is spoken", "spoken"], ans: 1, tr: "Geniş zaman edilgen -> is + V3." },
      { q: "The bridge ___ in 1905.", opts: ["built", "was built", "is built"], ans: 1, tr: "Belirli geçmiş -> was built." },
      { q: "This room ___ every day.", opts: ["is cleaned", "cleans", "cleaned"], ans: 0, tr: "Geniş zaman edilgen -> is cleaned." },
      { q: "A new hospital ___ next year.", opts: ["will build", "will be built", "is built"], ans: 1, tr: "Gelecek edilgen -> will be + V3." },
      { q: "The cake ___ by my sister.", opts: ["was made", "made", "makes"], ans: 0, tr: "'by' ile fail -> edilgen 'was made'." }
    ]
  },
  {
    id: 'gr_x2_relative_clauses', lv: 'B2', title: 'Relative Clauses',
    exp: "who (insan), which (nesne/hayvan), that (her ikisi, sadece defining), where (yer), whose (iyelik). Defining clause virgülsüzdür ve cümle için gereklidir; non-defining clause virgüllüdür ve ek bilgi verir. Tuzak: non-defining (virgüllü) clause'da 'that' kullanılmaz; virgülden sonra 'which' veya 'who' gelir.",
    items: [
      { q: "The woman ___ lives next door is a doctor.", opts: ["which", "who", "whose"], ans: 1, tr: "İnsan + özne -> who." },
      { q: "That's the village ___ I grew up.", opts: ["which", "where", "who"], ans: 1, tr: "Yer bildirir -> where." },
      { q: "The book ___ you lent me was great.", opts: ["who", "which", "where"], ans: 1, tr: "Nesne -> which." },
      { q: "My brother, ___ lives in Paris, is a chef.", opts: ["who", "that", "which"], ans: 0, tr: "Non-defining (virgüllü) -> 'that' olmaz, 'who'." },
      { q: "This is the student ___ project won the prize.", opts: ["who", "whose", "which"], ans: 1, tr: "İyelik (projesi) -> whose." },
      { q: "The film ___ we saw last night was boring.", opts: ["where", "that", "who"], ans: 1, tr: "Defining, nesne -> that/which." }
    ]
  },
  {
    id: 'gr_x2_reported_speech', lv: 'B2', title: 'Reported Speech',
    exp: "Dolaylı anlatımda zaman bir adım geriye kayar: present -> past, will -> would, can -> could, present perfect -> past perfect. Zaman/yer zarfları da değişir (now -> then, tomorrow -> the next day). Tuzak: soruları aktarırken düz cümle dizilişi kullanılır ve evet/hayır sorularında 'if/whether' eklenir (He asked if I was ready).",
    items: [
      { q: "She said she ___ tired.", opts: ["is", "was", "will be"], ans: 1, tr: "present -> past: is -> was." },
      { q: "He told me he ___ help the next day.", opts: ["will", "would", "can"], ans: 1, tr: "will -> would." },
      { q: "They asked ___ I was ready.", opts: ["that", "if", "what"], ans: 1, tr: "Evet/hayır sorusu -> 'if/whether'." },
      { q: "Tom said he ___ finished his work.", opts: ["has", "had", "have"], ans: 1, tr: "present perfect -> past perfect: had." },
      { q: "She asked me where I ___.", opts: ["live", "lived", "do live"], ans: 1, tr: "Soru aktarımı düz diziliş + zaman geriye -> lived." },
      { q: "He said he would come ___.", opts: ["tomorrow", "the next day", "yesterday"], ans: 1, tr: "tomorrow -> the next day." }
    ]
  },
  {
    id: 'gr_x2_gerund_infinitive', lv: 'B2', title: 'Gerund and Infinitive',
    exp: "Bazı fiiller -ing ister (enjoy, avoid, finish, mind), bazıları to + V1 (want, decide, hope, plan). Anlam değiştirenler var: 'stop doing' (bırakmak) ≠ 'stop to do' (yapmak için durmak). Tuzak: edattan (at, of, about, in) sonra daima -ing gelir (good at swimming).",
    items: [
      { q: "I enjoy ___ in the sea.", opts: ["to swim", "swimming", "swim"], ans: 1, tr: "enjoy + -ing." },
      { q: "She decided ___ abroad.", opts: ["studying", "to study", "study"], ans: 1, tr: "decide + to V1." },
      { q: "He's very good at ___ problems.", opts: ["solving", "to solve", "solve"], ans: 0, tr: "Edattan sonra -> -ing." },
      { q: "On the way home we stopped ___ a coffee.", opts: ["having", "to have", "have"], ans: 1, tr: "'stop to do' = yapmak için durmak -> to have." },
      { q: "Would you mind ___ the door?", opts: ["to close", "closing", "close"], ans: 1, tr: "mind + -ing." },
      { q: "They hope ___ the match on Saturday.", opts: ["winning", "to win", "win"], ans: 1, tr: "hope + to V1." }
    ]
  },
  {
    id: 'gr_x2_inversion', lv: 'C1', title: 'Inversion',
    exp: "Olumsuz veya sınırlayıcı bir zarf cümle başına gelince özne ile yardımcı fiil yer değiştirir (devrik yapı): Never have I seen...; Not only did he..., but...; Hardly had I arrived when... . Tuzak: devrik yapıda soru dizilişi kullanılır (yardımcı fiil + özne); düz dizilişe dönme ve yardımcı fiili (do/did/have) unutma.",
    items: [
      { q: "Never ___ such a beautiful view.", opts: ["I have seen", "have I seen", "I saw"], ans: 1, tr: "Olumsuz başlangıç -> devrik: have I seen." },
      { q: "Not only ___ late, but he also forgot the keys.", opts: ["he was", "was he", "he is"], ans: 1, tr: "Not only + devrik -> was he." },
      { q: "Hardly ___ when the phone rang.", opts: ["had I arrived", "I had arrived", "I arrived"], ans: 0, tr: "Hardly ... when -> devrik: had I arrived." },
      { q: "Seldom ___ such dedication in a student.", opts: ["we see", "do we see", "we do see"], ans: 1, tr: "Seldom başta -> do we see." },
      { q: "No sooner had she left ___ it started to rain.", opts: ["when", "than", "then"], ans: 1, tr: "No sooner ... than kalıbı." },
      { q: "Only after the meeting ___ the truth.", opts: ["I learned", "did I learn", "I did learn"], ans: 1, tr: "Only after + devrik -> did I learn." }
    ]
  },
  {
    id: 'gr_x2_wish_ifonly', lv: 'C1', title: 'Wish / If only',
    exp: "Şimdiki gerçeğe karşı istek: wish + past (I wish I knew). Geçmişe pişmanlık: wish + had + V3 (I wish I had studied). Başkasının davranışından şikâyet: wish + would (I wish it would stop raining). 'If only' aynı kalıpları daha vurgulu kullanır. Tuzak: resmî dilde 'I wish I was' yerine 'I wish I were'.",
    items: [
      { q: "I wish I ___ how to drive.", opts: ["know", "knew", "known"], ans: 1, tr: "Şimdiki gerçeğe karşı -> wish + past 'knew'." },
      { q: "She wishes she ___ harder for the exam.", opts: ["studied", "had studied", "studies"], ans: 1, tr: "Geçmiş pişmanlık -> wish + had + V3." },
      { q: "I wish it ___ raining; I want to go out.", opts: ["stops", "would stop", "stopped"], ans: 1, tr: "Şikâyet/rahatsızlık -> wish + would." },
      { q: "If only I ___ taller!", opts: ["am", "were", "was being"], ans: 1, tr: "If only + were (hayali şimdi)." },
      { q: "He wishes he ___ that mistake last year.", opts: ["didn't make", "hadn't made", "doesn't make"], ans: 1, tr: "Geçmiş -> wish + hadn't + V3." },
      { q: "I wish you ___ so loudly; I can't concentrate.", opts: ["didn't talk", "wouldn't talk", "don't talk"], ans: 1, tr: "Başkasının davranışından şikâyet -> wish + wouldn't." }
    ]
  },
  {
    id: 'gr_x2_articles', lv: 'B1', title: 'Articles (a / an / the)',
    exp: "a/an: ilk kez geçen, tekil sayılabilen isim (a book, an hour). the: belirli, daha önce anılan ya da tek olan (the sun, the book I bought). Sıfır artikel: genel anlamda çoğul ya da sayılamayan isim (Cats are independent). Tuzak: seçim YAZIYA değil SESE göre yapılır: 'an hour' (sessiz h), 'a university' (yu- sesi).",
    items: [
      { q: "She is ___ honest person.", opts: ["a", "an", "the"], ans: 1, tr: "'honest' sessiz h, ünlü sesle başlar -> an." },
      { q: "I looked up at ___ moon last night.", opts: ["a", "an", "the"], ans: 2, tr: "Tek olan -> the moon." },
      { q: "He plays ___ guitar very well.", opts: ["a", "the", "-"], ans: 1, tr: "Çalgı aletleri -> the guitar." },
      { q: "___ tigers are dangerous animals.", opts: ["The", "A", "-"], ans: 2, tr: "Genel çoğul -> sıfır artikel." },
      { q: "We waited for ___ hour.", opts: ["a", "an", "the"], ans: 1, tr: "'hour' sessiz h -> an." },
      { q: "She wants to be ___ engineer.", opts: ["a", "an", "the"], ans: 1, tr: "Ünlü sesle başlayan meslek -> an engineer." }
    ]
  },
  {
    id: 'gr_x2_comparatives', lv: 'B1', title: 'Comparatives and Superlatives',
    exp: "Kısa sıfat + -er + than (taller than). Uzun sıfat: more + sıfat + than (more expensive than). Eşitlik: as + sıfat + as. Üstünlük: the + -est / the most. Tuzak: çift karşılaştırma yapma ('more taller' yanlış). Düzensizler: good-better-best, bad-worse-worst.",
    items: [
      { q: "This box is ___ than that one.", opts: ["heavy", "heavier", "heaviest"], ans: 1, tr: "Kısa sıfat + -er + than." },
      { q: "Today is ___ than yesterday.", opts: ["more hot", "hotter", "hottest"], ans: 1, tr: "hot -> hotter (çift t)." },
      { q: "She is ___ student in the class.", opts: ["the best", "better", "best"], ans: 0, tr: "Üstünlük -> the best." },
      { q: "A car is ___ expensive than a bike.", opts: ["more", "most", "much"], ans: 0, tr: "Uzun sıfat -> more expensive." },
      { q: "He runs ___ as his brother.", opts: ["as fast", "faster", "fastest"], ans: 0, tr: "Eşitlik -> as fast as." },
      { q: "This is ___ film I have ever seen.", opts: ["the worst", "worse", "bad"], ans: 0, tr: "Üstünlük düzensiz -> the worst." }
    ]
  },
  {
    id: 'gr_x2_perfect_tenses', lv: 'C1', title: 'Perfect Tenses',
    exp: "Present perfect: have/has + V3, geçmişte olup şimdiye etkisi süren (I have finished). Past perfect: had + V3, geçmişte başka bir olaydan önce (She had left before I arrived). Future perfect: will have + V3, gelecekte bir andan önce tamamlanacak (By 2030 they will have built it). Tuzak: belirli geçmiş zarfıyla (yesterday, in 2010) present perfect kullanma -> past simple.",
    items: [
      { q: "I ___ already finished my homework.", opts: ["have", "has", "had"], ans: 0, tr: "Present perfect, 1. tekil -> have finished." },
      { q: "By the time we arrived, the film ___.", opts: ["has started", "had started", "starts"], ans: 1, tr: "Geçmişte önce olan -> past perfect 'had started'." },
      { q: "She ___ here since 2010.", opts: ["lives", "has lived", "lived"], ans: 1, tr: "'since' ile present perfect." },
      { q: "By next June, I ___ my degree.", opts: ["will finish", "will have finished", "finish"], ans: 1, tr: "Future perfect -> will have + V3." },
      { q: "He ___ his keys, so he couldn't get in.", opts: ["has lost", "had lost", "loses"], ans: 1, tr: "Geçmişten önceki olay -> had lost." },
      { q: "I ___ that film yesterday.", opts: ["have seen", "saw", "had seen"], ans: 1, tr: "Belirli geçmiş 'yesterday' -> past simple 'saw'." }
    ]
  }
];
content.grammar = content.grammar.concat(grammar);

const writing = [
  {
    id: 'wr_x2_email_friend', lv: 'B1', exam: ['GENEL'], type: 'Arkadaşa Gayriresmî E-posta', minWords: 100,
    prompt: "Write an informal email to a friend inviting them to spend the weekend at your house. Suggest some activities and explain how to get there.",
    tips: "Samimi bir dil kullan (Hi / Hey). Davetini açıkça yap, birlikte yapabileceğiniz birkaç etkinlik öner, kısa bir yol tarifi ekle ve neşeli bir kapanışla bitir (Can't wait to see you!).",
    structure: "Selamlama -> davet -> etkinlik önerileri -> yol tarifi -> sıcak kapanış."
  },
  {
    id: 'wr_x2_cover_letter', lv: 'B2', exam: ['GENEL'], type: 'İş Başvuru Mektubu', minWords: 180,
    prompt: "Write a formal cover letter applying for a summer internship at an international company. Explain your skills and why you would be a suitable candidate.",
    tips: "Resmî dil kullan (Dear Hiring Manager). Hangi pozisyona başvurduğunu belirt, ilgili beceri ve deneyimlerini somut örneklerle göster, motivasyonunu açıkla ve görüşme talebiyle kapat.",
    structure: "Selamlama -> başvurulan pozisyon -> beceri ve deneyim -> motivasyon -> görüşme talebi + resmî kapanış."
  },
  {
    id: 'wr_x2_short_story', lv: 'B1', exam: ['GENEL'], type: 'Öykü / Anlatı', minWords: 120,
    prompt: "Write a short story that begins with this sentence: 'When I opened the door, I knew something was wrong.'",
    tips: "Verilen cümleyle başla. Olayları zaman sırasıyla anlat (first, then, suddenly, finally) ve geçmiş zaman kullan. Kısa da olsa bir gerilim/doruk nokta ve net bir sonuç ekle.",
    structure: "Açılış cümlesi -> olayların gelişimi -> doruk nokta -> sonuç."
  },
  {
    id: 'wr_x2_review', lv: 'B2', exam: ['GENEL'], type: 'Film / Restoran İncelemesi', minWords: 150,
    prompt: "Write a review of a film you have seen recently or a restaurant you have visited. Describe it and say whether you would recommend it.",
    tips: "Neyi incelediğini kısaca tanıt, olumlu ve olumsuz yönleri dengeli biçimde ver, kişisel görüşünü gerekçelendir ve net bir tavsiyeyle bitir (öneririm / önermem).",
    structure: "Tanıtım -> olumlu yönler -> olumsuz yönler -> genel değerlendirme + tavsiye."
  },
  {
    id: 'wr_x2_opinion_socialmedia', lv: 'B2', exam: ['GENEL'], type: 'Görüş Paragrafı', minWords: 150,
    prompt: "Some people think social media brings people closer together, while others believe it makes us more isolated. What is your opinion?",
    tips: "Net bir tez cümlesiyle başla. Görüşünü iki ya da üç gerekçe ve örnekle destekle, karşı görüşe kısaca değin ve tezini yineleyerek kapat. Bağlaçları doğru kullan (however, for example).",
    structure: "Tez -> gerekçe 1 + örnek -> gerekçe 2 + örnek -> karşı görüşe kısa değini -> sonuç."
  },
  {
    id: 'wr_x2_describe_place', lv: 'B1', exam: ['GENEL'], type: 'Yer Betimlemesi', minWords: 100,
    prompt: "Describe your favourite place in your town or city. Explain what it looks like and why you like it.",
    tips: "Yeri tanıt, duyulara hitap eden sıfatlar kullan (busy, quiet, colourful), neden sevdiğini açıkla ve kısa kişisel bir anıyla renklendir.",
    structure: "Yerin tanıtımı -> görünümün betimi -> neden sevdiğin -> kişisel anı + kapanış."
  },
  {
    id: 'wr_x2_ielts_t2_technology', lv: 'C1', exam: ['IELTS'], type: 'IELTS Task 2 Görüş Denemesi', minWords: 250,
    prompt: "Some people believe that modern technology is making people less creative. To what extent do you agree or disagree?",
    tips: "Giriş'te konuyu kendi sözcüklerinle yeniden ifade et ve net bir duruş belirt. Her gövde paragrafı tek bir ana fikir, açıklama ve örnek içersin. Akademik bağlaçlar kullan (furthermore, however) ve sonuçta görüşünü özetle.",
    structure: "Giriş (parafraz + tez) -> gövde 1 (fikir + örnek) -> gövde 2 (fikir + örnek) -> sonuç."
  },
  {
    id: 'wr_x2_ielts_t1_graph', lv: 'B2', exam: ['IELTS'], type: 'IELTS Task 1 Grafik Betimleme', minWords: 150,
    prompt: "The chart below shows the number of international tourists visiting three cities between 2010 and 2020. Summarise the information by selecting and reporting the main features, and make comparisons where relevant.",
    tips: "Giriş'te grafiği kendi cümlenle tanıt. En belirgin eğilimleri (overview) bir-iki cümlede özetle. Sayıları ve eğilim fiillerini kullan (rose, fell, peaked, remained stable). Görüş ekleme; yalnızca betimle ve karşılaştır.",
    structure: "Giriş (grafiğin tanıtımı) -> genel eğilim (overview) -> ayrıntı 1 -> ayrıntı 2 + karşılaştırmalar."
  },
  {
    id: 'wr_x2_ielts_t2_education', lv: 'C1', exam: ['IELTS'], type: 'IELTS Task 2 Tartışma Denemesi', minWords: 250,
    prompt: "Some people think universities should focus on practical job skills, while others believe their main role is to develop broad academic knowledge. Discuss both views and give your own opinion.",
    tips: "Her iki görüşü de ayrı paragraflarda adil biçimde sun. Kendi görüşünü açıkça belirt ve girişle sonuç arasında tutarlı tut. Her noktayı örnekle destekle ve dengeli, akademik bir ton koru.",
    structure: "Giriş (parafraz + tez) -> 1. görüş -> 2. görüş -> kendi görüşün -> sonuç."
  },
  {
    id: 'wr_x2_toefl_independent', lv: 'C1', exam: ['TOEFL'], type: 'TOEFL Bağımsız Deneme', minWords: 250,
    prompt: "Do you agree or disagree with the following statement? 'It is better to work for a large company than for a small one.' Use specific reasons and examples to support your answer.",
    tips: "Net bir duruşla başla. İki ya da üç güçlü gerekçeyi ayrı paragraflarda örneklerle geliştir; kişisel deneyim örnekleri kabul edilir. Sonuç paragrafında tezini yinele.",
    structure: "Giriş (tez) -> gerekçe 1 + örnek -> gerekçe 2 + örnek -> sonuç."
  },
  {
    id: 'wr_x2_toefl_integrated', lv: 'B2', exam: ['TOEFL'], type: 'TOEFL Bütünleşik Deneme', minWords: 180,
    prompt: "You will read a short passage and then hear a lecture on the same topic. Summarise the points made in the lecture, explaining how they cast doubt on the points made in the reading.",
    tips: "Kendi fikrini ekleme; yalnızca okuma ve dinlemeyi özetle ve karşılaştır. Dinlemenin okumadaki her noktayı nasıl çürüttüğünü açıkla. Aktarım kalıpları kullan (The lecturer argues..., whereas the reading claims...).",
    structure: "Giriş (genel ilişki) -> nokta 1 (okuma vs dinleme) -> nokta 2 -> nokta 3."
  },
  {
    id: 'wr_x2_argument_environment', lv: 'C1', exam: ['TOEFL', 'IELTS'], type: 'Argümantatif Deneme', minWords: 250,
    prompt: "Governments should ban single-use plastics in order to protect the environment. To what extent do you agree? Support your position with reasons and examples.",
    tips: "Açık bir tez belirle. Güçlü argümanlarını kanıt ve örneklerle destekle, en az bir karşı argümana yanıt vererek çürüt. Resmî, tutarlı ve akademik bir ton kullan; sonuçta bir öneri ya da çağrıyla kapat.",
    structure: "Giriş (tez) -> argüman 1 + kanıt -> argüman 2 + kanıt -> karşı argüman + çürütme -> sonuç."
  }
];
content.writing = content.writing.concat(writing);

// --- balance ans positions by reordering options (explanations are
// content-based for articles/grammar, and listening has no rationale) ---
let aCount = 0;
for (const it of articles) {
  for (const q of it.items) {
    const r = place(q.opts, q.ans, aCount % 4);
    q.opts = r.arr; q.ans = r.ans; aCount++;
  }
}
let lCount = 0;
for (const it of listening) {
  for (const q of it.items) {
    const r = place(q.opts, q.ans, lCount % 3);
    q.opts = r.arr; q.ans = r.ans; lCount++;
  }
}
let gCount = 0;
for (const it of grammar) {
  for (const q of it.items) {
    const r = place(q.opts, q.ans, gCount % 3);
    q.opts = r.arr; q.ans = r.ans; gCount++;
  }
}

content._readme = "ApexFlow icerigi. Oxford 5000 A-F partileri (B2-C1) + YDS/YOKDIL soru bankalari (cloze, restate, oddout, dialogue, paracomp, translate) + Learn modulleri (articles, listening, grammar, writing) yuklu. Yeni parti: bu dosyayi bana gonder, siradaki maddeleri ekleyip geri vereyim. id benzersiz; lv A1-C2; ans 0'dan baslar.";

fs.writeFileSync(file, JSON.stringify(content, null, 2));
const sum = a => a.length;
console.log('Batch 2 written. Totals -> articles:', sum(content.articles), 'listening:', sum(content.listening), 'grammar:', sum(content.grammar), 'writing:', sum(content.writing));
