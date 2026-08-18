import { render, screen, fireEvent } from '@testing-library/react';
import Itinerary from './Itinerary';
import { itineraryData } from '../../data/itinerary';

describe('Itinerary', () => {
  it('renders all days with their title', () => {
    render(<Itinerary />);

    itineraryData.forEach((day) => {
      expect(screen.getByText(`Day ${day.day}`)).toBeInTheDocument();
      expect(screen.getByText(day.title)).toBeInTheDocument();
    });
  });

  it('renders the description for each day', () => {
    render(<Itinerary />);

    itineraryData.forEach((day) => {
      expect(screen.getByText(day.description)).toBeInTheDocument();
    });
  });

  it('expands the first day by default', () => {
    render(<Itinerary />);

    const firstHeader = screen.getByText(itineraryData[0].title).closest('button');
    expect(firstHeader).toHaveAttribute('aria-expanded', 'true');
  });

  it('collapses a day when its header is clicked again', () => {
    render(<Itinerary />);

    const firstHeader = screen.getByText(itineraryData[0].title).closest('button') as HTMLElement;
    expect(firstHeader).toHaveAttribute('aria-expanded', 'true');

    fireEvent.click(firstHeader);

    expect(firstHeader).toHaveAttribute('aria-expanded', 'false');
  });

  it('expands a different day when its header is clicked', () => {
    render(<Itinerary />);

    const secondDay = itineraryData[1];
    const secondHeader = screen.getByText(secondDay.title).closest('button') as HTMLElement;

    expect(secondHeader).toHaveAttribute('aria-expanded', 'false');

    fireEvent.click(secondHeader);

    expect(secondHeader).toHaveAttribute('aria-expanded', 'true');
  });

  it('renders nothing when given an empty days array', () => {
    const { container } = render(<Itinerary days={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
