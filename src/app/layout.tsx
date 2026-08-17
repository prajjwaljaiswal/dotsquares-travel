import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import { Providers } from '@/providers/Providers';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: 'Dotsquares Travel',
  description: 'Plan and book your next trip with Dotsquares Travel.',
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body data-theme="light">
        <Providers>
          <div className="app-shell">
            <Header />
            <main className="app-shell__content">{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
