// defining variables globally
var secondsLeft = 90;
var timeEl = document.querySelector("#timer");
var startBtn = document.getElementById('start');
var submitBtn = document.getElementById('submit');
var questionsEl = document.createElement('h1');
var answersEl = document.createElement('h2');
var answerBtn = document.createElement('button');
var quizContainer = document.createElement('div');
var questionIndex = 0;
var finalScore = 0; 
var timerInterval; 
var timeEl = document.querySelector("#timer");
var highScoreInitials;
var userHighScore;
var highScoreDisplay = document.getElementById("high-score-page");




// created an array for questions to loop through
var quizQuestions = [ 

    { 
        question: 'A ____ is a special variable, that can hold more than one value.',
        answers: ['string', 'array', 'function'],
        rightAnswer: 'array', 
    },

    { 
        question: 'What does flexbox help with ?',
        answers: ['makes it easier to design flexible responsive layout structure without using float or positioning', 'creating containers', 'styling the background'],
        rightAnswer: 'makes it easier to design flexible responsive layout structure without using float or positioning', 
    },

    {
        question: 'HTML is a ____ language.',
        answers: ['programming', 'styling', 'markdowm'],
        rightAnswer: 'markdowm', 
    },

    {
        question: 'What does a function do ?',
        answers: ['can have properties','is a block of code designed to perform a particular task','can loop through elements'],
        rightAnswer: 'is a block of code designed to perform a particular task', 
    },

    {
        question: 'What is a boolean ?',
        answers: ['loops through an array','represents one of two values: true or false','a variable that must have a value assigned when declared'],
        rightAnswer: 'represents one of two values: true or false', 
    },

];

// displaying the questions and buttons with the answers
function displayQuestions() {

    // create a h1 tag for questions + text content
    var questionsEl = document.createElement('h1');
    questionsEl.textContent = quizQuestions[questionIndex].question;

    // appending questionEl to generate quiz div
    document.getElementById('generate-quiz').append(questionsEl);

    // appending answerEL to generate quiz div
    document.getElementById('generate-quiz').append(answersEl);

    // loop to create answer button an
    for (var i=0; i < quizQuestions[questionIndex].answers.length; i++){

        // where we are in the loop
        var answerOption = quizQuestions[questionIndex].answers[i];

        console.log(quizQuestions[questionIndex]);

        // creating buttons for the quiz
        var answerBtn = document.createElement('button');

        // set value attribute to answer button
        answerBtn.setAttribute('value', answerOption);

        answerBtn.textContent = answerOption;

        // new function for click event 
        answerBtn.addEventListener('click', checkAnswer);

        // appending answer button to generate quiz div in html
        document.getElementById('generate-quiz').append(answerBtn);
    }
}

// checking if the answer is right or wrong
function checkAnswer(event) {
    console.log(event.target);
    var clickedAnswer = event.target.value;

    if (clickedAnswer !== quizQuestions[questionIndex].rightAnswer) {
        secondsLeft -= 10;
    }

    else {
        finalScore += 10;
        document.getElementById('final-score').textContent = finalScore
    }

    questionIndex++;

    // check for seeing if we are on the last question
    if (questionIndex == quizQuestions.length) {
        endQuiz();
    }

    // starting the game over
    else {
        displayQuestions();
    }

}

// function for the timer 
function setTime() {
    
    // Sets interval in variable
    timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = secondsLeft;

        if(secondsLeft <= 0) {
        // Stops the timer if it reaches this conditional
        clearInterval(timerInterval);
        // added an alert prompt
        alert('Time is up !');
        }
  }, 1000);
}


// select submit button and assign save score to it
function saveScore() {
    // get the initials from the input
    var initials = document.getElementById("user-initials").value.trim();
        // .trim() removes extra whitespace, prevents user from entering just spaces
    
    if (initials) {
        // get high scores from local storage or set to empty array if none exist
        var allScores = JSON.parse(window.localStorage.getItem('highScores')) || [];
        
        var newScore = {
            // user initials
            initials, 
            // score
            score: finalScore 
        }
        
        // adding it to the existing scores
        allScores.push(newScore);
        // saves to local storage
        window.localStorage.setItem('highScores', JSON.stringify(allScores));


    }

    // variables for the initials and high score
    highScoreInitials = document.getElementById('high-score-initials').textContent;
    userHighScore = document.getElementById('high-score').textContent;


    // calling the high score to be displayed
    var highScoreDisplay = document.getElementById("high-score-page");
    highScoreDisplay = highScoreInitials + userHighScore;
    highScoreDisplay.style.display = 'block';

}

// creating a new function to combine the other functions to make it easier
function startQuiz() {
    setTime();
    displayQuestions();
}

function endQuiz() {
    clearInterval(timerInterval);

    var scoreDisplay = document.getElementById('end-score');

    // will show the end-score div as it is previously hidden with the css
    scoreDisplay.style.display = 'block';
   
}


// event listener for start button
startBtn.addEventListener("click",startQuiz);


// event listener for submit button
submitBtn.addEventListener('click',saveScore);

