import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import ExplorePage from './ExplorePage'

describe('ExplorePage', () => {
  it('renders a summary based on query params', () => {
    render(
      <MemoryRouter
        initialEntries={[
          '/explore?destination=Bali&checkIn=2024-08-01&checkOut=2024-08-10&travellers=3&packageType=luxury',
        ]}
      >
        <ExplorePage />
      </MemoryRouter>,
    )

    expect(screen.getByTestId('search-summary')).toBeInTheDocument()
    expect(screen.getByText('Bali')).toBeInTheDocument()
    expect(screen.getByText(/check-in: 2024-08-01/i)).toBeInTheDocument()
    expect(screen.getByText(/luxury/i)).toBeInTheDocument()
  })

  it('shows a fallback message when no search params exist', () => {
    render(
      <MemoryRouter initialEntries={['/explore']}>
        <ExplorePage />
      </MemoryRouter>,
    )

    expect(
      screen.getByText(/start your search from the homepage/i),
    ).toBeInTheDocument()
  })
})
