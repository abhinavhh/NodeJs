var http = require('http');
var us = require('upper-case');
http.createServer(function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(us.upperCase("Hello World!"));
    res.end();
}).listen(8080);

// package : package contains all the files you need for a module
// Module : Javascript libraries you can include in your project