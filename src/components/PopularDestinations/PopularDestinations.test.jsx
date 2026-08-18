import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { describe, it, expect } from 'vitest';
import PopularDestinations from './PopularDestinations.jsx';
import destinations from '../../data/destinations.js';

function renderWithRouter(component) {
  return render(<BrowserRouter>{component}</BrowserRouter>);
}

describe('PopularDestinations', () => {
  it('renders all 7 demo destinations as cards', () => {
    renderWithRouter(<PopularDestinations />);
    const cards = screen.getAllByTestId('destination-card');
    expect(cards).toHaveLength(7);
  });

  it('renders the name and teaser for each destination', () => {
    renderWithRouter(<PopularDestinations />);
    destinations.forEach((destination) => {
      expect(screen.getByText(destination.name)).toBeInTheDocument();
      expect(screen.getByText(destination.teaser)).toBeInTheDocument();
    });
  });

  it('renders the section heading', () => {
    renderWithRouter(<PopularDestinations />);
    expect(screen.getByText('Popular Destinations')).toBeInTheDocument();
  });
});
