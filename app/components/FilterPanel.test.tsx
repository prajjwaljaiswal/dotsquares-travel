import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterPanel, { DEFAULT_FILTERS } from './FilterPanel';

describe('FilterPanel', () => {
  const destinations = ['Bali', 'Paris'];
  const travelTypes = ['Adventure', 'Relaxation'];

  it('renders all filter controls', () => {
    render(
      <FilterPanel
        destinations={destinations}
        travelTypes={travelTypes}
        filters={DEFAULT_FILTERS}
        onChange={jest.fn()}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByLabelText('Destination')).toBeInTheDocument();
    expect(screen.getByText('Duration (days)')).toBeInTheDocument();
    expect(screen.getByText('Price range ($)')).toBeInTheDocument();
    expect(screen.getByText('Travel type')).toBeInTheDocument();
    expect(screen.getByText('Minimum rating')).toBeInTheDocument();
  });

  it('calls onChange when destination is changed', () => {
    const onChange = jest.fn();
    render(
      <FilterPanel
        destinations={destinations}
        travelTypes={travelTypes}
        filters={DEFAULT_FILTERS}
        onChange={onChange}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Bali' } });
    expect(onChange).toHaveBeenCalledWith({ ...DEFAULT_FILTERS, destination: 'Bali' });
  });

  it('toggles travel type selection', () => {
    const onChange = jest.fn();
    render(
      <FilterPanel
        destinations={destinations}
        travelTypes={travelTypes}
        filters={DEFAULT_FILTERS}
        onChange={onChange}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.click(screen.getByLabelText('Adventure'));
    expect(onChange).toHaveBeenCalledWith({ ...DEFAULT_FILTERS, travelTypes: ['Adventure'] });
  });

  it('updates minimum rating selection', () => {
    const onChange = jest.fn();
    render(
      <FilterPanel
        destinations={destinations}
        travelTypes={travelTypes}
        filters={DEFAULT_FILTERS}
        onChange={onChange}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText('4+'));
    expect(onChange).toHaveBeenCalledWith({ ...DEFAULT_FILTERS, minRating: 4 });
  });

  it('calls onClose when the close button is clicked', () => {
    const onClose = jest.fn();
    render(
      <FilterPanel
        destinations={destinations}
        travelTypes={travelTypes}
        filters={DEFAULT_FILTERS}
        onChange={jest.fn()}
        isOpen={true}
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByTestId('filter-panel-close'));
    expect(onClose).toHaveBeenCalled();
  });
});
