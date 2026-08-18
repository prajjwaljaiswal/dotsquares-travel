import React from 'react';
import { DurationRange, DURATION_LIMITS } from '../../types/filters';

export interface DurationFilterProps {
  value: DurationRange;
  onChange: (value: DurationRange) => void;
}

export const DurationFilter: React.FC<DurationFilterProps> = ({ value, onChange }) => {
  const handleMinChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const min = Math.min(Number(event.target.value), value.max);
    onChange({ ...value, min });
  };

  const handleMaxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const max = Math.max(Number(event.target.value), value.min);
    onChange({ ...value, max });
  };

  return (
    <div className="filter-group" data-testid="duration-filter">
      <span className="filter-group__label">Duration (days)</span>
      <div className="filter-group__range">
        <label htmlFor="duration-min">Min</label>
        <input
          id="duration-min"
          type="number"
          min={DURATION_LIMITS.min}
          max={DURATION_LIMITS.max}
          value={value.min}
          onChange={handleMinChange}
        />
        <label htmlFor="duration-max">Max</label>
        <input
          id="duration-max"
          type="number"
          min={DURATION_LIMITS.min}
          max={DURATION_LIMITS.max}
          value={value.max}
          onChange={handleMaxChange}
        />
      </div>
    </div>
  );
};
