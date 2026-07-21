# Genspark研修 YouTube比較調査と再設計案

- 調査日: 2026-07-21
- 対象期間: 2026-05-21以降に公開された解説動画
- 調査方法: `yt-dlp` で動画メタデータ・説明文・字幕を取得し、10本の内容を比較。Genspark公式Help CenterとChangelogで仕様を照合した。
- 位置づけ: スライド本体を変更する前の調査・承認用メモ

## 結論

現行版の違和感は、SkillsとWorkflowsを抽象的な中心テーマにしすぎ、「Gensparkの主要機能を一通り選び、操作し、成果物まで作る」という第一ゴールから離れていることにある。

研修の主語を次のように戻す。

> 受講者が、作りたい成果物からGensparkの主要機能を選べる。全員がAI Slidesと既存Skillを一巡操作し、さらにDocs / Sheets / 画像生成から1機能を選んで、修正・確認・出力まで行う。WorkflowはTest Run・承認・停止の考え方を理解し、本番稼働は組織承認後とする。

SkillsとWorkflowsは重要である。既存のBuilt-in Slide Skill / Community Skillは生成前に選び、「既にある良い型を使う」基本操作として先に教える。自作SkillとWorkflowは、各機能の一般操作の後に「成功した一件を再利用・自動化する」発展として教える。

## 直近YouTubeの評価

| 動画 | 公開 / 尺 | 商業表示 | 参考にする点 | 研修では真似しない点 |
|---|---:|---|---|---|
| [みずおじさん: 資料作成・表作成・リサーチ](https://www.youtube.com/watch?v=8g-c2WeQy7A) | 07-15 / 22:10 | 提供・#PR | Slidesを完成→Skill化→別テーマで再実行の順序。生成後の文字重なりも見せる | Skillで「同じ品質」になるとは言い切らない。Fact Checkも人の確認を代替しない |
| [Professional AI CHANNEL: AI Slides / AI Sheets](https://www.youtube.com/watch?v=mWxexHzsFUA) | 06-30 / 08:32 | #PR・提供 | Guide Modeを「目的→内容→構造→見た目→生成」と簡潔に説明 | 完成後の内容検証、編集、書き出し崩れが抜けている |
| [Jake Dawson: Genspark AI Complete Tutorial](https://www.youtube.com/watch?v=jzqFU_fgkxU) | 06-24 / 16:12 | 紹介導線 | Guide→Creative→調査確認→生成→範囲修正→出力の画面順 | 専門ツールを完全に置き換えるという販促表現は採用しない |
| [Leo Tohyama: Gensparkでできる12のこと](https://www.youtube.com/watch?v=3CJ_N_4guHo) | 06-28 / 20:03 | 提供 | 一つの題材からSheets→Slides→画像→Fact Checkと成果物を引き継ぐ | 12機能の羅列は初心者に多すぎる。料金・クレジット数は固定掲載しない |
| [平岡雄太: 開発・デザイン・分析](https://www.youtube.com/watch?v=MdAihB8JCr4) | 06-12 / 26:53 | 提供・affiliate | Agentを「依頼を小さな作業に分け、Toolを使って完成物まで進める」と画面で見せる | 請求書の適法性や分析精度をAIだけで保証しない |
| [シンきち: 最新AI機能](https://www.youtube.com/watch?v=EREv08OH2ro) | 06-30 / 21:45 | 提供・#PR | 完成結果を先に見せ、機能選択→素材→指示→追加修正と進める | 明細・録音・メール・PC内ファイルは、社内許可なしの実演に使わない |
| [KEITO: AI Slides 5.0 / AI Design / Skill](https://www.youtube.com/watch?v=l7i6Uv6Z3lc) | 07-16 / 27:21 | #PR | 既存PPT/PDFからSlide Skillを作り、別題材へ展開する実演 | Professionalのコード編集画面は見えるが、「Professional＝コード生成」の根拠にはならない |
| [テック好きイシハラさん: AI Slides 5.0](https://www.youtube.com/watch?v=M8P7fBeChGg) | 06-26 / 08:51 | #PR・affiliate | Guide Modeの質問→構成→調査→完成を短時間で見せる | Guide Modeの初登場をSlides 5.0とするのは不正確。公式Changelogでは2026-03-05 |
| [ためになるAppleの話: AI Design / Skill](https://www.youtube.com/watch?v=CaWCkYu5nqc) | 07-01 / 11:41 | 提供 | 生成ミスを隠さず、範囲指定で直す。Skillを「指示の揺れを減らす」と説明 | 専用環境だから企業利用も安全とは限らない |
| [Julia McCoy: Genspark Just Killed 11 AI Subscriptions](https://www.youtube.com/watch?v=X3ohzzutd9I) | 07-16 / 09:56 | #PR | 回答から成果物への転換と、最後は専門ツールの調整が優位な場合もあるという留保 | 「11個のサブスクが不要」などの販促数値は使わない |

対象10本のdescriptionを確認し、9本にPR、提供、affiliate等のいずれかの表記があった。残り1本にも紹介導線がある。「機能をどう見せるか」は参考にし、優位性・精度・料金の主張は公式と実測で再確認する。

## 優れていた教え方

機能ごとに、同じ順序で教える。

> 困りごと → 完成物を先に見せる → 実際の入力 → AIの質問・計画 → 生成 → 人が点検 → 修正 → 書き出し・次工程

各機能スライドは次の4項目で統一する。

1. 何を入れるか
2. 何が完成するか
3. どこを人が確認するか
4. 次にどこへ渡せるか

## AI Slidesの正確な教え方

公式Helpでは、最初に決める軸が3つある。

| 軸 | 選択 | 教え方 |
|---|---|---|
| STYLE | Professional / Creative | 業務資料の構造・編集性を重視するか、ビジュアル表現を重視するか |
| PROCESS | One Prompt / Guide Mode | すぐ作るか、生成前に目的・根拠・構成・デザインを相談するか |
| QUALITY | Standard / Ultra | 速度・クレジット効率か、より強い推論・出力品質か |

### Professional / Creative

- Professional: 提案書、社内報告、コンサル資料など、構造と読みやすさを優先する。要素単位の編集に向く。
- Creative: 各ページをポスターのような完成ビジュアルとして作る。画像生成モデル、参考画像、16:9・4:3・1:1・3:4・9:16・21:9などのアスペクト比を選べる。Draw-to-editで範囲を指定して再生成できる。
- 作成後にProfessional / Creativeを切り替えることはできない。比較したい場合は別プロジェクトで作る。

避ける説明:

- 「Professionalはコードで作られる」: コード編集画面を確認できる動画はあるが、公式のモード定義ではない。
- 「Creativeは1枚画像で後から直せない」: Draw-to-editで範囲再生成できる。Professionalと編集方法が違うと説明する。
- 「比率でProfessionalとCreativeを混ぜる」: 公式の「比率」はCreativeのアスペクト比。モードの混合比率ではない。

### Guide Mode

> Guide Modeは「丁寧に作るボタン」ではない。生成前に、対象者・目的・根拠・構成・デザインを人とAIで合意する進め方。

5段階は次のとおり。

1. Strategy: 誰に、何を目的として伝えるか
2. Substance: 根拠、材料、伝える内容
3. Structure: ストーリーとページ構成
4. Design: 表現、トーン、デザイン
5. Build: スライド生成

短い下書きならOFF。提案書、役員報告、初めて作る重要資料ならONを基本とする。「必ず品質が上がる」ではなく、「生成前に前提と構成を固め、手戻りを減らしやすくする」と説明する。

### 生成後までがAI Slides

完成条件は「生成された」ではない。

> 生成 → 要素選択または範囲指定で修正 → Verify Content → 文字重なり・出典・画像権利の確認 → PPTX / PDF / Google Slidesへ出力 → 書き出し後の崩れ確認

公式照合先: [AI Slides](https://www.genspark.ai/helpcenter/ai-slides) / [AI Slides Changelog](https://www.genspark.ai/docs/ai_slides_changelog)

## AI Sheets・AI Docs・画像生成の教え方

Slides以外も「できること」の紹介で止めず、入力・設定・修正・検証・出力を同じ型で教える。

| 機能 | 入力と最初の選択 | 修正 | 人の確認 | 出力 |
|---|---|---|---|---|
| AI Sheets | 匿名化したXLSX。「どの列を何の単位で集計し、どの表・グラフにするか」を指定 | セル範囲をSend to Chat、数式の追加・修正、表記統一、グラフ変更 | 元件数、欠損・重複、単位、合計、代表数式、フィルタ範囲、外れ値、グラフ軸。AIの「洞察」と数値を分ける | XLSXへ出力し、Excelで再計算。VBA、Power Query / Power Pivot、ODBC / OLEDB / External Linksは非対応 |
| AI Docs | Rich Text / Markdownを用途で選び、対象者・文書の目的・見出し・参考資料を渡す | 文範囲を選んでAI Edit、または直接編集。Save Pointで差分を見て必要ならRollback | 氏名・日付・数値・引用・契約/法務表現・未確認情報。Rollback後の新しい変更は復元できない点も確認 | HTML / Word / PDFへ出力し、リンク・改ページ・表・フォントを再確認 |
| AI Image | 用途、被写体、構図、スタイル、文字、アスペクト比、解像度、必要に応じて権利確認済みの参考画像を渡す | モデルを変えて比較、範囲編集、inpaint / outpaint、背景変更、文字修正、アップスケール | 文字化け、指・顔・商品の変形、商標・ロゴ、人物の同意、参考画像の権利、会社ブランド、表示用途とサイズ | PNG/JPG等で保存し、実際に配置するスライドやWeb画面で最終確認 |

### AI Sheetsの実演ミニシナリオ

1. 飲食店の週次支出デモXLSXを入れる
2. 店舗別・費目別の合計と前週差を作る
3. 欠損・重複・外れ値を別表にする
4. 代表数式と総合計を手計算・元表と突合する
5. セル範囲を指定して1箇所修正する
6. XLSXで書き出し、Excelで数式・表示・グラフを確認する

### AI Docsの実演ミニシナリオ

1. 会議メモから「決定事項・未決定・担当・期日」の社内報告をRich Textで作る
2. 一段落を選んで「事実と提案を分ける」AI Editを行う
3. 直接編集後のSave Pointを比較する
4. 氏名、日付、数値、未決定事項を原文と突合する
5. Wordへ出力し、表・見出し・改ページを確認する

### AI Imageの実演ミニシナリオ

1. 架空商品の広告キービジュアルを16:9で作る
2. 同じプロンプトで複数モデルを比較し、モデルによる得意不得意を見る
3. 範囲指定で商品の色または背景を1箇所変える
4. 文字、商品形状、不要なロゴ、参考画像の権利を確認する
5. 透過・解像度・比率を用途に合わせて保存する

公式照合先: [AI Sheets](https://www.genspark.ai/helpcenter/ai-sheets) / [AI Docs](https://www.genspark.ai/helpcenter/ai-docs) / [AI Image Generator](https://www.genspark.ai/tools/ai-image-generator)

## AI ImageとGenspark Designを分ける

- AI Image: 1枚の画像の生成・編集が主目的。テキストと参考画像から作り、範囲修正、背景変更、拡張、アップスケール等を行う。
- Genspark Design: Webサイト、アプリ、UIプロトタイプ、ポスター、動画、ドキュメントまで扱うクリエイティブキャンバス。Tweaks / Comment / Edit / Drawで修正し、Verifierで品質確認し、Build itで実行コードにすることもできる。

今回の主軸はAI Image。Genspark Designは「画像より広いデザイン成果物を作る別機能」として軽く紹介する。Build itで生成されたコードは、認証、データ保存、フォーム送信を特に開発者がレビューしてから公開する。

公式照合先: [Genspark Design](https://www.genspark.ai/helpcenter/genspark-design)

## SkillsとWorkflowsの位置づけ

### Skill

1. AI Slidesの生成前にBuilt-in Slide Skillを選び、構成とデザインの選択肢として使う
2. 一般のCommunity Skillを探す
3. Add & Useで実行する
4. 実行ステップと出力ファイルを見る
5. まず通常操作で良い成果物を作る
6. その作り方を自分用SkillまたはSlide Skillにする
7. 別入力で再実行し、維持された点と変わった点を比較する
8. Team SkillやPublic Linkによる社外共有は、Owner・Version・入力条件・合格基準・更新ルールを確認する

Slide Skillと一般Skillは分けて説明する。また、現行研修の`Skill Card`はGenspark画面の項目ではなく、社内レビュー用の研修フォーマットであると明記する。

公式照合先: [Skills](https://www.genspark.ai/helpcenter/skills)

### Workflow

YouTube解説で10本中、Workflowの実操作を十分に教えるものはなかった。YouTubeの受け売りではなく、公式仕様とAPHDアカウントの実画面で検証する。

教える順序:

1. トリガーと完了条件を言葉で書く
2. AIが作ったトリガー・分岐・Actionを読む
3. Test Runを模擬データで実行する
4. 正常系、例外系、停止条件を確認する
5. Pending ConfirmationとRun Historyの見方を確認する
6. Turn Onは社内承認後だけとする

公式照合先: [Workflows](https://www.genspark.ai/helpcenter/workflows)

## 推奨する120分設計

「講師が研修する時間は実質60分」に合わせ、一方向の説明90分にしない。前半60分に短い画面実演を織り込み、後半60分は受講者の操作・相互確認・質問に使う。

### 講師パート 60分（説明45分＋短い画面実演15分）

| 時間 | 内容 |
|---|---|
| 0–5分 | 研修ゴール、GeminiとGensparkの使い分け |
| 5–10分 | 機能マップと全機能共通の操作 |
| 10–24分 | AI Slides、Built-in Slide Skill、3つの選択、Guide Mode、修正・検証・出力 |
| 24–30分 | AI Sheetsと検算 |
| 30–34分 | AI Docs |
| 34–38分 | AI Image |
| 38–41分 | Genspark Designとその他機能 |
| 41–49分 | Super AgentとLLM・Tool・Agentの仕組みを「計画→Tool呼び出し→観察→次行動」の実例で2枚説明 |
| 49–55分 | Community / Slide Skillの利用、自作、再実行、共有 |
| 55–60分 | Workflow、Test Run、Pending Confirmation、Run History、Turn Onの境界 |

### 全員のガイド付き操作 30分

- 15分: 講師の画面と同じ順でAI Slidesを操作し、Professional / CreativeとGuide Modeの選択、構成確認、1箇所修正、出力を行う
- 5分: Built-in Slide SkillまたはCommunity Skillを選び、Add & Useから実行ステップと出力を確認する
- 10分: 事前に分けたSheets / Docs / Imageのいずれかのトラックで、短い成果物の生成まで行う

生成待ちで時間配分を崩さないため、次の完成済みバックアップを講師PCと配布フォルダの両方に用意する。

- Professional版とCreative版の完成済みSlidesプロジェクト・スクリーンショット・出力済みPPTX
- Built-in Slide Skill / Community Skill適用済みの完成例と実行ステップ画面
- Sheets / Docs / Imageの各トラックの入力前、生成後、修正後、出力後のサンプル
- Workflowは実環境が使えない場合に備え、正常系・例外系・Hard Stopを書いた現行のテスト証拠Excel

### 選択トラックの仕上げ・相互確認・質問 30分

- 15分: Sheets / Docs / Imageの選択トラックで、1箇所修正、人の確認、書き出し後の確認まで行う
- 5分: 隣同士で「入力・完成物・人の確認・次工程」を説明し合う
- 10分: 質問と利用範囲の確認。時間と環境が許せば、講師がWorkflowのTest Runを追加実演

## スライド本体の再構成案（承認待ち）

1. 表紙
2. 研修の目的と合格条件
3. 120分の進め方
4. GeminiとGensparkの使い分け
5. Genspark機能マップ
6. 全機能共通の「選ぶ→入れる→任せる→確かめる→出す」
7. AI Slidesでできること
8. Slidesの3つの選択
9. Professional / Creative
10. Guide Modeの5段階
11. Slidesの修正・Verify・出力
12. AI Sheets
13. Sheetsの検算
14. AI Docs
15. AI Image
16. Genspark Designとその他機能の全体像
17. LLM・Tool・Agentの仕組み
18. 一つの依頼が「計画→Tool→観察→次行動」で進む実例
19. Community / Slide Skillを探して使う
20. 成功した一件をSkillにする
21. Workflowで複数工程をつなぐ
22. Test Run・承認・履歴・停止
23. APHDで入れてよいデータと外部連携の境界
24. まとめと操作チェック

この順序で、既存の抽象的なAgent比較は前半から外し、17〜18枚目の2枚で実務の流れと紐づける。SkillsとWorkflowsは4枚使い、「既存の型を使う→良かった型を作る→複数工程を回す」の操作順で見せる。

24枚すべてを同じ密度で話さない。講師ノートに`MUST`と`IF TIME`を持たせる。時間超過時は、7「Slidesでできること」を8に統合、13「Sheetsの検算」をSheetsトラック用補足に移動、16「Genspark Designとその他」を補足資料に回す。その他の21枚を必須とする。

## 合格条件

120分で「全員が全機能を深く操作」は現実的ではない。広さと実操作を分けて4段階にする。

### A. 全員が機能を選べる

- 用途からSlides / Docs / Sheets / AI Image / Genspark Designを選べる
- SkillとWorkflowの違い、WorkflowのTest RunとTurn Onの違いを説明できる
- 外部Connector・公開リンク・ローカル操作に承認が必要な理由を説明できる

### B. 全員が中核機能を操作できる

- AI SlidesでProfessional / CreativeとGuide Modeを用途から選べる
- Built-in Slide SkillまたはCommunity SkillをAdd & Useで実行できる
- AI Slidesで生成、1箇所修正、Verify、PPTX / PDF出力を一巡できる

### C. 全員が選択した1機能を仕上げられる

- Docs / Sheets / Imageから一つを選び、成果物を1件作る
- 生成結果を1箇所修正し、機能に合わせて内容・出典・数式・見た目を確認する
- Word / PDF / XLSX / PNG等へ出力し、書き出し後を確認する

### D. 講師実演または承認後の追加練習

- 自作Skillの作成・別入力での再実行
- WorkflowのTest Run、Pending Confirmation、Run Historyの確認
- WorkflowのTurn On、Connector接続、Claw、Meeting Botは組織承認後の別練習

## 承認ポイント

スライド本体は未変更。次の方針の承認後に作り直す。

1. 研修ゴールを「全機能の選択判断」「全員のSlides / 既存Skill操作」「選択した1機能の仕上げ」「自動化は承認境界の理解」に分ける
2. AI Slidesを3〜5枚で詳しく扱う
3. Skills / Workflowsは重要機能として後半4枚で扱う
4. LLM / Tool / Agentは実例の後に2枚・8分で説明する
5. 実演は「生成」で止めず、修正・Verify・出力・検算まで行う
6. 外部Connectorの実接続、WorkflowのTurn On、Claw、Meeting Botは情シス確認後だけ扱う
