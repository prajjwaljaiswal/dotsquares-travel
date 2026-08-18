import React from 'react';
import { useParams } from 'react-router-dom';
import { BookNowButton } from '../components/BookNowButton';
import { TravelPackage } from '../state/BookingContext';

interface PackageDetailPageProps {
  packages?: TravelPackage[];
}

const defaultPackages: TravelPackage[] = [
  {
    id: 'pkg-bali-7d',
    name: 'Bali Escape',
    price: 1299,
    durationDays: 7,
    destination: 'Bali, Indonesia',
    imageUrl: '/images/bali.jpg',
  },
];

export function PackageDetailPage({ packages = defaultPackages }: PackageDetailPageProps) {
  const { packageId } = useParams<{ packageId: string }>();
  const travelPackage = packages.find((p) => p.id === packageId) ?? packages[0];

  if (!travelPackage) {
    return <div className="package-detail-page">Package not found.</div>;
  }

  return (
    <div className="package-detail-page">
      <header className="package-detail-page__header">
        <h1>{travelPackage.name}</h1>
        <p>{travelPackage.destination}</p>
      </header>

      <section className="package-detail-page__body">
        <p>Duration: {travelPackage.durationDays} days</p>
        <p>Price: ${travelPackage.price}</p>
      </section>

      <div className="package-detail-page__cta package-detail-page__cta--desktop">
        <BookNowButton travelPackage={travelPackage} sticky={false} />
      </div>

      <div className="package-detail-page__cta package-detail-page__cta--mobile">
        <BookNowButton travelPackage={travelPackage} sticky />
      </div>
    </div>
  );
}

export default PackageDetailPage;
