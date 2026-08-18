import React from 'react';
import { render, screen } from '@testing-library/react';
import AttractionsSection from './AttractionsSection';
import { Attraction } from '../../types/destination';

const mockAttractions: Attraction[] = [
  {
    id: 'a1',
    name: 'Attraction One',
    description: 'Description one.',
    imageUrl: 'https://example.com/one.jpg',
    category: 'Nature'
  },
  {
    id: 'a2',
    name: 'Attraction Two',
    description: 'Description two.',
    imageUrl: 'https://example.com/two.jpg',
    category: 'Culture'
  }
];

describe('AttractionsSection', () => {
  it('renders the section heading with the destination name', () => {
    render(
      <AttractionsSection
        destinationName="Bali"
        attractions={mockAttractions}
      />
    );

    expect(
      screen.getByText('Top Attractions & Recommended Experiences')
    ).toBeInTheDocument();
    expect(screen.getByText(/Bali/)).toBeInTheDocument();
  });

  it('renders a card for each attraction dynamically', () => {
    render(
      <AttractionsSection
        destinationName="Bali"
        attractions={mockAttractions}
      />
    );

    const cards = screen.getAllByTestId('attraction-card');
    expect(cards).toHaveLength(2);
    expect(screen.getByText('Attraction One')).toBeInTheDocument();
    expect(screen.getByText('Attraction Two')).toBeInTheDocument();
  });

  it('renders an empty state when no attractions are provided', () => {
    render(<AttractionsSection destinationName="Paris" attractions={[]} />);

    expect(
      screen.getByText('No attractions available for Paris yet.')
    ).toBeInTheDocument();
    expect(screen.queryByTestId('attractions-grid')).not.toBeInTheDocument();
  });
});
