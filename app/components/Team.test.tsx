import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Team from './Team';
import { teamMembers } from '@/data/team';

describe('Team', () => {
  it('renders the section heading', () => {
    render(<Team />);
    expect(screen.getByRole('heading', { name: /meet our travel experts/i })).toBeInTheDocument();
  });

  it('renders at least 4 demo team members', () => {
    render(<Team />);
    expect(teamMembers.length).toBeGreaterThanOrEqual(4);

    teamMembers.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.role)).toBeInTheDocument();
      expect(screen.getByText(member.bio)).toBeInTheDocument();
      expect(screen.getByAltText(member.name)).toBeInTheDocument();
    });
  });
});
