const { SiteFooter } = require('./footer.js');

describe('site-footer web component', () => {
  beforeEach(() => {
    document.body.innerHTML = '';
  });

  test('registers the site-footer custom element', () => {
    expect(window.customElements.get('site-footer')).toBeDefined();
  });

  test('renders footer with nav links, contact info, social icons and legal links', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    expect(root.querySelector('.site-footer')).not.toBeNull();

    const links = Array.from(root.querySelectorAll('a')).map((a) => a.getAttribute('href'));
    expect(links).toContain('/destinations');
    expect(links).toContain('/bookings');
    expect(links).toContain('/about');
    expect(links).toContain('/support');
    expect(links).toContain('/privacy');
    expect(links).toContain('/terms');

    expect(root.querySelectorAll('.social-icons a').length).toBeGreaterThanOrEqual(4);
    expect(root.querySelector('.contact-info')).not.toBeNull();
  });

  test('shows current year in copyright', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const year = new Date().getFullYear().toString();
    const copyright = footer.shadowRoot.querySelector('.copyright');
    expect(copyright.textContent).toContain(year);
  });

  test('newsletter form shows error message for invalid email', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    const form = root.querySelector('.newsletter-form');
    const input = root.querySelector('.newsletter-input');
    const message = root.querySelector('.newsletter-message');

    input.value = 'not-an-email';
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(message.textContent).toBe('Please enter a valid email address.');
    expect(message.className).toContain('error');
    expect(input.getAttribute('aria-invalid')).toBe('true');
  });

  test('newsletter form shows success message for valid email and resets input', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    const form = root.querySelector('.newsletter-form');
    const input = root.querySelector('.newsletter-input');
    const message = root.querySelector('.newsletter-message');

    input.value = 'traveler@example.com';
    form.dispatchEvent(new Event('submit', { cancelable: true }));

    expect(message.textContent).toBe("Thanks for subscribing! You'll hear from us soon.");
    expect(message.className).toContain('success');
    expect(input.getAttribute('aria-invalid')).toBe('false');
    expect(input.value).toBe('');
  });

  test('SiteFooter.validateEmail correctly validates email formats', () => {
    expect(SiteFooter.validateEmail('good@example.com')).toBe(true);
    expect(SiteFooter.validateEmail('bad-email')).toBe(false);
    expect(SiteFooter.validateEmail('missing@domain')).toBe(false);
    expect(SiteFooter.validateEmail('')).toBe(false);
  });
});
