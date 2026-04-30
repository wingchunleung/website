# HCI-Driven Website Project

## Project Overview
This is an HCI-driven website project where **all design and development decisions must be grounded in Human-Computer Interaction principles** from the ARIN5301 course (Prof. Xiaojuan Ma, HKUST).

This is a **research-driven HCI design project**, not just a coding project.

## Design Philosophy
- Prioritize **usability over aesthetics** (but recognize "attractive things work better" - Norman)
- Every design decision must reference an HCI principle
- Follow the **Design Thinking Process**: Empathize → Interpret → Ideate → Verify
- Start with **user needs**, not solutions or problems
- Balance Aesthetic and Goals (neither dominates)

## Mandatory Workflow (Before Any Coding)

### Phase A: Deep Research
- Analyze HCI materials from `/home/wing/Documents/HCI/`
- Research best practices for the specific design problem
- Identify applicable HCI principles from `docs/hci-knowledge-base.md`

### Phase B: Multi-Agent Design Thinking
- Use 8+ agents to propose different UI/UX approaches
- Agents must critique each other's proposals
- Evaluate every proposal against Nielsen's 10 Heuristics
- Evaluate against Gestalt principles
- Compare trade-offs (usability vs aesthetics vs cognitive load)

### Phase C: Decision Phase
- Combine or select the best approach
- **Justify decisions using specific HCI principles**
- Document the reasoning in design decision records

### Phase D: Implementation
- Only after A-C are complete
- Code must reflect the design decisions
- Self-evaluate against heuristics after implementation

## Core HCI Principles (Quick Reference)

### Nielsen's 10 Usability Heuristics
1. **Consistency** - Internal, external, and metaphorical consistency; principle of least surprise
2. **Mapping** - Match between system and real world
3. **Minimalism** - Aesthetic and minimalist design; Occam's Razor
4. **Freedom** - User control and freedom; undo/redo
5. **Flexibility** - Flexibility and efficiency of use; shortcuts for experts
6. **Recognition** - Recognition rather than recall; reduce memory load
7. **Visibility** - Visibility of system status; feedback
8. **Error Prevention** - Prevent errors before they occur
9. **Error Recovery** - Help users recognize, diagnose, and recover from errors
10. **Help** - Help and documentation

### Gestalt Principles (Visual Perception)
- **Closure** - Users complete incomplete shapes mentally
- **Continuation** - Elements aligned on a line/curve are perceived as related
- **Common Fate** - Elements moving together are perceived as grouped
- **Symmetry** - Symmetrical elements are perceived as belonging together
- **Figure-Ground** - Users distinguish foreground from background
- **Similarity** - Similar elements are perceived as grouped
- **Proximity** - Close elements are perceived as related

### Three Levels of Design (Norman)
- **Visceral** - Immediate emotional/sensory reaction (look & feel)
- **Behavioral** - Usability and function (does it work well?)
- **Reflective** - Meaning and self-image (what does it say about me?)

### Human Capabilities to Design For
- **Vision**: 80% of learning is through seeing and doing; consider color blindness (8% male, 0.5% female)
- **Memory**: Short-term (working) memory is limited (~7 items); reduce cognitive load
- **Cognition**: Attention is a scarce resource; minimize extraneous cognitive load
- **Perception**: Design for visual information processing (Features → Patterns → GIST)

### User Experience Models
- **Implementation Model** ← Representation Model → **Mental Model**
- Better design = Representation closer to Mental Model
- Reduce gap between what system does and what user thinks it does

### Design Thinking Process
1. **Empathize**: Immerse, Observe, Contact (interviews)
2. **Interpret**: Organize → Construct Framework (HTA/GOMS) → Generate POV
3. **Ideate**: Brainstorm solutions based on POV
4. **Verify**: Prototype and test with users

### Evaluation Methods
- **Heuristic Analysis**: Expert inspection against usability heuristics (Rule of Five: 5 evaluators catch ~75% of problems)
- **Questionnaires**: Likert scales, SUS, structured surveys
- **Usability Testing**: Task-based testing with real users
- **Severity Rating**: 0 (not a problem) → 4 (usability catastrophe)

## HCI Course Materials
PDF lecture notes are stored at: `/home/wing/Documents/HCI/`
- HCI-01: Introduction to HCI
- HCI-02: User-Centered Design
- HCI-03: Understanding Humans (perception, cognition, Gestalt)
- HCI-04: Design Empathize
- HCI-05: Design Ideate (HTA, GOMS, Activity Theory, Personas)
- HCI-07: Evaluation & Questionnaire Design
- HCI-08: Evaluation Heuristics (Nielsen's 10)
- HCI-11: Multimodal Interaction
- HCI-13: Human-Robot Interaction
- HCI-14: Ubiquitous Computing
- HCI-15: XR (Extended Reality)

## Technical Stack
- To be determined after HCI research phase
- Technology choices must be justified by HCI requirements

## Constraints
- All design decisions must be traceable to HCI principles
- No arbitrary UI choices
- Accessibility is mandatory (WCAG compliance)
- Consider cultural context in design (usability and aesthetics are user-dependent)
- Mobile-first responsive design (consider Fitts's Law for touch targets)

## Project Structure
```
/home/wing/website/
├── CLAUDE.md              # This file - project context
├── docs/
│   └── hci-knowledge-base.md  # Extracted HCI principles
├── design/                # Design decisions and artifacts
│   └── decisions/         # Design decision records
├── src/                   # Source code (after design phase)
├── public/                # Static assets
└── tests/                 # Tests including usability tests
```

---

# Deployment & Landing-Page Animation — DO NOT BREAK

The landing-page intro animation is the canonical, user-approved version
and has been broken multiple times by well-intentioned cleanup. Read
this section before any deploy, any build, and any edit to a shared
file (layouts, config, public/, design tokens).

## Pinned canonical state (as of 2026-04-30)

| Branch | SHA | Date | Role |
|---|---|---|---|
| `master` | `b1f651c` | 2026-04-30 | source — content equivalent to `546fe46` (2026-03-31) |
| `origin/gh-pages` | `bf8a35c` | 2026-04-09 | **live** — what the user has approved |
| Live URL | https://wingchunleung.github.io/ | — | served from `gh-pages` |

The intro animation source lives in `src/pages/index.astro`:
- HTML overlay block — `<div class="intro-overlay" id="intro-overlay">` with
  `wow-container`, `intro-tease` ("see who this is"), `intro-stage` (👋 + welcome)
- CSS keyframes & rules — `intro-overlay`, `wow-particle`, `wowFloat`,
  `intro-tease`, `intro-wave-emoji`, `introWavePop`, `introWaveMotion`, `introExit`
- JS phases — wowContainer spawn → tease visible → stage visible (wave + welcome) → iris-close

The expected on-screen sequence: floating wow/eyes (👀 + "wow") at random
positions and rotations → fade → "see who this is" → 👋 wave + "Welcome
to my site" → iris-close reveals the hero.

## Why the animation has broken (five confirmed failure modes)

1. **`gh-pages` has content `master` doesn't.** Past sessions edited
   `gh-pages` directly (sed-based: passcode, email removal, `/website/`
   → `/` sweep, trailing-slash fixes). `master` was not always synced.
   `npx gh-pages -d dist` overwrites the whole branch — divergent
   content is silently lost.

2. **Bundle hashes change on every build.** Each `npm run build` emits
   new `_astro/<hash>.css` / `<hash>.js`. Browsers may serve a cached
   HTML referencing a no-longer-existing bundle, or load a new HTML
   against an old cached bundle. Either way the page misbehaves.

3. **`sessionStorage` gates the intro.** The intro reads
   `sessionStorage.getItem('intro-seen')` and skips itself after first
   view. Reloading to verify a deploy will *not* re-play it. To
   actually see it: DevTools → `sessionStorage.removeItem('intro-seen')`
   → reload, or use an incognito window.

4. **CDN caches HTML.** GitHub Pages serves stale HTML for ~1–10 min
   after a push. "It didn't update" often just means CDN hasn't
   refreshed.

5. **Shared-file cleanup leaks across pages.** Edits to
   `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `public/robots.txt`,
   or `src/styles/design-tokens.css` propagate to every page on rebuild.
   Even a one-line JSON-LD URL "fix" triggers a full rebuild that
   overwrites `gh-pages` next deploy.

## Hard rules — read every time

- **Do not run `npx gh-pages -d dist` without checking for divergence first.**
  `git diff bf8a35c origin/gh-pages -- .` (excluding asset hashes)
  should be empty. If it isn't, `gh-pages` has content `master` doesn't
  — rebuilding will lose it. Stop and ask.
- **Do not "while I'm in here" cleanup shared files** during a
  single-page task. If you spot a bug in `BaseLayout.astro`,
  `astro.config.mjs`, `public/robots.txt`, or design tokens, surface
  it as a separate item — don't bundle the fix.
- **For animation edits, only touch the line ranges named above.**
  Don't blanket-rewrite `src/pages/index.astro` — surgical
  region-replacement preserves post-commit content (Speaking,
  Leadership, Mentoring, education, etc.).
- **Verify visually, not just via `curl`.** The intro is JS-injected at
  runtime — HTML grep can't see particles. Use a real browser,
  hard-refresh, cleared sessionStorage, on the production URL.
- **If the animation regresses, restore `gh-pages` to `bf8a35c`:**
  `git push origin bf8a35c:gh-pages --force`. That commit is the
  user-confirmed canonical-good state.

## When a deploy is genuinely required

1. Make the source change on `master`.
2. `git diff bf8a35c origin/gh-pages -- .` — confirm empty (no
   divergent content on the live branch). If non-empty, STOP and ask.
3. `npm run build`.
4. Spot-check: `diff <(git show bf8a35c:index.html) dist/index.html`
   should differ only in (a) the intended change and (b) `_astro/<hash>`
   bundle filenames.
5. `npx gh-pages -d dist -b gh-pages --dotfiles --nojekyll`.
6. Wait 1–5 min for CDN.
7. Verify in a browser: hard-refresh + `sessionStorage.removeItem('intro-seen')`
   + reload on production.

If any check fails, do not proceed.

## DO NOT

- Auto-deploy "to verify" small changes — every redeploy risks the
  divergence problem.
- Treat `master` as the source of truth for the live site — it isn't.
  `gh-pages` at `bf8a35c` is. `master` is a build input.
- Add a GitHub Actions deploy workflow for `gh-pages` — that races
  with the manual `npx gh-pages` workflow and breaks deploys.
