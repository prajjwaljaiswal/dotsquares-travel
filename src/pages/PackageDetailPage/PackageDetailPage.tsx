import React from 'react';
import { useParams } from 'react-router-dom';
import { packages } from '../../data/packages';
import { getRelatedPackages } from '../../utils/getRelatedPackages';
import Reviews from '../../components/Reviews/Reviews';
import RelatedPackages from '../../components/RelatedPackages/RelatedPackages';
import styles from './PackageDetailPage.module.css';

const PackageDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const travelPackage = packages.find((pkg) => pkg.id === id);

  if (!travelPackage) {
    return (
      <div className={styles.notFound} data-testid="package-not-found">
        <h1>Package not found</h1>
        <p>The travel package you are looking for does not exist.</p>
      </div>
    );
  }

  const relatedPackages = getRelatedPackages(travelPackage, packages, {
    minResults: 3
  });

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <img
          src={travelPackage.imageUrl}
          alt={travelPackage.title}
          className={styles.heroImage}
        />
        <div className={styles.headerInfo}>
          <h1 className={styles.title}>{travelPackage.title}</h1>
          <p className={styles.destination}>{travelPackage.destination}</p>
          <p className={styles.description}>{travelPackage.description}</p>
          <div className={styles.priceRow}>
            <span className={styles.price}>
              {travelPackage.currency} {travelPackage.price}
            </span>
            <span className={styles.rating}>★ {travelPackage.rating.toFixed(1)}</span>
          </div>
        </div>
      </header>

      <Reviews
        reviews={travelPackage.reviews}
        averageRating={travelPackage.rating}
      />

      <RelatedPackages packages={relatedPackages} />
    </div>
  );
};

export default PackageDetailPage;
