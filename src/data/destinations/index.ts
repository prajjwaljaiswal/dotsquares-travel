import { Destination, Package } from '../types';
import bali from './bali';
import dubai from './dubai';
import maldives from './maldives';
import paris from './paris';
import switzerland from './switzerland';
import thailand from './thailand';
import kashmir from './kashmir';

export const destinations: Destination[] = [bali, dubai, maldives, paris, switzerland, thailand, kashmir];

export const getDestinationBySlug = (slug: string): Destination | undefined =>
  destinations.find((destination) => destination.slug === slug);

export const getPackageBySlug = (destinationSlug: string, packageSlug: string): Package | undefined => {
  const destination = getDestinationBySlug(destinationSlug);
  return destination?.packages.find((pkg) => pkg.slug === packageSlug);
};

export const getAllPackages = (): Package[] =>
  destinations.reduce<Package[]>((acc, destination) => acc.concat(destination.packages), []);

export { bali, dubai, maldives, paris, switzerland, thailand, kashmir };
