import React, { useState } from 'react';
import './Footer.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Deals', href: '/deals' },
  { label: 'About Us', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

const LEGAL_LINKS = [
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Service', href: '/terms' },
];

const SOCIAL_LINKS = [
  { label: 'Facebook', href: 'https://facebook.com', icon: 'f' },
  { label: 'Twitter', href: 'https://twitter.com', icon: 't' },
  { label: 'Instagram', href: 'https://instagram.com', icon: 'i' },
  { label: 'LinkedIn', href: 'https://linkedin.com', icon: 'l' },
];

function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (status.message) {
      setStatus({ type: '', message: '' });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmedEmail = email.trim();

    if (!trimmedEmail) {
      setStatus({ type: 'error', message: 'Please enter your email address.' });
      return;
    }

    if (!EMAIL_REGEX.test(trimmedEmail)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setStatus({
      type: 'success',
      message: "Thanks for subscribing! You'll hear from us soon.",
    });
    setEmail('');
  };

  return (
    <footer className="footer" data-testid="global-footer">
      <div className="footer__container">
        <div className="footer__section footer__brand">
          <h2 className="footer__logo">Dotsquares Travel</h2>
          <p className="footer__tagline">
            Helping you explore the world, one trip at a time.
          </p>
          <ul className="footer__social">
            {SOCIAL_LINKS.map((social) => (
              <li key={social.label}>
                <a
                  href={social.href}
                  aria-label={social.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social-icon"
                >
                  {social.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Explore</h3>
          <ul className="footer__links">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__section">
          <h3 className="footer__heading">Contact Us</h3>
          <ul className="footer__contact">
            <li>123 Travel Way, London, UK</li>
            <li>
              <a href="tel:+441234567890">+44 1234 567890</a>
            </li>
            <li>
              <a href="mailto:hello@dotsquarestravel.com">
                hello@dotsquarestravel.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer__section footer__newsletter">
          <h3 className="footer__heading">Stay in the loop</h3>
          <p className="footer__newsletter-copy">
            Sign up for travel deals and inspiration straight to your inbox.
          </p>
          <form
            className="footer__newsletter-form"
            onSubmit={handleSubmit}
            noValidate
          >
            <label htmlFor="footer-newsletter-email" className="sr-only">
              Email address
            </label>
            <div className="footer__newsletter-input-row">
              <input
                id="footer-newsletter-email"
                type="email"
                name="email"
                placeholder="Your email address"
                value={email}
                onChange={handleEmailChange}
                aria-invalid={status.type === 'error'}
                aria-describedby="footer-newsletter-status"
              />
              <button type="submit">Subscribe</button>
            </div>
            {status.message && (
              <p
                id="footer-newsletter-status"
                className={`footer__newsletter-status footer__newsletter-status--${status.type}`}
                role="status"
              >
                {status.message}
              </p>
            )}
          </form>
        </div>
      </div>

      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} Dotsquares Travel. All rights
          reserved.
        </p>
        <ul className="footer__legal">
          {LEGAL_LINKS.map((link) => (
            <li key={link.label}>
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
