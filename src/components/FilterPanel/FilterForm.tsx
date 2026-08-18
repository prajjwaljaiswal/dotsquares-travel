import React from 'react';
import { FilterState } from '../../types/filters';
import { DestinationFilter } from './DestinationFilter';
import { DurationFilter } from './DurationFilter';
import { PriceRangeFilter } from './PriceRangeFilter';
import { TravelTypeFilter } from './TravelTypeFilter';
import { RatingFilter } from './RatingFilter';

export interface FilterFormProps {
  filters: FilterState;
  destinations?: string[];
  onDestinationChange: (value: string) => void;
  onDurationChange: (value: FilterState['duration']) => void;
  onPriceRangeChange: (value: FilterState['priceRange']) => void;
  onTravelTypeToggle: (type: string) => void;
  onMinRatingChange: (value: number) => void;
  footer?: React.ReactNode;
}

/**
 * Shared filter form used by both the desktop sidebar and the mobile
 * drawer so filter behavior stays identical across breakpoints.
 */
export const FilterForm: React.FC<FilterFormProps> = ({
  filters,
  destinations,
  onDestinationChange,
  onDurationChange,
  onPriceRangeChange,
  onTravelTypeToggle,
  onMinRatingChange,
  footer,
}) => {
  return (
    <div className="filter-form" data-testid="filter-form">
      <DestinationFilter
        value={filters.destination}
        onChange={onDestinationChange}
        suggestions={destinations}
      />
      <DurationFilter value={filters.duration} onChange={onDurationChange} />
      <PriceRangeFilter value={filters.priceRange} onChange={onPriceRangeChange} />
      <TravelTypeFilter value={filters.travelTypes} onToggle={onTravelTypeToggle} />
      <RatingFilter value={filters.minRating} onChange={onMinRatingChange} />
      {footer && <div className="filter-form__footer">{footer}</div>}
    </div>
  );
};
