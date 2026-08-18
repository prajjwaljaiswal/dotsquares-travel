# Design Tokens & Theme (Placeholder)

This document describes the placeholder premium-travel design tokens configured in
`tailwind.config.js`. These values are temporary stand-ins used to establish the
design system foundation and will be replaced with final brand assets
(logo, color palette, typography) once they are provided by design/branding.

## How to use

The tokens are defined under `theme.extend` in `tailwind.config.js` and are
consumed via standard Tailwind utility classes, e.g. `bg-brand-primary`,
`text-brand-secondary`, `font-heading`, `p-18`.

## Color Palette

| Token                | Hex       | Usage                              |
|-----------------------|-----------|-------------------------------------|
| `brand-primary`       | `#0B3D91` | Primary actions, links, headers     |
| `brand-secondary`     | `#C9A24B` | Premium accents, highlights, CTAs   |
| `brand-tertiary`      | `#1F6F5C` | Secondary accents                   |
| `brand-light`         | `#F7F5F0` | Page/section backgrounds            |
| `brand-dark`          | `#0A1F2B` | Dark backgrounds, high-contrast text|

### Neutral Scale

| Token         | Hex       |
|---------------|-----------|
| `neutral-50`  | `#F9F9F7` |
| `neutral-100` | `#F1F0EC` |
| `neutral-200` | `#E3E1D9` |
| `neutral-300` | `#C9C6BA` |
| `neutral-400` | `#A6A296` |
| `neutral-500` | `#837E70` |
| `neutral-600` | `#645F52` |
| `neutral-700` | `#4A4639` |
| `neutral-800` | `#302D24` |
| `neutral-900` | `#1A1812` |

### Feedback Colors

| Token              | Hex       | Usage           |
|---------------------|-----------|-----------------|
| `feedback-success`  | `#2E7D32` | Success states  |
| `feedback-warning`  | `#ED6C02` | Warning states  |
| `feedback-error`    | `#C62828` | Error states    |
| `feedback-info`     | `#0288D1` | Informational   |

## Typography

| Token           | Stack                                        | Usage           |
|------------------|-----------------------------------------------|-----------------|
| `font-heading`   | `"Playfair Display", Georgia, serif`          | Headings/titles |
| `font-body`      | `"Inter", Helvetica, Arial, sans-serif`       | Body copy       |
| `font-mono`      | `"JetBrains Mono", monospace`                 | Code/monospace  |

### Font Size Scale

| Token  | Size (rem) | Line Height |
|--------|------------|-------------|
| `xs`   | 0.75       | 1           |
| `sm`   | 0.875      | 1.25        |
| `base` | 1          | 1.5         |
| `lg`   | 1.125      | 1.75        |
| `xl`   | 1.25       | 1.75        |
| `2xl`  | 1.5        | 2           |
| `3xl`  | 1.875      | 2.25        |
| `4xl`  | 2.25       | 2.5         |
| `5xl`  | 3          | 1.1         |
| `6xl`  | 3.75       | 1.1         |

## Spacing Scale

Extends the default Tailwind spacing scale with additional larger values:

| Token | Value    |
|-------|----------|
| `18`  | 4.5rem   |
| `22`  | 5.5rem   |
| `30`  | 7.5rem   |
| `34`  | 8.5rem   |
| `38`  | 9.5rem   |

## Border Radius

| Token         | Value     |
|---------------|-----------|
| `rounded-brand` | 0.625rem |

## Breakpoints (Mobile-First)

| Token | Min Width |
|-------|-----------|
| `sm`  | 480px     |
| `md`  | 768px     |
| `lg`  | 1024px    |
| `xl`  | 1280px    |

All layouts should be built mobile-first, using these breakpoints to
progressively enhance the layout for larger viewports (e.g. `md:flex-row`).

## Replacing Placeholder Tokens

When final brand assets are ready:

1. Update the `colors.brand`, `colors.neutral`, and `colors.feedback` objects
   in `tailwind.config.js` with the approved palette.
2. Update `fontFamily.heading` / `fontFamily.body` with the licensed/approved
   web fonts and ensure they are loaded (e.g. via `@font-face` or a font CDN).
3. Re-run visual QA across breakpoints (`sm`, `md`, `lg`, `xl`) to confirm
   consistency.
4. Update this document to reflect the finalized tokens.
