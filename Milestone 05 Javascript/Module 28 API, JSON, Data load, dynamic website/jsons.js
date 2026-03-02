const person = {
  name: 'shipon roy',
  age: 23,
  dish: 'cofy',
  money: 24000,
  price: [234, 45, 56, 78, 78],
  isRich: false,
};

// Js Object With Notation
// json.stringify --> JSON Convert
// JSON.parse ---> Convert Objects

const personJson = JSON.stringify(person);
const personJsonObject = JSON.parse(personJson);

console.log(personJson, typeof personJson);
console.log(personJsonObject);

// 28-3 Load Json Data using Fetch Function

const dataLoad = () => {
  fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => res.json())
    .then(data => console.log(data));
};

const loadPosts = () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';
  fetch(url)
    .then(res => res.json())
    .then(data => displayPost(data));
};

const displayPost = posts => {
  posts.forEach(e => {
    console.log(e.title);
  });
};
