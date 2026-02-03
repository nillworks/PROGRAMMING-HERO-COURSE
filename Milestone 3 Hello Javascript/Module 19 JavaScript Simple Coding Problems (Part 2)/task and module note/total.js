// 19-5 Calculate the total cost of the products in a shopping cart

const products = [
  { name: 'shampoo', price: 300 },
  { name: 'shirt', price: 500 },
  { name: 'pant', price: 600 },
  { name: 'food', price: 900 },
];

const getProductsSum = function (products) {
  let product = products[0].price;
  console.log(product);

  for (let i = 1; i < products.length; i++) {
    product = products[i].price + product;
  }
  return product;
};

const productsSum = getProductsSum(products);
console.log('Total Products price is:', productsSum);
