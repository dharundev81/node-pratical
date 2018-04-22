var http = require('http');

var date = require('./time.js')

var url = require('url');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end(req.url + date.myTime());
}).listen(8080);

console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');
console.log(date.myTime());