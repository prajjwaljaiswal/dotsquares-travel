import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { PackageDetailsSection } from '../PackageDetailsSection';
import {
  inclusions,
  exclusions,
  accommodations,
  transportOptions,
  activities,
} from '../../data/demoPackageData';

describe('PackageDetailsSection', () => {
  it('renders inclusions checklist by default', () => {
    render(<PackageDetailsSection />);
    inclusions.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders exclusions checklist when the exclusions tab is selected', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: 'Exclusions' }));
    exclusions.forEach((item) => {
      expect(screen.getByText(item.label)).toBeInTheDocument();
    });
  });

  it('renders accommodation info with titles and descriptions', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: 'Accommodation' }));
    accommodations.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
      expect(screen.getByText(item.description)).toBeInTheDocument();
    });
  });

  it('renders transport info when the transport tab is selected', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: 'Transport' }));
    transportOptions.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders activities info when the activities tab is selected', () => {
    render(<PackageDetailsSection />);
    fireEvent.click(screen.getByRole('tab', { name: 'Activities' }));
    activities.forEach((item) => {
      expect(screen.getByText(item.title)).toBeInTheDocument();
    });
  });

  it('renders exactly five tabs for organization', () => {
    render(<PackageDetailsSection />);
    expect(screen.getAllByRole('tab')).toHaveLength(5);
  });
});
