import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useBooking, setSelectedPackage, TravelPackage } from '../state/BookingContext';
import './BookNowButton.css';

interface BookNowButtonProps {
  travelPackage: TravelPackage;
  className?: string;
  sticky?: boolean;
}

export function BookNowButton({ travelPackage, className = '', sticky = true }: BookNowButtonProps) {
  const { dispatch } = useBooking();
  const navigate = useNavigate();

  const handleBookNow = () => {
    dispatch(setSelectedPackage(travelPackage));
    navigate('/booking/step-1');
  };

  const stickyClass = sticky ? 'book-now-button--sticky' : '';

  return (
    <button
      type="button"
      className={`book-now-button ${stickyClass} ${className}`.trim()}
      onClick={handleBookNow}
      data-testid="book-now-button"
      aria-label={`Book ${travelPackage.name} now`}
    >
      Book Now
    </button>
  );
}

export default BookNowButton;
