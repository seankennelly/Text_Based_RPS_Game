const playOptions = ["Rock", "Paper", "Scissors"];

const computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)];
};

const playRound = (playerSelection, computerSelection) => {
  const selection = playerSelection;
  if (selection === computerSelection) {
    return { result: 'draw', msg: `You drew! You both picked ${selection}` }
  } else if
    (
    selection === 'Rock' && computerSelection === 'Paper'
    || selection === 'Paper' && computerSelection === 'Scissors'
    || selection === 'Scissors' && computerSelection === 'Rock'
  ) {
    return { result: 'loss', msg: `You lose! ${computerSelection} beats ${selection}!` }
  } else {
    return { result: 'win', msg: `You win! ${selection} beats ${computerSelection}!` }
  };
};


const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let totalScore = '';

  let userInput = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'. Or type 'Quit' at any time to quit.").toLowerCase();
  // Checks that user has entered something
  while (userInput === null || userInput.trim() === "") {
    userInput = prompt("Enter either 'Rock', 'Paper', or 'Scissors'. Or type 'Quit' at any time to quit.").toLowerCase();
  };
  let formattedInput = userInput[0].toUpperCase() + userInput.slice(1);








};

game();