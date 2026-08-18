'use client';

import type { ReactNode } from 'react';
import { ThemeProvider } from './ThemeProvider';
import { AppStateProvider } from './AppStateProvider';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  return (
    <ThemeProvider>
      <AppStateProvider>{children}</AppStateProvider>
    </ThemeProvider>
  );
}
