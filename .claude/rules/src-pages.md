# Rules for src/pages/**

When editing or creating pages:

1. **Every page must use BaseLayout** — import from `../layouts/BaseLayout.astro`
2. **Include Header and Footer** — slot them into the layout
3. **Add scroll-reveal animations** — use `data-animate="reveal"` on sections
4. **Include IntersectionObserver script** at the bottom of each page
5. **Page hero pattern:** padding-top = `calc(72px + var(--section-gap))` to clear fixed nav
6. **Section labels:** use `<span class="section-label">` with monospace uppercase styling
7. **HCI page uses celadon accent** — pass `accent="celadon"` to BaseLayout
8. **All text content must have max-width** — use `.content` class (720px)
9. **Accessibility:** semantic HTML, proper heading hierarchy, aria-labels
10. **No hardcoded colors** — always use CSS custom properties from design-tokens.css
