const nodemailer = require("nodemailer")

var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'uselessdumb6@gmail.com',
      pass: 'rqzypxcbayvaxfvb'
    }
  });
  
  var mailOptions = {
    from: 'uselessdumb6@gmail.com',
    to: 'yadav',
    subject: 'Learning nodemailer concept',
    text: 'Hiring for Devops role', 
    html: "<h1> Welcome to shopping app </h1>",
    attachments: [
      {
          filename: '2_player.jpg',
          path: __dirname + '/media/2_player.jpg',
      }
  ]
    
  };
  
  transporter.sendMail(mailOptions, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });