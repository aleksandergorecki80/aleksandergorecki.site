const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const config = require('config');
const emailData = config.get('emailData');
const path = require('path');


// Init Middleware
app.use(express.json({ extended: false }));

app.post('/api/send', (req, res) => {
    const output = `
        <p>You have a new contact request</p>
        <h3>Contact details:</h3>
        <ul>
            <li>Name: ${req.body.name}</li>
            <li>Email: ${req.body.email}</li>
            <li>Subject: ${req.body.subject}</li>
        </ul>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;

    "use strict";
    const nodemailer = require("nodemailer");
    
    // async..await is not allowed in global scope, must use a wrapper
    async function main() {
    
      // create reusable transporter object using the default SMTP transport
      let transporter = nodemailer.createTransport({
        host: "smtp.live.com",
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
          user: emailData.mailUser,
          pass: emailData.mailPassword, 
        },
      });
    
      // send mail with defined transport object
      let info = await transporter.sendMail({
        from: `www.aleksander-gorecki.com ${emailData.mailUser}`, // sender address
        to: "a.gorecki1980@gmail.com", // list of receivers
        subject: "New info from www.aleksandergorecki.com", // Subject line
        text: "Hello world?", // plain text body
        html: output, // html body
      });
    
      console.log("Message sent: %s", info.messageId);
    
      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }
    main().catch(console.error);
    res.json({ "message": "Email has been sent" });
});

// STATIC IMAGES
const imagesDir = path.join(__dirname,'/static');
app.use(express.static(imagesDir));

// Serve static assets in production 
if(process.env.NODE_ENV === 'production'){
  // Set static folder
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

console.log(process.env.NODE_ENV);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, () => {
    console.log(`Server started at port ${PORT}`);
})

module.exports = server;