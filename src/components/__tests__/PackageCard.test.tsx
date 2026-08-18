import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
import { TravelPackage } from '../../types/travelPackage';

const mockPackage: TravelPackage = {
  id: 'test-package',
  title: 'Test Package',
  image: 'https://example.com/image.jpg',
  duration: '5 Days / 4 Nights',
  rating: 4.5,
  price: 999,
  currency: 'USD',
  location: 'Test Location',
  featured: true,
  trending: true,
  description: 'A great test package.',
};

const renderPackageCard = () =>
  render(
    <MemoryRouter>
      <PackageCard pkg={mockPackage} />
    </MemoryRouter>
  );

describe('PackageCard', () => {
  it('renders the package image, title, duration, rating and price', () => {
    renderPackageCard();

    expect(screen.getByAltText('Test Package')).toBeInTheDocument();
    expect(screen.getByText('Test Package')).toBeInTheDocument();
    expect(screen.getByText('5 Days / 4 Nights')).toBeInTheDocument();
    expect(screen.getByText('$999')).toBeInTheDocument();
  });

  it('links "View Details" to the package detail page', () => {
    renderPackageCard();

    const viewDetailsLink = screen.getByTestId('view-details-link');
    expect(viewDetailsLink).toHaveAttribute('href', '/packages/test-package');
  });

  it('links "Book Now" to the booking flow with the package pre-selected', () => {
    renderPackageCard();

    const bookNowLink = screen.getByTestId('book-now-link');
    expect(bookNowLink).toHaveAttribute('href', '/booking?packageId=test-package');
  });

  it('supports interacting with the "Book Now" action', () => {
    renderPackageCard();

    const bookNowLink = screen.getByTestId('book-now-link');
    fireEvent.click(bookNowLink);
    expect(bookNowLink).toBeInTheDocument();
  });
});
