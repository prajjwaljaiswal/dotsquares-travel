import React from 'react';
import { RATING_OPTIONS } from '../../types/filters';

export interface RatingFilterProps {
  value: number;
  onChange: (value: number) => void;
}

export const RatingFilter: React.FC<RatingFilterProps> = ({ value, onChange }) => {
  return (
    <div className="filter-group" data-testid="rating-filter">
      <span className="filter-group__label">Minimum Rating</span>
      <div className="filter-group__ratings">
        {RATING_OPTIONS.filter((rating) => rating > 0).map((rating) => (
          <button
            key={rating}
            type="button"
            className={`filter-group__rating-btn${value === rating ? ' is-active' : ''}`}
            onClick={() => onChange(value === rating ? 0 : rating)}
            aria-pressed={value === rating}
          >
            {rating}★+
          </button>
        ))}
      </div>
    </div>
  );
};
