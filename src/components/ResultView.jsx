// 結果の表示（先生側のコード。今回は編集しない）
function ResultView({ diagnosis, scores, result, onReset }) {
  return (
    <section className="player result">
      <p className="progress">診断結果</p>
      <h2>{result.title}</h2>
      <p>{result.description}</p>

      <table className="scores">
        <caption>得点</caption>
        <tbody>
          {diagnosis.results.map((r) => (
            <tr key={r.id}>
              <th scope="row">{r.title}</th>
              <td>{scores[r.id]}点</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button className="next" onClick={onReset}>
        もう一度
      </button>
    </section>
  );
}

export default ResultView;
