import React from 'react';

export type CardVariant = 'elevated' | 'outlined' | 'filled';
export type CardPadding = 'none' | 'sm' | 'md' | 'lg';

export interface CardProps {
  children: React.ReactNode;
  variant?: CardVariant;
  padding?: CardPadding;
  title?: string;
  className?: string;
  onClick?: () => void;
}

const paddingClasses: Record<CardPadding, string> = {
  none: 'p-0',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-8',
};

const variantClasses: Record<CardVariant, string> = {
  elevated: 'bg-white shadow-lg border border-transparent',
  outlined: 'bg-white border border-gray-300 shadow-none',
  filled: 'bg-gray-100 border border-transparent shadow-none',
};

/**
 * Card
 *
 * A container component supporting elevated, outlined, and filled variants
 * plus configurable padding. When an onClick handler is supplied the card
 * becomes keyboard-interactive (Enter/Space triggers the click).
 *
 * @example
 * <Card variant="elevated" padding="lg" title="Trip summary">
 *   Your itinerary details go here.
 * </Card>
 *
 * @example
 * <Card variant="filled" padding="sm" onClick={() => selectDestination('paris')}>
 *   Paris
 * </Card>
 */
export const Card: React.FC<CardProps> = ({
  children,
  variant = 'elevated',
  padding = 'md',
  title,
  className = '',
  onClick,
}) => {
  const interactive = typeof onClick === 'function';

  return (
    <div
      className={`rounded-lg transition-shadow duration-200 ${variantClasses[variant]} ${paddingClasses[padding]} ${
        interactive ? 'cursor-pointer hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500' : ''
      } ${className}`}
      onClick={onClick}
      role={interactive ? 'button' : undefined}
      tabIndex={interactive ? 0 : undefined}
      onKeyDown={
        interactive
          ? (e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick?.();
              }
            }
          : undefined
      }
    >
      {title && <h3 className="text-lg font-semibold mb-2 text-gray-900">{title}</h3>}
      {children}
    </div>
  );
};

export default Card;
