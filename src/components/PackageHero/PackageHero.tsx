import { PackageGallery } from '../PackageGallery/PackageGallery';
import type { PackageHeroProps } from './PackageHero.types';
import styles from './PackageHero.module.css';

const availabilityLabels: Record<PackageHeroProps['availability'], string> = {
  available: 'Available',
  limited: 'Limited Availability',
  'sold-out': 'Sold Out',
};

function formatPrice(price: number, currency: string): string {
  try {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency,
      maximumFractionDigits: 0,
    }).format(price);
  } catch {
    return `${currency} ${price}`;
  }
}

export function PackageHero({
  title,
  shortOverview,
  price,
  currency,
  durationDays,
  rating,
  reviewCount,
  availability,
  images,
  className,
}: PackageHeroProps) {
  return (
    <section
      className={className ? `${styles.hero} ${className}` : styles.hero}
      data-testid="package-hero"
    >
      <PackageGallery images={images} />

      <div className={styles.content}>
        <span
          className={`${styles.availabilityBadge} ${styles[availability]}`}
          data-testid="package-availability"
        >
          {availabilityLabels[availability]}
        </span>

        <h1 className={styles.title} data-testid="package-title">
          {title}
        </h1>

        <p className={styles.overview} data-testid="package-overview">
          {shortOverview}
        </p>

        <div className={styles.meta}>
          <div className={styles.metaItem} data-testid="package-price">
            <span className={styles.metaLabel}>Price</span>
            <span className={styles.metaValue}>{formatPrice(price, currency)}</span>
          </div>

          <div className={styles.metaItem} data-testid="package-duration">
            <span className={styles.metaLabel}>Duration</span>
            <span className={styles.metaValue}>
              {durationDays} {durationDays === 1 ? 'day' : 'days'}
            </span>
          </div>

          <div className={styles.metaItem} data-testid="package-rating">
            <span className={styles.metaLabel}>Rating</span>
            <span className={styles.metaValue}>
              {rating.toFixed(1)} &#9733; ({reviewCount} reviews)
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PackageHero;
