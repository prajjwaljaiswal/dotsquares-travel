'use client';

import { useMemo, useState } from 'react';
import FilterPanel from '../../components/FilterPanel/FilterPanel';
import styles from './explore.module.css';
import { FilterState, DEFAULT_FILTER_STATE } from '../../types/filters';

interface ExplorePlace {
  id: string;
  name: string;
  destination: string;
  price: number;
  durationDays: number;
  travelType: string;
  rating: number;
}

const PLACES: ExplorePlace[] = [
  {
    id: 'bali-retreat',
    name: 'Bali Beach Retreat',
    destination: 'Bali',
    price: 1200,
    durationDays: 5,
    travelType: 'Beach',
    rating: 4.6,
  },
  {
    id: 'swiss-alps',
    name: 'Swiss Alps Adventure',
    destination: 'Switzerland',
    price: 2500,
    durationDays: 8,
    travelType: 'Adventure',
    rating: 4.8,
  },
  {
    id: 'paris-culture',
    name: 'Paris Cultural Tour',
    destination: 'Paris',
    price: 1800,
    durationDays: 4,
    travelType: 'Cultural',
    rating: 4.5,
  },
  {
    id: 'dubai-luxury',
    name: 'Dubai Luxury Escape',
    destination: 'Dubai',
    price: 3200,
    durationDays: 6,
    travelType: 'Luxury',
    rating: 4.9,
  },
  {
    id: 'maldives-family',
    name: 'Maldives Family Getaway',
    destination: 'Maldives',
    price: 2800,
    durationDays: 7,
    travelType: 'Family',
    rating: 4.7,
  },
  {
    id: 'kashmir-adventure',
    name: 'Kashmir Mountain Trek',
    destination: 'Kashmir',
    price: 900,
    durationDays: 10,
    travelType: 'Adventure',
    rating: 4.3,
  },
  {
    id: 'thailand-beach',
    name: 'Thailand Island Hopping',
    destination: 'Thailand',
    price: 1100,
    durationDays: 12,
    travelType: 'Beach',
    rating: 4.4,
  },
];

const DESTINATION_OPTIONS = Array.from(
  new Set(PLACES.map((place) => place.destination))
).map((destination) => ({ label: destination, value: destination }));

function matchesDuration(durationDays: number, durationFilter: string): boolean {
  if (!durationFilter) return true;
  if (durationFilter === '15+') {
    return durationDays >= 15;
  }
  const [minStr, maxStr] = durationFilter.split('-');
  const min = Number(minStr);
  const max = Number(maxStr);
  return durationDays >= min && durationDays <= max;
}

export default function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTER_STATE);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const filteredPlaces = useMemo(() => {
    return PLACES.filter((place) => {
      const destinationMatch =
        !filters.destination || place.destination === filters.destination;
      const durationMatch = matchesDuration(place.durationDays, filters.duration);
      const priceMatch =
        place.price >= filters.priceRange.min && place.price <= filters.priceRange.max;
      const travelTypeMatch =
        filters.travelType.length === 0 || filters.travelType.includes(place.travelType);
      const ratingMatch = filters.rating === 0 || place.rating >= filters.rating;

      return destinationMatch && durationMatch && priceMatch && travelTypeMatch && ratingMatch;
    });
  }, [filters]);

  const handleReset = () => setFilters(DEFAULT_FILTER_STATE);

  return (
    <main className={styles.page}>
      <div className={styles.mobileHeader}>
        <h1 className={styles.heading}>Explore Places</h1>
        <button
          type="button"
          className={styles.filterToggle}
          onClick={() => setIsPanelOpen(true)}
          data-testid="open-filters-button"
        >
          Filters
        </button>
      </div>

      <div className={styles.layout}>
        <FilterPanel
          destinationOptions={DESTINATION_OPTIONS}
          filters={filters}
          onChange={setFilters}
          onReset={handleReset}
          isOpen={isPanelOpen}
          onClose={() => setIsPanelOpen(false)}
        />

        <section className={styles.results} data-testid="results-list">
          <h1 className={styles.headingDesktop}>Explore Places</h1>
          <p className={styles.resultsCount}>
            {filteredPlaces.length} {filteredPlaces.length === 1 ? 'place' : 'places'} found
          </p>
          <div className={styles.grid}>
            {filteredPlaces.map((place) => (
              <article key={place.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{place.name}</h3>
                <p className={styles.cardMeta}>{place.destination}</p>
                <p className={styles.cardMeta}>{place.durationDays} days</p>
                <p className={styles.cardMeta}>${place.price}</p>
                <p className={styles.cardMeta}>{place.travelType}</p>
                <p className={styles.cardMeta}>{place.rating.toFixed(1)} &#9733;</p>
              </article>
            ))}
            {filteredPlaces.length === 0 && (
              <p className={styles.emptyState}>No places match your filters.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
