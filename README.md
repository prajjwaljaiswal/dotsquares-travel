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