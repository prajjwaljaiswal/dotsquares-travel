import SearchWidget from './SearchWidget.jsx';

function HeroBanner() {
  return (
    <section className="hero-banner" data-testid="hero-banner">
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="hero-brand">DotSquares Travel</p>
        <h1 className="hero-title">Discover Your Next Great Escape</h1>
        <p className="hero-subtitle">
          Handpicked destinations, unbeatable packages, and unforgettable
          journeys — all in one place.
        </p>
        <SearchWidget />
      </div>
    </section>
  );
}

export default HeroBanner;
