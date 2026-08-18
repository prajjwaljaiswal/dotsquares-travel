export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Sarah Mitchell",
    role: "Founder & Lead Travel Consultant",
    bio: "With over 15 years exploring 60+ countries, Sarah crafts bespoke itineraries that turn dream trips into reality.",
    photo: "https://randomuser.me/api/portraits/women/45.jpg",
  },
  {
    id: "2",
    name: "James Carter",
    role: "Senior Travel Expert, Asia & Pacific",
    bio: "James lived in Southeast Asia for a decade and specialises in immersive, off-the-beaten-path adventures.",
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: "3",
    name: "Amara Osei",
    role: "Travel Expert, Africa & Middle East",
    bio: "Amara designs unforgettable safaris and cultural journeys, drawing on her deep local knowledge and connections.",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    id: "4",
    name: "Lucas Fernandez",
    role: "Travel Expert, Europe & Americas",
    bio: "Lucas is passionate about slow travel and helps clients discover authentic experiences across two continents.",
    photo: "https://randomuser.me/api/portraits/men/76.jpg",
  },
  {
    id: "5",
    name: "Priya Nair",
    role: "Customer Experience Manager",
    bio: "Priya ensures every journey runs smoothly, providing round-the-clock support from booking to touchdown.",
    photo: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];
