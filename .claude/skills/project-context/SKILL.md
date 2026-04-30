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

This skill is the project's working memory for the autonomous-coding-agent. It is auto-loaded at agent initialization (Section 1, Step 3 of that skill).

**Reference files** (read when the topic arises):

- `scope.md` — **READ FIRST.** In-scope vs out-of-scope HCI knowledge for the current design phase
- `hci-principles.md` — In-scope principles only (Nielsen, Gestalt-as-cognitive-load, Norman, need typology, Fitts/Hick, gulfs, multimodal redundancy, lab-to-world)
- `design-system.md` — Ink & Signal tokens, type, spacing, buttons, motion
- `tech-stack.md` — Astro 5, Tailwind 4, GSAP, deploy, performance budget, deploy-and-verify
- `workflow.md` — 4-phase workflow (parallel ideation, serial implementation), evaluation orthogonality

---

## 1. Project Overview

Personal website for Wing Chun Leung — MSc AI student at HKUST, bridging finance and AI. Doubles as portfolio and the implementation artefact for ARIN5301 (Prof. Xiaojuan Ma).

**Design concept** — "Ink & Signal": bright, clean, Apple/Carta-quality with cultural undertones. Warm and welcoming, light-only.

**Pages:**

- `/` — Hero (wave) → narrative → featured work
- `/about/` — Three-part narrative (Professional, Bridge-Builder, Human)
- `/projects/` — Project cards with quantified impact
- `/hci/` — HCI course page (celadon accent) with assignments + principles
- `/contact/` — Contact cards (LinkedIn, GitHub)
- `/404` — Recovery page

**Stack** — Astro 5.x + Tailwind CSS 4 + Preact islands + GSAP (planned)
**Repo** — `wingchunleung/wingchunleung.github.io`
**Live** — `https://wingchunleung.github.io/`
**Branches** — `master` (Astro source), `gh-pages` (built HTML — single source of truth for live site)

---

## 2. Design Philosophy (Highest Priority)

Every design decision must trace to a **named** in-scope HCI principle from `hci-principles.md`.

**Core stance:**

- Usability over aesthetics — but Norman's "attractive things work better" still applies.
- Start from user needs (need typology) and mental models, not solutions.
- Recognition over recall (H6); minimise cognitive load (working memory ~7).
- Accessibility is a floor, not a feature: WCAG 2.1 AA minimum.
- Light-only direction. Bright, Apple-inspired. No dark mode for now.
- No scroll-jacking, no icon-only nav, no parallax without opt-in, no animation that blocks content.

---

## 3. Workflow Summary

Full detail in `workflow.md`. The four phases:

- **A. Research** — read in-scope principles, prior DDRs, references
- **B. Multi-agent ideation** — parallel + low-fidelity (HCI-06 breadth-first)
- **C. Decision** — synthesise into one DDR with severity rating
- **D. Implementation** — serial + high-fidelity, then **deploy-and-verify on live URL** (HCI-18 lab-to-world)

Bug fixes, copy changes, and config edits skip the full cycle — judgment.

---

## 4. Key File Locations

```
/Users/wing/Desktop/website/
├── CLAUDE.md                              # Project-level HCI context
├── docs/hci-knowledge-base.md             # Full extracted HCI principles
├── design/decisions/
│   ├── FINAL-DESIGN-SYNTHESIS.md          # Canonical direction
│   └── 00x-*.md                           # Individual DDRs
├── src/
│   ├── layouts/BaseLayout.astro
│   ├── components/Header.astro            # Sticky nav, frosted glass
│   ├── components/Footer.astro
│   ├── components/LockScreen.astro        # SHA-256 PIN gate
│   ├── pages/{index,about,projects,contact,404}.astro
│   ├── pages/hci/index.astro
│   └── styles/{design-tokens,global}.css
└── public/{favicon.svg,robots.txt}

/Users/wing/Desktop/HKUST/HCI/             # 18 lecture PDFs (Lect1–Lect10)
```

---

## 5. Design Tokens (Quick Reference)

Full table in `design-system.md`. Top-line:

- Background `#ffffff`, surface `#f5f5f7`, text `#1d1d1f`, secondary `#86868b`
- Vermillion `#c73e1d` — primary accent everywhere except `/hci/`
- Celadon `#7d9e8c` — `/hci/` page only (`accent="celadon"` on BaseLayout)
- Type: Cormorant Garamond (display) · Inter (body) · JetBrains Mono (labels)
- 8px spacing grid · 720px content max · 1200px container max

---

## 6. Deployment Summary

- Build → `npm run build` → `dist/`
- Deploy → `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`
- Verify on live URL (HCI-18). All internal links use trailing slashes (avoids GitHub Pages 301 → unstyled-flash bug).
- Base path is `/` (after the `website` → `wingchunleung.github.io` rename).
- Don't add a GitHub Actions deploy workflow — it races with the gh-pages branch.

---

## 7. Agent Behaviour in This Project

1. Read `scope.md` first — apply only in-scope principles.
2. Check `design/decisions/` — proposals and synthesis already exist; don't reinvent.
3. Cite a named principle for every visual change. Generic "looks better" is not a decision.
4. Prefer bright, clean, light-only. The user wants Apple/Carta quality.
5. After every implementation: deploy and verify on the live URL.
6. Use `/telegram send` for milestone notifications.
7. Commit and push periodically; deploy after meaningful changes.
