import { render, screen, fireEvent, within } from '@testing-library/react';
import Testimonials from '@/components/Testimonials';
import { testimonials } from '@/data/testimonials';

describe('Testimonials section', () => {
  it('renders the first testimonial with name, rating and quote', () => {
    render(<Testimonials />);
    const first = testimonials[0];
    const activeCard = screen.getByTestId('active-testimonial');

    expect(within(activeCard).getByText(first.name)).toBeInTheDocument();
    expect(
      within(activeCard).getByText((content) => content.includes(first.quote))
    ).toBeInTheDocument();
    expect(
      within(activeCard).getByRole('img', {
        name: `Rated ${first.rating} out of 5 stars`
      })
    ).toBeInTheDocument();
  });

  it('shows the next testimonial when the next button is clicked', () => {
    render(<Testimonials />);
    const second = testimonials[1];

    fireEvent.click(screen.getByRole('button', { name: 'Next testimonial' }));

    const activeCard = screen.getByTestId('active-testimonial');
    expect(within(activeCard).getByText(second.name)).toBeInTheDocument();
  });

  it('shows the previous testimonial when the previous button is clicked', () => {
    render(<Testimonials />);
    const last = testimonials[testimonials.length - 1];

    fireEvent.click(screen.getByRole('button', { name: 'Previous testimonial' }));

    const activeCard = screen.getByTestId('active-testimonial');
    expect(within(activeCard).getByText(last.name)).toBeInTheDocument();
  });

  it('renders every testimonial in the supporting grid', () => {
    render(<Testimonials />);

    testimonials.forEach((testimonial) => {
      expect(screen.getAllByText(testimonial.name).length).toBeGreaterThanOrEqual(1);
    });
  });
});
