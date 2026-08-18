import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | Dotsquares Travel',
  description:
    'Read the Dotsquares Travel privacy policy to learn how we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto max-w-3xl px-4 py-12 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900">Privacy Policy</h1>
      <p className="mt-2 text-sm text-gray-500">Last updated: January 1, 2024</p>

      <div className="mt-8 space-y-6 text-base leading-7 text-gray-700">
        <section>
          <h2 className="text-xl font-semibold text-gray-900">1. Introduction</h2>
          <p className="mt-2">
            This Privacy Policy is a placeholder and describes, in general terms, how Dotsquares
            Travel (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) may collect, use, and
            safeguard information when you visit our website or use our services. This content
            will be replaced with finalized legal text.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">2. Information We Collect</h2>
          <p className="mt-2">
            We may collect personal information such as your name, email address, phone number,
            and booking details when you interact with our platform, including when you make an
            enquiry, subscribe to our newsletter, or complete a booking.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">3. How We Use Your Information</h2>
          <p className="mt-2">
            Information collected may be used to provide and improve our services, communicate
            with you about bookings and offers, and comply with applicable legal obligations.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">4. Cookies</h2>
          <p className="mt-2">
            Our website may use cookies and similar technologies to enhance your browsing
            experience, remember your preferences, and analyze site traffic.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">5. Data Security</h2>
          <p className="mt-2">
            We take reasonable measures to protect your information from unauthorized access,
            alteration, or disclosure. However, no method of transmission over the internet is
            completely secure.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">6. Third-Party Links</h2>
          <p className="mt-2">
            Our website may contain links to third-party sites. We are not responsible for the
            privacy practices or content of those external sites.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900">7. Contact Us</h2>
          <p className="mt-2">
            If you have any questions about this Privacy Policy, please reach out to us through
            our contact page.
          </p>
        </section>
      </div>
    </main>
  );
}
