import React from 'react';
import { render, screen } from '@testing-library/react';
import Inspiration from './Inspiration';
import { inspirationOffers } from '../../data/inspiration';

describe('Inspiration', () => {
  it('renders the section heading', () => {
    render(<Inspiration />);
    expect(
      screen.getByRole('heading', { name: /travel inspiration & seasonal offers/i })
    ).toBeInTheDocument();
  });

  it('renders a card for every offer in demo data', () => {
    render(<Inspiration />);
    expect(screen.getAllByRole('article')).toHaveLength(inspirationOffers.length);
  });

  it('renders title, description, and a CTA link for each offer', () => {
    render(<Inspiration />);
    inspirationOffers.forEach((offer) => {
      expect(screen.getByText(offer.title)).toBeInTheDocument();
      expect(screen.getByText(offer.description)).toBeInTheDocument();
      const cta = screen.getByRole('link', { name: offer.ctaLabel });
      expect(cta).toBeInTheDocument();
      expect(cta).toHaveAttribute('href', offer.ctaUrl);
    });
  });
});
