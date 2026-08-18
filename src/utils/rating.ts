export interface StarRating {
  full: number;
  half: boolean;
  empty: number;
}

export function getStarRating(rating: number): StarRating {
  const clamped = Math.max(0, Math.min(5, rating));
  const full = Math.floor(clamped);
  const half = clamped - full >= 0.5;
  const empty = 5 - full - (half ? 1 : 0);
  return { full, half, empty };
}
