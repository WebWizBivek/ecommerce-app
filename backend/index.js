const dotenv = require('dotenv');
dotenv.config();
const nodemailer = require("nodemailer");

const express = require('express');
const userRoutes = require('./routes/userRoutes.js');

const cors = require('cors');
const connectDB = require('./utils/db.js');
const app = express();

connectDB();
app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
// app.use("/admin", adminRoutes);



app.get("/send", async (req, res) => {
  const auth = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.PASSWORD,
    }
  });
  let mailOptions = {
    from: process.env.EMAIL,
    to: "bivekwangkhem6001@gmail.com",
    subject: "Test Email",
    html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9;">
        <div style="max-width: 600px; margin: auto; background-color: #ffffff; padding: 20px; border-radius: 10px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
          <!-- Header Section with Logo -->
          <div style="text-align: center; margin-bottom: 20px;">
            <img src="https://nagadwallet.net/logo.png" alt="NW Logo" style="width: 150px; height: auto;" />
          </div>
          <!-- Email Content -->
          <div style="padding: 20px; text-align: center;">
            <h2 style="color: #333;">Your One-Time Password (OTP)</h2>
            <p style="font-size: 16px; color: #555; margin-bottom: 20px;">Hello,</p>
            <p style="font-size: 16px; color: #555;">Your OTP code is:</p>
            <p style="font-size: 14px; color: #999;">(This code will expire in 10 minutes.)</p>
          </div>
          <!-- Footer Section -->
          <div style="margin-top: 30px; border-top: 1px solid #e0e0e0; padding-top: 20px; text-align: center;">
            <p style="font-size: 16px; color: #555;">Thank you,</p>
            <p style="font-size: 16px; color: #555; font-weight: bold;">The Nagad Wallet Team</p>
            <div style="margin-top: 10px;">
              <img src="https://nagadwallet.net/logo.png" alt="NW Logo" style="width: 100px; height: auto;" />
            </div>
          </div>
        </div>
      </div>
      `,
  };

  // Send email
  let info = await auth.sendMail(mailOptions);
})

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});


