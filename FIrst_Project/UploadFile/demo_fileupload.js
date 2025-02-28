var http = require('http');
// formidable module is used to upload file
var formidable = require('formidable');
var fs = require('fs');

const { error } = require('console');
http.createServer(function(req, res) {
    if(req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function(err, fields, files) {
            var oldpath = files.filetupload.filepath;
            var newpath = "C:\Users\hp\Documents\NodeJS\First_Project\UploadFile" + files.filetupload.originalFilename;
            fs.rename(oldpath, newpath, function(err) {
                if (err) throw err;
                res.write('File uploaded and moved');
                res.end();
            });
        });
    } else {
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write('<form action = "fileupload" method = "post" enctype = "multipart/form-data">');
        res.write('<input type="file" name = "fileupload"/><br>')
        res.write('<input type="submit">');
        res.write('</form>');
        return res.end();
    }
}).listen(8080);