import { useCallback, useEffect, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { demoPlaces } from '../data/demoPlaces';
import './ExplorePage.css';

export default function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');

  useEffect(() => {
    const paramQuery = searchParams.get('q') || '';
    setQuery(paramQuery);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateUrl = useCallback(
    (nextQuery) => {
      setSearchParams(
        (prev) => {
          const params = new URLSearchParams(prev);
          if (nextQuery) {
            params.set('q', nextQuery);
          } else {
            params.delete('q');
          }
          return params;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

  const handleDebouncedChange = useCallback(
    (nextQuery) => {
      setQuery(nextQuery);
      updateUrl(nextQuery);
    },
    [updateUrl]
  );

  const handleSelectSuggestion = useCallback(
    (item) => {
      setQuery(item.name);
      updateUrl(item.name);
    },
    [updateUrl]
  );

  const filteredPlaces = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return demoPlaces;
    return demoPlaces.filter((place) => place.name.toLowerCase().includes(trimmed));
  }, [query]);

  return (
    <div className="explore-page">
      <header className="explore-page__header">
        <h1>Explore Places</h1>
        <p>Search demo destinations and packages below.</p>
        <SearchBar
          value={query}
          allItems={demoPlaces}
          onDebouncedChange={handleDebouncedChange}
          onSelect={handleSelectSuggestion}
        />
      </header>

      <section className="explore-page__results" aria-live="polite">
        {filteredPlaces.length === 0 ? (
          <p className="explore-page__empty">No matches found for "{query}".</p>
        ) : (
          <ul className="explore-page__grid">
            {filteredPlaces.map((place) => (
              <li key={place.id} className="explore-page__card">
                <h3>{place.name}</h3>
                <p className="explore-page__card-location">{place.location}</p>
                <p className="explore-page__card-type">{place.type}</p>
                <p className="explore-page__card-price">${place.price}</p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}
