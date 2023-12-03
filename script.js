'use strict';

// console.log(document.querySelector('.message').textContent);

// 72. Selecting and Manipulating Elements
/* document.querySelector('.message').textContent = 'Correct Number! 🎉';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value); */

// 73. Handling Click Events
/* document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  }
}); */

// 74. Implementing Game Logic

/* //Creating a random number -- it must be outside the event
const secretNumber = Math.trunc(Math.random() * 20) + 1;

//Set the initial score to 20.
let score = 20;
//Showing the number temporarily
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //First Scenario: No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  }
  //There is a guess/input & right answer
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
  }
  //When the guess is greater than the secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      //Should only happen when the score is not 0
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When the guess is less than the secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      //Should only happen when the score is not 0
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); */

//75. Manipulating CSS Styles
//Creating a random number -- it must be outside the event
let secretNumber = Math.trunc(Math.random() * 20) + 1;

//Set the initial score to 20.
let score = 20;
//Showing the number temporarily
// document.querySelector('.number').textContent = secretNumber;

//creating the initial highscore
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(typeof guess, guess);

  //First Scenario: No input
  if (!guess) {
    document.querySelector('.message').textContent = 'No number! ⛔';
  }
  //There is a guess/input & right answer
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number! 🎉';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //Changing CSS when you win the Game
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
  }
  //When the guess is greater than the secretNumber
  else if (guess > secretNumber) {
    if (score > 1) {
      //Should only happen when the score is not 0
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When the guess is less than the secretNumber
  else if (guess < secretNumber) {
    if (score > 1) {
      //Should only happen when the score is not 0
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').value = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
});
