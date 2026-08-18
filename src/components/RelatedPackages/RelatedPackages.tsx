import React from 'react';
import { TravelPackage } from '../../data/packages';
import PackageCard from '../PackageCard/PackageCard';
import styles from './RelatedPackages.module.css';

export interface RelatedPackagesProps {
  packages: TravelPackage[];
  title?: string;
}

const RelatedPackages: React.FC<RelatedPackagesProps> = ({
  packages,
  title = 'You may also like'
}) => {
  if (!packages || packages.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} aria-label="Related packages">
      <h2 className={styles.heading}>{title}</h2>
      <div className={styles.carousel} data-testid="related-packages-carousel">
        {packages.map((pkg) => (
          <PackageCard key={pkg.id} travelPackage={pkg} />
        ))}
      </div>
    </section>
  );
};

export default RelatedPackages;
