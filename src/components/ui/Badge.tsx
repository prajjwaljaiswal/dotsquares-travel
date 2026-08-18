import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info';
export type BadgeSize = 'sm' | 'md';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  size?: BadgeSize;
  className?: string;
}

const variantClasses: Record<BadgeVariant, string> = {
  default: 'bg-gray-100 text-gray-800',
  success: 'bg-green-100 text-green-800',
  warning: 'bg-yellow-100 text-yellow-800',
  danger: 'bg-red-100 text-red-800',
  info: 'bg-blue-100 text-blue-800',
};

const sizeClasses: Record<BadgeSize, string> = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-2.5 py-1',
};

/**
 * Badge
 *
 * A small status/label pill. Uses role="status" so assistive technology
 * announces dynamic changes to badge content.
 *
 * @example
 * <Badge variant="success">Confirmed</Badge>
 */
export const Badge: React.FC<BadgeProps> = ({ children, variant = 'default', size = 'md', className = '' }) => {
  return (
    <span
      className={`inline-flex items-center rounded-full font-medium ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
      role="status"
    >
      {children}
    </span>
  );
};

export default Badge;
