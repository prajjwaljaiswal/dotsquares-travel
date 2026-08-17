import React, { forwardRef, useId } from 'react';
import { cn } from './utils';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** Visible label associated with the input via htmlFor/id. */
  label?: string;
  /** Size of the input control. Defaults to 'md'. */
  size?: InputSize;
  /** Validation error message. When present, the field is marked invalid. */
  error?: string;
  /** Helper text shown below the field when there is no error. */
  helperText?: string;
}

/**
 * Input is a labeled, accessible text field with error/helper text support.
 *
 * @example
 * <Input label="Destination" placeholder="Where are you going?" size="md" />
 *
 * @example With validation error
 * <Input label="Email" error="Please enter a valid email address" />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
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

Input.displayName = 'Input';
