import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dotsquares Travel',
  description: 'Discover unforgettable journeys with Dotsquares Travel.'
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}
