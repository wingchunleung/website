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
- `.claude/skills/project-context/scope.md` — **Read first.** In-scope vs deferred HCI knowledge index
- `.claude/skills/project-context/hci-principles.md` — Working subset for daily site development (Nielsen, Gestalt-as-load, Norman, need typology, Fitts/Hick, gulfs, multimodal redundancy, lab-to-world)
- `.claude/skills/project-context/design-system.md` — Ink & Signal design tokens, typography, color palette, spacing
- `.claude/skills/project-context/tech-stack.md` — Astro 5, Tailwind CSS 4, GSAP, deployment, performance budget
- `.claude/skills/project-context/workflow.md` — 4-phase mandatory workflow, multi-agent design process

**Long-form HCI reference** (don't load by default; read when writing or expanding scope):
- `docs/hci-knowledge-base.md` — comprehensive synthesis of all 18 lectures + need-typology paper, tagged [IN-SCOPE] / [DEFERRED]
- `docs/hci-deferred-for-writing.md` — deferred topics with re-entry triggers for future term papers / projects

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

## 6. Deployment — Read CLAUDE.md "Deployment & Landing-Page Animation" first

Hard pinned state (2026-04-30):
- `master` HEAD: `b1f651c` (= `546fe46` content)
- `origin/gh-pages` HEAD: `bf8a35c` — **the live site, user-approved canonical**
- Live URL: https://wingchunleung.github.io/

**Never run `npx gh-pages -d dist` without first confirming
`git diff bf8a35c origin/gh-pages -- .` is empty.** If it isn't,
gh-pages has hand-edited content master doesn't, and a rebuild will
lose it. Past sessions edited gh-pages directly (sed-based passcode,
email, path, trailing-slash fixes). Master is not always in sync.

**Never auto-fix "while I'm in here" bugs in shared files**
(`src/layouts/BaseLayout.astro`, `astro.config.mjs`,
`public/robots.txt`, design tokens) during a single-page task. They
trigger full rebuilds that overwrite gh-pages on next deploy.

**The landing-page intro is sessionStorage-gated.** A reload after
deploy won't re-play it — clear `sessionStorage['intro-seen']` or use
incognito to verify.

**If the intro regresses, restore gh-pages to `bf8a35c`:**
`git push origin bf8a35c:gh-pages --force`.

Mechanics (only after the divergence check):
- Build: `npm run build` → `dist/`
- Deploy: `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`

---

## 7. Agent Behavior in This Project

When running the autonomous-coding-agent in this project:

1. **Read CLAUDE.md "Deployment & Landing-Page Animation" section first.** Skip everything below if you haven't.
2. **Read this skill second** — understand the HCI-driven workflow
3. **Check design/decisions/** — proposals and synthesis already exist
4. **Reference docs/hci-knowledge-base.md** for HCI theory
5. **Use Telegram notifications** — send updates via `/telegram send`
6. **Commit and push to master** — but do NOT auto-deploy to gh-pages. Deploy is a separate, gated action; see CLAUDE.md.
7. **Never skip the HCI justification** — every visual change needs a principle
8. **Prefer bright, clean designs** — the user explicitly prefers Apple-like quality
9. **Test in browser** — verify visual output (with cleared sessionStorage), not just code or curl
10. **Stay in scope.** If the user asks you to edit one page, do not touch shared files (layouts, config, public/) even to fix obvious bugs. Surface separately, ask first.
