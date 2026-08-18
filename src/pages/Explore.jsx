import { Link } from 'react-router-dom';

function Explore() {
  const destinations = [
    'Bali, Indonesia',
    'Santorini, Greece',
    'Kyoto, Japan',
    'Cape Town, South Africa',
    'Banff, Canada',
  ];

  return (
    <main className="page page--explore">
      <h1>Explore Destinations</h1>
      <p>Browse some of our most loved travel destinations.</p>
      <ul className="destination-list">
        {destinations.map((destination) => (
          <li key={destination} className="destination-list__item">
            {destination}
          </li>
        ))}
      </ul>
      <Link to="/" className="btn btn--secondary">
        Back to Homepage
      </Link>
    </main>
  );
}

export default Explore;
