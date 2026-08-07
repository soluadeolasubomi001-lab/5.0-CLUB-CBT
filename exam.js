let currentQuestion = 0;
let score = 0;

let examTime = localStorage.getItem("examTime") || 30;
let timeLeft = parseInt(examTime) * 60;

let selectedQuestions = [...questions]
.sort(() => Math.random() - 0.5)
.slice(0, 30);

function loadQuestion(){

    let examBox = document.getElementById("exam");

    let q = selectedQuestions[currentQuestion];

    examBox.innerHTML = `
        <h2>Question ${currentQuestion + 1}</h2>

        <p>${q.question}</p>

        ${q.options.map((option, index) => 
`<button onclick="checkAnswer(${index})">
${option}
</button>`).join("")}

        <br><br>

        <button onclick="nextQuestion()">Next</button>
    `;
}


function checkAnswer(answer){


function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < selectedQuestions.length){

        loadQuestion();

    }else{

        function checkAnswer(selectedIndex){

    let correct = selectedQuestions[currentQuestion].answer;

    if(selectedIndex === correct){
        score++;
    }

                                          }rt(
        "Exam Completed!\nYour Score: " 
        + score + "/" + selectedQuestions.length
        );

    }

}
function startTimer() {

    const timer = document.getElementById("timer");

    setInterval(function () {

        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        timer.innerHTML = "Time Left: " + minutes + ":" + seconds;

        timeLeft--;

    }, 1000);

       }


window.onload = function(){

    if(document.getElementById("exam")){

        loadQuestion();

        startTimer();

    }

};
const candidate = localStorage.getItem("candidateName");

if(candidate){

    document.getElementById("candidateName").innerHTML =
        "Candidate: " + candidate;

            }
