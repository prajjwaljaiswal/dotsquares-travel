import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { destinations, getAllPackages } from '../data/destinations/index';
import './PackagesPage.css';
import './DestinationDetailPage.css';

function formatPrice(price, currency) {
  return new Intl.NumberFormat('en-IN', { style: 'currency', currency, maximumFractionDigits: 0 }).format(price);
}

function findDestinationForPackage(pkg) {
  return destinations.find((destination) => destination.id === pkg.destinationId);
}

export default function PackagesPage() {
  const [query, setQuery] = useState('');
  const allPackages = useMemo(() => getAllPackages(), []);

  const filteredPackages = useMemo(() => {
    const trimmed = query.trim().toLowerCase();
    if (!trimmed) return allPackages;
    return allPackages.filter((pkg) => {
      const destination = findDestinationForPackage(pkg);
      return (
        pkg.name.toLowerCase().includes(trimmed) ||
        pkg.summary.toLowerCase().includes(trimmed) ||
        destination?.name.toLowerCase().includes(trimmed)
      );
    });
  }, [allPackages, query]);

  return (
    <div className="packages-page">
      <div className="packages-page__container">
        <h1>All Travel Packages</h1>
        <input
          type="search"
          className="packages-page__search-input"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Search packages by name or destination..."
          aria-label="Search packages"
        />

        <p className="packages-page__count">
          {filteredPackages.length} package{filteredPackages.length !== 1 ? 's' : ''}
        </p>

        <div className="packages-page__grid">
          {filteredPackages.map((pkg) => {
            const destination = findDestinationForPackage(pkg);
            return (
              <Link
                key={pkg.id}
                to={`/destinations/${destination?.slug}/packages/${pkg.slug}`}
                className="package-card"
              >
                <img src={pkg.heroImageUrl} alt={pkg.name} className="package-card__image" loading="lazy" />
                <div className="package-card__body">
                  <p className="package-card__destination">{destination?.name}</p>
                  <h3 className="package-card__title">{pkg.name}</h3>
                  <p className="package-card__summary">{pkg.summary}</p>
                  <div className="package-card__meta">
                    <span>{pkg.durationDays}D / {pkg.durationNights}N</span>
                    <span className="package-card__price">{formatPrice(pkg.price, pkg.currency)}</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
