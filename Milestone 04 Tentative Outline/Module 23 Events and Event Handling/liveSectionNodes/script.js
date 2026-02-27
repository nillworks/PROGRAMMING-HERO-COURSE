// Container select
const container = document.querySelector('.container');
// All cards select
const cards = document.querySelectorAll('.card');
// All buttons select
const buttons = document.querySelectorAll('.btn');
const countElement = document.getElementById('counts');

let count = 0;

// buttons.forEach(btn => {
//   btn.addEventListener('click', () => {
//     count++;
//     container.innerText = `${count}`;
//   });
// });

buttons.forEach(btn => {
  btn.addEventListener('click', e => {
    const value = e.target.closest('.card');
    console.log(value);

    // cards name
    const productName = document.querySelectorAll('.cardsName').textContent;
    const price = parent(document.querySelector('.price').textContent);
    console.log(price);

    const product = {
      name: productName,
      price: price,
    };
    console.log(product);
    addToCart(product);
  });
});

// const addToCart = function (product) {
//   const exisstingItems = cards.find(item => {
//     if () {

//     }
//   })
// }
