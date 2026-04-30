# HCI Knowledge Scope — In/Out for the Website

The personal-portfolio website is a static artefact. Most HCI material from
ARIN5301 is course-relevant but **not website-relevant** — applying it
speculatively would be principles without instances. This file is the
**index** for what to apply now and what to park for later.

Three storage locations:
- **Working subset (apply now)** → `.claude/skills/project-context/hci-principles.md`
- **Full reference** → `docs/hci-knowledge-base.md` (everything from the lectures, tagged [IN-SCOPE] / [DEFERRED])
- **For future writing** → `docs/hci-deferred-for-writing.md` (deferred topics with re-entry triggers)

---

## In-scope (apply now to the website)

| Concept | Source | Where it lands on this site |
|---|---|---|
| Nielsen's 10 heuristics (context-bound) | HCI-08 | Page-level critique, severity rating in DDRs |
| Gestalt as cognitive-load engineering | HCI-03 | Section grouping, card grids, spacing decisions |
| Norman's three levels (visceral / behavioural / reflective) | HCI-02 | Hero, type pairing, motion polish |
| Need typology — competence, autonomy, relatedness, security | need-typology paper | Tone, scroll behaviour, copy, deploy reliability |
| Fitts / Hick / Miller's ~7 | HCI baseline | Touch targets, nav cap, chunking |
| Gulf of Execution / Evaluation | HCI baseline | Diagnostic frame for any "this click feels off" issue |
| Multimodal redundancy | HCI-11 (subset) | Colour + text fallback, icon + label, reduced-motion |
| Lab-to-world deploy-and-verify | HCI-18 (subset) | Required step in workflow Phase D |
| Heuristic eval + Rule of Five | HCI-08 | Self-evaluation after each implementation |
| Severity scale 0–4 (domain judgment) | HCI-08 | DDR severity field |
| Prototyping strategy axis (parallel breadth × serial depth) | HCI-06 | Phase B (multi-agent ideation) and Phase D (serial polish) |
| WCAG 2.1 AA + accessibility | HCI-18 + WCAG | Mandatory floor |

→ Full working details in `hci-principles.md`.

---

## Deferred (for future writing / projects, not the website)

| Concept | Source | Re-entry trigger |
|---|---|---|
| HRI — Tool–Actor autonomy spectrum | HCI-13 | Building any agent UI, chatbot, or robot interface |
| XR — irreplaceable-need test | HCI-15 | Considering 3D / AR / VR features |
| Ubiquitous computing — context-awareness, heterogeneity | HCI-14 | Mobile-first + IoT companion product |
| CSCW — time × space matrix, awareness mechanisms | HCI-16 | Adding any collaborative feature (comments, multi-user) |
| Social computing / crowd — norms, contagion | HCI-16-Crowd | Adding social media embedding or community feature |
| Persuasive tech — Fogg `B = M × A × T` | HCI-17 | Designing CTAs that aim to drive a specific behaviour change |
| Wizard of Oz prototyping | HCI-06 | Prototyping anything with simulated intelligence |
| Activity Theory | HCI-05 | Studying how a tool fits into a workplace/community |
| GOMS / KLM keystroke-level models | HCI-05 | Optimising data-entry / power-user workflows |
| HTA decomposition | HCI-05 | Mapping a complex multi-step task |
| NASA-TLX cognitive workload | HCI-07 | Comparing two interaction modalities under load |
| SUS questionnaire | HCI-07 | Running a user study; HCI assignment writeup |
| Personas (formal POV User+Need+Insight) | HCI-05 | Phase A research for a new feature, or HCI assignment |
| Mary Shaw research validation types | HCI-09 | Writing the academic justification of decisions |
| Quant/qual continuum, Anscombe's quartet | HCI-10 | Reporting study results in HCI assignments |
| Multimodal fission/fusion (full theory) | HCI-11 | Adding voice or haptic interaction |
| Lab-to-world full robustness framework | HCI-18 | Productising beyond a portfolio |

→ Full summaries in `docs/hci-deferred-for-writing.md`.
→ Long-form reference in `docs/hci-knowledge-base.md`.

---

## How to use this file

- **Before adding a website feature**: scan **In-scope** to pick principles that apply.
- **If a question maps to Deferred**: note in DDR's "deferred theory" field rather than padding the design rationale.
- **When writing an HCI assignment / paper**: read the matching section in `docs/hci-deferred-for-writing.md` for the re-entry trigger and the lecture source.
- **When the website's scope expands** (adding a chatbot, community feature, mobile companion): promote the relevant Deferred row into `hci-principles.md` and update DDRs accordingly.
