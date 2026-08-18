import type { Metadata } from 'next';
import './globals.css';
import { AppProviders } from '@/context/AppProviders';

export const metadata: Metadata = {
  title: 'Dotsquares Travel | Discover Your Next Adventure',
  description:
    'Plan and book unforgettable trips with Dotsquares Travel. Explore top destinations, exclusive deals, and travel inspiration all in one place.',
  openGraph: {
    title: 'Dotsquares Travel | Discover Your Next Adventure',
    description:
      'Plan and book unforgettable trips with Dotsquares Travel. Explore top destinations, exclusive deals, and travel inspiration all in one place.',
    type: 'website',
    siteName: 'Dotsquares Travel'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dotsquares Travel | Discover Your Next Adventure',
    description:
      'Plan and book unforgettable trips with Dotsquares Travel. Explore top destinations, exclusive deals, and travel inspiration all in one place.'
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}