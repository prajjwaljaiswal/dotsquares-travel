# dotsquares-travel

A travel booking web application homepage built with React, TypeScript and Vite.

## Features

- **Featured & Trending Packages Section** — Displays a curated grid of at least 6 featured/trending travel packages sourced from demo data. Each package card shows an image, title, duration, rating and price, along with **View Details** and **Book Now** actions.
  - **View Details** navigates to `/packages/:id` to show the full package detail page.
  - **Book Now** navigates to `/booking/:packageId`, pre-selecting the chosen package inside the booking flow.

## Getting Started

```bash
npm install
npm run dev
```

## Testing

```bash
npm test
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
  components/
    PackageCard/            # Reusable package card UI
    FeaturedTrendingSection/ # Homepage section listing featured/trending packages
  data/
    packages.ts              # Demo package data flagged as featured/trending
  pages/
    Home.tsx                 # Homepage hosting the featured/trending section
    PackageDetail.tsx        # Package detail page
    Booking.tsx               # Booking flow page with pre-selected package
  types/
    package.ts                # Shared TravelPackage type
```

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