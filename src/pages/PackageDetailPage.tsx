import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { packages } from '../data/packages';

const PackageDetailPage: React.FC = () => {
  const { packageId } = useParams<{ packageId: string }>();
  const navigate = useNavigate();
  const pkg = packages.find((item) => item.id === packageId);

  if (!pkg) {
    return (
      <main className="page-container" data-testid="package-detail-not-found">
        <h2>Package not found</h2>
        <button type="button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </main>
    );
  }

  const handleBookNow = (): void => {
    navigate(`/booking?packageId=${pkg.id}`);
  };

  return (
    <main className="page-container" data-testid="package-detail-page">
      <img src={pkg.image} alt={pkg.title} style={{ width: '100%', maxHeight: 360, objectFit: 'cover', borderRadius: 12 }} />
      <h1>{pkg.title}</h1>
      <p>{pkg.description}</p>
      <p>Duration: {pkg.duration}</p>
      <p>Rating: {pkg.rating.toFixed(1)}</p>
      <p>Price: ${pkg.price.toLocaleString()} / person</p>
      <button type="button" onClick={handleBookNow}>
        Book Now
      </button>
    </main>
  );
};

export default PackageDetailPage;
