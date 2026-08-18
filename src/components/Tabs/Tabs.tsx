import React, { useRef, useState, KeyboardEvent } from 'react';
import styles from './Tabs.module.css';

export interface TabItem {
  id: string;
  label: string;
  icon?: React.ReactNode;
  content: React.ReactNode;
}

export interface TabsProps {
  tabs: TabItem[];
  defaultTabId?: string;
  ariaLabel?: string;
}

export const Tabs: React.FC<TabsProps> = ({ tabs, defaultTabId, ariaLabel = 'Tabs' }) => {
  const [activeTabId, setActiveTabId] = useState<string>(defaultTabId ?? tabs[0]?.id ?? '');
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});

  const activeIndex = tabs.findIndex((tab) => tab.id === activeTabId);

  const focusTab = (index: number) => {
    const tab = tabs[index];
    if (!tab) return;
    setActiveTabId(tab.id);
    tabRefs.current[tab.id]?.focus();
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        focusTab((activeIndex + 1) % tabs.length);
        break;
      case 'ArrowLeft':
        event.preventDefault();
        focusTab((activeIndex - 1 + tabs.length) % tabs.length);
        break;
      case 'Home':
        event.preventDefault();
        focusTab(0);
        break;
      case 'End':
        event.preventDefault();
        focusTab(tabs.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <div className={styles.tabsWrapper}>
      <div className={styles.tabList} role="tablist" aria-label={ariaLabel}>
        {tabs.map((tab) => {
          const isActive = tab.id === activeTabId;
          return (
            <button
              key={tab.id}
              ref={(el) => {
                tabRefs.current[tab.id] = el;
              }}
              role="tab"
              id={`tab-${tab.id}`}
              aria-selected={isActive}
              aria-controls={`tabpanel-${tab.id}`}
              tabIndex={isActive ? 0 : -1}
              className={`${styles.tabButton} ${isActive ? styles.tabButtonActive : ''}`}
              onClick={() => setActiveTabId(tab.id)}
              onKeyDown={handleKeyDown}
              type="button"
            >
              {tab.icon && <span className={styles.tabIcon}>{tab.icon}</span>}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
      {tabs.map((tab) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`tabpanel-${tab.id}`}
          aria-labelledby={`tab-${tab.id}`}
          hidden={tab.id !== activeTabId}
          className={styles.tabPanel}
        >
          {tab.id === activeTabId ? tab.content : null}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
