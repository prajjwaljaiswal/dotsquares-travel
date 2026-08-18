'use client';

import { useSearchStore } from '@/store/search/search-provider';
import { useBookingStore } from '@/store/booking/booking-provider';

export default function HomePage() {
  const query = useSearchStore((state) => state.query);
  const setQuery = useSearchStore((state) => state.setQuery);
  const selectedPackage = useBookingStore((state) => state.selectedPackage);

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