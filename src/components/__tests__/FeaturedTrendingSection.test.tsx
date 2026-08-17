import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedTrendingSection from '../FeaturedTrendingSection';
import { packages } from '../../data/packages';

describe('FeaturedTrendingSection', () => {
  const renderSection = () =>
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

  it('renders at least 6 featured/trending package cards', () => {
    renderSection();

    const expectedPackages = packages.filter((pkg) => pkg.featured || pkg.trending);
    expect(expectedPackages.length).toBeGreaterThanOrEqual(6);

    const grid = screen.getByTestId('featured-trending-grid');
    const cards = within(grid).getAllByTestId(/^package-card-/);
    expect(cards.length).toBeGreaterThanOrEqual(6);
    expect(cards.length).toBe(expectedPackages.length);
  });

  it('renders each card with image, title, duration, rating, and price', () => {
    renderSection();

    const expectedPackages = packages.filter((pkg) => pkg.featured || pkg.trending);

    expectedPackages.forEach((pkg) => {
      const card = screen.getByTestId(`package-card-${pkg.id}`);
      expect(within(card).getByAltText(pkg.title)).toBeInTheDocument();
      expect(within(card).getByText(pkg.title)).toBeInTheDocument();
      expect(within(card).getByTestId('package-card-duration')).toHaveTextContent(pkg.duration);
      expect(within(card).getByTestId('package-card-rating')).toHaveTextContent(
        pkg.rating.toFixed(1)
      );
      expect(within(card).getByTestId('package-card-price')).toHaveTextContent(
        `$${pkg.price.toLocaleString()}`
      );
    });
  });
});
