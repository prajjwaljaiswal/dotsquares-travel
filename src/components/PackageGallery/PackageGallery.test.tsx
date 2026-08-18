import { describe, expect, it } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import { PackageGallery } from './PackageGallery';
import type { PackageGalleryImage } from './PackageGallery.types';

const mockImages: PackageGalleryImage[] = [
  { id: 'img-1', src: '/images/pkg-1.jpg', alt: 'Beach view' },
  { id: 'img-2', src: '/images/pkg-2.jpg', alt: 'Mountain view' },
  { id: 'img-3', src: '/images/pkg-3.jpg', alt: 'City view' },
];

describe('PackageGallery', () => {
  it('renders a thumbnail for each image', () => {
    render(<PackageGallery images={mockImages} />);

    mockImages.forEach((image) => {
      expect(screen.getByTestId(`gallery-thumbnail-${image.id}`)).toBeInTheDocument();
    });
  });

  it('opens the lightbox with the selected image when a thumbnail is clicked', () => {
    render(<PackageGallery images={mockImages} />);

    fireEvent.click(screen.getByTestId(`gallery-thumbnail-${mockImages[1].id}`));

    const lightbox = screen.getByTestId('package-gallery-lightbox');
    expect(lightbox).toBeInTheDocument();
    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it('navigates to the next image in the lightbox', () => {
    render(<PackageGallery images={mockImages} />);

    fireEvent.click(screen.getByTestId(`gallery-thumbnail-${mockImages[0].id}`));
    fireEvent.click(screen.getByTestId('lightbox-next'));

    expect(screen.getByAltText(mockImages[1].alt)).toBeInTheDocument();
  });

  it('navigates to the previous image in the lightbox', () => {
    render(<PackageGallery images={mockImages} />);

    fireEvent.click(screen.getByTestId(`gallery-thumbnail-${mockImages[0].id}`));
    fireEvent.click(screen.getByTestId('lightbox-previous'));

    expect(screen.getByAltText(mockImages[mockImages.length - 1].alt)).toBeInTheDocument();
  });

  it('closes the lightbox when the close button is clicked', () => {
    render(<PackageGallery images={mockImages} />);

    fireEvent.click(screen.getByTestId(`gallery-thumbnail-${mockImages[0].id}`));
    fireEvent.click(screen.getByTestId('lightbox-close'));

    expect(screen.queryByTestId('package-gallery-lightbox')).not.toBeInTheDocument();
  });

  it('renders nothing when there are no images', () => {
    const { container } = render(<PackageGallery images={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
