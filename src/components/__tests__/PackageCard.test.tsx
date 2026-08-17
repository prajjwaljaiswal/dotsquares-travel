import React from 'react';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import PackageCard from '../PackageCard';
import { TravelPackage } from '../../types/package';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: () => mockNavigate
  };
});

const samplePackage: TravelPackage = {
  id: 'p1',
  title: 'Bali Beach Escape',
  image: 'https://images.example.com/packages/bali.jpg',
  duration: '5 Days / 4 Nights',
  rating: 4.8,
  price: 899,
  featured: true,
  trending: true,
  description: 'A relaxing beach getaway.'
};

describe('PackageCard', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  const renderCard = () =>
    render(
      <MemoryRouter>
        <PackageCard pkg={samplePackage} />
      </MemoryRouter>
    );

  it('renders image, title, duration, rating, and price', () => {
    renderCard();

    const image = screen.getByAltText(samplePackage.title) as HTMLImageElement;
    expect(image).toBeInTheDocument();
    expect(image.src).toBe(samplePackage.image);

    expect(screen.getByText(samplePackage.title)).toBeInTheDocument();
    expect(screen.getByTestId('package-card-duration')).toHaveTextContent(samplePackage.duration);
    expect(screen.getByTestId('package-card-rating')).toHaveTextContent('4.8');
    expect(screen.getByTestId('package-card-price')).toHaveTextContent('$899');
  });

  it('navigates to package detail page when View Details is clicked', async () => {
    renderCard();

    await userEvent.click(screen.getByRole('button', { name: /view details/i }));

    expect(mockNavigate).toHaveBeenCalledWith(`/packages/${samplePackage.id}`);
  });

  it('navigates to booking flow with package pre-selected when Book Now is clicked', async () => {
    renderCard();

    await userEvent.click(screen.getByRole('button', { name: /book now/i }));

    expect(mockNavigate).toHaveBeenCalledWith(`/booking?packageId=${samplePackage.id}`);
  });
});
