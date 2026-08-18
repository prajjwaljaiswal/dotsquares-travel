import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import BookingWizard from '@/components/booking/BookingWizard';
import { useBooking } from '@/lib/BookingContext';
import { isValidStepId } from '@/lib/bookingSteps';
import { BookingStepId } from '@/types/booking';

export default function BookingStepPage() {
  const router = useRouter();
  const { step, packageId, destinationId, destinationName } = router.query;
  const { bookingData, updateBookingData, initializeBooking } = useBooking();
  const [travelerCountInput, setTravelerCountInput] = useState(bookingData.travelerCount);

  const stepId = typeof step === 'string' ? step : undefined;

  useEffect(() => {
    if (!router.isReady) return;
    if (packageId || destinationId || destinationName) {
      initializeBooking({
        packageId: typeof packageId === 'string' ? packageId : undefined,
        destinationId: typeof destinationId === 'string' ? destinationId : undefined,
        destinationName: typeof destinationName === 'string' ? destinationName : undefined,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, packageId, destinationId, destinationName]);

  useEffect(() => {
    if (!router.isReady) return;
    if (!stepId || !isValidStepId(stepId)) {
      router.replace('/booking/destination');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.isReady, stepId]);

  useEffect(() => {
    setTravelerCountInput(bookingData.travelerCount);
  }, [bookingData.travelerCount]);

  if (!stepId || !isValidStepId(stepId)) {
    return null;
  }

  const currentStepId = stepId as BookingStepId;

  const handleNext = () => {
    if (currentStepId === 'travelers') {
      updateBookingData({ travelerCount: travelerCountInput });
    }
    return true;
  };

  return (
    <>
      <Head>
        <title>Booking - {currentStepId}</title>
      </Head>
      <BookingWizard currentStepId={currentStepId} onNext={handleNext}>
        {currentStepId === 'destination' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Destination</h2>
            <p className="text-gray-600">
              {bookingData.destinationName
                ? `You are booking: ${bookingData.destinationName}`
                : 'No destination selected yet. Please choose a package or destination.'}
            </p>
          </div>
        )}
        {currentStepId === 'dates' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Travel Dates</h2>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="flex flex-col text-sm font-medium text-gray-700">
                Start Date
                <input
                  type="date"
                  value={bookingData.startDate ?? ''}
                  onChange={(e) => updateBookingData({ startDate: e.target.value })}
                  className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                />
              </label>
              <label className="flex flex-col text-sm font-medium text-gray-700">
                End Date
                <input
                  type="date"
                  value={bookingData.endDate ?? ''}
                  onChange={(e) => updateBookingData({ endDate: e.target.value })}
                  className="mt-1 rounded-md border border-gray-300 px-3 py-2"
                />
              </label>
            </div>
          </div>
        )}
        {currentStepId === 'travelers' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Travelers</h2>
            <label className="flex flex-col text-sm font-medium text-gray-700">
              Number of Travelers
              <input
                type="number"
                min={1}
                value={travelerCountInput}
                onChange={(e) => setTravelerCountInput(Number(e.target.value))}
                className="mt-1 w-32 rounded-md border border-gray-300 px-3 py-2"
              />
            </label>
          </div>
        )}
        {currentStepId === 'review' && (
          <div>
            <h2 className="mb-4 text-xl font-semibold">Review &amp; Confirm</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>
                <strong>Destination:</strong> {bookingData.destinationName ?? 'Not selected'}
              </li>
              <li>
                <strong>Dates:</strong> {bookingData.startDate ?? 'N/A'} - {bookingData.endDate ?? 'N/A'}
              </li>
              <li>
                <strong>Travelers:</strong> {bookingData.travelerCount}
              </li>
            </ul>
          </div>
        )}
      </BookingWizard>
    </>
  );
}
