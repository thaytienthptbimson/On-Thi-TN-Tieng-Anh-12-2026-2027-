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
Q('The word <b>overlooked</b> in paragraph 1 is closest in meaning to ______.',['noticed','neglected','admired','protected'],1),
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
"By the time she moved to Paris, she ___ French for five years.|studied|had studied|has studied|was studying|1",
"I ___ you as soon as I get there.|call|will call|would call|have called|1",
"We ___ three chapters of this book so far.|read|are reading|have read|had read|2",
"This time next week, we ___ on a beach in Phu Quoc.|will lie|will be lying|lie|have been lying|1",
"By the end of this month, the engineers ___ the new bridge.|will build|will have built|have built|are building|1",
"Her eyes were red because she ___ for hours.|cried|was crying|had been crying|has been crying|2",
"Linh ___ the floor at 8 p.m. yesterday.|cleans|was cleaning|has cleaned|had cleaned|1",
"They ___ for the bus for forty minutes, and it still hasn't arrived.|wait|are waiting|have been waiting|had waited|2",
"Hardly ___ the house when it started to rain.|had he left|he had left|did he leave|has he left|0",
"It is the first time I ___ such a beautiful sunset.|see|saw|have seen|am seeing|2",
"This soup ___ delicious, so the chef is tasting it again before serving.|tastes|is tasting|has tasted|tasted|0",
"Much has changed in our hometown since we last ___ it five years ago.|visit|visited|have visited|had visited|1",
"By the time he retires next year, he ___ at this hospital for thirty-five years.|will work|will be working|will have been working|has been working|2"
],[
"She enjoys ___ to music in her free time.|listen|to listen|listening|listened|2",
"I want ___ a new phone.|buy|to buy|buying|bought|1",
"It is important ___ regular exercise every day.|take|taking|to take|took|2",
"She is interested in ___ foreign languages.|learn|to learn|learning|learned|2",
"Would you like ___ us for dinner tonight?|join|joining|to join|joined|2",
"My parents let me ___ out late at weekends.|stay|to stay|staying|stayed|0",
"She is looking forward to ___ you again.|see|seeing|saw|seen|1",
"The doctor advised him ___ less coffee.|drink|to drink|drinking|drank|1",
"The heavy rain prevented us from ___ the match.|finish|to finish|finishing|finished|2",
"I remember ___ the door, so it must be locked.|locking|to lock|lock|locked|0",
"I forgot ___ the milk, so there is none for breakfast.|buying|to buy|buy|bought|1",
"On the way home, we stopped ___ some fruit at a roadside stall.|buying|to buy|buy|bought|1",
"If the shirt is still stained, try ___ it with warm water and lemon juice.|wash|to wash|washing|washed|2",
"The boy was seen ___ the wall of the school.|climb|to climb|climbs|to climbing|1",
"It's no use ___ over spilt milk.|to cry|cry|crying|cried|2",
"I need to have my watch ___ before the exam tomorrow.|repair|to repair|repairing|repaired|3",
"The manager is said ___ the company ten years ago.|to found|to have founded|founding|having found|1",
"The celebrity wore dark glasses to avoid ___ by fans at the airport.|recognising|to recognise|being recognised|to be recognised|2",
"___ all the data carefully, the team submitted the final report.|Check|Having checked|Checking to|To check|1",
"He is used to ___ up early.|get|getting|got|have got|1"
],[
"Hurry up! The train to Da Nang ___ at 7:30 a.m.|leave|leaves|is leaving|left|1",
"My brother ___ a student now.|is|was|has been|will be|0",
"Please be quiet! The students ___ a listening test in the next room.|take|took|are taking|have taken|2",
"She ___ just ___ her report and sent it to the manager.|is / finishing|has / finished|was / finishing|had / finished|1",
"Tomorrow I ___ my grandparents.|visited|will visit|visits|have visited|1",
"While I ___ down the street, I suddenly met an old friend.|walk|walked|was walking|have walked|2",
"We will wait here until the rain ___.|stops|will stop|stopped|is stopping|0",
"It ___ a single drop in this region for the past two months.|doesn't rain|didn't rain|hasn't rained|wasn't raining|2",
"Mai ___ her homework just now.|finishes|finished|has finished|had finished|1",
"Look at those dark clouds! It ___ heavily any minute now.|rains|rained|is going to rain|has rained|2",
"Before he graduated from university, he ___ two mobile apps.|developed|has developed|had developed|was developing|2",
"I ___ him since we were children, so I know him well.|know|knew|have known|am knowing|2",
"Nam ___ his keys! It's really annoying.|always loses|is always losing|has always lost|was always losing|1",
"By 2030, scientists ___ a cure for several rare diseases.|discover|are discovering|will have discovered|have discovered|2",
"The factory closed down in 2021, and the building ___ empty ever since.|stands|stood|has stood|had stood|2",
"I wish I ___ more time to prepare for the test yesterday.|had|had had|have had|would have|1",
"By the time the rescue team arrived, the hikers ___ through the snowstorm for six hours.|walked|were walking|had been walking|have been walking|2",
"We ___ the office when the director called an urgent meeting.|are just leaving|have just left|were just about to leave|had just been leaving|2",
"It's high time we ___ action to protect the environment.|take|took|will take|have taken|1",
"Only after the results were announced ___ how well he had done.|he realised|did he realise|had he realised|he had realised|1"
]]};