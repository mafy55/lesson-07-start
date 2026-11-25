// 診断一覧（先生側のコード。今回は編集しない）
// 利用できる診断のカードと、「準備中」のカードを並べる。
// <DiagnosisList> と </DiagnosisList> の間に書いたものは、
// 利用できる診断のカードの下側（card-action）に入る。
const comingSoon = [
  { id: "coming-1", title: "休日の過ごし方診断", category: "ライフスタイル" },
  { id: "coming-2", title: "ノートの取り方診断", category: "学び" },
];

function DiagnosisList({ diagnosis, children }) {
  return (
    <ul className="diagnosis-list">
      <li className="card">
        <p className="category">{diagnosis.category}</p>
        <h2>{diagnosis.title}</h2>
        <p className="card-text">{diagnosis.description}</p>
        <div className="card-action">{children}</div>
      </li>

      {comingSoon.map((item) => (
        <li key={item.id} className="card coming-soon">
          <p className="category">{item.category}</p>
          <h2>{item.title}</h2>
          <p className="status">準備中</p>
        </li>
      ))}
    </ul>
  );
}

export default DiagnosisList;
