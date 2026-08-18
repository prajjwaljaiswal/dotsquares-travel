import React from 'react';
import { Review } from '../../data/packages';
import styles from './Reviews.module.css';

export interface ReviewsProps {
  reviews: Review[];
  averageRating?: number;
}

const renderStars = (rating: number) => {
  const fullStars = Math.round(rating);
  return '★★★★★'.slice(0, fullStars) + '☆☆☆☆☆'.slice(0, 5 - fullStars);
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }
  return date.toLocaleDateString(undefined, {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
};

const Reviews: React.FC<ReviewsProps> = ({ reviews, averageRating }) => {
  if (!reviews || reviews.length === 0) {
    return (
      <section className={styles.section} aria-label="Traveller reviews">
        <h2 className={styles.heading}>Traveller Reviews</h2>
        <p className={styles.empty}>No reviews yet for this package.</p>
      </section>
    );
  }

  const computedAverage =
    averageRating ??
    reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length;

  return (
    <section className={styles.section} aria-label="Traveller reviews">
      <div className={styles.headerRow}>
        <h2 className={styles.heading}>Traveller Reviews</h2>
        <div className={styles.summary}>
          <span className={styles.summaryStars} aria-hidden="true">
            {renderStars(computedAverage)}
          </span>
          <span className={styles.summaryScore}>
            {computedAverage.toFixed(1)} · {reviews.length}{' '}
            {reviews.length === 1 ? 'review' : 'reviews'}
          </span>
        </div>
      </div>

      <ul className={styles.list}>
        {reviews.map((review) => (
          <li key={review.id} className={styles.item} data-testid="review-item">
            <div className={styles.itemHeader}>
              <span className={styles.author}>{review.author}</span>
              <span className={styles.date}>{formatDate(review.date)}</span>
            </div>
            <div className={styles.stars} aria-label={`Rated ${review.rating} out of 5`}>
              {renderStars(review.rating)}
            </div>
            <p className={styles.comment}>{review.comment}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Reviews;
