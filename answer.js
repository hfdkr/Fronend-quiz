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
      window.location.href = "index.html";
    });
  }
});
const subject = sessionStorage.getItem("quizSubject");

const icon = document.getElementById("mainIcon_1");
const title = document.getElementById("mainTitle_1");

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

if (subject && data[subject]) {
  icon.src = data[subject].img;
  title.textContent = data[subject].name;
}

const icon_1 = document.getElementById("mainIcon_2");
const title_1 = document.getElementById("mainTitle_2");

const data_1 = {
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

if (subject && data_1[subject]) {
  icon_1.src = data_1[subject].img;
  title_1.textContent = data_1[subject].name;
}
