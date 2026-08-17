import type { TravelPackage } from '../../types/package';
import { PackageGallery } from '../PackageGallery/PackageGallery';
import { AvailabilityBadge } from '../AvailabilityBadge/AvailabilityBadge';
import { RatingStars } from '../RatingStars/RatingStars';
import styles from './PackageHero.module.css';

interface PackageHeroProps {
  pkg: TravelPackage;
}

export function PackageHero({ pkg }: PackageHeroProps) {
  return (
    <section className={styles.hero} data-testid="package-hero">
      <div className={styles.galleryColumn}>
        <PackageGallery images={pkg.images} />
      </div>

      <div className={styles.infoColumn}>
        <AvailabilityBadge status={pkg.availability} availableSpots={pkg.availableSpots} />

        <h1 className={styles.title}>{pkg.title}</h1>
        <p className={styles.shortOverview}>{pkg.shortOverview}</p>

        <div className={styles.metaRow}>
          <RatingStars rating={pkg.rating} reviewCount={pkg.reviewCount} />
          <span className={styles.duration} data-testid="package-duration">
            {pkg.durationDays} {pkg.durationDays === 1 ? 'day' : 'days'}
          </span>
        </div>

        <div className={styles.priceRow} data-testid="package-price">
          <span className={styles.price}>
            {pkg.currency} {pkg.price.toLocaleString()}
          </span>
          <span className={styles.priceUnit}>per person</span>
        </div>
      </div>
    </section>
  );
}
