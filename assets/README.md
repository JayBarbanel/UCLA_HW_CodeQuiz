# UCLA_HW_CodeQuiz

# The Assignment 

THe assignment was to build a code quiz using no starter code. 
The quiz was to function in a way that when a button is clicked, a timer countdown begins and multiple choice questions appear.  

If the user were to get an answer correct, the next question appears and the timer contiues to countdown.  If a user gets the answer wrong, the timer will drop down in seconds by X amount, in my case 10.  At the end of the game, the user should be able to save their high score, submit their initials and the game resets. 

# The process 
The steps I took:
I created an HTML file with all my classes and Ids that relate to their respective sections.  I then styled the page in css to make the quiz more visually appealing.  After that, I jumped into JS, where I created my variables that direct back to my html, as long as the global variables i would call in my functions.  I created a variable for my questions, which we be in an array for coding conveniance later.  Next, i created a function for my timer which allowed it to countdown.  My loadQuestion function was next.  This is where the questions get called, and their choices are displayed, linking back to their respective section in the question array.  I created a startGame function which would then hide the prompt card, the start quiz card, and then would call the first question, which had been hidden. 
I then created an eventListener upon click twhich would match the clicked answer to either the correct answer, consolelogging it.  If the answer was wrong, an alert would pop up letting you know, and time would be decuted from the clock.  Once the quiz is done, a new card comes up with the high score, and the option to submit your initials.  

#Links 

https://jaybarbanel.github.io/UCLA_HW_CodeQuiz/

https://github.com/JayBarbanel/UCLA_HW_CodeQuiz

![Screen Shot 2021-11-19 at 10 32 26 PM](https://user-images.githubusercontent.com/89555843/142717064-0aaf78fa-00cd-4bd0-931b-219bf4fb7fae.png)
![Screen Shot 2021-11-19 at 10 32 31 PM](https://user-images.githubusercontent.com/89555843/142717066-3aa01926-03b1-483d-9303-f1269f3beb0c.png)
![Screen Shot 2021-11-19 at 10 32 39 PM](https://user-images.githubusercontent.com/89555843/142717068-76b4897f-dde0-4b80-bc8e-37edf2ec157b.png)
![Screen Shot 2021-11-19 at 10 32 47 PM](https://user-images.githubusercontent.com/89555843/142717070-c23fa91a-2171-44e8-ab7e-06dc38015c89.png)
