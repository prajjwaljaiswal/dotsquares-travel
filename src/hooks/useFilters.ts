import { useCallback, useState } from 'react';
import { DEFAULT_FILTERS, FilterState } from '../types/filters';

export interface UseFiltersResult {
  filters: FilterState;
  setDestination: (destination: string) => void;
  setDuration: (duration: FilterState['duration']) => void;
  setPriceRange: (priceRange: FilterState['priceRange']) => void;
  toggleTravelType: (type: string) => void;
  setMinRating: (rating: number) => void;
  resetFilters: () => void;
  setFilters: (filters: FilterState) => void;
  activeFilterCount: number;
}

/**
 * Manages combinable filter state (destination, duration, price range,
 * travel type, rating) for the Search & Explore Places filter panel.
 */
export function useFilters(initialFilters?: Partial<FilterState>): UseFiltersResult {
  const baseFilters: FilterState = { ...DEFAULT_FILTERS, ...initialFilters };
  const [filters, setFiltersState] = useState<FilterState>(baseFilters);

  const setDestination = useCallback((destination: string) => {
    setFiltersState((prev) => ({ ...prev, destination }));
  }, []);

  const setDuration = useCallback((duration: FilterState['duration']) => {
    setFiltersState((prev) => ({ ...prev, duration }));
  }, []);

  const setPriceRange = useCallback((priceRange: FilterState['priceRange']) => {
    setFiltersState((prev) => ({ ...prev, priceRange }));
  }, []);

  const toggleTravelType = useCallback((type: string) => {
    setFiltersState((prev) => {
      const exists = prev.travelTypes.includes(type);
      const travelTypes = exists
        ? prev.travelTypes.filter((t) => t !== type)
        : [...prev.travelTypes, type];
      return { ...prev, travelTypes };
    });
  }, []);

  const setMinRating = useCallback((minRating: number) => {
    setFiltersState((prev) => ({ ...prev, minRating }));
  }, []);

  const resetFilters = useCallback(() => {
    setFiltersState(baseFilters);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFilters]);

  const setFilters = useCallback((next: FilterState) => {
    setFiltersState(next);
  }, []);

  const activeFilterCount =
    (filters.destination ? 1 : 0) +
    (filters.duration.min !== DEFAULT_FILTERS.duration.min ||
    filters.duration.max !== DEFAULT_FILTERS.duration.max
      ? 1
      : 0) +
    (filters.priceRange.min !== DEFAULT_FILTERS.priceRange.min ||
    filters.priceRange.max !== DEFAULT_FILTERS.priceRange.max
      ? 1
      : 0) +
    filters.travelTypes.length +
    (filters.minRating > 0 ? 1 : 0);

  return {
    filters,
    setDestination,
    setDuration,
    setPriceRange,
    toggleTravelType,
    setMinRating,
    resetFilters,
    setFilters,
    activeFilterCount,
  };
}
