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

## About Us Page — Meet Our Travel Experts

The About Us page also includes a responsive "Meet Our Travel Experts" team section, showcasing
the team's members with their photo, name, role, and bio.

### Files

- `src/data/teamMembers.js` — Demo data module with six team members (name, role, bio, and photo).
- `src/components/TeamSection/TeamMemberCard.jsx` — Reusable component rendering an individual
  member's photo/name/role/bio.
- `src/components/TeamSection/TeamMemberCard.css` — Styling for the individual member card.
- `src/components/TeamSection/TeamSection.jsx` — Lays out the team member cards in a responsive
  CSS grid.
- `src/components/TeamSection/TeamSection.css` — Responsive grid styling, adapting from a single
  column on mobile to a multi-column layout on larger screens.
- `src/components/TeamSection/TeamSection.test.jsx` — Unit test verifying that at least four team
  member cards render with the expected name/role/bio content.

### Usage

Import and render the `TeamSection` component on the About Us page:

```jsx
import TeamSection from "./components/TeamSection/TeamSection";

function AboutUsPage() {
  return (
    <div>
      {/* other About Us content */}
      <TeamSection />
    </div>
  );
}
```

This feature assumes a React application setup (React, `prop-types`, and a testing stack
including Jest + React Testing Library with `jest-dom`). Ensure the following dependencies are
present in `package.json`: `react`, `react-dom`, `prop-types`, `@testing-library/react`,
`@testing-library/jest-dom`, and `jest`.

## Destination Detail Page

The Destination Detail Page includes a map section that shows the
destination's location.

### Map Section (Placeholder)

The map section currently uses a **static placeholder component**,
`MapContainer` (`src/components/MapContainer.tsx`), instead of a real
interactive map. This is intentional and clearly marked in code with
comments (`PLACEHOLDER COMPONENT`).

- The component renders a styled div showing a location icon, the
  location label, and the provided coordinates — it does **not** call
  any external map API.
- It already exposes the props interface required for future real map
  integration:
  - `lat: number`
  - `lng: number`
  - `locationLabel: string`
  - `className?: string` (optional, for layout customization)
- When a real map provider (e.g., Google Maps, Mapbox, Leaflet) is
  integrated, only the internals of `MapContainer` need to change —
  consuming pages (e.g., `DestinationDetailPage`) will not need to be
  updated since the props contract stays the same.

See `src/pages/DestinationDetailPage.tsx` for usage of the map section
within the destination detail page.