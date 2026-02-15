const textArea = document.getElementById('textarea');
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBoxParent');
const commentRow = document.querySelector('section div');

submitButton.addEventListener('click', event => {
  event.preventDefault();

  const allInfoArr = [];

  const textAreaValue = textArea.value;
  console.log(textAreaValue);
  if (textAreaValue.trim() === '') return;

  // value update
  const crateElement = document.createElement('p');
  crateElement.classList.add('commentBox', 'active');
  crateElement.innerText = textAreaValue;

  // push
  commentBox.appendChild(crateElement);
  allInfoArr.push(textAreaValue);

  textArea.value = '';

  console.log(allInfoArr);
});

console.log(submitButton);
