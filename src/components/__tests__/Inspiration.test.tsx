import { render, screen } from '@testing-library/react';
import Inspiration from '@/components/Inspiration';
import { inspirationHighlight, inspirationOffers } from '@/data/inspiration';

describe('Inspiration section', () => {
  it('renders the promotional highlight with a call to action', () => {
    render(<Inspiration />);

    expect(screen.getByText(inspirationHighlight.title)).toBeInTheDocument();
    expect(screen.getByText(inspirationHighlight.description)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: inspirationHighlight.ctaLabel })
    ).toHaveAttribute('href', inspirationHighlight.ctaHref);
  });

  it('renders every inspiration offer with its own call to action', () => {
    render(<Inspiration />);

    inspirationOffers.forEach((offer) => {
      expect(screen.getByText(offer.title)).toBeInTheDocument();
    });

    expect(
      screen.getAllByRole('link', { name: inspirationOffers[0].ctaLabel }).length
    ).toBeGreaterThanOrEqual(inspirationOffers.length);
  });
});
