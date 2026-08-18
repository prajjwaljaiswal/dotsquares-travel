import type { AvailabilityStatus } from '../../types/package';
import styles from './AvailabilityBadge.module.css';

interface AvailabilityBadgeProps {
  status: AvailabilityStatus;
  availableSpots?: number;
}

const LABELS: Record<AvailabilityStatus, string> = {
  available: 'Available',
  limited: 'Limited Spots',
  soldout: 'Sold Out',
};

export function AvailabilityBadge({ status, availableSpots }: AvailabilityBadgeProps) {
  const label =
    status === 'limited' && availableSpots
      ? `${LABELS[status]} (${availableSpots} left)`
      : LABELS[status];

  return (
    <span className={`${styles.badge} ${styles[status]}`} data-testid="availability-badge">
      {label}
    </span>
  );
}
