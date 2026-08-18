# dotsquares-travel

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