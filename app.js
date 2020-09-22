let userChoice = [];

let compChoice = [];

let userScore = document.getElementById('userScore');

let compScore = document.getElementById('compScore');

const compare = function(choice1, choice2) {
  choice2 = Math.random();
  if (choice2 < .33) {
  choice2 = ['rock'];
  } else if (choice2 > .33 && choice2 < .66) {
  choice2 = ['paper'];
  } else {
  choice2 = ['scissors'];
  }
console.log(choice2)
  document.getElementById('user').innerHTML = choice1;
  document.getElementById('cpu').innerHTML = choice2;
  if (choice1[0] === choice2[0]) {
    document.getElementById('winner').innerHTML = 'Draw!';
    console.log('tie');
    return 'tie';
  }
  if (choice1[0] === 'rock') {
    if (choice2[0] === 'scissors') {
      document.getElementById('winner').innerHTML = 'Player Wins!'
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
      console.log('you win')
      return 'you win';
    } else {
      document.getElementById('winner').innerHTML = 'CPU Wins!'
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1[0] === 'paper') {
    if (choice2[0] === 'rock') {
      console.log('you win')
      document.getElementById('winner').innerHTML = 'Player Wins!'
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
      return 'you win';
    } else {
      document.getElementById('winner').innerHTML = 'CPU Wins!'
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1[0] === 'scissors') {
    if (choice2[0] === 'paper') {
      document.getElementById('winner').innerHTML = 'Player Wins!'
        userScore.innerHTML = parseInt(userScore.innerHTML) + 1;
      console.log('you win')
      return 'you win';
    } else {
      document.getElementById('winner').innerHTML = 'CPU Wins!'
        compScore.innerHTML = parseInt(compScore.innerHTML) + 1;
      console.log('you lose')
      return 'you lose';
    }
  }
}

const choiceButtons = document.querySelectorAll('[data-choice]')
const newButton = document.querySelector('[data-new]')

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice.push(button.innerText)
    compare(userChoice, compChoice);
    console.log(userChoice)
    userChoice = [];
    compChoice = [];
  })
})

newButton.addEventListener('click', button => {
  document.getElementById('userScore').innerHTML = 0;
  document.getElementById('compScore').innerHTML = 0;
  document.getElementById('user').innerHTML = '';
  document.getElementById('cpu').innerHTML = '';
  document.getElementById('winner').innerHTML = '';
})

