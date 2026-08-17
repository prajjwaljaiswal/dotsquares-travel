import { ReactNode } from 'react';
import Head from 'next/head';
import { SITE_NAME, SITE_DESCRIPTION } from '@/lib/constants';

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout({ children, title }: LayoutProps) {
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={SITE_DESCRIPTION} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header className="bg-primary text-white shadow-md">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <span className="text-xl font-bold">{SITE_NAME}</span>
            <nav className="space-x-6 text-sm font-medium">
              <a href="/" className="hover:text-accent">
                Home
              </a>
            </nav>
          </div>
        </header>
        <main className="flex-1 bg-gray-50">{children}</main>
        <footer className="bg-gray-900 py-6 text-center text-sm text-gray-300">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </footer>
      </div>
    </>
  );
}
