# Execution State

## Current Status: Phase D (Implementation) — Iteration 10 (Continuous 24/7)

### Total Commits: 31+
### Build Size: 264KB (target: <500KB)
### Live URL: https://wingchunleung.github.io/website/

### Completed Features
- [x] 4-layer particle canvas hero (gradient + SVG lines + particles + overlay)
- [x] Cinematic intro overlay with iris-close clip-path reveal
- [x] Session-based intro (plays once, skipped on revisit)
- [x] All dark mode REMOVED — light only (Apple/LVMH aesthetic)
- [x] Real SVG logos (HKUST, Carta, Costco, UW, Edmonds)
- [x] Stripe-style spotlight glow on ALL card types
- [x] 3D perspective tilt on work cards
- [x] Shimmer sweep hover effect
- [x] CSS scroll-driven animations (animation-timeline: view())
- [x] Smooth gradient transitions between sections
- [x] Branded company colors on timeline + cards
- [x] About: stats strip, experience cards, education cards
- [x] Projects: featured hero card + 3-col grid + spotlight glow
- [x] Contact: card-based with arrow icons + spotlight
- [x] HCI: celadon accent, assignment cards, principle hover
- [x] Back-to-top button in footer
- [x] Intro section CTAs (Learn more + Get in touch)
- [x] Journey steps as premium branded cards
- [x] JSON-LD structured data for SEO
- [x] Sitemap generation (@astrojs/sitemap)
- [x] OG image for social sharing
- [x] Font preconnect optimization
- [x] Page load fade-in transition
- [x] Animated intro divider (expands on reveal)
- [x] Timeline nodes as branded circles with ring effect

### In Progress
- [ ] Self-host fonts via fontsource (research running)
- [ ] GSAP for advanced hero animations (research running)
- [ ] Lighthouse performance audit
- [ ] Mobile responsive testing + fixes

### Design Direction
- Bright white (#ffffff) + Apple light grey (#f5f5f7)
- Cormorant Garamond (display) + Inter (body) + JetBrains Mono (mono)
- Vermillion (#c73e1d) primary accent, celadon (#7d9e8c) for HCI
- Pill-shaped buttons (border-radius: 100px)
- Premium card language: spotlight glow + tilt + shimmer + branded borders
- Cinematic intro → particle hero → name reveal → journey → work → contact

### Key Lessons Learned
| Lesson | Source |
|--------|--------|
| No dark mode — user wants ONLY bright | Multiple corrections |
| Use REAL logos, not text as logos | Direct feedback |
| Never stop — operate 24/7 continuously | Multiple reminders |
| Premium SaaS quality, not portfolio | Core direction |
| All links need /website base path | 404 bug fix |
| Deploy with --no-history for clean pushes | gh-pages quirk |
| .nojekyll required for _astro/ directory | GitHub Pages fix |
