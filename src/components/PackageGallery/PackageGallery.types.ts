export interface PackageGalleryImage {
  id: string;
  src: string;
  alt: string;
  caption?: string;
}

export interface PackageGalleryProps {
  images: PackageGalleryImage[];
  className?: string;
}
