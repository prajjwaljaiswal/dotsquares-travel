import { useState, useEffect, useRef } from 'react';
import './SearchBar.css';

function computeSuggestions(places, value) {
  const trimmed = value.trim().toLowerCase();
  if (!trimmed) {
    return [];
  }

  return places
    .filter(
      (place) =>
        place.name.toLowerCase().includes(trimmed) ||
        place.location.toLowerCase().includes(trimmed)
    )
    .slice(0, 6);
}

export default function SearchBar({
  places,
  initialQuery = '',
  onQueryChange,
  onSelect,
  placeholder = 'Search destinations or packages...',
  debounceMs = 300,
}) {
  const [inputValue, setInputValue] = useState(initialQuery);
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    setInputValue(initialQuery);
  }, [initialQuery]);

  useEffect(() => {
    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, []);

  const handleChange = (event) => {
    const value = event.target.value;
    setInputValue(value);

    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const matches = computeSuggestions(places, value);
      setSuggestions(matches);
      setShowSuggestions(matches.length > 0);

      if (onQueryChange) {
        onQueryChange(value);
      }
    }, debounceMs);
  };

  const handleSelect = (place) => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    setInputValue(place.name);
    setSuggestions([]);
    setShowSuggestions(false);

    if (onSelect) {
      onSelect(place);
    }

    if (onQueryChange) {
      onQueryChange(place.name);
    }
  };

  const handleFocus = () => {
    if (suggestions.length > 0) {
      setShowSuggestions(true);
    }
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        role="combobox"
        className="search-bar__input"
        aria-expanded={showSuggestions}
        aria-autocomplete="list"
        aria-controls="search-bar-suggestions"
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholder={placeholder}
      />
      {showSuggestions && suggestions.length > 0 && (
        <ul
          id="search-bar-suggestions"
          role="listbox"
          className="search-bar__suggestions"
        >
          {suggestions.map((place) => (
            <li
              key={place.id}
              role="option"
              aria-selected="false"
              className="search-bar__suggestion"
              onMouseDown={() => handleSelect(place)}
            >
              <span className="search-bar__suggestion-name">{place.name}</span>
              <span className="search-bar__suggestion-location">
                {place.location}
              </span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
