import React, { createContext, useContext, useId, useState } from 'react';
import { cn } from './utils';

interface TabsContextValue {
  activeValue: string;
  setActiveValue: (value: string) => void;
  idPrefix: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

function useTabsContext(componentName: string): TabsContextValue {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error(`${componentName} must be used within a <Tabs> component`);
  }
  return context;
}

export interface TabsProps {
  /** Value of the initially active tab. */
  defaultValue: string;
  /** Called whenever the active tab changes. */
  onChange?: (value: string) => void;
  children?: React.ReactNode;
  className?: string;
}

/**
 * Tabs is an accessible tabbed navigation container. Compose it with
 * TabList, Tab, and TabPanel.
 *
 * @example
 * <Tabs defaultValue="flights">
 *   <TabList aria-label="Search categories">
 *     <Tab value="flights">Flights</Tab>
 *     <Tab value="hotels">Hotels</Tab>
 *   </TabList>
 *   <TabPanel value="flights">Flight results...</TabPanel>
 *   <TabPanel value="hotels">Hotel results...</TabPanel>
 * </Tabs>
 */
export function Tabs({ defaultValue, onChange, children, className }: TabsProps) {
  const [activeValue, setActiveValueState] = useState(defaultValue);
  const idPrefix = useId();

  const setActiveValue = (value: string) => {
    setActiveValueState(value);
    onChange?.(value);
  };

  return (
    <TabsContext.Provider value={{ activeValue, setActiveValue, idPrefix }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export interface TabListProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Accessible label describing the group of tabs. */
  'aria-label': string;
}

export function TabList({ className, children, ...rest }: TabListProps) {
  const { setActiveValue } = useTabsContext('TabList');

  const tabValues = React.Children.toArray(children)
    .filter(React.isValidElement)
    .map((child) => (child as React.ReactElement<TabProps>).props.value);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (!['ArrowRight', 'ArrowLeft', 'Home', 'End'].includes(event.key)) {
      return;
    }
    event.preventDefault();
    const currentIndex = tabValues.findIndex(
      (value) => value === (event.target as HTMLElement).getAttribute('data-value')
    );

    let nextIndex = currentIndex;
    if (event.key === 'ArrowRight') nextIndex = (currentIndex + 1) % tabValues.length;
    if (event.key === 'ArrowLeft') nextIndex = (currentIndex - 1 + tabValues.length) % tabValues.length;
    if (event.key === 'Home') nextIndex = 0;
    if (event.key === 'End') nextIndex = tabValues.length - 1;

    const nextValue = tabValues[nextIndex];
    if (nextValue) {
      setActiveValue(nextValue);
      const nextEl = (event.currentTarget.querySelector(
        `[data-value="${nextValue}"]`
      ) as HTMLElement | null);
      nextEl?.focus();
    }
  };

  return (
    <div
      role="tablist"
      className={cn('ds-tabs__list', className)}
      onKeyDown={handleKeyDown}
      {...rest}
    >
      {children}
    </div>
  );
}

export interface TabProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, 'value'> {
  /** Unique identifier matching a TabPanel's value. */
  value: string;
}

export function Tab({ value, className, children, ...rest }: TabProps) {
  const { activeValue, setActiveValue, idPrefix } = useTabsContext('Tab');
  const isSelected = activeValue === value;

  return (
    <button
      type="button"
      role="tab"
      data-value={value}
      id={`${idPrefix}-tab-${value}`}
      aria-selected={isSelected}
      aria-controls={`${idPrefix}-panel-${value}`}
      tabIndex={isSelected ? 0 : -1}
      className={cn('ds-tabs__tab', 'ds-focusable', className)}
      onClick={() => setActiveValue(value)}
      {...rest}
    >
      {children}
    </button>
  );
}

export interface TabPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Value matching the corresponding Tab. */
  value: string;
}

export function TabPanel({ value, className, children, ...rest }: TabPanelProps) {
  const { activeValue, idPrefix } = useTabsContext('TabPanel');

  if (activeValue !== value) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={`${idPrefix}-panel-${value}`}
      aria-labelledby={`${idPrefix}-tab-${value}`}
      className={cn('ds-tabs__panel', className)}
      tabIndex={0}
      {...rest}
    >
      {children}
    </div>
  );
}
