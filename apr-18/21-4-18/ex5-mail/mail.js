var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    // service: 'intrepiditservices',
    services: 'hotmail',
    auth: {
        user: 'dharunbabu1702@hotmail.com',
        pass: '1702sdbdev',
    }
});

var mailOptions = {
    from: 'dharunbabu1702@hotmail.com',
    to: 'dharundev81@gmail.com',
    subject: 'sample from node JS',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions,function(error ,info) {

    if (error) {
        console.log(error);
    }

    else {
        console.log('Email sent:' + info.response);
    }
    
});

