import React, { forwardRef, useId } from 'react';
import { cn } from './utils';

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  /** Visible label associated with the date field via htmlFor/id. */
  label?: string;
  /** Size of the control. Defaults to 'md'. */
  size?: DatePickerSize;
  /** Validation error message. When present, the field is marked invalid. */
  error?: string;
  /** Helper text shown below the field when there is no error. */
  helperText?: string;
  /** Minimum selectable date in ISO format (YYYY-MM-DD). */
  min?: string;
  /** Maximum selectable date in ISO format (YYYY-MM-DD). */
  max?: string;
}

/**
 * DatePicker is an accessible wrapper around the native HTML date input,
 * providing a consistent label, sizing, and validation API with the rest
 * of the design system. It intentionally avoids a heavy calendar widget so
 * it inherits full native keyboard and screen-reader support.
 *
 * @example
 * <DatePicker label="Departure Date" min="2024-01-01" size="md" />
 */
export const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  ({ label, size = 'md', error, helperText, id, className, ...rest }, ref) => {
    const generatedId = useId();
    const inputId = id ?? generatedId;
    const helperId = `${inputId}-helper`;

    return (
      <div className="ds-field">
        {label && (
          <label className="ds-field__label" htmlFor={inputId}>
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          type="date"
          className={cn(
            'ds-field__control',
            'ds-focusable',
            `ds-field__control--${size}`,
            error && 'ds-field__control--error',
            className
          )}
          aria-invalid={Boolean(error) || undefined}
          aria-describedby={error || helperText ? helperId : undefined}
          {...rest}
        />
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

DatePicker.displayName = 'DatePicker';
