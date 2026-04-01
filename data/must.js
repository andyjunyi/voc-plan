// must 題庫 — VocabMaster
const POOL_MUST = [
  {
    "deck": "must",
    "diff": 2,
    "word": "absolutely",
    "q": "I am _____ sure that she told the truth.",
    "opts": [
      "absolutely",
      "actually",
      "almost",
      "already"
    ],
    "ans": 0,
    "note": "【翻譯】我完全確信她說了實話。\n【解析】absolutely 表示「絕對地、完全地」，強調程度。\n【必備單字】absolutely [ˈæbsəluːtli] (adv.) 絕對地，完全地"
  },
  {
    "deck": "must",
    "diff": 1,
    "word": "brave",
    "q": "It was very _____ of the firefighter to run into the burning building.",
    "opts": [
      "brave",
      "boring",
      "bright",
      "brief"
    ],
    "ans": 0,
    "note": "【翻譯】消防員跑進燃燒的建築物裡是非常勇敢的行為。\n【解析】brave 形容人勇敢無畏，It is brave of sb to V 為常考句型。\n【必備單字】brave [breɪv] (adj.) 勇敢的，無畏的"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "challenge",
    "q": "Learning a new language is a _____, but it is worth it.",
    "opts": [
      "challenge",
      "chance",
      "change",
      "choice"
    ],
    "ans": 0,
    "note": "【翻譯】學習一門新語言是一項挑戰，但這是值得的。\n【解析】challenge 表示「挑戰」，可作名詞或動詞。\n【必備單字】challenge [ˈtʃælɪndʒ] (n./v.) 挑戰"
  },
  {
    "deck": "must",
    "diff": 1,
    "word": "choice",
    "q": "There are many _____ on the menu. I don't know what to order.",
    "opts": [
      "choices",
      "chances",
      "changes",
      "chapters"
    ],
    "ans": 0,
    "note": "【翻譯】菜單上有很多選擇，我不知道點什麼。\n【解析】choice 表示「選擇、選項」，make a choice 做出選擇。\n【必備單字】choice [tʃɔɪs] (n.) 選擇，選項"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "communicate",
    "q": "It is important to _____ clearly when you work in a team.",
    "opts": [
      "communicate",
      "compete",
      "complete",
      "consider"
    ],
    "ans": 0,
    "note": "【翻譯】在團隊中工作時，清楚地溝通非常重要。\n【解析】communicate 表示「溝通、傳達」。\n【必備單字】communicate [kəˈmjuːnɪkeɪt] (v.) 溝通，交流"
  },
  {
    "deck": "must",
    "diff": 3,
    "word": "concentrate",
    "q": "Please _____ on your study and don't look at your phone.",
    "opts": [
      "concentrate",
      "consider",
      "connect",
      "compete"
    ],
    "ans": 0,
    "note": "【翻譯】請專心學習，不要看手機。\n【解析】concentrate on 專注於，後接名詞或動名詞。\n【必備單字】concentrate [ˈkɒnsəntreɪt] (v.) 集中（注意力），專心"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "confident",
    "q": "She felt very _____ before the speech because she had practiced a lot.",
    "opts": [
      "confident",
      "careful",
      "curious",
      "creative"
    ],
    "ans": 0,
    "note": "【翻譯】她在演講前感到非常有信心，因為她練習了很多。\n【解析】be confident about/in 對⋯有信心。\n【必備單字】confident [ˈkɒnfɪdənt] (adj.) 有信心的，自信的"
  },
  {
    "deck": "must",
    "diff": 1,
    "word": "creative",
    "q": "My little brother is very _____. He always draws funny pictures.",
    "opts": [
      "creative",
      "careful",
      "correct",
      "common"
    ],
    "ans": 0,
    "note": "【翻譯】我弟弟很有創意，他總是畫有趣的圖畫。\n【解析】creative 形容富有創造力的人或想法。\n【必備單字】creative [kriˈeɪtɪv] (adj.) 有創意的，創造性的"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "curious",
    "q": "Children are naturally _____ about everything around them.",
    "opts": [
      "curious",
      "careful",
      "correct",
      "creative"
    ],
    "ans": 0,
    "note": "【翻譯】孩子天生對周圍的一切都感到好奇。\n【解析】be curious about 對⋯好奇，常考固定搭配。\n【必備單字】curious [ˈkjʊriəs] (adj.) 好奇的"
  },
  {
    "deck": "must",
    "diff": 3,
    "word": "determine",
    "q": "Nothing could _____ her from achieving her dream.",
    "opts": [
      "determine",
      "develop",
      "deliver",
      "describe"
    ],
    "ans": 0,
    "note": "【翻譯】沒有什麼能阻止她實現夢想。\n【解析】此處 determine 作「阻止」較少見，be determined to V 表示「決心要」更常考。\n【必備單字】determine [dɪˈtɜːrmɪn] (v.) 決定；使下決心"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "develop",
    "q": "Reading every day can help you _____ better language skills.",
    "opts": [
      "develop",
      "deliver",
      "deserve",
      "decide"
    ],
    "ans": 0,
    "note": "【翻譯】每天閱讀可以幫助你發展更好的語言技能。\n【解析】develop 表示「發展、培養」技能或能力。\n【必備單字】develop [dɪˈveləp] (v.) 發展，培養；開發"
  },
  {
    "deck": "must",
    "diff": 1,
    "word": "enjoy",
    "q": "I really _____ listening to music when I do homework.",
    "opts": [
      "enjoy",
      "enter",
      "explain",
      "express"
    ],
    "ans": 0,
    "note": "【翻譯】我做作業時真的很喜歡聽音樂。\n【解析】enjoy + Ving 喜歡做某事，後接動名詞。\n【必備單字】enjoy [ɪnˈdʒɔɪ] (v.) 享受，喜歡"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "environment",
    "q": "We should all do our part to protect the _____.",
    "opts": [
      "environment",
      "education",
      "experience",
      "equipment"
    ],
    "ans": 0,
    "note": "【翻譯】我們都應該盡自己的一份力量來保護環境。\n【解析】environment 環境，protect the environment 保護環境為常考短語。\n【必備單字】environment [ɪnˈvaɪrənmənt] (n.) 環境，自然環境"
  },
  {
    "deck": "must",
    "diff": 3,
    "word": "evaluate",
    "q": "Teachers need to _____ students' progress regularly.",
    "opts": [
      "evaluate",
      "explore",
      "exchange",
      "explain"
    ],
    "ans": 0,
    "note": "【翻譯】教師需要定期評估學生的學習進度。\n【解析】evaluate 表示「評估、評量」，學術常用詞。\n【必備單字】evaluate [ɪˈvæljueɪt] (v.) 評估，評量"
  },
  {
    "deck": "must",
    "diff": 2,
    "word": "express",
    "q": "It is hard for him to _____ his feelings in words.",
    "opts": [
      "express",
      "explore",
      "explain",
      "enjoy"
    ],
    "ans": 0,
    "note": "【翻譯】他很難用言語表達自己的感受。\n【解析】express one's feelings/ideas 表達感受/想法。\n【必備單字】express [ɪkˈspres] (v.) 表達，表示"
  }
];
