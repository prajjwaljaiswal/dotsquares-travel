interface StarRatingProps {
  rating: number;
  maxRating?: number;
}

export default function StarRating({ rating, maxRating = 5 }: StarRatingProps) {
  const stars = Array.from({ length: maxRating }, (_, index) => index < rating);

  return (
    <div
      className="flex items-center gap-1"
      role="img"
      aria-label={`Rated ${rating} out of ${maxRating} stars`}
    >
      {stars.map((filled, index) => (
        <span
          key={index}
          className={filled ? 'text-amber-400' : 'text-slate-300'}
          aria-hidden="true"
        >
          ★
        </span>
      ))}
    </div>
  );
}
