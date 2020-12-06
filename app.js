var userScore = 0;
var cpuScore = 0;
const userScore_span = document.getElementById("user-score");
const cpuScore_span = document.getElementById("cpu-score");
const scoreboard_div = document.querySelector(".scoreboard");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

function getCpuChoice() {
  var choices = ["rock", "paper", "scissors"];
  var randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
}

function win(userChoice, cpuChoice) {
  userScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML =
    userChoice + " beats " + cpuChoice + "\n" + ", YOU WIN!";
  document.getElementById(userChoice).classList.add("green-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("green-glow");
  }, 350);
}
function lose(userChoice, cpuChoice) {
  cpuScore++;
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML =
    cpuChoice + " beats " + userChoice + "\n" + ", YOU LOSE!";
  document.getElementById(userChoice).classList.add("red-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("red-glow");
  }, 350);
}
function tie(userChoice, cpuChoice) {
  userScore_span.innerHTML = userScore;
  cpuScore_span.innerHTML = cpuScore;
  result_div.innerHTML =
    cpuChoice + " ties " + userChoice + "\n" + ", IT'S A DRAW...";
  document.getElementById(userChoice).classList.add("yellow-glow");
  setTimeout(function() {
    document.getElementById(userChoice).classList.remove("yellow-glow");
  }, 350);
}

function game(userChoice) {
  var cpuChoice = getCpuChoice();
  switch (userChoice + cpuChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      win(userChoice, cpuChoice);
      break;
    case "paperscissors":
    case "rockpaper":
    case "scissorsrock":
      lose(userChoice, cpuChoice);
      break;
    case "scissorsscissors":
    case "rockrock":
    case "paperpaper":
      tie(userChoice, cpuChoice);
      break;
  }
}

function main() {
  rock_div.addEventListener("click", function() {
    game("rock");
  });
  paper_div.addEventListener("click", function() {
    game("paper");
  });
  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
}

main();
