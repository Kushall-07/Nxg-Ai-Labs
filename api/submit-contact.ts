import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  company: z.string().trim().max(100).optional().or(z.literal('')),
  message: z.string().trim().min(10).max(2000),
});

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  const SUPABASE_URL = process.env.SUPABASE_URL;
  const SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!RESEND_API_KEY || !SUPABASE_URL || !SUPABASE_SERVICE_ROLE_KEY) {
    return res.status(500).json({ error: 'Server is not configured' });
  }

  const resend = new Resend(RESEND_API_KEY);
  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY);

  try {
    const parse = contactSchema.safeParse(req.body);
    if (!parse.success) {
      const errors = parse.error.errors.map((e) => e.message).join(', ');
      return res.status(400).json({ error: errors });
    }

    const { name, email, company, message } = parse.data;

    const { data: submission, error: dbError } = await supabase
      .from('contact_submissions')
      .insert({ name, email, company, message })
      .select()
      .single();

    if (dbError) {
      console.error('DB error', dbError);
      return res.status(500).json({ error: 'Failed to save submission' });
    }

    try {
      await resend.emails.send({
        from: 'Nxg AI Labs <onboarding@resend.dev>',
        to: [email],
        bcc: ['nxgailabs@gmail.com'],
        subject: 'Thanks for contacting Nxg AI Labs',
        text: `Thanks for reaching out, ${name}!
We\'ve received your message and will get back to you within 24 hours.

Your message:\n${message}

Best regards,\nThe Nxg AI Labs Team`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BFFF;">Thanks for reaching out, ${escapeHtml(name)}!</h1>
            <p>We've received your message and will get back to you within 24 hours.</p>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0;">Your message:</h3>
              <p>${escapeHtml(message)}</p>
            </div>
            <p>Best regards,<br>The Nxg AI Labs Team</p>
          </div>
        `,
      });
    } catch (e) {
      console.error('Email to client failed', e);
    }

    try {
      await resend.emails.send({
        from: 'Nxg AI Labs <onboarding@resend.dev>',
        to: ['nxgailabs@gmail.com'],
        replyTo: email,
        subject: `New Contact Form Submission from ${escapeHtml(name)}`,
        text: `New Contact Form Submission\n\nName: ${name}\nEmail: ${email}\n${company ? `Company: ${company}\n` : ''}Message:\n${message}\n\nSubmission ID: ${submission.id}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #00BFFF;">New Contact Form Submission</h1>
            <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <p><strong>Name:</strong> ${escapeHtml(name)}</p>
              <p><strong>Email:</strong> ${escapeHtml(email)}</p>
              ${company ? `<p><strong>Company:</strong> ${escapeHtml(company)}</p>` : ''}
              <p><strong>Message:</strong></p>
              <p>${escapeHtml(message)}</p>
            </div>
            <p><small>Submission ID: ${submission.id}</small></p>
          </div>
        `,
      });
    } catch (e) {
      console.error('Email to agency failed', e);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you for your message! We'll be in touch soon.",
      id: submission.id,
    });
  } catch (err: any) {
    console.error('API error', err);
    return res.status(500).json({ error: err.message || 'Internal server error' });
  }
}
