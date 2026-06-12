const fs=require('fs');const path=require('path');const file=path.join(__dirname,'content.json');
const content=JSON.parse(fs.readFileSync(file,'utf8'));
const listening=[
 {id:'lst_x5_restaurant_booking',lv:'B1',field:'sosyal',accent:'en-US',title:'Booking a table',
  script:"Good evening, Bella's Kitchen, how can I help? — Hi, I'd like to book a table for Saturday night. — Of course. For how many people? — There will be six of us. — And what time would you like? — Around eight o'clock, if possible. — Let me check... I'm afraid eight is fully booked, but I can offer you a table at half past eight. — That works for us, thank you. — Wonderful. Can I take a name and a phone number? — Yes, it's Daniel Brooks. I'll text you the number now. — Perfect, Mr Brooks. We'll see you on Saturday at half past eight. One last thing: do you have any allergies we should know about? — One of us can't eat nuts. — Thank you, I'll make a note of that.",
  items:[
   {q:"How many people is the table for?",opts:["Four","Six","Eight"],ans:1},
   {q:"What time is finally booked?",opts:["Eight o'clock","Half past seven","Half past eight"],ans:2},
   {q:"What does the restaurant ask for besides a name?",opts:["A phone number","An email address","A home address"],ans:0},
   {q:"What does the caller mention at the end?",opts:["One guest cannot eat nuts","They will arrive late","They want a window seat"],ans:0}]},
 {id:'lst_x5_pharmacy_advice',lv:'B2',field:'saglik',accent:'en-GB',title:'Advice at the pharmacy',
  script:"Hello, how can I help you today? — Hi, I've had a sore throat and a cough for about three days. — I see. Do you have a high temperature at all? — No, I don't think so. I feel a bit tired, but that's all. — That sounds like a common cold rather than anything serious. I'd suggest these lozenges for your throat, and plenty of warm drinks. — Should I take antibiotics? — No, antibiotics won't help with a cold, because it's caused by a virus, not bacteria. They'd do more harm than good. — All right. How often should I use the lozenges? — One every three or four hours, but no more than six in a day. — And how long before I feel better? — Most people recover within a week. But if your temperature rises or the cough lasts more than ten days, please see your doctor.",
  items:[
   {q:"How long has the customer had symptoms?",opts:["About three days","About one week","About ten days"],ans:0},
   {q:"Why does the pharmacist say antibiotics won't help?",opts:["They are too expensive","A cold is caused by a virus, not bacteria","The customer is too tired"],ans:1},
   {q:"How many lozenges a day is the limit?",opts:["Three","Six","Ten"],ans:1},
   {q:"When should the customer see a doctor?",opts:["If the temperature rises or the cough lasts over ten days","If they feel a little tired","After one day"],ans:0}]},
 {id:'lst_x5_train_delay',lv:'B1',field:'sosyal',accent:'en-GB',title:'A station announcement',
  script:"Good afternoon, ladies and gentlemen. This is an announcement for passengers waiting on platform two. We are sorry to inform you that the two fifteen service to Oxford has been delayed by approximately twenty minutes. This is due to a signalling problem further down the line. The train is now expected to arrive at around twenty-five to three. Passengers travelling to Reading should note that this train will no longer stop at Reading; instead, please take the later service from platform four at three o'clock. We apologise for the inconvenience this may cause. If you require assistance, a member of staff is available at the ticket office near the main entrance. Refreshments can be bought at the café on platform one. Thank you for your patience, and we wish you a pleasant journey.",
  items:[
   {q:"How long is the Oxford train delayed?",opts:["About twenty minutes","About ten minutes","About an hour"],ans:0},
   {q:"What caused the delay?",opts:["Bad weather","A signalling problem","A broken train door"],ans:1},
   {q:"What should passengers for Reading do?",opts:["Take the later train from platform four","Wait on platform two","Leave the station"],ans:0},
   {q:"Where can passengers get help?",opts:["At the ticket office near the main entrance","On the train","At platform four"],ans:0}]},
 {id:'lst_x5_nutrition_talk',lv:'C1',field:'saglik',accent:'en-US',title:'A talk about healthy eating',
  script:"Welcome, everyone. Today I want to clear up a common misunderstanding about healthy eating. Many people believe that the secret is simply to eat less of everything, but that approach often fails, and here's why. When we cut our food too sharply, the body responds by slowing down and making us feel hungry, so most people give up within a few weeks. A better strategy is not to eat less, but to eat differently. Try filling half your plate with vegetables, choosing whole grains over white bread, and keeping sugary drinks for special occasions rather than every day. Notice that none of this asks you to go hungry. Another point worth remembering is that no single food is magic, and no single food is poison. It's the overall pattern, repeated over months and years, that shapes your health, not what you happen to eat on any one afternoon. So be patient with yourself, make small changes you can keep, and let those changes add up.",
  items:[
   {q:"What common misunderstanding does the speaker want to correct?",opts:["That healthy eating means simply eating less of everything","That vegetables are unhealthy","That breakfast is unnecessary"],ans:0},
   {q:"Why does eating much less often fail?",opts:["Food becomes too expensive","The body slows down and makes us feel hungry","It is against the law"],ans:1},
   {q:"What does the speaker suggest doing with half your plate?",opts:["Filling it with vegetables","Leaving it empty","Filling it with white bread"],ans:0},
   {q:"What shapes your health, according to the speaker?",opts:["What you eat on a single afternoon","The overall pattern over months and years","One magic food"],ans:1}]},
 {id:'lst_x5_bike_repair',lv:'B2',field:'fen',accent:'en-GB',title:'At the bike repair shop',
  script:"Morning. What seems to be the trouble with your bike? — The back wheel keeps making a clicking noise, and the brakes feel a bit weak. — Let's have a look. Could you lift the back wheel and turn the pedals for me? — Like this? — That's it. Ah, I can hear it. One of the spokes is loose, that's the clicking. I can tighten that in a few minutes. — Great. And the brakes? — The brake pads are quite worn, so I'd recommend replacing them. The old ones are almost down to the metal. — How much would all that cost? — The spoke is free, really, but new brake pads are twelve pounds fitted. — That's fine. How long will it take? — Give me about half an hour. If you want, there's a coffee shop just across the road. — Perfect, I'll wait there. Thank you.",
  items:[
   {q:"What is causing the clicking noise?",opts:["A loose spoke","A flat tyre","A broken pedal"],ans:0},
   {q:"What does the mechanic recommend for the brakes?",opts:["Replacing the worn brake pads","Buying a new bike","Removing the brakes"],ans:0},
   {q:"How much will the new brake pads cost, fitted?",opts:["Twelve pounds","Two pounds","Twenty pounds"],ans:0},
   {q:"What will the customer do while waiting?",opts:["Go to the coffee shop across the road","Repair the bike himself","Catch a bus home"],ans:0}]},
 {id:'lst_x5_water_cycle',lv:'C1',field:'fen',accent:'en-GB',title:'A lesson on the water cycle',
  script:"In today's lesson, we'll follow a single drop of water on its endless journey around our planet. Let's start in the ocean. When the sun heats the surface of the sea, water turns into an invisible gas called water vapour and rises into the air. This process is known as evaporation. As the vapour climbs higher, the air around it grows colder, and the vapour cools and gathers into tiny droplets, forming the clouds we see overhead. We call this stage condensation. When those droplets join together and become heavy enough, they fall back to the ground as rain or, in colder places, as snow. Some of this water soaks into the soil and is taken up by plants; some flows into rivers that carry it, eventually, all the way back to the sea. And then the whole cycle begins again. The important thing to remember is that no new water is created or destroyed. The very same water has been moving around the Earth for billions of years.",
  items:[
   {q:"What happens during evaporation?",opts:["Water turns into vapour and rises into the air","Rain falls to the ground","Clouds turn into ice"],ans:0},
   {q:"What forms the clouds?",opts:["Vapour cooling into tiny droplets","Rivers flowing uphill","Heat from the soil"],ans:0},
   {q:"What does some rainwater do after it reaches the ground?",opts:["It soaks into the soil and is taken up by plants","It disappears completely","It turns into vapour at once"],ans:0},
   {q:"What is the key point about the amount of water on Earth?",opts:["No new water is created or destroyed","New water is made every year","Water is slowly running out"],ans:0}]},
 {id:'lst_x5_gym_class',lv:'B1',field:'saglik',accent:'en-US',title:'Signing up for a class',
  script:"Hi, I saw a poster about yoga classes. Can you tell me more? — Sure! We run beginner yoga on Mondays and Wednesdays. — What time are the classes? — The Monday class is at six in the evening, and the Wednesday one is at half past nine in the morning. — The morning one sounds good. Do I need to bring anything? — Just comfortable clothes and a bottle of water. We provide the mats. — How much does it cost? — It's eight dollars per class, or you can buy ten classes for seventy dollars. — I'll start with a single class first, I think. — No problem. The instructor's name is Maria, and she's very friendly with beginners. Just arrive about ten minutes early so you can find a space. — Great, I'll be there on Wednesday. Thank you so much!",
  items:[
   {q:"When is the morning yoga class?",opts:["Half past nine on Wednesday","Six on Monday","Ten on Wednesday"],ans:0},
   {q:"What does the customer need to bring?",opts:["Comfortable clothes and water","A yoga mat","Special shoes"],ans:0},
   {q:"How much do ten classes cost?",opts:["Seventy dollars","Eight dollars","Eighty dollars"],ans:0},
   {q:"What is the customer advised to do?",opts:["Arrive about ten minutes early","Bring a friend","Pay in advance for a year"],ans:0}]},
 {id:'lst_x5_science_museum',lv:'B2',field:'fen',accent:'en-US',title:'A science museum tour',
  script:"Welcome to the Hall of Energy, everyone. Please gather round, and mind the step. The exhibit in front of you shows how a simple steam engine works, the kind that powered the first factories and trains. Notice the large wheel on the left: when steam pushes the piston back and forth, that motion is turned into the spinning of the wheel. If you press the green button on the rail, you'll see the whole thing move. Go ahead, try it. As we walk on, you'll see how engineers gradually made these machines smaller and far more efficient. Our next room is all about electricity, and there's a popular demonstration there that makes your hair stand on end, quite literally, so it's a favourite with children. Photography is allowed throughout the museum, but please don't touch the older, more delicate machines. We'll meet again by the gift shop at four o'clock. Until then, feel free to explore at your own pace.",
  items:[
   {q:"What does the first exhibit show?",opts:["How a simple steam engine works","How to build a car","How electricity is sold"],ans:0},
   {q:"What happens if you press the green button?",opts:["The exhibit moves","The lights go out","A door opens"],ans:0},
   {q:"What does the demonstration in the next room do?",opts:["It makes your hair stand on end","It produces rain","It plays music"],ans:0},
   {q:"What are visitors asked NOT to do?",opts:["Touch the older, delicate machines","Take any photographs","Talk to the guide"],ans:0}]},
 {id:'lst_x5_university_openday',lv:'B2',field:'sosyal',accent:'en-US',title:'A university open day',
  script:"Good morning, and thank you all for coming to our open day. My name is Professor Hale, and I'd like to give you a quick idea of how the day will run. In a few minutes, we'll split into smaller groups for a tour of the main campus, including the library and the science labs. The tour lasts about an hour. After that, at half past eleven, there will be short talks from each department in the lecture halls upstairs, so you can learn about the courses that interest you most. Lunch is provided free of charge in the dining hall from one o'clock. In the afternoon, current students will be around to answer your questions honestly, away from us staff, which many visitors find the most useful part of the day. Finally, if you're thinking of applying, please pick up an information pack from the desk by the entrance before you leave. Now, if you'll follow the guides outside, we'll begin the tours.",
  items:[
   {q:"What happens first on the open day?",opts:["A tour of the main campus","A free lunch","Talks from departments"],ans:0},
   {q:"When are the department talks?",opts:["At half past eleven","At one o'clock","At nine in the morning"],ans:0},
   {q:"Which part do many visitors find most useful?",opts:["Talking to current students","The free lunch","The opening speech"],ans:0},
   {q:"What should visitors do before leaving if they want to apply?",opts:["Pick up an information pack from the desk","Pay a fee","Email the professor"],ans:0}]},
 {id:'lst_x5_first_aid_radio',lv:'B2',field:'saglik',accent:'en-GB',title:'A first-aid radio segment',
  script:"And now for our weekly health segment. Today we're talking about a simple skill that everyone should know: what to do if someone burns their hand in the kitchen. The first and most important step is to cool the burn under cool running water for at least twenty minutes. I'll say that again, because people often stop too soon: twenty minutes of cool, not freezing, running water. While you do this, gently remove any rings or watches from the area before it begins to swell. Whatever you do, don't put ice directly on the skin, and don't use butter or toothpaste, despite what you may have heard, as these can make things worse. After cooling, cover the burn loosely with clean kitchen film or a clean plastic bag. For anything larger than the size of your hand, or any burn on the face, always seek medical help straight away. A few calm minutes of the right action can make a real difference to how well a burn heals.",
  items:[
   {q:"What is the most important first step for a burn?",opts:["Cool it under running water for at least twenty minutes","Cover it with butter","Put ice on it at once"],ans:0},
   {q:"What should you remove from the area early?",opts:["Rings or watches","Your gloves","Nothing at all"],ans:0},
   {q:"What does the speaker warn against?",opts:["Using butter or toothpaste on the burn","Cooling the burn","Calling a doctor"],ans:0},
   {q:"When should you always seek medical help?",opts:["For a burn larger than your hand or on the face","For any small burn","Only after a week"],ans:0}]}
];
content.listening=content.listening.concat(listening);
fs.writeFileSync(file,JSON.stringify(content,null,2));
const lv={},fl={},ac={};listening.forEach(a=>{lv[a.lv]=(lv[a.lv]||0)+1;fl[a.field]=(fl[a.field]||0)+1;ac[a.accent]=(ac[a.accent]||0)+1;});
console.log('listening x5 added:',listening.length,'lv',JSON.stringify(lv),'field',JSON.stringify(fl),'accent',JSON.stringify(ac));
