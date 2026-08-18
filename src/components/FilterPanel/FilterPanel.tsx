import React, { useCallback, useEffect, useState } from 'react';
import { useFilters } from '../../hooks/useFilters';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { DEFAULT_FILTERS, FilterState } from '../../types/filters';
import { FilterForm } from './FilterForm';
import { FilterDrawer } from './FilterDrawer';
import './FilterPanel.css';

export interface FilterPanelProps {
  /** Called whenever the applied filters change so results can be re-fetched/filtered client-side. */
  onChange: (filters: FilterState) => void;
  initialFilters?: Partial<FilterState>;
  destinations?: string[];
  /** Media query used to decide when to collapse into the drawer layout. */
  mobileBreakpoint?: string;
}

/**
 * Combinable destination, duration, price range, travel type, and rating
 * filters. Renders as a persistent sidebar on desktop (live updates) and
 * as a drawer/modal on mobile (apply/reset staged changes).
 */
export const FilterPanel: React.FC<FilterPanelProps> = ({
  onChange,
  initialFilters,
  destinations,
  mobileBreakpoint = '(max-width: 768px)',
}) => {
  const isMobile = useMediaQuery(mobileBreakpoint);
  const {
    filters,
    setDestination,
    setDuration,
    setPriceRange,
    toggleTravelType,
    setMinRating,
    resetFilters,
    setFilters,
    activeFilterCount,
  } = useFilters(initialFilters);

  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [draftFilters, setDraftFilters] = useState<FilterState>(filters);

  // Desktop sidebar filters are live: apply immediately without a full reload.
  useEffect(() => {
    if (!isMobile) {
      onChange(filters);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters, isMobile]);

  // Keep the mobile draft in sync with the last applied filters whenever the drawer opens.
  useEffect(() => {
    if (isMobile && isDrawerOpen) {
      setDraftFilters(filters);
    }
  }, [isMobile, isDrawerOpen, filters]);

  const openDrawer = useCallback(() => setDrawerOpen(true), []);
  const closeDrawer = useCallback(() => setDrawerOpen(false), []);

  const handleApply = useCallback(() => {
    setFilters(draftFilters);
    onChange(draftFilters);
    setDrawerOpen(false);
  }, [draftFilters, onChange, setFilters]);

  const handleResetMobile = useCallback(() => {
    setDraftFilters({ ...DEFAULT_FILTERS, ...initialFilters });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [initialFilters]);

  const handleResetDesktop = useCallback(() => {
    resetFilters();
  }, [resetFilters]);

  if (isMobile) {
    return (
      <div className="filter-panel filter-panel--mobile" data-testid="filter-panel-mobile">
        <button
          type="button"
          className="filter-panel__trigger"
          onClick={openDrawer}
          data-testid="filter-panel-trigger"
        >
          Filters{activeFilterCount > 0 ? ` (${activeFilterCount})` : ''}
        </button>
        <FilterDrawer isOpen={isDrawerOpen} onClose={closeDrawer} title="Filters">
          <FilterForm
            filters={draftFilters}
            destinations={destinations}
            onDestinationChange={(destination) =>
              setDraftFilters((prev) => ({ ...prev, destination }))
            }
            onDurationChange={(duration) => setDraftFilters((prev) => ({ ...prev, duration }))}
            onPriceRangeChange={(priceRange) =>
              setDraftFilters((prev) => ({ ...prev, priceRange }))
            }
            onTravelTypeToggle={(type) =>
              setDraftFilters((prev) => ({
                ...prev,
                travelTypes: prev.travelTypes.includes(type)
                  ? prev.travelTypes.filter((t) => t !== type)
                  : [...prev.travelTypes, type],
              }))
            }
            onMinRatingChange={(minRating) =>
              setDraftFilters((prev) => ({ ...prev, minRating }))
            }
            footer={
              <div className="filter-form__actions">
                <button
                  type="button"
                  className="filter-form__reset"
                  onClick={handleResetMobile}
                  data-testid="filter-reset-mobile"
                >
                  Reset
                </button>
                <button
                  type="button"
                  className="filter-form__apply"
                  onClick={handleApply}
                  data-testid="filter-apply-mobile"
                >
                  Apply Filters
                </button>
              </div>
            }
          />
        </FilterDrawer>
      </div>
    );
  }

  return (
    <aside className="filter-panel filter-panel--desktop" data-testid="filter-panel-desktop">
      <div className="filter-panel__header">
        <h2 className="filter-panel__title">Filters</h2>
        {activeFilterCount > 0 && (
          <button
            type="button"
            className="filter-panel__clear"
            onClick={handleResetDesktop}
            data-testid="filter-reset-desktop"
          >
            Clear all
          </button>
        )}
      </div>
      <FilterForm
        filters={filters}
        destinations={destinations}
        onDestinationChange={setDestination}
        onDurationChange={setDuration}
        onPriceRangeChange={setPriceRange}
        onTravelTypeToggle={toggleTravelType}
        onMinRatingChange={setMinRating}
      />
    </aside>
  );
};
