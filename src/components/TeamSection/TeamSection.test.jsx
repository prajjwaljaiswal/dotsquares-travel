import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import TeamSection from './TeamSection';
import teamMembers from '../../data/teamMembers';

describe('TeamSection', () => {
  it('renders the section heading', () => {
    render(<TeamSection />);
    expect(
      screen.getByRole('heading', { name: /meet our travel experts/i })
    ).toBeInTheDocument();
  });

  it('renders at least 4 demo team member cards', () => {
    render(<TeamSection />);
    const nameHeadings = screen.getAllByRole('heading', { level: 3 });
    expect(nameHeadings.length).toBeGreaterThanOrEqual(4);
  });

  it('renders each team member with name, role, and bio', () => {
    render(<TeamSection />);
    teamMembers.forEach((member) => {
      expect(screen.getByText(member.name)).toBeInTheDocument();
      expect(screen.getByText(member.role)).toBeInTheDocument();
      expect(screen.getByText(member.bio)).toBeInTheDocument();
    });
  });

  it('renders a photo with accessible alt text for each member', () => {
    render(<TeamSection />);
    teamMembers.forEach((member) => {
      expect(
        screen.getByAltText(`Portrait of ${member.name}`)
      ).toBeInTheDocument();
    });
  });
});
