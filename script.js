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

        // Open the exam page
        window.location.href = "exam.html";

    });

});
