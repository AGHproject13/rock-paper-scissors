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
    return "Tie";
  } else if (playerSelection === "Rock") {
    result = computerSelection === "Paper" ? "Lose" : "Win";
  } else if (playerSelection === "Paper") {
    result = computerSelection === "Scissors" ? "Lose" : "Win";
  } else {
    result = computerSelection === "Rock" ? "Lose" : "Win";
  }

  return result;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerPrompt = prompt("Choose: Rock, Paper, or Scissors?");
    const playerChoice = formatPlayerChoice(playerPrompt);
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);

    if (result === "Lose") {
      console.log(`You lose! ${computerChoice} beats ${playerChoice}`);
      computerScore++;
    } else if (result === "Win") {
      console.log(`You win! ${playerChoice} beats ${computerChoice}`);
      playerScore++;
    } else {
      console.log(`Both selected ${computerChoice}. Tie!`);
    }
  }

  if (playerScore > computerScore) {
    return "You win the match!";
  } else if (playerScore < computerScore) {
    return "Computer win the match!";
  }
  return "Tie!";
}

function formatPlayerChoice(choice) {
  return choice.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();
}
