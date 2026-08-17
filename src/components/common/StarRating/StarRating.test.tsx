import { render, screen } from '@testing-library/react';
import StarRating from './StarRating';

describe('StarRating', () => {
  it('renders the correct number of filled stars', () => {
    render(<StarRating rating={4} />);
    const filledStars = screen.getAllByTestId('star-filled');
    expect(filledStars).toHaveLength(4);
  });

  it('renders empty stars for the remainder', () => {
    render(<StarRating rating={3} maxRating={5} />);
    const emptyStars = screen.getAllByTestId('star-empty');
    expect(emptyStars).toHaveLength(2);
  });

  it('displays the numeric rating value', () => {
    render(<StarRating rating={4.5} />);
    expect(screen.getByText('4.5')).toBeInTheDocument();
  });
});
