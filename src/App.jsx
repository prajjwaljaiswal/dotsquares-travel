import React from 'react';
import Itinerary from './components/Itinerary/Itinerary';
import { itineraryData } from './data/itineraryData';

function App() {
  return (
    <main className="package-detail-page">
      <section aria-label="Travel package detail">
        <h1>7-Day Bali Explorer Package</h1>
        <p>A curated demo travel package showcasing the day-by-day itinerary.</p>
        <Itinerary days={itineraryData} />
      </section>
    </main>
  );
}

export default App;
