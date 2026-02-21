export default async function handler(req, res) {
    // CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') return res.status(200).end();
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { campaign_id } = req.body || {};

    if (!campaign_id) {
        return res.status(400).json({ error: 'Missing campaign_id' });
    }

    const baseUrl = process.env.N8N_WEBHOOK_BASE_URL;
    if (!baseUrl) {
        console.error('Missing N8N_WEBHOOK_BASE_URL environment variable');
        return res.status(500).json({ error: 'Server configuration error' });
    }

    try {
        const response = await fetch(`${baseUrl}/webhook/landing-content`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ campaign_id })
        });

        const data = await response.json();
        return res.status(response.status).json(data);
    } catch (error) {
        console.error('Error proxying to n8n landing-content:', error);
        return res.status(502).json({ error: 'Failed to fetch campaign content' });
    }
}
