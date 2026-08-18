import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import AboutPage from './page';

describe('AboutPage', () => {
  it('renders the main About Us heading', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /about dotsquares travel/i })
    ).toBeInTheDocument();
  });

  it('renders the Our Story section', () => {
    render(<AboutPage />);
    expect(screen.getByRole('heading', { level: 2, name: /our story/i })).toBeInTheDocument();
  });

  it('renders the Mission & Vision section with both cards', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 2, name: /our mission & vision/i })
    ).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /our mission/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 3, name: /our vision/i })).toBeInTheDocument();
  });

  it('renders the Travel Philosophy section with pillars', () => {
    render(<AboutPage />);
    expect(
      screen.getByRole('heading', { level: 2, name: /our travel philosophy/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /authentic experiences/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /responsible travel/i })
    ).toBeInTheDocument();
    expect(
      screen.getByRole('heading', { level: 3, name: /personalized care/i })
    ).toBeInTheDocument();
  });
});
