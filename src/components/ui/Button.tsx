import React, { forwardRef } from 'react';
import { cn } from './utils';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style of the button. Defaults to 'primary'. */
  variant?: ButtonVariant;
  /** Size of the button. Defaults to 'md'. */
  size?: ButtonSize;
  /** Shows a loading spinner and disables interaction. */
  loading?: boolean;
  /** Optional icon rendered before the label. */
  startIcon?: React.ReactNode;
  /** Optional icon rendered after the label. */
  endIcon?: React.ReactNode;
}

/**
 * Button is the primary actionable element of the design system.
 *
 * @example
 * <Button variant="primary" size="md" onClick={() => console.log('clicked')}>
 *   Book Now
 * </Button>
 *
 * @example Loading state
 * <Button variant="secondary" loading aria-label="Saving changes">
 *   Save
 * </Button>
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      disabled,
      startIcon,
      endIcon,
      className,
      children,
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        className={cn(
          'ds-btn',
          'ds-focusable',
          `ds-btn--${variant}`,
          `ds-btn--${size}`,
          className
        )}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        aria-disabled={disabled || loading || undefined}
        {...rest}
      >
        {loading && <span className="ds-btn__spinner" role="status" aria-label="Loading" />}
        {!loading && startIcon}
        {children}
        {!loading && endIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
