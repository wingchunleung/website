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
- **Build:** `npm run build` → `dist/`
- **Deploy:** `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`
- **Host:** GitHub Pages at wingchunleung.github.io/website/
- **Base path:** `/website` (in astro.config.mjs)
- `.nojekyll` file required — GitHub Pages Jekyll ignores `_astro/` directory

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
npm run build        # Build for production
npm run preview      # Preview production build
npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll  # Deploy
```
