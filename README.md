# dotsquares-travel

A React + TypeScript travel site.

## Destination Detail Page

The destination detail page (`/destinations/:slug`) renders a large hero banner
with the destination's image, name, and tagline, followed by an overview and
highlights section. Both sections pull from demo data in
`src/data/destinations.ts` based on the `slug` route parameter, and are fully
responsive with appropriate image cropping on smaller screens.

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