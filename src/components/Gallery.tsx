import React, { useCallback, useEffect, useRef, useState } from 'react';
import { DestinationPhoto } from '../types/destination';
import './Gallery.css';

export interface GalleryProps {
  photos: DestinationPhoto[];
  title?: string;
}

const SWIPE_THRESHOLD = 50;

const Gallery: React.FC<GalleryProps> = ({ photos, title }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const isOpen = activeIndex !== null;

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || photos.length === 0) return current;
      return (current + 1) % photos.length;
    });
  }, [photos.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || photos.length === 0) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  }, [photos.length]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, closeLightbox, showNext, showPrev]);

  const handleTouchStart = (event: React.TouchEvent) => {
    touchStartX.current = event.touches[0].clientX;
    touchEndX.current = null;
  };

  const handleTouchMove = (event: React.TouchEvent) => {
    touchEndX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;
    const delta = touchStartX.current - touchEndX.current;

    if (Math.abs(delta) > SWIPE_THRESHOLD) {
      if (delta > 0) {
        showNext();
      } else {
        showPrev();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!photos || photos.length === 0) {
    return null;
  }

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <div className="gallery">
      {title && <h2 className="gallery__title">{title}</h2>}
      <div className="gallery__grid">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className="gallery__item"
            onClick={() => openLightbox(index)}
            aria-label={`Open image: ${photo.alt}`}
          >
            <img
              className="gallery__thumbnail"
              src={photo.thumbnailUrl}
              alt={photo.alt}
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {isOpen && activePhoto && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={activePhoto.alt}
          onClick={closeLightbox}
        >
          <div
            className="gallery-lightbox__content"
            onClick={(event) => event.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <button
              type="button"
              className="gallery-lightbox__close"
              onClick={closeLightbox}
              aria-label="Close gallery"
            >
              &times;
            </button>

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--prev"
              onClick={showPrev}
              aria-label="Previous image"
            >
              &#8249;
            </button>

            <img
              className="gallery-lightbox__image"
              src={activePhoto.url}
              alt={activePhoto.alt}
            />

            <button
              type="button"
              className="gallery-lightbox__nav gallery-lightbox__nav--next"
              onClick={showNext}
              aria-label="Next image"
            >
              &#8250;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
