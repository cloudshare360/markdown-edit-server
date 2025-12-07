import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ThemeProvider, { useTheme } from './ThemeProvider';

function TestComponent() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div>
      <div data-testid="theme">{theme}</div>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

describe('ThemeProvider', () => {
  it('provides default dark theme', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(screen.getByTestId('theme')).toHaveTextContent('dark');
  });

  it('toggles between dark and light themes', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    const themeDisplay = screen.getByTestId('theme');
    const toggleButton = screen.getByText('Toggle Theme');

    expect(themeDisplay).toHaveTextContent('dark');

    fireEvent.click(toggleButton);
    expect(themeDisplay).toHaveTextContent('light');

    fireEvent.click(toggleButton);
    expect(themeDisplay).toHaveTextContent('dark');
  });

  it('applies theme class to document root', () => {
    render(
      <ThemeProvider>
        <TestComponent />
      </ThemeProvider>
    );

    expect(document.documentElement.classList.contains('dark')).toBe(true);
    
    fireEvent.click(screen.getByText('Toggle Theme'));
    expect(document.documentElement.classList.contains('light')).toBe(true);
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });
});
