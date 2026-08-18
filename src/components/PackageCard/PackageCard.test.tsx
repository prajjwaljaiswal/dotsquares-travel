import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter, Routes, Route } from 'react-router-dom';
import PackageCard from './PackageCard';
import type { TravelPackage } from '../../types/package';

const mockPackage: TravelPackage = {
  id: 'pkg-test-1',
  title: 'Test Island Getaway',
  image: 'https://example.com/image.jpg',
  duration: '3 Days / 2 Nights',
  rating: 4.5,
  price: 500,
  currency: 'USD',
  location: 'Testland',
  description: 'A test package',
  featured: true,
  trending: true,
};

function renderWithRoutes(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Routes>
        <Route path="/" element={<PackageCard pkg={mockPackage} />} />
        <Route path="/packages/:id" element={<div>Package Detail Page</div>} />
        <Route path="/booking/:packageId" element={<div>Booking Page</div>} />
      </Routes>
    </MemoryRouter>
  );
}

describe('PackageCard', () => {
  it('renders image, title, duration, rating and price', () => {
    renderWithRoutes();

    expect(screen.getByAltText(mockPackage.title)).toBeInTheDocument();
    expect(screen.getByText(mockPackage.title)).toBeInTheDocument();
    expect(screen.getByText(mockPackage.duration)).toBeInTheDocument();
    expect(screen.getByText(/4.5/)).toBeInTheDocument();
    expect(screen.getByText(/USD 500/)).toBeInTheDocument();
  });

  it('navigates to package detail page when View Details is clicked', () => {
    renderWithRoutes();

    fireEvent.click(screen.getByText('View Details'));

    expect(screen.getByText('Package Detail Page')).toBeInTheDocument();
  });

  it('navigates to booking flow when Book Now is clicked', () => {
    renderWithRoutes();

    fireEvent.click(screen.getByText('Book Now'));

    expect(screen.getByText('Booking Page')).toBeInTheDocument();
  });
});
