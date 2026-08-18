import React from 'react';
import { getDestinationBySlug } from '../../data/destinations';
import AttractionsSection from '../../components/AttractionsSection/AttractionsSection';
import styles from './DestinationDetailPage.module.css';

export interface DestinationDetailPageProps {
  destinationSlug: string;
}

const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  destinationSlug
}) => {
  const destination = getDestinationBySlug(destinationSlug);

  if (!destination) {
    return (
      <div className={styles.notFound}>
        <p>Destination not found.</p>
      </div>
    );
  }

  return (
    <main className={styles.page}>
      <header
        className={styles.hero}
        style={{ backgroundImage: `url(${destination.heroImageUrl})` }}
      >
        <div className={styles.heroOverlay}>
          <h1 className={styles.title}>{destination.name}</h1>
          <p className={styles.country}>{destination.country}</p>
        </div>
      </header>

      <div className={styles.content}>
        <p className={styles.summary}>{destination.summary}</p>

        <AttractionsSection
          destinationName={destination.name}
          attractions={destination.attractions}
        />
      </div>
    </main>
  );
};

export default DestinationDetailPage;
