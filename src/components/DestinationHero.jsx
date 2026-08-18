import React from 'react';
import './DestinationHero.css';

function DestinationHero({ name, tagline, heroImage }) {
  return (
    <section
      className="destination-hero"
      data-testid="destination-hero"
      style={{ backgroundImage: `url(${heroImage})` }}
    >
      <div className="destination-hero__overlay">
        <h1 className="destination-hero__title">{name}</h1>
        {tagline && <p className="destination-hero__tagline">{tagline}</p>}
      </div>
    </section>
  );
}

export default DestinationHero;
