# Genspark Workspace 6.0・Teamプラン調査メモ（自分用）

- 最終確認: 2026-07-21 14:12 JST
- 契約前提: APHDはGenspark Teamプラン
- 目的: 6.0で見えている新しい機能とTeamプランの制約を整理し、120分研修で「実習・デモ・紹介・対象外」の境界を決める
- 情報源: Genspark 6.0公式ブログ、Genspark本体のログイン済み画面、公式製品ページ、Help Center、料金ページ、公式イベントページ
- 注意: 公式ブログは2026-07-20付で公開済み。14:12時点では日本の公式ローンチイベント開始前で、GenMail・GenTeam・Second Brain固有の詳細Helpと利用条件は未整備である

## 結論

今回の研修は、AI Slides・AI Docs・AI Sheets・画像生成・Skills・Workflowを「参加者が操作する中心機能」とする。

6.0の公式構成は「SecondBrain＝記憶」「Super Agent＝判断・実行」「各Suite＝成果物」「GenTeam＝人とAIの協働」の4層である。Design、AgentBase、GenMailは公式ブログで`New`と明記されている。一方、Slides・Sheets・Docs・Super Agent等は既存機能を6.0へ統合・強化したものなので、すべてを新機能とは説明しない。

Second BrainとGenMailはメール、会議、文書、カレンダー等の業務情報、AgentBaseは取り込んだファイル・アプリ・データベース、GenTeamはAI Agentのツールや実行環境に関わる。TeamプランはConnectorを組織単位でしか制御できず、組織管理者によるAgent単位の中央統制はEnterprise向けである。初回研修で50名全員に実接続させる構成にはしない。

推奨する線引きは次のとおり。

| 区分 | 対象 |
|---|---|
| 全員実習 | AI Slides、AI Docs、AI Sheets、画像生成、事前確認済みの公式またはTeam Skill、WorkflowのTest Run |
| 講師デモ | GenMailの要約・下書き、Second Brainの検索、AgentBaseのテンプレート作成、Genspark Designの出力例。すべて匿名化済みの専用環境または完成済み録画を使用 |
| 概念紹介 | GenTeam、人とAIエージェントの協働、SecondBrain Note、Claw、Meeting Notes |
| 初回研修の対象外 | 実メール送信、自動返信、WorkflowのTurn On、OAuth実接続、会議への自動参加・録音開始、ローカルPC接続、社外共有 |

## 6.0の公式アーキテクチャ

公式ブログはGenspark 6.0を次の4層で説明している。

| 層 | 役割 | 機能 |
|---|---|---|
| 記憶 | 仕事の文脈を継続して持つ | SecondBrain、SecondBrain Note |
| 知能 | 文脈を使って判断・実行する | Super Agent |
| 成果物 | 実際の資料・システム・コンテンツを作る | Build Suite、Office Suite、Content Suite |
| 協働 | 人とAIエージェントが同じ場所で働く | GenTeam |

公式ブログは`SecondBrain`、一部の画面は`Second Brain`と表記する。本メモでは概念名を本文中で`Second Brain`と記す。

各Suiteの構成:

- Build Suite: Design（New）、Code、AgentBase（New）
- Office Suite: Slides、Sheets、Docs、GenMail（New）
- Content Suite: Chat、Image、Video、Music

公式根拠: [Genspark AI Workspace 6.0 登場](https://www.genspark.ai/ja/blog/genspark-ai-workspace-6)

## Genspark本体で確認した現在の機能

### 1. Second Brain

本体画面では、Second Brainを次のように説明している。

> 書いたこと、アップロードしたこと、話したことを1つの連続した記憶として扱い、いつでも質問できる。

現在画面で確認できたソースは次のとおり。

| 種類 | 現在画面で確認できたもの | 動作の説明 |
|---|---|---|
| ブレイン内 | 会議メモ、Genspark履歴、Gmail、Outlook | インポート後、常に検索可能 |
| Connector | Notion、Microsoft Teams、GitHub、Slack、Salesforce、Google Docs、Google Sheets、HubSpot、Google Calendar、Outlook Calendar | 質問時にリアルタイムで読み取り |
| ファイル | コンピューターからのファイルアップロード | ブレインの参照材料として追加 |

研修での説明は「Gensparkの履歴や接続した仕事情報を横断参照する記憶レイヤー」とする。単なるチャット履歴ではなく、メール・会議・ファイル・業務アプリをまたぐ点が重要である。

理解の補助としてCodexと比べる場合も、同じ機能とは説明しない。Codexが現在のスレッドや作業リポジトリの文脈を扱うのに対し、Second Brainは利用者が許可して取り込み・接続したGenspark履歴、メール、会議、文書、業務アプリを横断するデータハブとして設計されている。この比較は公式の同等性を示すものではない。また、「話したことが自動的に無条件ですべて保存される」とは説明せず、取り込み対象、保存、削除の社内ルールを決め、製品上でどこまで制御できるかを別途確認する。

初回研修では専用の匿名化環境を用意できた場合のみ講師デモにする。受講者本人のGmailやカレンダーは接続しない。

### 2. GenMail

公式のGenMail画面で確認できた主な機能:

- 過去メールから利用者の文体、仕事の進め方、主要な関係者を学ぶ「メール・ブレイン」
- 重要メールの優先表示
- 利用者の文体に合わせた返信下書き
- 朝のブリーフ
- 会議準備、人物ブリーフ、メール内容のスライド化、ToDo化
- GmailとOutlookの統合受信トレイ
- カレンダー表示、予定作成、招待
- 受信トレイ内で動くSuper Agent
- macOS、Windows、iOS、Android向けアプリ

公式ページ: [GenMail](https://www.genspark.ai/genmail)

研修では「メールを読むAI」ではなく、メールを入口に、調査・要約・下書き・予定・資料作成までつなぐ業務エージェントとして説明する。

Teamプラン加入だけで全アカウントへ即時開放されるとは、現在の公式公開文書から確認できない。研修前に対象アカウントでGenMail、Email Brain、Skills / Routinesが実際に開くかを確認する。

ただし実メールの自動送信や自動返信は扱わない。匿名化されたデモ受信箱で、重要メールの抽出と返信下書きまでを講師が見せる。

### 3. GenTeam

GenTeam本体では、次の構成を確認した。

- チャンネル、DM、メンバー、ファイル、アクティビティ
- 人とAIエージェントを同じチャンネルへ追加
- General Assistant、Email Assistant、Weekly Report等のエージェント
- エージェントは原則として`@メンション`された時に応答
- 既存エージェントを追加するか、独自のAIメンバーを作成
- AIメンバーごとにモデル、Skills、ツールを設定
- Todo / In Progress / In Review / Done / Closedで管理するタスクボード
- Cloud Sandbox、ローカル実行環境、Claw VM等の作業環境
- iOS / Androidアプリ
- ローカルコンピューターを接続し、ローカルエージェントを動かす機能

公式の読み取り専用「予算承認」サンプルでは、Spreadsheet Analyst、Document Editor、Slide Assistant、General Assistantが同じチャンネルで分担していた。

1. Spreadsheet Analystが予算モデルを更新する
2. Document EditorとSlide Assistantが同じ数値を使って文書とスライドを並行更新する
3. General Assistantが複数ファイルの数値を横断確認する
4. 人が80%案のどちらを採用するか判断する

これは製品が用意したシナリオ例であり、処理時間や品質の保証事例としては使わない。研修では「人と複数の専門エージェントが、会話と成果物を同じ場所で受け渡す」という概念説明に使う。

GenTeamは「ダッシュボードやCRMを作る機能」ではない。AgentBaseは構造化データ、ビュー、ダッシュボード、Workflowを持つ業務システム、GenTeamは人とAIが会話・タスク・成果物を受け渡す協働場と区別する。両者のネイティブ連携範囲は未確認のため、組み合わせを公式仕様としては説明しない。

既存の[Teams Help](https://www.genspark.ai/helpcenter/teams)が説明するDM・グループチャット・ファイル共有よりも、現在のGenTeam画面はエージェント参加、タスク、実行環境、ローカルコンピューター接続まで広がっている。[6.0公式ブログ](https://www.genspark.ai/ja/blog/genspark-ai-workspace-6)もGenTeamを協働レイヤーとして位置づけているが、権限・上限・クレジットの詳細Helpはまだ確認できていない。

### 4. AgentBase

Genspark本体のAgentBase画面では、受信トレイ、ファイル、外部アプリ、データベースから、カスタムダッシュボード・CRM・業務システムを作る機能として表示されている。

確認できた入口:

- Gmail、Outlook等の受信トレイ
- Excel、PDF、CSV、Word、フォルダ
- HubSpot、Salesforce等の外部アプリ
- 自然言語でゼロから作成

確認できたテンプレート例:

- 営業パイプライン、CRM、リード管理
- 予算・支出、契約・請求書
- プロジェクト、OKR、タスクボード
- 在庫、発注、サプライチェーン
- 人事、採用、研修、シフト
- マーケティング、コンテンツカレンダー

公式Helpでは、AI Sheetsを単一テーブルの計算、AgentBaseを複数の関連テーブル・ビュー・ダッシュボード・Workflow・チーム共有を持つ継続的な業務システムと区別している。作成順は`Tables → Views / Dashboards → Workflows`である。

研修では「シートを作る機能」ではなく、「データ構造、複数ビュー、ダッシュボード、業務アプリをまとめて作る機能」と説明する。AI Sheetsとの違いを見せるため、テンプレート一覧か完成済みサンプルを2分程度紹介する。WorkflowはTestを先に行い、メール等はdraft-onlyから始めるという公式推奨も伝える。

公式参考: [AgentBase Help](https://www.genspark.ai/helpcenter/agentbase) / [Genspark AgentBaseを使ったAI CRM Builder](https://jpw.genspark.ai/tools/ai-crm-builder)

### 5. Genspark Design

6.0公式ブログではBuild Suiteの`New`機能として位置づけられている。粗いアイデアから、デザイン、UIプロトタイプ、ポスター、動画等を作る。

研修ではAI Imageとの違いを次のように説明する。

- AI Image: 画像単体を生成・編集する
- Genspark Design: レイアウト、文字、構造を含むデザイン成果物やプロトタイプを作る
- AgentBase: 構造化データを継続運用する業務システムを作る

画像生成の説明へ混ぜず、6.0機能マップで1例だけ見せる。[Genspark Design公式Help](https://www.genspark.ai/helpcenter/genspark-design)

### 6. SecondBrain Note

Gensparkホームと公式ショップでは、カード型のAIボイスレコーダーとして案内されている。録音をSecond Brainへ取り込み、会議メモや要約につなげるハードウェアである。

公式ページ: [SecondBrain Note](https://shop.genspark.ai/en-us)

研修では製品写真と役割を紹介するだけにする。参加者同意、録音、保存、共有の社内ルールが必要なため、初回研修で録音実演は行わない。

## 呼称を混同しない

| 呼称 | 意味 | 研修での言い方 |
|---|---|---|
| Teamプラン | 2〜150名向けの契約・課金・管理プラン | 契約プラン |
| Teams | 従来のGenspark内DM・グループチャット・共有機能 | 従来のチームチャット |
| GenTeam | 人と複数のAIエージェントが同じチャンネルで協働する現在の製品画面 | AIチームワークスペース |
| Custom Agent | 特定の役割・出力基準を持たせて作る再利用可能なエージェント | 自作エージェント |
| Skills | 特定業務の手順・判断・資料・ツールを再利用する仕組み | 作り方の再利用 |
| Workflow | トリガーと処理を定義して繰り返し動かす自動化 | 業務フローの自動実行 |
| AI Inbox | 2025年からあるメールとGenspark Agentの連携構想 | 既存メール連携機能 |
| GenMail | メールクライアントとメール・ブレインを統合した現在の製品 | メール業務エージェント |

## Teamプランとクレジット

公式Help・料金ページで確認したTeamプランの現行仕様:

| 項目 | Teamプラン |
|---|---|
| 対象人数 | 2〜150名 |
| 料金 | 1席あたり月額30米ドル。セルフサービス、月次、クレジットカード決済 |
| 月次クレジット | 1席あたり12,000 credits |
| 共有方法 | 各メンバーへ個別付与。通常クレジットは共有・移転できない |
| リセット | 毎請求サイクルでリセット。未使用分は繰り越さない |
| 追加分 | 10,000-credit packを管理者が購入し、本人がclaimするか、管理者が特定メンバーへ割当 |
| Credit Pack価格・有効期限 | 公開固定値では確認できない。購入画面の表示を確認する |
| ストレージ | 1席あたり60GB。個人領域でありチーム共有プールではない |
| 管理者の可視範囲 | メンバー別の残高・利用量は確認可能。個々のプロジェクト、プロンプト、生成物、AI Drive内容は閲覧不可 |

AI Chat AgentとAI Image Agentの料金ページ掲載対象モデルには、2026-12-31までzero-creditの案内がある。ただし対象モデルは動的で、fair-useとセッション単位の制限がある。研修では「すべての機能が無制限」とは説明しない。

公式根拠:

- [Team & Enterprise Plans](https://www.genspark.ai/helpcenter/team-enterprise-plans)
- [Team Pricing](https://www.genspark.ai/team_pricing)
- [Credits Guide](https://www.genspark.ai/helpcenter/credits-guide)

### 6.0無料クレジット企画

[公式キャンペーンページ](https://www.genspark.ai/credit-campaign)のログイン済みTeam画面で2026-07-21 14:00台に確認した動的表示:

- 期間: 2026-07-21 11:30〜2026-07-28 11:30 JST（7日間）
- 対象: Plus、Pro、Team、Enterpriseのメンバー
- Team: 1回あたり2,000 credits（Plus・Enterpriseも同額、Proは20,000 credits）
- 有効期限: 受け取りから24時間
- 再受取: 現在のパックが期限切れになった後、次のパックを受取可能
- 配布: 毎日200億creditsの数量限定・先着順
- 消費順: 原則はキャンペーン分が優先。より早く失効する他のcreditsがある場合はそちらが先

同ページは「6.0で試す対象」として、強化されたAIスライド、デザイン / プロトタイプ、ダッシュボードとCRM（AgentBase）、GenTeam、GenMail、Second Brainを並べている。AIスライドは6.0で初登場した機能ではない。同ページは、専門知識とデザインをまとめた再利用可能な`Slide Skills`をAIスライドの特徴として紹介している。

これはキャンペーンであり、通常のTeamクレジットとは別物である。研修当日の実習に利用できるが、先着・24時間失効のため、研修設計はキャンペーン分を前提にせず、通常の12,000 credits / 席だけで成立させる。

### 50名研修のクレジット運用

- 全員がStandard設定を使う
- AI Slidesは3ページ程度に制限する
- 画像・動画の大量再生成をしない
- Skillsは実行回数を1回に固定する
- WorkflowはTest Runを1回にする
- 講師用の完成済みプロジェクト、スクリーンショット、PPTX、Excelを用意する
- 管理者が開始前と終了後にMember StatsをCSV出力し、消費量を確認する
- Credit Packを購入する場合は価格と有効期限を購入画面で確認し、研修前に必要数だけ確保する

## Teamプランで特に注意する権限

- Connectorの有効・無効は組織全体に適用され、特定メンバーだけを許可・禁止できない
- 組織管理者によるAgent単位の中央統制はEnterprise機能。GenTeamのAgent作成者はAgentごとのモデル、Skills、ツールやサービス権限を設定できる
- Team管理者はメンバーの成果物内容を直接監査できない
- Teamはモデル学習から自動オプトアウトと記載されているが、データ処理・保存が一切ないという意味ではない
- Zero Data Retentionには「適用される場合」という但し書きがある
- Teamの標準データ所在地はUS-West。DPA、Personal Data、保存・削除条件を確認してからメール・Drive・Slack等を接続する

したがって、Teamプランで「研修参加者50名のうち数名だけGenMailを許可する」といった運用を管理画面だけで実現するのは難しい。初回研修では、組織ConnectorをOFFにしたまま講師の専用環境だけでデモするのが安全である。

公式根拠: [Team & Enterprise Plans](https://www.genspark.ai/helpcenter/team-enterprise-plans)

## 6.0と混同してはいけない既存機能

| 名称 | 既存公開時期・内容 |
|---|---|
| AI Inbox | 2025-11-20のAI Workspace発表で公開 |
| Teams | 2025-11-20のAI Workspace発表で公開 |
| AI Inbox Workflow Automation | 2026-01-28のWorkspace 2.0で公開 |
| Custom Agent | 2025-10-15に公開 |
| Claw Desktop、Officeプラグイン、Advanced Workflows | 2026-04-08のWorkspace 4.0で公開 |
| Skills / Workflows | 6.0以前からHelp Centerに存在 |

SecondBrain、GenTeam、Design、AgentBase、GenMailは6.0公式ブログの主要構成として確認できた。`New`と明記されているのはDesign、AgentBase、GenMailである。既存のAI InboxやTeamsをそのまま「6.0で初めて追加」と説明せず、GenMail / GenTeamとの違いを示す。

公式根拠:

- [AI Workspace / AI Inbox / Teams](https://www.genspark.ai/blog/genspark-ai-workspace-and-series-b-funding)
- [Genspark AI Workspace 6.0](https://www.genspark.ai/ja/blog/genspark-ai-workspace-6)
- [Workspace 2.0](https://www.genspark.ai/blog/genspark-ai-workspace-2)
- [Workspace 4.0](https://www.genspark.ai/blog/genspark-ai-workspace-4)
- [Custom Agent](https://www.genspark.ai/helpcenter/custom-super-agent)
- [Skills](https://www.genspark.ai/helpcenter/skills)
- [Workflows](https://www.genspark.ai/helpcenter/workflows)

## 研修スライドへの組み込み案

総ページ数を増やしすぎず、従来の抽象的なAIエージェント説明と「その他機能一覧」を置き換える。6.0は全員実習しない機能も多いため、4枚ではなく3枚へ圧縮する。

| 追加・差し替えページ | 伝える内容 | 扱い |
|---|---|---|
| 何を開くか、6.0機能選択マップ | Slides / Docs / Sheets / Image / Skills / Workflowを起点に、SheetsとAgentBase、ImageとDesign、個人作業とGenTeamの選び分け | 必須 |
| 記憶→実行→協働 | Second Brain、Super Agent / GenMail、GenTeamの関係。SecondBrain Noteは小さく紹介 | 必須 |
| Teamプランの実習境界 | 12,000 credits/席とキャンペーン分、個別配分、組織単位Connector、全員実習 / 講師デモ / 対象外 | 必須 |

24枚構成を維持する場合は、既存のAI Agent概念2枚を1枚へ統合し、「その他機能一覧」と重複説明1枚を削って上記3枚へ差し替える。AgentBase、Design、GenTeamの詳細は別途の6.0調査メモに残し、研修本編を圧迫させない。

## 120分への配置案

### 講師パート60分

| 内容 | 時間 |
|---|---:|
| 目的、GeminiとGensparkの使い分け | 5分 |
| 機能選択マップ | 4分 |
| AI Slides | 14分 |
| AI Docs / Sheets /画像生成 | 14分 |
| Skills | 10分 |
| Workflow | 8分 |
| 6.0、Teamプラン、外部作用の境界 | 5分 |

### ガイド付き操作30分

- AI Slides: 8分
- AI Docs: 5分
- AI Sheets: 5分
- 画像生成: 4分
- 事前確認済みの公式またはTeam Skillの追加・実行: 4分
- Workflowの準備済みTest Runと履歴確認: 4分

### 操作確認・部署別検討・質問30分

- 操作のつまずき解消: 10分
- 部署別の「何をどこまで使うか」整理: 10分
- 質問、入力可能データ、Connector、実行前承認の確認: 10分

## 鈴木さんに確認する項目

Teamプランであることは確認済み。次を追加確認する。

1. Teamプランの管理者と研修対象座席数
2. DPAを締結済みか。Personal Dataを入力できる契約状態か
3. 組織単位で有効化してよいConnector
4. Gmail / Outlook / Drive / Calendar / Slack / Teams / Notion等の読み取り・書き込み許可範囲
5. GenMailの下書き、送信、自動返信、予定作成のうち許可する操作
6. Second Brainへ蓄積してよい情報区分と保存・削除ルール
7. GenTeamへ追加してよい人、AIエージェント、ファイル、ローカルコンピューター
8. WorkflowのTest Run、Turn On、Pending Confirmationの運用責任者
9. Meeting Notes / SecondBrain Noteの録音同意と共有範囲
10. 生成物の共有リンク、Team Skill、Custom Agentの公開範囲
11. 管理者が成果物内容を見られない前提で、研修合格をどう確認するか
12. Credit Packの購入可否、予算、割当担当者

## 鈴木さんへの確認文案

> 鈴木さん、Genspark研修について確認させてください。
> 利用プランはTeamプランと確認できました。現在のGensparkには、メール・会議・文書を横断するSecond Brain / GenMail、ファイル・アプリ・データベースから業務システムを作るAgentBase、AI Agentや実行環境を協働させるGenTeamが増えています。
> 初回研修ではSlides・Docs・Sheets・画像生成・SkillsとWorkflowのTest Runまでは全員操作とし、GenMailやSecond Brainは匿名化した講師環境でのデモ、GenTeam・Claw・録音機能は紹介に留める想定です。
> TeamプランではConnectorが組織単位で有効化され、組織管理者がAgent単位で中央統制する機能はEnterprise向けのため、次をご確認いただけますでしょうか。
> 1. 有効化してよいConnectorと読み取り・書き込み範囲
> 2. DPAと入力可能な情報区分
> 3. メール送信、予定作成、Workflow本番稼働前の承認ルール
> 4. Second Brainへ蓄積可能な情報と削除ルール
> 5. GenTeam、ローカルコンピューター、会議録音の利用可否
> 6. 研修用テストアカウント、匿名化データ、Credit Packの準備
> 決定前は、組織Connectorを有効化せず、匿名化データと模擬実行だけで研修を行います。

## 日本ローンチイベント・Help更新後に再確認すること

1. 日本の公式ローンチ動画と質疑を取得する
2. Second Brain、GenMail、GenTeam、AgentBase、Genspark Design、SecondBrain Noteの提供条件を確認する
3. 各機能の対象プラン、クレジット消費、提供地域、提供開始日を確認する
4. GenTeamの管理者権限、Agent権限、チャンネル共有、監査ログを確認する
5. GenMailの対応メールサービス、送信承認、自動返信、データ保持を確認する
6. Second Brainの取り込み、削除、Connectorの読み取り範囲を確認する
7. APHDの許可範囲と照合し、研修で「説明・デモ・受講者操作」の最終境界を確定する

公式イベント: [Genspark 6.0ローンチ記念イベント](https://www.genspark.ai/ja/business/event/20260721/product_launch)
公式配信枠: [Genspark AI Workspace 6.0 ローンチ記念イベント](https://www.youtube.com/watch?v=wXFJRHOd_no)
