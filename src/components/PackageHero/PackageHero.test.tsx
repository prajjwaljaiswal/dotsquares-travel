import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PackageHero } from './PackageHero';
import type { TravelPackage } from '../../types/package';

const mockPackage: TravelPackage = {
  id: 'test-package',
  title: 'Test Package',
  shortOverview: 'A short overview of the test package',
  description: 'Full description',
  highlights: ['Highlight 1'],
  price: 999,
  currency: 'USD',
  durationDays: 5,
  rating: 4.2,
  reviewCount: 50,
  availability: 'available',
  images: [{ id: 'img-1', url: 'image.jpg', alt: 'Test image' }],
};

describe('PackageHero', () => {
  it('renders title, price, duration, rating and availability above the fold', () => {
    render(<PackageHero pkg={mockPackage} />);

    expect(screen.getByText('Test Package')).toBeInTheDocument();
    expect(screen.getByTestId('package-price')).toHaveTextContent('USD 999');
    expect(screen.getByTestId('package-duration')).toHaveTextContent('5 days');
    expect(screen.getByTestId('availability-badge')).toHaveTextContent('Available');
    expect(screen.getByTestId('rating-stars')).toBeInTheDocument();
  });
});
