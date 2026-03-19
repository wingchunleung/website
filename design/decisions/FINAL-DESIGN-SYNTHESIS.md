# Final Design Synthesis: Wing Chun Leung's Personal Website

## Design Concept: "Ink & Signal"

The meeting point between traditional ink wash aesthetics and computational thinking.
Culturally grounded (Hong Kong heritage), artistically intentional, HCI-principled.

---

## Color Palette: "Ink Stone"

### Light Mode
| Role | Hex | CSS Variable |
|------|-----|-------------|
| Background (Paper) | `#f5f0e8` | `--color-paper` |
| Surface (Stone) | `#e8e2d6` | `--color-stone` |
| Text Primary (Ink) | `#1a1714` | `--color-ink` |
| Text Secondary (Wash) | `#9c9488` | `--color-wash` |
| Accent Primary (Vermillion) | `#c73e1d` | `--color-vermillion` |
| Accent Secondary (Celadon) | `#7d9e8c` | `--color-celadon` |
| Border | `#d4cec4` | `--color-border` |

### Dark Mode ("Night Ink")
| Role | Hex |
|------|-----|
| Background | `#1a1714` |
| Surface | `#2a2520` |
| Text Primary | `#e8e2d6` |
| Text Secondary | `#9c9488` |
| Vermillion | `#c73e1d` (unchanged) |
| Celadon | `#7d9e8c` (unchanged) |

**Contrast**: Ink on Paper = ~14.5:1 (exceeds WCAG AAA)

---

## Typography

### Font Stack
- **Display**: Cormorant Garamond (Light 300) - for headlines, artistic moments
- **Body**: Inter (Variable, 400/500/600) - for readability
- **Mono**: JetBrains Mono (400) - for metadata, dates, labels

### Scale (Major Third 1.250)
| Element | Desktop | Mobile | Font | Weight |
|---------|---------|--------|------|--------|
| Display | 64px | 40px | Cormorant | 300 |
| H1 | 48px | 32px | Cormorant | 300 |
| H2 | 36px | 28px | Cormorant | 400 |
| H3 | 24px | 20px | Inter | 600 |
| Body | 18px | 16px | Inter | 400 |
| Small | 14px | 14px | Inter | 400 |
| Caption/Label | 12px | 12px | JetBrains Mono | 400 |

---

## Layout

### Grid System
- **Max content width**: 720px (body text)
- **Max container width**: 1200px (full-width moments)
- **Horizontal padding**: 24px (mobile) / 48px (tablet) / 64px (desktop)
- **Section gap**: 96px (mobile) / 128px (desktop)
- **Base unit**: 8px

### Approach
- **Primary flow**: Single-column narrative (clean, readable)
- **Selective editorial moments**: Asymmetric/overlapping elements at key visual beats (hero, project showcases)
- **NOT full broken-grid everywhere** (critique agent warning: cognitive load)

---

## Page Structure

```
/ (Home) — Scroll-driven narrative journey
├── /about — Extended bio (Professional, Bridge-Builder, Human)
├── /projects — Featured work with impact metrics
├── /hci — HCI course page (celadon accent)
│   └── /hci/[slug] — Individual assignments
└── /contact — Simple, clean contact
```

**Navigation**: 5 items (About, Projects, HCI, Contact + logo/home)
- Sticky header, transparent over hero → frosted compact on scroll
- Mobile: hamburger → full-screen overlay

---

## Homepage Narrative (Scroll-Driven)

### Hero (100vh)
- Name: "Wing Chun Leung" in Cormorant Garamond display
- Tagline: "Finance speaks one language. AI speaks another. I build the bridge."
- Subtle ink-wash background animation (low opacity, canvas/SVG)
- Scroll indicator

### Journey Section
- Geographic/career arc: HK → US → UW → Costco → Carta → HKUST
- Each stop = one scroll beat with Question/Work/Impact structure
- Scroll-triggered reveals, not scroll-jacking

### Featured Work (3 cards)
- Each card: one quantified impact metric prominently displayed
- "70% time reduction" / "97% accuracy" / "LLM pipeline for RMB 5T+ AUM"

### Contact
- Email, LinkedIn, GitHub
- Resume download CTA

---

## HCI Course Page

- Uses **celadon** (`#7d9e8c`) as accent instead of vermillion
- Background shifts to stone (`#e8e2d6`)
- Assignments listed with clean cards, deep-linkable
- Meta-reflexive: page demonstrates the principles it describes
- Must pass its own heuristic evaluation (audience knows HCI)

---

## Motion & Interaction

### Hero Entrance (~2.2s)
0.0s: Background fade (600ms)
0.3s: Name chars stagger up (800ms, power3.out)
0.8s: Subtitle fade+slide (600ms)
1.2s: Nav stagger (500ms)
1.6s: Scroll indicator pulse

### Scroll Reveals
- Fade-up: translateY(40px→0), opacity(0→1), 800ms, power2.out
- Trigger at 80% viewport
- Stagger children: 120ms
- Mobile: 20px distance, 500ms duration

### Hover States
- Links: ink-brush underline grows left→right (300ms)
- Cards: lift -4px + shadow (300ms)

### Page Transitions
- Astro View Transitions API
- Cross-fade 200ms

### Reduced Motion
- `prefers-reduced-motion`: all animations instant, ink wash static
- First-class code path, not afterthought

---

## Tech Stack

| Layer | Choice | Reason |
|-------|--------|--------|
| Framework | Astro 5.x | Zero JS default, View Transitions, image optimization |
| Islands | Preact | Lightweight interactive components |
| Styling | Tailwind CSS 4 | Utility-first, purged ~5-15KB |
| Animation | GSAP 3 + ScrollTrigger | Professional scroll animations, 23KB |
| Fonts | Self-hosted (Cormorant + Inter + JetBrains Mono) | No third-party DNS, no FOUT |
| Content | Markdown/MDX (Astro Content Collections) | Type-safe, version-controlled |
| Deployment | Cloudflare Pages | <50ms global, free tier |

### Performance Budget
| Metric | Target |
|--------|--------|
| LCP | <1.5s |
| CLS | <0.05 |
| Total JS | <50KB gzip |
| Total CSS | <15KB gzip |
| Page weight | <500KB |

---

## Accessibility (WCAG 2.1 AA)
- Contrast: 4.5:1 minimum (we exceed at 14.5:1)
- Touch targets: 44x44px minimum
- Keyboard: full navigation, visible focus indicators
- Skip-to-content link
- Semantic HTML landmarks
- prefers-reduced-motion support
- No color as sole indicator (color blindness safe)
- Proper heading hierarchy

---

## Design Principles (Decision Framework)

1. **Artistic before utilitarian** — but never at the cost of comprehension
2. **Cultural authenticity** — ink/paper/seal motifs reflect Hong Kong heritage
3. **Progressive disclosure** — 5s/10s/60s engagement layers
4. **Every element earns its place** — no decoration without purpose
5. **The HCI page is the hardest page** — it must be flawless
