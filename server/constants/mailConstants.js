const nodemailer = require("nodemailer");
const dotenv = require('dotenv')
dotenv.config();

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
        user: 'sarupalakunu@gmail.com', // generated ethereal user
        pass: process.env.MAILER_PASSWORD, // generated ethereal password
    },
});

module.exports ={transporter};