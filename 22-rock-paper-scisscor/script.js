//scoreboard
const playerScoreTag = document.getElementById("player-score");
const drawScoreTag = document.getElementById("draw-score");
const computerScoreTag = document.getElementById("computer-score");

//turns
const playerTurns = document.getElementById("player-turn");
const computerTurns = document.getElementById("computer-turn");

//buttons
const rockButton = document.getElementById("rock-btn");
const paperButton = document.getElementById("paper-btn");
const scissorsButton = document.getElementById("scissors-btn");

function getComputerWeapons() {
  const weapons = ["rock", "paper", "scissors"];
  const randomIndex = Math.round(Math.random() * (weapons.length - 1));
  return weapons[randomIndex];
}

function getWinner(playerWeapon, computerWeapon) {
  if (
    (playerWeapon === "rock" && computerWeapon === "scissors") ||
    (playerWeapon === "paper" && computerWeapon === "rock") ||
    (playerWeapon === "scissors" && computerWeapon === "paper")
  ) {
    return "You win!";
  } else if (playerWeapon === computerWeapon) {
    return "It's a draw";
  } else {
    return "You lose.";
  }
}

let playerScore = 0;
let drawScore = 0;
let computerScore = 0;

function gameController(playerWeapon) {
  const playerSelection = playerWeapon.toLowerCase();
  const computerSelection = getComputerWeapons();

  playerTurns.textContent = playerSelection;
  computerTurns.textContent = computerSelection;

  const results = getWinner(playerSelection, computerSelection);

  if (results === "You win!") {
    playerScore++;
    playerScoreTag.textContent = playerScore;
  } else if (results === "It's a draw") {
    drawScore++;
    drawScoreTag.textContent = drawScore;
  } else {
    computerScore++;
    computerScoreTag.textContent = computerScore;
  }
}

rockButton.addEventListener("click", () =>
  gameController(rockButton.textContent)
);
paperButton.addEventListener("click", () =>
  gameController(paperButton.textContent)
);
scissorsButton.addEventListener("click", () =>
  gameController(scissorsButton.textContent)
);
