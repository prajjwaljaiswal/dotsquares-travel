import React from 'react';
import { ChecklistItem } from '../../types/travelPackage';
import styles from './InclusionsExclusions.module.css';

export interface InclusionsExclusionsProps {
  inclusions: ChecklistItem[];
  exclusions: ChecklistItem[];
}

export const InclusionsExclusions: React.FC<InclusionsExclusionsProps> = ({
  inclusions,
  exclusions,
}) => {
  return (
    <div className={styles.checklistGrid}>
      <div className={styles.checklistColumn}>
        <h3 className={styles.checklistTitle}>What&apos;s Included</h3>
        <ul className={styles.checklist} data-testid="inclusions-list">
          {inclusions.map((item) => (
            <li key={item.id} className={styles.checklistItem}>
              <span className={`${styles.checklistIcon} ${styles.included}`} aria-hidden="true">
                ✔
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.checklistColumn}>
        <h3 className={styles.checklistTitle}>What&apos;s Excluded</h3>
        <ul className={styles.checklist} data-testid="exclusions-list">
          {exclusions.map((item) => (
            <li key={item.id} className={styles.checklistItem}>
              <span className={`${styles.checklistIcon} ${styles.excluded}`} aria-hidden="true">
                ✘
              </span>
              <span>{item.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default InclusionsExclusions;
