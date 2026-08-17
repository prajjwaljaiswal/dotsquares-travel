import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Header from './Header.jsx';

function renderHeader(initialPath = '/') {
  return render(
    <MemoryRouter initialEntries={[initialPath]}>
      <Header />
    </MemoryRouter>
  );
}

describe('Header', () => {
  it('renders the logo, all primary nav links, and the CTA button', () => {
    renderHeader();

    expect(screen.getByText('Dotsquares Travel')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument();
  });

  it('highlights the active nav link based on the current route', () => {
    renderHeader('/about');

    const aboutLink = screen.getByRole('link', { name: 'About' });
    const homeLink = screen.getByRole('link', { name: 'Home' });

    expect(aboutLink.className).toContain('site-header__nav-link--active');
    expect(homeLink.className).not.toContain('site-header__nav-link--active');
  });

  it('toggles the mobile navigation menu when the hamburger button is clicked', async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('closes the mobile menu when a nav link is clicked', async () => {
    const user = userEvent.setup();
    renderHeader();

    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' });
    await user.click(toggleButton);
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true');

    const exploreLink = screen.getByRole('link', { name: 'Explore' });
    await user.click(exploreLink);

    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });
});
