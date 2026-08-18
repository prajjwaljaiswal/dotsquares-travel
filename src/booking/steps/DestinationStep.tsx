'use client';

import React from 'react';
import { useBookingWizard } from '../BookingContext';
import { StepNavigation } from '../StepNavigation';

interface DestinationStepProps {
  currentStepIndex: number;
}

const AVAILABLE_DESTINATIONS = [
  { id: 'paris', name: 'Paris' },
  { id: 'bali', name: 'Bali' },
  { id: 'tokyo', name: 'Tokyo' },
];

export function DestinationStep({ currentStepIndex }: DestinationStepProps) {
  const { formData, updateStepData } = useBookingWizard();
  const { destinationId, destinationName } = formData.destination;

  const handleSelect = (id: string, name: string) => {
    updateStepData('destination', { destinationId: id, destinationName: name });
  };

  return (
    <div data-testid="destination-step">
      <h2>Choose your destination</h2>
      <div className="destination-options">
        {AVAILABLE_DESTINATIONS.map(({ id, name }) => (
          <button
            key={id}
            type="button"
            onClick={() => handleSelect(id, name)}
            aria-pressed={destinationId === id}
            data-testid={`destination-option-${id}`}
          >
            {name}
          </button>
        ))}
      </div>
      {destinationName && (
        <p data-testid="selected-destination">Selected destination: {destinationName}</p>
      )}
      <StepNavigation currentStepIndex={currentStepIndex} isNextDisabled={!destinationId} />
    </div>
  );
}
