import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ThreePaneLayout from './ThreePaneLayout';

describe('ThreePaneLayout', () => {
  it('renders all three panes', () => {
    render(
      <ThreePaneLayout
        leftPane={<div>Left Content</div>}
        centerPane={<div>Center Content</div>}
        rightPane={<div>Right Content</div>}
      />
    );

    expect(screen.getByText('Left Content')).toBeInTheDocument();
    expect(screen.getByText('Center Content')).toBeInTheDocument();
    expect(screen.getByText('Right Content')).toBeInTheDocument();
  });

  it('accepts custom content in each pane', () => {
    render(
      <ThreePaneLayout
        leftPane={<div data-testid="left-pane">File Explorer</div>}
        centerPane={<div data-testid="center-pane">Editor Area</div>}
        rightPane={<div data-testid="right-pane">Navigator</div>}
      />
    );

    expect(screen.getByTestId('left-pane')).toHaveTextContent('File Explorer');
    expect(screen.getByTestId('center-pane')).toHaveTextContent('Editor Area');
    expect(screen.getByTestId('right-pane')).toHaveTextContent('Navigator');
  });

  it('renders resize handles between panes', () => {
    const { container } = render(
      <ThreePaneLayout
        leftPane={<div>Left</div>}
        centerPane={<div>Center</div>}
        rightPane={<div>Right</div>}
      />
    );

    // react-resizable-panels creates resize handles
    const resizeHandles = container.querySelectorAll('[data-panel-resize-handle-id]');
    expect(resizeHandles.length).toBe(2); // Two handles between three panes
  });
});
