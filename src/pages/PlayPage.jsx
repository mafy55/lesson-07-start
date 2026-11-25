import { Link } from "react-router";
import diagnosis from "../data/diagnosis.json";
import DiagnosisPlayer from "../components/DiagnosisPlayer";

function PlayPage() {
  return (
    <main className="app">
      <nav className="page-nav">
        {/* ★3 ここに「一覧へ戻る」リンクを書く（移動先は /） */}
      </nav>

      <header className="app-header">
        <p className="brand">SHINDAN STUDIO</p>
        <h1>{diagnosis.title}</h1>
        <p className="lead">{diagnosis.description}</p>
      </header>

      <DiagnosisPlayer />
    </main>
  );
}

export default PlayPage;
