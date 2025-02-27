var http = require('http');
var dt = require('./myfirstmodule');
http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'test/html'});
    res.write("The Date and Time Now is : "+ dt.myDateTime());
    res.end('Hello World!');
}).listen(8080);