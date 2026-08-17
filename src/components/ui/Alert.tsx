import React, { useState } from 'react';
import { cn } from './utils';

export type AlertVariant = 'info' | 'success' | 'warning' | 'error';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Semantic severity of the alert. Defaults to 'info'. */
  variant?: AlertVariant;
  /** Optional bold title shown above the message. */
  title?: string;
  /** Allows the user to dismiss the alert. Defaults to false. */
  dismissible?: boolean;
  /** Called when the alert is dismissed. */
  onDismiss?: () => void;
}

/**
 * Alert communicates important, contextual feedback messages.
 *
 * @example
 * <Alert variant="error" title="Booking failed" dismissible onDismiss={() => {}}>
 *   Please check your payment details and try again.
 * </Alert>
 */
export function Alert({
  variant = 'info',
  title,
  dismissible = false,
  onDismiss,
  className,
  children,
  ...rest
}: AlertProps) {
  const [visible, setVisible] = useState(true);

  if (!visible) {
    return null;
  }

  const handleDismiss = () => {
    setVisible(false);
    onDismiss?.();
  };

  return (
    <div
      className={cn('ds-alert', `ds-alert--${variant}`, className)}
      role={variant === 'error' ? 'alert' : 'status'}
      aria-live={variant === 'error' ? 'assertive' : 'polite'}
      {...rest}
    >
      <div className="ds-alert__content">
        {title && <div className="ds-alert__title">{title}</div>}
        <div>{children}</div>
      </div>
      {dismissible && (
        <button
          type="button"
          className="ds-alert__close ds-focusable"
          aria-label="Dismiss alert"
          onClick={handleDismiss}
        >
          ×
        </button>
      )}
    </div>
  );
}
