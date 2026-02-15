const textArea = document.getElementById('textarea');
const submitButton = document.getElementById('submitButton');
const commentBox = document.getElementById('commentBoxParent');

let getTextAreaValue = JSON.parse(localStorage.getItem('comments')) || [];

// load previous comments
getTextAreaValue.forEach(c => {
  const p = document.createElement('p');
  p.innerText = c.message;
  commentBox.appendChild(p);
});

submitButton.addEventListener('click', event => {
  event.preventDefault();
  const textAreaValue = textArea.value.trim();
  if (!textAreaValue) return;

  const newComment = { message: textAreaValue, time: new Date() };
  getTextAreaValue.push(newComment);

  localStorage.setItem('comments', JSON.stringify(getTextAreaValue));

  const createElement = document.createElement('p');
  createElement.classList.add('commentBox', 'active');
  createElement.innerText = textAreaValue;
  commentBox.appendChild(createElement);

  textArea.value = '';
});
