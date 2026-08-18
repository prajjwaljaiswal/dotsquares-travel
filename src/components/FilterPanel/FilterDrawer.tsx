import React, { useCallback, useEffect } from 'react';

export interface FilterDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
}

/**
 * Accessible modal/drawer used to present the filter form on mobile
 * viewports, closing on overlay click or Escape key.
 */
export const FilterDrawer: React.FC<FilterDrawerProps> = ({
  isOpen,
  onClose,
  title = 'Filters',
  children,
}) => {
  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    document.addEventListener('keydown', handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen, handleKeyDown]);

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="filter-drawer"
      role="dialog"
      aria-modal="true"
      aria-label={title}
      data-testid="filter-drawer"
    >
      <div
        className="filter-drawer__overlay"
        onClick={onClose}
        data-testid="filter-drawer-overlay"
      />
      <div className="filter-drawer__panel">
        <div className="filter-drawer__header">
          <h2 className="filter-drawer__title">{title}</h2>
          <button
            type="button"
            className="filter-drawer__close"
            onClick={onClose}
            aria-label="Close filters"
          >
            &times;
          </button>
        </div>
        <div className="filter-drawer__body">{children}</div>
      </div>
    </div>
  );
};
