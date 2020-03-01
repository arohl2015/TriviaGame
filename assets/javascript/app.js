// Creating the variables to track progress in game

var questionNumber = 0;
//will this read 30 seconds or do I need to enter in 30000?
var timeLeft = 30;
var questionCorrect = 0;
var questionWrong = 0;
//created placeholder var to push var questions
var placeholder = [];
//variable for user input 
var guess ="";
var right;
var wrong;

$(document).ready(function () {

//Need to put questions below within these brackets?
})

//within here create the questions and answers for the game

var questions = [
    {
        question: "Which Popular TV Show Premiered in 1994?",
        choice: ["Frasier", "Friends", "Seinfeld", "Home Improvement"],
        answer: 1,
        photo: "assets/images/friends.gif"
    },
    {
        question: "What's the Name of the Boy Band Whose First Single Was I Want You Back?",
        choice: ["98 Degrees", "Backstreet Boys", "O-Town", "NSYNC"],
        answer: 3,
        photo: "assets/images/nsync.gif"
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
}

//hide (How to hide parts of text) and reset function (will clear or reset the input form fields) to transition between question slides and start the game
$("#reset").hide();
// Start the game by clicking on the "start" button
$("#start").on("click", function () {
    $("#start").hide;
    displayQuestion();
		runTime();
		for(var i = 0; i < questions.length; i++) {
            //The push() method adds new items to the end of an array, and returns the new length.
	placeholder.push(questions[i]);
}
})

// Need to add function to start the timer
function runTime() {
    if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    }
}
// Timer is started, now the countdown needs to begin (interval function)
function decrement() {
    timeLeft --;
    $("#timer").html("<h2>Time Remaining: " + timeLeft + "</h2>");
// What happens if the timer reaches 0 before the person answers the question?
if (timeLeft === 0) {
    var questionNumber++;
    stop();
    $("#answer").html("<p>Time's up! The correct answer is: " + guess.choice[guess.answer] + "</p>");
		hidepicture();
    }
}
// Allow functionality to stop the timer
function stop() {
    clearInterval(intervalId);
    timerRunning = false;
  }

// Is there where I put the questions array?
function displayQuestion () {
    index = Math.floor(Math.random()*questions.length);
    guess = questions[index];

if () {
    
} else {
    
}



}

// Need to add a click event regarding answers
$(".useranswer").on("click", function () {
guess = 


})

// If/Else statement regarding whether user selects right or wrong answer
if (guess === right) {
    stop();
    questionCorrect++;
    guess="";
    $("#answer").html("<p>You're Correct!</p>");
    hidepicture();

} else {
    stop();
    questionWrong++;
    guess="";
    $("#answer").html("<p>That's Wrong. The correct answer is: " + guess.choice[guess.answer] + "</p>");
    hidepicture();
}

// Add in function to define hidepicture
function hidepicture() {
    
}


// Show tally of correct/wrong answers to trivia

if () {
    
} else {
    
}

//reset - is it a function or click even with the button?
function reset() {

}

$("#reset").on("click", function () {

//End of Script