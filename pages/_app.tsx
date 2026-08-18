import type { AppProps } from 'next/app';
import '@/styles/globals.css';
import { BookingProvider } from '@/lib/BookingContext';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <BookingProvider>
      <Component {...pageProps} />
    </BookingProvider>
  );
}