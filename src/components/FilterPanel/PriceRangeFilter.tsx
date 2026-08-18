import React from 'react';
import { PriceRange, PRICE_LIMITS } from '../../types/filters';

export interface PriceRangeFilterProps {
  value: PriceRange;
  onChange: (value: PriceRange) => void;
}

export const PriceRangeFilter: React.FC<PriceRangeFilterProps> = ({ value, onChange }) => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const min = Math.min(Number(event.target.value), value.max);
    onChange({ ...value, min });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const max = Math.max(Number(event.target.value), value.min);
    onChange({ ...value, max });
  };

  return (
    <div className="filter-group" data-testid="price-range-filter">
      <span className="filter-group__label">Price Range ($)</span>
      <div className="filter-group__range">
        <input
          type="range"
          min={PRICE_LIMITS.min}
          max={PRICE_LIMITS.max}
          value={value.min}
          onChange={handleMinChange}
          aria-label="Minimum price"
        />
        <input
          type="range"
          min={PRICE_LIMITS.min}
          max={PRICE_LIMITS.max}
          value={value.max}
          onChange={handleMaxChange}
          aria-label="Maximum price"
        />
      </div>
      <div className="filter-group__range-values">
        <span>${value.min}</span>
        <span>${value.max}</span>
      </div>
    </div>
  );
};
