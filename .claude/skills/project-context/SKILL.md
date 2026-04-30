---
name: project-context
description: >
  HCI-driven personal website project context. Design philosophy (HCI-grounded),
  mandatory workflow (research → multi-agent design → decision → implement),
  design token system, tech stack (Astro 5 + Tailwind + GSAP), evaluation
  methods (heuristic analysis, usability testing), and deployment setup.
  Auto-loaded by the autonomous-coding-agent skill at initialization.
user-invocable: false
disable-model-invocation: false
---

# Personal Website — Project Context

This skill provides project-specific context for the autonomous-coding-agent.
It is automatically loaded during the agent's initialization step (Section 1,
Step 3: "Check for project-specific context").

**Supporting reference files** (read when the relevant topic arises):
- `.claude/skills/project-context/hci-principles.md` — Nielsen's 10, Gestalt, Norman's 3 levels, quick reference
- `.claude/skills/project-context/design-system.md` — Ink & Signal design tokens, typography, color palette, spacing
- `.claude/skills/project-context/tech-stack.md` — Astro 5, Tailwind CSS 4, GSAP, deployment, performance budget
- `.claude/skills/project-context/workflow.md` — 4-phase mandatory workflow, multi-agent design process

---

## 1. Project Overview

Personal website for Wing Chun Leung — MSc AI student at HKUST, bridging
finance and AI. The site serves as both a personal portfolio and a platform
for HCI coursework (ARIN5301, Prof. Xiaojuan Ma).

**Design concept:** "Ink & Signal" — bright, clean, Apple/Carta-quality with
cultural undertones. Warm and welcoming, not dark or heavy.

**Pages:**
- `/` — Homepage: welcoming hero (wave animation) + scroll narrative + featured work
- `/about` — Three-part narrative (Professional, Bridge-Builder, Human)
- `/projects` — Project cards with quantified impact metrics
- `/hci` — HCI course page (celadon accent) with assignments + principles reference
- `/contact` — Contact cards (email, LinkedIn, GitHub)
- `/404` — Error recovery page

**Tech stack:** Astro 5.x + Tailwind CSS 4 + Preact islands + GSAP (planned)

**Deployment:** GitHub Pages (wingchunleung/website, gh-pages branch)

---

## 2. Design Philosophy (CRITICAL — HIGHEST PRIORITY)

**Every design decision must be traceable to an HCI principle.**

This is not just a coding project — it is an HCI research-driven design project.
The ARIN5301 course requires that all design choices be grounded in theory.

**Core principles:**
- Prioritize usability over aesthetics (but "attractive things work better" — Norman)
- Start with user needs, not solutions or problems
- Design for recognition over recall (H6)
- Minimize cognitive load (working memory ~7 items)
- Accessibility is mandatory (WCAG 2.1 AA minimum)

**Design direction:**
- **Bright, clean, modern** — white backgrounds, Apple-inspired
- **Welcoming, not cold** — the hero greets visitors warmly
- **Artistic + human-centered** — not maximum information density
- **Premium quality** — inspired by Apple.com, Carta.com

**What NOT to do:**
- No dark/heavy designs for the homepage
- No scroll-jacking
- No icon-only navigation
- No parallax without opt-in
- No animations that block content

---

## 3. Mandatory Workflow (Before Any Major Design Change)

### Phase A: Deep Research
- Analyze HCI materials from `/home/wing/Documents/HCI/` (11 PDF lecture notes)
- Research best practices for the specific design problem
- Reference `docs/hci-knowledge-base.md` for extracted principles

### Phase B: Multi-Agent Design Thinking
- Use 8+ agents to propose different UI/UX approaches
- Agents must critique each other's proposals
- Evaluate against Nielsen's 10 Heuristics + Gestalt principles
- Compare trade-offs (usability vs aesthetics vs cognitive load)

### Phase C: Decision Phase
- Combine or select the best approach
- Justify decisions using specific HCI principles
- Document reasoning in `design/decisions/`

### Phase D: Implementation
- Only after A-C are complete for the specific feature
- Code must reflect design decisions
- Self-evaluate against heuristics after implementation

**Exception:** Minor bug fixes, performance improvements, and copy changes
can skip the full workflow. Use judgment.

---

## 4. Key File Locations

```
/home/wing/website/
├── CLAUDE.md                              # Main project context (HCI principles)
├── docs/hci-knowledge-base.md             # Extracted HCI principles from course PDFs
├── design/decisions/                      # Design decision records (8 agent proposals + synthesis)
│   ├── FINAL-DESIGN-SYNTHESIS.md          # Synthesized design direction
│   ├── 001-minimalist-design-proposal.md
│   ├── 001-hci-design-requirements.md
│   ├── 001-narrative-branding-strategy.md
│   ├── 001-recruiter-friendly-design.md
│   ├── 002-tech-stack-architecture.md
│   ├── critique-risks-antipatterns.md
│   └── motion-interaction-design.md
├── src/
│   ├── layouts/BaseLayout.astro           # Shared layout with fonts, meta, slots
│   ├── components/Header.astro            # Sticky nav with frosted glass + mobile menu
│   ├── components/Footer.astro            # Footer with seal mark
│   ├── pages/index.astro                  # Homepage
│   ├── pages/about.astro                  # About page
│   ├── pages/projects.astro               # Projects page
│   ├── pages/contact.astro                # Contact page
│   ├── pages/hci/index.astro              # HCI course page
│   ├── pages/404.astro                    # Error page
│   └── styles/
│       ├── design-tokens.css              # All CSS custom properties
│       └── global.css                     # Reset, typography, utilities
└── public/
    ├── favicon.svg
    └── robots.txt
```

---

## 5. Design Token System

**Color palette (bright, Apple-inspired):**
- Background: `#ffffff` (pure white)
- Surface: `#f5f5f7` (Apple light grey)
- Text: `#1d1d1f` (Apple near-black)
- Secondary text: `#86868b`
- Accent: `#c73e1d` (vermillion) — primary accent for all pages except HCI
- HCI accent: `#7d9e8c` (celadon) — used only on the HCI course page

**Typography:**
- Display: Cormorant Garamond (Light 300) — serif, for emotional/artistic headings
- Body: Inter (400/500/600) — screen-optimized sans-serif
- Mono: JetBrains Mono (400) — for labels, dates, metadata

**Spacing:** 8px base unit, 96-128px section gaps, 720px max content width

---

## 6. Deployment

- **Repository:** github.com/wingchunleung/website (public)
- **Branch:** `master` (source), `gh-pages` (built output)
- **Build:** `npm run build` → `dist/` directory
- **Deploy:** `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`
- **Live URL:** https://wingchunleung.github.io/website/
- **Base path:** `/website` (configured in astro.config.mjs)

---

## 7. Agent Behavior in This Project

When running the autonomous-coding-agent in this project:

1. **Read this skill first** — understand the HCI-driven workflow
2. **Check design/decisions/** — proposals and synthesis already exist
3. **Reference docs/hci-knowledge-base.md** for HCI theory
4. **Use Telegram notifications** — send updates via `/telegram send`
5. **Commit and push periodically** — keep the repo updated
6. **Deploy after significant changes** — rebuild and push to gh-pages
7. **Never skip the HCI justification** — every visual change needs a principle
8. **Prefer bright, clean designs** — the user explicitly prefers Apple-like quality
9. **Test in browser when possible** — verify visual output, not just code
