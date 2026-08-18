'use client';

import { ChangeEvent } from 'react';
import styles from './FilterPanel.module.css';
import {
  FilterState,
  FilterOption,
  DURATION_OPTIONS,
  TRAVEL_TYPE_OPTIONS,
  RATING_OPTIONS,
} from '../../types/filters';

export interface FilterPanelProps {
  destinationOptions: FilterOption[];
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  onReset: () => void;
  isOpen: boolean;
  onClose: () => void;
}

export default function FilterPanel({
  destinationOptions,
  filters,
  onChange,
  onReset,
  isOpen,
  onClose,
}: FilterPanelProps) {
  const handleDestinationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, destination: event.target.value });
  };

  const handleDurationChange = (event: ChangeEvent<HTMLSelectElement>) => {
    onChange({ ...filters, duration: event.target.value });
  };

  const handlePriceMinChange = (event: ChangeEvent<HTMLInputElement>) => {
    const min = Number(event.target.value);
    onChange({ ...filters, priceRange: { ...filters.priceRange, min } });
  };

  const handlePriceMaxChange = (event: ChangeEvent<HTMLInputElement>) => {
    const max = Number(event.target.value);
    onChange({ ...filters, priceRange: { ...filters.priceRange, max } });
  };

  const handleTravelTypeToggle = (type: string) => {
    const exists = filters.travelType.includes(type);
    const nextTypes = exists
      ? filters.travelType.filter((item) => item !== type)
      : [...filters.travelType, type];
    onChange({ ...filters, travelType: nextTypes });
  };

  const handleRatingChange = (rating: number) => {
    onChange({ ...filters, rating: filters.rating === rating ? 0 : rating });
  };

  return (
    <>
      {isOpen && (
        <button
          type="button"
          aria-label="Close filters"
          className={styles.overlay}
          onClick={onClose}
          data-testid="filter-panel-overlay"
        />
      )}
      <aside
        className={`${styles.panel} ${isOpen ? styles.panelOpen : ''}`}
        data-testid="filter-panel"
        aria-label="Filter places"
      >
        <div className={styles.header}>
          <h2 className={styles.title}>Filters</h2>
          <button
            type="button"
            className={styles.closeButton}
            onClick={onClose}
            aria-label="Close filter panel"
          >
            &times;
          </button>
        </div>

        <div className={styles.section}>
          <label className={styles.label} htmlFor="filter-destination">
            Destination
          </label>
          <select
            id="filter-destination"
            className={styles.select}
            value={filters.destination}
            onChange={handleDestinationChange}
          >
            <option value="">All destinations</option>
            {destinationOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.section}>
          <label className={styles.label} htmlFor="filter-duration">
            Duration
          </label>
          <select
            id="filter-duration"
            className={styles.select}
            value={filters.duration}
            onChange={handleDurationChange}
          >
            {DURATION_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.section}>
          <span className={styles.label}>Price range ($)</span>
          <div className={styles.priceInputs}>
            <label className={styles.priceLabel}>
              Min
              <input
                type="number"
                min={0}
                data-testid="price-min-input"
                className={styles.priceInput}
                value={filters.priceRange.min}
                onChange={handlePriceMinChange}
              />
            </label>
            <label className={styles.priceLabel}>
              Max
              <input
                type="number"
                min={0}
                data-testid="price-max-input"
                className={styles.priceInput}
                value={filters.priceRange.max}
                onChange={handlePriceMaxChange}
              />
            </label>
          </div>
        </div>

        <div className={styles.section}>
          <span className={styles.label}>Travel type</span>
          <div className={styles.checkboxGroup}>
            {TRAVEL_TYPE_OPTIONS.map((type) => (
              <label key={type} className={styles.checkboxLabel}>
                <input
                  type="checkbox"
                  checked={filters.travelType.includes(type)}
                  onChange={() => handleTravelTypeToggle(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>

        <div className={styles.section}>
          <span className={styles.label}>Minimum rating</span>
          <div className={styles.ratingGroup}>
            {RATING_OPTIONS.map((rating) => (
              <button
                key={rating}
                type="button"
                className={`${styles.ratingButton} ${
                  filters.rating === rating ? styles.ratingButtonActive : ''
                }`}
                onClick={() => handleRatingChange(rating)}
              >
                {rating}+ &#9733;
              </button>
            ))}
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button" className={styles.resetButton} onClick={onReset}>
            Reset filters
          </button>
          <button type="button" className={styles.applyButton} onClick={onClose}>
            Show results
          </button>
        </div>
      </aside>
    </>
  );
}
