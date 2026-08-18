import { useEffect, useRef, useState } from 'react';
import './SearchBar.css';

const DEBOUNCE_DELAY = 300;

function SearchBar({ initialValue = '', suggestionsSource = [], onQueryChange, onSelectSuggestion }) {
  const [inputValue, setInputValue] = useState(initialValue);
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const debounceRef = useRef(null);

  useEffect(() => {
    if (debounceRef.current) {
      clearTimeout(debounceRef.current);
    }

    debounceRef.current = setTimeout(() => {
      const trimmed = inputValue.trim().toLowerCase();

      if (onQueryChange) {
        onQueryChange(inputValue);
      }

      if (!trimmed) {
        setSuggestions([]);
        setIsOpen(false);
        return;
      }

      const matches = suggestionsSource.filter((item) =>
        item.name.toLowerCase().includes(trimmed)
      );

      setSuggestions(matches);
      setIsOpen(matches.length > 0);
    }, DEBOUNCE_DELAY);

    return () => {
      if (debounceRef.current) {
        clearTimeout(debounceRef.current);
      }
    };
  }, [inputValue, suggestionsSource, onQueryChange]);

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSelect = (suggestion) => {
    setInputValue(suggestion.name);
    setSuggestions([]);
    setIsOpen(false);

    if (onSelectSuggestion) {
      onSelectSuggestion(suggestion);
    }
  };

  const handleFocus = () => {
    if (suggestions.length > 0) {
      setIsOpen(true);
    }
  };

  const handleBlur = () => {
    setIsOpen(false);
  };

  return (
    <div className="search-bar">
      <input
        type="search"
        className="search-bar__input"
        placeholder="Search destinations or packages..."
        value={inputValue}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        aria-autocomplete="list"
        aria-expanded={isOpen}
      />
      {isOpen && suggestions.length > 0 && (
        <ul className="search-bar__suggestions" role="listbox">
          {suggestions.map((suggestion) => (
            <li
              key={suggestion.id}
              role="option"
              aria-selected="false"
              aria-label={`${suggestion.name}, ${suggestion.location}`}
              className="search-bar__suggestion"
              onMouseDown={() => handleSelect(suggestion)}
            >
              <span className="search-bar__suggestion-name">{suggestion.name}</span>
              <span className="search-bar__suggestion-location">{suggestion.location}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
