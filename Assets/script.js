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


   

function playGame() {
  //removes start button from screen
  startButton.remove();


  //THE BELOW CHUNK IS ALL FOR QUESTION 1
  mainEl.appendChild(question1Segment); //make question1Segement visible

  //show question
  var prompt1 = document.createElement("h3");
  prompt1.textContent= question1.question;
  question1Segment.appendChild(prompt1);
  //option 1
  var p1option1 = document.createElement("button")
  p1option1.textContent= question1.option1;
  question1Segment.appendChild(p1option1);
  //option 2
  var p1option2 = document.createElement("button")
  p1option2.textContent= question1.option2;
  question1Segment.appendChild(p1option2);
  //option 3
  var p1option3 = document.createElement("button")
  p1option3.textContent= question1.option3;
  question1Segment.appendChild(p1option3);
  //option 4
  var p1option4 = document.createElement("button")
  p1option4.textContent= question1.option4;
  question1Segment.appendChild(p1option4);

  //when wrong answer clicked
  p1option1.addEventListener('click', function() {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    question1Segment.appendChild(wrongAnswerResponse);
    setTimeout(() => {question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
    setTimeout(() => {mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
  });
  //when wrong answer clicked
  p1option2.addEventListener('click', function () {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    question1Segment.appendChild(wrongAnswerResponse);
    setTimeout(() => {question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
    setTimeout(() => {mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
  });
  //when right answer clicked
  p1option3.addEventListener('click', function() {
    var correctAnswerResponse = document.createElement("h2");
    correctAnswerResponse.textContent= "Correct answer";
    question1Segment.appendChild(correctAnswerResponse);
    setTimeout(() => {question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
    setTimeout(() => {mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question

  });
  //when wrong answer clicked
  p1option4.addEventListener('click', function() {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    question1Segment.appendChild(wrongAnswerResponse);
    setTimeout(() => {question1Segment.remove(); }, 1500); //this adds 1.5 seconds between showing the user whether they got the question right or wrong and moving onto the next question
    setTimeout(() => {mainEl.appendChild(question2Segment); }, 1500); //this opens up the next question
  });

  

  //THE BELOW CHUNK IS ALL FOR QUESTION 2 //NEED TO ADD THE SETTIMEOUT PART FOR WAITING THEN MOVING ONTO NEXT QUESTION
  //show question
  var prompt1 = document.createElement("h3");
  prompt1.textContent= question2.question;
  question2Segment.appendChild(prompt1);
  //option 1
  var p1option1 = document.createElement("button")
  p1option1.textContent= question2.option1;
  question2Segment.appendChild(p1option1);
  //option 2
  var p1option2 = document.createElement("button")
  p1option2.textContent= question2.option2;
  question2Segment.appendChild(p1option2);
  //option 3
  var p1option3 = document.createElement("button")
  p1option3.textContent= question2.option3;
  question2Segment.appendChild(p1option3);
  //option 4
  var p1option4 = document.createElement("button")
  p1option4.textContent= question2.option4;
  question2Segment.appendChild(p1option4);

  //when wrong answer clicked
  p1option1.addEventListener('click', function() {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    mainEl.appendChild(wrongAnswerResponse);
  });
  //when right answer clicked
  p1option2.addEventListener('click', function() {
    var correctAnswerResponse = document.createElement("h2");
    correctAnswerResponse.textContent= "Correct answer";
    mainEl.appendChild(correctAnswerResponse);
  });
  //when wrong answer clicked
  p1option3.addEventListener('click', function () {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    mainEl.appendChild(wrongAnswerResponse);
  });
  //when wrong answer clicked
  p1option4.addEventListener('click', function() {
    var wrongAnswerResponse = document.createElement("h2");
    secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer's chosen
    wrongAnswerResponse.textContent= "Wrong answer";
    mainEl.appendChild(wrongAnswerResponse);
  });

  //END OF QUESTION 2

  var timerInterval = setInterval(function() {
    secondsLeft--;
    timeEl.textContent = secondsLeft + " seconds remaining.";

    if(secondsLeft <= 0) {
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

  var endText = document.createElement("h2");
  
  //if they didn't lose the game
  if (secondsLeft>0) {
    endText.textContent = 'Game over! Your final score is ' + secondsLeft + '.';
    mainEl.appendChild(endText);
  } else if (secondsLeft<0) {
    endText.textContent = 'Game over! You lost.';
    mainEl.appendChild(endText);
  }

}

startButton.addEventListener('click', playGame);