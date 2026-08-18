import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationHero from './DestinationHero';
import { destinations } from '../data/destinations';

describe('DestinationHero', () => {
  const destination = destinations[0];

  it('renders the destination name and tagline', () => {
    render(<DestinationHero destination={destination} />);

    expect(
      screen.getByRole('heading', { level: 1, name: destination.name })
    ).toBeInTheDocument();
    expect(screen.getByText(destination.tagline)).toBeInTheDocument();
  });

  it('renders the overview text and all highlights', () => {
    render(<DestinationHero destination={destination} />);

    expect(screen.getByText(destination.overview)).toBeInTheDocument();

    destination.highlights.forEach((highlight) => {
      expect(screen.getByText(highlight)).toBeInTheDocument();
    });
  });

  it('renders the hero image with an accessible label matching the destination name', () => {
    render(<DestinationHero destination={destination} />);

    expect(screen.getByRole('img', { name: destination.name })).toBeInTheDocument();
  });
});
