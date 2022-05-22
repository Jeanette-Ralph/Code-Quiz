// defining variables globally
var secondsLeft = 90;
var startBtn = document.getElementById('start');
var optionBtn = document.querySelector('input[type=button]');
var timeEl = document.querySelector(".timer");
var quizContainer = document.createElement('div');
var questionsEl = document.createElement('p');

// created an arrraay for questions to loop through
var quizQuestions = [ 

    { 
        question: 'A ____ is a special variable, that can hold more than one value.',
        answers: ['string', 'array', 'function'],
        rightAnswer: 1, 
    },

    { 
        question: 'What does flexbox help with ?',
        answers: ['makes it easier to design flexible responsive layout structure without using float or positioning', 'creating containers', 'styling the background'],
        rightAnswer: 0, 
    },

    {
        question: 'HTML is a ____ language.',
        answers: ['programming', 'styling', 'markdowm'],
        rightAnswer: 2, 
    },

    {
        question: 'What does a function do ?',
        answers: ['can have properties','is a block of code designed to perform a particular task','can loop through elements'],
        rightAnswer: 1, 
    },

    {
        question: 'What is a boolean ?',
        answers: ['loops through an array','represents one of two values: true or false','a variable that must have a value assigned when declared'],
        rightAnswer: 1, 
    },

]

function displayQuestions() {
    startBtn.addEventListener("click",displayQuestions);
    for (var i=0; i < quizQuestions.length; i++){
        
        setTime();
        console.log('hello world1');

        // create container div this will have question/answer
        var quizContainer = document.createElement('div');
        quizContainer.innerHTML = quizQuestions.textContent;

        // create a p tag for questions/answers
        var questionsEl = document.createElement('p');
        questionsEl;

        // appending questionEl to quizContainer
        quizContainer.appendChild(questionsEl);

         // appending the quiz questions array to the questionsEl
         questionsEl.innerHTML = quizQuestions.textContent;
         document.body.appendChild(questionsEl);
         console.log('hello world2');

        // get quiz questions at index i
        quizQuestions[i];
        console.log('hello world3');

        // appending quizContainer to generate quiz div in html
        var generateQuizDiv = document.getElementById("generate-quiz").innerHTML += quizContainer; 
        generateQuizDiv;

        console.log('hello world4');
       

        for (var i=0; i < quizQuestions.length; i++) {
            console.log('hello world5');
            quizContainer;

        // for loop over answers for each question at i
        // radio button/label to select just one

            // add data attribute with value of i 
            // append radio buttons to quiz container

        }

    }

}

displayQuestions();


// create a function for the timer
function setTime() {
    startBtn.addEventListener("click",displayQuestions);
    var timeEl = document.querySelector(".timer");
    var secondsLeft = 90;
    
    // Sets interval in variable
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        // Calls function to create and append image
        alert('Time is up !');
        }
  }, 1000);
}



// <!-- GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score -->

