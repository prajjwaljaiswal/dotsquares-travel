import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const PACKAGE_TYPES = [
  { value: 'any', label: 'Any Package' },
  { value: 'flight', label: 'Flight Only' },
  { value: 'flight+hotel', label: 'Flight + Hotel' },
  { value: 'all-inclusive', label: 'All Inclusive' },
  { value: 'cruise', label: 'Cruise' }
];

function SearchWidget() {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [travellers, setTravellers] = useState(1);
  const [packageType, setPackageType] = useState('any');

  const handleSubmit = (event) => {
    event.preventDefault();

    const params = new URLSearchParams();
    if (destination) params.set('destination', destination);
    if (startDate) params.set('startDate', startDate);
    if (endDate) params.set('endDate', endDate);
    params.set('travellers', String(travellers));
    params.set('packageType', packageType);

    navigate(`/explore?${params.toString()}`);
  };

  return (
    <form
      className="search-widget"
      data-testid="search-widget"
      onSubmit={handleSubmit}
    >
      <div className="search-field">
        <label htmlFor="destination">Destination</label>
        <input
          id="destination"
          type="text"
          placeholder="Where do you want to go?"
          value={destination}
          onChange={(event) => setDestination(event.target.value)}
        />
      </div>

      <div className="search-field">
        <label htmlFor="startDate">Check-in</label>
        <input
          id="startDate"
          type="date"
          value={startDate}
          onChange={(event) => setStartDate(event.target.value)}
        />
      </div>

      <div className="search-field">
        <label htmlFor="endDate">Check-out</label>
        <input
          id="endDate"
          type="date"
          value={endDate}
          onChange={(event) => setEndDate(event.target.value)}
        />
      </div>

      <div className="search-field">
        <label htmlFor="travellers">Travellers</label>
        <input
          id="travellers"
          type="number"
          min="1"
          max="20"
          value={travellers}
          onChange={(event) => setTravellers(Number(event.target.value))}
        />
      </div>

      <div className="search-field">
        <label htmlFor="packageType">Package Type</label>
        <select
          id="packageType"
          value={packageType}
          onChange={(event) => setPackageType(event.target.value)}
        >
          {PACKAGE_TYPES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <button type="submit" className="search-submit">
        Search
      </button>
    </form>
  );
}

export default SearchWidget;
