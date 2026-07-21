# Genspark Workspace 6.0 調査メモ（自分用）

- 調査時点: 2026-07-21 12:46 JST
- 目的: APHD向けGenspark研修に6.0をどこまで入れるか判断し、情シスの鈴木さんへ確認する項目を整理する
- 重要: このメモは公式ローンチイベント開始前のスナップショット。機能詳細は発表後に更新が必要。

## エグゼクティブサマリー

2026年7月21日12:46時点で、Genspark 6.0の機能詳細は公式発表前である。確認できるのは、本日15:00〜16:30の公式イベントで「Genspark 6.0」と全世界初の最新機能を発表すること、主題が組織のAI活用と企業利用であることまで。

現時点で研修スライドに「6.0の新機能」として具体機能を書くと、Workspace 4.0、AI Slides 5.0、現行Skills / Workflowsを6.0新機能と誤認する可能性が高い。

当面の研修方針は次が安全。

> 主要な成果物作成機能は実際に操作する。Connector、Workflowの本番稼働、Claw、Meeting Botは概念紹介に留め、APHDの許可範囲が決まったものだけ実演する。

## 6.0について確認できたこと

| 区分 | 内容 |
|---|---|
| 確認済み | 2026-07-21にGenspark 6.0ローンチイベントを開催 |
| 確認済み | 公式イベントは15:00〜16:30。15:00から最新動向と全世界初の最新機能を発表 |
| 確認済み | イベントの主題は「組織のためのAI活用」「企業利用の活用シーン」 |
| 確認済み | 2026-07-21 12:46 JSTの調査時点で、公式YouTubeに同日19:00 JST開始予定の配信枠がある。これは予定時刻であり、変更可能性がある |
| 未確認 | 新機能名、UI、仕様、対象プラン、料金、提供開始日、日本語UIへの反映 |
| 未確認 | Connectorの追加・変更、管理者権限、監査範囲、データ保存の変更 |
| 推測止まり | 「Workspace全体の統合」「外部サービス接続の拡大」「Skills / Workflowsが6.0の中核」など |

公式根拠: [Genspark 6.0ローンチ記念イベント](https://www.genspark.ai/ja/business/event/20260721/product_launch) / [公式YouTube配信枠](https://www.youtube.com/watch?v=wXFJRHOd_no)

## 公式ティザーの確認結果

[Genspark Korea公式「Genspark 6.0 Coming Soon」](https://www.youtube.com/watch?v=2EKGN-CCEMk)を`yt-dlp`で取得し、2秒間隔の全フレームを確認した。

映っていたのは、過去の広告・イベント・成長に関するモンタージュと、最後の6.0予告だけだった。新UI、新機能名、Connector、権限、操作方法は確認できなかった。

第三者動画[「Genspark Workspace 6.0が来る」](https://www.youtube.com/watch?v=hkOkndNnbbs)も2:44〜3:26で公開予告を話すだけで、機能説明は推測である。6.0の仕様根拠には使わない。

## 6.0と混同してはいけない現行機能

| 名称 | 公式確認済みの概要 | 6.0ではない理由 |
|---|---|---|
| Workspace 4.0 | Claw Desktop、Computer Use / Browser Use、Officeプラグイン、Speakly、Advanced Workflows | 2026-04-08公開済み |
| AI Slides 5.0系 | プレゼン専用Agent、100以上のSlide Skills、PPT/PDFからSkill化、新キャンバス、注釈編集、Verify Content、ノート、プレゼンター表示 | Slides固有の既存更新 |
| Skills | 専門家の思考、構造、デザイン、手順を再利用。Community / Team / My Own | 現行Helpに記載済み |
| Workflows | 自然言語からトリガーとActionを組み、Test Run、Turn On、Run History、Pending Confirmationで運用 | 現行Helpに記載済み |

公式根拠:

- [Workspace 4.0](https://www.genspark.ai/blog/genspark-ai-workspace-4)
- [AI Slides Changelog](https://www.genspark.ai/docs/ai_slides_changelog)
- [Skills](https://www.genspark.ai/helpcenter/skills)
- [Workflows](https://www.genspark.ai/helpcenter/workflows)

## 外部連携と企業導入の判断表

| 領域 | 何が起き得るか | 主なリスク | 初回研修の推奨 |
|---|---|---|---|
| ファイルアップロード | PDF、Word、Excel、PPT等を成果物の材料にする | 機密情報、個人情報、権利のないデータを外部AIに投入 | 匿名化デモデータのみ |
| Connector | Google Drive、Notion、Slack等を組織で利用 | OAuth権限、対象範囲の過大許可、意図しない読取り・書込み | 実接続なし。許可済みConnectorだけ別日実演 |
| Workflow | メール受信や定期実行を起点に、転記・更新・送信を連結 | 誤送信、誤更新、重複実行、停止失敗 | 模擬データのTest Runまで。Turn Onはしない |
| Claw / Computer Use | ローカルファイル、アプリ、画面、ブラウザを操作 | 表示中の秘密情報、予期しないクリック・送信・上書き | 初回研修は概念紹介のみ |
| Meeting Bot / Speakly | カレンダー接続、自動参加、録音、要約送信 | 参加者同意、録音データの保存、誤参加、誤配信 | 承認が決まるまで扱わない |
| Skill共有 | 個人の手順をTeam Skillや公開Skillにする | 社内手順、プロンプト、参考ファイル、Connector設定の過剰共有 | 自分用まで。Team公開はレビュー後 |
| 公開リンク・書き出し | 成果物をURL、PPTX、PDF、Excel等で受け渡す | リンク公開範囲、メタデータ、書き出し崩れ、誤ファイル | 参加者自身が作った匿名データのみ |

## Team / Enterpriseで事前に見る項目

現行公式Helpで確認した内容:

- Team / Enterpriseは、組織全体で外部Connectorの有効・無効を管理できる。現在は一部メンバーだけ有効にする設定はない。
- 特定Agentを禁止するAgent単位の権限はEnterprise機能。
- 管理者は座席別のクレジット利用とアカウント活動を見られるが、個々のプロジェクト履歴や内容は見られないと記載されている。
- 組織データはモデル訓練からオプトアウト。下請けモデルのZero Data Retentionは「適用される場合」という但し書きがあるため、契約と対象モデルの確認が必要。
- アカウント終了後のデータ削除は30日、バックアップ保持は削除後90日と記載。
- Teamのデータ所在地はUSが既定。EnterpriseはUS / EU / APACを契約で構成可能。
- EnterpriseはUsage Logs、Login History、利用モデル制限、DPA、VPC等を契約で調整可能。ただしUsage Logsは公式上「クレジット利用」のエクスポートであり、ファイル内容やAgentの全操作を監査できるとは限らない。

公式根拠: [Team & Enterprise Plans](https://www.genspark.ai/helpcenter/team-enterprise-plans)

## 鈴木さんに確認する論点

### プランと管理

1. APHDの研修対象アカウントは個人版、Team、Enterpriseのどれか。
2. 研修時に利用可能なAgent / Skill / Workflow / Connectorの範囲はどこまでか。
3. 組織メンバーの招待、公開招待リンク、SSOは誰が管理するか。
4. 予算、クレジット上限、利用状況の確認責任者は誰か。

### データと外部連携

5. Gensparkに入力可能な情報区分はどこまでか。社外秘、個人情報、人事、財務、顧客、契約、未公開営業資料ごとに決める必要がある。
6. Gmail / Google Drive / Calendar / Slack / Teams / Notion / Salesforce等のうち、接続を許可するものはどれか。
7. Connectorは読み取りだけか、ファイル更新・予定作成・メール送信も許可するか。
8. OAuth同意画面のスコープを誰が確認し、記録するか。
9. データ所在地、削除、バックアップ、DPA、下請けモデル、ZDR適用範囲は契約で確認済みか。

### 自動化と外部操作

10. WorkflowのTest Runを研修で実演してよいか。
11. WorkflowのTurn Onと本番データ利用は誰が承認するか。
12. メール送信、予定作成、ファイル更新、公開を行う前に、必ず人の確認を入れるか。
13. 誤実行時の停止、訂正、報告の連絡先は誰か。
14. Clawによる画面、ローカルファイル、ブラウザ操作を許可するか。
15. Meeting Botの自動参加、録音、要約送信を許可するか。参加者同意はどう取るか。

### 共有とガバナンス

16. 自分用Skill、Team Skill、社外公開Skillの境界はどこか。
17. Team Skillのレビュー者、Owner、Version管理、廃止手順は誰が持つか。
18. 成果物の公開リンク、社外共有、PPTX / PDF / Excel書き出しの許可範囲はどこか。
19. 利用状況、ログ、インシデントをどの周期でレビューするか。
20. 研修用のテストアカウント、テスト用Connector、匿名化データは誰が用意・初期化するか。
21. 画面共有や研修録画に、メールアドレス、ファイル名、通知、過去プロジェクトが映り込まないよう、どの環境で実演するか。
22. 生成画像・参考画像・ロゴ・人物写真の権利確認と、社内利用・社外利用・広告利用の境界をどう決めるか。

## 鈴木さんへの確認文案

> 鈴木さん、今回のGenspark研修について確認させてください。
> Genspark 6.0は本日公式発表予定で、組織利用に関する機能拡張がある可能性がありますが、12:46時点で正式な機能詳細はまだ公開されていません。研修では、外部連携なしのSlides・Docs・Sheets・画像生成などの基本機能は実際に操作し、Connector、Workflowの本番稼働、Claw、Meeting Botは許可済みの範囲だけ扱いたいと考えています。
> そのため、次の点をご確認いただけますでしょうか。
> 1. APHDで利用中のGensparkプランと管理者
> 2. 接続を許可するGoogle Drive・Gmail・Calendar・Slack等のサービス
> 3. Gensparkに入力できる情報区分
> 4. WorkflowのTest RunとTurn On、メール送信・ファイル更新前の人の承認ルール
> 5. Clawの画面・ローカルファイル操作とMeeting Botの録音・要約送信の許可
> 6. Skillのチーム共有・社外公開と成果物の公開リンクの許可範囲
> 7. データ所在地、保存期間、DPA、利用モデル、ログの確認状況
> 8. 研修用テストアカウントと匿名化データの用意・初期化方法
> 9. 画面共有・録画時の情報映り込み対策
> 10. 生成画像・参考画像・ロゴ・人物写真の権利と社外利用範囲
> 研修では、上記が決まるまで匿名化デモデータとWorkflowのTest Runまでに限定する想定です。

## 公式発表後の更新チェック

1. 公式ローンチ動画とリリースノートを取得する
2. 新機能名と提供開始日を確認する
3. 対象プラン、座席、クレジット、リージョン制限を確認する
4. 実画面で権限、OAuthスコープ、読取り・書込み範囲を確認する
5. 4.0、Slides 5.0、現行Skills / Workflowsとの差分を書く
6. 変更のない販促表現と、管理・契約上の実質的な変更を分ける
7. APHDの許可範囲と照合し、研修で「説明」「デモ」「受講者操作」のどこまで行うか決める
