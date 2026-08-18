import React, { useEffect, useRef } from 'react';
import { DestinationPhoto } from '../../data/destinationPhotos';
import './Lightbox.css';

export interface LightboxProps {
  photos: DestinationPhoto[];
  activeIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
}

const SWIPE_THRESHOLD_PX = 40;

const Lightbox: React.FC<LightboxProps> = ({
  photos,
  activeIndex,
  onClose,
  onNext,
  onPrevious,
}) => {
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);

  const activePhoto = photos[activeIndex];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        onNext();
      } else if (event.key === 'ArrowLeft') {
        onPrevious();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    dialogRef.current?.focus();

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onNext, onPrevious]);

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.touches[0].clientX;
    touchEndXRef.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const startX = touchStartXRef.current;
    const endX = touchEndXRef.current;

    if (startX === null || endX === null) {
      return;
    }

    const deltaX = endX - startX;

    if (Math.abs(deltaX) >= SWIPE_THRESHOLD_PX) {
      if (deltaX < 0) {
        onNext();
      } else {
        onPrevious();
      }
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  const handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  if (!activePhoto) {
    return null;
  }

  return (
    <div
      className="lightbox"
      role="dialog"
      aria-modal="true"
      aria-label={activePhoto.caption}
      onClick={handleOverlayClick}
      data-testid="lightbox-overlay"
    >
      <div
        className="lightbox__content"
        ref={dialogRef}
        tabIndex={-1}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        data-testid="lightbox-content"
      >
        <button
          type="button"
          className="lightbox__close"
          onClick={onClose}
          aria-label="Close gallery"
          data-testid="lightbox-close"
        >
          &times;
        </button>

        <button
          type="button"
          className="lightbox__nav lightbox__nav--prev"
          onClick={onPrevious}
          aria-label="Previous image"
          data-testid="lightbox-prev"
        >
          &#8249;
        </button>

        <img
          className="lightbox__image"
          src={activePhoto.url}
          alt={activePhoto.alt}
          data-testid="lightbox-image"
        />

        <button
          type="button"
          className="lightbox__nav lightbox__nav--next"
          onClick={onNext}
          aria-label="Next image"
          data-testid="lightbox-next"
        >
          &#8250;
        </button>

        <p className="lightbox__caption">
          {activePhoto.caption} ({activeIndex + 1} / {photos.length})
        </p>
      </div>
    </div>
  );
};

export default Lightbox;
