import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import PaneHeader from './PaneHeader';

describe('PaneHeader', () => {
  it('renders title correctly', () => {
    render(<PaneHeader title="File Explorer" />);
    expect(screen.getByText('FILE EXPLORER')).toBeInTheDocument();
  });

  it('renders with icon when provided', () => {
    render(
      <PaneHeader 
        title="Editor" 
        icon={<span data-testid="test-icon">📝</span>}
      />
    );
    
    expect(screen.getByTestId('test-icon')).toBeInTheDocument();
    expect(screen.getByText('EDITOR')).toBeInTheDocument();
  });

  it('renders with actions when provided', () => {
    render(
      <PaneHeader 
        title="Navigator" 
        actions={<button data-testid="action-button">Action</button>}
      />
    );
    
    expect(screen.getByTestId('action-button')).toBeInTheDocument();
  });

  it('renders without optional props', () => {
    render(<PaneHeader title="Simple Header" />);
    expect(screen.getByText('SIMPLE HEADER')).toBeInTheDocument();
  });

  it('has sticky positioning class', () => {
    const { container } = render(<PaneHeader title="Test" />);
    const header = container.firstChild as HTMLElement;
    expect(header.classList.contains('sticky')).toBe(true);
  });
});
