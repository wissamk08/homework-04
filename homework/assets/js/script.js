var button1 = document.querySelector("#button1")
var questionBox = document.getElementById("questionBox")
var answer1 = document.querySelector("#answer1")
var answer2 = document.querySelector("#answer2")
var answer3 = document.querySelector("#answer3")
var result = document.querySelector("#result")
var que = 0
var score = 0
var page2 = document.getElementById("page2")
var highScores = []
var saveButton = document.createElement("button")
saveButton.setAttribute("id", "saveButton")
saveButton.addEventListener("click", saveHighScores)
var replayButton = document.createElement("button")
replayButton.setAttribute("id", "replayButton")
replayButton.addEventListener("click", replay)
var initialsInput = document.createElement("input")
initialsInput.setAttribute("id", "InitialsInput")
const questions =[
    {
        question:"What is 1 + 1",
        answer1:"500",
        answer2:"8",
        correct:"2"
    },
    {
        question:"What is 2 * 2",
        answer1:"6",
        correct:"4",
        answer2:"2"
        
    },
     {  question:"What is 2 - 7",
        correct:"5",
        answer1:"3",
        answer2:"9"
        
},
{
         question:"What is 10 / 2",
        answer1:"4",
        answer2:"2",
        correct:"5"
}
];



function question(){
    
    if(que < questions.length){
        questionBox.textContent = questions[que].question
        answer1.textContent = questions[que].answer1
        answer2.textContent = questions[que].answer2
        answer3.textContent = questions[que].correct  
    }else{
        document.getElementById("page1").style.display = "none"
        page2.innerHTML=""
        page2.textContent = "This is your score: " + score + " Save with your initials"
        page2.appendChild(initialsInput)
        page2.appendChild(saveButton)
        
    }
    
    



}
function saveHighScores(){
    
    highScores.push({score:score, initials:initialsInput.value})
    console.log(highScores)
    page2.innerHTML=""
    page2.textContent = "High Scores" 
    page2.appendChild(replayButton)
    for (var i = 0; i < highScores.length; i++) {
        var elem = document.createElement('p')
        elem.textContent = highScores[i].initials + ": " + highScores[i].score
        page2.appendChild(elem)
    }

}

function check() {
    console.log(this.textContent)
    if(this.textContent === questions[que].correct){
        result.textContent = "correct"
        score++
    }else{
        result.textContent = "Wrong"
    }
    que += 1
    question()
}
function replay(){
    que = 0
    score = 0
    document.getElementById("page1").style.display = ""
    page2.innerHTML = ""
    questionBox.textContent = ""
        answer1.textContent = ""
        answer2.textContent = ""
        answer3.textContent = ""
        result.textContent = ""

}


button1.addEventListener("click", question)
      
answer1.addEventListener("click", check)
answer2.addEventListener("click", check)
answer3.addEventListener("click", check)

