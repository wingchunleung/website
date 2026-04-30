# Design & Development Workflow

## 4-Phase Mandatory Workflow

Before any major design or feature implementation:

### Phase A: Deep Research
1. Analyze HCI materials from `/home/wing/Documents/HCI/` (11 PDF lectures)
2. Research best practices for the specific design problem
3. Search web for reference implementations and design patterns
4. Reference `docs/hci-knowledge-base.md` for course-specific principles

### Phase B: Multi-Agent Design Thinking
1. Launch 8+ parallel agents, each with a distinct design perspective:
   - Minimalist, Artistic, HCI/Usability, Storytelling, Portfolio/Recruiter,
     Motion/Interaction, Critique/Devil's Advocate, Tech Stack/Synthesis
2. Each agent proposes a specific, implementable design
3. Each proposal must reference specific HCI principles
4. Agents critique each other's proposals

### Phase C: Decision Phase
1. Synthesize findings from all agents
2. Select or combine the strongest elements
3. Justify decisions using specific HCI principles
4. Document in `design/decisions/` with clear rationale

### Phase D: Implementation
1. Build the design according to Phase C decisions
2. Self-evaluate against Nielsen's 10 heuristics
3. Test accessibility (WCAG 2.1 AA)
4. Verify responsive behavior (mobile, tablet, desktop)
5. Deploy and verify on live site

## When to Skip the Full Workflow

Use the full 4-phase workflow for:
- New pages or major sections
- Homepage redesigns
- Navigation changes
- Major layout restructuring

Use abbreviated workflow (1-2 research agents) for:
- Content updates
- Color/typography adjustments
- Bug fixes
- Performance improvements

Skip workflow entirely for:
- Typo fixes
- Config changes
- Dependency updates
- Git/deployment operations

## Continuous Improvement Cycle

After any implementation:
1. **Inspect** — verify visual output in browser
2. **Evaluate** — check against heuristics
3. **Improve** — fix issues found
4. **Commit** — save progress to git
5. **Deploy** — push to GitHub Pages
6. **Notify** — send Telegram update for significant changes
7. **Loop** — identify next improvement and repeat

## Telegram Notifications

Send via: `/telegram send <message>` or direct API call

Required notifications:
- Before starting major implementation
- After completing significant milestones
- When deploying updates
- When changing design direction
