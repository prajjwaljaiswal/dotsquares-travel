import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { destinations } from '../data/destinations/index';
import './HomePage.css';

function HomePage() {
  const navigate = useNavigate();
  const [query, setQuery] = useState('');

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/explore${query.trim() ? `?q=${encodeURIComponent(query.trim())}` : ''}`);
  };

  const popularDestinations = destinations.slice(0, 6);

  return (
    <div className="home-page">
      <section
        className="home-hero"
        style={{ backgroundImage: `url(${destinations[0]?.heroImageUrl})` }}
      >
        <div className="home-hero__overlay">
          <h1>Discover Your Next Adventure</h1>
          <p>Explore handpicked destinations and travel packages around the world.</p>
          <form className="home-hero__search" onSubmit={handleSearch} role="search">
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search destinations, e.g. Bali, Paris..."
              aria-label="Search destinations"
            />
            <button type="submit">Search</button>
          </form>
        </div>
      </section>

      <section className="home-section" aria-labelledby="popular-destinations-heading">
        <div className="home-section__header">
          <h2 id="popular-destinations-heading">Popular Destinations</h2>
          <Link to="/explore" className="home-section__view-all">View all &rarr;</Link>
        </div>
        <div className="destination-grid">
          {popularDestinations.map((destination) => (
            <Link
              key={destination.id}
              to={`/destinations/${destination.slug}`}
              className="destination-card"
            >
              <img src={destination.heroImageUrl} alt={destination.name} loading="lazy" />
              <div className="destination-card__body">
                <h3>{destination.name}</h3>
                <p>{destination.country}</p>
                <p className="destination-card__tagline">{destination.tagline}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section" aria-labelledby="explore-packages-heading">
        <div className="home-section__header">
          <h2 id="explore-packages-heading">Ready to book a trip?</h2>
        </div>
        <p className="home-section__cta-text">
          Browse our full range of curated travel packages, complete with itineraries, pricing and traveller reviews.
        </p>
        <Link to="/packages" className="home-section__cta-button">Browse All Packages</Link>
      </section>
    </div>
  );
}

export default HomePage;
