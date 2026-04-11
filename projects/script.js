const username = "GaurangPandey2912";
// Fetch Repositories
async function fetchGitHubRepos() {
    try {
        const response = await fetch("http://localhost:3000/repos");
        const repos = await response.json();

        console.log("Repos:", repos); // DEBUG

        const repoList = document.getElementById("repo-list");

        // 🚨 If API failed
        if (!Array.isArray(repos)) {
            repoList.innerHTML = "<li>Failed to load repos</li>";
            console.error(repos);
            return;
        }

        // 🚨 If empty
        if (repos.length === 0) {
            repoList.innerHTML = "<li>No repositories found</li>";
            return;
        }

        repoList.innerHTML = repos.map(repo => `
            <li>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
            </li>
        `).join("");

    } catch (error) {
        console.error("Repo Fetch Error:", error);
        document.getElementById("repo-list").innerHTML = "<li>Error loading repos</li>";
    }
}

// Fetch Activity
async function fetchGitHubActivity() {
    try {
        const response = await fetch("http://localhost:3000/activity");
        const events = await response.json();

        console.log("Events:", events); // DEBUG

        const activityList = document.getElementById("activity-list");

        if (!Array.isArray(events)) {
            activityList.innerHTML = "<li>Failed to load activity</li>";
            console.error(events);
            return;
        }

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
        document.getElementById("activity-list").innerHTML = "<li>Error loading activity</li>";
    }
}

// Run after page loads
document.addEventListener("DOMContentLoaded", () => {
    console.log("JS Loaded"); // DEBUG
    fetchGitHubRepos();
    fetchGitHubActivity();
});