import React from 'react';
import { render, screen } from '@testing-library/react';
import DestinationDetailPage from './DestinationDetailPage';

describe('DestinationDetailPage', () => {
  it('renders the destination name as the title', () => {
    render(
      <DestinationDetailPage
        destinationName="Rome, Italy"
        lat={41.9028}
        lng={12.4964}
      />
    );
    expect(
      screen.getByRole('heading', { level: 1, name: 'Rome, Italy' })
    ).toBeInTheDocument();
  });

  it('renders the map placeholder section with location label', () => {
    render(
      <DestinationDetailPage
        destinationName="Rome, Italy"
        lat={41.9028}
        lng={12.4964}
      />
    );
    expect(
      screen.getByRole('heading', { level: 2, name: 'Location' })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('img', { name: 'Map placeholder for Rome, Italy' })
    ).toBeInTheDocument();
  });
});
