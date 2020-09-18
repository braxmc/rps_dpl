let userChoice = 'rock';

let compChoice = Math.random();
if (compChoice < .33) {
  compChoice = 'rock';
} else if (compChoice > .33 && compChoice < .66) {
  compChoice = 'paper';
} else {
  compChoice = 'scissors';
}



const compare = function(choice1, choice2) {
  if (choice1 === choice2) {
    console.log('tie');
    return 'tie';
  }
  if (choice1 === 'rock') {
    if (choice2 === 'scissors') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1 === 'paper') {
    if (choice2 === 'rock') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
  if (choice1 === 'scissors') {
    if (choice2 === 'paper') {
      console.log('you win')
      return 'you win';
    } else {
      console.log('you lose')
      return 'you lose';
    }
  }
}


console.log(userChoice);
console.log(compChoice);


compare(userChoice, compChoice);
