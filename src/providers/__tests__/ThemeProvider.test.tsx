import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ThemeProvider, useTheme } from '@/providers/ThemeProvider';

function ThemeConsumer() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div>
      <span data-testid="theme-value">{theme}</span>
      <button type="button" onClick={toggleTheme}>
        toggle
      </button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('provides a default light theme and toggles to dark', () => {
    render(
      <ThemeProvider>
        <ThemeConsumer />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme-value')).toHaveTextContent('light');

    fireEvent.click(screen.getByText('toggle'));

    expect(screen.getByTestId('theme-value')).toHaveTextContent('dark');
  });

  it('throws when useTheme is used outside of a ThemeProvider', () => {
    function Broken() {
      useTheme();
      return null;
    }

    const originalError = console.error;
    console.error = jest.fn();

    expect(() => render(<Broken />)).toThrow(
      'useTheme must be used within a ThemeProvider'
    );

    console.error = originalError;
  });
});
