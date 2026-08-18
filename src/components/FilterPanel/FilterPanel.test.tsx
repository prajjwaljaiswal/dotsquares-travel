import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { FilterPanel } from './FilterPanel';

function mockMatchMedia(matches: boolean) {
  window.matchMedia = jest.fn().mockImplementation((query: string) => ({
    matches,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }));
}

describe('FilterPanel', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders as a sidebar on desktop with all filter types', () => {
    mockMatchMedia(false);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    expect(screen.getByTestId('filter-panel-desktop')).toBeInTheDocument();
    expect(screen.getByTestId('destination-filter')).toBeInTheDocument();
    expect(screen.getByTestId('duration-filter')).toBeInTheDocument();
    expect(screen.getByTestId('price-range-filter')).toBeInTheDocument();
    expect(screen.getByTestId('travel-type-filter')).toBeInTheDocument();
    expect(screen.getByTestId('rating-filter')).toBeInTheDocument();
  });

  it('applies a desktop filter change immediately without requiring a submit action', () => {
    mockMatchMedia(false);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    const input = screen.getByLabelText('Destination') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Paris' } });

    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ destination: 'Paris' }));
  });

  it('combines multiple filter types together on desktop', () => {
    mockMatchMedia(false);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Rome' } });
    fireEvent.click(screen.getByText('Adventure'));
    fireEvent.click(screen.getByText('4★+'));

    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall.destination).toBe('Rome');
    expect(lastCall.travelTypes).toContain('Adventure');
    expect(lastCall.minRating).toBe(4);
  });

  it('clears all applied filters on desktop', () => {
    mockMatchMedia(false);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Rome' } });
    expect(screen.getByTestId('filter-reset-desktop')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('filter-reset-desktop'));

    const lastCall = onChange.mock.calls[onChange.mock.calls.length - 1][0];
    expect(lastCall.destination).toBe('');
  });

  it('renders a trigger button on mobile instead of the sidebar', () => {
    mockMatchMedia(true);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    expect(screen.getByTestId('filter-panel-mobile')).toBeInTheDocument();
    expect(screen.queryByTestId('filter-panel-desktop')).not.toBeInTheDocument();
    expect(screen.getByTestId('filter-panel-trigger')).toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('opens the drawer on mobile and applies staged filters without a full reload', () => {
    mockMatchMedia(true);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    fireEvent.click(screen.getByTestId('filter-panel-trigger'));
    expect(screen.getByTestId('filter-drawer')).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Tokyo' } });
    fireEvent.click(screen.getByTestId('filter-apply-mobile'));

    expect(onChange).toHaveBeenCalledWith(expect.objectContaining({ destination: 'Tokyo' }));
    expect(screen.queryByTestId('filter-drawer')).not.toBeInTheDocument();
  });

  it('closes the drawer via overlay click without applying unsaved changes', () => {
    mockMatchMedia(true);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    fireEvent.click(screen.getByTestId('filter-panel-trigger'));
    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Cairo' } });
    fireEvent.click(screen.getByTestId('filter-drawer-overlay'));

    expect(screen.queryByTestId('filter-drawer')).not.toBeInTheDocument();
    expect(onChange).not.toHaveBeenCalled();
  });

  it('resets staged mobile filters when Reset is clicked inside the drawer', () => {
    mockMatchMedia(true);
    const onChange = jest.fn();
    render(<FilterPanel onChange={onChange} />);

    fireEvent.click(screen.getByTestId('filter-panel-trigger'));
    fireEvent.change(screen.getByLabelText('Destination'), { target: { value: 'Cairo' } });
    fireEvent.click(screen.getByTestId('filter-reset-mobile'));

    const input = screen.getByLabelText('Destination') as HTMLInputElement;
    expect(input.value).toBe('');
  });
});
