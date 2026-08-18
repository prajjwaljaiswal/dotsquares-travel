import React, { useId } from 'react';

export type InputSize = 'sm' | 'md' | 'lg';

export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'> {
  label?: string;
  size?: InputSize;
  error?: string;
  helperText?: string;
}

const sizeClasses: Record<InputSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

/**
 * Input
 *
 * A labelled text input with error/helper text support. Error state is
 * announced via aria-invalid and role="alert" on the error message.
 *
 * @example
 * <Input label="Destination" placeholder="Where to?" helperText="City or airport" />
 *
 * @example
 * <Input label="Email" error="Email is required" />
 */
export const Input: React.FC<InputProps> = ({
  label,
  size = 'md',
  error,
  helperText,
  id,
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const helperId = `${inputId}-helper`;
  const errorId = `${inputId}-error`;

  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label htmlFor={inputId} className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <input
        id={inputId}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : helperText ? helperId : undefined}
        className={`w-full rounded-md border ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        } bg-white ${sizeClasses[size]} focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
      {!error && helperText && (
        <p id={helperId} className="text-sm text-gray-500">
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
