
var r = document.getElementById('rock'),
    p = document.getElementById('paper'),
    s = document.getElementById('scissors'),
    userScoreDisplay = document.getElementById('user-score'),
    botScoreDisplay = document.getElementById('bot-score');

var rps = ["rock", "paper", "scissors"];
var emoji = { rock: '✊️', paper: '🖐️', scissors: '✌️' };

var userScore = 0;
var botScore = 0;
var scoreLimit = 5;

r.addEventListener('click', function() {
  if (userScore < scoreLimit && botScore < scoreLimit) {
    playGame('rock');
  }
});

p.addEventListener('click', function() {
  if (userScore < scoreLimit && botScore < scoreLimit) {
    playGame('paper');
  }
});

s.addEventListener('click', function() {
  if (userScore < scoreLimit && botScore < scoreLimit) {
    playGame('scissors');
  }
});

function playGame(userChoice) {
  var botChoice = rps[Math.floor(Math.random() * rps.length)];
  check(userChoice, botChoice);
}

function check(userChoice, botChoice) {
  if (userChoice === botChoice) {
    index('Tie!', userChoice, botChoice, 'is-warning');
  } else if (
    (userChoice === 'rock' && botChoice === 'scissors') ||
    (userChoice === 'paper' && botChoice === 'rock') ||
    (userChoice === 'scissors' && botChoice === 'paper')
  ) {
    index('You Win!', userChoice, botChoice, 'is-primary');
    userScore++;
  } else {
    index('You Lose!', userChoice, botChoice, 'is-danger');
    botScore++;
  }

  userScoreDisplay.textContent = userScore;
  botScoreDisplay.textContent = botScore;

  if (userScore === scoreLimit || botScore === scoreLimit) {
    alert('Game over! Reset to play again.');
  }
}

function index(message, userChoice, botChoice, styleClass) {
  document.getElementById('notif').innerHTML = `<div class="notification ${styleClass} is-light" id="notif">
    <button class="delete" id="deleteButton">Reset</button>
    You choose: <span id="u">${userChoice + ' ' + emoji[userChoice]}</span>
    <br />
    Computer choose: <span id="bot">${botChoice + ' ' + emoji[botChoice]}</span>
    <br />
    <p class="has-text-centered">
      <span id="state" class="has-text-weight-bold">${message}</span>
    </p>
  </div>`;

  document.getElementById('deleteButton').addEventListener('click', function() {
    resetGame();
  });
}

function resetGame() {
  userScore = 0;
  botScore = 0;
  userScoreDisplay.textContent = '0';
  botScoreDisplay.textContent = '0';
  document.getElementById('notif').innerHTML = '';
}


// MADLIB

let name = prompt("Enter Your Name To Get Started!");
let story= `
 ${name}
`;
let madLibOutputDiv = document.getElementById("madLibOutput");
madLibOutputDiv.innerHTML = `<p>${story}</p>`;