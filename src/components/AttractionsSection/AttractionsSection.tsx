import React from 'react';
import { Attraction } from '../../types/destination';
import AttractionCard from '../AttractionCard/AttractionCard';
import styles from './AttractionsSection.module.css';

export interface AttractionsSectionProps {
  destinationName: string;
  attractions: Attraction[];
}

const AttractionsSection: React.FC<AttractionsSectionProps> = ({
  destinationName,
  attractions
}) => {
  return (
    <section className={styles.section} aria-labelledby="attractions-heading">
      <div className={styles.header}>
        <h2 id="attractions-heading" className={styles.heading}>
          Top Attractions &amp; Recommended Experiences
        </h2>
        <p className={styles.subheading}>
          Discover the best things to see and do in {destinationName}
        </p>
      </div>

      {attractions.length > 0 ? (
        <div className={styles.grid} data-testid="attractions-grid">
          {attractions.map((attraction) => (
            <AttractionCard key={attraction.id} attraction={attraction} />
          ))}
        </div>
      ) : (
        <p className={styles.emptyState}>
          No attractions available for {destinationName} yet.
        </p>
      )}
    </section>
  );
};

export default AttractionsSection;
