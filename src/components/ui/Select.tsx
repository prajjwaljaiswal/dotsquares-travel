import React, { forwardRef, useId } from 'react';
import { cn } from './utils';

export type SelectSize = 'sm' | 'md' | 'lg';

export interface SelectOption {
  label: string;
  value: string;
}

export interface SelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, 'size'> {
  /** Visible label associated with the select via htmlFor/id. */
  label?: string;
  /** Size of the select control. Defaults to 'md'. */
  size?: SelectSize;
  /** Validation error message. When present, the field is marked invalid. */
  error?: string;
  /** Helper text shown below the field when there is no error. */
  helperText?: string;
  /** Options rendered inside the select. */
  options: SelectOption[];
  /** Optional placeholder shown as a disabled first option. */
  placeholder?: string;
}

/**
 * Select is a labeled, accessible dropdown built on the native <select> element.
 *
 * @example
 * <Select
 *   label="Trip Type"
 *   placeholder="Choose a trip type"
 *   options={[{ label: 'One-way', value: 'one-way' }, { label: 'Round-trip', value: 'round-trip' }]}
 * />
 */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, size = 'md', error, helperText, options, placeholder, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const selectId = id ?? generatedId;
    const helperId = `${selectId}-helper`;

    return (
      <div className="ds-field">
        {label && (
          <label className="ds-field__label" htmlFor={selectId}>
            {label}
          </label>
        )}
        <select
          ref={ref}
          id={selectId}
          className={cn(
            'ds-field__control',
            'ds-focusable',
            `ds-field__control--${size}`,
            error && 'ds-field__control--error',
            className
          )}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error || helperText ? helperId : undefined}
          defaultValue={rest.defaultValue ?? (placeholder ? '' : undefined)}
          {...rest}
        >
          {placeholder && (
            <option value="" disabled hidden>
              {placeholder}
            </option>
          )}
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && (
          <span id={helperId} className="ds-field__error" role="alert">
            {error}
          </span>
        )}
        {!error && helperText && (
          <span id={helperId} className="ds-field__helper">
            {helperText}
          </span>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
