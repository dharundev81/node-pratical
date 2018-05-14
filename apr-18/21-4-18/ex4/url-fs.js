var fs = require('fs');
var http =require('http');
var url = require('url');

http.createServer(function(req,res){
    var q = url.parse(req.url,true);
    var filename = "." + q.pathname;
    fs.readFile('fs-url.html', function(err,data){
        if(err){
            res.writeHead(400,{'Content-Type': 'text/html'});
            return res.end("404 Not Found");
        }
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(data);
        return res.end();
    });
}).listen(8080);