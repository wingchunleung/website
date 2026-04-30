# Ink & Signal Design System

## Color Palette (Bright, Apple-inspired)

### Light Mode (Primary)
| Token | Hex | Role |
|-------|-----|------|
| `--color-paper` | `#ffffff` | Page background |
| `--color-paper-warm` | `#faf9f7` | Warm white sections |
| `--color-stone` | `#f5f5f7` | Surface (Apple light grey) |
| `--color-ink` | `#1d1d1f` | Primary text |
| `--color-wash` | `#86868b` | Secondary text |
| `--color-border` | `#e8e8ed` | Dividers |
| `--color-vermillion` | `#c73e1d` | Primary accent |
| `--color-celadon` | `#7d9e8c` | HCI page accent |

### Dark Mode ("Night Ink")
Background: `#1d1d1f`, Text: `#f5f5f7`, Accents unchanged.

## Typography

| Role | Font | Weight | Sizes |
|------|------|--------|-------|
| Display headings | Cormorant Garamond | 300 (Light) | 40-64px clamp |
| H1 | Cormorant Garamond | 300 | 32-48px |
| H2 | Cormorant Garamond | 400 | 28-36px |
| H3 | Inter | 600 (Semibold) | 20-24px |
| Body | Inter | 400 | 16-18px |
| Labels/meta | JetBrains Mono | 400 | 12px, uppercase, wide tracking |

## Spacing (8px base)

| Token | Value | Use |
|-------|-------|-----|
| `--space-2` | 8px | Tight gaps |
| `--space-3` | 16px | Default element gap |
| `--space-4` | 24px | Group spacing |
| `--space-5` | 32px | Comfortable padding |
| `--space-6` | 48px | Major group gap |
| `--space-8` | 96px | Section spacing (mobile) |
| `--space-10` | 128px | Section spacing (desktop) |

Max content: 720px. Max container: 1200px. Gutter: 24-64px responsive.

## Buttons

- **Primary:** Pill-shaped (border-radius: 100px), dark fill, 48px height
- **Outline:** Pill-shaped, 1.5px border, 48px height
- **Hover:** translateY(-1px), primary changes to vermillion

## Animation

- Entrance: 0.8s, `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out)
- Micro-interaction: 0.3s, same easing
- Stagger: 0.08-0.12s between elements
- Scroll reveal: translateY(40px→0) + opacity(0→1), triggered at 80% viewport
- Wave: 3 cycles then stop (not infinite)
- `prefers-reduced-motion`: all animations instant
