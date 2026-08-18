import React from 'react';
import { Navigate } from 'react-router-dom';
import { useBooking } from '../../state/BookingContext';

export function BookingStep1() {
  const { state } = useBooking();
  const { selectedPackage } = state;

  if (!selectedPackage) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="booking-step1" data-testid="booking-step1">
      <h1>Booking &ndash; Step 1: Traveler Details</h1>

      <section className="booking-step1__package-summary">
        <h2>Selected Package</h2>
        <p data-testid="selected-package-name">{selectedPackage.name}</p>
        <p>{selectedPackage.destination}</p>
        <p>Duration: {selectedPackage.durationDays} days</p>
        <p>Price: ${selectedPackage.price}</p>
      </section>

      <form className="booking-step1__form">
        <label htmlFor="travelerName">Full Name</label>
        <input id="travelerName" name="travelerName" type="text" required />

        <label htmlFor="travelerEmail">Email</label>
        <input id="travelerEmail" name="travelerEmail" type="email" required />

        <button type="submit">Continue</button>
      </form>
    </div>
  );
}

export default BookingStep1;
