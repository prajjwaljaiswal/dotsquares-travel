import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import Explore from './pages/Explore.jsx';
import NotFound from './pages/NotFound.jsx';
import Itinerary from './components/Itinerary/Itinerary';
import { itineraryData } from './data/itineraryData';

function PackageDetail() {
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

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
      <Route path="/package-detail" element={<PackageDetail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;