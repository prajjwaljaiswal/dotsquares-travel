import React from 'react';
import { render, screen } from '@testing-library/react';
import AttractionCard from './AttractionCard';
import { Attraction } from '../../types/destination';

const mockAttraction: Attraction = {
  id: 'test-attraction',
  name: 'Test Attraction',
  description: 'A wonderful place to visit for testing purposes.',
  imageUrl: 'https://example.com/image.jpg',
  category: 'Landmark',
};

describe('AttractionCard', () => {
  it('renders the attraction name', () => {
    render(<AttractionCard attraction={mockAttraction} />);
    expect(screen.getByText('Test Attraction')).toBeInTheDocument();
  });

  it('renders the attraction description', () => {
    render(<AttractionCard attraction={mockAttraction} />);
    expect(
      screen.getByText('A wonderful place to visit for testing purposes.')
    ).toBeInTheDocument();
  });

  it('renders the category badge when provided', () => {
    render(<AttractionCard attraction={mockAttraction} />);
    expect(screen.getByText('Landmark')).toBeInTheDocument();
  });

  it('renders the image with correct alt text', () => {
    render(<AttractionCard attraction={mockAttraction} />);
    const image = screen.getByAltText('Test Attraction') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/image.jpg');
  });

  it('does not render badge when category is missing', () => {
    const attractionWithoutCategory: Attraction = {
      ...mockAttraction,
      category: undefined,
    };
    render(<AttractionCard attraction={attractionWithoutCategory} />);
    expect(screen.queryByText('Landmark')).not.toBeInTheDocument();
  });
});
