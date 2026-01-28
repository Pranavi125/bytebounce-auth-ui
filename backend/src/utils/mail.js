import nodemailer from "nodemailer";
console.log("SMTP_HOST =", process.env.SMTP_HOST);
console.log("SMTP_PORT =", process.env.SMTP_PORT);

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: Number(process.env.SMTP_PORT),
  secure: false, // TLS
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function sendMail({ to, subject, html }) {
  const info = await transporter.sendMail({
    from: process.env.MAIL_FROM, // verified sender
    to,
    subject,
    html,
  });

  console.log("✅ Email sent:", info.messageId);
  return info;
}
