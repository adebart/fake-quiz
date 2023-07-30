const quizData = [
    {
        question: "What is the capital of France?",
        answers: ["London", "Paris", "Berlin", "Rome"],
        correct: "Paris"
    },
    {
        question: "Which is the largest planet in our solar system?",
        answers: ["Venus", "Saturn", "Jupiter", "Neptune"],
        correct: "Jupiter"
    },
    {
        question: "What is 12 multiplied by 5?",
        answers: ["60", "24", "36", "48"],
        correct: "60"
    },
    {
        question: "What is the capital of Nigeria",
        answers: ["Ikeja", "Ibadan", "lagos", "Abuja"],
        correct: "Abuja"
    },
    {
        question: "What is 20 multiplied by 5?",
        answers: ["60", "200", "120", "100"],
        correct: "100"
    }
];

let currentQuestion = 0;
const questionElement = document.getElementById("question");
const answersElement = document.getElementById("answers");

function showQuestion() {
    const currentQuiz = quizData[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    answersElement.innerHTML = "";

    for (const answer of currentQuiz.answers) {
        const button = document.createElement("button");
        button.textContent = answer;
        button.addEventListener("click", checkAnswer);
        answersElement.appendChild(button);
    }
}

function checkAnswer(event) {
    const selectedAnswer = event.target.textContent;
    const currentQuiz = quizData[currentQuestion];

    if (selectedAnswer === currentQuiz.correct) {
        alert("Correct!");
    } else {
        alert(`Incorrect. The correct answer is: ${currentQuiz.correct}`);
    }

    currentQuestion++;
    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
        resetQuiz();
    }
}

function resetQuiz() {
    currentQuestion = 0;
    showQuestion();
}

showQuestion();
