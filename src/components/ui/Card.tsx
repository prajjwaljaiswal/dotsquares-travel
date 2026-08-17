import React from 'react';
import { cn } from './utils';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'sm' | 'md' | 'lg';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Visual style of the card container. Defaults to 'elevated'. */
  variant?: CardVariant;
  /** Inner padding size. Defaults to 'md'. */
  padding?: CardPadding;
  /** Optional title rendered at the top of the card. */
  title?: React.ReactNode;
}

/**
 * Card is a generic content container used to group related information.
 *
 * @example
 * <Card variant="outlined" padding="md" title="Trip Summary">
 *   <p>3 nights in Paris</p>
 * </Card>
 */
export function Card({
  variant = 'elevated',
  padding = 'md',
  title,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn('ds-card', `ds-card--${variant}`, `ds-card--padding-${padding}`, className)}
      {...rest}
    >
      {title && <h3 className="ds-card__title">{title}</h3>}
      {children}
    </div>
  );
}
