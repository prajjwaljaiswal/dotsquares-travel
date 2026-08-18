import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import Testimonials from './Testimonials'
import { testimonials } from '../../data/testimonials'

describe('Testimonials', () => {
  it('renders the section heading', () => {
    render(<Testimonials />)
    expect(screen.getByText('What Our Travelers Say')).toBeInTheDocument()
  })

  it('renders a card for every testimonial with name and quote', () => {
    render(<Testimonials />)
    testimonials.forEach((testimonial) => {
      expect(screen.getByText(testimonial.name)).toBeInTheDocument()
      expect(
        screen.getByText(`\u201C${testimonial.quote}\u201D`)
      ).toBeInTheDocument()
    })
  })
})
