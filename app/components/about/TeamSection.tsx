import React from 'react';

interface TeamMember {
  name: string;
  role: string;
}

const team: TeamMember[] = [
  { name: 'Ava Thompson', role: 'Founder & CEO' },
  { name: 'Liam Carter', role: 'Head of Operations' },
  { name: 'Sofia Rossi', role: 'Lead Travel Curator' },
  { name: 'Noah Kim', role: 'Customer Experience Lead' },
];

function TeamSection(): JSX.Element {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-center text-2xl font-semibold text-gray-900 sm:text-3xl">
          Meet the Team
        </h2>
        <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <div key={member.name} className="text-center">
              <div className="mx-auto h-24 w-24 rounded-full bg-gray-200" />
              <h3 className="mt-4 text-base font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm text-gray-500">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default TeamSection;
