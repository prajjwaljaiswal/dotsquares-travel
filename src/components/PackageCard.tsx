import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import StarRating from './common/StarRating/StarRating';
import { TravelPackage } from '../types/package';
import './PackageCard.css';

interface PackageCardProps {
  pkg: TravelPackage;
}

const PackageCard: FC<PackageCardProps> = ({ pkg }) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/packages/${pkg.id}`);
  };

  const handleBookNow = () => {
    navigate(`/booking/${pkg.id}`, { state: { packageId: pkg.id } });
  };

  return (
    <div className="package-card" data-testid="package-card">
      <img src={pkg.image} alt={pkg.title} className="package-card__image" />
      <div className="package-card__content">
        <h3 className="package-card__title">{pkg.title}</h3>
        <p className="package-card__duration">{pkg.duration}</p>
        <StarRating rating={pkg.rating} />
        <p className="package-card__price">${pkg.price.toLocaleString()}</p>
        <div className="package-card__actions">
          <button
            type="button"
            className="package-card__view-details-btn"
            onClick={handleViewDetails}
          >
            View Details
          </button>
          <button
            type="button"
            className="package-card__book-now-btn"
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
