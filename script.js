const questions = [
    {
        question: "Qual é a principal causa do desmatamento na Amazônia?",
        answers: ["Agronegócio", "Turismo", "Pesca", "Mineração"],
        correct: "Agronegócio"
    },
    {
        question: "Qual bioma brasileiro está mais ameaçado pelo desmatamento?",
        answers: ["Cerrado", "Pantanal", "Mata Atlântica", "Amazônia"],
        correct: "Amazônia"
    },
    {
        question: "O que o desmatamento pode causar aos rios?",
        answers: ["Aumento da quantidade de água", "Poluição e assoreamento", "Melhoria na qualidade da água", "Nenhuma das alternativas"],
        correct: "Poluição e assoreamento"
    },
    {
        question: "Quais são as principais consequências do desmatamento para os animais?",
        answers: ["Aumento da biodiversidade", "Perda de habitat", "Melhoria nas condições de vida", "Nenhuma das alternativas"],
        correct: "Perda de habitat"
    },
    {
        question: "O que o desmatamento contribui para as mudanças climáticas?",
        answers: ["Redução das emissões de CO2", "Aumento das emissões de CO2", "Nenhuma alteração no clima", "Aquecimento do clima local"],
        correct: "Aumento das emissões de CO2"
    },
    {
        question: "Qual é o principal impacto do desmatamento nas populações indígenas?",
        answers: ["Aumento de terras disponíveis", "Perda de território e recursos naturais", "Melhorias nas condições de vida", "Nenhum impacto"],
        correct: "Perda de território e recursos naturais"
    },
    {
        question: "Qual país tem uma das maiores taxas de desmatamento no mundo?",
        answers: ["Brasil", "China", "Estados Unidos", "Canadá"],
        correct: "Brasil"
    },
    {
        question: "O que o governo brasileiro tem feito para combater o desmatamento ilegal?",
        answers: ["Proteger áreas de preservação", "Incentivar a exploração sustentável", "Desconsiderar políticas ambientais", "Fechar os olhos para a situação"],
        correct: "Proteger áreas de preservação"
    },
    {
        question: "O desmatamento ilegal está principalmente associado a qual atividade?",
        answers: ["Agricultura familiar", "Exploração madeireira ilegal", "Turismo ecológico", "Reflorestamento"],
        correct: "Exploração madeireira ilegal"
    },
    {
        question: "Quais são os principais benefícios do reflorestamento?",
        answers: ["Recuperação da biodiversidade", "Aumento da poluição", "Redução da produção de oxigênio", "Nenhum benefício"],
        correct: "Recuperação da biodiversidade"
    }
];

let currentQuestionIndex = 0;
let score = 0;

const questionContainer = document.getElementById("question");
const answersContainer = document.getElementById("answers");
const nextBtn = document.getElementById("next-btn");
const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const totalQuestionsElement = document.getElementById("total-questions");

function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionContainer.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => checkAnswer(answer);
        answersContainer.appendChild(button);
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
    questionContainer.textContent = "";
    answersContainer.innerHTML = "";
    nextBtn.style.display = "none";
    scoreElement.textContent = score;
    totalQuestionsElement.textContent = questions.length;
    scoreContainer.style.display = "block";
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