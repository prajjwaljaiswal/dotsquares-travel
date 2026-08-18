import { useState } from 'react';
import styles from './PackageGallery.module.css';

export interface PackageGalleryImage {
  src: string;
  alt?: string;
}

export interface PackageGalleryProps {
  images: PackageGalleryImage[];
}

export function PackageGallery({ images }: PackageGalleryProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images || images.length === 0) {
    return null;
  }

  const selectedImage = images[selectedIndex];

  const handleThumbnailClick = (index: number) => {
    setSelectedIndex(index);
  };

  const handleMainImageClick = () => {
    setIsLightboxOpen(true);
  };

  const handleCloseLightbox = () => {
    setIsLightboxOpen(false);
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={styles.gallery}>
      <div className={styles.mainImageWrapper}>
        <button
          type="button"
          className={styles.mainImageButton}
          onClick={handleMainImageClick}
          aria-label="Open image lightbox"
        >
          <img
            src={selectedImage.src}
            alt={selectedImage.alt ?? `Image ${selectedIndex + 1}`}
            className={styles.mainImage}
          />
        </button>
      </div>
      <div className={styles.thumbnailRow}>
        {images.map((image, index) => (
          <button
            key={`${image.src}-${index}`}
            type="button"
            className={`${styles.thumbnailButton} ${
              index === selectedIndex ? styles.thumbnailButtonActive : ''
            }`.trim()}
            aria-label={`View image ${index + 1}`}
            onClick={() => handleThumbnailClick(index)}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={styles.thumbnail}
            />
          </button>
        ))}
      </div>

      {isLightboxOpen && (
        <div
          className={styles.lightboxOverlay}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            className={styles.lightboxClose}
            aria-label="Close lightbox"
            onClick={handleCloseLightbox}
          >
            ×
          </button>
          <button
            type="button"
            className={styles.lightboxPrev}
            aria-label="Previous image"
            onClick={handlePrev}
          >
            ‹
          </button>
          <img
            src={selectedImage.src}
            alt={selectedImage.alt ?? `Image ${selectedIndex + 1}`}
            className={styles.lightboxImage}
          />
          <button
            type="button"
            className={styles.lightboxNext}
            aria-label="Next image"
            onClick={handleNext}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}

export default PackageGallery;
