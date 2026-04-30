# HCI Principles Quick Reference

Source: ARIN5301, Prof. Xiaojuan Ma, HKUST. Full reference: `docs/hci-knowledge-base.md`

## Nielsen's 10 Usability Heuristics

| # | Name | Key Rule | Website Application |
|---|------|----------|-------------------|
| H1 | Consistency | Same patterns everywhere | Consistent nav, buttons, spacing across pages |
| H2 | Mapping | Match real-world mental models | Nav order: About → Projects → HCI → Contact |
| H3 | Minimalism | Every element earns its place | Hero: only greeting + animation, no clutter |
| H4 | Freedom | Undo, escape, back | Deep-linkable pages, no dead ends, no scroll-jacking |
| H5 | Flexibility | Support novice + expert | Progressive disclosure, prefers-reduced-motion |
| H6 | Recognition | Show, don't require recall | Visible nav labels, active page indicator |
| H7 | Visibility | Show system status | Scroll reveals confirm content loaded, hover feedback |
| H8 | Error Prevention | Prevent before they happen | 44px touch targets, inline validation |
| H9 | Error Recovery | Help diagnose + fix | Custom 404 page with navigation links |
| H10 | Help | Available when needed | Contextual labels, no separate help page needed |

## Gestalt Principles

| Principle | Application |
|-----------|------------|
| Proximity | Section spacing (128px) groups related content |
| Similarity | Consistent card/button styles signal interactivity |
| Continuation | Vertical scroll flow, timeline line guides the eye |
| Closure | Progress indicators, partial reveals invite scrolling |
| Figure-Ground | White cards on grey sections, modal overlays |
| Common Fate | Staggered animations group related elements |
| Symmetry | Centered hero content, balanced layouts |

## Norman's Three Levels of Design

| Level | Focus | Website Implementation |
|-------|-------|----------------------|
| Visceral | First impression, emotion | Bright palette, warm greeting, waving hand |
| Behavioral | Usability, function | Clear nav, fast load, readable typography |
| Reflective | Meaning, self-image | "This person cares about craft" — design quality |

## Severity Rating (for Heuristic Evaluation)

0 = Not a problem → 1 = Cosmetic → 2 = Minor → 3 = Major → 4 = Catastrophe

## Key Numbers

- Working memory: ~7 items (Miller's Law) → max 5 nav items
- Color blindness: 8% male, 0.5% female → never use color alone as indicator
- Touch targets: 44x44px minimum (Fitts's Law)
- Contrast: 4.5:1 minimum (WCAG AA), we exceed at ~15:1
- 5 evaluators catch ~75% of usability problems (Rule of Five)
