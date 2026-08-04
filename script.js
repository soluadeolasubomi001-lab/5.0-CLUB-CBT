document.addEventListener("DOMContentLoaded", function () {

    const startButton = document.querySelector("button");

    startButton.addEventListener("click", function () {

        let name = document.querySelector("input").value;

        if(name.trim() === ""){

            alert("Please enter your name before starting the exam.");

            return;

        }

        alert("Welcome " + name + "!\n\n5.0 CLUB CBT is loading...");

    });

});
