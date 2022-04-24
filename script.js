"use strict";

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const restartGame = function () {
  guess.value = null;
  scoreValue = 20;
  scoreValue.textContent = scoreValue;
};

const secretNumber = getRandomIntInclusive(1, 20);
console.log(`secret number : ${secretNumber}`);
let scoreValue = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  const messageP = document.querySelector(".message");
  const score = document.querySelector(".score");
  const highScore = document.querySelector(".highscore");
  console.log(this);
  console.log("reacting to click event");
  if (!guess) {
    console.log("invalid input entered");
    messageP.textContent = "Please enter valid value within range";
  } else {
    if (guess === secretNumber) {
      // if guess matches
      messageP.textContent = "Guess is correct";
      if (highScore.textContent < scoreValue) {
        highScore.textContent = scoreValue;
      }
    } else if (guess < secretNumber) {
      // if guess is lower than secret
      messageP.textContent = "Guess is lower";
      scoreValue--;
    } else {
      // if guess is above secret
      messageP.textContent = "Guess is higher";
      scoreValue--;
    }
    if (scoreValue === 0) {
      messageP.textContent = "You lost this round...try again";
    }
    score.textContent = scoreValue;
  }
});
