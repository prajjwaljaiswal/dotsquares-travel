# dotsquares-travel

## About Us Page — Company Stats & Trust Indicators

This feature adds an animated/static stats counter and trust badges section for the About Us page,
highlighting key metrics such as destinations covered, happy travellers, years of experience, and
customer satisfaction, alongside trust badges (secure booking, 24/7 support, award-winning service,
certified partner).

### Files

- `src/components/stats-section/stats-section.html` — Markup for the section.
- `src/components/stats-section/stats-section.css` — Responsive, visually distinct styling.
- `src/components/stats-section/stats-section.js` — Count-up animation logic using
  `IntersectionObserver`, with graceful fallback and `prefers-reduced-motion` support.
- `src/pages/about.html` — Demo page showing the section in context.

### Usage

Include the CSS and JS files, then drop the `stats-section.html` markup wherever the About Us page
needs it:

```html
<link rel="stylesheet" href="components/stats-section/stats-section.css" />
...
<!-- stats-section.html markup here -->
...
<script src="components/stats-section/stats-section.js"></script>
```

Each stat is configured via `data-*` attributes on the `.stat-card__number` element:

- `data-counter` — target numeric value.
- `data-suffix` / `data-prefix` — optional text appended/prepended to the number (e.g. `+`, `%`).
- `data-duration` — optional animation duration in milliseconds (default `1800`).

### Running Tests

```bash
npm install
npm test
```