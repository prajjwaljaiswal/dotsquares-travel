import React from 'react';
import { render, screen } from '@testing-library/react';
import AttractionsSection from './AttractionsSection';
import { Attraction } from '../../types/destination';

const mockAttractions: Attraction[] = [
  {
    id: 'attraction-1',
    name: 'Attraction One',
    description: 'Description for attraction one.',
    imageUrl: 'https://example.com/one.jpg',
    category: 'Landmark',
  },
  {
    id: 'attraction-2',
    name: 'Attraction Two',
    description: 'Description for attraction two.',
    imageUrl: 'https://example.com/two.jpg',
    category: 'Museum',
  },
];

describe('AttractionsSection', () => {
  it('renders the section heading', () => {
    render(
      <AttractionsSection destinationName="Paris" attractions={mockAttractions} />
    );
    expect(
      screen.getByText('Top Attractions & Recommended Experiences')
    ).toBeInTheDocument();
  });

  it('renders the destination name in the subheading', () => {
    render(
      <AttractionsSection destinationName="Paris" attractions={mockAttractions} />
    );
    expect(screen.getByText(/Paris/)).toBeInTheDocument();
  });

  it('renders a card for each attraction', () => {
    render(
      <AttractionsSection destinationName="Paris" attractions={mockAttractions} />
    );
    expect(screen.getByText('Attraction One')).toBeInTheDocument();
    expect(screen.getByText('Attraction Two')).toBeInTheDocument();
  });

  it('renders nothing when there are no attractions', () => {
    const { container } = render(
      <AttractionsSection destinationName="Paris" attractions={[]} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
