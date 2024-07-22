const nodemailer = require("nodemailer");

const sendMail = async ({ subject, to, text }) => {
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'rameshrajs.03.nov@gmail.com',
      pass: process.env.pass
    }
  });
  return await transporter.sendMail({
    from: 'rameshrajs.03.nov@gmail.com',
    to,
    subject,
    text
  });
}

module.exports = sendMail;