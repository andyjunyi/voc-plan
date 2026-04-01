// basic 題庫 — VocabMaster
const POOL_BASIC = [
  {
    "deck": "basic",
    "diff": 1,
    "word": "ability",
    "q": "Lucy has the _____ to dance very well.",
    "opts": [
      "ability",
      "accident",
      "address",
      "activity"
    ],
    "ans": 0,
    "note": "【翻譯】露西有跳舞跳得很好的能力。\n【解析】ability 表示某方面的能力或才能，為本句關鍵名詞。\n【必備單字】ability [əˈbɪlətɪ] (n.) 能力，才幹",
    "collocation": [
      "have the ability to V → 有能力做⋯",
      "natural ability → 天生能力",
      "ability in/at sth → 在某方面的能力"
    ],
    "pattern": [
      "have the ability to + V（原形）→ 強調具備做某事的能力"
    ]
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "abroad",
    "q": "Studying _____ is expensive, but you can learn a lot.",
    "opts": [
      "absent",
      "abroad",
      "accept",
      "achieve"
    ],
    "ans": 1,
    "note": "【翻譯】在國外唸書很貴，但你可以學到很多。\n【解析】study abroad 為固定搭配「留學」。\n【必備單字】abroad [əˈbrɔd] (adv.) 在國外，到國外",
    "collocation": [
      "study abroad → 留學",
      "go abroad → 出國",
      "live abroad → 住在國外",
      "travel abroad → 出國旅遊"
    ]
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "absent",
    "q": "Why was Kevin _____ from school yesterday? Was he sick?",
    "opts": [
      "afraid",
      "active",
      "absent",
      "agree"
    ],
    "ans": 2,
    "note": "【翻譯】為什麼凱文昨天沒來上學？\n【解析】be absent from 為固定用法，表示「缺席」。\n【必備單字】absent [ˈæbsənt] (adj.) 缺席的",
    "collocation": [
      "be absent from sth → 缺席（課/會議等）",
      "absent-minded → 心不在焉的"
    ]
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "accident",
    "q": "Drive carefully! There was a serious traffic _____ this morning.",
    "opts": [
      "advice",
      "accident",
      "ability",
      "address"
    ],
    "ans": 1,
    "note": "【翻譯】小心開車！今早這裡發生了嚴重交通事故。\n【解析】traffic accident 「交通事故」為固定搭配。\n【必備單字】accident [ˈæksɪdənt] (n.) 意外事故",
    "collocation": [
      "traffic accident → 交通事故",
      "car accident → 車禍",
      "by accident → 意外地（= by chance）",
      "have an accident → 發生意外"
    ]
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "achieve",
    "q": "It took years for the scientist to _____ his goal.",
    "opts": [
      "achieve",
      "afford",
      "admire",
      "allow"
    ],
    "ans": 0,
    "note": "【翻譯】那位科學家花了多年才達成目標。\n【解析】achieve one's goal 達成目標，為常考固定搭配。\n【必備單字】achieve [əˈtʃiːv] (v.) 達成，實現",
    "collocation": [
      "achieve one's goal → 達成目標",
      "achieve success → 獲得成功",
      "achieve a dream → 實現夢想"
    ]
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "active",
    "q": "Tom is very _____ and loves playing sports every day.",
    "opts": [
      "active",
      "absent",
      "afraid",
      "angry"
    ],
    "ans": 0,
    "note": "【翻譯】湯姆非常活躍，每天都愛做運動。\n【解析】active 形容人好動積極。\n【必備單字】active [ˈæktɪv] (adj.) 活躍的，積極的",
    "collocation": [
      "be active in sth → 積極參與某事",
      "take an active part/role → 積極參與",
      "physically active → 身體活躍健康"
    ]
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "actually",
    "q": "He looks young, but he is _____ 45 years old.",
    "opts": [
      "already",
      "actually",
      "almost",
      "always"
    ],
    "ans": 1,
    "note": "【翻譯】他看起來年輕，但他實際上已經 45 歲了。\n【解析】actually 表示「實際上、事實上」，用於揭示真相。\n【必備單字】actually [ˈæktʃuəli] (adv.) 實際上，事實上"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "advice",
    "q": "Can you give me some _____ on how to learn English well?",
    "opts": [
      "advice",
      "accept",
      "action",
      "age"
    ],
    "ans": 0,
    "note": "【翻譯】你能給我一些學好英語的建議嗎？\n【解析】advice 是不可數名詞，give advice 給予建議。\n【必備單字】advice [ədˈvaɪs] (n.) 建議，忠告（不可數）"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "afford",
    "q": "We can't _____ a new car right now. We don't have enough money.",
    "opts": [
      "allow",
      "afford",
      "affect",
      "admire"
    ],
    "ans": 1,
    "note": "【翻譯】我們現在無法負擔一輛新車，我們沒有足夠的錢。\n【解析】can't afford + N/to V 表示「負擔不起」。\n【必備單字】afford [əˈfɔːrd] (v.) 負擔得起，承擔"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "afraid",
    "q": "The little girl is _____ of dogs because a dog bit her once.",
    "opts": [
      "afraid",
      "angry",
      "bored",
      "careful"
    ],
    "ans": 0,
    "note": "【翻譯】這個小女孩怕狗，因為她曾被狗咬過。\n【解析】be afraid of + N 表示「害怕某事物」。\n【必備單字】afraid [əˈfreɪd] (adj.) 害怕的，恐懼的"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "agree",
    "q": "Do you _____ with me that we should protect the environment?",
    "opts": [
      "agree",
      "achieve",
      "allow",
      "argue"
    ],
    "ans": 0,
    "note": "【翻譯】你是否同意我們應該保護環境？\n【解析】agree with sb 同意某人的看法。\n【必備單字】agree [əˈɡriː] (v.) 同意，贊成"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "allow",
    "q": "The rule does not _____ students to use phones in class.",
    "opts": [
      "allow",
      "agree",
      "advise",
      "afford"
    ],
    "ans": 0,
    "note": "【翻譯】規定不允許學生在課堂上使用手機。\n【解析】allow sb to V 允許某人做某事，此為否定用法。\n【必備單字】allow [əˈlaʊ] (v.) 允許，准許"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "always",
    "q": "My grandfather _____ drinks tea in the morning. It's his habit.",
    "opts": [
      "always",
      "already",
      "almost",
      "alone"
    ],
    "ans": 0,
    "note": "【翻譯】我爺爺早上總是喝茶，這是他的習慣。\n【解析】always 表頻率「總是」，與習慣動作連用。\n【必備單字】always [ˈɔːlweɪz] (adv.) 總是，一直"
  },
  {
    "deck": "basic",
    "diff": 3,
    "word": "amazing",
    "q": "The sunset over the ocean was so _____ that everyone stopped to watch.",
    "opts": [
      "amazing",
      "annoying",
      "awful",
      "average"
    ],
    "ans": 0,
    "note": "【翻譯】海洋上的日落如此令人驚嘆，每個人都停下來欣賞。\n【解析】amazing 形容令人驚嘆的景象。\n【必備單字】amazing [əˈmeɪzɪŋ] (adj.) 令人驚嘆的，了不起的"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "angry",
    "q": "Don't be _____ with him. He didn't mean to break your cup.",
    "opts": [
      "angry",
      "afraid",
      "absent",
      "amazing"
    ],
    "ans": 0,
    "note": "【翻譯】別對他生氣。他不是故意打破你的杯子的。\n【解析】be angry with sb 對某人生氣，常考固定片語。\n【必備單字】angry [ˈæŋɡri] (adj.) 生氣的，憤怒的"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "animal",
    "q": "A dog is my favorite _____. I have two at home.",
    "opts": [
      "animal",
      "actor",
      "answer",
      "area"
    ],
    "ans": 0,
    "note": "【翻譯】狗是我最喜歡的動物，我家有兩隻。\n【解析】animal 泛指動物，基礎詞彙。\n【必備單字】animal [ˈænɪməl] (n.) 動物"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "announce",
    "q": "The teacher will _____ the test results tomorrow morning.",
    "opts": [
      "answer",
      "announce",
      "arrange",
      "attract"
    ],
    "ans": 1,
    "note": "【翻譯】老師明天早上將公布考試成績。\n【解析】announce 表示正式公告宣布。\n【必備單字】announce [əˈnaʊns] (v.) 宣布，公告"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "appear",
    "q": "A rainbow _____ in the sky after the rain stopped.",
    "opts": [
      "appear",
      "apply",
      "accept",
      "arrange"
    ],
    "ans": 0,
    "note": "【翻譯】雨停後，天空出現了一道彩虹。\n【解析】appear 表示「出現」，與 disappear 相對。\n【必備單字】appear [əˈpɪr] (v.) 出現，顯現；看起來，似乎"
  },
  {
    "deck": "basic",
    "diff": 3,
    "word": "apply",
    "q": "You need to _____ for the job before the deadline next Friday.",
    "opts": [
      "apply",
      "agree",
      "allow",
      "appear"
    ],
    "ans": 0,
    "note": "【翻譯】你需要在下週五截止日期前申請這份工作。\n【解析】apply for 申請（工作/大學等），為常考搭配。\n【必備單字】apply [əˈplaɪ] (v.) 申請；應用"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "area",
    "q": "There is a beautiful park in our _____ where kids can play.",
    "opts": [
      "area",
      "age",
      "arm",
      "air"
    ],
    "ans": 0,
    "note": "【翻譯】我們這一帶有一個漂亮的公園，孩子們可以在那裡玩耍。\n【解析】area 表示地區、區域。\n【必備單字】area [ˈeriə] (n.) 地區，區域"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "argue",
    "q": "The brothers always _____ about which TV show to watch.",
    "opts": [
      "argue",
      "arrange",
      "answer",
      "avoid"
    ],
    "ans": 0,
    "note": "【翻譯】兄弟倆總是為了看哪個電視節目而爭吵。\n【解析】argue about sth 為固定用法「為某事爭論」。\n【必備單字】argue [ˈɑːrɡjuː] (v.) 爭論，爭吵"
  },
  {
    "deck": "basic",
    "diff": 3,
    "word": "arrange",
    "q": "Please _____ the chairs in a circle before the meeting starts.",
    "opts": [
      "arrange",
      "apply",
      "arrive",
      "admire"
    ],
    "ans": 0,
    "note": "【翻譯】請在會議開始前把椅子排成一個圓圈。\n【解析】arrange 表示「安排、排列」。\n【必備單字】arrange [əˈreɪndʒ] (v.) 安排，排列"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "arrive",
    "q": "What time did you _____ at the airport yesterday?",
    "opts": [
      "arrive",
      "arrange",
      "argue",
      "attract"
    ],
    "ans": 0,
    "note": "【翻譯】你昨天幾點到達機場的？\n【解析】arrive at（小地方）/ arrive in（大地方）。\n【必備單字】arrive [əˈraɪv] (v.) 到達，抵達"
  },
  {
    "deck": "basic",
    "diff": 2,
    "word": "attract",
    "q": "The colorful flowers in the garden _____ many butterflies.",
    "opts": [
      "attract",
      "arrive",
      "arrange",
      "allow"
    ],
    "ans": 0,
    "note": "【翻譯】花園裡色彩鮮豔的花朵吸引了許多蝴蝶。\n【解析】attract 表示「吸引」，常與 attention 搭配。\n【必備單字】attract [əˈtrækt] (v.) 吸引"
  },
  {
    "deck": "basic",
    "diff": 1,
    "word": "avoid",
    "q": "You should _____ eating too much sugar to stay healthy.",
    "opts": [
      "avoid",
      "allow",
      "argue",
      "arrange"
    ],
    "ans": 0,
    "note": "【翻譯】為了保持健康，你應該避免吃太多糖。\n【解析】avoid + Ving 避免做某事，後接動名詞。\n【必備單字】avoid [əˈvɔɪd] (v.) 避免，躲開"
  }
];
