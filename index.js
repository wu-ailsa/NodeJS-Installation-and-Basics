console.log("Hello world!");

const http = require("http");

//location and port of our server
const hostname = '127.0.0.1';
const port = 3000;

//create server
const server = http.createServer((req, res) => {  res.statusCode = 200;  res.setHeader('Content-Type', 'text/html');  res.write('<h1 style="color: red">Hello World!</h1>');  res.write('<p>I wonder what else we can send...</p>');  res.end();});

server.listen(port, hostname, () => {  console.log(`Server running at http://${hostname}:${port}/`);});

