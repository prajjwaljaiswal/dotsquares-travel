import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import ExplorePage from './page';

describe('ExplorePage', () => {
  it('renders the results list', () => {
    render(<ExplorePage />);
    expect(screen.getByTestId('explore-results')).toBeInTheDocument();
    expect(screen.getAllByTestId('explore-result-card').length).toBeGreaterThan(0);
  });

  it('filters results by destination without a page reload', () => {
    render(<ExplorePage />);
    const initialCount = screen.getAllByTestId('explore-result-card').length;

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Bali' } });

    const filteredCards = screen.getAllByTestId('explore-result-card');
    filteredCards.forEach((card) => {
      expect(card).toHaveTextContent('Bali');
    });
    expect(filteredCards.length).toBeLessThanOrEqual(initialCount);
  });

  it('combines multiple filters together', () => {
    render(<ExplorePage />);

    fireEvent.change(screen.getByLabelText('Minimum price'), { target: { value: '1000' } });
    fireEvent.click(screen.getByLabelText('Culture'));

    const filteredCards = screen.getAllByTestId('explore-result-card');
    filteredCards.forEach((card) => {
      expect(card).toHaveTextContent('Culture');
    });
  });

  it('opens the filter panel drawer on mobile trigger click', () => {
    render(<ExplorePage />);
    const openButton = screen.getByTestId('open-filter-panel');
    fireEvent.click(openButton);
    expect(screen.getByTestId('filter-panel-overlay')).toBeInTheDocument();
  });

  it('resets filters when reset button is clicked', () => {
    render(<ExplorePage />);
    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Bali' } });
    fireEvent.click(screen.getByTestId('filter-panel-reset'));
    expect(screen.getByLabelText('Destination')).toHaveValue('all');
  });
});
