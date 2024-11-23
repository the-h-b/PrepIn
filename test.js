const quizData = {
    coding: [
        { question: "What is the output of 1 + '1' in JavaScript?", options: ["2", "'2'", "'11'", "Error"], answer: "'11'" },
        { question: "Which keyword is used to declare a variable in JavaScript?", options: ["var", "int", "const", "let"], answer: "let" }
    ],
    aptitude: [
        { question: "If a train travels 120 miles in 2 hours, what is its speed?", options: ["60 mph", "120 mph", "240 mph", "30 mph"], answer: "60 mph" },
        { question: "Solve for x: 2x + 3 = 7", options: ["x=1", "x=2", "x=3", "x=4"], answer: "x=2" }
    ],
    english: [
        { question: "Choose the correct spelling:", options: ["Accomodate", "Accommodate", "Acommodate", "Acomodate"], answer: "Accommodate" },
        { question: "Which is the past tense of 'run'?", options: ["run", "ran", "runned", "runned"], answer: "ran" }
    ]
};

let currentCategory = '';
let currentQuestionIndex = 0;
let score = 0;
let previousScores = JSON.parse(localStorage.getItem("previousScores")) || [];
let timeLimit = 7200; // 2 hours in seconds
let timer;

function startTest(category) {
    currentCategory = category;
    currentQuestionIndex = 0;
    score = 0;
    displayPreviousScores();
    startTimer();
    document.getElementById('quiz-title').innerText = `${capitalize(category)} Test`;
    document.querySelector('.category-selection').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    displayQuestion();
}

function displayPreviousScores() {
    const scoreList = document.getElementById("score-list");
    scoreList.innerHTML = previousScores.map(score => `<li>${score}</li>`).join("");
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLimit <= 0) {
            clearInterval(timer);
            endTest("Time's up!");
            return;
        }
        timeLimit--;
        const hours = Math.floor(timeLimit / 3600);
        const minutes = Math.floor((timeLimit % 3600) / 60);
        const seconds = timeLimit % 60;
        document.getElementById("timer").innerText = `Time Left: ${hours}:${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}

function displayQuestion() {
    const questionData = quizData[currentCategory][currentQuestionIndex];
    document.getElementById("question-text").innerText = questionData.question;
    const optionsContainer = document.getElementById("options-container");
    optionsContainer.innerHTML = "";

    questionData.options.forEach(option => {
        const button = document.createElement("button");
        button.className = "option-button";
        button.innerText = option;
        button.onclick = () => checkAnswer(option);
        optionsContainer.appendChild(button);
    });
    updateProgressBar();
}

function checkAnswer(selectedOption) {
    const correctAnswer = quizData[currentCategory][currentQuestionIndex].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }
    document.querySelectorAll(".option-button").forEach(button => {
        button.disabled = true;
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < quizData[currentCategory].length) {
        displayQuestion();
    } else {
        endTest("Test Completed!");
    }
}

function updateProgressBar() {
    const progress = ((currentQuestionIndex + 1) / quizData[currentCategory].length) * 100;
    document.getElementById("progress-fill").style.width = progress + "%";
}

function endTest(message) {
    clearInterval(timer);
    document.getElementById("question-card").innerHTML = `
        <h2>${message}</h2>
        <p>Your score: ${score} / ${quizData[currentCategory].length}</p>
    `;
    previousScores.push(`Score: ${score} / ${quizData[currentCategory].length}`);
    localStorage.setItem("previousScores", JSON.stringify(previousScores));
}

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

window.onload = () => displayPreviousScores();
