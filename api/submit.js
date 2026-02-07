export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const n8nUrl = 'https://n8n.srv1303475.hstgr.cloud/webhook/contacts-create';

    try {
        const response = await fetch(n8nUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(req.body),
        });

        if (!response.ok) {
            // Log error
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
