import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getPackageById } from '../data/packages';
import type { TravelPackage } from '../types/package';

interface UsePackageResult {
  pkg: TravelPackage | null;
  loading: boolean;
  error: string | null;
}

export function usePackage(): UsePackageResult {
  const { packageId } = useParams<{ packageId: string }>();
  const [pkg, setPkg] = useState<TravelPackage | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    if (!packageId) {
      setError('No package specified');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    getPackageById(packageId)
      .then((result) => {
        if (!isMounted) return;
        if (result) {
          setPkg(result);
        } else {
          setError(`Package "${packageId}" not found`);
        }
      })
      .catch(() => {
        if (isMounted) {
          setError('Failed to load package');
        }
      })
      .finally(() => {
        if (isMounted) {
          setLoading(false);
        }
      });

    return () => {
      isMounted = false;
    };
  }, [packageId]);

  return { pkg, loading, error };
}
