import Link from 'next/link';
import styles from './not-found.module.css';

export default function NotFound() {
  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <p className={styles.eyebrow}>Error 404</p>
        <h1 className={styles.title}>Looks like you&apos;ve wandered off the map</h1>
        <p className={styles.message}>
          The page you&apos;re looking for doesn&apos;t exist or may have been moved. Let&apos;s get you
          back on track.
        </p>
        <div className={styles.actions}>
          <Link href="/" className={styles.primaryButton}>
            Back to Homepage
          </Link>
          <Link href="/explore" className={styles.secondaryButton}>
            Explore Destinations
          </Link>
        </div>
      </div>
    </main>
  );
}
