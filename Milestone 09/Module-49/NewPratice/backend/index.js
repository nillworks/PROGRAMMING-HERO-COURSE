const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;

//middleware
app.use(cors());
app.use(express.json());

const books = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    price: 450,
    category: 'Self Development',
    rating: 4.8,
  },
  {
    id: 2,
    title: 'Rich Dad Poor Dad',
    author: 'Robert Kiyosaki',
    price: 400,
    category: 'Finance',
    rating: 4.7,
  },
  {
    id: 3,
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    price: 350,
    category: 'Fiction',
    rating: 4.6,
  },
  {
    id: 4,
    title: 'Think and Grow Rich',
    author: 'Napoleon Hill',
    price: 420,
    category: 'Motivation',
    rating: 4.5,
  },
  {
    id: 5,
    title: 'Deep Work',
    author: 'Cal Newport',
    price: 500,
    category: 'Productivity',
    rating: 4.7,
  },
  {
    id: 6,
    title: 'The Power of Now',
    author: 'Eckhart Tolle',
    price: 380,
    category: 'Spiritual',
    rating: 4.6,
  },
  {
    id: 7,
    title: 'Start With Why',
    author: 'Simon Sinek',
    price: 460,
    category: 'Leadership',
    rating: 4.7,
  },
  {
    id: 8,
    title: 'Zero to One',
    author: 'Peter Thiel',
    price: 520,
    category: 'Business',
    rating: 4.6,
  },
  {
    id: 9,
    title: 'Ikigai',
    author: 'Héctor García',
    price: 390,
    category: 'Lifestyle',
    rating: 4.5,
  },
  {
    id: 10,
    title: 'The Psychology of Money',
    author: 'Morgan Housel',
    price: 480,
    category: 'Finance',
    rating: 4.8,
  },
];

// app.use()
app.get('/', (req, res) => {
  res.send('Server is running Book Data');
});

app.get('/books', (req, res) => {
  res.send({ books, message: 'success data' });
});

app.post('/books', (req, res) => {
  const newBooks = req.body;
  newBooks.id = books.length + 1;
  books.push(newBooks);

  res.send({
    success: true,
    data: newBooks,
    message: 'post method is working',
  });
});

app.listen(port, () => {
  console.log('server is running on port 8000');
});
