import { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { demoPlaces } from '../data/demoPlaces';
import './ExplorePage.css';

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

  const handleSelect = (place) => {
    handleQueryChange(place.name);
  };

  const filteredPlaces = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) {
      return demoPlaces;
    }

    return demoPlaces.filter(
      (place) =>
        place.name.toLowerCase().includes(trimmed) ||
        place.location.toLowerCase().includes(trimmed)
    );
  }, [query]);

  return (
    <div className="explore-page">
      <div className="explore-page__container">
        <h1 className="explore-page__title">Explore Places</h1>
        <SearchBar
          places={demoPlaces}
          initialQuery={query}
          onQueryChange={handleQueryChange}
          onSelect={handleSelect}
        />
        <section className="explore-page__results">
          <h2 className="explore-page__results-title">
            {filteredPlaces.length} result{filteredPlaces.length !== 1 ? 's' : ''}
          </h2>
          {filteredPlaces.length === 0 ? (
            <p className="explore-page__empty">No places match your search.</p>
          ) : (
            <ul className="explore-page__card-list">
              {filteredPlaces.map((place) => (
                <li key={place.id} className="explore-page__card">
                  <h3 className="explore-page__card-name">{place.name}</h3>
                  <p className="explore-page__card-location">{place.location}</p>
                  <p className="explore-page__card-type">{place.type}</p>
                  <p className="explore-page__card-price">
                    {place.price > 0 ? `$${place.price}` : 'Free'}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}