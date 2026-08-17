import { useState } from 'react';
import type { PackageImage } from '../../types/package';
import { Lightbox } from './Lightbox';
import styles from './PackageGallery.module.css';

interface PackageGalleryProps {
  images: PackageImage[];
}

export function PackageGallery({ images }: PackageGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  if (!images.length) {
    return <div className={styles.empty}>No images available</div>;
  }

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setIsLightboxOpen(true);
  };

  return (
    <div className={styles.gallery} data-testid="package-gallery">
      <button
        type="button"
        className={styles.mainImageButton}
        onClick={() => openLightbox(activeIndex)}
        aria-label="Open image lightbox"
      >
        <img className={styles.mainImage} src={images[activeIndex].url} alt={images[activeIndex].alt} />
      </button>

      {images.length > 1 && (
        <div className={styles.thumbnails}>
          {images.map((image, index) => (
            <button
              key={image.id}
              type="button"
              className={`${styles.thumbnailButton} ${index === activeIndex ? styles.activeThumbnail : ''}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`View image ${index + 1}`}
            >
              <img className={styles.thumbnail} src={image.url} alt={image.alt} />
            </button>
          ))}
        </div>
      )}

      {isLightboxOpen && (
        <Lightbox
          images={images}
          activeIndex={activeIndex}
          onClose={() => setIsLightboxOpen(false)}
          onNavigate={setActiveIndex}
        />
      )}
    </div>
  );
}
