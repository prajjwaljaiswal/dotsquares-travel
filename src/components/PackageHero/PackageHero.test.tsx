import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { PackageHero } from './PackageHero';
import type { PackageImage } from '../../types/package.types';

const mockImages: PackageImage[] = [
  { id: 'img-1', src: '/images/pkg-1.jpg', alt: 'Beach view' },
  { id: 'img-2', src: '/images/pkg-2.jpg', alt: 'Mountain view' },
];

describe('PackageHero', () => {
  it('renders the title and short overview', () => {
    render(
      <PackageHero
        title="Maldives Getaway"
        shortOverview="A relaxing escape to paradise."
        price={1999}
        currency="USD"
        durationDays={7}
        rating={4.8}
        reviewCount={124}
        availability="available"
        images={mockImages}
      />
    );

    expect(screen.getByTestId('package-title')).toHaveTextContent('Maldives Getaway');
    expect(screen.getByTestId('package-overview')).toHaveTextContent(
      'A relaxing escape to paradise.'
    );
  });

  it('renders price, duration, rating and availability above the fold', () => {
    render(
      <PackageHero
        title="Maldives Getaway"
        shortOverview="A relaxing escape to paradise."
        price={1999}
        currency="USD"
        durationDays={7}
        rating={4.8}
        reviewCount={124}
        availability="limited"
        images={mockImages}
      />
    );

    expect(screen.getByTestId('package-price')).toHaveTextContent('$1,999');
    expect(screen.getByTestId('package-duration')).toHaveTextContent('7 days');
    expect(screen.getByTestId('package-rating')).toHaveTextContent('4.8');
    expect(screen.getByTestId('package-availability')).toHaveTextContent('Limited Availability');
  });

  it('renders the gallery with the provided images', () => {
    render(
      <PackageHero
        title="Maldives Getaway"
        shortOverview="A relaxing escape to paradise."
        price={1999}
        currency="USD"
        durationDays={7}
        rating={4.8}
        reviewCount={124}
        availability="sold-out"
        images={mockImages}
      />
    );

    expect(screen.getByTestId('package-gallery')).toBeInTheDocument();
    mockImages.forEach((image) => {
      expect(screen.getByTestId(`gallery-thumbnail-${image.id}`)).toBeInTheDocument();
    });
  });

  it('renders the sold-out availability label correctly', () => {
    render(
      <PackageHero
        title="Maldives Getaway"
        shortOverview="A relaxing escape to paradise."
        price={1999}
        currency="USD"
        durationDays={1}
        rating={4.8}
        reviewCount={124}
        availability="sold-out"
        images={mockImages}
      />
    );

    expect(screen.getByTestId('package-availability')).toHaveTextContent('Sold Out');
    expect(screen.getByTestId('package-duration')).toHaveTextContent('1 day');
  });
});
