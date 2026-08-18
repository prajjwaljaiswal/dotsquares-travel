import Link from 'next/link';

export default function Header() {
  return (
    <header data-testid="section-header">
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 0' }}>
        <Link href="/" aria-label="Dotsquares Travel home">
          <strong>Dotsquares Travel</strong>
        </Link>
        <nav aria-label="Primary navigation">
          <ul style={{ display: 'flex', gap: '16px', listStyle: 'none' }}>
            <li>
              <Link href="/destinations">Destinations</Link>
            </li>
            <li>
              <Link href="/deals">Deals</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
