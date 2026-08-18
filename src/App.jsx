import { Routes, Route } from 'react-router-dom';
import Header from './components/Header.jsx';
import Home from './pages/Home.jsx';
import ExplorePage from './pages/ExplorePage';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
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
    <>
      <Header />
      <main className="page-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/explore" element={<ExplorePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/package-detail" element={<PackageDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}

export default App;