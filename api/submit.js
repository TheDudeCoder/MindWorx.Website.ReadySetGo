export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // Prefer N8N_WEBHOOK_BASE_URL (future-proof), fall back to N8N_WEBHOOK_URL (legacy)
    const baseUrl = process.env.N8N_WEBHOOK_BASE_URL;
    const legacyUrl = process.env.N8N_WEBHOOK_URL;

    const n8nUrl = baseUrl
        ? `${baseUrl}/webhook/contacts-create`
        : legacyUrl;

    if (!n8nUrl) {
        console.error('Missing N8N_WEBHOOK_BASE_URL or N8N_WEBHOOK_URL environment variable');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const response = await fetch(n8nUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            console.error(`N8N responded with ${response.status}`);
            return res.status(response.status).json({ error: 'N8N error' });
        }

        const data = await response.json();
        res.status(200).json(data);
    } catch (error) {
        console.error('Error proxying to N8N:', error);
        res.status(500).json({ error: 'Failed to submit form' });
    }
}
