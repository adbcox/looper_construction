# Looper Construction — Real Pages Skeleton (Vite + React + Tailwind)

This repo is a **structure-first** build:
- Navigation + routing is real
- Pages exist for every top-level route and every project placeholder
- Images are placeholders (swap later without touching layout)

## Quick start
```bash
npm install
npm run dev
```

## Deploy on Netlify
- Build command: `npm run build`
- Publish directory: `dist`

## Where to change content
All page copy + navigation labels live in:
- `src/content/siteContent.js`

## Where to drop images later
- Put shared images in: `public/images/`
- Put project images in: `public/images/projects/<residential|commercial>/<project-slug>/`

Then update `src/content/siteContent.js` image paths.

## Routing
Single Page App routing is handled by:
- `react-router-dom`
- `netlify.toml` redirect rule
