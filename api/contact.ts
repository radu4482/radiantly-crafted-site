import { Resend } from 'resend';

// Vercel Node.js API route
export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method Not Allowed' });
    return;
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { name, email, message } = req.body || {};

    if (!name || !email || !message) {
      res.status(400).json({ error: 'Missing required fields.' });
      return;
    }

    const toAddress = process.env.CONTACT_RECIPIENT || 'radu.besleaga@email.com';

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

    const { error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: [toAddress],
      reply_to: email,
      subject,
      html,
    } as any);

    if (error) {
      // eslint-disable-next-line no-console
      console.error('Resend error:', error);
      res.status(500).json({ error: 'Failed to send email.' });
      return;
    }

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


