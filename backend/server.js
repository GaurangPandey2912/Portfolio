import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 3000;
const username = process.env.USERNAME;
const token = process.env.GITHUB_TOKEN;

// 🔥 Repos API
app.get("/repos", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/repos?sort=updated&per_page=5`,
            {
                headers: {
                    Authorization: `token ${token}`
                }
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch repos" });
    }
});

// 🔥 Activity API
app.get("/activity", async (req, res) => {
    try {
        const response = await fetch(
            `https://api.github.com/users/${username}/events/public`,
            {
                headers: {
                    Authorization: `token ${token}`
                }
            }
        );

        const data = await response.json();
        res.json(data);
    } catch (err) {
        res.status(500).json({ error: "Failed to fetch activity" });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});