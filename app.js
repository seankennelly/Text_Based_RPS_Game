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

  outerLoop: for (let i = 1; i < 6; i++) {
    let userInput = prompt("1: Please enter either 'Rock', 'Paper', or 'Scissors'. Or type 'Quit' at any time to quit.").toLowerCase();
    // CHECKS IF USER HAS ENTERED SOMETHING
    while (userInput === null || userInput.trim() === "") {
      userInput = prompt("2: Enter either 'Rock', 'Paper', or 'Scissors'. Or type 'Quit' at any time to quit.").toLowerCase();
    };
    // FORMATS INPUT
    let formattedInput = userInput[0].toUpperCase() + userInput.slice(1);
    let playerSelection = '';
    // ALLOWS USER TO QUIT FROM MAIN PROMPT
    if (formattedInput === 'Quit') {
      console.log("See you next time");
      break;
    } else {
      // PROMPT FOR INCORRECT INPUT
      while (!playOptions.includes(formattedInput)) {
        userInput = prompt("3: Sorry, you can only enter 'Rock', 'Paper', or 'Scissors'! (Or 'Quit' to leave the game)").toLowerCase();
        // NESTED CHECK FOR EMPTY PROMPT
        while (userInput === null || userInput.trim() === "") {
          userInput = prompt("4: Enter either 'Rock', 'Paper', or 'Scissors'. Or type 'Quit' at any time to quit.").toLowerCase();
        };
        formattedInput = userInput[0].toUpperCase() + userInput.slice(1);
        // ALLOWS USER TO QUIT FROM SECONDARY PROMPT
        if (formattedInput === 'Quit') {
          console.log("See you next time");
          break outerLoop;
        };
      };
      playerSelection = formattedInput;
      const computerSelection = computerPlay();

      const round = playRound(playerSelection, computerSelection);
      if (round.result === 'loss') {
        computerScore++;
      } else if (round.result === 'win') {
        playerScore++;
      };
      console.log(`Round ${i}: ${round.msg}`);
    }
  };

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