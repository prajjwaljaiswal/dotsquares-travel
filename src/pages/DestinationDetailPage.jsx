import React from 'react';
import { Link, useParams } from 'react-router-dom';
import DestinationHero from '../components/DestinationHero';
import { getDestinationBySlug } from '../data/destinations/index';
import './DestinationDetailPage.css';

function formatPrice(price, currency) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
}

function DestinationDetailPage() {
  const { slug } = useParams();
  const destination = getDestinationBySlug(slug);

  if (!destination) {
    return (
      <div className="destination-detail destination-detail--not-found">
        <h1>Destination not found</h1>
        <p>We could not find details for &ldquo;{slug}&rdquo;.</p>
        <Link to="/explore">Browse all destinations</Link>
      </div>
    );
  }

  const { name, tagline, heroImageUrl, description, bestTimeToVisit, images, packages } = destination;

  return (
    <div className="destination-detail">
      <DestinationHero name={name} tagline={tagline} heroImage={heroImageUrl} />

      <section className="destination-overview" aria-labelledby="destination-overview-heading">
        <h2 id="destination-overview-heading">Overview</h2>
        <p className="destination-overview__text">{description}</p>
        {bestTimeToVisit && (
          <p className="destination-overview__meta">
            <strong>Best time to visit:</strong> {bestTimeToVisit}
          </p>
        )}
      </section>

      {images && images.length > 0 && (
        <section className="destination-gallery" aria-label={`Photos of ${name}`}>
          {images.map((src) => (
            <img key={src} src={src} alt={name} loading="lazy" />
          ))}
        </section>
      )}

      {packages && packages.length > 0 && (
        <section className="destination-packages" aria-labelledby="destination-packages-heading">
          <h2 id="destination-packages-heading">Travel Packages</h2>
          <div className="destination-packages__grid">
            {packages.map((pkg) => (
              <Link
                key={pkg.id}
                to={`/destinations/${slug}/packages/${pkg.slug}`}
                className="package-card"
              >
                <img src={pkg.heroImageUrl} alt={pkg.name} className="package-card__image" loading="lazy" />
                <div className="package-card__body">
                  <h3 className="package-card__title">{pkg.name}</h3>
                  <p className="package-card__summary">{pkg.summary}</p>
                  <div className="package-card__meta">
                    <span>{pkg.durationDays}D / {pkg.durationNights}N</span>
                    <span className="package-card__price">{formatPrice(pkg.price, pkg.currency)}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}

export default DestinationDetailPage;
