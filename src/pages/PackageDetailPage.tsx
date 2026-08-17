import { usePackage } from '../hooks/usePackage';
import { PackageHero } from '../components/PackageHero/PackageHero';
import { PackageOverview } from '../components/PackageOverview/PackageOverview';
import styles from './PackageDetailPage.module.css';

export function PackageDetailPage() {
  const { pkg, loading, error } = usePackage();

  if (loading) {
    return <div className={styles.status}>Loading package details...</div>;
  }

  if (error || !pkg) {
    return <div className={styles.status}>{error ?? 'Package not found'}</div>;
  }

  return (
    <main className={styles.page}>
      <PackageHero pkg={pkg} />
      <PackageOverview pkg={pkg} />
    </main>
  );
}
