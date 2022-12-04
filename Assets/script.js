// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var startButton = document.querySelector("#start");

var secondsLeft = 75;

//declare divs for each question
var question1Segment = document.createElement("div")
var question2Segment = document.createElement("div")
var question3Segment = document.createElement("div")
var question4Segment = document.createElement("div")

var leaderboardArrayLS = localStorage.getItem("leaderboardArrayLS");

//declares an array for the leaderboard 
var leaderboardArray = [];

var nameLS = localStorage.getItem("name");

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
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1000); //this opens up the next question
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        question1Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question2Segment); }, 1000); //this opens up the next question
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
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1000); //this opens up the next question
    });
    //when right answer clicked
    p1option2.addEventListener('click', function () {
        question2Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question3Segment); }, 1000); //this opens up the next question
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
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1000); //this opens up the next question
    });
    //when right answer clicked
    p1option4.addEventListener('click', function () {
        question3Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        setTimeout(() => { mainEl.appendChild(question4Segment); }, 1000); //this opens up the next question
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
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => {endGame(); }, 1000); //this opens up the next question
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => {endGame(); }, 1000); //this opens up the next question
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        question4Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000);
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => {endGame(); }, 1000); //this opens up the next question
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

    //add new name to leaderboard
    addNewName();


   // var newName = prompt("What is your name?");

    // var leaderboard = leaderboardSegmentLocal.concat(newName);


    //IDEA FOR LEADERBOARD -- WE NEED TO MAKE AN ARRAY THAT IS IN LOCAL STORAGE, USE THE .SORT() METHOD ON THAT ARRAY, THEN DISPLAY THAT ARRAY

    // localStorage.setItem("leaderboardSegment", JSON.stringify(leaderboard));

    // mainEl.appendChild(localStorage.getItem(JSON.parse(leaderboardSegment)));

}

function addNewName() {
    var form = document.createElement("form");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Insert your name here");
    var button = document.createElement("button");
    form.appendChild(input);
    button.setAttribute("style", "width: 50px", "height: 50px")
    form.appendChild(button);
    mainEl.appendChild(form);

    button.addEventListener("click", function(event) {
        //insert code for how to handle the submission of material

        event.preventDefault();
        leaderboardArray
        var name = input.value;

        if (name === "") {
            window.alert("Name cannot be blank");
        } else {
            localStorage.setItem("name", name);
            displayLeaderboard();
        }
    })
}

function displayLeaderboard() {
    var newElement = document.createElement("li");
    newElement.textContent = localStorage.getItem("name") + " -- " + secondsLeft; //IS SECONDS LEFT A GLOBAL VARIABLE I THINK SO
    leaderboardArray.push(newElement);
    localStorage.setItem("leaderboardArrayLS", JSON.stringify(leaderboardArray)); //this adds the newest name we added to the array
    leaderboardArray = JSON.parse(localStorage.getItem("leaderboardArrayLS")); //this pulls down AGAIN the full list of all names with new and old local storage

    for (i = 0; i < leaderboardArray.length; i++) {
        var leaderboardElement = document.createElement("li");
        leaderboardElement.textContent = leaderboardArray[i].value;
        mainEl.appendChild(leaderboardElement);
    }

    var goBackButton = document.createElement("button");
    mainEl.appendChild(goBackButton);

    goBackButton.addEventListener("click", function() {
        location.reload();
    })

//PULL DOWN FROM THE ARRAY AND PARSE IT (UNSTRINGIFY IT)
//ORDER THAT LIST?
//RUN A FOR LOOP FOR EACH NTH ELEMENT OF THAT ARRAY AND MAKE IT A LIST

}

startButton.addEventListener('click', playGame);