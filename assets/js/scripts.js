var startBtn = document.querySelector('.startBtn')
var homeBtn = document.querySelector ('#homeBtn')
var nextBtn = document.querySelector('#nextBtn')
var options = document.querySelector('#answerBtn')
var currentQuestionIndex = 0
var time = question.length * 10
var counter = document.querySelector('#counter')
var timerId




function startGame() {
    var startScreen = document.getElementById("question-container")
    startScreen.setAttribute("class", "hide")

    timerId = setInterval(countDown, 2000)

    counter.textContent = time

    nextQuestion()
}

function nextQuestion() {
    var question = questions[currentQuestionIndex]
    var questionTitle = document.getElementById("question")
    questionTitle.textContent = question.title; 
    
    options.innerHTML = ""

    question.choices.forEach(function(choice, i) {
        var choiceNode = document.createElement("button")
        choiceNode.setAttribute("class", "choice")
        choiceNode.setAttribute("value", choice)
    
        choiceNode.textContent = i + 1 + ". " + choice
        choiceNode.onclick = answerSelect
        options.appendChild(choiceNode)
      })
}

function answerSelect() {  

    if (this.value !== questions[currentQuestionIndex].answer) {
        time -= 30

        if(time < 0) {
            time = 0
        }

        counter.textContent = time
    } else {
        var image = document.createElement("IMG")
        image.setAttribute("src", "./assets/wellDone.gif")
    }

    currentQuestionIndex++

    if (currentQuestionIndex === question.length) {
        endQuiz()
    } else {
        nextQuestion();
    }
}

function endQuiz() {
    clearInterval(timerId)
    var fin = document.getElementById("score")
    fin.removeAttribute("class")

    var finalScore = document.getElementById("finalScore")
    finalScore.textContent = time
    
    question.setAttribute("class", "hide")
}

function countDown() {
    console.log("can't figure out countdown")
}

startBtn.onclick = startGame;
