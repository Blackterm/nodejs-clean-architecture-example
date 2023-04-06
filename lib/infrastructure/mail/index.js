const nodemailer = require('nodemailer');
const fs = require('fs');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'muratcaneravsar@gmail.com',
        pass: 'dutxfcmcfunqrvcf',
    },
});



const sendEmail = (email) => {


    fs.readFile(__dirname + '/mail.html', function (err, html) {
        if (err) {
            console.log(err);
        } else {

            const mailOptions = {
                from: 'muratcaneravsar@gmail.com',
                to: email,
                subject: 'Email verification',
                html: html
            };

            transporter.sendMail(mailOptions, function (error, info) {
                if (error) {
                    console.log('Error in sending email  ' + error);
                    return true;
                } else {
                    console.log('Email sent: ' + info.response);
                    return false;
                }
            });


        }
    })

};

module.exports = sendEmail;