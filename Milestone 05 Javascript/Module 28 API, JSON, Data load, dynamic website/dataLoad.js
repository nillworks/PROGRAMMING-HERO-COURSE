// new proble

const loadPostData = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log(data);
      dataUse(data);
    });
};

const dataUse = data => {
  // Get element
  const container = document.getElementById('containers');
  container.innerHTML = '';

  data.forEach(item => {
    const cardCrete = document.createElement('div');
    cardCrete.classList.add('post-card');
    cardCrete.innerHTML = `
    
      <span class="user-id">User: ${item.userId}</span>
      <h2 class="title">${item.title}</h2>
      <p class="body">${item.body}</p>
    
    `;

    container.appendChild(cardCrete);
  });
};
