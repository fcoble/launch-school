const readline = require('readline-sync');

const VALID_CHOICES = ['rock','paper','scissors','lizard','spock'];
const WINNING_COMBOS = {
  rock:     ['scissors', 'lizard'],
  paper:    ['rock',     'spock'],
  scissors: ['paper',    'lizard'],
  lizard:   ['paper',    'spock'],
  spock:    ['rock',     'scissors'],
};

let scoreInformation = {
  playerScore: 0,
  computerScore: 0,
  tieGames: 0
};

function updateScoreTally(playersChoice, opponentsChoice, scoreInformation) {
  if (playerWins(playersChoice, opponentsChoice)) {
    ++scoreInformation.playerScore;
  } else if (opponentsChoice === playersChoice ) {
    ++scoreInformation.tieGames;
  } else {
    ++scoreInformation.computerScore;
  }
}

function printCurrentTournamentStats(scoreInformation) {
  console.log('----------------------------------------');
  prompt('Tournament Statistics');
  prompt(`Player: ${scoreInformation.playerScore}` , 1);
  prompt(`Computer: ${scoreInformation.computerScore}` ,1);
  prompt(`Ties: ${scoreInformation.tieGames}` ,1);
  if (scoreInformation.playerScore === 3 ||
      scoreInformation.computerScore === 3) prompt ('TOURNAMNET OVER.');
  console.log('----------------------------------------');
}

function endTournament(scoreInformation) {
  if (scoreInformation.playerScore === 3 ||
      scoreInformation.computerScore === 3) return true;
  return false;
}

function playerWins(playersChoice, opponentsChoice) {
  return WINNING_COMBOS[playersChoice].includes(opponentsChoice);
}

function displayWinner(playersChoice, opponentsChoice) {
  prompt(`You picked ${playersChoice}.`);
  prompt(`The computer picked ${opponentsChoice}.`);
  if (playerWins(playersChoice, opponentsChoice)) {
    prompt("YOU WIN!");
  } else if (opponentsChoice === playersChoice ) {
    prompt("The game, is a tie.");
  } else {
    prompt("SORRY! The computer wins.");
  }
}

function prompt(message, indent = 0) {
  if (indent) {
    console.log(`       ${message}`);
    return;
  }

  console.log(`==>  ${message}`);
}


while (true) {
  console.clear();
  prompt('BEST OF 5 RPSLR TOURNAMENT');
  prompt('Pick your item by chosing the associated number...');

  for (let [index, element] of VALID_CHOICES.entries()) {
    prompt(`${index} - to pick ${element}`, 1);
  }

  let playersChoiceIndex = readline.question();

  while (!Object.keys(VALID_CHOICES).includes(playersChoiceIndex)) {
    prompt("That's not a valid playersChoice.");
    playersChoiceIndex = readline.question();
  }

  let playersChoice = VALID_CHOICES[playersChoiceIndex];
  let opponentsChoiceIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let opponentsChoice = VALID_CHOICES[opponentsChoiceIndex];

  console.clear();
  displayWinner(playersChoice, opponentsChoice);
  updateScoreTally(playersChoice, opponentsChoice, scoreInformation);
  printCurrentTournamentStats(scoreInformation);

  if (endTournament(scoreInformation)) break;

  prompt("Continue to next round (y/n)?", 1);
  let playAgain = readline.question().toLowerCase();
  while (playAgain[0] !== 'n' && playAgain[0] !== 'y') {
    prompt('Oops!Please enter Y/y for yes, or N/n for no.');
    playAgain = readline.question().toLowerCase();
  }

  if (playAgain[0] !== 'y' || endTournament(scoreInformation)) break;

  console.clear();
}

