const quizData = [
    {
        question: "Qual é a principal causa do desmatamento nas florestas tropicais?",
        options: [
            "Expansão da agricultura e pecuária",
            "Construção de infraestrutura urbana",
            "Turismo não controlado",
            "Mudanças climáticas naturais"
        ],
        correctAnswer: "Expansão da agricultura e pecuária"
    },
    {
        question: "O que ocorre com a biodiversidade quando grandes áreas de floresta são desmatadas?",
        options: [
            "A biodiversidade aumenta devido ao aumento de atividades humanas",
            "A biodiversidade diminui, levando à extinção de espécies",
            "A biodiversidade se mantém estável, mas com novas espécies adaptadas",
            "A biodiversidade não é afetada, pois as florestas se regeneram rapidamente"
        ],
        correctAnswer: "A biodiversidade diminui, levando à extinção de espécies"
    },
    {
        question: "Qual é a principal consequência do desmatamento para as mudanças climáticas?",
        options: [
            "Aumento da captura de carbono",
            "Redução da quantidade de oxigênio na atmosfera",
            "Emissão de gases de efeito estufa devido à queima e decomposição de árvores",
            "Diminuição da quantidade de chuvas nas áreas desmatadas"
        ],
        correctAnswer: "Emissão de gases de efeito estufa devido à queima e decomposição de árvores"
    },
    {
        question: "De que forma o desmatamento afeta as populações indígenas?",
        options: [
            "Cria novas oportunidades de trabalho e desenvolvimento",
            "Destrói os habitats naturais e compromete a sobrevivência das culturas indígenas",
            "Gera mais fontes de energia elétrica para as comunidades",
            "Melhora a saúde e a educação das populações locais"
        ],
        correctAnswer: "Destrói os habitats naturais e compromete a sobrevivência das culturas indígenas"
    },
    {
        question: "Como o desmatamento pode afetar a saúde humana?",
        options: [
            "Aumentando a qualidade do ar e reduzindo doenças respiratórias",
            "Aumentando a incidência de doenças transmitidas por vetores, como malária",
            "Não afeta a saúde humana",
            "Reduzindo a contaminação por poluição atmosférica"
        ],
        correctAnswer: "Aumentando a incidência de doenças transmitidas por vetores, como malária"
    },
    {
        question: "Qual das alternativas abaixo é um efeito do desmatamento nas áreas de água doce?",
        options: [
            "Aumento da quantidade de água potável disponível",
            "Diminuição da qualidade da água e aumento do assoreamento de rios",
            "Melhora da qualidade da água devido à diminuição da erosão",
            "Estabilidade dos recursos hídricos"
        ],
        correctAnswer: "Diminuição da qualidade da água e aumento do assoreamento de rios"
    },
    {
        question: "O que a sociedade pode fazer para reduzir os impactos do desmatamento?",
        options: [
            "Expandir áreas urbanas para acomodar a população crescente",
            "Promover a agricultura sustentável e o uso responsável dos recursos naturais",
            "Aumentar o consumo de carne para promover a pecuária",
            "Reduzir a quantidade de áreas protegidas nas florestas"
        ],
        correctAnswer: "Promover a agricultura sustentável e o uso responsável dos recursos naturais"
    },
    {
        question: "Quais são os principais impactos econômicos do desmatamento para o futuro?",
        options: [
            "Aumento na produção de commodities agrícolas e crescimento rápido da economia",
            "Perda de recursos naturais que sustentam muitas indústrias, como a farmacêutica e a madeira",
            "Estabilidade econômica, sem impactos significativos a longo prazo",
            "Menor dependência de recursos naturais e avanço em tecnologias alternativas"
        ],
        correctAnswer: "Perda de recursos naturais que sustentam muitas indústrias, como a farmacêutica e a madeira"
    },
    {
        question: "Como o desmatamento pode afetar o clima global?",
        options: [
            "Diminui a quantidade de carbono na atmosfera",
            "Aumenta a temperatura global devido à liberação de gases de efeito estufa",
            "Reduz os níveis de água nos oceanos",
            "Não tem impacto no clima global"
        ],
        correctAnswer: "Aumenta a temperatura global devido à liberação de gases de efeito estufa"
    },
    {
        question: "Qual é o papel das tecnologias na luta contra o desmatamento?",
        options: [
            "Não há tecnologias que possam ajudar a reduzir o desmatamento",
            "Tecnologias como imagens de satélite e monitoramento de áreas ajudam a detectar atividades ilegais de desmatamento",
            "As tecnologias aumentam a produtividade agrícola e aceleram o desmatamento",
            "A tecnologia é inútil, pois não pode substituir as ações humanas para salvar as florestas"
        ],
        correctAnswer: "Tecnologias como imagens de satélite e monitoramento de áreas ajudam a detectar atividades ilegais de desmatamento"
    }
];

const quizContainer = document.getElementById("quiz");
const submitBtn = document.getElementById("submit-btn");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizData.forEach((questionData, index) => {
        const questionElement = document.createElement("div");
        questionElement.classList.add("question");

        questionElement.innerHTML = `
            <p>${questionData.question}</p>
            ${questionData.options.map((option, i) => `
                <label>
                    <input type="radio" name="question${index}" value="${option}">
                    ${option}
                </label>
            `).join('')}
        `;

        quizContainer.appendChild(questionElement);
    });
}

function showResult() {
    const answers = Array.from(document.querySelectorAll('input[type="radio"]:checked'));
    let score = 0;

    answers.forEach(answer => {
        const questionIndex = answer.name.replace('question', '');
        if (answer.value === quizData[questionIndex].correctAnswer) {
            score++;
        }
    });

    resultContainer.textContent = `Você acertou ${score} de ${quizData.length} questões.`;
}

submitBtn.addEventListener("click", showResult);

loadQuiz();
