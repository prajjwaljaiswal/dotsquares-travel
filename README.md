# dotsquares-travel

A Next.js + TypeScript travel application starter with Tailwind CSS.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Available Scripts

- `npm run dev` — start the local development server
- `npm run build` — build the production bundle
- `npm run start` — run the production build
- `npm run lint` — run ESLint
- `npm run format` — format the codebase with Prettier
- `npm run type-check` — run the TypeScript compiler in check mode

## Project Structure

```
.
├── components/   # Reusable React components
├── data/         # Static/sample data used by pages
├── lib/          # Shared utility functions
├── pages/        # Next.js pages and routing
├── styles/       # Global and Tailwind CSS styles
└── types/        # Shared TypeScript types
```

## Tech Stack

- [Next.js](https://nextjs.org/) 14
- [TypeScript](https://www.typescriptlang.org/) (strict mode)
- [Tailwind CSS](https://tailwindcss.com/)
- ESLint + Prettier

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