# dotsquares-travel

A Next.js + TypeScript travel application scaffolded with Tailwind CSS, ESLint, and Prettier.

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Scripts

- `npm run dev` – Start the local development server
- `npm run build` – Build the application for production
- `npm run start` – Start the production server
- `npm run lint` – Run ESLint
- `npm run format` – Format code with Prettier
- `npm run format:check` – Check formatting without writing changes
- `npm run type-check` – Run TypeScript compiler checks

## Project Structure

```
.
├── components/   # Reusable React components
├── data/         # Static/sample data sources
├── lib/          # Shared utilities and constants
├── pages/        # Next.js routes
├── styles/       # Global styles and Tailwind entrypoint
└── types/        # Shared TypeScript types and interfaces
```

## Tech Stack

- [Next.js](https://nextjs.org/) with TypeScript (strict mode)
- [Tailwind CSS](https://tailwindcss.com/) for styling
- [ESLint](https://eslint.org/) + [Prettier](https://prettier.io/) for code quality and formatting