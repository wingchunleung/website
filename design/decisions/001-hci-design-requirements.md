# Design Decision Record 001: HCI Design Requirements Analysis

**Date**: 2026-03-19
**Status**: Proposed
**Context**: Comprehensive HCI analysis for Wing Chun Leung's personal website, grounded in ARIN5301 principles (Prof. Xiaojuan Ma, HKUST). The site must be artistic AND human-centered -- neither dimension dominates.

---

## 1. Nielsen's 10 Heuristics -- Applied to a Personal Website

### H1: Consistency and Standards

**Internal Consistency**
- REQ-H1.1: Establish a single typographic scale and use it everywhere. Headings, body text, captions, and labels must each have exactly one font size, weight, and line-height definition. No ad hoc font sizes.
- REQ-H1.2: Define a color token system (primary, secondary, accent, surface, on-surface, error) and reference only tokens -- never raw hex values -- in all components. This guarantees that an artistic palette still behaves predictably.
- REQ-H1.3: Interactive elements (links, buttons, cards) must share a consistent hover/focus/active state pattern. If links underline on hover, ALL links underline on hover. If cards elevate on hover, ALL cards elevate on hover.
- REQ-H1.4: Spacing must follow a consistent base unit (e.g., 8px grid). Margins, padding, and gaps should be multiples of the base unit.

**External Consistency**
- REQ-H1.5: Navigation placement must follow the convention users expect from portfolio/personal sites: primary nav at the top (horizontal bar or hamburger on mobile), not in unconventional locations (bottom, left sidebar only, hidden behind a gesture).
- REQ-H1.6: The logo/name in the top-left must link to the home page. This is a web-wide convention; violating it creates a Severity 3 usability problem.
- REQ-H1.7: External links should open in new tabs and be visually marked (icon or underline style) to distinguish them from internal links -- following the Principle of Least Surprise.

**Metaphorical Consistency**
- REQ-H1.8: If the site uses any skeuomorphic or metaphorical elements (e.g., a "portfolio" metaphor), carry the metaphor through completely. A half-committed metaphor confuses more than no metaphor at all.

---

### H2: Match Between System and Real World (Mapping)

- REQ-H2.1: Navigation labels must use user-language, not designer-language. Use "About", "Projects", "HCI Course", "Contact" -- not "Bio Module", "Works Repository", "Academics", or "Connect".
- REQ-H2.2: The information architecture must mirror how visitors mentally categorize personal-site content. User mental model testing (from portfolio site conventions) suggests: **Person -> Work -> Credentials -> Contact**. Navigation order should follow this natural sequence.
- REQ-H2.3: Project descriptions should lead with outcomes and relevance, not technical implementation details. Recruiters think in terms of "what problem did this solve?" not "what framework was used?"
- REQ-H2.4: The HCI course page should be structured around assignments/deliverables (matching how a professor/TA would look for graded work), not around lecture topics.
- REQ-H2.5: Dates and formats should follow the conventions of the target audience. Since this is an academic/professional context with a Hong Kong university, support both DD/MM/YYYY and relative dates ("3 months ago").

---

### H3: Aesthetic and Minimalist Design

- REQ-H3.1: Every element on each page must serve one of these purposes: (a) communicate identity, (b) enable navigation, (c) present content, or (d) provide feedback. If an element does none of these, remove it.
- REQ-H3.2: The home/landing page should present a maximum of 3 primary actions above the fold. More than 3 creates choice paralysis (Hick's Law) and competes with the artistic first impression.
- REQ-H3.3: Artistic expression should be channeled through intentional design decisions (typography, whitespace, color, imagery, motion) rather than through adding more elements. Minimalism and artistry are not opposites -- restraint IS artistic.
- REQ-H3.4: De-emphasize secondary information through visual hierarchy (smaller size, lower contrast, collapsible sections) rather than removing it entirely. A recruiter wants project details; a casual visitor does not. Progressive disclosure serves both.
- REQ-H3.5: Content density should vary by page purpose. The landing page should be spacious and atmospheric; the HCI course page can be denser since users arrive with specific retrieval goals.

**Occam's Razor application**: If choosing between two layouts that serve the same user goal, choose the one with fewer elements, fewer interactions, and fewer cognitive steps.

---

### H4: User Control and Freedom (Freedom)

- REQ-H4.1: Every page must be directly accessible via URL (deep linking). Users who arrive from a search engine or shared link must never be forced through the home page first.
- REQ-H4.2: Navigation must be visible and accessible from every page. No page should be a dead end.
- REQ-H4.3: If the site includes any modal overlays (e.g., image lightboxes for project screenshots), they must be closeable via: (a) a visible close button, (b) clicking outside the modal, and (c) pressing Escape. Three exit paths prevent users from feeling trapped.
- REQ-H4.4: If the site uses scroll-based animations or transitions, provide a "reduced motion" mode that respects `prefers-reduced-motion`. Forced animation removes user control.
- REQ-H4.5: The browser back button must always work as expected. No history manipulation that breaks backward navigation.
- REQ-H4.6: If the contact form has multiple fields, allow the user to clear the form (undo all input) with a single action.

---

### H5: Flexibility and Efficiency of Use

- REQ-H5.1: Serve two distinct user types with different efficiency needs:
  - **Casual visitors** (friends, curious people): Need a quick overview, strong visual impression, easy scanning. Optimize for the 10-second visit.
  - **Goal-directed visitors** (recruiters, professors, collaborators): Need fast access to specific content. Optimize for task completion in under 3 clicks.
- REQ-H5.2: Provide a persistent, visible navigation structure so goal-directed visitors can jump directly to any section without scrolling through the artistic experience.
- REQ-H5.3: On the Projects page, offer both a visual/gallery view (for scanning) and a list/detail view or filtering mechanism (for searching). This serves both browsing and retrieval tasks.
- REQ-H5.4: The HCI Course page should have anchor links or a table of contents so a professor can jump directly to a specific assignment.
- REQ-H5.5: Support keyboard navigation site-wide. Tab order must be logical; focus must be visible; Enter/Space must activate interactive elements.
- REQ-H5.6: Ensure the site is fully functional with JavaScript disabled for the core content (progressive enhancement). Artistic enhancements may require JS, but content must not.

---

### H6: Recognition Rather Than Recall

- REQ-H6.1: Navigation labels must always be visible -- not hidden behind hover states or icon-only menus on desktop. On mobile, a hamburger menu is acceptable because it is a learned convention, but it must animate open to reveal text labels (not just icons).
- REQ-H6.2: The current page/section must be visually indicated in the navigation (active state: bold, underline, color change, or indicator dot). Users should never have to remember where they are.
- REQ-H6.3: Project cards must show enough preview information (title, thumbnail, one-line description, category tag) so users can recognize whether a project is relevant without clicking into it.
- REQ-H6.4: On the HCI Course page, assignment titles should include descriptive names (not just "Assignment 1") so the professor recognizes the deliverable by name.
- REQ-H6.5: Contact methods should be presented as recognizable icons + text labels (not icons alone). An envelope icon without the word "Email" forces recall.
- REQ-H6.6: If navigation uses section categories, keep the count to 5 (+/-2) top-level items maximum, aligned with Miller's Law and the knowledge base's navigation guideline.

---

### H7: Visibility of System Status

- REQ-H7.1: Page transitions/loading must provide visual feedback. If using client-side routing (SPA), show a progress indicator or skeleton screen during navigation. A static site with instant loads is also acceptable -- the key is that users never see a blank screen.
- REQ-H7.2: Hover states on all interactive elements must provide immediate visual feedback (within 100ms per GOMS rapid response requirement) confirming "this is clickable."
- REQ-H7.3: Form submission (contact page) must provide clear state feedback: (a) button changes to "Sending..." during submission, (b) success message appears on completion, (c) error message appears on failure. Never leave the user wondering if their message was sent.
- REQ-H7.4: Scroll position indicators (subtle progress bar or section indicators) can help users understand where they are in long-form content. This is optional but recommended for the HCI Course page if it contains multiple assignments.
- REQ-H7.5: External links should have a visual indicator (small arrow/icon) so users know they are about to leave the site before clicking.

---

### H8: Error Prevention

- REQ-H8.1: Contact form validation should be inline and preventive. Validate email format as the user types (or on blur); don't wait for form submission to report errors.
- REQ-H8.2: If the site has any search functionality, provide auto-suggestions or "did you mean?" to prevent no-results dead ends.
- REQ-H8.3: Navigation structure should be flat enough that users cannot get lost. Maximum 2 levels of hierarchy for the primary content (e.g., Projects > Individual Project). Deep nesting creates disorientation errors.
- REQ-H8.4: Touch targets on mobile must be at least 44x44px (Apple HIG) to prevent mis-tap errors. Per the knowledge base, this is critical for Fitts's Law compliance.
- REQ-H8.5: Avoid ambiguous links. Never use "Click here" or "Read more" as standalone link text. Links should describe their destination: "View the HCI Heuristic Evaluation report" not "Click here."

---

### H9: Help Users Recognize, Diagnose, and Recover from Errors

- REQ-H9.1: Custom 404 page is mandatory. It must: (a) clearly state "This page doesn't exist" in plain language, (b) provide links to the home page and main sections, (c) optionally suggest similar content. The 404 page should maintain the site's artistic identity -- an error page is still part of the experience.
- REQ-H9.2: If the contact form fails to send, the error message must explain what happened and what to do: "Message could not be sent. Please try again, or email wing@example.com directly."
- REQ-H9.3: Broken image fallbacks: if a project image fails to load, show a styled placeholder with the project name rather than a broken image icon.
- REQ-H9.4: If any content is time-sensitive (e.g., "currently studying at HKUST"), ensure it either auto-updates or is written in a way that ages gracefully to prevent information staleness errors.

---

### H10: Help and Documentation

- REQ-H10.1: A personal website should NOT need a help page. If users need instructions to navigate the site, the design has failed. This is the strongest test of the design's intuitiveness.
- REQ-H10.2: However, contextual micro-help is appropriate: tooltips on icons, placeholder text in form fields, brief explanatory text at the top of the HCI Course page explaining its purpose.
- REQ-H10.3: The HCI Course page itself may benefit from a brief introductory paragraph explaining the page's structure (e.g., "Below are my deliverables for ARIN5301 Human-Computer Interaction, organized by assignment.") This helps a professor quickly understand the page's purpose and structure.

---

## 2. Gestalt Principles -- Specific Layout Recommendations

### Proximity

- REQ-G1: Group related content into distinct visual clusters with clear whitespace separation between groups. Specifically:
  - Navigation items should be tightly spaced relative to the distance between the nav bar and page content.
  - On the Projects page, each project card's title, image, and description must be closer to each other than to adjacent project cards.
  - Contact information items (email, LinkedIn, GitHub) should be grouped tightly together, separated from surrounding content by at least 2x the internal spacing.
  - Form field labels must be closer to their corresponding input field than to the preceding field's input. (Top-aligned labels preferred: they have the fastest completion times per GOMS analysis.)

### Similarity

- REQ-G2: Establish visual consistency for same-type elements:
  - All project cards must share identical structure: same border radius, shadow depth, image aspect ratio, and typography treatment.
  - All section headings across pages must share the same typographic style.
  - Interactive elements (buttons, links) must be visually distinct from non-interactive text but similar to each other.
  - Tags/categories across the site should use a consistent chip/badge style.

### Continuation

- REQ-G3: Use alignment and visual flow to guide the eye:
  - Content should align to a consistent grid (recommend 12-column for desktop, 4-column for mobile).
  - The home page should create a clear vertical visual flow guiding the user downward: hero section -> brief introduction -> featured work -> contact CTA.
  - Navigation items should be arranged along a single horizontal line (desktop) or vertical line (mobile menu) -- never scattered.

### Figure-Ground

- REQ-G4: Establish clear depth hierarchy:
  - Primary content (text, images, project cards) must clearly sit in the foreground against the background.
  - Use subtle elevation (box shadows) or background color differentiation to separate content cards from the page surface.
  - If using a modal/lightbox for project details, dim the background to at least 50% opacity to reinforce figure-ground separation.
  - The artistic background/texture (if any) must never compete with foreground content for attention. Background art should be low-contrast, blurred, or confined to areas without text.

### Symmetry

- REQ-G5: Use symmetry strategically:
  - The overall page layout should have a balanced, centered structure (centered content column with symmetric margins).
  - Project grids should use even column counts (2 or 3 columns) to maintain visual balance.
  - Asymmetry is permitted for artistic purposes but must be intentional and applied to non-critical decorative elements, never to the content structure.

### Closure

- REQ-G6: Leverage closure for visual interest:
  - Partially visible elements at the edge of the viewport can signal "scroll for more" (e.g., a project card peeking from below the fold).
  - Loading states can use incomplete shapes (circle progress indicators) that the mind naturally completes.
  - This is where artistry and HCI converge: abstract or incomplete visual motifs invite engagement without harming usability.

### Common Fate

- REQ-G7: Animated elements must move together if they are semantically related:
  - If project cards animate on scroll, all visible cards in a row should animate together (same timing, same direction).
  - Navigation links that belong to the same group should transition together (e.g., a mobile menu's items slide in as a unit, not individually).
  - Parallax effects (if used) should group foreground content together and background elements together -- never mix layers.

---

## 3. Three Levels of Design (Norman) -- Recommendations

### 3.1 Visceral Level: First Impression (0-50ms)

The visceral level is pre-conscious. Users form an aesthetic judgment before reading a single word. This is where artistic expression has the most impact and the least conflict with usability.

- REQ-V1: **Color palette**: Choose a distinctive, cohesive palette of 2-3 primary colors plus neutrals. The palette should feel intentional and personal (reflecting Wing's aesthetic sensibility), not generic. Avoid the "Bootstrap default" look. Consider: muted/desaturated tones convey sophistication; high-saturation conveys energy. Choose based on the impression Wing wants to make.
- REQ-V2: **Typography**: Select a distinctive heading typeface paired with a highly readable body typeface. The heading font is the single strongest visceral signal on a text-heavy site. A geometric sans-serif conveys modern/technical; a humanist sans-serif conveys warmth; a serif conveys authority. The body font must prioritize legibility (x-height, letter-spacing, line-height of at least 1.5).
- REQ-V3: **Hero/Landing area**: The first viewport must create an emotional response. Options that balance art and HCI:
  - A striking typographic treatment of Wing's name/tagline with generous whitespace.
  - A high-quality personal photograph or illustration with intentional composition.
  - A subtle animated element (particles, gradient shift, or geometric pattern) that creates visual life without distracting from content.
  - Avoid: autoplay video, aggressive animation, dark patterns.
- REQ-V4: **Whitespace**: Generous whitespace on the landing page signals confidence and quality. Crowded layouts trigger negative visceral reactions.
- REQ-V5: **Visual quality**: Every image, icon, and graphic must be high-resolution and intentionally chosen. A single pixelated image or generic stock photo destroys visceral trust.

### 3.2 Behavioral Level: Ease of Use (50ms - ongoing)

The behavioral level governs the experience of using the site -- whether interactions feel smooth, predictable, and satisfying.

- REQ-B1: **Navigation speed**: A user should be able to reach any content on the site within 2 clicks (or 1 click + 1 scroll) from the home page. This is the "2-click rule" adapted for a small personal site.
- REQ-B2: **Page load performance**: First Contentful Paint under 1.5 seconds. Total page weight under 2MB. Performance IS a behavioral design decision; slow sites feel broken regardless of visual quality.
- REQ-B3: **Scroll behavior**: Scrolling must feel native. No scroll hijacking, no snap-scroll unless the user expects it (e.g., a clearly paginated slideshow). Smooth scroll for anchor links is acceptable.
- REQ-B4: **Responsive transitions**: Layout changes between breakpoints must feel intentional, not broken. Test at every width from 320px to 1920px, with particular attention to the 768px and 1024px breakpoints.
- REQ-B5: **Interaction feedback**: Every clickable element must respond within 100ms. Buttons should have a pressed/active state. Links should have hover previews or color changes. Forms should validate inline.
- REQ-B6: **Content readability**: Body text should be 16-18px minimum, line-length 45-75 characters, line-height 1.5-1.8. These are not aesthetic preferences; they are cognitive ergonomic requirements.

### 3.3 Reflective Level: Meaning and Memory (Post-visit)

The reflective level determines whether someone remembers the site, shares it, or returns to it. This is where a personal site's identity lives.

- REQ-R1: **Unique identity**: The site must have at least one distinctive visual or interactive element that makes it memorable and unlike other portfolio sites. This could be a signature illustration style, an unusual color combination, a creative project presentation format, or a personal touch in the copywriting.
- REQ-R2: **Authentic voice**: All text content should sound like Wing, not like a template. First-person writing, personal anecdotes in project descriptions, and honest reflections on the HCI course create reflective meaning.
- REQ-R3: **HCI self-awareness**: Because this IS an HCI course project, the site should subtly demonstrate awareness of its own design principles. This creates a meta-narrative that a professor/TA will appreciate: the site is not just about HCI, it embodies HCI. Consider a brief "Design Philosophy" section or annotations explaining key design decisions.
- REQ-R4: **Shareability**: Include clean, descriptive Open Graph meta tags so the site looks professional when shared on LinkedIn, Twitter/X, or messaging apps. The share preview (title + description + image) is itself a reflective design artifact.
- REQ-R5: **Professional credibility**: The overall quality of the site reflects on Wing's competence. For a student demonstrating HCI knowledge, attention to detail in typography, spacing, accessibility, and error handling communicates mastery more than flashy features.

---

## 4. Accessibility Requirements (WCAG 2.1 AA Minimum)

### 4.1 Color and Contrast

- REQ-A1: Normal text (under 18pt / 24px) must have a contrast ratio of at least **4.5:1** against its background.
- REQ-A2: Large text (18pt+ / 24px+ bold, or 24pt+ / 32px+ regular) must have a contrast ratio of at least **3:1**.
- REQ-A3: Interactive component boundaries and focus indicators must have a contrast ratio of at least **3:1** against adjacent colors.
- REQ-A4: Color must never be the sole means of conveying information. Links within body text must be distinguishable by more than color alone (add underline, weight change, or icon). Tags/categories differentiated by color must also have text labels.
- REQ-A5: Test the entire color palette with a color blindness simulator (protanopia, deuteranopia, tritanopia) before finalizing. Per the knowledge base: 8% of males have color vision deficiency.

### 4.2 Keyboard Navigation

- REQ-A6: All interactive elements must be reachable and operable via keyboard alone (Tab, Shift+Tab, Enter, Space, Escape, Arrow keys where appropriate).
- REQ-A7: Focus order must follow the visual/logical reading order (left-to-right, top-to-bottom for this audience).
- REQ-A8: Focus indicators must be clearly visible -- a 2px solid outline in a high-contrast color, never `outline: none` without a custom replacement.
- REQ-A9: Skip-to-content link must be the first focusable element on every page, allowing keyboard users to bypass the navigation.
- REQ-A10: No keyboard traps. If focus enters a modal or dropdown, it must be possible to exit via Escape or Tab.

### 4.3 Screen Reader Support

- REQ-A11: Use semantic HTML5 elements: `<header>`, `<nav>`, `<main>`, `<article>`, `<section>`, `<aside>`, `<footer>`. These provide landmark navigation for screen reader users.
- REQ-A12: All images must have meaningful `alt` text. Decorative images must have `alt=""` and `role="presentation"`.
- REQ-A13: Page structure must use proper heading hierarchy: one `<h1>` per page, followed by `<h2>`, `<h3>`, etc. in order. No skipped levels.
- REQ-A14: ARIA labels for any custom interactive components (e.g., `aria-label` for icon-only buttons, `aria-expanded` for collapsible sections, `aria-current="page"` for the active nav item).
- REQ-A15: Form inputs must have associated `<label>` elements (not just placeholder text).
- REQ-A16: Set the `lang` attribute on the `<html>` element (e.g., `lang="en"`).

### 4.4 Touch and Mobile

- REQ-A17: Minimum touch target size of **44x44px** (per Apple HIG and the knowledge base). This applies to nav links, buttons, form inputs, and any interactive element.
- REQ-A18: Adequate spacing between touch targets (at least 8px) to prevent accidental taps.
- REQ-A19: No hover-only interactions on mobile. Any content revealed on hover must be accessible via tap or always visible on touch devices.
- REQ-A20: Support both portrait and landscape orientations. Do not lock orientation.
- REQ-A21: Text must be resizable up to 200% without loss of content or functionality.

### 4.5 Motion and Animation

- REQ-A22: Respect `prefers-reduced-motion` media query. When active, disable all non-essential animations, transitions, and parallax effects.
- REQ-A23: No auto-playing content that cannot be paused, stopped, or hidden (WCAG 2.2.2).
- REQ-A24: No content that flashes more than 3 times per second (WCAG 2.3.1 -- seizure prevention).

---

## 5. Information Architecture -- Hierarchical Task Analysis (HTA)

### 5.1 Persona Definitions (from Design Thinking -- Empathize phase)

**Persona A: The Recruiter (Sarah)**
- Goal: Quickly assess Wing's skills, experience, and professionalism
- Behavior: Scans headline, checks projects for relevance, looks for resume/contact
- Time budget: 30-90 seconds
- Key metric: Time to find relevant work sample

**Persona B: The Professor/TA (Dr. Chen)**
- Goal: Find and evaluate HCI course deliverables
- Behavior: Goes directly to course page, reviews each assignment
- Time budget: 5-15 minutes (thorough review)
- Key metric: Findability and completeness of assignments

**Persona C: The Colleague/Peer (Alex)**
- Goal: Learn about Wing, explore projects out of interest
- Behavior: Browses casually, reads about section, explores interesting projects
- Time budget: 2-5 minutes
- Key metric: Engagement and interest generated

**Persona D: The Professor Evaluating the Site Itself (Prof. Ma)**
- Goal: Assess whether the website demonstrates HCI principles
- Behavior: Inspects design decisions, checks accessibility, evaluates consistency
- Time budget: 10-20 minutes
- Key metric: Evidence of HCI principle application

### 5.2 HTA for Each User Goal

#### Goal 1: "Learn about Wing" (Persona A, C)

```
0. Learn about Wing
  1. Arrive at site (home page)
    1.1 Read headline/tagline -> understand who Wing is (3 seconds)
    1.2 See professional photo or personal visual -> form impression
  2. Navigate to About section
    2.1 Click "About" in navigation
    2.2 Read bio/background
    2.3 Scan skills/expertise areas
    2.4 View education history
  3. Assess credibility
    3.1 Browse project thumbnails (from About or via nav)
    3.2 Check for resume/CV link
    3.3 Note academic affiliation (HKUST)

Plan 0: Do 1, then 2, then optionally 3.
Plan 1: Do 1.1 and 1.2 simultaneously (visual scanning).
Plan 2: Do 2.1, then 2.2 through 2.4 in any order (scanning).
```

**Design implication**: Home page must answer "Who is Wing?" within 3 seconds. The tagline/headline is the most important piece of content on the entire site.

#### Goal 2: "See Wing's work/projects" (Persona A, C)

```
0. See Wing's work
  1. Navigate to Projects
    1.1 Click "Projects" in navigation
  2. Browse projects
    2.1 Scan project cards (title + thumbnail + brief description)
    2.2 Identify relevant project by category/tag
  3. Review specific project
    3.1 Click on project card
    3.2 Read project description (problem, approach, outcome)
    3.3 View project screenshots/demos
    3.4 Check technologies used
    3.5 Follow link to live project or repository (if applicable)
  4. Return to browse more
    4.1 Click back or use breadcrumb/nav to return to project list

Plan 0: Do 1, then repeat (2 -> 3 -> 4) until satisfied.
Plan 2: Do 2.1, then optionally 2.2 to filter.
Plan 3: Do 3.1, then 3.2 through 3.5 in any order.
```

**Design implication**: Project cards must provide enough information for a scan-and-decide pattern (Recognition over Recall -- H6). The project detail view must be comprehensive but scannable, with clear sections.

#### Goal 3: "Find HCI assignments" (Persona B, D)

```
0. Find HCI assignments
  1. Navigate to HCI Course page
    1.1 Click "HCI Course" in navigation
  2. Orient to page structure
    2.1 Read introductory context (course name, what's here)
    2.2 Scan table of contents / assignment list
  3. Review specific assignment
    3.1 Click on assignment link or scroll to section
    3.2 Read assignment title and description
    3.3 Review deliverable content (report, prototype, analysis)
    3.4 Check date submitted / version
  4. Navigate between assignments
    4.1 Use table of contents or next/previous links
    4.2 Return to assignment list

Plan 0: Do 1, then 2, then repeat (3 -> 4) for each assignment.
Plan 2: Do 2.1 first (context), then 2.2.
Plan 3: Do 3.1, then 3.2 through 3.4 sequentially.
```

**Design implication**: The HCI Course page needs a clear table of contents at the top. Assignments should be presented in chronological or logical order. Each assignment section should have a consistent structure (title, objective, deliverable, reflection). Anchor links are essential for direct access.

#### Goal 4: "Contact Wing" (Persona A, C)

```
0. Contact Wing
  1. Find contact information
    1.1a Click "Contact" in navigation
    1.1b OR scroll to footer (where contact info is conventionally placed)
    1.1c OR click email/social icons visible in header/sidebar
  2. Choose contact method
    2.1 Email (primary)
    2.2 LinkedIn (professional networking)
    2.3 GitHub (technical collaboration)
    2.4 Contact form (convenience)
  3. Execute contact
    3.1a Click email link (opens mail client)
    3.1b OR fill out and submit contact form
    3.1c OR click social media link (opens profile in new tab)
  4. Confirm contact was made
    4.1 See success message (if form)
    4.2 See email client open (if mailto link)

Plan 0: Do 1 (any sub-step), then 2, then 3, then 4.
Plan 1: Try 1.1a first; fall back to 1.1b or 1.1c.
```

**Design implication**: Contact information must be accessible from at least 2 locations (dedicated page/section AND footer). Email should be the primary method. A contact form reduces friction but should not be the only option (what if the form breaks?). Per H9, provide both form AND direct email as a redundancy measure.

### 5.3 Recommended Site Structure (Information Architecture)

```
Home (/)
  |-- About (/about)
  |-- Projects (/projects)
  |     |-- [Individual Project] (/projects/[slug])
  |-- HCI Course (/hci)
  |     |-- [Assignment sections as anchors] (/hci#assignment-1)
  |-- Contact (/contact)
  |
  [Footer: email, LinkedIn, GitHub, copyright]
  [404 page: custom, helpful]
```

**Top-level navigation items: 4** (About, Projects, HCI Course, Contact) -- well within the 7+/-2 guideline from Miller's Law. The home page link is the site name/logo, not a separate nav item.

**Depth: Maximum 2 levels** (Projects > Individual Project). HCI Course content should be on a single page with anchor navigation rather than sub-pages, because the professor/TA needs to see everything in one continuous view.

---

## 6. Summary: Priority-Ordered Design Requirements

### Critical (Must implement -- Severity 3-4 if violated)

| ID | Requirement | HCI Principle |
|----|-------------|---------------|
| REQ-H1.6 | Logo/name links to home | Consistency (external) |
| REQ-H2.1 | User-language nav labels | Mapping |
| REQ-H4.2 | Navigation on every page | Freedom |
| REQ-H6.2 | Active page indicator in nav | Recognition |
| REQ-H9.1 | Custom 404 page | Error Recovery |
| REQ-A1 | 4.5:1 contrast ratio for text | WCAG AA |
| REQ-A6 | Full keyboard navigability | WCAG AA |
| REQ-A11 | Semantic HTML5 | Screen readers |
| REQ-A13 | Proper heading hierarchy | Screen readers |
| REQ-A17 | 44x44px minimum touch targets | Fitts's Law / Mobile |
| REQ-V2 | Readable body typography (16px+, 1.5 line-height) | Visceral + Behavioral |
| REQ-B2 | FCP under 1.5 seconds | Behavioral |

### Important (Should implement -- Severity 2 if violated)

| ID | Requirement | HCI Principle |
|----|-------------|---------------|
| REQ-H1.1 | Consistent typographic scale | Consistency (internal) |
| REQ-H1.2 | Color token system | Consistency (internal) |
| REQ-H1.4 | Spacing on base unit grid | Consistency (internal) |
| REQ-H3.2 | Max 3 CTAs above the fold | Minimalism / Hick's Law |
| REQ-H4.4 | Respect prefers-reduced-motion | Freedom / Accessibility |
| REQ-H5.4 | TOC / anchor links on HCI page | Flexibility |
| REQ-H7.3 | Contact form state feedback | Visibility |
| REQ-H8.1 | Inline form validation | Error Prevention |
| REQ-A4 | Color not sole information carrier | WCAG AA |
| REQ-A8 | Visible focus indicators | WCAG AA |
| REQ-A9 | Skip-to-content link | WCAG AA |
| REQ-G1 | Proximity-based content grouping | Gestalt - Proximity |
| REQ-G4 | Clear figure-ground separation | Gestalt - Figure-Ground |
| REQ-R4 | Open Graph meta tags | Reflective |

### Nice to Have (Enhances experience -- Severity 0-1 if absent)

| ID | Requirement | HCI Principle |
|----|-------------|---------------|
| REQ-H5.3 | Gallery + list view for projects | Flexibility |
| REQ-H7.4 | Scroll progress indicator | Visibility |
| REQ-G6 | Partial elements hint at more content | Gestalt - Closure |
| REQ-R1 | Distinctive memorable design element | Reflective |
| REQ-R3 | Design philosophy meta-narrative | Reflective |
| REQ-V3 | Animated hero element | Visceral |

---

## 7. Design Tensions and Resolutions

### Tension: Artistic Expression vs. Minimalism (H3)
**Resolution**: Artistry should manifest in the *quality* of fewer elements, not in the *quantity* of elements. A single striking typographic treatment is more artistic than a page cluttered with decorative elements. Channel expression through: color palette, typography selection, whitespace, subtle motion, and image curation. Per Norman's principle from the knowledge base: "Attractive things work better" -- but attractiveness comes from restraint and intention, not accumulation.

### Tension: Visual Impact vs. Accessibility
**Resolution**: These are not truly in conflict. High contrast, clear typography, and meaningful color use are both accessible AND visually strong. The only real tension is with very light/low-contrast aesthetic choices. Solution: use high contrast for all text and interactive elements; reserve low-contrast treatments for purely decorative, non-informational elements (background textures, decorative shapes).

### Tension: Casual Visitor vs. Goal-Directed Visitor (H5)
**Resolution**: Progressive disclosure. The landing page serves casual visitors with its visual impression and brief overview. Clear, persistent navigation serves goal-directed visitors who can skip directly to their target. Both users are served by the same structure; no separate "paths" are needed.

### Tension: HCI Course Page Density vs. Site Aesthetics
**Resolution**: The HCI Course page has different user goals (retrieval, evaluation) than the rest of the site (impression, exploration). It is appropriate -- and in fact better HCI practice -- for this page to be denser and more utilitarian. Maintain the same color palette and typography for consistency (H1), but allow the layout to be more content-focused with less decorative whitespace. This is not inconsistency; it is contextual adaptation (matching the system to the user's current task -- H2).
