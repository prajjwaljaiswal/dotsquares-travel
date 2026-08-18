import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import FilterPanel from './FilterPanel';
import { DEFAULT_FILTER_STATE } from '../../types/filters';

describe('FilterPanel', () => {
  const destinationOptions = [
    { label: 'Bali', value: 'Bali' },
    { label: 'Paris', value: 'Paris' },
  ];

  it('renders all filter sections', () => {
    render(
      <FilterPanel
        destinationOptions={destinationOptions}
        filters={DEFAULT_FILTER_STATE}
        onChange={jest.fn()}
        onReset={jest.fn()}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    expect(screen.getByLabelText('Destination')).toBeInTheDocument();
    expect(screen.getByLabelText('Duration')).toBeInTheDocument();
    expect(screen.getByText('Price range ($)')).toBeInTheDocument();
    expect(screen.getByText('Travel type')).toBeInTheDocument();
    expect(screen.getByText('Minimum rating')).toBeInTheDocument();
  });

  it('calls onChange when destination changes', () => {
    const onChange = jest.fn();
    render(
      <FilterPanel
        destinationOptions={destinationOptions}
        filters={DEFAULT_FILTER_STATE}
        onChange={onChange}
        onReset={jest.fn()}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Bali' } });
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ destination: 'Bali' }));
  });

  it('toggles travel type selection', () => {
    const onChange = jest.fn();
    render(
      <FilterPanel
        destinationOptions={destinationOptions}
        filters={DEFAULT_FILTER_STATE}
        onChange={onChange}
        onReset={jest.fn()}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.click(screen.getByLabelText('Adventure'));
    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ travelType: ['Adventure'] }));
  });

  it('calls onClose when overlay is clicked', () => {
    const onClose = jest.fn();
    render(
      <FilterPanel
        destinationOptions={destinationOptions}
        filters={DEFAULT_FILTER_STATE}
        onChange={jest.fn()}
        onReset={jest.fn()}
        isOpen={true}
        onClose={onClose}
      />
    );

    fireEvent.click(screen.getByTestId('filter-panel-overlay'));
    expect(onClose).toHaveBeenCalled();
  });

  it('calls onReset when reset button clicked', () => {
    const onReset = jest.fn();
    render(
      <FilterPanel
        destinationOptions={destinationOptions}
        filters={DEFAULT_FILTER_STATE}
        onChange={jest.fn()}
        onReset={onReset}
        isOpen={true}
        onClose={jest.fn()}
      />
    );

    fireEvent.click(screen.getByText('Reset filters'));
    expect(onReset).toHaveBeenCalled();
  });
});
