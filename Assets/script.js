// Selects element by class
var timeEl = document.querySelector(".time");
timeEl.textContent = "75 seconds to play."; 

// Selects element by id
var mainEl = document.getElementById("main");

var introductionText = document.querySelector("#introduction-text");

var startButton = document.querySelector("#start");
startButton.setAttribute("style", "height: 25px; width:100px; background-color: cyan");

var secondsLeft =  75;

//declare divs for each question
var question1Segment = document.createElement("div")
question1Segment.setAttribute("class", "questionSegment");
var question2Segment = document.createElement("div")
question2Segment.setAttribute("class", "questionSegment");
var question3Segment = document.createElement("div")
question3Segment.setAttribute("class", "questionSegment");
var question4Segment = document.createElement("div")
question4Segment.setAttribute("class", "questionSegment");

//declares an array for the leaderboard 
var leaderboardArray = [];
leaderboardArray = JSON.parse(localStorage.getItem("leaderboard")); //calls the information stored in local storage

if(leaderboardArray == null){
    leaderboardArray = [];
}

//declare a variable for the number of questions correct
var numberCorrect = 0;

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
    option4: "all shown options are correct", //correct
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
    introductionText.remove();


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
        mainEl.appendChild(question2Segment);
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        mainEl.appendChild(question2Segment);
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        numberCorrect ++;
        question1Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        mainEl.appendChild(question2Segment);
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        mainEl.appendChild(question2Segment);
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
        mainEl.appendChild(question3Segment);
    });
    //when right answer clicked
    p1option2.addEventListener('click', function () {
        numberCorrect ++;
        question2Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
        mainEl.appendChild(question3Segment);
    });
    //when wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
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
        mainEl.appendChild(question4Segment);
    });
    //when wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });
    //when wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => {wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });
    //when right answer clicked
    p1option4.addEventListener('click', function () {
        numberCorrect ++;
        question3Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
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
        clearInterval(timerInterval); //this is important so that the timer stops once they answer the last question (since the timer is their score and we wouldn't want that to keep running)
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
        clearInterval(timerInterval);
    });
    //when right answer clicked
    p1option3.addEventListener('click', function () {
        numberCorrect ++;
        question4Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000);
        clearInterval(timerInterval);
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
        clearInterval(timerInterval);
    });

    
    var timerInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft --;
            timeEl.textContent = secondsLeft + " seconds remaining.";
        } else {
            clearInterval(timerInterval);
            endGame();
        }
        
    }, 1000);
}

// function to handle the end of the game
function endGame() {
    timeEl.remove(); //gets rid of timer

   
    question1Segment.remove();
    question2Segment.remove();
    question3Segment.remove();
    question4Segment.remove();

    var endText = document.createElement("h2");


    if (numberCorrect=0) { //this is because we don't want to give them a score that's high if they just sped through and got everything wrong - if they got all wrong, no matter what they should have a final score of 0
        endText.textContent = 'Game over! Your final score is 0.';
        mainEl.appendChild(endText);
        secondsLeft = 0;
    } else if (secondsLeft<0) {
        endText.textContent = 'Game over! Your final score is 0.';
        mainEl.appendChild(endText);
        secondsLeft = 0;
    } else {
        endText.textContent = 'Game over! Your final score is ' + secondsLeft + '.';
        mainEl.appendChild(endText);
    }


    //add new name to leaderboard
    var form = document.createElement("form");
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("placeholder", "Insert your name here");
    var button = document.createElement("button");
    button.setAttribute("style", "width: 100px; height: 25px; background-color:cyan");
    button.textContent = "Enter name";
    form.appendChild(input);
    form.appendChild(button);
    mainEl.appendChild(form);

    button.addEventListener("click", function(event) {
        //insert code for how to handle the submit button

         //gets rid of the option to submit material
        form.remove();

        //creates a button that lets the user go back (refreshes the page so they can play again)
        var goBackButton = document.createElement("button");
        goBackButton.textContent = "Go back";
        goBackButton.setAttribute("style", "font-color: red; width:100px; height:25px")
        mainEl.appendChild(goBackButton);
    
        goBackButton.addEventListener("click", function() {
            location.reload();
        })

        event.preventDefault();
        var name = input.value;

        if (name === "") {
            window.alert("Name cannot be blank");
        } 

        var newLeaderboardEl = {secondsLeft, name}; //this is an object for a new leaderboard element that has the player's name and score


        leaderboardArray.push(newLeaderboardEl); 

        leaderboardArray.sort(function(x, y) {
            return y.secondsLeft - x.secondsLeft;
        });

        localStorage.setItem("leaderboard", JSON.stringify(leaderboardArray)); //this saves the new leaderboardArray with the new player's information to localStorage for future access

        var leaderboardHeader = document.createElement("h1");
        leaderboardHeader.textContent= "Leaderboard for all players";
        mainEl.appendChild(leaderboardHeader);

        for (i = 0; i < leaderboardArray.length; i++) {
            var leaderboardDiv = document.createElement("ol");
            var leaderboardElement = document.createElement("li");
            leaderboardDiv.appendChild(leaderboardElement);
            mainEl.appendChild(leaderboardDiv);
            leaderboardElement.textContent = (leaderboardArray[i].name + " -- " + leaderboardArray[i].secondsLeft); 
            mainEl.appendChild(leaderboardElement);
        }
    })
}

startButton.addEventListener('click', playGame);