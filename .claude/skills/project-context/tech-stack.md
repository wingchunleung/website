# Tech Stack Reference

## Framework: Astro 5.x
- Zero JavaScript by default — content pages ship as static HTML
- Preact islands for interactive components (hydrated only where needed)
- View Transitions API support for page animations
- Native image optimization (WebP/AVIF, responsive srcsets)
- Content Collections for type-safe Markdown/MDX content

## Styling: Tailwind CSS 4
- Utility-first with CSS custom properties from design-tokens.css
- PurgeCSS automatically removes unused styles (~5-15KB gzipped)
- All design tokens defined in `src/styles/design-tokens.css`

## Animation: GSAP 3 (planned)
- Currently using CSS animations + IntersectionObserver
- GSAP + ScrollTrigger planned for more advanced scroll animations
- SplitText for character-by-character reveals
- Budget: ~23KB gzipped for core + ScrollTrigger

## Fonts: Google Fonts (to be self-hosted)
- Cormorant Garamond (Light 300, Regular 400, Italic)
- Inter (Regular 400, Medium 500, Semibold 600)
- JetBrains Mono (Regular 400)
- Currently loaded via Google Fonts CDN; plan to self-host for performance

## Deployment
- **Path:** GitHub Actions workflow → GitHub Pages. Pages source is set to "GitHub Actions" in repo settings (switched from `gh-pages` branch on 2026-04-30).
- **Trigger:** push to `master` runs `.github/workflows/deploy.yml` (currently missing from the repo — see CLAUDE.md "Deploy path migration" for restore instructions).
- **CI build:** `npm ci` + `npm run build` + `actions/upload-pages-artifact@v3` + `actions/deploy-pages@v4`.
- **Local build (preview only):** `npm run build` → `dist/`.
- **Host URL:** https://wingchunleung.github.io/ (root). Repo: `wingchunleung/wingchunleung.github.io` (user-page repo).
- **Base path:** `astro.config.mjs` currently has `base: '/website'` which does NOT match the root URL. Needs to be removed before the new workflow's first deploy. The `gh-pages` branch papered over this with hand-edits; a clean CI build will not.
- **No manual deploy command** — `npx gh-pages -d dist` is retired.

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
npm run dev          # Start dev server
npm run build        # Build for production (local preview only — does not deploy)
npm run preview      # Preview production build
git push origin master   # Triggers the deploy workflow on GitHub Actions
gh run watch         # (optional) Watch the most recent workflow run
```
