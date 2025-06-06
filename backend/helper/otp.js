
const nodemailer = require("nodemailer");



async function sendOtp(email, otp) {

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
        from: "bivekwangkhem9101@gmail.com",
        to: "biveksingha.dev@gmail.com",
        subject: "Test Email",
        text: `Your OTP is ${otp}. It is valid for 5 minutes.`,
        html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Your OTP Code - YourStore</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            background-color: #f5f7fa;
        }
        
        .email-container {
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 16px;
            box-shadow: 0 8px 32px rgba(0,0,0,0.1);
            overflow: hidden;
        }
        
        .header {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            padding: 40px 30px;
            text-align: center;
            color: white;
        }
        
        .logo {
            font-size: 32px;
            font-weight: bold;
            margin-bottom: 8px;
            color: white;
            text-decoration: none;
        }
        
        .header-subtitle {
            font-size: 16px;
            opacity: 0.9;
            font-weight: 300;
        }
        
        .main-content {
            padding: 50px 40px;
            text-align: center;
        }
        
        .security-icon {
            width: 80px;
            height: 80px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border-radius: 50%;
            margin: 0 auto 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 36px;
            color: white;
            box-shadow: 0 8px 25px rgba(102, 126, 234, 0.3);
        }
        
        .greeting {
            font-size: 28px;
            font-weight: 600;
            color: #2c3e50;
            margin-bottom: 20px;
        }
        
        .message {
            font-size: 18px;
            color: #555;
            margin-bottom: 40px;
            line-height: 1.7;
        }
        
        .otp-container {
            background: linear-gradient(135deg, #f8f9ff 0%, #e6f3ff 100%);
            border: 2px dashed #667eea;
            border-radius: 16px;
            padding: 40px 30px;
            margin: 40px 0;
            position: relative;
        }
        
        .otp-label {
            font-size: 16px;
            color: #667eea;
            font-weight: 600;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        
        .otp-code {
            font-size: 48px;
            font-weight: bold;
            color: #2c3e50;
            font-family: 'Courier New', monospace;
            letter-spacing: 8px;
            margin: 20px 0;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.1);
        }
        
        .otp-validity {
            font-size: 14px;
            color: #e74c3c;
            font-weight: 600;
            margin-top: 15px;
        }
        
        .copy-instruction {
            font-size: 14px;
            color: #7f8c8d;
            margin-top: 10px;
            font-style: italic;
        }
        
        .security-notice {
            background-color: #fff3cd;
            border: 1px solid #ffeaa7;
            border-radius: 12px;
            padding: 25px;
            margin: 40px 0;
            text-align: left;
        }
        
        .security-notice h3 {
            color: #856404;
            margin-bottom: 15px;
            font-size: 18px;
            display: flex;
            align-items: center;
        }
        
        .security-notice h3::before {
            content: "⚠️";
            margin-right: 10px;
            font-size: 20px;
        }
        
        .security-notice ul {
            color: #856404;
            margin-left: 20px;
            line-height: 1.8;
        }
        
        .security-notice li {
            margin-bottom: 8px;
        }
        
        .help-section {
            background-color: #f8f9fa;
            border-radius: 12px;
            padding: 30px;
            margin: 40px 0;
            text-align: left;
        }
        
        .help-section h3 {
            color: #2c3e50;
            margin-bottom: 15px;
            font-size: 18px;
        }
        
        .help-section p {
            color: #555;
            margin-bottom: 15px;
            line-height: 1.7;
        }
        
        .contact-info {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 20px;
            border-radius: 12px;
            margin-top: 20px;
        }
        
        .contact-info a {
            color: white;
            text-decoration: none;
            font-weight: 600;
        }
        
        .footer {
            background-color: #2c3e50;
            color: white;
            padding: 40px 30px;
            text-align: center;
        }
        
        .footer-content {
            margin-bottom: 20px;
            line-height: 1.8;
        }
        
        .footer-links {
            margin: 25px 0;
        }
        
        .footer-links a {
            color: #bdc3c7;
            text-decoration: none;
            margin: 0 15px;
            font-size: 14px;
            transition: color 0.3s ease;
        }
        
        .footer-links a:hover {
            color: white;
        }
        
        .disclaimer {
            font-size: 12px;
            color: #95a5a6;
            margin-top: 25px;
            line-height: 1.6;
        }
        
        @media (max-width: 600px) {
            .email-container {
                margin: 20px 10px;
            }
            
            .main-content {
                padding: 30px 20px;
            }
            
            .otp-code {
                font-size: 36px;
                letter-spacing: 4px;
            }
            
            .greeting {
                font-size: 24px;
            }
            
            .message {
                font-size: 16px;
            }
            
            .footer-links a {
                display: block;
                margin: 10px 0;
            }
        }
        
        .pulse {
            animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
            0% {
                transform: scale(1);
            }
            50% {
                transform: scale(1.05);
            }
            100% {
                transform: scale(1);
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">YourStore</div>
            <div class="header-subtitle">Secure Authentication</div>
        </div>
        
        <!-- Main Content -->
        <div class="main-content">
            <div class="security-icon pulse">🔐</div>
            
            <div class="greeting">Verification Required</div>
            
            <div class="message">
                We've received a request to verify your account. Please use the One-Time Password (OTP) below to complete your authentication.
            </div>
            
            <!-- OTP Section -->
            <div class="otp-container">
                <div class="otp-label">Your OTP Code</div>
                <div class="otp-code" id="otpCode">${otp}</div>
                <div class="otp-validity">⏱️ Valid for 10 minutes only</div>
                <div class="copy-instruction">Click the code above to copy</div>
            </div>
            
            <!-- Security Notice -->
            <div class="security-notice">
                <h3>Security Guidelines</h3>
                <ul>
                    <li>Never share this OTP with anyone</li>
                    <li>Our team will never ask for your OTP</li>
                    <li>This code expires in 10 minutes</li>
                    <li>If you didn't request this, please contact support immediately</li>
                </ul>
            </div>
            
            <!-- Help Section -->
            <div class="help-section">
                <h3>Need Help?</h3>
                <p>If you're having trouble with the verification process or didn't request this OTP, please don't hesitate to reach out to our support team.</p>
                
                <div class="contact-info">
                    <strong>📞 Support:</strong> <a href="tel:+15551234567">(555) 123-4567</a><br>
                    <strong>📧 Email:</strong> <a href="mailto:support@yourstore.com">support@yourstore.com</a><br>
                    <strong>💬 Live Chat:</strong> Available 24/7 on our website
                </div>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <div class="footer-content">
                <strong>YourStore</strong><br>
                123 Commerce Street, Suite 100<br>
                Business City, BC 12345
            </div>
            
            <div class="footer-links">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms of Service</a>
                <a href="#">Contact Support</a>
                <a href="#">Security Center</a>
            </div>
            
            <div class="disclaimer">
                This is an automated security email. Please do not reply to this message.<br>
                If you didn't request this verification, please contact our security team immediately.
            </div>
        </div>
    </div>
    
    <script>
        // Make OTP code clickable to copy
        document.getElementById('otpCode').addEventListener('click', function() {
            const otpText = this.textContent;
            
            // Create temporary textarea to copy text
            const textarea = document.createElement('textarea');
            textarea.value = otpText;
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
            
            // Show feedback
            const originalText = this.textContent;
            this.textContent = 'COPIED!';
            this.style.color = '#27ae60';
            
            setTimeout(() => {
                this.textContent = originalText;
                this.style.color = '#2c3e50';
            }, 2000);
        });
    </script>
</body>
</html>`
    };

    // Send email
    let info = await auth.sendMail(mailOptions);




}
module.exports = sendOtp;