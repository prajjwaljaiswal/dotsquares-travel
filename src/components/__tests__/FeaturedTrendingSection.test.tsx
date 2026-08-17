import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import FeaturedTrendingSection from '../FeaturedTrendingSection';
import { featuredTrendingPackages } from '../../data/packages';

describe('FeaturedTrendingSection', () => {
  it('renders at least 6 featured/trending package cards', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId('package-card');
    expect(cards.length).toBeGreaterThanOrEqual(6);
  });

  it('renders a card for every featured/trending package in the demo data', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    featuredTrendingPackages.forEach((pkg) => {
      expect(screen.getByText(pkg.title)).toBeInTheDocument();
    });
  });
});
