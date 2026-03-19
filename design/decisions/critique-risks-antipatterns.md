# Critique Agent: Risks, Anti-Patterns, and Specific Warnings

## For Wing Chun Leung's Personal Website (MSc AI, HKUST)

**Agent Role**: Devil's Advocate / Critique Agent
**Date**: 2026-03-19
**Grounding**: Nielsen's 10 Heuristics, Gestalt Principles, Norman's Three Levels of Design, WCAG 2.1/2.2, Core Web Vitals

---

## SECTION 1: COMMON PERSONAL WEBSITE DESIGN MISTAKES

### 1.1 The "Show, Don't Explain" Trap
**Risk**: Portfolios that present polished outputs with zero explanation. Reviewers see the result but not the reasoning — no sense of what problem was being solved, what was owned, or which constraints shaped the work.
**Why it matters for this project**: Wing's background spans finance, AI, and HCI. Without narrative context, visitors will see disconnected pieces rather than a coherent journey.
**Severity**: 3 (Major usability problem)

### 1.2 Overcomplicated Design as "Skill Showcase"
**Risk**: Developers try to showcase skills through overly complex designs — parallax layers, WebGL backgrounds, custom cursors, animated page transitions. Potential employers and academic contacts value clarity and functionality over flashiness.
**Concrete example**: A Three.js particle background that takes 3 seconds to initialize, during which the visitor sees nothing useful.
**Severity**: 3

### 1.3 The "About Me" Page Problem
**Risk**: Two opposite failure modes:
- **Too much text**: A wall of biographical prose that nobody reads. Users scan, they don't read.
- **Too little substance**: A two-line bio with a stock photo that reveals nothing about the person.
**What to watch for**: The finance-to-AI-to-HCI narrative is genuinely interesting but risks becoming a long autobiography. The story needs to be told through structure and milestones, not paragraphs.
**Severity**: 2

### 1.4 Missing or Unclear Calls-to-Action
**Risk**: Visitors arrive and cannot quickly determine: What does this person want me to do? Contact them? Read their research? Hire them? View coursework?
**Implication**: Personalized, specific CTAs perform 202% better than generic ones. "View my HCI course portfolio" beats "See my work."
**Severity**: 2

### 1.5 Desktop-First Design Assumption
**Risk**: Over half of web visitors browse via mobile. Artistic layouts designed desktop-first frequently break on mobile: text becomes unreadable, buttons overlap, images stretch awkwardly. This is especially true for CSS Grid layouts with fixed column widths and custom artistic positioning.
**Severity**: 3

---

## SECTION 2: THE "APPLE CLONE" AND MINIMALISM TRAPS

### 2.1 Why Apple-Clone Designs Fail for Personal Sites
**The problem**: Apple's design works because Apple has:
- A multi-billion-dollar brand that provides meaning to the whitespace
- Professional product photography that fills the visual void
- A marketing purpose (sell products) that aligns with minimal, focused layouts

A personal portfolio has none of these. Cloning Apple's aesthetic produces a site that feels:
- **Cold and impersonal** — the opposite of what a personal site should convey
- **Generic** — indistinguishable from thousands of other developer portfolios
- **Empty rather than minimal** — whitespace without purpose is not minimalism, it is absence

### 2.2 When Minimalism Becomes Emptiness
**The failure pattern**: Removing elements until nothing communicates personality. A white background, a sans-serif font, and a centered name is not design — it is a default state.
**The fix the site should pursue**: "Warm minimalism" — pairing clean layouts with:
- Considered typography that has character (not just Inter/Helvetica)
- Subtle microinteractions that reveal personality
- Strategic use of color as accent rather than absence of color
- Content density that rewards scanning

### 2.3 The "Clean" = "Cold" Problem
**Risk**: Minimalist web designs can feel clinical and unwelcoming when they strip away all texture, warmth, and personality. For an HCI-focused personal site, coldness directly contradicts the premise — HCI is about human needs, and a cold interface fails at the visceral level (Norman).
**Severity**: 2

---

## SECTION 3: SCROLL-JACKING AND ANIMATION ANTI-PATTERNS

### 3.1 Scroll-Jacking: The Cardinal Sin
**What it is**: Altering the normal scroll speed, direction, or behavior.
**Why it is dangerous**:
- "Steals your scroll, dictates your pace, and breaks decades of user instinct" (WebDesignerDepot)
- Significant threats to user control and freedom (Nielsen H4)
- Breaks on older hardware and with assistive technologies
- Often horrible on mobile/tablet devices
- Discoverability drops by nearly 50% when navigation is hidden behind scroll-dependent reveals

**For this project specifically**: An HCI course page with scroll-jacking would be deeply ironic — violating the very principles it teaches.
**Severity**: 4 (Usability catastrophe if implemented)

### 3.2 Animation That Blocks Content
**Risk**: Key content delayed behind reveals, "cinematic" pacing, or entrance animations. If users must "earn" the message, many will leave.
**Concrete numbers**: 47% of users expect a page to load in 2 seconds or less. If the hero section needs a 2-second animation to appear, you have lost them.
**What to avoid**:
- Staggered fade-in animations on text content
- Animations that play on every page visit (not just the first)
- Scroll-triggered animations that require specific scroll positions to fire
- Any animation that prevents reading content immediately

### 3.3 Parallax Effects and Vestibular Disorders
**Risk**: Parallax effects (background/foreground elements moving at different speeds) are harmful to people with vestibular disorders. This is not a theoretical concern — it causes nausea, dizziness, and disorientation.
**Requirement**: If any parallax or motion is used, `prefers-reduced-motion` media query MUST be respected. This is not optional.
**Severity**: 3

### 3.4 Performance Cost of Scroll-Based Animations
**Risk**: Scroll-based animations compete directly with input responsiveness — they run during interaction, which means the browser is doing animation work when it should be processing user input. This degrades Interaction to Next Paint (INP).
**Severity**: 2

---

## SECTION 4: PERFORMANCE AND TECHNICAL PITFALLS

### 4.1 Load Time Targets (Non-Negotiable)
Based on 2025-2026 benchmarks:

| Metric | Target | Consequence of Failure |
|--------|--------|----------------------|
| **Overall load time** | < 3 seconds | 53% of mobile users abandon sites slower than 3s |
| **Largest Contentful Paint (LCP)** | ≤ 2.5 seconds | Google ranking penalty |
| **Interaction to Next Paint (INP)** | ≤ 200ms | Perceived sluggishness |
| **Cumulative Layout Shift (CLS)** | ≤ 0.1 | Visual instability, loss of trust |
| **Mobile load time** | 1-2 seconds ideal | Average is 8.6s — most sites fail |
| **Desktop benchmark** | ≤ 1.65 seconds | Average for first-page Google results |

### 4.2 Font Loading Performance Trap
**The problem**: Over 80% of websites use custom web fonts. Custom fonts cause layout shifts when they load late — the browser renders fallback text, then "swaps" to the custom font, causing visible text reflow.
**Specific risks**:
- Using multiple font families (e.g., a display font + body font + monospace) multiplies the problem
- Artistic typography choices (thin weights, unusual fonts) have larger metric differences from fallback fonts, causing worse CLS
- Google Fonts loaded from CDN adds DNS lookup + connection time

**Mitigation requirements**:
- Use `font-display: swap` at minimum
- Preload critical fonts with `<link rel="preload">`
- Match fallback font metrics using `size-adjust`, `ascent-override`, `descent-override`
- Limit to 2 font families maximum
- Self-host fonts rather than loading from Google Fonts CDN

### 4.3 Image Optimization
**Risk for artistic sites**: High-resolution hero images, background textures, and portfolio screenshots are the single largest contributor to slow load times.
**Requirements**:
- Use modern formats (WebP, AVIF) with fallbacks
- Implement responsive images with `srcset`
- Lazy-load below-the-fold images
- Compress aggressively — portfolio images do not need to be 4K
- Consider blur-up placeholder technique for large images

### 4.4 JavaScript Bundle Size
**Risk**: Animation libraries (GSAP, Framer Motion, Three.js) add significant weight.
**Concrete numbers**:
- Three.js: ~150KB minified + gzipped
- GSAP: ~25KB for core, but grows with plugins
- Framer Motion: ~30KB
- Lottie: ~50KB + animation JSON files

**Warning**: If the site loads a 150KB animation library to display a subtle hover effect, the cost-benefit is catastrophic.

### 4.5 SPA Rendering and SEO
**Risk**: Single Page Applications render content client-side via JavaScript. Search engine crawlers may see an empty container, not your content.
**Specific implications**:
- Google Images drives significant traffic for portfolio sites — images must be indexable
- Search engines treat single-page sites as one unified entity, making it harder to rank for specific topics (e.g., "HCI course portfolio" vs. "AI projects")
- The finance/AI/HCI narrative needs distinct, crawlable pages to rank for each topic

**Requirements**:
- Use SSR (Server-Side Rendering) or SSG (Static Site Generation)
- Ensure each major section has its own URL with proper meta tags
- Implement structured data / JSON-LD for person schema
- Every image needs descriptive `alt` text and meaningful filenames

---

## SECTION 5: ACCESSIBILITY FAILURES IN "ARTISTIC" WEBSITES

### 5.1 The Scale of the Problem
- 95.9% of the top million homepages fail WCAG standards (WebAIM Million 2024)
- Average homepage has 57 distinct WCAG failures
- ADA website lawsuits exceeded 2,014 in just the first half of 2025
- Artistic sites are disproportionately worse because aesthetics override accessibility

### 5.2 Specific Accessibility Risks for This Project

#### 5.2.1 Color Contrast
**Risk**: Artistic color palettes frequently violate WCAG contrast ratios.
- **Text**: Minimum 4.5:1 contrast ratio (AA standard)
- **Large text**: Minimum 3:1 contrast ratio
- **UI components**: Minimum 3:1 against adjacent colors
**Common failure**: Light gray text on white backgrounds for "elegant" look. Thin font weights exacerbate this.
**Note from HCI knowledge base**: Color blindness affects 8% of males — never use color as the only indicator.
**Severity**: 3

#### 5.2.2 Missing Alternative Text
**Risk**: Portfolio images without meaningful alt text. Screen reader users experience nothing.
**For this project**: HCI course artifacts, project screenshots, and diagrams all need descriptive alt text — not "image1.png" but "Hierarchical Task Analysis diagram for campus navigation redesign."
**Severity**: 3

#### 5.2.3 Heading Structure
**Risk**: Pages with considerable visual content often lack proper heading hierarchy (`h1` > `h2` > `h3`). Screen reader users navigate by headings — without them, the page is an undifferentiated wall.
**Severity**: 3

#### 5.2.4 Keyboard Navigation
**Risk**: Custom interactive elements (animated cards, creative navigation, hover-dependent content) that only work with a mouse.
**Requirements**: Every interactive element must be focusable, have visible focus indicators, and be operable via keyboard.
**Severity**: 3

#### 5.2.5 Motion and Animation
**Risk**: Animations that cannot be disabled violate WCAG 2.3.3 (Animation from Interactions).
**Requirements**: Respect `prefers-reduced-motion`, provide pause/stop controls for any auto-playing content.
**Severity**: 3

#### 5.2.6 Semantic HTML
**Risk**: Using `<div>` and `<span>` for everything instead of semantic elements (`<nav>`, `<main>`, `<article>`, `<section>`, `<header>`, `<footer>`). This destroys screen reader navigation.
**Severity**: 2

---

## SECTION 6: PROJECT-SPECIFIC WARNINGS

### 6.1 The HCI Course Page Irony Problem
**Critical risk**: An HCI course page that violates HCI principles is not just bad design — it is self-defeating. Every visitor who knows HCI (professors, classmates, potential employers in UX) will immediately notice violations. This page will be scrutinized more than any other.

**Specific dangers**:
- Using creative navigation that breaks H1 (Consistency) to look "artistic"
- Prioritizing visual presentation of coursework over clear task flows
- Making course projects hard to find or compare
- Missing accessibility features on a page about human-centered design
- Scroll-jacking on a page about usability

**The standard is higher here**: This page must be a demonstration of HCI competence, not just a container for course artifacts.

### 6.2 The Finance-to-AI Narrative Confusion
**Risk**: Visitors arrive with different mental models depending on their background:
- **Recruiter for AI role**: Wants to see technical projects, not finance background
- **HCI professor**: Wants to see design thinking process, not code
- **Finance contact**: Wants to see quantitative skills, not artistic layout
- **General visitor**: Confused by a site that talks about finance AND AI AND HCI

**What could go wrong**:
- A single-narrative homepage that forces everyone through the same story
- No clear "path" for different visitor types
- Jargon from one domain alienating visitors from another
- The career transition story overshadowing current capabilities

**Recommendation**: Design for the primary audience first (likely AI/HCI employers and academic contacts), with clear secondary paths for other visitors. Do not try to tell every story equally.

### 6.3 When "Artistic" Becomes "Hard to Navigate"
**The tipping point**: Artistic design becomes a usability problem when:
- Users cannot find the navigation within 3 seconds
- The visual hierarchy does not match the information hierarchy
- Form follows concept rather than function (e.g., a "timeline" metaphor that makes it impossible to jump to recent work)
- Interactive elements are not recognizable as interactive (insufficient affordances)
- Content is subordinate to presentation (the wrapper is more prominent than what it wraps)

**The test**: If you need to explain how to use the site, the design has failed.

### 6.4 Academic Context: Course Page Design
**Common mistakes in academic course pages** (from research analyzing 280 universities):
- Design is consistently the weakest element
- Information overload: trying to show every assignment, reading, and lecture
- No clear hierarchy between major projects and minor exercises
- Missing context about what was learned vs. what was produced
- No connection between course concepts and portfolio artifacts

**For this project**: The HCI course page should demonstrate applied HCI knowledge, not just list assignments. Each artifact should connect to a principle.

---

## SECTION 7: HCI-GROUNDED CRITIQUE

### 7.1 Nielsen Heuristics Most Commonly Violated in Artistic Sites

#### H1: Consistency and Standards — MOST VIOLATED
**How artistic sites break it**: Custom navigation patterns, unconventional icons, non-standard scroll behavior, unique interaction paradigms per page section.
**Research finding**: "When you break away from gold standards of navigation design, it leaves users confused." Discoverability is cut almost in half by hiding main navigation. Task time increases and perceived difficulty rises.
**Specific warning**: Do not use an abstract icon or creative label for navigation. The hamburger menu (three lines) is already the minimum recognizable pattern — anything less conventional will fail.

#### H3: Aesthetic and Minimalist Design — PARADOXICALLY VIOLATED
**The paradox**: Sites trying to be "aesthetic and minimal" often violate this heuristic by adding decorative elements that compete with relevant information — animated backgrounds, floating particles, gradient overlays, decorative typography that reduces readability.
**The heuristic means**: Every extra element competes with relevant information. Remove or de-emphasize non-essential information. This applies to decorative elements too.

#### H4: User Control and Freedom — FREQUENTLY VIOLATED
**How artistic sites break it**: Scroll-jacking removes user control over pace. Mandatory animations trap users in sequences. Auto-advancing carousels change content before users finish reading. No way to skip intro animations.
**The standard**: Users must always be able to go back, skip ahead, and control their own pace.

#### H7: Visibility of System Status — OFTEN VIOLATED
**How artistic sites break it**: Loading states hidden behind artistic splash screens. No indication of how long an animation will take. No progress indicators for content-heavy sections. Page transitions that leave users unsure if the page is loading or broken.

#### H6: Recognition Rather Than Recall
**How artistic sites break it**: Novel icons that require learning. Navigation labels that prioritize cleverness over clarity. Hidden functionality discovered only by accident.
**Example**: Using a custom icon instead of a standard "mail" icon for contact, or labeling the about page "Genesis" instead of "About."

### 7.2 Gestalt Principle Violations in Artistic Sites

#### Proximity Violations
**How it happens**: Artistic layouts with unusual spacing cause elements to appear grouped when they are unrelated, or separated when they belong together.
**Example**: A creative grid where a project title floats equidistant between two project cards — users cannot tell which project it belongs to.

#### Figure-Ground Confusion
**How it happens**: Complex backgrounds, overlapping elements, and transparency effects make it impossible to distinguish content (figure) from decoration (ground).
**Example**: Text overlaid on a busy, animated background where neither the text nor the background is clearly dominant.
**Connection to project**: If course projects are displayed on artistic backgrounds, the project content must always be clearly the "figure."

#### Similarity Misapplication
**How it happens**: Making different types of elements look the same (e.g., decorative text and clickable links styled identically) or making same-type elements look different (e.g., each project card having a completely different visual treatment).
**For this project**: If HCI course projects look visually different from AI projects, users will correctly perceive them as separate categories. If they look the same, users will expect them to behave the same way.

#### Continuation Breaks
**How it happens**: Creative layouts that break the reading flow — elements that do not align on any consistent axis, forcing the eye to jump randomly across the page.
**For this project**: The career narrative (finance to AI to HCI) has a natural chronological continuation. Breaking this visual flow with a non-linear artistic layout would fight the natural mental model.

### 7.3 Mental Model Mismatches in Creative Navigation
**Core principle from HCI knowledge base**: Better design = Representation model closer to Mental model. Reduce the gap between what the system does and what the user thinks it does.

**Common mismatches in artistic sites**:
| User Expectation (Mental Model) | Creative Implementation | Result |
|--------------------------------|------------------------|--------|
| Logo in top-left returns to home | Logo is a decorative element with no link | Dead end, frustration |
| Scroll down = see more content | Scroll triggers horizontal movement | Disorientation |
| Underlined text = clickable link | Underlines used as decorative elements | False affordance |
| Clicking a project card opens details | Card triggers an animation but no navigation | Confusion |
| Navigation bar is always accessible | Navigation disappears on scroll | Lost, cannot find way back |
| Back button returns to previous state | SPA does not update URL, back exits site | Data/context loss |

### 7.4 When "Creative" Increases Cognitive Load
**From the HCI knowledge base**: "Attention is a scarce resource; minimize extraneous cognitive load." Short-term memory holds approximately 7 items (Miller's Law).

**How artistic designs increase cognitive load**:
1. **Novel navigation patterns** require learning, consuming working memory that should be spent on content
2. **Inconsistent visual language** forces users to re-interpret each new section
3. **Dense visual information** (textures, animations, gradients) competes with content for attention
4. **Non-standard labels** require translation ("Genesis" → "Oh, that means About")
5. **Ambiguous interactive states** force users to guess what is clickable
6. **Artistic page transitions** break task continuity — users forget what they were looking for

**The cognitive load test**: If a visitor cannot describe the site's structure after 10 seconds, the cognitive load is too high.

---

## SECTION 8: COMPREHENSIVE RISK REGISTER

| # | Risk | Likelihood | Impact | Severity | Mitigation |
|---|------|-----------|--------|----------|------------|
| R1 | Scroll-jacking on HCI course page | Medium | Critical | 4 | Absolutely do not implement; use standard scroll behavior |
| R2 | Page load time > 3 seconds | High | High | 3 | Performance budget; lazy loading; optimize images; limit JS |
| R3 | WCAG contrast failures | High | High | 3 | Test all color combinations against 4.5:1 ratio; automated CI checks |
| R4 | Missing alt text on portfolio images | High | High | 3 | Enforce alt text in components; no empty alt on meaningful images |
| R5 | Font loading causes layout shift | High | Medium | 2 | Preload fonts; font-display: swap; fallback font metrics matching |
| R6 | Creative navigation confuses visitors | Medium | High | 3 | User test navigation with 5 people; use standard patterns |
| R7 | Mobile layout breaks on artistic design | High | High | 3 | Mobile-first CSS; test on real devices; avoid fixed positioning |
| R8 | Finance/AI/HCI narrative confusion | Medium | Medium | 2 | Clear information architecture; primary audience defined first |
| R9 | SPA prevents SEO indexing | Medium | High | 3 | Use SSR/SSG; distinct URLs per section; proper meta tags |
| R10 | Animation causes vestibular issues | Medium | High | 3 | Respect prefers-reduced-motion; no parallax without opt-in |
| R11 | HCI course page fails to demonstrate HCI competence | Medium | Critical | 4 | Self-evaluate against all 10 heuristics before shipping |
| R12 | "About Me" section either too long or too empty | High | Medium | 2 | Structured storytelling; milestones not paragraphs; user test |
| R13 | Custom cursor/interactions not keyboard-accessible | Medium | High | 3 | Test every interaction via keyboard; visible focus indicators |
| R14 | Heavy JS bundle from animation libraries | Medium | Medium | 2 | Set performance budget (< 100KB JS); measure before adding libraries |
| R15 | Artistic design feels cold and impersonal | Medium | Medium | 2 | Add texture, warmth, personality through typography and micro-copy |
| R16 | Image-heavy portfolio not optimized | High | High | 3 | WebP/AVIF; srcset; lazy loading; blur-up placeholders |
| R17 | Missing heading hierarchy for screen readers | High | Medium | 3 | Enforce h1 > h2 > h3 structure; test with screen reader |
| R18 | Back button breaks in SPA | Medium | High | 3 | Proper URL routing; history API management |
| R19 | Decorative elements compete with content (H3 violation) | Medium | Medium | 2 | Every visual element must justify its existence |
| R20 | Site requires explanation to use | Low | Critical | 4 | If you need instructions, redesign |

---

## SECTION 9: SPECIFIC "DO NOT" LIST

1. **Do not** scroll-jack. Not even "subtle" scroll-jacking. Not even "just a little slower." Standard scroll behavior only.
2. **Do not** hide navigation behind creative interactions. Navigation must be visible and standard.
3. **Do not** use animations that block content. All content must be readable with animations disabled.
4. **Do not** use color alone to convey meaning. Always pair with shape, text, or pattern.
5. **Do not** use thin font weights (100-300) for body text. Readability trumps elegance.
6. **Do not** use more than 2 custom font families. Performance cost is real.
7. **Do not** label navigation items with creative/clever names. "About" not "Genesis." "Work" not "Artifacts." "Contact" not "Transmit."
8. **Do not** auto-play videos or audio. Ever.
9. **Do not** use a splash screen or loading animation that delays content access.
10. **Do not** make the site a single-page application without SSR/SSG. SEO will suffer.
11. **Do not** use parallax effects without a `prefers-reduced-motion` fallback.
12. **Do not** create hover-dependent content reveals. Mobile has no hover.
13. **Do not** use fixed-width layouts or pixel-based breakpoints for narrow devices.
14. **Do not** put decorative animations in the critical rendering path.
15. **Do not** sacrifice the HCI course page's usability for artistic expression — this page is being judged on HCI competence.

---

## SECTION 10: THE GOLDEN RULE FOR THIS PROJECT

The CLAUDE.md states: "Prioritize usability over aesthetics (but recognize 'attractive things work better' — Norman)."

This is the correct framing, but the danger is in how "attractive things work better" gets interpreted. Norman's finding is that **attractive things are perceived as working better** — users are more forgiving of usable things that look good. It does NOT mean that attractiveness substitutes for usability. The order of operations is:

1. Make it work (behavioral level)
2. Make it clear (cognitive level)
3. Make it accessible (inclusive level)
4. Make it fast (performance level)
5. THEN make it beautiful (visceral level)

Beauty applied to a broken foundation makes the brokenness more frustrating, not less. Beauty applied to a solid foundation makes the solidity feel effortless.

---

## Sources

- [Portfolio Mistakes Designers Still Make in 2026 — Muzli](https://muz.li/blog/portfolio-mistakes-designers-still-make-in-2026/)
- [Common SEO & Web Design Mistakes to Avoid in 2026](https://www.absolute-websites.com/blog/seo/common-seo-web-design-mistakes-to-avoid-in-2026/)
- [Web Design Mistakes to Avoid in 2025 — DEV Community](https://dev.to/ronika_kashyap/web-design-mistakes-common-mistakes-you-should-avoid-in-2025-2lad)
- [10 Common Website Design Mistakes to Avoid in 2026](https://prodigymarketingagency.com/10-common-website-design-mistakes-you-should-avoid/)
- [Top 10 Web Design Mistakes — Digital Silk](https://www.digitalsilk.com/digital-trends/web-design-mistakes/)
- [5 Mistakes Developers Make in Their Portfolio Websites](https://www.devportfoliotemplates.com/blog/5-mistakes-developers-make-in-their-portfolio-websites)
- [8 UX Mistakes on Portfolio Websites — Sarah Doody](https://sarahdoody.medium.com/8-ux-mistakes-to-avoid-on-your-ux-portfolio-website-4d6dd437cf21)
- [Bad Websites Exposed: Design Failures — DesignRush](https://www.designrush.com/agency/website-design-development/trends/bad-websites)
- [WCAG Compliance: Why 96% of Websites Are Stuck — Accessibility.Works](https://www.accessibility.works/blog/wcag-web-compliance-why-websites-fail/)
- [Top Ten Most Common Accessibility Issues — TPGi](https://www.tpgi.com/ten-common-web-accessibility-issues/)
- [The 6 Most Common WCAG Failures — Recite Me](https://reciteme.com/news/6-most-common-wcag-failures/)
- [Best Practices for Fonts — web.dev](https://web.dev/articles/font-best-practices)
- [Fixing Layout Shifts Caused by Web Fonts — DebugBear](https://www.debugbear.com/blog/web-font-layout-shift)
- [Web Fonts and Cumulative Layout Shift — Sentry](https://blog.sentry.io/web-fonts-and-the-dreaded-cumulative-layout-shift/)
- [Top CWV Optimization — web.dev](https://web.dev/articles/top-cwv)
- [How Scrolljacking Breaks UX Fundamentals — WebDesignerDepot](https://webdesignerdepot.com/how-scrolljacking-breaks-ux-fundamentals/)
- [Scrolljacking 101 — NN/g](https://www.nngroup.com/articles/scrolljacking-101/)
- [Scrolling Effects: Benefits & Risks — Digital Silk](https://www.digitalsilk.com/digital-trends/scrolling-effects/)
- [Hamburger Menus and Hidden Navigation Hurt UX — NN/g](https://www.nngroup.com/articles/hamburger-menus/)
- [10 Usability Heuristics — NN/g](https://www.nngroup.com/articles/ten-usability-heuristics/)
- [Gestalt Principles in Web Design — Swapps](https://swapps.com/blog/gestalt-principles-in-web-design/)
- [Cognitive Principles for UX — LogRocket](https://blog.logrocket.com/ux-design/cognitive-principles-for-ux-designers/)
- [Single Page Application SEO — Macrometa](https://www.macrometa.com/seo-dynamic-content/single-page-application-seo)
- [Portfolio SEO Guide — Wix](https://www.wix.com/blog/portfolio-seo)
- [Minimalism with Personality — By Design Works](https://bydesignworks.com/minimalism-with-personality-avoiding-a-cold-empty-look/)
- [Personal Academic Webpages Tips — Berkeley Townsend Center](https://townsendcenter.berkeley.edu/blog/personal-academic-webpages-how-tos-and-tips-better-site)
- [The Perfect University Course Page — Creative Navy](https://lab.interface-design.co.uk/the-perfect-university-course-page-design-guidance-b58b4f1a330f)
- [Website Load Time Statistics 2026 — Hostinger](https://www.hostinger.com/tutorials/website-load-time-statistics)
- [How Fast Should a Website Load — BrowserStack](https://www.browserstack.com/guide/how-fast-should-a-website-load)
- [Responsive Design Failures — PixelFreeStudio](https://blog.pixelfreestudio.com/responsive-design-failures-debugging-mobile-issues/)
- [Understanding Mental Models for UX — The Alien Design](https://www.thealien.design/insights/mental-model-in-ux-design)
