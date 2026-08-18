import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Tabs, { TabItem } from './Tabs';

const tabs: TabItem[] = [
  { id: 'a', label: 'Tab A', content: <div>Content A</div> },
  { id: 'b', label: 'Tab B', content: <div>Content B</div> },
  { id: 'c', label: 'Tab C', content: <div>Content C</div> },
];

describe('Tabs', () => {
  it('renders all tab buttons', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByRole('tab', { name: 'Tab A' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab B' })).toBeInTheDocument();
    expect(screen.getByRole('tab', { name: 'Tab C' })).toBeInTheDocument();
  });

  it('shows the first tab content by default', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Content A')).toBeVisible();
  });

  it('switches content when a tab is clicked', () => {
    render(<Tabs tabs={tabs} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Tab B' }));
    expect(screen.getByText('Content B')).toBeVisible();
  });

  it('marks the active tab with aria-selected', () => {
    render(<Tabs tabs={tabs} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Tab C' }));
    expect(screen.getByRole('tab', { name: 'Tab C' })).toHaveAttribute('aria-selected', 'true');
    expect(screen.getByRole('tab', { name: 'Tab A' })).toHaveAttribute('aria-selected', 'false');
  });

  it('navigates tabs with arrow keys', () => {
    render(<Tabs tabs={tabs} />);
    const firstTab = screen.getByRole('tab', { name: 'Tab A' });
    firstTab.focus();
    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
    expect(screen.getByRole('tab', { name: 'Tab B' })).toHaveAttribute('aria-selected', 'true');
  });
});
