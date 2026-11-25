import { Link } from "react-router";
import diagnosis from "../data/diagnosis.json";
import DiagnosisList from "../components/DiagnosisList";

function HomePage() {
  return (
    <main className="app">
      <header className="app-header">
        <p className="brand">SHINDAN STUDIO</p>
        <h1>診断一覧</h1>
        <p className="lead">遊びたい診断を選んでください。</p>
      </header>

      <DiagnosisList diagnosis={diagnosis}>
        {/* ★2 ここに「診断を始める」リンクを書く（移動先は /play） */}
      </DiagnosisList>
    </main>
  );
}

export default HomePage;
