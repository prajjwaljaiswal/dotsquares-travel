import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import { SortControls, SortOption } from './SortControls';

describe('SortControls', () => {
  const defaultProps = {
    value: 'popularity' as SortOption,
    onChange: vi.fn(),
  };

  it('renders with default props', () => {
    render(<SortControls {...defaultProps} />);
    
    expect(screen.getByLabelText('Sort by:')).toBeInTheDocument();
    expect(screen.getByRole('combobox')).toHaveValue('popularity');
  });

  it('renders all sort options', () => {
    render(<SortControls {...defaultProps} />);
    
    const select = screen.getByRole('combobox');
    expect(select).toHaveTextContent('Popularity');
    expect(select).toHaveTextContent('Price: Low to High');
    expect(select).toHaveTextContent('Price: High to Low');
    expect(select).toHaveTextContent('Rating');
    expect(select).toHaveTextContent('Newest');
  });

  it('calls onChange when selection changes', () => {
    const onChange = vi.fn();
    render(<SortControls {...defaultProps} onChange={onChange} />);
    
    const select = screen.getByRole('combobox');
    fireEvent.change(select, { target: { value: 'rating' } });
    
    expect(onChange).toHaveBeenCalledWith('rating');
  });

  it('updates selected value when prop changes', () => {
    const { rerender } = render(<SortControls {...defaultProps} value="price-low-high" />);
    
    expect(screen.getByRole('combobox')).toHaveValue('price-low-high');
    
    rerender(<SortControls {...defaultProps} value="newest" />);
    expect(screen.getByRole('combobox')).toHaveValue('newest');
  });

  it('applies custom className', () => {
    render(<SortControls {...defaultProps} className="custom-class" />);
    
    expect(screen.getByLabelText('Sort by:').parentElement).toHaveClass('custom-class');
  });

  it('has correct aria-label', () => {
    render(<SortControls {...defaultProps} />);
    
    expect(screen.getByRole('combobox')).toHaveAttribute('aria-label', 'Sort results');
  });
});