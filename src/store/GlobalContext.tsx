'use client';

import React, { createContext, useContext, useMemo, useState, ReactNode } from 'react';

export interface SelectedPackage {
  id: string;
  name: string;
  price: number;
}

export interface SelectedDestination {
  id: string;
  name: string;
}

interface GlobalState {
  selectedDestination: SelectedDestination | null;
  selectedPackage: SelectedPackage | null;
  setSelectedDestination: (destination: SelectedDestination | null) => void;
  setSelectedPackage: (pkg: SelectedPackage | null) => void;
}

const GlobalContext = createContext<GlobalState | undefined>(undefined);

export function GlobalProvider({ children }: { children: ReactNode }) {
  const [selectedDestination, setSelectedDestination] = useState<SelectedDestination | null>(null);
  const [selectedPackage, setSelectedPackage] = useState<SelectedPackage | null>(null);

  const value = useMemo<GlobalState>(
    () => ({
      selectedDestination,
      selectedPackage,
      setSelectedDestination,
      setSelectedPackage,
    }),
    [selectedDestination, selectedPackage]
  );

  return <GlobalContext.Provider value={value}>{children}</GlobalContext.Provider>;
}

export function useGlobalContext(): GlobalState {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within a GlobalProvider');
  }
  return context;
}
