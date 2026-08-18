import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 py-16 text-center">
      <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
        404 error
      </p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 text-base text-gray-600">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It may
        have been moved or no longer exists.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-blue-700"
      >
        Back to homepage
      </Link>
    </section>
  );
}
