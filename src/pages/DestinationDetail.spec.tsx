import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter, Route, Routes } from 'react-router-dom'
import DestinationDetail from './DestinationDetail'
import { destinations } from '../data/destinations'

function renderAt(path: string) {
  render(
    <MemoryRouter initialEntries={[path]}>
      <Routes>
        <Route path="/destinations/:id" element={<DestinationDetail />} />
      </Routes>
    </MemoryRouter>
  )
}

describe('DestinationDetail', () => {
  it('renders the matching destination details for a valid id', () => {
    const destination = destinations[0]
    renderAt(`/destinations/${destination.id}`)

    expect(screen.getByText(destination.name)).toBeInTheDocument()
    expect(screen.getByText(destination.teaser)).toBeInTheDocument()
    expect(screen.getByText(destination.description)).toBeInTheDocument()
  })

  it('renders a not found message for an unknown id', () => {
    renderAt('/destinations/unknown-place')
    expect(screen.getByText('Destination not found')).toBeInTheDocument()
  })
})
