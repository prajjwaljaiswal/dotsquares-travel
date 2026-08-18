import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Tabs, TabItem } from '../Tabs';

describe('Tabs', () => {
  const tabs: TabItem[] = [
    { id: 'a', label: 'Tab A', content: <div>Content A</div> },
    { id: 'b', label: 'Tab B', content: <div>Content B</div> },
    { id: 'c', label: 'Tab C', content: <div>Content C</div> },
  ];

  it('renders the default tab content', () => {
    render(<Tabs tabs={tabs} defaultTabId="b" />);
    expect(screen.getByText('Content B')).toBeInTheDocument();
    expect(screen.queryByText('Content A')).not.toBeInTheDocument();
  });

  it('falls back to the first tab when no default is provided', () => {
    render(<Tabs tabs={tabs} />);
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('switches tab content on click', () => {
    render(<Tabs tabs={tabs} />);
    fireEvent.click(screen.getByRole('tab', { name: 'Tab C' }));
    expect(screen.getByText('Content C')).toBeInTheDocument();
    expect(screen.queryByText('Content A')).not.toBeInTheDocument();
  });

  it('navigates tabs using arrow keys', () => {
    render(<Tabs tabs={tabs} />);
    const firstTab = screen.getByRole('tab', { name: 'Tab A' });
    firstTab.focus();
    fireEvent.keyDown(firstTab, { key: 'ArrowRight' });
    expect(screen.getByText('Content B')).toBeInTheDocument();
  });

  it('wraps around when navigating past the last tab', () => {
    render(<Tabs tabs={tabs} defaultTabId="c" />);
    const lastTab = screen.getByRole('tab', { name: 'Tab C' });
    lastTab.focus();
    fireEvent.keyDown(lastTab, { key: 'ArrowRight' });
    expect(screen.getByText('Content A')).toBeInTheDocument();
  });

  it('renders nothing when no tabs are provided', () => {
    const { container } = render(<Tabs tabs={[]} />);
    expect(container.firstChild).toBeNull();
  });
});
