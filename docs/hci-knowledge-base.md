# HCI Knowledge Base — ARIN5301 (Prof. Xiaojuan Ma, HKUST)

Comprehensive synthesis from 18 lecture PDFs + the need-typology paper.
Source dir: `/Users/wing/Desktop/HKUST/HCI/`.

This file is the **internal canonical reference** — it's not deployed to the
website. Use it for:

- Daily website development (the [IN-SCOPE] sections)
- Future academic writing / term papers / project proposals (the [DEFERRED] sections)
- HCI assignment writeups (cite by section)

Each section is tagged:
- **[IN-SCOPE]** — currently applied to the website's design (see `.claude/skills/project-context/hci-principles.md` for the working subset)
- **[DEFERRED]** — covered in the course but not relevant to a static personal-portfolio site; preserved here for re-use

---

## 1. Foundations of HCI [IN-SCOPE]

HCI sits at the intersection of:
- **Use & Context** — social organisation, application areas, human-machine fit
- **Human** — belief, perception, cognition, emotion
- **Computer** — implementation, interaction modalities, technology
- **Development Process** — design approaches, evaluation, case studies

People remember ~80% of what they **see and do**, 20% of what they read,
10% of what they hear. Design favours active visual engagement.

---

## 2. Understanding Humans (HCI-03) [IN-SCOPE]

### 2.1 Vision
- Luminance range 10⁻⁶ to 10⁷ mL
- Acuity drops sharply outside ~5–30° from centre
- Binocular field ~62° each side
- Adaptation to distance/lighting causes fatigue
- Colour blindness: 8% male, 0.5% female — never use colour as the sole signal

### 2.2 Visual Information Processing (3 stages)
1. **Features** — parallel extraction of basic features (colour, orientation, size). Pre-attentive, <100 ms.
2. **Patterns** — serial recognition of patterns from features.
3. **GIST / working memory** — meaning constructed and fed to visual + verbal working memory.

Implication: visual hierarchy works at the feature stage; semantic copy
works at the pattern + gist stages. Don't put critical information only in
text if pre-attentive cues can carry it.

### 2.3 Gestalt Principles (perceptual grouping)

The course frames Gestalt principles as **perception laws** but the
operational HCI use is **cognitive-load engineering** — these laws let the
designer move work off working memory by making relationships pre-attentive.

| Principle | Mechanism | Site application |
|---|---|---|
| Closure | Mind completes incomplete shapes | Progress indicators, partial reveals at fold |
| Continuation | Elements on a line/curve perceived as related | Vertical scroll rhythm, baseline alignment |
| Common Fate | Elements moving together are grouped | Staggered reveals (~0.1 s) bind related items |
| Symmetry | Balanced layouts perceived as unified | Centred hero, balanced grid on tablet+ |
| Figure-Ground | Foreground vs background distinction | White cards on stone surface, modal dim |
| Similarity | Similar elements perceived as grouped | Uniform pill buttons, mono section labels |
| Proximity | Close elements perceived as related | 96–128 px between sections; ≤24 px inside cards |

The key operational insight: **gap difference is the grouping signal**.

### 2.4 Memory
- Short-term (working) memory: ~7 ± 2 items (Miller's Law) — cap top nav ≤5
- Long-term: unlimited but requires encoding
- Recognition >> recall (Nielsen H6)

### 2.5 Cognition
- Attention is selective and limited
- Emotion influences cognitive capability — positive emotion → better problem solving
- Extraneous cognitive load is the enemy of throughput

---

## 3. UX Models [IN-SCOPE]

### Implementation Model ← Representation Model → Mental Model

- **Implementation model** — how the system actually works
- **Mental model** — how the user thinks it works
- **Representation model** — how the interface presents the system

Goal: representation as close to mental model as possible. The difference
shows up as the **Gulf of Execution** (intent → affordance gap) and **Gulf of
Evaluation** (feedback → expectation gap). These two gulfs are the
diagnostic frame for any "why doesn't this click feel right" question.

UX components: perception, imagination, knowledge, comprehension.

---

## 4. Design Thinking Process (HCI-02, HCI-04, HCI-05) [IN-SCOPE]

**Empathize → Interpret → Ideate → Verify**

### Empathize
- **Immerse** — be one of the users
- **Observe** — record behaviour
- **Contact** — interview users

### Interpret
1. **Organize** — transcribe, annotate, cluster (themes, patterns, outliers)
2. **Construct framework** — HTA / GOMS / Activity Theory (see §5 [DEFERRED])
3. **Generate POV** — `User + Need + Insight` triple

### Ideate
- Diverge before converge — many possible solutions
- Cap idea-killing instincts; brainstorm broadly
- Mary Shaw research-validation types help frame which ideation outputs are
  for proposal vs evaluation (see §21 [DEFERRED])

### Verify
- Build prototype, test with users, iterate
- Prototyping fidelity × strategy axis: parallel-low-fi for divergence
  early, serial-high-fi for refinement late (HCI-06)

### Three Levels of Design (Norman) — co-modulated

| Level | Focus | Site lever |
|---|---|---|
| Visceral | First emotion, sensation | Bright palette, warm wave, generous whitespace |
| Behavioral | Usability, function | <1.5 s LCP, predictable nav, readable type |
| Reflective | Meaning, self-image | Type pairing, kerning, motion polish |

HCI-11 refinement: visceral / behavioural / reflective are
**co-modulated** by every modality choice. Tuning one affects the others.

### Aspects of Design
- Usability — Occam's razor
- Aesthetics — "attractive things work better" (Norman) but ugly ≠ unusable
- Culture — usability and aesthetics are user/culture-dependent

---

## 5. Frameworks for Task Analysis (HCI-05) [DEFERRED]

Useful for HCI assignment writeups, future products with complex
multi-step user flows, or workplace-adoption studies. Not currently
exercised on this site.

### HTA — Hierarchical Task Analysis
- Decompose user goal → sub-goals → operations + plans
- Task-event-oriented, emphasises operation frequency and similarity
- Use when: understanding complex workflows, prioritising design focus

### GOMS / KLM
- **G**oals, **O**perators, **M**ethods, **S**election rules
- Solution-oriented model of human information processing
- KLM (Keystroke-Level Model) predicts task time from keypress + pointing primitives
- More predictive than HTA, less naturalistic
- Use when: power-user keystroke optimisation, comparing interface designs

### Activity Theory
- Subject + Object + Mediating tools + Community / Rules / Division of labour
- Captures organisational contradictions HTA misses
- Use when: tool-in-workplace analysis, evolution of work practices

### Personas
- Archetypal user profile from POV (User + Need + Insight)
- Demographics + Attributes + Goals
- Limitations: can ossify; need periodic revalidation against real data
- Use when: grounding decisions, communicating user context to teams

---

## 6. Prototyping (HCI-06) [PARTIALLY IN-SCOPE]

### Fidelity × Strategy Matrix
- **Parallel + low-fi** — early ideation, breadth-first divergence (used on this site for the Phase B multi-agent ideation)
- **Serial + high-fi** — late refinement, depth-first polish (used in Phase D implementation)

### Wizard of Oz [DEFERRED]
- Human operator simulates system intelligence (e.g., voice assistant backend)
- Reveals natural interaction patterns before implementation
- Use when: simulating intelligence/agent UI

---

## 7. Multimodal Interaction (HCI-11) [DEFERRED — but redundancy is IN-SCOPE]

### Fission and Fusion
- **Fission** — split information across visual / auditory / haptic for parallel processing
- **Fusion** — combine modalities for richer signal

### Implications
- Visual is fast and accurate but weak for abstract or affective content
- Auditory adds temporal flow
- Haptic adds embodied feedback

### IN-SCOPE subset: **multimodal redundancy** (accessibility floor)
- Colour is never the only signal — pair with text, icon, or shape
- Animation is delight, not meaning — content stays intelligible with `prefers-reduced-motion: reduce`
- Iconography always pairs with a text label

The full fission/fusion theory is [DEFERRED] for use cases involving
voice, haptics, or AR/VR.

---

## 8. Human-Robot Interaction (HCI-13) [DEFERRED]

### Tool–Actor Spectrum
Robots range from supervised, transparent **tools** (low autonomy) to
autonomous **social actors** (high autonomy, independent intent).

### Implications
- **Tool-level autonomy** → design affordances + error recovery (like a power drill)
- **Actor-level autonomy** → design trust signals + social/emotional intelligence (like a colleague)
- **Mid-level shared autonomy** → uncanny valley; users don't trust partial automation. Make role boundary legible.

Re-enter when: building any agent UI, chatbot, robotic surface.

---

## 9. Ubiquitous Computing (HCI-14) [DEFERRED]

### Heterogeneity is the default
Devices span watches, fridges, cars, embedded systems. OS, sensors, and
interaction modalities differ wildly.

### Context-Awareness
Systems sense and adapt to location, time, social setting, device state
instead of demanding explicit commands. Reduces interaction overhead but
demands data permission and privacy safeguards.

### Device-Human Relations
- 1:1 (phone)
- 1:many (assistant for a household)
- many:many (smart city, networked environments)

### Implications
Graceful degradation across connectivity loss. Cross-device handoffs.
Privacy-first defaults.

Re-enter when: mobile-first / IoT companion product, multi-device experience.

---

## 10. Extended Reality (HCI-15) [DEFERRED]

### Reality–Virtuality Continuum (Milgram)
Physical → AR → MR → VR.

### Adoption Reality
VR/AR/MR sustains adoption only when embodied presence or immersive
exposure is **fundamentally required** — surgical training, exposure
therapy, heritage preservation. Hardware cost, motion sickness, content
pipeline are permanent barriers.

### Implication: the irreplaceable-need test
Justify XR only if the task fundamentally requires embodied presence.
Convenience or novelty fails (Google Glass, Segway).

Re-enter when: 3D / AR / VR features are proposed.

---

## 11. CSCW & Computer-Mediated Communication (HCI-16) [DEFERRED]

### Time × Space Matrix

| | Co-located | Remote |
|---|---|---|
| Sync | Tabletop, shared wall — needs territoriality + gesture | Video call — needs gaze + eye contact simulation |
| Async | Shared notes — needs activity feeds + handoff | Email / forum — needs notification norms |

Each cell has distinct awareness, gesture, and notification needs.

Re-enter when: adding any collaborative feature (comments, shared docs, multi-user).

---

## 12. Crowd & Social Computing (HCI-16-Crowd) [DEFERRED]

### Norms-Driven, Not Scale-Driven
Online collaboration succeeds via **trust signals, identity surfacing,
and norm enforcement** rather than raw participation volume.

### Phenomena
- Wikipedia coordination — community norms regulate quality more than algorithms
- Twitter reputation — identity surfacing creates accountability
- Information integrity — credibility assessment emerges from network dynamics
- Emotional contagion — mood spreads via feeds

### Implications
Measure norm compliance and information quality, not just engagement.
Traditional usability metrics (task time) are largely irrelevant for social systems.

Re-enter when: adding social media embedding or community feature.

---

## 13. Computing for Good / Persuasive Tech (HCI-17) [DEFERRED]

### Fogg Behaviour Model
Behaviour change happens when three align:

```
B = MAT
Behaviour = Motivation × Ability × Trigger
```

### Practical Order
1. **Reduce ability friction first** (one-click, pre-filled, defaults)
2. **Time the trigger** to existing habits or natural transitions
3. **Persuade only when motivation gap is the bottleneck** — explicit appeals are the weakest lever

### Anti-Patterns
- Deception — fragile in longitudinal use; backfires on trust
- Pure willpower-based design — users fail on bad days, blame the product
- "Knowing isn't doing" — people know exercise is healthy but don't act on it

Re-enter when: designing CTAs aimed at a specific behaviour change,
healthy-habit nudges, behaviour-economic interventions.

---

## 14. Lab-to-World Transition (HCI-18) [PARTIALLY IN-SCOPE]

### Validity Gap
Controlled studies measure interaction within artificial constraints.
Field deployment exposes:
- **Robustness** — works reliably across conditions
- **Reliability** — handles attacks and degradation
- **Performance** — learnability + efficiency in real use

Lab findings often don't predict real-world adoption. Iteration with
actual users in deployment context is required.

### IN-SCOPE subset: deploy-and-verify discipline
Every change ends with verification on the production URL — click every
nav link, confirm no 404, no unstyled flash, on real mobile, before
the change counts as done. (See `CLAUDE.md` §Deployment for the full
checklist.)

### IN-SCOPE subset: experience principles
Accessibility, affordability, adaptability are non-negotiable. Universal
design expands the addressable user base.

The full lab-to-world framework (robustness/reliability formalisms) is
[DEFERRED] for productisation beyond a portfolio site.

---

## 15. Need Typology (need-typology paper) [IN-SCOPE]

Beyond usability sits a **motivational layer** of fundamental human needs.
A site can pass every Nielsen heuristic and still feel cold if it blocks
core needs.

### 14 fundamental needs (full set, from the typology paper)
Autonomy, Competence, Relatedness, Security, Stimulation, Beauty, Morality,
Pleasure, Self-actualisation, Influence, Order, Meaning, Health, Money.

### Most relevant for a personal portfolio
- **Competence** — visitor leaves understanding what the author can do; demonstrate via projects + metrics, not buzzwords
- **Autonomy** — no scroll-jack, no forced modals, no autoplay; visitor chooses pace and path
- **Relatedness** — warm tone, human voice, real photos over stock
- **Security** — fast load, predictable links, no surprise navigation, trailing slashes verified

### Use as a tie-breaker
When two design choices both pass usability heuristics, pick the one that
better fulfils these four needs. Reframes design success: usable but
motivationally bankrupt systems get abandoned.

---

## 16. Nielsen's 10 Usability Heuristics (HCI-08) [IN-SCOPE]

Heuristics are scaffolds, not axioms. Apply with the page's purpose in
mind. **Severity is a domain judgment**, not an objective metric — a
"minor" copy issue is "major" if it's on the home hero.

| # | Name | Rule |
|---|---|---|
| H1 | Consistency & standards | Internal + external + metaphorical. Patterns repeat across pages. Principle of Least Surprise. |
| H2 | Match real-world (Mapping) | Language and order match the visitor's mental model. |
| H3 | Aesthetic & minimalist | Every element earns its place. Decoration cut. |
| H4 | User control & freedom | Deep links, escape routes, no scroll-jack, undo/redo. |
| H5 | Flexibility & efficiency | Keyboard paths for fast use, reduced-motion respected, expert + novice paths. |
| H6 | Recognition over recall | Visible labels. Never icon-only. Show options at point of need. |
| H7 | Visibility of system status | Hover, focus, reveal confirm state. Feedback within reasonable time. |
| H8 | Error prevention | Block errors before they occur. 44×44 px targets. Predictable URLs. Confirmation for irreversible actions. |
| H9 | Help diagnose + recover | Error messages in plain language. Custom 404 with a way home. |
| H10 | Help & documentation | Available, contextual, easy to search. System should be usable without docs. |

### Severity scale (0–4)
0 not-a-problem · 1 cosmetic · 2 minor · 3 major (important to fix) · 4 catastrophe (must fix)

`Severity = f(Frequency, Impact, Persistence)`

---

## 17. Heuristic Evaluation Process (HCI-08) [PARTIALLY IN-SCOPE]

1. Recruit 3–5 inspectors (usability engineers, end users, experts)
2. Inspect interface in isolation, then group
   - Pre-train on heuristics
   - ~1–2 hours for simple interfaces
3. Conduct assessment: identify problem → rate severity → propose fix
4. Aggregate: 1 evaluator catches ~35%; **5 evaluators catch ~75%** (Rule of Five)
5. Debrief with design team

IN-SCOPE: self-evaluation against heuristics after each implementation
on this site (single-evaluator pass).

[DEFERRED]: formal multi-evaluator process for HCI assignment / coursework writeups.

---

## 18. Predictive Laws [IN-SCOPE]

| Law | Formula | Application |
|---|---|---|
| Fitts's | `MT = a + b · log₂(D/W)` | Touch targets ≥44×44 px; CTA visually larger and lower-edge accessible on mobile |
| Hick's | `RT = a + b · log₂(N+1)` | Cap top nav ≤5 items |
| Miller's ~7 | Working memory capacity | Don't exceed 5 primary nav items; chunk lists ≤7 |

---

## 19. Evaluation: Questionnaires (HCI-07) [DEFERRED]

### Survey Process
1. Identify research objectives
2. Identify & characterise target audience
3. Design sampling plan
4. Design & write questionnaire
5. Pilot test
6. Distribute
7. Analyse results

### Question Design
- Specific, but not too specific
- Simple words and sentences
- Highlight key words ("Not")
- Avoid double negatives, biased options, hypothetical questions
- **Likert scales** — 5-point or 7-point most common (odd-point allows neutral)
- Each additional question reduces response rate ~0.5%
- Each additional page reduces response rate ~5%

### Standard Instruments
- **SUS (System Usability Scale)** — 10 items, 5-point Likert; single 0–100 score; fast screen, non-diagnostic
- **NASA-TLX (Task Load Index)** — 6 dimensions: mental demand, physical demand, temporal demand, performance, effort, frustration. Sensitive to workload differences.

Re-enter when: running a user study; HCI assignment writeup.

---

## 20. Quantitative + Qualitative Analysis (HCI-10) [DEFERRED]

### Continuum, not opposition
Mature HCI research combines both:
- Quantitative for comparison / prediction (effect existence)
- Qualitative for explanation / mechanism (effect cause)

### Anscombe's Quartet
Four datasets with identical means, variances, correlations, and
regression lines but completely different patterns. Statistical tests can
be identical even when the underlying phenomena differ. Qualitative
follow-up (interviews, think-aloud) reveals which mechanism is at play.

### Sample-Size Heuristics
- 5+ for iterative prototyping
- ~20–30 for lab studies
- Statistically powered samples for field A/B tests

Re-enter when: writing a study results section.

---

## 21. Mary Shaw's Research Validation Types (HCI-09) [DEFERRED]

Position research on a spectrum:
- **Descriptive / exploratory** — understand a phenomenon
- **Prescriptive** — propose a solution
- **Evaluative** — test a solution in controlled settings
- **Analytical** — derive general principles

Use to clarify whether HCI work is theory-building, design-proposing, or
efficacy-testing. Helps avoid claiming "this design works" when only
exploratory evidence exists.

Re-enter when: writing the academic justification of a design (HCI page,
term paper, project report).

---

## 22. Accessibility & WCAG [IN-SCOPE]

- Colour contrast ≥4.5:1 (WCAG AA) on body text; ≥3:1 on large text
- 8% males / 0.5% females colour-blind — never use colour alone as indicator
- Touch targets ≥44 × 44 px (Fitts)
- Semantic HTML, ARIA labels, alt text
- `prefers-reduced-motion: reduce` zeroes durations; meaning never lives only in animation (WCAG 2.1 SC 2.3.3 — Animation from Interactions)
- Keyboard navigability for every interactive element

---

## 23. Web-Specific Conventions [IN-SCOPE]

### Visual Hierarchy
- Size, colour, contrast, position guide attention
- Critical content above the fold
- F-pattern and Z-pattern for Western reading orders

### Navigation
- Cap top-level items at ~5 (Miller); deep hierarchies use breadcrumbs
- Consistent placement across pages

### Forms
- Label above or to the left of field
- Single masked input is ~2.5× faster than multi-field dropdowns (GOMS)
- Group related fields by proximity
- Inline validation

### Responsive
- Content-first
- Touch targets 44 px (Apple HIG) / 48 dp (Material)
- Consider thumb zones on mobile

---

## How sections feed downstream artefacts

| If you're… | Read mainly |
|---|---|
| Working on the website | §1–4, §15, §16, §18, §22, §23 (and `.claude/skills/project-context/hci-principles.md`) |
| Writing the HCI assignment / `/hci` page critique | §1–4, §16–18, §21 (sources for citations) |
| Writing a future term paper on HRI / XR / ubicomp / CSCW / persuasion | §7–13, §19–21 |
| Designing a real user study | §17, §19, §20 |
| Picking a behaviour-change pattern for a new product | §13, §15 |

The skill at `.claude/skills/project-context/scope.md` is the canonical
in-scope vs deferred index for fast lookup; this file is the long-form reference.
