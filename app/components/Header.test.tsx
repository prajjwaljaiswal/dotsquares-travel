import { render, screen, fireEvent, within } from '@testing-library/react';
import Header from './Header';

describe('Header mobile menu', () => {
  it('renders a hamburger toggle button that is closed by default', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /open menu/i });
    expect(toggleButton).toBeInTheDocument();
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false');
  });

  it('opens the mobile menu when hamburger button is clicked', () => {
    render(<Header />);
    const toggleButton = screen.getByRole('button', { name: /open menu/i });
    fireEvent.click(toggleButton);

    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true'
    );
    expect(screen.getByRole('dialog', { name: /mobile navigation/i })).toBeInTheDocument();
  });

  it('renders all primary navigation links and the CTA inside the mobile menu', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    const mobileNav = screen.getByLabelText('Mobile navigation links');
    ['Home', 'Destinations', 'Packages', 'About', 'Contact', 'Book Now'].forEach((label) => {
      expect(within(mobileNav).getByText(label)).toBeInTheDocument();
    });
  });

  it('closes the menu when a nav link inside the mobile menu is clicked', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));

    const mobileNav = screen.getByLabelText('Mobile navigation links');
    fireEvent.click(within(mobileNav).getByText('Home'));

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('closes the menu when the dedicated close button is clicked', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    fireEvent.click(screen.getByRole('button', { name: /close mobile menu/i }));

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('closes the menu when clicking outside of it', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    expect(screen.getByRole('button', { name: /close menu/i })).toHaveAttribute(
      'aria-expanded',
      'true'
    );

    fireEvent.mouseDown(document.body);

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });

  it('closes the menu when the Escape key is pressed', () => {
    render(<Header />);
    fireEvent.click(screen.getByRole('button', { name: /open menu/i }));
    fireEvent.keyDown(document, { key: 'Escape' });

    expect(screen.getByRole('button', { name: /open menu/i })).toHaveAttribute(
      'aria-expanded',
      'false'
    );
  });
});
