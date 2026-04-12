const answerButtons = document.querySelectorAll(".answer-btn");
const submitBtn = document.getElementById("submitBtn");

let selectedAnswer = null;
let answered = false;
const correctAnswer = 0;

answerButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    if (answered) return;

    selectedAnswer = index;

    answerButtons.forEach((b) => {
      b.classList.remove("border-Purple-600");
      b.classList.add("border-transparent");
    });

    btn.classList.remove("border-transparent");
    btn.classList.add("border-Purple-600");
  });
});

submitBtn.addEventListener("click", () => {
  if (selectedAnswer === null) {
    alert("please select an answer");
    return;
  }

  answered = true;

  answerButtons.forEach((btn, index) => {
    const icon = btn.querySelector(".result-icon");

    btn.classList.remove("border-transparent", "border-Purple-600");
    icon.classList.add("hidden");
    icon.textContent = "";

    if (index === correctAnswer) {
      btn.classList.add("border-Green-500");
      icon.textContent = "✓";
      icon.classList.remove("hidden");
    }

    if (index === selectedAnswer && index !== correctAnswer) {
      btn.classList.add("border-red-500");
      icon.textContent = "✕";
      icon.classList.remove("hidden");
    }
  });
});
