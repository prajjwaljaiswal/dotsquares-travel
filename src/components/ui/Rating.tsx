import React, { useState } from 'react';
import { cn } from './utils';

export type RatingSize = 'sm' | 'md' | 'lg';

export interface RatingProps {
  /** Current rating value. */
  value: number;
  /** Maximum number of stars. Defaults to 5. */
  max?: number;
  /** Called with the new value when a star is selected. */
  onChange?: (value: number) => void;
  /** When true, the rating cannot be changed by the user. Defaults to false. */
  readOnly?: boolean;
  /** Size of the stars. Defaults to 'md'. */
  size?: RatingSize;
  /** Accessible label describing what is being rated. */
  'aria-label'?: string;
  className?: string;
}

/**
 * Rating renders an interactive or read-only star rating control.
 *
 * @example Interactive
 * const [value, setValue] = useState(3);
 * <Rating value={value} onChange={setValue} aria-label="Rate this hotel" />
 *
 * @example Read-only display
 * <Rating value={4} readOnly aria-label="Average guest rating" />
 */
export function Rating({
  value,
  max = 5,
  onChange,
  readOnly = false,
  size = 'md',
  className,
  ...rest
}: RatingProps) {
  const [hoverValue, setHoverValue] = useState<number | null>(null);
  const displayValue = hoverValue ?? value;
  const ariaLabel = rest['aria-label'] ?? 'Rating';

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (readOnly || !onChange) return;

    if (event.key === 'ArrowRight' || event.key === 'ArrowUp') {
      event.preventDefault();
      onChange(Math.min(max, value + 1));
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowDown') {
      event.preventDefault();
      onChange(Math.max(0, value - 1));
    }
  };

  return (
    <div
      className={cn('ds-rating', `ds-rating--${size}`, className)}
      role={readOnly ? 'img' : 'slider'}
      aria-label={ariaLabel}
      aria-valuemin={readOnly ? undefined : 0}
      aria-valuemax={readOnly ? undefined : max}
      aria-valuenow={readOnly ? undefined : value}
      aria-valuetext={`${value} out of ${max} stars`}
      tabIndex={readOnly ? -1 : 0}
      onKeyDown={handleKeyDown}
      onMouseLeave={() => setHoverValue(null)}
    >
      {Array.from({ length: max }, (_, index) => {
        const starValue = index + 1;
        const filled = starValue <= displayValue;

        return (
          <button
            key={starValue}
            type="button"
            className={cn(
              'ds-rating__star',
              'ds-focusable',
              filled && 'ds-rating__star--filled',
              readOnly && 'ds-rating__star--readonly'
            )}
            disabled={readOnly}
            tabIndex={-1}
            aria-hidden="true"
            onMouseEnter={() => !readOnly && setHoverValue(starValue)}
            onClick={() => !readOnly && onChange?.(starValue)}
          >
            ★
          </button>
        );
      })}
    </div>
  );
}
