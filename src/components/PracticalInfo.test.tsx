import React from 'react';
import { render, screen } from '@testing-library/react';
import PracticalInfo from './PracticalInfo';
import { Destination } from '../types/destination';

describe('PracticalInfo', () => {
  it('renders all practical info fields when fully populated', () => {
    const destination: Destination = {
      id: 'bali-indonesia',
      name: 'Bali',
      country: 'Indonesia',
      description: 'A tropical paradise.',
      practicalInfo: {
        bestTimeToVisit: 'April to October',
        weatherNotes: 'Warm and humid year-round.',
        currency: 'Indonesian Rupiah (IDR)',
        language: 'Indonesian, Balinese',
        timezone: 'GMT+8 (WITA)',
        visaRequirements: 'Visa on arrival, 30 days.',
        emergencyNumber: '112'
      }
    };

    render(<PracticalInfo destination={destination} />);

    expect(screen.getByTestId('practical-info-section')).toBeInTheDocument();
    expect(screen.getByText('Best Time to Visit')).toBeInTheDocument();
    expect(screen.getByText('April to October')).toBeInTheDocument();
    expect(screen.getByText('Weather')).toBeInTheDocument();
    expect(screen.getByText('Warm and humid year-round.')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Indonesian Rupiah (IDR)')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('Indonesian, Balinese')).toBeInTheDocument();
    expect(screen.getByText('Timezone')).toBeInTheDocument();
    expect(screen.getByText('GMT+8 (WITA)')).toBeInTheDocument();
    expect(screen.getByText('Visa Requirements')).toBeInTheDocument();
    expect(screen.getByText('Visa on arrival, 30 days.')).toBeInTheDocument();
    expect(screen.getByText('Emergency Number')).toBeInTheDocument();
    expect(screen.getByText('112')).toBeInTheDocument();
  });

  it('renders only available fields when some optional fields are missing', () => {
    const destination: Destination = {
      id: 'paris-france',
      name: 'Paris',
      country: 'France',
      description: 'The City of Light.',
      practicalInfo: {
        bestTimeToVisit: 'June to August',
        currency: 'Euro (EUR)',
        language: 'French'
      }
    };

    render(<PracticalInfo destination={destination} />);

    expect(screen.getByTestId('practical-info-section')).toBeInTheDocument();
    expect(screen.getByText('Best Time to Visit')).toBeInTheDocument();
    expect(screen.getByText('June to August')).toBeInTheDocument();
    expect(screen.getByText('Currency')).toBeInTheDocument();
    expect(screen.getByText('Euro (EUR)')).toBeInTheDocument();
    expect(screen.getByText('Language')).toBeInTheDocument();
    expect(screen.getByText('French')).toBeInTheDocument();

    expect(screen.queryByText('Weather')).not.toBeInTheDocument();
    expect(screen.queryByText('Timezone')).not.toBeInTheDocument();
    expect(screen.queryByText('Visa Requirements')).not.toBeInTheDocument();
    expect(screen.queryByText('Emergency Number')).not.toBeInTheDocument();
  });

  it('renders nothing when practicalInfo is undefined', () => {
    const destination: Destination = {
      id: 'machu-picchu-peru',
      name: 'Machu Picchu',
      country: 'Peru',
      description: 'An ancient Incan citadel.'
    };

    const { container } = render(<PracticalInfo destination={destination} />);

    expect(container).toBeEmptyDOMElement();
  });

  it('renders nothing when practicalInfo has only empty string values', () => {
    const destination: Destination = {
      id: 'empty-fields',
      name: 'Nowhere',
      country: 'Nowhereland',
      description: 'A destination with blank practical info.',
      practicalInfo: {
        bestTimeToVisit: '',
        weatherNotes: '   ',
        currency: undefined,
        language: undefined
      }
    };

    const { container } = render(<PracticalInfo destination={destination} />);

    expect(container).toBeEmptyDOMElement();
  });
});
