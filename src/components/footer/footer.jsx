class SiteFooterElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.render();
    this.attachListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background-color: #1a2733;
          color: #f5f7fa;
          font-family: Arial, Helvetica, sans-serif;
        }
        .footer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 40px 24px 24px;
          box-sizing: border-box;
        }
        .footer-columns {
          display: flex;
          flex-wrap: wrap;
          gap: 32px;
          justify-content: space-between;
        }
        .footer-column {
          flex: 1 1 200px;
          min-width: 200px;
        }
        .footer-column h3 {
          font-size: 16px;
          margin: 0 0 12px;
          color: #ffffff;
        }
        .footer-nav {
          list-style: none;
          margin: 0;
          padding: 0;
        }
        .footer-nav li {
          margin-bottom: 8px;
        }
        .footer-nav a {
          color: #cbd5e1;
          text-decoration: none;
          font-size: 14px;
        }
        .footer-nav a:hover,
        .footer-nav a:focus {
          text-decoration: underline;
        }
        .social-links {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .social-links a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: #2c3e50;
          color: #ffffff;
          text-decoration: none;
          font-size: 12px;
        }
        .social-links a:hover,
        .social-links a:focus {
          background-color: #3b4f63;
        }
        .newsletter-form {
          display: flex;
          flex-direction: column;
          gap: 8px;
          margin-top: 8px;
        }
        .sr-only {
          position: absolute;
          width: 1px;
          height: 1px;
          overflow: hidden;
          clip: rect(0 0 0 0);
          white-space: nowrap;
        }
        .newsletter-input {
          padding: 8px 10px;
          border: 1px solid #4b5b6b;
          border-radius: 4px;
          background-color: #22303c;
          color: #ffffff;
          font-size: 14px;
        }
        .newsletter-button {
          padding: 8px 12px;
          border: none;
          border-radius: 4px;
          background-color: #2f80ed;
          color: #ffffff;
          font-size: 14px;
          cursor: pointer;
        }
        .newsletter-button:hover,
        .newsletter-button:focus {
          background-color: #2568c0;
        }
        .newsletter-message {
          font-size: 13px;
          min-height: 16px;
          margin: 0;
        }
        .newsletter-message.success {
          color: #6ee7b7;
        }
        .newsletter-message.error {
          color: #fca5a5;
        }
        .contact-info p {
          font-size: 14px;
          margin: 0 0 6px;
          color: #cbd5e1;
        }
        .legal-links {
          border-top: 1px solid #33414f;
          margin-top: 32px;
          padding-top: 16px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #94a3b8;
        }
        .legal-links a {
          color: #94a3b8;
          text-decoration: none;
          margin-right: 12px;
        }
        .legal-links a:hover,
        .legal-links a:focus {
          text-decoration: underline;
        }
        @media (max-width: 768px) {
          .footer-columns {
            flex-direction: column;
            gap: 24px;
          }
          .legal-links {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
        }
      </style>
      <footer class="footer">
        <div class="footer-columns">
          <div class="footer-column">
            <h3>Explore</h3>
            <ul class="footer-nav">
              <li><a href="/destinations">Destinations</a></li>
              <li><a href="/deals">Deals</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/careers">Careers</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Support</h3>
            <ul class="footer-nav">
              <li><a href="/help">Help Center</a></li>
              <li><a href="/contact">Contact Us</a></li>
              <li><a href="/faq">FAQ</a></li>
            </ul>
          </div>
          <div class="footer-column">
            <h3>Contact</h3>
            <div class="contact-info">
              <p>123 Travel Street, Suite 100</p>
              <p>London, UK</p>
              <p>Email: support@dotsquarestravel.com</p>
              <p>Phone: +44 20 1234 5678</p>
            </div>
            <div class="social-links">
              <a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">FB</a>
              <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">TW</a>
              <a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">IG</a>
            </div>
          </div>
          <div class="footer-column">
            <h3>Newsletter</h3>
            <form class="newsletter-form" novalidate>
              <label for="newsletter-email" class="sr-only">Email address</label>
              <input
                id="newsletter-email"
                class="newsletter-input"
                type="email"
                name="email"
                placeholder="Enter your email"
                autocomplete="email"
              />
              <button type="submit" class="newsletter-button">Subscribe</button>
              <p class="newsletter-message" role="status"></p>
            </form>
          </div>
        </div>
        <div class="legal-links">
          <div>
            <a href="/privacy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
          </div>
          <div>&copy; ${new Date().getFullYear()} Dotsquares Travel. All rights reserved.</div>
        </div>
      </footer>
    `;
  }

  attachListeners() {
    const form = this.shadowRoot.querySelector('.newsletter-form');
    const input = this.shadowRoot.querySelector('.newsletter-input');
    const message = this.shadowRoot.querySelector('.newsletter-message');

    if (!form || !input || !message) {
      return;
    }

    form.addEventListener('submit', (event) => {
      event.preventDefault();
      const value = input.value.trim();

      if (!SiteFooterElement.isValidEmail(value)) {
        message.textContent = 'Please enter a valid email address.';
        message.classList.remove('success');
        message.classList.add('error');
        return;
      }

      message.textContent = "Thanks for subscribing! You'll hear from us soon.";
      message.classList.remove('error');
      message.classList.add('success');
      input.value = '';
    });
  }

  static isValidEmail(value) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(value);
  }
}

if (typeof customElements !== 'undefined' && !customElements.get('site-footer')) {
  customElements.define('site-footer', SiteFooterElement);
}

module.exports = SiteFooterElement;
module.exports.SiteFooterElement = SiteFooterElement;
