var http = require('http');
var url = require('url');
var fs = require('fs');


var date = require('./time');

http.createServer(function (req, res) {
    fs.readFile('file.html', function(err , data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

    res.writeHead(200, { 'Content-Type': 'text/html' });
   
    res.write("today"+ date.myTime());
    res.write("<br>" + req.url + "<br>");
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;

    res.write(txt);

    res.end("<br>" + 'Dharun Babu!');
    
}).listen(8080);