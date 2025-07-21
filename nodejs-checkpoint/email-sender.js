const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "123456789",
  },
});

let mailOptions = {
  from: "your-email@gmail.com",
  to: "email_adresse",
  subject: "Hello depuis Node.js",
  text: "Ceci est un email envoyé depuis Node.js !",
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.log("Erreur :", err);
  }
  console.log("Email envoyé :", info.response);
});