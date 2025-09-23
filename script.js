const questions = [
    {
        question: "Qual é o maior animal terrestre?",
        answers: ["Elefante", "Girafa", "Robalo", "Leão"],
        correct: "Elefante"
    },
    {
        question: "Onde fica a maior floresta do mundo?",
        answers: ["África", "Brasil", "Rússia", "Austrália"],
        correct: "Brasil"
    },
    {
        question: "Qual é o animal mais rápido do mundo?",
        answers: ["Falcão-peregrino", "Guepardo", "Leão", "Coelho"],
        correct: "Falcão-peregrino"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    currentQuestion.answers.forEach(answer => {
        const answerBtn = document.createElement("button");
        answerBtn.textContent = answer;
        answerBtn.classList.add("answer-btn");
        answerBtn.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(answerBtn);
    });
}

function checkAnswer(selectedAnswer) {
    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correct) {
        score++;
    }
    nextBtn.style.display = "block";
}

function showResults() {
    questionContainer.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
    answersContainer.innerHTML = "";
    nextBtn.style.display = "none";
}

nextBtn.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        nextBtn.style.display = "none";
    } else {
        showResults();
    }
});

loadQuestion();