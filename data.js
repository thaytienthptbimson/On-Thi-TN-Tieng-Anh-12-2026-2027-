/* data.js — đặt cùng thư mục với index.html. Bổ sung (không ghi đè) ngân hàng mẫu.
   EXTRA_B: cấp(0-3)|câu|A|B|C|D|đáp án(0-3)   ·   EXTRA_P[dạng 0-5]: danh sách bài {lv,secs:[{h,p,qs}]} */
var Q=(s,o,a)=>({s,o,a});
window.EXTRA_B={
ten:['0|They ___ football every Sunday.|play|plays|are playing|played|0','1|I ___ my keys, so I can\'t open the door.|lost|have lost|was losing|lose|1','2|When I got home, my brother ___ TV for two hours.|watched|was watching|had been watching|has watched|2','3|By next June, she ___ in this company for ten years.|will work|will have worked|has worked|will be working|1'],
pas:['0|English ___ all over the world.|speaks|is spoken|spoke|is speaking|1','1|The windows ___ yet.|haven\'t cleaned|haven\'t been cleaned|aren\'t cleaning|didn\'t clean|1','2|He doesn\'t like ___ at in public.|laughing|to laugh|being laughed|laughed|2','3|The new law is expected ___ next month.|introduce|to introduce|to be introduced|being introduced|2'],
con:['0|If you heat ice, it ___.|melt|melts|will melting|melted|1','1|She would travel more if she ___ more money.|has|had|would have|will have|1','2|If we ___ earlier, we wouldn\'t have missed the bus.|left|had left|leave|would leave|1','3|But for your help, I ___ the exam.|would fail|would have failed|will fail|had failed|1'],
rel:['0|The girl ___ is wearing a red dress is my cousin.|which|who|whom|whose|1','1|That\'s the man ___ car was stolen yesterday.|who|whom|whose|which|2','2|The house ___ we lived ten years ago has been sold.|which|where|who|whom|1','3|She has two brothers, ___ are doctors.|that|both of whom|both of them|whom both|1'],
cmp:['0|This bag is ___ than that one.|cheap|cheaper|cheapest|the cheapest|1','1|Mai is not as ___ as her brother.|tall|taller|tallest|more tall|0','2|The ___ the weather became, the fewer people went out.|bad|worse|worst|more bad|1','3|Of all the candidates, Nam is ___ experienced.|the least|less|least of|lesser|0'],
mod:['0|You ___ park here; it is a no-parking area.|mustn\'t|needn\'t|don\'t have to|mightn\'t|0','1|I ___ swim when I was five.|can|could|may|must|1','2|The light is on, so he ___ be at home.|must|needn\'t|shouldn\'t|mustn\'t|0','3|You ___ have called me; I was already on my way.|needn\'t|mustn\'t|can\'t|may not|0'],
det:['0|There isn\'t ___ milk in the fridge.|some|any|many|few|1','1|___ student in this class has finished the test.|Every|All|Both|Few|0','2|Of the three films, ___ was worth watching.|neither|none|both|either|1','3|He gave me ___ advice on how to study abroad.|many|a great deal of|a great many|a few|1'],
wf:['0|She spoke ___ to the audience.|confident|confidence|confidently|confide|2','1|The ___ of the new library attracted many visitors.|open|opening|opened|openly|1','2|His ___ behaviour surprised everyone.|expect|unexpected|unexpectedly|expectation|1','3|The ___ of the experiment depends on careful preparation.|succeed|success|successful|successfully|1']
};
window.EXTRA_P={
1:[{lv:2,secs:[{h:'Điền vào chỗ trống (1–5)',p:'Many people believe that talent alone decides who succeeds. On meeting a champion athlete, @1. In reality, however, behind most champions are years of unseen, repetitive practice. A student who studies for thirty minutes every day @2. @3. We tend to credit talent for results @4. We seldom see the hours of failure, so we rely on the final performance to judge ability. Hence, we should be careful @5.',qs:[
Q('',['we might assume that the athlete must have been born gifted','the athlete might assume that we must have been born gifted','born gifted might be assumed to be the athlete','gifted birth might make the athlete assumed by us'],0),
Q('',['will usually outperform one who studies for hours only before exams','usually outperforming one who studies for hours only before exams','is usually outperformed one who studies for hours only before exams','has usually outperform one who studies for hours only before exams'],0),
Q('',['Consistency, therefore, proves more valuable than occasional bursts of effort','Occasional bursts of effort, similarly, prove more valuable than consistency','However, consistency proves to be less valuable than occasional bursts of effort','Besides, bursts of occasional effort prove being consistent'],0),
Q('',['unless the effort behind them is hardly ever seen','because the effort behind them is hardly ever seen','as though the effort behind them hardly ever seen','so that the effort behind them is hardly ever seen'],1),
Q('',['for ignoring the role of persistent practice in success','not to ignore the role of persistent practice in success','ignoring the role of persistent practice in success to be','to be ignored the role of persistent practice in success'],1)]}]}],
2:[{lv:2,secs:[{h:'Đọc đoạn văn và chọn đáp án đúng',p:'Cities have long treated rooftops as wasted space: flat expanses of tar and concrete that absorb heat and serve no purpose beyond keeping rain out. Yet a growing number of architects argue that this <b>overlooked</b> surface could become one of the most valuable resources in the modern city.\n\nA green roof, covered with soil and vegetation, cuts the amount of heat that enters a building in summer and keeps warmth in during winter, so owners spend noticeably less on air conditioning and heating. Plants also catch rainwater, which eases the pressure on drains during storms. In addition, rooftop gardens provide a habitat for insects and birds that would otherwise find little shelter in dense districts.\n\n[I] Critics point out that such roofs are costly to build. [II] The structure must be reinforced to carry the extra weight, and a waterproof layer must be installed to prevent leaks. [III] Maintenance is also a concern, since plants need regular watering and pruning. [IV] Supporters reply that these expenses are recovered over time through lower energy bills and a longer roof lifespan.\n\nSome cities have therefore made green roofs mandatory for large new buildings, while others merely offer tax reductions to those who install <b>them</b>. Either way, the idea is gaining ground: the question is no longer whether rooftops can be used, but how soon.',qs:[
Q('The word <b>overlooked</b> in paragraph 1 is closest in meaning to ______.',['A. noticed','B. neglected','C. admired','D. protected'].map(x=>x.slice(3)),1),
Q('According to paragraph 1, cities have traditionally regarded rooftops as ______.',['places for relaxation','unused space of little value','sources of energy','areas reserved for gardens'],1),
Q('According to paragraph 2, a green roof can ______.',['replace heating systems entirely','reduce energy spending','keep rainwater from reaching the drains completely','attract only birds'],1),
Q('Which of the following is NOT mentioned in paragraph 2 as a benefit?',['Lower air-conditioning costs','Less strain on drains in storms','Shelter for wildlife','Cleaner air for residents'],3),
Q('Where in paragraph 3 does the following sentence best fit?\n<b>The initial outlay alone is enough to put many owners off.</b>',['[IV]','[III]','[II]','[I]'],1),
Q('The word <b>them</b> in paragraph 4 refers to ______.',['cities','buildings','green roofs','tax reductions'],2),
Q('Which of the following best summarises paragraph 3?',['Green roofs are too expensive to be worth building.','Green roofs face objections over expense, but supporters expect them to pay off.','Maintenance is the only real obstacle to green roofs.','Supporters admit that critics are completely right.'],1),
Q('Which of the following is true according to the passage?',['Every city requires green roofs on all new buildings.','Supporters say green roofs make roofs last longer.','Rooftop plants need no regular care.','Architects reject the idea of rooftop gardens.'],1),
Q('Which of the following can be inferred from the passage?',['Green roofs are the cheapest option to build.','Authorities may use policy to encourage adoption.','Dense districts already have too many birds.','Critics\' concerns have been fully resolved.'],1),
Q('Which of the following would be the best title for the passage?',['Rooftops Reborn: From Wasted Space to Urban Asset','Concrete Jungles: A City Without Hope','Why Plants Cannot Survive on Roofs','The End of Air Conditioning'],0)]}]}],
3:[{lv:1,secs:[{h:'Đọc đoạn văn và chọn đáp án đúng',p:'Most of us have met someone at a party, heard their name clearly, and lost it within seconds. Psychologists say this is rarely a failure of memory; it is a failure of attention.\n\nWhen we meet a stranger, our minds are busy preparing what to say next, so the name is never properly <b>stored</b>. A study of two hundred volunteers found that <b>those</b> who repeated a name aloud at once remembered it twice as often an hour later.\n\n<u>What makes the situation worse is that people feel embarrassed to ask again, so the same error is repeated at the next meeting.</u> The simple remedy is to pay full attention for a few seconds and to use the name in the conversation straight away.',qs:[
Q('In paragraph 1, the writer is ______.',['describing a common experience and hinting at its cause','blaming hosts for poor introductions','recommending that people attend parties','criticising psychologists'],0),
Q('The word <b>stored</b> in paragraph 2 is closest in meaning to ______.',['kept','spoiled','sold','shown'],0),
Q('The word <b>embarrassed</b> in paragraph 3 is OPPOSITE in meaning to ______.',['ashamed','confident','puzzled','tired'],1),
Q('The word <b>those</b> in paragraph 2 refers to ______.',['names','strangers','volunteers','minds'],2),
Q('Which of the following best paraphrases the underlined sentence in paragraph 3?',['People feel ashamed to ask a name again, which keeps the problem going.','People hate being asked for names repeatedly, so errors never happen.','Embarrassment stops people from meeting each other again.','Asking a name twice is the cause of the error.'],0),
Q('Which of the following statements would the writer NOT agree with?',['Forgetting names usually comes from a lack of attention.','Repeating a name aloud can help people recall it.','Poor memory itself is the main cause of forgetting names.','Using the name in conversation is a useful habit.'],2),
Q('In which paragraph does the writer mention research evidence?',['Paragraph 1','Paragraph 3','Paragraph 2','None of the paragraphs'],2),
Q('In which paragraph does the writer offer a solution?',['Paragraph 2','Paragraph 1','Paragraph 3','None of the paragraphs'],2)]}]}]
};

/* Bài soạn hoàn chỉnh (20 câu/bài; câu 1-5 nhận biết, 6-10 thông hiểu, 11-15 vận dụng, 16-20 vận dụng cao).
   Định dạng: câu|A|B|C|D|đáp án(0-3). Chủ điểm "ten": bài 1-3. Các bài còn lại tạm dùng ngân hàng mẫu. */
window.EXTRA_G={ten:[
[
"She usually ___ to school by bike.|go|goes|is going|went|1",
"We ___ a new car last week.|buy|buys|bought|have bought|2",
"Look! The baby ___ .|sleeps|is sleeping|slept|has slept|1",
"I ___ here since 2019.|live|am living|have lived|lived|2",
"The sun ___ in the east.|rise|rises|rose|is rising|1",
"When I arrived, the meeting ___ .|already began|has already begun|had already begun|was already beginning|2",
"While my mother ___ dinner, my father was reading a newspaper.|cooks|cooked|was cooking|has cooked|2",
"By the time she moved to Paris, she ___ in London for ten years.|lived|had lived|has lived|was living|1",
"I ___ you as soon as I get there.|call|will call|would call|have called|1",
"Tom is still living in Hue. How long ___ there?|does he live|did he live|has he lived|is he living|2",
"This time next week, we ___ on a beach in Phu Quoc.|will lie|will be lying|lie|have been lying|1",
"By the end of this year, he ___ for the company for twenty years.|will work|will have worked|has worked|will be worked|1",
"I ___ to him for an hour when the line suddenly went dead.|spoke|had been speaking|have been speaking|speak|1",
"Linh ___ the floor at 8 p.m. yesterday.|cleans|was cleaning|has cleaned|had cleaned|1",
"If I ___ the answer, I would tell you.|know|knew|had known|will know|1",
"Hardly ___ the house when it started to rain.|had he left|he had left|did he leave|has he left|0",
"It is the first time I ___ such a beautiful sunset.|see|saw|have seen|am seeing|2",
"I ___ this man before, but I can't remember where.|have been seeing|have seen|am seeing|see|1",
"Mr Nam ___ in this village since he was born.|lives|lived|has lived|had lived|2",
"Had I known about the traffic, I ___ earlier.|would leave|would have left|will leave|had left|1"
],[
"She enjoys ___ to music in her free time.|listen|to listen|listening|listened|2",
"I want ___ a new phone.|buy|to buy|buying|bought|1",
"He can ___ the piano very well.|play|plays|to play|playing|0",
"They decided ___ the trip.|cancel|cancelling|to cancel|cancelled|2",
"We should avoid ___ junk food.|eat|to eat|eating|ate|2",
"My parents let me ___ out late at weekends.|stay|to stay|staying|stayed|0",
"She is looking forward to ___ you again.|see|seeing|saw|seen|1",
"The teacher made the students ___ the text again.|read|to read|reading|reads|0",
"He suggested ___ the meeting until Monday.|to postpone|postponing|postpone|to postponing|1",
"I remember ___ the door, so it must be locked.|locking|to lock|lock|locked|0",
"I forgot ___ the milk, so there is none for breakfast.|buying|to buy|buy|bought|1",
"___ his homework, Nam went out to play.|Finish|Having finished|Finishing to|To finish|1",
"She denied ___ the vase.|to break|breaking|break|broke|1",
"The boy was seen ___ the wall of the school.|climb|to climb|climbs|to climbing|1",
"It's no use ___ over spilt milk.|to cry|cry|crying|cried|2",
"I'd rather you ___ smoke in here.|don't|didn't|won't|aren't|1",
"The manager is said ___ the company ten years ago.|to found|to have founded|founding|having found|1",
"She regrets ___ him the secret; now everybody knows it.|to tell|telling|tell|told|1",
"___ to be late, she took a taxi.|Not wanting|Wanting not|Not to want|Don't want|0",
"He is used to ___ up early.|get|getting|got|have got|1"
],[
"Water ___ at 100 degrees Celsius.|boil|boils|is boiling|boiled|1",
"My brother ___ a student now.|is|was|has been|will be|0",
"Yesterday we ___ to the zoo.|go|goes|went|have gone|2",
"I ___ my teeth twice a day.|brush|brushes|am brushing|brushed|0",
"Tomorrow I ___ my grandparents.|visited|will visit|visits|have visited|1",
"She ___ when I called her.|is cooking|was cooking|has cooked|cooks|1",
"If it ___ tomorrow, we will cancel the picnic.|rains|will rain|rained|would rain|0",
"I have lived here ___ 2010.|for|since|during|from|1",
"Mai ___ her homework just now.|finishes|finished|has finished|had finished|1",
"When I get home, I ___ you.|call|called|will call|have called|2",
"When I arrived at the party, Linh ___ home already.|went|had gone|has gone|was going|1",
"I ___ him since we were children, so I know him well.|know|knew|have known|am knowing|2",
"At 9 o'clock last night, I ___ for my exam.|was studying|studies|will study|has studied|0",
"Next month, Hoa ___ in this school for exactly thirty years.|works|will work|will have worked|is working|2",
"If she ___ harder, she would pass the exam.|studies|studied|had studied|will study|1",
"I wish I ___ more time to prepare for the test yesterday.|had|had had|have had|would have|1",
"By the time the rescue team arrived, the climbers ___ for three days.|were trapped|had been trapped|have been trapped|are trapped|1",
"Scarcely ___ the room when the lights went out.|she entered|did she enter|had she entered|she had entered|2",
"It's high time we ___ action to protect the environment.|take|took|will take|have taken|1",
"Only after the results were announced ___ how well he had done.|he realised|did he realise|had he realised|he had realised|1"
]]};
