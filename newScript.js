'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(secretNumber);

let score = 20;
let highScore = 0;

function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}
function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //   console.log(guess);

  //------------when no input is entered-----------//

  if (!guess) {
    displayMessage('Please enter a value!!!');
  } else if (guess >= 1 && guess <= 20) {
    // --------------When score is different than the correct answer----------//

    if (guess !== secretNumber) {
      if (score > 1) {
        displayMessage(guess > secretNumber ? 'Too High!!' : 'Too Low!!');
        score--;
        displayScore(score);
      } else {
        displayMessage('You Lose the Game!!');
        displayScore(0);
      }

      //----------when guess is equal to the secretNumber---------//
    } else if (guess === secretNumber) {
      displayMessage('Congratulations!!');

      score > highScore ? (highScore = score) : highScore;
      document.querySelector('.highscore').textContent = highScore;
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
      document.querySelector('.number').textContent = secretNumber;
    }
  } else displayMessage('Enter a number from 1 to 20!!');
});

//--------after again button is clicked------------//

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  //   console.log(secretNumber);
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
  displayScore(20);
  score = 20;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
