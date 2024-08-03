// const nodemailer = require('nodemailer');

import nodemailer from "nodemailer"

export const sendReservationConfirmation = async (req, res, next) => {
  try {
    const { email, verificationCode, qrCode } = req.body;

    const transporter = nodemailer.createTransport({
      // Configure your email service provider settings here
    });

    const message = {
      from: 'wassim.hassiin@gmail.com',
      to: email,
      subject: 'Reservation Confirmation',
      html: `
        <p>Dear Customer,</p>
        <p>Thank you for your reservation. Here are the details:</p>
        <p>Verification Code: ${verificationCode}</p>
        <img src="${qrCode}" alt="QR Code" />
        <p>For any inquiries, please contact us.</p>
        <p>Best regards,</p>
        <p>Your Hotel Booking Team</p>
      `,
    };

    const info = await transporter.sendMail(message);
    console.log('Email sent:', info.messageId);

    res.status(200).json('Reservation confirmation email sent successfully.' );
  } catch (err) {
    res.status(500).json('Failed to send reservation confirmation email.' );
  }
};
