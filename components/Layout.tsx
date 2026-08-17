import { ReactNode } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { NAV_ITEMS, SITE_NAME } from '@/lib/constants';

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
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header className="bg-primary text-white shadow-md">
          <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
            <Link href="/" className="text-xl font-bold">
              {SITE_NAME}
            </Link>
            <ul className="flex gap-6">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-primary-light">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
        <main className="mx-auto flex-1 w-full max-w-5xl px-6 py-10">{children}</main>
        <footer className="bg-gray-100 py-6 text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
        </footer>
      </div>
    </>
  );
}
