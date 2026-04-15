let currentQuestion = 0;
let score = 0;
let answered = false;
let questions = [];
let subject = "";

const LABELS = ["A", "B", "C", "D"];

const isIndex = document.body.classList.contains("index-page");
const isQuestion = document.body.classList.contains("question-page");

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

if (isQuestion) {
  const selectedSubject = sessionStorage.getItem("quizSubject");
  const icon = document.getElementById("mainIcon");
  const title = document.getElementById("mainTitle");

  const data = {
    HTML: {
      img: "./images/icon-html.png",
      name: "HTML",
    },
    CSS: {
      img: "./images/icon-css.png",
      name: "CSS",
    },
    JavaScript: {
      img: "./images/icon-js.png",
      name: "JavaScript",
    },
    Accessibility: {
      img: "./images/icon_accessibility.png",
      name: "Accessibility",
    },
  };

  if (selectedSubject && data[selectedSubject]) {
    icon.src = data[selectedSubject].img;
    title.textContent = data[selectedSubject].name;
  }
}
/* js question */
const answerButtons = document.querySelectorAll(".answer-btn");
const submitBtn = document.getElementById("submitBtn");

let selectedAnswer = null;
let answered_1 = false;
const correctAnswer = 0;

answerButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (answered_1) return;

    selectedAnswer = index;

    answerButtons.forEach((b) => {
      b.classList.remove("border-Purple-600");
      b.classList.add("border-transparent");
    });

    btn.classList.remove("border-transparent");
    btn.classList.add("border-Purple-600");
  });
});
/* dictionnaire question */
document.addEventListener("DOMContentLoaded", () => {
  const questions = [
    {
      question:
        "Which of these color contrast ratios defines the minimum WCAG 2.1 Level AA requirement for normal text?",
      answers: ["4.5 : 1", "3 : 1", "2.5 : 1", "5 : 1"],
      correct: 0,
    },
    {
      question: "What does WCAG stand for?",
      answers: [
        "Web Content Accessibility Guidelines",
        "Web Color Accessibility Guide",
        "Website Content Access Goals",
        "Web Contrast Accessibility Grid",
      ],
      correct: 0,
    },
    {
      question: "Why is alt text important?",
      answers: [
        "It changes image color",
        "It helps screen readers describe images",
        "It makes images load faster",
        "It centers images",
      ],
      correct: 1,
    },
    {
      question: "Which HTML element represents the main content of a page?",
      answers: ["<section>", "<main>", "<div>", "<article>"],
      correct: 1,
    },
    {
      question: "Which of these is best for keyboard accessibility?",
      answers: [
        "Only mouse support",
        "Clickable div without focus",
        "Visible focus states",
        "Hidden buttons",
      ],
      correct: 2,
    },
    {
      question: "Which tag is used to create a hyperlink?",
      answers: ["<a>", "<p>", "<img>", "<h1>"],
      correct: 0,
    },
    {
      question: "Which CSS property changes text color?",
      answers: ["font-color", "text-color", "color", "background-color"],
      correct: 2,
    },
    {
      question: "Which JavaScript method logs to the console?",
      answers: ["print()", "console.log()", "write()", "alert.log()"],
      correct: 1,
    },
    {
      question: "What is the minimum contrast ratio for large text in WCAG AA?",
      answers: ["4.5 : 1", "3 : 1", "2 : 1", "5 : 1"],
      correct: 1,
    },
    {
      question: "Which attribute improves form accessibility?",
      answers: [
        "placeholder only",
        "label with for attribute",
        "color only",
        "empty id",
      ],
      correct: 1,
    },
  ];

  const questionNumber = document.getElementById("questionNumber");
  const questionTitle = document.getElementById("questionTitle");
  const progressBar = document.getElementById("progressBar");
  const answerButtons = document.querySelectorAll(".answer-btn");
  const submitBtn = document.getElementById("submitBtn");

  let currentQuestion = 0;
  let selectedAnswer = null;
  let answered = false;
  let score = 0;

  function loadQuestion() {
    const q = questions[currentQuestion];

    questionNumber.textContent = `Question ${currentQuestion + 1} of ${questions.length}`;
    questionTitle.textContent = q.question;

    const progressPercent = ((currentQuestion + 1) / questions.length) * 100;
    progressBar.style.width = `${progressPercent}%`;

    answerButtons.forEach((btn, index) => {
      const answerText = btn.querySelector(".answer-text");
      const resultIcon = btn.querySelector(".result-icon");
      const letterBox = btn.querySelector("div");

      answerText.textContent = q.answers[index];

      btn.disabled = false;
      btn.classList.remove(
        "border-Purple-600",
        "border-Green-500",
        "border-red-500",
      );
      btn.classList.add("border-transparent");

      resultIcon.textContent = "";
      resultIcon.classList.add("hidden");
      resultIcon.classList.remove("text-Green-500", "text-red-500");

      if (letterBox) {
        letterBox.classList.remove("bg-Green-500", "bg-red-500");
        letterBox.classList.add("bg-Grey-50");
      }
    });

    selectedAnswer = null;
    answered = false;
  }

  answerButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      if (answered) return;

      selectedAnswer = index;

      answerButtons.forEach((button) => {
        button.classList.remove("border-Purple-600");
        button.classList.add("border-transparent");
      });

      btn.classList.remove("border-transparent");
      btn.classList.add("border-Purple-600");
    });
  });

  submitBtn.addEventListener("click", () => {
    const feedback = document.getElementById("feedback");
    if (selectedAnswer === null) {
      feedback.textContent = "Please select an answer";
      feedback.classList.add("text-red-500"); // style (Tailwind)
      return;
    } else {
      feedback.textContent = ""; // clear message when valid
    }

    if (answered) return;

    answered = true;
    const correctAnswer = questions[currentQuestion].correct;

    answerButtons.forEach((btn, index) => {
      const icon = btn.querySelector(".result-icon");
      const letterBox = btn.querySelector("div");

      btn.classList.remove(
        "border-transparent",
        "border-Purple-600",
        "border-Green-500",
        "border-red-500",
      );

      icon.classList.add("hidden");
      icon.classList.remove("text-Green-500", "text-red-500");
      icon.textContent = "";

      if (letterBox) {
        letterBox.classList.remove("bg-Green-500", "bg-red-500");
        letterBox.classList.add("bg-Grey-50");
      }

      if (index === correctAnswer) {
        btn.classList.add("border-Green-500");
        icon.innerHTML =
          '<img src="./images/Vector(2).png" alt="close icon" width="30" height="30">';
        icon.classList.remove("hidden");
        icon.classList.add("text-Green-500");

        if (letterBox) {
          letterBox.classList.remove("bg-Grey-50");
          letterBox.classList.add("bg-Green-500");
        }
      }
      /* border of question */
      if (index === selectedAnswer && index !== correctAnswer) {
        /* add border red for my answer */
        btn.classList.add("border-red-500");
        icon.innerHTML =
          '<img src="./images/Vector(1).png" alt="close icon" width="30" height="30">';
        icon.classList.remove("hidden");
        icon.classList.add("text-red-500");

        if (letterBox) {
          letterBox.classList.remove("bg-Grey-50");
          letterBox.classList.add("bg-red-500");
        }
      }
    });

    if (selectedAnswer === correctAnswer) {
      score++;
      localStorage.setItem("quizScore", String(score));

      setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < questions.length) {
          loadQuestion();
        } else {
          localStorage.setItem("quizWon", "true");
          window.location = "answer.html";
        }
      }, 1000);
    } else {
      localStorage.setItem("quizScore", String(score));
      localStorage.setItem("quizWon", "false");

      setTimeout(() => {
        window.location = "answer.html";
      }, 1200);
    }
  });

  loadQuestion();
});
