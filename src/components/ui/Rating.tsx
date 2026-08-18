import React, { useState } from 'react';

export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
  value: number;
  max?: number;
  size?: RatingSize;
  readOnly?: boolean;
  onChange?: (value: number) => void;
  label?: string;
}

const sizeClasses: Record<RatingSize, string> = {
  sm: 'text-lg',
  md: 'text-2xl',
  lg: 'text-3xl',
};

/**
 * Rating
 *
 * A star rating control. In interactive mode it exposes a radiogroup with
 * arrow-key support; in read-only mode it renders as an accessible image
 * with a descriptive label for screen readers.
 *
 * @example
 * <Rating value={rating} onChange={setRating} label="Trip rating" />
 *
 * @example
 * <Rating value={4} readOnly label="Average review score" />
 */
export const Rating: React.FC<RatingProps> = ({
  value,
  max = 5,
  size = 'md',
  readOnly = false,
  onChange,
  label = 'Rating',
}) => {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;

  const handleKeyDown = (e: React.KeyboardEvent, current: number) => {
    if (readOnly) return;
    if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
      e.preventDefault();
      onChange?.(Math.min(max, current + 1));
    } else if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
      e.preventDefault();
      onChange?.(Math.max(1, current - 1));
    }
  };

  return (
    <div role={readOnly ? 'img' : 'radiogroup'} aria-label={label} className="inline-flex items-center gap-1">
      {Array.from({ length: max }, (_, i) => i + 1).map((star) => (
        <button
          key={star}
          type="button"
          role={readOnly ? undefined : 'radio'}
          aria-checked={readOnly ? undefined : value === star}
          aria-label={`${star} star${star > 1 ? 's' : ''}`}
          disabled={readOnly}
          tabIndex={readOnly ? -1 : value === star ? 0 : -1}
          onClick={() => onChange?.(star)}
          onMouseEnter={() => !readOnly && setHoverValue(star)}
          onMouseLeave={() => !readOnly && setHoverValue(null)}
          onKeyDown={(e) => handleKeyDown(e, value)}
          className={`${sizeClasses[size]} ${
            readOnly ? 'cursor-default' : 'cursor-pointer'
          } focus:outline-none focus:ring-2 focus:ring-blue-500 rounded ${
            star <= displayValue ? 'text-yellow-400' : 'text-gray-300'
          }`}
        >
          ★
        </button>
      ))}
      <span className="sr-only">{`${value} out of ${max} stars`}</span>
    </div>
  );
};

export default Rating;
