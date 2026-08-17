import { FC } from 'react';
import './StarRating.css';

interface StarRatingProps {
  rating: number;
  maxStars?: number;
}

const StarRating: FC<StarRatingProps> = ({ rating, maxStars = 5 }) => {
  const stars = Array.from({ length: maxStars }, (_, index) => {
    const starValue = index + 1;
    const isFilled = starValue <= Math.round(rating);
    return (
      <span
        key={starValue}
        data-testid={isFilled ? 'star-filled' : 'star-empty'}
        className={isFilled ? 'star star--filled' : 'star star--empty'}
      >
        ★
      </span>
    );
  });

  return (
    <div className="star-rating" data-testid="star-rating">
      {stars}
      <span className="star-rating__value">{rating.toFixed(1)}</span>
    </div>
  );
};

export default StarRating;
