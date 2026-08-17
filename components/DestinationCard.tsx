import { Destination } from '@/types/destination';
import { formatCurrency } from '@/lib/formatCurrency';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition hover:shadow-md">
      <div
        className="h-48 w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${destination.imageUrl})` }}
        role="img"
        aria-label={`${destination.name}, ${destination.country}`}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
        <p className="text-sm text-gray-500">{destination.country}</p>
        <p className="mt-2 text-sm text-gray-600">{destination.description}</p>
        <p className="mt-3 text-sm font-medium text-brand-700">
          {formatCurrency(destination.pricePerNight)} / night
        </p>
      </div>
    </article>
  );
}
