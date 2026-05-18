---
name: Cosmic
colors:
  primary: "#3B82F6"
  secondary: "#10B981"
  success: "#16A34A"
  warning: "#D97706"
  danger: "#DC2626"
  surface: "#FFFFFF"
  text: "#111827"
  neutral: "#FFFFFF"
typography:
  h1:
    fontFamily: "Audiowide"
    fontSize: 2rem
  h3:
    fontFamily: "Audiowide"
    fontSize: "clamp(1.05rem, 0.95rem + 0.45vw, 1.3rem)"
  body-md:
    fontFamily: "Roboto"
    fontSize: 1rem
  label-caps:
    fontFamily: "Anonymous Pro"
    fontSize: 0.75rem
  sourceScale: "fluid clamp-based, readability-first"
  weights: "400, 500, 600, 700"
rounded:
  sm: 4px
  md: 8px
spacing:
  sm: 4px
  md: 8px
  sourceScale: "4/8/12/16/24/32"
---

## Overview

Futuristic sci-fi aesthetic with dark themes, vibrant neon accents, and immersive spatial elements.

## Style Foundations

- **Visual style:** playful, premium
- **Typography scale:** 12/14/16/20/24/32 with fluid clamp behavior on narrow viewports
- **Typography fonts:** primary=Roboto, display=Audiowide, mono=JetBrains Mono
- **Typography weights:** 300, 400, 500, 600, 700
- **Color palette:** primary, secondary, neutral, success, warning, danger
- **Spacing scale:** 4/8/12/16/24/32
- **Responsive spacing defaults:** body-gutter=clamp(0.5rem, 1.2vw, 1rem), page-gutter=clamp(0.5rem, 2vw, 1.5rem), section-gutter=clamp(0.5rem, 1.8vw, 1.25rem), section-block=clamp(0.75rem, 1.8vw, 1.5rem)
- **Readable content width:** main-max-width=64rem
- **Dense grids (3+ sections):** reduce heading size and allow safe wrapping (`overflow-wrap: anywhere`) on section headings.

## Colors

- **Primary (#3B82F6):** Token from style foundations.
- **Secondary (#10B981):** Green accent token that replaces purple-heavy palettes.
- **Success (#16A34A):** Token from style foundations.
- **Warning (#D97706):** Token from style foundations.
- **Danger (#DC2626):** Token from style foundations.
- **Surface (#FFFFFF):** Token from style foundations.
- **Text (#111827):** Token from style foundations.
- **Neutral (#FFFFFF):** Derived from the surface token for official format compatibility.