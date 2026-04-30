# Tech Stack Reference

## Framework: Astro 5.x
- Zero JS by default — content pages ship as static HTML
- Preact islands hydrate only where interactivity is needed
- View Transitions API for page animations
- Native image optimization (WebP/AVIF, responsive srcsets)
- Content Collections for type-safe Markdown/MDX

## Styling: Tailwind CSS 4
- Utility-first, backed by CSS custom properties from `design-tokens.css`
- PurgeCSS strips unused styles (~5–15KB gzipped)
- All visual values live in `src/styles/design-tokens.css` (single source of truth)

## Animation: GSAP 3 (planned)
- Currently CSS animations + IntersectionObserver
- GSAP + ScrollTrigger reserved for advanced scroll effects only
- Budget: ~23KB gzipped for core + ScrollTrigger
- All motion respects `prefers-reduced-motion: reduce`

## Fonts: Google Fonts (to be self-hosted)
- Cormorant Garamond (Light 300, Regular 400, Italic)
- Inter (400, 500, 600)
- JetBrains Mono (400)
- Self-hosting planned for LCP improvement

## Deployment
- **Repo:** github.com/wingchunleung/wingchunleung.github.io
- **Source branch:** `master` (Astro source)
- **Built branch:** `gh-pages` (pre-built HTML — single source of truth for the live site)
- **Build:** `npm run build` → `dist/`
- **Deploy:** `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`
- **Live URL:** https://wingchunleung.github.io/
- **Base path:** `/` (set in `astro.config.mjs` after the repo rename from `website` → `wingchunleung.github.io`)
- **Routing:** all internal links use trailing slashes (avoids 301 redirect → unstyled flash on GitHub Pages)
- **Jekyll opt-out:** `.nojekyll` required so GitHub Pages serves `_astro/` directories

## Performance Budget
| Metric | Target |
|--------|--------|
| LCP | <1.5s |
| CLS | <0.05 |
| Total JS | <50KB gzip |
| Total CSS | <15KB gzip |
| Page weight | <500KB |
| Build time | <1s |

## Commands
```bash
export FNM_DIR="$HOME/.local/share/fnm" && export PATH="$FNM_DIR:$PATH" && eval "$(fnm env)"
npm run dev          # dev server
npm run build        # production build → dist/
npm run preview      # preview production build
npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll  # deploy
```

## Deploy-and-Verify Discipline (HCI-18 lab-to-world)
After every deploy:
1. Open the live URL in a real browser, not preview.
2. Click every nav link from each page (no 404s, no unstyled flash).
3. Inspect on mobile viewport for touch targets and readability.
4. Only then mark the change complete.
