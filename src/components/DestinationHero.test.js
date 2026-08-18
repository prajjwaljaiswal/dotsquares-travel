import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationHero from './DestinationHero';

describe('DestinationHero', () => {
  it('renders the destination name and tagline', () => {
    render(
      <DestinationHero
        name="Santorini, Greece"
        tagline="Whitewashed cliffs and endless Aegean sunsets."
        heroImage="https://example.com/image.jpg"
      />
    );

    expect(
      screen.getByRole('heading', { name: /santorini, greece/i })
    ).toBeInTheDocument();
    expect(
      screen.getByText(/whitewashed cliffs and endless aegean sunsets\./i)
    ).toBeInTheDocument();
  });

  it('applies the hero image as a background image', () => {
    render(
      <DestinationHero
        name="Kyoto, Japan"
        tagline="Ancient temples wrapped in seasonal color."
        heroImage="https://example.com/kyoto.jpg"
      />
    );

    const hero = screen.getByTestId('destination-hero');
    expect(hero).toHaveStyle(
      'background-image: url(https://example.com/kyoto.jpg)'
    );
  });

  it('renders without a tagline gracefully', () => {
    render(
      <DestinationHero name="Banff, Canada" heroImage="https://example.com/banff.jpg" />
    );

    expect(
      screen.getByRole('heading', { name: /banff, canada/i })
    ).toBeInTheDocument();
  });
});
