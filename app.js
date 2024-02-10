const playOptions = ["rock", "paper", "scissors"];
let quitGame = false;

const computerPlay = () => {
  return playOptions[Math.floor(Math.random() * 3)];
};

function checkInput() {
  let userInput = prompt("Please enter either 'Rock', 'Paper', or 'Scissors'. Or click 'Cancel' at any time to quit.");
  if (userInput === null) {
    const promptChoice = confirm("Do you really want to quit?");
    if (promptChoice) {
      console.log("See you next time");
      quitGame = true;
    } else {
      return checkInput();
    }
  };

  if (!quitGame) {
    userInput = userInput = userInput.toLowerCase().trim();
  };
  if (!quitGame && !playOptions.includes(userInput)) {
    return checkInput();
  } else {
    return userInput;
  };
};

const playRound = (playerSelection, computerSelection) => {
  // Formats return values
  playerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1);
  computerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1);
  // Game mechanics
  if (playerSelection === computerSelection) {
    return { result: 'draw', msg: `You drew! You both picked ${playerSelection}.` }
  } else if
    (
    playerSelection === 'Rock' && computerSelection === 'Paper'
    || playerSelection === 'Paper' && computerSelection === 'Scissors'
    || playerSelection === 'Scissors' && computerSelection === 'Rock'
  ) {
    return { result: 'loss', msg: `You lose! The computer's ${computerSelection} beats your ${playerSelection}!` }
  } else {
    return { result: 'win', msg: `You win! Your ${playerSelection} beats the computer's ${computerSelection}!` }
  };
};

const game = () => {
  let playerScore = 0;
  let computerScore = 0;
  let totalScore = '';

  outerLoop: for (let i = 1; i < 6; i++) {
    playerSelection = checkInput();
    if (quitGame === true) {
      return null;
    };
    const computerSelection = computerPlay();
    // Round played, scores updated (unless draw)
    const round = playRound(playerSelection, computerSelection);
    if (round.result === 'loss') {
      computerScore++;
    } else if (round.result === 'win') {
      playerScore++;
    };
    console.log(`Round ${i}: ${round.msg}`);
  };

  // Final score output
  if (computerScore > playerScore) {
    totalScore = "Sorry, you lost."
  } else if (computerScore < playerScore) {
    totalScore = "You won!";
  } else if (computerScore === playerScore) {
    totalScore = "Overall it was a draw.";
  };
  console.log(`TOTAL SCORES: 
              Computer Score = ${computerScore}
              Player Score = ${playerScore}
              Result: ${totalScore}`
  );
};

game();