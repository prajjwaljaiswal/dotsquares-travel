import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1>Page not found</h1>
      <p>The page you are looking for does not exist or has been moved.</p>
      <Link href="/" className="not-found__link">
        Back to homepage
      </Link>
    </div>
  );
}
