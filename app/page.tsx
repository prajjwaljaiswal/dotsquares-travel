'use client';

import { useSearchContext } from '@/context/SearchContext';
import { useBookingContext } from '@/context/BookingContext';

export default function HomePage() {
  const { query, setQuery } = useSearchContext();
  const { selectedPackage } = useBookingContext();

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Dotsquares Travel</h1>
      <p>Search and book your next adventure.</p>
      <input
        type="text"
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        placeholder="Search destinations..."
      />
      {selectedPackage ? <p>Selected package: {selectedPackage.name}</p> : null}
    </main>
  );
}
