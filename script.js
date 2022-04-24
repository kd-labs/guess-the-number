"use strict";

const guessDiv = document.querySelector(".guess");
const messageP = document.querySelector(".message");
const score = document.querySelector(".score");
const highScore = document.querySelector(".highscore");
const secretDiv = document.querySelector(".number");
const body = document.querySelector("body");

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let secretNumber = getRandomIntInclusive(1, 20);
console.log(`secret number : ${secretNumber}`);
let scoreValue = 20;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(guessDiv.value);
  console.log(this);
  console.log("reacting to click event");
  if (!guess || guess < 1 || guess > 20) {
    console.log("invalid input entered");
    messageP.textContent = "Please enter valid value within range";
  } else {
    if (guess === secretNumber) {
      // if guess matches
      messageP.textContent = "Guess is correct";
      body.style.backgroundColor = "green";
      secretDiv.style.width = "30rem";
      secretDiv.textContent = secretNumber;
      if (highScore.textContent < scoreValue) {
        highScore.textContent = scoreValue;
      }
    } else if (guess != secretNumber) {
      scoreValue--;
      messageP.textContent = `Guess is ${
        guess < secretNumber ? "lower" : "higher"
      }`;
    }

    if (scoreValue === 0) {
      messageP.textContent = "You lost this round...try again";
    }
    score.textContent = scoreValue;
  }
});

const again = function () {
  console.log("reacting to click even on again button");
  secretNumber = getRandomIntInclusive(1, 20);
  scoreValue = 20;
  score.textContent = scoreValue;
  guessDiv.value = null;
  secretDiv.style.width = "15rem";
  messageP.textContent = "Start guessing...";
  secretDiv.textContent = "?";
  body.style.backgroundColor = "#222";
};

document.querySelector(".again").addEventListener("click", again);
