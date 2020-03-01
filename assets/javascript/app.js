//Start game

// Creating the variables to track progress in game
var questionNumber = 0;
//will this read 15 seconds or do I need to enter in 15000?
var timeLeft = 15;
var questionCorrect = 0;
var questionWrong = 0;
//creat var to load questions
var indexQ = 0;
//variable for user input 
var guess = false; //<---will this actually stop the timer if the user clicks?
var right;
var wrong;
// create the questions and answers for the game
$(document).ready(function () {
var questions = [
    {
        question: "Which popular TV show premiered in 1994?",
        choice: ["Frasier", "Friends", "Seinfeld", "Home Improvement"],
        answer: 1,
        photo: "assets/images/friends.gif"
    },
    {
        question: "What's the name of the boy band whose 1st single was I Want You Back?",
        choice: ["98 Degrees", "Backstreet Boys", "O-Town", "NSYNC"],
        answer: 3,
        photo: "assets/images/nsync.gif"
    },
    {
        question: "Which of the movies below did NOT star Lindsey Lohan?",
        choice: ["Just My Luck", "The Other Side of Heaven", "Mean Girls", "I Know Who Killed Me"],
        answer: 1,
        photo: "assets/images/lohan.gif"
    },
    {
        question: "Disney turned comics from what company into popular movies starting in 2008?",
        choice: ["DC", "Dark Horse", "Marvel", "Image"],
        answer: 2,
        photo: "assets/images/ironman.gif"
    },
    {
        question: "Britney Spears has named all her dogs these names except:",
        choice: ["Lucy", "Bit Bit", "Hannah", "Lacy Loo"],
        answer: 0,
        photo: "assets/images/britney.gif"
    }
    {
        question: "Lady Gaga wore a dress made of what to the MTV VMA's?",
        choice: ["Roses", "Plastic", "Vegetables", "Meat"],
        answer: 3,
        photo: "assets/images/gagameatdress.gif"
    },
    {
        question: "Who won the 1st season of the show Survivor?",
        choice: ["Justin Guarini", "Richard Hatch", "Trista Rehn", "Alex Michel"],
        answer: 1,
        photo: "assets/images/hatch.gif"
    },
    {
        question: "The popular reality series Keeping up with the Kardashians premiered in what year?",
        choice: ["2007", "2008", "2009", "2010"],
        answer: 0,
        photo: "assets/images/kardashian.gif"
    },
    {
        question: "What are Justin Bieber fans known as?",
        choice: ["Beavers", "Believers", "Beliebers", "Blenders"],
        answer: 2,
        photo: "assets/images/bieber.gif"
    },
    {
        question: "Who hosts the singing competition The Voice?",
        choice: ["Ryan Seacrest", "Chris Harrison", "Jimmy Fallon", "Carson Daly"],
        answer: 3,
        photo: "assets/images/thevoice.gif"
    },
})]

//hide (How to hide parts of text) and reset function (will clear or reset the input form fields) to transition between question slides and start the game
// $("#answer").hide();
// $("#question").hide();
$("#reset").hide();

// Start the game by clicking on the "start" button
$("#start").on("click", function () {
    $("#start").hide();
    $("#content").show();
    displayQuestion();
		//runTime();
//The push() method adds new items to the end of an array, and returns the new length.	
})

// Need to add function to start the timer
function runTime() {
   // if (!timerRunning) {
        intervalId = setInterval(decrement, 1000);
        clockRunning = true;
    //}
}
// Timer is started, now the countdown needs to begin (interval function)
function decrement() {
    timeLeft--;
    $("#timer").html("<h2>Time Remaining: " + timeLeft + "</h2>");
    // What happens if the timer reaches 0 before the person answers the question?
    if (timeLeft === 0) {
        questionNumber++;
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
function displayQuestion() {
// index = Math.floor(Math.random()*questions.length);
// guess = questions[index];
    $("#question").text(questions[questionNumber].question);
    $("#choice-1").text(questions[questionNumber].choice[0]);
    $("#choice-2").text(questions[questionNumber].choice[1]);
    $("#choice-3").text(questions[questionNumber].choice[2]);
    $("#choice-4").text(questions[questionNumber].choice[3]);
}

// Need to add a click event regarding answers
$(".userchoice").on("click", function () {
    guess = parseInt($(this).attr("value"));
    console.log("guess", guess);

    // If/Else statement regarding whether user selects right or wrong answer
    if (guess === questions[questionNumber].answer) {
        // stop();
        questionCorrect++;
        guess = "";
        $("#answer").html("<p>You're Correct!</p>");
        //hidepicture();

    } else {
        //stop();
        questionWrong++;
        guess = "";
        $("#answer").html("<p>That's Wrong. The correct answer is: " + guess.choice[guess.answer] + "</p>");
        //hidepicture();
    }
    if (questionNumber < questions.length - 1) {
        questionNumber++;
        displayQuestion();

    } else {
        displayResults();

    }
})
// Show tally of correct/wrong answers to trivia
function displayResults() {
    console.log(questionCorrect, questionWrong);
    $("#displayresults").show();
    $("#results").append("<h3> Right Answers" + questionCorrect + "</h3>");
    $("#results").append("<h3> Wrong Answers" + questionWrong + "</h3>");
    $("#reset").show();
}

//reset - is it a function or click even with the button?
$("#reset").on("click", function () {
})

//End of Script