document.addEventListener("DOMContentLoaded", () => {
  const score = Number(localStorage.getItem("quizScore")) || 0;
  const subject = localStorage.getItem("quizSubject") || "Accessibility";

  const scoreEl = document.getElementById("score");
  const subjectEl = document.getElementById("subjectName");
  const playAgainBtn = document.getElementById("playAgainBtn");

  if (scoreEl) {
    scoreEl.textContent = score;
  }

  if (subjectEl) {
    subjectEl.textContent = subject;
  }

  if (playAgainBtn) {
    playAgainBtn.addEventListener("click", () => {
      localStorage.setItem("quizScore", "0");
      localStorage.setItem("quizCurrentQuestion", "0");
      localStorage.setItem("quizWon", "false");
      window.location.href = "question.html";
    });
  }
});
