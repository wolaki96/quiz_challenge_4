// variables to keep track of quiz state    
var currentQuestion = 0;
var timeLeft = 60;
var score =0;
var timerEl = document.querySelector(".timer");
// variables to start quiz
var startQuiz = document.getElementById("start");
var startBtn = document.getElementById("startBtn");
// variables to the quiz questions
var quizQuestions = document.getElementById("quizQuestions");
var choice1Button = document.getElementById("choice1");
var choice2Button = document.getElementById("choice2");
var choice3Button = document.getElementById("choice3");
var choice4Button = document.getElementById("choice4");
var choices = document.getElementById("choices");
var questionEl = documet.getElementById("questions");
// variables for the end
var endOfGame = document.getElementById("endOfGame");
var scoreBoard = document.getElementById("score")
// ARRAY OF QUESTOINS AND ANSWERS
var questions = [
    {
        
        title: 'Commonly used data types DO NOT include:',
        choices: [
            'strings ',
            ' booleans ',
            ' alerts ',
            ' numbers '
        ],
        answer: 'alerts'
    },
    {
       
        title: 'The condition in an if / else statement is enclosed within ___.',
        choices: [
            'quotes',
            'curly brackets',
            'parentheses',
            'square brackets'
        ],
        answer: 'parentheses'
    },
    {
        
        title: 'Arrays in JavaScript can be used to store ___.',
        choices: [
            'numbers and strings',
            'other arrays',
            'booleans',
            'all of the above'
        ],
        answer: 'all of the above'
    },
    {
        
        title: 'String values must be enclosed within ___ when being assigned to variables.',
        choices: [
            'commas',
            'curly brackets',
            'quotes',
            'parentheses'
        ],
        answer: 'quotes'
    },
    {
       
        title: 'A very useful tool used during development and debugging for printing content to the debugger is:',
        choices: [
            'JavaScript',
            'terminal / bash',
            'for loops',
            'console.log'
        ],
        answer: 'console.log'
    }
];


/* FUNCTION TO START THE QUIZ */

 
function beginQuiz() {
// shows current question

document.getElementById("quizQuestions").style.display = questions;
document.getElementById("questions").textContent = questions[1].title;
document.getElementById("choice1").textContent = questions[1].choices[0];
document.getElementById("choice2").textContent = questions[1].choices[1];
document.getElementById("choice3").textContent = questions[1].choices[2];
document.getElementById("choice4").textContent = questions[1].choices[3];
currentQuestion = 0;
quizQuestions.innerHTML = question[currentQuestion].question;
// hides header, instructions, button, and end of game list
document.getElementById("questionsHeader").classList.add("hide");
document.getElementById("instructions").classList.add("hide");
document.getElementById("button").classList.add('hide');

// calls the timer function to begin counting down
setTimer();
// Change each question in the array each time the correct answer is chosen
showQuestion();

}
// function to set the timer 

function setTimer() {
    var timerInterval = setInterval(function () {
        // pulls the timer from the html to start counting down. Not currently reading
        timerEl.textContent =  "Time Remaining " + timeLeft;
    timeLeft--;
    if(timeLeft === 0) {
        clearInterval(timerInterval);
}
    },1000); 
}

// function to pick the next question
function showQuestion() {
    // get current question object from array
    //include answer, right, and wrong
    // to do this, creating a for loop to creat a button on each page
    var quizQuestions = document.getElementById('quizQuestions');
    quizQuestions.choices.forEach(choices => {
       var button = document.createElement('choices');
       button.innerText = choices.text;
   
    })}
 


   

/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {

    if (currentQuestion) {
        questions++;

    // check if user guessed wrong
    if (something) {
        // penalize time

        // display new time on page

        // give them feedback, letting them know it's wrong
    } else {
        // give them feedback, letting them know it's right
    }

    // flash right/wrong feedback on page for a short period of time

    // move to next question

    // check if we've run out of questions
        // if so, end the quiz
        // else, get the next question    
}}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer

    // show end screen

    // show final score

    // hide questions section
}


function saveHighscore() {
    // get value of input box - for initials

    // make sure value wasn't empty
        // get saved scores from localstorage, or if not any, set to empty array

        // format new score object for current user

        // save to local storage

        // redirect to next page
}

/* CLICK EVENTS */
    // user clicks button to submit initials
// start the quiz by pushing the button
startBtn.addEventListener('click', beginQuiz);
choice1Button.addEventListener ('click', submit);
choice2Button.addEventListener ('click', submit);
choice3Button.addEventListener ('click', submit);
choice4Button.addEventListener ('click', submit);
    // user clicks button to restart quiz


// })
// user clicks on element containing choices */
