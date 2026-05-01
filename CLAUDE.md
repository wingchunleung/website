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

PDF lecture notes are stored at: `/Users/wing/Desktop/HKUST/HCI/` (18 lectures + need-typology paper).

- HCI-01: Introduction to HCI
- HCI-02: User-Centered Design
- HCI-03: Understanding Humans (perception, cognition, Gestalt)
- HCI-04: Design Empathize
- HCI-05: Design Ideate (HTA, GOMS, Activity Theory, Personas)
- HCI-06: Prototyping
- HCI-07: Evaluation & Questionnaire Design
- HCI-08: Evaluation Heuristics (Nielsen's 10)
- HCI-09: Evaluation — Usability
- HCI-10: Evaluation — Analysis (quant + qual)
- HCI-11: Multimodal Interaction
- HCI-13: Human-Robot Interaction
- HCI-14: Ubiquitous Computing
- HCI-15: XR (Extended Reality)
- HCI-16: CSCW + Crowd / Social Computing
- HCI-17: Computing for Good (persuasive tech)
- HCI-18: Lab-to-World transition
- need-typology paper (motivational layer above usability)

**Synthesised references:**
- `docs/hci-knowledge-base.md` — comprehensive synthesis of all lectures, tagged [IN-SCOPE] / [DEFERRED] for the website
- `docs/hci-deferred-for-writing.md` — deferred topics (HRI, XR, ubicomp, CSCW, persuasion, formal task analysis, etc.) with re-entry triggers for future term papers / projects
- `.claude/skills/project-context/scope.md` — index of in-scope vs deferred for fast lookup
- `.claude/skills/project-context/hci-principles.md` — working subset for daily site development

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

## Deploy path migration (2026-05-01)

The repo has switched from manual `npx gh-pages -d dist` deploys to
**GitHub Actions deploys**. In repo Settings → Pages, the source is now
"GitHub Actions" (was "Deploy from a branch → gh-pages"). Master is the
source of truth; pushes to master are intended to build and deploy
automatically.

**Current state — partially configured. Do not assume a master push
deploys until both items below are done:**

1. **The deploy workflow file is missing from the repo.** A working
   workflow existed at commit `c4173d4` (`.github/workflows/deploy.yml`)
   and was removed by `546fe46` ("Remove conflicting GitHub Actions
   deploy workflow") because it raced with the manual `npx gh-pages`
   path. Now that the manual path is retired, the workflow can be
   restored. Reference content: build with `actions/setup-node@v4` +
   `npm ci` + `npm run build`, upload `dist/` via
   `actions/upload-pages-artifact@v3`, deploy via
   `actions/deploy-pages@v4`. Permissions: `contents: read`,
   `pages: write`, `id-token: write`. Concurrency group `pages`,
   `cancel-in-progress: false`.

2. **`astro.config.mjs` has `base: '/website'` which no longer matches
   the live URL.** The repo was renamed at some point and the live URL
   is `https://wingchunleung.github.io/` (root). A build with
   `base: '/website'` produces `/website/foo` asset paths that 404 at
   the root URL. The `gh-pages` branch papered over this by hand-editing
   `/website/` → `/` everywhere (commit `9033092` "Update all paths for
   repo rename"). A fresh workflow build won't do that — `base: '/'`
   (or removing the line entirely) is required before the first
   workflow deploy.

Until both are done, master pushes either no-op or fail. The site
remains up only because GitHub keeps serving the prior good artifact
(see below).

## Pinned canonical state (as of 2026-05-01)

| Branch / setting | SHA | Date | Role |
|---|---|---|---|
| `master` | latest | rolling | source of truth — workflow builds and deploys this |
| `origin/gh-pages` | `bf8a35c` | 2026-04-09 | **emergency restore** — last hand-validated good deploy. Do not push to it. |
| Live URL | https://wingchunleung.github.io/ | — | served by the most recent successful Pages deployment (currently `bf8a35c` from gh-pages, until the new workflow ships its first artifact) |
| Pages source | GitHub Actions | 2026-04-30 | switched from "Deploy from a branch → gh-pages" |

The intro animation source lives in `src/components/IntroOverlay.astro`
(extracted from `src/pages/index.astro` for isolation):
- HTML overlay block — `<div class="intro-overlay" id="intro-overlay">` with
  `wow-container`, `intro-tease` ("see who this is"), `intro-stage` (👋 + welcome)
- CSS keyframes & rules — `intro-overlay`, `wow-particle`, `wowFloat`,
  `intro-tease`, `intro-wave-emoji`, `introWavePop`, `introWaveMotion`, `introExit`
- JS phases — wowContainer spawn → tease visible → stage visible (wave + welcome) → iris-close

The expected on-screen sequence: floating wow/eyes (👀 + "wow") at random
positions and rotations → fade → "see who this is" → 👋 wave + "Welcome
to my site" → iris-close reveals the hero.

## Why the animation has broken (four confirmed failure modes)

1. **Bundle hashes change on every build.** Each `npm run build` emits
   new `_astro/<hash>.css` / `<hash>.js`. Browsers may serve a cached
   HTML referencing a no-longer-existing bundle, or load a new HTML
   against an old cached bundle. Either way the page misbehaves. Hard
   refresh after every deploy.

2. **`sessionStorage` gates the intro.** The intro reads
   `sessionStorage.getItem('intro-seen')` and skips itself after first
   view. Reloading to verify a deploy will *not* re-play it. To
   actually see it: DevTools → `sessionStorage.removeItem('intro-seen')`
   → reload, or use an incognito window.

3. **CDN caches HTML.** GitHub Pages serves stale HTML for ~1–10 min
   after a successful workflow run. "It didn't update" often just means
   CDN hasn't refreshed.

4. **Shared-file cleanup leaks across pages.** Edits to
   `src/layouts/BaseLayout.astro`, `astro.config.mjs`, `public/robots.txt`,
   or `src/styles/design-tokens.css` propagate to every page on rebuild.
   Under the new workflow, every push to master triggers a full rebuild
   and deploy — there is no "I'll just touch one page" any more.

(Mode #1 in earlier revisions of this file — "gh-pages has content
master doesn't" — is retired. Hand-edits to gh-pages stop being a risk
once the workflow is the only deploy path.)

## Hard rules — read every time

- **No manual deploys.** `npx gh-pages -d dist` is retired. The path
  is: push to `master` → Actions workflow builds and deploys → wait
  for CDN. Don't run any deploy command from your machine.
- **Every push to `master` ships.** Don't push speculative or
  in-progress work directly to master. Use a branch + PR if you want
  to validate before deploying.
- **Don't push to the `gh-pages` branch.** It is the emergency restore
  target pinned at `bf8a35c`. If you commit to it, the rollback target
  is lost.
- **Don't bundle "while I'm in here" cleanup of shared files** during a
  single-page task. Edits to `BaseLayout.astro`, `astro.config.mjs`,
  `public/robots.txt`, or design tokens propagate to every page on the
  next workflow build. Surface as a separate item — don't bundle.
- **For animation edits, only touch the line ranges named above.**
  Don't blanket-rewrite `src/components/IntroOverlay.astro` or
  `src/pages/index.astro` — surgical region-replacement preserves
  post-commit content.
- **Verify visually, not just via `curl`.** The intro is JS-injected at
  runtime — HTML grep can't see particles. Use a real browser,
  hard-refresh, cleared sessionStorage, on the production URL.
- **If a deploy regresses the live site beyond a quick fix:** in repo
  Settings → Pages, switch Source from "GitHub Actions" back to
  "Deploy from a branch" → `gh-pages` → `/ (root)`. The site reverts
  to `bf8a35c` immediately. Once master is fixed and a clean workflow
  run completes, switch the source back to GitHub Actions. This is the
  reason the gh-pages branch is preserved.

## When a deploy is genuinely required

The flow under the new path:

1. Make the source change on `master`. Commit.
2. `git push origin master`. The "Deploy to GitHub Pages" workflow
   runs automatically (on `push: branches: [master]`).
3. Watch the run on the Actions tab, or `gh run watch`. The build step
   runs `npm ci` + `npm run build`; the deploy step uploads `dist/`
   and publishes via `actions/deploy-pages@v4`.
4. Wait 1–2 min after the run succeeds for CDN to refresh.
5. Verify on production: hard-refresh + `sessionStorage.removeItem('intro-seen')`
   + reload at https://wingchunleung.github.io/. Click each nav link.

If the run fails: read the Actions log. The fix goes in master. Do
**not** push fixes to `gh-pages` — it is no longer the deploy target.

## DO NOT

- Run `npx gh-pages -d dist`. That path is retired.
- Push to the `gh-pages` branch. It's the rollback target, not a
  deploy target.
- Add a *second* deploy workflow alongside `deploy.yml`. Concurrent
  workflows targeting the same Pages environment race and the
  `concurrency: pages` group will cancel one. One workflow file is
  enough.
- Push speculative or unverified work to `master`. Every push deploys.
