import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

describe('Footer', () => {
  test('renders navigation, social, contact and legal links', () => {
    render(<Footer />);

    expect(screen.getByTestId('global-footer')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Destinations' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Facebook' })).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: 'hello@dotsquarestravel.com' })
    ).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Privacy Policy' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Terms of Service' })).toBeInTheDocument();
  });

  test('shows an error message for an invalid email on newsletter signup', () => {
    render(<Footer />);

    const input = screen.getByLabelText('Email address');
    const button = screen.getByRole('button', { name: 'Subscribe' });

    fireEvent.change(input, { target: { value: 'not-an-email' } });
    fireEvent.click(button);

    expect(
      screen.getByText('Please enter a valid email address.')
    ).toBeInTheDocument();
  });

  test('shows a success message for a valid email on newsletter signup', () => {
    render(<Footer />);

    const input = screen.getByLabelText('Email address');
    const button = screen.getByRole('button', { name: 'Subscribe' });

    fireEvent.change(input, { target: { value: 'traveler@example.com' } });
    fireEvent.click(button);

    expect(
      screen.getByText("Thanks for subscribing! You'll hear from us soon.")
    ).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  test('shows an error message when email is empty', () => {
    render(<Footer />);

    const button = screen.getByRole('button', { name: 'Subscribe' });
    fireEvent.click(button);

    expect(
      screen.getByText('Please enter your email address.')
    ).toBeInTheDocument();
  });
});
