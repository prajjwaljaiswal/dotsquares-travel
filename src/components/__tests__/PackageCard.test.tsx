import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { describe, it, expect, vi, beforeEach } from 'vitest';
import PackageCard from '../PackageCard';
import { TravelPackage } from '../../types/package';

const mockNavigate = vi.fn();

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>(
    'react-router-dom'
  );
  return {
    ...actual,
    useNavigate: () => mockNavigate,
  };
});

const mockPackage: TravelPackage = {
  id: 'test-package',
  title: 'Test Package',
  image: 'https://example.com/image.jpg',
  duration: '5 Days / 4 Nights',
  rating: 4.5,
  price: 999,
  featured: true,
  trending: true,
};

describe('PackageCard', () => {
  beforeEach(() => {
    mockNavigate.mockClear();
  });

  it('renders image, title, duration, rating and price', () => {
    render(
      <MemoryRouter>
        <PackageCard pkg={mockPackage} />
      </MemoryRouter>
    );

    expect(screen.getByAltText('Test Package')).toBeInTheDocument();
    expect(screen.getByText('Test Package')).toBeInTheDocument();
    expect(screen.getByText('5 Days / 4 Nights')).toBeInTheDocument();
    expect(screen.getByText('$999')).toBeInTheDocument();
    expect(screen.getByTestId('star-rating')).toBeInTheDocument();
  });

  it('navigates to the package detail page on View Details click', () => {
    render(
      <MemoryRouter>
        <PackageCard pkg={mockPackage} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('View Details'));
    expect(mockNavigate).toHaveBeenCalledWith('/packages/test-package');
  });

  it('navigates to the booking flow with the package pre-selected on Book Now click', () => {
    render(
      <MemoryRouter>
        <PackageCard pkg={mockPackage} />
      </MemoryRouter>
    );

    fireEvent.click(screen.getByText('Book Now'));
    expect(mockNavigate).toHaveBeenCalledWith('/booking/test-package', {
      state: { packageId: 'test-package' },
    });
  });
});
