import React from 'react';
import { Link } from 'react-router-dom';
import StarRating from '../common/StarRating/StarRating';
import { TravelPackage } from '../../types/travelPackage';
import './PackageCard.css';

interface PackageCardProps {
  pkg: TravelPackage;
}

const formatPrice = (price: number, currency: string): string =>
  new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
    maximumFractionDigits: 0,
  }).format(price);

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  return (
    <article className="package-card" data-testid="package-card">
      <div className="package-card__image-wrapper">
        <img className="package-card__image" src={pkg.image} alt={pkg.title} />
        {pkg.trending && (
          <span className="package-card__badge package-card__badge--trending">Trending</span>
        )}
        {pkg.featured && (
          <span className="package-card__badge package-card__badge--featured">Featured</span>
        )}
      </div>
      <div className="package-card__body">
        <h3 className="package-card__title">{pkg.title}</h3>
        <p className="package-card__location">{pkg.location}</p>
        <p className="package-card__duration">{pkg.duration}</p>
        <StarRating rating={pkg.rating} />
        <p className="package-card__price">
          {formatPrice(pkg.price, pkg.currency)}
          <span className="package-card__price-suffix"> / person</span>
        </p>
      </div>
      <div className="package-card__actions">
        <Link
          to={`/packages/${pkg.id}`}
          className="package-card__button package-card__button--secondary"
          data-testid="view-details-link"
        >
          View Details
        </Link>
        <Link
          to={`/booking?packageId=${pkg.id}`}
          className="package-card__button package-card__button--primary"
          data-testid="book-now-link"
        >
          Book Now
        </Link>
      </div>
    </article>
  );
};

export default PackageCard;
