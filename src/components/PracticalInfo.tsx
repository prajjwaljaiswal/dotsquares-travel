import React from 'react';
import { Destination } from '../types/destination';
import './PracticalInfo.css';

interface PracticalInfoField {
  label: string;
  value?: string;
}

interface PracticalInfoProps {
  destination: Destination;
}

const PracticalInfo: React.FC<PracticalInfoProps> = ({ destination }) => {
  const info = destination.practicalInfo;

  if (!info) {
    return null;
  }

  const fields: PracticalInfoField[] = [
    { label: 'Best Time to Visit', value: info.bestTimeToVisit },
    { label: 'Weather', value: info.weatherNotes },
    { label: 'Currency', value: info.currency },
    { label: 'Language', value: info.language },
    { label: 'Timezone', value: info.timezone },
    { label: 'Visa Requirements', value: info.visaRequirements },
    { label: 'Emergency Number', value: info.emergencyNumber }
  ];

  const availableFields = fields.filter(
    (field) => typeof field.value === 'string' && field.value.trim().length > 0
  );

  if (availableFields.length === 0) {
    return null;
  }

  return (
    <section className="practical-info" data-testid="practical-info-section">
      <h2 className="practical-info__title">Best Time to Visit &amp; Practical Info</h2>
      <dl className="practical-info__list">
        {availableFields.map((field) => (
          <div className="practical-info__item" key={field.label}>
            <dt className="practical-info__label">{field.label}</dt>
            <dd className="practical-info__value">{field.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PracticalInfo;
