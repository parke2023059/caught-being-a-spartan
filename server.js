const http = require('http');

//ip the server uses
const hostname = '127.0.0.1';

//port the server uses
const port = 8080;

const server = http.createServer((req, res) => {

  //sends back status code 200 to give the ay ok
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');

  //prints ‘Hello World’ to the screen when you access the website
  res.end('Hello World');
});
//creates a listen server
server.listen(port, hostname, () => {
  //prints the server is running into the command prompt
  console.log(`Server running at http://${hostname}:${port}/`);
});
