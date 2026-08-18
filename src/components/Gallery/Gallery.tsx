import { useCallback, useRef } from 'react';
import type { KeyboardEvent, TouchEvent } from 'react';
import { useState } from 'react';
import './Gallery.css';

export interface Photo {
  id: string;
  url: string;
  caption: string;
}

export interface GalleryProps {
  photos: Photo[];
}

const SWIPE_THRESHOLD = 50;

export const Gallery = ({ photos }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current + 1) % photos.length;
    });
  }, [photos.length]);

  const showPrev = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  }, [photos.length]);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowRight') showNext();
      if (event.key === 'ArrowLeft') showPrev();
    },
    [closeLightbox, showNext, showPrev]
  );

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = event.touches[0].clientX;
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (touchStartX.current === null) return;
    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > SWIPE_THRESHOLD) {
      showPrev();
    } else if (deltaX < -SWIPE_THRESHOLD) {
      showNext();
    }
    touchStartX.current = null;
  };

  if (!photos || photos.length === 0) {
    return <p className="gallery__empty">No photos available for this destination.</p>;
  }

  const activePhoto = activeIndex !== null ? photos[activeIndex] : null;

  return (
    <section className="gallery" aria-label="Destination photo gallery">
      <div className="gallery__grid">
        {photos.map((photo, index) => (
          <figure className="gallery__item" key={photo.id}>
            <button
              type="button"
              className="gallery__thumb-button"
              onClick={() => openLightbox(index)}
              aria-label={`Open photo: ${photo.caption}`}
              data-testid={`gallery-thumb-${photo.id}`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="gallery__thumb-image"
                loading="lazy"
              />
            </button>
            <figcaption className="gallery__thumb-caption">{photo.caption}</figcaption>
          </figure>
        ))}
      </div>

      {activePhoto && activeIndex !== null && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
          data-testid="lightbox"
          tabIndex={-1}
          onKeyDown={handleKeyDown}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <div className="lightbox__overlay" onClick={closeLightbox} />
          <div className="lightbox__content">
            <button
              type="button"
              className="lightbox__close"
              onClick={closeLightbox}
              aria-label="Close lightbox"
              data-testid="lightbox-close"
            >
              &#215;
            </button>
            <button
              type="button"
              className="lightbox__nav lightbox__nav--prev"
              onClick={showPrev}
              aria-label="Previous photo"
              data-testid="lightbox-prev"
            >
              &#8249;
            </button>
            <img
              src={activePhoto.url}
              alt={activePhoto.caption}
              className="lightbox__image"
              data-testid="lightbox-image"
            />
            <button
              type="button"
              className="lightbox__nav lightbox__nav--next"
              onClick={showNext}
              aria-label="Next photo"
              data-testid="lightbox-next"
            >
              &#8250;
            </button>
            <p className="lightbox__caption" data-testid="lightbox-caption">
              {activePhoto.caption} ({activeIndex + 1} / {photos.length})
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
