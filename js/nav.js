(function (root, factory) {
  if (typeof module === 'object' && module.exports) {
    module.exports = factory();
  } else {
    root.MobileNav = factory();
  }
}(typeof self !== 'undefined' ? self : this, function () {
  function initMobileNav(options) {
    var opts = options || {};
    var hamburgerSelector = opts.hamburgerSelector || '#hamburger-btn';
    var menuSelector = opts.menuSelector || '#mobile-menu';
    var overlaySelector = opts.overlaySelector || '#mobile-menu-overlay';
    var linkSelector = opts.linkSelector || '.mobile-menu-link';

    var hamburgerBtn = document.querySelector(hamburgerSelector);
    var mobileMenu = document.querySelector(menuSelector);
    var overlay = document.querySelector(overlaySelector);

    if (!hamburgerBtn || !mobileMenu) {
      return null;
    }

    function isOpen() {
      return mobileMenu.classList.contains('is-open');
    }

    function handleKeydown(event) {
      if (event.key === 'Escape' || event.key === 'Esc') {
        closeMenu();
        hamburgerBtn.focus();
      }
    }

    function handleOutsideClick(event) {
      var target = event.target;
      var clickedInsideMenu = mobileMenu.contains(target);
      var clickedHamburger = hamburgerBtn === target || hamburgerBtn.contains(target);

      if (!clickedInsideMenu && !clickedHamburger) {
        closeMenu();
      }
    }

    function openMenu() {
      if (isOpen()) {
        return;
      }

      mobileMenu.classList.add('is-open');
      hamburgerBtn.classList.add('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      mobileMenu.setAttribute('aria-hidden', 'false');

      if (overlay) {
        overlay.classList.add('is-visible');
      }

      document.addEventListener('keydown', handleKeydown);
      document.addEventListener('click', handleOutsideClick);
    }

    function closeMenu() {
      if (!isOpen()) {
        return;
      }

      mobileMenu.classList.remove('is-open');
      hamburgerBtn.classList.remove('is-active');
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');

      if (overlay) {
        overlay.classList.remove('is-visible');
      }

      document.removeEventListener('keydown', handleKeydown);
      document.removeEventListener('click', handleOutsideClick);
    }

    function toggleMenu() {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    }

    hamburgerBtn.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');

    hamburgerBtn.addEventListener('click', function (event) {
      event.stopPropagation();
      toggleMenu();
    });

    if (overlay) {
      overlay.addEventListener('click', function () {
        closeMenu();
      });
    }

    var links = mobileMenu.querySelectorAll(linkSelector);
    links.forEach(function (link) {
      link.addEventListener('click', function () {
        closeMenu();
      });
    });

    return {
      openMenu: openMenu,
      closeMenu: closeMenu,
      toggleMenu: toggleMenu,
      isOpen: isOpen
    };
  }

  return { initMobileNav: initMobileNav };
}));
