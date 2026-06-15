# AGENTS.md

## Project Overview

Static HTML/CSS/JS portfolio website. No build system, no package manager, no framework. All pages share a consistent dark theme (black background, `#FFD700` gold text). Three sections: homepage, about me, projects.

## Commands

There is **no build system, no test runner, no linter, no package manager** (`package.json` does not exist).

- **Preview locally**: Open any `.html` file in a browser via `file://` or a local server (`python3 -m http.server 8000` or `npx serve .`).
- **No lint commands** exist. If you add linting (e.g., ESLint, Prettier, stylelint), create config files at the repo root.
- **No test commands** exist. If you add tests, use a vanilla JS test runner (e.g., Vitest, Jest) and place test files co-located with source as `*.test.js`.

## Project Structure

```
Protfolio/
  homepage/
    homepage.html              # Landing page with hero, blog toggle, typing game
    styleshome.css             # Homepage styles
    my-weekend-trip.html       # Casual blog post
    thoughts-on-ai.html        # Casual blog post
    optimizing-react-performance.html  # Professional blog post
    understanding-ml-models.html       # Professional blog post
    images/                    # JPEG/PNG images
  aboutme/
    aboutme.html               # Bio, skills grid, certifications, resume QR
    aboutme.css                # About page styles
    download.html              # Auto-download resume page
    Resume.pdf                 # Resume file
    certificates/              # 5 PDF certificates
    images/                    # Skill icons (PNG, WEBP, SVG)
  projects/
    projects.html              # Experience, GitHub stats, CodeChef stats
    projects..css              # Project page styles
    script.js                  # ES module: fetches GitHub repos + activity
    config.js                  # GitHub token + username (gitignored)
```

## Pages & Navigation Structure

- `/Protfolio/homepage/homepage.html` — main landing
- `/Protfolio/aboutme/aboutme.html` — about page
- `/Protfolio/projects/projects.html` — projects page
- Navigation links are absolute paths prefixed with `/Protfolio/`.

## HTML Conventions

- `<!DOCTYPE html>` at top, `<html lang="en">`
- 4-space indentation for nested elements
- Self-closing tags (no trailing slash): `<meta>`, `<link>`, `<br>`, `<input>`, `<img>`
- `<link rel="stylesheet">` in `<head>`, inline `<script>` at bottom of `<body>` before `</html>`
- ES module scripts use `<script type="module" src="...">`
- Use semantic elements: `<header>`, `<section>`, `<footer>`, `<nav>`, `<ul>/<li>`
- IDs for unique sections (`#hero`, `#blog`, `#github-stats`), classes for reusable styles
- All external resources use HTTPS (CDN icons via `cdn.jsdelivr.net`, `cdnjs.cloudflare.com`)

## CSS Conventions

- Dark theme global: `background: black; color: #FFD700;`
- Universal reset first: `* { margin: 0; padding: 0; box-sizing: border-box; font-family: Arial, sans-serif; }`
- Use ID selectors (`#section-name`) for major sections, class selectors for components
- Transitions on hover: `scale()`, `rotate(360deg)`, background/color swaps, box-shadow glow
- Fixed header with gold underline hover effect (`::after` pseudo-element on nav links)
- Grid layout for skill cards (`grid-template-columns: repeat(auto-fit, minmax(...))`)
- IntersectionObserver-driven scroll animations (`.animate.left`, `.animate.right`, `.animate.show`)
- `rgba(255, 215, 0, 0.1)` for subtle gold overlay backgrounds
- Gold `2px solid #FFD700` borders on highlighted containers

## JavaScript Conventions

- **ES modules** with `export default` and `import` from relative paths (`./config.js`)
- `async/await` for API calls with `.json()` and error checks on `response.message`
- `const` over `let` unless reassignment is needed
- `camelCase` for variables and functions (`fetchGitHubRepos`, `updateGreeting`)
- DOM queries: `document.getElementById()`, `document.querySelector()`, `document.querySelectorAll()`
- Event listeners: `addEventListener("event", function () { ... })`
- Arrow functions and traditional anonymous functions both used
- Template literals for HTML string construction (`` `<li>${repo.name}</li>` ``)
- `DOMContentLoaded` wrapper for scripts that run before page load

### Naming Conventions

| Item | Convention | Example |
|------|-----------|---------|
| HTML IDs | `kebab-case` | `repo-list`, `typing-input`, `pdf-modal` |
| CSS classes | `kebab-case` | `hero-content`, `skill-card`, `blog-link` |
| CSS IDs | `kebab-case` | `#github-stats`, `#fun-zone` |
| JS variables | `camelCase` | `typingSentences`, `randomSentence` |
| JS functions | `camelCase` | `fetchGitHubRepos`, `updateGreeting` |
| JS constants | `UPPER_SNAKE_CASE` | `GITHUB_CONFIG` (exported config) |
| Files | `kebab-case` | `aboutme.html`, `styleshome.css` |
| Config exports | `UPPER_SNAKE_CASE` | `export default GITHUB_CONFIG` |

## Error Handling

- API error checks: `if (response.message) console.error(...); return;`
- No try/catch; API errors are silently returned after console error
- No user-facing error UI for API failures

## Security

- `projects/config.js` contains a GitHub personal access token — this file is in `.gitignore` and must **never** be committed
- All third-party resources loaded over HTTPS
- All links open in `target="_blank"` for external sites

## Common Patterns

- **Gold (#FFD700) hover effect**: background swaps to gold, text to black, with `scale(1.02)` or `scale(1.05)` transform
- **Blog toggle**: button click toggles `.hidden` class between casual/professional blog lists
- **Certificate modal**: click `.cert-tile` opens a full-screen overlay with an `<iframe>` pointing to `data-pdf` attribute
- **IntersectionObserver**: applied to `.animate` elements with `threshold: 0.2`, toggles `.show` class for fade-in from left/right
- **Footer**: social links with GitHub + LinkedIn CDN icons, copyright line
