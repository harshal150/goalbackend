// index.js
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// API endpoint to handle form submission
app.post('/send-email', async (req, res) => {
  const formData = req.body;

  // Create a transporter
  let transporter = nodemailer.createTransport({
    service: 'gmail', // e.g., 'gmail', 'yahoo', 'outlook'
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your email password or app password
    },
  });

  // Email content
  let mailOptions = {
    from: process.env.EMAIL_USER,
    to: 'info@goalcorporation.com', // Where you want to receive the emails
    subject: 'New Loan Application',
    text: `
      Full Name: ${formData.fullName}
      Email: ${formData.email}
      Mobile Number: ${formData.mobileNumber}
      Loan Type: ${formData.loans}
      City: ${formData.city}
      Pincode: ${formData.pincode}
      Gender: ${formData.gender}
      PAN Card: ${formData.panCard}
      Date of Birth: ${formData.dob}
      Residence Type: ${formData.residenceType}
    `,
  };

  // Send email
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log('Error sending email:', error);
      res.status(500).send({ success: false, error: error.message });
    } else {
      console.log('Email sent:', info.response);
      res.send({ success: true });
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




app.post('/contactus', async (req, res) => {
    const formData = req.body;
  
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  
    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@goalcorporation.com', // Your email to receive messages
      subject: 'Contact Us Message From Website',
      html: `
        <h2>Contact Us Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile:</strong> ${formData.mobile}</p>
        <p><strong>State:</strong> ${formData.state}</p>
        <p><strong>City:</strong> ${formData.city}</p>
        <p><strong>Reason:</strong> ${formData.reason}</p>
        <p><strong>Subject:</strong> ${formData.subject}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).send({ success: false, error: error.message });
      } else {
        console.log('Email sent:', info.response);
        res.send({ success: true });
      }
    });
  });
  








  app.post('/becomepartner', async (req, res) => {
    const formData = req.body;
  
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  
    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@goalcorporation.com', // Replace with your email
      subject: 'New Partner Application from website',
      html: `
        <h2>New Partner Application Submission</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>PAN Number:</strong> ${formData.panNumber}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Profession:</strong> ${formData.profession}</p>
        <p><strong>Pincode:</strong> ${formData.pincode}</p>
        <p><strong>City Name:</strong> ${formData.cityName}</p>
        <p><strong>Agreed to Terms:</strong> ${formData.agreed ? "Yes" : "No"}</p>
      `,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).send({ success: false, error: error.message });
      } else {
        console.log('Email sent:', info.response);
        res.send({ success: true });
      }
    });
  });
  







  app.post('/careers', async (req, res) => {
    const formData = req.body;
  
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  
    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'info@goalcorporation.com', // Replace with your email
      subject: 'New Job Application Submission from website',
      html: `
        <h2>New Job Application</h2>
        <p><strong>Full Name:</strong> ${formData.fullName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Role Applied For:</strong> ${formData.role}</p>
        <p><strong>Resume Link:</strong> <a href="${formData.resumeLink}" target="_blank">${formData.resumeLink}</a></p>
      `,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).send({ success: false, error: error.message });
      } else {
        console.log('Email sent:', info.response);
        res.send({ success: true });
      }
    });
  });
  


  

  app.post('/enquiry', async (req, res) => {
    const formData = req.body;
  
    // Create a transporter
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app password
      },
    });
  
    // Email content
    let mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'harshalpatilhp700@gmail.com', // Replace with your email
      subject: 'Admission Enquiry Form Submission',
      html: `
        <h2>New Admission Enquiry</h2>
        <p><strong>First Name:</strong> ${formData.firstName}</p>
        <p><strong>Last Name:</strong> ${formData.lastName}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Mobile Number:</strong> ${formData.mobileNumber}</p>
        <p><strong>Class Selected:</strong> ${formData.selectedClass}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `,
    };
  
    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log('Error sending email:', error);
        res.status(500).send({ success: false, error: error.message });
      } else {
        console.log('Email sent:', info.response);
        res.send({ success: true });
      }
    });
  });
  