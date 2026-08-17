import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Inspiration from './Inspiration';

describe('Inspiration', () => {
  it('renders without crashing', () => {
    const { container } = render(
      <MemoryRouter>
        <Inspiration />
      </MemoryRouter>
    );
    expect(container.firstChild).not.toBeNull();
  });
});
