import { getStarRating } from '../../utils/rating';
import styles from './RatingStars.module.css';

interface RatingStarsProps {
  rating: number;
  reviewCount?: number;
}

export function RatingStars({ rating, reviewCount }: RatingStarsProps) {
  const { full, half, empty } = getStarRating(rating);

  return (
    <span className={styles.wrapper} data-testid="rating-stars" aria-label={`Rated ${rating} out of 5`}>
      <span className={styles.stars}>
        {Array.from({ length: full }).map((_, i) => (
          <span key={`full-${i}`} className={styles.full}>
            ★
          </span>
        ))}
        {half && <span className={styles.half}>★</span>}
        {Array.from({ length: empty }).map((_, i) => (
          <span key={`empty-${i}`} className={styles.empty}>
            ★
          </span>
        ))}
      </span>
      <span className={styles.value}>{rating.toFixed(1)}</span>
      {reviewCount !== undefined && <span className={styles.count}>({reviewCount} reviews)</span>}
    </span>
  );
}
