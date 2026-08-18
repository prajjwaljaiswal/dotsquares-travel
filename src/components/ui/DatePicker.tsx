import React, { useId } from 'react';

export type DatePickerSize = 'sm' | 'md' | 'lg';

export interface DatePickerProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: string;
  size?: DatePickerSize;
  error?: string;
  minDate?: string;
  maxDate?: string;
}

const sizeClasses: Record<DatePickerSize, string> = {
  sm: 'px-2.5 py-1.5 text-sm',
  md: 'px-3 py-2 text-base',
  lg: 'px-4 py-3 text-lg',
};

/**
 * DatePicker
 *
 * A thin, accessible wrapper around the native date input, providing a
 * consistent label/error/helper API with the rest of the form components.
 *
 * @example
 * <DatePicker label="Departure date" minDate="2024-01-01" onChange={(e) => setDate(e.target.value)} />
 */
export const DatePicker: React.FC<DatePickerProps> = ({
  label,
  size = 'md',
  error,
  minDate,
  maxDate,
  id,
  className = '',
  ...rest
}) => {
  const generatedId = useId();
  const inputId = id ?? generatedId;
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
        type="date"
        min={minDate}
        max={maxDate}
        aria-invalid={!!error}
        aria-describedby={error ? errorId : undefined}
        className={`w-full rounded-md border bg-white ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        } ${sizeClasses[size]} focus:outline-none focus:ring-2 disabled:bg-gray-100 disabled:cursor-not-allowed ${className}`}
        {...rest}
      />
      {error && (
        <p id={errorId} className="text-sm text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  );
};

export default DatePicker;
