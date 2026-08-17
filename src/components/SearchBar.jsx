import { useEffect, useRef, useState } from 'react';
import { useDebounce } from '../hooks/useDebounce';
import './SearchBar.css';

export default function SearchBar({
  value,
  allItems,
  onDebouncedChange,
  onSelect,
  placeholder = 'Search destinations or packages...',
}) {
  const [inputValue, setInputValue] = useState(value || '');
  const [suggestions, setSuggestions] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const containerRef = useRef(null);

  const debouncedValue = useDebounce(inputValue, 300);

  useEffect(() => {
    setInputValue(value || '');
  }, [value]);

  useEffect(() => {
    const trimmed = debouncedValue.trim();

    if (!trimmed) {
      setSuggestions([]);
      setIsOpen(false);
      onDebouncedChange('');
      return;
    }

    const matches = allItems
      .filter((item) => item.name.toLowerCase().includes(trimmed.toLowerCase()))
      .slice(0, 6);

    setSuggestions(matches);
    setIsOpen(matches.length > 0);
    setActiveIndex(-1);
    onDebouncedChange(trimmed);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debouncedValue, allItems]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  function handleChange(event) {
    setInputValue(event.target.value);
  }

  function handleSelect(item) {
    setInputValue(item.name);
    setSuggestions([]);
    setIsOpen(false);
    setActiveIndex(-1);
    onSelect(item);
  }

  function handleKeyDown(event) {
    if (!isOpen || suggestions.length === 0) return;

    if (event.key === 'ArrowDown') {
      event.preventDefault();
      setActiveIndex((prev) => (prev + 1) % suggestions.length);
    } else if (event.key === 'ArrowUp') {
      event.preventDefault();
      setActiveIndex((prev) => (prev - 1 + suggestions.length) % suggestions.length);
    } else if (event.key === 'Enter') {
      if (activeIndex >= 0 && activeIndex < suggestions.length) {
        event.preventDefault();
        handleSelect(suggestions[activeIndex]);
      }
    } else if (event.key === 'Escape') {
      setIsOpen(false);
    }
  }

  return (
    <div className="search-bar" ref={containerRef}>
      <input
        type="text"
        className="search-bar__input"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        onFocus={() => suggestions.length > 0 && setIsOpen(true)}
        placeholder={placeholder}
        aria-label="Search destinations or packages"
        aria-autocomplete="list"
        aria-expanded={isOpen}
        role="combobox"
      />
      {isOpen && (
        <ul className="search-bar__suggestions" role="listbox">
          {suggestions.map((item, index) => (
            <li
              key={item.id}
              role="option"
              aria-selected={index === activeIndex}
              className={`search-bar__suggestion ${
                index === activeIndex ? 'search-bar__suggestion--active' : ''
              }`}
              onMouseDown={() => handleSelect(item)}
            >
              <span className="search-bar__suggestion-name">{item.name}</span>
              <span className="search-bar__suggestion-location">{item.location}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
