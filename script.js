document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.querySelector("button");

    startButton.addEventListener("click", function () {

        let name = document.querySelector("input").value.trim();

        if (name === "") {
            alert("Please enter your name before starting the exam.");
            return;
        }

        // Save the candidate's name
        localStorage.setItem("candidateName", name);
        const questionCount = document.querySelectorAll("select")[1].value;
        const examTime = document.querySelectorAll("select")[0].value;

localStorage.setItem("examTime", examTime);

localStorage.setItem("questionCount", questionCount);

        // Open the exam page
        window.location.href = "exam.html";

    });

});
