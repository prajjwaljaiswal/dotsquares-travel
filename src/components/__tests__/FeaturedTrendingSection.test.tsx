import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import FeaturedTrendingSection from '../FeaturedTrendingSection/FeaturedTrendingSection';

describe('FeaturedTrendingSection', () => {
  it('renders the section heading', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    expect(screen.getByText('Featured & Trending Packages')).toBeInTheDocument();
  });

  it('renders at least 6 package cards', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId('package-card');
    expect(cards.length).toBeGreaterThanOrEqual(6);
  });

  it('renders each card with a "View Details" and "Book Now" action', () => {
    render(
      <MemoryRouter>
        <FeaturedTrendingSection />
      </MemoryRouter>
    );

    expect(screen.getAllByTestId('view-details-link').length).toBeGreaterThanOrEqual(6);
    expect(screen.getAllByTestId('book-now-link').length).toBeGreaterThanOrEqual(6);
  });
});
