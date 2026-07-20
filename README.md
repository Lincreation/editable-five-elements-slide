# Genspark活用研修｜実施パッケージ

Gensparkを業務で安全に使い分け、AI Sheets・AI Slidesで成果物を作り、SkillとWorkflowへ再利用する120分研修です。

## 受け取り手別の入口

| 受け取り手 | 最初に開く | 次に使う |
| --- | --- | --- |
| 受講者 | `participant/handout.html` | 同フォルダの研修用Excel |
| 講師 | `instructor-guide.md` | `index.html` → `demo-guide.md` |
| 研修担当者 | このREADME | `delivery-manifest.md` → 研修前チェック |

## 実施時間

| 区分 | 時間 | 内容 |
| --- | ---: | --- |
| 講義 | 60分 | Genspark、AIエージェント、Gemini、Skill、Workflow |
| 講師実演 | 30分 | AI Sheets 20分＋AI Slides 10分 |
| 参加者操作・質問 | 30分 | 研修用Excelで操作、確認、共有、質疑 |

## 当日の使い方

1. 投影時は`index.html?present=1`をChromeで開く
2. 右側の講師台本と`instructor-guide.md`を見ながら進行する
3. 実演では`demo-guide.md`と配布Excelを使用する
4. 最後の30分は`participant/`フォルダだけを受講者へ案内する
5. 終了後の復習も`participant/handout.html`にまとまっている

講師・研修担当者がローカルサーバーで確認する場合：

```bash
python3 -m http.server 8765 --bind 127.0.0.1
```

その後、`http://127.0.0.1:8765/index.html`を開きます。

## 画面上でできること

- 前後ボタン、矢印キー、スペースキーでページ送り
- `全44枚`からページ一覧を表示
- `スライドを編集`で文字を直接編集
- 右側の講師台本を直接編集
- `HTML保存`でスライドと台本をまとめて保存
- `台本保存`で台本だけをMarkdown形式で保存
- `全画面`で投影表示

## 成果物

- `index.html`：全44ページの編集可能スライド
- `talk-script.md`：全ページ分の講師台本
- `instructor-guide.md`：120分の進行、画面切替、代替進行
- `exercise-sheet.md`：参加者30分演習
- `recap.md`：受講後の復習資料
- `participant/`：そのまま受講者へ配布できるハンドアウト＋研修用Excel
- `delivery-manifest.md`：受講者・講師・研修担当者ごとの配布範囲
- `demo-guide.md`：AI Sheets・AI Slides実演手順
- `demo-data/Genspark研修_飲食店週次支出照合デモ.xlsx`：架空データの実演・演習ファイル
- `demo-data/AI-Sheets_分類結果_バックアップ.xlsx`：ライブ処理が止まった時の投影用サマリー＋全分類結果
- `demo-data/AI-Slides_週次支出報告_バックアップ.html`：ライブ生成が止まった時の3ページ初稿
- `research-sources.md`：公式・一次情報の確認記録
- `assets/`：現行スライドで使用している画像のみ

研修担当者向けの制作・検証記録は`qa/`に分離しており、受講者には`participant/`だけを配布します。制作・公開運用は`MAINTAINER.md`を参照してください。

## 研修前チェック

- Gensparkへログインできる
- AI Sheets、AI Slidesを開ける
- 配布Excelが全員の端末で開く
- 契約プラン、Credits、利用可能機能を管理者へ確認する
- 実データの持ち込み可否と共有範囲を確認する
- ライブ生成が止まった場合に備え、同梱のSheets・Slidesバックアップを開ける
