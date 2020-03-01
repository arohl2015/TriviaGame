// Creating the variables to track progress in game

var questionNumber = 0;
//will this read 30 seconds or do I need to enter in 30000?
var timeLeft = 30;
var questionCorrect = 0;
var questionWrong = 0;
//created placeholder var to push var questions
var placeholder = [];
//variable for user input 
var guess = "";
var right;
var wrong;

// create the questions and answers for the game

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
    //    {
    //         question:
    //         choice:
    //         answer:
    //         photo:
    //     },
    //     {
    //         question:
    //         choice:
    //         answer:
    //         photo:
    //     },
    //     {
    //         question:
    //         choice:
    //         answer:
    //         photo:
    //     },
    //     {
    //         question:
    //         choice:
    //         answer:
    //         photo:
    //     },
    //     {
    //         question:
    //         choice:
    //         answer:
    //         photo:
    //     },
]

$("#content").hide();
$("#results").hide();
$("#reset").hide();
//Start game
// $(document).ready(function () {
//     
//     //Need to put questions below within these brackets?
// })

//hide (How to hide parts of text) and reset function (will clear or reset the input form fields) to transition between question slides and start the game

// Start the game by clicking on the "start" button
$("#start").on("click", function () {
    //$("#start").show();
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
    //  guess = questions[index];
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
// Add in function to define hidepicture
function displayResults() {
    console.log(questionCorrect, questionWrong);
    $("#displayresults").show();
    $("#results").append("<h3> Right Answers" + questionCorrect + "</h3>");
    $("#results").append("<h3> Wrong Answers" + questionWrong + "</h3>");
    $("#reset").show();
}


// Show tally of correct/wrong answers to trivia


//reset - is it a function or click even with the button?
$("#reset").on("click", function () {
})

//End of Script