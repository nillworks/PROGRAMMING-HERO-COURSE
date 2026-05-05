const express = require('express');
const app = express();
const port = process.env.PORT || 8000;

// app.use()

app.get('/book', (req, res) => {
  res.send('hello book data');
});

app.listen(port, () => {
  console.log('server is running on port 8000');
});
