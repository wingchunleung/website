# HCI Principles — Working Reference

Source: ARIN5301, Prof. Xiaojuan Ma, HKUST. Lecture PDFs: `/Users/wing/Desktop/HKUST/HCI/` (Lect1–Lect10, 18 lectures + need-typology paper).

This file holds **only principles in-scope for the current website design phase**. Out-of-scope theory (HRI, XR, ubicomp, CSCW, persuasive tech, advanced research methods) lives in `scope.md` for future reuse.

---

## 1. Nielsen's 10 Heuristics — Context-Bound, Not Universal

Heuristics are scaffolds, not axioms. Apply them with the page's purpose in mind. Severity is a **domain judgment**, not an objective metric (HCI-08).

| # | Name | Rule | Site application |
|---|------|------|------------------|
| H1 | Visibility of system status | Show what's happening | Hover/focus states, scroll-reveal as load confirmation, active nav indicator |
| H2 | Match real-world | Mental-model alignment | Nav order: About → Projects → HCI → Contact (info-architecture metaphor) |
| H3 | User control & freedom | Undo, escape, back | Deep-linkable URLs, no scroll-jacking, ESC closes mobile menu |
| H4 | Consistency & standards | Internal + external + metaphorical | Uniform card/button/spacing tokens; conventions from Apple/Carta |
| H5 | Error prevention | Block before recover | 44×44px targets (Fitts), inline form validation, no ambiguous icons |
| H6 | Recognition over recall | Show, don't ask to remember | Visible labels, no icon-only nav, breadcrumbs implicit via heading |
| H7 | Flexibility & efficiency | Novice + expert paths | Keyboard nav, `prefers-reduced-motion`, progressive disclosure |
| H8 | Aesthetic & minimalist | Every element earns place | Hero = greeting + animation only; remove anything that doesn't advance the goal |
| H9 | Help users recover | Diagnose + fix | Custom 404 with nav back; clear empty states |
| H10 | Help & documentation | Available, contextual | Section labels, captions, no separate help page needed |

**Severity scale (0–4)** for self-evaluation: 0 not-a-problem · 1 cosmetic · 2 minor · 3 major · 4 catastrophe. A "minor" copy issue is "major" if it's on the home hero — context decides.

---

## 2. Gestalt — Cognitive-Load Engineering (Not Aesthetics)

The reframe from HCI-03: Gestalt grouping reduces working-memory load. Violations cost attention and slow tasks. Treat each principle as a **load-shedding tool**.

| Principle | Load it sheds | Site application |
|-----------|---------------|------------------|
| Proximity | "Are these related?" | 96–128px section gaps; tight 8–24px gaps inside cards |
| Similarity | "Is this the same kind of thing?" | All buttons share pill shape; all section labels share mono uppercase |
| Continuation | "Where do I look next?" | Vertical scroll rhythm; aligned baselines; left-edge anchor |
| Closure | "Is there more?" | Partial reveals at fold invite scroll; progress bars on long sections |
| Figure-ground | "What's foreground?" | White cards on stone surface; modal dim layer |
| Common fate | "Are these one group?" | Staggered reveals (0.08–0.12s) bind related items |
| Symmetry | "Is this balanced?" | Centered hero, balanced two-column on tablet+ |

---

## 3. Norman's Three Levels — Inseparable in Multimodal Design

HCI-11 refinement: visceral / behavioral / reflective are **co-modulated** by every modality choice; you cannot tune one without affecting the others.

| Level | Goal | Levers on this site |
|-------|------|---------------------|
| Visceral | Emotional first impression | Bright palette, warm wave greeting, generous whitespace |
| Behavioral | It works, fast | <1.5s LCP, clear nav, readable type, predictable layout |
| Reflective | "What does using this say about me?" | Craft signals — type pairing, kerning, motion polish |

---

## 4. Fundamental Needs Layer — Above Usability

From the need typology paper: even an aligned interface fails if it blocks fundamental needs. The four most relevant for a personal portfolio:

- **Competence** — visitor leaves understanding what Wing can do; demonstrate via projects + metrics, not buzzwords.
- **Autonomy** — no scroll-jack, no forced modals, no autoplay; visitors choose pace and path.
- **Relatedness** — warm tone, human voice, personal photography over stock.
- **Security** — fast load, no surprise navigation, predictable links (trailing slashes verified, no broken paths).

Use these as a tie-breaker when usability heuristics conflict.

---

## 5. Predictive Laws

- **Fitts's Law** — `MT = a + b·log2(D/W)`. Touch targets ≥44×44px; primary CTA visually larger and lower-edge accessible on mobile.
- **Hick's Law** — choice time scales with `log2(N+1)`. Cap top nav at ~5 items (Miller). Project cards offer few visible filters.
- **Miller's ~7** — short-term capacity. Don't exceed five primary nav items; chunk skill lists into ≤7.

---

## 6. Gulfs (Diagnostic Frame)

When a click or scroll fails, classify:

- **Gulf of Execution** — user couldn't translate intent into action. Cause: missing or ambiguous affordance. Fix: stronger label, button shape, hover.
- **Gulf of Evaluation** — user couldn't tell whether the action worked. Cause: missing feedback. Fix: motion, status, focus shift.

Use this before reaching for a new feature.

---

## 7. Multimodal Redundancy (Accessibility Floor)

From HCI-11 + accessibility: never let one modality carry information alone.

- Color is never the sole signal — pair with text, icon, or shape (8% of male visitors are color-blind).
- Iconography always pairs with a text label.
- Animation conveys *delight*, never *meaning* — content must be intelligible with `prefers-reduced-motion: reduce`.
- Contrast ≥4.5:1 (WCAG AA); current site exceeds 15:1 on body text.

---

## 8. Lab-to-World Gap (Deploy-and-Verify)

HCI-18: lab-fine ≠ field-fine. Every change must be verified on the **live deployed URL**, not just dev or preview. Ship discipline:

1. Build → preview → deploy → open production URL.
2. Click every nav link from the affected page (no 404s, no flashes).
3. Test on real mobile (touch targets, readability).
4. Re-evaluate severity against the live experience, not the dev one.

---

## 9. Quick Numbers

- Working memory ≈ 7 items → max 5 nav items
- Color blindness: 8% male, 0.5% female → no color-only signals
- Touch target: ≥44×44 px (Fitts)
- Contrast: ≥4.5:1 (WCAG AA)
- Heuristic eval: 1 inspector ≈ 35% coverage; 5 ≈ 75% (Rule of Five)
- Iterative prototyping sample: 5+ users
