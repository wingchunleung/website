# Design Decision Record 001: Minimalist Design Proposal
## Wing Chun Leung -- Personal Website + HCI Course Page

**Date**: 2026-03-19
**Status**: Proposed
**Author**: Minimalist Design Agent

---

## 1. Design Research Summary

### 1.1 Patterns Observed from Apple.com
Apple's web presence demonstrates a consistent philosophy: let the content breathe. Key patterns extracted:
- **Scroll storytelling**: Each viewport is treated as a "slide" -- one idea per screen, with content revealed as the user scrolls. Text and imagery appear in sequence, controlling the narrative pace.
- **Extreme whitespace**: Padding of 80-120px between sections is standard. Content never fills more than 60% of any given viewport.
- **Typographic boldness**: Large display headings (56-80px on desktop) with very light body text (17-21px). Weight contrast is the primary hierarchy tool -- not color, not decoration.
- **Restrained color**: Near-monochrome base (white/black) with a single accent color used sparingly.
- **Progressive disclosure**: Information architecture is shallow; details are hidden behind interaction rather than displayed up front.

### 1.2 Patterns Observed from Carta.com (Fintech)
Carta's design reflects fintech trust-building through visual restraint:
- **Clean data presentation**: Tables, charts, and numbers are given room to breathe with generous cell padding and subtle borders.
- **Professional neutrals**: Deep blues and grays communicate stability; warm whites soften the corporate feel.
- **Benefit-first messaging**: Headlines state value propositions; details appear only on demand.
- **Subtle hierarchy through weight**: Relies on font-weight variation within a single typeface rather than multiple font families.

### 1.3 Award-Winning Minimalist Portfolios (Awwwards 2025-2026)
The strongest minimalist portfolios share these traits:
- **Single-column narrative flow**: Content is presented as a vertical story, not a grid of options.
- **Hover-driven progressive disclosure**: Static pages that come alive on interaction (color shifts, image reveals, subtle parallax).
- **Personality through restraint**: The fewer elements present, the more each one matters. A single typeface, one accent color, or one recurring motif becomes the entire brand.
- **Performance as design**: Fast load times and smooth 60fps animations signal quality more effectively than visual complexity.

---

## 2. Proposed Design System

### 2.1 Page Structure

#### Main Personal Site
```
/                   -- Home (hero + summary narrative)
/about              -- About (extended bio, philosophy, interests)
/experience         -- Experience (career timeline: Carta, Costco, HKUST)
/projects           -- Projects (selected work with case studies)
/hci                -- HCI Course Page (dedicated, see 2.1.2)
```

#### Section Breakdown -- Home Page
1. **Hero Section**: Name, one-line descriptor ("MSc AI @ HKUST | Building at the intersection of finance and intelligence"), minimal navigation.
2. **Brief Introduction**: 2-3 sentences. Who Wing is, what he cares about.
3. **Selected Experience**: 2-3 cards (Carta, Costco, HKUST) with role + one-line impact statement. Links to full experience page.
4. **Selected Projects**: 2-3 featured projects with thumbnail + title. Links to full project page.
5. **Contact / Footer**: Email, LinkedIn, GitHub. No contact form (reduces friction, respects minimalism).

#### Section Breakdown -- HCI Course Page (`/hci`)
1. **Header**: Course title (ARIN5301), instructor, semester.
2. **Design Philosophy Statement**: Brief paragraph on human-centered design approach.
3. **Design Process Documentation**: Empathize > Interpret > Ideate > Verify -- shown as a horizontal flow or vertical timeline with expandable sections.
4. **Key Learnings / Principles Applied**: Cards or accordion sections linking HCI principles to specific design decisions made on this very website (meta-recursive: the site demonstrates the principles it describes).
5. **Evaluation**: Heuristic evaluation results, usability testing notes if available.

### 2.2 Layout Approach

**Single-column, center-aligned content with a maximum width constraint.**

```
Specification:
- Max content width:     720px (prose-optimized; 65-75 characters per line)
- Max container width:   1200px (for full-bleed elements like hero, images)
- Horizontal padding:    24px (mobile), 48px (tablet), 64px (desktop)
- Section vertical gap:  96px (mobile), 128px (desktop)
- Component spacing:     24px between related elements, 48px between groups
```

**Justification**: A single-column layout eliminates layout-scanning decisions, letting the user focus purely on content. The 720px measure keeps line lengths in the 65-75 character sweet spot for readability (research by Robert Bringhurst and the Baymard Institute confirms this range minimizes eye-tracking fatigue). Full-bleed breakouts for hero sections and images create visual rhythm without introducing multi-column complexity.

### 2.3 Typography

**Primary Typeface: Inter**
Inter is chosen for its:
- Optimization for screen rendering at all sizes
- Extensive weight range (9 weights, variable font support)
- Tall x-height improving legibility at small sizes
- Open-source availability (Google Fonts, self-hosted)
- Neutral, professional character that does not compete with content

**Type Scale (based on a 1.250 Major Third ratio):**

| Role              | Size (desktop) | Size (mobile) | Weight | Line Height | Letter Spacing |
|-------------------|---------------|---------------|--------|-------------|----------------|
| Display / Hero    | 64px / 4rem   | 40px / 2.5rem | 700    | 1.1         | -0.02em        |
| H1                | 48px / 3rem   | 32px / 2rem   | 700    | 1.15        | -0.015em       |
| H2                | 36px / 2.25rem| 28px / 1.75rem| 600    | 1.2         | -0.01em        |
| H3                | 24px / 1.5rem | 20px / 1.25rem| 600    | 1.3         | 0              |
| Body              | 18px / 1.125rem| 16px / 1rem  | 400    | 1.65        | 0              |
| Body Small / Meta | 14px / 0.875rem| 14px / 0.875rem| 400  | 1.5         | 0.01em         |
| Caption / Label   | 12px / 0.75rem| 12px / 0.75rem| 500   | 1.4         | 0.04em         |

**Secondary Typeface (code/monospace): JetBrains Mono** -- for any code snippets or technical content on the HCI page.

**Hierarchy Strategy**: Create contrast through size and weight changes within the single Inter family. Avoid using color or decoration as primary hierarchy differentiators. This follows Apple's approach: bold for emphasis, weight for hierarchy, size for importance.

### 2.4 Color Palette

A restrained, near-monochrome palette with a single accent. Inspired by the intersection of Apple's restraint and Carta's professional warmth.

#### Light Mode (Primary)

| Role            | Color         | Hex       | Usage                                  |
|-----------------|---------------|-----------|----------------------------------------|
| Background      | Snow          | `#FAFAFA` | Page background                        |
| Surface         | White         | `#FFFFFF` | Cards, elevated elements               |
| Text Primary    | Near Black    | `#1A1A1A` | Headings, primary content              |
| Text Secondary  | Dark Gray     | `#6B6B6B` | Body text, descriptions                |
| Text Tertiary   | Medium Gray   | `#9B9B9B` | Captions, metadata, placeholders       |
| Border / Divider| Light Gray    | `#E5E5E5` | Subtle separators, card borders        |
| Accent          | Deep Teal     | `#0A6E5C` | Links, interactive elements, CTA       |
| Accent Hover    | Darker Teal   | `#085649` | Hover state for accent elements        |
| Accent Subtle   | Pale Teal     | `#E8F5F1` | Accent backgrounds, tags, highlights   |

#### Dark Mode (Optional Enhancement)

| Role            | Color         | Hex       |
|-----------------|---------------|-----------|
| Background      | Charcoal      | `#111111` |
| Surface         | Dark Surface  | `#1A1A1A` |
| Text Primary    | Off White     | `#EDEDED` |
| Text Secondary  | Warm Gray     | `#A0A0A0` |
| Text Tertiary   | Dim Gray      | `#666666` |
| Border / Divider| Dark Border   | `#2A2A2A` |
| Accent          | Bright Teal   | `#2DD4A8` |
| Accent Hover    | Light Teal    | `#5EEBC5` |
| Accent Subtle   | Deep Teal BG  | `#0D2E27` |

**Why Deep Teal (#0A6E5C)?**
- Conveys intelligence and composure (appropriate for an AI/finance professional).
- Distinct from generic blue (overused in tech) and green (overused in fintech).
- Meets WCAG AA contrast on both white and near-black backgrounds.
- Bridges the finance world (Carta's blues) and the tech world (HKUST's identity) without copying either.

### 2.5 Whitespace Strategy

Whitespace is the primary design tool in this system. It is not empty space -- it is active, structural, and meaningful.

**Macro-level (between sections):**
- 128px (8rem) between major page sections on desktop; 96px (6rem) on mobile.
- Hero section uses full viewport height (`100vh`) with content vertically centered.
- Each section feels like its own "room" -- the user scrolls between distinct spaces.

**Meso-level (between components):**
- 48px (3rem) between a section heading and its first content element.
- 32px (2rem) between sibling content blocks (e.g., between experience cards).
- 24px (1.5rem) between related elements within a component (e.g., card title and card description).

**Micro-level (within components):**
- 16px (1rem) between a label and its associated value.
- 8px (0.5rem) between inline elements (e.g., tag pills, icon and text).
- 4px (0.25rem) for optical adjustments (e.g., aligning text with icons).

**Breathing Room Rule**: No text block should be wider than 720px. No content element should be closer than 24px to any edge. On mobile, side padding never drops below 24px.

### 2.6 Interaction & Animation

Animations must be purposeful, not decorative.

- **Page transitions**: Subtle fade-in (opacity 0 to 1 over 300ms, ease-out) for content sections as they enter the viewport. No bouncing, no sliding.
- **Hover states**: Links and interactive cards shift color (accent color transition, 150ms). Cards may lift slightly (translateY -2px, subtle box-shadow increase).
- **Scroll behavior**: `scroll-behavior: smooth` globally. No parallax effects (they create motion sickness for ~35% of users and violate accessibility norms).
- **Reduced motion**: Respect `prefers-reduced-motion: reduce` -- disable all animation for users who request it.

### 2.7 HCI Course Page -- Specific Treatment

The HCI page is both content and demonstration. Its design should make the HCI principles visible:

- **Design Process Timeline**: Horizontal stepper (Empathize > Interpret > Ideate > Verify) with clickable steps that expand to show documentation. This demonstrates **recognition over recall** (H6) -- the user sees all stages at once.
- **Principle Cards**: Each HCI principle applied on the site gets its own card showing: the principle name, a brief definition, and how it was applied (with a screenshot or annotation). This creates a **meta-reflective** layer.
- **Before/After Comparisons**: Where applicable, show a design choice that violates a principle vs. the chosen design that respects it. This leverages the **Figure-Ground** Gestalt principle (contrast makes the good choice stand out).
- **Visual Consistency**: The HCI page uses the exact same design system as the rest of the site, reinforcing **internal consistency** (H1).

---

## 3. HCI Principle Grounding

### 3.1 Gestalt Principles

| Principle       | How This Design Applies It |
|-----------------|---------------------------|
| **Proximity**   | Related items (e.g., a job title + company + date) are grouped tightly (16-24px gaps), while unrelated sections are separated by 96-128px. This creates visual grouping without borders or boxes. |
| **Similarity**  | All interactive elements share the accent color (#0A6E5C). All body text uses the same weight (400) and size (18px). Consistent styling signals consistent behavior. |
| **Continuation** | The single-column layout creates one continuous vertical line of reading. Section headings are left-aligned to the same invisible baseline, creating a visual thread. |
| **Figure-Ground** | White/off-white backgrounds with dark text ensure the content is always the unambiguous foreground. Cards on the Snow background create a subtle but clear figure-ground separation via surface color (#FFFFFF on #FAFAFA). |
| **Closure**     | Minimal borders on cards -- only subtle shadow or single-side borders. The user's visual system "closes" the card boundary, reducing visual clutter while maintaining perceived containment. |
| **Symmetry**    | Center-aligned content column creates bilateral symmetry. The hero section is vertically and horizontally centered, creating a stable, calm visual anchor. |

### 3.2 Nielsen's Heuristics

| Heuristic | How This Design Addresses It |
|-----------|------------------------------|
| **H1: Consistency** | Single typeface (Inter), single accent color, consistent spacing scale. Internal consistency is enforced through the design token system. External consistency: navigation patterns follow standard web conventions (top nav, logo left). |
| **H2: Match System/Real World** | Navigation labels use natural language ("About", "Experience", "Projects" -- not "Bio", "CV", "Portfolio"). Dates are formatted naturally. The career timeline flows chronologically (most recent first), matching the user's mental model of a resume. |
| **H3: Minimalism** | Every element must justify its presence. No decorative borders, no gratuitous icons, no unnecessary color. Content density is deliberately low. Every extra unit of information competes with relevant information (Nielsen). |
| **H4: User Control** | Clear back-navigation at all times. Browser back button always works (no hijacked scroll). No auto-playing media. No modals that trap focus unexpectedly. |
| **H5: Flexibility** | Keyboard navigation supported throughout. Dark mode toggle for user preference. Responsive breakpoints serve both mobile and desktop users without loss of functionality. |
| **H6: Recognition > Recall** | Navigation is always visible (sticky header on scroll). Current page is indicated in the nav. Links are visually distinct (accent color). The user never has to remember where they are or how to get somewhere. |
| **H7: Visibility of Status** | Active nav item is highlighted. Hover states provide immediate feedback. Page transitions confirm navigation has occurred. External links are marked with a subtle icon. |
| **H8: Error Prevention** | Minimal interactive complexity means minimal error surface. Links are large enough to click easily (minimum 44px touch target per Apple HIG). |
| **H9: Error Recovery** | 404 page provides clear path back to home. All navigation paths are reversible. |
| **H10: Help** | The site is simple enough to need no documentation -- but the HCI page itself serves as meta-documentation of the design rationale. |

### 3.3 Cognitive Load Management

**Intrinsic load** (complexity of the content itself):
- Kept minimal by chunking information. Each page has one purpose. Each section has one idea. The user processes one thing at a time.

**Extraneous load** (load caused by poor design):
- Eliminated through: single-column layout (no scanning decisions), consistent typography (no decoding), generous whitespace (no visual crowding), and limited color palette (no competing signals).

**Germane load** (load that contributes to learning):
- Supported on the HCI page specifically: the design process timeline and principle cards are structured to help the user build a mental model of HCI design thinking.

**Miller's Law (7 +/- 2 items):**
- Navigation has 5 items (Home, About, Experience, Projects, HCI) -- well within the limit.
- No section presents more than 3-4 items at once before offering "see more" progressive disclosure.

**F-Pattern Reading (Western users):**
- Left-aligned headings and left-aligned body text align with the natural F-pattern scan path.
- The most important information (headings, first sentences) is positioned where the eye naturally falls.

### 3.4 Three Levels of Design (Norman)

#### Visceral Level (Immediate Sensory Reaction)
- **Clean whitespace and large typography** create an immediate impression of quality and intentionality. Research shows users form aesthetic judgments within 50ms (Lindgaard et al., 2006). The uncluttered layout signals: "this person is thoughtful and deliberate."
- **The deep teal accent** provides a subtle warmth that prevents the design from feeling cold or sterile.
- **Smooth, quiet animations** (fade-ins, hover transitions) create a sense of polish without overstimulating.

#### Behavioral Level (Usability and Function)
- **Navigation is effortless**: 5 clear items, always visible, current state always indicated.
- **Content is scannable**: Bold headings, short paragraphs, clear visual hierarchy mean the user can find what they need in seconds.
- **Performance is design**: The site should load in under 1 second. No heavy frameworks, no unnecessary JavaScript, no large unoptimized images. Fast = pleasant to use.
- **Responsive without compromise**: The same content and functionality on mobile and desktop, not a degraded mobile experience.

#### Reflective Level (Meaning and Self-Image)
- **The minimalist aesthetic reflects Wing's professional identity**: a person who values clarity, precision, and thoughtfulness -- qualities essential in both AI and finance.
- **The HCI page demonstrates intellectual depth**: it says "I don't just build things, I think carefully about why and how I build them."
- **The career narrative (Carta + Costco + HKUST) is told as a coherent story**, not a list of jobs. The reflective level is where the visitor forms a lasting impression of Wing as a person, not just a set of skills.

---

## 4. Navigation Design

### Desktop (>= 1024px)
```
+------------------------------------------------------------------+
|  Wing Chun Leung          About  Experience  Projects  HCI       |
+------------------------------------------------------------------+
```
- Fixed to top on scroll (becomes sticky after scrolling past hero).
- 56px height. Background: semi-transparent with backdrop blur (Apple-inspired).
- Name/logo on left, links on right. Standard web convention (H1: Consistency).
- Current page link has accent color underline (2px, offset 4px below text).
- Transition: background goes from transparent (over hero) to frosted white on scroll.

### Mobile (< 1024px)
```
+----------------------------------+
|  Wing Chun Leung            [=]  |
+----------------------------------+
```
- Hamburger menu icon (3-line) on right.
- Opens a full-screen overlay with centered navigation links, large touch targets (56px line height).
- Close button clearly visible (top-right X).
- Simple fade-in transition for the overlay.

---

## 5. Component Specifications

### 5.1 Experience Card
```
+------------------------------------------+
|  PE Analyst                               |
|  Carta  ·  2023 - 2024                   |
|                                           |
|  One-line impact statement describing     |
|  the most important contribution.         |
|                                           |
|  [Read more ->]                           |
+------------------------------------------+
```
- Background: `#FFFFFF` (Surface)
- Border: 1px `#E5E5E5` or no border with subtle `box-shadow: 0 1px 3px rgba(0,0,0,0.06)`
- Border-radius: 12px
- Padding: 32px
- Title: H3 (24px, 600 weight)
- Meta (company + date): Body Small (14px, 400 weight, `#6B6B6B`)
- Description: Body (18px, 400 weight)
- Link: Accent color, 500 weight

### 5.2 Hero Section
```
+-------------------------------------------------+
|                                                 |
|                                                 |
|           Wing Chun Leung                       |
|                                                 |
|     MSc AI @ HKUST | Building at the            |
|     intersection of finance                     |
|     and intelligence.                           |
|                                                 |
|                                                 |
|                    [v]  (scroll indicator)       |
+-------------------------------------------------+
```
- Full viewport height (`100vh`)
- Content vertically and horizontally centered
- Name: Display size (64px, 700 weight, `#1A1A1A`)
- Subtitle: H3 size (24px, 400 weight, `#6B6B6B`)
- Animated scroll indicator: subtle chevron bouncing gently (respects `prefers-reduced-motion`)
- Background: `#FAFAFA` (clean, no gradients, no images)

### 5.3 Section Header
```
Experience
-------------------------------------------
```
- H2 (36px, 600 weight)
- Optional thin horizontal rule below (1px, `#E5E5E5`)
- 48px margin below before first content element

### 5.4 Navigation Link (Active State)
```
  About   Experience   Projects   HCI
                ~~~~~~~~
```
- Active: accent color text + 2px underline
- Inactive: `#1A1A1A` text, no underline
- Hover: accent color text, underline fades in (150ms)

---

## 6. Responsive Breakpoints

| Breakpoint | Name    | Layout Changes |
|------------|---------|----------------|
| < 640px    | Mobile  | Single column, 24px padding, hamburger nav, reduced type scale |
| 640-1023px | Tablet  | Single column, 48px padding, hamburger nav, intermediate type |
| >= 1024px  | Desktop | Single column (720px max), 64px padding, horizontal nav |
| >= 1440px  | Wide    | Same as desktop but more side whitespace (content stays 720px) |

Content does not reflow into multi-column at any breakpoint. The single-column approach is maintained universally. Only spacing, typography size, and navigation pattern change.

---

## 7. Performance Requirements (Design-Driven)

Performance is a design decision, not just a technical concern:

- **First Contentful Paint**: < 1.0s (the hero text must appear near-instantly)
- **Total page weight**: < 200KB initial load (excluding images)
- **Font loading**: Use `font-display: swap` to prevent invisible text. Self-host Inter and subset to Latin characters only (~30KB variable font).
- **Images**: WebP/AVIF format, lazy-loaded below the fold, with explicit width/height to prevent layout shift.
- **No JavaScript framework overhead for initial render**: Consider static site generation (Astro, Hugo, or even plain HTML/CSS) for maximum performance.
- **Zero layout shift (CLS = 0)**: All dimensions declared, all fonts preloaded.

---

## 8. Accessibility Checklist (Design-Level)

| Requirement | Specification |
|-------------|--------------|
| Color contrast (normal text) | >= 4.5:1 ratio (WCAG AA). `#1A1A1A` on `#FAFAFA` = 16.6:1. `#6B6B6B` on `#FAFAFA` = 5.4:1. Both pass. |
| Color contrast (large text) | >= 3:1 ratio. All heading combinations pass. |
| Accent on white | `#0A6E5C` on `#FAFAFA` = 5.2:1. Passes AA for normal text. |
| Touch targets | Minimum 44x44px for all interactive elements. Nav links have 56px line-height with generous horizontal padding. |
| Focus indicators | Visible focus ring (2px accent color outline, 2px offset) on all interactive elements. Never `outline: none` without a replacement. |
| Reduced motion | All animations wrapped in `@media (prefers-reduced-motion: no-preference)`. |
| Semantic HTML | Proper heading hierarchy (one H1 per page, H2 for sections, H3 for subsections). Landmarks (`<nav>`, `<main>`, `<footer>`). |
| Screen reader | Alt text for all images. ARIA labels where semantics are insufficient. Skip-to-content link as first focusable element. |
| Color independence | No information conveyed by color alone. Links are distinguished by color AND underline. |

---

## 9. Design Token Summary (Implementation-Ready)

```css
:root {
  /* Colors - Light */
  --color-bg:            #FAFAFA;
  --color-surface:       #FFFFFF;
  --color-text-primary:  #1A1A1A;
  --color-text-secondary:#6B6B6B;
  --color-text-tertiary: #9B9B9B;
  --color-border:        #E5E5E5;
  --color-accent:        #0A6E5C;
  --color-accent-hover:  #085649;
  --color-accent-subtle: #E8F5F1;

  /* Typography */
  --font-family:         'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  --font-mono:           'JetBrains Mono', 'Fira Code', monospace;
  --font-size-display:   4rem;
  --font-size-h1:        3rem;
  --font-size-h2:        2.25rem;
  --font-size-h3:        1.5rem;
  --font-size-body:      1.125rem;
  --font-size-small:     0.875rem;
  --font-size-caption:   0.75rem;

  /* Spacing */
  --space-xs:    0.25rem;   /* 4px */
  --space-sm:    0.5rem;    /* 8px */
  --space-md:    1rem;      /* 16px */
  --space-lg:    1.5rem;    /* 24px */
  --space-xl:    2rem;      /* 32px */
  --space-2xl:   3rem;      /* 48px */
  --space-3xl:   6rem;      /* 96px */
  --space-4xl:   8rem;      /* 128px */

  /* Layout */
  --max-content-width:   720px;
  --max-container-width: 1200px;
  --nav-height:          56px;
  --border-radius:       12px;
  --border-radius-sm:    8px;

  /* Transitions */
  --transition-fast:     150ms ease;
  --transition-base:     300ms ease-out;
}
```

---

## 10. Summary of Key Design Decisions and Their HCI Justifications

| Decision | Justification |
|----------|--------------|
| Single-column layout | Eliminates scanning decisions, reduces extraneous cognitive load, supports F-pattern reading. (H3: Minimalism, Gestalt: Continuation) |
| 720px max content width | Maintains 65-75 character line length for optimal readability. Supported by typography research (Bringhurst). |
| Inter as sole typeface | Single typeface reduces cognitive overhead. Variable font reduces load time. Professional, neutral character matches Wing's identity. (H1: Consistency) |
| Near-monochrome + single accent | Minimizes color-related cognitive load. Single accent creates clear signifier for interactive elements. (H3: Minimalism, H6: Recognition, Gestalt: Similarity) |
| 128px section spacing | Creates distinct "rooms" for each content section. Leverages Gestalt Proximity -- large gaps signal distinct content groups. |
| Sticky navigation with blur | Always visible = recognition over recall (H6). Frosted glass effect is familiar from Apple ecosystem (H1: External Consistency). |
| 5 navigation items | Well within Miller's Law (7+/-2). Each label is self-explanatory (H2: Match Real World). |
| HCI page as meta-demonstration | The course page both describes and demonstrates HCI principles, creating a reflective-level design experience (Norman). |
| No parallax, no autoplay | Respects users with vestibular disorders. Follows WCAG 2.1 SC 2.3.3. Reduces extraneous cognitive load. |
| Performance targets < 1s FCP | Speed is perceived quality. Fast sites score higher on aesthetic preference (research by Google, 2017). Behavioral-level design excellence. |

---

## Sources

- [The Essence of Apple Design (Encyclopedia Design)](https://encyclopedia.design/2025/02/03/the-essence-of-apple-design-a-deep-dive-into-human-centered-innovation/)
- [Apple Human Interface Guidelines: Typography](https://developer.apple.com/design/human-interface-guidelines/typography)
- [Apple WWDC25: New Design System](https://developer.apple.com/videos/play/wwdc2025/356/)
- [Nielsen's 10 Usability Heuristics (NN/G)](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Norman's Three Levels of Design (IxDF)](https://www.interaction-design.org/literature/article/norman-s-three-levels-of-design)
- [Don Norman's Emotional Design and Web Applicability (Softway)](https://www.softway.net/blog/don-normans-three-levels-of-emotional-design-and-their-applicability-in-web-design/1363/)
- [Best Minimal Websites (Awwwards)](https://www.awwwards.com/websites/minimal/)
- [Awwwards Portfolio Winners](https://www.awwwards.com/websites/winner_category_portfolio/)
- [Top 100 Creative Portfolio Websites 2025 (Muzli)](https://muz.li/blog/top-100-most-creative-and-unique-portfolio-websites-of-2025/)
- [Minimalist Portfolio Examples (ReallyGoodDesigns)](https://reallygooddesigns.com/minimalist-portfolio-website/)
- [18 Minimalist Website Examples 2026 (Colorlib)](https://colorlib.com/wp/minimalist-website-examples/)
- [Minimalist Color Palette and Typography (Bejamas)](https://bejamas.com/blog/minimalist-color-palette-and-typography-in-web-design)
- [50 Website Color Schemes 2026 (HookAgency)](https://hookagency.com/blog/website-color-schemes-2020/)
- [Best Fonts for Websites 2026 (Figma)](https://www.figma.com/resource-library/best-fonts-for-websites/)
- [Font Pairing Chart 2026 (Elementor)](https://elementor.com/blog/font-pairing-chart/)
- [Typography Web Design Guide (design.dev)](https://design.dev/guides/typography-web-design/)
- [UI Font Size Guidelines (b13)](https://b13.com/blog/designing-with-type-a-guide-to-ui-font-size-guidelines)
- [Design for the Human Mind (Medium/Bootcamp)](https://medium.com/design-bootcamp/design-for-the-human-mind-how-cognitive-science-shapes-ux-design-f0b83e3da6b6)
- [Fintech Website Design Best Practices (The Alien Design)](https://www.thealien.design/insights/fintech-ui-design)
- [Best Fintech Website Designs 2026 (Azuro Digital)](https://azurodigital.com/fintech-website-examples/)
