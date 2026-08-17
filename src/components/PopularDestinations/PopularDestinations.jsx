import destinations from '../../data/destinations.js';
import DestinationCard from '../DestinationCard/DestinationCard.jsx';
import './PopularDestinations.css';

function PopularDestinations() {
  return (
    <section className="popular-destinations" aria-label="Popular destinations">
      <div className="popular-destinations__header">
        <h2 className="popular-destinations__title">Popular Destinations</h2>
        <p className="popular-destinations__subtitle">
          Discover the world's most loved travel spots, hand-picked for you.
        </p>
      </div>
      <div className="popular-destinations__list" data-testid="popular-destinations-list">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </section>
  );
}

export default PopularDestinations;
