import './globals.css';

export const metadata = {
  title: 'Dotsquares Travel',
  description: 'Discover your next adventure with Dotsquares Travel',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
