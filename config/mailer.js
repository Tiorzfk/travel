var nodemailer = require('nodemailer');
var transport = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'tiorezafebrian@gmail.com',
    pass: 'mycnjussxtehxpys'
  }
});

module.exports.transport = transport;
