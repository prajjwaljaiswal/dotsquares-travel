'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { BookingWizard } from '../../../booking/BookingWizard';

export default function BookingStepPage() {
  const params = useParams<{ step: string | string[] }>();
  const step = Array.isArray(params.step) ? params.step[0] : params.step;

  return <BookingWizard currentStepPath={step} />;
}
