import React from 'react';
import { ActivityDetail } from '../../types/travelPackage';
import styles from './InfoCardList.module.css';

export interface ActivitiesSectionProps {
  activities: ActivityDetail[];
}

export const ActivitiesSection: React.FC<ActivitiesSectionProps> = ({ activities }) => {
  return (
    <ul className={styles.infoList} data-testid="activities-list">
      {activities.map((item) => (
        <li key={item.id} className={styles.infoCard}>
          <span className={styles.infoIcon} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>{item.name}</h4>
            <p className={styles.infoDescription}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ActivitiesSection;
