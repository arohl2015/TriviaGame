//Start the game

$(document).ready(function () {
startGame()
})

// Creating the variables to track progress in game

var questionNumber = 0;
//will this read 20 seconds or do I need to enter in 2000?
var timeLeft = 20;
var questionCorrect = 0;
var questionWrong = 0;

//within here create the questions and answers for the game

var questions = [
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
    {
        question:
        choice:
        answer:
        photo:
    },
]

// Start the game by clicking on the "start" button
$("start").on("click", function () {
// Loop through questions - is that done within the start function?
}

// Need to add function to start the timer
function runTime() {
    if (!timerRunning) {
        intervalId = setInterval(count, 2000);
        clockRunning = true;
}

// Timer is started, now the countdown needs to begin (interval function)
function decrement() {
    timeLeft --;
    $("#timer").html("<h2>Time Remaining: " + timeLeft + "</h2>");
}

// Allow functionality to stop the timer once it reaches 0
function stop() {
    clearInterval(intervalId);
    timerRunning = false;
  }
// Within here will need to add in the vars relating to Q&A's
// If/Else statement to clarify if user is correct or wrong 
if (condition) {


} else {

}

// Click function as user selects choice


// Show tally of correct/wrong answers to trivia

//reset
function reset() {

}

//End of Script