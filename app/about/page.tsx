import React from 'react';
import type { Metadata } from 'next';
import AboutHero from '../components/about/AboutHero';
import OurStory from '../components/about/OurStory';
import MissionValues from '../components/about/MissionValues';
import TeamSection from '../components/about/TeamSection';
import CTASection from '../components/about/CTASection';

export const metadata: Metadata = {
  title: 'About Us | Dotsquares Travel',
  description:
    'Learn more about Dotsquares Travel, our story, mission, values, and the team behind your next adventure.',
};

function AboutPage(): JSX.Element {
  return (
    <main>
      <AboutHero />
      <OurStory />
      <MissionValues />
      <TeamSection />
      <CTASection />
    </main>
  );
}

export default AboutPage;