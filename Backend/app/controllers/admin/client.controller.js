const clientService = require('../../services/client.service');
const message = require('../../messages/message');
const jwt = require('jsonwebtoken');

const { MailerSend, Sender, Recipient, EmailParams } = require("mailersend");



require('dotenv').config();
const { JWTSECRET } = process.env;

class ClientController {
  async create(req, res) {
    try {
      // create client
      const client = await clientService.create(req.body, req.currentDb);
      res.status(201).send({ message: message.client.created, client });
    } catch (error) {
      console.error('Error creating client:', error);
      let statusCode = 500;
      let errorMessage = 'Failed to create client. Please try again later.';
      res.status(statusCode).send({ error: errorMessage });
    }
  }
  async generatetoken(req, res){
   
    const payload = {
      email: req.body.email,
    };
    const secret = JWTSECRET;
    const options = { expiresIn: '1h' };
    const token = jwt.sign(payload, secret, options);
      return res.status(200).json({ token });
  }
  async login(req, res) {
    try {
      const { user, password } = req.body;
      const client = await clientService.findByEmailAndPassword(user, password, req.currentDb);
      if (!client) {
        res.status(200).json({ status: false, message: 'Unauthorized' });
        return;
      }
  
      // Generate token
      const payload = {
        email: client.Email,
      };
      const secret = 'student';
      const options = { expiresIn: '1h' };
      const token = jwt.sign(payload, secret, options);
  
      res.status(200).json({ status: true, token });
    } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ status: false, message: 'Failed to login. Please try again later.' });
    }
  }
  



  async sendEmail(req, res) {
    try {
      // Assuming you have extracted the email and name from req.body
      const { email, name,cutoff,physics,chemistry,Maths } = req.body;
     
      const mailerSend = new MailerSend({
        apiKey: "mlsn.eaeffab760f080b9dd460579236e9c4d16f340a283595ac03e0f6e5a17883ca2",
      });
      
      const sentFrom = new Sender("info@trial-z3m5jgrqowoldpyo.mlsender.net", "Student Management System");
      
      const recipients = [
        new Recipient(email, "Student Management System")
      ];
      
      const emailParams = new EmailParams()
        .setFrom(sentFrom)
        .setTo(recipients)
        .setReplyTo(sentFrom)
        .setSubject("Student Cutoff mark")
        .setHtml(`
        <!DOCTYPE html>
<html>
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title></title>

    <!--[if !mso]><!-->
    <style type="text/css">

        /* Import the Kotta One font */
        @import url('https://fonts.googleapis.com/css2?family=Kotta+One&display=swap');
    </style>
    <!--<![endif]-->

    <style type="text/css" rel="stylesheet" media="all">
@media only screen and (max-width: 640px) {

        .ms-header {
            display: none !important;
        }
        .ms-content {
            width: 100% !important;
            border-radius: 0;
        }
        .ms-content-body {
            padding: 30px !important;
        }
        .ms-footer {
            width: 100% !important;
        }
        .mobile-wide {
            width: 100% !important;
        }
        .info-lg {
            padding: 30px;
        }
    }
    </style>
    <!--[if mso]>
        <style type="text/css">
        body { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td * { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td p { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td a { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td span { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td div { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td ul li { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td ol li { font-family: Arial, Helvetica, sans-serif!important  !important; }
        td blockquote { font-family: Arial, Helvetica, sans-serif!important  !important; }
        th * { font-family: Arial, Helvetica, sans-serif!important  !important; }
        </style>
        <![endif]-->
</head>
<body style="font-family: 'Kotta One', sans-serif !important; width: 100% !important; height: 100%; margin: 0; padding: 0; -webkit-text-size-adjust: none; background-color: #f4f7fa; color: #4a5566;">

    <div class="preheader" style="display:none !important;visibility:hidden;mso-hide:all;font-size:1px;line-height:1px;max-height:0;max-width:0;opacity:0;overflow:hidden;"></div>

    <table class="ms-body" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;background-color:#f4f7fa;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
        <tr>
            <td align="center" style="word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;">

                <table class="ms-container" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;width:100%;margin-top:0;margin-bottom:0;margin-right:0;margin-left:0;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;">
                    <tr>
                        <td align="center" style="word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;">

                            <table class="ms-header" width="100%" cellpadding="0" cellspacing="0" style="border-collapse:collapse;">
                                <tr>
                                    <td height="40" style="font-size:0px;line-height:0px;word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;">
                                        &nbsp;
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                    <tr>
                        <td align="center" style="word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;">

                            <table class="ms-content" width="640" cellpadding="0" cellspacing="0" role="presentation" style="border-collapse:collapse;width:640px;margin-top:0;margin-bottom:0;margin-right:auto;margin-left:auto;padding-top:0;padding-bottom:0;padding-right:0;padding-left:0;background-color:#FFFFFF;border-radius:6px;box-shadow:0 3px 6px 0 rgba(0,0,0,.05);">
                                <tr>
                                    <td class="ms-content-body" style="word-break:break-word;font-family:'Inter', Helvetica, Arial, sans-serif;font-size:16px;line-height:24px;padding-top:40px;padding-bottom:40px;padding-right:50px;padding-left:50px;">

                                        <p class="logo" style="margin-right:0;margin-left:0;line-height:28px;font-weight:600;font-size:21px;color:#111111;text-align:center;margin-top:0;margin-bottom:40px;">
                                            <span style="color:#0052e2;font-family:Arial, Helvetica, sans-serif;font-size:30px;vertical-align:bottom;"></span>Student Information System
                                        </p>

                                        <h1 style="margin-top:0;color:#111111;font-size:24px;line-height:36px;font-weight:600;margin-bottom:24px;">Welcome, {$name}!</h1>
<div style="text-align: center;">
  <table border="1" style="width: 50%; border-collapse: collapse; margin: 0 auto;">
    <thead>
      <tr>
        <th style="background-color: #1d021d; color: white; padding: 10px;">Subject</th>
        <th style="background-color: #1d021d; color: white; padding: 10px;">Marks</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td style="padding: 10px;">Physics</td>
        <td style="padding: 10px;">${physics}</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Chemistry</td>
        <td style="padding: 10px;">${chemistry}</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Maths</td>
        <td style="padding: 10px;">${Maths}</td>
      </tr>
      <tr>
        <td style="padding: 10px;">Total</td>
        <td style="padding: 10px;">${Number(physics) + Number(chemistry) + Number(Maths)}</td>
      </tr>
      <tr>
        <td style="background-color: #1d021d; color: white; padding: 10px;">Cutoff</td>
        <td style="background-color: #1d021d; color: white; padding: 10px;">${cutoff}</td>
      </tr>
    </tbody>
  </table>
</div>
                                        <p style="color:#4a5566;margin-top:20px;margin-bottom:20px;margin-right:0;margin-left:0;font-size:16px;line-height:28px;text-align:center;">
                                            Please let us know if you have any questions.
                                        </p>

                                     
                                    </td>
                                </tr>
                            </table>

                        </td>
                    </tr>
                  
                </table>

            </td>
        </tr>
    </table>

</body>
</html>
        `)
        
      
      await mailerSend.email.send(emailParams);
        return res.status(200).json({ status: true, message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      return res.status(500).json({ status: false, error: 'Failed to send email' });
    }
  }
  

  

  
  

}
module.exports = new ClientController();