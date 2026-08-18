/**
 * StatsCounter
 * Animates numeric counters within the Company Stats & Trust Indicators section.
 * - Uses IntersectionObserver to trigger the count-up animation only when visible.
 * - Respects prefers-reduced-motion by jumping straight to the final value.
 * - Exposed via CommonJS export for unit testing, and auto-initializes in the browser.
 */
class StatsCounter {
  constructor(root = typeof document !== 'undefined' ? document : null) {
    this.root = root;
    this.counters = this.root ? Array.from(this.root.querySelectorAll('[data-counter]')) : [];
    this.animated = new Set();
    this.reduceMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    this.init();
  }

  init() {
    if (!this.counters.length) return;

    if (this.reduceMotion || typeof IntersectionObserver === 'undefined') {
      this.counters.forEach((el) => this.setFinalValue(el));
      return;
    }

    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.animated.has(entry.target)) {
            this.animateCounter(entry.target);
            this.animated.add(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    this.counters.forEach((el) => this.observer.observe(el));
  }

  parseTarget(el) {
    const value = parseInt(el.getAttribute('data-counter'), 10);
    return Number.isNaN(value) ? 0 : value;
  }

  formatValue(value, el) {
    const suffix = el.getAttribute('data-suffix') || '';
    const prefix = el.getAttribute('data-prefix') || '';
    return `${prefix}${value.toLocaleString()}${suffix}`;
  }

  setFinalValue(el) {
    const target = this.parseTarget(el);
    el.textContent = this.formatValue(target, el);
  }

  animateCounter(el) {
    const target = this.parseTarget(el);
    const duration = parseInt(el.getAttribute('data-duration'), 10) || 1800;
    const start = 0;
    const startTime =
      typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();

    const step = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const currentValue = Math.floor(start + (target - start) * eased);
      el.textContent = this.formatValue(currentValue, el);

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = this.formatValue(target, el);
      }
    };

    requestAnimationFrame(step);
  }
}

if (typeof document !== 'undefined') {
  document.addEventListener('DOMContentLoaded', () => {
    new StatsCounter(document);
  });
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = StatsCounter;
}
