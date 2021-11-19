var timerEl = document.querySelector("#timerCount");
var startButton = document.querySelector(".startButton");
var questionEl = document.querySelector("#question");
var highScoreEl = document.querySelector("#highScore");
var promptEl = document.querySelector("#prompt");
var answer1El = document.querySelector("#answer1");
var answer2El = document.querySelector("#answer2");
var answer3El = document.querySelector("#answer3");
var answer4El = document.querySelector("#answer4");
var qContainerEl = document.querySelector("#qContainer");

var timer;
var timerCount = 60;
var currentQuestion = 0;

var questions = [{
        question: "Question 1: Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answers: "<script>"
    },
    {
        question: "Question 2: How to write an IF statement in JavaScript",
        choices: ["if (i==f", "if i==5 then", "if i = 5", "if i = 5 then"],
        answers: "if (i==5)"

    },
    {
        question: "How does a FOR loop start?",
        choices: ["for i = i to 5", "for (i<= 5; i++", "for (i=0; i<=5;i++", "for (i=0;i<=f"],
        answers: "for (i=0: i<=5;i++"

    },
    {
        question: "How do you aadd a comment in JavaScript?",
        choices: ["<--!This is a comment-->", "__This is a comment", "Comment-here", "//This is a comment"],
        answers: "//This is a comment"
    },


]

function startTimer() {
    // Sets timer
    timer = setInterval(function() {
        timerCount--;
        timerEl.textContent = timerCount;
        // Tests if time has run out
        if (timerCount === 0) {
            // Clears interval
            clearInterval(timer);
        }
    }, 1000);
}

function loadQuestion(q) {
    questionEl.textContent = questions[q].question;
    answer1El.textContent = questions[q].choices[0];
    answer2El.textContent = questions[q].choices[1];
    answer3El.textContent = questions[q].choices[2];
    answer4El.textContent = questions[q].choices[3];
    console.log("questionload")
}


function startGame() {
    startTimer()
    promptEl.classList.add("hide");
    startButton.classList.add("hide");
    qContainerEl.classList.remove("hide");
    loadQuestion(currentQuestion)
}



startButton.addEventListener("click", startGame);