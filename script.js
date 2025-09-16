const questions = [
  {
    question: "Qual é a fórmula da área de um círculo?",
    options: ["πr²", "2πr", "πd", "r²"],
    answer: "πr²"
  },
  {
    question: "Quem foi o primeiro presidente do Brasil?",
    options: ["Getúlio Vargas", "Juscelino Kubitschek", "Deodoro da Fonseca", "Dom Pedro II"],
    answer: "Deodoro da Fonseca"
  },
  {
    question: "Qual é a principal função das mitocôndrias?",
    options: ["Produção de energia", "Síntese de proteínas", "Armazenamento de DNA", "Reprodução celular"],
    answer: "Produção de energia"
  },
  {
    question: "Em que ano o Brasil proclamou a sua independência?",
    options: ["1889", "1822", "1500", "1750"],
    answer: "1822"
  },
  {
    question: "Qual é o símbolo químico do Ouro?",
    options: ["O", "Ag", "Au", "Fe"],
    answer: "Au"
  },
  {
    question: "Qual é o maior continente do mundo?",
    options: ["África", "América", "Ásia", "Europa"],
    answer: "Ásia"
  },
  {
    question: "Qual é a capital da França?",
    options: ["Londres", "Paris", "Berlim", "Roma"],
    answer: "Paris"
  },
  {
    question: "Quem escreveu a obra 'Dom Casmurro'?",
    options: ["Machado de Assis", "José de Alencar", "Monteiro Lobato", "Clarice Lispector"],
    answer: "Machado de Assis"
  },
  {
    question: "Qual é a principal função da fotossíntese?",
    options: ["Produção de oxigênio", "Produção de água", "Produção de nutrientes", "Produção de glicose"],
    answer: "Produção de glicose"
  },
  {
    question: "O que é a fotossíntese?",
    options: ["Processo de absorção de nutrientes pelas plantas", "Processo de conversão de luz em energia", "Reação química que ocorre no estômago", "Reação de digestão em plantas"],
    answer: "Processo de conversão de luz em energia"
  }
];

let currentQuestionIndex = 0;
let score = 0;

const nextBtn = document.getElementById("next-btn");
const questionContainer = document.getElementById("question-container");
const resultContainer = document.getElementById("result");

function loadQuestion() {
  const currentQuestion = questions[currentQuestionIndex];
  
  questionContainer.innerHTML = `
    <h2>${currentQuestion.question}</h2>
    <div>
      ${currentQuestion.options.map((option, index) => `
        <button class="option-btn" onclick="checkAnswer('${option}')">${option}</button>
      `).join('')}
    </div>
  `;
}

function checkAnswer(selectedOption) {
  const currentQuestion = questions[currentQuestionIndex];

  if (selectedOption === currentQuestion.answer) {
    score++;
  }

  if (currentQuestionIndex < questions.length - 1) {
    currentQuestionIndex++;
    loadQuestion();
  } else {
    resultContainer.innerHTML = `<h2>Você acertou ${score} de ${questions.length} perguntas!</h2>`;
    nextBtn.style.display = "none"; // Desabilita o botão "Próxima Pergunta"
  }
}

nextBtn.addEventListener("click", loadQuestion);

loadQuestion();