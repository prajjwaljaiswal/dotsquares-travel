import React from 'react';
import { AccommodationDetail } from '../../types/travelPackage';
import styles from './InfoCardList.module.css';

export interface AccommodationSectionProps {
  accommodation: AccommodationDetail[];
}

export const AccommodationSection: React.FC<AccommodationSectionProps> = ({ accommodation }) => {
  return (
    <ul className={styles.infoList} data-testid="accommodation-list">
      {accommodation.map((item) => (
        <li key={item.id} className={styles.infoCard}>
          <span className={styles.infoIcon} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>{item.name}</h4>
            <p className={styles.infoSubtitle}>{item.type}</p>
            <p className={styles.infoDescription}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default AccommodationSection;
