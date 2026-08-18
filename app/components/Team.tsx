import { teamMembers } from "@/data/team";

export default function Team() {
  return (
    <section className="bg-white py-16" id="team">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Meet Our Travel Experts
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Our passionate team of travel experts is dedicated to crafting
            unforgettable journeys tailored just for you.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="flex flex-col items-center rounded-lg border border-gray-200 bg-white p-6 text-center shadow-sm transition hover:shadow-md"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="mb-4 h-32 w-32 rounded-full object-cover"
              />
              <h3 className="text-lg font-semibold text-gray-900">
                {member.name}
              </h3>
              <p className="text-sm font-medium text-blue-600">{member.role}</p>
              <p className="mt-2 text-sm text-gray-600">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
