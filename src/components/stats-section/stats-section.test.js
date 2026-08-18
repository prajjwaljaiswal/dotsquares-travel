/**
 * Unit tests for StatsCounter (company stats & trust indicators section).
 */
const StatsCounter = require('./stats-section');

describe('StatsCounter', () => {
  let originalIntersectionObserver;
  let originalMatchMedia;
  let originalRAF;

  beforeEach(() => {
    document.body.innerHTML = `
      <div class="stat-card__number" data-counter="150" data-suffix="+">0</div>
      <div class="stat-card__number" data-counter="25000" data-suffix="+">0</div>
      <div class="stat-card__number" data-counter="98" data-suffix="%">0</div>
    `;

    originalIntersectionObserver = global.IntersectionObserver;
    originalMatchMedia = window.matchMedia;
    originalRAF = global.requestAnimationFrame;
  });

  afterEach(() => {
    global.IntersectionObserver = originalIntersectionObserver;
    window.matchMedia = originalMatchMedia;
    global.requestAnimationFrame = originalRAF;
    jest.restoreAllMocks();
  });

  test('finds all elements with data-counter attribute', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true });
    const instance = new StatsCounter(document);
    expect(instance.counters).toHaveLength(3);
  });

  test('sets final values immediately when prefers-reduced-motion is enabled', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true });

    new StatsCounter(document);

    const elements = document.querySelectorAll('[data-counter]');
    expect(elements[0].textContent).toBe('150+');
    expect(elements[1].textContent).toBe('25,000+');
    expect(elements[2].textContent).toBe('98%');
  });

  test('sets final values immediately when IntersectionObserver is unavailable', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: false });
    global.IntersectionObserver = undefined;

    new StatsCounter(document);

    const elements = document.querySelectorAll('[data-counter]');
    expect(elements[0].textContent).toBe('150+');
    expect(elements[1].textContent).toBe('25,000+');
    expect(elements[2].textContent).toBe('98%');
  });

  test('observes counters via IntersectionObserver when motion is allowed', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: false });

    const observeMock = jest.fn();
    global.IntersectionObserver = jest.fn().mockImplementation((callback) => ({
      observe: observeMock,
      unobserve: jest.fn(),
      disconnect: jest.fn(),
      callback,
    }));

    const instance = new StatsCounter(document);

    expect(global.IntersectionObserver).toHaveBeenCalled();
    expect(observeMock).toHaveBeenCalledTimes(3);
    expect(instance.observer).toBeDefined();
  });

  test('animateCounter progresses towards the target value using requestAnimationFrame', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: false });
    global.IntersectionObserver = jest.fn().mockImplementation(() => ({
      observe: jest.fn(),
      unobserve: jest.fn(),
      disconnect: jest.fn(),
    }));

    let capturedStep;
    let now = 0;
    global.requestAnimationFrame = jest.fn((cb) => {
      capturedStep = cb;
      return 1;
    });

    const performanceSpy = jest.spyOn(performance, 'now').mockImplementation(() => now);

    const instance = new StatsCounter(document);
    const el = document.querySelector('[data-counter="150"]');

    instance.animateCounter(el);
    expect(capturedStep).toBeDefined();

    now = 1800; // simulate full duration elapsed
    capturedStep(now);

    expect(el.textContent).toBe('150+');
    performanceSpy.mockRestore();
  });

  test('formatValue applies prefix and suffix with locale formatting', () => {
    window.matchMedia = jest.fn().mockReturnValue({ matches: true });
    const instance = new StatsCounter(document);
    const el = document.createElement('span');
    el.setAttribute('data-prefix', '$');
    el.setAttribute('data-suffix', 'k');

    expect(instance.formatValue(1200, el)).toBe('$1,200k');
  });
});
