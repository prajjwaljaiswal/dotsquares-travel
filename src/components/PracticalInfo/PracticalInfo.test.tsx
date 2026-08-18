import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticalInfo, { PracticalInfoData } from './PracticalInfo';

describe('PracticalInfo', () => {
  it('renders all practical info fields when provided', () => {
    const practicalInfo: PracticalInfoData = {
      bestTimeToVisit: 'March to May',
      weatherNotes: 'Mild and dry',
      currency: 'EUR',
      language: 'French',
      timezone: 'CET',
      visaRequirements: 'Visa on arrival for most nationalities',
      emergencyNumber: '112',
      tippingCustom: '10% is customary',
    };

    render(<PracticalInfo practicalInfo={practicalInfo} destinationName="Paris" />);

    expect(screen.getByText('Best Time to Visit & Practical Info for Paris')).toBeInTheDocument();
    expect(screen.getByText('March to May')).toBeInTheDocument();
    expect(screen.getByText('Mild and dry')).toBeInTheDocument();
    expect(screen.getByText('EUR')).toBeInTheDocument();
    expect(screen.getByText('French')).toBeInTheDocument();
    expect(screen.getByText('CET')).toBeInTheDocument();
    expect(screen.getByText('Visa on arrival for most nationalities')).toBeInTheDocument();
    expect(screen.getByText('112')).toBeInTheDocument();
    expect(screen.getByText('10% is customary')).toBeInTheDocument();
    expect(screen.queryByTestId('practical-info-empty')).not.toBeInTheDocument();
  });

  it('handles missing optional fields gracefully', () => {
    const practicalInfo: PracticalInfoData = {
      bestTimeToVisit: 'June to August',
      currency: 'USD',
    };

    render(<PracticalInfo practicalInfo={practicalInfo} />);

    expect(screen.getByText('June to August')).toBeInTheDocument();
    expect(screen.getByText('USD')).toBeInTheDocument();
    expect(screen.queryByText('Weather')).not.toBeInTheDocument();
    expect(screen.queryByText('Language')).not.toBeInTheDocument();
    expect(screen.queryByTestId('practical-info-empty')).not.toBeInTheDocument();
  });

  it('shows a fallback message when no practical info is available', () => {
    render(<PracticalInfo />);

    expect(screen.getByTestId('practical-info-empty')).toBeInTheDocument();
    expect(
      screen.getByText('Practical information is not available for this destination.')
    ).toBeInTheDocument();
    expect(screen.queryByTestId('practical-info-grid')).not.toBeInTheDocument();
  });

  it('treats blank string fields as missing', () => {
    const practicalInfo: PracticalInfoData = {
      bestTimeToVisit: '   ',
      currency: 'GBP',
    };

    render(<PracticalInfo practicalInfo={practicalInfo} />);

    expect(screen.queryByText('Best Time to Visit')).not.toBeInTheDocument();
    expect(screen.getByText('GBP')).toBeInTheDocument();
  });
});
