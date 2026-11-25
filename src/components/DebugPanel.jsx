// 確認用の表示（先生側のコード。今回は編集しない）
function DebugPanel({ currentQuestion, answers }) {
  return (
    <aside className="debug">
      <h3>確認用の表示</h3>
      <p>
        現在の質問番号：{currentQuestion}（質問{currentQuestion + 1}）
      </p>
      <p>回答記録：</p>
      <pre>{JSON.stringify(answers, null, 2)}</pre>
    </aside>
  );
}

export default DebugPanel;
