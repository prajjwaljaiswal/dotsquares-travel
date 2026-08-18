import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import HeroBanner from './HeroBanner'

describe('HeroBanner', () => {
  it('renders branded messaging', () => {
    render(
      <MemoryRouter>
        <HeroBanner />
      </MemoryRouter>,
    )

    expect(screen.getByText('DotSquares Travel')).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /discover your next unforgettable destination/i }),
    ).toBeInTheDocument()
  })

  it('renders the search widget within the hero', () => {
    render(
      <MemoryRouter>
        <HeroBanner />
      </MemoryRouter>,
    )

    expect(screen.getByLabelText(/travel search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument()
  })
})
