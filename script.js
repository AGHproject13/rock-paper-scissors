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

  if (playerSelection == computerSelection) {
    return `Both selected ${computerSelection}. Tie!`;
  } else if (playerSelection == "Rock") {
    result = computerSelection == "Paper" ? 0 : 1;
  } else if (playerSelection == "Paper") {
    result = computerSelection == "Scissors" ? 0 : 1;
  } else {
    result = computerSelection == "Rock" ? 0 : 1;
  }

  if (result == 1) {
    return `You win! ${playerSelection} beats ${computerSelection}`;
  }
  return `You lose! ${computerSelection} beats ${playerSelection}`;
}

const playerSelection = "Rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
