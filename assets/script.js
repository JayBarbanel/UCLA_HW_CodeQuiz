// These are my variables that direct back to my HTML

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
var answersEl = document.querySelector("#answers")
var scoreEl = document.querySelector("#score")

// Global variables 
var timer;
var timerCount = 80;
var currentQuestion = 0;
var score = 0;


// Questions, choices and answers 
var questions = [{
        question: "Question 1: Inside which HTML element do we put the JavaScript?",
        choices: ["<scripting>", "<script>", "<js>", "<javascript>"],
        answers: "<script>"
    },
    {
        question: "Question 2: How to write an IF statement in JavaScript",
        choices: ["if (i==5)", "if i==5 then", "if i = 5", "if i = 5 then"],
        answers: "if (i==5)"

    },
    {
        question: "How does a FOR loop start?",
        choices: ["for i = i to 5", "for (i<= 5; i++", "for (i=0: i<=5;i++)", "for (i=0;i<=f"],
        answers: "for (i=0: i<=5;i++)"

    },
    {
        question: "How do you add a comment in JavaScript?",
        choices: ["<--!This is a comment-->", "__This is a comment", "Comment-here", "//This is a comment"],
        answers: "//This is a comment"
    },


]

// Timer function, timer starts when 'Start Quiz' button is clicked
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

// Function for when button is clicked, question 2 will load on page 
function loadQuestion(q) {
    questionEl.textContent = questions[q].question;
    answer1El.textContent = questions[q].choices[0];
    answer1El.setAttribute("data-answer", questions[q].choices[0]);
    answer2El.textContent = questions[q].choices[1];
    answer2El.setAttribute("data-answer", questions[q].choices[1]);
    answer3El.textContent = questions[q].choices[2];
    answer3El.setAttribute("data-answer", questions[q].choices[2]);
    answer4El.textContent = questions[q].choices[3];
    answer4El.setAttribute("data-answer", questions[q].choices[3]);
    console.log("questionload")
}

// Start game function, also hides and removed hides from certain elements from landing page
function startGame() {
    startTimer()
    promptEl.classList.add("hide");
    startButton.classList.add("hide");
    qContainerEl.classList.remove("hide");
    loadQuestion(currentQuestion)
}


// This is my addEventListener to start the game
startButton.addEventListener("click", startGame);
answersEl.addEventListener("click", function(event) {
    console.log(event.target.value)
    if (event.target.matches("li")) {
        var answer = event.target.getAttribute("data-answer");
        console.log(answer);
        if (answer === questions[currentQuestion].answers) {
            score++
            // loadQuestion(currentQuestion)
            console.log("correct")
        } else {
            timerCount -= 10;
            console.log("wrong");
            alert("Yo! That's not the right answer, gotta cut down your timer by 10 seconds, sorry!")
        }
        currentQuestion++
        console.log(currentQuestion, questions.length)
        if (currentQuestion >= questions.length) {
            console.log("Quiz is done")
            scoreEl.style.display = "block"
            qContainerEl.classList.add("hide");
        } else(loadQuestion(currentQuestion));

    }


})