import Inspiration from '@/components/Inspiration';
import Testimonials from '@/components/Testimonials';

export default function HomePage() {
  return (
    <main className="flex flex-col">
      <Inspiration />
      <Testimonials />
    </main>
  );
}