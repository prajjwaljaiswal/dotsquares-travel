import React from 'react';
import { render, screen } from '@testing-library/react';
import Testimonials from './Testimonials';
import { testimonials } from '../../data/testimonials';

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />);
    expect(
      screen.getByRole('heading', { name: /what our travelers say/i })
    ).toBeInTheDocument();
  });

  it('renders a card for every testimonial in demo data', () => {
    render(<Testimonials />);
    expect(screen.getAllByRole('article')).toHaveLength(testimonials.length);
  });

  it('renders each testimonial name, rating, and quote', () => {
    render(<Testimonials />);
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument();
      expect(
        screen.getByText(new RegExp(testimonial.quote.slice(0, 15), 'i'))
      ).toBeInTheDocument();
      expect(
        screen.getByRole('img', {
          name: `Rated ${testimonial.rating} out of 5 stars`,
        })
      ).toBeInTheDocument();
    });
  });
});
