import type { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-gray-200 px-4 py-4">
        <span className="text-lg font-bold text-primary">Dotsquares Travel</span>
      </header>
      <div className="flex-1">{children}</div>
      <footer className="border-t border-gray-200 px-4 py-4 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} Dotsquares Travel
      </footer>
    </div>
  );
}
