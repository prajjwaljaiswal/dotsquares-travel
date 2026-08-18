const { initMobileNav } = require('./nav');

function setupDOM() {
  document.body.innerHTML = [
    '<header class="site-header">',
    '  <button class="hamburger" id="hamburger-btn" type="button" aria-expanded="false" aria-controls="mobile-menu" aria-label="Toggle navigation menu">',
    '    <span class="hamburger-box"><span class="hamburger-inner"></span></span>',
    '  </button>',
    '  <div class="mobile-menu-overlay" id="mobile-menu-overlay"></div>',
    '  <nav class="mobile-menu" id="mobile-menu" aria-hidden="true">',
    '    <ul class="mobile-menu-list">',
    '      <li><a href="/" class="mobile-menu-link">Home</a></li>',
    '      <li><a href="/destinations" class="mobile-menu-link">Destinations</a></li>',
    '      <li><a href="/tours" class="mobile-menu-link">Tours</a></li>',
    '      <li><a href="/about" class="mobile-menu-link">About</a></li>',
    '      <li><a href="/contact" class="mobile-menu-link">Contact</a></li>',
    '    </ul>',
    '    <a href="/book-now" class="mobile-menu-cta">Book Now</a>',
    '  </nav>',
    '  <div id="outside-el">outside content</div>',
    '</header>'
  ].join('\n');
}

describe('mobile hamburger nav', () => {
  let hamburgerBtn;
  let mobileMenu;
  let overlay;
  let controls;

  beforeEach(() => {
    setupDOM();
    hamburgerBtn = document.getElementById('hamburger-btn');
    mobileMenu = document.getElementById('mobile-menu');
    overlay = document.getElementById('mobile-menu-overlay');
    controls = initMobileNav();
  });

  test('initializes and returns control functions', () => {
    expect(controls).not.toBeNull();
    expect(typeof controls.openMenu).toBe('function');
    expect(typeof controls.closeMenu).toBe('function');
    expect(typeof controls.toggleMenu).toBe('function');
  });

  test('menu is closed by default', () => {
    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('false');
    expect(mobileMenu.getAttribute('aria-hidden')).toBe('true');
  });

  test('clicking hamburger opens the menu', () => {
    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(true);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('true');
    expect(mobileMenu.getAttribute('aria-hidden')).toBe('false');
  });

  test('clicking hamburger twice toggles menu closed again', () => {
    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('false');
    expect(mobileMenu.getAttribute('aria-hidden')).toBe('true');
  });

  test('clicking a nav link closes the menu', () => {
    controls.openMenu();
    const link = mobileMenu.querySelector('.mobile-menu-link');
    link.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('false');
  });

  test('clicking the overlay closes the menu', () => {
    controls.openMenu();
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
  });

  test('clicking outside the menu closes it', () => {
    controls.openMenu();
    const outsideEl = document.getElementById('outside-el');
    outsideEl.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
  });

  test('pressing Escape closes the menu and refocuses hamburger', () => {
    controls.openMenu();
    const link = mobileMenu.querySelector('.mobile-menu-link');
    link.focus();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(document.activeElement).toBe(hamburgerBtn);
  });
});
