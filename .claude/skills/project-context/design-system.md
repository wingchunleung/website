# Ink & Signal Design System

Light-only direction (per `execution_state.md`). All values live in `src/styles/design-tokens.css` — never hardcode colors or spacing.

## Color Palette

| Token | Hex | Role |
|-------|-----|------|
| `--color-paper` | `#ffffff` | Page background |
| `--color-paper-warm` | `#faf9f7` | Warm white sections |
| `--color-stone` | `#f5f5f7` | Surface (Apple light grey) |
| `--color-ink` | `#1d1d1f` | Primary text |
| `--color-wash` | `#86868b` | Secondary text |
| `--color-border` | `#e8e8ed` | Dividers |
| `--color-vermillion` | `#c73e1d` | Primary accent |
| `--color-celadon` | `#7d9e8c` | HCI page accent only |

**Color rule (multimodal redundancy, HCI-11):** color is never the sole signal. Every accent state pairs with a text label, icon, or shape change.

**Contrast (WCAG AA):** ≥4.5:1 on body, ≥3:1 on large text. Body currently exceeds 15:1 — verify before any palette change.

## Typography

| Role | Font | Weight | Sizes |
|------|------|--------|-------|
| Display | Cormorant Garamond | 300 (Light) | 40–64px clamp |
| H1 | Cormorant Garamond | 300 | 32–48px |
| H2 | Cormorant Garamond | 400 | 28–36px |
| H3 | Inter | 600 | 20–24px |
| Body | Inter | 400 | 16–18px |
| Labels/meta | JetBrains Mono | 400 | 12px, uppercase, wide tracking |

Type scale: Major Third (1.250). Major Third must hold across all pages — no one-off sizes.

## Spacing — 8px Grid

| Token | Value | Use |
|-------|-------|-----|
| `--space-2` | 8px | Tight gaps |
| `--space-3` | 16px | Default element gap |
| `--space-4` | 24px | Group spacing |
| `--space-5` | 32px | Comfortable padding |
| `--space-6` | 48px | Major group gap |
| `--space-8` | 96px | Section gap (mobile) |
| `--space-10` | 128px | Section gap (desktop) |

Max content: 720px (`.content`). Max container: 1200px. Gutter: 24–64px responsive.

**Gestalt grouping (HCI-03):** spacing is *cognitive load shedding*, not decoration. 96–128px between sections, ≤24px inside a card. The gap difference is what signals "different group".

## Buttons

- **Primary** — pill (border-radius 100px), dark fill, 48px height
- **Outline** — pill, 1.5px border, 48px height
- **Hover** — `translateY(-1px)`; primary changes to vermillion
- **Touch target** — ≥44×44px (Fitts's Law) including padding

## Animation

- Entrance: 0.8s, `cubic-bezier(0.16, 1, 0.3, 1)`
- Micro-interaction: 0.3s, same easing
- Stagger: 0.08–0.12s (Gestalt common-fate)
- Scroll reveal: `translateY(40px → 0)` + `opacity(0 → 1)` at 80% viewport
- Wave: 3 cycles then stop (no infinite loops)
- `prefers-reduced-motion: reduce` → all durations zero. Animation conveys delight, never meaning.
