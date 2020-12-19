'use strict';

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
//check button
document.querySelector('.check').addEventListener('click', function () {
  const num = Number(document.querySelector('.guess').value);
  if (score > 0) {
    if (!num) {
      document.querySelector('.message').textContent = 'no number';
    } else if (secretNumber === num) {
      document.querySelector('.message').textContent = 'correct answer u win';
      document.querySelector('body').style.backgroundColor = 'rgb(124,238,124)'
      document.querySelector('.number').style.width = '30rem'
      document.querySelector('.number').textContent = num;
    } else if (secretNumber > num) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'Too low';
    } else if (secretNumber < num) {
      score--;
      document.querySelector('.score').textContent = score;
      document.querySelector('.message').textContent = 'too high';
    }
  } else {
    document.querySelector('.message').textContent = 'Game over';
    document.querySelector('body').style.backgroundColor = 'rgb(240,30,20)'
  }
})

//Again button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = null;
  if (score > highscore) {
    highscore = score;
    document.querySelector('.highscore').textContent = highscore;
  }
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
  secretNumber = Math.trunc(Math.random() * 20 + 1);
})