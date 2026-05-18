# Design System Inspired by Futuristic

> Category: Themed & Unique
> Forward-looking design with tech-inspired typography, modern layouts, and a sleek, innovation-driven aesthetic with blue/green energy accents.

## 1. Visual Theme & Atmosphere

Forward-looking design with tech-inspired typography, modern layouts, and a sleek, innovation-driven aesthetic.

- **Visual style:** modern
- **Color stance:** primary, neutral, success, warning, danger
- **Design intent:** Keep outputs recognizable to this style family while preserving usability and readability.

## 2. Color

- **Primary:** `#3B82F6` — Token from style foundations.
- **Secondary Token (reserved):** `#8B5CF6` — Keep available for compatibility, but avoid making it dominant.
- **Secondary Accent (active UI):** `#22C55E` — Use as the preferred futuristic accent to improve readability and reduce purple noise.
- **Success:** `#16A34A` — Token from style foundations.
- **Warning:** `#D97706` — Token from style foundations.
- **Danger:** `#DC2626` — Token from style foundations.
- **Surface:** `#FFFFFF` — Token from style foundations.
- **Text:** `#111827` — Token from style foundations.
- **Neutral:** `#FFFFFF` — Derived from the surface token for official format compatibility.

- Favor Primary (#3B82F6) for CTA emphasis.
- Prefer blue→green gradients (`#3B82F6` → `#22C55E`) over blue→violet for links, highlights, and glow accents.
- Use green as a support accent, not as a replacement for primary hierarchy.
- Use Surface (#FFFFFF) for large backgrounds and cards.
- Keep body copy on Text (#111827) for legibility.

## 3. Typography

- **Scale:** desktop-first expressive scale
- **Families:** primary=Roboto, display=Audiowide, mono=Anonymous Pro
- **Weights:** 400, 500, 600, 700
- Headings should carry the style personality; body text should optimize scanability and contrast.
- Reading-first heading guidance: keep `h3` compact (`clamp(1.05rem, 0.95rem + 0.45vw, 1.3rem)`) to prevent crowding in dense layouts.

## 4. Spacing & Grid

- **Spacing scale:** 4/8/12/16/24/32
- Keep vertical rhythm consistent across sections and components.
- Align columns and modules to a predictable grid; avoid ad-hoc offsets.
- Use clamp-based spacing tokens: `body-gutter=clamp(0.5rem, 1.2vw, 1rem)`, `page-gutter=clamp(0.5rem, 2vw, 1.5rem)`, `section-gutter=clamp(0.5rem, 1.8vw, 1.25rem)`, `section-block=clamp(0.75rem, 1.8vw, 1.5rem)`.
- Keep readable line length by constraining central content width: `main-max-width=64rem`.
- For grids with 3+ section columns, reduce heading size and enable safe word wrapping to avoid visible word cuts.

## 5. Layout & Composition

- Prefer clear content blocks with consistent internal padding.
- Keep hierarchy obvious: headline → support text → primary action.
- Use whitespace to separate concerns before adding borders or shadows.

## 6. Components

- Buttons: primary action uses `#3B82F6`; secondary/outline emphasis can use green accent (`#22C55E`) while preserving clear contrast.
- Inputs: strong focus-visible states, clear labels, and predictable error messaging.
- Cards/sections: use consistent radii, spacing, and elevation strategy across the page.

## 7. Motion & Interaction

- Use subtle transitions that emphasize Primary (#3B82F6) as the interaction signal.
- Default to short, purposeful transitions (150–250ms) with stable easing.
- Ensure hover, focus-visible, active, disabled, and loading states are explicit.

## 8. Voice & Brand

- Tone should reflect the visual style: concise, confident, and product-specific.
- Keep microcopy action-oriented and avoid generic filler language.
- Preserve the style identity in headlines while keeping UI labels literal and clear.

## 9. Anti-patterns

- Do not introduce off-palette colors when an existing token can solve the problem.
- Do not let violet dominate the interface when readability is the goal; default to blue/green emphasis.
- Do not flatten hierarchy by using the same type size/weight for all text.
- Do not add decorative effects that reduce readability or accessibility.
- Do not mix unrelated visual metaphors in the same interface.