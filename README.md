# dotsquares-travel

A React + TypeScript travel site.

## Supporting Pages

This repository includes static supporting pages for the Dotsquares Travel
site:

- `index.html` — Home/landing page
- `privacy-policy.html` — Privacy Policy (placeholder legal content)
- `terms.html` — Terms & Conditions (placeholder legal content)

Shared styles for consistent typography and layout live in
`css/styles.css`. Every page includes a header and footer, and the footer
on every page links to both the Privacy Policy and Terms & Conditions
pages.

### Viewing Locally

Since these are static HTML files with no build step, you can open
`index.html` directly in a browser, or serve the directory with any
static file server, e.g.:

```bash
npx serve .
```

Then navigate to `http://localhost:3000` (or the port shown) to view the
site.

## FAQ Page

The FAQ page (`faq.html`) provides an accordion-style list of frequently asked questions relevant to travel booking (flights, cancellations, payments, visas, luggage, refunds, and support).

### Viewing the page

Open `faq.html` directly in a browser, or serve the repository root with any static file server, e.g.:

```
npx serve .
```

Then navigate to `/faq.html`.

### Running tests

Install dependencies and run the Jest test suite, which covers the accordion expand/collapse behavior in `js/faq.js`:

```
npm install
npm test
```

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

## About Us Page

The About Us page (`about-us/index.html`) is a self-contained page featuring a hero section, our-story narrative, mission & vision cards, and a travel-philosophy section, all populated with placeholder copy and imagery. It is built with semantic HTML5 and styled with a dedicated stylesheet (`about-us/styles.css`) that uses a mobile-first responsive layout (flexbox/grid) with breakpoints at 480px, 768px, and 1024px so all sections reflow cleanly across phone, tablet, and desktop widths.

Open `about-us/index.html` directly in a browser, or serve the repository root with any static file server and navigate to `/about-us/`.

Note: All imagery currently uses via.placeholder.com placeholders and should be swapped for final brand assets before production launch.

## Destination Detail Page

The destination detail page (`/destinations/:slug`) renders a large hero banner
with the destination's image, name, and tagline, followed by an overview and
highlights section. Both sections pull from demo data in
`src/data/destinations.ts` based on the `slug` route parameter, and are fully
responsive with appropriate image cropping on smaller screens.

The Destination Detail Page also includes a map section that shows the
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

See `src/pages/DestinationDetailPage/DestinationDetailPage.tsx` for usage of
the map section within the destination detail page.

## Getting Started

Install dependencies and start the development server:

```bash
npm install
npm start
```

Run the test suite:

```bash
npm test
```

Available demo destinations: `bali`, `santorini`, `kyoto` (e.g.
`/destinations/santorini`).