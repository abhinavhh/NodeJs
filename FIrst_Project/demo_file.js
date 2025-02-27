var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('demofile1.html',function(err, data) {
        res.writeHead(200,{'Content-Type':'text/html'});
        res.write(data);
        return res.end();
    });

    // append some text in the end of file
    fs.appendFile('mynewfile1.txt', 'Hello new File!', function(err) {
        if (err) throw err;
        console.log('Updated');
    });
    
    fs.open('mynewfile1.txt', 'w', function(err, file){
        if (err) throw err;
        console.log('saved two');

    })
    // replace the content in file
    fs.writeFile('mynewfile1.txt', "Hello Write!", function(err){
        if (err) throw err;
        console.log('Replaced');
    })

    //delete file
    fs.unlink('mynewfile1.txt', function(err){
        if (err) throw err;
        console.log("Deleted");
    })

    //rename file
    fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err){
        if (err) throw err;
        console.log('Renamed');
    })
}).listen(8080);