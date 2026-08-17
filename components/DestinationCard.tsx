import type { Destination } from '@/types/index';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-sm transition hover:shadow-lg">
      <div className="h-40 w-full bg-gray-200" aria-hidden="true" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
        <p className="text-sm font-medium text-primary">{destination.country}</p>
        <p className="mt-2 text-sm text-gray-600">{destination.description}</p>
      </div>
    </div>
  );
}
