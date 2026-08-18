import type { ChangeEvent } from 'react';

export interface FilterState {
  destination: string;
  minDuration: number;
  maxDuration: number;
  minPrice: number;
  maxPrice: number;
  travelTypes: string[];
  minRating: number;
}

export const DEFAULT_FILTERS: FilterState = {
  destination: 'all',
  minDuration: 0,
  maxDuration: 30,
  minPrice: 0,
  maxPrice: 10000,
  travelTypes: [],
  minRating: 0,
};

export interface FilterPanelProps {
  destinations: string[];
  travelTypes: string[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset?: () => void;
  isOpen: boolean;
  onClose: () => void;
}

const RATING_OPTIONS = [0, 1, 2, 3, 4, 5];

export default function FilterPanel({
  destinations,
  travelTypes,
  filters,
  onChange,
  onReset,
  isOpen,
  onClose,
}: FilterPanelProps) {
  const handleDestinationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, destination: event.target.value });
  };

  const handleMinDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, minDuration: Number(event.target.value) });
  };

  const handleMaxDurationChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, maxDuration: Number(event.target.value) });
  };

  const handleMinPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, minPrice: Number(event.target.value) });
  };

  const handleMaxPriceChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange({ ...filters, maxPrice: Number(event.target.value) });
  };

  const handleTravelTypeToggle = (type: string) => {
    const isSelected = filters.travelTypes.includes(type);
    const nextTypes = isSelected
      ? filters.travelTypes.filter((existing) => existing !== type)
      : [...filters.travelTypes, type];
    onChange({ ...filters, travelTypes: nextTypes });
  };

  const handleRatingChange = (rating: number) => {
    onChange({ ...filters, minRating: rating });
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          data-testid="filter-panel-overlay"
          onClick={onClose}
        />
      )}
      <aside
        data-testid="filter-panel"
        className={`fixed inset-y-0 left-0 z-50 w-72 transform overflow-y-auto bg-white p-4 shadow-lg transition-transform duration-200 md:static md:z-auto md:w-64 md:translate-x-0 md:shadow-none ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mb-4 flex items-center justify-between md:hidden">
          <h2 className="text-lg font-semibold">Filters</h2>
          <button
            type="button"
            aria-label="Close filters"
            data-testid="filter-panel-close"
            onClick={onClose}
            className="text-2xl leading-none"
          >
            &times;
          </button>
        </div>

        <div className="mb-6">
          <label htmlFor="filter-destination" className="mb-2 block text-sm font-medium">
            Destination
          </label>
          <select
            id="filter-destination"
            value={filters.destination}
            onChange={handleDestinationChange}
            className="w-full rounded border border-gray-300 p-2"
          >
            <option value="all">All destinations</option>
            {destinations.map((destination) => (
              <option key={destination} value={destination}>
                {destination}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-6">
          <span className="mb-2 block text-sm font-medium">Duration (days)</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              aria-label="Minimum duration"
              value={filters.minDuration}
              onChange={handleMinDurationChange}
              className="w-1/2 rounded border border-gray-300 p-2"
            />
            <span>to</span>
            <input
              type="number"
              min={0}
              aria-label="Maximum duration"
              value={filters.maxDuration}
              onChange={handleMaxDurationChange}
              className="w-1/2 rounded border border-gray-300 p-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <span className="mb-2 block text-sm font-medium">Price range ($)</span>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              aria-label="Minimum price"
              value={filters.minPrice}
              onChange={handleMinPriceChange}
              className="w-1/2 rounded border border-gray-300 p-2"
            />
            <span>to</span>
            <input
              type="number"
              min={0}
              aria-label="Maximum price"
              value={filters.maxPrice}
              onChange={handleMaxPriceChange}
              className="w-1/2 rounded border border-gray-300 p-2"
            />
          </div>
        </div>

        <div className="mb-6">
          <span className="mb-2 block text-sm font-medium">Travel type</span>
          <div className="flex flex-col gap-2">
            {travelTypes.map((type) => (
              <label key={type} className="flex items-center gap-2 text-sm">
                <input
                  type="checkbox"
                  checked={filters.travelTypes.includes(type)}
                  onChange={() => handleTravelTypeToggle(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <span className="mb-2 block text-sm font-medium">Minimum rating</span>
          <div className="flex gap-2">
            {RATING_OPTIONS.map((rating) => (
              <button
                key={rating}
                type="button"
                onClick={() => handleRatingChange(rating)}
                aria-pressed={filters.minRating === rating}
                className={`rounded border px-2 py-1 text-sm ${
                  filters.minRating === rating
                    ? 'border-blue-600 bg-blue-600 text-white'
                    : 'border-gray-300 bg-white text-gray-700'
                }`}
              >
                {rating === 0 ? 'Any' : `${rating}+`}
              </button>
            ))}
          </div>
        </div>

        {onReset && (
          <button
            type="button"
            onClick={onReset}
            data-testid="filter-panel-reset"
            className="w-full rounded border border-gray-300 p-2 text-sm font-medium"
          >
            Reset filters
          </button>
        )}
      </aside>
    </>
  );
}
