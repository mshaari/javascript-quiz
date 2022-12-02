// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var startButton = document.querySelector("#start");

//declare a variable to tally the score
var finalScore = localStorage.getItem("score");

var secondsLeft = 75;

//declare divs for each question
var question1Segment = document.createElement("div")
var question2Segment = document.createElement("div")
var question3Segment = document.createElement("div")
var question4Segment = document.createElement("div")

//declare div for leaderboard
var leaderboardSegment = document.createElement('div');

//declares an array for the leaderboard 
var leaderboard = [];

var leaderboardSegment = localStorage.getItem("leaderboardSegement");
var leaderboardNames = document.createElement('ul');

//declare object for question 1
var question1 = {
    question: "Commonly used data types do not include:",
    option1: "strings",
    option2: "booleans",
    option3: "alerts", //corrects
    option4: "numbers",
};

//declare object for question 2
var question2 = {
    question: "The condition in an if/else statement is enclosed within:",
    option1: "quotes",
    option2: "parentheses", //correct
    option3: "braces",
    option4: "brackets",
};

var question3 = {
    question: "Arrays in JavaScript can be used to store:",
    option1: "numbers and strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "all of the above", //correct
};

var question4 = {
    question: "String values must be enclosed within _____ when being assigned to variables",
    option1: "commas",
    option2: "braces", //correct
    option3: "quotes",
    option4: "parentheses",
};




function playGame() {
    //removes start button from screen
    startButton.remove();


    //THE BELOW CHUNK IS ALL FOR QUESTION 1
    mainEl.appendChild(question1Segment); //make question1Segement visible

    //show question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question1.question;
    question1Segment.appendChild(prompt1);
    //option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question1.option1;
    question1Segment.appendChild(p1option1);
    //option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question1.option2;
    question1Segment.appendChild(p1option2);
    //option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question1.option3;
    question1Segment.appendChild(p1option3);
    //option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question1.option4;
    question1Segment.appendChild(p1option4);

    //when wrong answer clicked
    p1option1.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question1Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question1Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        question1Segment.appendChild(correctAnswerResponse);
        setTimeout(() => { question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question

    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question1Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
    });






    //THE BELOW CHUNK IS ALL FOR QUESTION 2 
    //show question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question2.question;
    question2Segment.appendChild(prompt1);
    //option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question2.option1;
    question2Segment.appendChild(p1option1);
    //option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question2.option2;
    question2Segment.appendChild(p1option2);
    //option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question2.option3;
    question2Segment.appendChild(p1option3);
    //option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question2.option4;
    question2Segment.appendChild(p1option4);

    //when wrong answer clicked
    p1option1.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question2Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question2Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1500); //this opens up the next question
    });
    //when right answer clicked
    p1option2.addEventListener('click', function () {
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        question2Segment.appendChild(correctAnswerResponse);
        setTimeout(() => { question2Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1500); //this opens up the next question
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question2Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question2Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1500); //this opens up the next question
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question2Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question2Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1500); //this opens up the next question
    });




    //THE BELOW CHUNK IS ALL FOR QUESTION 3 
    //show question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question3.question;
    question3Segment.appendChild(prompt1);
    //option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question3.option1;
    question3Segment.appendChild(p1option1);
    //option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question3.option2;
    question3Segment.appendChild(p1option2);
    //option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question3.option3;
    question3Segment.appendChild(p1option3);
    //option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question3.option4;
    question3Segment.appendChild(p1option4);

    //when wrong answer clicked
    p1option1.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question3Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question3Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1500); //this opens up the next question
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question3Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question3Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1500); //this opens up the next question
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question3Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question3Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1500); //this opens up the next question
    });
    //when right answer clicked
    p1option4.addEventListener('click', function () {
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        question3Segment.appendChild(correctAnswerResponse);
        setTimeout(() => { question3Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1500); //this opens up the next question
    });






    //THE BELOW CHUNK IS ALL FOR QUESTION 4
    //show question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question4.question;
    question4Segment.appendChild(prompt1);
    //option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question4.option1;
    question4Segment.appendChild(p1option1);
    //option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question4.option2;
    question4Segment.appendChild(p1option2);
    //option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question4.option3;
    question4Segment.appendChild(p1option3);
    //option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question4.option4;
    question4Segment.appendChild(p1option4);

    //when wrong answer clicked
    p1option1.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question4Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question4Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { endGame(); }, 1500); //this ends the game
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question4Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question4Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { endGame(); }, 1500); //this opens up the next question
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        question4Segment.appendChild(correctAnswerResponse);
        setTimeout(() => { question4Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { endGame(); }, 1500); //this opens up the next question

    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        var wrongAnswerResponse = document.createElement("h2");
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        wrongAnswerResponse.textContent = "Wrong answer";
        question4Segment.appendChild(wrongAnswerResponse);
        setTimeout(() => { question4Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { endGame(); }, 1500); //this opens up the next question
    });



    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds remaining.";

        if (secondsLeft <= 0 && endGame.called===false) { //THE endGame.called===false makes sure that it doesn't recall the endGame function if its already been called if the user already answered all questions since that would have already called the endGame function
            // Stops execution of action at set interval
            clearInterval(timerInterval);
            endGame(); //NEED TO FIX SOMETHING HERE: THIS EXECUTES EVEN IF THE GAME ALREADY ENDED
        }

    }, 1000);
}

// function to handle the end of the game
function endGame() {
    timeEl.remove(); //gets rid of timer

    var endText = document.createElement("h2");

    if (secondsLeft > 0) {
        endText.textContent = 'Game over! Your final score is ' + secondsLeft + '.';
        mainEl.appendChild(endText);
    } else if (secondsLeft <= 0) {
        endText.textContent = 'Game over! Your final score is 0.';
        mainEl.appendChild(endText);
    }

    leaderboard[(leaderboard.length)] = prompt("What's your name?");
    newLeaderboardName.textContent = window.prompt("What is your name?"); //NEED TO MAKE THIS DONE WITHOUT WINDOW PROMPT AND LET THEM TYPE IT IN DIRECTLY

    //IDEA FOR LEADERBOARD -- WE NEED TO MAKE AN ARRAY THAT IS IN LOCAL STORAGE, USE THE .SORT() METHOD ON THAT ARRAY, THEN DISPLAY THAT ARRAY
    leaderboardSegment.appendChild(newLeaderboardName);

    localStorage.setItem("leaderboardSegment", leaderboardSegment);

    mainEl.appendChild(localStorage.getItem("leaderboardSegment"));

}

startButton.addEventListener('click', playGame);