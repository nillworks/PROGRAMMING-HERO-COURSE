const http = require('http');
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.writeHead(200, {
      'content-type': 'text/plain',
    });
    res.end('hello from node server');
  } else if (req.url === '/about') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('about us is here');
  } else if (req.url === '/product') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('product us is here');
  } else if (req.url === '/menu') {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.end('menu us is here');
  }
});

server.listen(5000, () => {
  console.log('server is running on port 3000');
});

// const http = require('http');
// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.writeHead(200, {
//       'content-type': 'text/plain',
//     });
//     res.end('Menu Us Is Here');
//   } else if (req.url === '/product') {
//     res.writeHead(200, {
//       'content-type': 'text/plain',
//     });
//     res.end('product Us Is Here');
//   }
// });

// server.listen(5000, () => {
//   console.log('server is running on port 6000');
// });
