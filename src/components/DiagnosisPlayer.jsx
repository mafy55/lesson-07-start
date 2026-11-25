// 診断の進行（第6回で作った部品。今回は編集しない）
import { useState } from "react";
import diagnosis from "../data/diagnosis.json";
import { judge } from "../lib/score";
import ResultView from "./ResultView";
import DebugPanel from "./DebugPanel";

function DiagnosisPlayer() {
  // 質問番号と回答記録を state で覚える
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});

  const question = diagnosis.questions[currentQuestion];
  const isFinished = question === undefined;

  // 選んだ答えを、回答記録に入れる
  function handleChoose(choice) {
    setAnswers((previous) => ({
      ...previous,
      [question.id]: choice.id,
    }));
  }

  // 「回答して進む」ボタンで使う
  function handleAnswerNext() {
    setCurrentQuestion(currentQuestion + 1);
  }

  // 最初の質問・空の回答記録へ戻す
  function handleReset() {
    setCurrentQuestion(0);
    setAnswers({});
  }

  if (isFinished) {
    const { scores, result } = judge(diagnosis, answers);
    return (
      <ResultView
        diagnosis={diagnosis}
        scores={scores}
        result={result}
        onReset={handleReset}
      />
    );
  }

  const selectedId = answers[question.id];

  return (
    <section className="player">
      <p className="progress">
        質問 {currentQuestion + 1} / {diagnosis.questions.length}
      </p>
      <h2>{question.text}</h2>

      <div className="choices">
        {question.choices.map((choice) => (
          <button
            key={choice.id}
            className={choice.id === selectedId ? "choice selected" : "choice"}
            onClick={() => handleChoose(choice)}
          >
            {choice.text}
          </button>
        ))}
      </div>

      <button
        className="next"
        onClick={handleAnswerNext}
        disabled={!answers[question.id]}
      >
        回答して進む
      </button>

      <DebugPanel currentQuestion={currentQuestion} answers={answers} />
    </section>
  );
}

export default DiagnosisPlayer;
