function getComputerSelection() {
  const weapons = ["rock", "paper", "scissors"];

  const randomIndex = Math.round(Math.random() * (weapons.length - 1));

  return weapons[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "tie";
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

function threeRoundsGame() {
  for (let i = 0; i < 3; i++) {
    const playerSelection = prompt("Type your weapon!");
    const computerSelection = getComputerSelection();

    console.log(playRound(playerSelection, computerSelection));
  }
}

threeRoundsGame();
