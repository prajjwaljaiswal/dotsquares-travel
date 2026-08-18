import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import StarRating from './StarRating'

describe('StarRating', () => {
  it('renders the correct accessible label', () => {
    render(<StarRating rating={4} />)
    expect(
      screen.getByRole('img', { name: 'Rated 4 out of 5 stars' })
    ).toBeInTheDocument()
  })

  it('renders five stars by default', () => {
    render(<StarRating rating={3} />)
    const container = screen.getByRole('img')
    expect(container.children).toHaveLength(5)
  })
})
