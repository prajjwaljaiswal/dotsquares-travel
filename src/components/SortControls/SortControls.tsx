import React from 'react';

export type SortOption = 'popularity' | 'price-low-high' | 'price-high-low' | 'rating' | 'newest';

interface SortOptionConfig {
  value: SortOption;
  label: string;
}

const sortOptions: SortOptionConfig[] = [
  { value: 'popularity', label: 'Popularity' },
  { value: 'price-low-high', label: 'Price: Low to High' },
  { value: 'price-high-low', label: 'Price: High to Low' },
  { value: 'rating', label: 'Rating' },
  { value: 'newest', label: 'Newest' },
];

interface SortControlsProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

export const SortControls: React.FC<SortControlsProps> = ({ value, onChange, className = '' }) => {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(event.target.value as SortOption);
  };

  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <label htmlFor="sort-select" className="text-sm font-medium text-gray-700">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={handleChange}
        className="block w-full rounded-md border-gray-300 bg-white py-2 pl-3 pr-10 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500 sm:w-auto"
        aria-label="Sort results"
      >
        {sortOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SortControls;