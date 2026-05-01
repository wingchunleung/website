# Code Conventions

How the existing `.astro`, `.css`, and `<script>` blocks are written. New
code should match.

## Astro file template

Every page and component opens with this structure:

```astro
---
/**
 * Component / Page Name — One-line role
 *
 * HCI Principles:
 * - Visceral / Behavioral / Reflective: ...
 * - H1 (Consistency): ...
 * - H6 (Recognition): ...
 * - Gestalt Proximity / Similarity: ...
 *
 * (Optional) Structure:
 * 1. Hero
 * 2. Section A
 * 3. Section B
 */

import BaseLayout from '../layouts/BaseLayout.astro';
import Header from '../components/Header.astro';
import Footer from '../components/Footer.astro';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const data = [
  { ... },
];
---

<BaseLayout title="..." description="...">
  <Header slot="header" />
  ...
  <Footer slot="footer" />
</BaseLayout>

<style>
  ...
</style>

<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);
  ...
</script>
```

Order is fixed: doc-comment → imports → `base` const → data arrays →
template → `<style>` → `<script>`. Don't reorder.

## Doc-comment HCI annotations

Every file declares which principles it enacts. The annotations appear
in JSDoc inside the frontmatter and look like this in production code:

```
/**
 * About Page — Visual, premium, Apple/SaaS-quality
 * HCI: Recognition > Recall — logos, colors, visual cards instead of text walls
 * HCI: Visceral — immediate visual impression of professional credibility
 * HCI: Gestalt Proximity — grouped cards, clear visual sections
 */
```

Use the principle code (`H1`, `H6`, `H8`, etc.) when you cite Nielsen's
heuristics. Spell out Norman's three levels (Visceral / Behavioral /
Reflective). Spell out Gestalt principles by name (Proximity, Similarity,
Continuation, Closure, Common Fate, Symmetry, Figure-Ground).

## CSS file structure

```css
/* ==========================================================================
   File Name — Role
   HCI Principle: Hx (Name) — one-line tie to the file's purpose
   ========================================================================== */

/* ── Subsection (single en-dash dividers) ──────────────────────────── */

.foo { ... }

/* ══════════════════════════════════════════════════════════════════════
   MAJOR SECTION (double-bar dividers, ALL CAPS heading)
   ══════════════════════════════════════════════════════════════════════ */

.bar { ... }
```

Two divider styles — single `─` for subsections, double `═` for major
sections. Heading lines stay short enough to fit in 78 columns.

## Per-page `<style>` blocks

The default. Astro scopes them to the file, so class names like
`.work-card`, `.exp-card`, `.project-card` can collide across pages
without conflict.

Inside a `<style>` block:

```css
.page-hero {
  padding-top: calc(72px + var(--section-gap));
  padding-bottom: var(--space-6);
  position: relative;
  overflow: hidden;
}

.page-hero h1 {
  font-size: clamp(2.5rem, 6vw, 4.5rem);
  margin-top: var(--space-3);
  margin-bottom: var(--space-3);
  opacity: 0; transform: translateY(30px);
  animation: pageReveal 0.8s var(--ease-out) 0.4s forwards;
  background: linear-gradient(135deg, var(--color-ink) 0%, var(--color-vermillion) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

@keyframes pageReveal { to { opacity: 1; transform: translateY(0); } }
```

Page-hero h1 uses gradient text (ink → accent). On `/hci` the gradient
ends in celadon, not vermillion.

## When to reach for `<style is:global>`

Only when:
- The rules apply to elements rendered by a slotted child (e.g.,
  `IntroOverlay` styles the hero classes that live in `index.astro`).
- The selector needs to break out of scoping for a documented reason.

`IntroOverlay.astro` and the celadon override in `BaseLayout.astro` are
the only places this is used. Add a comment explaining why.

## Class naming

- `kebab-case`. Always.
- Component-prefix per section: `.work-card`, `.work-title`, `.work-metric`,
  `.work-tags` — BEM-lite. Don't use `__` or `--` separators in class names
  themselves; reserve `--` for CSS custom properties.
- `.section-label` and `.section-header.centered` are global (defined in
  `global.css`) — reuse them, don't redefine.
- `.container` (1200px max + responsive gutter) and `.content` (720px max)
  are the two layout utilities. Compose: `<div class="container content">`.
- `.btn-primary` and `.btn-outline` are page-local pill buttons; their
  styles repeat across pages because they're scoped. That's fine — keep
  them in sync visually.
- `.visible` is the post-reveal modifier appended by the IntersectionObserver
  fallback in `global.css`. GSAP doesn't add it (GSAP sets inline styles
  directly), so don't depend on `.visible` if you're using GSAP.

## Script blocks

The page-level `<script>` runs once at page load. It imports GSAP and
ScrollTrigger from npm; Astro bundles them.

Standard scroll-reveal block (paste this verbatim into any new page):

```typescript
<script>
  import gsap from 'gsap';
  import { ScrollTrigger } from 'gsap/ScrollTrigger';
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('[data-animate="reveal"]').forEach((el) => {
    const element = el as HTMLElement;
    const delay = parseFloat(element.style.getPropertyValue('--delay') || '0');
    gsap.fromTo(element,
      { opacity: 0, y: 40 },
      {
        opacity: 1, y: 0, duration: 0.8, delay, ease: 'power3.out',
        scrollTrigger: { trigger: element, start: 'top 85%', toggleActions: 'play none none none' },
      }
    );
  });
</script>
```

After that, add page-specific behaviors (counters, spotlight tracking,
3D tilt, etc.). See `motion-and-interaction.md` for the recipes.

## TypeScript style in scripts

- Cast DOM nodes inline: `(el as HTMLElement)`, `(card as HTMLElement)`.
- Type event handlers explicitly when needed: `(e: PointerEvent) => { ... }`.
- Optional chaining for query results: `card?.classList.add(...)`.
- Use `getBoundingClientRect()` for cursor-relative coordinates.

## Event-handler conventions

- Hover/cursor effects use `pointermove` + `pointerleave`, not `mousemove`.
  Pointer events handle touch, pen, mouse uniformly.
- Scroll handlers run on `window` with `{ passive: true }`.
- Resize handlers debounce by recreating particles inside the resize
  callback (see `HeroCanvas.astro`).
- Tab visibility: pause `requestAnimationFrame` loops when
  `document.hidden`.

## State persistence

`sessionStorage` gates one-time experiences across page navigations:

- `intro-seen` — set by `IntroOverlay`, prevents replaying the
  brand-moment animation
- `site-unlocked` — set by `LockScreen`, skips the PIN gate

Both are session-scoped. Use the same naming pattern (`kebab-case`,
descriptive) for any new gates.

## Accessibility patterns

- Every interactive element has either visible text or `aria-label`.
- SVG icons inside buttons / links carry `aria-hidden="true"`; their
  parent provides the label.
- `aria-expanded`, `aria-controls`, `aria-current="page"` on nav
  primitives — see `Header.astro`.
- `role="dialog" aria-modal="true"` on full-screen overlays.
- Skip-to-content link is in `BaseLayout`.
- Sections take `aria-label` when their `h2` is decorative or absent.

## Image rules

- `loading="lazy"` for below-the-fold images.
- Width and height attributes set explicitly (avoids CLS).
- Logo strip uses 28-32px tall raster/SVG marks at 60% opacity, going to
  100% on hover.
- Photographic content (location cards) uses `aspect-ratio: 16 / 10` and
  `object-fit: cover`.

## Astro `BASE_URL` handling

Every page that links internally derives its base from
`import.meta.env.BASE_URL`:

```typescript
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
// then use as: href={`${base}/about`}, src={`${base}/logos/foo.png`}
```

The trailing-slash strip is intentional — `astro.config.mjs` sets
`base: '/website'` and we don't want `//about`.

## Light-mode-only marker

When you remove or replace dark-mode CSS in an existing file, leave a
short comment so future agents don't re-add it:

```css
/* dark mode removed — light only */
```

Several files carry this marker (e.g., `Header.astro`, `404.astro`).

## What never to do

- Don't write hex colors, `px`/`rem` literals, or millisecond literals
  in component styles. Use tokens.
- Don't add `@media (prefers-color-scheme: dark)`. The user has rejected
  dark mode.
- Don't remove the HCI doc-comment from a file. Update it instead.
- Don't reach into shared files (BaseLayout, design-tokens.css,
  Header.astro, Footer.astro) during a single-page task. CLAUDE.md
  Deployment section explains why.
- Don't replace per-file scoped `<style>` with global stylesheets. The
  scoping is what lets cards on different pages share class names.
- Don't auto-deploy. `npx gh-pages -d dist` is a manual gated action.
