import React from 'react';
import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('renders the correct aria-label for the given rating', () => {
    render(<StarRating rating={4} />);
    expect(screen.getByRole('img', { name: 'Rated 4 out of 5 stars' })).toBeInTheDocument();
  });

  it('renders the correct number of filled and empty stars', () => {
    const { container } = render(<StarRating rating={3} />);
    expect(container.querySelectorAll('.starFilled')).toHaveLength(3);
    expect(container.querySelectorAll('.starEmpty')).toHaveLength(2);
  });

  it('clamps rating to maxRating when rating exceeds it', () => {
    render(<StarRating rating={7} maxRating={5} />);
    expect(screen.getByRole('img', { name: 'Rated 5 out of 5 stars' })).toBeInTheDocument();
  });
});
