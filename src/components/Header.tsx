'use client';

import Link from 'next/link';
import { useTheme } from '@/providers/ThemeProvider';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="app-header">
      <Link href="/" className="app-header__brand">
        Dotsquares Travel
      </Link>
      <nav className="app-header__nav">
        <Link href="/">Home</Link>
      </nav>
      <button
        type="button"
        className="app-header__theme-toggle"
        onClick={toggleTheme}
        aria-label="Toggle theme"
      >
        {theme === 'light' ? 'Dark mode' : 'Light mode'}
      </button>
    </header>
  );
}
