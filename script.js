let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget() {
  return Math.floor(Math.random() * 10);
}

function compareGuesses(humanGuess, computerGuess, targetNumber) {
  if (Math.abs(targetNumber - humanGuess) === Math.abs(targetNumber - computerGuess)) {
    return true;
  } else if (Math.abs(targetNumber - humanGuess) < Math.abs(targetNumber - computerGuess)) {
    return true;
  } else {
    return false;
  }
}

function updateScore(winner) {
  if (winner === 'human') {
    humanScore++;
  } else if (winner === 'computer') {
    computerScore++;
  }
}

function advanceRound() {
  currentRoundNumber++;
}