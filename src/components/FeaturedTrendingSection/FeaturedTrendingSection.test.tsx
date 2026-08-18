import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedTrendingSection from './FeaturedTrendingSection';

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

  it('renders the section heading', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Featured & Trending Packages')).toBeInTheDocument();
  });
});
