import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Inspiration from './Inspiration'
import { inspirationOffers } from '../../data/inspiration'

describe('Inspiration', () => {
  it('renders the section heading', () => {
    render(<Inspiration />)
    expect(screen.getByText('Travel Inspiration')).toBeInTheDocument()
  })

  it('renders a card with a CTA button for every offer', () => {
    render(<Inspiration />)
    inspirationOffers.forEach((offer) => {
      expect(screen.getByText(offer.title)).toBeInTheDocument()
      expect(screen.getByText(offer.ctaLabel)).toBeInTheDocument()
    })
  })
})
