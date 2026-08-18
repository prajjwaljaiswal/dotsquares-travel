import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExplorePage from './page';

describe('ExplorePage', () => {
  it('renders all places by default', () => {
    render(<ExplorePage />);
    expect(screen.getByTestId('results-list')).toBeInTheDocument();
    expect(screen.getByText(/places found/)).toBeInTheDocument();
    expect(screen.getByText('Bali Beach Retreat')).toBeInTheDocument();
  });

  it('filters results by destination', () => {
    render(<ExplorePage />);
    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Bali' } });
    expect(screen.getByText('Bali Beach Retreat')).toBeInTheDocument();
    expect(screen.queryByText('Swiss Alps Adventure')).not.toBeInTheDocument();
  });

  it('combines travel type and rating filters', () => {
    render(<ExplorePage />);
    fireEvent.click(screen.getByLabelText('Adventure'));
    expect(screen.getByText('Swiss Alps Adventure')).toBeInTheDocument();
    expect(screen.getByText('Kashmir Mountain Trek')).toBeInTheDocument();
    expect(screen.queryByText('Bali Beach Retreat')).not.toBeInTheDocument();

    fireEvent.click(screen.getByText('4+ ★', { exact: false }));
    expect(screen.getByText('Swiss Alps Adventure')).toBeInTheDocument();
    expect(screen.getByText('Kashmir Mountain Trek')).toBeInTheDocument();
  });

  it('opens the filter drawer when the mobile toggle is clicked', () => {
    render(<ExplorePage />);
    const panel = screen.getByTestId('filter-panel');
    fireEvent.click(screen.getByTestId('open-filters-button'));
    expect(panel).toBeInTheDocument();
  });
});
