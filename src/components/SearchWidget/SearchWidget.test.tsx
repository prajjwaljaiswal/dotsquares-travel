import { render, screen, fireEvent } from '@testing-library/react'
import { MemoryRouter, Routes, Route } from 'react-router-dom'
import SearchWidget from './SearchWidget'

function renderWithRouter() {
  return render(
    <MemoryRouter initialEntries={['/']}>
      <Routes>
        <Route path="/" element={<SearchWidget />} />
        <Route path="/explore" element={<div data-testid="explore-page">Explore</div>} />
      </Routes>
    </MemoryRouter>,
  )
}

describe('SearchWidget', () => {
  it('renders all required fields', () => {
    renderWithRouter()

    expect(screen.getByLabelText(/destination/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check-in/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/check-out/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/travellers/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/package type/i)).toBeInTheDocument()
  })

  it('shows a validation error when destination is missing', () => {
    renderWithRouter()

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/please enter a destination/i)
  })

  it('navigates to /explore with query params on valid submit', () => {
    renderWithRouter()

    fireEvent.change(screen.getByLabelText(/destination/i), {
      target: { value: 'Bali' },
    })
    fireEvent.change(screen.getByLabelText(/check-in/i), {
      target: { value: '2024-08-01' },
    })
    fireEvent.change(screen.getByLabelText(/check-out/i), {
      target: { value: '2024-08-10' },
    })
    fireEvent.change(screen.getByLabelText(/travellers/i), {
      target: { value: '3' },
    })
    fireEvent.change(screen.getByLabelText(/package type/i), {
      target: { value: 'luxury' },
    })

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByTestId('explore-page')).toBeInTheDocument()
  })

  it('shows an error when check-out is before check-in', () => {
    renderWithRouter()

    fireEvent.change(screen.getByLabelText(/destination/i), {
      target: { value: 'Bali' },
    })
    fireEvent.change(screen.getByLabelText(/check-in/i), {
      target: { value: '2024-08-10' },
    })
    fireEvent.change(screen.getByLabelText(/check-out/i), {
      target: { value: '2024-08-01' },
    })

    fireEvent.click(screen.getByRole('button', { name: /search/i }))

    expect(screen.getByRole('alert')).toHaveTextContent(/check-out date must be after check-in date/i)
  })
})
