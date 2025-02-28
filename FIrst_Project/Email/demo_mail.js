var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({

    service : 'gmail',
    auth: {
        username : 'yourmail@gmail.com',
        password : 'password'
    }
});

var mailOptions = {
    from : 'yourmail@gmail.com',
    to : 'receivermail@gmail.com',
    subject : 'Mail from NodeJS',
    text : 'That was Easy!'
};

transport.sendMail(mailOptions, function(error, info) {
    if (error) {
        console.log(error);
    } else {
        console.log("Email sent : "+info.response);
    }
});
