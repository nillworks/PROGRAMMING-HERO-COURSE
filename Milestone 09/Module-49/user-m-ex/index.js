const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

const products = [
  {
    id: 1,
    name: 'Laptop',
    price: 55000,
    brand: 'HP',
    inStock: true,
  },
  {
    id: 2,
    name: 'Mobile',
    price: 20000,
    brand: 'Samsung',
    inStock: true,
  },
  {
    id: 3,
    name: 'Headphone',
    price: 1500,
    brand: 'Sony',
    inStock: false,
  },
  {
    id: 4,
    name: 'Keyboard',
    price: 1200,
    brand: 'Logitech',
    inStock: true,
  },
];

app.get('/', (req, res) => {
  res.send('Hello from users world!');
});

app.get('/users', (req, res) => {
  res.send('user is here');
});

app.get('/product', (req, res) => {
  res.send(products);
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
