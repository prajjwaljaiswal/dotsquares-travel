import React from 'react';

export interface DestinationFilterProps {
  value: string;
  onChange: (value: string) => void;
  suggestions?: string[];
}

export const DestinationFilter: React.FC<DestinationFilterProps> = ({
  value,
  onChange,
  suggestions = [],
}) => {
  return (
    <div className="filter-group" data-testid="destination-filter">
      <label htmlFor="destination-input" className="filter-group__label">
        Destination
      </label>
      <input
        id="destination-input"
        type="text"
        className="filter-group__input"
        placeholder="Search destination..."
        value={value}
        onChange={(event) => onChange(event.target.value)}
        list={suggestions.length > 0 ? 'destination-suggestions' : undefined}
      />
      {suggestions.length > 0 && (
        <datalist id="destination-suggestions">
          {suggestions.map((suggestion) => (
            <option key={suggestion} value={suggestion} />
          ))}
        </datalist>
      )}
    </div>
  );
};
