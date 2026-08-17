import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { AppProviders } from '@/store/app-providers';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dotsquares Travel',
  description: 'Search, compare and book your next trip.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AppProviders>{children}</AppProviders>
      </body>
    </html>
  );
}
