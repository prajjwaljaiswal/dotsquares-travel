import { useCallback, useMemo, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar';
import { destinations } from '../data/destinations';
import './ExplorePage.css';

function ExplorePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [activeQuery, setActiveQuery] = useState(initialQuery);

  const updateUrlQuery = useCallback(
    (nextQuery) => {
      setSearchParams((previousParams) => {
        const params = new URLSearchParams(previousParams);

        if (nextQuery) {
          params.set('q', nextQuery);
        } else {
          params.delete('q');
        }

        return params;
      });
    },
    [setSearchParams]
  );

  const handleQueryChange = useCallback(
    (nextQuery) => {
      setActiveQuery(nextQuery);
      updateUrlQuery(nextQuery);
    },
    [updateUrlQuery]
  );

  const handleSelectSuggestion = useCallback(
    (suggestion) => {
      setActiveQuery(suggestion.name);
      updateUrlQuery(suggestion.name);
    },
    [updateUrlQuery]
  );

  const filteredDestinations = useMemo(() => {
    const trimmed = activeQuery.trim().toLowerCase();

    if (!trimmed) {
      return destinations;
    }

    return destinations.filter((destination) =>
      destination.name.toLowerCase().includes(trimmed)
    );
  }, [activeQuery]);

  return (
    <div className="explore-page">
      <div className="explore-page__container">
        <header className="explore-page__header">
          <h1 className="explore-page__title">Explore Destinations &amp; Packages</h1>
          <SearchBar
            initialValue={initialQuery}
            suggestionsSource={destinations}
            onQueryChange={handleQueryChange}
            onSelectSuggestion={handleSelectSuggestion}
          />
        </header>
        <section className="explore-page__results">
          <ul className="explore-page__card-list">
            {filteredDestinations.map((destination) => (
              <li key={destination.id} className="explore-page__card">
                <h2 className="explore-page__card-name">{destination.name}</h2>
                <p className="explore-page__card-location">{destination.location}</p>
                <p className="explore-page__card-type">{destination.type}</p>
                <p className="explore-page__card-price">{`$${destination.price}`}</p>
              </li>
            ))}
          </ul>
          {filteredDestinations.length === 0 && (
            <p className="explore-page__no-results">No destinations match your search.</p>
          )}
        </section>
      </div>
    </div>
  );
}

export default ExplorePage;
