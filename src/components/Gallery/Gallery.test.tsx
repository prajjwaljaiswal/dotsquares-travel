import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent, within } from '@testing-library/react';
import Gallery from './Gallery';
import { DestinationPhoto } from '../../data/destinationPhotos';

const mockPhotos: DestinationPhoto[] = [
  {
    id: 'p1',
    url: 'https://example.com/p1-full.jpg',
    thumbnailUrl: 'https://example.com/p1-thumb.jpg',
    alt: 'Photo one',
    caption: 'First photo',
  },
  {
    id: 'p2',
    url: 'https://example.com/p2-full.jpg',
    thumbnailUrl: 'https://example.com/p2-thumb.jpg',
    alt: 'Photo two',
    caption: 'Second photo',
  },
  {
    id: 'p3',
    url: 'https://example.com/p3-full.jpg',
    thumbnailUrl: 'https://example.com/p3-thumb.jpg',
    alt: 'Photo three',
    caption: 'Third photo',
  },
];

describe('Gallery', () => {
  it('renders a grid item for every photo', () => {
    render(<Gallery photos={mockPhotos} />);

    const grid = screen.getByTestId('gallery-grid');
    const items = within(grid).getAllByRole('button');

    expect(items).toHaveLength(mockPhotos.length);
  });

  it('does not render anything when there are no photos', () => {
    const { container } = render(<Gallery photos={[]} />);
    expect(container).toBeEmptyDOMElement();
  });

  it('opens the lightbox with the correct image when a thumbnail is clicked', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-1'));

    const lightboxImage = screen.getByTestId('lightbox-image');
    expect(lightboxImage).toHaveAttribute('src', mockPhotos[1].url);
    expect(screen.getByText(/Second photo/)).toBeInTheDocument();
  });

  it('closes the lightbox when the close button is clicked', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-0'));
    expect(screen.getByTestId('lightbox-image')).toBeInTheDocument();

    fireEvent.click(screen.getByTestId('lightbox-close'));
    expect(screen.queryByTestId('lightbox-image')).not.toBeInTheDocument();
  });

  it('closes the lightbox when clicking outside the content', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-0'));
    fireEvent.click(screen.getByTestId('lightbox-overlay'));

    expect(screen.queryByTestId('lightbox-image')).not.toBeInTheDocument();
  });

  it('navigates to the next image when the next control is clicked, wrapping to the start', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-2'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[2].url);

    fireEvent.click(screen.getByTestId('lightbox-next'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[0].url);
  });

  it('navigates to the previous image when the previous control is clicked, wrapping to the end', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-0'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[0].url);

    fireEvent.click(screen.getByTestId('lightbox-prev'));
    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[2].url);
  });

  it('navigates via touch swipe gestures', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-0'));
    const content = screen.getByTestId('lightbox-content');

    fireEvent.touchStart(content, { touches: [{ clientX: 300 }] });
    fireEvent.touchMove(content, { touches: [{ clientX: 200 }] });
    fireEvent.touchEnd(content);

    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[1].url);

    fireEvent.touchStart(content, { touches: [{ clientX: 200 }] });
    fireEvent.touchMove(content, { touches: [{ clientX: 300 }] });
    fireEvent.touchEnd(content);

    expect(screen.getByTestId('lightbox-image')).toHaveAttribute('src', mockPhotos[0].url);
  });

  it('closes the lightbox on Escape key press', () => {
    render(<Gallery photos={mockPhotos} />);

    fireEvent.click(screen.getByTestId('gallery-item-0'));
    expect(screen.getByTestId('lightbox-image')).toBeInTheDocument();

    fireEvent.keyDown(document, { key: 'Escape' });
    expect(screen.queryByTestId('lightbox-image')).not.toBeInTheDocument();
  });
});
