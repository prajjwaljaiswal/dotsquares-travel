import { render, screen } from '@testing-library/react';
import PrivacyPolicyPage from './page';

describe('PrivacyPolicyPage', () => {
  it('renders the page heading', () => {
    render(<PrivacyPolicyPage />);
    expect(
      screen.getByRole('heading', { level: 1, name: /privacy policy/i })
    ).toBeInTheDocument();
  });

  it('renders placeholder legal text sections', () => {
    render(<PrivacyPolicyPage />);
    expect(screen.getByText(/information we collect/i)).toBeInTheDocument();
    expect(screen.getByText(/contact us/i)).toBeInTheDocument();
    expect(screen.getByText(/data security/i)).toBeInTheDocument();
  });
});
