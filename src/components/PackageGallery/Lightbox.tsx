import { useEffect, useCallback } from 'react';
import type { PackageImage } from '../../types/package';
import styles from './Lightbox.module.css';

interface LightboxProps {
  images: PackageImage[];
  activeIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export function Lightbox({ images, activeIndex, onClose, onNavigate }: LightboxProps) {
  const goPrev = useCallback(() => {
    onNavigate((activeIndex - 1 + images.length) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  const goNext = useCallback(() => {
    onNavigate((activeIndex + 1) % images.length);
  }, [activeIndex, images.length, onNavigate]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, goPrev, goNext]);

  const activeImage = images[activeIndex];

  return (
    <div className={styles.overlay} role="dialog" aria-modal="true" data-testid="lightbox">
      <button type="button" className={styles.closeButton} onClick={onClose} aria-label="Close lightbox">
        &times;
      </button>

      {images.length > 1 && (
        <button type="button" className={styles.navButtonLeft} onClick={goPrev} aria-label="Previous image">
          &#8249;
        </button>
      )}

      <img className={styles.lightboxImage} src={activeImage.url} alt={activeImage.alt} />

      {images.length > 1 && (
        <button type="button" className={styles.navButtonRight} onClick={goNext} aria-label="Next image">
          &#8250;
        </button>
      )}

      <div className={styles.counter}>
        {activeIndex + 1} / {images.length}
      </div>
    </div>
  );
}
