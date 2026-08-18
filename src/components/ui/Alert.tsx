import React from 'react';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps {
  variant?: AlertVariant;
  title?: string;
  children: React.ReactNode;
  onClose?: () => void;
  className?: string;
}

const variantClasses: Record<AlertVariant, string> = {
  info: 'bg-blue-50 border-blue-400 text-blue-800',
  success: 'bg-green-50 border-green-400 text-green-800',
  warning: 'bg-yellow-50 border-yellow-400 text-yellow-800',
  error: 'bg-red-50 border-red-400 text-red-800',
};

/**
 * Alert
 *
 * An inline notification banner with role="alert" so screen readers announce
 * it immediately. Supports an optional dismiss button.
 *
 * @example
 * <Alert variant="error" title="Booking failed" onClose={() => setShow(false)}>
 *   Please check your payment details and try again.
 * </Alert>
 */
export const Alert: React.FC<AlertProps> = ({ variant = 'info', title, children, onClose, className = '' }) => {
  return (
    <div
      role="alert"
      className={`flex items-start gap-3 rounded-md border-l-4 p-4 ${variantClasses[variant]} ${className}`}
    >
      <div className="flex-1">
        {title && <p className="mb-1 font-semibold">{title}</p>}
        <div className="text-sm">{children}</div>
      </div>
      {onClose && (
        <button
          type="button"
          onClick={onClose}
          aria-label="Dismiss alert"
          className="rounded-md p-1 hover:bg-black/5 focus:outline-none focus:ring-2 focus:ring-current"
        >
          ✕
        </button>
      )}
    </div>
  );
};

export default Alert;
