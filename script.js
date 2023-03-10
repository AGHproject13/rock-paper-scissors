let playerScore = 0;
let computerScore = 0;
const playerScoreText = document.querySelector(".player-score");
const computerScoreText = document.querySelector(".computer-score");
const choices = document.querySelectorAll(".choice button");
const resultText = document.querySelector(".result");

choices.forEach((button) => {
  button.addEventListener("click", getPlayerChoice);
});

function getComputerChoice() {
  const choiceNumber = Math.floor(Math.random() * 3);
  let computerChoice;
  switch (choiceNumber) {
    case 0:
      computerChoice = "Rock";
      break;
    case 1:
      computerChoice = "Paper";
      break;
    default:
      computerChoice = "Scissors";
  }
  return computerChoice;
}

function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection === computerSelection) {
    result = "Tie";
  } else if (playerSelection === "Rock") {
    result = computerSelection === "Paper" ? "Lose" : "Win";
  } else if (playerSelection === "Paper") {
    result = computerSelection === "Scissors" ? "Lose" : "Win";
  } else {
    result = computerSelection === "Rock" ? "Lose" : "Win";
  }
  return result;
}

function getPlayerChoice() {
  const playerChoice = this.innerText;
  const computerChoice = getComputerChoice();
  const result = playRound(playerChoice, computerChoice);
  if (result === "Lose") {
    resultText.innerText = `You lose! ${computerChoice} beats ${playerChoice}`;
    computerScore++;
  } else if (result === "Win") {
    resultText.innerText = `You win! ${playerChoice} beats ${computerChoice}`;
    playerScore++;
  } else {
    resultText.innerText = `Both selected ${computerChoice}. Tie!`;
  }
  updateScore();
  if (playerScore === 5 || computerScore === 5) {
    showMatchWinner();
  }
}

function updateScore() {
  playerScoreText.innerText = `Player: ${playerScore}`;
  computerScoreText.innerText = `Computer: ${computerScore}`;
}

function showMatchWinner() {
  const matchResult = document.createElement("p");
  if (playerScore === 5) {
    matchResult.innerText = "You won the match!";
  } else {
    matchResult.innerText = "You lost the match!";
  }
  resultText.parentElement.insertBefore(matchResult, resultText);
}
