import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dotsquares Travel',
  description:
    'Learn how Dotsquares Travel collects, uses, and protects your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
      <h1 className="mb-8 text-3xl font-bold text-gray-900 sm:text-4xl">Privacy Policy</h1>
      <p className="mb-8 text-sm text-gray-500">Last updated: January 1, 2024</p>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">1. Introduction</h2>
        <p className="leading-7 text-gray-700">
          This Privacy Policy is a placeholder and does not constitute a legally binding
          document. Dotsquares Travel is committed to protecting the privacy of visitors to our
          website and users of our services. This page describes, in general terms, the types of
          information we may collect and how it may be used.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">2. Information We Collect</h2>
        <p className="leading-7 text-gray-700">
          We may collect information such as your name, email address, phone number, and
          booking preferences when you interact with our website, including when you make an
          enquiry, subscribe to our newsletter, or complete a booking request.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          3. How We Use Your Information
        </h2>
        <p className="leading-7 text-gray-700">
          Any information collected may be used to respond to enquiries, process bookings,
          improve our services, and communicate updates or offers relevant to your travel
          interests. We do not sell your personal information to third parties.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">4. Cookies</h2>
        <p className="leading-7 text-gray-700">
          Our website may use cookies and similar technologies to enhance your browsing
          experience, analyze site traffic, and personalize content.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">5. Data Security</h2>
        <p className="leading-7 text-gray-700">
          We take reasonable measures to protect the information we hold from unauthorized
          access, alteration, or disclosure. However, no method of transmission over the
          internet is completely secure.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="mb-3 text-xl font-semibold text-gray-900">6. Contact Us</h2>
        <p className="leading-7 text-gray-700">
          If you have any questions about this placeholder Privacy Policy, please contact us
          through the details provided on our Contact page.
        </p>
      </section>
    </main>
  );
}
