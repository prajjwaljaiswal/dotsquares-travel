'use client';

import { useMemo, useState } from 'react';
import FilterPanel, { DEFAULT_FILTERS, type FilterState } from '../components/FilterPanel';

interface ExploreDestination {
  id: string;
  name: string;
  destination: string;
  duration: number;
  price: number;
  travelType: string;
  rating: number;
}

const SAMPLE_DESTINATIONS: ExploreDestination[] = [
  {
    id: 'bali-adventure',
    name: 'Bali Adventure Escape',
    destination: 'Bali',
    duration: 7,
    price: 1200,
    travelType: 'Adventure',
    rating: 4.5,
  },
  {
    id: 'bali-relaxation',
    name: 'Bali Relaxation Retreat',
    destination: 'Bali',
    duration: 5,
    price: 900,
    travelType: 'Relaxation',
    rating: 4.2,
  },
  {
    id: 'paris-romance',
    name: 'Paris Romantic Getaway',
    destination: 'Paris',
    duration: 4,
    price: 1500,
    travelType: 'Relaxation',
    rating: 4.8,
  },
  {
    id: 'paris-city',
    name: 'Paris City Explorer',
    destination: 'Paris',
    duration: 6,
    price: 1100,
    travelType: 'Adventure',
    rating: 4.0,
  },
  {
    id: 'rome-history',
    name: 'Rome Historical Tour',
    destination: 'Rome',
    duration: 8,
    price: 1300,
    travelType: 'Culture',
    rating: 4.6,
  },
  {
    id: 'tokyo-culture',
    name: 'Tokyo Culture Immersion',
    destination: 'Tokyo',
    duration: 10,
    price: 2000,
    travelType: 'Culture',
    rating: 4.9,
  },
];

export default function ExplorePage() {
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTERS);
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  const destinationOptions = useMemo(
    () => Array.from(new Set(SAMPLE_DESTINATIONS.map((item) => item.destination))),
    []
  );

  const travelTypeOptions = useMemo(
    () => Array.from(new Set(SAMPLE_DESTINATIONS.map((item) => item.travelType))),
    []
  );

  const filteredResults = useMemo(() => {
    return SAMPLE_DESTINATIONS.filter((item) => {
      if (filters.destination !== 'all' && item.destination !== filters.destination) {
        return false;
      }
      if (item.duration < filters.minDuration || item.duration > filters.maxDuration) {
        return false;
      }
      if (item.price < filters.minPrice || item.price > filters.maxPrice) {
        return false;
      }
      if (filters.travelTypes.length > 0 && !filters.travelTypes.includes(item.travelType)) {
        return false;
      }
      if (item.rating < filters.minRating) {
        return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <main className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-8 md:flex-row">
      <button
        type="button"
        data-testid="open-filter-panel"
        onClick={() => setIsPanelOpen(true)}
        className="mb-4 rounded border border-gray-300 px-4 py-2 text-sm font-medium md:hidden"
      >
        Filters
      </button>

      <FilterPanel
        destinations={destinationOptions}
        travelTypes={travelTypeOptions}
        filters={filters}
        onChange={setFilters}
        onReset={() => setFilters(DEFAULT_FILTERS)}
        isOpen={isPanelOpen}
        onClose={() => setIsPanelOpen(false)}
      />

      <section className="flex-1" data-testid="explore-results">
        <h1 className="mb-4 text-2xl font-semibold">Explore Places</h1>
        <p className="mb-4 text-sm text-gray-600">
          {filteredResults.length} result{filteredResults.length === 1 ? '' : 's'} found
        </p>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResults.map((item) => (
            <article
              key={item.id}
              data-testid="explore-result-card"
              className="rounded border border-gray-200 p-4 shadow-sm"
            >
              <h2 className="text-lg font-medium">{item.name}</h2>
              <p className="text-sm text-gray-600">{item.destination}</p>
              <p className="text-sm text-gray-600">{item.duration} days</p>
              <p className="text-sm text-gray-600">${item.price}</p>
              <p className="text-sm text-gray-600">{item.travelType}</p>
              <p className="text-sm text-gray-600">Rating: {item.rating}</p>
            </article>
          ))}
          {filteredResults.length === 0 && (
            <p className="text-sm text-gray-500" data-testid="explore-no-results">
              No results match your filters.
            </p>
          )}
        </div>
      </section>
    </main>
  );
}
