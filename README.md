# dotsquares-travel

A React + TypeScript travel site.

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