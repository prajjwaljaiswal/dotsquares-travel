import React, { useState, useMemo } from 'react';
import { SortControls, SortOption } from '@/components/SortControls';
import { FilterPanel } from '@/components/FilterPanel';
import { DestinationCard } from '@/components/DestinationCard';
import { destinations } from '@/data/destinations';

interface Destination {
  id: string;
  name: string;
  price: number;
  rating: number;
  popularity: number;
  createdAt: string;
  image: string;
  location: string;
  duration: string;
}

const ExplorePage: React.FC = () => {
  const [sortBy, setSortBy] = useState<SortOption>('popularity');
  const [filteredDestinations, setFilteredDestinations] = useState<Destination[]>(destinations as Destination[]);

  const sortedDestinations = useMemo(() => {
    const sorted = [...filteredDestinations];
    
    switch (sortBy) {
      case 'popularity':
        return sorted.sort((a, b) => (b.popularity || 0) - (a.popularity || 0));
      case 'price-low-high':
        return sorted.sort((a, b) => a.price - b.price);
      case 'price-high-low':
        return sorted.sort((a, b) => b.price - a.price);
      case 'rating':
        return sorted.sort((a, b) => (b.rating || 0) - (a.rating || 0));
      case 'newest':
        return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      default:
        return sorted;
    }
  }, [filteredDestinations, sortBy]);

  const handleFilterChange = (filters: any) => {
    let filtered = destinations as Destination[];
    
    if (filters.location && filters.location !== 'all') {
      filtered = filtered.filter(d => d.location.toLowerCase().includes(filters.location.toLowerCase()));
    }
    
    if (filters.priceRange) {
      const [min, max] = filters.priceRange;
      filtered = filtered.filter(d => d.price >= min && d.price <= max);
    }
    
    if (filters.rating) {
      filtered = filtered.filter(d => (d.rating || 0) >= filters.rating);
    }
    
    setFilteredDestinations(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Explore Destinations</h1>
          <p className="mt-2 text-gray-600">Discover your next adventure from our curated selection</p>
        </div>
        
        <div className="flex flex-col gap-8 lg:flex-row">
          <aside className="w-full lg:w-64">
            <FilterPanel onChange={handleFilterChange} />
          </aside>
          
          <div className="flex-1">
            <div className="mb-6 flex items-center justify-between">
              <p className="text-sm text-gray-600">
                Showing {sortedDestinations.length} {sortedDestinations.length === 1 ? 'result' : 'results'}
              </p>
              <SortControls value={sortBy} onChange={setSortBy} />
            </div>
            
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {sortedDestinations.map((destination) => (
                <DestinationCard
                  key={destination.id}
                  id={destination.id}
                  name={destination.name}
                  location={destination.location}
                  price={destination.price}
                  rating={destination.rating}
                  image={destination.image}
                  duration={destination.duration}
                />
              ))}
            </div>
            
            {sortedDestinations.length === 0 && (
              <div className="flex flex-col items-center justify-center py-12">
                <p className="text-lg font-medium text-gray-900">No destinations found</p>
                <p className="text-gray-600">Try adjusting your filters or search criteria</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExplorePage;