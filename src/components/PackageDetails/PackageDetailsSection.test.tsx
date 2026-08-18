import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import PackageDetailsSection from './PackageDetailsSection';
import { demoTravelPackageDetails } from '../../data/travelPackageDemoData';

describe('PackageDetailsSection', () => {
  it('renders a tab for each section', () => {
    render(<PackageDetailsSection />);
    expect(screen.getByRole('tab', { name: /Inclusions & Exclusions/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Accommodation/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Transport/i })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: /Activities/i })).toBeInTheDocument();
  });

  it('renders inclusions and exclusions checklists by default', () => {
    render(<PackageDetailsSection />);
    const inclusionsList = screen.getByTestId('inclusions-list');
    const exclusionsList = screen.getByTestId('exclusions-list');
    expect(inclusionsList.children.length).toBe(demoTravelPackageDetails.inclusions.length);
    expect(exclusionsList.children.length).toBe(demoTravelPackageDetails.exclusions.length);
  });

  it('renders accommodation section when the tab is clicked', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: /Accommodation/i }));
    const accommodationList = screen.getByTestId('accommodation-list');
    expect(accommodationList.children.length).toBe(demoTravelPackageDetails.accommodation.length);
  });

  it('renders transport section when the tab is clicked', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: /Transport/i }));
    const transportList = screen.getByTestId('transport-list');
    expect(transportList.children.length).toBe(demoTravelPackageDetails.transport.length);
  });

  it('renders activities section when the tab is clicked', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: /Activities/i }));
    const activitiesList = screen.getByTestId('activities-list');
    expect(activitiesList.children.length).toBe(demoTravelPackageDetails.activities.length);
  });
});
