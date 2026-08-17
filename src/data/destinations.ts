export interface Destination {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  heroImage: {
    desktop: string;
    mobile: string;
    alt: string;
  };
  overview: string;
  highlights: string[];
}

export const destinations: Destination[] = [
  {
    id: "1",
    slug: "bali",
    name: "Bali, Indonesia",
    tagline: "Island of the Gods — where lush jungles meet golden shores",
    heroImage: {
      desktop:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=1920&q=80",
      mobile:
        "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=768&q=80",
      alt: "Aerial view of Bali rice terraces and coastline",
    },
    overview:
      "Bali blends spiritual charm with tropical beauty, offering everything from ancient temples to world-class surf breaks. Whether you're chasing sunrise over Mount Batur or exploring vibrant beach clubs in Seminyak, Bali delivers an unforgettable mix of culture and relaxation.",
    highlights: [
      "Sunrise trek up Mount Batur volcano",
      "Sacred water temple at Tirta Empul",
      "Rice terraces of Tegallalang",
      "World-class surf at Uluwatu",
      "Vibrant nightlife in Seminyak & Canggu",
    ],
  },
  {
    id: "2",
    slug: "santorini",
    name: "Santorini, Greece",
    tagline: "Whitewashed cliffs, endless blue, unforgettable sunsets",
    heroImage: {
      desktop:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=1920&q=80",
      mobile:
        "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?auto=format&fit=crop&w=768&q=80",
      alt: "Whitewashed buildings overlooking the caldera in Santorini",
    },
    overview:
      "Perched along dramatic caldera cliffs, Santorini is famous for its whitewashed villages, blue-domed churches, and some of the most spectacular sunsets on Earth. Beyond the postcard views, the island offers volcanic beaches, ancient ruins, and a thriving wine scene.",
    highlights: [
      "Sunset views from Oia village",
      "Volcanic red and black sand beaches",
      "Ancient ruins of Akrotiri",
      "Wine tasting at cliffside vineyards",
      "Caldera boat tours & hot springs",
    ],
  },
  {
    id: "3",
    slug: "kyoto",
    name: "Kyoto, Japan",
    tagline: "Timeless temples, tranquil gardens, ancient tradition",
    heroImage: {
      desktop:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=1920&q=80",
      mobile:
        "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=768&q=80",
      alt: "Fushimi Inari torii gates in Kyoto",
    },
    overview:
      "Once the imperial capital of Japan, Kyoto is home to over a thousand temples and shrines, immaculate gardens, and preserved geisha districts. It's a city where centuries-old tradition lives seamlessly alongside modern Japanese life.",
    highlights: [
      "Thousands of torii gates at Fushimi Inari",
      "Bamboo groves of Arashiyama",
      "Golden Pavilion at Kinkaku-ji",
      "Geisha spotting in Gion district",
      "Traditional tea ceremonies",
    ],
  },
];

export const getDestinationBySlug = (slug: string): Destination | undefined =>
  destinations.find((destination) => destination.slug === slug);
