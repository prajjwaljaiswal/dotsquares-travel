import React, { HTMLAttributes, ReactNode } from 'react';

/**
 * Card component
 *
 * A reusable, accessible container component used to group related content
 * (e.g. trip summaries, hotel listings, dashboard stats).
 *
 * Usage examples:
 *
 * tsx
 * <Card title="Paris Getaway" subtitle="5 nights" variant="elevated">
 *   <p>Explore the city of lights with our curated package.</p>
 * </Card>
 *
 * <Card
 *   variant="outlined"
 *   size="lg"
 *   title={<span className="text-primary-600">Custom Title Node</span>}
 *   footer={<Button variant="primary">Book now</Button>}
 * >
 *   Card body content goes here.
 * </Card>
 * 
 */

export type CardVariant = 'default' | 'outlined' | 'elevated' | 'flat';
export type CardSize = 'sm' | 'md' | 'lg';

// We omit the native `title` attribute (typed as `string | undefined`)
// from HTMLAttributes because Card's `title` prop supports rich ReactNode
// content (e.g. icons, styled text) and would otherwise conflict in type.
export interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** Optional title rendered in the card header. Accepts any ReactNode. */
  title?: ReactNode;
  /** Optional subtitle rendered below the title. */
  subtitle?: ReactNode;
  /** Optional footer content, typically actions/buttons. */
  footer?: ReactNode;
  /** Visual style variant of the card. */
  variant?: CardVariant;
  /** Padding/size variant of the card. */
  size?: CardSize;
  /** Marks the card as interactive/clickable (adds hover + focus styles). */
  interactive?: boolean;
  /** Accessible label for the card when no visible title is present. */
  ariaLabel?: string;
}

const variantStyles: Record<CardVariant, string> = {
  default: 'bg-white border border-gray-200',
  outlined: 'bg-white border-2 border-gray-300',
  elevated: 'bg-white border border-gray-100 shadow-md',
  flat: 'bg-gray-50 border border-transparent',
};

const sizeStyles: Record<CardSize, string> = {
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
};

const headerSizeStyles: Record<CardSize, string> = {
  sm: 'mb-2',
  md: 'mb-3',
  lg: 'mb-4',
};

export const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  footer,
  variant = 'default',
  size = 'md',
  interactive = false,
  ariaLabel,
  className = '',
  children,
  ...rest
}) => {
  const baseStyles =
    'rounded-lg transition-shadow duration-150 focus:outline-none';
  const interactiveStyles = interactive
    ? 'cursor-pointer hover:shadow-lg focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2'
    : '';

  return (
    <div
      className={[
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        interactiveStyles,
        className,
      ]
        .filter(Boolean)
        .join(' ')}
      role={interactive ? 'button' : 'group'}
      tabIndex={interactive ? 0 : undefined}
      aria-label={ariaLabel ?? (typeof title === 'string' ? title : undefined)}
      {...rest}
    >
      {(title || subtitle) && (
        <div className={headerSizeStyles[size]}>
          {title && (
            <div className="text-lg font-semibold text-gray-900">{title}</div>
          )}
          {subtitle && (
            <div className="text-sm text-gray-500 mt-1">{subtitle}</div>
          )}
        </div>
      )}

      <div className="text-gray-700">{children}</div>

      {footer && (
        <div className="mt-4 pt-3 border-t border-gray-100 flex items-center justify-end gap-2">
          {footer}
        </div>
      )}
    </div>
  );
};

export default Card;
