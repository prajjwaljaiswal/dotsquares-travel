document.addEventListener('DOMContentLoaded', function () {
  if (typeof window !== 'undefined' && window.MobileNav && typeof window.MobileNav.initMobileNav === 'function') {
    window.MobileNav.initMobileNav();
  }
});
