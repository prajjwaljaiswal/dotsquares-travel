import Image from 'next/image';
import { teamMembers } from '@/data/team';

export default function Team() {
  return (
    <section className="bg-white py-16" aria-labelledby="team-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="team-heading"
            className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Meet Our Travel Experts
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Our passionate team of travel specialists is here to help you plan the trip of a
            lifetime.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <article
              key={member.id}
              className="flex flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="relative h-56 w-full bg-gray-100">
                <Image
                  src={member.photoUrl}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-blue-600">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-gray-600">{member.bio}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
