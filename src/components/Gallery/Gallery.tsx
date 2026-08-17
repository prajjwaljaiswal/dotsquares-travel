import React, { useCallback, useState } from 'react';
import { DestinationPhoto } from '../../data/destinationPhotos';
import Lightbox from './Lightbox';
import './Gallery.css';

export interface GalleryProps {
  photos: DestinationPhoto[];
  title?: string;
}

const Gallery: React.FC<GalleryProps> = ({ photos, title = 'Photo gallery' }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const openLightboxAt = useCallback((index: number) => {
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

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null) return current;
      return (current - 1 + photos.length) % photos.length;
    });
  }, [photos.length]);

  if (!photos.length) {
    return null;
  }

  return (
    <section className="gallery" aria-label={title}>
      <h2 className="gallery__heading">{title}</h2>
      <div className="gallery__grid" data-testid="gallery-grid">
        {photos.map((photo, index) => (
          <button
            key={photo.id}
            type="button"
            className="gallery__item"
            onClick={() => openLightboxAt(index)}
            aria-label={`Open image: ${photo.caption}`}
            data-testid={`gallery-item-${index}`}
          >
            <img
              className="gallery__thumbnail"
              src={photo.thumbnailUrl}
              alt={photo.alt}
              loading="lazy"
            />
            <span className="gallery__caption">{photo.caption}</span>
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          photos={photos}
          activeIndex={activeIndex}
          onClose={closeLightbox}
          onNext={showNext}
          onPrevious={showPrevious}
        />
      )}
    </section>
  );
};

export default Gallery;
