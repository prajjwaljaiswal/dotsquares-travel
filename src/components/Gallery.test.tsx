import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Gallery from './Gallery';
import { DestinationPhoto } from '../types/destination';

const mockPhotos: DestinationPhoto[] = [
  { id: '1', url: 'full-1.jpg', thumbnailUrl: 'thumb-1.jpg', alt: 'Photo one' },
  { id: '2', url: 'full-2.jpg', thumbnailUrl: 'thumb-2.jpg', alt: 'Photo two' },
  { id: '3', url: 'full-3.jpg', thumbnailUrl: 'thumb-3.jpg', alt: 'Photo three' },
];

describe('Gallery', () => {
  it('renders the optional title when provided', () => {
    render(<Gallery photos={mockPhotos} title="My Gallery" />);
    expect(screen.getByText('My Gallery')).toBeInTheDocument();
  });

  it('renders without a title', () => {
    render(<Gallery photos={mockPhotos} />);
    expect(screen.queryByRole('heading')).not.toBeInTheDocument();
  });

  it('renders a thumbnail for each photo', () => {
    render(<Gallery photos={mockPhotos} />);
    expect(screen.getAllByRole('button', { name: /open image/i })).toHaveLength(3);
  });

  it('opens the lightbox when a thumbnail is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByLabelText('Open image: Photo one'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    expect(screen.getByAltText('Photo one')).toHaveAttribute('src', 'full-1.jpg');
  });

  it('navigates to the next image in the lightbox', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByLabelText('Open image: Photo one'));
    fireEvent.click(screen.getByLabelText('Next image'));
    expect(screen.getByAltText('Photo two')).toBeInTheDocument();
  });

  it('navigates to the previous image, wrapping around', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByLabelText('Open image: Photo one'));
    fireEvent.click(screen.getByLabelText('Previous image'));
    expect(screen.getByAltText('Photo three')).toBeInTheDocument();
  });

  it('closes the lightbox when close button is clicked', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByLabelText('Open image: Photo one'));
    fireEvent.click(screen.getByLabelText('Close gallery'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('supports swipe gesture to navigate images', () => {
    render(<Gallery photos={mockPhotos} />);
    fireEvent.click(screen.getByLabelText('Open image: Photo one'));
    const content = screen.getByRole('dialog').firstChild as HTMLElement;

    fireEvent.touchStart(content, { touches: [{ clientX: 300 }] });
    fireEvent.touchMove(content, { touches: [{ clientX: 100 }] });
    fireEvent.touchEnd(content);

    expect(screen.getByAltText('Photo two')).toBeInTheDocument();
  });

  it('returns null when there are no photos', () => {
    const { container } = render(<Gallery photos={[]} />);
    expect(container).toBeEmptyDOMElement();
  });
});
