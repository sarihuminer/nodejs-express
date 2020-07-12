var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    host: "localhost",
    user: 'sh6197174@gmail.com',
    pass: 'sms0548598227'
  }
});

var mailOptions = {
  from: 'sh6197174@gmail.com',
  to: 'sarateacher227@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});