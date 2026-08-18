import { redirect } from 'next/navigation';
import { BOOKING_STEPS } from '../../booking/steps.config';

export default function BookingIndexPage() {
  redirect(`/booking/${BOOKING_STEPS[0].path}`);
}
