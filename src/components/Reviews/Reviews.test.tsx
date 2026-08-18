import React from 'react';
import { render, screen } from '@testing-library/react';
import Reviews from './Reviews';
import { Review } from '../../data/packages';

const mockReviews: Review[] = [
  {
    id: 'r1',
    packageId: 'p1',
    author: 'Jane Doe',
    rating: 5,
    comment: 'Amazing trip, would recommend!',
    date: '2024-01-01'
  },
  {
    id: 'r2',
    packageId: 'p1',
    author: 'John Smith',
    rating: 4,
    comment: 'Great value, minor delays.',
    date: '2024-02-01'
  }
];

describe('Reviews', () => {
  it('renders a review for each item in the reviews list', () => {
    render(<Reviews reviews={mockReviews} />);

    expect(screen.getAllByTestId('review-item')).toHaveLength(2);
    expect(screen.getByText('Jane Doe')).toBeInTheDocument();
    expect(screen.getByText('Amazing trip, would recommend!')).toBeInTheDocument();
    expect(screen.getByText('John Smith')).toBeInTheDocument();
    expect(screen.getByText('Great value, minor delays.')).toBeInTheDocument();
  });

  it('renders the average rating summary', () => {
    render(<Reviews reviews={mockReviews} averageRating={4.5} />);

    expect(screen.getByText(/4.5/)).toBeInTheDocument();
    expect(screen.getByText(/2 reviews/)).toBeInTheDocument();
  });

  it('renders an empty state when there are no reviews', () => {
    render(<Reviews reviews={[]} />);

    expect(screen.getByText('No reviews yet for this package.')).toBeInTheDocument();
  });
});
