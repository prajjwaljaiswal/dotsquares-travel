import styles from './StarRating.module.css'

interface StarRatingProps {
  rating: number
  maxRating?: number
}

const StarRating = ({ rating, maxRating = 5 }: StarRatingProps) => {
  const stars = Array.from({ length: maxRating }, (_, index) => index + 1)

  return (
    <div
      className={styles.stars}
      role="img"
      aria-label={`Rated ${rating} out of ${maxRating} stars`}
    >
      {stars.map((star) => (
        <span
          key={star}
          className={star <= rating ? styles.filled : styles.empty}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  )
}

export default StarRating
