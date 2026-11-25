// 採点と結果の決定（先生側のコード。今回は編集しない）
// answers の例：{ q1: "q1-1", q2: "q2-1" }
export function judge(diagnosis, answers) {
  const scores = {};
  for (const result of diagnosis.results) {
    scores[result.id] = 0;
  }

  for (const question of diagnosis.questions) {
    const choiceId = answers[question.id];
    const choice = question.choices.find((c) => c.id === choiceId);
    if (choice) {
      scores[choice.scoreTo] += 1;
    }
  }

  // 同点のときは、先に書いてある結果にする
  let result = diagnosis.results[0];
  for (const r of diagnosis.results) {
    if (scores[r.id] > scores[result.id]) {
      result = r;
    }
  }

  return { scores, result };
}
