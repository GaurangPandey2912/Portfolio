# Portfolio — Gaurang Pandey

Personal portfolio website showcasing projects, skills, certifications, and competitive programming journey. Built with vanilla HTML, CSS, and JavaScript — zero frameworks, no build tools.

## Pages

| Page | File | Content |
|------|------|---------|
| **Home** | `index.html` | Hero with time-based greeting, blog toggle (casual/professional), quick stats |
| **About** | `aboutme/aboutme.html` | Bio, skill cards, certifications (click to preview PDF), resume download with QR |
| **Projects** | `projects/projects.html` | Experience timeline, GitHub repos + activity feed, GitHub streak stats, CodeChef stats |

## Features

- Dark theme with gold (`#FFD700`) accents
- Glassmorphism header with blur effect
- Responsive grid layouts (skills, projects, certifications)
- Live GitHub repository and activity feed via API
- GitHub streak stats card
- PDF certificate preview modal
- QR code for resume
- Blog section with casual/professional toggle
- Scroll-triggered fade-in animations
- IntersectionObserver for CodeChef stats
- Font Awesome social icons

## Project Structure

```
├── index.html                 # Homepage
├── styleshome.css             # Homepage styles
├── images/                    # Homepage images (profile, backgrounds)
├── aboutme/
│   ├── aboutme.html           # About page
│   ├── aboutme.css            # About page styles
│   ├── Resume.pdf             # Resume file
│   ├── certificates/          # PDF certificates (5)
│   └── images/                # Skill icons, backgrounds
├── projects/
│   ├── projects.html          # Projects page
│   ├── projects..css          # Projects page styles
│   └── script.js              # Fetches GitHub repos + activity
├── *.html                     # Blog posts (casual + professional)
└── backend/                   # Legacy Node.js backend (unused)
```

## Getting Started

### Local Preview

Since GitHub API calls (`fetch`) are blocked from `file://` protocol, use a local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser.

### GitHub API

Repos and activity are fetched via the unauthenticated GitHub API (60 requests/hour). The username is hardcoded in `projects/script.js` — no token needed for a personal portfolio.

## Deployment

### GitHub Pages (Free)

1. Push to your GitHub repository
2. Go to **Settings → Pages**
3. Select branch `main`, root folder, click Save
4. Your site will be live at `https://<username>.github.io/<repo>/`

### Custom Domain

1. In repo **Settings → Pages**, enter your domain under "Custom domain"
2. At your registrar, add:
   - **A records** pointing to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - (For `www`) **CNAME** from `www` to `<username>.github.io`

GitHub automatically provisions a free SSL certificate.

## Customization

- **Colors**: All gold accents use `#FFD700` — search and replace in CSS files
- **Social links**: Update URLs in the `<section id="socials">` footer of each HTML page
- **Email**: Change `gaurangpandey29@gmail.com` across all pages
- **GitHub username**: Update `GITHUB_USERNAME` in `projects/script.js`

## Tech

- HTML5
- CSS3 (Flexbox, Grid, CSS animations)
- Vanilla JavaScript (ES6+, `fetch`, IntersectionObserver)
- [Font Awesome](https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css) (icons)
- [Devicon](https://cdn.jsdelivr.net/gh/devicons/devicon) (skill icons)
- [SimpleIcons](https://cdn.simpleicons.org/) (CodeChef logo)
- [QRCode.js](https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js) (resume QR)
- [GitHub Readme Streak Stats](https://streak-stats.demolab.com/) (streak card)
- [GitHub Readme Stats](https://github-readme-stats.vercel.app/) (API stats)

## License

&copy; 2025 Gaurang Pandey. All rights reserved.
