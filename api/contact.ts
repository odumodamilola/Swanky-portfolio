import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const RECIPIENT_EMAIL = 'Justart1406@gmail.com';

// Simple in-memory rate limiting per serverless instance
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 5; // max requests
const RATE_WINDOW = 60_000; // per 60 seconds

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

function sanitize(str: string): string {
  return str
    .trim()
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Rate limiting by IP
    const ip =
      (req.headers['x-forwarded-for'] as string)?.split(',')[0]?.trim() ||
      req.socket?.remoteAddress ||
      'unknown';

    if (isRateLimited(ip)) {
      return res.status(429).json({
        error: 'Too many requests. Please wait a minute before trying again.',
      });
    }

    const { name, email, projectType, budget, message, _honeypot, _timestamp } = req.body || {};

    // Honeypot — if filled, a bot submitted the form; return fake success
    if (_honeypot) {
      return res.status(200).json({ success: true });
    }

    // Timing check — if form was submitted in under 2 seconds, likely a bot
    if (_timestamp && Date.now() - Number(_timestamp) < 2000) {
      return res.status(200).json({ success: true });
    }

    // Required field validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Name, email, and message are required.' });
    }

    if (typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') {
      return res.status(400).json({ error: 'Invalid input types.' });
    }

    // Sanitize all inputs
    const cleanName = sanitize(name);
    const cleanEmail = email.trim().toLowerCase();
    const cleanProjectType = sanitize(projectType || 'Not specified');
    const cleanBudget = sanitize(budget || 'Not specified');
    const cleanMessage = sanitize(message);

    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(cleanEmail)) {
      return res.status(400).json({ error: 'Please provide a valid email address.' });
    }

    // Length limits to prevent abuse
    if (cleanName.length > 200) {
      return res.status(400).json({ error: 'Name is too long (max 200 characters).' });
    }
    if (cleanEmail.length > 320) {
      return res.status(400).json({ error: 'Email is too long.' });
    }
    if (cleanMessage.length > 5000) {
      return res.status(400).json({ error: 'Message is too long (max 5000 characters).' });
    }

    // Timestamp for the email
    const timestamp = new Date().toLocaleString('en-GB', {
      timeZone: 'Africa/Lagos',
      dateStyle: 'full',
      timeStyle: 'long',
    });

    // Send email via Resend
    const { error } = await resend.emails.send({
      from: 'Swanky Contact Form <onboarding@resend.dev>',
      to: RECIPIENT_EMAIL,
      replyTo: cleanEmail,
      subject: `New Inquiry from ${cleanName} — ${cleanProjectType}`,
      html: `
        <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background: #080808; color: #D4D4D4; padding: 40px; border: 1px solid #1E1E1E;">
          <div style="border-bottom: 1px solid #1E1E1E; padding-bottom: 20px; margin-bottom: 24px;">
            <h1 style="color: #C9A84C; font-size: 22px; font-weight: 400; margin: 0;">
              New Contact Form Submission
            </h1>
          </div>

          <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 140px; vertical-align: top;">Name</td>
              <td style="padding: 10px 0; color: #F0EDE6; font-size: 15px;">${cleanName}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Email</td>
              <td style="padding: 10px 0; font-size: 15px;">
                <a href="mailto:${cleanEmail}" style="color: #C9A84C; text-decoration: none;">${cleanEmail}</a>
              </td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Project Type</td>
              <td style="padding: 10px 0; color: #F0EDE6; font-size: 15px;">${cleanProjectType}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; color: #8A8A8A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; vertical-align: top;">Budget</td>
              <td style="padding: 10px 0; color: #F0EDE6; font-size: 15px;">${cleanBudget}</td>
            </tr>
          </table>

          <div style="border-top: 1px solid #1E1E1E; padding-top: 20px; margin-bottom: 24px;">
            <p style="color: #8A8A8A; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 10px 0;">Message</p>
            <p style="color: #F0EDE6; font-size: 15px; line-height: 1.7; margin: 0; white-space: pre-wrap;">${cleanMessage}</p>
          </div>

          <div style="border-top: 1px solid #1E1E1E; padding-top: 16px;">
            <p style="color: #3A3A3A; font-size: 11px; margin: 0;">
              Submitted on ${timestamp} · via swankyi.com contact form
            </p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send your message. Please try again.' });
    }

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Contact handler error:', err);
    return res.status(500).json({ error: 'An unexpected error occurred. Please try again later.' });
  }
}
