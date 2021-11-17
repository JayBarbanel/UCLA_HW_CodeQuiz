var timerElement = document.querySelector(".timerCount");
var startButton = document.querySelector(".startButton");
var questionEl = document.querySelector(".questions");
var highScore = document.querySelector(".highScore");

var questionEl = [{
        question: "Question 1: Inside which HTML element do we put the JavaScript?",
        correctAnswer: "optionB",
        answers: {
            optionA: "<scripting>",
            optionB: "<script>",
            optionC: "<js>",
            optionD: "<javascript"
        }
    },
    {
        question: "Question 2: How to write an IF statement in JavaScript",
        correctAnswer: "optionA",
        answers: {
            optionA: "if (i==5)",
            optionB: "if i== 5 then",
            optionC: "if i = 5",
            optionD: "if i = 5 then"
        }
    },
    {
        question: "How does a FOR loop start?",
        correctAnswer: "optionC",
        answers: {
            optionA: "for i = 1 to 5",
            optionB: "for (i <= 5; i++)",
            optionC: "for (i=0; i<=5;i++",
            optionD: "for (i=0;i<=f)"
        }
    },
    {
        question: "How do you aadd a comment in JavaScript?",
        correctAnswer: "optionD",
        answers: {
            optionA: "<!--This is a comment-->",
            optionB: "_This is a comment",
            optionC: "Comment-here",
            optionD: "//This is a comment"
        }

    },
    {

    }
]