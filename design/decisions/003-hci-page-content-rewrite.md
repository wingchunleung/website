# Design Decision Record 003: HCI Page Content Rewrite

**Date**: 2026-05-01
**Status**: Accepted
**Supersedes**: the four "Design Notes" cards on the previous /hci page (Color / Typography / Whitespace / Motion).
**Related**: DDR-001 (HCI Design Requirements; severity-rated REQ list), `docs/hci-knowledge-base.md` (lecture synthesis, IN-SCOPE / DEFERRED tags), `docs/hci-deferred-for-writing.md` (concepts deliberately excluded).

---

## 1. Context

The audience for `/hci` is a **TA grading ARIN5301**, not a recruiter. The previous page treated the HCI section the same way the rest of the site treats portfolio content: short marketing-flavoured cards. That register is wrong for this audience. A grader needs to see lecture concepts cited by source, applied to specific decisions on this page, and audited against the course's own evaluation rubric.

Yesterday's commit (`c7aedd8`) added a comprehensive HCI knowledge base tagged IN-SCOPE / DEFERRED, plus a deferred-for-writing companion. We can now rewrite the page using lecture vocabulary so the page is defendable as the artefact for an HCI course — meta-reflexive: the page both describes principles and demonstrates them.

---

## 2. Constraints (locked before ideation)

| # | Constraint | Source |
|---|---|---|
| C1 | Hybrid structure: keep Assignments + Principles list, replace the four Design Notes cards with a longer lecture-by-lecture narrative. | User decision, this session. |
| C2 | Include a heuristic self-evaluation against Nielsen's 10 with severity 0–4, using HCI-08 expert-inspection vocabulary verbatim. | User decision, this session. |
| C3 | Cite only concepts that actually shaped this page. Deferred concepts are excluded — they live in `docs/hci-deferred-for-writing.md` for future essays. | User decision, this session. |
| C4 | TA-facing register: lecture vocabulary, no pixel counts, no framework names, no implementation jargon. | User decision, this session. |
| C5 | No edits to shared files (BaseLayout, Header, Footer, IntroOverlay, design tokens, astro.config, public/). Page-scoped change only. | CLAUDE.md §Deployment & Landing-Page Animation. |

---

## 3. Phase B — Multi-Agent Copy Ideation Summary

Four parallel copy treatments were drafted for the lecture-by-lecture narrative section only (structure was settled in Phase A by the Plan agent and is not re-litigated here).

### Option A — Lecture-faithful
Style: dense citation, lecture's own phrasing, parenthetical lecture codes throughout.
**Strength**: highest grader-confidence on first scan; the phrasing is unmistakably from the course.
**Weakness**: visual rhythm is dense (lecture code + principle name + parenthetical per row); a non-HCI-08 reader needs a glossary. Self-critique flagged H3 (aesthetic and minimalist) and H10 (help and documentation) costs.

### Option B — Plain-language
Style: canonical name in bold, plain-English explanation. Translates jargon while keeping the lecture's name as a citation.
**Strength**: scannable on a careful read; the canonical-name-in-bold pattern locks the source before the explanation begins, so plain wording reads as translation rather than substitution.
**Weakness**: a fast-scanning grader might judge plain wording as evidence of weaker grasp ("they're paraphrasing because they don't know the term"). Mitigated by the canonical-name-in-bold lead.

### Option C — Tight-row
Style: fewest words possible per row; sentence fragments allowed; under 22 words per entry.
**Strength**: scans fastest; visual register matches a table; signals confidence.
**Weakness**: brevity flattens trade-offs and reads as under-engagement to a grader rewarding depth. A row's link from concept to decision can fail to be self-evident.

### Option D — Reflective-essay (baseline)
Style: 4–6 connected paragraphs, first-person, weaving concepts into a story.
**Strength**: well-suited to expressing genuine connections between concepts (e.g., the Norman → Gestalt → Miller composition argument).
**Weakness** (and this was the expected loser): fails H3 immediately (six paragraphs for ten concepts); fails H6 — readers can't scan back to find a specific concept; fails H5 — no fast path for an expert who already knows the material. The agent's own self-critique recommended the winning hybrid.

### Cross-critiques (the load-bearing ones)
- **D-on-D**: "A workable hybrid would keep one short essay paragraph as the section opener (the meta-reflexive frame) and demote the other nine concepts to scannable rows underneath." This single observation defined the synthesis.
- **A-on-self**: "Lecture-faithful wording costs on H3… cognitive load is real and it should not be the only register on the page." Confirms not running pure-A.
- **C-on-self**: "Pairing the table with one short reasoned paragraph per concept group would hedge the risk." Same hybrid recommendation arrived at independently.

---

## 4. Decision (Synthesis)

**One reflective framing paragraph + ten plain-language rows with canonical names bolded.**

### Section anatomy
1. **One short framing paragraph (≤60 words)** drawn from Option D. States that the page is the artefact under evaluation; the rows below name lecture sources and the concrete decisions they shaped on this page.
2. **Ten rows**, one per concept, each ≤35 words, in this format:
   `**HCI-XX · Principle name** — Plain-language sentence(s) explaining the shaping decision on this specific page.`
3. **Concepts and order**: HCI-02 Norman's three levels → HCI-03 Gestalt-as-load → HCI-03 Miller's ~7 → HCI-08 heuristics+severity → HCI-08 Rule of Five → UX models → Gulfs → Need-typology Competence+Security → HCI-11 multimodal redundancy → HCI-18 lab-to-world.

### Page order after rewrite
Hero → Assignments (with anchor TOC + upgraded empty-state copy) → "How this page was designed" narrative → Principles reference appendix (re-framed) → Heuristic self-evaluation table + severity legend → Footer.

### Principle that tipped the call
**H3 (aesthetic and minimalist) operating in tension with the meta-reflexive obligation.** The page must demonstrate HCI thinking, which requires content. Adding content costs H3 by definition. The synthesis minimises the cost (rows over paragraphs, plain language over dense citation, one short framing paragraph rather than six) while preserving the meta-reflexive frame that is the page's whole reason to exist.

The reflective level (Norman) is also a major factor — the framing paragraph and the closing self-audit together carry the reflective-level signal that the rest of the page can't.

---

## 5. Heuristic Self-Evaluation (audit performed before this rewrite; remediation lands in this revision)

| # | Heuristic | Severity | Justification | Remediation |
|---|---|---|---|---|
| H1 | Consistency & standards | 0 | Celadon accent swap is the only deviation; layout/type/spacing identical to other pages. | — |
| H2 | Mapping | 1 | Page is structured by assignments (TA's mental model); section header still says "Coursework" rather than course-code language. | Header reads "ARIN5301 deliverables" in this revision. |
| H3 | Aesthetic & minimalist | 2 | The new narrative + audit are themselves added content on a page that argues for restraint. Honest cost. | Tight-row format; no prose paragraphs in the narrative; severity legend on the same view as the table. |
| H4 | User control & freedom | 2 | No anchor TOC for assignments; visitor must scroll past everything to reach a later assignment as more arrive. | Anchor-link TOC at the top of Assignments, this revision. |
| H5 | Flexibility & efficiency | 3 | Time-pressed grader has no skip-to-assignments path; no power-user shortcut to find a specific principle. | Anchor TOC + skip-to-content link (already site-wide) + bolded canonical names that act as in-page landmarks. |
| H6 | Recognition over recall | 1 | Principles list is read-once with no persistent legend; severity scale would be unrecognised by non-HCI-08 readers. | Severity legend adjacent to audit; canonical principle names bolded as recognition cues throughout the narrative. |
| H7 | Visibility of system status | 1 | Site-wide scroll progress bar + status pills work; new page length didn't add a per-section indicator. | Considered, deferred — the global progress bar is sufficient for a page of this length. |
| H8 | Error prevention | 0 | No forms, no destructive actions on this page. | — |
| H9 | Help users recover | 1 | Previous "TBD" placeholder didn't tell a TA what to do if the slot was still empty on grading day. | Empty-state copy upgraded: "If empty on grading day, please contact me via /contact." |
| H10 | Help & documentation | 2 | Severity 0–4 vocabulary used in the self-audit without explanation for a reader unfamiliar with HCI-08. | Severity legend box adjacent to the audit table, this revision. |

Severities follow HCI-08's `Severity = f(Frequency, Impact, Persistence)`. The audit is a single-evaluator pass — Rule of Five says one inspector catches roughly 35% of issues, so this audit is not exhaustive and the page acknowledges that explicitly.

H3 stays at 2 even after the rewrite: that is the honest call, since adding any content increases load by definition. The trade is that without this content the page cannot demonstrate HCI thinking at all, and a course-page that fails to demonstrate course material is a worse outcome than one that costs a small amount of H3.

---

## 6. Trade-offs (what was sacrificed)

- **Pure scannability** (Option C). A grader who only wants the rows would find Option C marginally faster. The framing paragraph is the cost of the meta-reflexive frame.
- **Pure citation density** (Option A). Option A would feel more academically heavyweight on first scan. Plain-language was chosen to reduce H10 friction; the lecture codes and canonical principle names are still bolded so the citation signal is preserved.
- **Inline narrative argument** (Option D). The Norman → Gestalt → Miller composition argument reads better as prose. We sacrifice this to keep the section scannable; the framing paragraph carries enough of the reflective register to compensate.
- **Visual TOC for assignments when only one assignment exists.** A TOC with one entry looks awkward; we accept that as a small visual cost in exchange for the H4/H5 fix landing now rather than in some future commit.

---

## 7. Open risks

- **Long-term content drift.** As more assignments arrive, the page lengthens. The H3 score may need re-rating. The audit table is in the page itself, so a future revision can update severities transparently.
- **Severity-legend reading order.** If the legend is rendered below the audit table, a reader might score a row before they reach the legend. Mitigation: place the legend at the top of the audit section, before the table, so the vocabulary is established before any rating is read.
- **The lecture-by-lecture narrative is order-sensitive.** If a future change reorders the rows, the implicit composition (Norman → Gestalt → Miller → Nielsen → UX models → Gulfs → Needs → Multimodal → Lab-to-world) breaks. The order is roughly bottom-up: perception → cognition → heuristics → mental-model gulfs → motivational layer → deployment. Future edits should preserve this ladder.
- **Self-evaluation honesty as performance.** A self-audit that scores everything 0–1 reads as humble-bragging. Severity 2 on H3 and H10, severity 3 on H5 are credibility anchors and should not be flattened on review.

---

## 8. Verification (Phase D self-evaluation, post-implementation)

After the rewrite ships to `master`:

1. **Render check** — `npm run dev`; visit `/hci`; confirm all sections render, anchor links resolve, no console errors.
2. **Tab-order audit** — keyboard pass top-to-bottom: skip-link → header nav → assignments TOC → first assignment card → narrative rows → principles appendix → audit table → footer. No focus traps.
3. **Reduced motion** — DevTools "prefers-reduced-motion: reduce"; confirm no animations kick in. Page must remain readable.
4. **Mobile width (390 px)** — confirm narrative rows wrap cleanly, audit table is readable (may stack to a card layout below 640 px), TOC fits.
5. **Self-eval re-score** — re-run the audit rubric in Section 5 against the live page. Severities should match; document any drift in a follow-up DDR if they don't.
6. **No deploy.** Per CLAUDE.md, `gh-pages` deploy is a separate gated action requiring a divergence check — not part of this revision.
