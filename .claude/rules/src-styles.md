# Rules for src/styles/**

When editing design tokens or global styles:

1. **design-tokens.css is the single source of truth** — all visual values defined here
2. **8px spacing grid** — all spacing values must be multiples of 8px
3. **Major Third (1.250) type scale** — maintain consistent ratio
4. **Contrast minimum 4.5:1** (WCAG AA) — verify when changing colors
5. **Dark mode support** — `@media (prefers-color-scheme: dark)` with appropriate overrides
6. **Reduced motion support** — `@media (prefers-reduced-motion: reduce)` zeroes all durations
7. **Light mode is primary** — white (#ffffff) background, Apple-inspired
8. **Never add texture overlays** — bright, clean aesthetic (no paper grain)
9. **Shadows are soft** — low opacity (0.04-0.08), not harsh
