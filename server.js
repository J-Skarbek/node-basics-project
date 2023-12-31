const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log('Request Made');
  console.log(req.url, req.method);

  res.setHeader('Content-Type', 'text/html');

  let path = './views/';
  switch(req.url) {
    case '/':
      path += 'index.html';
      break;
    case '/about':
      path += 'about.html';
      break;
    case '/contact':
      path += 'contact.html';
      break;
    default:
      path += '404.html'
      res.statusCode = 404;
      break;
  }

  fs.readFile(path, (err, data) => {
    err ? res.end() : res.end(data);
  })
})

server.listen(8080, 'localhost', () => {
  console.log('Listing for requests on port 8080')
})