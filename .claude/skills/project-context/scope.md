# Knowledge Scope — In/Out for Current Design Phase

The personal website is a static portfolio in **Phase D (implementation + iteration)**. Most HCI material from the course is relevant; some is parked for later. This file is the index — it tells future agents what to apply now and what to ignore until the relevant context arises.

---

## In-Scope (apply now)

These live in `hci-principles.md` and are referenced by every design decision on this site.

| Concept | Source | Where it lands |
|---------|--------|----------------|
| Nielsen's 10 heuristics (context-bound) | HCI-08 | Page-level critique, severity rating in DDRs |
| Gestalt as cognitive-load engineering | HCI-03 | Section grouping, card grids, spacing decisions |
| Norman's three levels (visceral/behavioral/reflective) | HCI-02 | Hero, type pairing, motion polish |
| Need typology — competence, autonomy, relatedness, security | need-typology paper | Tone, scroll behavior, copy, deploy reliability |
| Fitts's Law / Hick's Law / Miller's ~7 | HCI baseline | Touch targets, nav cap, chunking |
| Gulf of Execution / Evaluation | HCI baseline | Diagnostic frame for any "this click feels off" issue |
| Multimodal redundancy | HCI-11 | Color + text fallback, icon + label, reduced-motion |
| Lab-to-world gap (deploy-and-verify) | HCI-18 | Required step in workflow Phase D |
| Heuristic eval + Rule of Five | HCI-08 | Self-evaluation after each implementation |
| Severity scale (0–4) as domain judgment | HCI-08 | DDR severity field |
| Prototyping strategy axis (parallel breadth-first vs serial depth-first) | HCI-06 | Phase B (multi-agent ideation = parallel) and Phase D (serial polish) |
| WCAG 2.1 AA + accessibility | HCI-18 | Mandatory floor |

---

## Out-of-Scope (parked for later)

Relevant for HCI coursework, future projects, or specific narrative needs — not for the current static portfolio. Note the suggested re-entry point so they're not lost.

| Concept | Source | Re-enter when… |
|---------|--------|----------------|
| HRI — autonomy spectrum, social robots | HCI-13 | Building any agent UI, chatbot, or robot interface |
| XR — reality-virtuality continuum, irreplaceable-need test | HCI-15 | Considering 3D/AR/VR features |
| Ubiquitous computing — context-awareness, heterogeneity | HCI-14 | Mobile-first/IoT companion product |
| CSCW — time/space matrix, awareness mechanisms | HCI-16 | Adding any collaborative feature (comments, multi-user) |
| Social computing / crowd — norm enforcement, contagion | HCI-16-Crowd | Adding social media embedding or community feature |
| Persuasive tech — Fogg trigger×motivation×ability | HCI-17 | Designing CTAs that aim to drive a specific behavior change |
| Wizard of Oz prototyping | HCI-06 | Prototyping anything with simulated intelligence |
| Activity Theory | HCI-05 | Studying how a tool fits into a workplace/community |
| GOMS / KLM keystroke-level models | HCI-05 | Optimizing data-entry / power-user workflows |
| HTA decomposition | HCI-05 | Mapping a complex multi-step task |
| NASA-TLX cognitive workload | HCI-07 | Comparing two interaction modalities under load |
| SUS questionnaire | HCI-07 | Running a user study; HCI assignment writeup |
| Personas (formal POV User+Need+Insight) | HCI-05 | Phase A research for a new feature, or HCI assignment |
| Mary Shaw research validation types | HCI-09 | Writing the HCI page / academic justification of decisions |
| Quant/qual continuum, Anscombe's quartet | HCI-10 | Reporting study results in HCI assignments |
| Multimodal fission/fusion (full theory) | HCI-11 | Adding voice or haptic interaction |
| Lab-to-world (full robustness/reliability framework) | HCI-18 | Productizing beyond a portfolio site |

---

## How to use this file

- Before adding a new feature, scan **In-Scope** to pick the principles that apply.
- If a question arises that maps to **Out-of-Scope**, note it in the DDR's "deferred theory" field rather than padding the design rationale.
- When the website's scope expands (e.g., adding a chatbot, a community feature, a mobile companion), promote the relevant Out-of-Scope row into `hci-principles.md`.
