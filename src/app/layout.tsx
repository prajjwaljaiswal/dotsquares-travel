import React from 'react';
import { GlobalProvider } from '../store/GlobalContext';
import './globals.css';

export const metadata = {
  title: 'Dotsquares Travel',
  description: 'Book your next adventure with Dotsquares Travel',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <GlobalProvider>{children}</GlobalProvider>
      </body>
    </html>
  );
}
