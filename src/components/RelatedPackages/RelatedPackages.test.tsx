import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import RelatedPackages from './RelatedPackages';
import { TravelPackage } from '../../data/packages';

const buildPackage = (id: string, title: string): TravelPackage => ({
  id,
  title,
  destination: 'Bali',
  category: 'Beach',
  price: 500,
  currency: 'USD',
  imageUrl: 'image.jpg',
  description: 'desc',
  rating: 4.5,
  reviews: []
});

describe('RelatedPackages', () => {
  it('renders at least 3 package cards linking to their detail pages', () => {
    const mockPackages = [
      buildPackage('1', 'Package One'),
      buildPackage('2', 'Package Two'),
      buildPackage('3', 'Package Three')
    ];

    render(
      <MemoryRouter>
        <RelatedPackages packages={mockPackages} />
      </MemoryRouter>
    );

    const cards = screen.getAllByTestId('package-card');
    expect(cards).toHaveLength(3);

    expect(cards[0]).toHaveAttribute('href', '/packages/1');
    expect(cards[1]).toHaveAttribute('href', '/packages/2');
    expect(cards[2]).toHaveAttribute('href', '/packages/3');

    expect(screen.getByText('Package One')).toBeInTheDocument();
    expect(screen.getByText('Package Two')).toBeInTheDocument();
    expect(screen.getByText('Package Three')).toBeInTheDocument();
  });

  it('renders nothing when there are no packages', () => {
    const { container } = render(
      <MemoryRouter>
        <RelatedPackages packages={[]} />
      </MemoryRouter>
    );

    expect(container).toBeEmptyDOMElement();
  });
});
