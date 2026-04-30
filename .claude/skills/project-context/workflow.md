# Design & Development Workflow

## 4-Phase Mandatory Workflow

Before any major design or feature implementation:

### Phase A — Research
1. Read relevant lectures from `/Users/wing/Desktop/HKUST/HCI/` (18 lectures, organised Lect1–Lect10).
2. Identify in-scope principles via `scope.md`; skim `hci-principles.md`.
3. Look at reference implementations (Apple, Carta, Stripe).
4. Read existing DDRs in `design/decisions/` — proposals and `FINAL-DESIGN-SYNTHESIS.md` are the canonical direction.

### Phase B — Multi-Agent Ideation (Parallel / Breadth-First)
HCI-06 prototyping strategy: this phase is **parallel + low-fidelity** to maximise divergence.

1. Launch ≥8 parallel agents, each with a distinct lens:
   Minimalist · Artistic · HCI/Usability · Storytelling · Recruiter · Motion · Critique/Devil's Advocate · Synthesis
2. Each agent proposes a specific, implementable design.
3. Each proposal cites in-scope principles from `hci-principles.md`.
4. Agents critique each other.

### Phase C — Decision
1. Synthesise findings into one direction.
2. Justify with named principles + need-typology fit.
3. Document in `design/decisions/<NNN>-<title>.md`. Each DDR contains:
   - Problem · Options considered · Decision · Severity (0–4) · HCI principles cited · Trade-offs · Deciding factor

### Phase D — Implementation (Serial / Depth-First)
HCI-06: this phase is **serial + high-fidelity** to refine one design.

1. Build per Phase C. No new exploration here.
2. Self-evaluate against the Nielsen heuristics (Rule of Five spirit — even one inspector catches ~35%).
3. Run accessibility checks (WCAG 2.1 AA, keyboard, contrast, reduced-motion).
4. Verify on mobile viewport.
5. **Deploy and verify on the live URL** (HCI-18 lab-to-world): click every nav link, confirm no 404, no unstyled flash.
6. Only then mark complete.

## Evaluation Methods Are Orthogonal — Use All Three Where Possible

| Method | Detects | Use here |
|--------|---------|----------|
| Heuristic inspection | Known-rule violations | After every implementation; cheap and fast |
| Lab usability test | User-intent mismatch | Before HCI assignment milestones; small-N walkthroughs |
| Field deployment | Real-world adoption / robustness | Always — every change ends with live-site verification |

Don't substitute one for another. Heuristic alone misses live-site issues; live-site alone misses theoretical violations.

## When to Skip the Full Workflow

| Change type | Workflow |
|-------------|----------|
| New page / major section / nav change | Full A–D |
| Color or type adjustment | A (light) → C → D |
| Content / copy update | D only (with humanizer pass) |
| Bug fix / typo / config | Direct edit |
| Performance fix | D only |

## Continuous Improvement Cycle

After any implementation:

1. Inspect live output in browser
2. Evaluate against heuristics + need typology
3. Improve identified gaps
4. Commit
5. Deploy
6. Verify on live URL
7. Notify (optional, see Telegram below)
8. Identify next improvement

## Telegram Notifications

`/telegram send <message>` for:

- Before starting major implementation
- After completing significant milestones
- On deploy
- On design-direction change
