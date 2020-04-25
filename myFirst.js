// Running server with node
var http = require('http');
var date = require('./myFirstModule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write('The date and time are currently:' + date.myDateTime());
  res.end('Hello World!');
}).listen(8080);