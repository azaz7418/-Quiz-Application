// Sample quiz data
const quizData = [
    { question: "What is 2 + 2?", choices: ["3", "4", "5", "6"], correct: 1 },
    { question: "What is the capital of France?", choices: ["Rome", "Paris", "Berlin", "Madrid"], correct: 1 },
    { question: "Which planet is known as the Red Planet?", choices: ["Earth", "Mars", "Jupiter", "Saturn"], correct: 1 }
  ];
//   const choiceLabels = ["a", "b", "c", "d"];

  let currentQuestionIndex = 0;
  let score = 0;
  
  const startButton = document.getElementById("start-quiz");
  const quizSection = document.getElementById("quiz-section");
  const resultsSection = document.getElementById("results-section");
  const questionText = document.getElementById("question-text");
  const choicesContainer = document.getElementById("choices-container");
  const nextButton = document.getElementById("next-question");
  const scoreText = document.getElementById("score");
  
  startButton.addEventListener("click", startQuiz);
  nextButton.addEventListener("click", loadNextQuestion);
  
  function startQuiz() {
    // startButton.parentElement.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadQuestion();
  }
  
  const choiceLabels = ["a", "b", "c", "d"];

function loadQuestion() {
  const questionData = quizData[currentQuestionIndex];
  questionText.textContent = questionData.question;
  
  // Clear previous choices
  choicesContainer.innerHTML = "";

  // Create each choice with a label (a, b, c, d)
  questionData.choices.forEach((choice, index) => {
    const choiceButton = document.createElement("div");
    choiceButton.classList.add("choice");
    choiceButton.addEventListener("click", () => handleAnswer(index));

    const label = document.createElement("span");
    label.textContent = `${choiceLabels[index]}.`;
    label.classList.add("choice-label");

    const choiceText = document.createElement("span");
    choiceText.textContent = choice;

    choiceButton.appendChild(label);
    choiceButton.appendChild(choiceText);
    choicesContainer.appendChild(choiceButton);
  });
}
  
  function handleAnswer(selectedIndex) {
    const correctIndex = quizData[currentQuestionIndex].correct;
    if (selectedIndex === correctIndex) {
      score++;
    }
    nextButton.classList.remove("hidden");
  }
  
  function loadNextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
    nextButton.classList.add("hidden");
  }
  
  function showResults() {
    quizSection.classList.add("hidden");
    resultsSection.classList.remove("hidden");
    scoreText.textContent = `You scored ${score} out of ${quizData.length}`;
    localStorage.setItem("quizScore", score);
  }
  
  document.getElementById("restart-quiz").addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    resultsSection.classList.add("hidden");
    quizSection.classList.remove("hidden");
    loadQuestion();
  });
  