import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Dotsquares Travel',
  description:
    'Review the Dotsquares Travel terms and conditions governing the use of our website and booking services.',
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Terms &amp; Conditions</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: January 1, 2024</p>

      <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="mt-2">
            These Terms &amp; Conditions are placeholder text governing your use of the
            Dotsquares Travel website and services. By accessing or using our platform, you
            agree to be bound by these terms. This content will be replaced with finalized legal
            text.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Bookings and Payments</h2>
          <p className="mt-2">
            All bookings made through our platform are subject to availability and confirmation.
            Prices and payment terms will be clearly communicated at the time of booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. Cancellations and Refunds</h2>
          <p className="mt-2">
            Cancellation and refund policies vary by package and provider. Details will be
            provided at the time of booking and in your confirmation communications.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. User Responsibilities</h2>
          <p className="mt-2">
            You agree to provide accurate information when using our services and to comply with
            all applicable laws and regulations while using our website.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
          <p className="mt-2">
            Dotsquares Travel shall not be liable for any indirect, incidental, or consequential
            damages arising from the use of our website or services.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Changes to These Terms</h2>
          <p className="mt-2">
            We may update these Terms &amp; Conditions from time to time. Continued use of our
            services after any changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about these Terms &amp; Conditions, please reach out to us
            through our contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
