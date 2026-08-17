import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { PackageGallery } from './PackageGallery';

const images = [
  { id: '1', url: 'image1.jpg', alt: 'Image 1' },
  { id: '2', url: 'image2.jpg', alt: 'Image 2' },
];

describe('PackageGallery', () => {
  it('renders the main image and thumbnails', () => {
    render(<PackageGallery images={images} />);
    expect(screen.getByAltText('Image 1')).toBeInTheDocument();
    expect(screen.getAllByRole('button', { name: /view image/i })).toHaveLength(2);
  });

  it('opens the lightbox when the main image is clicked', () => {
    render(<PackageGallery images={images} />);
    fireEvent.click(screen.getByLabelText('Open image lightbox'));
    expect(screen.getByTestId('lightbox')).toBeInTheDocument();
  });

  it('navigates to the next image inside the lightbox', () => {
    render(<PackageGallery images={images} />);
    fireEvent.click(screen.getByLabelText('Open image lightbox'));
    fireEvent.click(screen.getByLabelText('Next image'));
    expect(screen.getAllByAltText('Image 2').length).toBeGreaterThan(0);
  });

  it('renders an empty state when there are no images', () => {
    render(<PackageGallery images={[]} />);
    expect(screen.getByText('No images available')).toBeInTheDocument();
  });
});
