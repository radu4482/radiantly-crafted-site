import nodemailer from 'nodemailer';

// Vercel Node.js API route
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const host = process.env.SMTP_HOST;
  const port = Number(process.env.SMTP_PORT || 587);
  const user = process.env.SMTP_USER;
  const pass = process.env.SMTP_PASS;

  if (!host || !user || !pass) {
    res.status(500).json({ error: 'SMTP is not configured.' });
    return;
  }

  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
  });

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields.' });
      return;
    }

    const toAddress = process.env.CONTACT_RECIPIENT || 'radu.geroge44@gmail.com';

    const subject = `New message from ${name}`;
    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2>New Portfolio Contact</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p style="white-space: pre-wrap;">${escapeHtml(message)}</p>
      </div>
    `;

    const fromAddress = process.env.CONTACT_FROM || `Portfolio <${user}>`;

    await transporter.sendMail({
      from: fromAddress,
      to: toAddress,
      replyTo: email,
      subject,
      html,
    });

    res.status(200).json({ success: true });
  } catch (err: any) {
    // eslint-disable-next-line no-console
    console.error('API error:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

function escapeHtml(str: string) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}


