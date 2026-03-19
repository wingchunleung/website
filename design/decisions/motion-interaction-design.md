# Motion & Interaction Design Specification

## Wing Chun Leung -- Personal Website

---

## 1. Design Philosophy: Intentional Motion

Every animation on this site must pass the **Intentional Motion Test**: does this animation (a) communicate something the user needs to know, (b) reduce cognitive load by providing continuity, or (c) create an emotional response at the visceral design level? If none of these, remove it.

Apple's product pages succeed because motion is *narrative* -- it tells a story as you scroll, not because it decorates. This site should follow the same discipline: fewer animations, each one purposeful and polished.

---

## 2. Framework & Library Recommendation

### Primary Recommendation: **Astro + GSAP (with islands of React/Preact)**

| Criterion | Astro + GSAP | Next.js + Framer Motion |
|-----------|-------------|------------------------|
| Performance (LCP) | Near-zero JS by default; 50-70% smaller bundles | Requires hydration overhead |
| Animation power | Full timeline control, ScrollTrigger, SplitText, SVG morphing | Declarative, simpler API but less control |
| Page transitions | Native View Transitions API (2 lines of code) | Requires layout animations or custom logic |
| Bundle size | GSAP core ~23KB gzipped (modular) | Framer Motion ~32KB gzipped (monolithic) |
| Content focus | Built for content sites / portfolios | Built for web applications |
| Framework lock-in | Works with any UI framework or none | React-only |

**Rationale (HCI-grounded):**

- **H3 (Minimalism)**: Astro ships zero JS by default. Only interactive islands hydrate. This directly serves minimalism at the technical level -- no unnecessary computation competing for the user's device resources.
- **H7 (Visibility)**: GSAP's timeline model gives precise control over animation sequencing, ensuring system status feedback (loading states, progress, transitions) is smooth and predictable.
- **Visceral design (Norman)**: GSAP's easing functions and ScrollTrigger produce the Apple-quality "feel" that creates immediate positive emotional responses. Framer Motion's defaults are good but less tuneable for bespoke scroll experiences.

**GSAP is now free** (since Webflow's acquisition in 2024), including for commercial use, which removes the historic licensing concern.

### Install

```bash
npm create astro@latest wing-website
npx astro add preact  # lightweight interactive islands
npm install gsap
```

---

## 3. Specific Interaction Designs

### 3.1 Hero Section Entrance Animation

**Design**: Staggered typographic reveal with a subtle vertical slide, followed by supporting elements fading in.

**Sequence (total ~2.2s):**
1. **0.0s** -- Page background fades from black to site color (opacity 0 -> 1, 600ms)
2. **0.3s** -- Name "Wing Chun Leung" splits by characters, each sliding up from 30px below with opacity 0 -> 1, staggered 0.04s per character (ease: "power3.out", duration: 0.8s)
3. **0.8s** -- Subtitle/tagline fades in and slides up 20px (ease: "power2.out", duration: 0.6s)
4. **1.2s** -- Navigation items stagger in from right, 0.08s apart (opacity + translateX 20px -> 0)
5. **1.6s** -- CTA or scroll indicator pulses gently into view

**HCI Justification:**
- **Gestalt Common Fate**: Characters of the name animate in the same direction (upward) at the same speed, reinforcing they belong together as a single unit. The subtitle follows with the same direction but different timing, creating a clear visual hierarchy.
- **Visual Information Processing (Stage 1 -> 2 -> 3)**: The stagger exploits the brain's parallel feature extraction -- each character is a feature detected simultaneously, but the stagger guides serial pattern recognition in the intended reading order.
- **Visceral (Norman)**: The choreographed entrance creates a "reveal" moment that signals craft and intention.

**Code Example:**

```javascript
// hero-entrance.js
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

export function animateHero() {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  // Split the heading into characters
  const split = new SplitText(".hero-name", {
    type: "chars",
    aria: { label: true }, // preserves screen reader accessibility
  });

  tl.from(".hero-background", {
    opacity: 0,
    duration: 0.6,
    ease: "power2.inOut",
  })
  .from(split.chars, {
    y: 30,
    opacity: 0,
    duration: 0.8,
    stagger: 0.04,
  }, 0.3)
  .from(".hero-subtitle", {
    y: 20,
    opacity: 0,
    duration: 0.6,
    ease: "power2.out",
  }, 0.8)
  .from(".nav-item", {
    x: 20,
    opacity: 0,
    duration: 0.5,
    stagger: 0.08,
  }, 1.2)
  .from(".scroll-indicator", {
    opacity: 0,
    duration: 0.4,
  }, 1.6);

  return tl;
}
```

### 3.2 Scroll-Reveal Patterns for Content Sections

**Design**: Apple-style "sticky frame" sections where content pins in place and elements animate within the pinned viewport as the user scrolls.

**Two patterns used throughout:**

#### Pattern A: Fade-Up Reveal (for text/card content)
Elements fade in and translate upward 40px as they enter the viewport. Trigger point: when element's top crosses 80% of viewport height.

```javascript
// scroll-reveal.js
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function initScrollReveals() {
  // Pattern A: Fade-up reveal for general content
  gsap.utils.toArray("[data-reveal]").forEach((el) => {
    gsap.from(el, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });

  // Pattern A variant: staggered children
  gsap.utils.toArray("[data-reveal-stagger]").forEach((container) => {
    gsap.from(container.children, {
      y: 40,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: container,
        start: "top 80%",
        toggleActions: "play none none none",
      },
    });
  });
}
```

#### Pattern B: Scrub-Linked Parallax (for hero/showcase sections)
Elements move at different rates tied to scroll position. Background images move slower, foreground text moves faster, creating depth.

```javascript
// parallax-section.js
export function initParallax() {
  gsap.utils.toArray("[data-parallax-section]").forEach((section) => {
    const bg = section.querySelector("[data-parallax-bg]");
    const fg = section.querySelector("[data-parallax-fg]");

    gsap.to(bg, {
      yPercent: -20,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });

    gsap.to(fg, {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: section,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });
}
```

**HCI Justification:**
- **H7 (Visibility)**: Scroll-triggered reveals provide continuous feedback that the user's scrolling action is producing results. The page feels alive and responsive.
- **Gestalt Continuation**: Elements entering from the same direction (bottom to top) along the scroll axis reinforces the user's reading path.
- **Cognitive Load**: By revealing content progressively rather than showing everything at once, we reduce the information processing demand at any single moment.

### 3.3 Page Transition Style

**Design**: Cross-fade with shared element morphing via the **View Transitions API** (native browser, Astro-integrated).

```astro
---
// src/layouts/BaseLayout.astro
import { ViewTransitions } from 'astro:transitions';
---
<html>
  <head>
    <ViewTransitions />
  </head>
  <body>
    <nav transition:persist>
      <!-- Navigation persists across pages, no re-render flash -->
    </nav>
    <main transition:animate="fade">
      <slot />
    </main>
  </body>
</html>
```

For shared elements (e.g., a project card that expands into a project detail page):

```astro
<!-- On the listing page -->
<img src={project.thumbnail}
     transition:name={`project-${project.id}`}
     alt={project.title} />

<!-- On the detail page -->
<img src={project.hero}
     transition:name={`project-${project.id}`}
     alt={project.title} />
```

The browser automatically morphs the element from its position/size on page A to its position/size on page B. No JavaScript animation code required.

**HCI Justification:**
- **Continuity (Gestalt)**: Shared element transitions maintain object permanence -- the user sees the *same* element transform rather than a jarring page swap. This maps to the real-world expectation that objects don't teleport.
- **H7 (Visibility)**: The transition itself is feedback: "your click worked, and here is where it's taking you."
- **Reduced Cognitive Load**: The brain doesn't need to re-orient to a completely new page. Persistent navigation and morphing elements anchor the user's spatial mental model.

### 3.4 Hover States for Interactive Elements

**Design Principle**: Every interactive element must have three distinct visual states: **default**, **hover**, and **active/pressed**. Transitions between states use 200ms `ease-out`.

#### Links / Text Buttons
```css
.text-link {
  position: relative;
  color: var(--color-text);
  text-decoration: none;
  transition: color 200ms ease-out;
}

/* Underline that grows from left on hover */
.text-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1.5px;
  background: var(--color-accent);
  transition: width 300ms ease-out;
}

.text-link:hover {
  color: var(--color-accent);
}

.text-link:hover::after {
  width: 100%;
}

.text-link:active {
  opacity: 0.7;
  transition: opacity 50ms ease-out;
}
```

#### Cards / Project Items
```css
.project-card {
  transition: transform 300ms ease-out, box-shadow 300ms ease-out;
}

.project-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.project-card:active {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.06);
  transition-duration: 100ms;
}
```

#### Magnetic Button (for primary CTA -- desktop only)
```javascript
// magnetic-button.js
export function initMagneticButtons() {
  if (window.matchMedia("(pointer: fine)").matches === false) return;
  // Only apply to devices with a fine pointer (mouse), not touch

  document.querySelectorAll("[data-magnetic]").forEach((btn) => {
    const strength = 0.3;

    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(btn, {
        x: x * strength,
        y: y * strength,
        duration: 0.4,
        ease: "power2.out",
      });
    });

    btn.addEventListener("mouseleave", () => {
      gsap.to(btn, {
        x: 0,
        y: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
    });
  });
}
```

**HCI Justification:**
- **H7 (Visibility)**: Hover states provide immediate feedback that an element is interactive. Without them, users cannot distinguish clickable from non-clickable elements.
- **H2 (Mapping)**: The card "lift" on hover maps to a real-world metaphor -- picking up an object before moving it.
- **Fitts's Law (Magnetic Button)**: The magnetic effect effectively increases the target size by pulling the button toward the cursor, reducing acquisition time.

### 3.5 Navigation Interactions

**Design**: Fixed header that transitions between two states based on scroll position.

**State 1 (Top of page):** Transparent background, full-size logo, expanded spacing.
**State 2 (Scrolled):** Blurred background (`backdrop-filter: blur(20px)`), compact logo, reduced spacing. Transition over 300ms.

```javascript
// navigation.js
export function initNavigation() {
  const nav = document.querySelector(".site-nav");

  ScrollTrigger.create({
    start: "top -80",
    onEnter: () => nav.classList.add("nav--compact"),
    onLeaveBack: () => nav.classList.remove("nav--compact"),
  });
}
```

```css
.site-nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 24px 40px;
  background: transparent;
  transition: all 300ms ease-out;
  z-index: 100;
}

.site-nav.nav--compact {
  padding: 12px 40px;
  background: rgba(255, 255, 255, 0.72);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
}
```

**Mobile Menu (hamburger):**
- Menu icon morphs from 3 lines to X using CSS transforms (no DOM replacement)
- Menu panel slides down from top with content staggering in at 0.06s intervals
- Background overlay fades in simultaneously
- Close on escape key, outside click, or X button (**H4: Freedom**)
- Focus trap within open menu for keyboard accessibility

**Active Section Indicator:**
- Use ScrollTrigger to detect which section is in view
- Navigation link for current section gets an animated underline/dot indicator
- Provides **H7 (Visibility)** -- user always knows where they are on the page

### 3.6 Loading & Transition States

**Initial Page Load:**
A minimal loading sequence (only if assets genuinely need time):

```javascript
// loader.js
export function initLoader() {
  const loader = document.querySelector(".page-loader");

  // Only show loader if page takes >300ms to be interactive
  const timeout = setTimeout(() => {
    loader.classList.add("loader--visible");
  }, 300);

  window.addEventListener("load", () => {
    clearTimeout(timeout);
    gsap.to(loader, {
      opacity: 0,
      duration: 0.4,
      onComplete: () => {
        loader.remove();
        animateHero(); // trigger entrance animation
      },
    });
  });
}
```

**Key principle**: Never show a loader for operations that complete in under 300ms. The Doherty Threshold states that interactions feel instantaneous below 400ms. A loader appearing and immediately disappearing is worse than no loader -- it draws attention to a delay that the user wouldn't have noticed.

**Skeleton States:**
For any content loaded asynchronously (if applicable), use skeleton placeholders that pulse with a subtle shimmer animation:

```css
.skeleton {
  background: linear-gradient(
    90deg,
    var(--color-skeleton) 25%,
    var(--color-skeleton-highlight) 50%,
    var(--color-skeleton) 75%
  );
  background-size: 200% 100%;
  animation: skeleton-shimmer 1.5s ease-in-out infinite;
  border-radius: 4px;
}

@keyframes skeleton-shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
```

**HCI Justification:**
- **H7 (Visibility)**: Loading indicators communicate system status. But only when the system status *needs* communicating (>300ms).
- **Gestalt Closure**: Skeleton screens show the *shape* of content before it loads. The brain uses closure to anticipate the complete layout, reducing perceived wait time.

### 3.7 Cursor Interactions

**Recommendation: Subtle, not custom.**

Do NOT replace the system cursor. Custom cursors create accessibility issues, increase cognitive load for routine interactions, and violate **H1 (Consistency)** with platform conventions.

Instead, use **cursor-adjacent effects** on desktop only:

```css
/* Cursor changes to signal interactivity */
[data-interactive] { cursor: pointer; }
[data-draggable]   { cursor: grab; }
[data-dragging]    { cursor: grabbing; }

/* Subtle glow/spotlight effect that follows cursor on hero section (optional) */
```

If a spotlight effect is desired for the hero:

```javascript
// cursor-spotlight.js (desktop only, non-essential enhancement)
export function initCursorSpotlight() {
  if (window.matchMedia("(pointer: fine)").matches === false) return;

  const hero = document.querySelector(".hero");
  if (!hero) return;

  hero.addEventListener("mousemove", (e) => {
    const rect = hero.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;

    hero.style.setProperty("--spotlight-x", `${x}%`);
    hero.style.setProperty("--spotlight-y", `${y}%`);
  });
}
```

```css
.hero {
  --spotlight-x: 50%;
  --spotlight-y: 50%;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  inset: 0;
  background: radial-gradient(
    600px circle at var(--spotlight-x) var(--spotlight-y),
    rgba(255, 255, 255, 0.04),
    transparent 40%
  );
  pointer-events: none;
  z-index: 1;
}
```

**HCI Justification:**
- **H1 (Consistency)**: System cursors are universally understood. Replacing them introduces learning cost.
- **H5 (Flexibility)**: The spotlight effect is a progressive enhancement that doesn't interfere with core functionality.

### 3.8 Mobile-Specific Touch Interactions

**Principles:**
- All tap targets minimum 44x44px (Apple HIG) per Fitts's Law
- No hover-dependent functionality -- anything revealed on hover must be visible by default on mobile or revealed on tap
- Swipe gestures only where they map to established patterns (e.g., image carousel)

**Specific mobile adaptations:**

1. **Scroll-reveal animations**: Reduce distance (40px -> 20px) and duration (0.8s -> 0.5s) to account for faster scroll velocity on touch devices.

2. **Hero entrance**: Simplify to a single fade-in instead of character-by-character stagger (smaller screens make per-character animation feel cluttered rather than elegant).

3. **Pull-to-refresh-style feedback**: If the user scrolls past the top of the hero, allow a small elastic overscroll effect (CSS `overscroll-behavior`) rather than fighting the browser default.

4. **Bottom navigation consideration**: On mobile, critical actions should be within thumb reach. Consider a bottom-anchored contact CTA.

```javascript
// mobile-adaptations.js
export function initMobileAdaptations() {
  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  if (isMobile) {
    // Reduce reveal distances for mobile
    gsap.utils.toArray("[data-reveal]").forEach((el) => {
      el.dataset.revealDistance = "20";
    });

    // Disable parallax on mobile (saves GPU, prevents janky scroll)
    ScrollTrigger.getAll()
      .filter((st) => st.vars.scrub !== undefined)
      .forEach((st) => st.disable());
  }
}
```

**HCI Justification:**
- **Fitts's Law**: Touch targets sized for finger width, not cursor precision.
- **H5 (Flexibility)**: Different input modalities (touch vs. mouse) warrant different interaction designs.
- **Cognitive Load**: Mobile users have less screen real estate, so motion must be more restrained to avoid overwhelming the viewport.

---

## 4. Performance Requirements

### 4.1 Animation Performance Rules

| Rule | Implementation |
|------|---------------|
| Only animate `transform` and `opacity` | These are GPU-composited; avoid `width`, `height`, `top`, `left`, `margin`, `padding` |
| Use `will-change` sparingly | Apply to elements *about to* animate, remove after. Never set globally. |
| Limit simultaneous animations | Max 8-10 elements animating at once to maintain 60fps |
| Disable parallax on mobile | Touch scroll is already GPU-intensive; parallax compounds jank |
| Prefer CSS for simple state changes | Hover effects, focus styles, nav transitions = pure CSS. Reserve GSAP for sequenced/scroll-driven work. |
| Use `scrub` values > 0 | `scrub: 0.5` smooths scroll-linked animations, preventing 1:1 jitter |

### 4.2 GSAP Performance Configuration

```javascript
// performance.js
import gsap from "gsap";

// Disable GSAP lag smoothing for tighter scroll sync
gsap.ticker.lagSmoothing(0);

// Refresh ScrollTrigger after all animations initialize
// (prevents layout measurement glitches)
ScrollTrigger.refresh();

// On resize, debounce and refresh
let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => ScrollTrigger.refresh(), 250);
});
```

### 4.3 Reduced Motion (Accessibility)

This is non-negotiable. Users who enable `prefers-reduced-motion` may have vestibular disorders where motion triggers nausea, dizziness, or migraines.

```javascript
// reduced-motion.js
export function shouldReduceMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function initAnimations() {
  if (shouldReduceMotion()) {
    // Skip all entrance animations -- show content immediately
    gsap.globalTimeline.progress(1);

    // Disable all ScrollTrigger animations
    ScrollTrigger.getAll().forEach((st) => st.disable());

    // Set all animated elements to their final state
    gsap.set("[data-reveal]", { opacity: 1, y: 0 });
    gsap.set(".hero-name, .hero-subtitle, .nav-item", { opacity: 1, x: 0, y: 0 });

    return;
  }

  // Normal animation initialization
  initScrollReveals();
  initParallax();
  animateHero();
}
```

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
```

**HCI Justification:**
- **H5 (Flexibility)**: Respecting user preferences is the most fundamental form of flexibility.
- **Accessibility (WCAG 2.1 SC 2.3.3)**: Motion can be a barrier. Reduced motion must be a first-class code path, not an afterthought.

---

## 5. HCI Analysis: When Motion Helps vs. Hurts

### Motion HELPS when:

| Purpose | Example on This Site | HCI Principle |
|---------|---------------------|---------------|
| **Communicating state change** | Nav compacting on scroll | H7 (Visibility) |
| **Providing continuity** | Page-to-page shared element morph | Gestalt Continuation |
| **Guiding attention** | Staggered reveal directing reading order | Visual Processing Stages |
| **Creating emotional response** | Hero entrance choreography | Visceral Design (Norman) |
| **Grouping related elements** | Card children animating together | Gestalt Common Fate |
| **Reducing perceived wait time** | Skeleton shimmer during load | H7 + Gestalt Closure |
| **Signaling interactivity** | Hover lift, magnetic pull | H7 + H2 (Mapping) |

### Motion HURTS when:

| Anti-pattern | Why It Fails | Avoidance Strategy |
|-------------|-------------|-------------------|
| **Decorative animation with no purpose** | Competes with content (H3 violation) | Every animation must pass the Intentional Motion Test |
| **Animations that block interaction** | User must wait before they can act (H4 violation) | Never block scrolling or clicking during animation |
| **Motion on every element** | Attention overload; nothing stands out | Maximum 3-4 animated elements visible at once |
| **Long entrance sequences** | Users came for content, not a show | Hero entrance < 2.5s; all other reveals < 0.8s |
| **Layout-shifting animations** | CLS hurts UX and SEO | Only animate transform/opacity; reserve final dimensions |
| **Scroll-jacking** | Removes user control (H4 violation) | Never override native scroll behavior; scrub, don't hijack |
| **Custom cursors** | Violates platform consistency (H1) | Use system cursors; add cursor-adjacent effects only |

### The 80/20 Rule of Motion

80% of the site's pages should use only the simple **fade-up reveal** (Pattern A). Reserve the more complex parallax, pinned sections, and choreographed sequences for the hero section and at most 1-2 showcase sections. This ensures:
- Consistent perceived performance across the site
- The special sections *feel* special because they contrast with the baseline
- Development and maintenance effort stays reasonable

---

## 6. Animation Timing Reference

| Element | Duration | Ease | Delay/Stagger |
|---------|----------|------|---------------|
| Hero name (per char) | 800ms | power3.out | stagger: 40ms |
| Hero subtitle | 600ms | power2.out | after name |
| Nav items | 500ms | power2.out | stagger: 80ms |
| Scroll reveal (content) | 800ms | power2.out | trigger: top 80% |
| Scroll reveal stagger (children) | 600ms | power2.out | stagger: 120ms |
| Page transition (fade) | 200ms | ease-in-out | native View Transitions |
| Hover state (link) | 200ms | ease-out | -- |
| Hover state (card) | 300ms | ease-out | -- |
| Active/press state | 100ms | ease-out | -- |
| Nav compact transition | 300ms | ease-out | -- |
| Mobile menu open | 400ms | power2.out | content stagger: 60ms |
| Skeleton shimmer | 1500ms | ease-in-out | infinite loop |
| Loader fade-out | 400ms | ease-out | -- |

All durations are within the 200-500ms sweet spot for micro-interactions and the 600-1000ms range for entrance animations, as recommended by UX motion research.

---

## 7. File Architecture

```
src/
  scripts/
    animations/
      hero-entrance.js       # Hero section choreography
      scroll-reveal.js        # Pattern A: fade-up reveals
      parallax.js             # Pattern B: scrub-linked parallax
      navigation.js           # Nav state transitions
      magnetic-button.js      # Magnetic CTA effect (desktop)
      cursor-spotlight.js     # Hero spotlight (desktop)
    utils/
      reduced-motion.js       # prefers-reduced-motion handling
      performance.js          # GSAP config, ScrollTrigger refresh
      mobile-adaptations.js   # Touch-specific overrides
    main.js                   # Entry: imports and initializes all
  styles/
    animations.css            # CSS-only animations (hover, skeleton)
    reduced-motion.css        # Reduced motion overrides
  layouts/
    BaseLayout.astro          # ViewTransitions, nav persist
```

---

## 8. Summary of Recommendations

1. **Use Astro** as the framework for its zero-JS-by-default architecture and native View Transitions support.
2. **Use GSAP** (with ScrollTrigger and SplitText) for all sequenced and scroll-driven animations. Use plain CSS for hover states and simple transitions.
3. **Hero entrance**: Staggered character reveal via SplitText, ~2.2s total choreography.
4. **Scroll reveals**: Fade-up at viewport 80% threshold. Stagger children in groups.
5. **Page transitions**: Native View Transitions API via Astro with shared element morphing.
6. **Hover states**: Underline grow for links, lift for cards, magnetic pull for primary CTA.
7. **Navigation**: Transparent-to-blurred compact header on scroll.
8. **No custom cursors**. Optional subtle spotlight on hero.
9. **Respect `prefers-reduced-motion`**: Disable all motion, show final states immediately.
10. **Mobile**: Simplified animations, no parallax, larger tap targets, reduced motion distances.

---

## Sources

- [18 Best Scrolling Websites 2025/2026](https://htmlburger.com/blog/best-scrolling-websites/)
- [Apple-Style Scroll Animations (CSS-Tricks)](https://css-tricks.com/lets-make-one-of-those-fancy-scrolling-animations-used-on-apple-product-pages/)
- [Apple-Style Scroll Animations with CSS view-timeline (Builder.io)](https://www.builder.io/blog/view-timeline)
- [GSAP ScrollTrigger Documentation](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
- [Optimizing GSAP in Next.js 15 (Medium)](https://medium.com/@thomasaugot/optimizing-gsap-animations-in-next-js-15-best-practices-for-initialization-and-cleanup-2ebaba7d0232)
- [GSAP ScrollTrigger Complete Guide (GSAPify)](https://gsapify.com/gsap-scrolltrigger)
- [Framer Motion vs GSAP (Gabriel Veres)](https://www.gabrielveres.com/blog/framer-motion-vs-gsap)
- [GSAP vs Motion Comparison (Motion.dev)](https://motion.dev/docs/gsap-vs-motion)
- [Best React Animation Libraries 2026 (LogRocket)](https://blog.logrocket.com/best-react-animation-libraries/)
- [Micro-Interactions Best Practices 2025 (Stan Vision)](https://www.stan.vision/journal/micro-interactions-2025-in-web-design)
- [Micro-Interactions in UX (IxDF)](https://ixdf.org/literature/article/micro-interactions-ux)
- [Astro View Transitions Documentation](https://docs.astro.build/en/guides/view-transitions/)
- [View Transitions API (MDN)](https://developer.mozilla.org/en-US/docs/Web/API/View_Transition_API)
- [Mastering View Transitions API 2026 (DEV Community)](https://dev.to/krish_kakadiya_5f0eaf6342/mastering-smooth-page-transitions-with-the-view-transitions-api-in-2026-31of)
- [Astro vs Next.js 2026 Benchmarks (Senorit)](https://senorit.de/en/blog/astro-vs-nextjs-2025)
- [Astro vs Next.js Comparison (Pagepro)](https://pagepro.co/blog/astro-nextjs/)
- [Law of Common Fate (IxDF)](https://assets.interaction-design.org/literature/topics/law-of-common-fate)
- [Common Fate for Animated Transitions (UMD Research)](http://users.umiacs.umd.edu/~elm/projects/common-fate/common-fate.pdf)
- [prefers-reduced-motion (CSS-Tricks)](https://css-tricks.com/almanac/rules/m/media/prefers-reduced-motion/)
- [Animation Performance Guide (Motion.dev)](https://motion.dev/docs/performance)
- [SplitText Plugin Documentation (GSAP)](https://gsap.com/docs/v3/Plugins/SplitText/)
- [Building Animated Portfolio Hero with GSAP SplitText (DEV Community)](https://dev.to/fahadalikhanca/building-an-animated-portfolio-hero-with-gsap-splittext-and-a-canvas-particle-background-3d4e)
- [GSAP Text Animations (GSAPify)](https://gsapify.com/gsap-text-animations/)
- [Custom Cursor with GSAP and React (Medium)](https://medium.com/@amilmohd155/elevate-your-ux-build-a-smooth-custom-cursor-with-gsap-and-react-b2a1bb1c01e8)
- [Magnetic Button Effect with GSAP (CodePen)](https://codepen.io/Course-Max-One/details/QwyjPOg)
