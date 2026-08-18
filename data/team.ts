export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photoUrl: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 'team-1',
    name: 'Ava Thompson',
    role: 'Lead Travel Expert',
    bio: 'Ava has spent over a decade curating bespoke itineraries across Southeast Asia and loves helping travellers discover hidden gems off the beaten path.',
    photoUrl: '/images/team/ava-thompson.jpg',
  },
  {
    id: 'team-2',
    name: 'Marcus Reid',
    role: 'Destination Specialist, Europe',
    bio: 'Marcus is a former tour guide with deep knowledge of European culture and cuisine, dedicated to crafting unforgettable city and countryside escapes.',
    photoUrl: '/images/team/marcus-reid.jpg',
  },
  {
    id: 'team-3',
    name: 'Priya Nair',
    role: 'Adventure Travel Consultant',
    bio: 'Priya specialises in trekking and adventure packages, having personally hiked across the Himalayas and the Andes to test every route she recommends.',
    photoUrl: '/images/team/priya-nair.jpg',
  },
  {
    id: 'team-4',
    name: 'Daniel Osei',
    role: 'Luxury Travel Advisor',
    bio: 'Daniel builds premium, tailor-made experiences for discerning travellers, with a focus on exclusive resorts and private tours worldwide.',
    photoUrl: '/images/team/daniel-osei.jpg',
  },
  {
    id: 'team-5',
    name: 'Sofia Martinez',
    role: 'Family Travel Planner',
    bio: 'Sofia designs stress-free, kid-friendly holidays for families, drawing on her own experience travelling with three children across four continents.',
    photoUrl: '/images/team/sofia-martinez.jpg',
  },
  {
    id: 'team-6',
    name: 'Liam Chen',
    role: 'Customer Experience Manager',
    bio: 'Liam ensures every traveller receives seamless support before, during, and after their trip, turning good holidays into unforgettable ones.',
    photoUrl: '/images/team/liam-chen.jpg',
  },
];
