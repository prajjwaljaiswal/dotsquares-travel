import { useState, useEffect, useMemo } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { destinations } from '../data/destinations/index';
import './ExplorePage.css';
import './HomePage.css';

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
  }, [searchParams]);

  const handleQueryChange = (value) => {
    setQuery(value);

    const params = new URLSearchParams(searchParams);
    if (value.trim()) {
      params.set('q', value);
    } else {
      params.delete('q');
    }
    setSearchParams(params);
  };

  const filteredDestinations = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return destinations;
    }

    return destinations.filter(
      (destination) =>
        destination.name.toLowerCase().includes(trimmed) ||
        destination.country.toLowerCase().includes(trimmed) ||
        destination.tagline.toLowerCase().includes(trimmed)
    );
  }, [query]);

  return (
    <div className="explore-page">
      <div className="explore-page__container">
        <h1 className="explore-page__title">Explore Destinations</h1>
        <input
          type="search"
          className="explore-page__search-input"
          value={query}
          onChange={(event) => handleQueryChange(event.target.value)}
          placeholder="Search by destination or country..."
          aria-label="Search destinations"
        />
        <section className="explore-page__results">
          <h2 className="explore-page__results-title">
            {filteredDestinations.length} result{filteredDestinations.length !== 1 ? 's' : ''}
          </h2>
          {filteredDestinations.length === 0 ? (
            <p className="explore-page__empty">No destinations match your search.</p>
          ) : (
            <div className="destination-grid">
              {filteredDestinations.map((destination) => (
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
          )}
        </section>
      </div>
    </div>
  );
}
