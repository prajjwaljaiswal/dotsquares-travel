import React from 'react';
import { Tabs, TabItem } from './Tabs';
import {
  inclusions,
  exclusions,
  accommodations,
  transportOptions,
  activities,
  ChecklistItem,
  InfoItem,
} from '../data/demoPackageData';

interface ChecklistProps {
  items: ChecklistItem[];
  icon: string;
  iconColor: string;
  emptyLabel: string;
}

const Checklist: React.FC<ChecklistProps> = ({ items, icon, iconColor, emptyLabel }) => {
  if (items.length === 0) {
    return <p>{emptyLabel}</p>;
  }

  return (
    <ul className="package-checklist" style={{ listStyle: 'none', padding: 0, margin: 0 }}>
      {items.map((item) => (
        <li
          key={item.id}
          className="package-checklist__item"
          style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}
        >
          <span aria-hidden="true" style={{ color: iconColor, fontWeight: 'bold' }}>
            {icon}
          </span>
          <span>{item.label}</span>
        </li>
      ))}
    </ul>
  );
};

interface InfoGridProps {
  items: InfoItem[];
  emptyLabel: string;
}

const InfoGrid: React.FC<InfoGridProps> = ({ items, emptyLabel }) => {
  if (items.length === 0) {
    return <p>{emptyLabel}</p>;
  }

  return (
    <div
      className="package-info-grid"
      style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '16px' }}
    >
      {items.map((item) => (
        <div
          key={item.id}
          className="package-info-grid__card"
          style={{ border: '1px solid #e0e0e0', borderRadius: '8px', padding: '12px' }}
        >
          <div style={{ fontSize: '24px' }} aria-hidden="true">
            {item.icon}
          </div>
          <h4 style={{ margin: '8px 0 4px' }}>{item.title}</h4>
          <p style={{ margin: 0, color: '#555' }}>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export const PackageDetailsSection: React.FC = () => {
  const tabs: TabItem[] = [
    {
      id: 'inclusions',
      label: 'Inclusions',
      content: (
        <Checklist
          items={inclusions}
          icon="✔"
          iconColor="#2e7d32"
          emptyLabel="No inclusions listed for this package."
        />
      ),
    },
    {
      id: 'exclusions',
      label: 'Exclusions',
      content: (
        <Checklist
          items={exclusions}
          icon="✘"
          iconColor="#c62828"
          emptyLabel="No exclusions listed for this package."
        />
      ),
    },
    {
      id: 'accommodation',
      label: 'Accommodation',
      content: <InfoGrid items={accommodations} emptyLabel="No accommodation details available." />,
    },
    {
      id: 'transport',
      label: 'Transport',
      content: <InfoGrid items={transportOptions} emptyLabel="No transport details available." />,
    },
    {
      id: 'activities',
      label: 'Activities',
      content: <InfoGrid items={activities} emptyLabel="No activities listed for this package." />,
    },
  ];

  return (
    <section
      className="package-details-section"
      aria-label="Package inclusions, exclusions, accommodation, transport and activities"
    >
      <h2>Package Details</h2>
      <Tabs tabs={tabs} defaultTabId="inclusions" ariaLabel="Package details" />
    </section>
  );
};

export default PackageDetailsSection;
