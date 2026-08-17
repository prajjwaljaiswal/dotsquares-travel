const fs = require('fs');
const path = require('path');

function loadHtmlIntoDom() {
  const html = fs.readFileSync(path.resolve(__dirname, '..', 'index.html'), 'utf8');
  document.documentElement.innerHTML = html;
}

describe('mobile hamburger nav', () => {
  let initMobileNav;
  let nav;

  beforeEach(() => {
    jest.resetModules();
    document.body.innerHTML = '';
    document.documentElement.innerHTML = '';
    loadHtmlIntoDom();
    initMobileNav = require('./nav.js').initMobileNav;
    nav = initMobileNav();
  });

  test('initializes and returns control functions', () => {
    expect(nav).not.toBeNull();
    expect(typeof nav.openMenu).toBe('function');
    expect(typeof nav.closeMenu).toBe('function');
    expect(typeof nav.toggleMenu).toBe('function');
  });

  test('menu is closed by default', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(mobileMenu.getAttribute('aria-hidden')).toBe('true');
  });

  test('clicking hamburger opens the menu', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(true);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('true');
    expect(mobileMenu.getAttribute('aria-hidden')).toBe('false');
  });

  test('clicking hamburger twice toggles menu closed again', () => {
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    hamburgerBtn.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(hamburgerBtn.getAttribute('aria-expanded')).toBe('false');
  });

  test('clicking a nav link closes the menu', () => {
    const mobileMenu = document.getElementById('mobile-menu');

    nav.openMenu();
    expect(mobileMenu.classList.contains('is-open')).toBe(true);

    const firstLink = mobileMenu.querySelector('.mobile-nav-link');
    firstLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
  });

  test('clicking the overlay closes the menu', () => {
    const overlay = document.getElementById('mobile-menu-overlay');
    const mobileMenu = document.getElementById('mobile-menu');

    nav.openMenu();
    overlay.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
  });

  test('clicking outside the menu closes it', () => {
    const mobileMenu = document.getElementById('mobile-menu');

    nav.openMenu();

    document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
  });

  test('pressing Escape closes the menu and refocuses hamburger', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const hamburgerBtn = document.getElementById('hamburger-btn');

    nav.openMenu();

    document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }));

    expect(mobileMenu.classList.contains('is-open')).toBe(false);
    expect(document.activeElement).toBe(hamburgerBtn);
  });
});
