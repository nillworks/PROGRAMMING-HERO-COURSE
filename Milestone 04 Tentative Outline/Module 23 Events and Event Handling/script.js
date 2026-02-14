const button = document.getElementById('btn1');

const randomNumber1 = Math.random() * 200 + 100;
const randomNumber2 = Math.random() * 200 + 100;
const randomNumber3 = Math.random() * 200 + 100;

const buttonClickEvent = function () {
  document.body.style.backgroundColor = 'purple';
};
button.onclick = buttonClickEvent;

console.log(randomNumber1);

// Make Yellow On clink event
const btn2 = document.getElementById('btn2');
const makeYellow = function () {
  document.body.style.backgroundColor = 'yellow';
};

console.log(btn2);
