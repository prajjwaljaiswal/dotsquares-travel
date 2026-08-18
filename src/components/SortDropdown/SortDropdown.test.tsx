import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { SortDropdown } from './SortDropdown';

describe('SortDropdown', () => {
  it('renders with accessible label', () => {
    render(<SortDropdown value="popularity" onChange={() => {}} />);
    
    const select = screen.getByLabelText(/sort by/i);
    expect(select).toBeInTheDocument();
    expect(select).toBeVisible();
  });

  it('renders all five sort options', () => {
    render(<SortDropdown value="popularity" onChange={() => {}} />);
    
    const options = screen.getAllByRole('option');
    expect(options).toHaveLength(5);
    
    expect(options[0]).toHaveValue('popularity');
    expect(options[0]).toHaveTextContent(/most popular/i);
    
    expect(options[1]).toHaveValue('price_asc');
    expect(options[1]).toHaveTextContent(/price: low to high/i);
    
    expect(options[2]).toHaveValue('price_desc');
    expect(options[2]).toHaveTextContent(/price: high to low/i);
    
    expect(options[3]).toHaveValue('rating');
    expect(options[3]).toHaveTextContent(/highest rated/i);
    
    expect(options[4]).toHaveValue('newest');
    expect(options[4]).toHaveTextContent(/newest first/i);
  });

  it('calls onChange with selected value when selection changes', () => {
    const handleChange = vi.fn();
    render(<SortDropdown value="popularity" onChange={handleChange} />);
    
    const select = screen.getByLabelText(/sort by/i);
    fireEvent.change(select, { target: { value: 'price_asc' } });
    
    expect(handleChange).toHaveBeenCalledTimes(1);
    expect(handleChange).toHaveBeenCalledWith('price_asc');
  });

  it('reflects the current value prop as selected', () => {
    const { rerender } = render(<SortDropdown value="popularity" onChange={() => {}} />);
    
    let select = screen.getByLabelText(/sort by/i) as HTMLSelectElement;
    expect(select.value).toBe('popularity');
    
    rerender(<SortDropdown value="rating" onChange={() => {}} />);
    select = screen.getByLabelText(/sort by/i) as HTMLSelectElement;
    expect(select.value).toBe('rating');
  });

  it('applies custom className when provided', () => {
    render(<SortDropdown value="popularity" onChange={() => {}} className="custom-class" />);
    
    const container = screen.getByLabelText(/sort by/i).parentElement;
    expect(container).toHaveClass('custom-class');
  });

  it('maintains selected value through multiple changes', () => {
    const handleChange = vi.fn();
    const { rerender } = render(<SortDropdown value="popularity" onChange={handleChange} />);
    
    const select = screen.getByLabelText(/sort by/i);
    
    fireEvent.change(select, { target: { value: 'newest' } });
    expect(handleChange).toHaveBeenLastCalledWith('newest');
    
    rerender(<SortDropdown value="newest" onChange={handleChange} />);
    expect((select as HTMLSelectElement).value).toBe('newest');
    
    fireEvent.change(select, { target: { value: 'price_desc' } });
    expect(handleChange).toHaveBeenLastCalledWith('price_desc');
  });
});