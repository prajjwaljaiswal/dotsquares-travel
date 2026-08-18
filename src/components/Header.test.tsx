import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Header from './Header'

describe('Header', () => {
  it('renders the logo, primary nav links, and CTA button', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    expect(screen.getByText('Dotsquares Travel')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Home' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Explore' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'About' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Contact' })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Book Now' })).toBeInTheDocument()
  })

  it('highlights the active nav link based on the current route', () => {
    render(
      <MemoryRouter initialEntries={['/about']}>
        <Header />
      </MemoryRouter>,
    )

    const aboutLink = screen.getByRole('link', { name: 'About' })
    expect(aboutLink.className).toContain('site-header__nav-link--active')

    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).not.toContain('site-header__nav-link--active')
  })

  it('marks Home as active only on the exact root route', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const homeLink = screen.getByRole('link', { name: 'Home' })
    expect(homeLink.className).toContain('site-header__nav-link--active')
  })

  it('toggles the mobile navigation menu when the button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <Header />
      </MemoryRouter>,
    )

    const toggleButton = screen.getByRole('button', { name: 'Toggle navigation menu' })
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')

    toggleButton.click()
    expect(toggleButton).toHaveAttribute('aria-expanded', 'true')

    toggleButton.click()
    expect(toggleButton).toHaveAttribute('aria-expanded', 'false')
  })
})
