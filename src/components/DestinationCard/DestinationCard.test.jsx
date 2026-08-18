import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import DestinationCard from './DestinationCard.jsx';

const mockDestination = {
  id: 1,
  slug: 'santorini-greece',
  name: 'Santorini, Greece',
  image: 'https://example.com/santorini.jpg',
  teaser: 'Whitewashed cliffs and unforgettable sunsets.'
};

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('DestinationCard', () => {
  it('renders the destination name, teaser and image', () => {
    renderWithRouter(<DestinationCard destination={mockDestination} />);
    expect(screen.getByText(mockDestination.name)).toBeInTheDocument();
    expect(screen.getByText(mockDestination.teaser)).toBeInTheDocument();
    expect(screen.getByAltText(mockDestination.name)).toHaveAttribute(
      'src',
      mockDestination.image
    );
  });

  it('links to the correct destination detail page', () => {
    renderWithRouter(<DestinationCard destination={mockDestination} />);
    const link = screen.getByTestId('destination-card');
    expect(link).toHaveAttribute('href', `/destinations/${mockDestination.slug}`);
  });
});
