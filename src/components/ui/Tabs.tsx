import React, { useId, useState, type KeyboardEvent } from 'react';

export interface TabItem {
  id: string;
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  items: TabItem[];
  defaultTabId?: string;
  onChange?: (tabId: string) => void;
  className?: string;
}

/**
 * Tabs
 *
 * An accessible tabs component implementing the WAI-ARIA tabs pattern with
 * roving tabindex and arrow-key/Home/End keyboard navigation.
 *
 * @example
 * <Tabs
 *   items={[
 *     { id: 'overview', label: 'Overview', content: <p>Overview</p> },
 *     { id: 'usage', label: 'Usage', content: <p>Usage</p> },
 *   ]}
 *   defaultTabId="overview"
 * />
 */
export const Tabs: React.FC<TabsProps> = ({ items, defaultTabId, onChange, className = '' }) => {
  const [activeId, setActiveId] = useState<string>(defaultTabId ?? items[0]?.id);
  const baseId = useId();

  const selectTab = (id: string) => {
    setActiveId(id);
    onChange?.(id);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    const enabledItems = items.filter((item) => !item.disabled);
    const currentIndex = enabledItems.findIndex((item) => item.id === items[index].id);
    let nextIndex = currentIndex;

    if (e.key === 'ArrowRight') nextIndex = (currentIndex + 1) % enabledItems.length;
    else if (e.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + enabledItems.length) % enabledItems.length;
    else if (e.key === 'Home') nextIndex = 0;
    else if (e.key === 'End') nextIndex = enabledItems.length - 1;
    else return;

    e.preventDefault();
    const nextTab = enabledItems[nextIndex];
    if (nextTab) {
      selectTab(nextTab.id);
      document.getElementById(`${baseId}-tab-${nextTab.id}`)?.focus();
    }
  };

  return (
    <div className={className}>
      <div role="tablist" aria-orientation="horizontal" className="flex border-b border-gray-200">
        {items.map((item, index) => (
          <button
            key={item.id}
            id={`${baseId}-tab-${item.id}`}
            role="tab"
            type="button"
            aria-selected={activeId === item.id}
            aria-controls={`${baseId}-panel-${item.id}`}
            tabIndex={activeId === item.id ? 0 : -1}
            disabled={item.disabled}
            onClick={() => selectTab(item.id)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            className={`px-4 py-2 text-sm font-medium border-b-2 -mb-px transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-40 disabled:cursor-not-allowed ${
              activeId === item.id
                ? 'border-blue-600 text-blue-600'
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
      {items.map((item) => (
        <div
          key={item.id}
          id={`${baseId}-panel-${item.id}`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${item.id}`}
          hidden={activeId !== item.id}
          className="pt-4"
        >
          {activeId === item.id && item.content}
        </div>
      ))}
    </div>
  );
};

export default Tabs;
