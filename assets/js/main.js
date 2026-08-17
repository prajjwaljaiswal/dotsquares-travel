// Progressive enhancement: fade-in animation for feature cards and steps
// as they enter the viewport. Falls back gracefully if IntersectionObserver
// is unsupported (elements remain fully visible by default via CSS).

document.addEventListener('DOMContentLoaded', function () {
  var animatedElements = document.querySelectorAll(
    '.feature-card, .step'
  );

  if (!('IntersectionObserver' in window) || animatedElements.length === 0) {
    return;
  }

  animatedElements.forEach(function (el) {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  });

  var observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  animatedElements.forEach(function (el) {
    observer.observe(el);
  });
});
