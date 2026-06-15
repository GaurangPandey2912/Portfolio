export default async function handler(req, res) {
    res.setHeader("Access-Control-Allow-Origin", "*");

    try {
        const headers = {};
        if (process.env.GITHUB_TOKEN) {
            headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
        }
        const response = await fetch(
            `https://api.github.com/users/${process.env.USERNAME}/repos?sort=updated&per_page=10`,
            { headers }
        );
        if (!response.ok) throw new Error(`GitHub API responded with ${response.status}`);
        const data = await response.json();
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}
