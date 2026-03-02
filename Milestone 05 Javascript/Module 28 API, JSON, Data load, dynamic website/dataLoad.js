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
  data.forEach(item => {
    const h2 = document.createElement('h2');
    const body = document.createElement('p');
    h2.innerText = item.title;
    body.innerText = item.body;
    container.appendChild(h2);
    container.appendChild(body);
  });
};
