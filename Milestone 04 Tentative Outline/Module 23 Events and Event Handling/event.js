const button = document.getElementById('btn');

button.addEventListener('click', () => {
  const title = document.getElementById('title');
  title.innerText = 'Updated Page Title Text';
});

const info = document.getElementById('info');
const loginButton = document.getElementById('btnLogin');
loginButton.addEventListener('click', () => {
  info.innerText = 'user logged in successfully';
});

//  <!-- handle input text -->

const updateButton = document.getElementById('btnUpdate');
const nameShow = document.getElementById('nameShow');

const input = document.getElementById('input');

updateButton.addEventListener('click', () => {
  //  get button Text
  const nameInput = input.value;
  nameShow.innerText = nameInput;
});
