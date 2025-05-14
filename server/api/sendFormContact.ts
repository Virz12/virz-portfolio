import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const { name, email, subject, message } = body

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return sendError(event, createError({ statusCode: 400, statusMessage: 'Fill the missing fields' }))
  }

  const config = useRuntimeConfig()

  // Create transporter using Gmail SMTP
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: config.GMAIL_USER,
      pass: config.GMAIL_PASS
    }
  })

  // Set up email data for sending
  const mailOptions = {
    from: `"${name}" <${email}>`,
    replyTo: email,
    to: config.GMAIL_USER,
    subject: subject,
    text: message,
    html: `
      <h3>${subject}</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Message:</strong><br/>${message}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
  } catch (err) {
    console.error('Email sending error:', err)
    return sendError(event, createError({ statusCode: 500, statusMessage: 'Email failed to send' }))
  }
})
