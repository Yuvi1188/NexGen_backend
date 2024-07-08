const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors'); // Import the cors middleware
require('dotenv').config();

const newCustomerTemplate = require('./emailTemplate'); // Adjust the path to where your template file is located

const app = express();
app.use(express.json());

// Configure CORS to allow requests from a specific origin
const corsOptions = {
  origin: 'https://nex-gen-beta.vercel.app', // Replace with your frontend URL
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type'],
  optionsSuccessStatus: 204 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.post('/api/contact', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'nexgen8898@gmail.com',
    subject: `New Customer: ${subject}`,
    html: newCustomerTemplate(name, email, phone, subject, message),
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error('Error sending email:', error);
      res.status(500).send('Failed to send email: ' + error.message);
    } else {
      console.log('Email sent:', info.response);
      res.status(200).send('Email sent successfully');
    }
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
