import { useNavigate, useParams, Link } from 'react-router-dom';
import { getPackageById } from '../data/packages';
import './PackageDetail.css';

function PackageDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const pkg = id ? getPackageById(id) : undefined;

  if (!pkg) {
    return (
      <main className="package-detail-page">
        <p>Package not found.</p>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  const handleBookNow = () => {
    navigate(`/booking/${pkg.id}`);
  };

  return (
    <main className="package-detail-page">
      <Link className="package-detail-page__back" to="/">
        &larr; Back to packages
      </Link>
      <div className="package-detail-page__content">
        <img className="package-detail-page__image" src={pkg.image} alt={pkg.title} />
        <div className="package-detail-page__info">
          <h1>{pkg.title}</h1>
          <p className="package-detail-page__location">{pkg.location}</p>
          <div className="package-detail-page__meta">
            <span>{pkg.duration}</span>
            <span>★ {pkg.rating.toFixed(1)}</span>
            <span>
              {pkg.currency} {pkg.price.toLocaleString()}
            </span>
          </div>
          <p className="package-detail-page__description">{pkg.description}</p>
          <button type="button" className="package-detail-page__book-btn" onClick={handleBookNow}>
            Book Now
          </button>
        </div>
      </div>
    </main>
  );
}

export default PackageDetail;
