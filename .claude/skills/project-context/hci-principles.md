# HCI Principles — Working Reference (website-scope only)

Curated subset of the ARIN5301 course material that's actively applied to
this site's design. Full reference at `docs/hci-knowledge-base.md`.
Topics outside this file (HRI, XR, ubicomp, CSCW, persuasion, formal task
analysis, surveys, etc.) live in `docs/hci-deferred-for-writing.md` and
are summarised in `scope.md`.

---

## 1. Nielsen's 10 Heuristics — context-bound

Heuristics are scaffolds, not axioms. **Severity is a domain judgment** —
a "minor" copy issue is "major" if it's on the home hero.

| # | Name | Site application |
|---|---|---|
| H1 | Visibility of system status | Hover/focus states, scroll-reveal as load confirmation, active nav indicator |
| H2 | Match real-world | Nav order: About → Projects → HCI → Contact (information-architecture metaphor) |
| H3 | User control & freedom | Deep-linkable URLs, no scroll-jacking, ESC closes mobile menu |
| H4 | Consistency & standards | Uniform card/button/spacing tokens; conventions from Apple/Carta |
| H5 | Error prevention | 44×44 px targets (Fitts), inline form validation, no ambiguous icons |
| H6 | Recognition over recall | Visible labels, no icon-only nav |
| H7 | Flexibility & efficiency | Keyboard nav, `prefers-reduced-motion`, progressive disclosure |
| H8 | Aesthetic & minimalist | Hero = greeting + animation only; remove anything that doesn't advance the goal |
| H9 | Help users recover | Custom 404 with nav back; clear empty states |
| H10 | Help & documentation | Section labels, captions, no separate help page needed |

**Severity scale (0–4)** for self-evaluation: 0 not-a-problem · 1 cosmetic ·
2 minor · 3 major · 4 catastrophe. Frequency × Impact × Persistence.

---

## 2. Gestalt — Cognitive-load engineering, not aesthetics

The reframe from HCI-03: Gestalt grouping reduces working-memory load.
Violations cost attention and slow tasks. Treat each principle as a
**load-shedding tool**.

| Principle | Load it sheds | Site application |
|---|---|---|
| Proximity | "Are these related?" | 96–128 px section gaps; tight 8–24 px gaps inside cards |
| Similarity | "Same kind of thing?" | All buttons share pill shape; all section labels share mono uppercase |
| Continuation | "Where do I look next?" | Vertical scroll rhythm; aligned baselines; left-edge anchor |
| Closure | "Is there more?" | Partial reveals at fold invite scroll; progress bars on long sections |
| Figure-ground | "What's foreground?" | White cards on stone surface; modal dim layer |
| Common fate | "Are these one group?" | Staggered reveals (0.08–0.12 s) bind related items |
| Symmetry | "Is this balanced?" | Centred hero, balanced two-column on tablet+ |

**Operational insight:** the gap *difference* is the grouping signal.

---

## 3. Norman's Three Levels — Inseparable in multimodal design

HCI-11 refinement: visceral / behavioural / reflective are
**co-modulated** by every modality choice; tuning one affects the others.

| Level | Goal | Levers on this site |
|---|---|---|
| Visceral | Emotional first impression | Bright palette, warm wave greeting, generous whitespace |
| Behavioral | It works, fast | <1.5 s LCP, clear nav, readable type, predictable layout |
| Reflective | "What does using this say about me?" | Craft signals — type pairing, kerning, motion polish |

---

## 4. Fundamental Needs Layer — Above usability

From the need-typology paper: even a heuristic-perfect interface fails if
it blocks fundamental needs. The four most relevant for a personal
portfolio:

- **Competence** — visitor leaves understanding what Wing can do; demonstrate via projects + metrics, not buzzwords
- **Autonomy** — no scroll-jack, no forced modals, no autoplay; visitor chooses pace and path
- **Relatedness** — warm tone, human voice, personal photography over stock
- **Security** — fast load, no surprise navigation, predictable links (trailing slashes verified, no broken paths)

Use these as a tie-breaker when usability heuristics conflict.

---

## 5. Predictive Laws

| Law | Formula | Site rule |
|---|---|---|
| Fitts | `MT = a + b · log₂(D/W)` | Touch targets ≥44 × 44 px; primary CTA visually larger and lower-edge accessible on mobile |
| Hick | `RT = a + b · log₂(N+1)` | Cap top nav at ~5 items |
| Miller's ~7 | Working memory capacity | Don't exceed 5 primary nav items; chunk skill lists ≤7 |

---

## 6. Gulfs (diagnostic frame)

When a click or scroll feels off, classify before acting:

- **Gulf of Execution** — user couldn't translate intent into action.
  Cause: missing or ambiguous affordance. Fix: stronger label, button shape, hover.
- **Gulf of Evaluation** — user couldn't tell whether the action worked.
  Cause: missing feedback. Fix: motion, status, focus shift.

Use this before reaching for a new feature.

---

## 7. Multimodal Redundancy (accessibility floor)

From HCI-11 + WCAG: never let one modality carry information alone.

- Colour is never the sole signal — pair with text, icon, or shape (8% of male visitors are colour-blind, 0.5% female)
- Iconography always pairs with a text label
- Animation conveys *delight*, never *meaning* — content must be intelligible with `prefers-reduced-motion: reduce` (WCAG 2.1 SC 2.3.3, Animation from Interactions)
- Contrast ≥4.5:1 (WCAG AA); current site exceeds 15:1 on body

---

## 8. Lab-to-World (deploy-and-verify discipline)

HCI-18: lab-fine ≠ field-fine. Every change must be verified on the
**live deployed URL**, not just dev or preview.

1. Build → preview → deploy → open production URL
2. Click every nav link from the affected page (no 404s, no flashes)
3. Test on real mobile (touch targets, readability)
4. Re-evaluate severity against the live experience, not the dev one

See `CLAUDE.md` §"Deployment & Landing-Page Animation" for the full
checklist and the divergence-guard rule.

---

## 9. Prototyping Strategy Axis (HCI-06)

Two orthogonal dimensions:

- **Fidelity** — low-fi (paper, wireframe) vs high-fi (production)
- **Strategy** — parallel (breadth-first, many concepts) vs serial (depth-first, one concept refined)

Phase B (multi-agent ideation) → parallel + low-fi.
Phase D (implementation) → serial + high-fi.

---

## 10. Quick Numbers

- Working memory ≈ 7 items → max 5 nav items
- Colour blindness: 8% male, 0.5% female → no colour-only signals
- Touch target: ≥44 × 44 px (Fitts)
- Contrast: ≥4.5:1 (WCAG AA)
- Heuristic eval: 1 inspector ≈ 35% coverage; 5 ≈ 75% (Rule of Five)
- Iterative prototyping sample: 5+ users
- LCP target: <1.5 s
- Section gaps: 96 px mobile, 128 px desktop
- Inside-card gaps: 8–24 px
- Reveal stagger: 0.08–0.12 s

---

## What's NOT here (deferred — see scope.md)

HRI · XR · ubicomp · CSCW · social computing · persuasive tech ·
Wizard of Oz · Activity Theory · GOMS / KLM · HTA decomposition ·
NASA-TLX · SUS · formal personas · Mary Shaw research types ·
Anscombe's quartet · multimodal fission/fusion (full theory) ·
lab-to-world full robustness framework.

These are stored in `docs/hci-knowledge-base.md` (full reference) and
`docs/hci-deferred-for-writing.md` (re-entry triggers for future writing).
Don't try to apply them to the website — there's no artefact to evaluate
them against here.
