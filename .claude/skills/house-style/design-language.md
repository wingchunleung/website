# Design Language — Ink & Signal

The visual language is "Ink & Signal": bright Apple-clean foundation with
two cultural accents (vermillion seal-red, celadon jade-green). All
pages share the same grid, type, and surface rules; the only thing that
changes between pages is the accent.

## Palette in use

| Role | Token | When to use |
|---|---|---|
| Page background | `--color-paper` (`#ffffff`) | Default body bg |
| Warm-white sections | `--color-paper-warm` (`#faf9f7`) | Used by intro overlay only |
| Surface | `--color-stone` (`#f5f5f7`) | Card backgrounds, alternating section bands, edu-section bg |
| Primary text | `--color-ink` (`#1d1d1f`) | h1-h3, body, primary button bg |
| Secondary text | `--color-wash` (`#86868b`) | Descriptions, mono labels, captions |
| Borders | `--color-border` (`#e8e8ed`) | 1px / 1.5px hairlines |
| Primary accent | `--color-vermillion` (`#c73e1d`) | Underlines, focus rings, hover bg, metric numbers, gradient ends |
| Course accent | `--color-celadon` (`#7d9e8c`) | Only on `/hci`. Set via `BaseLayout accent="celadon"` |

### Section banding

Pages alternate background between `--color-paper` and `--color-stone`
to give visual rhythm without dividers. Examples:

- `about.astro`: hero(white) → locations(white) → languages(white) →
  experience(white) → education(stone) → mentoring(white) →
  leadership(stone) → speaking(white)
- `index.astro`: hero(white) → intro(white) → logos(white) →
  highlights(stone) → featured-work(white)

A soft top fade smooths the seam:

```css
.highlights::before {
  content: '';
  position: absolute;
  top: -60px; left: 0; right: 0; height: 60px;
  background: linear-gradient(to bottom, var(--color-bg), var(--color-stone));
  pointer-events: none;
}
```

### Org / brand colors on cards

When a card represents a specific organization, pass its brand color via
inline style and consume it through a `--brand` custom property:

```astro
<article class="exp-card" style={`--delay: ${i * 0.1}s; --brand: ${exp.color}`}>
```

```css
.exp-card {
  border-top: 3px solid var(--brand, var(--color-border));
}
.exp-org {
  color: var(--brand, var(--color-text));
}
```

The known org colors:

```
HKUST                #003366  (navy)
Carta                #1a1a1a  (near-black)
Costco               #e31837  (red)
Camelotta            #2d5a3d  (forest)
University of WA     #4b2e83  (purple)
Personal projects    #86868b  (wash grey)
```

## Typography

```
Cormorant Garamond  Light 300       hero h1, page h1, h2, large numerals,
                                    decorative big text (org names in nav,
                                    contact-value)
Inter               Regular 400     body, descriptions
                    Medium 500      buttons, links, taglines
                    Semibold 600    h3 (card titles), org labels
JetBrains Mono      Regular 400     section labels, dates, metric labels,
                                    tags, periods, captions
```

Display headings are always Light 300, line-height 1.02-1.1, letter-
spacing -0.02 to -0.04em. They're the only element that uses the serif.

Mono labels are always uppercase + `letter-spacing: var(--tracking-wider)`
(0.1em) + color `--color-wash`. They sit above an h2/h3 like a kicker.

### Gradient text on hero h1

Page heroes apply a linear-gradient text-fill to make the heading
shimmer:

```css
.page-hero h1 {
  background: linear-gradient(135deg, var(--color-ink) 0%, var(--color-vermillion) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
```

On `/hci`, swap the gradient end to `var(--color-celadon)`.

The homepage `.intro-name` extends this with an animated 3-stop gradient
that drifts back and forth (`@keyframes nameGradientShift`), giving it a
slow shimmer.

## Spacing

8px grid. Inside sections:

- Element gap: `--space-2` (8px) or `--space-3` (16px)
- Card padding: `--space-4` (24px) or `--space-5` (32px)
- Group gap: `--space-4` to `--space-6`
- Card grid gap: `--space-3` (16px) to `--space-4` (24px)

Between sections: `var(--section-gap)` (96-128px clamp). Page heroes
clear the fixed header with `padding-top: calc(72px + var(--section-gap))`.

Body text is capped at 65ch (set globally on `<p>`) or by `.content`
(720px). Don't let prose run past these.

## Surfaces (radii + shadows)

Three radii in active use:

- `--radius-sm` (4px) — tags, status pills, code spans
- `--radius-lg` (16px) — cards, buttons (the default)
- `100px` — pill buttons, badges, metric tags

Shadow ladder:

```
Resting (no shadow):       cards at rest
Hovered card:              0 16px 40px rgba(0, 0, 0, 0.08)
Hovered button:            0 8px 24px rgba(199, 62, 29, 0.2)  /* tinted */
Footer CTA hover:          0 12px 32px rgba(199, 62, 29, 0.2)
```

Tokenized shadows (`--shadow-sm`, `--shadow-md`, `--shadow-lg`) exist
but most cards use raw rgba for the lift shadow because they tune the
opacity per element.

## Section header pattern

The label-then-heading pair is used by every page:

```astro
<div class="section-header" data-animate="reveal">
  <span class="section-label">CATEGORY</span>
  <h2>Section heading</h2>
</div>
```

```css
.section-header { margin-bottom: var(--space-6); }
.section-header.centered { text-align: center; }
.section-header h2 { margin-top: var(--space-2); }
```

`.section-label` is defined globally in `global.css`:

```css
.section-label {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  font-weight: var(--weight-medium);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-wash);
}
```

Don't restyle it locally.

## Card recipes

### 1. Standard work / project / experience card

```astro
<article class="some-card" data-animate="reveal" style={`--delay: ${i * 0.1}s; --brand: ${item.color}`}>
  <div class="some-card-top">
    <span class="some-org">{item.org}</span>
    <span class="some-period">{item.period}</span>
  </div>
  <h3 class="some-title">{item.title}</h3>
  <p class="some-desc">{item.description}</p>
  <div class="some-tags">
    {item.tags.map((t) => <span class="tag">{t}</span>)}
  </div>
</article>
```

```css
.some-card {
  position: relative;
  overflow: hidden;
  background: var(--color-stone);     /* or var(--color-bg) on stone-background sections */
  border-radius: var(--radius-lg);
  padding: var(--space-5);
  border-top: 3px solid var(--brand, var(--color-border));
  /* OR border-left: 3px solid ... when the card sits in a vertical list */
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.some-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}
```

Border-top stripe is the standard. Border-left is used when the card is
in a single-column vertical list (assignments on `/hci`,
mentoring/leadership/speaking on `/about`).

### 2. Card with spotlight glow

Add a `::before` pseudo-element keyed off cursor-tracking custom
properties:

```css
.some-card::before {
  content: '';
  position: absolute;
  inset: 0;
  border-radius: inherit;
  background: radial-gradient(
    400px circle at var(--mx, 50%) var(--my, 50%),
    rgba(199, 62, 29, 0.06),     /* or 0.05 / 0.08 — tune per density */
    transparent 40%
  );
  opacity: 0;
  transition: opacity var(--duration-normal) var(--ease-out);
  pointer-events: none;
}

.some-card:hover::before { opacity: 1; }
```

Wire up the cursor tracking in the page script:

```typescript
document.querySelectorAll('.some-card').forEach((card) => {
  card.addEventListener('pointermove', (e: PointerEvent) => {
    const rect = (card as HTMLElement).getBoundingClientRect();
    (card as HTMLElement).style.setProperty('--mx', `${e.clientX - rect.left}px`);
    (card as HTMLElement).style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});
```

Used on `.work-card`, `.exp-card`, `.project-card`, `.contact-card`.

### 3. Card with shimmer sweep

A diagonal highlight that sweeps across on hover:

```css
.some-card::after {
  content: '';
  position: absolute;
  top: 0; left: -100%; width: 50%; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
  pointer-events: none;
}

.some-card:hover::after {
  animation: shimmer 0.7s ease-out forwards;
}

@keyframes shimmer { to { left: 150%; } }
```

Used on `.project-card`. Combine with spotlight by stacking `::before`
(spotlight) and `::after` (shimmer).

### 4. Featured / hero card

Larger, with a subtle animated background gradient and a "Featured" pill:

```css
.featured-card {
  position: relative;
  overflow: hidden;
  background: var(--color-surface);
  border-radius: var(--radius-lg);
  padding: var(--space-6);
  border-left: 4px solid var(--brand, var(--color-vermillion));
}

.featured-card::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(135deg, transparent 30%, rgba(199, 62, 29, 0.03) 50%, transparent 70%);
  background-size: 200% 200%;
  animation: featuredShimmer 6s ease-in-out infinite;
  pointer-events: none;
}

@keyframes featuredShimmer {
  0%, 100% { background-position: 0% 0%; }
  50% { background-position: 100% 100%; }
}
```

## Buttons

### Primary pill (dark fill)

```css
.btn-primary {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--font-body);
  font-size: var(--text-small);
  font-weight: var(--weight-medium);
  padding: 14px 32px;
  background: var(--color-ink);
  color: var(--color-bg);
  border-radius: 100px;
  text-decoration: none;
  transition: background var(--duration-normal) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
  min-height: 48px;
}

.btn-primary:hover {
  background: var(--color-vermillion);
  transform: translateY(-1px);
}

.btn-primary::after { display: none; }   /* suppress the global text-link underline */
```

### Outline pill

```css
.btn-outline {
  /* same shape as .btn-primary */
  padding: 14px 32px;
  border: 1.5px solid var(--color-border);
  color: var(--color-text);
  background: transparent;
  border-radius: 100px;
  min-height: 48px;
  transition: border-color var(--duration-normal) var(--ease-out),
              color var(--duration-normal) var(--ease-out),
              transform var(--duration-fast) var(--ease-out);
}

.btn-outline:hover {
  border-color: var(--color-ink);
  transform: translateY(-1px);
}
```

### Hero CTA (with arrow icon)

```astro
<a href="..." class="btn-hero">
  <span>Explore</span>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M7 1v12M1 7l6 6 6-6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
</a>
```

The SVG arrow shifts on hover (translate or rotate) — see
`motion-and-interaction.md`.

### Footer CTA pill (large)

Like `.btn-primary` but bigger: `padding: 16px 36px; min-height: 52px;
gap: 10px;`. Hover adds a vermillion-tinted shadow and translates the
arrow rightward.

## Tags / chips / badges

### Generic tag (mono pill)

```css
.tag {
  font-family: var(--font-mono);
  font-size: 0.65rem;
  letter-spacing: var(--tracking-wide);
  color: var(--color-wash);
  padding: 4px 10px;
  border: 1px solid var(--color-border);
  border-radius: 100px;
}
```

Sizes drift slightly between contexts (0.6875rem on `.work-tag`, 0.65rem
on `.tag`/`.exp-metric`). Both are acceptable.

### Org badge (bordered, brand-colored)

```css
.work-org-badge {
  font-family: var(--font-body);
  font-size: var(--text-caption);
  font-weight: var(--weight-semibold);
  letter-spacing: 0.02em;
  color: var(--org-color, var(--color-text));
  padding: 6px 14px;
  border: 1.5px solid var(--org-color, var(--color-border));
  border-radius: 100px;
  white-space: nowrap;
}
```

### Status pill (success / pending)

```css
.assignment-status {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  padding: var(--space-1) var(--space-2);
  border-radius: var(--radius-sm);
}

.assignment-status.upcoming {
  color: var(--color-celadon);
  background: rgba(125, 158, 140, 0.1);
}

.assignment-status.published {
  color: var(--color-vermillion);
  background: rgba(199, 62, 29, 0.1);
}
```

## Metric display

Large number + small mono label:

```astro
<div class="work-metric-group">
  <span class="work-metric">~70%</span>
  <span class="work-metric-label">efficiency gain</span>
</div>
```

```css
.work-metric {
  font-family: var(--font-display);
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  font-weight: var(--weight-light);
  color: var(--color-vermillion);
  line-height: 1;
  display: block;
}

.work-metric-label {
  font-family: var(--font-mono);
  font-size: var(--text-caption);
  letter-spacing: var(--tracking-wider);
  text-transform: uppercase;
  color: var(--color-wash);
}
```

The number gets animated via GSAP from 0 to its target on scroll. See
`motion-and-interaction.md` § "Metric counters."

## Grids

Standard 1 → 2 → 3 column responsive grid:

```css
.some-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: var(--space-4);
}

@media (min-width: 640px) {
  .some-grid { grid-template-columns: repeat(2, 1fr); }
}

@media (min-width: 1024px) {
  .some-grid { grid-template-columns: repeat(3, 1fr); }
}
```

Some grids jump to 3 columns at 768px instead of 1024px (`.work-grid`,
`.edu-grid`). Pick based on card density — 3 wide work-cards need more
room than 3 narrow tag-style cards.

## Page hero pattern

```astro
<section class="page-hero">
  <div class="container">
    <span class="section-label">PAGE TAG</span>
    <h1>Two-line<br />heading</h1>
    <p class="hero-sub">Subtitle, max-width ~520px.</p>
  </div>
</section>
```

```css
.page-hero {
  padding-top: calc(72px + var(--section-gap));
  padding-bottom: var(--space-6);
  position: relative;
  overflow: hidden;
}

.page-hero::before {
  content: '';
  position: absolute;
  top: -50%; right: -20%;
  width: 60%; height: 150%;
  background: radial-gradient(circle, rgba(199, 62, 29, 0.04) 0%, transparent 60%);
  pointer-events: none;
}

.page-hero .section-label {
  opacity: 0; transform: translateY(20px);
  animation: pageReveal 0.8s var(--ease-out) 0.2s forwards;
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

.hero-sub {
  font-size: clamp(1rem, 1.8vw, 1.2rem);
  color: var(--color-wash);
  max-width: 520px;
  opacity: 0; transform: translateY(20px);
  animation: pageReveal 0.8s var(--ease-out) 0.6s forwards;
}

@keyframes pageReveal { to { opacity: 1; transform: translateY(0); } }
```

The 0.2 / 0.4 / 0.6s stagger is the canonical entrance cadence. Don't
flatten it.

## Header / nav specifics

The fixed header lives in `Header.astro` and applies to every page. Two
states:

- Top of page: transparent background
- Scrolled (>50px): frosted glass via `backdrop-filter: blur(20px)
  saturate(180%)`, soft border-bottom, progressive shadow that deepens
  with scroll distance, height shrinks 72px → 56px

A 2px scroll-progress bar at the top spans `--color-vermillion` to
`--color-celadon` and tracks reading position. It's purely decorative.

Mobile menu (<768px): hamburger toggles a fixed full-screen overlay with
solid white background — `!important` is intentional here to override
the frosted-glass ancestor.

## Footer specifics

Two-part footer in `Footer.astro`:

1. Pre-footer CTA — large "Let's connect" heading + dark pill button.
2. Utility row — name + tagline (left), email/LinkedIn/GitHub (center),
   back-to-top button + copyright (right).

The CTA button is a larger variant of `.btn-primary`. The "back to top"
is a 40px circle with the up-arrow SVG. The links use the same brush-
underline as nav links.

## Hero canvas (homepage + 404)

`HeroCanvas.astro` is a four-layer particle network background. Don't
edit unless you mean to:

1. CSS gradient (animated, low opacity)
2. SVG flowing curves (5 dashed paths drifting)
3. Canvas particle network (~90 nodes, connected by curved lines, with
   data-pulse dots traveling along connections)
4. Radial overlay (white falloff for text legibility)

It's tuned for performance: pre-rendered glow sprites, mobile reduces to
~45 particles, pauses when tab hidden, respects
`prefers-reduced-motion`.

## Intro overlay (homepage only)

`IntroOverlay.astro` is the canonical brand-moment animation. CLAUDE.md
documents this as load-bearing — read the "DO NOT BREAK" section before
touching it. Three phases: wow/eyes particle bombardment → "see who
this is" tease → 👋 wave + "Welcome to my site" → iris-close exit.

Gated by `sessionStorage['intro-seen']` so it plays once per session.

## Contact card pattern

Single-column flex stack of large rounded-lg link-cards:

```astro
<a href={href} class="contact-card" target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
  <span class="contact-label">Label</span>
  <span class="contact-value">value</span>
  <span class="contact-cta">
    Connect
    <svg>...</svg>
  </span>
</a>
```

Cards lift -4px on hover, border swaps to vermillion, spotlight glow
appears. The CTA arrow translates `(3px, -3px)` (up-right diagonal)
on hover.

## Selection styling

Globally:

```css
::selection {
  background: rgba(199, 62, 29, 0.15);
  color: var(--color-ink);
}
```

Don't override per-component.

## Scrollbar styling

Globally:

```css
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb { background: var(--color-border); border-radius: 3px; }
::-webkit-scrollbar-thumb:hover { background: var(--color-wash); }
```

A 6px subtle scrollbar. Don't hide it; users still want to know how
much page is left.

## Cultural / brand cues

The "Ink & Signal" name connects to traditional Chinese ink painting:
ink (墨), aged rice paper (宣紙), carved stone inkwell (硯台), vermillion
seal (印章), celadon jade (青瓷). The vermillion accent is the seal
mark. Don't dilute this vocabulary by adding unrelated palette
variations.
