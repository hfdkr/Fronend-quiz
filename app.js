

let currentQuestion = 0;
let score = 0;
let answered = false;
let questions = [];
let subject = "";

const LABELS = ["A", "B", "C", "D"];


const isIndex = !!document.querySelector("h1");
const isQuestion = !!document.querySelector("main") && !isIndex;

if (isIndex) {
  const buttons = document.querySelectorAll("button");
  const subjectNames = ["HTML", "CSS", "JavaScript", "Accessibility"];

  buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
      sessionStorage.setItem("quizSubject", subjectNames[i]);
      sessionStorage.setItem("quizQuestion", "0");
      sessionStorage.setItem("quizScore", "0");
      window.location.href = "question.html";
    });
  });
}
