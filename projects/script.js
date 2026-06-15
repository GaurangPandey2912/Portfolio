const GITHUB_USERNAME = "GaurangPandey2912";
const BACKEND_URL = ""; // Set this after deploying: "https://your-app.vercel.app"

async function fetchFromBackend(endpoint) {
    if (!BACKEND_URL) return null;
    try {
        const response = await fetch(`${BACKEND_URL}/api/${endpoint}`);
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        return await response.json();
    } catch {
        return null;
    }
}

async function fetchFromGitHub(endpoint) {
    const url = endpoint === "repos"
        ? `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10`
        : `https://api.github.com/users/${GITHUB_USERNAME}/events?per_page=5`;

    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
}

async function fetchGitHubRepos() {
    try {
        let repos = await fetchFromBackend("repos");
        if (!repos) repos = await fetchFromGitHub("repos");

        const repoList = document.getElementById("repo-list");
        repoList.innerHTML = repos.slice(0, 3).map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">
                    <i class="fab fa-github"></i> ${repo.name}
                </a>
            </li>
        `).join("");
    } catch (error) {
        console.error("Repo Fetch Error:", error);
        document.getElementById("repo-list").innerHTML = "<li>Could not load repos</li>";
    }
}

async function fetchGitHubActivity() {
    try {
        let events = await fetchFromBackend("activity");
        if (!events) events = await fetchFromGitHub("activity");

        const activityList = document.getElementById("activity-list");
        activityList.innerHTML = events.slice(0, 5).map(event => {
            let action = "";
            if (event.type === "PushEvent") action = "Pushed to";
            else if (event.type === "CreateEvent") action = "Created";
            else if (event.type === "ForkEvent") action = "Forked";
            else if (event.type === "WatchEvent") action = "Starred";
            else action = event.type;

            return `
                <li>
                    ${action}
                    <a href="https://github.com/${event.repo.name}" target="_blank">
                        ${event.repo.name}
                    </a>
                </li>
            `;
        }).join("");
    } catch (error) {
        console.error("Activity Fetch Error:", error);
        document.getElementById("activity-list").innerHTML = "<li>Could not load activity</li>";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    fetchGitHubRepos();
    fetchGitHubActivity();
});
