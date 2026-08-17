import React from 'react';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const filledCount = Math.round(rating);
  const emptyCount = Math.max(maxRating - filledCount, 0);

  return (
    <div className="star-rating" role="img" aria-label={`Rated ${rating} out of ${maxRating}`}>
      {Array.from({ length: filledCount }).map((_, index) => (
        <span
          key={`filled-${index}`}
          data-testid="star-filled"
          className="star-rating__star star-rating__star--filled"
        >
          ★
        </span>
      ))}
      {Array.from({ length: emptyCount }).map((_, index) => (
        <span
          key={`empty-${index}`}
          data-testid="star-empty"
          className="star-rating__star star-rating__star--empty"
        >
          ★
        </span>
      ))}
      <span className="star-rating__value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
