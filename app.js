let userChoice = [];

let compChoice = Math.random();
if (compChoice < .33) {
  compChoice = ['rock'];
} else if (compChoice > .33 && compChoice < .66) {
  compChoice = ['paper'];
} else {
  compChoice = ['scissors'];
}

const compare = function(choice1, choice2) {
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
  })
})

