import type { TravelPackage } from '../../types/package';
import styles from './PackageOverview.module.css';

interface PackageOverviewProps {
  pkg: TravelPackage;
}

export function PackageOverview({ pkg }: PackageOverviewProps) {
  return (
    <section className={styles.overview} data-testid="package-overview">
      <h2 className={styles.heading}>Overview</h2>
      <p className={styles.description}>{pkg.description}</p>

      {pkg.highlights.length > 0 && (
        <div className={styles.highlights}>
          <h3 className={styles.highlightsHeading}>Highlights</h3>
          <ul className={styles.highlightsList}>
            {pkg.highlights.map((highlight) => (
              <li key={highlight} className={styles.highlightItem}>
                {highlight}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
}
