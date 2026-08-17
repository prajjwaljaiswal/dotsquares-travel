import { useNavigate } from 'react-router-dom';
import type { TravelPackage } from '../../types/package';
import './PackageCard.css';

interface PackageCardProps {
  pkg: TravelPackage;
}

function PackageCard({ pkg }: PackageCardProps) {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/packages/${pkg.id}`);
  };

  const handleBookNow = () => {
    navigate(`/booking/${pkg.id}`);
  };

  return (
    <div className="package-card" data-testid="package-card">
      <div className="package-card__image-wrapper">
        <img className="package-card__image" src={pkg.image} alt={pkg.title} />
        {pkg.trending && <span className="package-card__badge package-card__badge--trending">Trending</span>}
        {pkg.featured && <span className="package-card__badge package-card__badge--featured">Featured</span>}
      </div>
      <div className="package-card__body">
        <h3 className="package-card__title">{pkg.title}</h3>
        <p className="package-card__location">{pkg.location}</p>
        <div className="package-card__meta">
          <span className="package-card__duration">{pkg.duration}</span>
          <span className="package-card__rating" aria-label={`Rating ${pkg.rating} out of 5`}>
            ★ {pkg.rating.toFixed(1)}
          </span>
        </div>
        <div className="package-card__footer">
          <span className="package-card__price">
            {pkg.currency} {pkg.price.toLocaleString()}
          </span>
          <div className="package-card__actions">
            <button
              type="button"
              className="package-card__button package-card__button--secondary"
              onClick={handleViewDetails}
            >
              View Details
            </button>
            <button
              type="button"
              className="package-card__button package-card__button--primary"
              onClick={handleBookNow}
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageCard;
