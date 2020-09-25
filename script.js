// console.log("Hello World!")
var welcomeContainer = document.getElementById("welcome");
var startButton = document.getElementById("create-pizza");

startButton.addEventListener("click", function () {
    welcomeContainer.style.display = "none";
});