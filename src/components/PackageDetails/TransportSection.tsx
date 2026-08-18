import React from 'react';
import { TransportDetail } from '../../types/travelPackage';
import styles from './InfoCardList.module.css';

export interface TransportSectionProps {
  transport: TransportDetail[];
}

export const TransportSection: React.FC<TransportSectionProps> = ({ transport }) => {
  return (
    <ul className={styles.infoList} data-testid="transport-list">
      {transport.map((item) => (
        <li key={item.id} className={styles.infoCard}>
          <span className={styles.infoIcon} aria-hidden="true">
            {item.icon}
          </span>
          <div className={styles.infoContent}>
            <h4 className={styles.infoTitle}>{item.mode}</h4>
            <p className={styles.infoDescription}>{item.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TransportSection;
