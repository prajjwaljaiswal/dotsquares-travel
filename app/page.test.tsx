import { render, screen } from '@testing-library/react';
import HomePage from './page';

describe('HomePage', () => {
  it('renders all homepage sections in the correct order', () => {
    render(<HomePage />);

    const sections = [
      'section-header',
      'section-hero',
      'section-featured-destinations',
      'section-testimonials',
      'section-newsletter',
      'section-footer'
    ];

    const renderedElements = sections.map((testId) => screen.getByTestId(testId));

    renderedElements.forEach((element) => {
      expect(element).toBeInTheDocument();
    });

    const main = screen.getByRole('main');
    const allChildTestIds = Array.from(main.querySelectorAll('[data-testid]')).map((el) =>
      el.getAttribute('data-testid')
    );

    expect(allChildTestIds).toEqual(sections);
  });

  it('renders the primary hero heading', () => {
    render(<HomePage />);
    expect(screen.getByRole('heading', { level: 1, name: /discover your next adventure/i })).toBeInTheDocument();
  });
});
