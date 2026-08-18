import React from 'react';
import { useParams } from 'react-router-dom';
import DestinationHero from '../components/DestinationHero';
import { getDestinationBySlug } from '../data/destinationsData';
import './DestinationDetailPage.css';

function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="destination-detail destination-detail--not-found">
        <h1>Destination not found</h1>
        <p>We could not find details for &ldquo;{slug}&rdquo;.</p>
      </div>
    );
  }

  const { name, tagline, heroImage, overview, highlights } = destination;

  return (
    <div className="destination-detail">
      <DestinationHero name={name} tagline={tagline} heroImage={heroImage} />

      <section
        className="destination-overview"
        aria-labelledby="destination-overview-heading"
      >
        <h2 id="destination-overview-heading">Overview</h2>
        <p className="destination-overview__text">{overview}</p>

        {highlights && highlights.length > 0 && (
          <div className="destination-highlights">
            <h3>Highlights</h3>
            <ul className="destination-highlights__list">
              {highlights.map((highlight) => (
                <li key={highlight} className="destination-highlights__item">
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
}

export default DestinationDetailPage;
