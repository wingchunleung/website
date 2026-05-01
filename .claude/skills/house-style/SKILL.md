---
name: house-style
description: >
  How to write code and design UI in this project so new work matches what is
  already there. Covers the "Ink & Signal" visual language (colors, type, spacing,
  surface rules, accent usage), Astro/CSS/JS conventions (frontmatter doc-comment
  pattern, section dividers, class naming, scoped style/script blocks), component
  recipes (cards with spotlight glow, pill buttons, section headers, work/exp/edu
  cards, contact cards), and motion choreography (page entrance, GSAP scroll
  reveals, hover lift, magnetic buttons, 3D tilt, iris exit). Read this before
  adding or editing anything under src/components/, src/pages/, or src/styles/.
  Companion to project-context (which covers HCI principles, workflow, deployment).
user-invocable: true
disable-model-invocation: false
---

# House Style — Code & Design Conventions

This is the implementation-level companion to `project-context`. Where
`project-context` defines *why* (HCI principles, design philosophy,
workflow), this skill defines *how* (the actual patterns the codebase
already uses, expressed as concrete recipes).

Read this whenever you are about to:
- Add a new page or component under `src/pages/` or `src/components/`
- Edit shared styles in `src/styles/`
- Add scroll/hover/entrance animation
- Match the look of an existing card, button, or section header

## Reference files

| File | Read when |
|---|---|
| `code-conventions.md` | Writing or editing any `.astro`, `.css`, or `<script>` block |
| `design-language.md` | Picking colors, type, spacing; building cards/buttons/sections |
| `motion-and-interaction.md` | Adding entrance, scroll, hover, or click animations |

## Ten rules that beat all others

1. **Tokens, not values.** Every color, font, spacing, radius, shadow, and
   duration comes from `src/styles/design-tokens.css` via `var(--...)`.
   No hex, no px, no ms hardcoded in component styles.

2. **8px grid.** Spacing is `var(--space-1)` (4px) through `var(--space-10)`
   (128px). Section gaps use `var(--section-gap)`. Touch targets ≥ 44px.

3. **Three fonts, three jobs.** Cormorant Garamond Light 300 for display
   headings (h1, h2, large numerals). Inter for body, h3, buttons.
   JetBrains Mono uppercase + `--tracking-wider` for labels, dates,
   metadata.

4. **Vermillion is the accent. Except on `/hci`, where celadon is.**
   Pages set this via `BaseLayout`'s `accent="celadon"` prop. Inside cards
   that carry an org color, use a `--brand` custom property and fall back
   to vermillion: `border-top: 3px solid var(--brand, var(--color-border))`.

5. **Light only.** No dark-mode rules. The user has rejected dark mode
   explicitly. Bright white (`#ffffff`) and warm white (`#faf9f7`) backgrounds.

6. **Reveal, don't pop.** New sections opt into scroll reveal with
   `data-animate="reveal"` and stagger via inline `style={"--delay: 0.1s"}`.
   The page-level `<script>` runs GSAP ScrollTrigger over them. Initial
   state in CSS: `opacity: 0; transform: translateY(30px or 40px);`.

7. **Doc-comment HCI principles in every file.** Every `.astro` file opens
   with a JSDoc block in its frontmatter that names which Nielsen / Gestalt
   / Norman principles the file enacts. See `code-conventions.md` for the
   exact pattern.

8. **Cards have personality.** The standard card is rounded-lg surface with
   a colored top/left stripe, lifts on hover (`translateY(-3 to -6px)` +
   soft shadow), and may carry a spotlight pseudo-element keyed off
   `--mx`/`--my` set by a `pointermove` handler. See
   `design-language.md` for the recipe.

9. **Reduced motion is first-class.** Every animation either zeroes out
   under `@media (prefers-reduced-motion: reduce)` (the global rule in
   `design-tokens.css` already does this) or hides itself entirely
   (intro overlay). Test it.

10. **Scope styles to the file, not globally.** Astro's per-file `<style>`
    block is the default. Reach for `<style is:global>` only when the
    rules need to apply across slotted children (intro overlay, accent
    color override).

## Quick token cheat sheet

```
COLOR
  --color-paper        #ffffff   page bg
  --color-paper-warm   #faf9f7   warm-white sections
  --color-stone        #f5f5f7   surface bg (cards, alternating sections)
  --color-ink          #1d1d1f   primary text, primary button bg
  --color-wash         #86868b   secondary text, mono labels
  --color-border       #e8e8ed   dividers, card borders
  --color-vermillion   #c73e1d   primary accent (everywhere except /hci)
  --color-celadon      #7d9e8c   /hci accent

TYPE  (clamp values for fluid sizing)
  --text-display       40-64px   hero h1
  --text-h1            32-48px   page hero
  --text-h2            28-36px   section heading
  --text-h3            20-24px   card title
  --text-body          16-18px   default
  --text-small         14px      card descriptions, footnotes
  --text-caption       12px      mono labels, dates

SPACING
  --space-1  4px    --space-2  8px    --space-3  16px
  --space-4  24px   --space-5  32px   --space-6  48px
  --space-8  96px   --space-10 128px
  --section-gap   96-128px (clamp)
  --gutter        24-64px  (clamp)

LAYOUT
  --max-content    720px   .content
  --max-container  1200px  .container

RADIUS
  --radius-sm  4px   --radius-md  8px
  --radius-lg  16px  --radius-xl  24px
  pill         100px (buttons, badges, tags)

MOTION
  --duration-fast    150ms
  --duration-normal  300ms
  --duration-slow    600ms
  --duration-reveal  800ms
  --ease-out         cubic-bezier(0.16, 1, 0.3, 1)
  --ease-in-out      cubic-bezier(0.65, 0, 0.35, 1)
  --ease-elastic     cubic-bezier(0.34, 1.56, 0.64, 1)  /* pop / snap-back */
```

## Page anatomy (used on /about, /projects, /contact, /hci)

```astro
<BaseLayout title="..." description="..." accent="vermillion|celadon">
  <Header slot="header" />

  <section class="page-hero">
    <div class="container content">
      <span class="section-label">SECTION TAG</span>
      <h1>Two-line<br />heading</h1>
      <p class="hero-sub">One-sentence subtitle, max ~520px.</p>
    </div>
  </section>

  <section class="some-section" aria-label="...">
    <div class="container">
      <div class="section-header" data-animate="reveal">
        <span class="section-label">CATEGORY</span>
        <h2>Section heading</h2>
      </div>
      <div class="some-grid" data-animate="reveal">
        ...cards mapped from a data array...
      </div>
    </div>
  </section>

  <Footer slot="footer" />
</BaseLayout>
```

Hero clears the fixed 72px header with
`padding-top: calc(72px + var(--section-gap))`.

## Where this style lives in the code

- Tokens: `src/styles/design-tokens.css`
- Reset / utilities: `src/styles/global.css`
- Layout shell: `src/layouts/BaseLayout.astro`
- Nav + scroll progress + frosted-glass-on-scroll: `src/components/Header.astro`
- Pre-footer CTA + utility footer: `src/components/Footer.astro`
- Particle network background: `src/components/HeroCanvas.astro`
- PIN gate: `src/components/LockScreen.astro`
- Brand-moment intro animation: `src/components/IntroOverlay.astro`

When in doubt, copy a pattern from one of these and adapt — don't invent.
