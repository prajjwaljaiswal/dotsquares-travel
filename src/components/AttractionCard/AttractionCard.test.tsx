import React from 'react';
import { render, screen } from '@testing-library/react';
import AttractionCard from './AttractionCard';
import { Attraction } from '../../types/destination';

const mockAttraction: Attraction = {
  id: 'attr-1',
  name: 'Sample Attraction',
  description: 'A short description of the attraction.',
  imageUrl: 'https://example.com/image.jpg',
  category: 'Nature'
};

describe('AttractionCard', () => {
  it('renders the attraction name and description', () => {
    render(<AttractionCard attraction={mockAttraction} />);

    expect(screen.getByText('Sample Attraction')).toBeInTheDocument();
    expect(
      screen.getByText('A short description of the attraction.')
    ).toBeInTheDocument();
  });

  it('renders the attraction image with correct alt text', () => {
    render(<AttractionCard attraction={mockAttraction} />);

    const image = screen.getByAltText('Sample Attraction') as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe('https://example.com/image.jpg');
  });

  it('renders the category badge when provided', () => {
    render(<AttractionCard attraction={mockAttraction} />);
    expect(screen.getByText('Nature')).toBeInTheDocument();
  });

  it('does not render a badge when category is not provided', () => {
    const attractionWithoutCategory: Attraction = {
      ...mockAttraction,
      category: undefined
    };
    render(<AttractionCard attraction={attractionWithoutCategory} />);
    expect(screen.queryByText('Nature')).not.toBeInTheDocument();
  });
});
