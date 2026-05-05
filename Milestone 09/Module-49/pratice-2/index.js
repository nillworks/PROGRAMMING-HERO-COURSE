const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('working node server');
  } else if (req.url === 'product') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('product data here');
  }
});

server.listen(5000, () => {
  console.log('server is running on port 5000');
});
