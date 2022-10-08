// variables to keep track of quiz state    
var currentQuestion = 0;
var timeLeft = 60;
var score = 0;
var timerEl = document.getElementById("timer");
var timerInterval;
// variables to start quiz
var startBtn = document.getElementById("startBtn");
// variables to the quiz questions
/* var quizQuestions = document.getElementById("quizQuestions");
var choice1Button = document.getElementById("choice1");
var choice2Button = document.getElementById("choice2");
var choice3Button = document.getElementById("choice3");
var choice4Button = document.getElementById("choice4");
var choices = document.getElementById("choices");
var questionEl = document.getElementById("questions");
// variables for the end
var endOfGame = document.getElementById("endOfGame");
var scoreBoard = document.getElementById("score")
// ARRAY OF QUESTOINS AND ANSWERS



/* FUNCTION TO START THE QUIZ */


function beginQuiz() {
    // shows current question

    // document.getElementById("quizQuestions").style.display = questions;
    // document.getElementById("questions").textContent = questions[1].title;
    // document.getElementById("choice1").textContent = questions[1].choices[0];
    // document.getElementById("choice2").textContent = questions[1].choices[1];
    // document.getElementById("choice3").textContent = questions[1].choices[2];
    // document.getElementById("choice4").textContent = questions[1].choices[3];
    // quizQuestions.innerHTML = questions[currentQuestion].question;
    // hides header, instructions, button, and end of game list
    document.getElementById("start").classList.add("hide");
    document.getElementById("quizQuestions").classList.remove("hide");

    // calls the timer function to begin counting down
     setTimer();
    // Change each question in the array each time the correct answer is chosen
    showQuestion();

}
// function to set the timer 

function setTimer() {
     timerInterval = setInterval(function () {
        // pulls the timer from the html to start counting down. Not currently reading
        timerEl.textContent = timeLeft;
        timeLeft--;
        if (timeLeft < 0){
            timeLeft = 0;
        }
    }, 1000);
}

// function to pick the next question
function showQuestion() {
    var index = currentQuestion;
    document.getElementById("question-text").textContent = questions[index].title;
    document.querySelector(".choices").innerHTML = "";
    questions[index].choices.forEach(function (choice, i ){
        var button = document.createElement("button");
        button.textContent = i + 1 + ". " + choice;
        button.setAttribute("value", choice)
        button.onclick = questionClick;

        document.querySelector(".choices").append(button);
    })

}





/* FUNCTION FOR CLICKING A QUESTION */
function questionClick(event) {
    console.log(event.target.value);
     if (questions[currentQuestion].answer === event.target.value) {
        console.log("correct");
     } else {
        console.log("wrong");
     }
           currentQuestion++;
    if (currentQuestion === questions.length){
        quizEnd();
    } else {
        showQuestion();
    }
        

        // check if user guessed wrong
        // if (something) {
            // penalize time

            // display new time on page

            // give them feedback, letting them know it's wrong
        // } else {
            // give them feedback, letting them know it's right
        // }

        // flash right/wrong feedback on page for a short period of time

        // move to next question

        // check if we've run out of questions
        // if so, end the quiz
        // else, get the next question    
    
}

/* FUNCTION TO END THE QUIZ */
function quizEnd() {
    // stop timer

    // show end screen
    document.getElementById("endOfGame").classList.remove("hide");
    document.getElementById("quizQuestions").classList.add("hide");
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

    // user clicks button to restart quiz


// })
// user clicks on element containing choices */
