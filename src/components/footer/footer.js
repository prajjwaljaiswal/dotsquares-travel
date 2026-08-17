(function () {
  'use strict';

  var EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
  }

  var SiteFooter = /** @class */ (function () {
    function SiteFooterImpl() {}
    return SiteFooterImpl;
  })();

  var BaseElement = typeof HTMLElement !== 'undefined' ? HTMLElement : function () {};

  function defineSiteFooter() {
    var SiteFooterElement = /** @class */ (function (Base) {
      function SiteFooterElement() {
        var self = Base.call(this) || this;
        self.attachShadow({ mode: 'open' });
        return self;
      }

      if (Base) {
        SiteFooterElement.prototype = Object.create(Base.prototype);
        SiteFooterElement.prototype.constructor = SiteFooterElement;
      }

      SiteFooterElement.prototype.connectedCallback = function () {
        this.render();
        this.attachHandlers();
      };

      SiteFooterElement.prototype.render = function () {
        var year = new Date().getFullYear();
        this.shadowRoot.innerHTML = getTemplate(year);
      };

      SiteFooterElement.prototype.attachHandlers = function () {
        var root = this.shadowRoot;
        var form = root.querySelector('.newsletter-form');
        if (!form) return;

        var input = root.querySelector('.newsletter-input');
        var message = root.querySelector('.newsletter-message');

        form.addEventListener('submit', function (event) {
          event.preventDefault();
          var email = (input.value || '').trim();

          if (!SiteFooterElement.validateEmail(email)) {
            message.textContent = 'Please enter a valid email address.';
            message.className = 'newsletter-message error';
            input.setAttribute('aria-invalid', 'true');
            return;
          }

          input.setAttribute('aria-invalid', 'false');
          message.textContent = "Thanks for subscribing! You'll hear from us soon.";
          message.className = 'newsletter-message success';
          form.reset();
        });
      };

      SiteFooterElement.validateEmail = function (email) {
        return EMAIL_REGEX.test(email);
      };

      return SiteFooterElement;
    })(BaseElement);

    return SiteFooterElement;
  }

  function getTemplate(year) {
    return (
      '<style>' +
      ':host { display: block; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; }' +
      '.site-footer { background: #0f1b2d; color: #cfd8e3; padding: 48px 24px 24px; }' +
      '.footer-inner { max-width: 1200px; margin: 0 auto; display: flex; flex-wrap: wrap; gap: 32px; justify-content: space-between; }' +
      '.footer-column { flex: 1 1 200px; min-width: 180px; }' +
      '.footer-column h3 { color: #ffffff; font-size: 15px; margin: 0 0 16px; text-transform: uppercase; letter-spacing: 0.05em; }' +
      '.footer-column ul { list-style: none; margin: 0; padding: 0; }' +
      '.footer-column li { margin-bottom: 10px; }' +
      '.footer-column a { color: #cfd8e3; text-decoration: none; font-size: 14px; }' +
      '.footer-column a:hover, .footer-column a:focus { color: #ffffff; text-decoration: underline; }' +
      '.contact-info p { margin: 0 0 8px; font-size: 14px; }' +
      '.social-icons { display: flex; gap: 12px; margin-top: 16px; }' +
      '.social-icons a { display: inline-flex; align-items: center; justify-content: center; width: 36px; height: 36px; border-radius: 50%; background: rgba(255,255,255,0.08); color: #cfd8e3; }' +
      '.social-icons a:hover, .social-icons a:focus { background: rgba(255,255,255,0.18); color: #ffffff; }' +
      '.social-icons svg { width: 18px; height: 18px; fill: currentColor; }' +
      '.newsletter-form { display: flex; flex-wrap: wrap; gap: 8px; margin-top: 8px; }' +
      '.newsletter-input { flex: 1 1 160px; padding: 10px 12px; border-radius: 4px; border: 1px solid #3a4a5f; background: #142338; color: #ffffff; font-size: 14px; }' +
      '.newsletter-input::placeholder { color: #7c8ba0; }' +
      '.newsletter-submit { padding: 10px 18px; border-radius: 4px; border: none; background: #ff6b35; color: #ffffff; font-weight: 600; cursor: pointer; font-size: 14px; }' +
      '.newsletter-submit:hover, .newsletter-submit:focus { background: #ff8657; }' +
      '.newsletter-message { margin-top: 8px; font-size: 13px; min-height: 16px; }' +
      '.newsletter-message.error { color: #ff8080; }' +
      '.newsletter-message.success { color: #7be0a0; }' +
      '.footer-bottom { max-width: 1200px; margin: 32px auto 0; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.08); display: flex; flex-wrap: wrap; gap: 16px; align-items: center; justify-content: space-between; }' +
      '.legal-links { display: flex; gap: 16px; flex-wrap: wrap; }' +
      '.legal-links a { color: #9aa8ba; font-size: 13px; text-decoration: none; }' +
      '.legal-links a:hover, .legal-links a:focus { color: #ffffff; text-decoration: underline; }' +
      '.copyright { font-size: 13px; color: #7c8ba0; }' +
      '@media (max-width: 640px) {' +
      '.footer-inner { flex-direction: column; gap: 28px; }' +
      '.footer-column { min-width: 100%; }' +
      '.footer-bottom { flex-direction: column; align-items: flex-start; }' +
      '.newsletter-form { flex-direction: column; }' +
      '.newsletter-submit { width: 100%; }' +
      '}' +
      '</style>' +
      '<footer class="site-footer">' +
      '<div class="footer-inner">' +
      '<div class="footer-column">' +
      '<h3>Explore</h3>' +
      '<ul>' +
      '<li><a href="/destinations">Destinations</a></li>' +
      '<li><a href="/bookings">Bookings</a></li>' +
      '<li><a href="/deals">Deals &amp; Offers</a></li>' +
      '<li><a href="/blog">Travel Blog</a></li>' +
      '</ul>' +
      '</div>' +
      '<div class="footer-column">' +
      '<h3>Company</h3>' +
      '<ul>' +
      '<li><a href="/about">About Us</a></li>' +
      '<li><a href="/careers">Careers</a></li>' +
      '<li><a href="/press">Press</a></li>' +
      '<li><a href="/support">Support</a></li>' +
      '</ul>' +
      '</div>' +
      '<div class="footer-column contact-info">' +
      '<h3>Contact</h3>' +
      '<p>123 Travel Lane, Suite 400<br />San Francisco, CA 94103</p>' +
      '<p><a href="tel:+18005550123">+1 (800) 555-0123</a></p>' +
      '<p><a href="mailto:hello@dotsquarestravel.com">hello@dotsquarestravel.com</a></p>' +
      '<div class="social-icons">' +
      '<a href="https://facebook.com" aria-label="Facebook" target="_blank" rel="noopener noreferrer">' +
      '<svg viewBox="0 0 24 24"><path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.5.3v2.7h-1.4c-1.4 0-1.8.9-1.8 1.7V12h3.1l-.5 2.9h-2.6v7A10 10 0 0 0 22 12z"/></svg>' +
      '</a>' +
      '<a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer">' +
      '<svg viewBox="0 0 24 24"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.5-1.3 1.8-2.2-.8.5-1.7.8-2.6 1a3.8 3.8 0 0 0-6.5 3.5A11 11 0 0 1 3.4 4.6a3.8 3.8 0 0 0 1.2 5.1 3.8 3.8 0 0 1-1.7-.5 3.8 3.8 0 0 0 3 3.7 3.8 3.8 0 0 1-1.7.1 3.8 3.8 0 0 0 3.6 2.7A7.7 7.7 0 0 1 2 17.3a10.9 10.9 0 0 0 5.9 1.7c7 0 10.9-5.9 10.9-11v-.5A7.9 7.9 0 0 0 22 5.9z"/></svg>' +
      '</a>' +
      '<a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer">' +
      '<svg viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 2 .3 2.4.5.6.2 1 .5 1.5 1s.8.9 1 1.5c.2.4.4 1.2.5 2.4.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 2-.5 2.4-.2.6-.5 1-1 1.5s-.9.8-1.5 1c-.4.2-1.2.4-2.4.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-2-.3-2.4-.5-.6-.2-1-.5-1.5-1s-.8-.9-1-1.5c-.2-.4-.4-1.2-.5-2.4C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.9c.1-1.2.3-2 .5-2.4.2-.6.5-1 1-1.5s.9-.8 1.5-1c.4-.2 1.2-.4 2.4-.5C8.4 2.2 8.8 2.2 12 2.2zm0 1.8c-3.1 0-3.5 0-4.7.1-1 .1-1.6.2-2 .4-.4.2-.7.3-1 .6-.3.3-.4.6-.6 1-.1.4-.3 1-.4 2-.1 1.2-.1 1.6-.1 4.7s0 3.5.1 4.7c.1 1 .2 1.6.4 2 .2.4.3.7.6 1 .3.3.6.4 1 .6.4.1 1 .3 2 .4 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1-.1 1.6-.2 2-.4.4-.2.7-.3 1-.6.3-.3.4-.6.6-1 .1-.4.3-1 .4-2 .1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c-.1-1-.2-1.6-.4-2-.2-.4-.3-.7-.6-1-.3-.3-.6-.4-1-.6-.4-.1-1-.3-2-.4-1.2-.1-1.6-.1-4.7-.1zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4zm5.7-3.2a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0z"/></svg>' +
      '</a>' +
      '<a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer">' +
      '<svg viewBox="0 0 24 24"><path d="M21.6 7.2s-.2-1.5-.8-2.1c-.8-.8-1.7-.8-2.1-.9C15.9 4 12 4 12 4s-3.9 0-6.7.2c-.4.1-1.3.1-2.1.9-.6.6-.8 2.1-.8 2.1S2.2 9 2.2 10.7v1.6c0 1.7.2 3.5.2 3.5s.2 1.5.8 2.1c.8.8 1.9.8 2.4.9 1.7.2 7.4.2 7.4.2s3.9 0 6.7-.2c.4-.1 1.3-.1 2.1-.9.6-.6.8-2.1.8-2.1s.2-1.8.2-3.5v-1.6c0-1.7-.2-3.5-.2-3.5zM9.8 14.8V9.2l5.4 2.8-5.4 2.8z"/></svg>' +
      '</a>' +
      '</div>' +
      '</div>' +
      '<div class="footer-column">' +
      '<h3>Newsletter</h3>' +
      '<p style="font-size:14px;margin:0 0 12px;">Get travel deals and inspiration straight to your inbox.</p>' +
      '<form class="newsletter-form" novalidate>' +
      '<input class="newsletter-input" type="email" name="email" placeholder="Your email address" aria-label="Email address" required />' +
      '<button class="newsletter-submit" type="submit">Subscribe</button>' +
      '</form>' +
      '<div class="newsletter-message" role="status" aria-live="polite"></div>' +
      '</div>' +
      '</div>' +
      '<div class="footer-bottom">' +
      '<div class="legal-links">' +
      '<a href="/privacy">Privacy Policy</a>' +
      '<a href="/terms">Terms of Service</a>' +
      '</div>' +
      '<p class="copyright">&copy; ' + escapeHtml(year) + ' Dotsquares Travel. All rights reserved.</p>' +
      '</div>' +
      '</footer>'
    );
  }

  var SiteFooterElement = defineSiteFooter();

  if (typeof window !== 'undefined' && window.customElements && !window.customElements.get('site-footer')) {
    window.customElements.define('site-footer', SiteFooterElement);
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SiteFooter: SiteFooterElement };
  }
})();
