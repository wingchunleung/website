# Motion & Interaction

Animation choreography across the site. New motion should fit one of
these patterns; if it doesn't, ask before inventing a new one.

## The cadence

Across the site, three timing values cover ~95% of cases:

```
Micro-interaction (hover, focus):     300ms  var(--duration-normal)
Reveal (sections, cards, buttons):    800ms  var(--duration-reveal)
Page-entrance stagger between blocks: 0.2s   between siblings
```

Easing:

```
General-purpose:    var(--ease-out)      cubic-bezier(0.16, 1, 0.3, 1)   // power3.out feel
Symmetric in/out:   var(--ease-in-out)   cubic-bezier(0.65, 0, 0.35, 1)
Pop / snap-back:    var(--ease-elastic)  cubic-bezier(0.34, 1.56, 0.64, 1)
```

Default to `var(--ease-out)`. Reach for elastic only when something
should feel springy (button pop, intro wave hand, hand-raise).

## Reduced motion

The global rule in `design-tokens.css` already zeros out durations and
caps animation iterations:

```css
@media (prefers-reduced-motion: reduce) {
  :root { --duration-fast: 0ms; --duration-normal: 0ms; --duration-slow: 0ms; --duration-reveal: 0ms; }
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

For per-component opt-outs (e.g., the intro overlay disappears entirely
under reduced motion), add a local `@media (prefers-reduced-motion:
reduce)` that hides or simplifies the effect. Don't disable global
reduced-motion respect.

## Page entrance — page-hero stagger

The label-then-h1-then-subtitle stagger is the canonical entrance:

```css
.page-hero .section-label { animation: pageReveal 0.8s var(--ease-out) 0.2s forwards; }
.page-hero h1            { animation: pageReveal 0.8s var(--ease-out) 0.4s forwards; }
.hero-sub                { animation: pageReveal 0.8s var(--ease-out) 0.6s forwards; }

@keyframes pageReveal { to { opacity: 1; transform: translateY(0); } }
```

Initial state is set on each element: `opacity: 0; transform: translateY(20-30px);`.

Keep the 0.2 / 0.4 / 0.6s rhythm. If you add a fourth element, use 0.8s
— don't compress the others.

## Scroll reveal — `[data-animate="reveal"]`

Mark any element you want to reveal on scroll:

```astro
<div class="something" data-animate="reveal">...</div>
<!-- or with a stagger delay -->
<article class="card" data-animate="reveal" style={`--delay: ${i * 0.1}s`}>...</article>
```

CSS sets the initial state (and is the source of truth for the IntersectionObserver fallback in `global.css`):

```css
.something { opacity: 0; transform: translateY(30px); }
.something.visible {
  opacity: 1; transform: translateY(0);
  transition: opacity 0.8s var(--ease-out), transform 0.8s var(--ease-out);
}

/* Cards with --delay use --duration-reveal and apply the delay */
.card.visible {
  opacity: 1; transform: translateY(0);
  transition: opacity var(--duration-reveal) var(--ease-out) var(--delay, 0s),
              transform var(--duration-reveal) var(--ease-out) var(--delay, 0s);
}
```

The page script triggers this with GSAP ScrollTrigger:

```typescript
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
```

GSAP applies inline styles directly — it does not add the `.visible`
class. The CSS `.visible` rules are the fallback path used by the
IntersectionObserver in `global.css` (and by the
CSS-scroll-driven-animation `@supports` block). Both paths produce the
same final visual state.

Standard reveal distance: 30-40px translate. Standard duration: 0.8s.
Don't tweak per-element.

## Hover lift — cards

Default card hover:

```css
.card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out);
}

.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.08);
}
```

Lift values per density:

- Heavy / featured cards: `-6px`
- Standard cards: `-3px` to `-4px`
- Tight / list-style cards: `-2px` to `-3px`

Always pair the lift with a shadow. A lift without a shadow looks
weightless.

## Hover lift — buttons

```css
.btn:hover {
  transform: translateY(-1px);   /* or -2px for hero CTAs */
  background: var(--color-vermillion);
}
```

The `.btn-hero` adds a tinted shadow:

```css
.btn-hero:hover {
  background: var(--color-vermillion);
  transform: translateY(-2px);
  box-shadow: 0 8px 24px rgba(199, 62, 29, 0.2);
}
```

## Hover underline — links

The "ink-brush underline" grows left to right on hover. Defined globally
on `.text-link` and replicated locally on nav/footer links:

```css
a::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background: var(--color-vermillion);
  transition: width var(--duration-normal) ease-out;
}

a:hover::after { width: 100%; }
```

Buttons explicitly suppress this with `.btn-*::after { display: none; }`.

## Spotlight glow — pointer tracking

Cards that opt into spotlight set their `::before` background based on
two custom properties updated by a `pointermove` handler. See
`design-language.md` § "Card with spotlight glow" for the CSS. The
script:

```typescript
document.querySelectorAll('.work-card').forEach((card) => {
  card.addEventListener('pointermove', (e: PointerEvent) => {
    const rect = (card as HTMLElement).getBoundingClientRect();
    (card as HTMLElement).style.setProperty('--mx', `${e.clientX - rect.left}px`);
    (card as HTMLElement).style.setProperty('--my', `${e.clientY - rect.top}px`);
  });
});
```

Glow radius drifts by card size: 300-400px on dense card grids, 500px
on the larger project cards. Glow color is always the vermillion alpha
(0.05-0.08).

## Spotlight dim — sibling cards

When the user hovers one card in a grid, the other cards dim:

```css
.work-grid.hovering .work-card:not(:hover) {
  opacity: 0.55;
  filter: saturate(0.7);
}

.work-card {
  transition: transform var(--duration-normal) var(--ease-out),
              box-shadow var(--duration-normal) var(--ease-out),
              opacity 0.4s var(--ease-out),
              filter 0.4s var(--ease-out);
}
```

```typescript
const workGrid = document.querySelector('.work-grid');
if (workGrid) {
  workGrid.addEventListener('mouseenter', () => workGrid.classList.add('hovering'));
  workGrid.addEventListener('mouseleave', () => workGrid.classList.remove('hovering'));
}
```

Used on the homepage `.work-grid`. Useful when you want to draw focus
without modal interaction.

## 3D tilt — pointer-tracking rotation (desktop)

Only on desktop (`window.innerWidth >= 768`). Cards get a perspective
rotation based on cursor position:

```css
.work-card:hover {
  transform: translateY(-6px) perspective(800px)
             rotateY(var(--tilt-x, 0deg)) rotateX(var(--tilt-y, 0deg));
}
```

```typescript
if (window.innerWidth >= 768) {
  document.querySelectorAll('.work-card').forEach((card) => {
    card.addEventListener('pointermove', (e: PointerEvent) => {
      const el = card as HTMLElement;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      el.style.setProperty('--tilt-x', `${x * 6}deg`);
      el.style.setProperty('--tilt-y', `${-y * 6}deg`);
    });
    card.addEventListener('pointerleave', () => {
      const el = card as HTMLElement;
      el.style.setProperty('--tilt-x', '0deg');
      el.style.setProperty('--tilt-y', '0deg');
    });
  });
}
```

`6deg` is the maximum tilt; gentle is the goal. More than that and the
card looks broken.

## Magnetic buttons (desktop)

CTAs that follow the cursor a small amount before snapping back:

```typescript
document.querySelectorAll('.btn-hero, .btn-primary').forEach((btn) => {
  const el = btn as HTMLElement;
  el.addEventListener('mousemove', (e: MouseEvent) => {
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  });
  el.addEventListener('mouseleave', () => {
    el.style.transform = '';
    el.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
    setTimeout(() => { el.style.transition = ''; }, 500);
  });
});
```

`0.12` is the follow-strength multiplier — strong enough to feel alive,
weak enough not to look broken on fast cursor movement. The
elastic-ease-back on leave is the snap home.

## Hero parallax (homepage)

The hero content fades and translates upward as the user scrolls past:

```typescript
const heroContent = document.querySelector('.hero-content') as HTMLElement;
if (heroContent) {
  gsap.to(heroContent, {
    opacity: 0,
    y: -60,
    ease: 'none',
    scrollTrigger: {
      trigger: '.hero',
      start: 'top top',
      end: 'bottom top',
      scrub: 0.3,
    },
  });
}
```

`scrub: 0.3` smooths the parallax so it lags scroll velocity slightly,
giving it a heavier feel.

## Metric counters (homepage + about)

Numbers tick up from 0 to their target when scrolled into view:

```typescript
document.querySelectorAll('.work-metric').forEach((el) => {
  const raw = (el as HTMLElement).textContent?.trim() || '';
  const match = raw.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return;
  const prefix = match[1];                                    // "~" or "$" prefix
  const target = parseFloat(match[2].replace(/,/g, ''));
  const suffix = match[3];                                    // "%", "/month", etc.
  const hasDecimal = match[2].includes('.');
  const decimals = hasDecimal ? match[2].split('.')[1].length : 0;

  const counter = { val: 0 };
  ScrollTrigger.create({
    trigger: el as HTMLElement,
    start: 'top 85%',
    once: true,
    onEnter: () => {
      gsap.to(counter, {
        val: target,
        duration: 2,
        ease: 'power2.out',
        onUpdate: () => {
          const formatted = hasDecimal ? counter.val.toFixed(decimals) : Math.round(counter.val).toString();
          (el as HTMLElement).textContent = `${prefix}${formatted}${suffix}`;
        },
      });
    },
  });
});
```

Duration 2s, `power2.out` easing — the tick-up should feel deliberate,
not frenetic. `once: true` prevents re-running on scroll back.

## Header progressive shadow + scroll progress bar

In `Header.astro`:

```typescript
const onScroll = () => {
  const y = window.scrollY;
  header.classList.toggle('scrolled', y > 50);
  // Progressive shadow depth
  if (y > 50) {
    const depth = Math.min(y / 300, 1);
    header.style.setProperty('--header-shadow', `0 1px ${4 + depth * 8}px rgba(0,0,0,${0.02 + depth * 0.04})`);
  } else {
    header.style.removeProperty('--header-shadow');
  }
  // Reading progress bar
  if (progressBar) {
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const progress = maxScroll > 0 ? (y / maxScroll) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();
```

The shadow grows the further down you scroll, capped at `0 1px 12px
rgba(0,0,0,0.06)`. The progress bar (2px high, vermillion → celadon
gradient) fills as the user reads. Both are subtle — they shouldn't
demand attention.

## Iris-close exit (intro overlay)

The intro animation closes by rounding inward to a vanishing rounded
rectangle:

```css
.intro-overlay {
  clip-path: inset(0 0 0 0);
  animation: introExit 1s cubic-bezier(0.65, 0, 0.35, 1) 9s forwards;
}

@keyframes introExit {
  0%   { clip-path: inset(0 0 0 0); opacity: 1; }
  60%  { clip-path: inset(3% 3% 3% 3% round 24px); opacity: 1; }
  100% { clip-path: inset(50% 50% 50% 50% round 24px); opacity: 0; }
}
```

This is the only place iris-close is used. Don't replicate it elsewhere
without strong reason — it's a one-time brand moment.

## Wave hand — pop + wave

Two stacked animations, sequenced via delay:

```css
.wave-hand {
  display: inline-block;
  font-size: clamp(2.5rem, 5vw, 3.5rem);
  transform-origin: 70% 70%;
  animation: waveMotion 2s ease-in-out 10.3s 2;   /* 2s wave, runs 2 times */
}

.hero-wave {
  opacity: 0;
  transform: scale(0.3);
  animation: handPop 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) 9.5s forwards;
}

@keyframes handPop {
  0%   { opacity: 0; transform: scale(0.3); }
  60%  { opacity: 1; transform: scale(1.1); }
  100% { opacity: 1; transform: scale(1); }
}

@keyframes waveMotion {
  0%   { transform: rotate(0deg); }
  10%  { transform: rotate(14deg); }
  20%  { transform: rotate(-8deg); }
  30%  { transform: rotate(14deg); }
  40%  { transform: rotate(-4deg); }
  50%  { transform: rotate(10deg); }
  60%, 100% { transform: rotate(0deg); }
}
```

Iteration count is 2 — never `infinite`. The wave-hand has been
explicitly tuned to "3 cycles then stop" feel; don't loop it.

## Marquee — infinite text scroll

The optional marquee band on the homepage uses a duplicated track and
translates by 50%:

```css
.marquee-track {
  display: flex;
  align-items: center;
  gap: var(--space-5);
  width: max-content;
  animation: marqueeScroll 25s linear infinite;
}

@keyframes marqueeScroll {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@media (prefers-reduced-motion: reduce) {
  .marquee-track { animation: none; }
}
```

The track must contain its content twice (visually adjacent) for the
loop to be seamless.

## Logo strip — staggered entrance

```typescript
const logoItems = gsap.utils.toArray('.logo-item');
if (logoItems.length > 0) {
  gsap.fromTo(logoItems,
    { opacity: 0, y: 30 },
    {
      opacity: 1, y: 0, duration: 0.6, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: '.logo-strip', start: 'top 80%' },
    }
  );
}
```

Stagger: 0.1s between siblings. Duration: 0.6s (shorter than the 0.8s
section reveal because logos are smaller).

## CSS scroll-driven animations (progressive enhancement)

`global.css` has an `@supports (animation-timeline: view())` block that
runs the reveal on the GPU compositor when the browser supports it. The
GSAP path is the JS fallback. Both should produce identical visual
outcomes — keep them in sync.

```css
@supports (animation-timeline: view()) {
  [data-animate="reveal"] {
    opacity: 0;
    transform: translateY(40px);
    animation: scrollReveal linear both;
    animation-timeline: view();
    animation-range: entry 5% entry 35%;
  }

  @keyframes scrollReveal {
    to { opacity: 1; transform: translateY(0); }
  }
}
```

## Animation budget

The site keeps motion budget tight. Targets:

- LCP < 1.5s — entrance animations don't block content paint
- Animation frame work — keep canvas particle count ≤ 90 desktop / 45
  mobile; pre-render glow sprites; pause on tab hidden
- GSAP bundle — core + ScrollTrigger only (≈23KB gzipped). Don't pull
  in extra plugins (SplitText, MotionPath, etc.) without a strong
  justification

If a new animation pushes one of these limits, reduce particle counts,
shorten durations, or drop an effect — don't expand the budget.

## What never to animate

- Page background colors (jarring; use static surface alternation)
- Type weight or family (FOUT-prone, expensive)
- `width`/`height`/`top`/`left` directly — use `transform` and
  `clip-path`
- `filter: blur()` on large surfaces (huge perf cost; the hero overlay
  uses a static gradient instead)
- More than one infinite-loop animation per viewport (compounds CPU
  cost; users notice)
