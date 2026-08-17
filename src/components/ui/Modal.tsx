import React, { useEffect, useRef } from 'react';
import { cn } from './utils';

export type ModalSize = 'sm' | 'md' | 'lg';

export interface ModalProps {
  /** Controls whether the modal is rendered/visible. */
  isOpen: boolean;
  /** Called when the user requests to close the modal (Escape key, overlay click, close button). */
  onClose: () => void;
  /** Title rendered in the modal header and used for aria-labelledby. */
  title: string;
  /** Size of the modal dialog. Defaults to 'md'. */
  size?: ModalSize;
  children?: React.ReactNode;
  /** Optional extra className applied to the dialog element. */
  className?: string;
}

/**
 * Modal is an accessible dialog overlay with focus management and Escape-to-close.
 *
 * @example
 * const [open, setOpen] = useState(false);
 * <Modal isOpen={open} onClose={() => setOpen(false)} title="Confirm Booking" size="md">
 *   <p>Are you sure you want to confirm this booking?</p>
 * </Modal>
 */
export function Modal({ isOpen, onClose, title, size = 'md', children, className }: ModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const previouslyFocused = document.activeElement as HTMLElement | null;
    dialogRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      previouslyFocused?.focus();
    };
  }, [isOpen, onClose]);

  if (!isOpen) {
    return null;
  }

  const titleId = 'ds-modal-title';

  return (
    <div
      className="ds-modal-overlay"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={dialogRef}
        className={cn('ds-modal', 'ds-focusable', `ds-modal--${size}`, className)}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        tabIndex={-1}
      >
        <div className="ds-modal__header">
          <h2 id={titleId} className="ds-modal__title">
            {title}
          </h2>
          <button
            type="button"
            className="ds-modal__close ds-focusable"
            aria-label="Close dialog"
            onClick={onClose}
          >
            ×
          </button>
        </div>
        <div className="ds-modal__body">{children}</div>
      </div>
    </div>
  );
}
