var http = require('http');
var url = require('url');
var fs = require('fs');
http.createServer(function(req, res) {

    var q = url.parse(req.url, true); // split the url
    var filename = "." + q.pathname; // pathname is the filename specified in the url eg: 8080/Summer.html
    fs.readFile(filename, function(err, data) {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end('404 Not Found');
        }
        res.writeHead(200,{'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);