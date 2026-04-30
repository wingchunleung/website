# HCI Deferred Topics — for future writing & projects

These topics are covered thoroughly in the ARIN5301 course but are **not
applied to the current personal-portfolio website**. They're parked here
so you can pick them up later — for a term paper, an HCI assignment, a
research-style essay, or a future product that has the right substrate.

For each topic: the lecture source, a one-paragraph summary, and a
"re-entry trigger" (when this topic becomes useful again).

For full detail, see the matching section in
`docs/hci-knowledge-base.md`.

---

## 1. Task-analysis frameworks (HTA, GOMS/KLM, Activity Theory)
**Source:** HCI-05 · Knowledge base §5

Three distinct frameworks for decomposing user activity:
- **HTA** decomposes goals → sub-goals → operations + plans (task-event view).
- **GOMS / KLM** is solution-oriented; KLM predicts task time from keystroke + pointing primitives.
- **Activity Theory** widens the lens to include community, rules, division of labour — captures organisational contradictions HTA misses.

**Re-entry trigger:**
- Writing about workplace tools, team workflows, or any product where
  task time / efficiency is a quantitative claim
- Designing a power-user interface where keystroke optimisation matters
- A paper analysing how a tool fits into existing work practice

---

## 2. Personas as a formal artefact
**Source:** HCI-05 · Knowledge base §5

Persona = `User + Need + Insight` POV triple, with demographics +
attributes + goals. The technique grounds design in archetypal users and
prevents designer projection.

The personal portfolio doesn't need formal personas (single author, broad
audience). But personas are first-class deliverables in:

**Re-entry trigger:**
- HCI assignment writeups asking for empathy-phase artefacts
- New product proposals targeting a defined user group
- Coursework where you have to justify design decisions against named users

---

## 3. Multimodal interaction — full theory
**Source:** HCI-11 · Knowledge base §7

The full fission/fusion theory: information can be **split** across
visual / auditory / haptic for parallel processing, or **fused** for
richer signal. Each modality has distinct strengths — visual fast for
spatial/numeric, auditory for temporal, haptic for embodied feedback.

The website only uses the [IN-SCOPE] subset (multimodal *redundancy* as
the accessibility floor). Full theory comes back in:

**Re-entry trigger:**
- Adding voice or haptic interaction to a product
- Writing about emerging modalities (gesture, gaze, brain-computer interfaces)
- A paper on accessibility design beyond visual

---

## 4. Human-Robot Interaction
**Source:** HCI-13 · Knowledge base §8

The **Tool–Actor spectrum**: robots range from supervised tools
(transparent, low autonomy) to social actors (independent intent, high
autonomy). Each pole demands different design — affordances + error
recovery for tools, trust signals + social/emotional intelligence for
actors. The middle is uncanny-valley territory; users don't trust
partial automation.

**Re-entry trigger:**
- Building any agent UI, chatbot, or AI assistant
- Writing about LLM-augmented systems (your AI/finance work)
- A term paper on autonomy, trust, or agentic interfaces

---

## 5. Ubiquitous computing & context-awareness
**Source:** HCI-14 · Knowledge base §9

Devices span watches, fridges, cars, phones, embedded systems —
heterogeneity is the default. Context-aware systems sense and adapt to
location, time, social setting, device state instead of demanding
explicit commands. Reduces interaction overhead but demands privacy
safeguards. Device-human relations span 1:1, 1:many, many:many.

**Re-entry trigger:**
- A mobile-first product with a desktop companion
- IoT / smart-home / wearable design
- A paper on calm computing, ambient intelligence, or privacy-by-default

---

## 6. Extended Reality (XR) — irreplaceable-need test
**Source:** HCI-15 · Knowledge base §10

VR/AR/MR sustains adoption only when embodied presence or immersive
exposure is **fundamentally required** — surgical training, exposure
therapy, heritage preservation. Hardware cost, motion sickness, content
pipeline are permanent barriers. Most consumer XR fails because the use
case doesn't justify the friction.

**Re-entry trigger:**
- Considering a 3D / AR / VR feature for a product
- A critique of the consumer XR market
- A paper on embodiment, presence, or simulation training

---

## 7. CSCW — Time × Space matrix
**Source:** HCI-16 · Knowledge base §11

Collaboration design depends on whether participants are **co-located vs
remote** and whether they're working **synchronously vs asynchronously**.
Each cell has distinct awareness, gesture, and notification needs:
co-located sync needs territoriality; remote sync needs gaze simulation;
async needs activity feeds and handoff norms.

**Re-entry trigger:**
- Adding any collaborative feature (comments, multi-user editing, shared docs)
- A paper on remote work, distributed teams, or hybrid collaboration
- HCI assignment on group dynamics in technology

---

## 8. Crowd & social computing
**Source:** HCI-16-Crowd · Knowledge base §12

Online collaboration succeeds via **trust signals, identity surfacing,
and norm enforcement** — not raw participation volume. Wikipedia
coordination is norm-driven; Twitter relies on reputation; emotional
contagion shapes feeds; information integrity emerges from network
dynamics, not algorithms alone. Traditional usability metrics (task time)
are largely irrelevant for these systems.

**Re-entry trigger:**
- Adding social media embedding or community features
- A paper on misinformation, platform governance, or community design
- Writing about LLM-mediated social systems

---

## 9. Persuasive technology — Fogg model
**Source:** HCI-17 · Knowledge base §13

Behaviour change happens when three align: `B = M × A × T` (Motivation ×
Ability × Trigger). Practical order: **reduce ability friction first**
(defaults, one-click, pre-filled), **time the trigger** to existing
habits, **persuade only when motivation is the bottleneck**. Deception
is fragile; "knowing isn't doing".

**Re-entry trigger:**
- Designing CTAs aimed at a specific behaviour change
- Healthy-habit nudges (savings, exercise, learning)
- A paper on dark patterns, ethical design, or behavioural economics
- An HCI assignment on persuasive design

---

## 10. Lab-to-world research framework (full)
**Source:** HCI-18 · Knowledge base §14

The full robustness / reliability / performance framework for moving an
HCI prototype from controlled study to real-world deployment. The
website only uses the [IN-SCOPE] subset (deploy-and-verify discipline).
Full framework includes:
- Robustness across conditions, devices, network states
- Reliability under attacks and degradation
- Long-tail performance — adoption, retention, edge cases
- Accessibility, affordability, adaptability as universal-design pillars

**Re-entry trigger:**
- Productising any prototype beyond a portfolio
- A paper on HCI research methodology
- Critiquing a published study for ecological validity

---

## 11. Wizard of Oz prototyping
**Source:** HCI-06 · Knowledge base §6

Human operator simulates system intelligence (e.g., voice assistant
backend) to elicit natural interaction patterns before any code is
written. Reveals user mental models and reduces wasted implementation
on unintuitive flows.

**Re-entry trigger:**
- Prototyping any AI / agent product
- An HCI assignment on early-stage design methods
- A paper on simulation-based UX research

---

## 12. Questionnaires & standard instruments
**Source:** HCI-07 · Knowledge base §19

Survey research process (objectives → audience → sampling → questionnaire
→ pilot → distribute → analyse). Question-design rules (Likert 5/7-point,
avoid double negatives, no leading wording). Standard instruments — **SUS**
(System Usability Scale, single 0–100 score, fast non-diagnostic) and
**NASA-TLX** (6-dimension cognitive workload, sensitive across modalities).

**Re-entry trigger:**
- Running any user study
- HCI assignment writeup
- A research paper that needs validated instruments

---

## 13. Quantitative + qualitative analysis
**Source:** HCI-10 · Knowledge base §20

The two methods are complementary, not opposed:
- Quantitative for **comparison / prediction** (does effect exist?)
- Qualitative for **explanation / mechanism** (why does effect exist?)

**Anscombe's Quartet** — four datasets with identical statistical
properties but completely different patterns. Statistical significance is
not enough; qualitative follow-up reveals mechanism.

**Re-entry trigger:**
- Writing the results section of an HCI study
- A methods paper or research proposal
- Defending a quantitative claim against scrutiny

---

## 14. Mary Shaw's research validation types
**Source:** HCI-09 · Knowledge base §21

Spectrum from descriptive/exploratory → prescriptive → evaluative →
analytical. Helps clarify whether HCI work is theory-building,
design-proposing, or efficacy-testing. Avoids claiming "this design
works" when only exploratory evidence exists.

**Re-entry trigger:**
- Writing the academic justification of any design decision
- Term paper structuring its claim type
- Reviewing or critiquing a published HCI paper

---

## How to use this file when writing later

1. **Find the matching topic** above. Note the lecture source.
2. **Read the corresponding section** in `docs/hci-knowledge-base.md` for
   detail.
3. **Cite by lecture and section** — e.g., `(HCI-13, knowledge base §8)`.
4. **Pull the original PDF** from `/Users/wing/Desktop/HKUST/HCI/` if you
   need verbatim quotes or figures.

If a topic moves into website scope (e.g., adding a chatbot brings HRI
into play), promote it from this file into
`.claude/skills/project-context/hci-principles.md` so the agent can
apply it during development.
