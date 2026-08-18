import React from 'react';
import { render, screen } from '@testing-library/react';
import MapContainer from './MapContainer';

describe('MapContainer (placeholder)', () => {
  it('renders the location label', () => {
    render(
      <MapContainer lat={48.8566} lng={2.3522} locationLabel="Paris, France" />
    );
    expect(screen.getByText('Paris, France')).toBeInTheDocument();
  });

  it('renders formatted lat/lng coordinates', () => {
    render(
      <MapContainer lat={48.8566} lng={2.3522} locationLabel="Paris, France" />
    );
    expect(screen.getByText(/Lat: 48.8566, Lng: 2.3522/)).toBeInTheDocument();
  });

  it('renders placeholder messaging indicating it is not a real map yet', () => {
    render(
      <MapContainer lat={0} lng={0} locationLabel="Equator Point" />
    );
    expect(screen.getByText(/Map preview coming soon/)).toBeInTheDocument();
  });

  it('exposes accessible role and aria-label based on locationLabel', () => {
    render(
      <MapContainer lat={35.6895} lng={139.6917} locationLabel="Tokyo, Japan" />
    );
    const element = screen.getByRole('img', {
      name: 'Map placeholder for Tokyo, Japan',
    });
    expect(element).toBeInTheDocument();
  });

  it('applies additional className when provided', () => {
    render(
      <MapContainer
        lat={40.7128}
        lng={-74.006}
        locationLabel="New York, USA"
        className="custom-class"
      />
    );
    const element = screen.getByTestId('map-container-placeholder');
    expect(element).toHaveClass('custom-class');
  });
});
