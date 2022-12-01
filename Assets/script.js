// Selects element by class
var timeEl = document.querySelector(".time");

// Selects element by id
var mainEl = document.getElementById("main");

var startButton = document.querySelector("#start");

//declare a variable to tally the score
var finalScore = localStorage.getItem("score");


var secondsLeft = 75;

//declare a bunch of objects for questions
var question1 = {
    question: "Commonly used data types do not include:",
    option1: "strings",
    option2: "booleans",
    option3: "alerts",
    option4: "numbers",
    answer: "alerts",
};


   

function playGame() {
  //removes start button from screen
  startButton.remove();

  //declare variable for score within this particular game
  var gameScore = 0;

  //THE BELOW CHUNK IS ALL FOR QUESTION 1
  //show question
  var prompt1 = document.createElement("h3");
  prompt1.textContent= question1.question;
  mainEl.appendChild(prompt1);
  //option 1
  var wrong = document.createElement("button")
  wrong.textContent= question1.option1;
  mainEl.appendChild(wrong);
  //option 2
  var wrong = document.createElement("button")
  wrong.textContent= question1.option2;
  mainEl.appendChild(wrong);
  //option 3
  var correct = document.createElement("button")
  correct.textContent= question1.option3;
  mainEl.appendChild(correct);
  //option 4
  var wrong = document.createElement("button")
  wrong.textContent= question1.option4;
  mainEl.appendChild(wrong);

  //declare functions for how to handle wrongAnswer and correctAnswer
  function wrongAnswer() {
    gameScore--;
    var wrongAnswerResponse = document.createElement("h2")
    wrongAnswerResponse.textContent= "Wrong answer";
    mainEl.appendChild(wrongAnswerResponse);
  }

  function correctAnswer() {
    gameScore++;
    var correctAnswerResponse = document.createElement("h2")
    correctAnswerResponse.textContent= "Correct answer";
    mainEl.appendChild(correctAnswerResponse);
  }
  
  //if loop to check answer
  wrong.addEventListener('click', wrongAnswer());
  correct.addEventListener('click', correctAnswer());


  //need to make an if loop to remove 15 seconds from time if answer is wrong

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining.";

    if(secondsLeft === 0) {
      // Stops execution of action at set interval
      clearInterval(timerInterval);
      // Calls function to create and append image
      endGame();
    }

  }, 1000);
}

// Function to create and append colorsplosion image
function endGame() {
  timeEl.textContent = " ";
  //CREATE AN IF LOOP THAT EXECUTES IF THE PLAYER GOT ALL CORRECT AND THEN ELSE IF THEY DIDN'T (IT SHOULD DO WINS++)

  var endText = document.createElement("p");
  endText.textContent = 'Game over! Your final score is ' + finalScore + '.';
  mainEl.appendChild(endText);

}

startButton.addEventListener('click', playGame);