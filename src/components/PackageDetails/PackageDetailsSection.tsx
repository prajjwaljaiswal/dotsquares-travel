import React from 'react';
import Tabs, { TabItem } from '../Tabs/Tabs';
import InclusionsExclusions from './InclusionsExclusions';
import AccommodationSection from './AccommodationSection';
import TransportSection from './TransportSection';
import ActivitiesSection from './ActivitiesSection';
import { TravelPackageDetails } from '../../types/travelPackage';
import { demoTravelPackageDetails } from '../../data/travelPackageDemoData';
import styles from './PackageDetailsSection.module.css';

export interface PackageDetailsSectionProps {
  details?: TravelPackageDetails;
}

export const PackageDetailsSection: React.FC<PackageDetailsSectionProps> = ({
  details = demoTravelPackageDetails,
}) => {
  const tabs: TabItem[] = [
    {
      id: 'inclusions-exclusions',
      label: 'Inclusions & Exclusions',
      icon: '📋',
      content: (
        <InclusionsExclusions inclusions={details.inclusions} exclusions={details.exclusions} />
      ),
    },
    {
      id: 'accommodation',
      label: 'Accommodation',
      icon: '🏨',
      content: <AccommodationSection accommodation={details.accommodation} />,
    },
    {
      id: 'transport',
      label: 'Transport',
      icon: '🚌',
      content: <TransportSection transport={details.transport} />,
    },
    {
      id: 'activities',
      label: 'Activities',
      icon: '🎯',
      content: <ActivitiesSection activities={details.activities} />,
    },
  ];

  return (
    <section className={styles.packageDetailsSection} aria-label="Travel package details">
      <h2 className={styles.sectionHeading}>Package Details</h2>
      <Tabs tabs={tabs} ariaLabel="Travel package detail tabs" />
    </section>
  );
};

export default PackageDetailsSection;
