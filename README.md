# dotsquares-travel

## Homepage Sections

This project includes the following homepage sections built with React and TypeScript:

- **Testimonials** (`src/components/Testimonials`): Displays customer name, star rating, and quote using demo data from `src/data/testimonials.ts`.
- **Travel Inspiration** (`src/components/Inspiration`): Displays promotional/seasonal offers with a call-to-action button, using demo data from `src/data/inspiration.ts`.

Both sections are composed together in `src/pages/Home/Home.tsx` and styled using CSS Modules backed by shared design tokens in `src/styles/tokens.css`.

## Getting Started

Install dependencies:

```bash
npm install
```

Run tests:

```bash
npm test
```

Type-check / build:

```bash
npm run build
```