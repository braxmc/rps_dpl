let userChoice = [];

let compChoice = [];

const compare = function(choice1, choice2) {
  choice2 = Math.random();
  if (choice2 < .33) {
  choice2 = ['rock'];
  } else if (choice2 > .33 && choice2 < .66) {
  choice2 = ['paper'];
  } else {
  choice2 = ['scissors'];
  }
console.log(compChoice)
  if (choice1[0] === choice2[0]) {
    console.log('tie');
    return 'tie';
  }
  if (choice1[0] === 'rock') {
    if (choice2[0] === 'scissors') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1[0] === 'paper') {
    if (choice2[0] === 'rock') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1[0] === 'scissors') {
    if (choice2[0] === 'paper') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
}

console.log(compChoice);

const choiceButtons = document.querySelectorAll('[data-choice]')

choiceButtons.forEach(button => {
  button.addEventListener('click', () => {
    userChoice.push(button.innerText)
    compare(userChoice, compChoice);
    console.log(userChoice)
    userChoice = []
    compChoice = []
  })
})

