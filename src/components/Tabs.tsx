import React, { useState, KeyboardEvent } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  ariaLabel?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId, ariaLabel }) => {
  const initialId =
    defaultTabId && tabs.some((tab) => tab.id === defaultTabId) ? defaultTabId : tabs[0]?.id;
  const [activeTabId, setActiveTabId] = useState<string | undefined>(initialId);

  if (tabs.length === 0) {
    return null;
  }

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);
  const activeTab = tabs.find((tab) => tab.id === activeTabId) || tabs[0];

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (activeIndex === -1) {
      return;
    }

    let nextIndex = activeIndex;

    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      nextIndex = (activeIndex + 1) % tabs.length;
    } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      nextIndex = (activeIndex - 1 + tabs.length) % tabs.length;
    } else if (event.key === 'Home') {
      nextIndex = 0;
    } else if (event.key === 'End') {
      nextIndex = tabs.length - 1;
    } else {
      return;
    }

    event.preventDefault();
    setActiveTabId(tabs[nextIndex].id);
  };

  return (
    <div className="package-tabs" data-testid="package-tabs">
      <div
        role="tablist"
        aria-label={ariaLabel || 'Package details tabs'}
        className="package-tabs__list"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '16px' }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab.id;
          return (
            <button
              key={tab.id}
              id={`tab-${tab.id}`}
              role="tab"
              type="button"
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`package-tabs__tab${isActive ? ' package-tabs__tab--active' : ''}`}
              style={{
                padding: '8px 16px',
                borderRadius: '6px',
                border: '1px solid #ccc',
                background: isActive ? '#1a73e8' : '#fff',
                color: isActive ? '#fff' : '#333',
                cursor: 'pointer',
              }}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={handleKeyDown}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div
        role="tabpanel"
        id={`tabpanel-${activeTab.id}`}
        aria-labelledby={`tab-${activeTab.id}`}
        className="package-tabs__panel"
        tabIndex={0}
      >
        {activeTab.content}
      </div>
    </div>
  );
};

export default Tabs;
