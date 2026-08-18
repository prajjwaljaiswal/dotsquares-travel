import React from 'react';
import { PracticalInfo } from '../../types/destination';
import styles from './PracticalInfoSection.module.css';

export interface PracticalInfoSectionProps {
  practicalInfo?: PracticalInfo;
}

interface InfoItem {
  label: string;
  value?: string;
}

const PracticalInfoSection: React.FC<PracticalInfoSectionProps> = ({
  practicalInfo,
}) => {
  if (!practicalInfo) {
    return null;
  }

  const items: InfoItem[] = [
    { label: 'Best Time to Visit', value: practicalInfo.bestTimeToVisit },
    { label: 'Weather', value: practicalInfo.weatherNotes },
    { label: 'Currency', value: practicalInfo.currency },
    { label: 'Language', value: practicalInfo.language },
    { label: 'Timezone', value: practicalInfo.timezone },
    { label: 'Visa Requirements', value: practicalInfo.visaRequirements },
    { label: 'Local Customs', value: practicalInfo.localCustoms },
  ].filter((item): item is { label: string; value: string } =>
    Boolean(item.value && item.value.trim().length > 0)
  );

  if (items.length === 0) {
    return null;
  }

  return (
    <section className={styles.section} data-testid="practical-info-section">
      <h2 className={styles.title}>Best Time to Visit &amp; Practical Info</h2>
      <dl className={styles.list}>
        {items.map((item) => (
          <div className={styles.item} key={item.label}>
            <dt className={styles.label}>{item.label}</dt>
            <dd className={styles.value}>{item.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PracticalInfoSection;
