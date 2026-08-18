import { useCallback, useEffect, useState } from 'react';
import type { KeyboardEvent } from 'react';
import type { PackageGalleryImage, PackageGalleryProps } from './PackageGallery.types';
import styles from './PackageGallery.module.css';

export function PackageGallery({ images, className }: PackageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const isLightboxOpen = activeIndex !== null;

  const openLightbox = useCallback((index: number) => {
    setActiveIndex(index);
  }, []);

  const closeLightbox = useCallback(() => {
    setActiveIndex(null);
  }, []);

  const showPrevious = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current - 1 + images.length) % images.length;
    });
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((current) => {
      if (current === null || images.length === 0) return current;
      return (current + 1) % images.length;
    });
  }, [images.length]);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (event: globalThis.KeyboardEvent) => {
      if (event.key === 'Escape') closeLightbox();
      if (event.key === 'ArrowLeft') showPrevious();
      if (event.key === 'ArrowRight') showNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isLightboxOpen, closeLightbox, showPrevious, showNext]);

  const handleThumbnailKeyDown = (event: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      openLightbox(index);
    }
  };

  if (images.length === 0) {
    return null;
  }

  const activeImage: PackageGalleryImage | null = activeIndex !== null ? images[activeIndex] : null;

  return (
    <div
      className={className ? `${styles.gallery} ${className}` : styles.gallery}
      data-testid="package-gallery"
    >
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={styles.thumbnailButton}
            onClick={() => openLightbox(index)}
            onKeyDown={(event) => handleThumbnailKeyDown(event, index)}
            data-testid={`gallery-thumbnail-${image.id}`}
            aria-label={`Open image ${index + 1} of ${images.length}: ${image.alt}`}
          >
            <img src={image.src} alt={image.alt} className={styles.thumbnailImage} loading="lazy" />
          </button>
        ))}
      </div>

      {isLightboxOpen && activeImage && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Image gallery lightbox"
          data-testid="package-gallery-lightbox"
          onClick={closeLightbox}
        >
          <div className={styles.lightboxContent} onClick={(event) => event.stopPropagation()}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={closeLightbox}
              aria-label="Close lightbox"
              data-testid="lightbox-close"
            >
              &times;
            </button>
            {images.length > 1 && (
              <button
                type="button"
                className={styles.navButtonPrevious}
                onClick={showPrevious}
                aria-label="Previous image"
                data-testid="lightbox-previous"
              >
                &#8249;
              </button>
            )}
            <img src={activeImage.src} alt={activeImage.alt} className={styles.lightboxImage} />
            {activeImage.caption && <p className={styles.caption}>{activeImage.caption}</p>}
            {images.length > 1 && (
              <button
                type="button"
                className={styles.navButtonNext}
                onClick={showNext}
                aria-label="Next image"
                data-testid="lightbox-next"
              >
                &#8250;
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default PackageGallery;
