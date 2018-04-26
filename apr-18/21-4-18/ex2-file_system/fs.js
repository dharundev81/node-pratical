var http = require('http');
var fs = require('fs');


http.createServer(function (req, res) {
    fs.readFile('file.html', function(err , data){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

    // fs.appendFile('create2.txt','Hi Dharun', function(err){
    //     if (err) throw err;
    //     console.log('saved!');
    // });

    // fs.open('create2.txt','w',function(err){
    //     if (err) throw err;
    //     console.log('save');
    // });

    // fs.writeFile('create2.txt','Hi Arun', function(err){
    //     if (err) throw err;
    //     console.log('update-create')
    // });

    // fs.unlink('create2.txt',function(err){
    //     if (err) throw err;
    //     console.log('File Deleted');
    // });

    fs.rename("create1.txt","create1702.txt", function(err){
        if(err) throw err;
        console.log('file renamed');

    });

}).listen(8080);