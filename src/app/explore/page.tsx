import { useState, useMemo } from 'react';
import { FilterPanel } from '@/components/FilterPanel';
import { SortDropdown } from '@/components/SortDropdown';
import { DestinationCard } from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';
import { sortItems, SortOption } from '@/lib/sorting';
import styles from './explore.module.css';

interface Destination {
  id: string;
  name: string;
  price: number;
  rating: number;
  popularity: number;
  createdAt: string;
  image: string;
  location: string;
  description: string;
}

interface FilterState {
  priceRange?: [number, number];
  rating?: number;
  duration?: string[];
  travelType?: string[];
}

export default function ExplorePage() {
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [filters, setFilters] = useState<FilterState>({});

  const filteredAndSortedDestinations = useMemo(() => {
    // Apply filters first
    let results = [...destinations] as Destination[];
    
    if (filters.priceRange) {
      results = results.filter(
        (d) => d.price >= filters.priceRange![0] && d.price <= filters.priceRange![1]
      );
    }
    
    if (filters.rating) {
      results = results.filter((d) => d.rating >= filters.rating!);
    }
    
    if (filters.duration && filters.duration.length > 0) {
      results = results.filter((d) => filters.duration!.includes(d.duration || 'any'));
    }
    
    if (filters.travelType && filters.travelType.length > 0) {
      results = results.filter((d) => filters.travelType!.includes(d.type || 'any'));
    }
    
    // Apply sorting
    return sortItems(results, sortBy);
  }, [sortBy, filters, destinations]);

  const handleFilterChange = (newFilters: FilterState) => {
    setFilters(newFilters);
  };

  return (
    <div className={styles.explorePage}>
      <header className={styles.header}>
        <h1 className={styles.title}>Explore Destinations</h1>
        <div className={styles.controls}>
          <FilterPanel filters={filters} onChange={handleFilterChange} />
          <SortDropdown 
            value={sortBy} 
            onChange={setSortBy} 
            className={styles.sortDropdown}
          />
        </div>
      </header>
      
      <section className={styles.results}>
        <div className={styles.resultsHeader}>
          <p className={styles.resultsCount}>
            {filteredAndSortedDestinations.length} destination{filteredAndSortedDestinations.length !== 1 ? 's' : ''} found
          </p>
        </div>
        
        <div className={styles.grid}>
          {filteredAndSortedDestinations.map((destination) => (
            <DestinationCard 
              key={destination.id} 
              destination={destination}
            />
          ))}
        </div>
        
        {filteredAndSortedDestinations.length === 0 && (
          <div className={styles.emptyState}>
            <p>No destinations match your criteria. Try adjusting your filters or search.</p>
          </div>
        )}
      </section>
    </div>
  );
}