//Start game

// create the questions and answers for the game
$(document).ready(function () {
    var questions = [
        {
            question: "Which popular TV show premiered in 1994?",
            choice: ["Frasier", "Friends", "Seinfeld", "Home Improvement"],
            answer: 1,
            photo: "./assets/images/friends.gif"
        },
        {
            question: "What's the name of the boy band whose 1st single was I Want You Back?",
            choice: ["98 Degrees", "Backstreet Boys", "O-Town", "NSYNC"],
            answer: 3,
            photo: "./assets/images/nsync.gif"
        },
        {
            question: "Which of the movies below did NOT star Lindsey Lohan?",
            choice: ["Just My Luck", "The Other Side of Heaven", "Mean Girls", "I Know Who Killed Me"],
            answer: 1,
            photo: "./assets/images/lohan.gif"
        },
        {
            question: "Disney turned comics from what company into popular movies starting in 2008?",
            choice: ["DC", "Dark Horse", "Marvel", "Image"],
            answer: 2,
            photo: "./assets/images/ironman.gif"
        },
        {
            question: "Britney Spears has named all her dogs these names except:",
            choice: ["Lucy", "Bit Bit", "Hannah", "Lacy Loo"],
            answer: 0,
            photo: "./assets/images/britney.gif"
        },
        {
            question: "Lady Gaga wore a dress made of what to the MTV VMA's?",
            choice: ["Roses", "Plastic", "Vegetables", "Meat"],
            answer: 3,
            photo: "./assets/images/gagameatdress.gif"
        },
        {
            question: "Who won the 1st season of the show Survivor?",
            choice: ["Justin Guarini", "Richard Hatch", "Trista Rehn", "Alex Michel"],
            answer: 1,
            photo: "./assets/images/hatch.gif"
        },
        {
            question: "The popular reality series Keeping up with the Kardashians premiered in what year?",
            choice: ["2007", "2008", "2009", "2010"],
            answer: 0,
            photo: "./assets/images/kardashian.gif"
        },
        {
            question: "What are Justin Bieber fans known as?",
            choice: ["Beavers", "Believers", "Beliebers", "Blenders"],
            answer: 2,
            photo: "./assets/images/bieber.gif"
        },
        {
            question: "Who hosts the singing competition The Voice?",
            choice: ["Ryan Seacrest", "Chris Harrison", "Jimmy Fallon", "Carson Daly"],
            answer: 3,
            photo: "./assets/images/thevoice.gif"
        }
    ];

    // Creating the variables to track progress in game
    var questionNumber = 0;
    //will this read 15 seconds or do I need to enter in 15000?
    var timeLeft = 20;
    //more vars for the timer
    var intervalID;
    //var running = false;
    var questionCorrect = 0;
    var questionWrong = 0;
    //variable for user input 
    var guess = "";
    var right;
    var wrong;

    //hide (How to hide parts of text) and reset function (will clear or reset the input form fields) to transition between question slides and start the game
    $("#reset").hide();
    $("#content").hide();
    $("#displayresults").hide();
    // Start the game by clicking on the "start" button
    $("#start").on("click", function () {
        $("#start").hide();
        $("#content").show();
        displayQuestion();
    })
    // Need to add function to start the timer
    function runTime() {
        clearInterval(intervalID);
        timeLeft = 20;
        intervalID = setInterval(decrement, 1000);
    }
    // Timer is started, now the countdown needs to begin (interval function)
    function decrement() {
        $("#timer").html("<h2>Time Remaining: " + timeLeft + "</h2>");

        // What happens if the timer reaches 0 before the person answers the question?
        if (timeLeft === 0) {
            questionWrong++;
            guess = "";
            $("#answer").text("<p>That's Wrong. The correct answer is: " + questions[questionNumber].choice[questions[questionNumber].answer] + "</p>");
            setTimeout(function () {
                if (questionNumber < questions.length - 1) {
                    questionNumber++;
                    console.log(questionNumber);
                    displayQuestion();

                } else {
                    clearInterval(intervalID);
                    displayResults();
                }
            }, 3000);
        }
        else {
            timeLeft--;
        }
    }

// function to display the questions
function displayQuestion() {
    // index = Math.floor(Math.random()*questions.length);
    // guess = questions[index];
    $("#answer").hide();
    $(".wrapper").show();
    $("#question").text(questions[questionNumber].question);
    $("#choice-1").text(questions[questionNumber].choice[0]);
    $("#choice-2").text(questions[questionNumber].choice[1]);
    $("#choice-3").text(questions[questionNumber].choice[2]);
    $("#choice-4").text(questions[questionNumber].choice[3]);
    runTime();
}
// Need to add a click event regarding answers
$(".userchoice").on("click", function () {
    guess = parseInt($(this).attr("value"));
    console.log("guess", guess);
    $("#answer").show();
    $("#gif").attr("src", questions[questionNumber].photo);
    // If/Else statement regarding whether user selects right or wrong answer
    if (guess === questions[questionNumber].answer) {
        questionCorrect++;
        guess = "";
        $("#answer").prepend("<p>You're Correct!</p>");

    } else {
        questionWrong++;
        guess = "";
        $("#answer").prepend("<p>That's Wrong. The correct answer is: " + questions[questionNumber].choice[questions[questionNumber].answer] + "</p>");

    }
    setTimeout(function () {
        if (questionNumber < questions.length - 1) {
            questionNumber++;
            console.log(questionNumber);
            displayQuestion();

        } else {
            displayResults();
        }
    }, 3000);

})

// Show tally of correct/wrong answers to trivia
function displayResults() {
    clearInterval(intervalID);
    console.log(questionCorrect, questionWrong);
    $("#question").empty();
    $("#displayresults").show();
    $("#results").append("<h3> Right Answers: " + questionCorrect + "</h3>");
    $("#results").append("<h3> Wrong Answers: " + questionWrong + "</h3>");
    $("#reset").show();

}
//reset - is it a function or click even with the button?
$("#reset").on("click", function () {
    $("#results").hide();
    $("#reset").hide();
    $("#question").empty();
    $("#answer").empty();
    displayQuestion();
})
})
//End of Script