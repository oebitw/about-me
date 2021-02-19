'use strict';
let score = 0;
alert('Welcome to OE Website 🎉');

let userName = prompt('Tell us your name please 😃');
greetingMsg();
function greetingMsg() {
  let message = 'Nice meeting you ' + userName + '😎';
  alert(message);
}

//The Greeting Question
yesOrNoQuestions('You are on fire 🔥 let us start the game 😃 I will ask you 5 (yes or no)  questions, & lets see how many points you will score. ', 'Duh You are boring 😪', 'Are you Excited 🤩 ?  Do you want to play with us?');
function yesOrNoQuestions(correctMessage, WrongMessage, question) {
  let playGame = prompt(question);
  playGame = playGame.toLowerCase();
  while (playGame !== 'yes' && playGame !== 'y' && playGame !== 'no' && playGame !== 'n') {
    playGame = prompt(question).toLowerCase();
  }
  if (playGame === 'y' || playGame === 'yes') {
    alert(correctMessage);
  } else if (playGame === 'n' || playGame === 'no') {
    alert(WrongMessage);
  }
}
//The First Question
firstQuestion('Correct ' + userName + ' You scored the first point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' 😔', 'Omar has Bsc degree in Aeronautical engineering ✈️ & Master degree in business administration 💰?');
function firstQuestion(correct, wrong, question) {
  let backGround = prompt(question).toLowerCase();
  while (backGround !== 'yes' && backGround !== 'y' && backGround !== 'no' && backGround !== 'n') {
    backGround = prompt(question).toLowerCase();
  }

  if (backGround === 'y' || backGround === 'yes') {
    alert(correct);
    score++;
  } else if (backGround === 'n' || backGround === 'no') {
    alert(wrong);
  }
}
// The Second Question
secondQuestion('Well done ' + userName + ' You scored the second point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' 😔', 'Omar has experiance in business development & project management 🧑🏻‍💼?');
function secondQuestion(correct, wrong, question) {
  let workExperiance = prompt(question);
  workExperiance = workExperiance.toLowerCase();
  if (workExperiance === 'yes' || workExperiance === 'y') {
    alert(correct);
  } else {
    alert(wrong);
  }
  if (workExperiance === 'yes' || workExperiance === 'y') {
    score = score + 1;
  }
}
// The Third Question
thirdQuestion('Well done ' + userName + ' You scored the third point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' 😔', 'Omar Loves reading books in his free time 📘?');
function thirdQuestion(correct, wrong, question) {
  let readBooks = prompt(question);
  readBooks = readBooks.toLowerCase();
  if (readBooks === 'yes' || readBooks === 'y') {
    alert(correct);
  } else {
    alert(wrong);
  }
  if (readBooks === 'yes' || readBooks === 'y') {
    score = score + 1;
  }
}

//The Fourth Question
fourthQuestion('Perfect ' + userName + ' You scored the fourth point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' 😔', 'Omar"s new hobby is programming 💻?');
function fourthQuestion(correct, wrong, question) {
  let loveProgramming = prompt(question);
  loveProgramming = loveProgramming.toLowerCase();
  if (loveProgramming === 'yes' || loveProgramming === 'y') {
    alert(correct);
  } else {
    alert(wrong);
  }
  if (loveProgramming === 'yes' || loveProgramming === 'y') {
    score = score + 1;
  }
}

// The fifth Question
fifththQuestion('Perfect ' + userName + ' You scored the fifth point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' 😔', 'Omar"s favourite football team is barcelona 🔴🔵?');
function fifththQuestion(correct, wrong, question) {
  let favTeam = prompt(question);
  favTeam = favTeam.toLowerCase();
  if (favTeam === 'yes' || favTeam === 'y') {
    alert(correct);
  } else {
    alert(wrong);
  }
  if (favTeam === 'yes' || favTeam === 'y') {
    score = score + 1;
  }
}

//Sixth Question (Omar Age)
let corAge = (26);
sixthQuestion('Correct ' + userName + ' You scored the sixth point ' , 'it is too high ' + userName + 'Try one more time.', 'it is too low ' + userName + '  Try one more time.', 'How old is Omar?');
function sixthQuestion(correct, tooHigh, tooLow, question) {
  let omarAge = Number(prompt(question));
  for (let i = 1; i < 4; i++) {
    if (isNaN(omarAge)) {
      alert('Please enter a number!');
      omarAge = Number(prompt(question));
    } else if (omarAge < 26) {
      alert(tooLow);
      omarAge = Number(prompt(question));
    } else if (omarAge > 26) {
      alert(tooHigh);
      omarAge = Number(prompt(question));
    } else if (omarAge === corAge) {
      alert(correct);
      break;
    }
  }
  if (omarAge !== corAge) {
    alert('You exceed your attempts the Correct answer ' + userName + ' is 26');
  } else if (omarAge === 26) {
    score = score + 1;
  }
}
//The Seventh Question
seventhQuestion('Correct ' + userName + ' You scored the seventh point 🎆', 'unfortunately wrong answer ⭕ ' + userName + ' Try one more time.', 'What is Omar Favorite Food ?');
function seventhQuestion(correct, wrong, question) {
  let favFood = prompt(question);
  let omarFood = ['pizza', 'burger', 'indian', 'Chinese', 'mansaf'];

  for (let x = 0; x < 5; x++) {

    if (favFood === omarFood[0] || favFood === omarFood[1] || favFood === omarFood[2] || favFood === omarFood[3]) {
      alert(correct);
      score++;
      break;
    }
    else {
      favFood = prompt(wrong);
    }

  }
  alert('Omar Favorite food is ' + omarFood);
}


alert('You scored ' + score + ' Out of 7');
