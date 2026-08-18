import { describe, it, expect } from 'vitest';
import { render, screen, within, fireEvent } from '@testing-library/react';
import { Gallery, type Photo } from './Gallery';

const mockPhotos: Photo[] = [
  { id: '1', url: 'https://picsum.photos/id/1015/800/600', caption: 'First photo' },
  { id: '2', url: 'https://picsum.photos/id/1016/800/600', caption: 'Second photo' },
  { id: '3', url: 'https://picsum.photos/id/1018/800/600', caption: 'Third photo' },
];

describe('Gallery', () => {
  it('renders a thumbnail for every photo', () => {
    render(<Gallery photos={mockPhotos} />);
    mockPhotos.forEach((photo) => {
      expect(screen.getByTestId(`gallery-thumb-${photo.id}`)).toBeInTheDocument();
    });
  });

  it('renders captions beneath each thumbnail', () => {
    render(<Gallery photos={mockPhotos} />);
    expect(screen.getByText('First photo')).toBeInTheDocument();
    expect(screen.getByText('Third photo')).toBeInTheDocument();
  });

  it('does not show the lightbox initially', () => {
    render(<Gallery photos={mockPhotos} />);
    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('opens the lightbox when a thumbnail is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-1'));
    expect(screen.getByTestId('lightbox')).toBeInTheDocument();
  });

  it('shows the correct image and caption when the second thumbnail is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-2'));

    const lightbox = screen.getByTestId('lightbox');
    const lightboxImage = screen.getByTestId('lightbox-image');
    expect(lightboxImage).toHaveAttribute('src', mockPhotos[1].url);

    const caption = within(lightbox).getByTestId('lightbox-caption');
    expect(caption).toHaveTextContent('Second photo');
    expect(caption).toHaveTextContent('2 / 3');
  });

  it('closes the lightbox when the close button is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-1'));
    fireEvent.click(screen.getByTestId('lightbox-close'));
    expect(screen.queryByTestId('lightbox')).not.toBeInTheDocument();
  });

  it('navigates to the next photo when the next button is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-1'));
    fireEvent.click(screen.getByTestId('lightbox-next'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[1].url);
  });

  it('navigates to the previous photo and wraps around at the start', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-1'));
    fireEvent.click(screen.getByTestId('lightbox-prev'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[2].url);
  });

  it('supports swipe gestures to navigate photos on touch devices', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByTestId('gallery-thumb-1'));
    const lightbox = screen.getByTestId('lightbox');

    fireEvent.touchStart(lightbox, { touches: [{ clientX: 300 }] });
    fireEvent.touchEnd(lightbox, { changedTouches: [{ clientX: 100 }] });

    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[1].url);
  });
});
