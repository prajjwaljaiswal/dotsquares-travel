import React from 'react';
import styles from './PracticalInfo.module.css';

export interface PracticalInfoData {
  bestTimeToVisit?: string;
  weatherNotes?: string;
  currency?: string;
  language?: string;
  timezone?: string;
  visaRequirements?: string;
  emergencyNumber?: string;
  tippingCustom?: string;
}

export interface PracticalInfoProps {
  practicalInfo?: PracticalInfoData;
  destinationName?: string;
}

interface InfoField {
  label: string;
  value?: string;
}

const hasValue = (value?: string): boolean =>
  value !== undefined && value !== null && value.trim().length > 0;

const PracticalInfo: React.FC<PracticalInfoProps> = ({ practicalInfo, destinationName }) => {
  const fields: InfoField[] = [
    { label: 'Best Time to Visit', value: practicalInfo?.bestTimeToVisit },
    { label: 'Weather', value: practicalInfo?.weatherNotes },
    { label: 'Currency', value: practicalInfo?.currency },
    { label: 'Language', value: practicalInfo?.language },
    { label: 'Timezone', value: practicalInfo?.timezone },
    { label: 'Visa Requirements', value: practicalInfo?.visaRequirements },
    { label: 'Emergency Number', value: practicalInfo?.emergencyNumber },
    { label: 'Tipping Custom', value: practicalInfo?.tippingCustom },
  ];

  const availableFields = fields.filter((field) => hasValue(field.value));

  const heading = destinationName
    ? `Best Time to Visit & Practical Info for ${destinationName}`
    : 'Best Time to Visit & Practical Info';

  return (
    <section className={styles.container} data-testid="practical-info-section">
      <h2 className={styles.title}>{heading}</h2>
      {availableFields.length > 0 ? (
        <dl className={styles.grid} data-testid="practical-info-grid">
          {availableFields.map((field) => (
            <div className={styles.item} key={field.label}>
              <dt className={styles.label}>{field.label}</dt>
              <dd className={styles.value}>{field.value}</dd>
            </div>
          ))}
        </dl>
      ) : (
        <p className={styles.empty} data-testid="practical-info-empty">
          Practical information is not available for this destination.
        </p>
      )}
    </section>
  );
};

export default PracticalInfo;
