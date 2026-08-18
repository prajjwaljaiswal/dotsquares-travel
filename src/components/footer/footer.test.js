require('./footer.js');

describe('site-footer web component', () => {
  afterEach(() => {
    document.body.innerHTML = '';
  });

  test('registers as a custom element', () => {
    expect(customElements.get('site-footer')).toBeDefined();
  });

  test('renders footer content in shadow DOM with nav, social, newsletter, contact and legal links', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    expect(root).not.toBeNull();
    expect(root.querySelector('.footer-nav')).not.toBeNull();
    expect(root.querySelector('.social-links')).not.toBeNull();
    expect(root.querySelector('.newsletter-form')).not.toBeNull();
    expect(root.querySelector('.contact-info')).not.toBeNull();
    expect(root.querySelector('.legal-links a[href="/privacy"]')).not.toBeNull();
    expect(root.querySelector('.legal-links a[href="/terms"]')).not.toBeNull();
  });

  test('newsletter form shows an error message for an invalid email', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    const form = root.querySelector('.newsletter-form');
    const input = root.querySelector('.newsletter-input');
    const message = root.querySelector('.newsletter-message');

    input.value = 'not-an-email';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(message.textContent).toMatch(/valid email/i);
    expect(message.classList.contains('error')).toBe(true);
  });

  test('newsletter form shows success message for valid email and resets input', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    const form = root.querySelector('.newsletter-form');
    const input = root.querySelector('.newsletter-input');
    const message = root.querySelector('.newsletter-message');

    input.value = 'traveler@example.com';
    form.dispatchEvent(new Event('submit', { bubbles: true, cancelable: true }));

    expect(message.textContent).toMatch(/thanks for subscribing/i);
    expect(message.classList.contains('success')).toBe(true);
    expect(input.value).toBe('');
  });

  test('renders consistently across multiple instances so it can be reused on every page', () => {
    const footerOne = document.createElement('site-footer');
    const footerTwo = document.createElement('site-footer');
    document.body.appendChild(footerOne);
    document.body.appendChild(footerTwo);

    expect(footerOne.shadowRoot.querySelector('.footer')).not.toBeNull();
    expect(footerTwo.shadowRoot.querySelector('.footer')).not.toBeNull();
  });

  test('legal links section includes copyright notice', () => {
    const footer = document.createElement('site-footer');
    document.body.appendChild(footer);

    const root = footer.shadowRoot;
    const legal = root.querySelector('.legal-links');

    expect(legal.textContent).toMatch(/all rights reserved/i);
  });
});
