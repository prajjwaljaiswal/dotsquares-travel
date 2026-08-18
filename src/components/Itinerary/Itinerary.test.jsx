import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Itinerary from './Itinerary';

const sampleDays = [
  { day: 1, title: 'Arrival Day', description: 'Landing and check-in.' },
  { day: 2, title: 'City Tour', description: 'Explore the city highlights.' },
  { day: 3, title: 'Departure', description: 'Final breakfast and checkout.' },
];

describe('Itinerary', () => {
  it('renders a header for every day with day number and title', () => {
    render(<Itinerary days={sampleDays} />);

    sampleDays.forEach(({ day, title }) => {
      expect(screen.getByText(`Day ${day}`)).toBeInTheDocument();
      expect(screen.getByText(title)).toBeInTheDocument();
    });
  });

  it('expands the first day by default and shows its description', () => {
    render(<Itinerary days={sampleDays} />);

    expect(screen.getByText('Landing and check-in.')).toBeInTheDocument();
    expect(screen.queryByText('Explore the city highlights.')).not.toBeInTheDocument();
  });

  it('toggles a day panel open and closed when its header is clicked', () => {
    render(<Itinerary days={sampleDays} />);

    const dayTwoHeader = screen.getByText('City Tour').closest('button');

    fireEvent.click(dayTwoHeader);
    expect(screen.getByText('Explore the city highlights.')).toBeInTheDocument();

    fireEvent.click(dayTwoHeader);
    expect(screen.queryByText('Explore the city highlights.')).not.toBeInTheDocument();
  });

  it('collapses the previously expanded day when a new day is selected', () => {
    render(<Itinerary days={sampleDays} />);

    const dayThreeHeader = screen.getByText('Departure').closest('button');
    fireEvent.click(dayThreeHeader);

    expect(screen.getByText('Final breakfast and checkout.')).toBeInTheDocument();
    expect(screen.queryByText('Landing and check-in.')).not.toBeInTheDocument();
  });

  it('renders a fallback message when no days are provided', () => {
    render(<Itinerary days={[]} />);
    expect(screen.getByText('No itinerary available for this package.')).toBeInTheDocument();
  });
});
