// import { defineEventHandler, readBody } from 'h3';
// import nodemailer from 'nodemailer';

// export default defineEventHandler(async (event) => {
//   const { name, email, message, subject } = await readBody(event);

//   if (!name || !email || !message || !subject) {
//     return { status: 400, message: 'All fields are required' };
//   }

//   const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: process.env.GMAIL_USER,
//       pass: process.env.GMAIL_PASS,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: email,
//       to: process.env.GMAIL_USER,
//       subject: subject,
//       text: message,
//     });

//     return { status: 200, message: 'Email sent successfully' };
//   } catch (error) {
//     console.error(error);
//     return { status: 500, message: 'Error sending email' };
//   }
// });
