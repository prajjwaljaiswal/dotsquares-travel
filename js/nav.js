(function () {
  'use strict';

  function initMobileNav() {
    var hamburgerBtn = document.getElementById('hamburger-btn');
    var mobileMenu = document.getElementById('mobile-menu');
    var overlay = document.getElementById('mobile-menu-overlay');
    var body = document.body;

    if (!hamburgerBtn || !mobileMenu || !overlay) {
      return null;
    }

    var mobileLinks = mobileMenu.querySelectorAll('.mobile-nav-link, .mobile-cta');

    function isOpen() {
      return mobileMenu.classList.contains('is-open');
    }

    function openMenu() {
      mobileMenu.classList.add('is-open');
      overlay.classList.add('is-open');
      hamburgerBtn.classList.add('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      hamburgerBtn.setAttribute('aria-label', 'Close menu');
      mobileMenu.setAttribute('aria-hidden', 'false');
      body.classList.add('menu-open');
    }

    function closeMenu() {
      mobileMenu.classList.remove('is-open');
      overlay.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.setAttribute('aria-label', 'Open menu');
      mobileMenu.setAttribute('aria-hidden', 'true');
      body.classList.remove('menu-open');
    }

    function toggleMenu() {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    function handleHamburgerClick(e) {
      e.stopPropagation();
      toggleMenu();
    }

    function handleOverlayClick() {
      closeMenu();
    }

    function handleLinkClick() {
      closeMenu();
    }

    function handleDocumentClick(e) {
      if (!isOpen()) {
        return;
      }

      var clickedInsideMenu = mobileMenu.contains(e.target);
      var clickedHamburger = hamburgerBtn.contains(e.target);

      if (!clickedInsideMenu && !clickedHamburger) {
        closeMenu();
      }
    }

    function handleKeydown(e) {
      if (e.key === 'Escape' && isOpen()) {
        closeMenu();
        hamburgerBtn.focus();
      }
    }

    hamburgerBtn.addEventListener('click', handleHamburgerClick);
    overlay.addEventListener('click', handleOverlayClick);

    for (var i = 0; i < mobileLinks.length; i++) {
      mobileLinks[i].addEventListener('click', handleLinkClick);
    }

    document.addEventListener('click', handleDocumentClick);
    document.addEventListener('keydown', handleKeydown);

    return {
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      isOpen: isOpen
    };
  }

  if (typeof document !== 'undefined') {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initMobileNav);
    } else {
      initMobileNav();
    }
  }

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = { initMobileNav: initMobileNav };
  }
})();
