import { describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { usePackage } from './usePackage';

function TestComponent() {
  const { pkg, loading, error } = usePackage();
  if (loading) return <div>loading</div>;
  if (error) return <div>{error}</div>;
  return <div>{pkg?.title}</div>;
}

describe('usePackage', () => {
  it('loads a package by route param', async () => {
    render(
      <MemoryRouter initialEntries={['/packages/bali-adventure']}>
        <Routes>
          <Route path="/packages/:packageId" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    expect(screen.getByText('loading')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('Bali Adventure Escape')).toBeInTheDocument();
    });
  });

  it('returns an error when the package does not exist', async () => {
    render(
      <MemoryRouter initialEntries={['/packages/unknown-package']}>
        <Routes>
          <Route path="/packages/:packageId" element={<TestComponent />} />
        </Routes>
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/not found/i)).toBeInTheDocument();
    });
  });
});
