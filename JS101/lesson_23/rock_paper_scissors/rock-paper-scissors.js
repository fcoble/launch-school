const readline = require('readline-sync');
const VALID_CHOICES = ['rock','paper','scissors'];

function displayWinner(playerChoice, opponentChoice) {
  prompt(`You chose ${playerChoice}. Opponent chose ${opponentChoice}`);

  if ((playerChoice === 'rock' && opponentChoice === 'scissors') ||
      (playerChoice === 'scissors' && opponentChoice === 'paper') ||
      (playerChoice === 'paper' && opponentChoice === 'rock')) {
    prompt("You win!");
  } else if ((opponentChoice === 'rock' && playerChoice === 'scissors') ||
      (opponentChoice === 'scissors' && playerChoice === 'paper') ||
      (opponentChoice === 'paper' && playerChoice === 'rock')) {
    prompt("Sorry! The computer wins!");
  } else {
    prompt("The game is a tie!");
  }
}

function prompt(message) {
  console.log(`=> ${message}`);
}




while (true) {
  prompt(`Pick one: ${VALID_CHOICES.join(', ')}...`);

  let playerChoice = readline.question();

  while (!['rock','paper','scissors'].includes(playerChoice)) {
    prompt("That's not a valid playerChoice.");
    playerChoice = readline.question();
  }

  //Note: use floor, not round, else you will have edge cases that go to 3
  let opponentChoiceIndex = Math.floor(Math.random() *
    VALID_CHOICES.length);

  let opponentChoice = VALID_CHOICES[opponentChoiceIndex];

  displayWinner(playerChoice, opponentChoice);

  prompt("Do you want to play again (y/n)?");
  let playAgain = readline.question().toLowerCase();
  while (playAgain !== 'n' && playAgain !== 'y') {
    prompt('Oops!Please enter Y/y for yes, or N/n for no.');
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain !== 'y') break;
}

