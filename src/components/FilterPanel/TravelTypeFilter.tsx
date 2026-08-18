import React from 'react';
import { TRAVEL_TYPES } from '../../types/filters';

export interface TravelTypeFilterProps {
  value: string[];
  onToggle: (type: string) => void;
}

export const TravelTypeFilter: React.FC<TravelTypeFilterProps> = ({ value, onToggle }) => {
  return (
    <div className="filter-group" data-testid="travel-type-filter">
      <span className="filter-group__label">Travel Type</span>
      <div className="filter-group__checkboxes">
        {TRAVEL_TYPES.map((type) => (
          <label key={type} className="filter-group__checkbox">
            <input
              type="checkbox"
              checked={value.includes(type)}
              onChange={() => onToggle(type)}
            />
            {type}
          </label>
        ))}
      </div>
    </div>
  );
};
