const products = [
  { name: 'shampoo', price: 300, quantity: 2 },
  { name: 'shirt', price: 500, quantity: 10 },
  { name: 'pant', price: 600, quantity: 4 },
  { name: 'food', price: 900, quantity: 4 },
];

const cartTotal = function (products) {
  let totalPrice = 0;
  for (let i = 0; i < products.length; i++) {
    const element = products[i].price * products[i].quantity;
    totalPrice = totalPrice + element;
  }
  return totalPrice;
};

const cartTotalResult = cartTotal(products);
console.log(cartTotalResult);
