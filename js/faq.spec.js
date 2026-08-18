/**
 * @jest-environment jsdom
 */
const { toggleFaqItem, initFaqAccordion } = require('./faq');

function buildFaqItem(index) {
  const item = document.createElement('div');
  item.className = 'faq-item';

  const button = document.createElement('button');
  button.className = 'faq-question';
  button.setAttribute('aria-expanded', 'false');
  button.setAttribute('aria-controls', 'faq-answer-' + index);

  const answer = document.createElement('div');
  answer.className = 'faq-answer';
  answer.id = 'faq-answer-' + index;
  answer.innerHTML = '<p>Sample answer text</p>';

  item.appendChild(button);
  item.appendChild(answer);

  return item;
}

describe('toggleFaqItem', () => {
  let item;

  beforeEach(() => {
    item = buildFaqItem(1);
    document.body.appendChild(item);
  });

  afterEach(() => {
    document.body.innerHTML = '';
  });

  it('opens a closed item when toggled', () => {
    toggleFaqItem(item);

    expect(item.classList.contains('open')).toBe(true);
    expect(item.querySelector('.faq-question').getAttribute('aria-expanded')).toBe('true');
  });

  it('closes an open item when toggled again', () => {
    toggleFaqItem(item);
    toggleFaqItem(item);

    expect(item.classList.contains('open')).toBe(false);
    expect(item.querySelector('.faq-question').getAttribute('aria-expanded')).toBe('false');
  });

  it('forces the item closed when forceClose is true', () => {
    toggleFaqItem(item);
    toggleFaqItem(item, true);

    expect(item.classList.contains('open')).toBe(false);
    expect(item.querySelector('.faq-question').getAttribute('aria-expanded')).toBe('false');
  });

  it('does nothing when item is null', () => {
    expect(() => toggleFaqItem(null)).not.toThrow();
  });
});

describe('initFaqAccordion', () => {
  it('wires click handlers that independently toggle multiple items', () => {
    const root = document.createElement('div');
    root.id = 'faq-accordion';

    const item1 = buildFaqItem(1);
    const item2 = buildFaqItem(2);

    root.appendChild(item1);
    root.appendChild(item2);
    document.body.appendChild(root);

    initFaqAccordion(root);

    const button1 = item1.querySelector('.faq-question');
    const button2 = item2.querySelector('.faq-question');

    button1.click();

    expect(item1.classList.contains('open')).toBe(true);
    expect(item2.classList.contains('open')).toBe(false);

    button2.click();

    expect(item1.classList.contains('open')).toBe(true);
    expect(item2.classList.contains('open')).toBe(true);

    button1.click();

    expect(item1.classList.contains('open')).toBe(false);
    expect(item2.classList.contains('open')).toBe(true);
  });

  it('does nothing when root is null', () => {
    expect(() => initFaqAccordion(null)).not.toThrow();
  });
});
