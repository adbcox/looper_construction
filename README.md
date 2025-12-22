# Looper Construction — Full-bleed Editorial (v1)

Light / beach-forward baseline:
- Full-bleed hero image (uses `public/gallery/01.jpg` if present)
- Editorial, image-led "Selected work" section (static for now)
- Copy centralized in `src/content.js`

## Images
Put your images in:
- `public/gallery/01.jpg`
- `public/gallery/02.jpg`
- `public/gallery/03.jpg`
- `public/gallery/04.jpg`

If an image is missing, the layout shows a neutral placeholder block (so it never renders “blank white”).

## Run (Codespaces / local)
```bash
npm install
npm run dev
```

## Netlify
Build: `npm run build`  
Publish: `dist`
