import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions | Dotsquares Travel',
  description: 'Read the placeholder terms and conditions for using the Dotsquares Travel website.',
};

export default function TermsConditionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">Terms & Conditions</h1>
      <p className="mb-8 text-sm text-gray-500">Last updated: January 1, 2024</p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Acceptance of Terms</h2>
        <p className="leading-7 text-gray-700">
          By accessing or using the Dotsquares Travel website, you agree to be bound by these
          placeholder Terms and Conditions. If you do not agree with any part of these terms,
          please refrain from using this website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Use of Website</h2>
        <p className="leading-7 text-gray-700">
          This website is provided for informational and illustrative purposes only. You agree
          to use the site in a lawful manner and not to engage in any activity that could
          damage, disable, or impair the website or interfere with the experience of other
          users.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">3. Bookings and Payments</h2>
        <p className="leading-7 text-gray-700">
          Any booking or payment features referenced on this website are illustrative
          placeholders. No actual financial transactions are processed through this
          demonstration site.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Intellectual Property</h2>
        <p className="leading-7 text-gray-700">
          All content, trademarks, and materials displayed on this website are placeholders for
          demonstration purposes and remain the property of their respective owners.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Limitation of Liability</h2>
        <p className="leading-7 text-gray-700">
          Dotsquares Travel shall not be liable for any damages arising from the use of this
          placeholder website, including but not limited to direct, indirect, incidental, or
          consequential damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Governing Law</h2>
        <p className="leading-7 text-gray-700">
          These placeholder Terms and Conditions shall be governed by and construed in
          accordance with applicable local laws, without regard to conflict of law principles.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">7. Changes to Terms</h2>
        <p className="leading-7 text-gray-700">
          We reserve the right to update or modify these placeholder Terms and Conditions at any
          time without prior notice.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">8. Contact Us</h2>
        <p className="leading-7 text-gray-700">
          For questions regarding these placeholder Terms and Conditions, please reach out
          through the details provided on our Contact page.
        </p>
      </section>
    </main>
  );
}
