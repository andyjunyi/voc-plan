// adv 題庫 — VocabMaster
const POOL_ADV = [
  {
    "word": "mean",
    "diff": 3,
    "deck": "adv",
    "q": "What does this sign _____ ? I have never seen it before.",
    "opts": [
      "mean",
      "show",
      "tell",
      "speak"
    ],
    "ans": 0,
    "note": "【翻譯】這個標誌是什麼意思？我以前從未見過它。\n【解析】mean 作動詞表「意思是」，What does ~ mean? 是詢問字義的標準句型。\n【必備單字】mean [miːn] (v.) 意思是；(adj.) 吝嗇的，刻薄的",
    "collocation": [
      "mean a lot → 意義重大",
      "mean to V → 打算做⋯",
      "by no means → 絕非"
    ],
    "pattern": [
      "What does ___ mean? → ___是什麼意思？"
    ]
  },
  {
    "word": "woman",
    "diff": 1,
    "deck": "adv",
    "q": "The _____ in the blue dress is my aunt. She is a doctor.",
    "opts": [
      "woman",
      "person",
      "student",
      "child"
    ],
    "ans": 0,
    "note": "【翻譯】穿藍色洋裝的那位女性是我的阿姨，她是一名醫生。\n【解析】woman 指成年女性，注意複數不規則變化為 women。\n【必備單字】woman [ˈwʊmən] (n.) 女人，婦女（複數 women）",
    "collocation": [
      "young woman → 年輕女性",
      "businesswoman → 女商人",
      "women's rights → 女權"
    ],
    "pattern": []
  },
  {
    "word": "likely",
    "diff": 3,
    "deck": "adv",
    "q": "It is _____ to snow tonight, so please drive carefully on the way home.",
    "opts": [
      "likely",
      "lonely",
      "lively",
      "lovely"
    ],
    "ans": 0,
    "note": "【翻譯】今晚很可能會下雪，所以回家路上請小心開車。\n【解析】be likely to V 表示「很可能會⋯」，是重要句型。\n【必備單字】likely [ˈlaɪklɪ] (adj./adv.) 可能的，有可能",
    "collocation": [
      "be likely to V → 可能會做⋯",
      "most likely → 最有可能",
      "unlikely → 不太可能的（反義）"
    ],
    "pattern": [
      "It is likely that + 子句 → 很可能⋯",
      "be likely to + V → 可能會⋯"
    ]
  },
  {
    "word": "world",
    "diff": 1,
    "deck": "adv",
    "q": "English is spoken all over the _____ and it is very useful to learn.",
    "opts": [
      "world",
      "country",
      "city",
      "island"
    ],
    "ans": 0,
    "note": "【翻譯】英語在全世界通用，學習它非常有用。\n【解析】all over the world 是「遍及全世界」的固定說法。\n【必備單字】world [wɜːrld] (n.) 世界，地球",
    "collocation": [
      "all over the world → 全世界",
      "world record → 世界紀錄",
      "world peace → 世界和平",
      "the whole world → 整個世界"
    ],
    "pattern": []
  },
  {
    "word": "war",
    "diff": 3,
    "deck": "adv",
    "q": "Many people lost their homes and families during the _____ that lasted five years.",
    "opts": [
      "war",
      "race",
      "game",
      "match"
    ],
    "ans": 0,
    "note": "【翻譯】許多人在這場長達五年的戰爭中失去了家園和家人。\n【解析】war 表示「戰爭」，at war 為「在交戰中」的固定說法。\n【必備單字】war [wɔːr] (n.) 戰爭",
    "collocation": [
      "at war → 在交戰中",
      "go to war → 開戰",
      "a civil war → 內戰",
      "war against → 對⋯的戰爭"
    ],
    "pattern": []
  },
  {
    "word": "speak",
    "diff": 1,
    "deck": "adv",
    "q": "Can you _____ more slowly? I can't understand you when you talk too fast.",
    "opts": [
      "speak",
      "shout",
      "whisper",
      "laugh"
    ],
    "ans": 0,
    "note": "【翻譯】你能說慢一點嗎？你說太快我聽不懂。\n【解析】speak 強調「說話這個動作」，speak slowly 放慢說話速度。\n【必備單字】speak [spiːk] (v.) 說話，講（語言）（三態：speak-spoke-spoken）",
    "collocation": [
      "speak up → 大聲說；說出意見",
      "speak out → 公開表達",
      "speak to/with sb → 與某人說話",
      "speak a language → 說某種語言"
    ],
    "pattern": [
      "speak + 語言 → 說某種語言（如 speak English）"
    ]
  },
  {
    "word": "whale",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ is the largest animal on Earth and it lives in the ocean.",
    "opts": [
      "whale",
      "shark",
      "dolphin",
      "turtle"
    ],
    "ans": 0,
    "note": "【翻譯】鯨魚是地球上最大的動物，生活在海洋中。\n【解析】whale 指鯨魚，是哺乳動物而非魚類，常出現在自然類閱讀中。\n【必備單字】whale [weɪl] (n.) 鯨魚",
    "collocation": [
      "blue whale → 藍鯨",
      "humpback whale → 座頭鯨",
      "whale watching → 賞鯨"
    ],
    "pattern": []
  },
  {
    "word": "build",
    "diff": 1,
    "deck": "adv",
    "q": "They plan to _____ a new library in our neighborhood next year.",
    "opts": [
      "build",
      "break",
      "burn",
      "buy"
    ],
    "ans": 0,
    "note": "【翻譯】他們計劃明年在我們社區建一座新圖書館。\n【解析】build 表示「建造、建立」，三態為 build-built-built。\n【必備單字】build [bɪld] (v.) 建造，建立（三態：build-built-built）",
    "collocation": [
      "build up → 建立；增強",
      "build a house → 蓋房子",
      "build confidence → 建立信心",
      "build a relationship → 建立關係"
    ],
    "pattern": []
  },
  {
    "word": "travel",
    "diff": 1,
    "deck": "adv",
    "q": "I love to _____ to new places and try different kinds of food.",
    "opts": [
      "travel",
      "arrive",
      "return",
      "escape"
    ],
    "ans": 0,
    "note": "【翻譯】我喜歡去新地方旅行並嘗試各種不同的食物。\n【解析】travel 表示「旅行、旅遊」，常與介系詞 to 連用。\n【必備單字】travel [ˈtrævəl] (v./n.) 旅行，旅遊",
    "collocation": [
      "travel abroad → 出國旅遊",
      "travel around → 到處旅行",
      "travel by + 交通工具 → 搭乘⋯旅行",
      "a travel agency → 旅行社"
    ],
    "pattern": []
  },
  {
    "word": "government",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ has decided to build more schools to help students in rural areas.",
    "opts": [
      "government",
      "company",
      "community",
      "committee"
    ],
    "ans": 0,
    "note": "【翻譯】政府決定在農村地區建更多學校來幫助學生。\n【解析】government 指「政府」，注意不要與 governor（總督）混淆。\n【必備單字】government [ˈɡʌvərnmənt] (n.) 政府",
    "collocation": [
      "local government → 地方政府",
      "central government → 中央政府",
      "government policy → 政府政策"
    ],
    "pattern": []
  },
  {
    "word": "paint",
    "diff": 1,
    "deck": "adv",
    "q": "My sister likes to _____ pictures of flowers and animals in her free time.",
    "opts": [
      "paint",
      "draw",
      "write",
      "print"
    ],
    "ans": 0,
    "note": "【翻譯】我姐姐喜歡在空閒時間畫花和動物的圖。\n【解析】paint 通常指用顏料畫畫，draw 則指用鉛筆素描，注意區別。\n【必備單字】paint [peɪnt] (v.) 畫（用顏料）；油漆；(n.) 顏料，油漆",
    "collocation": [
      "paint a picture → 畫一幅畫",
      "paint the wall → 粉刷牆壁",
      "oil paint → 油畫顏料"
    ],
    "pattern": []
  },
  {
    "word": "weekday",
    "diff": 3,
    "deck": "adv",
    "q": "The post office is only open on _____. It is closed on weekends.",
    "opts": [
      "weekdays",
      "weekends",
      "holidays",
      "mornings"
    ],
    "ans": 0,
    "note": "【翻譯】郵局只在平日開放，週末不上班。\n【解析】weekday 指「平日（週一至週五）」，與 weekend 相對。\n【必備單字】weekday [ˈwiːkdeɪ] (n.) 平日，工作日（週一至週五）",
    "collocation": [
      "on weekdays → 在平日",
      "weekday morning → 平日早上"
    ],
    "pattern": []
  },
  {
    "word": "taiwanese",
    "diff": 3,
    "deck": "adv",
    "q": "_____ food is famous around the world, especially bubble tea and beef noodles.",
    "opts": [
      "Taiwanese",
      "Chinese",
      "Japanese",
      "Korean"
    ],
    "ans": 0,
    "note": "【翻譯】台灣食物聞名全球，尤其是珍珠奶茶和牛肉麵。\n【解析】Taiwanese 為形容詞，指「台灣的、台灣人的」，首字母大寫。\n【必備單字】Taiwanese [ˌtaɪwəˈniːz] (adj./n.) 台灣的；台灣人",
    "collocation": [
      "Taiwanese culture → 台灣文化",
      "Taiwanese cuisine → 台灣料理",
      "a Taiwanese → 一個台灣人"
    ],
    "pattern": []
  },
  {
    "word": "mosquito",
    "diff": 3,
    "deck": "adv",
    "q": "She put on some lotion to keep _____ away before going camping in the forest.",
    "opts": [
      "mosquitoes",
      "spiders",
      "butterflies",
      "beetles"
    ],
    "ans": 0,
    "note": "【翻譯】她在去森林露營前塗了一些乳液驅蚊。\n【解析】mosquito 指「蚊子」，複數為 mosquitoes，常與 bite 搭配。\n【必備單字】mosquito [məˈskiːtoʊ] (n.) 蚊子（複數 mosquitoes）",
    "collocation": [
      "mosquito bite → 蚊子叮咬",
      "mosquito repellent → 驅蚊劑",
      "mosquito net → 蚊帳"
    ],
    "pattern": []
  },
  {
    "word": "begin",
    "diff": 1,
    "deck": "adv",
    "q": "The movie will _____ at seven o'clock, so we need to hurry.",
    "opts": [
      "begin",
      "finish",
      "cancel",
      "delay"
    ],
    "ans": 0,
    "note": "【翻譯】電影七點開始，所以我們需要趕快。\n【解析】begin 表示「開始」，三態為 begin-began-begun，與 start 意思相近但更正式。\n【必備單字】begin [bɪˈɡɪn] (v.) 開始（三態：begin-began-begun）",
    "collocation": [
      "begin with → 從⋯開始",
      "to begin with → 首先，第一點",
      "begin to V / begin Ving → 開始做⋯"
    ],
    "pattern": [
      "begin to + V / begin + Ving → 開始做某事"
    ]
  },
  {
    "word": "social",
    "diff": 1,
    "deck": "adv",
    "q": "She has strong _____ skills and gets along well with everyone at school.",
    "opts": [
      "social",
      "physical",
      "mental",
      "natural"
    ],
    "ans": 0,
    "note": "【翻譯】她有很強的社交技能，和學校裡的每個人都相處得很好。\n【解析】social skills 「社交技能」是常考搭配，social 形容與社會或人際有關的。\n【必備單字】social [ˈsoʊʃəl] (adj.) 社會的；社交的",
    "collocation": [
      "social media → 社群媒體",
      "social skills → 社交技能",
      "social life → 社交生活",
      "social problem → 社會問題"
    ],
    "pattern": []
  },
  {
    "word": "distance",
    "diff": 1,
    "deck": "adv",
    "q": "What is the _____ between Taipei and Kaohsiung by train?",
    "opts": [
      "distance",
      "direction",
      "difference",
      "discovery"
    ],
    "ans": 0,
    "note": "【翻譯】台北到高雄搭火車的距離是多少？\n【解析】distance 指「距離」，keep a distance 保持距離為常用說法。\n【必備單字】distance [ˈdɪstəns] (n.) 距離，路程",
    "collocation": [
      "keep a distance → 保持距離",
      "in the distance → 在遠處",
      "long-distance → 長距離的",
      "within walking distance → 步行可達"
    ],
    "pattern": []
  },
  {
    "word": "nest",
    "diff": 3,
    "deck": "adv",
    "q": "The mother bird returned to her _____ to feed her hungry babies.",
    "opts": [
      "nest",
      "cage",
      "hole",
      "shell"
    ],
    "ans": 0,
    "note": "【翻譯】母鳥回到巢穴餵她飢餓的小鳥。\n【解析】nest 指鳥巢或動物的「窩」，也可指人的溫暖小窩。\n【必備單字】nest [nɛst] (n.) 巢，窩；(v.) 築巢",
    "collocation": [
      "bird's nest → 鳥巢",
      "nest egg → 積蓄，存款",
      "build a nest → 築巢"
    ],
    "pattern": []
  },
  {
    "word": "poem",
    "diff": 3,
    "deck": "adv",
    "q": "She wrote a _____ about the beautiful mountains she saw during her trip.",
    "opts": [
      "poem",
      "novel",
      "essay",
      "diary"
    ],
    "ans": 0,
    "note": "【翻譯】她寫了一首關於旅途中看到的美麗山脈的詩。\n【解析】poem 指「一首詩」，poetry 指詩這種文學形式（不可數），注意區別。\n【必備單字】poem [ˈpoʊɪm] (n.) 詩，詩歌",
    "collocation": [
      "write a poem → 寫詩",
      "recite a poem → 背誦一首詩",
      "love poem → 情詩"
    ],
    "pattern": []
  },
  {
    "word": "chart",
    "diff": 3,
    "deck": "adv",
    "q": "The teacher drew a _____ on the board to show how temperatures change each month.",
    "opts": [
      "chart",
      "list",
      "map",
      "note"
    ],
    "ans": 0,
    "note": "【翻譯】老師在黑板上畫了一個圖表，顯示每個月溫度的變化。\n【解析】chart 指「圖表」，常用的有 bar chart（長條圖）、pie chart（圓餅圖）。\n【必備單字】chart [tʃɑːrt] (n.) 圖表；排行榜；(v.) 製圖",
    "collocation": [
      "bar chart → 長條圖",
      "pie chart → 圓餅圖",
      "flow chart → 流程圖",
      "top the chart → 登上排行榜榜首"
    ],
    "pattern": []
  },
  {
    "word": "owner",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ of this restaurant has been cooking for his customers for over twenty years.",
    "opts": [
      "owner",
      "worker",
      "customer",
      "manager"
    ],
    "ans": 0,
    "note": "【翻譯】這家餐廳的老闆為他的顧客烹飪已超過二十年了。\n【解析】owner 指「擁有者、所有人」，pet owner 寵物主人為常考搭配。\n【必備單字】owner [ˈoʊnər] (n.) 主人，所有者",
    "collocation": [
      "pet owner → 寵物主人",
      "home owner → 房屋所有人",
      "business owner → 企業主",
      "owner of → ⋯的主人"
    ],
    "pattern": []
  },
  {
    "word": "information",
    "diff": 1,
    "deck": "adv",
    "q": "Please call this number if you need more _____ about our summer camp.",
    "opts": [
      "information",
      "invitation",
      "imagination",
      "instruction"
    ],
    "ans": 0,
    "note": "【翻譯】如果您需要更多關於我們暑期營的資訊，請撥打此號碼。\n【解析】information 是不可數名詞，不可說 an information，需說 a piece of information。\n【必備單字】information [ˌɪnfərˈmeɪʃən] (n.) 資訊，消息（不可數）",
    "collocation": [
      "provide information → 提供資訊",
      "look for information → 尋找資訊",
      "personal information → 個人資料",
      "useful information → 有用的資訊"
    ],
    "pattern": []
  },
  {
    "word": "dessert",
    "diff": 3,
    "deck": "adv",
    "q": "After dinner, we had ice cream as _____. It was my favorite part of the meal.",
    "opts": [
      "dessert",
      "desert",
      "dinner",
      "dish"
    ],
    "ans": 0,
    "note": "【翻譯】晚餐後，我們以冰淇淋作為甜點，那是我最喜歡的部分。\n【解析】dessert（甜點）vs. desert（沙漠），注意拼字！甜點有雙 s。\n【必備單字】dessert [dɪˈzɜːrt] (n.) 甜點，飯後甜食",
    "collocation": [
      "for dessert → 作為甜點",
      "dessert menu → 甜點菜單",
      "dessert spoon → 甜點湯匙"
    ],
    "pattern": []
  },
  {
    "word": "village",
    "diff": 1,
    "deck": "adv",
    "q": "My grandparents live in a small _____ in the mountains far from the city.",
    "opts": [
      "village",
      "building",
      "island",
      "forest"
    ],
    "ans": 0,
    "note": "【翻譯】我的祖父母住在遠離城市的山區小村莊裡。\n【解析】village 指「村莊」，比 town（小鎮）更小，比 city（城市）更鄉村。\n【必備單字】village [ˈvɪlɪdʒ] (n.) 村莊，鄉村",
    "collocation": [
      "fishing village → 漁村",
      "mountain village → 山村",
      "village life → 鄉村生活"
    ],
    "pattern": []
  },
  {
    "word": "company",
    "diff": 3,
    "deck": "adv",
    "q": "She works for a big technology _____ in Taipei and earns a good salary.",
    "opts": [
      "company",
      "community",
      "committee",
      "country"
    ],
    "ans": 0,
    "note": "【翻譯】她在台北一家大型科技公司工作，薪水不錯。\n【解析】company 既指「公司」也指「陪伴」（不可數），keep sb company 陪伴某人。\n【必備單字】company [ˈkʌmpənɪ] (n.) 公司；陪伴",
    "collocation": [
      "keep sb company → 陪伴某人",
      "a software company → 軟體公司",
      "in good company → 與好人為伍",
      "company policy → 公司政策"
    ],
    "pattern": []
  },
  {
    "word": "host",
    "diff": 3,
    "deck": "adv",
    "q": "Our school will _____ an international science fair next month and invite students from ten countries.",
    "opts": [
      "host",
      "hold",
      "have",
      "help"
    ],
    "ans": 0,
    "note": "【翻譯】我們學校下個月將舉辦一場國際科學展，邀請來自十個國家的學生。\n【解析】host 作動詞表「主辦、承辦」，也可指「主人、主持人」（名詞）。\n【必備單字】host [hoʊst] (v.) 主辦，舉辦；(n.) 主人；主持人",
    "collocation": [
      "host an event → 舉辦活動",
      "a TV host → 電視主持人",
      "host country → 主辦國"
    ],
    "pattern": []
  },
  {
    "word": "waste",
    "diff": 3,
    "deck": "adv",
    "q": "Don't _____ water when you brush your teeth. Just turn off the tap.",
    "opts": [
      "waste",
      "use",
      "need",
      "want"
    ],
    "ans": 0,
    "note": "【翻譯】刷牙時不要浪費水，關掉水龍頭就好。\n【解析】waste 作動詞「浪費」，waste time/money/water 為常見搭配。\n【必備單字】waste [weɪst] (v.) 浪費；(n.) 廢棄物；浪費",
    "collocation": [
      "waste time → 浪費時間",
      "waste money → 浪費金錢",
      "a waste of → ⋯的浪費",
      "food waste → 廚餘"
    ],
    "pattern": []
  },
  {
    "word": "role",
    "diff": 2,
    "deck": "adv",
    "q": "Parents play an important _____ in helping their children develop good habits.",
    "opts": [
      "role",
      "rule",
      "goal",
      "tool"
    ],
    "ans": 0,
    "note": "【翻譯】父母在幫助孩子養成良好習慣方面扮演著重要的角色。\n【解析】play a role 是「扮演角色」的固定搭配，也常說 play an important role in。\n【必備單字】role [roʊl] (n.) 角色，作用",
    "collocation": [
      "play a role in → 在⋯中扮演角色",
      "role model → 榜樣，模範",
      "take on a role → 承擔一個角色",
      "lead role → 主角"
    ],
    "pattern": [
      "play a(n) + adj. + role in + N/Ving → 在⋯方面扮演⋯的角色"
    ]
  },
  {
    "word": "diary",
    "diff": 1,
    "deck": "adv",
    "q": "She writes in her _____ every night before she goes to bed to record her thoughts.",
    "opts": [
      "diary",
      "story",
      "novel",
      "letter"
    ],
    "ans": 0,
    "note": "【翻譯】她每晚睡前都會在日記中寫下自己的想法。\n【解析】diary 指「日記」，keep a diary 是「寫日記」的固定說法。\n【必備單字】diary [ˈdaɪərɪ] (n.) 日記，日記本",
    "collocation": [
      "keep a diary → 寫日記",
      "diary entry → 日記的一篇",
      "read sb's diary → 看某人的日記"
    ],
    "pattern": []
  },
  {
    "word": "decision",
    "diff": 1,
    "deck": "adv",
    "q": "It was a difficult _____ to move to another city, but she did not regret it.",
    "opts": [
      "decision",
      "discussion",
      "description",
      "direction"
    ],
    "ans": 0,
    "note": "【翻譯】搬到另一個城市是個艱難的決定，但她並不後悔。\n【解析】make a decision 是「做決定」的固定用法，decision 後常接不定詞 to V。\n【必備單字】decision [dɪˈsɪʒən] (n.) 決定，抉擇",
    "collocation": [
      "make a decision → 做決定",
      "a tough decision → 艱難的決定",
      "decision-making → 決策",
      "reach a decision → 做出決定"
    ],
    "pattern": [
      "make a decision to + V → 決定做⋯"
    ]
  },
  {
    "word": "state",
    "diff": 3,
    "deck": "adv",
    "q": "Hawaii is the only _____ in the United States that is located in the Pacific Ocean.",
    "opts": [
      "state",
      "country",
      "city",
      "region"
    ],
    "ans": 0,
    "note": "【翻譯】夏威夷是美國唯一位於太平洋的州。\n【解析】state 在美國指「州」，也可指「狀態、情況」（the state of...）。\n【必備單字】state [steɪt] (n.) 州；狀態，情況；(v.) 陳述，聲明",
    "collocation": [
      "in a good state → 狀態良好",
      "state of mind → 心理狀態",
      "state school → 公立學校"
    ],
    "pattern": []
  },
  {
    "word": "hunt",
    "diff": 3,
    "deck": "adv",
    "q": "The tiger began to _____ for food in the forest after it had not eaten for three days.",
    "opts": [
      "hunt",
      "hide",
      "run",
      "climb"
    ],
    "ans": 0,
    "note": "【翻譯】老虎三天沒吃東西後，開始在森林中獵食。\n【解析】hunt for 表示「搜尋、獵取」，既可指狩獵也可指尋找。\n【必備單字】hunt [hʌnt] (v.) 獵捕；搜尋；(n.) 狩獵；搜尋",
    "collocation": [
      "hunt for → 搜尋，獵取",
      "go hunting → 去打獵",
      "a treasure hunt → 尋寶活動",
      "job hunt → 求職"
    ],
    "pattern": []
  },
  {
    "word": "leaf",
    "diff": 3,
    "deck": "adv",
    "q": "In autumn, the _____ on the trees turn red and yellow before falling to the ground.",
    "opts": [
      "leaves",
      "flowers",
      "branches",
      "roots"
    ],
    "ans": 0,
    "note": "【翻譯】秋天，樹上的葉子在落地之前變成紅色和黃色。\n【解析】leaf 的複數為 leaves（不規則變化），類似 life→lives, wolf→wolves。\n【必備單字】leaf [liːf] (n.) 葉子（複數 leaves）",
    "collocation": [
      "fall leaves → 落葉",
      "leaf through → 快速翻閱",
      "turn over a new leaf → 痛改前非，重新做人"
    ],
    "pattern": []
  },
  {
    "word": "mix",
    "diff": 3,
    "deck": "adv",
    "q": "To make pancakes, you need to _____ flour, eggs, milk, and a little sugar together.",
    "opts": [
      "mix",
      "heat",
      "bake",
      "cut"
    ],
    "ans": 0,
    "note": "【翻譯】要做鬆餅，你需要把麵粉、雞蛋、牛奶和少許糖混合在一起。\n【解析】mix 表示「混合」，mix up 指「混淆、弄混」。\n【必備單字】mix [mɪks] (v.) 混合，攪拌；(n.) 混合物",
    "collocation": [
      "mix up → 弄混，混淆",
      "a mix of → ⋯的混合",
      "mix well → 充分混合",
      "mixed feelings → 複雜的感受"
    ],
    "pattern": []
  },
  {
    "word": "danger",
    "diff": 3,
    "deck": "adv",
    "q": "The sign says Keep Out because there is real _____ of falling rocks on this path.",
    "opts": [
      "danger",
      "damage",
      "distance",
      "difference"
    ],
    "ans": 0,
    "note": "【翻譯】告示牌說「禁止進入」，因為這條路有真實的落石危險。\n【解析】in danger 處於危險中，out of danger 脫離危險，be in danger of 有⋯的危險。\n【必備單字】danger [ˈdeɪndʒər] (n.) 危險，威脅",
    "collocation": [
      "in danger → 在危險中",
      "out of danger → 脫離危險",
      "be in danger of → 有⋯的危險",
      "a danger to → 對⋯的威脅"
    ],
    "pattern": []
  },
  {
    "word": "bomb",
    "diff": 3,
    "deck": "adv",
    "q": "The old building was damaged by a _____ during the war and was never repaired.",
    "opts": [
      "bomb",
      "storm",
      "fire",
      "flood"
    ],
    "ans": 0,
    "note": "【翻譯】那棟舊建築在戰爭中被炸彈炸毀，從未被修復。\n【解析】bomb 指「炸彈」，也可作動詞「轟炸」；time bomb 定時炸彈為常見搭配。\n【必備單字】bomb [bɑːm] (n.) 炸彈；(v.) 轟炸",
    "collocation": [
      "time bomb → 定時炸彈",
      "drop a bomb → 投下炸彈",
      "bomb attack → 炸彈攻擊"
    ],
    "pattern": []
  },
  {
    "word": "speaker",
    "diff": 3,
    "deck": "adv",
    "q": "The guest _____ talked about the importance of learning English in today's world.",
    "opts": [
      "speaker",
      "teacher",
      "listener",
      "author"
    ],
    "ans": 0,
    "note": "【翻譯】這位特邀演講者談到了英語學習在當今世界的重要性。\n【解析】speaker 指「演講者、發言人」，也可指「喇叭」（音響設備）。\n【必備單字】speaker [ˈspiːkər] (n.) 演講者，發言人；喇叭",
    "collocation": [
      "guest speaker → 特邀演講者",
      "native speaker → 母語人士",
      "keynote speaker → 主題演講者"
    ],
    "pattern": []
  },
  {
    "word": "furniture",
    "diff": 3,
    "deck": "adv",
    "q": "They bought new _____ for their living room, including a sofa and a coffee table.",
    "opts": [
      "furniture",
      "equipment",
      "instrument",
      "appliance"
    ],
    "ans": 0,
    "note": "【翻譯】他們為客廳買了新家具，包括一張沙發和一張咖啡桌。\n【解析】furniture 是不可數名詞，不可說 a furniture，需說 a piece of furniture。\n【必備單字】furniture [ˈfɜːrnɪtʃər] (n.) 家具（不可數）",
    "collocation": [
      "a piece of furniture → 一件家具",
      "buy furniture → 購買家具",
      "office furniture → 辦公家具",
      "antique furniture → 古董家具"
    ],
    "pattern": []
  },
  {
    "word": "male",
    "diff": 3,
    "deck": "adv",
    "q": "In many bird species, the _____ is more colorful than the female to attract a mate.",
    "opts": [
      "male",
      "female",
      "young",
      "adult"
    ],
    "ans": 0,
    "note": "【翻譯】在許多鳥類中，雄性比雌性更色彩鮮豔，以吸引配偶。\n【解析】male 指「雄性的、男性的」，與 female（雌性/女性）相對。\n【必備單字】male [meɪl] (adj.) 男性的，雄性的；(n.) 男性，雄性",
    "collocation": [
      "male and female → 雄性和雌性",
      "male student → 男學生",
      "male animal → 雄性動物"
    ],
    "pattern": []
  },
  {
    "word": "alone",
    "diff": 1,
    "deck": "adv",
    "q": "He sat _____ in the park, thinking about his future after graduation.",
    "opts": [
      "alone",
      "quiet",
      "free",
      "safe"
    ],
    "ans": 0,
    "note": "【翻譯】他獨自坐在公園裡，思考畢業後的未來。\n【解析】alone 作形容詞表「獨處的」，leave sb alone 讓某人一個人待著，不要打擾。\n【必備單字】alone [əˈloʊn] (adj./adv.) 獨自的，單獨地",
    "collocation": [
      "leave sb alone → 不打擾某人",
      "all alone → 完全獨自",
      "live alone → 獨居",
      "stand alone → 孤立，獨樹一格"
    ],
    "pattern": []
  },
  {
    "word": "hop",
    "diff": 1,
    "deck": "adv",
    "q": "The little rabbit began to _____ across the grass when it saw a carrot in the garden.",
    "opts": [
      "hop",
      "run",
      "swim",
      "fly"
    ],
    "ans": 0,
    "note": "【翻譯】小兔子看到花園裡有根胡蘿蔔，開始在草地上跳來跳去。\n【解析】hop 指「單腳跳或短距離跳躍」，常描述兔子、青蛙等小動物的動作。\n【必備單字】hop [hɑːp] (v.) 跳躍（短距離）；(n.) 跳躍",
    "collocation": [
      "hip-hop → 嘻哈音樂",
      "hop on a bus → 跳上公車",
      "hop over → 跳過去"
    ],
    "pattern": []
  },
  {
    "word": "besides",
    "diff": 3,
    "deck": "adv",
    "q": "_____ English, she can also speak French and Japanese fluently.",
    "opts": [
      "Besides",
      "However",
      "Therefore",
      "Although"
    ],
    "ans": 0,
    "note": "【翻譯】除了英語，她還能流利地說法語和日語。\n【解析】besides 作介系詞表「除了⋯之外（還有）」，包含主體；注意與 except（除了⋯不算）區別。\n【必備單字】besides [bɪˈsaɪdz] (prep.) 除了⋯之外（還有）；(adv.) 此外",
    "collocation": [
      "besides that → 除此之外",
      "besides + N → 除了⋯之外還有"
    ],
    "pattern": [
      "Besides + N, S + V → 除了⋯之外，⋯還⋯"
    ]
  },
  {
    "word": "seafood",
    "diff": 3,
    "deck": "adv",
    "q": "This restaurant is famous for its fresh _____, especially grilled shrimp and steamed fish.",
    "opts": [
      "seafood",
      "fastfood",
      "junkfood",
      "snackfood"
    ],
    "ans": 0,
    "note": "【翻譯】這家餐廳以新鮮海鮮聞名，尤其是烤蝦和清蒸魚。\n【解析】seafood 是「海鮮」，為不可數名詞，包含魚、蝦、蟹等海洋食物。\n【必備單字】seafood [ˈsiːfuːd] (n.) 海鮮（不可數）",
    "collocation": [
      "fresh seafood → 新鮮海鮮",
      "seafood restaurant → 海鮮餐廳",
      "seafood allergy → 海鮮過敏"
    ],
    "pattern": []
  },
  {
    "word": "couple",
    "diff": 3,
    "deck": "adv",
    "q": "The young _____ decided to get married after dating for three years.",
    "opts": [
      "couple",
      "group",
      "team",
      "family"
    ],
    "ans": 0,
    "note": "【翻譯】這對年輕情侶交往三年後決定結婚。\n【解析】couple 指「一對情侶/夫妻」，a couple of 則表示「幾個、一兩個」。\n【必備單字】couple [ˈkʌpəl] (n.) 一對，夫婦；幾個",
    "collocation": [
      "a couple of → 幾個，一兩個",
      "married couple → 已婚夫婦",
      "a couple of days → 幾天"
    ],
    "pattern": []
  },
  {
    "word": "wash",
    "diff": 1,
    "deck": "adv",
    "q": "Remember to _____ your hands before you eat to avoid getting sick.",
    "opts": [
      "wash",
      "dry",
      "brush",
      "clean"
    ],
    "ans": 0,
    "note": "【翻譯】記得飯前洗手，以免生病。\n【解析】wash one's hands 洗手，wash the dishes 洗碗，為日常生活常用搭配。\n【必備單字】wash [wɑːʃ] (v.) 洗，清洗；(n.) 洗滌",
    "collocation": [
      "wash one's hands → 洗手",
      "wash the dishes → 洗碗",
      "wash away → 沖走，洗去",
      "brainwash → 洗腦"
    ],
    "pattern": []
  },
  {
    "word": "heat",
    "diff": 3,
    "deck": "adv",
    "q": "Please _____ the soup on the stove for five minutes before serving it to the guests.",
    "opts": [
      "heat",
      "cook",
      "burn",
      "melt"
    ],
    "ans": 0,
    "note": "【翻譯】請在上菜前在爐子上將湯加熱五分鐘。\n【解析】heat 作動詞表「加熱」，作名詞表「熱度、熱氣」；heat up 為「加熱」的常用片語。\n【必備單字】heat [hiːt] (v.) 加熱；(n.) 熱，熱度",
    "collocation": [
      "heat up → 加熱；升溫",
      "body heat → 體熱",
      "in the heat of → 在⋯的激烈時刻",
      "heat wave → 熱浪"
    ],
    "pattern": []
  },
  {
    "word": "sneaker",
    "diff": 3,
    "deck": "adv",
    "q": "He wore a new pair of _____ to the basketball game and everyone asked him where he bought them.",
    "opts": [
      "sneakers",
      "sandals",
      "slippers",
      "boots"
    ],
    "ans": 0,
    "note": "【翻譯】他穿了一雙新運動鞋去看籃球比賽，每個人都問他在哪裡買的。\n【解析】sneaker（s）指「運動鞋」，通常以複數形出現，等同於 sports shoes。\n【必備單字】sneaker [ˈsniːkər] (n.) 運動鞋（常用複數 sneakers）",
    "collocation": [
      "a pair of sneakers → 一雙運動鞋",
      "wear sneakers → 穿運動鞋"
    ],
    "pattern": []
  },
  {
    "word": "dress",
    "diff": 1,
    "deck": "adv",
    "q": "She bought a beautiful red _____ to wear to her cousin's wedding next weekend.",
    "opts": [
      "dress",
      "shirt",
      "jacket",
      "coat"
    ],
    "ans": 0,
    "note": "【翻譯】她買了一件漂亮的紅色洋裝，要在下週末表妹的婚禮上穿。\n【解析】dress 指女性穿的「洋裝」，也可作動詞「穿衣服」，get dressed 穿好衣服。\n【必備單字】dress [drɛs] (n.) 洋裝，連衣裙；(v.) 穿衣服",
    "collocation": [
      "get dressed → 穿好衣服",
      "dress up → 盛裝打扮",
      "evening dress → 晚禮服",
      "dress code → 服裝規定"
    ],
    "pattern": []
  },
  {
    "word": "sand",
    "diff": 3,
    "deck": "adv",
    "q": "The children built a sandcastle on the beach using wet _____ and small shells.",
    "opts": [
      "sand",
      "mud",
      "soil",
      "rock"
    ],
    "ans": 0,
    "note": "【翻譯】孩子們用濕沙和小貝殼在海灘上建了一座沙堡。\n【解析】sand 指「沙子」，不可數名詞，常出現在海灘相關的描述中。\n【必備單字】sand [sænd] (n.) 沙，沙粒（不可數）",
    "collocation": [
      "sand castle → 沙堡",
      "sandy beach → 沙灘",
      "sand dune → 沙丘",
      "bury in sand → 埋在沙裡"
    ],
    "pattern": []
  },
  {
    "word": "calendar",
    "diff": 3,
    "deck": "adv",
    "q": "He checked his _____ and realized he had a dentist appointment this Friday afternoon.",
    "opts": [
      "calendar",
      "schedule",
      "notebook",
      "planner"
    ],
    "ans": 0,
    "note": "【翻譯】他查了一下行事曆，發現這週五下午有牙醫預約。\n【解析】calendar 指「日曆、行事曆」，check the calendar 查行事曆為常用表達。\n【必備單字】calendar [ˈkælɪndər] (n.) 日曆，行事曆",
    "collocation": [
      "check the calendar → 查看行事曆",
      "calendar year → 曆年",
      "lunar calendar → 農曆",
      "mark on the calendar → 在行事曆上標記"
    ],
    "pattern": []
  },
  {
    "word": "whole",
    "diff": 1,
    "deck": "adv",
    "q": "She was so hungry that she ate the _____ pizza by herself without sharing.",
    "opts": [
      "whole",
      "full",
      "large",
      "total"
    ],
    "ans": 0,
    "note": "【翻譯】她太餓了，一個人吃了整個披薩，沒有分給別人。\n【解析】whole 表示「整個的、全部的」，the whole + 名詞 是常見用法。\n【必備單字】whole [hoʊl] (adj.) 整個的，全部的；(n.) 整體",
    "collocation": [
      "the whole day → 一整天",
      "as a whole → 作為一個整體",
      "whole-hearted → 全心全意的",
      "on the whole → 總體而言"
    ],
    "pattern": [
      "the whole + N → 整個⋯"
    ]
  },
  {
    "word": "charge",
    "diff": 3,
    "deck": "adv",
    "q": "How much do you _____ for a one-hour English lesson? I want to hire a tutor.",
    "opts": [
      "charge",
      "cost",
      "pay",
      "spend"
    ],
    "ans": 0,
    "note": "【翻譯】你教一小時英文收多少錢？我想請家教。\n【解析】charge sb for sth 向某人收費；in charge of 負責⋯，是重要搭配。\n【必備單字】charge [tʃɑːrdʒ] (v.) 收費；充電；(n.) 費用；負責",
    "collocation": [
      "in charge of → 負責，主管",
      "charge for → 為⋯收費",
      "free of charge → 免費",
      "charge a phone → 為手機充電"
    ],
    "pattern": [
      "charge sb + 金額 + for sth → 向某人收取⋯費用"
    ]
  },
  {
    "word": "cream",
    "diff": 3,
    "deck": "adv",
    "q": "She put some _____ on her sunburned skin to make it feel better.",
    "opts": [
      "cream",
      "lotion",
      "powder",
      "liquid"
    ],
    "ans": 0,
    "note": "【翻譯】她在曬傷的皮膚上塗了一些乳霜，讓它感覺好一點。\n【解析】cream 指「乳霜、奶油」，ice cream（冰淇淋）為常考搭配。\n【必備單字】cream [kriːm] (n.) 乳霜；奶油；(adj.) 乳白色的",
    "collocation": [
      "ice cream → 冰淇淋",
      "whipped cream → 打發鮮奶油",
      "sunscreen cream → 防曬霜",
      "cream-colored → 乳白色的"
    ],
    "pattern": []
  },
  {
    "word": "title",
    "diff": 3,
    "deck": "adv",
    "q": "What is the _____ of the book you are reading? I would like to read it too.",
    "opts": [
      "title",
      "cover",
      "chapter",
      "author"
    ],
    "ans": 0,
    "note": "【翻譯】你正在讀的書叫什麼名字？我也想讀。\n【解析】title 指書、電影等的「標題、題目」，也可指人的「頭銜」如 Dr.、Prof. 等。\n【必備單字】title [ˈtaɪtəl] (n.) 標題，題目；頭銜",
    "collocation": [
      "job title → 職稱",
      "book title → 書名",
      "win a title → 贏得冠軍稱號",
      "title role → 片名角色"
    ],
    "pattern": []
  },
  {
    "word": "bowl",
    "diff": 3,
    "deck": "adv",
    "q": "She ordered a _____ of hot noodle soup to warm herself up on the cold winter day.",
    "opts": [
      "bowl",
      "cup",
      "plate",
      "glass"
    ],
    "ans": 0,
    "note": "【翻譯】她在寒冷的冬天點了一碗熱騰騰的湯麵來暖身。\n【解析】a bowl of 是「一碗⋯」的用法，常考容器量詞。\n【必備單字】bowl [boʊl] (n.) 碗，缽",
    "collocation": [
      "a bowl of → 一碗⋯",
      "rice bowl → 飯碗",
      "salad bowl → 沙拉碗",
      "mixing bowl → 攪拌碗"
    ],
    "pattern": [
      "a bowl of + N → 一碗⋯"
    ]
  },
  {
    "word": "suggest",
    "diff": 2,
    "deck": "adv",
    "q": "The doctor _____ that the patient should get more rest and drink plenty of water.",
    "opts": [
      "suggested",
      "demanded",
      "ordered",
      "promised"
    ],
    "ans": 0,
    "note": "【翻譯】醫生建議病人應該多休息並多喝水。\n【解析】suggest that + S + (should) + V 是重要句型，that 子句中動詞用原形（虛擬語氣）。\n【必備單字】suggest [səˈdʒɛst] (v.) 建議，提議",
    "collocation": [
      "suggest doing → 建議做⋯",
      "suggest that → 建議⋯",
      "make a suggestion → 提出建議"
    ],
    "pattern": [
      "suggest + Ving → 建議做⋯",
      "suggest that S + (should) + V → 建議⋯"
    ]
  },
  {
    "word": "midnight",
    "diff": 3,
    "deck": "adv",
    "q": "The party went on until _____, and we were all very tired the next morning.",
    "opts": [
      "midnight",
      "sunrise",
      "sunset",
      "noon"
    ],
    "ans": 0,
    "note": "【翻譯】派對一直持續到午夜，我們第二天早上都很疲憊。\n【解析】midnight 指「午夜，深夜 12 點」，at midnight 在午夜，常與 until/till 連用。\n【必備單字】midnight [ˈmɪdnaɪt] (n.) 午夜，午夜12時",
    "collocation": [
      "at midnight → 在午夜",
      "midnight snack → 宵夜",
      "past midnight → 過了午夜",
      "midnight blue → 深藍色"
    ],
    "pattern": []
  },
  {
    "word": "offer",
    "diff": 1,
    "deck": "adv",
    "q": "The company _____ me a job, but I decided to stay at my current workplace.",
    "opts": [
      "offered",
      "asked",
      "told",
      "sent"
    ],
    "ans": 0,
    "note": "【翻譯】那家公司提供我一份工作，但我決定留在目前的工作地點。\n【解析】offer sb sth 或 offer sth to sb 表示「提供某人某物」，為雙受詞用法。\n【必備單字】offer [ˈɔːfər] (v.) 提供，給予；(n.) 提議，報價",
    "collocation": [
      "offer help → 提供幫助",
      "job offer → 工作機會",
      "offer a discount → 提供折扣",
      "make an offer → 出價，提議"
    ],
    "pattern": [
      "offer sb sth / offer sth to sb → 提供某人某物"
    ]
  },
  {
    "word": "energy",
    "diff": 1,
    "deck": "adv",
    "q": "Children have so much _____ that they can run and play all day without getting tired.",
    "opts": [
      "energy",
      "power",
      "force",
      "strength"
    ],
    "ans": 0,
    "note": "【翻譯】孩子們精力充沛，可以整天跑跑跳跳而不感到疲倦。\n【解析】energy 指「精力、能量」，save energy 節省能源，full of energy 充滿精力。\n【必備單字】energy [ˈɛnərdʒɪ] (n.) 精力；能量，能源",
    "collocation": [
      "save energy → 節省能源",
      "full of energy → 充滿活力",
      "renewable energy → 可再生能源",
      "energy drink → 能量飲料"
    ],
    "pattern": []
  },
  {
    "word": "central",
    "diff": 3,
    "deck": "adv",
    "q": "The hotel is in a _____ location, so you can walk to all the famous attractions easily.",
    "opts": [
      "central",
      "common",
      "popular",
      "convenient"
    ],
    "ans": 0,
    "note": "【翻譯】這家飯店位置居中，步行就能輕鬆到達所有著名景點。\n【解析】central 表示「中央的、中心的」，central station（中央車站）為常見搭配。\n【必備單字】central [ˈsɛntrəl] (adj.) 中央的，中心的",
    "collocation": [
      "central park → 中央公園",
      "central station → 中央車站",
      "central government → 中央政府",
      "play a central role → 扮演核心角色"
    ],
    "pattern": []
  },
  {
    "word": "corn",
    "diff": 3,
    "deck": "adv",
    "q": "Farmers in this area grow a lot of _____ and sell it at the local market every weekend.",
    "opts": [
      "corn",
      "rice",
      "wheat",
      "bean"
    ],
    "ans": 0,
    "note": "【翻譯】這個地區的農民種了很多玉米，每週末在當地市場販售。\n【解析】corn 指「玉米」（美式英語），英式為 maize，popcorn（爆米花）為常見搭配。\n【必備單字】corn [kɔːrn] (n.) 玉米（美式）",
    "collocation": [
      "popcorn → 爆米花",
      "corn on the cob → 玉米棒",
      "sweet corn → 甜玉米",
      "corn field → 玉米田"
    ],
    "pattern": []
  },
  {
    "word": "respect",
    "diff": 1,
    "deck": "adv",
    "q": "We should always _____ older people and listen to their advice carefully.",
    "opts": [
      "respect",
      "follow",
      "trust",
      "ignore"
    ],
    "ans": 0,
    "note": "【翻譯】我們應該尊重年長者，認真聆聽他們的建議。\n【解析】respect 作動詞「尊重」，out of respect for 出於對⋯的尊重，為進階搭配。\n【必備單字】respect [rɪˈspɛkt] (v.) 尊重，敬重；(n.) 尊重，敬意",
    "collocation": [
      "show respect → 表示尊重",
      "earn respect → 贏得尊重",
      "out of respect → 出於尊重",
      "self-respect → 自尊"
    ],
    "pattern": []
  },
  {
    "word": "thunder",
    "diff": 3,
    "deck": "adv",
    "q": "The little dog hid under the bed when it heard the loud _____ during the storm.",
    "opts": [
      "thunder",
      "lightning",
      "wind",
      "hail"
    ],
    "ans": 0,
    "note": "【翻譯】小狗在暴風雨中聽到巨大的雷聲時躲到了床底下。\n【解析】thunder 指「雷聲」，lightning（閃電）是「看到的」，thunder 是「聽到的」，注意區別。\n【必備單字】thunder [ˈθʌndər] (n.) 雷，雷聲；(v.) 打雷",
    "collocation": [
      "thunder and lightning → 打雷閃電",
      "a clap of thunder → 一聲雷響",
      "thunderstorm → 雷暴"
    ],
    "pattern": []
  },
  {
    "word": "steal",
    "diff": 3,
    "deck": "adv",
    "q": "Someone broke into the car and tried to _____ the bag that was left on the back seat.",
    "opts": [
      "steal",
      "borrow",
      "take",
      "grab"
    ],
    "ans": 0,
    "note": "【翻譯】有人砸車並試圖偷走放在後座的包包。\n【解析】steal 表示「偷竊」（三態：steal-stole-stolen），rob 是「搶劫」，注意區別用法。\n【必備單字】steal [stiːl] (v.) 偷，盜竊（三態：steal-stole-stolen）",
    "collocation": [
      "steal from → 從⋯偷竊",
      "steal a glance → 偷瞄",
      "identity theft → 身份盜竊"
    ],
    "pattern": []
  },
  {
    "word": "activity",
    "diff": 1,
    "deck": "adv",
    "q": "Swimming is a great outdoor _____ that keeps your body healthy and your mind relaxed.",
    "opts": [
      "activity",
      "action",
      "adventure",
      "achievement"
    ],
    "ans": 0,
    "note": "【翻譯】游泳是一項很棒的戶外活動，能讓身體健康、心情放鬆。\n【解析】activity 指「活動」，outdoor/indoor activities 戶外/室內活動為常考搭配。\n【必備單字】activity [ækˈtɪvɪtɪ] (n.) 活動",
    "collocation": [
      "outdoor activity → 戶外活動",
      "indoor activity → 室內活動",
      "daily activities → 日常活動",
      "physical activity → 體能活動"
    ],
    "pattern": []
  },
  {
    "word": "koala",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ is a cute Australian animal that sleeps up to eighteen hours a day in eucalyptus trees.",
    "opts": [
      "koala",
      "kangaroo",
      "penguin",
      "panda"
    ],
    "ans": 0,
    "note": "【翻譯】無尾熊是一種可愛的澳洲動物，每天在尤加利樹上睡長達十八個小時。\n【解析】koala（無尾熊）常出現在介紹澳洲動物的閱讀文章中，以睡眠時間長著名。\n【必備單字】koala [koʊˈɑːlə] (n.) 無尾熊",
    "collocation": [
      "koala bear → 無尾熊（非正式說法）",
      "koala habitat → 無尾熊棲息地"
    ],
    "pattern": []
  },
  {
    "word": "asia",
    "diff": 3,
    "deck": "adv",
    "q": "_____ is the largest continent in the world, and it has the most people of any continent.",
    "opts": [
      "Asia",
      "Africa",
      "Europe",
      "America"
    ],
    "ans": 0,
    "note": "【翻譯】亞洲是世界上最大的洲，也是人口最多的洲。\n【解析】Asia 是「亞洲」，Asian 是形容詞「亞洲的」，注意首字母大寫。\n【必備單字】Asia [ˈeɪʒə] (n.) 亞洲",
    "collocation": [
      "Southeast Asia → 東南亞",
      "East Asia → 東亞",
      "Asian culture → 亞洲文化",
      "Asian food → 亞洲食物"
    ],
    "pattern": []
  },
  {
    "word": "address",
    "diff": 1,
    "deck": "adv",
    "q": "Could you write down your _____ so that I can send you a postcard from my trip?",
    "opts": [
      "address",
      "number",
      "name",
      "email"
    ],
    "ans": 0,
    "note": "【翻譯】你能寫下你的地址嗎？這樣我就可以從旅途中寄明信片給你。\n【解析】address 指「地址」（名詞），也可作動詞「演說、稱呼」。\n【必備單字】address [ˈædrɛs] (n.) 地址；演說；(v.) 演說；稱呼",
    "collocation": [
      "home address → 住家地址",
      "email address → 電子郵件地址",
      "address a problem → 處理一個問題",
      "give a speech / address → 發表演說"
    ],
    "pattern": []
  },
  {
    "word": "housework",
    "diff": 3,
    "deck": "adv",
    "q": "After school, the children help their parents with the _____, such as sweeping and washing dishes.",
    "opts": [
      "housework",
      "homework",
      "teamwork",
      "artwork"
    ],
    "ans": 0,
    "note": "【翻譯】放學後，孩子們幫助父母做家務，如掃地和洗碗。\n【解析】housework 是「家務」（不可數），do the housework 做家務，注意和 homework（家庭作業）區別。\n【必備單字】housework [ˈhaʊswɜːrk] (n.) 家務（不可數）",
    "collocation": [
      "do the housework → 做家務",
      "share the housework → 分擔家務",
      "housework chores → 家務雜事"
    ],
    "pattern": []
  },
  {
    "word": "railway",
    "diff": 3,
    "deck": "adv",
    "q": "The new high-speed _____ connects the north and south of the country in just two hours.",
    "opts": [
      "railway",
      "highway",
      "waterway",
      "airway"
    ],
    "ans": 0,
    "note": "【翻譯】新的高速鐵路在短短兩小時內就將全國南北連通。\n【解析】railway 指「鐵路、鐵道」（英式），美式說 railroad；railway station 火車站。\n【必備單字】railway [ˈreɪlweɪ] (n.) 鐵路，鐵道",
    "collocation": [
      "railway station → 火車站",
      "railway track → 鐵軌",
      "high-speed railway → 高速鐵路",
      "underground railway → 地下鐵"
    ],
    "pattern": []
  },
  {
    "word": "everywhere",
    "diff": 3,
    "deck": "adv",
    "q": "There were flowers _____ in the park during spring, and it smelled wonderful.",
    "opts": [
      "everywhere",
      "somewhere",
      "anywhere",
      "nowhere"
    ],
    "ans": 0,
    "note": "【翻譯】春天公園裡到處都是鮮花，氣味迷人。\n【解析】everywhere 表示「到處，各處」，注意與 somewhere（某處）、nowhere（無處）的區別。\n【必備單字】everywhere [ˈɛvrɪwɛr] (adv.) 到處，各處",
    "collocation": [
      "everywhere I go → 無論我去哪裡",
      "look everywhere → 到處找",
      "everywhere in the world → 世界各地"
    ],
    "pattern": []
  },
  {
    "word": "ball",
    "diff": 1,
    "deck": "adv",
    "q": "The dog loves to play with a _____ in the park. It will run and fetch it all day.",
    "opts": [
      "ball",
      "stick",
      "rope",
      "toy"
    ],
    "ans": 0,
    "note": "【翻譯】這隻狗喜歡在公園裡玩球，可以整天跑去撿球。\n【解析】ball 指「球」，也可指「舞會」（正式），throw/kick/catch a ball 為常見搭配。\n【必備單字】ball [bɔːl] (n.) 球；舞會",
    "collocation": [
      "throw a ball → 扔球",
      "kick a ball → 踢球",
      "ball game → 球賽",
      "have a ball → 玩得很開心"
    ],
    "pattern": []
  },
  {
    "word": "asleep",
    "diff": 3,
    "deck": "adv",
    "q": "The baby fell _____ in the car on the way home after a long day at the zoo.",
    "opts": [
      "asleep",
      "awake",
      "alone",
      "afraid"
    ],
    "ans": 0,
    "note": "【翻譯】長途動物園之旅後，寶寶在回家的車上睡著了。\n【解析】fall asleep 是「睡著」的固定說法，注意 asleep 是形容詞，不可放在名詞前。\n【必備單字】asleep [əˈsliːp] (adj.) 睡著的",
    "collocation": [
      "fall asleep → 睡著",
      "fast asleep → 熟睡",
      "half asleep → 半睡半醒",
      "stay asleep → 繼續睡著"
    ],
    "pattern": [
      "fall asleep → 睡著（強調動作的過程）"
    ]
  },
  {
    "word": "football",
    "diff": 3,
    "deck": "adv",
    "q": "He watches every _____ game on TV and dreams of becoming a professional player one day.",
    "opts": [
      "football",
      "basketball",
      "baseball",
      "volleyball"
    ],
    "ans": 0,
    "note": "【翻譯】他在電視上看每一場足球比賽，夢想著有一天成為職業球員。\n【解析】football 在大多數國家指「足球」，在美國指「美式足球」，文章中需依上下文判斷。\n【必備單字】football [ˈfʊtbɔːl] (n.) 足球（英式）；美式足球（美式）",
    "collocation": [
      "play football → 踢足球",
      "football match → 足球賽",
      "football player → 足球員",
      "football field → 足球場"
    ],
    "pattern": []
  },
  {
    "word": "winner",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ of the cooking competition received a trophy and a cash prize of ten thousand dollars.",
    "opts": [
      "winner",
      "player",
      "member",
      "champion"
    ],
    "ans": 0,
    "note": "【翻譯】烹飪比賽的優勝者獲得了一個獎盃和一萬元現金獎勵。\n【解析】winner 指「優勝者、贏家」，prize winner（獲獎者），Nobel prize winner（諾貝爾獎得主）。\n【必備單字】winner [ˈwɪnər] (n.) 獲勝者，贏家",
    "collocation": [
      "prize winner → 得獎者",
      "first-prize winner → 第一名得獎者",
      "Nobel prize winner → 諾貝爾獎得主",
      "a born winner → 天生的贏家"
    ],
    "pattern": []
  },
  {
    "word": "skin",
    "diff": 3,
    "deck": "adv",
    "q": "She always puts on sunscreen to protect her _____ from getting burned by the strong summer sun.",
    "opts": [
      "skin",
      "face",
      "hair",
      "body"
    ],
    "ans": 0,
    "note": "【翻譯】她總是塗防曬霜以保護皮膚不被夏日強烈的陽光灼傷。\n【解析】skin 指「皮膚」，也可指水果的「外皮」，skin care（護膚）為常見搭配。\n【必備單字】skin [skɪn] (n.) 皮膚；（水果）外皮",
    "collocation": [
      "skin care → 護膚",
      "fair skin → 白皙的皮膚",
      "skin color → 膚色",
      "dry skin → 乾性皮膚"
    ],
    "pattern": []
  },
  {
    "word": "mango",
    "diff": 3,
    "deck": "adv",
    "q": "Taiwan is famous for its sweet and juicy _____. Many tourists buy them at night markets.",
    "opts": [
      "mangoes",
      "oranges",
      "bananas",
      "papayas"
    ],
    "ans": 0,
    "note": "【翻譯】台灣以甜美多汁的芒果聞名，許多遊客在夜市購買。\n【解析】mango 的複數為 mangoes 或 mangos，台灣盛產芒果，常出現在介紹台灣的文章中。\n【必備單字】mango [ˈmæŋɡoʊ] (n.) 芒果（複數 mangoes/mangos）",
    "collocation": [
      "mango ice → 芒果冰",
      "dried mango → 芒果乾",
      "mango juice → 芒果汁",
      "mango season → 芒果產季"
    ],
    "pattern": []
  },
  {
    "word": "influence",
    "diff": 2,
    "deck": "adv",
    "q": "Good teachers have a great _____ on their students and can change their lives forever.",
    "opts": [
      "influence",
      "interest",
      "instruction",
      "information"
    ],
    "ans": 0,
    "note": "【翻譯】好老師對學生有巨大的影響，可以永遠改變他們的生命。\n【解析】influence 既作名詞「影響、影響力」，也作動詞「影響」，have an influence on 為重要搭配。\n【必備單字】influence [ˈɪnfluəns] (n.) 影響，影響力；(v.) 影響",
    "collocation": [
      "have an influence on → 對⋯有影響",
      "under the influence of → 在⋯的影響下",
      "a bad influence → 不好的影響",
      "influence sb to → 影響某人去⋯"
    ],
    "pattern": [
      "have a(n) + adj. + influence on sb/sth → 對⋯有⋯的影響"
    ]
  },
  {
    "word": "air",
    "diff": 1,
    "deck": "adv",
    "q": "Please open the window so that some fresh _____ can come in. It is too stuffy in here.",
    "opts": [
      "air",
      "wind",
      "gas",
      "smoke"
    ],
    "ans": 0,
    "note": "【翻譯】請打開窗戶讓新鮮空氣進來，這裡太悶了。\n【解析】air 指「空氣」，fresh air（新鮮空氣），air pollution（空氣污染）為常考搭配。\n【必備單字】air [ɛr] (n.) 空氣；航空",
    "collocation": [
      "fresh air → 新鮮空氣",
      "air pollution → 空氣污染",
      "in the air → 在空中；即將來臨",
      "by air → 乘飛機"
    ],
    "pattern": []
  },
  {
    "word": "event",
    "diff": 1,
    "deck": "adv",
    "q": "The school sports day is a big _____ that students look forward to every year.",
    "opts": [
      "event",
      "activity",
      "program",
      "occasion"
    ],
    "ans": 0,
    "note": "【翻譯】學校運動會是學生每年都期待的重大活動。\n【解析】event 指「大型活動、事件」，in the event of 表示「萬一⋯的情況下」。\n【必備單字】event [ɪˈvɛnt] (n.) 事件；活動，賽事",
    "collocation": [
      "hold an event → 舉辦活動",
      "in the event of → 萬一，如果發生",
      "sporting event → 體育賽事",
      "current events → 時事"
    ],
    "pattern": []
  },
  {
    "word": "japanese",
    "diff": 3,
    "deck": "adv",
    "q": "She studies _____ because she wants to travel to Japan and communicate with local people.",
    "opts": [
      "Japanese",
      "Chinese",
      "Korean",
      "English"
    ],
    "ans": 0,
    "note": "【翻譯】她學日語，因為她想去日本並與當地人交流。\n【解析】Japanese 指「日語、日本人、日本的」，首字母大寫，可作形容詞或名詞。\n【必備單字】Japanese [ˌdʒæpəˈniːz] (adj./n.) 日本的；日語；日本人",
    "collocation": [
      "speak Japanese → 說日語",
      "Japanese culture → 日本文化",
      "Japanese food → 日本料理",
      "a Japanese → 一個日本人"
    ],
    "pattern": []
  },
  {
    "word": "meaning",
    "diff": 1,
    "deck": "adv",
    "q": "The _____ of this proverb is that hard work will always lead to success in the end.",
    "opts": [
      "meaning",
      "message",
      "purpose",
      "reason"
    ],
    "ans": 0,
    "note": "【翻譯】這句諺語的意思是，勤奮終將帶來成功。\n【解析】meaning 指「意思、含義」，full of meaning 富有意義，a word with double meaning 雙關語。\n【必備單字】meaning [ˈmiːnɪŋ] (n.) 意思，含義；意義",
    "collocation": [
      "the meaning of → ⋯的意思",
      "full of meaning → 富有意義",
      "hidden meaning → 隱含的意義",
      "double meaning → 雙重含義，雙關"
    ],
    "pattern": []
  },
  {
    "word": "vest",
    "diff": 3,
    "deck": "adv",
    "q": "He wore a warm _____ over his shirt to stay comfortable during the cool autumn morning.",
    "opts": [
      "vest",
      "jacket",
      "coat",
      "sweater"
    ],
    "ans": 0,
    "note": "【翻譯】他在涼爽的秋天早晨穿著一件背心套在襯衫外面保暖。\n【解析】vest 在英式英語指「背心/汗衫」，life vest（救生衣）為重要搭配。\n【必備單字】vest [vɛst] (n.) 背心；（美）馬甲",
    "collocation": [
      "life vest → 救生衣",
      "bullet-proof vest → 防彈背心",
      "wear a vest → 穿背心"
    ],
    "pattern": []
  },
  {
    "word": "artist",
    "diff": 3,
    "deck": "adv",
    "q": "The famous _____ spent three years painting the large mural on the wall of the city library.",
    "opts": [
      "artist",
      "writer",
      "singer",
      "dancer"
    ],
    "ans": 0,
    "note": "【翻譯】這位著名藝術家花了三年時間在城市圖書館的牆上繪製大型壁畫。\n【解析】artist 指「藝術家」，通常指視覺藝術，performer（表演者）指表演藝術。\n【必備單字】artist [ˈɑːrtɪst] (n.) 藝術家，畫家",
    "collocation": [
      "a talented artist → 有才華的藝術家",
      "street artist → 街頭藝術家",
      "recording artist → 錄音藝人",
      "a work of art → 一件藝術作品"
    ],
    "pattern": []
  },
  {
    "word": "secret",
    "diff": 3,
    "deck": "adv",
    "q": "Please keep this _____ between us. I don't want anyone else to know about my plan.",
    "opts": [
      "secret",
      "story",
      "news",
      "message"
    ],
    "ans": 0,
    "note": "【翻譯】請保守這個秘密，只限我們之間。我不想讓其他任何人知道我的計劃。\n【解析】keep a secret 保守秘密，in secret 秘密地，secret admirer 暗戀者。\n【必備單字】secret [ˈsiːkrɪt] (n.) 秘密；(adj.) 秘密的，保密的",
    "collocation": [
      "keep a secret → 保守秘密",
      "in secret → 秘密地",
      "top secret → 最高機密",
      "secret admirer → 暗戀者"
    ],
    "pattern": []
  },
  {
    "word": "frank",
    "diff": 3,
    "deck": "adv",
    "q": "To be _____ with you, I think your plan has some serious problems that need to be fixed.",
    "opts": [
      "frank",
      "friendly",
      "funny",
      "formal"
    ],
    "ans": 0,
    "note": "【翻譯】坦白說，我認為你的計劃有一些嚴重的問題需要解決。\n【解析】frank 表示「坦率的、直言不諱的」，to be frank 坦白說，為常見插入語。\n【必備單字】frank [fræŋk] (adj.) 坦率的，直言不諱的",
    "collocation": [
      "to be frank → 坦白說",
      "frank talk → 坦誠的談話",
      "frankly speaking → 坦率地說"
    ],
    "pattern": [
      "To be frank (with you), + 句子 → 坦白說，⋯"
    ]
  },
  {
    "word": "university",
    "diff": 3,
    "deck": "adv",
    "q": "After graduating from high school, she got into a top _____ to study engineering.",
    "opts": [
      "university",
      "college",
      "institute",
      "academy"
    ],
    "ans": 0,
    "note": "【翻譯】高中畢業後，她考上了一所頂尖大學學習工程學。\n【解析】university 指「綜合大學」，比 college 規模更大、課程更廣，apply to a university 申請大學。\n【必備單字】university [ˌjuːnɪˈvɜːrsɪtɪ] (n.) 大學（綜合性）",
    "collocation": [
      "go to university → 上大學",
      "university student → 大學生",
      "apply to a university → 申請大學",
      "university degree → 大學學位"
    ],
    "pattern": []
  },
  {
    "word": "flu",
    "diff": 3,
    "deck": "adv",
    "q": "He got the _____ last week and had to stay in bed for three days with a high fever.",
    "opts": [
      "flu",
      "cold",
      "fever",
      "cough"
    ],
    "ans": 0,
    "note": "【翻譯】他上週得了流感，不得不因高燒臥床三天。\n【解析】flu（流感）是 influenza 的縮寫，catch the flu 得流感，flu shot 流感疫苗。\n【必備單字】flu [fluː] (n.) 流行性感冒（influenza 的縮寫）",
    "collocation": [
      "catch the flu → 得流感",
      "flu shot → 流感疫苗",
      "stomach flu → 腸胃型感冒",
      "flu season → 流感季節"
    ],
    "pattern": []
  },
  {
    "word": "feeling",
    "diff": 3,
    "deck": "adv",
    "q": "She had a strange _____ that someone was watching her as she walked home alone at night.",
    "opts": [
      "feeling",
      "thought",
      "guess",
      "opinion"
    ],
    "ans": 0,
    "note": "【翻譯】她獨自在夜晚走回家時，有一種奇怪的感覺，好像有人在盯著她看。\n【解析】feeling 指「感覺、情感」，hurt sb's feelings 傷害某人的感情，mixed feelings 複雜的情感。\n【必備單字】feeling [ˈfiːlɪŋ] (n.) 感覺，情感",
    "collocation": [
      "hurt sb's feelings → 傷害某人的感情",
      "mixed feelings → 複雜的感受",
      "a feeling of → ⋯的感覺",
      "express one's feelings → 表達感受"
    ],
    "pattern": []
  },
  {
    "word": "difference",
    "diff": 3,
    "deck": "adv",
    "q": "Can you tell the _____ between these two photos? They look almost the same to me.",
    "opts": [
      "difference",
      "distance",
      "decision",
      "direction"
    ],
    "ans": 0,
    "note": "【翻譯】你能看出這兩張照片的不同之處嗎？對我來說它們看起來幾乎一樣。\n【解析】make a difference 表示「有影響、有意義」，tell the difference 分辨差異。\n【必備單字】difference [ˈdɪfərəns] (n.) 差異，不同",
    "collocation": [
      "make a difference → 有影響，有意義",
      "tell the difference → 分辨差異",
      "a big difference → 很大的差異",
      "difference between → ⋯之間的差異"
    ],
    "pattern": [
      "make a difference (to sb/sth) → 對⋯有影響/改變"
    ]
  },
  {
    "word": "oven",
    "diff": 3,
    "deck": "adv",
    "q": "She put the chicken in the _____ at 200 degrees and baked it for forty-five minutes.",
    "opts": [
      "oven",
      "stove",
      "fridge",
      "microwave"
    ],
    "ans": 0,
    "note": "【翻譯】她把雞肉放進烤箱，以200度烤了45分鐘。\n【解析】oven 指「烤箱」，bake in the oven 在烤箱中烘烤，microwave oven 微波爐（完整說法）。\n【必備單字】oven [ˈʌvən] (n.) 烤箱",
    "collocation": [
      "bake in the oven → 在烤箱中烘烤",
      "oven-baked → 烤箱烘焙的",
      "microwave oven → 微波爐",
      "oven-proof → 可進烤箱的"
    ],
    "pattern": []
  },
  {
    "word": "shark",
    "diff": 3,
    "deck": "adv",
    "q": "The _____ is one of the most powerful hunters in the ocean and can smell blood from far away.",
    "opts": [
      "shark",
      "whale",
      "dolphin",
      "seal"
    ],
    "ans": 0,
    "note": "【翻譯】鯊魚是海洋中最強大的獵食者之一，能從很遠的地方嗅到血腥味。\n【解析】shark 指「鯊魚」，loan shark（高利貸者）是常見衍生語意，shark attack 鯊魚攻擊。\n【必備單字】shark [ʃɑːrk] (n.) 鯊魚",
    "collocation": [
      "shark attack → 鯊魚攻擊",
      "great white shark → 大白鯊",
      "loan shark → 高利貸者",
      "shark fin → 魚翅"
    ],
    "pattern": []
  },
  {
    "word": "law",
    "diff": 3,
    "deck": "adv",
    "q": "In Taiwan, it is against the _____ to use your phone while driving, and you can get a fine.",
    "opts": [
      "law",
      "rule",
      "order",
      "command"
    ],
    "ans": 0,
    "note": "【翻譯】在台灣，開車時使用手機是違法的，可能會被罰款。\n【解析】against the law 違法，obey the law 遵守法律，break the law 違反法律。\n【必備單字】law [lɔː] (n.) 法律，法規",
    "collocation": [
      "against the law → 違法",
      "break the law → 違反法律",
      "obey the law → 遵守法律",
      "law school → 法學院"
    ],
    "pattern": []
  },
  {
    "word": "wedding",
    "diff": 3,
    "deck": "adv",
    "q": "They invited two hundred guests to their _____ and held a big dinner party afterwards.",
    "opts": [
      "wedding",
      "birthday",
      "graduation",
      "ceremony"
    ],
    "ans": 0,
    "note": "【翻譯】他們邀請了兩百位賓客參加婚禮，並在之後舉辦了盛大的晚宴。\n【解析】wedding 指「婚禮」，wedding ceremony（婚禮儀式），wedding ring（婚戒）為常考搭配。\n【必備單字】wedding [ˈwɛdɪŋ] (n.) 婚禮",
    "collocation": [
      "wedding ceremony → 婚禮儀式",
      "wedding ring → 婚戒",
      "wedding cake → 婚禮蛋糕",
      "attend a wedding → 參加婚禮"
    ],
    "pattern": []
  },
  {
    "word": "prince",
    "diff": 3,
    "deck": "adv",
    "q": "In the fairy tale, the _____ rode a white horse and saved the princess from the dragon.",
    "opts": [
      "prince",
      "king",
      "knight",
      "hero"
    ],
    "ans": 0,
    "note": "【翻譯】在童話故事中，王子騎著白馬，從龍口中救出了公主。\n【解析】prince 指「王子」，princess 是「公主」，常出現在童話故事相關的閱讀中。\n【必備單字】prince [prɪns] (n.) 王子，親王",
    "collocation": [
      "crown prince → 皇太子",
      "prince charming → 白馬王子",
      "the Prince of Wales → 威爾斯親王"
    ],
    "pattern": []
  },
  {
    "word": "marry",
    "diff": 3,
    "deck": "adv",
    "q": "They plan to _____ next spring and have a small wedding with only close family and friends.",
    "opts": [
      "marry",
      "date",
      "meet",
      "love"
    ],
    "ans": 0,
    "note": "【翻譯】他們計劃明年春天結婚，只邀請親近的家人和朋友舉辦小型婚禮。\n【解析】marry sb 直接加受詞（不加 with），get married to sb 是另一常見說法。\n【必備單字】marry [ˈmærɪ] (v.) 結婚，娶/嫁",
    "collocation": [
      "get married → 結婚",
      "marry sb → 與某人結婚",
      "married couple → 已婚夫婦",
      "happily married → 婚姻幸福"
    ],
    "pattern": [
      "marry sb / get married to sb → 與某人結婚（不可說 marry with）"
    ]
  },
  {
    "word": "barbecue",
    "diff": 3,
    "deck": "adv",
    "q": "Every summer, our family holds a _____ in the backyard and invites all our neighbors.",
    "opts": [
      "barbecue",
      "picnic",
      "party",
      "dinner"
    ],
    "ans": 0,
    "note": "【翻譯】每年夏天，我們家都會在後院舉辦烤肉活動並邀請所有鄰居。\n【解析】barbecue（BBQ）可作名詞「烤肉活動」或動詞「烤肉」，have a barbecue 舉辦烤肉。\n【必備單字】barbecue [ˈbɑːrbɪkjuː] (n./v.) 烤肉（活動）",
    "collocation": [
      "have a barbecue → 舉辦烤肉",
      "barbecue sauce → 烤肉醬",
      "barbecue grill → 烤肉架",
      "BBQ → 烤肉（縮寫）"
    ],
    "pattern": []
  },
  {
    "word": "dumpling",
    "diff": 3,
    "deck": "adv",
    "q": "During the Lunar New Year, our family makes _____ together. It's a fun tradition.",
    "opts": [
      "dumplings",
      "sushi",
      "tacos",
      "sandwiches"
    ],
    "ans": 0,
    "note": "【翻譯】農曆新年期間，我們全家一起包餃子，這是一個有趣的傳統。\n【解析】dumpling 指「餃子、湯圓等麵食」，在介紹台灣/中華文化的文章中常出現。\n【必備單字】dumpling [ˈdʌmplɪŋ] (n.) 餃子，湯圓",
    "collocation": [
      "make dumplings → 包餃子",
      "steamed dumplings → 蒸餃",
      "soup dumplings → 湯包（小籠包）",
      "Lunar New Year dumplings → 年節餃子"
    ],
    "pattern": []
  },
  {
    "word": "korea",
    "diff": 3,
    "deck": "adv",
    "q": "_____ is famous for its K-pop music, Korean dramas, and delicious food like kimchi.",
    "opts": [
      "Korea",
      "Japan",
      "China",
      "Vietnam"
    ],
    "ans": 0,
    "note": "【翻譯】韓國以K-pop音樂、韓劇和泡菜等美食聞名。\n【解析】Korea 指「韓國（或朝鮮）」，Korean 是形容詞，注意 South Korea（南韓）與 North Korea（北韓）。\n【必備單字】Korea [kəˈriːə] (n.) 韓國；朝鮮",
    "collocation": [
      "South Korea → 南韓",
      "North Korea → 北韓",
      "Korean drama → 韓劇",
      "Korean food → 韓國料理"
    ],
    "pattern": []
  },
  {
    "word": "forward",
    "diff": 1,
    "deck": "adv",
    "q": "I am looking _____ to seeing you at the class reunion next Saturday evening.",
    "opts": [
      "forward",
      "ahead",
      "away",
      "around"
    ],
    "ans": 0,
    "note": "【翻譯】我很期待下週六晚上在同學會上見到你。\n【解析】look forward to + N/Ving 是「期待」的重要句型，to 後面要加名詞或動名詞。\n【必備單字】forward [ˈfɔːrwərd] (adv./adj.) 向前；進步的",
    "collocation": [
      "look forward to → 期待（後接名詞/動名詞）",
      "move forward → 向前邁進",
      "fast forward → 快進",
      "put forward → 提出（意見）"
    ],
    "pattern": [
      "look forward to + N/Ving → 期待⋯（to 後接名詞或動名詞，非原形動詞）"
    ]
  },
  {
    "word": "chess",
    "diff": 3,
    "deck": "adv",
    "q": "My grandfather taught me how to play _____ when I was young, and now I play it every week.",
    "opts": [
      "chess",
      "checkers",
      "poker",
      "mahjong"
    ],
    "ans": 0,
    "note": "【翻譯】我爺爺在我小時候教我下西洋棋，現在我每週都下棋。\n【解析】chess 指「西洋棋」，play chess 下西洋棋，chess piece（棋子），chess board（棋盤）。\n【必備單字】chess [tʃɛs] (n.) 西洋棋",
    "collocation": [
      "play chess → 下西洋棋",
      "chess board → 棋盤",
      "chess piece → 棋子",
      "chess club → 西洋棋社"
    ],
    "pattern": []
  },
  {
    "word": "bill",
    "diff": 1,
    "deck": "adv",
    "q": "After dinner, the waiter brought the _____ and we each paid our own share.",
    "opts": [
      "bill",
      "receipt",
      "menu",
      "order"
    ],
    "ans": 0,
    "note": "【翻譯】晚餐後，服務生拿來帳單，我們各自付了自己的那份。\n【解析】bill 指「帳單」（餐廳/酒店等），也指「鈔票」（美式），foot the bill 為「買單」。\n【必備單字】bill [bɪl] (n.) 帳單；鈔票；法案",
    "collocation": [
      "pay the bill → 付帳",
      "foot the bill → 支付費用，買單",
      "a dollar bill → 一元鈔票",
      "electricity bill → 電費帳單"
    ],
    "pattern": []
  }
];
