import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import PopularDestinations from './PopularDestinations'
import { destinations } from '../data/destinations'

function renderWithRouter() {
  render(
    <BrowserRouter>
      <PopularDestinations />
    </BrowserRouter>
  )
}

describe('PopularDestinations', () => {
  it('renders a card for each of the 7 demo destinations', () => {
    renderWithRouter()
    const cards = screen.getAllByTestId('destination-card')
    expect(cards).toHaveLength(7)
    expect(destinations).toHaveLength(7)
  })

  it('renders destination name, image, and teaser for every card', () => {
    renderWithRouter()
    destinations.forEach((destination) => {
      expect(screen.getByText(destination.name)).toBeInTheDocument()
      expect(screen.getByText(destination.teaser)).toBeInTheDocument()
      expect(screen.getByAltText(destination.name)).toBeInTheDocument()
    })
  })

  it('links each card to the correct destination detail page', () => {
    renderWithRouter()
    destinations.forEach((destination) => {
      const link = screen.getByRole('link', { name: new RegExp(destination.name) })
      expect(link).toHaveAttribute('href', `/destinations/${destination.id}`)
    })
  })
})
