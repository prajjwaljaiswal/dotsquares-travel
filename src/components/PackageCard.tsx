import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TravelPackage } from '../types/package';
import './PackageCard.css';

interface PackageCardProps {
  pkg: TravelPackage;
}

const PackageCard: React.FC<PackageCardProps> = ({ pkg }) => {
  const navigate = useNavigate();

  const handleViewDetails = (): void => {
    navigate(`/packages/${pkg.id}`);
  };

  const handleBookNow = (): void => {
    navigate(`/booking?packageId=${pkg.id}`);
  };

  return (
    <div className="package-card" data-testid={`package-card-${pkg.id}`}>
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
        <div className="package-card__meta">
          <span className="package-card__duration" data-testid="package-card-duration">
            {pkg.duration}
          </span>
          <span className="package-card__rating" data-testid="package-card-rating">
            ★ {pkg.rating.toFixed(1)}
          </span>
        </div>
        <div className="package-card__price" data-testid="package-card-price">
          <span className="package-card__price-amount">${pkg.price.toLocaleString()}</span>
          <span className="package-card__price-label"> / person</span>
        </div>
        <div className="package-card__actions">
          <button
            type="button"
            className="package-card__btn package-card__btn--secondary"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button
            type="button"
            className="package-card__btn package-card__btn--primary"
            onClick={handleBookNow}
          >
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
