# SHINDAN STUDIO（第7回の教材）

第6回の診断に、「診断一覧」ページを追加します。一覧と診断を行き来できるようにします。

## 起動のしかた

```bash
git clone https://github.com/mafy55/lesson-07-start.git
cd lesson-07-start
npm ci
npm run dev
```

ターミナルに表示された `Local:` のURLを、ブラウザで開きます。

## 今日編集するファイル（★の箇所だけ）

| ファイル | 書くこと |
|---|---|
| `src/App.jsx` | ★1 URLと表示するページの対応（Routes と Route） |
| `src/pages/HomePage.jsx` | ★2 「診断を始める」リンク |
| `src/pages/PlayPage.jsx` | ★3 「一覧へ戻る」リンク |

import は書いてあります。

## 今日は編集しないファイル

| ファイル | 役割 |
|---|---|
| `src/main.jsx` | BrowserRouter で App を包む |
| `src/components/DiagnosisList.jsx` | 診断一覧のカード |
| `src/components/DiagnosisPlayer.jsx` | 第6回で作った診断の進行 |
| `src/components/ResultView.jsx` | 結果の表示 |
| `src/components/DebugPanel.jsx` | 確認用の表示 |
| `src/data/diagnosis.json` | 診断データ |
| `src/lib/score.js` | 採点と結果の決定 |
