let currentQuestion = 0;
let score = 0;

let selectedQuestions = questions;

function loadQuestion(){

    let examBox = document.getElementById("exam");

    let q = selectedQuestions[currentQuestion];

    examBox.innerHTML = `
        <h2>Question ${currentQuestion + 1}</h2>

        <p>${q.question}</p>

        ${q.options.map(option => 
        `<button onclick="checkAnswer('${option}')">
        ${option}
        </button>`).join("")}

        <br><br>

        <button onclick="nextQuestion()">Next</button>
    `;
}


function checkAnswer(answer){

    let correct = selectedQuestions[currentQuestion].answer;

    if(answer === correct){
        score++;
    }

}


function nextQuestion(){

    currentQuestion++;

    if(currentQuestion < selectedQuestions.length){

        loadQuestion();

    }else{

        alert(
        "Exam Completed!\nYour Score: " 
        + score + "/" + selectedQuestions.length
        );

    }

}


window.onload = function(){

    if(document.getElementById("exam")){

        loadQuestion();

    }

};
