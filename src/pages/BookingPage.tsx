import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { packages } from '../data/packages';

const BookingPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const packageId = searchParams.get('packageId');
  const selectedPackage = packages.find((pkg) => pkg.id === packageId);

  return (
    <main className="page-container" data-testid="booking-page">
      <h1>Book Your Trip</h1>
      {selectedPackage ? (
        <div data-testid="booking-selected-package">
          <p>You are booking:</p>
          <h2>{selectedPackage.title}</h2>
          <p>{selectedPackage.duration}</p>
          <p>${selectedPackage.price.toLocaleString()} / person</p>
        </div>
      ) : (
        <p data-testid="booking-no-package">No package selected. Please choose a package first.</p>
      )}
    </main>
  );
};

export default BookingPage;
