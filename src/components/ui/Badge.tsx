import React from 'react';
import { cn } from './utils';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md' | 'lg';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Semantic color variant. Defaults to 'default'. */
  variant?: BadgeVariant;
  /** Size of the badge text/padding. Defaults to 'md'. */
  size?: BadgeSize;
}

/**
 * Badge displays a small status or count label.
 *
 * @example
 * <Badge variant="success" size="sm">Confirmed</Badge>
 */
export function Badge({ variant = 'default', size = 'md', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn('ds-badge', `ds-badge--${variant}`, `ds-badge--${size}`, className)}
      {...rest}
    >
      {children}
    </span>
  );
}
