import React from 'react';
import { Destination } from '../data/destinations';
import './DestinationHero.css';

interface DestinationHeroProps {
  destination: Destination;
}

function DestinationHero({ destination }: DestinationHeroProps) {
  return (
    <section className="destination-hero">
      <div
        className="destination-hero__image"
        style={{ backgroundImage: `url(${destination.heroImage})` }}
        role="img"
        aria-label={destination.name}
      >
        <div className="destination-hero__overlay">
          <h1 className="destination-hero__title">{destination.name}</h1>
          <p className="destination-hero__tagline">{destination.tagline}</p>
        </div>
      </div>

      <div className="destination-hero__overview">
        <h2 className="destination-hero__overview-heading">Overview</h2>
        <p className="destination-hero__overview-text">{destination.overview}</p>

        <h3 className="destination-hero__highlights-heading">Highlights</h3>
        <ul className="destination-hero__highlights-list">
          {destination.highlights.map((highlight) => (
            <li key={highlight} className="destination-hero__highlights-item">
              {highlight}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default DestinationHero;
