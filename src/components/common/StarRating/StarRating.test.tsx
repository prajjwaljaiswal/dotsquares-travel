import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('renders the numeric rating value', () => {
    render(<StarRating rating={4.5} />);
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });

  it('renders the correct number of filled stars', () => {
    render(<StarRating rating={3} />);
    const filledStars = screen.getAllByTestId('star-filled');
    expect(filledStars).toHaveLength(3);
  });

  it('renders 5 stars in total by default', () => {
    render(<StarRating rating={2} />);
    const allStars = [
      ...screen.getAllByTestId('star-filled'),
      ...screen.getAllByTestId('star-empty'),
    ];
    expect(allStars).toHaveLength(5);
  });
});
