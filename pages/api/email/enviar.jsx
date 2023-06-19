const nodemailer = require('nodemailer')

export default function handler(req, res) {
  const message = {
    from: process.env.EMAIL_SERVER_USER,
    to: req.body.email,
    subject: req.body.subject,
    text: req.body.message,
    html: `<p>${req.body.message}</p>`
  }

  let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: process.env.EMAIL_SERVER_USER,
      pass: process.env.EMAIL_SERVER_PASSWORD
    }
  })

  if (req.method === 'POST') {
    transporter.sendMail(message, (err, info) => {
      if (err) {
        res.status(404).json({
          error: `Connection refused at ${err.address}`
        })
      } else {
        res.status(250).json({
          success: `Message delivered to ${info.accepted}`
        })
      }
    })
  }
}
