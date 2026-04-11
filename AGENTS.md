# AGENTS.md - Codebase Guidelines for Agentic Coding

## Project Overview

This is a portfolio website with two parts:
1. **Frontend**: Static HTML/CSS/vanilla JS in root folders
2. **Backend**: Express.js server in `backend/` folder

## Build/Development Commands

### Frontend (Static Site)

```bash
# macOS: Open homepage in browser
open homepage/homepage.html

# Or serve with Python HTTP server (from Protfolio directory)
python3 -m http.server 8000
# Then visit http://localhost:8000

# Linux
xdg-open homepage/homepage.html

# Windows
start homepage/homepage.html
```

### Backend (Express.js)

```bash
# From backend/ directory
cd backend

# Install dependencies (first time)
npm install

# Start server
node server.js

# Or with nodemon for auto-reload
npx nodemon server.js
```

### Running a Single Test

No automated tests configured. Manual testing only:
- For frontend: Open in browser, check console for errors
- For backend: Use `curl http://localhost:3000/api/endpoint` or Postman

## Code Style Guidelines

### HTML

- Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Include `alt` attributes on all `<img>` elements for accessibility
- Use lowercase for all tags and attribute names
- Quote all attribute values: `<a href="url">`, `<img src="path" alt="text">`
- Indent nested elements with 2 spaces
- Use proper heading hierarchy: h1 → h2 → h3 (never skip levels)
- Include viewport meta tag: `<meta name="viewport" content="width=device-width, initial-scale=1">`
- Put CSS links in `<head>`, scripts at end of `<body>` or use `defer`

### CSS

- Use external stylesheets; never inline styles (`style=""`)
- Use CSS custom properties for colors/spacing
- Use flexbox for components, CSS Grid for page layouts
- Mobile-first: `@media (min-width: 768px)` for tablet, `1024px` for desktop
- Relative units (rem, em, %) for fonts, px for borders/shadows

### JavaScript

**Frontend**: Use `const`/`let`, never `var`. Wrap in IIFE. Use `addEventListener`.

**Backend (Node/Express)**: Use ES modules. Always `await` with try/catch:
```javascript
try {
  const result = await asyncOp();
} catch (err) {
  res.status(500).json({ error: 'Message' });
}
```
- Use `.env` for secrets (never commit)
- Validate incoming data
- Return proper HTTP codes (200, 201, 400, 404, 500)

### Naming Conventions

- Files: lowercase with dashes: `homepage.html`, `styles-home.css`
- IDs/Classes: lowercase with hyphens: `nav-links`, `project-card`
- JS: camelCase: `initApp()`, `projectList`
- Constants: UPPER_SNAKE_CASE
- Images: descriptive lowercase

### Error Handling

- Verify images exist, links resolve
- **Backend**: wrap async routes in try/catch, sanitize errors to client
- Never expose internal errors

### Responsive/Performance/Accessibility

- Mobile-first: breakpoints at 768px, 1024px
- Optimize images (WebP), lazy load below-fold
- 4.5:1 contrast, keyboard-navigable, focus states

## File Structure

```
Protfolio/
├── homepage/        # Main page + blog posts
├── aboutme/         # About page + resume
├── projects/        # Projects page
├── backend/         # Express.js API
│   ├── .env       # Secrets (never commit)
│   └── server.js
└── AGENTS.md       # This file
```

## Git Workflow

- **NEVER commit `.env`** - already in `.gitignore`
- Use meaningful commit messages