// Selects timer by class
var timeEl = document.querySelector(".time");
timeEl.textContent = "75 seconds to play.";

// Selects mainEl by id
var mainEl = document.getElementById("main");

//Selects introduction text by id
var introductionText = document.querySelector("#introduction-text");

//Selects start button by id 
var startButton = document.querySelector("#start");

//Declares variable secondsLeft to 75 (seconds to play game, also ends up being user's end score)
var secondsLeft = 75;

//Creates divs for each question
var question1Segment = document.createElement("div")
var question2Segment = document.createElement("div")
var question3Segment = document.createElement("div")
var question4Segment = document.createElement("div")

//Declares an array for the leaderboard and pulls down any information on that array from localStorarge using JSON.parse. If the local storage is empty and JSON.parse(localStorage.getItem("leaderboard")) returns null, it will set leaderboardArray to []
var leaderboardArray = JSON.parse(localStorage.getItem("leaderboard")) || [];

//Declare a variable for the number of questions correct initially set to 0
var numberCorrect = 0;

//Declare object for question 1 with question and options
var question1 = {
    question: "Question 1: Commonly used data types do not include:",
    option1: "strings",
    option2: "booleans",
    option3: "alerts", //corrects
    option4: "numbers",
};

//Declare object for question 2 with question and options
var question2 = {
    question: "Quesion 2: The condition in an if/else statement is enclosed within:",
    option1: "quotes",
    option2: "parentheses", //correct
    option3: "braces",
    option4: "brackets",
};

//Declare object for question 3 with question and options
var question3 = {
    question: "Question 3: Arrays in JavaScript can be used to store:",
    option1: "numbers and strings",
    option2: "other arrays",
    option3: "booleans",
    option4: "all shown options are correct", //correct
};

//Declare object for question 4 with question and options
var question4 = {
    question: "Question 4: String values must be enclosed within _____ when being assigned to variables",
    option1: "commas",
    option2: "braces", //correct
    option3: "quotes",
    option4: "parentheses",
};

//The entire function playGame is the bulk of the code for when the user is taking the quiz
function playGame() {
    //Removes start button from screen
    startButton.remove();

    //Removes introduction text from screen
    introductionText.remove();



    //THE BELOW CHUNK IS ALL FOR QUESTION 1

    //Make question1Segement visisble
    mainEl.appendChild(question1Segment);

    //Display question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question1.question;
    question1Segment.appendChild(prompt1);
    //Display button for option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question1.option1;
    question1Segment.appendChild(p1option1);
    //Display button for option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question1.option2;
    question1Segment.appendChild(p1option2);
    //Display button for option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question1.option3;
    question1Segment.appendChild(p1option3);
    //Display button for option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question1.option4;
    question1Segment.appendChild(p1option4);

    //This is the for when wrong answer is clicked (this exact chunk is more or less identical throughout this entire document for whenever the player hits a button for the wrong answer, so comments will be added here but withheld for future references of this code in the future)
    p1option1.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15; //deducts 15 seconds when a wrong answer is chosen
        question1Segment.remove(); //removes current question segment 
        var wrongAnswerResponse = document.createElement("h2"); //creates h2 element
        wrongAnswerResponse.textContent = "Wrong answer for question 1"; //write "Wrong answer" in h2 element
        mainEl.appendChild(wrongAnswerResponse); //make that h2 element visible to user to tell them their answer is wrong
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000); //waits 1 second until it removes the h2 element 
        mainEl.appendChild(question2Segment); //makes the next question visible
    });
    //Wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 1";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question2Segment);
    });
    //This is the for when right answer is clicked (this exact chunk is more or less identical throughout this entire document for whenever the player hits a button for the correct answer, so comments will be added here but withheld for future references of this code in the future)
    p1option3.addEventListener('click', function () {
        numberCorrect++; //add one point to the numberCorrect
        question1Segment.remove(); //removes current question segment
        var correctAnswerResponse = document.createElement("h2"); //creates h2 element
        correctAnswerResponse.textContent = "Correct answer for question 1"; //writes "Correct answer" in h2 element
        mainEl.appendChild(correctAnswerResponse); //make that h2 element visible to user to tell them their answer is correct
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000); //waits 1 second until it removes the h2 element
        mainEl.appendChild(question2Segment); //makes the next question visisble
    });
    //Wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question1Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 1";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question2Segment);
    });



    //THE BELOW CHUNK IS ALL FOR QUESTION 2 

    //Display question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question2.question;
    question2Segment.appendChild(prompt1);
    //Display button for option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question2.option1;
    question2Segment.appendChild(p1option1);
    //Display button for option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question2.option2;
    question2Segment.appendChild(p1option2);
    //Display button for option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question2.option3;
    question2Segment.appendChild(p1option3);
    //Display button for option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question2.option4;
    question2Segment.appendChild(p1option4);

    //Wrong answer clicked
    p1option1.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 2";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
    });
    //Right answer clicked
    p1option2.addEventListener('click', function () {
        numberCorrect++;
        question2Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer for question 2";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
    });
    //Wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 2";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
    });
    //Wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question2Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 3";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question3Segment);
    });



    //THE BELOW CHUNK IS ALL FOR QUESTION 3 
    //Display question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question3.question;
    question3Segment.appendChild(prompt1);
    //Display button for option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question3.option1;
    question3Segment.appendChild(p1option1);
    //Display button for option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question3.option2;
    question3Segment.appendChild(p1option2);
    //Display button for option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question3.option3;
    question3Segment.appendChild(p1option3);
    //Display button for option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question3.option4;
    question3Segment.appendChild(p1option4);

    //Wrong answer clicked
    p1option1.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 3";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });
    //Wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 3";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });
    //Wrong answer clicked
    p1option3.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question3Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 3";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });
    //Right answer clicked
    p1option4.addEventListener('click', function () {
        numberCorrect++;
        question3Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer for question 3";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        mainEl.appendChild(question4Segment);
    });



    //THE BELOW CHUNK IS ALL FOR QUESTION 4
    //Display question
    var prompt1 = document.createElement("h3");
    prompt1.textContent = question4.question;
    question4Segment.appendChild(prompt1);
    //Display button for option 1
    var p1option1 = document.createElement("button")
    p1option1.textContent = question4.option1;
    question4Segment.appendChild(p1option1);
    //Display button for option 2
    var p1option2 = document.createElement("button")
    p1option2.textContent = question4.option2;
    question4Segment.appendChild(p1option2);
    //Display button for option 3
    var p1option3 = document.createElement("button")
    p1option3.textContent = question4.option3;
    question4Segment.appendChild(p1option3);
    //Display button for option 4
    var p1option4 = document.createElement("button")
    p1option4.textContent = question4.option4;
    question4Segment.appendChild(p1option4);

    //Wrong answer clicked (the procedure for question 4 is a bit different since it's the last question, so instead of moving onto the next question, it calls the endGame() function and stops the timerInterval)
    p1option1.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 4";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000); //Runs the endGame() function after a 1 second delay since all questions have been answered by this point
        clearInterval(timerInterval); //This stops the timer once the player answers the last question (since the timer is their score and we wouldn't want that to keep running)
    });
    //Wrong answer clicked
    p1option2.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 4";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000);
        clearInterval(timerInterval);
    });
    //Right answer clicked
    p1option3.addEventListener('click', function () {
        numberCorrect++;
        question4Segment.remove();
        var correctAnswerResponse = document.createElement("h2");
        correctAnswerResponse.textContent = "Correct answer for question 4";
        mainEl.appendChild(correctAnswerResponse);
        setTimeout(() => { correctAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000);
        clearInterval(timerInterval);
    });
    //Wrong answer clicked
    p1option4.addEventListener('click', function () {
        secondsLeft = secondsLeft - 15;
        question4Segment.remove();
        var wrongAnswerResponse = document.createElement("h2");
        wrongAnswerResponse.textContent = "Wrong answer for question 4";
        mainEl.appendChild(wrongAnswerResponse);
        setTimeout(() => { wrongAnswerResponse.remove(); }, 1000);
        setTimeout(() => { endGame(); }, 1000);
        clearInterval(timerInterval);
    });

    //This is what keeps the timer running -- when secondsLeft > 0, it takes away one second every 1 second and displays the number of seconds remaining. Otherwise, clearInterval(timerInterval) is run and the endGame() function is called (this is what stops the game if they run out of time)
    var timerInterval = setInterval(function () {
        if (secondsLeft > 0) {
            secondsLeft--;
            timeEl.textContent = secondsLeft + " seconds remaining.";
        } else {
            clearInterval(timerInterval);
            endGame();
        }

    }, 1000);
}

// This is the function to handle the end of the game
function endGame() {
    //Removes the timer from the screen
    timeEl.remove();

    //Removes all question segment divs (just in case they didn't finish we want to make sure all question divs are removed)
    question1Segment.remove();
    question2Segment.remove();
    question3Segment.remove();
    question4Segment.remove();

    //Creates a h2 element associated with endText variable
    var endText = document.createElement("h2");


    //The first if statement is in case secondsLeft is < 0 -- so if the user was on the last question with 10 seconds left and got it wrong, their score would technically be 10-15 which is -5, but we want the lowest score possible to be 0 so this raises their secondsLeft value to 0. The else statement is all other cases where it simply displays the user's final score (secondsLeft)
    if (secondsLeft < 0) {
        endText.textContent = 'Game over! Your final score is 0.';
        mainEl.appendChild(endText);
        secondsLeft = 0;
    } else {
        endText.textContent = 'Game over! Your final score is ' + secondsLeft + '.';
        mainEl.appendChild(endText);
    }


    //This adds a new name to the leaderboard by creating a form that asks for their name and a submit button
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


    //This event listener handles what happens after the user types hits submit 
    button.addEventListener("click", function (event) {
        //Prevent default prevents the default form action of refreshing the page when the submit button is clicked
        event.preventDefault();

        //Declares variable name equal to the name they put into the form (input.value)
        var name = input.value;

        if (name === "") {
            alert("Name cannot be blank.");
            return;
        }

        //This gets rid of the option to submit material
        form.remove();
        
        //Creates a button that lets the user go back 
        var goBackButton = document.createElement("button");
        goBackButton.textContent = "Go back";
        goBackButton.setAttribute("style", "font-color: red; width:100px; height:25px")
        mainEl.appendChild(goBackButton);

        //Event listener to reload page when the user hits the go back button
        goBackButton.addEventListener("click", function () {
            location.reload();
        })

        //Declares an object for new leaderboard element that has their secondsLeft (score) and thier name
        var newLeaderboardEl = { secondsLeft, name };

        //This pushes the newLeaderboardEl (current player's information) into the array of objects that is the leaderboardArray
        leaderboardArray.push(newLeaderboardEl);

        //This sorts the leaderboardArray in descending order based on scores (highest at the top)
        leaderboardArray.sort(function (x, y) {
            return y.secondsLeft - x.secondsLeft;
        });

        //This saves the new leaderboardArray (with the new player's information and proper order) to localStorage for future access. JSON.strinfify used since localStorage can only hold strings but that can be converted back to an array using JSON.parse for future use
        localStorage.setItem("leaderboard", JSON.stringify(leaderboardArray));

        //Creates h1 element that says "Leaderboard for all players" and makes it visible 
        var leaderboardHeader = document.createElement("h1");
        leaderboardHeader.textContent = "Leaderboard for all players";
        mainEl.appendChild(leaderboardHeader);

        //For loop that creates a li for each object in an array 
        for (i = 0; i < leaderboardArray.length; i++) {
            var leaderboardDiv = document.createElement("ul");
            var leaderboardElement = document.createElement("li");
            leaderboardDiv.appendChild(leaderboardElement);
            mainEl.appendChild(leaderboardDiv);
            leaderboardElement.textContent = (leaderboardArray[i].name + " -- " + leaderboardArray[i].secondsLeft);

            //This highlights the player's newest entry to the leaderboard
            if ((leaderboardArray[i].name === name) && (leaderboardArray[i].secondsLeft === secondsLeft)) {
                leaderboardElement.setAttribute("style", "background-color:yellow");
            }

            mainEl.appendChild(leaderboardElement);
        }
    })
}

//Event listener to run the playGame function when the user clicks the start button
startButton.addEventListener('click', playGame);