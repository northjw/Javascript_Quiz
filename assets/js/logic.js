// variables to keep track of quiz state
var currentQuestionIndex = 0;
// var time = ;

// timer
var time = questions.length * 15;
var timerId;

// variables to reference DOM elements
var questionsEl = document.getElementById("questions");
var questionTitle = document.getElementById("question-title");
var timerEl = document.getElementById("time");
var choicesEl = document.getElementById("choices");
var submitBtn = document.getElementById("submit");
var startBtn = document.getElementById("start");
var initialsEl = document.getElementById("initials");
var feedbackEl = document.getElementById("feedback");

// sound effects
var sfxRight = new Audio("assets/sfx/correct.wav");
var sfxWrong = new Audio("assets/sfx/incorrect.wav");
function startQuiz() {
  
  // hide start screen
  document.getElementById("start-screen").style.display = "none";
 
  setInterval(function () {
    console.log(time)
    
    
    timerEl.innerHTML = time--

    

    



    // getQuestion();
  }, 1000);
 
  // un-hide questions section
  // document.getElementById("questions") = ""
  console.log(questions[currentQuestionIndex].title)
  console.log(questionTitle)
  questionTitle.textContent=questions[currentQuestionIndex].title
  // start timer
  // var timeInterval = setInterval(function () {
  //   clockTick()
  // }, 1000);
  //show starting time
  
}
function getQuestion() {
      // get current question object from array
      var questions = [questions]
      // update title with current question
      questionTitle.innerHTML = questions[questions].title;
      // clear out any old question choices
      choicesEl.innerHTML = "";
      // loop over choices
      for (var i = 0; i, questions[questions].choices.length; i++) {
        // create new button for each choice
        var answerButton = document.createElement("button");
        // attach click event listener to each choice
        answerButton.addEventListener("click", function (e) {
          answerClick(e)
        })
      }

        // display on the page
        choicesEl.append(answerButton);
      }

      function questionClick(event) {
        // check if user guessed wrong
        if (event.target.textContent === questions[currentQuestionIndex].answer) { }
        // penalize time
        // display new time on page
        // play "wrong" sound effect
        // else
        // play "right" sound effect
        // flash right/wrong feedback on page for half a second
        // move to next question
        // check if we've run out of questions
        // quizEnd
        // else
        // getQuestion
      }

      function quizEnd() {
        // stop timer
        if (time === 0) {
          quizEnd()
    
        }
    
        console.log("quizend")
        clearTimeout()
        // show end screen
        // show final score
        // hide questions section
      }

      function clockTick() {
        // update time
        // check if user ran out of time
      }

      function saveHighscore() {
        // get value of input box
        // make sure value wasn't empty
        // get saved scores from localstorage, or if not any, set to empty array
        // format new score object for current user
        // save to localstorage
        // redirect to next page
      }

      function checkForEnter(event) {
        // check if event key is enter
        // saveHighscore
      }

      // // user clicks button to submit initials
      // submitBtn.onclick = saveHighscore;

      // // user clicks button to start quiz
      // startBtn.onclick = startQuiz;

      // initialsEl.onkeyup = checkForEnter;
