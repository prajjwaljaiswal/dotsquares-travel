import React from 'react';
import styles from './StarRating.module.css';

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

const StarRating: React.FC<StarRatingProps> = ({ rating, maxRating = 5 }) => {
  const clampedRating = Math.max(0, Math.min(rating, maxRating));
  const stars = Array.from({ length: maxRating }, (_, index) => index < clampedRating);

  return (
    <div
      className={styles.starRating}
      role="img"
      aria-label={`Rated ${clampedRating} out of ${maxRating} stars`}
    >
      {stars.map((filled, index) => (
        <span
          key={index}
          className={filled ? styles.starFilled : styles.starEmpty}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
};

export default StarRating;
