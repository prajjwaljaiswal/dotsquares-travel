import Image from 'next/image';
import { Destination } from '@/types/index';
import { formatCurrency } from '@/lib/formatCurrency';

interface DestinationCardProps {
  destination: Destination;
}

export default function DestinationCard({ destination }: DestinationCardProps) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-md transition hover:shadow-xl">
      <div className="relative h-48 w-full">
        <Image
          src={`${destination.imageUrl}?auto=format&fit=crop&w=800&q=80`}
          alt={destination.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover"
        />
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-gray-900">{destination.name}</h3>
          <span className="text-sm font-medium text-accent">★ {destination.rating}</span>
        </div>
        <p className="text-sm text-gray-500">{destination.country}</p>
        <p className="mt-2 text-sm text-gray-600">{destination.description}</p>
        <p className="mt-3 text-base font-bold text-primary">
          {formatCurrency(destination.pricePerNight)}{' '}
          <span className="text-sm font-normal text-gray-500">/ night</span>
        </p>
      </div>
    </div>
  );
}
