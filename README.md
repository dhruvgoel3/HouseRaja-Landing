# HouseRaja — landing website

Marketing site for the HouseRaja Android app. **Next.js 16 (App Router) +
Tailwind CSS 4**, exported as a fully static site, plus the privacy policy,
terms and account-deletion pages that Google Play links to.

Design system = the app's: ink `#151515`, emerald `#0B8A5F`, paper `#F6F5F1`,
Plus Jakarta Sans, Phosphor icons.

## Run locally
```bash
npm install
npm run dev        # http://localhost:3000
```

## Build
```bash
npm run build      # static site in ./out
npx serve out      # preview the exact production build
```

## Deploy (Firebase Hosting — same project as the app)
```bash
npm run build
firebase deploy --only hosting
```
Live at https://houseraja-app.web.app:
- `/` landing page
- `/privacy`, `/terms`, `/delete-account` — use these URLs in Play Console

(`out/` is plain HTML/CSS/JS, so Vercel, Netlify or GitHub Pages work too.)

## Editing
| What | Where |
|---|---|
| All text, links, FAQ, features | `src/content/site.ts` |
| Play Store link | `site.playStoreUrl` in `src/content/site.ts` |
| Colours, fonts, shadows | `src/app/globals.css` (`@theme`) |
| Sections | `src/components/sections/*` |
| Shared UI (logo, phone, buttons, headings) | `src/components/ui/*` |
| Phone screenshots | `public/screens/*.webp` (rendered from the app's design; regenerate with the app repo's `tools/store_assets`) |
| Legal pages | `public/privacy`, `public/terms`, `public/delete-account` (generated from the app's `lib/features/legal/legal_content.dart` by `tools/build_legal_pages.py`) |

SEO: page metadata in `src/app/layout.tsx`; JSON-LD (MobileApplication +
FAQPage) in `src/app/page.tsx`; icons in `src/app/icon.png` / `apple-icon.png`.
