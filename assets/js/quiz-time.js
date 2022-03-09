const startButton = document.getElementById("startBtn");
const questions = document.getElementById("questions");
const questionTitle = document.getElementById("question-title");
const questionAnswers = document.getElementById("question-answers");
const startScreen = document.getElementById("start-screen");


var answersIndex = 0;
//start quiz//

function generateQuiz (){
  startScreen.setAttribute("class", "hide")
  questions.removeAttribute("class")


  getQuestion()
}


function startCountdown(seconds) {
  let counter = seconds;
    
  const interval = setInterval(() => {
    console.log(counter);
    counter--;
  }, 1000);
}

function getQuestion() {
  let currentQuestion = allQuestions[answersIndex] 
  questionTitle.textContent = currentQuestion.question
  questionAnswers.innerHTML = ""
  currentQuestion.answers.forEach(function(choice, i) {
    console.log(choice.text)
  
    var option = document.createElement("button");
    option.setAttribute("class", "choice");
    option.setAttribute("value", choice.text);
    option.textContent = i + 1 + ". " + choice.text;
  
    option.onclick = questionClick;
   
    questionAnswers.appendChild(option);

  

})
}

function questionClick () {

  console.log("click")
  answersIndex++
  if (answersIndex > 3) {
    return
  }
  if (this.value) {
    console.log("this is the current value: " + this.value)
    console.log("this is the value of answers.text " + allQuestions[answersIndex].answers)
  }
  getQuestion()
}



// set timer 90 sec and cout down //
// lose 10 sec on timer for wrong answer//

//show questions//
const allQuestions = [
{
question: "Inside which Html Element do we put the JS?",
answers:[
{ text: "javascript" , correct:false},
{ text: "script" , correct:true},
{ text: "js" , correct:false},
{ text: "jQuery" , correct:false}
]
},
{
question: "The external JavaScript file must contain the script tag.",
answers: [
{ text: "True", correct: false },
{ text: "False", correct: true }
]
},
{
question: 'How do you write "Hello World" in an alert box?',
answers: [
{ text: 'msg("Hello World");', correct: false },
{ text: 'prompt("Hello World");', correct: false },
{ text: 'alertBox("Hello World");', correct: false },
{ text: 'alert("Hello World");', correct: true }
]
},
{
question: "How do you create a function in JavaScript?",
answers: [
{ text: "function myFunction()", correct: true },
{ text: "function = myFunction()", correct: false },
{ text: "make.function.myFunction()", correct: false },
{ text: "function:myFunction()", correct: false }
]
},
{
question: 'How do you call a function named "myFunction"?',
answers: [
{ text: "call myFunction()", correct: false },
{ text: "read myFunction()", correct: false },
{ text: "myFunction()", correct: true },
{ text: "run.myFunction()", correct: false }
]
}
]

startButton.onclick = generateQuiz;
