import questions from "./question.json" with {type: 'json'};

const ansOptions = ["A", "B", "C", "D"];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let index = Math.floor(Math.random()*questions.length);

let currentQuestionIndex = 0;
let score = 0;

const resetState = () => {
  nextButton.style.display = "none";

  while(answerButtons.firstChild){
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

const selectAnswer = (e) => {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct;
  if(isCorrect){
    selectedBtn.classList.add("correct");
    score++;
  }else{
    selectedBtn.classList.add("incorrect");
  }

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct){
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
}

const showQuestion = () => {
  resetState();
  index = Math.floor(Math.random()*questions.length);
  let currentQuestion = questions[index];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerText = questionNo + ". " + currentQuestion.question;

  ansOptions.forEach(ans => {
    const button = document.createElement("button");
    button.innerText = currentQuestion[ans];
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if(ans == currentQuestion.answer){
      button.dataset.correct = currentQuestion.answer;
    }
    button.addEventListener("click", selectAnswer);
  });
}


const showScore = () => {
  resetState();
  questionElement.innerText = `You scored ${score} out of 10!`;
  nextButton.innerText = "Play Again";

  nextButton.style.display = "block";
}

const handleNextButton = () => {
  currentQuestionIndex++
  if(currentQuestionIndex < 10){
    showQuestion();
  }else{
    showScore();
  }
}

const startQuiz = () => {
  currentQuestionIndex = 0;
  score = 0; 
  nextButton.innerText = "Next";
  showQuestion();
}

nextButton.addEventListener("click", () => {
  if(currentQuestionIndex < 10){
    handleNextButton();
  }else{
    startQuiz();
  }
})

startQuiz();