import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Testimonials from './Testimonials';

describe('Testimonials', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Testimonials />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
