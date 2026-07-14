// ==========================================
// 学習データ（Day 01 〜 Day 30 完全版）
// ==========================================
const lessonData = {
  1: {
    title: "Day 01: 基本の型「誰が・どうする・何を」",
    desc: "英語の最も重要なルール「SVO（主語＋動詞＋目的語）」の語順をマスターしましょう。",
    words: [
      { en: "check", ja: "確認する", sentEn: "I checked the schedule.", sentJa: "私はスケジュールを確認しました。", note: "S: I / V: checked / O: the schedule" },
      { en: "need", ja: "必要とする", sentEn: "We need a new plan.", sentJa: "私たちは新しい計画が必要です。", note: "S: We / V: need / O: a new plan" },
      { en: "send", ja: "送る", sentEn: "I will send the email.", sentJa: "私がメールを送ります。", note: "S: I / V: will send / O: the email" },
      { en: "receive", ja: "受け取る", sentEn: "I received the document.", sentJa: "私はその書類を受け取りました。", note: "S: I / V: received / O: the document" },
      { en: "use", ja: "使う", sentEn: "We use this software.", sentJa: "私たちはこのソフトウェアを使います。", note: "S: We / V: use / O: this software" },
      { en: "visit", ja: "訪問する", sentEn: "Our team visited the client.", sentJa: "私たちのチームは顧客を訪問しました。", note: "S: Our team / V: visited / O: the client" },
      { en: "attend", ja: "出席する", sentEn: "She attended the meeting.", sentJa: "彼女はその会議に出席しました。", note: "S: She / V: attended / O: the meeting" },
      { en: "finish", ja: "終える", sentEn: "He finished the task.", sentJa: "彼はその業務を終えました。", note: "S: He / V: finished / O: the task" },
      { en: "contact", ja: "連絡する", sentEn: "I will contact the manager.", sentJa: "私がマネージャーに連絡します。", note: "S: I / V: will contact / O: the manager" },
      { en: "understand", ja: "理解する", sentEn: "I understand the situation.", sentJa: "私は状況を理解しています。", note: "S: I / V: understand / O: the situation" }
    ]
  },
  2: {
    title: "Day 02: 実践アクション動詞（SVO）",
    desc: "1日目と同じ語順で、仕事でよく使う動詞をマスターしましょう。",
    words: [
      { en: "improve", ja: "改善する", sentEn: "We improved the system.", sentJa: "私たちはそのシステムを改善しました。", note: "S: We / V: improved / O: the system" },
      { en: "prepare", ja: "準備する", sentEn: "I prepared the report.", sentJa: "私がその報告書を準備しました。", note: "S: I / V: prepared / O: the report" },
      { en: "discuss", ja: "話し合う", sentEn: "They discussed the budget.", sentJa: "彼らは予算について話し合いました。", note: "S: They / V: discussed / O: the budget" },
      { en: "support", ja: "支援する", sentEn: "Our company supports the project.", sentJa: "私たちの会社はそのプロジェクトを支援しています。", note: "S: Our company / V: supports / O: the project" },
      { en: "manage", ja: "管理する", sentEn: "She manages the team.", sentJa: "彼女がそのチームを管理しています。", note: "S: She / V: manages / O: the team" },
      { en: "create", ja: "作成する", sentEn: "I created a new folder.", sentJa: "私は新しいフォルダを作成しました。", note: "S: I / V: created / O: a new folder" },
      { en: "change", ja: "変更する", sentEn: "He changed the setting.", sentJa: "彼はその設定を変更しました。", note: "S: He / V: changed / O: the setting" },
      { en: "cancel", ja: "キャンセルする", sentEn: "I canceled the meeting.", sentJa: "私はその会議をキャンセルしました。", note: "S: I / V: canceled / O: the meeting" },
      { en: "join", ja: "加わる", sentEn: "Mr. Smith joined our team.", sentJa: "スミスさんがチームに加わりました。", note: "S: Mr. Smith / V: joined / O: our team" },
      { en: "offer", ja: "提供する", sentEn: "We offer good services.", sentJa: "私たちは質の高いサービスを提供しています。", note: "S: We / V: offer / O: good services" }
    ]
  },
  3: {
    title: "Day 03: 状態を伝える型「A ＝ B」",
    desc: "「SVC（主語＋動詞＋補語）」の語順で、状況や気持ちをスマートに表現しましょう。",
    words: [
      { en: "be (is/am/are)", ja: "〜である", sentEn: "The meeting is important.", sentJa: "その会議は重要です。", note: "S: The meeting / V: is / C: important" },
      { en: "look", ja: "〜に見える", sentEn: "The data looks correct.", sentJa: "そのデータは正確に見えます。", note: "S: The data / V: looks / C: correct" },
      { en: "sound", ja: "〜に聞こえる", sentEn: "The idea sounds interesting.", sentJa: "そのアイデアは面白そうですね。", note: "S: The idea / V: sounds / C: interesting" },
      { en: "seem", ja: "〜のように思える", sentEn: "The project seems difficult.", sentJa: "そのプロジェクトは難しそうです。", note: "S: The project / V: seems / C: difficult" },
      { en: "become", ja: "〜になる", sentEn: "The situation became clear.", sentJa: "状況は明確になりました。", note: "S: The situation / V: became / C: clear" },
      { en: "stay", ja: "〜のままでいる", sentEn: "We stay positive.", sentJa: "私たちは前向きな姿勢を保ちます。", note: "S: We / V: stay / C: positive" },
      { en: "feel", ja: "〜と感じる", sentEn: "I feel confident.", sentJa: "私は自信があります。", note: "S: I / V: feel / C: confident" },
      { en: "keep", ja: "〜を保つ", sentEn: "We keep calm.", sentJa: "私たちは冷静さを保ちます。", note: "S: We / V: keep / C: calm" },
      { en: "get", ja: "（状態に）なる", sentEn: "I got busy.", sentJa: "私は忙しくなりました。", note: "S: I / V: got / C: busy" },
      { en: "remain", ja: "〜のままである", sentEn: "The office remains open.", sentJa: "オフィスは開いたままです。", note: "S: The office / V: remains / C: open" }
    ]
  },
  4: {
    title: "Day 04: 人にモノを「与える」型",
    desc: "「SVOO（主語＋動詞＋人＋モノ）」の語順。ビジネスで頻出のパターンです。",
    words: [
      { en: "give", ja: "与える・渡す", sentEn: "I gave him the document.", sentJa: "私は彼に書類を渡しました。", note: "SVOO: I / gave / him / the document" },
      { en: "show", ja: "見せる", sentEn: "She showed me the data.", sentJa: "彼女は私にデータを見せました。", note: "SVOO: She / showed / me / the data" },
      { en: "tell", ja: "伝える・教える", sentEn: "He told us the truth.", sentJa: "彼は私たちに真実を伝えました。", note: "SVOO: He / told / us / the truth" },
      { en: "teach", ja: "教える", sentEn: "They teach us new skills.", sentJa: "彼らは私たちに新しいスキルを教えます。", note: "SVOO: They / teach / us / new skills" },
      { en: "bring", ja: "持ってくる", sentEn: "Please bring me the file.", sentJa: "私にそのファイルを持ってきてください。", note: "SVOO: (You) / bring / me / the file" },
      { en: "lend", ja: "貸す", sentEn: "I lent her my PC.", sentJa: "私は彼女にPCを貸しました。", note: "SVOO: I / lent / her / my PC" },
      { en: "buy", ja: "買ってあげる", sentEn: "I bought him a coffee.", sentJa: "私は彼にコーヒーを買いました。", note: "SVOO: I / bought / him / a coffee" },
      { en: "cost", ja: "（費用を）かけさせる", sentEn: "It cost us extra money.", sentJa: "それは私たちに追加費用を発生させました。", note: "SVOO: It / cost / us / extra money" },
      { en: "ask", ja: "尋ねる・お願いする", sentEn: "Can I ask you a favor?", sentJa: "お願いがあるのですが。", note: "SVOO: I / ask / you / a favor" },
      { en: "pass", ja: "手渡す", sentEn: "Pass me the pen, please.", sentJa: "ペンを取ってください。", note: "SVOO: (You) / pass / me / the pen" }
    ]
  },
  5: {
    title: "Day 05: AをBにする・保つ型",
    desc: "「SVOC（主語＋動詞＋目的語＋補語）」。O＝Cの状態にする強力な表現です。",
    words: [
      { en: "make", ja: "〜を〜にする", sentEn: "This tool makes my work easy.", sentJa: "このツールは私の仕事を楽にしてくれます。", note: "SVOC: tool / makes / work / easy" },
      { en: "keep", ja: "〜を〜のまま保つ", sentEn: "Please keep the door open.", sentJa: "ドアを開けたままにしてください。", note: "SVOC: (You) / keep / door / open" },
      { en: "call", ja: "〜を〜と呼ぶ", sentEn: "We call him Boss.", sentJa: "私たちは彼をボスと呼びます。", note: "SVOC: We / call / him / Boss" },
      { en: "find", ja: "〜が〜だとわかる", sentEn: "I found the meeting useful.", sentJa: "その会議は有益だとわかりました。", note: "SVOC: I / found / meeting / useful" },
      { en: "leave", ja: "〜を〜のままにしておく", sentEn: "Don't leave the PC on.", sentJa: "PCをつけたままにしないでください。", note: "SVOC: Don't leave / PC / on" },
      { en: "name", ja: "〜を〜と名付ける", sentEn: "They named the project Apollo.", sentJa: "彼らはそのプロジェクトをアポロと名付けました。", note: "SVOC: They / named / project / Apollo" },
      { en: "paint", ja: "〜を〜色に塗る", sentEn: "We painted the wall green.", sentJa: "私たちは壁を緑色に塗りました。", note: "SVOC: We / painted / wall / green" },
      { en: "drive", ja: "（人を）〜な状態にする", sentEn: "The noise drives me crazy.", sentJa: "その騒音は私をイライラさせます。", note: "SVOC: noise / drives / me / crazy" },
      { en: "consider", ja: "〜を〜だと見なす", sentEn: "We consider it important.", sentJa: "私たちはそれを重要だと考えています。", note: "SVOC: We / consider / it / important" },
      { en: "elect", ja: "〜を〜に選出する", sentEn: "They elected her leader.", sentJa: "彼らは彼女をリーダーに選びました。", note: "SVOC: They / elected / her / leader" }
    ]
  },
  6: {
    title: "Day 06: 日常業務で使う「名詞」",
    desc: "動詞だけでなく、ビジネスで主語(S)や目的語(O)になる基本名詞を押さえましょう。",
    words: [
      { en: "schedule", ja: "予定・スケジュール", sentEn: "I checked the schedule.", sentJa: "私はスケジュールを確認しました。", note: "Oとして使用" },
      { en: "document", ja: "書類・文書", sentEn: "Please send the document.", sentJa: "その書類を送ってください。", note: "Oとして使用" },
      { en: "client", ja: "顧客", sentEn: "The client called us.", sentJa: "顧客が私たちに電話してきました。", note: "Sとして使用" },
      { en: "project", ja: "プロジェクト・計画", sentEn: "The project started today.", sentJa: "プロジェクトは今日始まりました。", note: "Sとして使用" },
      { en: "product", ja: "製品・商品", sentEn: "We sell this product.", sentJa: "私たちはこの製品を販売しています。", note: "Oとして使用" },
      { en: "service", ja: "サービス", sentEn: "Our service is excellent.", sentJa: "私たちのサービスは優れています。", note: "Sとして使用" },
      { en: "budget", ja: "予算", sentEn: "We need a bigger budget.", sentJa: "私たちはより多くの予算が必要です。", note: "Oとして使用" },
      { en: "report", ja: "報告書", sentEn: "He finished the report.", sentJa: "彼は報告書を書き終えました。", note: "Oとして使用" },
      { en: "contract", ja: "契約（書）", sentEn: "I signed the contract.", sentJa: "私は契約書にサインしました。", note: "Oとして使用" },
      { en: "deadline", ja: "締め切り", sentEn: "We missed the deadline.", sentJa: "私たちは締め切りに間に合いませんでした。", note: "Oとして使用" }
    ]
  },
  7: {
    title: "Day 07: 状態を表す「形容詞」",
    desc: "SVCの補語(C)や、名詞を修飾する大人の形容詞をマスターします。",
    words: [
      { en: "available", ja: "利用可能な・手が空いている", sentEn: "I am available tomorrow.", sentJa: "明日は空いています。", note: "SVCのC" },
      { en: "busy", ja: "忙しい", sentEn: "The team is busy now.", sentJa: "チームは今忙しいです。", note: "SVCのC" },
      { en: "clear", ja: "明確な", sentEn: "The instruction is clear.", sentJa: "その指示は明確です。", note: "SVCのC" },
      { en: "possible", ja: "可能な", sentEn: "It is possible.", sentJa: "それは可能です。", note: "SVCのC" },
      { en: "ready", ja: "準備ができている", sentEn: "We are ready to start.", sentJa: "開始する準備ができています。", note: "SVCのC" },
      { en: "successful", ja: "成功した", sentEn: "The event was successful.", sentJa: "そのイベントは成功しました。", note: "SVCのC" },
      { en: "useful", ja: "役立つ", sentEn: "This tool is very useful.", sentJa: "このツールはとても役に立ちます。", note: "SVCのC" },
      { en: "necessary", ja: "必要な", sentEn: "Changes are necessary.", sentJa: "変更が必要です。", note: "SVCのC" },
      { en: "effective", ja: "効果的な", sentEn: "The method is effective.", sentJa: "その方法は効果的です。", note: "SVCのC" },
      { en: "flexible", ja: "柔軟な", sentEn: "Our schedule is flexible.", sentJa: "私たちのスケジュールは柔軟です。", note: "SVCのC" }
    ]
  },
  8: {
    title: "Day 08: 「できる」を伝える（can / could）",
    desc: "助動詞は動詞の直前に置きます。「能力」や「可能」を表現しましょう。",
    words: [
      { en: "can", ja: "〜できる", sentEn: "I can finish this today.", sentJa: "私は今日これを終わらせることができます。", note: "can ＋ 動詞の原形" },
      { en: "could", ja: "〜できた・〜していただけますか", sentEn: "Could you help me?", sentJa: "手伝っていただけますか？", note: "丁寧な依頼" },
      { en: "accept", ja: "受け入れる", sentEn: "We can accept the offer.", sentJa: "私たちはそのオファーを受け入れることができます。", note: "can + accept" },
      { en: "approve", ja: "承認する", sentEn: "The boss can approve it.", sentJa: "上司がそれを承認できます。", note: "can + approve" },
      { en: "solve", ja: "解決する", sentEn: "She can solve the problem.", sentJa: "彼女はその問題を解決できます。", note: "can + solve" },
      { en: "handle", ja: "対処する", sentEn: "I can handle this task.", sentJa: "私がこのタスクに対処できます。", note: "can + handle" },
      { en: "fix", ja: "直す・修正する", sentEn: "He can fix the error.", sentJa: "彼はそのエラーを修正できます。", note: "can + fix" },
      { en: "access", ja: "アクセスする", sentEn: "I cannot access the file.", sentJa: "そのファイルにアクセスできません。", note: "cannot (can't) + access" },
      { en: "decide", ja: "決定する", sentEn: "We can decide later.", sentJa: "後で決定することができます。", note: "can + decide" },
      { en: "confirm", ja: "確認する（確証する）", sentEn: "I could confirm the date.", sentJa: "日付を確認することができました。", note: "could + confirm" }
    ]
  },
  9: {
    title: "Day 09: 「〜するつもり」未来・意志（will / would）",
    desc: "これからの予定や、強い意志を伝える表現です。",
    words: [
      { en: "will", ja: "〜するつもりだ・〜だろう", sentEn: "I will call you tomorrow.", sentJa: "明日お電話します。", note: "will ＋ 動詞の原形" },
      { en: "would", ja: "〜したいのですが（丁寧）", sentEn: "I would like a coffee.", sentJa: "コーヒーをいただきたいのですが。", note: "would like ＝ wantの丁寧語" },
      { en: "plan", ja: "計画する", sentEn: "We will plan the event.", sentJa: "私たちがイベントを計画します。", note: "will + plan" },
      { en: "expect", ja: "予期する・期待する", sentEn: "We expect good results.", sentJa: "良い結果を期待しています。", note: "未来を見据える動詞" },
      { en: "hope", ja: "望む", sentEn: "I hope you are well.", sentJa: "お元気であることを願っています。", note: "未来への希望" },
      { en: "promise", ja: "約束する", sentEn: "I promise I will go.", sentJa: "行くと約束します。", note: "willと相性の良い動詞" },
      { en: "prepare", ja: "準備する", sentEn: "I will prepare the room.", sentJa: "私が部屋を準備します。", note: "will + prepare" },
      { en: "organize", ja: "整理する・手配する", sentEn: "She will organize it.", sentJa: "彼女がそれを手配します。", note: "will + organize" },
      { en: "arrange", ja: "手配する・調整する", sentEn: "I will arrange a meeting.", sentJa: "私が会議を調整します。", note: "will + arrange" },
      { en: "update", ja: "更新する", sentEn: "I will update the data.", sentJa: "データを更新しておきます。", note: "will + update" }
    ]
  },
  10: {
    title: "Day 10: 「〜すべき」義務・提案（should / must）",
    desc: "アドバイスや絶対のルールを伝える助動詞です。",
    words: [
      { en: "should", ja: "〜すべきだ", sentEn: "We should start now.", sentJa: "私たちは今始めるべきです。", note: "柔らかな提案・義務" },
      { en: "must", ja: "〜しなければならない", sentEn: "You must wear a mask.", sentJa: "マスクを着用しなければなりません。", note: "強い義務・ルール" },
      { en: "review", ja: "見直す", sentEn: "You should review the plan.", sentJa: "計画を見直すべきです。", note: "should + review" },
      { en: "focus", ja: "集中する", sentEn: "We must focus on quality.", sentJa: "品質に集中しなければなりません。", note: "must + focus" },
      { en: "require", ja: "要求する・必要とする", sentEn: "This job requires English.", sentJa: "この仕事は英語を必要とします。", note: "義務に近い動詞" },
      { en: "suggest", ja: "提案する", sentEn: "I suggest a new approach.", sentJa: "新しいアプローチを提案します。", note: "shouldの代わりにも使える" },
      { en: "follow", ja: "従う", sentEn: "You must follow the rule.", sentJa: "ルールに従わなければなりません。", note: "must + follow" },
      { en: "avoid", ja: "避ける", sentEn: "We should avoid mistakes.", sentJa: "ミスは避けるべきです。", note: "should + avoid" },
      { en: "stop", ja: "止める・やめる", sentEn: "You must stop smoking.", sentJa: "タバコをやめなければなりません。", note: "must + stop" },
      { en: "continue", ja: "続ける", sentEn: "We should continue working.", sentJa: "私たちは働き続けるべきです。", note: "should + continue" }
    ]
  },
  11: {
    title: "Day 11: コミュニケーションの動詞",
    desc: "ビジネスで情報を正しく伝えるためのアクション動詞です。",
    words: [
      { en: "explain", ja: "説明する", sentEn: "I will explain the details.", sentJa: "私が詳細を説明します。", note: "SVO" },
      { en: "report", ja: "報告する", sentEn: "Please report the progress.", sentJa: "進捗を報告してください。", note: "SVO" },
      { en: "announce", ja: "発表する", sentEn: "They announced the news.", sentJa: "彼らはそのニュースを発表しました。", note: "SVO" },
      { en: "mention", ja: "言及する", sentEn: "He mentioned your name.", sentJa: "彼はあなたの名前を挙げました。", note: "SVO" },
      { en: "introduce", ja: "紹介する・導入する", sentEn: "Let me introduce myself.", sentJa: "自己紹介させてください。", note: "SVO" },
      { en: "present", ja: "提示する・発表する", sentEn: "I will present my idea.", sentJa: "私のアイデアを発表します。", note: "SVO" },
      { en: "communicate", ja: "意思疎通する", sentEn: "We communicate well.", sentJa: "私たちはうまく意思疎通しています。", note: "SV (目的語なしでもOK)" },
      { en: "inform", ja: "知らせる", sentEn: "Please inform the team.", sentJa: "チームに知らせてください。", note: "SVO" },
      { en: "reply", ja: "返信する", sentEn: "I will reply tomorrow.", sentJa: "明日返信します。", note: "SV" },
      { en: "describe", ja: "描写する・説明する", sentEn: "She described the issue.", sentJa: "彼女はその問題を説明しました。", note: "SVO" }
    ]
  },
  12: {
    title: "Day 12: to不定詞（名詞的用法：〜すること）",
    desc: "動詞の前に to を置くことで「〜すること」という名詞のカタマリを作れます。",
    words: [
      { en: "want to", ja: "〜したい", sentEn: "I want to eat sushi.", sentJa: "お寿司が食べたいです。", note: "want + to V" },
      { en: "need to", ja: "〜する必要がある", sentEn: "I need to go now.", sentJa: "もう行かなければなりません。", note: "need + to V" },
      { en: "decide to", ja: "〜することに決める", sentEn: "We decided to launch it.", sentJa: "私たちはそれを発売することに決めました。", note: "decide + to V" },
      { en: "hope to", ja: "〜することを望む", sentEn: "I hope to see you soon.", sentJa: "すぐにお会いできることを願っています。", note: "hope + to V" },
      { en: "try to", ja: "〜しようとする", sentEn: "I try to sleep early.", sentJa: "早く寝るようにしています。", note: "try + to V" },
      { en: "plan to", ja: "〜する計画だ", sentEn: "I plan to visit Tokyo.", sentJa: "東京を訪れる予定です。", note: "plan + to V" },
      { en: "agree to", ja: "〜することに同意する", sentEn: "He agreed to help us.", sentJa: "彼は私たちを助けることに同意しました。", note: "agree + to V" },
      { en: "forget to", ja: "〜するのを忘れる", sentEn: "Don't forget to lock up.", sentJa: "鍵をかけるのを忘れないで。", note: "forget + to V" },
      { en: "promise to", ja: "〜すると約束する", sentEn: "I promise to call back.", sentJa: "折り返し電話すると約束します。", note: "promise + to V" },
      { en: "learn to", ja: "〜できるようになる", sentEn: "I want to learn to code.", sentJa: "コードを書けるようになりたいです。", note: "learn + to V" }
    ]
  },
  13: {
    title: "Day 13: 動名詞（〜すること）",
    desc: "動詞に -ing をつけると「〜すること」という意味になり、特定の動詞の後ろで使います。",
    words: [
      { en: "enjoy ~ing", ja: "〜して楽しむ", sentEn: "I enjoy watching movies.", sentJa: "映画を観るのが好きです。", note: "enjoyの後ろはing" },
      { en: "finish ~ing", ja: "〜し終える", sentEn: "I finished reading it.", sentJa: "それを読み終えました。", note: "finishの後ろはing" },
      { en: "stop ~ing", ja: "〜するのをやめる", sentEn: "He stopped talking.", sentJa: "彼は話すのをやめました。", note: "stopの後ろはing" },
      { en: "mind ~ing", ja: "〜するのを気にする", sentEn: "Do you mind waiting?", sentJa: "待っていただいても構いませんか？", note: "mindの後ろはing" },
      { en: "give up ~ing", ja: "〜するのを諦める", sentEn: "I gave up smoking.", sentJa: "タバコを吸うのをやめました。", note: "give upの後ろはing" },
      { en: "practice ~ing", ja: "〜の練習をする", sentEn: "She practices speaking.", sentJa: "彼女は話す練習をしています。", note: "practiceの後ろはing" },
      { en: "consider ~ing", ja: "〜を検討する", sentEn: "We consider buying it.", sentJa: "私たちはそれの購入を検討しています。", note: "considerの後ろはing" },
      { en: "suggest ~ing", ja: "〜を提案する", sentEn: "I suggest taking a taxi.", sentJa: "タクシーに乗ることを提案します。", note: "suggestの後ろはing" },
      { en: "avoid ~ing", ja: "〜するのを避ける", sentEn: "Avoid making mistakes.", sentJa: "ミスをするのを避けてください。", note: "avoidの後ろはing" },
      { en: "keep ~ing", ja: "〜し続ける", sentEn: "Keep going straight.", sentJa: "まっすぐ進み続けてください。", note: "keepの後ろはing" }
    ]
  },
  14: {
    title: "Day 14: お金と数値に関する動詞",
    desc: "ビジネスシーンや家計管理で必ず使う「増減」や「お金」の表現です。",
    words: [
      { en: "cost", ja: "（費用が）かかる", sentEn: "It costs ten dollars.", sentJa: "それは10ドルかかります。", note: "SVO" },
      { en: "pay", ja: "支払う", sentEn: "I will pay in cash.", sentJa: "現金で支払います。", note: "SV" },
      { en: "spend", ja: "（お金・時間を）費やす", sentEn: "I spend time reading.", sentJa: "読書に時間を費やします。", note: "spend + 時間/お金 + ~ing" },
      { en: "invest", ja: "投資する", sentEn: "We invest in stocks.", sentJa: "私たちは株に投資します。", note: "invest in 〜" },
      { en: "save", ja: "節約する・保存する", sentEn: "I save money every month.", sentJa: "毎月お金を貯金しています。", note: "SVO" },
      { en: "earn", ja: "稼ぐ", sentEn: "He earns a good salary.", sentJa: "彼は良い給料を稼いでいます。", note: "SVO" },
      { en: "increase", ja: "増える・増やす", sentEn: "Sales increased this year.", sentJa: "今年の売上は増加しました。", note: "SV" },
      { en: "decrease", ja: "減る・減らす", sentEn: "Costs decreased slightly.", sentJa: "コストがわずかに減少しました。", note: "SV" },
      { en: "reduce", ja: "減らす", sentEn: "We must reduce waste.", sentJa: "私たちは無駄を減らさなければなりません。", note: "SVO" },
      { en: "charge", ja: "請求する", sentEn: "They charge no fee.", sentJa: "彼らは手数料を請求しません。", note: "SVO" }
    ]
  },
  15: {
    title: "Day 15: 比較級（より〜である）",
    desc: "AとBを比べる表現。形容詞や副詞の語尾に -er をつけるか、前に more を置きます。",
    words: [
      { en: "better", ja: "より良い（goodの比較）", sentEn: "This is better than that.", sentJa: "こちらのほうがアレより良いです。", note: "better than 〜" },
      { en: "easier", ja: "より簡単な", sentEn: "It is easier than before.", sentJa: "以前より簡単です。", note: "easier than 〜" },
      { en: "cheaper", ja: "より安い", sentEn: "This store is cheaper.", sentJa: "この店の方が安いです。", note: "SVC" },
      { en: "faster", ja: "より速い", sentEn: "He runs faster than me.", sentJa: "彼は私より速く走ります。", note: "faster than 〜" },
      { en: "higher", ja: "より高い", sentEn: "Sales are higher now.", sentJa: "現在、売上はより高いです。", note: "SVC" },
      { en: "more important", ja: "より重要な", sentEn: "Health is more important.", sentJa: "健康の方が重要です。", note: "more + 長い形容詞" },
      { en: "more expensive", ja: "より高価な", sentEn: "It is more expensive.", sentJa: "それのほうが値段が高いです。", note: "more + 長い形容詞" },
      { en: "more difficult", ja: "より難しい", sentEn: "The test is more difficult.", sentJa: "そのテストはより難しいです。", note: "more + 長い形容詞" },
      { en: "less", ja: "より少ない", sentEn: "I have less time today.", sentJa: "今日はいつもより時間がありません。", note: "less + 数えられない名詞" },
      { en: "worse", ja: "より悪い（badの比較）", sentEn: "The weather got worse.", sentJa: "天気が悪化しました。", note: "get + worse" }
    ]
  },
  16: {
    title: "Day 16: 現在進行形（今〜している）",
    desc: "「be動詞 ＋ V-ing」で、まさに今進行中の動作を表現します。",
    words: [
      { en: "working", ja: "働いている", sentEn: "I am working right now.", sentJa: "私は今働いています。", note: "am + working" },
      { en: "studying", ja: "勉強している", sentEn: "She is studying English.", sentJa: "彼女は英語を勉強しています。", note: "is + studying" },
      { en: "waiting", ja: "待っている", sentEn: "We are waiting for you.", sentJa: "私たちはあなたを待っています。", note: "are + waiting for" },
      { en: "talking", ja: "話している", sentEn: "They are talking loudly.", sentJa: "彼らは大声で話しています。", note: "are + talking" },
      { en: "listening", ja: "聴いている", sentEn: "I am listening to music.", sentJa: "私は音楽を聴いています。", note: "am + listening to" },
      { en: "driving", ja: "運転している", sentEn: "He is driving a car.", sentJa: "彼は車を運転しています。", note: "is + driving" },
      { en: "making", ja: "作っている", sentEn: "I am making dinner.", sentJa: "私は夕食を作っています。", note: "am + making" },
      { en: "looking", ja: "見ている・探している", sentEn: "I am looking for my keys.", sentJa: "私は鍵を探しています。", note: "am + looking for" },
      { en: "running", ja: "走っている・稼働している", sentEn: "The system is running.", sentJa: "システムは稼働中です。", note: "is + running" },
      { en: "coming", ja: "来ている・向かっている", sentEn: "I am coming now.", sentJa: "今向かっています。", note: "am + coming" }
    ]
  },
  17: {
    title: "Day 17: ITとPC操作の動詞",
    desc: "現代の仕事に不可欠な、パソコンやスマホに関する基本アクションです。",
    words: [
      { en: "click", ja: "クリックする", sentEn: "Click this link.", sentJa: "このリンクをクリックしてください。", note: "SVO" },
      { en: "download", ja: "ダウンロードする", sentEn: "I downloaded the app.", sentJa: "アプリをダウンロードしました。", note: "SVO" },
      { en: "install", ja: "インストールする", sentEn: "Please install the update.", sentJa: "アップデートをインストールしてください。", note: "SVO" },
      { en: "update", ja: "更新する", sentEn: "I updated my profile.", sentJa: "プロフィールを更新しました。", note: "SVO" },
      { en: "restart", ja: "再起動する", sentEn: "Restart your computer.", sentJa: "パソコンを再起動してください。", note: "SVO" },
      { en: "connect", ja: "接続する", sentEn: "Connect to the Wi-Fi.", sentJa: "Wi-Fiに接続してください。", note: "connect to 〜" },
      { en: "search", ja: "検索する", sentEn: "Search the web.", sentJa: "ウェブを検索してください。", note: "SVO" },
      { en: "delete", ja: "削除する", sentEn: "Delete this file.", sentJa: "このファイルを削除してください。", note: "SVO" },
      { en: "attach", ja: "添付する", sentEn: "I attached the photo.", sentJa: "写真を添付しました。", note: "SVO" },
      { en: "save", ja: "保存する", sentEn: "Don't forget to save it.", sentJa: "保存するのを忘れないで。", note: "SVO" }
    ]
  },
  18: {
    title: "Day 18: 現在完了形（〜したことがある・完了した）",
    desc: "「have ＋ 過去分詞」で、過去から現在につながる経験や完了を表します。",
    words: [
      { en: "have finished", ja: "もう終わらせた", sentEn: "I have finished the work.", sentJa: "もう仕事は終わりました。", note: "完了" },
      { en: "have lost", ja: "なくしてしまった", sentEn: "I have lost my phone.", sentJa: "電話をなくしてしまいました（今もない）。", note: "結果" },
      { en: "have met", ja: "会ったことがある", sentEn: "I have met him before.", sentJa: "彼には以前会ったことがあります。", note: "経験" },
      { en: "have been to", ja: "〜に行ったことがある", sentEn: "I have been to Hawaii.", sentJa: "ハワイに行ったことがあります。", note: "経験" },
      { en: "have seen", ja: "見たことがある", sentEn: "I have seen this movie.", sentJa: "この映画は見たことがあります。", note: "経験" },
      { en: "have lived", ja: "住み続けている", sentEn: "I have lived here for years.", sentJa: "ここに何年も住んでいます。", note: "継続" },
      { en: "have known", ja: "知り合いである", sentEn: "We have known each other.", sentJa: "私たちはずっと知り合いです。", note: "継続" },
      { en: "have decided", ja: "決定した", sentEn: "We have decided the date.", sentJa: "私たちは日付を決定しました。", note: "完了" },
      { en: "have heard", ja: "聞いたことがある", sentEn: "I have heard the news.", sentJa: "そのニュースは聞きました。", note: "完了・経験" },
      { en: "have arrived", ja: "到着した", sentEn: "They have just arrived.", sentJa: "彼らはちょうど到着したところです。", note: "完了" }
    ]
  },
  19: {
    title: "Day 19: 思考や認知を表す動詞",
    desc: "「私はこう思う」「理解した」と、自分の頭の中を伝える大人の表現です。",
    words: [
      { en: "think", ja: "思う・考える", sentEn: "I think it is right.", sentJa: "それは正しいと思います。", note: "I think (that) SV" },
      { en: "believe", ja: "信じる・強く思う", sentEn: "I believe you.", sentJa: "あなたを信じます。", note: "SVO" },
      { en: "guess", ja: "推測する・〜だと思う", sentEn: "I guess you are tired.", sentJa: "お疲れだと思います。", note: "I guess (that) SV" },
      { en: "imagine", ja: "想像する", sentEn: "Imagine the future.", sentJa: "未来を想像してください。", note: "SVO" },
      { en: "realize", ja: "（ハッと）気づく", sentEn: "I realized my mistake.", sentJa: "自分の間違いに気づきました。", note: "SVO" },
      { en: "recognize", ja: "認識する・見覚えがある", sentEn: "I didn't recognize you.", sentJa: "あなただと分かりませんでした。", note: "SVO" },
      { en: "remember", ja: "覚えている・思い出す", sentEn: "I remember his face.", sentJa: "彼の顔を覚えています。", note: "SVO" },
      { en: "forget", ja: "忘れる", sentEn: "I completely forgot.", sentJa: "完全に忘れていました。", note: "SV" },
      { en: "wonder", ja: "〜かなと思う", sentEn: "I wonder why.", sentJa: "なぜだろうかと思います。", note: "wonder + 疑問詞" },
      { en: "know", ja: "知っている", sentEn: "I know the answer.", sentJa: "私は答えを知っています。", note: "SVO" }
    ]
  },
  20: {
    title: "Day 20: 受動態（〜される・〜されている）",
    desc: "「be動詞 ＋ 過去分詞」で、主語が動作を「受ける」側になる表現です。",
    words: [
      { en: "is used", ja: "使われている", sentEn: "English is used worldwide.", sentJa: "英語は世界中で使われています。", note: "be + 過去分詞" },
      { en: "is made", ja: "作られている", sentEn: "It is made of wood.", sentJa: "それは木で作られています。", note: "be + 過去分詞" },
      { en: "was built", ja: "建てられた", sentEn: "This was built in 1990.", sentJa: "これは1990年に建てられました。", note: "過去の受動態" },
      { en: "is held", ja: "開催される", sentEn: "The meeting is held today.", sentJa: "会議は今日開催されます。", note: "be + 過去分詞" },
      { en: "is written", ja: "書かれている", sentEn: "It is written in English.", sentJa: "それは英語で書かれています。", note: "be + 過去分詞" },
      { en: "is known", ja: "知られている", sentEn: "He is known as a genius.", sentJa: "彼は天才として知られています。", note: "be known as 〜" },
      { en: "are sold", ja: "売られている", sentEn: "Tickets are sold here.", sentJa: "チケットはここで売られています。", note: "be + 過去分詞" },
      { en: "was delayed", ja: "遅延した", sentEn: "The flight was delayed.", sentJa: "フライトは遅延しました。", note: "過去の受動態" },
      { en: "is included", ja: "含まれている", sentEn: "Tax is included.", sentJa: "税金は含まれています。", note: "be + 過去分詞" },
      { en: "is required", ja: "要求される", sentEn: "Password is required.", sentJa: "パスワードが必要です。", note: "be + 過去分詞" }
    ]
  },
  21: {
    title: "Day 21: 時間を表す前置詞 (in, on, at)",
    desc: "いつ？を正確に伝えるための接着剤です。広さ（in ＞ on ＞ at）で覚えます。",
    words: [
      { en: "in (月・年・季節)", ja: "〜に（広い期間）", sentEn: "I was born in 1990.", sentJa: "私は1990年に生まれました。", note: "年、月など" },
      { en: "in (朝・午後)", ja: "〜に（時間帯）", sentEn: "See you in the morning.", sentJa: "朝にお会いしましょう。", note: "in the morning/afternoon" },
      { en: "on (曜日・日付)", ja: "〜に（特定の日）", sentEn: "Let's meet on Monday.", sentJa: "月曜日に会いましょう。", note: "曜日、日付" },
      { en: "at (時刻)", ja: "〜に（ピンポイント）", sentEn: "The class starts at 9 am.", sentJa: "授業は午前9時に始まります。", note: "具体的な時刻" },
      { en: "from A to B", ja: "AからBまで", sentEn: "We work from 9 to 5.", sentJa: "私たちは9時から5時まで働きます。", note: "from ~ to ~" },
      { en: "for", ja: "〜の間（期間）", sentEn: "I studied for two hours.", sentJa: "私は2時間勉強しました。", note: "for + 時間の長さ" },
      { en: "until", ja: "〜までずっと", sentEn: "I will wait until 5 pm.", sentJa: "午後5時まで待ちます。", note: "継続の期限" },
      { en: "by", ja: "〜までに（期限）", sentEn: "Finish it by tomorrow.", sentJa: "明日までに終わらせてください。", note: "動作の期限" },
      { en: "before", ja: "〜の前に", sentEn: "Call me before lunch.", sentJa: "昼食の前に電話してください。", note: "before + 名詞" },
      { en: "after", ja: "〜の後に", sentEn: "Let's talk after work.", sentJa: "仕事の後に話しましょう。", note: "after + 名詞" }
    ]
  },
  22: {
    title: "Day 22: 場所を表す前置詞 (in, on, at)",
    desc: "どこで？を正確に伝える接着剤。空間の捉え方（in ＞ on ＞ at）がカギです。",
    words: [
      { en: "in (空間の中)", ja: "〜の中で", sentEn: "He is in the meeting room.", sentJa: "彼は会議室にいます。", note: "囲まれた空間" },
      { en: "in (都市・国)", ja: "〜で（広い場所）", sentEn: "I live in Tokyo.", sentJa: "私は東京に住んでいます。", note: "都市や国" },
      { en: "on (表面に接触)", ja: "〜の上に・〜に面して", sentEn: "The book is on the desk.", sentJa: "本は机の上にあります。", note: "面にくっついている" },
      { en: "at (地点)", ja: "〜で（ピンポイント）", sentEn: "I am at the station.", sentJa: "私は駅にいます。", note: "地図上の点" },
      { en: "under", ja: "〜の下に", sentEn: "It is under the table.", sentJa: "それはテーブルの下にあります。", note: "under + 名詞" },
      { en: "over", ja: "〜を越えて・覆って", sentEn: "We flew over the ocean.", sentJa: "私たちは海の上を飛びました。", note: "over + 名詞" },
      { en: "near", ja: "〜の近くに", sentEn: "My house is near here.", sentJa: "私の家はこの近くです。", note: "near + 名詞" },
      { en: "next to", ja: "〜の隣に", sentEn: "Sit next to me.", sentJa: "私の隣に座ってください。", note: "next to + 名詞" },
      { en: "between", ja: "〜の間に", sentEn: "It is between A and B.", sentJa: "それはAとBの間にあります。", note: "between A and B" },
      { en: "across", ja: "〜の向かいに・横切って", sentEn: "Walk across the street.", sentJa: "通りを渡ってください。", note: "across + 名詞" }
    ]
  },
  23: {
    title: "Day 23: チームや人を表す動詞",
    desc: "マネジメントや同僚とのやり取りで頻出するアクションです。",
    words: [
      { en: "lead", ja: "率いる・導く", sentEn: "She leads the team.", sentJa: "彼女がチームを率いています。", note: "SVO" },
      { en: "guide", ja: "案内する・指導する", sentEn: "I will guide you.", sentJa: "私がご案内します。", note: "SVO" },
      { en: "train", ja: "訓練する・研修する", sentEn: "We train new staff.", sentJa: "私たちは新入社員を研修します。", note: "SVO" },
      { en: "hire", ja: "雇う", sentEn: "They hired three people.", sentJa: "彼らは3人を雇いました。", note: "SVO" },
      { en: "interview", ja: "面接する", sentEn: "I will interview him.", sentJa: "私が彼を面接します。", note: "SVO" },
      { en: "evaluate", ja: "評価する", sentEn: "We evaluate the results.", sentJa: "私たちは結果を評価します。", note: "SVO" },
      { en: "assign", ja: "割り当てる", sentEn: "I assigned the task.", sentJa: "私がそのタスクを割り当てました。", note: "SVO" },
      { en: "motivate", ja: "やる気を出させる", sentEn: "Good leaders motivate us.", sentJa: "良いリーダーは私たちのやる気を引き出します。", note: "SVO" },
      { en: "assist", ja: "手伝う・補佐する", sentEn: "I will assist you.", sentJa: "私があなたを補佐します。", note: "SVO" },
      { en: "respect", ja: "尊敬する・尊重する", sentEn: "We respect your opinion.", sentJa: "私たちはあなたの意見を尊重します。", note: "SVO" }
    ]
  },
  24: {
    title: "Day 24: 接続詞（文と文をつなぐ）",
    desc: "短い文を繋げて、より長く論理的な文章を作るための基本接続詞です。",
    words: [
      { en: "and", ja: "そして", sentEn: "I went home and slept.", sentJa: "私は家に帰り、そして寝ました。", note: "順接" },
      { en: "but", ja: "しかし", sentEn: "I am tired, but happy.", sentJa: "疲れていますが、幸せです。", note: "逆接" },
      { en: "or", ja: "または", sentEn: "Tea or coffee?", sentJa: "紅茶ですか、それともコーヒーですか？", note: "選択" },
      { en: "so", ja: "だから", sentEn: "It rained, so I stayed.", sentJa: "雨が降ったので、留まりました。", note: "結果" },
      { en: "because", ja: "なぜなら", sentEn: "I slept because I was tired.", sentJa: "疲れていたから寝ました。", note: "理由" },
      { en: "when", ja: "〜する時", sentEn: "Call me when you arrive.", sentJa: "到着した時に電話してください。", note: "時間" },
      { en: "if", ja: "もし〜なら", sentEn: "If it rains, we cancel.", sentJa: "もし雨なら、キャンセルします。", note: "条件" },
      { en: "although", ja: "〜だけれども", sentEn: "Although it was cold, I went.", sentJa: "寒かったけれども、行きました。", note: "譲歩" },
      { en: "while", ja: "〜している間に", sentEn: "I read while waiting.", sentJa: "待っている間に本を読みました。", note: "同時進行" },
      { en: "unless", ja: "〜しない限り", sentEn: "Unless you try, you fail.", sentJa: "挑戦しない限り、失敗します。", note: "否定の条件" }
    ]
  },
  25: {
    title: "Day 25: 疑問詞（What, Who, Where）",
    desc: "相手に情報を引き出すための質問のスタートダッシュです。",
    words: [
      { en: "What", ja: "何", sentEn: "What is the problem?", sentJa: "問題は何ですか？", note: "What + is + S" },
      { en: "What time", ja: "何時", sentEn: "What time is the meeting?", sentJa: "会議は何時ですか？", note: "What time + is + S" },
      { en: "Who", ja: "誰", sentEn: "Who is the manager?", sentJa: "マネージャーは誰ですか？", note: "Who + is + S" },
      { en: "Whose", ja: "誰の", sentEn: "Whose bag is this?", sentJa: "これは誰のバッグですか？", note: "Whose + 名詞 + is + this" },
      { en: "Where", ja: "どこ", sentEn: "Where is the office?", sentJa: "オフィスはどこですか？", note: "Where + is + S" },
      { en: "Which", ja: "どちら・どの", sentEn: "Which plan is better?", sentJa: "どちらの計画が良いですか？", note: "Which + 名詞" },
      { en: "What kind of", ja: "どんな種類の", sentEn: "What kind of work do you do?", sentJa: "どんなお仕事をされていますか？", note: "What kind of + 名詞" },
      { en: "Who did", ja: "誰が〜したか", sentEn: "Who did this?", sentJa: "誰がこれをやりましたか？", note: "Whoが主語になる場合" },
      { en: "What happened", ja: "何が起きたか", sentEn: "What happened here?", sentJa: "ここで何が起きたのですか？", note: "Whatが主語になる場合" },
      { en: "Where do you", ja: "どこで〜しますか", sentEn: "Where do you live?", sentJa: "どこに住んでいますか？", note: "Where + do + S + V" }
    ]
  },
  26: {
    title: "Day 26: 疑問詞（When, Why, How）",
    desc: "タイミング、理由、方法を尋ねるための質問フレーズです。",
    words: [
      { en: "When", ja: "いつ", sentEn: "When is the deadline?", sentJa: "締め切りはいつですか？", note: "When + is + S" },
      { en: "Why", ja: "なぜ", sentEn: "Why did you choose this?", sentJa: "なぜこれを選んだのですか？", note: "Why + did + S + V" },
      { en: "How", ja: "どのように・どう", sentEn: "How do you use this?", sentJa: "これはどうやって使うのですか？", note: "How + do + S + V" },
      { en: "How long", ja: "どのくらい（長さ）", sentEn: "How long does it take?", sentJa: "どのくらい時間がかかりますか？", note: "期間や長さを聞く" },
      { en: "How much", ja: "いくら（値段・量）", sentEn: "How much is this?", sentJa: "これはいくらですか？", note: "数えられないもの" },
      { en: "How many", ja: "いくつ（数）", sentEn: "How many people came?", sentJa: "何人来ましたか？", note: "数えられるもの" },
      { en: "How often", ja: "どのくらいの頻度で", sentEn: "How often do you go?", sentJa: "どのくらいの頻度で行きますか？", note: "頻度を聞く" },
      { en: "How far", ja: "どのくらい（距離）", sentEn: "How far is the station?", sentJa: "駅までどのくらいの距離ですか？", note: "距離を聞く" },
      { en: "Why not", ja: "〜しませんか", sentEn: "Why not join us?", sentJa: "参加しませんか？", note: "提案（Why don't we~ と同義）" },
      { en: "How about", ja: "〜はどうですか", sentEn: "How about tomorrow?", sentJa: "明日はどうですか？", note: "提案や確認" }
    ]
  },
  27: {
    title: "Day 27: 成功と失敗を表す動詞",
    desc: "ビジネスの成果や、トラブル報告の際に使う重要なアクションです。",
    words: [
      { en: "succeed", ja: "成功する", sentEn: "We succeeded finally.", sentJa: "私たちはついに成功しました。", note: "SV" },
      { en: "fail", ja: "失敗する・怠る", sentEn: "The system failed.", sentJa: "システムがダウン（失敗）しました。", note: "SV" },
      { en: "achieve", ja: "達成する", sentEn: "We achieved the goal.", sentJa: "私たちは目標を達成しました。", note: "SVO" },
      { en: "accomplish", ja: "成し遂げる", sentEn: "Task accomplished.", sentJa: "任務完了しました。", note: "SVO" },
      { en: "win", ja: "勝つ・獲得する", sentEn: "We won the contract.", sentJa: "私たちは契約を勝ち取りました。", note: "SVO" },
      { en: "lose", ja: "失う・負ける", sentEn: "I lost my data.", sentJa: "データを失いました。", note: "SVO" },
      { en: "miss", ja: "逃す・乗り遅れる", sentEn: "I missed the train.", sentJa: "電車に乗り遅れました。", note: "SVO" },
      { en: "beat", ja: "打ち負かす・超える", sentEn: "We beat the target.", sentJa: "私たちは目標を上回りました。", note: "SVO" },
      { en: "overcome", ja: "克服する", sentEn: "We overcame the issue.", sentJa: "私たちは問題を克服しました。", note: "SVO" },
      { en: "surpass", ja: "上回る", sentEn: "Sales surpassed expectations.", sentJa: "売上が予想を上回りました。", note: "SVO" }
    ]
  },
  28: {
    title: "Day 28: 関係代名詞（who, which）",
    desc: "名詞の後ろに文をくっつけて、詳しく説明する大人のテクニックです。",
    words: [
      { en: "who", ja: "〜する人", sentEn: "I know a man who can help.", sentJa: "助けてくれる男性を知っています。", note: "人を説明する" },
      { en: "which", ja: "〜するモノ", sentEn: "This is the car which I bought.", sentJa: "これが私が買った車です。", note: "モノを説明する" },
      { en: "that (人・モノ)", ja: "〜する人/モノ", sentEn: "The book that I read is good.", sentJa: "私が読んだ本は良いです。", note: "万能の接着剤" },
      { en: "where", ja: "〜する場所", sentEn: "This is the place where we met.", sentJa: "ここが私たちが会った場所です。", note: "場所を説明する関係副詞" },
      { en: "whose", ja: "その〜が…である", sentEn: "I have a friend whose father is a doctor.", sentJa: "父親が医者である友人がいます。", note: "所有を表す" },
      { en: "what", ja: "〜すること・もの", sentEn: "I understand what you mean.", sentJa: "あなたが言いたいことはわかります。", note: "the thing which と同じ" },
      { en: "whoever", ja: "〜する人は誰でも", sentEn: "Whoever wants to come can come.", sentJa: "来たい人は誰でも来ていいですよ。", note: "who + ever" },
      { en: "whatever", ja: "〜するものは何でも", sentEn: "Do whatever you like.", sentJa: "好きなように何でもやってください。", note: "what + ever" },
      { en: "anyone who", ja: "〜する人は誰でも", sentEn: "Anyone who knows please tell me.", sentJa: "知っている人は誰でも教えてください。", note: "whoeverと同じニュアンス" },
      { en: "everything that", ja: "〜する全てのこと", sentEn: "He did everything that he could.", sentJa: "彼は自分にできる全てのことをやりました。", note: "everythingを説明" }
    ]
  },
  29: {
    title: "Day 29: 確実性を高めるビジネス動詞",
    desc: "プロフェッショナルとして「間違いがないこと」を伝える堅めの動詞です。",
    words: [
      { en: "confirm", ja: "確認する（確証を得る）", sentEn: "Please confirm the details.", sentJa: "詳細をご確認ください。", note: "SVO" },
      { en: "ensure", ja: "確実にする・保証する", sentEn: "Ensure the door is locked.", sentJa: "ドアが確実に施錠されているようにしてください。", note: "ensure (that) SV" },
      { en: "verify", ja: "（正しいか）検証する", sentEn: "We verified the data.", sentJa: "私たちはデータを検証しました。", note: "SVO" },
      { en: "guarantee", ja: "保証する", sentEn: "We guarantee quality.", sentJa: "私たちは品質を保証します。", note: "SVO" },
      { en: "clarify", ja: "明らかにする", sentEn: "Could you clarify that point?", sentJa: "その点を明確にしていただけますか？", note: "SVO" },
      { en: "specify", ja: "明確に述べる・指定する", sentEn: "Please specify the date.", sentJa: "日付を指定してください。", note: "SVO" },
      { en: "indicate", ja: "示す・指し示す", sentEn: "The graph indicates growth.", sentJa: "グラフは成長を示しています。", note: "SVO" },
      { en: "demonstrate", ja: "実演する・証明する", sentEn: "I will demonstrate how to use it.", sentJa: "使い方を実演します。", note: "SVO" },
      { en: "illustrate", ja: "図解する・説明する", sentEn: "This example illustrates the point.", sentJa: "この例が要点を説明しています。", note: "SVO" },
      { en: "summarize", ja: "要約する", sentEn: "Let me summarize the meeting.", sentJa: "会議の要約をさせてください。", note: "SVO" }
    ]
  },
  30: {
    title: "Day 30: ビジネス頻出の熟語（句動詞）",
    desc: "最終日！ネイティブが仕事で毎日のように使う「動詞＋前置詞」の組み合わせです。",
    words: [
      { en: "look forward to", ja: "〜を楽しみにする", sentEn: "I look forward to seeing you.", sentJa: "お会いできるのを楽しみにしています。", note: "to の後ろは名詞かing" },
      { en: "reach out (to)", ja: "連絡を取る", sentEn: "I will reach out to you later.", sentJa: "後で私からご連絡します。", note: "contact よりカジュアル" },
      { en: "follow up", ja: "追跡調査する・フォローする", sentEn: "I will follow up on this issue.", sentJa: "この件について追って対応します。", note: "進捗を追うイメージ" },
      { en: "figure out", ja: "理解する・解決策を見出す", sentEn: "We need to figure out a plan.", sentJa: "計画を考え出さなければなりません。", note: "考え抜いて答えを出す" },
      { en: "point out", ja: "指摘する", sentEn: "He pointed out a mistake.", sentJa: "彼は間違いを指摘しました。", note: "指をさすイメージ" },
      { en: "set up", ja: "設定する・準備する", sentEn: "Let's set up a meeting.", sentJa: "会議を設定しましょう。", note: "ゼロから立ち上げる" },
      { en: "take over", ja: "引き継ぐ", sentEn: "She will take over my role.", sentJa: "彼女が私の役割を引き継ぎます。", note: "役割や権限を譲り受ける" },
      { en: "turn out", ja: "（結果的に）〜だと判明する", sentEn: "It turned out fine.", sentJa: "結果的にはうまくいきました。", note: "蓋を開けてみたら〜だった" },
      { en: "wrap up", ja: "締めくくる・まとめる", sentEn: "Let's wrap up the meeting.", sentJa: "会議を締めくくりましょう。", note: "包み込んで終わらせる" },
      { en: "catch up", ja: "近況を報告し合う・追いつく", sentEn: "Let's catch up soon.", sentJa: "近いうちに近況報告しましょう。", note: "遅れを取り戻すイメージ" }
    ]
  }
};
// ==========================================
// 画面制御のプログラム
// ==========================================
let currentDay = 1;
const totalDays = 30;

// トップページのボタンを自動生成
window.addEventListener('DOMContentLoaded', () => {
  const grid = document.getElementById('day-buttons');
  for (let i = 1; i <= totalDays; i++) {
    const btn = document.createElement('a');
    btn.href = "#";
    btn.className = "day-link";
    btn.innerText = `Day ${i.toString().padStart(2, '0')}`;
    
    if (!lessonData[i]) {
      btn.style.opacity = "0.5";
      btn.style.cursor = "not-allowed";
      btn.onclick = (e) => { e.preventDefault(); alert('準備中です！'); };
    } else {
      btn.onclick = (e) => {
        e.preventDefault();
        openLesson(i);
      };
    }
    grid.appendChild(btn);
  }
});

// レッスン画面を開く処理
function openLesson(dayIndex) {
  currentDay = dayIndex;
  const data = lessonData[dayIndex];
  
  document.getElementById('lesson-title').innerText = data.title;
  document.getElementById('lesson-desc').innerText = data.desc;
  
  const content = document.getElementById('lesson-content');
  content.innerHTML = ""; 

  data.words.forEach(word => {
    // 文字列内のシングルクォーテーションをエスケープ（音声読み上げエラー防止）
    const safeSentEn = word.sentEn.replace(/'/g, "\\'");
    
    const cardHTML = `
      <div class="lesson-card">
        <div class="word-header">
          <div class="word-en">
            ${word.en}
            <button class="play-btn" onclick="speakText('${word.en}')" title="音声を再生">🔊</button>
          </div>
          <div class="word-ja">${word.ja}</div>
        </div>
        <div class="sentence-box">
          <div class="sentence-en">
            ${word.sentEn}
            <button class="play-btn" onclick="speakText('${safeSentEn}')" title="音声を再生">🔊</button>
          </div>
          <div class="sentence-ja">${word.sentJa}</div>
          <div class="syntax-note">${word.note}</div>
        </div>
      </div>
    `;
    content.innerHTML += cardHTML;
  });

  const nextBtn = document.getElementById('next-btn');
  if (lessonData[currentDay + 1]) {
    nextBtn.style.display = "inline-block";
  } else {
    nextBtn.style.display = "none";
  }

  document.getElementById('home-view').classList.add('hidden');
  document.getElementById('lesson-view').classList.remove('hidden');
  window.scrollTo(0, 0);
}

// トップへ戻る
window.goHome = function() {
  document.getElementById('lesson-view').classList.add('hidden');
  document.getElementById('home-view').classList.remove('hidden');
  window.scrollTo(0, 0);
};

// 次の日へ
window.goNextDay = function() {
  if (lessonData[currentDay + 1]) {
    openLesson(currentDay + 1);
  }
};

// ==========================================
// 音声読み上げプログラム（高品質ボイス対応）
// ==========================================
let englishVoices = [];
function loadVoices() {
  const allVoices = window.speechSynthesis.getVoices();
  englishVoices = allVoices.filter(voice => voice.lang.includes('en-'));
}
if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = loadVoices;
  loadVoices();
}

// onclickから呼び出せるようにグローバルに関数を登録
window.speakText = function(text) {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US';
    utterance.rate = 0.9;
    
    if (englishVoices.length > 0) {
      const bestVoice = englishVoices.find(v => v.name.includes('Samantha') || v.name.includes('Google US English')) || englishVoices[0];
      utterance.voice = bestVoice;
    }
    window.speechSynthesis.speak(utterance);
  }
};