import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import PracticalInfoSection from './PracticalInfoSection';
import { PracticalInfo } from '../../types/destination';

describe('PracticalInfoSection', () => {
  it('renders all practical info fields when fully provided', () => {
    const practicalInfo: PracticalInfo = {
      bestTimeToVisit: 'April to October',
      weatherNotes: 'Warm and humid',
      currency: 'Indonesian Rupiah (IDR)',
      language: 'Indonesian',
      timezone: 'UTC+8',
      visaRequirements: 'Visa-free for 30 days',
      localCustoms: 'Remove shoes before entering temples',
    };

    render(<PracticalInfoSection practicalInfo={practicalInfo} />);

    expect(screen.getByTestId('practical-info-section')).toBeInTheDocument();
    expect(screen.getByText('Best Time to Visit')).toBeInTheDocument();
    expect(screen.getByText('April to October')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Warm and humid')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Indonesian Rupiah (IDR)')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Indonesian')).toBeInTheDocument();
    expect(screen.getByText('Timezone')).toBeInTheDocument();
    expect(screen.getByText('UTC+8')).toBeInTheDocument();
    expect(screen.getByText('Visa Requirements')).toBeInTheDocument();
    expect(screen.getByText('Visa-free for 30 days')).toBeInTheDocument();
    expect(screen.getByText('Local Customs')).toBeInTheDocument();
    expect(
      screen.getByText('Remove shoes before entering temples')
    ).toBeInTheDocument();
  });

  it('renders only the provided fields when some optional fields are missing', () => {
    const practicalInfo: PracticalInfo = {
      bestTimeToVisit: 'March to May',
      currency: 'Japanese Yen (JPY)',
      language: 'Japanese',
    };

    render(<PracticalInfoSection practicalInfo={practicalInfo} />);

    expect(screen.getByText('Best Time to Visit')).toBeInTheDocument();
    expect(screen.getByText('March to May')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Japanese Yen (JPY)')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Japanese')).toBeInTheDocument();

    expect(screen.queryByText('Weather')).not.toBeInTheDocument();
    expect(screen.queryByText('Timezone')).not.toBeInTheDocument();
    expect(screen.queryByText('Visa Requirements')).not.toBeInTheDocument();
    expect(screen.queryByText('Local Customs')).not.toBeInTheDocument();
  });

  it('renders nothing when practicalInfo is undefined', () => {
    const { container } = render(<PracticalInfoSection />);
    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when practicalInfo has no usable fields', () => {
    const practicalInfo: PracticalInfo = {
      bestTimeToVisit: '',
      weatherNotes: undefined,
    };
    const { container } = render(
      <PracticalInfoSection practicalInfo={practicalInfo} />
    );
    expect(container).toBeEmptyDOMElement();
  });
});
