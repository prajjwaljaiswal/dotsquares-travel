import { TravelPackage } from '../data/packages';

export interface GetRelatedPackagesOptions {
  minResults?: number;
}

/**
 * Returns packages related to the given package based on matching
 * destination first, then category, excluding the package itself.
 * Guarantees at least `minResults` items when enough data is available.
 */
export function getRelatedPackages(
  currentPackage: TravelPackage,
  allPackages: TravelPackage[],
  options: GetRelatedPackagesOptions = {}
): TravelPackage[] {
  const { minResults = 3 } = options;

  const others = allPackages.filter((pkg) => pkg.id !== currentPackage.id);

  const sameDestination = others.filter(
    (pkg) => pkg.destination === currentPackage.destination
  );

  const sameCategory = others.filter(
    (pkg) =>
      pkg.category === currentPackage.category &&
      !sameDestination.some((related) => related.id === pkg.id)
  );

  const combined = [...sameDestination, ...sameCategory];

  if (combined.length >= minResults) {
    return combined;
  }

  const remaining = others.filter(
    (pkg) => !combined.some((related) => related.id === pkg.id)
  );

  return [...combined, ...remaining].slice(
    0,
    Math.max(minResults, combined.length)
  );
}
