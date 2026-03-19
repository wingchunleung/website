# Design Decision Record 002: Technical Architecture & Stack

**Date**: 2026-03-19
**Status**: Proposed
**Context**: Technical architecture decisions for Wing Chun Leung's personal website, grounded in HCI requirements from DDR-001 and motion design spec. Research conducted across current (March 2026) framework landscape, hosting platforms, reference site analysis, and accessibility/performance best practices.

---

## 1. Reference Site Analysis

### 1.1 Apple.com Design Patterns

Apple's web presence embodies the principles this site aspires to. Key patterns extracted from live analysis (March 2026):

- **Layout**: Hierarchical full-width hero sections stacked vertically. Asymmetrical content blocks within sections. Content never fills more than ~60% of any viewport. Modular card-based sections below the fold.
- **Typography**: Restrained hierarchy using SF Pro (their system font). Large bold headlines (56-80px desktop), light body text (17-21px). Weight contrast is the primary hierarchy tool, not color or decoration. Generous line-height throughout.
- **Color**: Neutral foundations (black, white, grays) dominate. The product imagery carries the color, not the UI chrome. Accent colors appear only in CTAs, creating intentional focal points.
- **Whitespace**: 80-120px padding between sections is standard. Negative space itself becomes a design element signaling premium quality. Each viewport is treated as a "slide" with one dominant idea.
- **Animation/Scroll**: Scroll-driven storytelling with content revealed progressively. Smooth 60fps animations. Motion serves narrative -- elements appear as the story demands, not for decoration.
- **Navigation**: Persistent horizontal bar with dropdown submenus. Product categories immediately accessible. Search and cart icons fixed in header.

**Key takeaway for this project**: Restraint IS the design. Fewer elements, each one given room to breathe and purpose to exist. This directly maps to Nielsen's H3 (Aesthetic and Minimalist Design) and Norman's visceral design level.

### 1.2 Carta.com Design Patterns

Carta's design reflects fintech trust-building through visual restraint:

- **Color system**: Deep blues and grays for stability; warm whites to soften corporate feel. Professional neutrals that convey trustworthiness.
- **Typography**: Single typeface family with weight variation creating hierarchy. Benefit-first headlines stating value propositions.
- **Layout**: Clean data presentation with generous cell padding and subtle borders. Details appear on demand, not up front.
- **Design system**: Their internal "Ink" system uses design tokens, accessibility-first components, internationalization support, and UX writing guidelines. The system encourages working within constraints because constraints enable scaling.

**Key takeaway for this project**: A single typeface with weight variation can create all necessary hierarchy. Benefit-first messaging (what value does this person bring?) before technical details.

### 1.3 Award-Winning Portfolio Sites (Awwwards 2025-2026)

Analysis of recent winners including Joffrey Spitzer (Astro + GSAP, Feb 2026), Adam Bricker (Mar 2026), Bruno's Portfolio (Site of the Month Jan 2026), and Elliott Mangham (Dec 2025):

| Pattern | Frequency | HCI Principle |
|---------|-----------|---------------|
| Single-column narrative flow | 4/5 sites | Gestalt Continuation |
| Hover-driven progressive disclosure | 5/5 sites | H3 Minimalism, H5 Flexibility |
| Single typeface or two at most | 4/5 sites | H1 Consistency |
| Near-zero decorative elements | 4/5 sites | Occam's Razor |
| Scroll-triggered reveal animations | 5/5 sites | Gestalt Common Fate |
| Monochrome base + single accent | 3/5 sites | Figure-Ground clarity |
| Performance as design signal | 5/5 sites | H7 Visibility (fast = trustworthy) |
| GSAP for animation | 3/5 sites | Visceral design quality |
| Astro as framework | 2/5 sites | Zero-JS-by-default performance |

**Critical insight**: The Joffrey Spitzer portfolio (Awwwards Feb 2026) was built with exactly the Astro + GSAP stack recommended in the motion design spec, validating that stack for award-quality portfolio work.

---

## 2. Recommended Tech Stack

### 2.1 Framework: Astro 5.x (with Preact islands)

**Decision**: Astro as the primary framework, with Preact for interactive islands where needed.

**Reasoning**:

| Factor | Astro | Next.js | SvelteKit |
|--------|-------|---------|-----------|
| JS shipped to client (static pages) | 0 KB by default | 80-120 KB hydration overhead | ~15 KB runtime |
| Content focus | Built for content sites | Built for web apps | General purpose |
| Image optimization | Built-in `<Image>` and `<Picture>` with WebP/AVIF | Built-in but requires React hydration | Manual or adapter-dependent |
| Markdown/MDX support | First-class with remark/rehype plugins | Requires configuration | Plugin-based |
| View Transitions | Native API, 2 lines of config | Requires custom implementation | Experimental |
| Learning curve | Low (HTML-first) | Medium (React knowledge required) | Medium (Svelte-specific syntax) |
| Ecosystem maturity (2026) | Strong, Cloudflare-backed since Jan 2026 | Strongest, Vercel-backed | Growing but smaller |
| Build speed | Fast (Vite-based) | Slower (Webpack/Turbopack) | Fast (Vite-based) |

**HCI justification**:
- **H3 (Minimalism)**: Zero JS by default means no unnecessary computation competing for device resources. The framework itself embodies minimalism.
- **H5 (Flexibility)**: Astro Islands let us add interactivity exactly where needed (image lightbox, contact form, interactive HCI demos) without hydrating the entire page.
- **REQ-H5.6 (Progressive enhancement)**: Astro's HTML-first output means core content works without JavaScript. Artistic enhancements layer on top.
- **Performance = Usability**: Research shows that a 1-second delay in page load decreases user satisfaction by 16% and conversion by 7%. Astro's near-zero JS gives us the fastest possible baseline.

**Astro's 2026 position**: Following Cloudflare's acquisition in January 2026, Astro v6 Beta introduces a redesigned dev server running in the same runtime as production. The framework has the most stable API surface of any option, with new features added without breaking existing APIs.

### 2.2 Styling: Tailwind CSS 4 + Custom Design Tokens

**Decision**: Tailwind CSS 4 as the utility framework, extended with a custom design token system defined in CSS custom properties.

**Reasoning**:
- Tailwind dominates with 92.6% market share (31.1M weekly downloads) -- the largest talent pool and ecosystem.
- Utility-first approach prevents CSS bloat and enforces consistency (REQ-H1.1, REQ-H1.4 spacing grid).
- Tailwind 4 is CSS-first configuration (no `tailwind.config.js`), using `@theme` directives directly in CSS.
- Custom design tokens via CSS custom properties satisfy REQ-H1.2 (color token system) and enable theme switching (light/dark).
- Tailwind's built-in responsive utilities support mobile-first design (CLAUDE.md constraint).
- PurgeCSS is built in -- final CSS bundle is typically 5-15 KB gzipped.

**Design token structure** (satisfying REQ-H1.2):
```css
@theme {
  /* Color tokens -- never use raw hex in components */
  --color-surface: #fafaf9;        /* warm white */
  --color-on-surface: #1c1917;     /* near-black */
  --color-surface-secondary: #f5f5f4;
  --color-accent: #2563eb;         /* single accent */
  --color-accent-hover: #1d4ed8;
  --color-muted: #78716c;          /* de-emphasized text */

  /* Spacing scale (8px base, REQ-H1.4) */
  --space-1: 0.25rem;   /* 4px */
  --space-2: 0.5rem;    /* 8px */
  --space-3: 0.75rem;   /* 12px */
  --space-4: 1rem;      /* 16px */
  --space-6: 1.5rem;    /* 24px */
  --space-8: 2rem;      /* 32px */
  --space-12: 3rem;     /* 48px */
  --space-16: 4rem;     /* 64px */
  --space-20: 5rem;     /* 80px */
  --space-24: 6rem;     /* 96px */
  --space-32: 8rem;     /* 128px */

  /* Typography scale */
  --font-display: 'Inter Variable', system-ui, sans-serif;
  --font-body: 'Inter Variable', system-ui, sans-serif;
  --text-xs: 0.75rem;    /* 12px */
  --text-sm: 0.875rem;   /* 14px */
  --text-base: 1.0625rem; /* 17px -- Apple standard */
  --text-lg: 1.25rem;    /* 20px */
  --text-xl: 1.5rem;     /* 24px */
  --text-2xl: 2rem;      /* 32px */
  --text-3xl: 2.5rem;    /* 40px */
  --text-4xl: 3.5rem;    /* 56px -- display heading */
  --text-5xl: 4.5rem;    /* 72px -- hero heading */
}
```

### 2.3 Typography: Inter Variable (Google Fonts)

**Decision**: Inter Variable as the single typeface for the entire site.

**Reasoning**:
- Designed specifically for computer screens with every detail calibrated for on-screen readability.
- Variable font technology: a single file (~100 KB) serves all weights (100-900), eliminating multiple HTTP requests.
- Extensive character set including CJK support (relevant for Wing's Hong Kong context).
- Weight variation alone creates all necessary hierarchy (matching Carta's approach and REQ-H1.1).
- Available free via Google Fonts or self-hosted for maximum performance.
- Inter is the most widely used variable font on the web in 2026, making it an externally consistent choice (REQ-H1.5).

**Self-hosting recommendation**: Host the font files locally rather than loading from Google Fonts CDN. This eliminates a third-party DNS lookup, prevents GDPR tracking concerns, and gives full control over subsetting and caching.

**Font loading strategy**:
```html
<!-- Preload the variable font for fastest paint -->
<link rel="preload" href="/fonts/InterVariable.woff2" as="font" type="font/woff2" crossorigin>
```

### 2.4 Animation: GSAP 3 (GreenSock Animation Platform)

**Decision**: GSAP 3 with ScrollTrigger plugin for all animations.

**Reasoning** (aligned with motion-interaction-design.md):
- GSAP core is ~23 KB gzipped (vs Framer Motion at ~32 KB), with modular plugin loading.
- Full timeline control for the precise sequencing specified in the motion design spec (hero entrance at 0.0s, 0.3s, 0.8s, 1.2s, 1.6s).
- ScrollTrigger enables Apple-quality scroll-driven storytelling without framework lock-in.
- Works with any framework or none -- not tied to React like Framer Motion.
- Now free for all use including commercial (since Webflow acquisition 2024).
- Proven in award-winning Astro portfolios (Joffrey Spitzer, Awwwards Feb 2026).
- SplitText plugin for the character-by-character name reveal specified in the motion spec.

**GSAP modules to install**:
```
gsap (core)
ScrollTrigger (scroll-driven animations)
SplitText (text animation for hero)
```

**Reduced motion support** (REQ-H4.4):
```javascript
// Respect user preference -- disable all GSAP animations
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  gsap.globalTimeline.timeScale(0);
  ScrollTrigger.getAll().forEach(st => st.kill());
}
```

### 2.5 Deployment: Cloudflare Pages

**Decision**: Cloudflare Pages for hosting and deployment.

**Reasoning**:

| Factor | Cloudflare Pages | Vercel | Netlify | GitHub Pages |
|--------|-----------------|--------|---------|--------------|
| Global latency | <50ms (300+ edge locations) | Good but fewer PoPs | Slowest of the three | CDN-backed but limited |
| Bandwidth (free tier) | Unlimited (fair use) | 100 GB/month | 100 GB/month | 100 GB/month |
| Build minutes (free) | 500/month | 6000/month | 300/month | GitHub Actions minutes |
| Custom domains | Free, instant SSL | Free, instant SSL | Free, instant SSL | Free, manual SSL |
| Astro integration | Native (Cloudflare owns Astro since Jan 2026) | Good | Good | Manual |
| Preview deployments | Yes | Yes | Yes | Via PR workflow |
| Cost at scale | Best (free tier is generous) | Can get expensive | Can get expensive | Free but limited |

**HCI justification**:
- **Performance = usability**: Cloudflare's 300+ edge locations ensure <50ms latency globally. Wing's audience spans Hong Kong (HKUST), US (Carta/Costco experience), and international recruiters. Global low latency serves all user segments.
- **H7 (Visibility)**: Faster TTFB means the user sees the page responding immediately, maintaining the perception of system responsiveness.
- **Native Astro support**: Since Cloudflare acquired Astro in January 2026, the integration is first-class. Astro v6 Beta's dev server runs in the same runtime as Cloudflare's production environment, eliminating deployment surprises.

**Continuous deployment workflow**:
```
git push to main → Cloudflare Pages auto-builds → Preview URL for branches → Production on main merge
```

### 2.6 Content Approach: Markdown/MDX (No CMS)

**Decision**: Static Markdown and MDX files in the repository. No external CMS.

**Reasoning**:
- A personal site with ~5 pages and ~10 HCI assignments does not warrant CMS complexity.
- Markdown files are version-controlled alongside code -- every content change is tracked.
- MDX allows embedding interactive components (React/Preact) within content pages -- useful for HCI assignment demos.
- Astro's Content Collections API provides type-safe content querying with schema validation.
- No database, no API, no external dependency to maintain or pay for.
- Content lives in `src/content/` with frontmatter for metadata (title, date, tags, description).

**Content Collections schema** (for HCI assignments):
```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const hciAssignments = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    assignmentNumber: z.number(),
    date: z.date(),
    description: z.string(),
    hciPrinciples: z.array(z.string()),  // which principles this demonstrates
    status: z.enum(['draft', 'submitted', 'graded']),
  }),
});

export const collections = { hciAssignments };
```

### 2.7 Build Tooling

| Tool | Purpose |
|------|---------|
| **Vite** (built into Astro) | Dev server and build bundler. HMR for instant feedback during development. |
| **TypeScript** | Type safety for component props and content schemas. Catches errors at build time, not runtime. |
| **ESLint + Prettier** | Code consistency. Astro ESLint plugin for `.astro` file linting. |
| **sharp** (built into Astro) | Image optimization at build time. WebP/AVIF generation. |
| **@astrojs/sitemap** | Automatic sitemap generation for SEO. |
| **@astrojs/check** | Astro-specific type checking for `.astro` files. |

---

## 3. Architecture Recommendations

### 3.1 File Structure

```
/home/wing/website/
├── CLAUDE.md                        # Project context and HCI principles
├── astro.config.mjs                 # Astro configuration
├── tailwind.css                     # Tailwind 4 theme + design tokens
├── tsconfig.json                    # TypeScript config
├── package.json
│
├── docs/
│   └── hci-knowledge-base.md        # Extracted HCI principles
│
├── design/
│   └── decisions/                   # Design decision records (DDRs)
│       ├── 001-hci-design-requirements.md
│       ├── 001-minimalist-design-proposal.md
│       ├── 001-narrative-branding-strategy.md
│       ├── 002-tech-stack-architecture.md    # This document
│       ├── critique-risks-antipatterns.md
│       └── motion-interaction-design.md
│
├── public/
│   ├── fonts/
│   │   └── InterVariable.woff2      # Self-hosted variable font
│   ├── favicon.svg                  # SVG favicon (scales to all sizes)
│   ├── og-image.png                 # Open Graph social preview
│   └── robots.txt
│
├── src/
│   ├── components/
│   │   ├── common/                  # Shared components
│   │   │   ├── Button.astro
│   │   │   ├── Card.astro
│   │   │   ├── SectionHeading.astro
│   │   │   └── SkipLink.astro       # Accessibility: skip to content
│   │   │
│   │   ├── layout/                  # Structural components
│   │   │   ├── Header.astro         # Navigation bar
│   │   │   ├── Footer.astro
│   │   │   ├── Nav.astro            # Navigation items
│   │   │   └── MobileMenu.astro     # Hamburger menu (Preact island)
│   │   │
│   │   ├── home/                    # Home page sections
│   │   │   ├── Hero.astro           # Hero with GSAP entrance
│   │   │   ├── BriefIntro.astro
│   │   │   ├── SelectedExperience.astro
│   │   │   └── SelectedProjects.astro
│   │   │
│   │   ├── hci/                     # HCI course components
│   │   │   ├── AssignmentCard.astro
│   │   │   ├── PrincipleTag.astro
│   │   │   ├── ProcessTimeline.astro
│   │   │   └── TableOfContents.astro # Anchor nav (REQ-H5.4)
│   │   │
│   │   └── interactive/             # Preact islands (client-side JS)
│   │       ├── ImageLightbox.tsx     # Modal with 3 exit paths (REQ-H4.3)
│   │       ├── ContactForm.tsx       # With clear/undo (REQ-H4.6)
│   │       └── ProjectFilter.tsx     # Gallery/list toggle (REQ-H5.3)
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro         # HTML head, meta, font loading, skip link
│   │   ├── PageLayout.astro         # Standard page with header/footer
│   │   └── HCILayout.astro          # HCI page with sidebar TOC
│   │
│   ├── pages/
│   │   ├── index.astro              # Home page
│   │   ├── about.astro              # About page
│   │   ├── experience.astro         # Experience/career page
│   │   ├── projects.astro           # Projects gallery page
│   │   ├── projects/
│   │   │   └── [slug].astro         # Individual project pages (dynamic)
│   │   ├── hci/
│   │   │   ├── index.astro          # HCI course overview + assignment list
│   │   │   └── [slug].astro         # Individual assignment pages
│   │   └── 404.astro                # Custom 404 page
│   │
│   ├── content/
│   │   ├── config.ts                # Content collection schemas
│   │   ├── projects/                # Project markdown files
│   │   │   ├── project-1.md
│   │   │   └── project-2.md
│   │   └── hci-assignments/         # HCI assignment MDX files
│   │       ├── assignment-1-design-thinking.mdx
│   │       ├── assignment-2-heuristic-evaluation.mdx
│   │       └── ...
│   │
│   ├── scripts/
│   │   ├── gsap-init.ts             # GSAP registration + reduced motion check
│   │   ├── scroll-animations.ts     # ScrollTrigger configurations
│   │   └── hero-animation.ts        # Hero entrance sequence
│   │
│   ├── styles/
│   │   └── global.css               # Tailwind imports + base styles + tokens
│   │
│   └── utils/
│       ├── constants.ts             # Site metadata, social links
│       └── helpers.ts               # Date formatting, string utilities
│
└── tests/
    ├── accessibility/               # Automated a11y tests
    │   └── axe-audit.spec.ts
    └── lighthouse/                  # Performance budget tests
        └── performance.spec.ts
```

### 3.2 Component Architecture

**Principle**: Components are organized by domain (feature), not by type. Each component is either:
1. **Static (`.astro`)** -- Renders to HTML at build time, ships zero JS. Used for everything by default.
2. **Interactive (`.tsx` Preact island)** -- Hydrates on the client. Used only when user interaction demands it (REQ-H5.6 progressive enhancement).

**Island hydration strategy** (maps to Astro's `client:*` directives):

| Component | Directive | Reasoning |
|-----------|-----------|-----------|
| MobileMenu | `client:media="(max-width: 768px)"` | Only hydrate on mobile viewports |
| ImageLightbox | `client:visible` | Hydrate when user scrolls to project section |
| ContactForm | `client:visible` | Hydrate when user reaches contact section |
| ProjectFilter | `client:idle` | Hydrate after page load, not blocking |
| GSAP animations | `<script>` tags | Vanilla JS, not a component -- runs after DOM ready |

**Layout composition**:
```
BaseLayout (HTML head, meta, fonts)
  └── PageLayout (Header, main slot, Footer)
       └── [Page content]
            └── Components (static .astro + interactive islands)
```

### 3.3 HCI Course Page Architecture

**Decision**: The HCI course page lives as a dedicated route (`/hci`) with its own sub-routes for individual assignments (`/hci/assignment-slug`).

**Reasoning**:
- **REQ-H4.1 (Deep linking)**: Each assignment has its own URL. A professor can bookmark or share `/hci/assignment-2-heuristic-evaluation` directly.
- **REQ-H5.4 (Anchor links)**: The HCI index page includes a sticky sidebar table of contents with jump links to each assignment section.
- **REQ-H2.4 (Assignment-structured)**: Content organized around deliverables, not lecture topics.
- **REQ-H6.4 (Descriptive names)**: Slugs use descriptive names ("design-thinking-process") not numbers ("assignment-1").

**HCI page hierarchy**:
```
/hci                    → Overview: course info, design philosophy, assignment list
/hci/[slug]             → Individual assignment: full write-up with embedded demos (MDX)
```

**HCI Layout** includes:
- Sticky sidebar with table of contents (auto-generated from headings)
- Breadcrumb navigation: Home > HCI Course > Assignment Name (REQ-H6.2 current location indicator)
- "Previous / Next Assignment" navigation at bottom
- Metadata bar: date submitted, HCI principles referenced, status

### 3.4 Image Optimization Strategy

**Multi-layer approach**:

| Layer | Tool | What It Does |
|-------|------|-------------|
| Build-time optimization | Astro `<Image>` component + sharp | Generates WebP/AVIF variants, responsive srcsets, calculates dimensions for CLS prevention |
| Lazy loading | Native `loading="lazy"` | Defers off-screen images (browser-native, zero JS) |
| Above-the-fold priority | `loading="eager"` + `fetchpriority="high"` | Hero images load immediately |
| Responsive sizing | `<Picture>` component | Multiple sizes for different viewports (mobile doesn't download desktop-sized images) |
| Format selection | Astro automatic | Serves AVIF where supported, WebP as fallback, original as final fallback |
| Art direction | `<Picture>` with `media` queries | Different crops for mobile vs desktop hero images |
| Static assets | `/public/` directory | Favicon, OG image, fonts -- served as-is with cache headers |

**Implementation example**:
```astro
---
import { Image } from 'astro:assets';
import heroImage from '../assets/hero.jpg';
---
<Image
  src={heroImage}
  alt="Wing Chun Leung - portrait"
  widths={[400, 800, 1200, 1600]}
  sizes="(max-width: 768px) 100vw, 50vw"
  format="avif"
  quality={80}
  loading="eager"
/>
```

### 3.5 Performance Budget

Target: **Lighthouse 95+ on all four categories** (Performance, Accessibility, Best Practices, SEO).

| Metric | Budget | Reasoning |
|--------|--------|-----------|
| **Largest Contentful Paint (LCP)** | < 1.5s | Google "Good" threshold is 2.5s; we target 1.5s for premium feel |
| **First Input Delay (FID)** | < 50ms | Near-instant interactivity (Astro's zero-JS helps enormously) |
| **Cumulative Layout Shift (CLS)** | < 0.05 | Astro's `<Image>` auto-calculates dimensions; font preloading prevents FOUT |
| **Time to First Byte (TTFB)** | < 100ms | Cloudflare edge serving static files achieves this globally |
| **Total JS bundle** | < 50 KB gzipped | GSAP core (23 KB) + Preact islands (~15 KB) + app logic (~10 KB) |
| **Total CSS bundle** | < 15 KB gzipped | Tailwind with purging |
| **Total page weight (home)** | < 500 KB | Excluding lazy-loaded images |
| **Accessibility score** | 100 | WCAG 2.1 AA compliance is mandatory per CLAUDE.md |

**Enforcement**: Run Lighthouse CI in the deployment pipeline. Fail the build if any metric exceeds the budget.

### 3.6 SEO Setup

| Feature | Implementation |
|---------|---------------|
| **Meta tags** | `BaseLayout.astro` accepts title, description, og:image props. Each page provides unique values. |
| **Open Graph** | Full og:title, og:description, og:image, og:url, og:type on every page. Twitter card meta included. |
| **Structured data** | JSON-LD `Person` schema on home page; `Article` schema on HCI assignment pages. |
| **Sitemap** | `@astrojs/sitemap` generates `/sitemap-index.xml` automatically at build time. |
| **robots.txt** | Static file in `/public/robots.txt` allowing all crawlers, pointing to sitemap. |
| **Canonical URLs** | Set via `<link rel="canonical">` on every page to prevent duplicate content. |
| **Semantic HTML** | `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<footer>` used correctly. Landmark roles for screen readers. |
| **Heading hierarchy** | Single `<h1>` per page, sequential heading levels (no skipping h2 to h4). |
| **Alt text** | Every `<Image>` requires a descriptive `alt` attribute. Enforced by Astro's Image component (warns on missing alt). |
| **Page speed** | Performance budget (section 3.5) directly impacts SEO -- Core Web Vitals are a ranking factor. |

---

## 4. HCI Grounding of Technical Decisions

### 4.1 How Tech Stack Affects User Experience

Every technical decision in this stack was made with a specific user experience outcome in mind:

| Technical Decision | UX Outcome | HCI Principle |
|-------------------|------------|---------------|
| Astro (zero JS default) | Pages load instantly, even on slow networks | H7 Visibility -- system responds immediately |
| Preact islands (not React) | 3 KB runtime vs 40 KB -- faster interactivity | H3 Minimalism -- no unnecessary resource consumption |
| Tailwind design tokens | Visual consistency across all pages | H1 Consistency -- predictable patterns reduce cognitive load |
| Inter Variable font | Single file, all weights, screen-optimized | H6 Recognition -- familiar, readable type reduces recall effort |
| Self-hosted fonts | No FOUT (flash of unstyled text), no layout shift | H7 Visibility -- no visual instability during load |
| GSAP with ScrollTrigger | Precise, 60fps animations that feel intentional | Visceral design (Norman) -- immediate positive emotional response |
| `prefers-reduced-motion` | Animations disabled for users who need it | H4 Freedom -- user controls their experience |
| Cloudflare edge hosting | <50ms latency globally | Behavioral design (Norman) -- the system works well everywhere |
| Markdown content | Content is accessible without JS | H5 Flexibility -- works in any browser condition |
| Semantic HTML landmarks | Screen readers can navigate by region | H5 Flexibility -- efficiency for assistive technology users |

### 4.2 Performance = Usability

Research findings on performance impact:

- **53% of mobile users abandon sites that take >3 seconds to load** (Google, 2024). Our budget targets 1.5s LCP.
- **A 100ms delay in response feels instant; 300ms feels sluggish; 1s breaks flow** (Nielsen, response time limits). Cloudflare's <50ms TTFB keeps us in the "instant" range.
- **Page speed is a Core Web Vital and Google ranking factor.** Better SEO = more discoverable = the site fulfills its purpose of showcasing Wing's work.
- **Every 1 KB of JavaScript costs ~1ms of parse time on a median mobile device.** Astro's zero-JS default means we start from the best possible baseline. The ~50 KB total JS budget adds only ~50ms of parse time.

The Astro + Cloudflare combination is specifically chosen to make performance a non-issue -- leaving the design and content to carry the user experience.

### 4.3 Accessibility Built Into the Stack

| Accessibility Feature | How It's Built In |
|----------------------|-------------------|
| **Semantic HTML** | Astro generates semantic HTML by default. No `<div>` soup. |
| **Skip navigation link** | `SkipLink.astro` component in BaseLayout, visible on focus. |
| **Focus management** | Tailwind's `focus-visible:` utilities for clear, consistent focus indicators. |
| **Color contrast** | Design tokens enforce 4.5:1 minimum contrast ratio (WCAG AA). Verified at token level, not per-component. |
| **Reduced motion** | GSAP global timeline check at initialization. CSS `@media (prefers-reduced-motion)` for CSS animations. |
| **Alt text enforcement** | Astro's `<Image>` component warns at build time if `alt` is missing. |
| **Keyboard navigation** | Tab order follows DOM order. Interactive Preact components include keyboard event handlers (Enter/Space). |
| **ARIA landmarks** | Semantic elements (`<header>`, `<nav>`, `<main>`, `<footer>`) automatically create landmark regions. |
| **Screen reader testing** | Axe-core automated tests in CI pipeline catch common ARIA violations. |
| **Color blindness** | Design tokens avoid relying on color alone to convey meaning (REQ from CLAUDE.md: 8% male color blindness). |
| **Touch targets** | Minimum 44x44px tap targets on mobile (Fitts's Law, per CLAUDE.md constraint). |

---

## 5. Implementation Initialization Commands

```bash
# Initialize Astro project in the existing directory
npm create astro@latest . -- --template minimal --typescript strict

# Add integrations
npx astro add tailwind
npx astro add preact
npx astro add sitemap
npx astro add cloudflare

# Add animation and tooling
npm install gsap
npm install -D @astrojs/check prettier prettier-plugin-astro eslint

# Add Inter Variable font (self-hosted)
mkdir -p public/fonts
# Download InterVariable.woff2 from https://rsms.me/inter/
```

**astro.config.mjs** (initial):
```javascript
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import preact from '@astrojs/preact';
import sitemap from '@astrojs/sitemap';
import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
  site: 'https://wingcleung.com',  // update with actual domain
  output: 'static',
  integrations: [tailwind(), preact(), sitemap()],
  adapter: cloudflare(),
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
  vite: {
    build: {
      cssMinify: true,
    },
  },
});
```

---

## 6. Summary of Decisions

| Decision | Choice | Primary Justification |
|----------|--------|----------------------|
| Framework | Astro 5.x + Preact islands | Zero-JS default, content-first, proven for portfolios |
| Styling | Tailwind CSS 4 + design tokens | Consistency enforcement, minimal bundle, rapid iteration |
| Typography | Inter Variable (self-hosted) | Screen-optimized, single file all weights, CJK support |
| Animation | GSAP 3 + ScrollTrigger | Timeline precision, Apple-quality scroll animation, 23 KB |
| Hosting | Cloudflare Pages | <50ms global latency, unlimited bandwidth, native Astro support |
| Content | Markdown/MDX in repo | Version-controlled, type-safe collections, no external deps |
| Build | Vite + TypeScript + ESLint | Fast builds, type safety, code consistency |
| Image optimization | Astro built-in (sharp) | WebP/AVIF, responsive srcsets, CLS prevention |

All decisions trace back to HCI principles documented in DDR-001 and the motion design specification, with performance, accessibility, and usability as non-negotiable requirements.

---

## Sources

- [SvelteKit vs. Next.js vs. Astro: Which Framework Wins in 2026?](https://www.gigson.co/blog/sveltekit-vs-next-js-vs-astro-which-framework-wins-in-2026)
- [Next.js vs Remix vs Astro vs SvelteKit in 2026](https://pockit.tools/blog/nextjs-vs-remix-vs-astro-vs-sveltekit-2026-comparison/)
- [Vercel vs Netlify vs Cloudflare Pages 2026](https://www.codebrand.us/blog/vercel-vs-netlify-vs-cloudflare-2026/)
- [Cloudflare Pages vs Netlify vs Vercel](https://bejamas.com/compare/cloudflare-pages-vs-netlify-vs-vercel)
- [Astro in 2026: Performance, Features and the Cloudflare Acquisition](https://sitepins.com/blog/astro-sitepins-2026)
- [Joffrey Spitzer Portfolio: Minimalist Astro + GSAP Build](https://tympanus.net/codrops/2026/02/18/joffrey-spitzer-portfolio-a-minimalist-astro-gsap-build-with-reveals-flip-transitions-and-subtle-motion/)
- [GSAP vs. Motion: Which Animation Library in 2026](https://satishkumar.xyz/blogs/gsap-vs-motion-guide-2026)
- [6 Best CSS Frameworks in 2026](https://www.valoremreply.com/resources/insights/blog/2025/april/6-best-css-frameworks-for-developers-in-2026/)
- [Best Google Fonts for 2026 (Typewolf)](https://www.typewolf.com/google-fonts)
- [2026 Website Fonts Guide](https://www.devstars.com/blog/2026-website-fonts-guide/)
- [Top 100 Most Creative Portfolio Websites of 2025 (Muzli)](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Astro Image Optimization Guide](https://docs.astro.build/en/guides/images/)
- [Accessible Astro Starter](https://github.com/incluud/accessible-astro-starter)
- [Astro Project Structure (Docs)](https://docs.astro.build/en/basics/project-structure/)
- [Best Portfolio Website Designs of 2026 (DesignRush)](https://www.designrush.com/best-designs/websites/portfolio)
- [Web Design Trends for 2026 (Elementor)](https://elementor.com/blog/web-design-trends-2026/)
