import { Resend } from 'resend';

const TO_EMAIL = process.env.CONTACT_TO_EMAIL || 'mindworxai@gmail.com';
const FROM_EMAIL = process.env.CONTACT_FROM_EMAIL || 'MindWorx Website <onboarding@resend.dev>';

function escapeHtml(value) {
    if (value === undefined || value === null) return '';
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function formatPhone(digits) {
    if (!digits) return '';
    const d = String(digits).replace(/\D/g, '');
    if (d.length === 10) return `(${d.slice(0, 3)}) ${d.slice(3, 6)}-${d.slice(6)}`;
    if (d.length === 11 && d.startsWith('1')) return `+1 (${d.slice(1, 4)}) ${d.slice(4, 7)}-${d.slice(7)}`;
    return d;
}

export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
        console.error('Missing RESEND_API_KEY environment variable');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    const body = req.body || {};
    const fullName = (body.FullName || '').trim();
    const email = (body.Email || '').trim();
    const phoneDigits = (body.Phone || '').replace(/\D/g, '');
    const zip = (body.Zip || '').trim();
    const subject = (body.Subject || '').trim();
    const isUrgent = body.Urgent === true || body.Urgent === 'on' || body.Urgent === 'true';
    const source = (body.source || 'unknown').trim();

    if (!fullName || !email || phoneDigits.length < 10) {
        return res.status(400).json({ error: 'Name, email, and a valid phone number are required.' });
    }

    const phoneFormatted = formatPhone(phoneDigits);
    const emailSubject = `New website contact: ${fullName}${isUrgent ? ' (URGENT)' : ''}`;

    const textBody = [
        `New contact form submission from the MindWorx website.`,
        ``,
        `Name:    ${fullName}`,
        `Email:   ${email}`,
        `Phone:   ${phoneFormatted}`,
        `Zip:     ${zip || '(none)'}`,
        `Subject: ${subject || '(none)'}`,
        `Urgent:  ${isUrgent ? 'Yes (wants a live demonstration now)' : 'No'}`,
        `Source:  ${source}`,
    ].join('\n');

    const htmlBody = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; color: #111; max-width: 560px;">
            <h2 style="margin: 0 0 16px;">New website contact${isUrgent ? ' <span style="color:#c2410c;">(URGENT)</span>' : ''}</h2>
            <table style="border-collapse: collapse; font-size: 14px;">
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Name</td><td style="padding: 4px 0;"><strong>${escapeHtml(fullName)}</strong></td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Email</td><td style="padding: 4px 0;"><a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Phone</td><td style="padding: 4px 0;"><a href="tel:+${escapeHtml(phoneDigits)}">${escapeHtml(phoneFormatted)}</a></td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Zip</td><td style="padding: 4px 0;">${escapeHtml(zip) || '&mdash;'}</td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Subject</td><td style="padding: 4px 0;">${escapeHtml(subject) || '&mdash;'}</td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Urgent</td><td style="padding: 4px 0;">${isUrgent ? 'Yes (wants a live demonstration now)' : 'No'}</td></tr>
                <tr><td style="padding: 4px 12px 4px 0; color: #555;">Source</td><td style="padding: 4px 0;">${escapeHtml(source)}</td></tr>
            </table>
            <p style="margin-top: 20px; font-size: 12px; color: #888;">Reply to this email to respond directly to ${escapeHtml(fullName)}.</p>
        </div>
    `;

    try {
        const resend = new Resend(apiKey);
        const { error } = await resend.emails.send({
            from: FROM_EMAIL,
            to: [TO_EMAIL],
            replyTo: email,
            subject: emailSubject,
            text: textBody,
            html: htmlBody,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(502).json({ error: 'Failed to send email' });
        }

        return res.status(200).json({ ok: true });
    } catch (err) {
        console.error('Error sending email via Resend:', err);
        return res.status(500).json({ error: 'Failed to submit form' });
    }
}
